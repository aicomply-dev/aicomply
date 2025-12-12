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
  Building2,
  Users,
  Briefcase,
  Bot,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  RefreshCw,
  Loader2,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { updateAiSystemRole } from "@/lib/actions/ai-systems"

// Role determination questions
const ROLE_QUESTIONS = [
  {
    id: "develop-or-commission",
    question: "Did you develop this AI system or have it developed for you?",
    helpText: "This includes commissioning development from a third party under your name/trademark.",
    roles: { yes: "provider", no: null },
  },
  {
    id: "place-on-market",
    question: "Do you place this AI system on the EU market under your own name or trademark?",
    helpText: "Placing on market means making the AI system available for the first time in the EU.",
    roles: { yes: "provider", no: null },
  },
  {
    id: "import-from-third-country",
    question: "Do you import this AI system from outside the EU to place it on the EU market?",
    helpText: "Importers bring AI systems from third countries into the EU market.",
    roles: { yes: "importer", no: null },
  },
  {
    id: "distribute-in-supply-chain",
    question: "Do you make this AI system available in the supply chain (without being provider/importer)?",
    helpText: "Distributors are in the supply chain but don't develop, import, or deploy the system.",
    roles: { yes: "distributor", no: null },
  },
  {
    id: "use-under-authority",
    question: "Do you use this AI system under your own authority in a professional capacity?",
    helpText: "Deployers use AI systems in their business operations, not for personal use.",
    roles: { yes: "deployer", no: null },
  },
]

const ROLE_CONFIGS = {
  provider: {
    title: "Provider",
    description: "You develop or have AI systems developed and place them on the market",
    icon: Building2,
    bgColor: "bg-primary/10",
    textColor: "text-primary",
    articles: "Articles 16-22",
    obligations: [
      "Ensure conformity with EU AI Act requirements",
      "Establish quality management system",
      "Maintain technical documentation",
      "Undergo conformity assessment",
      "Register in EU database",
      "Implement post-market monitoring",
    ],
  },
  deployer: {
    title: "Deployer",
    description: "You use AI systems under your authority in a professional context",
    icon: Users,
    bgColor: "bg-teal-500/10",
    textColor: "text-teal-600",
    articles: "Articles 26-27",
    obligations: [
      "Use AI systems according to instructions",
      "Ensure human oversight",
      "Monitor AI system operation",
      "Inform affected persons",
      "Conduct fundamental rights impact assessment (for certain systems)",
    ],
  },
  importer: {
    title: "Importer",
    description: "You place AI systems from third countries on the EU market",
    icon: Briefcase,
    bgColor: "bg-amber-500/10",
    textColor: "text-amber-600",
    articles: "Article 23",
    obligations: [
      "Verify conformity assessment completed",
      "Verify technical documentation exists",
      "Verify CE marking applied",
      "Ensure provider can be contacted",
      "Store copy of EU declaration of conformity",
    ],
  },
  distributor: {
    title: "Distributor",
    description: "You make AI systems available on the EU market in the supply chain",
    icon: Briefcase,
    bgColor: "bg-rose-500/10",
    textColor: "text-rose-600",
    articles: "Article 24",
    obligations: [
      "Verify CE marking present",
      "Verify required documentation accompanies system",
      "Not supply non-conforming systems",
      "Inform provider/importer of non-conformities",
    ],
  },
  gpai_provider: {
    title: "GPAI Provider",
    description: "You provide General Purpose AI models",
    icon: Bot,
    bgColor: "bg-violet-500/10",
    textColor: "text-violet-600",
    articles: "Articles 53-55",
    obligations: [
      "Maintain technical documentation",
      "Provide information to downstream providers",
      "Comply with copyright law",
      "Publish training content summary",
    ],
  },
}

interface RoleAssessmentTabProps {
  systemId: string
  systemName: string
  currentRole?: string | null
}

