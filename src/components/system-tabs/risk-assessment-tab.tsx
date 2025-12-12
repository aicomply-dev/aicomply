"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import {
  AlertTriangle,
  Ban,
  Shield,
  Eye,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  RefreshCw,
  Loader2,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { updateAiSystemRiskLevel } from "@/lib/actions/ai-systems"

// Risk classification questions - simplified set
const RISK_QUESTIONS = [
  {
    id: "prohibited-social-scoring",
    question: "Does this AI system evaluate or classify people based on social behavior to determine access to services?",
    category: "prohibited",
    article: "Article 5(1)(c)",
    helpText: "Social scoring systems that affect people's rights are prohibited.",
  },
  {
    id: "prohibited-manipulation",
    question: "Does this AI system use subliminal techniques or exploit vulnerabilities to manipulate behavior?",
    category: "prohibited",
    article: "Article 5(1)(a)",
    helpText: "AI that manipulates people beyond their consciousness is prohibited.",
  },
  {
    id: "high-risk-biometric",
    question: "Does this AI system use biometric identification or categorization of people?",
    category: "high-risk",
    article: "Annex III, 1",
    helpText: "Biometric systems are generally high-risk under Annex III.",
  },
  {
    id: "high-risk-critical-infrastructure",
    question: "Is this AI system used in critical infrastructure (energy, transport, water, healthcare)?",
    category: "high-risk",
    article: "Annex III, 2",
    helpText: "AI in critical infrastructure is high-risk under Annex III.",
  },
  {
    id: "high-risk-education",
    question: "Is this AI system used for educational or vocational training decisions?",
    category: "high-risk",
    article: "Annex III, 3",
    helpText: "AI affecting education access is high-risk.",
  },
  {
    id: "high-risk-employment",
    question: "Is this AI system used for recruitment, HR decisions, or worker management?",
    category: "high-risk",
    article: "Annex III, 4",
    helpText: "Employment-related AI is high-risk under Annex III.",
  },
  {
    id: "high-risk-essential-services",
    question: "Is this AI system used for access to essential services (credit, insurance, public benefits)?",
    category: "high-risk",
    article: "Annex III, 5",
    helpText: "AI affecting access to essential services is high-risk.",
  },
  {
    id: "limited-risk-chatbot",
    question: "Does this AI system interact directly with people (chatbot, virtual assistant)?",
    category: "limited-risk",
    article: "Article 50",
    helpText: "Interactive AI requires transparency obligations.",
  },
]

const RISK_LEVELS = {
  prohibited: {
    title: "Prohibited",
    description: "This AI practice is banned under Article 5",
    icon: Ban,
    color: "destructive",
    bgColor: "bg-destructive/10",
    textColor: "text-destructive",
  },
  high: {
    title: "High Risk",
    description: "Subject to strict requirements under Articles 9-15",
    icon: AlertTriangle,
    color: "amber",
    bgColor: "bg-amber-500/10",
    textColor: "text-amber-600",
  },
  limited: {
    title: "Limited Risk",
    description: "Subject to transparency obligations under Article 50",
    icon: Eye,
    color: "primary",
    bgColor: "bg-primary/10",
    textColor: "text-primary",
  },
  minimal: {
    title: "Minimal Risk",
    description: "No specific obligations (voluntary codes of conduct)",
    icon: Shield,
    color: "accent",
    bgColor: "bg-accent/10",
    textColor: "text-accent",
  },
}

interface RiskAssessmentTabProps {
  systemId: string
  systemName: string
  currentRiskLevel?: string | null
}

