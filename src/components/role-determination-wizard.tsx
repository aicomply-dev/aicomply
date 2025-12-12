"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import {
  Building2,
  Users,
  Truck,
  PackageCheck,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  CheckCircle2,
  Info,
  AlertTriangle,
} from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

// Role determination questions based on EU AI Act Article 3
const ROLE_QUESTIONS = [
  {
    id: "develop",
    question: "Did your organization develop this AI system or have it developed?",
    helpText: "This includes commissioning a third party to build AI for you",
    options: [
      { value: "yes", label: "Yes, we developed it or had it developed for us" },
      { value: "no", label: "No, we acquired/licensed it from another company" },
    ],
  },
  {
    id: "market",
    question: "Are you placing this AI system on the EU market or putting it into service under your own name or trademark?",
    helpText: "This applies if you sell, license, or make the AI available to others under your brand",
    options: [
      { value: "yes", label: "Yes, under our name/trademark" },
      { value: "no", label: "No, we only use it internally or it's under another brand" },
    ],
  },
  {
    id: "use",
    question: "Is your organization using this AI system for professional or business purposes?",
    helpText: "Professional use means any use that is not purely personal/private",
    options: [
      { value: "yes", label: "Yes, for business/professional purposes" },
      { value: "no", label: "No, only for personal non-professional use" },
    ],
  },
  {
    id: "import",
    question: "Are you importing this AI system from outside the European Union?",
    helpText: "This applies if you bring AI systems from non-EU countries into the EU market",
    options: [
      { value: "yes", label: "Yes, we import it from outside the EU" },
      { value: "no", label: "No, it's already available in the EU or we're the original provider" },
    ],
  },
  {
    id: "distribute",
    question: "Do you distribute or resell this AI system to other organizations?",
    helpText: "Distribution means making the AI available to third parties (not the provider or importer)",
    options: [
      { value: "yes", label: "Yes, we distribute/resell to others" },
      { value: "no", label: "No, we only use it ourselves" },
    ],
  },
]

// Role definitions
const ROLES = {
  provider: {
    id: "provider",
    title: "Provider",
    description: "You develop AI systems or place them on the market under your name",
    icon: Building2,
    color: "primary",
    obligations: [
      "Conformity assessment before market placement",
      "CE marking and EU declaration of conformity",
      "Technical documentation (Article 11)",
      "Quality management system (Article 17)",
      "Post-market monitoring (Article 72)",
    ],
    articles: "Articles 16-22, Chapter 3 Section 2",
  },
  deployer: {
    id: "deployer",
    title: "Deployer",
    description: "You use AI systems under your authority for professional purposes",
    icon: Users,
    color: "teal",
    obligations: [
      "Use AI according to instructions for use",
      "Assign human oversight (Article 14)",
      "Monitor AI operation for risks",
      "Report serious incidents (Article 73)",
      "Data protection impact assessment (if applicable)",
    ],
    articles: "Articles 26-27, Chapter 3 Section 3",
  },
  importer: {
    id: "importer",
    title: "Importer",
    description: "You place AI systems from outside the EU on the EU market",
    icon: Truck,
    color: "amber",
    obligations: [
      "Verify provider completed conformity assessment",
      "Ensure CE marking is affixed",
      "Verify documentation is available",
      "Provide your contact details on the system",
      "Cooperate with market surveillance authorities",
    ],
    articles: "Articles 23-24, Chapter 3 Section 2",
  },
  distributor: {
    id: "distributor",
    title: "Distributor",
    description: "You make AI systems available on the EU market",
    icon: PackageCheck,
    color: "rose",
    obligations: [
      "Verify CE marking and documentation before distribution",
      "Ensure storage/transport doesn't affect compliance",
      "Cooperate with authorities on corrective actions",
      "Withdraw non-compliant systems from market",
      "Inform provider/importer of non-compliance",
    ],
    articles: "Article 25, Chapter 3 Section 2",
  },
}

interface RoleDeterminationWizardProps {
  aiSystemName?: string
  preSelectedSystemId?: string
  onComplete?: (roles: string[]) => void
  demoMode?: boolean
}

