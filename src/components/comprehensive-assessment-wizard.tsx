"use client"

import { useState, useMemo } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
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
  Loader2,
  Ban,
  Eye,
  ChevronRight,
  BookOpen,
  AlertCircle,
  HelpCircle,
  Scale,
  ClipboardCheck,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { createAssessment, saveAssessmentAnswer, completeComprehensiveAssessment } from "@/lib/actions/assessments"
import type { AssessmentQuestion, AssessmentSection } from "@/lib/data/assessment-questions"

interface AiSystem {
  id: string
  name: string
  riskLevel: string | null
}

interface ComprehensiveAssessmentWizardProps {
  aiSystems: AiSystem[]
  isAuthenticated: boolean
  sections: AssessmentSection[]
  assessmentType: string
  title: string
  description: string
  preSelectedSystemId?: string
}

const ANSWER_OPTIONS = [
  { value: "yes", label: "Yes", description: "Requirement is fully met", color: "text-green-600" },
  { value: "partial", label: "Partially", description: "Requirement is partially met", color: "text-amber-600" },
  { value: "no", label: "No", description: "Requirement is not met", color: "text-red-600" },
  { value: "na", label: "N/A", description: "Not applicable to this system", color: "text-muted-foreground" },
]

const RISK_RESULTS = {
  prohibited: {
    level: "prohibited",
    title: "Prohibited AI Practice",
    description: "This AI system may fall under prohibited practices defined in Article 5 of the EU AI Act.",
    color: "destructive",
    icon: Ban,
    bgColor: "bg-destructive",
    textColor: "text-destructive",
  },
  "high-risk": {
    level: "high-risk",
    title: "High-Risk AI System",
    description: "This AI system is classified as high-risk and must comply with Articles 9-15 requirements.",
    color: "amber",
    icon: AlertTriangle,
    bgColor: "bg-amber-500",
    textColor: "text-amber-600",
  },
  "limited-risk": {
    level: "limited-risk",
    title: "Limited Risk AI System",
    description: "This AI system has transparency obligations under Article 50.",
    color: "primary",
    icon: Eye,
    bgColor: "bg-primary",
    textColor: "text-primary",
  },
  minimal: {
    level: "minimal",
    title: "Minimal Risk AI System",
    description: "This AI system is not subject to specific regulatory requirements under the EU AI Act.",
    color: "accent",
    icon: CheckCircle2,
    bgColor: "bg-accent",
    textColor: "text-accent",
  },
}

