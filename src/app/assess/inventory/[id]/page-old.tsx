import { NavWithAuth } from "@/components/nav-with-auth"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SystemAssessmentActions } from "@/components/system-assessment-actions"
import {
  Bot,
  Building2,
  Calendar,
  ChevronRight,
  AlertTriangle,
  Shield,
  Eye,
  Ban,
  CheckCircle2,
  Clock,
  FileText,
  ClipboardCheck,
  ArrowLeft,
  ExternalLink,
  Settings,
  Trash2,
  BarChart3,
  Users,
  Database,
  Activity,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { getAiSystemById } from "@/lib/actions/ai-systems"
import { getRequirementsStatusForSystem, initializeRequirementsForAiSystem } from "@/lib/actions/requirements"
import type { OperatorRole, RiskLevel } from "@/lib/data/role-requirements"
import { getGapAnalysisResults, getAssessments } from "@/lib/actions/assessments"
import { Progress } from "@/components/ui/progress"
import { notFound } from "next/navigation"
import Link from "next/link"

// Operator role configurations
const ROLE_CONFIGS = {
  provider: {
    label: "Provider",
    icon: Building2,
    color: "primary",
    bgColor: "bg-primary/10",
    textColor: "text-primary",
    borderColor: "border-primary/30",
    description: "You develop or have AI systems developed and place them on the market",
    articles: "Chapter 3, Section 2 (Articles 16-22)",
  },
  deployer: {
    label: "Deployer",
    icon: Users,
    color: "teal",
    bgColor: "bg-teal-500/10",
    textColor: "text-teal-600",
    borderColor: "border-teal-500/30",
    description: "You use AI systems under your authority in a professional context",
    articles: "Chapter 3, Section 3 (Articles 26-27)",
  },
  importer: {
    label: "Importer",
    icon: Activity,
    color: "amber",
    bgColor: "bg-amber-500/10",
    textColor: "text-amber-600",
    borderColor: "border-amber-500/30",
    description: "You place AI systems from third countries on the EU market",
    articles: "Article 23",
  },
  distributor: {
    label: "Distributor",
    icon: Activity,
    color: "rose",
    bgColor: "bg-rose-500/10",
    textColor: "text-rose-600",
    borderColor: "border-rose-500/30",
    description: "You make AI systems available on the EU market",
    articles: "Article 24",
  },
  gpai_provider: {
    label: "GPAI Provider",
    icon: Bot,
    color: "violet",
    bgColor: "bg-violet-500/10",
    textColor: "text-violet-600",
    borderColor: "border-violet-500/30",
    description: "You provide General Purpose AI models",
    articles: "Chapter V (Articles 53-55)",
  },
}

interface Props {
  params: Promise<{ id: string }>
}

// Risk level configurations
const RISK_CONFIGS = {
  prohibited: {
    label: "Prohibited",
    icon: Ban,
    color: "destructive",
    bgColor: "bg-destructive/10",
    textColor: "text-destructive",
    borderColor: "border-destructive/30",
    description: "This AI practice is banned under Article 5 of the EU AI Act",
    obligations: [
      "Immediately cease use of this AI system",
      "Document the prohibition determination",
      "Report to relevant authorities if required",
      "Implement alternative compliant solutions",
    ],
    articles: ["Article 5 - Prohibited AI Practices"],
  },
  high: {
    label: "High Risk",
    icon: AlertTriangle,
    color: "amber",
    bgColor: "bg-amber-500/10",
    textColor: "text-amber-600",
    borderColor: "border-amber-500/30",
    description: "Subject to strict requirements under the EU AI Act",
    obligations: [
      "Implement risk management system (Art. 9)",
      "Ensure data governance measures (Art. 10)",
      "Maintain technical documentation (Art. 11)",
      "Enable automatic logging (Art. 12)",
      "Ensure transparency to users (Art. 13)",
      "Enable human oversight (Art. 14)",
      "Ensure accuracy, robustness, cybersecurity (Art. 15)",
    ],
    articles: [
      "Article 9 - Risk Management",
      "Article 10 - Data Governance",
      "Article 11 - Technical Documentation",
      "Article 12 - Record-keeping",
      "Article 13 - Transparency",
      "Article 14 - Human Oversight",
      "Article 15 - Accuracy & Robustness",
    ],
  },
  limited: {
    label: "Limited Risk",
    icon: Eye,
    color: "primary",
    bgColor: "bg-primary/10",
    textColor: "text-primary",
    borderColor: "border-primary/30",
    description: "Subject to transparency obligations",
    obligations: [
      "Inform users they are interacting with AI",
      "Label AI-generated content appropriately",
      "Disclose emotion recognition or biometric use",
      "Mark deep fakes and synthetic media",
    ],
    articles: ["Article 50 - Transparency Obligations"],
  },
  minimal: {
    label: "Minimal Risk",
    icon: Shield,
    color: "accent",
    bgColor: "bg-accent/10",
    textColor: "text-accent",
    borderColor: "border-accent/30",
    description: "No specific EU AI Act obligations (voluntary codes of conduct)",
    obligations: [
      "Consider voluntary codes of conduct",
      "Follow general AI ethics best practices",
      "Monitor for risk level changes",
    ],
    articles: ["Article 95 - Codes of Conduct"],
  },
  unclassified: {
    label: "Unclassified",
    icon: Clock,
    color: "muted",
    bgColor: "bg-muted",
    textColor: "text-muted-foreground",
    borderColor: "border-border",
    description: "Risk classification pending",
    obligations: [
      "Complete risk classification assessment",
      "Determine applicable EU AI Act category",
      "Document classification rationale",
    ],
    articles: ["Articles 5-7 - Risk Classification"],
  },
}

// Category display names
const CATEGORY_LABELS: Record<string, string> = {
  hr: "Human Resources",
  finance: "Finance & Banking",
  healthcare: "Healthcare & Medical",
  security: "Security & Access Control",
  "customer-service": "Customer Service",
  marketing: "Marketing & Sales",
  it: "IT & Infrastructure",
  operations: "Operations & Logistics",
  development: "Software Development",
  legal: "Legal & Compliance",
  other: "Other",
}

export default async function AiSystemDetailPage({ params }: Props) {
  const { id } = await params

  // Fetch all data in parallel
  const [system, initialRequirements, allGaps, allAssessments] = await Promise.all([
    getAiSystemById(id),
    getRequirementsStatusForSystem(id),
    getGapAnalysisResults(id),
    getAssessments(),
  ])

  if (!system) {
    notFound()
  }

  // Auto-initialize requirements if system has role and risk level but no requirements yet
  let requirements = initialRequirements
  if (requirements.length === 0 && system.operatorRole && system.riskLevel && system.riskLevel !== "unclassified") {
    await initializeRequirementsForAiSystem(
      id,
      system.operatorRole as OperatorRole,
      system.riskLevel as RiskLevel
    )
    requirements = await getRequirementsStatusForSystem(id)
  }

  // Filter assessments for this system
  const systemAssessments = allAssessments.filter(a => a.aiSystemId === id)

  // Calculate requirements metrics
  const verified = requirements.filter(r => r.status === "verified").length
  const implemented = requirements.filter(r => r.status === "implemented").length
  const reqMetrics = {
    total: requirements.length,
    verified,
    implemented,
    inProgress: requirements.filter(r => r.status === "in_progress").length,
    notStarted: requirements.filter(r => r.status === "not_started").length,
    completed: verified + implemented,
  }
  const reqProgress = reqMetrics.total > 0 ? Math.round((reqMetrics.completed / reqMetrics.total) * 100) : 0

  // Filter gaps for this system
  const gaps = allGaps.filter(g => g.aiSystemId === id)
  const gapMetrics = {
    total: gaps.length,
    compliant: gaps.filter(g => g.status === "compliant").length,
    partial: gaps.filter(g => g.status === "partial").length,
    gap: gaps.filter(g => g.status === "gap").length,
    critical: gaps.filter(g => g.priority === "critical").length,
    high: gaps.filter(g => g.priority === "high").length,
  }

  const riskConfig = RISK_CONFIGS[system.riskLevel as keyof typeof RISK_CONFIGS] || RISK_CONFIGS.unclassified
  const RiskIcon = riskConfig.icon
  const roleConfig = system.operatorRole ? ROLE_CONFIGS[system.operatorRole as keyof typeof ROLE_CONFIGS] : null
  const RoleIcon = roleConfig?.icon || Users

  const formatDate = (date: Date | null) => {
    if (!date) return "—"
    return new Intl.DateTimeFormat("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }).format(new Date(date))
  }

  return (
    <div className="flex min-h-screen flex-col">
      <NavWithAuth />

      <main className="flex-1">
        {/* Header */}
        <div className="border-b border-border/50 bg-gradient-to-b from-muted/50 to-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Link href="/assess" className="hover:text-foreground transition-colors">
                Assess
              </Link>
              <ChevronRight className="h-4 w-4" />
              <Link href="/assess/inventory" className="hover:text-foreground transition-colors">
                AI Inventory
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground">{system.name}</span>
            </nav>

            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
              {/* System Info */}
              <div className="flex items-start gap-4">
                <div
                  className={cn(
                    "flex h-16 w-16 items-center justify-center rounded-2xl shrink-0",
                    riskConfig.bgColor
                  )}
                >
                  <Bot className={cn("h-8 w-8", riskConfig.textColor)} />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h1 className="text-2xl font-bold">{system.name}</h1>
                    <Badge
                      variant="outline"
                      className={cn(
                        "capitalize",
                        system.status === "active" && "border-accent/50 bg-accent/10 text-accent",
                        system.status === "inactive" && "border-muted-foreground/50",
                        system.status === "decommissioned" && "border-destructive/50 bg-destructive/10 text-destructive"
                      )}
                    >
                      {system.status === "active" && <CheckCircle2 className="mr-1 h-3 w-3" />}
                      {system.status === "inactive" && <Clock className="mr-1 h-3 w-3" />}
                      {system.status}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground max-w-xl">
                    {system.description || "No description provided"}
                  </p>
                  <div className="flex items-center gap-4 mt-3 text-sm">
                    {system.vendor && (
                      <span className="flex items-center gap-1.5 text-muted-foreground">
                        <Building2 className="h-4 w-4" />
                        {system.vendor}
                      </span>
                    )}
                    {system.department && (
                      <span className="flex items-center gap-1.5 text-muted-foreground">
                        <Users className="h-4 w-4" />
                        {system.department}
                      </span>
                    )}
                    <span className="flex items-center gap-1.5 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      Added {formatDate(system.createdAt)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/assess/inventory">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back
                  </Link>
                </Button>
                <Button variant="outline" size="sm">
                  <Settings className="mr-2 h-4 w-4" />
                  Edit
                </Button>
                <Button variant="outline" size="sm" className="text-destructive hover:text-destructive">
                  <Trash2 className="mr-2 h-4 w-4" />
                  Delete
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Risk Classification Card */}
              <Card className={cn("border-2", riskConfig.borderColor)}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className={cn("flex h-12 w-12 items-center justify-center rounded-xl", riskConfig.bgColor)}>
                        <RiskIcon className={cn("h-6 w-6", riskConfig.textColor)} />
                      </div>
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          {riskConfig.label}
                          {system.riskLevel === "unclassified" && (
                            <Badge variant="outline" className="text-xs">Needs Classification</Badge>
                          )}
                        </CardTitle>
                        <CardDescription>{riskConfig.description}</CardDescription>
                      </div>
                    </div>
                    {system.riskLevel === "unclassified" && (
                      <Button size="sm" className="bg-teal-500 hover:bg-teal-600" asChild>
                        <Link href="/assess/classification">
                          Classify Now
                        </Link>
                      </Button>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium mb-2">Key Obligations</h4>
                      <ul className="space-y-2">
                        {riskConfig.obligations.map((obligation, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <CheckCircle2 className={cn("h-4 w-4 mt-0.5 shrink-0", riskConfig.textColor)} />
                            <span>{obligation}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-2">Relevant Articles</h4>
                      <div className="flex flex-wrap gap-2">
                        {riskConfig.articles.map((article, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {article}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Operator Role Card */}
              <Card className={cn("border-2", roleConfig?.borderColor || "border-border/50")}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className={cn("flex h-12 w-12 items-center justify-center rounded-xl", roleConfig?.bgColor || "bg-muted")}>
                        <RoleIcon className={cn("h-6 w-6", roleConfig?.textColor || "text-muted-foreground")} />
                      </div>
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          {roleConfig?.label || "Role Not Determined"}
                          {!system.operatorRole && (
                            <Badge variant="outline" className="text-xs">Needs Role Assessment</Badge>
                          )}
                        </CardTitle>
                        <CardDescription>
                          {roleConfig?.description || "Complete role determination to see your specific obligations"}
                        </CardDescription>
                      </div>
                    </div>
                    {!system.operatorRole && (
                      <Button size="sm" className="bg-teal-500 hover:bg-teal-600" asChild>
                        <Link href="/assess/classification?type=role-determination">
                          Determine Role
                        </Link>
                      </Button>
                    )}
                  </div>
                </CardHeader>
                {roleConfig && (
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      <strong>Applicable Articles:</strong> {roleConfig.articles}
                    </p>
                  </CardContent>
                )}
              </Card>

              {/* Tabs for different views */}
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-5">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="requirements">Requirements</TabsTrigger>
                  <TabsTrigger value="assessments">Assessments</TabsTrigger>
                  <TabsTrigger value="gaps">Gaps</TabsTrigger>
                  <TabsTrigger value="history">History</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="mt-6 space-y-6">
                  {/* Compliance Summary Cards */}
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <Card className="border-border/50">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                            <ClipboardCheck className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="text-2xl font-bold">{reqMetrics.total}</p>
                            <p className="text-xs text-muted-foreground">Requirements</p>
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
                            <p className="text-2xl font-bold text-accent">{reqMetrics.completed}</p>
                            <p className="text-xs text-muted-foreground">Completed</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="border-border/50">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10">
                            <Clock className="h-5 w-5 text-amber-500" />
                          </div>
                          <div>
                            <p className="text-2xl font-bold text-amber-600">{reqMetrics.inProgress}</p>
                            <p className="text-xs text-muted-foreground">In Progress</p>
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
                            <p className="text-2xl font-bold text-destructive">{gapMetrics.gap}</p>
                            <p className="text-xs text-muted-foreground">Gaps</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Requirements Progress */}
                  {reqMetrics.total > 0 && (
                    <Card className="border-border/50">
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-base">Requirements Progress</CardTitle>
                          <Badge variant="outline">{reqProgress}% Complete</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <Progress value={reqProgress} className="h-2 mb-4" />
                        <div className="grid grid-cols-4 gap-4 text-center text-sm">
                          <div>
                            <p className="text-lg font-semibold text-accent">{reqMetrics.verified}</p>
                            <p className="text-xs text-muted-foreground">Verified</p>
                          </div>
                          <div>
                            <p className="text-lg font-semibold text-primary">{reqMetrics.implemented}</p>
                            <p className="text-xs text-muted-foreground">Implemented</p>
                          </div>
                          <div>
                            <p className="text-lg font-semibold text-amber-600">{reqMetrics.inProgress}</p>
                            <p className="text-xs text-muted-foreground">In Progress</p>
                          </div>
                          <div>
                            <p className="text-lg font-semibold text-muted-foreground">{reqMetrics.notStarted}</p>
                            <p className="text-xs text-muted-foreground">Not Started</p>
                          </div>
                        </div>
                        <div className="mt-4 flex justify-end">
                          <Button variant="outline" size="sm" asChild>
                            <Link href={`/assess/requirements/${system.id}`}>
                              View All Requirements
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* System Details */}
                  <Card className="border-border/50">
                    <CardHeader>
                      <CardTitle className="text-base">System Details</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <dl className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <dt className="text-sm text-muted-foreground">Category</dt>
                          <dd className="font-medium">
                            {CATEGORY_LABELS[system.category || ""] || system.category || "—"}
                          </dd>
                        </div>
                        <div>
                          <dt className="text-sm text-muted-foreground">Vendor</dt>
                          <dd className="font-medium">{system.vendor || "—"}</dd>
                        </div>
                        <div>
                          <dt className="text-sm text-muted-foreground">Department</dt>
                          <dd className="font-medium">{system.department || "—"}</dd>
                        </div>
                        <div>
                          <dt className="text-sm text-muted-foreground">Data Types</dt>
                          <dd className="font-medium capitalize">
                            {(() => {
                              if (!system.dataTypes) return "—"
                              try {
                                const parsed = JSON.parse(system.dataTypes)
                                return Array.isArray(parsed) ? parsed.join(", ") : system.dataTypes
                              } catch {
                                return system.dataTypes.split(",").join(", ")
                              }
                            })()}
                          </dd>
                        </div>
                        <div>
                          <dt className="text-sm text-muted-foreground">Deployment Date</dt>
                          <dd className="font-medium">{formatDate(system.deploymentDate)}</dd>
                        </div>
                        <div>
                          <dt className="text-sm text-muted-foreground">Last Assessment</dt>
                          <dd className="font-medium">{formatDate(system.lastAssessmentDate)}</dd>
                        </div>
                      </dl>
                    </CardContent>
                  </Card>

                  {/* Data Processing Info */}
                  {system.dataTypes && (
                    <Card className="border-border/50">
                      <CardHeader>
                        <CardTitle className="text-base flex items-center gap-2">
                          <Database className="h-4 w-4" />
                          Data Processing
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {(() => {
                            let types: string[] = []
                            try {
                              const parsed = JSON.parse(system.dataTypes!)
                              types = Array.isArray(parsed) ? parsed : system.dataTypes!.split(",")
                            } catch {
                              types = system.dataTypes!.split(",")
                            }
                            return types.map((type) => (
                              <Badge
                                key={type}
                                variant="outline"
                                className={cn(
                                  "capitalize",
                                  type.trim() === "personal" && "border-amber-500/50 bg-amber-500/10 text-amber-600",
                                  type.trim() === "biometric" && "border-destructive/50 bg-destructive/10 text-destructive",
                                  type.trim() === "health" && "border-rose-500/50 bg-rose-500/10 text-rose-600",
                                  type.trim() === "financial" && "border-primary/50 bg-primary/10 text-primary",
                                  type.trim().includes("patient") && "border-rose-500/50 bg-rose-500/10 text-rose-600",
                                  type.trim().includes("medical") && "border-rose-500/50 bg-rose-500/10 text-rose-600"
                                )}
                              >
                                {type.trim().replace(/-/g, " ")}
                              </Badge>
                            ))
                          })()}
                        </div>
                        {(system.dataTypes!.includes("personal") || system.dataTypes!.includes("biometric") || system.dataTypes!.includes("patient") || system.dataTypes!.includes("medical")) && (
                          <div className="mt-4 p-3 rounded-lg bg-amber-500/10 border border-amber-500/30">
                            <p className="text-sm text-amber-700 dark:text-amber-400">
                              <AlertTriangle className="h-4 w-4 inline mr-1" />
                              This system processes sensitive data. Ensure GDPR compliance and conduct a Data Protection Impact Assessment (DPIA) if required.
                            </p>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  )}
                </TabsContent>

                <TabsContent value="requirements" className="mt-6 space-y-4">
                  {requirements.length > 0 ? (
                    <>
                      {/* Group requirements by category */}
                      {Object.entries(
                        requirements.reduce((acc, req) => {
                          const cat = req.category || "Other"
                          if (!acc[cat]) acc[cat] = []
                          acc[cat].push(req)
                          return acc
                        }, {} as Record<string, typeof requirements>)
                      ).map(([category, catReqs]) => {
                        const catCompleted = catReqs.filter(r => r.status === "verified" || r.status === "implemented").length
                        const catProgress = Math.round((catCompleted / catReqs.length) * 100)
                        return (
                          <Card key={category} className="border-border/50">
                            <CardHeader className="pb-2">
                              <div className="flex items-center justify-between">
                                <CardTitle className="text-base">{category}</CardTitle>
                                <Badge variant="outline">{catProgress}%</Badge>
                              </div>
                              <Progress value={catProgress} className="h-1.5" />
                            </CardHeader>
                            <CardContent>
                              <ul className="space-y-2">
                                {catReqs.slice(0, 5).map((req) => (
                                  <li key={req.id} className="flex items-start gap-3 text-sm">
                                    {req.status === "verified" && <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 shrink-0" />}
                                    {req.status === "implemented" && <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />}
                                    {req.status === "in_progress" && <Clock className="h-4 w-4 text-amber-500 mt-0.5 shrink-0" />}
                                    {req.status === "not_started" && <Clock className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />}
                                    <div className="flex-1 min-w-0">
                                      <span className="text-muted-foreground text-xs">{req.article}</span>
                                      <p className="truncate">{req.requirementId}</p>
                                    </div>
                                    <Badge
                                      variant="outline"
                                      className={cn(
                                        "text-xs shrink-0",
                                        req.status === "verified" && "border-accent/50 bg-accent/10 text-accent",
                                        req.status === "implemented" && "border-primary/50 bg-primary/10 text-primary",
                                        req.status === "in_progress" && "border-amber-500/50 bg-amber-500/10 text-amber-600",
                                        req.status === "not_started" && "border-muted-foreground/50"
                                      )}
                                    >
                                      {req.status?.replace(/_/g, " ")}
                                    </Badge>
                                  </li>
                                ))}
                                {catReqs.length > 5 && (
                                  <li className="text-xs text-muted-foreground pl-7">
                                    + {catReqs.length - 5} more requirements
                                  </li>
                                )}
                              </ul>
                            </CardContent>
                          </Card>
                        )
                      })}
                      <div className="flex justify-center">
                        <Button asChild>
                          <Link href={`/assess/requirements/${system.id}`}>
                            View All Requirements
                          </Link>
                        </Button>
                      </div>
                    </>
                  ) : (
                    <Card className="border-border/50">
                      <CardContent className="py-12 text-center">
                        <ClipboardCheck className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                        <h3 className="font-semibold mb-1">No Requirements Tracked</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          Complete risk classification and role determination to see applicable requirements.
                        </p>
                        <Button asChild>
                          <Link href="/assess/classification">
                            Start Classification
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  )}
                </TabsContent>

                <TabsContent value="assessments" className="mt-6 space-y-6">
                  {/* Quick Assessment Actions - Client Component with Modal */}
                  <SystemAssessmentActions
                    systemId={system.id}
                    systemName={system.name}
                    riskLevel={system.riskLevel}
                    operatorRole={system.operatorRole}
                  />

                  {/* Assessment History */}
                  {systemAssessments.length > 0 ? (
                    <div className="space-y-4">
                      <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Assessment History</h3>
                      {systemAssessments.map((assessment) => (
                        <Card key={assessment.id} className="border-border/50 hover:border-primary/30 transition-colors">
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className={cn(
                                  "flex h-10 w-10 items-center justify-center rounded-lg",
                                  assessment.status === "completed" ? "bg-accent/10" : "bg-amber-500/10"
                                )}>
                                  <ClipboardCheck className={cn(
                                    "h-5 w-5",
                                    assessment.status === "completed" ? "text-accent" : "text-amber-500"
                                  )} />
                                </div>
                                <div>
                                  <p className="font-medium">{assessment.type.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase())}</p>
                                  <p className="text-sm text-muted-foreground">
                                    {formatDate(assessment.completedAt || assessment.createdAt)}
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-center gap-4">
                                {assessment.score !== null && (
                                  <div className="text-right">
                                    <p className={cn(
                                      "text-2xl font-bold",
                                      assessment.score >= 80 ? "text-accent" : assessment.score >= 50 ? "text-amber-600" : "text-destructive"
                                    )}>{assessment.score}%</p>
                                    <p className="text-xs text-muted-foreground">Score</p>
                                  </div>
                                )}
                                <Badge variant={assessment.status === "completed" ? "default" : "secondary"}>
                                  {assessment.status}
                                </Badge>
                                <Button variant="outline" size="sm" asChild>
                                  <Link href={`/assess/assessments/${assessment.id}`}>
                                    View Details
                                  </Link>
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <Card className="border-border/50">
                      <CardContent className="py-8 text-center">
                        <ClipboardCheck className="h-10 w-10 mx-auto text-muted-foreground mb-3" />
                        <h3 className="font-semibold mb-1">No Assessment History</h3>
                        <p className="text-sm text-muted-foreground">
                          Use the options above to run your first assessment for this system.
                        </p>
                      </CardContent>
                    </Card>
                  )}
                </TabsContent>

                <TabsContent value="gaps" className="mt-6 space-y-4">
                  {gaps.length > 0 ? (
                    <>
                      {/* Priority summary */}
                      <div className="grid gap-4 sm:grid-cols-3">
                        <Card className={cn("border-2", gapMetrics.critical > 0 ? "border-destructive/30" : "border-border/50")}>
                          <CardContent className="p-4">
                            <div className="flex items-center gap-3">
                              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-destructive/10">
                                <AlertTriangle className="h-5 w-5 text-destructive" />
                              </div>
                              <div>
                                <p className="text-2xl font-bold text-destructive">{gapMetrics.critical}</p>
                                <p className="text-xs text-muted-foreground">Critical Priority</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                        <Card className={cn("border-2", gapMetrics.high > 0 ? "border-amber-500/30" : "border-border/50")}>
                          <CardContent className="p-4">
                            <div className="flex items-center gap-3">
                              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10">
                                <AlertTriangle className="h-5 w-5 text-amber-500" />
                              </div>
                              <div>
                                <p className="text-2xl font-bold text-amber-600">{gapMetrics.high}</p>
                                <p className="text-xs text-muted-foreground">High Priority</p>
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
                                <p className="text-2xl font-bold text-accent">{gapMetrics.compliant}</p>
                                <p className="text-xs text-muted-foreground">Compliant</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>

                      {/* Gap list */}
                      <Card className="border-border/50">
                        <CardHeader>
                          <CardTitle className="text-base">Gap Analysis Results</CardTitle>
                          <CardDescription>
                            {gapMetrics.gap} gaps identified, {gapMetrics.partial} partially addressed
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-3">
                            {gaps.filter(g => g.status !== "compliant").slice(0, 8).map((gap) => (
                              <li key={gap.id} className="flex items-start gap-3 text-sm border-b border-border/30 pb-3 last:border-0 last:pb-0">
                                <div className={cn(
                                  "flex h-6 w-6 items-center justify-center rounded shrink-0 mt-0.5",
                                  gap.priority === "critical" && "bg-destructive/10",
                                  gap.priority === "high" && "bg-amber-500/10",
                                  gap.priority === "medium" && "bg-primary/10",
                                  gap.priority === "low" && "bg-muted"
                                )}>
                                  <AlertTriangle className={cn(
                                    "h-3.5 w-3.5",
                                    gap.priority === "critical" && "text-destructive",
                                    gap.priority === "high" && "text-amber-500",
                                    gap.priority === "medium" && "text-primary",
                                    gap.priority === "low" && "text-muted-foreground"
                                  )} />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-2 mb-1">
                                    <span className="font-medium">{gap.category}</span>
                                    <Badge variant="outline" className="text-xs capitalize">{gap.priority}</Badge>
                                    <Badge
                                      variant="outline"
                                      className={cn(
                                        "text-xs",
                                        gap.status === "gap" && "border-destructive/50 text-destructive",
                                        gap.status === "partial" && "border-amber-500/50 text-amber-600"
                                      )}
                                    >
                                      {gap.status}
                                    </Badge>
                                  </div>
                                  <p className="text-muted-foreground text-xs">{gap.article}</p>
                                  {gap.remediation && (
                                    <p className="text-xs mt-1 text-primary">
                                      → {gap.remediation}
                                    </p>
                                  )}
                                </div>
                              </li>
                            ))}
                          </ul>
                          {gaps.filter(g => g.status !== "compliant").length > 8 && (
                            <p className="text-xs text-muted-foreground mt-3 text-center">
                              + {gaps.filter(g => g.status !== "compliant").length - 8} more gaps
                            </p>
                          )}
                        </CardContent>
                      </Card>
                      <div className="flex justify-center">
                        <Button asChild>
                          <Link href={`/assess/comply?systemId=${system.id}`}>
                            View Full Gap Analysis
                          </Link>
                        </Button>
                      </div>
                    </>
                  ) : (
                    <Card className="border-border/50">
                      <CardContent className="py-12 text-center">
                        <AlertTriangle className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                        <h3 className="font-semibold mb-1">No Gap Analysis Yet</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          Complete an assessment to identify compliance gaps.
                        </p>
                        <Button asChild>
                          <Link href="/assess/gap-analysis">
                            Run Gap Analysis
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  )}
                </TabsContent>

                <TabsContent value="history" className="mt-6">
                  <Card className="border-border/50">
                    <CardContent className="p-4">
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/10">
                            <Activity className="h-4 w-4 text-accent" />
                          </div>
                          <div>
                            <p className="text-sm font-medium">System Created</p>
                            <p className="text-xs text-muted-foreground">{formatDate(system.createdAt)}</p>
                          </div>
                        </div>
                        {system.updatedAt && system.updatedAt !== system.createdAt && (
                          <div className="flex items-start gap-3">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                              <Settings className="h-4 w-4 text-primary" />
                            </div>
                            <div>
                              <p className="text-sm font-medium">Last Updated</p>
                              <p className="text-xs text-muted-foreground">{formatDate(system.updatedAt)}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="text-base">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link href={`/assess/classification?systemId=${system.id}&type=comprehensive-risk-classification`}>
                      <BarChart3 className="mr-2 h-4 w-4" />
                      Run Risk Classification
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link href={`/assess/classification?systemId=${system.id}`}>
                      <ClipboardCheck className="mr-2 h-4 w-4" />
                      Start Compliance Assessment
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link href={`/assess/comply?systemId=${system.id}`}>
                      <AlertTriangle className="mr-2 h-4 w-4" />
                      View Compliance Status
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Compliance Checklist */}
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="text-base">Compliance Checklist</CardTitle>
                  <CardDescription>Track your progress</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {/* System registered - always true since we're viewing it */}
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-accent" />
                      <span>System registered in inventory</span>
                    </li>

                    {/* Risk classification */}
                    <li className="flex items-center gap-2 text-sm">
                      {system.riskLevel && system.riskLevel !== "unclassified" ? (
                        <CheckCircle2 className="h-4 w-4 text-accent" />
                      ) : (
                        <Clock className="h-4 w-4 text-muted-foreground" />
                      )}
                      <span className={cn(
                        (!system.riskLevel || system.riskLevel === "unclassified") && "text-muted-foreground"
                      )}>
                        Risk classification completed
                      </span>
                    </li>

                    {/* Operator role determined */}
                    <li className="flex items-center gap-2 text-sm">
                      {system.operatorRole ? (
                        <CheckCircle2 className="h-4 w-4 text-accent" />
                      ) : (
                        <Clock className="h-4 w-4 text-muted-foreground" />
                      )}
                      <span className={cn(!system.operatorRole && "text-muted-foreground")}>
                        Operator role determined
                      </span>
                    </li>

                    {/* Requirements tracked */}
                    <li className="flex items-center gap-2 text-sm">
                      {requirements.length > 0 ? (
                        <CheckCircle2 className="h-4 w-4 text-accent" />
                      ) : (
                        <Clock className="h-4 w-4 text-muted-foreground" />
                      )}
                      <span className={cn(requirements.length === 0 && "text-muted-foreground")}>
                        Requirements tracked ({requirements.length})
                      </span>
                    </li>

                    {/* Gap analysis */}
                    <li className="flex items-center gap-2 text-sm">
                      {gaps.length > 0 ? (
                        <CheckCircle2 className="h-4 w-4 text-accent" />
                      ) : (
                        <Clock className="h-4 w-4 text-muted-foreground" />
                      )}
                      <span className={cn(gaps.length === 0 && "text-muted-foreground")}>
                        Gap analysis completed
                      </span>
                    </li>

                    {/* Compliance progress */}
                    <li className="flex items-center gap-2 text-sm">
                      {reqProgress >= 100 ? (
                        <CheckCircle2 className="h-4 w-4 text-accent" />
                      ) : reqProgress > 0 ? (
                        <Clock className="h-4 w-4 text-amber-500" />
                      ) : (
                        <Clock className="h-4 w-4 text-muted-foreground" />
                      )}
                      <span className={cn(
                        reqProgress === 0 && "text-muted-foreground",
                        reqProgress > 0 && reqProgress < 100 && "text-amber-600"
                      )}>
                        {reqProgress >= 100 ? "All requirements met" : `Requirements progress (${reqProgress}%)`}
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Related Resources */}
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="text-base">Related Resources</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {system.riskLevel === "high" && (
                    <Link
                      href="/resources/regulation/chapter-3-high-risk-ai-systems"
                      className="flex items-center gap-2 text-sm text-primary hover:underline"
                    >
                      <ExternalLink className="h-3 w-3" />
                      Chapter 3: High-Risk AI Systems
                    </Link>
                  )}
                  <Link
                    href="/resources/regulation/chapter-2-prohibited-practices"
                    className="flex items-center gap-2 text-sm text-primary hover:underline"
                  >
                    <ExternalLink className="h-3 w-3" />
                    Article 5: Prohibited Practices
                  </Link>
                  <Link
                    href="/resources/glossary"
                    className="flex items-center gap-2 text-sm text-primary hover:underline"
                  >
                    <ExternalLink className="h-3 w-3" />
                    EU AI Act Glossary
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
