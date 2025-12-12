"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Target,
  AlertTriangle,
  Shield,
  CheckCircle2,
  XCircle,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  FileText,
  Info,
  Zap,
  Eye,
  Loader2,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { createAssessment, saveAssessmentAnswer, completeAssessment } from "@/lib/actions/assessments"

interface AiSystem {
  id: string
  name: string
  riskLevel: string | null
}

interface ClassificationWizardProps {
  aiSystems: AiSystem[]
  isAuthenticated: boolean
  questions: {
    id: string
    question: string
    category: string
    weight: number
  }[]
  preSelectedSystemId?: string
  demoMode?: boolean
}

const riskLevels = [
  {
    level: "prohibited",
    title: "Prohibited",
    description: "AI practices that are banned under Article 5",
    color: "destructive",
    icon: XCircle,
    examples: ["Social scoring", "Subliminal manipulation", "Real-time biometric ID in public"],
  },
  {
    level: "high",
    title: "High Risk",
    description: "AI systems requiring strict compliance measures",
    color: "chart-3",
    icon: AlertTriangle,
    examples: ["Biometric identification", "Critical infrastructure", "Employment decisions"],
  },
  {
    level: "limited",
    title: "Limited Risk",
    description: "AI systems with transparency obligations",
    color: "primary",
    icon: Eye,
    examples: ["Chatbots", "Emotion recognition", "Deepfake generators"],
  },
  {
    level: "minimal",
    title: "Minimal Risk",
    description: "AI systems with no specific requirements",
    color: "accent",
    icon: CheckCircle2,
    examples: ["Spam filters", "Video game AI", "Recommendation systems"],
  },
]