export function RoleDeterminationWizard({ aiSystemName, preSelectedSystemId, onComplete, demoMode = false }: RoleDeterminationWizardProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [determinedRoles, setDeterminedRoles] = useState<string[]>([])
  const [showResults, setShowResults] = useState(false)

  const progress = ((currentStep + 1) / ROLE_QUESTIONS.length) * 100

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [ROLE_QUESTIONS[currentStep].id]: value })
  }

  const determineRoles = () => {
    const roles: string[] = []

    // Provider: developed it AND placing on market under own name
    if (answers.develop === "yes" && answers.market === "yes") {
      roles.push("provider")
    }

    // Deployer: using it professionally (most common)
    if (answers.use === "yes") {
      roles.push("deployer")
    }

    // Importer: importing from outside EU
    if (answers.import === "yes" && answers.develop !== "yes") {
      roles.push("importer")
    }

    // Distributor: distributing to others (not provider/importer)
    if (answers.distribute === "yes" && answers.develop !== "yes" && answers.import !== "yes") {
      roles.push("distributor")
    }

    // If no roles determined but they use it, they're at minimum a deployer
    if (roles.length === 0 && answers.use === "yes") {
      roles.push("deployer")
    }

    return roles
  }

  const handleNext = () => {
    if (currentStep < ROLE_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      const roles = determineRoles()
      setDeterminedRoles(roles)
      setShowResults(true)
      onComplete?.(roles)
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleReset = () => {
    setCurrentStep(0)
    setAnswers({})
    setDeterminedRoles([])
    setShowResults(false)
  }

  const currentQuestion = ROLE_QUESTIONS[currentStep]
  const currentAnswer = answers[currentQuestion?.id]

  if (showResults) {
    return (
      <div className="space-y-6">
        <Card className="border-accent/30 bg-gradient-to-br from-accent/5 to-transparent">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <div>
                <CardTitle>Role Determination Complete</CardTitle>
                <CardDescription>
                  {aiSystemName ? `For: ${aiSystemName}` : "Based on your answers"}
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              You have <strong>{determinedRoles.length}</strong> role{determinedRoles.length !== 1 ? "s" : ""} under the EU AI Act for this AI system:
            </p>

            <div className="space-y-4">
              {determinedRoles.map((roleId) => {
                const role = ROLES[roleId as keyof typeof ROLES]
                const Icon = role.icon
                return (
                  <Card key={roleId} className={cn(
                    "border-border/50",
                    role.color === "primary" && "border-l-4 border-l-primary",
                    role.color === "teal" && "border-l-4 border-l-teal-500",
                    role.color === "amber" && "border-l-4 border-l-amber-500",
                    role.color === "rose" && "border-l-4 border-l-rose-500",
                  )}>
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className={cn(
                          "flex h-10 w-10 items-center justify-center rounded-lg shrink-0",
                          role.color === "primary" && "bg-primary/10 text-primary",
                          role.color === "teal" && "bg-teal-500/10 text-teal-500",
                          role.color === "amber" && "bg-amber-500/10 text-amber-500",
                          role.color === "rose" && "bg-rose-500/10 text-rose-500",
                        )}>
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold">{role.title}</h3>
                            <Badge variant="outline" className="text-xs">{role.articles}</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-3">{role.description}</p>

                          <div className="space-y-1.5">
                            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Key Obligations:</p>
                            {role.obligations.map((obligation, i) => (
                              <p key={i} className="text-sm flex items-start gap-2">
                                <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                                {obligation}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {determinedRoles.length === 0 && (
              <Card className="border-amber-500/30 bg-amber-500/5">
                <CardContent className="p-4 flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-amber-500 shrink-0" />
                  <div>
                    <p className="font-medium">No clear role determined</p>
                    <p className="text-sm text-muted-foreground">
                      Based on your answers, you may not have specific EU AI Act obligations for this AI system.
                      However, please review the regulation or consult legal advice to confirm.
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}
          </CardContent>
        </Card>

        <div className="flex gap-3">
          <Button variant="outline" onClick={handleReset} className="flex-1">
            <RotateCcw className="mr-2 h-4 w-4" />
            Start Over
          </Button>
          <Button asChild className="flex-1 bg-teal-500 hover:bg-teal-600">
            <Link href="/assess/requirements">
              Continue to Requirements
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Progress */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Question {currentStep + 1} of {ROLE_QUESTIONS.length}</span>
          <span className="font-medium">{Math.round(progress)}%</span>
        </div>
        <Progress value={progress} className="h-2 [&>div]:bg-teal-500" />
      </div>

      {/* Question Card */}
      <Card className="border-border/50">
        <CardHeader>
          <CardTitle className="text-lg">{currentQuestion.question}</CardTitle>
          <CardDescription className="flex items-start gap-2">
            <Info className="h-4 w-4 shrink-0 mt-0.5" />
            {currentQuestion.helpText}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <RadioGroup
            value={currentAnswer || ""}
            onValueChange={handleAnswer}
            className="space-y-3"
          >
            {currentQuestion.options.map((option) => (
              <div key={option.value} className="flex items-center space-x-3">
                <RadioGroupItem value={option.value} id={option.value} />
                <Label
                  htmlFor={option.value}
                  className="flex-1 cursor-pointer text-sm font-normal"
                >
                  {option.label}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex gap-3">
        <Button
          variant="outline"
          onClick={handleBack}
          disabled={currentStep === 0}
          className="flex-1"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        <Button
          onClick={handleNext}
          disabled={!currentAnswer}
          className="flex-1 bg-teal-500 hover:bg-teal-600"
        >
          {currentStep === ROLE_QUESTIONS.length - 1 ? "See Results" : "Next"}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
