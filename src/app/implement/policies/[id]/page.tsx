import Link from "next/link"
import { notFound } from "next/navigation"
import { NavWithAuth } from "@/components/nav-with-auth"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  CheckCircle2,
  FileText,
  ArrowLeft,
  ArrowRight,
  AlertTriangle,
  Clock,
  Target,
  Shield,
  Users,
  Calendar,
  User,
  BookOpen,
  TrendingUp,
  TrendingDown,
  Minus,
  ChevronRight,
  AlertOctagon,
  Layers,
  Building2,
  UserCircle,
  Scale,
  ScrollText,
} from "lucide-react"
import { cn } from "@/lib/utils"
import {
  aiPolicy,
  standards,
  getStandardById,
  calculateOverallProgress,
  type KPI,
} from "@/lib/data/compliance-framework"
import { getPolicyContent } from "@/lib/actions/policies"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

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

export default async function PolicyDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  // Currently we only have one policy
  if (id !== "pol-ai-001" && id !== aiPolicy.id) {
    notFound()
  }

  const policy = aiPolicy
  const overallProgress = calculateOverallProgress()

  // Fetch the full policy markdown content
  const markdownContent = await getPolicyContent()

  // Count requirements by type
  const requirementsWithHighRisk = policy.requirements.filter((r) => {
    const standard = getStandardById(r.supportingStandard)
    return standard?.controls.some((c) => c.riskLevel === "critical" || c.riskLevel === "high")
  })

  return (
    <div className="flex min-h-screen flex-col">
      <NavWithAuth />

      <main className="flex-1">
        {/* Header */}
        <section className="relative overflow-hidden border-b border-border/50 bg-gradient-to-br from-amber-500/5 via-background to-background py-12">
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <div className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/implement" className="hover:text-foreground transition-colors">
                Implement
              </Link>
              <ChevronRight className="h-4 w-4" />
              <Link href="/implement/policies" className="hover:text-foreground transition-colors">
                Policies
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground font-medium">{policy.policyNumber}</span>
            </div>

            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-amber-500/10">
                    <Scale className="h-7 w-7 text-amber-500" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className="text-sm font-mono">
                        {policy.policyNumber}
                      </Badge>
                      <Badge
                        className={cn(
                          "capitalize",
                          policy.status === "approved" && "bg-accent/10 text-accent border-accent/30",
                          policy.status === "in_review" && "bg-primary/10 text-primary border-primary/30",
                          policy.status === "draft" && "bg-chart-3/10 text-chart-3 border-chart-3/30"
                        )}
                        variant="outline"
                      >
                        {policy.status}
                      </Badge>
                      <Badge variant="secondary">v{policy.version}</Badge>
                    </div>
                    <h1 className="mt-2 text-2xl font-bold tracking-tight lg:text-3xl">
                      {policy.title}
                    </h1>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-6 rounded-2xl border border-border/50 bg-card p-6">
                <div className="text-center">
                  <p className="text-3xl font-bold">{policy.requirements.length}</p>
                  <p className="text-sm text-muted-foreground">Requirements</p>
                </div>
                <div className="h-12 w-px bg-border" />
                <div className="text-center">
                  <p className="text-3xl font-bold">{standards.length}</p>
                  <p className="text-sm text-muted-foreground">Standards</p>
                </div>
                <div className="h-12 w-px bg-border" />
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">{overallProgress}%</p>
                  <p className="text-sm text-muted-foreground">Progress</p>
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
                  <p className="font-medium text-sm">{policy.owner.split(",")[0]}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-muted/50 p-4">
                <UserCircle className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">Sponsor</p>
                  <p className="font-medium text-sm">{policy.sponsor.split(",")[0]}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-muted/50 p-4">
                <Calendar className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">Effective Date</p>
                  <p className="font-medium">{new Date(policy.effectiveDate).toLocaleDateString()}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-muted/50 p-4">
                <Clock className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">Next Review</p>
                  <p className="font-medium">{new Date(policy.nextReviewDate).toLocaleDateString()}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-muted/50 p-4">
                <Building2 className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">Approved By</p>
                  <p className="font-medium">{policy.approvedBy}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tabbed Content */}
        <section className="py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="overview" className="space-y-8">
              <TabsList className="grid w-full max-w-3xl grid-cols-6 p-1">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="requirements">Requirements</TabsTrigger>
                <TabsTrigger value="prohibited">Prohibited</TabsTrigger>
                <TabsTrigger value="governance">Governance</TabsTrigger>
                <TabsTrigger value="kpis">KPIs</TabsTrigger>
                <TabsTrigger value="document" className="gap-1">
                  <ScrollText className="h-4 w-4" />
                  Document
                </TabsTrigger>
              </TabsList>

              {/* Overview Tab */}
              <TabsContent value="overview" className="space-y-8">
                {/* Purpose */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="h-5 w-5 text-primary" />
                      Purpose
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{policy.purpose}</p>
                  </CardContent>
                </Card>

                {/* Scope */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-accent" />
                      Scope
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {policy.scope.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 text-accent shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Policy Statement */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-chart-3" />
                      Policy Statement
                    </CardTitle>
                    <CardDescription>
                      Core commitments guiding AI development and deployment
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {policy.policyStatement.map((statement, idx) => {
                        const [title, description] = statement.split(": ")
                        return (
                          <div
                            key={idx}
                            className="rounded-lg border border-border/50 bg-muted/30 p-4"
                          >
                            <p className="font-semibold">{title}</p>
                            <p className="mt-1 text-sm text-muted-foreground">{description}</p>
                          </div>
                        )
                      })}
                    </div>
                  </CardContent>
                </Card>

                {/* Supporting Standards Summary */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Layers className="h-5 w-5 text-chart-5" />
                      Supporting Standards
                    </CardTitle>
                    <CardDescription>
                      {standards.length} standards implementing this policy
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {standards.map((standard) => (
                        <Link key={standard.id} href={`/implement/standards/${standard.id}`}>
                          <Badge
                            variant="outline"
                            className="cursor-pointer hover:bg-primary/10 transition-colors"
                          >
                            {standard.standardId}: {standard.shortTitle}
                          </Badge>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Requirements Tab */}
              <TabsContent value="requirements" className="space-y-6">
                <div className="mb-6">
                  <h2 className="text-xl font-bold">Policy Requirements</h2>
                  <p className="text-muted-foreground">
                    {policy.requirements.length} requirements linked to supporting standards
                  </p>
                </div>

                <div className="space-y-4">
                  {policy.requirements.map((req) => {
                    const standard = getStandardById(req.supportingStandard)
                    const standardProgress = standard?.progress || 0

                    return (
                      <Card key={req.id} className="overflow-hidden">
                        <div className="h-1 bg-muted">
                          <div
                            className={cn(
                              "h-full transition-all",
                              standardProgress >= 80 && "bg-accent",
                              standardProgress >= 50 && standardProgress < 80 && "bg-primary",
                              standardProgress < 50 && "bg-chart-3"
                            )}
                            style={{ width: `${standardProgress}%` }}
                          />
                        </div>
                        <CardHeader className="pb-3">
                          <div className="flex items-start justify-between">
                            <div>
                              <div className="flex items-center gap-2">
                                <Badge variant="outline" className="font-mono text-xs">
                                  {req.id.toUpperCase()}
                                </Badge>
                                <Badge variant="secondary" className="text-xs">
                                  {req.euAiActArticle}
                                </Badge>
                              </div>
                              <CardTitle className="mt-2 text-base">{req.title}</CardTitle>
                            </div>
                            <Link href={`/implement/standards/${standard?.id}`}>
                              <Badge
                                className="cursor-pointer bg-primary/10 text-primary border-primary/30 hover:bg-primary/20"
                                variant="outline"
                              >
                                {req.supportingStandard}
                                <ArrowRight className="ml-1 h-3 w-3" />
                              </Badge>
                            </Link>
                          </div>
                          <CardDescription>{req.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div>
                              <p className="text-sm font-medium mb-2">Key Activities</p>
                              <div className="grid gap-2 sm:grid-cols-2">
                                {req.keyActivities.map((activity, idx) => (
                                  <div
                                    key={idx}
                                    className="flex items-start gap-2 text-sm text-muted-foreground"
                                  >
                                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-muted-foreground/50 shrink-0" />
                                    {activity}
                                  </div>
                                ))}
                              </div>
                            </div>
                            <div className="flex items-center justify-between pt-3 border-t border-border/50">
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Users className="h-4 w-4" />
                                <span>Applicability: {req.applicability}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Progress
                                  value={standardProgress}
                                  className={cn(
                                    "h-2 w-20",
                                    standardProgress >= 80 && "[&>div]:bg-accent",
                                    standardProgress >= 50 && standardProgress < 80 && "[&>div]:bg-primary",
                                    standardProgress < 50 && "[&>div]:bg-chart-3"
                                  )}
                                />
                                <span className="text-sm font-medium">{standardProgress}%</span>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </TabsContent>

              {/* Prohibited Practices Tab */}
              <TabsContent value="prohibited" className="space-y-6">
                <Card className="border-destructive/30 bg-destructive/5">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-destructive">
                      <AlertOctagon className="h-5 w-5" />
                      Prohibited AI Practices
                    </CardTitle>
                    <CardDescription>
                      Under EU AI Act Article 5, the following practices are strictly prohibited
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {policy.prohibitedPractices.map((practice, idx) => {
                        const [title, description] = practice.split(" - ")
                        return (
                          <div
                            key={idx}
                            className="flex items-start gap-4 rounded-lg border border-destructive/20 bg-background p-4"
                          >
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-destructive/10">
                              <AlertTriangle className="h-4 w-4 text-destructive" />
                            </div>
                            <div>
                              <p className="font-semibold">{title}</p>
                              <p className="mt-1 text-sm text-muted-foreground">{description}</p>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-4 rounded-lg bg-amber-500/10 p-4 border border-amber-500/20">
                      <AlertTriangle className="h-6 w-6 text-amber-500 shrink-0" />
                      <div>
                        <p className="font-semibold text-amber-600 dark:text-amber-400">Zero Tolerance Policy</p>
                        <p className="text-sm text-muted-foreground">
                          Any AI system found to constitute a prohibited practice must be immediately halted
                          and cannot proceed to development or deployment. See STD-AI-001 for classification procedures.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Governance Tab */}
              <TabsContent value="governance" className="space-y-6">
                <div className="grid gap-6 lg:grid-cols-2">
                  {/* AI Governance Committee */}
                  <Card className="border-primary/30">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Users className="h-5 w-5 text-primary" />
                        {policy.governanceStructure.committee.name}
                      </CardTitle>
                      <CardDescription>
                        Meeting Cadence: {policy.governanceStructure.committee.meetingCadence}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <p className="text-sm font-medium mb-3">Composition</p>
                        <div className="space-y-2">
                          {policy.governanceStructure.committee.composition.map((member, idx) => (
                            <div key={idx} className="flex items-center gap-3 text-sm">
                              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                                <User className="h-4 w-4 text-primary" />
                              </div>
                              <span>{member}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <p className="text-sm font-medium mb-3">Responsibilities</p>
                        <ul className="space-y-2">
                          {policy.governanceStructure.committee.responsibilities.map((resp, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary shrink-0" />
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>

                  {/* AI Act Program Manager */}
                  <Card className="border-accent/30">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <UserCircle className="h-5 w-5 text-accent" />
                        {policy.governanceStructure.programManager.title}
                      </CardTitle>
                      <CardDescription>
                        Key operational role for AI Act compliance
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div>
                        <p className="text-sm font-medium mb-3">Responsibilities</p>
                        <ul className="space-y-2">
                          {policy.governanceStructure.programManager.responsibilities.map((resp, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle2 className="mt-0.5 h-4 w-4 text-accent shrink-0" />
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Governance Diagram */}
                <Card>
                  <CardHeader>
                    <CardTitle>Governance Hierarchy</CardTitle>
                    <CardDescription>
                      Policy to Standards to Controls structure
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col items-center gap-4">
                      {/* Policy Level */}
                      <div className="w-full max-w-md rounded-xl border-2 border-amber-500/50 bg-amber-500/10 p-4 text-center">
                        <Badge className="bg-amber-500 text-white mb-2">Policy</Badge>
                        <p className="font-semibold">{policy.policyNumber}</p>
                        <p className="text-sm text-muted-foreground">{policy.title}</p>
                      </div>

                      <div className="h-8 w-px bg-border" />

                      {/* Standards Level */}
                      <div className="w-full max-w-2xl rounded-xl border-2 border-primary/50 bg-primary/10 p-4 text-center">
                        <Badge className="bg-primary text-primary-foreground mb-2">Standards</Badge>
                        <p className="font-semibold">{standards.length} Supporting Standards</p>
                        <p className="text-sm text-muted-foreground">STD-AI-001 through STD-AI-014</p>
                      </div>

                      <div className="h-8 w-px bg-border" />

                      {/* Controls Level */}
                      <div className="w-full rounded-xl border-2 border-accent/50 bg-accent/10 p-4 text-center">
                        <Badge className="bg-accent text-accent-foreground mb-2">Controls</Badge>
                        <p className="font-semibold">{standards.reduce((sum, s) => sum + s.controls.length, 0)} Total Controls</p>
                        <p className="text-sm text-muted-foreground">Specific compliance measures with evidence requirements</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* KPIs Tab */}
              <TabsContent value="kpis" className="space-y-6">
                <div className="mb-6">
                  <h2 className="text-xl font-bold">Policy Key Performance Indicators</h2>
                  <p className="text-muted-foreground">
                    Track overall compliance metrics for the AI governance program
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {policy.kpis.map((kpi) => (
                    <KPICard key={kpi.id} kpi={kpi} />
                  ))}
                </div>
              </TabsContent>

              {/* Full Document Tab */}
              {markdownContent && (
                <TabsContent value="document">
                  <Card className="border-border/50">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <BookOpen className="h-5 w-5" />
                        Full Policy Document
                      </CardTitle>
                      <CardDescription>
                        Complete policy documentation with all requirements and guidance
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="prose prose-neutral dark:prose-invert max-w-none prose-headings:scroll-mt-20 prose-h2:text-xl prose-h2:font-bold prose-h2:mt-8 prose-h2:mb-4 prose-h2:pb-2 prose-h2:border-b prose-h3:text-lg prose-h3:font-semibold prose-h3:mt-6 prose-h3:mb-3 prose-table:text-sm prose-th:bg-muted prose-th:p-3 prose-td:p-3 prose-td:border prose-tr:border-b">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                          {markdownContent}
                        </ReactMarkdown>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              )}
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Card className="overflow-hidden border-0 bg-gradient-to-br from-amber-500 via-amber-500/90 to-orange-500 text-white">
              <CardContent className="flex flex-col items-center gap-8 p-8 sm:flex-row sm:p-12">
                <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-white/20 backdrop-blur">
                  <Layers className="h-12 w-12" />
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-2xl font-bold">Explore Supporting Standards</h3>
                  <p className="mt-2 text-white/80">
                    View detailed controls, KPIs, and track progress across all 14 supporting standards.
                  </p>
                </div>
                <Button size="lg" variant="secondary" className="shadow-xl" asChild>
                  <Link href="/implement/standards">
                    View Standards Library
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
              {kpi.currentValue || "-"}
            </p>
          </div>
        </div>

        <div className="space-y-2 text-sm">
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