export function ClassificationWizard({
  aiSystems,
  isAuthenticated,
  questions,
  preSelectedSystemId,
  demoMode = false,
}: ClassificationWizardProps) {
  const [selectedSystem, setSelectedSystem] = useState<string | null>(preSelectedSystemId || null)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [result, setResult] = useState<string | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [assessmentId, setAssessmentId] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [saving, setSaving] = useState(false)
  const router = useRouter()

  const progress = ((currentQuestion + 1) / questions.length) * 100

  const handleAnswer = async (value: string) => {
    const questionId = questions[currentQuestion].id
    setAnswers({ ...answers, [questionId]: value })

    // Save to database if we have an assessment
    if (assessmentId) {
      setSaving(true)
      await saveAssessmentAnswer(assessmentId, questionId, value)
      setSaving(false)
    }
  }

  const startAssessment = async () => {
    setLoading(true)
    const selectedSystemName = aiSystems.find(s => s.id === selectedSystem)?.name || "General"

    // Only try to save to database if authenticated
    if (isAuthenticated) {
      const response = await createAssessment({
        type: "risk-classification",
        title: `Risk Classification - ${selectedSystemName}`,
        aiSystemId: selectedSystem || undefined,
      })

      if (response.success && response.id) {
        setAssessmentId(response.id)
      }
    } else {
      // Use a temporary ID for unauthenticated users
      setAssessmentId(`temp-${Date.now()}`)
    }
    setLoading(false)
  }

  const handleNext = async () => {
    const currentAnswer = answers[questions[currentQuestion].id]
    const question = questions[currentQuestion]

    // Check if this answer triggers a result
    if (currentAnswer === "yes") {
      if (question.category === "prohibited") {
        await finishAssessment("prohibited")
        return
      }
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      // Calculate final result based on answers
      let prohibitedCount = 0
      let highRiskCount = 0
      let limitedRiskCount = 0

      for (const q of questions) {
        const answer = answers[q.id]
        if (answer === "yes") {
          if (q.category === "prohibited") prohibitedCount++
          else if (q.category === "high-risk") highRiskCount++
          else if (q.category === "limited-risk") limitedRiskCount++
        }
      }

      let finalResult = "minimal"
      if (prohibitedCount > 0) finalResult = "prohibited"
      else if (highRiskCount >= 2) finalResult = "high"
      else if (highRiskCount === 1 || limitedRiskCount > 0) finalResult = "limited"

      await finishAssessment(finalResult)
    }
  }

  const finishAssessment = async (riskLevel: string) => {
    setLoading(true)
    setResult(riskLevel)

    if (assessmentId && !assessmentId.startsWith("temp-")) {
      // Pass the calculated risk level to ensure it's saved correctly
      await completeAssessment(assessmentId, riskLevel)
    }

    setShowResult(true)
    setLoading(false)
    router.refresh()
  }

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleReset = () => {
    setSelectedSystem(null)
    setCurrentQuestion(0)
    setAnswers({})
    setResult(null)
    setShowResult(false)
    setAssessmentId(null)
  }

  const currentQ = questions[currentQuestion]
  const resultData = riskLevels.find((r) => r.level === result)

  // Step 1: Select AI System (optional)
  if (!assessmentId && !showResult) {
    return (
      <div className="space-y-6">
        <Card className="border-primary/20 shadow-xl">
          <CardHeader>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 mb-4">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-xl">Start Risk Classification</CardTitle>
            <CardDescription>
              Optionally select an AI system to classify, or proceed with a general assessment.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {aiSystems.length > 0 && (
              <div className="space-y-2">
                <Label>Select AI System (Optional)</Label>
                <Select value={selectedSystem || ""} onValueChange={setSelectedSystem}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an AI system to classify" />
                  </SelectTrigger>
                  <SelectContent>
                    {aiSystems.map((system) => (
                      <SelectItem key={system.id} value={system.id}>
                        {system.name}
                        {system.riskLevel && system.riskLevel !== "unclassified" && (
                          <span className="ml-2 text-muted-foreground">
                            (Currently: {system.riskLevel})
                          </span>
                        )}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <p className="text-sm text-muted-foreground">
                  Selecting a system will update its risk classification upon completion.
                </p>
              </div>
            )}

            <Button
              onClick={startAssessment}
              disabled={loading}
              className="w-full bg-primary shadow-lg shadow-primary/25"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Starting...
                </>
              ) : (
                <>
                  Begin Assessment
                  <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>

            {!isAuthenticated && (
              <p className="text-center text-sm text-muted-foreground">
                <Link href="/auth/login" className="text-primary hover:underline">
                  Sign in
                </Link>{" "}
                to save your assessment results.
              </p>
            )}
          </CardContent>
        </Card>

        {/* Risk Levels Reference */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {riskLevels.map((level) => {
            const Icon = level.icon
            return (
              <Card key={level.level} className="border-border/50">
                <CardContent className="p-4">
                  <div
                    className={cn(
                      "flex h-10 w-10 items-center justify-center rounded-lg mb-3",
                      level.color === "destructive" && "bg-destructive/10 text-destructive",
                      level.color === "chart-3" && "bg-chart-3/10 text-chart-3",
                      level.color === "primary" && "bg-primary/10 text-primary",
                      level.color === "accent" && "bg-accent/10 text-accent",
                    )}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold">{level.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{level.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    )
  }

  // Show results
  if (showResult && resultData) {
    return (
      <>
        <Card
          className={cn(
            "border-2 shadow-xl",
            result === "prohibited" && "border-destructive/50",
            result === "high" && "border-chart-3/50",
            result === "limited" && "border-primary/50",
            result === "minimal" && "border-accent/50",
          )}
        >
          <CardHeader className="text-center pb-4">
            <div
              className={cn(
                "mx-auto flex h-20 w-20 items-center justify-center rounded-2xl mb-4",
                result === "prohibited" && "bg-destructive text-destructive-foreground",
                result === "high" && "bg-chart-3 text-foreground",
                result === "limited" && "bg-primary text-primary-foreground",
                result === "minimal" && "bg-accent text-accent-foreground",
              )}
            >
              <resultData.icon className="h-10 w-10" />
            </div>
            <Badge
              className={cn(
                "mx-auto mb-2",
                result === "prohibited" && "bg-destructive",
                result === "high" && "bg-chart-3 text-foreground",
                result === "limited" && "bg-primary",
                result === "minimal" && "bg-accent text-accent-foreground",
              )}
            >
              Classification Result
            </Badge>
            <CardTitle className="text-3xl">{resultData.title}</CardTitle>
            <CardDescription className="text-base">{resultData.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="rounded-xl bg-muted/50 p-4">
              <h4 className="font-semibold mb-2">What this means:</h4>
              {result === "prohibited" && (
                <p className="text-sm text-muted-foreground">
                  Your AI system falls under prohibited practices defined in Article 5 of the EU AI Act.
                  These AI systems are not allowed to be placed on the market or used in the EU.
                </p>
              )}
              {result === "high" && (
                <p className="text-sm text-muted-foreground">
                  Your AI system is classified as high-risk and must comply with strict requirements
                  including risk management, data governance, technical documentation, human oversight,
                  and conformity assessment.
                </p>
              )}
              {result === "limited" && (
                <p className="text-sm text-muted-foreground">
                  Your AI system has transparency obligations. Users must be informed that they are
                  interacting with an AI system, or that content has been AI-generated or manipulated.
                </p>
              )}
              {result === "minimal" && (
                <p className="text-sm text-muted-foreground">
                  Your AI system is classified as minimal risk and is not subject to specific regulatory
                  requirements under the EU AI Act. However, voluntary codes of conduct are encouraged.
                </p>
              )}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button variant="outline" onClick={handleReset} className="flex-1 bg-transparent">
                <RotateCcw className="mr-2 h-4 w-4" />
                Start Over
              </Button>
              <Button className="flex-1 bg-primary shadow-lg shadow-primary/25" asChild>
                <Link href="/assess/assessments">
                  <FileText className="mr-2 h-4 w-4" />
                  View All Assessments
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Next Steps */}
        <Card className="mt-6 border-border/50">
          <CardHeader>
            <CardTitle className="text-lg">Recommended Next Steps</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {result === "high" && (
              <>
                <div className="flex items-center gap-3 rounded-lg bg-muted/50 p-3">
                  <Zap className="h-5 w-5 text-primary" />
                  <span className="text-sm">Complete a full gap analysis assessment</span>
                </div>
                <div className="flex items-center gap-3 rounded-lg bg-muted/50 p-3">
                  <FileText className="h-5 w-5 text-primary" />
                  <span className="text-sm">Prepare technical documentation (Article 11)</span>
                </div>
                <div className="flex items-center gap-3 rounded-lg bg-muted/50 p-3">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="text-sm">Implement risk management system (Article 9)</span>
                </div>
              </>
            )}
            {result === "limited" && (
              <>
                <div className="flex items-center gap-3 rounded-lg bg-muted/50 p-3">
                  <Eye className="h-5 w-5 text-primary" />
                  <span className="text-sm">Implement transparency disclosures</span>
                </div>
                <div className="flex items-center gap-3 rounded-lg bg-muted/50 p-3">
                  <FileText className="h-5 w-5 text-primary" />
                  <span className="text-sm">Document user notification procedures</span>
                </div>
              </>
            )}
            {result === "minimal" && (
              <>
                <div className="flex items-center gap-3 rounded-lg bg-muted/50 p-3">
                  <CheckCircle2 className="h-5 w-5 text-accent" />
                  <span className="text-sm">Consider voluntary codes of conduct</span>
                </div>
                <div className="flex items-center gap-3 rounded-lg bg-muted/50 p-3">
                  <FileText className="h-5 w-5 text-accent" />
                  <span className="text-sm">Document your AI system for best practices</span>
                </div>
              </>
            )}
            {result === "prohibited" && (
              <>
                <div className="flex items-center gap-3 rounded-lg bg-destructive/10 p-3">
                  <AlertTriangle className="h-5 w-5 text-destructive" />
                  <span className="text-sm">Consult legal counsel immediately</span>
                </div>
                <div className="flex items-center gap-3 rounded-lg bg-destructive/10 p-3">
                  <XCircle className="h-5 w-5 text-destructive" />
                  <span className="text-sm">Consider discontinuing or modifying the system</span>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </>
    )
  }

  // Question flow
  return (
    <>
      {/* Progress */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-sm mb-2">
          <span className="text-muted-foreground">
            Question {currentQuestion + 1} of {questions.length}
          </span>
          <Badge variant="outline">{currentQ.category}</Badge>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      {/* Question Card */}
      <Card className="border-primary/20 shadow-xl">
        <CardHeader className="pb-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 mb-4">
            <Target className="h-6 w-6 text-primary" />
          </div>
          <CardTitle className="text-xl">{currentQ.question}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <RadioGroup
            value={answers[currentQ.id] || ""}
            onValueChange={handleAnswer}
            className="space-y-3"
          >
            {["yes", "no", "unsure"].map((option) => (
              <div
                key={option}
                className={cn(
                  "flex items-center space-x-3 rounded-xl border p-4 cursor-pointer transition-all",
                  answers[currentQ.id] === option
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/50",
                )}
                onClick={() => handleAnswer(option)}
              >
                <RadioGroupItem value={option} id={option} />
                <Label htmlFor={option} className="flex-1 cursor-pointer font-medium capitalize">
                  {option === "unsure" ? "Not sure" : option.charAt(0).toUpperCase() + option.slice(1)}
                </Label>
                {option === "yes" && currentQ.category === "prohibited" && (
                  <Badge variant="destructive" className="text-xs">
                    Prohibited
                  </Badge>
                )}
                {option === "yes" && currentQ.category === "high-risk" && (
                  <Badge className="bg-chart-3 text-foreground text-xs">High Risk</Badge>
                )}
              </div>
            ))}
          </RadioGroup>

          <div className="flex items-center justify-between pt-4 border-t border-border/50">
            <Button
              variant="outline"
              onClick={handleBack}
              disabled={currentQuestion === 0}
              className="bg-transparent"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
            <Button
              onClick={handleNext}
              disabled={!answers[currentQ.id] || loading}
              className="bg-primary shadow-lg shadow-primary/25"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  {currentQuestion === questions.length - 1 ? "See Results" : "Next"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Info Box */}
      <Card className="mt-6 border-dashed bg-muted/30">
        <CardContent className="flex items-start gap-3 p-4">
          <Info className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
          <p className="text-sm text-muted-foreground">
            This tool provides a preliminary assessment. For a comprehensive evaluation, consult with
            legal experts familiar with the EU AI Act.
          </p>
        </CardContent>
      </Card>
    </>
  )
}
