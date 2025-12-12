import { NavWithAuth } from "@/components/nav-with-auth"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import {
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Circle,
  Layers,
  Target,
  ClipboardCheck,
  BarChart3,
  ChevronRight,
  Lightbulb,
  Ban,
  Shield,
  ShieldCheck,
  Eye,
  Info,
  Users,
  Building2,
  Truck,
  PackageCheck,
  UserCheck,
  BookOpen,
} from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { getAiSystems, getAiSystemStats, getAiSystemsWithRoles } from "@/lib/actions/ai-systems"
import { getAssessmentStats, getGapAnalysisStats } from "@/lib/actions/assessments"
import { getOrganizationRequirementsSummary } from "@/lib/actions/requirements"

// Assessment journey steps following EU AI Act methodology
const ASSESSMENT_STEPS = [
  {
    id: "inventory",
    number: 1,
    title: "AI System Inventory",
    shortTitle: "Inventory",
    description: "Catalog all AI systems in your organization. Identify what AI you use, develop, or deploy.",
    href: "/assess/inventory",
    icon: Layers,
    color: "primary",
    articles: "Preparation",
    keyActions: [
      "List all AI systems and tools",
      "Document purpose and use cases",
      "Identify stakeholders and owners",
      "Record vendor information",
    ],
  },
  {
    id: "classification",
    number: 2,
    title: "Risk Classification",
    shortTitle: "Classify",
    description: "Determine the risk category for each AI system based on EU AI Act criteria.",
    href: "/assess/classification",
    icon: Target,
    color: "amber",
    articles: "Articles 5-7, Annex III",
    keyActions: [
      "Check for prohibited practices (Art. 5)",
      "Assess high-risk criteria (Art. 6)",
      "Review Annex III use cases",
      "Document classification rationale",
    ],
  },
  {
    id: "requirements",
    number: 3,
    title: "Requirements & Controls",
    shortTitle: "Requirements",
    description: "View applicable requirements based on your role and risk level. Track control implementation.",
    href: "/assess/requirements",
    icon: ClipboardCheck,
    color: "teal",
    articles: "Articles 9-55",
    keyActions: [
      "View role-based requirements",
      "Track control implementation",
      "Run compliance assessments",
      "Upload evidence documentation",
    ],
  },
  {
    id: "comply",
    number: 4,
    title: "Comply",
    shortTitle: "Comply",
    description: "Implement controls and close compliance gaps for your AI systems.",
    href: "/assess/gap-analysis",
    icon: BarChart3,
    color: "rose",
    articles: "Implementation",
    keyActions: [
      "Implement required controls",
      "Close compliance gaps",
      "Upload evidence documentation",
      "Track implementation progress",
    ],
  },
  {
    id: "monitor",
    number: 5,
    title: "Monitor",
    shortTitle: "Monitor",
    description: "Track ongoing compliance status and receive alerts for re-assessments.",
    href: "/assess/monitor",
    icon: ShieldCheck,
    color: "teal",
    articles: "Monitoring",
    keyActions: [
      "Track compliance status",
      "Monitor all AI systems",
      "Receive assessment reminders",
      "Review compliance trends",
    ],
  },
]

// Risk level explanations
const RISK_LEVELS = [
  {
    level: "prohibited",
    title: "Prohibited",
    description: "AI practices that are banned under the EU AI Act",
    icon: Ban,
    color: "destructive",
    examples: ["Social scoring", "Real-time biometric ID in public spaces", "Emotion recognition in workplace"],
  },
  {
    level: "high",
    title: "High Risk",
    description: "AI systems subject to strict requirements before market placement",
    icon: AlertTriangle,
    color: "amber",
    examples: ["Recruitment tools", "Credit scoring", "Medical devices", "Critical infrastructure"],
  },
  {
    level: "limited",
    title: "Limited Risk",
    description: "AI systems with transparency obligations",
    icon: Eye,
    color: "primary",
    examples: ["Chatbots", "Emotion recognition", "Deep fakes", "AI-generated content"],
  },
  {
    level: "minimal",
    title: "Minimal Risk",
    description: "AI systems with no specific obligations (voluntary codes)",
    icon: Shield,
    color: "accent",
    examples: ["Spam filters", "AI video games", "Inventory management"],
  },
]