export function RoleAssessmentTab({ systemId, systemName, currentRole }: RoleAssessmentTabProps) {
  const router = useRouter()
  const [mode, setMode] = useState<"view" | "assess">(currentRole ? "view" : "assess")
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [result, setResult] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const progress = ((currentQuestion + 1) / ROLE_QUESTIONS.length) * 100
  const currentQ = ROLE_QUESTIONS[currentQuestion]
  const roleConfig = currentRole ? ROLE_CONFIGS[currentRole as keyof typeof ROLE_CONFIGS] : null
  const resultConfig = result ? ROLE_CONFIGS[result as keyof typeof ROLE_CONFIGS] : null

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [currentQ.id]: value })
  }

  const determineRole = (): string => {
    // Check answers in order of priority
    if (answers["develop-or-commission"] === "yes" || answers["place-on-market"] === "yes") {
      return "provider"
    }
    if (answers["import-from-third-country"] === "yes") {
      return "importer"
    }
    if (answers["distribute-in-supply-chain"] === "yes") {
      return "distributor"
    }
    if (answers["use-under-authority"] === "yes") {
      return "deployer"
    }
    return "deployer" // Default to deployer if using the system
  }

  const handleNext = async () => {
    // Check if current answer determines role immediately
    const answer = answers[currentQ.id]
    if (answer === "yes" && currentQ.roles.yes) {
      await saveResult(currentQ.roles.yes)
      return
    }

    if (currentQuestion < ROLE_QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      const finalRole = determineRole()
      await saveResult(finalRole)
    }
  }

  const saveResult = async (role: string) => {
    setLoading(true)
    setResult(role)
    
    // Save to database
    await updateAiSystemRole(systemId, role as "provider" | "deployer" | "importer" | "distributor" | "gpai_provider")
    
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

  // View mode - show current role
  if (mode === "view" && roleConfig && !result) {
    const RoleIcon = roleConfig.icon
    return (
      <div className="space-y-6">
        <Card className="border-2 border-primary/30">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className={cn("flex h-14 w-14 items-center justify-center rounded-xl", roleConfig.bgColor)}>
                  <RoleIcon className={cn("h-7 w-7", roleConfig.textColor)} />
                </div>
                <div>
                  <CardTitle className="text-xl">{roleConfig.title}</CardTitle>
                  <CardDescription>{roleConfig.description}</CardDescription>
                </div>
              </div>
              <Button variant="outline" onClick={startNewAssessment}>
                <RefreshCw className="mr-2 h-4 w-4" />
                Re-assess
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <Badge variant="secondary" className="mb-2">{roleConfig.articles}</Badge>
              </div>
              <div className="rounded-lg bg-muted/50 p-4">
                <h4 className="font-medium mb-2">Your Obligations:</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  {roleConfig.obligations.map((obligation, i) => (
                    <li key={i}>• {obligation}</li>
                  ))}
                </ul>
              </div>
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
        <Card className="border-2 border-primary/30">
          <CardHeader className="text-center">
            <div className={cn("mx-auto flex h-20 w-20 items-center justify-center rounded-2xl mb-4", resultConfig.bgColor)}>
              <ResultIcon className={cn("h-10 w-10", resultConfig.textColor)} />
            </div>
            <Badge className={cn("mx-auto mb-2", resultConfig.bgColor, resultConfig.textColor)}>
              Role Determined
            </Badge>
            <CardTitle className="text-2xl">{resultConfig.title}</CardTitle>
            <CardDescription className="text-base">{resultConfig.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-center gap-2 text-sm text-accent">
              <CheckCircle2 className="h-4 w-4" />
              Role saved to {systemName}
            </div>
            <div className="flex justify-center gap-3">
              <Button variant="outline" onClick={startNewAssessment}>
                <RefreshCw className="mr-2 h-4 w-4" />
                Re-assess
              </Button>
              <Button onClick={() => setMode("view")}>
                View Obligations
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
              Question {currentQuestion + 1} of {ROLE_QUESTIONS.length}
            </Badge>
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
              ) : currentQuestion === ROLE_QUESTIONS.length - 1 ? (
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