export function RiskAssessmentTab({ systemId, systemName, currentRiskLevel }: RiskAssessmentTabProps) {
  const router = useRouter()
  const [mode, setMode] = useState<"view" | "assess">(currentRiskLevel && currentRiskLevel !== "unclassified" ? "view" : "assess")
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [result, setResult] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const progress = ((currentQuestion + 1) / RISK_QUESTIONS.length) * 100
  const currentQ = RISK_QUESTIONS[currentQuestion]
  const riskConfig = currentRiskLevel ? RISK_LEVELS[currentRiskLevel as keyof typeof RISK_LEVELS] : null
  const resultConfig = result ? RISK_LEVELS[result as keyof typeof RISK_LEVELS] : null

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [currentQ.id]: value })
  }

  const calculateResult = (): string => {
    let prohibitedCount = 0
    let highRiskCount = 0
    let limitedRiskCount = 0

    for (const q of RISK_QUESTIONS) {
      if (answers[q.id] === "yes") {
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
    // Early exit for prohibited
    if (answers[currentQ.id] === "yes" && currentQ.category === "prohibited") {
      await saveResult("prohibited")
      return
    }

    if (currentQuestion < RISK_QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      const finalResult = calculateResult()
      await saveResult(finalResult)
    }
  }

  const saveResult = async (riskLevel: string) => {
    setLoading(true)
    setResult(riskLevel)
    
    // Save to database
    await updateAiSystemRiskLevel(systemId, riskLevel as "prohibited" | "high" | "limited" | "minimal")
    
    setLoading(false)
    router.refresh()
  }

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const startNewAssessment = () => {
    setMode("assess")
    setCurrentQuestion(0)
    setAnswers({})
    setResult(null)
  }

  // View mode - show current classification
  if (mode === "view" && riskConfig && !result) {
    const RiskIcon = riskConfig.icon
    return (
      <div className="space-y-6">
        <Card className={cn("border-2", `border-${riskConfig.color}/30`)}>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className={cn("flex h-14 w-14 items-center justify-center rounded-xl", riskConfig.bgColor)}>
                  <RiskIcon className={cn("h-7 w-7", riskConfig.textColor)} />
                </div>
                <div>
                  <CardTitle className="text-xl">{riskConfig.title}</CardTitle>
                  <CardDescription>{riskConfig.description}</CardDescription>
                </div>
              </div>
              <Button variant="outline" onClick={startNewAssessment}>
                <RefreshCw className="mr-2 h-4 w-4" />
                Re-assess
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="rounded-lg bg-muted/50 p-4">
              <h4 className="font-medium mb-2">What this means:</h4>
              {currentRiskLevel === "high" && (
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Must implement risk management system (Article 9)</li>
                  <li>• Must ensure data governance (Article 10)</li>
                  <li>• Must maintain technical documentation (Article 11)</li>
                  <li>• Must enable logging (Article 12)</li>
                  <li>• Must ensure transparency (Article 13)</li>
                  <li>• Must enable human oversight (Article 14)</li>
                  <li>• Must ensure accuracy & security (Article 15)</li>
                </ul>
              )}
              {currentRiskLevel === "limited" && (
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Must inform users they are interacting with AI</li>
                  <li>• Must label AI-generated content</li>
                  <li>• Must disclose emotion recognition use</li>
                </ul>
              )}
              {currentRiskLevel === "minimal" && (
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• No mandatory requirements</li>
                  <li>• Consider voluntary codes of conduct</li>
                  <li>• Follow AI ethics best practices</li>
                </ul>
              )}
              {currentRiskLevel === "prohibited" && (
                <ul className="text-sm space-y-1 text-destructive">
                  <li>• This AI system cannot be deployed in the EU</li>
                  <li>• Immediately cease use</li>
                  <li>• Seek legal advice</li>
                </ul>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  // Result view
  if (result && resultConfig) {
    const ResultIcon = resultConfig.icon
    return (
      <div className="space-y-6">
        <Card className={cn("border-2", `border-${resultConfig.color}/30`)}>
          <CardHeader className="text-center">
            <div className={cn("mx-auto flex h-20 w-20 items-center justify-center rounded-2xl mb-4", resultConfig.bgColor)}>
              <ResultIcon className={cn("h-10 w-10", resultConfig.textColor)} />
            </div>
            <Badge className={cn("mx-auto mb-2", resultConfig.bgColor, resultConfig.textColor)}>
              Classification Complete
            </Badge>
            <CardTitle className="text-2xl">{resultConfig.title}</CardTitle>
            <CardDescription className="text-base">{resultConfig.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-center gap-2 text-sm text-accent">
              <CheckCircle2 className="h-4 w-4" />
              Risk level saved to {systemName}
            </div>
            <div className="flex justify-center gap-3">
              <Button variant="outline" onClick={startNewAssessment}>
                <RefreshCw className="mr-2 h-4 w-4" />
                Re-assess
              </Button>
              <Button onClick={() => setMode("view")}>
                View Details
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  // Assessment mode
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between mb-2">
            <Badge variant="outline">
              Question {currentQuestion + 1} of {RISK_QUESTIONS.length}
            </Badge>
            <Badge variant="secondary">{currentQ.article}</Badge>
          </div>
          <Progress value={progress} className="h-2" />
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2">{currentQ.question}</h3>
            <p className="text-sm text-muted-foreground">{currentQ.helpText}</p>
          </div>

          <RadioGroup
            value={answers[currentQ.id] || ""}
            onValueChange={handleAnswer}
            className="space-y-3"
          >
            <div className="flex items-center space-x-3 rounded-lg border p-4 hover:bg-muted/50 cursor-pointer">
              <RadioGroupItem value="yes" id="yes" />
              <Label htmlFor="yes" className="flex-1 cursor-pointer font-medium">Yes</Label>
            </div>
            <div className="flex items-center space-x-3 rounded-lg border p-4 hover:bg-muted/50 cursor-pointer">
              <RadioGroupItem value="no" id="no" />
              <Label htmlFor="no" className="flex-1 cursor-pointer font-medium">No</Label>
            </div>
            <div className="flex items-center space-x-3 rounded-lg border p-4 hover:bg-muted/50 cursor-pointer">
              <RadioGroupItem value="unsure" id="unsure" />
              <Label htmlFor="unsure" className="flex-1 cursor-pointer font-medium">Not sure</Label>
            </div>
          </RadioGroup>

          <div className="flex justify-between pt-4">
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
              ) : currentQuestion === RISK_QUESTIONS.length - 1 ? (
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
        </CardContent>
      </Card>
    </div>
  )
}
