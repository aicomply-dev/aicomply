import Link from "next/link"
import { notFound } from "next/navigation"
import { NavWithAuth } from "@/components/nav-with-auth"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  CheckCircle2,
  Circle,
  FileText,
  ArrowLeft,
  ArrowRight,
  AlertTriangle,
  Clock,
  Target,
  Shield,
  Database,
  Eye,
  Users,
  Activity,
  AlertCircle,
  GraduationCap,
  Award,
  ClipboardList,
  FileSearch,
  CheckSquare,
  Calendar,
  User,
  BookOpen,
  TrendingUp,
  TrendingDown,
  Minus,
  ChevronRight,
  ExternalLink,
  List,
  BarChart3,
  Table2,
} from "lucide-react"
import { cn } from "@/lib/utils"
import {
  standards,
  type Standard,
  type Control,
  type KPI,
} from "@/lib/data/compliance-framework"
import { getStandards, getStandardById, getStandardContent, getStandardParsed, getControlsByStandard } from "@/lib/actions/standards"
import { DocumentLinker } from "@/components/document-linker"

// Import new structured components
import { StandardMetadataCard } from "@/components/standards/standard-metadata-card"
import { ControlCard as ParsedControlCard, ControlCardList } from "@/components/standards/control-card"
import { KPICard as ParsedKPICard, KPICardGrid } from "@/components/standards/kpi-card"
import { RACIMatrix } from "@/components/standards/raci-matrix"
import { ComplianceChecklist, SimpleChecklist } from "@/components/standards/compliance-checklist"

// Icon mapping for categories
const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  classification: FileSearch,
  risk: AlertTriangle,
  data: Database,
  documentation: FileText,
  transparency: Eye,
  oversight: Users,
  security: Shield,
  quality: CheckSquare,
  conformity: Award,
  registration: ClipboardList,
  monitoring: Activity,
  incident: AlertCircle,
  training: GraduationCap,
}

// Category colors
const categoryColors: Record<string, string> = {
  classification: "primary",
  risk: "destructive",
  data: "accent",
  documentation: "chart-3",
  transparency: "chart-5",
  oversight: "primary",
  security: "destructive",
  quality: "accent",
  conformity: "chart-3",
  registration: "chart-5",
  monitoring: "primary",
  incident: "destructive",
  training: "accent",
}

// Risk level colors
const riskLevelColors: Record<string, { bg: string; text: string; border: string }> = {
  critical: { bg: "bg-red-500/10", text: "text-red-500", border: "border-red-500/30" },
  high: { bg: "bg-orange-500/10", text: "text-orange-500", border: "border-orange-500/30" },
  medium: { bg: "bg-amber-500/10", text: "text-amber-500", border: "border-amber-500/30" },
  low: { bg: "bg-emerald-500/10", text: "text-emerald-500", border: "border-emerald-500/30" },
}

// Control type icons
const controlTypeIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  preventive: Shield,
  detective: Eye,
  corrective: Activity,
}

// KPI status icons
const kpiStatusIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  on_track: TrendingUp,
  at_risk: Minus,
  off_track: TrendingDown,
}

const kpiStatusColors: Record<string, string> = {
  on_track: "text-accent",
  at_risk: "text-amber-500",
  off_track: "text-destructive",
}

