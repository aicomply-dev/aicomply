import Link from "next/link"
import { NavWithAuth } from "@/components/nav-with-auth"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  CheckCircle2,
  Circle,
  FileText,
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
  Layers,
  TrendingUp,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { type Standard } from "@/lib/data/compliance-framework"

// Server actions for real data
import {
  getStandards,
  getStandardsStats,
  getControlsStats,
  getOverallProgress,
} from "@/lib/actions/standards"

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

// Category labels
const categoryLabels: Record<string, string> = {
  classification: "Classification",
  risk: "Risk Management",
  data: "Data Governance",
  documentation: "Documentation",
  transparency: "Transparency",
  oversight: "Human Oversight",
  security: "Security",
  quality: "Quality",
  conformity: "Conformity",
  registration: "Registration",
  monitoring: "Monitoring",
  incident: "Incidents",
  training: "Training",
}

export default async function StandardsPage() {
  // Fetch all data in parallel
  const [standards, stats, controlStats, overallProgress] = await Promise.all([
    getStandards(),
    getStandardsStats(),
    getControlsStats(),
    getOverallProgress(),
  ])

  // Group standards by category for tabs
  const standardsByCategory = standards.reduce((acc, standard) => {
    const category = standard.category
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(standard)
    return acc
  }, {} as Record<string, Standard[]>)

  // Get unique categories
  const categories = Array.from(new Set(standards.map(s => s.category)))

  return (
    <div className="flex min-h-screen flex-col">
      <NavWithAuth />

      <main className="flex-1">
        <PageHeader
          badge="Internal Standards"
          title="AI Compliance Standards"
          description="14 internal standards implementing EU AI Act requirements under POL-AI-001."
          color="amber"
        />

        {/* Stats Overview */}
        <section className="border-b border-border/50 py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              <Card className="border-border/50 bg-gradient-to-br from-muted/50 to-transparent">
                <CardContent className="flex items-center gap-4 p-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-foreground/5">
                    <Layers className="h-6 w-6 text-foreground" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold">{stats.total}</p>
                    <p className="text-sm text-muted-foreground">Standards</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-accent/30 bg-gradient-to-br from-accent/5 to-transparent">
                <CardContent className="flex items-center gap-4 p-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                    <Target className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-accent">{controlStats.total}</p>
                    <p className="text-sm text-muted-foreground">Controls</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/30 bg-gradient-to-br from-primary/5 to-transparent">
                <CardContent className="flex items-center gap-4 p-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-primary">{controlStats.compliant}</p>
                    <p className="text-sm text-muted-foreground">Compliant</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-chart-3/30 bg-gradient-to-br from-chart-3/5 to-transparent">
                <CardContent className="flex items-center gap-4 p-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-chart-3/10">
                    <Clock className="h-6 w-6 text-chart-3" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-chart-3">{controlStats.inProgress}</p>
                    <p className="text-sm text-muted-foreground">In Progress</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-chart-5/30 bg-gradient-to-br from-chart-5/5 to-transparent">
                <CardContent className="flex items-center gap-4 p-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-chart-5/10">
                    <TrendingUp className="h-6 w-6 text-chart-5" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-chart-5">{overallProgress}%</p>
                    <p className="text-sm text-muted-foreground">Progress</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Parent Policy Reference */}
        <section className="py-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Link href="/implement/policies/pol-ai-001">
              <Card className="group cursor-pointer border-amber-500/30 bg-gradient-to-r from-amber-500/5 to-transparent transition-all hover:border-amber-500/50 hover:shadow-lg">
                <CardContent className="flex items-center justify-between p-5">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10">
                      <FileText className="h-6 w-6 text-amber-500" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Parent Policy</p>
                      <p className="font-semibold">POL-AI-001: Artificial Intelligence Policy</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground transition-colors group-hover:text-amber-500">
                    <span className="text-sm">View Policy</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </section>

        {/* Standards Grid with Category Tabs */}
        <section className="py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="all" className="space-y-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-2xl font-bold">Standards Library</h2>
                  <p className="text-muted-foreground">
                    STD-AI-001 through STD-AI-014 implementing EU AI Act requirements
                  </p>
                </div>
                <TabsList className="grid w-full max-w-lg grid-cols-3 p-1">
                  <TabsTrigger value="all">All ({stats.total})</TabsTrigger>
                  <TabsTrigger value="high-priority">High Priority</TabsTrigger>
                  <TabsTrigger value="low-progress">Needs Attention</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="all" className="space-y-0">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {standards.map((standard) => (
                    <StandardCard key={standard.id} standard={standard} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="high-priority" className="space-y-0">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {standards
                    .filter((s) => s.controls.some((c) => c.riskLevel === "critical" || c.riskLevel === "high"))
                    .map((standard) => (
                      <StandardCard key={standard.id} standard={standard} />
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="low-progress" className="space-y-0">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {standards
                    .filter((s) => s.progress < 50)
                    .sort((a, b) => a.progress - b.progress)
                    .map((standard) => (
                      <StandardCard key={standard.id} standard={standard} />
                    ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Category Overview */}
        <section className="relative overflow-hidden py-16">
          <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold">Standards by Category</h2>
              <p className="text-muted-foreground">
                Overview of standards grouped by compliance area
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {categories.map((category) => {
                const Icon = categoryIcons[category] || FileText
                const categoryStandards = standardsByCategory[category] || []
                const avgProgress = categoryStandards.length > 0
                  ? Math.round(categoryStandards.reduce((sum, s) => sum + s.progress, 0) / categoryStandards.length)
                  : 0

                return (
                  <Card
                    key={category}
                    className={cn(
                      "group cursor-pointer transition-all hover:shadow-lg",
                      `border-${categoryColors[category]}/20 hover:border-${categoryColors[category]}/40`
                    )}
                  >
                    <CardContent className="p-5">
                      <div className="flex items-start justify-between">
                        <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-${categoryColors[category]}/10`}>
                          <Icon className={`h-5 w-5 text-${categoryColors[category]}`} />
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {categoryStandards.length} standard{categoryStandards.length !== 1 ? "s" : ""}
                        </Badge>
                      </div>
                      <div className="mt-4">
                        <p className="font-semibold">{categoryLabels[category] || category}</p>
                        <div className="mt-2 flex items-center gap-2">
                          <Progress
                            value={avgProgress}
                            className={cn(
                              "h-2 flex-1",
                              avgProgress >= 80 && "[&>div]:bg-accent",
                              avgProgress >= 50 && avgProgress < 80 && "[&>div]:bg-primary",
                              avgProgress < 50 && "[&>div]:bg-chart-3"
                            )}
                          />
                          <span className="text-sm font-medium">{avgProgress}%</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Card className="overflow-hidden border-0 bg-gradient-to-br from-primary via-primary/90 to-accent text-white">
              <CardContent className="flex flex-col items-center gap-8 p-8 sm:flex-row sm:p-12">
                <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-white/20 backdrop-blur">
                  <Target className="h-12 w-12" />
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-2xl font-bold">Track Your Progress</h3>
                  <p className="mt-2 text-white/80">
                    View detailed control checklists and KPIs for each standard. Complete assessments and track your compliance journey.
                  </p>
                </div>
                <Button size="lg" variant="secondary" className="shadow-xl" asChild>
                  <Link href="/implement/controls">
                    View Controls Dashboard
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

// Standard Card Component
function StandardCard({ standard }: { standard: Standard }) {
  const Icon = categoryIcons[standard.category] || FileText
  const color = categoryColors[standard.category] || "primary"
  const completedControls = standard.controls.filter((c) => c.status === "compliant").length
  const totalControls = standard.controls.length

  // Get KPIs at risk for this standard
  const kpisAtRisk = standard.kpis.filter((k) => k.status === "at_risk" || k.status === "off_track").length

  return (
    <Link href={`/implement/standards/${standard.id}`}>
      <Card
        className={cn(
          "group relative overflow-hidden transition-all hover:shadow-xl cursor-pointer h-full",
          `border-${color}/20 hover:border-${color}/40`
        )}
      >
        {/* Progress bar at top */}
        <div className="absolute inset-x-0 top-0 h-1 bg-muted">
          <div
            className={cn(
              "h-full transition-all",
              standard.progress >= 80 && "bg-accent",
              standard.progress >= 50 && standard.progress < 80 && "bg-primary",
              standard.progress < 50 && "bg-chart-3"
            )}
            style={{ width: `${standard.progress}%` }}
          />
        </div>

        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-${color}/10`}>
                <Icon className={`h-5 w-5 text-${color}`} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-xs font-mono">
                    {standard.standardId}
                  </Badge>
                  {kpisAtRisk > 0 && (
                    <Badge variant="outline" className="text-xs bg-destructive/10 text-destructive border-destructive/30">
                      {kpisAtRisk} KPI{kpisAtRisk !== 1 ? "s" : ""} at risk
                    </Badge>
                  )}
                </div>
              </div>
            </div>
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
          </div>
          <CardTitle className="mt-3 text-base line-clamp-1">{standard.shortTitle}</CardTitle>
          <CardDescription className="line-clamp-2 mt-1">{standard.title}</CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* EU AI Act Articles */}
          <div className="flex flex-wrap gap-1">
            {standard.euAiActArticles.slice(0, 3).map((article) => (
              <Badge key={article} variant="secondary" className="text-xs">
                {article}
              </Badge>
            ))}
            {standard.euAiActArticles.length > 3 && (
              <Badge variant="secondary" className="text-xs">
                +{standard.euAiActArticles.length - 3}
              </Badge>
            )}
          </div>

          {/* Control Progress */}
          <div className="rounded-lg bg-muted/50 p-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Controls</span>
              <span className="font-medium">
                {completedControls}/{totalControls} complete
              </span>
            </div>
            <div className="mt-2 flex gap-1">
              {standard.controls.map((control) => (
                <div
                  key={control.id}
                  className={cn(
                    "h-2 flex-1 rounded-full",
                    control.status === "compliant" && "bg-accent",
                    control.status === "in_progress" && "bg-primary",
                    control.status === "not_started" && "bg-muted-foreground/20",
                    control.status === "non_compliant" && "bg-destructive"
                  )}
                  title={`${control.name}: ${control.status}`}
                />
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-2 border-t border-border/50">
            <div className="flex items-center gap-2">
              <Progress
                value={standard.progress}
                className={cn(
                  "h-2 w-16",
                  standard.progress >= 80 && "[&>div]:bg-accent",
                  standard.progress >= 50 && standard.progress < 80 && "[&>div]:bg-primary",
                  standard.progress < 50 && "[&>div]:bg-chart-3"
                )}
              />
              <span className="text-sm font-medium">{standard.progress}%</span>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground transition-colors group-hover:text-primary">
              <span className="text-sm">View Details</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
