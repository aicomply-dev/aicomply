"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Ban,
  Loader2,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { createAssessment, saveAssessmentAnswer, completeAssessment } from "@/lib/actions/assessments"

// Quick risk classification questions (simplified set)
const QUICK_QUESTIONS = [
  {
    id: "prohibited-social-scoring",
    question: "Does this AI system evaluate or classify people based on social behavior or personal traits to determine access to services?",
    category: "prohibited",
    helpText: "Social scoring systems that affect people's rights are prohibited under Article 5.",
  },
  {
    id: "prohibited-manipulation",
    question: "Does this AI system use subliminal techniques or exploit vulnerabilities to manipulate behavior in harmful ways?",
    category: "prohibited",
    helpText: "AI that manipulates people beyond their consciousness is prohibited.",
  },
  {
    id: "high-risk-biometric",
    question: "Does this AI system use biometric identification or categorization of people?",
    category: "high-risk",
    helpText: "Biometric systems are generally high-risk under Annex III.",
  },
  {
    id: "high-risk-critical-infrastructure",
    question: "Is this AI system used in critical infrastructure (energy, transport, water, healthcare)?",
    category: "high-risk",
    helpText: "AI in critical infrastructure is high-risk under Annex III.",
  },
  {
    id: "high-risk-employment",
    question: "Is this AI system used for recruitment, HR decisions, or worker management?",
    category: "high-risk",
    helpText: "Employment-related AI is high-risk under Annex III.",
  },
  {
    id: "limited-risk-chatbot",
    question: "Does this AI system interact directly with people (chatbot, virtual assistant)?",
    category: "limited-risk",
    helpText: "Interactive AI requires transparency obligations under Article 50.",
  },
  {
    id: "limited-risk-deepfake",
    question: "Does this AI system generate or manipulate images, audio, or video content?",
    category: "limited-risk",
    helpText: "AI-generated content requires disclosure under Article 50.",
  },
]

const riskLevels = {
  prohibited: {
    title: "Prohibited",
    description: "This AI system falls under prohibited practices and cannot be deployed in the EU.",
    color: "destructive",
    icon: Ban,
  },
  high: {
    title: "High Risk",
    description: "This AI system is classified as high-risk and must comply with Articles 9-15.",
    color: "amber",
    icon: ShieldAlert,
  },
  limited: {
    title: "Limited Risk",
    description: "This AI system has transparency obligations under Article 50.",
    color: "blue",
    icon: Shield,
  },
  minimal: {
    title: "Minimal Risk",
    description: "This AI system has minimal regulatory requirements. Voluntary codes of conduct apply.",
    color: "green",
    icon: ShieldCheck,
  },
}

interface QuickAssessmentModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  systemId: string
  systemName: string
  onComplete?: (riskLevel: string) => void
}