export default async function StandardDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const standard = await getStandardById(id)

  if (!standard) {
    notFound()
  }

  // Fetch controls immediately (fast, in-memory operation)
  const extractedControls = await getControlsByStandard(id)
  
  // Fetch parsed content asynchronously with timeout protection
  // Page loads immediately with controls, parsed content appears when ready
  const [parsedResult, markdownResult] = await Promise.allSettled([
    getStandardParsed(id),
    getStandardContent(id),
  ])
  
  const parsedStandard = parsedResult.status === 'fulfilled' ? parsedResult.value : null
  const markdownContent = markdownResult.status === 'fulfilled' ? markdownResult.value : null

  // Determine if we have enough parsed data to show structured view
  const hasParsedContent = parsedStandard && (
    parsedStandard.controls.length > 0 ||
    parsedStandard.kpis.length > 0 ||
    parsedStandard.rolesResponsibilities.activities.length > 0
  )

  const Icon = categoryIcons[standard.category] || FileText
  const color = categoryColors[standard.category] || "primary"

  // Use extracted controls if available, otherwise fall back to standard.controls
  const controlsToUse = extractedControls.length > 0 ? extractedControls : standard.controls

  // Convert StandardControl to ControlDefinition format for display components
  // This allows us to use the same ControlCard component for both parsed and extracted controls
  const convertedControls = extractedControls.length > 0
    ? extractedControls.map((control, idx) => ({
        id: control.id,
        name: control.name,
        type: control.type as "preventive" | "detective" | "corrective",
        frequency: control.frequency,
        riskLevel: control.riskLevel as "critical" | "high" | "medium" | "low",
        objective: control.objective,
        requirements: [], // Will be populated from parsed content if available
        evidenceRequired: [],
        auditVerification: [],
        evidence: [],
        status: "not_started" as const,
        progress: 0,
      }))
    : standard.controls.map((control, idx) => ({
        id: control.id,
        name: control.name,
        type: control.type as "preventive" | "detective" | "corrective",
        frequency: control.frequency,
        riskLevel: control.riskLevel as "critical" | "high" | "medium" | "low",
        objective: control.objective,
        requirements: control.requirements,
        evidenceRequired: control.evidence,
        auditVerification: [],
        evidence: [],
        status: "not_started" as const,
        progress: 0,
      }))

  // Calculate stats
  const completedControls = standard.controls.filter((c) => c.status === "compliant").length
  const inProgressControls = standard.controls.filter((c) => c.status === "in_progress").length
  const notStartedControls = standard.controls.filter((c) => c.status === "not_started").length
  const totalControls = extractedControls.length > 0 ? extractedControls.length : standard.controls.length

  // Find adjacent standards for navigation
  const currentIndex = standards.findIndex((s) => s.id === standard.id)
  const prevStandard = currentIndex > 0 ? standards[currentIndex - 1] : null
  const nextStandard = currentIndex < standards.length - 1 ? standards[currentIndex + 1] : null

  return (
    <div className="flex min-h-screen flex-col">
      <NavWithAuth />

      <main className="flex-1">
        {/* Header */}
        <section className={`relative overflow-hidden border-b border-border/50 bg-gradient-to-br from-${color}/5 via-background to-background py-12`}>
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <div className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/implement" className="hover:text-foreground transition-colors">
                Implement
              </Link>
              <ChevronRight className="h-4 w-4" />
              <Link href="/implement/standards" className="hover:text-foreground transition-colors">
                Standards
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground font-medium">{standard.standardId}</span>
            </div>

            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-4">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-xl bg-${color}/10`}>
                    <Icon className={`h-7 w-7 text-${color}`} />
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className="text-sm font-mono">
                        {standard.standardId}
                      </Badge>
                      <Badge
                        className={cn(
                          "capitalize",
                          standard.status === "approved" && "bg-accent/10 text-accent border-accent/30",
                          standard.status === "in_review" && "bg-primary/10 text-primary border-primary/30",
                          standard.status === "draft" && "bg-chart-3/10 text-chart-3 border-chart-3/30"
                        )}
                        variant="outline"
                      >
                        {standard.status}
                      </Badge>
                      <Badge variant="secondary">v{standard.version}</Badge>
                    </div>
                    <h1 className="mt-2 text-2xl font-bold tracking-tight lg:text-3xl">
                      {standard.title}
                    </h1>
                  </div>
                </div>
                <p className="mt-4 max-w-3xl text-muted-foreground">
                  {standard.description}
                </p>
              </div>

              {/* Progress Circle */}
              <div className="flex items-center gap-6 rounded-2xl border border-border/50 bg-card p-6">
                <div className="relative h-24 w-24">
                  <svg viewBox="0 0 100 100" className="transform -rotate-90">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="8"
                      className="text-muted"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="8"
                      strokeDasharray={`${standard.progress * 2.51} 251`}
                      className={cn(
                        standard.progress >= 80 && "text-accent",
                        standard.progress >= 50 && standard.progress < 80 && "text-primary",
                        standard.progress < 50 && "text-chart-3"
                      )}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold">{standard.progress}%</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Overall Progress</p>
                  <p className="text-lg font-semibold">{completedControls}/{totalControls} Controls</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Metadata Section */}
        <section className="border-b border-border/50 py-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              <div className="flex items-center gap-3 rounded-lg bg-muted/50 p-4">
                <User className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">Owner</p>
                  <p className="font-medium">{standard.owner}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-muted/50 p-4">
                <Calendar className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">Effective Date</p>
                  <p className="font-medium">{new Date(standard.effectiveDate).toLocaleDateString()}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-muted/50 p-4">
                <Clock className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">Next Review</p>
                  <p className="font-medium">{new Date(standard.nextReviewDate).toLocaleDateString()}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-muted/50 p-4">
                <FileText className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">Parent Policy</p>
                  <Link href="/implement/policies/pol-ai-001" className="font-medium text-primary hover:underline">
                    {standard.parentPolicy}
                  </Link>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-muted/50 p-4">
                <BookOpen className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">Applicability</p>
                  <p className="font-medium">{standard.applicability}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EU AI Act and ISO References */}
        <section className="py-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <Card className="border-primary/20">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    EU AI Act References
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {standard.euAiActArticles.map((article) => (
                      <Badge key={article} variant="secondary" className="bg-primary/10 text-primary">
                        {article}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-accent/20">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base flex items-center gap-2">
                    <Award className="h-5 w-5 text-accent" />
                    ISO 42001 Alignment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {standard.iso42001Clauses.length > 0 ? (
                      standard.iso42001Clauses.map((clause) => (
                        <Badge key={clause} variant="secondary" className="bg-accent/10 text-accent">
                          {clause}
                        </Badge>
                      ))
                    ) : (
                      <span className="text-sm text-muted-foreground">No ISO 42001 clauses mapped</span>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Structured Standard Content with Tabs */}
        {hasParsedContent && parsedStandard && (
          <section className="py-8">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <Tabs defaultValue="overview" className="space-y-6">
                <div className="flex items-center justify-between gap-4 flex-wrap">
                  <TabsList className="h-auto flex-wrap">
                    <TabsTrigger value="overview" className="gap-2">
                      <BookOpen className="h-4 w-4" />
                      Overview
                    </TabsTrigger>
                    {parsedStandard.controls.length > 0 && (
                      <TabsTrigger value="controls" className="gap-2">
                        <Shield className="h-4 w-4" />
                        Controls ({parsedStandard.controls.length})
                      </TabsTrigger>
                    )}
                    {parsedStandard.kpis.length > 0 && (
                      <TabsTrigger value="kpis" className="gap-2">
                        <BarChart3 className="h-4 w-4" />
                        KPIs ({parsedStandard.kpis.length})
                      </TabsTrigger>
                    )}
                    {parsedStandard.rolesResponsibilities.activities.length > 0 && (
                      <TabsTrigger value="raci" className="gap-2">
                        <Table2 className="h-4 w-4" />
                        RACI Matrix
                      </TabsTrigger>
                    )}
                    {parsedStandard.training.length > 0 && (
                      <TabsTrigger value="training" className="gap-2">
                        <GraduationCap className="h-4 w-4" />
                        Training
                      </TabsTrigger>
                    )}
                    <TabsTrigger value="document" className="gap-2">
                      <FileText className="h-4 w-4" />
                      Full Document
                    </TabsTrigger>
                  </TabsList>
                </div>

                {/* Overview Tab */}
                <TabsContent value="overview" className="space-y-6">
                  {/* Parsed Metadata Card */}
                  <StandardMetadataCard metadata={parsedStandard.metadata} />

                  {/* Objective Section */}
                  {parsedStandard.objective && (
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Target className="h-5 w-5" />
                          Objective
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{parsedStandard.objective.primary}</p>
                        {parsedStandard.objective.goals && parsedStandard.objective.goals.length > 0 && (
                          <div className="mt-4">
                            <h4 className="text-sm font-semibold mb-2">Goals</h4>
                            <ul className="space-y-1">
                              {parsedStandard.objective.goals.map((goal, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                  <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                                  {goal}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  )}

                  {/* Scope Section */}
                  {parsedStandard.scope && (
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <List className="h-5 w-5" />
                          Scope
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="grid gap-6 md:grid-cols-2">
                        {parsedStandard.scope.inclusions && parsedStandard.scope.inclusions.length > 0 && (
                          <div>
                            <h4 className="text-sm font-semibold mb-2 text-accent">In Scope</h4>
                            <ul className="space-y-1">
                              {parsedStandard.scope.inclusions.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                  <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {parsedStandard.scope.exclusions && parsedStandard.scope.exclusions.length > 0 && (
                          <div>
                            <h4 className="text-sm font-semibold mb-2 text-destructive">Out of Scope</h4>
                            <ul className="space-y-1">
                              {parsedStandard.scope.exclusions.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                  <AlertCircle className="h-4 w-4 text-destructive mt-0.5 shrink-0" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  )}

                  {/* Quick Stats */}
                  <div className="grid gap-4 md:grid-cols-4">
                    <Card>
                      <CardContent className="pt-6">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10">
                            <Shield className="h-5 w-5 text-blue-500" />
                          </div>
                          <div>
                            <p className="text-2xl font-bold">{parsedStandard.controls.length}</p>
                            <p className="text-xs text-muted-foreground">Controls</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/10">
                            <BarChart3 className="h-5 w-5 text-purple-500" />
                          </div>
                          <div>
                            <p className="text-2xl font-bold">{parsedStandard.kpis.length}</p>
                            <p className="text-xs text-muted-foreground">KPIs</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10">
                            <GraduationCap className="h-5 w-5 text-amber-500" />
                          </div>
                          <div>
                            <p className="text-2xl font-bold">{parsedStandard.training.length}</p>
                            <p className="text-xs text-muted-foreground">Training Courses</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-500/10">
                            <Users className="h-5 w-5 text-teal-500" />
                          </div>
                          <div>
                            <p className="text-2xl font-bold">{parsedStandard.rolesResponsibilities.roles.length}</p>
                            <p className="text-xs text-muted-foreground">Roles Defined</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                {/* Controls Tab */}
                {parsedStandard.controls.length > 0 && (
                  <TabsContent value="controls" className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold">Controls</h3>
                        <p className="text-sm text-muted-foreground">
                          {parsedStandard.controls.length} controls defined in this standard
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        {["critical", "high", "medium", "low"].map((level) => {
                          const count = parsedStandard.controls.filter(c => c.riskLevel === level).length
                          if (count === 0) return null
                          return (
                            <Badge
                              key={level}
                              variant="outline"
                              className={cn(
                                "text-xs",
                                level === "critical" && "bg-red-500/10 text-red-600 border-red-500/30",
                                level === "high" && "bg-orange-500/10 text-orange-600 border-orange-500/30",
                                level === "medium" && "bg-amber-500/10 text-amber-600 border-amber-500/30",
                                level === "low" && "bg-emerald-500/10 text-emerald-600 border-emerald-500/30"
                              )}
                            >
                              {count} {level}
                            </Badge>
                          )
                        })}
                      </div>
                    </div>
                    <ControlCardList controls={parsedStandard.controls} />
                  </TabsContent>
                )}

                {/* KPIs Tab */}
                {parsedStandard.kpis.length > 0 && (
                  <TabsContent value="kpis" className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold">Key Performance Indicators</h3>
                      <p className="text-sm text-muted-foreground">
                        {parsedStandard.kpis.length} KPIs to track compliance with this standard
                      </p>
                    </div>
                    <KPICardGrid kpis={parsedStandard.kpis} />
                  </TabsContent>
                )}

                {/* RACI Matrix Tab */}
                {parsedStandard.rolesResponsibilities.activities.length > 0 && (
                  <TabsContent value="raci" className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold">Roles & Responsibilities</h3>
                      <p className="text-sm text-muted-foreground">
                        RACI matrix defining accountability for {parsedStandard.rolesResponsibilities.activities.length} activities
                      </p>
                    </div>
                    <RACIMatrix matrix={parsedStandard.rolesResponsibilities} />
                  </TabsContent>
                )}

                {/* Training Tab */}
                {parsedStandard.training.length > 0 && (
                  <TabsContent value="training" className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold">Training Requirements</h3>
                      <p className="text-sm text-muted-foreground">
                        {parsedStandard.training.length} training courses required for compliance
                      </p>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                      {parsedStandard.training.map((training, idx) => (
                        <Card key={idx}>
                          <CardHeader className="pb-3">
                            <div className="flex items-start justify-between gap-2">
                              <div>
                                <CardTitle className="text-base">{training.course}</CardTitle>
                                <CardDescription>{training.role}</CardDescription>
                              </div>
                              {training.assessmentRequired && (
                                <Badge variant="outline" className="bg-amber-500/10 text-amber-600 border-amber-500/30">
                                  Assessment Required
                                </Badge>
                              )}
                            </div>
                          </CardHeader>
                          <CardContent className="space-y-3">
                            <p className="text-sm text-muted-foreground">{training.content}</p>
                            <div className="flex flex-wrap gap-4 text-sm">
                              <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4 text-muted-foreground" />
                                <span>{training.duration}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4 text-muted-foreground" />
                                <span>{training.frequency}</span>
                              </div>
                              {training.passingScore && (
                                <div className="flex items-center gap-2">
                                  <Target className="h-4 w-4 text-muted-foreground" />
                                  <span>Pass: {training.passingScore}</span>
                                </div>
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                )}

                {/* Full Document Tab */}
                <TabsContent value="document">
                  {markdownContent && (
                    <Card className="border-border/50">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <BookOpen className="h-5 w-5" />
                          Full Standard Document
                        </CardTitle>
                        <CardDescription>
                          Complete standard documentation with all requirements, controls, and guidance
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <DocumentLinker
                          content={markdownContent}
                          className="prose prose-neutral dark:prose-invert max-w-none prose-headings:scroll-mt-20 prose-h2:text-xl prose-h2:font-bold prose-h2:mt-8 prose-h2:mb-4 prose-h2:pb-2 prose-h2:border-b prose-h3:text-lg prose-h3:font-semibold prose-h3:mt-6 prose-h3:mb-3 prose-h4:text-base prose-h4:font-medium prose-h4:mt-4 prose-table:text-sm prose-th:bg-muted prose-th:p-3 prose-td:p-3 prose-td:border prose-tr:border-b"
                        />
                      </CardContent>
                    </Card>
                  )}
                </TabsContent>
              </Tabs>
            </div>
          </section>
        )}

        {/* Fallback to raw markdown if no parsed content */}
        {!hasParsedContent && markdownContent && (
          <section className="py-8">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    Full Standard Document
                  </CardTitle>
                  <CardDescription>
                    Complete standard documentation with all requirements, controls, and guidance
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <DocumentLinker
                    content={markdownContent}
                    className="prose prose-neutral dark:prose-invert max-w-none prose-headings:scroll-mt-20 prose-h2:text-xl prose-h2:font-bold prose-h2:mt-8 prose-h2:mb-4 prose-h2:pb-2 prose-h2:border-b prose-h3:text-lg prose-h3:font-semibold prose-h3:mt-6 prose-h3:mb-3 prose-h4:text-base prose-h4:font-medium prose-h4:mt-4 prose-table:text-sm prose-th:bg-muted prose-th:p-3 prose-td:p-3 prose-td:border prose-tr:border-b"
                  />
                </CardContent>
              </Card>
            </div>
          </section>
        )}

        {/* Controls Section - Only show if no parsed content (fallback) */}
        {!hasParsedContent && (
          <section className="py-8">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold">Controls</h2>
                  <p className="text-muted-foreground">
                    {totalControls} controls with {completedControls} compliant, {inProgressControls} in progress
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-accent" />
                    <span className="text-sm">Compliant</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-primary" />
                    <span className="text-sm">In Progress</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-muted-foreground/30" />
                    <span className="text-sm">Not Started</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {convertedControls.map((control) => (
                  <ControlCard key={control.id} control={control} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* KPIs Section - Only show if no parsed content (fallback) */}
        {!hasParsedContent && (
          <section className="relative overflow-hidden py-12">
            <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background" />
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mb-6">
                <h2 className="text-2xl font-bold">Key Performance Indicators</h2>
                <p className="text-muted-foreground">
                  Track compliance metrics and targets for this standard
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {standard.kpis.map((kpi) => (
                  <KPICard key={kpi.id} kpi={kpi} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Navigation Section */}
        <section className="py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              {prevStandard ? (
                <Link href={`/implement/standards/${prevStandard.id}`}>
                  <Button variant="outline" className="gap-2">
                    <ArrowLeft className="h-4 w-4" />
                    <div className="text-left">
                      <p className="text-xs text-muted-foreground">Previous</p>
                      <p className="font-medium">{prevStandard.standardId}</p>
                    </div>
                  </Button>
                </Link>
              ) : (
                <div />
              )}

              <Button asChild>
                <Link href="/implement/standards">
                  View All Standards
                </Link>
              </Button>

              {nextStandard ? (
                <Link href={`/implement/standards/${nextStandard.id}`}>
                  <Button variant="outline" className="gap-2">
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground">Next</p>
                      <p className="font-medium">{nextStandard.standardId}</p>
                    </div>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

// Control Card Component
function ControlCard({ control }: { control: Control }) {
  const TypeIcon = controlTypeIcons[control.type] || Shield
  const riskColors = riskLevelColors[control.riskLevel] || riskLevelColors.medium

  return (
    <Card
      className={cn(
        "overflow-hidden transition-all",
        control.status === "compliant" && "border-accent/30",
        control.status === "in_progress" && "border-primary/30",
        control.status === "not_started" && "border-muted-foreground/20",
        control.status === "non_compliant" && "border-destructive/30"
      )}
    >
      {/* Progress bar at top */}
      <div className="h-1 bg-muted">
        <div
          className={cn(
            "h-full transition-all",
            control.status === "compliant" && "bg-accent",
            control.status === "in_progress" && "bg-primary",
            control.status === "not_started" && "bg-muted-foreground/20",
            control.status === "non_compliant" && "bg-destructive"
          )}
          style={{ width: `${control.progress}%` }}
        />
      </div>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="details" className="border-none">
          <AccordionTrigger className="px-6 py-4 hover:no-underline">
            <div className="flex flex-1 items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                {control.status === "compliant" ? (
                  <CheckCircle2 className="h-5 w-5 text-accent" />
                ) : control.status === "in_progress" ? (
                  <Clock className="h-5 w-5 text-primary" />
                ) : (
                  <Circle className="h-5 w-5 text-muted-foreground" />
                )}
              </div>
              <div className="flex-1 text-left">
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-xs font-mono">
                    {control.id}
                  </Badge>
                  <Badge
                    variant="outline"
                    className={cn("text-xs capitalize", riskColors.bg, riskColors.text, riskColors.border)}
                  >
                    {control.riskLevel}
                  </Badge>
                  <Badge variant="secondary" className="text-xs capitalize">
                    <TypeIcon className="mr-1 h-3 w-3" />
                    {control.type}
                  </Badge>
                </div>
                <p className="mt-1 font-semibold">{control.name}</p>
              </div>
              <div className="flex items-center gap-3 text-right">
                <div>
                  <p className="text-sm text-muted-foreground">Progress</p>
                  <p className="text-lg font-bold">{control.progress}%</p>
                </div>
              </div>
            </div>
          </AccordionTrigger>

          <AccordionContent className="px-6 pb-6">
            <div className="ml-14 space-y-6">
              {/* Objective */}
              <div>
                <h4 className="font-semibold mb-2">Objective</h4>
                <p className="text-muted-foreground">{control.objective}</p>
              </div>

              {/* Frequency */}
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">
                  <span className="font-medium">Frequency:</span> {control.frequency}
                </span>
              </div>

              {/* Requirements */}
              <div>
                <h4 className="font-semibold mb-3">Requirements</h4>
                <div className="space-y-2">
                  {control.requirements.map((req, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="mt-1 flex h-5 w-5 items-center justify-center rounded border border-border">
                        {control.status === "compliant" ? (
                          <CheckCircle2 className="h-4 w-4 text-accent" />
                        ) : (
                          <span className="text-xs text-muted-foreground">{idx + 1}</span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{req}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Evidence */}
              <div>
                <h4 className="font-semibold mb-3">Required Evidence</h4>
                <div className="flex flex-wrap gap-2">
                  {control.evidence.map((ev, idx) => (
                    <Badge key={idx} variant="outline" className="bg-muted/50">
                      <FileText className="mr-1 h-3 w-3" />
                      {ev}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  )
}

// KPI Card Component
function KPICard({ kpi }: { kpi: KPI }) {
  const StatusIcon = kpiStatusIcons[kpi.status] || Minus
  const statusColor = kpiStatusColors[kpi.status] || "text-muted-foreground"

  return (
    <Card
      className={cn(
        "transition-all",
        kpi.status === "on_track" && "border-accent/30",
        kpi.status === "at_risk" && "border-amber-500/30",
        kpi.status === "off_track" && "border-destructive/30"
      )}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <Badge variant="outline" className="text-xs font-mono">
            {kpi.id}
          </Badge>
          <div className={cn("flex items-center gap-1", statusColor)}>
            <StatusIcon className="h-4 w-4" />
            <span className="text-xs font-medium capitalize">{kpi.status.replace("_", " ")}</span>
          </div>
        </div>
        <CardTitle className="text-base mt-2">{kpi.name}</CardTitle>
        <CardDescription>{kpi.definition}</CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-lg bg-muted/50 p-3">
            <p className="text-xs text-muted-foreground">Target</p>
            <p className="font-semibold text-accent">{kpi.target}</p>
          </div>
          <div className="rounded-lg bg-muted/50 p-3">
            <p className="text-xs text-muted-foreground">Current</p>
            <p className={cn("font-semibold", statusColor)}>
              {kpi.currentValue || "—"}
            </p>
          </div>
        </div>

        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <Target className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">Measurement:</span>
            <span className="font-medium">{kpi.measurement}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">Frequency:</span>
            <span className="font-medium">{kpi.frequency}</span>
          </div>
          <div className="flex items-center gap-2">
            <User className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">Owner:</span>
            <span className="font-medium">{kpi.owner}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