// EU AI Act Operator Roles (Article 3)
const OPERATOR_ROLES = [
  {
    id: "provider",
    title: "Provider",
    description: "Develops or has an AI system developed and places it on the market or puts it into service under own name/trademark",
    icon: Building2,
    color: "primary",
    articles: "Chapter 3, Section 2",
    keyObligations: [
      "Conformity assessment",
      "CE marking",
      "Technical documentation",
      "Quality management system",
    ],
  },
  {
    id: "deployer",
    title: "Deployer",
    description: "Uses an AI system under its authority, except for personal non-professional activity",
    icon: Users,
    color: "teal",
    articles: "Chapter 3, Section 3",
    keyObligations: [
      "Use according to instructions",
      "Human oversight",
      "Monitor operation",
      "Report incidents",
    ],
  },
  {
    id: "importer",
    title: "Importer",
    description: "Places on the EU market an AI system from a third country",
    icon: Truck,
    color: "amber",
    articles: "Chapter 3, Section 2",
    keyObligations: [
      "Verify conformity assessment",
      "Check CE marking",
      "Ensure documentation available",
      "Contact details on system",
    ],
  },
  {
    id: "distributor",
    title: "Distributor",
    description: "Makes an AI system available on the EU market (not provider or importer)",
    icon: PackageCheck,
    color: "rose",
    articles: "Chapter 3, Section 2",
    keyObligations: [
      "Verify CE marking present",
      "Check documentation",
      "Storage/transport conditions",
      "Withdraw non-compliant systems",
    ],
  },
]