export function QuickAssessmentModal({
  open,
  onOpenChange,
  systemId,
  systemName,
  onComplete,
}: QuickAssessmentModalProps) {
  const router = useRouter()
  const [step, setStep] = useState<"intro" | "questions" | "result">("intro")
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [result, setResult] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [assessmentId, setAssessmentId] = useState<string | null>(null)

  const progress = ((currentQuestion + 1) / QUICK_QUESTIONS.length) * 100

  const startAssessment = async () => {
    setLoading(true)
    try {
      const response = await createAssessment({
        type: "risk-classification",
        title: `Quick Risk Classification - ${systemName}`,
        aiSystemId: systemId,
      })

      if (response.success && response.id) {
        setAssessmentId(response.id)
        setStep("questions")
      }
    } catch (error) {
      console.error("Failed to start assessment:", error)
    }
    setLoading(false)
  }

  const handleAnswer = async (value: string) => {
    const questionId = QUICK_QUESTIONS[currentQuestion].id
    setAnswers({ ...answers, [questionId]: value })

    if (assessmentId) {
      await saveAssessmentAnswer(assessmentId, questionId, value)
    }
  }

  const calculateResult = () => {
    let prohibitedCount = 0
    let highRiskCount = 0
    let limitedRiskCount = 0

    for (const q of QUICK_QUESTIONS) {
      const answer = answers[q.id]
      if (answer === "yes") {
        if (q.category === "prohibited") prohibitedCount++
        else if (q.category === "high-risk") highRiskCount++
        else if (q.category === "limited-risk") limitedRiskCount++
      }
    }

    if (prohibitedCount > 0) return "prohibited"
    if (highRiskCount >= 1) return "high"
    if (limitedRiskCount > 0) return "limited"
    return "minimal"
  }

  const handleNext = async () => {
    const currentAnswer = answers[QUICK_QUESTIONS[currentQuestion].id]
    const question = QUICK_QUESTIONS[currentQuestion]

    // Early exit for prohibited
    if (currentAnswer === "yes" && question.category === "prohibited") {
      await finishAssessment("prohibited")
      return
    }

    if (currentQuestion < QUICK_QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      const finalResult = calculateResult()
      await finishAssessment(finalResult)
    }
  }

  const finishAssessment = async (riskLevel: string) => {
    setLoading(true)
    setResult(riskLevel)

    if (assessmentId) {
      await completeAssessment(assessmentId, riskLevel)
    }

    setStep("result")
    setLoading(false)
    router.refresh()
    onComplete?.(riskLevel)
  }

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleClose = () => {
    // Reset state
    setStep("intro")
    setCurrentQuestion(0)
    setAnswers({})
    setResult(null)
    setAssessmentId(null)
    onOpenChange(false)
  }

  const currentQ = QUICK_QUESTIONS[currentQuestion]
  const resultData = result ? riskLevels[result as keyof typeof riskLevels] : null

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-lg">
        {step === "intro" && (
          <>
            <DialogHeader>
              <DialogTitle>Quick Risk Classification</DialogTitle>
              <DialogDescription>
                Answer {QUICK_QUESTIONS.length} quick questions to determine the risk level of{" "}
                <span className="font-medium text-foreground">{systemName}</span>
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="grid grid-cols-2 gap-3">
                {Object.entries(riskLevels).map(([key, level]) => {
                  const Icon = level.icon
                  return (
                    <Card key={key} className="border-border/50">
                      <CardContent className="p-3">
                        <div className="flex items-center gap-2">
                          <Icon className={cn(
                            "h-4 w-4",
                            key === "prohibited" && "text-destructive",
                            key === "high" && "text-amber-500",
                            key === "limited" && "text-blue-500",
                            key === "minimal" && "text-green-500",
                          )} />
                          <span className="text-sm font-medium">{level.title}</span>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
              <Button onClick={startAssessment} disabled={loading} className="w-full">
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Starting...
                  </>
                ) : (
                  <>
                    Start Assessment
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          </>
        )}

        {step === "questions" && currentQ && (
          <>
            <DialogHeader>
              <div className="flex items-center justify-between mb-2">
                <Badge variant="outline">
                  Question {currentQuestion + 1} of {QUICK_QUESTIONS.length}
                </Badge>
                <Badge variant={
                  currentQ.category === "prohibited" ? "destructive" :
                  currentQ.category === "high-risk" ? "default" : "secondary"
                }>
                  {currentQ.category.replace("-", " ")}
                </Badge>
              </div>
              <Progress value={progress} className="h-2" />
            </DialogHeader>
            <div className="space-y-4 py-4">
              <p className="text-base font-medium">{currentQ.question}</p>
              <p className="text-sm text-muted-foreground">{currentQ.helpText}</p>
              
              <RadioGroup
                value={answers[currentQ.id] || ""}
                onValueChange={handleAnswer}
                className="space-y-3"
              >
                <div className="flex items-center space-x-3 rounded-lg border p-3 hover:bg-muted/50 cursor-pointer">
                  <RadioGroupItem value="yes" id="yes" />
                  <Label htmlFor="yes" className="flex-1 cursor-pointer">Yes</Label>
                </div>
                <div className="flex items-center space-x-3 rounded-lg border p-3 hover:bg-muted/50 cursor-pointer">
                  <RadioGroupItem value="no" id="no" />
                  <Label htmlFor="no" className="flex-1 cursor-pointer">No</Label>
                </div>
                <div className="flex items-center space-x-3 rounded-lg border p-3 hover:bg-muted/50 cursor-pointer">
                  <RadioGroupItem value="unsure" id="unsure" />
                  <Label htmlFor="unsure" className="flex-1 cursor-pointer">Not sure</Label>
                </div>
              </RadioGroup>

              <div className="flex justify-between pt-2">
                <Button
                  variant="outline"
                  onClick={handleBack}
                  disabled={currentQuestion === 0}
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </Button>
                <Button
                  onClick={handleNext}
                  disabled={!answers[currentQ.id] || loading}
                >
                  {loading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : currentQuestion === QUICK_QUESTIONS.length - 1 ? (
                    <>
                      Finish
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
            </div>
          </>
        )}

        {step === "result" && resultData && (
          <>
            <DialogHeader className="text-center">
              <div className={cn(
                "mx-auto flex h-16 w-16 items-center justify-center rounded-2xl mb-4",
                result === "prohibited" && "bg-destructive text-destructive-foreground",
                result === "high" && "bg-amber-500 text-white",
                result === "limited" && "bg-blue-500 text-white",
                result === "minimal" && "bg-green-500 text-white",
              )}>
                <resultData.icon className="h-8 w-8" />
              </div>
              <DialogTitle className="text-2xl">{resultData.title} Risk</DialogTitle>
              <DialogDescription className="text-base">
                {resultData.description}
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="rounded-lg border bg-muted/30 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="font-medium">Assessment Saved</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  The risk level for <span className="font-medium">{systemName}</span> has been updated to{" "}
                  <span className="font-medium capitalize">{result}</span>.
                </p>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" onClick={handleClose} className="flex-1">
                  Close
                </Button>
                <Button onClick={() => router.push(`/assess/inventory/${systemId}`)} className="flex-1">
                  View System
                </Button>
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