export function ComprehensiveAssessmentWizard({
  aiSystems,
  isAuthenticated,
  sections,
  assessmentType,
  title,
  description,
  preSelectedSystemId,
}: ComprehensiveAssessmentWizardProps) {
  const [selectedSystem, setSelectedSystem] = useState<string | null>(preSelectedSystemId || null)
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, { answer: string; notes: string }>>({})
  const [showResult, setShowResult] = useState(false)
  const [result, setResult] = useState<{
    classification: string
    score: number
    prohibitedTriggers: string[]
    highRiskTriggers: string[]
    limitedRiskTriggers: string[]
    recommendations: string[]
  } | null>(null)
  const [assessmentId, setAssessmentId] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [saving, setSaving] = useState(false)
  const [showNotes, setShowNotes] = useState(false)
  const router = useRouter()

  // Calculate total questions and progress
  const totalQuestions = useMemo(() => {
    return sections.reduce((sum, section) => sum + section.questions.length, 0)
  }, [sections])

  const answeredCount = Object.keys(answers).length

  const currentSection = sections[currentSectionIndex]
  const currentQuestion = currentSection?.questions[currentQuestionIndex]

  // Calculate global question index for progress
  const globalQuestionIndex = useMemo(() => {
    let index = 0
    for (let i = 0; i < currentSectionIndex; i++) {
      index += sections[i].questions.length
    }
    return index + currentQuestionIndex
  }, [sections, currentSectionIndex, currentQuestionIndex])

  const progress = totalQuestions > 0 ? ((globalQuestionIndex + 1) / totalQuestions) * 100 : 0

  const handleAnswer = async (value: string) => {
    if (!currentQuestion) return

    const questionId = currentQuestion.id
    const currentNotes = answers[questionId]?.notes || ""

    setAnswers((prev) => ({
      ...prev,
      [questionId]: { answer: value, notes: currentNotes },
    }))

    // Save to database if we have an assessment
    if (assessmentId && !assessmentId.startsWith("temp-")) {
      setSaving(true)
      await saveAssessmentAnswer(assessmentId, questionId, value, currentNotes)
      setSaving(false)
    }
  }

  const handleNotesChange = (notes: string) => {
    if (!currentQuestion) return

    const questionId = currentQuestion.id
    const currentAnswer = answers[questionId]?.answer || ""

    setAnswers((prev) => ({
      ...prev,
      [questionId]: { answer: currentAnswer, notes },
    }))
  }

  const startAssessment = async () => {
    setLoading(true)
    const selectedSystemName = aiSystems.find((s) => s.id === selectedSystem)?.name || "General"

    if (isAuthenticated) {
      const response = await createAssessment({
        type: assessmentType,
        title: `${title} - ${selectedSystemName}`,
        aiSystemId: selectedSystem || undefined,
      })

      if (response.success && response.id) {
        setAssessmentId(response.id)
      }
    } else {
      setAssessmentId(`temp-${Date.now()}`)
    }
    setLoading(false)
  }

  const handleNext = async () => {
    if (!currentSection || !currentQuestion) return

    // Check if we need to move to next question or section
    if (currentQuestionIndex < currentSection.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else if (currentSectionIndex < sections.length - 1) {
      setCurrentSectionIndex(currentSectionIndex + 1)
      setCurrentQuestionIndex(0)
    } else {
      // Assessment complete
      await finishAssessment()
    }
  }

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
    } else if (currentSectionIndex > 0) {
      setCurrentSectionIndex(currentSectionIndex - 1)
      setCurrentQuestionIndex(sections[currentSectionIndex - 1].questions.length - 1)
    }
  }

  const finishAssessment = async () => {
    setLoading(true)

    if (assessmentId && !assessmentId.startsWith("temp-")) {
      const response = await completeComprehensiveAssessment(assessmentId, assessmentType)
      if (response.success && response.result) {
        setResult(response.result as typeof result)
      }
    } else {
      // Calculate result locally for temp assessments
      const answerMap: Record<string, string> = {}
      for (const [qId, data] of Object.entries(answers)) {
        answerMap[qId] = data.answer
      }

      // Simple local calculation
      const prohibitedTriggers: string[] = []
      const highRiskTriggers: string[] = []
      const limitedRiskTriggers: string[] = []

      for (const section of sections) {
        for (const q of section.questions) {
          if (answerMap[q.id] === "yes" && q.riskTrigger) {
            if (q.riskTrigger === "prohibited") {
              prohibitedTriggers.push(q.question)
            } else if (q.riskTrigger === "high-risk") {
              highRiskTriggers.push(q.question)
            } else if (q.riskTrigger === "limited-risk") {
              limitedRiskTriggers.push(q.question)
            }
          }
        }
      }

      let classification = "minimal"
      let score = 100
      let recommendations: string[] = []

      if (prohibitedTriggers.length > 0) {
        classification = "prohibited"
        score = 0
        recommendations = [
          "CRITICAL: This AI system may fall under prohibited practices.",
          "Consult legal counsel immediately.",
          "Review Article 5 of the EU AI Act.",
        ]
      } else if (highRiskTriggers.length > 0) {
        classification = "high-risk"
        score = 50
        recommendations = [
          "Implement risk management system (Article 9)",
          "Establish data governance (Article 10)",
          "Prepare technical documentation (Article 11)",
          "Implement human oversight (Article 14)",
        ]
      } else if (limitedRiskTriggers.length > 0) {
        classification = "limited-risk"
        score = 75
        recommendations = [
          "Implement transparency disclosures (Article 50)",
          "Ensure users know they're interacting with AI",
        ]
      } else {
        recommendations = [
          "No mandatory requirements apply",
          "Consider voluntary codes of conduct",
        ]
      }

      setResult({
        classification,
        score,
        prohibitedTriggers,
        highRiskTriggers,
        limitedRiskTriggers,
        recommendations,
      })
    }

    setShowResult(true)
    setLoading(false)
    router.refresh()
  }

  const handleReset = () => {
    setSelectedSystem(null)
    setCurrentSectionIndex(0)
    setCurrentQuestionIndex(0)
    setAnswers({})
    setShowResult(false)
    setResult(null)
    setAssessmentId(null)
    setShowNotes(false)
  }

  const jumpToSection = (sectionIndex: number) => {
    setCurrentSectionIndex(sectionIndex)
    setCurrentQuestionIndex(0)
  }

  // Step 1: Select AI System
  if (!assessmentId && !showResult) {
    return (
      <div className="space-y-6">
        <Card className="border-primary/20 shadow-xl">
          <CardHeader>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 mb-4">
              <Scale className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-xl">{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {aiSystems.length > 0 && (
              <div className="space-y-2">
                <Label>Select AI System (Optional)</Label>
                <Select value={selectedSystem || ""} onValueChange={setSelectedSystem}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an AI system to assess" />
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
              </div>
            )}

            {/* Assessment Overview */}
            <div className="rounded-xl bg-muted/50 p-4 space-y-3">
              <h4 className="font-semibold flex items-center gap-2">
                <ClipboardCheck className="h-4 w-4" />
                Assessment Overview
              </h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Sections:</span>
                  <span className="ml-2 font-medium">{sections.length}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Questions:</span>
                  <span className="ml-2 font-medium">{totalQuestions}</span>
                </div>
              </div>
            </div>

            {/* Section List */}
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="sections">
                <AccordionTrigger className="text-sm">
                  View Assessment Sections
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    {sections.map((section, idx) => (
                      <div
                        key={section.id}
                        className="flex items-center justify-between rounded-lg bg-muted/30 p-3"
                      >
                        <div className="flex items-center gap-3">
                          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-medium text-primary">
                            {idx + 1}
                          </span>
                          <div>
                            <p className="text-sm font-medium">{section.title}</p>
                            <p className="text-xs text-muted-foreground">{section.article}</p>
                          </div>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {section.questions.length} questions
                        </Badge>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

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
      </div>
    )
  }

  // Show Results
  if (showResult && result) {
    const resultConfig = RISK_RESULTS[result.classification as keyof typeof RISK_RESULTS] || RISK_RESULTS.minimal
    const ResultIcon = resultConfig.icon

    return (
      <div className="space-y-6">
        <Card
          className={cn(
            "border-2 shadow-xl",
            result.classification === "prohibited" && "border-destructive/50",
            result.classification === "high-risk" && "border-amber-500/50",
            result.classification === "limited-risk" && "border-primary/50",
            result.classification === "minimal" && "border-accent/50"
          )}
        >
          <CardHeader className="text-center pb-4">
            <div
              className={cn(
                "mx-auto flex h-20 w-20 items-center justify-center rounded-2xl mb-4",
                resultConfig.bgColor,
                "text-white"
              )}
            >
              <ResultIcon className="h-10 w-10" />
            </div>
            <Badge className={cn("mx-auto mb-2", resultConfig.bgColor, "text-white")}>
              Classification Result
            </Badge>
            <CardTitle className="text-3xl">{resultConfig.title}</CardTitle>
            <CardDescription className="text-base">{resultConfig.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Score */}
            <div className="rounded-xl bg-muted/50 p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Compliance Score</span>
                <span className={cn("text-2xl font-bold", resultConfig.textColor)}>
                  {result.score}%
                </span>
              </div>
              <Progress value={result.score} className="h-3" />
            </div>

            {/* Summary Stats */}
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="rounded-lg bg-destructive/10 p-3">
                <p className="text-2xl font-bold text-destructive">{result.prohibitedTriggers.length}</p>
                <p className="text-xs text-muted-foreground">Prohibited</p>
              </div>
              <div className="rounded-lg bg-amber-500/10 p-3">
                <p className="text-2xl font-bold text-amber-600">{result.highRiskTriggers.length}</p>
                <p className="text-xs text-muted-foreground">High-Risk</p>
              </div>
              <div className="rounded-lg bg-primary/10 p-3">
                <p className="text-2xl font-bold text-primary">{result.limitedRiskTriggers.length}</p>
                <p className="text-xs text-muted-foreground">Limited Risk</p>
              </div>
            </div>

            {/* Triggers */}
            {result.prohibitedTriggers.length > 0 && (
              <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-4">
                <h4 className="font-semibold text-destructive flex items-center gap-2 mb-3">
                  <Ban className="h-4 w-4" />
                  Prohibited Practice Triggers
                </h4>
                <ul className="space-y-2">
                  {result.prohibitedTriggers.map((trigger, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                      <XCircle className="h-4 w-4 text-destructive shrink-0 mt-0.5" />
                      {trigger}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {result.highRiskTriggers.length > 0 && (
              <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-4">
                <h4 className="font-semibold text-amber-600 flex items-center gap-2 mb-3">
                  <AlertTriangle className="h-4 w-4" />
                  High-Risk Triggers
                </h4>
                <ul className="space-y-2 max-h-48 overflow-y-auto">
                  {result.highRiskTriggers.map((trigger, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                      <AlertCircle className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                      {trigger}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Recommendations */}
            <div className="rounded-xl bg-muted/50 p-4">
              <h4 className="font-semibold mb-3">Recommendations</h4>
              <ul className="space-y-2">
                {result.recommendations.map((rec, idx) => (
                  <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                    <ChevronRight className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    {rec}
                  </li>
                ))}
              </ul>
            </div>

            {/* Actions */}
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

            {result.classification === "high-risk" && (
              <Button variant="outline" className="w-full" asChild>
                <Link href="/assess/classification?type=compliance">
                  <ClipboardCheck className="mr-2 h-4 w-4" />
                  Start High-Risk Compliance Assessment
                </Link>
              </Button>
            )}
          </CardContent>
        </Card>
      </div>
    )
  }

  // Question Flow
  if (!currentSection || !currentQuestion) {
    return <div>Loading...</div>
  }

  const currentAnswer = answers[currentQuestion.id]?.answer || ""
  const currentNotes = answers[currentQuestion.id]?.notes || ""

  return (
    <div className="space-y-6">
      {/* Section Navigation */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        {sections.map((section, idx) => {
          const sectionAnswered = section.questions.filter((q) => answers[q.id]).length
          const isActive = idx === currentSectionIndex
          const isComplete = sectionAnswered === section.questions.length

          return (
            <button
              key={section.id}
              onClick={() => jumpToSection(idx)}
              className={cn(
                "flex items-center gap-2 whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium transition-all",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : isComplete
                  ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              )}
            >
              {isComplete && <CheckCircle2 className="h-3 w-3" />}
              {section.title.replace(" (Article ", " - Art. ").replace(")", "")}
              <span className="opacity-70">
                {sectionAnswered}/{section.questions.length}
              </span>
            </button>
          )
        })}
      </div>

      {/* Progress */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">
            Question {globalQuestionIndex + 1} of {totalQuestions}
          </span>
          <div className="flex items-center gap-2">
            <Badge variant="outline">{currentSection.title}</Badge>
            {saving && <Loader2 className="h-3 w-3 animate-spin text-muted-foreground" />}
          </div>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      {/* Question Card */}
      <Card className="border-primary/20 shadow-xl">
        <CardHeader className="pb-4">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary" className="text-xs">
                  {currentQuestion.article}
                </Badge>
                {currentQuestion.riskTrigger && (
                  <Badge
                    className={cn(
                      "text-xs",
                      currentQuestion.riskTrigger === "prohibited" && "bg-destructive",
                      currentQuestion.riskTrigger === "high-risk" && "bg-amber-500 text-black",
                      currentQuestion.riskTrigger === "limited-risk" && "bg-primary"
                    )}
                  >
                    {currentQuestion.riskTrigger === "prohibited" && "Prohibited"}
                    {currentQuestion.riskTrigger === "high-risk" && "High-Risk"}
                    {currentQuestion.riskTrigger === "limited-risk" && "Limited Risk"}
                  </Badge>
                )}
              </div>
              <CardTitle className="text-lg">{currentQuestion.question}</CardTitle>
              {currentQuestion.description && (
                <CardDescription className="mt-2">{currentQuestion.description}</CardDescription>
              )}
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Answer Options */}
          <RadioGroup value={currentAnswer} onValueChange={handleAnswer} className="space-y-3">
            {ANSWER_OPTIONS.map((option) => (
              <div
                key={option.value}
                className={cn(
                  "flex items-center space-x-3 rounded-xl border p-4 cursor-pointer transition-all",
                  currentAnswer === option.value
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/50"
                )}
                onClick={() => handleAnswer(option.value)}
              >
                <RadioGroupItem value={option.value} id={option.value} />
                <Label htmlFor={option.value} className="flex-1 cursor-pointer">
                  <span className={cn("font-medium", option.color)}>{option.label}</span>
                  <p className="text-xs text-muted-foreground mt-0.5">{option.description}</p>
                </Label>
              </div>
            ))}
          </RadioGroup>

          {/* Guidance */}
          {currentQuestion.guidance && (
            <div className="flex items-start gap-3 rounded-xl bg-blue-50 dark:bg-blue-950/30 p-4">
              <Info className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-blue-900 dark:text-blue-100">Guidance</p>
                <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
                  {currentQuestion.guidance}
                </p>
              </div>
            </div>
          )}

          {/* Evidence Required */}
          {currentQuestion.evidenceRequired && currentQuestion.evidenceRequired.length > 0 && (
            <div className="flex items-start gap-3 rounded-xl bg-muted/50 p-4">
              <FileText className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium">Evidence Required</p>
                <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                  {currentQuestion.evidenceRequired.map((evidence, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-muted-foreground" />
                      {evidence}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Notes Toggle */}
          <div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowNotes(!showNotes)}
              className="text-muted-foreground"
            >
              <BookOpen className="mr-2 h-4 w-4" />
              {showNotes ? "Hide Notes" : "Add Notes"}
            </Button>
            {showNotes && (
              <Textarea
                placeholder="Add notes or evidence references..."
                value={currentNotes}
                onChange={(e) => handleNotesChange(e.target.value)}
                className="mt-2"
                rows={3}
              />
            )}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between pt-4 border-t border-border/50">
            <Button
              variant="outline"
              onClick={handleBack}
              disabled={globalQuestionIndex === 0}
              className="bg-transparent"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
            <Button
              onClick={handleNext}
              disabled={!currentAnswer || loading}
              className="bg-primary shadow-lg shadow-primary/25"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : globalQuestionIndex === totalQuestions - 1 ? (
                <>
                  Complete Assessment
                  <CheckCircle2 className="ml-2 h-4 w-4" />
                </>
              ) : (
                <>
                  Next
                  <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Help Card */}
      <Card className="border-dashed bg-muted/30">
        <CardContent className="flex items-start gap-3 p-4">
          <HelpCircle className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium">Need Help?</p>
            <p className="text-sm text-muted-foreground mt-1">
              This assessment is based on the EU AI Act requirements. For detailed guidance, consult
              the{" "}
              <Link href="/resources/regulation" className="text-primary hover:underline">
                full regulation text
              </Link>{" "}
              or{" "}
              <Link href="/resources/glossary" className="text-primary hover:underline">
                glossary
              </Link>
              .
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