export default async function AssessPage() {
  // Fetch all stats
  const [inventoryStats, assessmentStats, gapStats, aiSystems, systemsWithRoles, reqSummary] = await Promise.all([
    getAiSystemStats(),
    getAssessmentStats(),
    getGapAnalysisStats(),
    getAiSystems(),
    getAiSystemsWithRoles(),
    getOrganizationRequirementsSummary(),
  ])

  // Calculate requirements completion
  const reqCompleted = reqSummary.implemented + reqSummary.verified
  const reqProgress = reqSummary.total > 0
    ? Math.round((reqCompleted / reqSummary.total) * 100)
    : (systemsWithRoles.length > 0 ? 10 : 0) // Show some progress if roles assigned

  // Calculate step completion status
  const stepStatus = {
    inventory: {
      completed: inventoryStats.total > 0,
      count: inventoryStats.total,
      progress: inventoryStats.total > 0 ? 100 : 0,
    },
    classification: {
      completed: aiSystems.filter(s => s.riskLevel && s.riskLevel !== "unclassified").length === aiSystems.length && aiSystems.length > 0,
      count: aiSystems.filter(s => s.riskLevel && s.riskLevel !== "unclassified").length,
      total: aiSystems.length,
      progress: aiSystems.length > 0
        ? Math.round((aiSystems.filter(s => s.riskLevel && s.riskLevel !== "unclassified").length / aiSystems.length) * 100)
        : 0,
    },
    requirements: {
      completed: reqCompleted > 0 || systemsWithRoles.length > 0,
      count: reqCompleted,
      total: reqSummary.total,
      progress: reqProgress,
    },
    comply: {
      completed: gapStats.total > 0 && gapStats.score >= 80,
      count: gapStats.compliant,
      total: gapStats.total,
      progress: gapStats.score,
    },
    monitor: {
      completed: gapStats.score >= 90, // Consider monitoring complete when score is high
      count: inventoryStats.compliant,
      total: inventoryStats.total,
      progress: gapStats.score >= 80 ? 100 : (gapStats.score > 0 ? 50 : 0),
    },
  }

  // Determine current step (first incomplete step)
  const currentStepIndex = ASSESSMENT_STEPS.findIndex(step => {
    const status = stepStatus[step.id as keyof typeof stepStatus]
    return !status.completed
  })
  const currentStep = currentStepIndex >= 0 ? currentStepIndex : ASSESSMENT_STEPS.length - 1

  // Calculate overall progress
  const completedSteps = ASSESSMENT_STEPS.filter(step => stepStatus[step.id as keyof typeof stepStatus].completed).length
  const overallProgress = Math.round((completedSteps / ASSESSMENT_STEPS.length) * 100)

  return (
    <div className="flex min-h-screen flex-col">
      <NavWithAuth />

      <main className="flex-1">
        <PageHeader
          badge="Assessment Dashboard"
          title="Assess Your AI Systems"
          description="Follow the EU AI Act methodology to evaluate your AI portfolio and identify compliance requirements."
          color="teal"
        />

        {/* Role Determination - First Step */}
        <section className="py-8 border-b border-border/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 mb-4">
              <UserCheck className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-bold">First: Determine Your Role</h2>
              <Badge variant="outline" className="ml-2">Article 3</Badge>
            </div>
            <p className="text-muted-foreground mb-6 max-w-3xl">
              Your obligations under the EU AI Act depend on your role. Most organizations are <strong>Deployers</strong> (using AI),
              but you may also be a <strong>Provider</strong> (developing AI) or both. Identify your role for each AI system.
            </p>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {OPERATOR_ROLES.map((role) => {
                const Icon = role.icon
                return (
                  <Card
                    key={role.id}
                    className={cn(
                      "border-border/50 transition-all hover:shadow-lg cursor-pointer",
                      role.color === "primary" && "hover:border-primary/30",
                      role.color === "teal" && "hover:border-teal-500/30",
                      role.color === "amber" && "hover:border-amber-500/30",
                      role.color === "rose" && "hover:border-rose-500/30",
                    )}
                  >
                    <CardContent className="p-5">
                      <div className="flex items-start gap-3 mb-3">
                        <div
                          className={cn(
                            "flex h-10 w-10 items-center justify-center rounded-xl shrink-0",
                            role.color === "primary" && "bg-primary/10 text-primary",
                            role.color === "teal" && "bg-teal-500/10 text-teal-500",
                            role.color === "amber" && "bg-amber-500/10 text-amber-500",
                            role.color === "rose" && "bg-rose-500/10 text-rose-500",
                          )}
                        >
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{role.title}</h3>
                          <p className="text-xs text-muted-foreground">{role.articles}</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{role.description}</p>
                      <div className="space-y-1">
                        {role.keyObligations.slice(0, 2).map((obligation, i) => (
                          <p key={i} className="text-xs text-muted-foreground flex items-center gap-1.5">
                            <ChevronRight className="h-3 w-3 shrink-0" />
                            <span className="truncate">{obligation}</span>
                          </p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between p-4 rounded-lg bg-muted/50 border border-border/50">
              <div className="flex items-start gap-3">
                <Lightbulb className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Not sure which role applies to you?</p>
                  <p className="text-sm text-muted-foreground">
                    Take our quick assessment to determine your EU AI Act role for each AI system.
                  </p>
                </div>
              </div>
              <Button asChild className="shrink-0">
                <Link href="/assess/classification?type=role-determination">
                  <UserCheck className="mr-2 h-4 w-4" />
                  Start Role Assessment
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Assessment Journey Overview */}
        <section className="border-b border-border/50 py-8 bg-gradient-to-b from-muted/30 to-transparent">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Overall Progress - only show tracker when user has started */}
            {inventoryStats.total > 0 ? (
              <Card className="mb-8 border-teal-500/30 bg-gradient-to-r from-teal-500/5 to-transparent">
                <CardContent className="flex flex-col gap-6 p-6 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-teal-500 text-white shadow-lg shadow-teal-500/25">
                      <ClipboardCheck className="h-7 w-7" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Assessment Journey</p>
                      <p className="text-xl font-bold">
                        {completedSteps} of {ASSESSMENT_STEPS.length} steps completed
                      </p>
                    </div>
                  </div>
                  <div className="w-full max-w-xs">
                    <Progress value={overallProgress} className="h-3 [&>div]:bg-teal-500" />
                    <p className="mt-2 text-right text-sm font-medium">{overallProgress}% complete</p>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="mb-8 border-teal-500/30 bg-gradient-to-r from-teal-500/5 to-transparent">
                <CardContent className="flex flex-col gap-6 p-6 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-teal-500 text-white shadow-lg shadow-teal-500/25">
                      <Layers className="h-7 w-7" />
                    </div>
                    <div>
                      <p className="text-xl font-bold">Begin Your Assessment Journey</p>
                      <p className="text-sm text-muted-foreground">
                        Start by adding your first AI system to the inventory
                      </p>
                    </div>
                  </div>
                  <Button className="bg-teal-500 hover:bg-teal-600 shadow-lg shadow-teal-500/25" asChild>
                    <Link href="/assess/inventory">
                      Add AI System
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )}

            {/* Step Cards */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
              {ASSESSMENT_STEPS.map((step, index) => {
                const status = stepStatus[step.id as keyof typeof stepStatus]
                const Icon = step.icon
                const isCurrentStep = index === currentStep
                const isPastStep = index < currentStep
                const isFutureStep = index > currentStep

                return (
                  <Link key={step.id} href={step.href}>
                    <Card
                      className={cn(
                        "group h-full transition-all hover:shadow-xl cursor-pointer relative overflow-hidden",
                        isCurrentStep && "border-teal-500/50 ring-2 ring-teal-500/20",
                        status.completed && "border-accent/30",
                        isFutureStep && !status.completed && "opacity-75"
                      )}
                    >
                      {/* Step indicator line */}
                      <div
                        className={cn(
                          "absolute inset-x-0 top-0 h-1",
                          status.completed && "bg-accent",
                          isCurrentStep && !status.completed && "bg-teal-500",
                          isFutureStep && !status.completed && "bg-muted"
                        )}
                      />

                      <CardContent className="p-5">
                        <div className="flex items-start justify-between mb-3">
                          <div
                            className={cn(
                              "flex h-10 w-10 items-center justify-center rounded-xl transition-all",
                              status.completed && "bg-accent text-accent-foreground",
                              isCurrentStep && !status.completed && "bg-teal-500/10 text-teal-500",
                              isFutureStep && !status.completed && "bg-muted text-muted-foreground"
                            )}
                          >
                            {status.completed ? (
                              <CheckCircle2 className="h-5 w-5" />
                            ) : (
                              <Icon className="h-5 w-5" />
                            )}
                          </div>
                          <Badge
                            variant="outline"
                            className={cn(
                              "text-xs",
                              status.completed && "border-accent/30 text-accent",
                              isCurrentStep && !status.completed && "border-teal-500/30 text-teal-500",
                            )}
                          >
                            Step {step.number}
                          </Badge>
                        </div>

                        <h3 className="font-semibold group-hover:text-primary transition-colors">
                          {step.shortTitle}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                          {step.description}
                        </p>

                        {/* Progress indicator */}
                        <div className="mt-4">
                          <div className="flex items-center justify-between text-xs mb-1">
                            <span className="text-muted-foreground">{step.articles}</span>
                            <span className="font-medium">{status.progress}%</span>
                          </div>
                          <Progress
                            value={status.progress}
                            className={cn(
                              "h-1.5",
                              status.completed && "[&>div]:bg-accent",
                              isCurrentStep && !status.completed && "[&>div]:bg-teal-500",
                            )}
                          />
                        </div>

                        {isCurrentStep && !status.completed && (
                          <div className="mt-3 flex items-center gap-1 text-xs text-teal-500 font-medium">
                            <span>Start here</span>
                            <ArrowRight className="h-3 w-3" />
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </Link>
                )
              })}
            </div>

            {/* Supporting Resources */}
            <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-lg bg-muted/50 border border-border/50">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                  <BookOpen className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Controls Library</p>
                  <p className="text-sm text-muted-foreground">
                    Reference documentation for 114 compliance controls across 14 standards
                  </p>
                </div>
              </div>
              <Button variant="outline" asChild>
                <Link href="/implement/controls">
                  Browse Controls
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Current Step Detail */}
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Current Step Info */}
              <div>
                <Badge className="mb-4 bg-teal-500/10 text-teal-500 border-teal-500/30">
                  Current Focus: Step {ASSESSMENT_STEPS[currentStep].number}
                </Badge>
                <h2 className="text-2xl font-bold mb-2">{ASSESSMENT_STEPS[currentStep].title}</h2>
                <p className="text-muted-foreground mb-6">
                  {ASSESSMENT_STEPS[currentStep].description}
                </p>

                <Card className="border-border/50">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base flex items-center gap-2">
                      <Lightbulb className="h-4 w-4 text-amber-500" />
                      Key Actions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {ASSESSMENT_STEPS[currentStep].keyActions.map((action, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-500/10 text-xs font-semibold text-teal-500">
                            {i + 1}
                          </div>
                          <span className="text-sm">{action}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full mt-6 bg-teal-500 hover:bg-teal-600 shadow-lg shadow-teal-500/25" asChild>
                      <Link href={ASSESSMENT_STEPS[currentStep].href}>
                        {stepStatus[ASSESSMENT_STEPS[currentStep].id as keyof typeof stepStatus].completed
                          ? "Review Progress"
                          : "Get Started"}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Stats */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Your Progress</h3>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Card className="border-border/50">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                          <Layers className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-2xl font-bold">{inventoryStats.total}</p>
                          <p className="text-xs text-muted-foreground">AI Systems</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-border/50">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10">
                          <Target className="h-5 w-5 text-amber-500" />
                        </div>
                        <div>
                          <p className="text-2xl font-bold">
                            {aiSystems.filter(s => s.riskLevel && s.riskLevel !== "unclassified").length}
                            <span className="text-sm font-normal text-muted-foreground">/{aiSystems.length}</span>
                          </p>
                          <p className="text-xs text-muted-foreground">Classified</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-border/50">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-destructive/10">
                          <AlertTriangle className="h-5 w-5 text-destructive" />
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-destructive">{inventoryStats.highRisk}</p>
                          <p className="text-xs text-muted-foreground">High Risk</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-border/50">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                          <CheckCircle2 className="h-5 w-5 text-accent" />
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-accent">{gapStats.score}%</p>
                          <p className="text-xs text-muted-foreground">Compliance Score</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Risk Distribution */}
                {aiSystems.length > 0 && (
                  <Card className="border-border/50">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base">Risk Distribution</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {[
                          { level: "high", label: "High Risk", color: "destructive", count: inventoryStats.highRisk },
                          { level: "limited", label: "Limited Risk", color: "primary", count: aiSystems.filter(s => s.riskLevel === "limited").length },
                          { level: "minimal", label: "Minimal Risk", color: "accent", count: aiSystems.filter(s => s.riskLevel === "minimal").length },
                          { level: "unclassified", label: "Unclassified", color: "muted", count: aiSystems.filter(s => !s.riskLevel || s.riskLevel === "unclassified").length },
                        ].map(item => (
                          <div key={item.level} className="flex items-center gap-3">
                            <div className={cn(
                              "h-3 w-3 rounded-full",
                              item.color === "destructive" && "bg-destructive",
                              item.color === "primary" && "bg-primary",
                              item.color === "accent" && "bg-accent",
                              item.color === "muted" && "bg-muted-foreground/50",
                            )} />
                            <span className="text-sm flex-1">{item.label}</span>
                            <span className="text-sm font-medium">{item.count}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Risk Level Guide */}
        <section className="py-12 bg-muted/30 border-t border-border/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 mb-6">
              <Info className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-bold">EU AI Act Risk Categories</h2>
            </div>
            <p className="text-muted-foreground mb-6 max-w-2xl">
              The EU AI Act classifies AI systems into four risk categories. Understanding these categories
              is essential for determining your compliance obligations.
            </p>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {RISK_LEVELS.map((risk) => {
                const Icon = risk.icon
                return (
                  <Card
                    key={risk.level}
                    className={cn(
                      "border-border/50 transition-all hover:shadow-lg",
                      risk.color === "destructive" && "hover:border-destructive/30",
                      risk.color === "amber" && "hover:border-amber-500/30",
                      risk.color === "primary" && "hover:border-primary/30",
                      risk.color === "accent" && "hover:border-accent/30",
                    )}
                  >
                    <CardContent className="p-5">
                      <div
                        className={cn(
                          "flex h-10 w-10 items-center justify-center rounded-xl mb-3",
                          risk.color === "destructive" && "bg-destructive/10 text-destructive",
                          risk.color === "amber" && "bg-amber-500/10 text-amber-500",
                          risk.color === "primary" && "bg-primary/10 text-primary",
                          risk.color === "accent" && "bg-accent/10 text-accent",
                        )}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-semibold mb-1">{risk.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{risk.description}</p>
                      <div className="space-y-1">
                        {risk.examples.slice(0, 3).map((example, i) => (
                          <p key={i} className="text-xs text-muted-foreground flex items-center gap-1.5">
                            <ChevronRight className="h-3 w-3" />
                            {example}
                          </p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            <div className="mt-6 flex justify-center">
              <Button variant="outline" className="bg-transparent" asChild>
                <Link href="/resources/regulation/chapter-2-prohibited-practices">
                  Learn More About Risk Categories
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Next Step CTA */}
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Card className="border-amber-500/30 bg-gradient-to-r from-amber-500/5 to-transparent">
              <CardContent className="flex flex-col gap-6 p-8 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-amber-500 text-white shadow-lg shadow-amber-500/25">
                    <CheckCircle2 className="h-7 w-7" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">After assessment is complete</p>
                    <p className="text-lg font-bold">Implement compliance measures</p>
                  </div>
                </div>
                <Button
                  size="lg"
                  className="bg-amber-500 text-white shadow-lg shadow-amber-500/25 hover:bg-amber-600"
                  asChild
                >
                  <Link href="/implement">
                    Continue to Implement
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
