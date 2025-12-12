import { NavWithAuth } from "@/components/nav-with-auth"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import {
  CheckCircle2,
  AlertTriangle,
  XCircle,
  ArrowRight,
  ArrowLeft,
  Filter,
  Download,
  TrendingUp,
  Clock,
  AlertCircle,
  ChevronDown,
  ChevronRight,
  Plus,
  Shield,
  Target,
  FileCheck,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { getGapAnalysisResults, getGapAnalysisStats } from "@/lib/actions/assessments"
import { getAiSystemById } from "@/lib/actions/ai-systems"
import Link from "next/link"

// Default gap categories structure
const DEFAULT_GAP_CATEGORIES = [
  {
    id: "risk-management",
    title: "Risk Management System",
    article: "Article 9",
    requirements: 12,
    items: [
      "Continuous risk identification process",
      "Risk estimation and evaluation",
      "Risk mitigation measures",
      "Testing procedures",
      "Documentation of residual risks",
    ],
  },
  {
    id: "data-governance",
    title: "Data Governance",
    article: "Article 10",
    requirements: 10,
    items: [
      "Training data relevance",
      "Data quality measures",
      "Bias examination",
      "Data provenance documentation",
      "Gap detection procedures",
    ],
  },
  {
    id: "technical-documentation",
    title: "Technical Documentation",
    article: "Article 11",
    requirements: 15,
    items: [
      "General system description",
      "Design specifications",
      "System architecture",
      "Validation test results",
      "Instructions for use",
    ],
  },
  {
    id: "record-keeping",
    title: "Record Keeping",
    article: "Article 12",
    requirements: 8,
    items: [
      "Automatic logging capability",
      "Log retention periods",
      "Traceability mechanisms",
      "Log access controls",
      "Incident logging",
    ],
  },
  {
    id: "transparency",
    title: "Transparency",
    article: "Article 13",
    requirements: 6,
    items: [
      "Intended purpose disclosure",
      "Level of accuracy information",
      "Known limitations",
      "Human oversight measures",
      "Input data specifications",
    ],
  },
  {
    id: "human-oversight",
    title: "Human Oversight",
    article: "Article 14",
    requirements: 9,
    items: [
      "Oversight mechanism design",
      "Operator training",
      "Override capabilities",
      "Decision reversal procedures",
      "Monitoring dashboards",
    ],
  },
]

interface PageProps {
  searchParams: Promise<{ systemId?: string }>
}

export default async function ComplyPage({ searchParams }: PageProps) {
  const { systemId } = await searchParams
  
  // Fetch system details if filtering by systemId
  const selectedSystem = systemId ? await getAiSystemById(systemId) : null
  
  const [gapResults, stats] = await Promise.all([
    getGapAnalysisResults(systemId),
    getGapAnalysisStats(),
  ])

  // Group gap results by category
  const resultsByCategory = new Map<string, typeof gapResults>()
  for (const result of gapResults) {
    const existing = resultsByCategory.get(result.category) || []
    existing.push(result)
    resultsByCategory.set(result.category, existing)
  }

  // Calculate category-level stats
  const enhancedCategories = DEFAULT_GAP_CATEGORIES.map(cat => {
    const results = resultsByCategory.get(cat.id) || []
    const compliant = results.filter(r => r.status === "compliant").length
    const partial = results.filter(r => r.status === "partial").length
    const gap = results.filter(r => r.status === "gap").length
    const total = results.length || cat.requirements

    let status: "compliant" | "partial" | "gap" = "gap"
    if (results.length > 0) {
      if (compliant === results.length) status = "compliant"
      else if (gap > partial) status = "gap"
      else status = "partial"
    }

    const score = results.length > 0
      ? Math.round(((compliant + partial * 0.5) / results.length) * 100)
      : 0

    return {
      ...cat,
      status,
      score,
      compliant,
      partial,
      gaps: gap,
      results,
    }
  })

  // Get priority action items (high priority gaps)
  const priorityItems = gapResults
    .filter(r => r.status === "gap" && (r.priority === "critical" || r.priority === "high"))
    .slice(0, 4)

  return (
    <div className="flex min-h-screen flex-col">
      <NavWithAuth />

      <main className="flex-1">
        <PageHeader
          badge={selectedSystem ? `Gap Analysis: ${selectedSystem.name}` : "Step 4 of 5"}
          title={selectedSystem ? `Compliance Gaps: ${selectedSystem.name}` : "Comply & Close Gaps"}
          description={selectedSystem 
            ? `Gap analysis results for ${selectedSystem.name}. ${gapResults.length} items found.`
            : "Implement controls and close compliance gaps for your AI systems."
          }
          color="teal"
        />

        {/* Lifecycle Navigation */}
        <section className="border-b border-border/50 py-4 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {selectedSystem ? (
              <div className="flex items-center gap-2 text-sm">
                <Button variant="ghost" size="sm" asChild>
                  <Link href={`/assess/inventory/${selectedSystem.id}`}>
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to {selectedSystem.name}
                  </Link>
                </Button>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
                <Badge variant="outline" className="bg-teal-500/10 text-teal-600 border-teal-500/30">
                  Gap Analysis
                </Badge>
              </div>
            ) : (
              <div className="flex items-center gap-2 text-sm flex-wrap">
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/assess/inventory" className="gap-2">
                    Step 1: Register
                  </Link>
                </Button>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/assess/classification" className="gap-2">
                    Step 2: Classify
                  </Link>
                </Button>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/assess/requirements" className="gap-2">
                    <ArrowLeft className="h-4 w-4" />
                    Step 3: Requirements
                  </Link>
                </Button>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
                <Badge variant="outline" className="bg-teal-500/10 text-teal-600 border-teal-500/30">
                  Step 4: Comply
                </Badge>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/assess/monitor" className="gap-2">
                    Step 5: Monitor
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Overall Stats */}
        <section className="border-b border-border/50 py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-5">
              {/* Main Score */}
              <Card className="lg:col-span-2 border-primary/30 bg-gradient-to-br from-primary/5 to-transparent">
                <CardContent className="flex items-center gap-6 p-6">
                  <div className="relative">
                    <svg className="h-32 w-32 -rotate-90">
                      <circle
                        cx="64"
                        cy="64"
                        r="56"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="12"
                        className="text-muted"
                      />
                      <circle
                        cx="64"
                        cy="64"
                        r="56"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="12"
                        strokeDasharray={`${stats.score * 3.52} 352`}
                        strokeLinecap="round"
                        className="text-primary"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-3xl font-bold">{stats.score}%</span>
                      <span className="text-xs text-muted-foreground">Compliance</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Compliance Score</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Based on {stats.total} requirements across 6 categories
                    </p>
                    {stats.total > 0 && (
                      <div className="flex items-center gap-2 text-sm">
                        <TrendingUp className="h-4 w-4 text-accent" />
                        <span className="text-accent font-medium">Track progress over time</span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Stats Cards */}
              <Card className="border-accent/30 bg-gradient-to-br from-accent/5 to-transparent">
                <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                  <CheckCircle2 className="h-8 w-8 text-accent mb-2" />
                  <p className="text-3xl font-bold text-accent">{stats.compliant}</p>
                  <p className="text-sm text-muted-foreground">Implemented</p>
                </CardContent>
              </Card>

              <Card className="border-chart-3/30 bg-gradient-to-br from-chart-3/5 to-transparent">
                <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                  <AlertCircle className="h-8 w-8 text-chart-3 mb-2" />
                  <p className="text-3xl font-bold text-chart-3">{stats.partial}</p>
                  <p className="text-sm text-muted-foreground">In Progress</p>
                </CardContent>
              </Card>

              <Card className="border-destructive/30 bg-gradient-to-br from-destructive/5 to-transparent">
                <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                  <XCircle className="h-8 w-8 text-destructive mb-2" />
                  <p className="text-3xl font-bold text-destructive">{stats.gaps}</p>
                  <p className="text-sm text-muted-foreground">Open Gaps</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="border-b border-border/50 py-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-teal-500/30 hover:shadow-lg transition-all">
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-500/10">
                    <Shield className="h-5 w-5 text-teal-500" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">Controls Library</h4>
                    <p className="text-xs text-muted-foreground">Browse implementation guides</p>
                  </div>
                  <Button size="sm" variant="ghost" asChild>
                    <Link href="/assess/controls">
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-primary/30 hover:shadow-lg transition-all">
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Target className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">Run Assessment</h4>
                    <p className="text-xs text-muted-foreground">Check compliance status</p>
                  </div>
                  <Button size="sm" variant="ghost" asChild>
                    <Link href="/assess/classification">
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-amber-500/30 hover:shadow-lg transition-all">
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10">
                    <FileCheck className="h-5 w-5 text-amber-500" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">Upload Evidence</h4>
                    <p className="text-xs text-muted-foreground">Document compliance</p>
                  </div>
                  <Button size="sm" variant="ghost">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Gap Categories */}
        <section className="py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-2xl font-bold">Compliance Status by Category</h2>
                <p className="text-muted-foreground">Track and close gaps across EU AI Act requirements</p>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="bg-transparent">
                  <Filter className="mr-2 h-4 w-4" />
                  Filter
                </Button>
                <Button variant="outline" size="sm" className="bg-transparent">
                  <Download className="mr-2 h-4 w-4" />
                  Export Report
                </Button>
              </div>
            </div>

            {stats.total === 0 ? (
              <Card className="border-dashed">
                <CardContent className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted mb-4">
                    <AlertTriangle className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold">No Compliance Data Yet</h3>
                  <p className="mt-1 text-muted-foreground max-w-sm">
                    Run a compliance assessment to identify gaps and track your progress.
                  </p>
                  <div className="mt-6">
                    <Button className="gap-2 bg-primary shadow-lg shadow-primary/25" asChild>
                      <Link href="/assess/classification">
                        <Plus className="h-4 w-4" />
                        Start Assessment
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-4">
                {enhancedCategories.map((category) => (
                  <Card
                    key={category.id}
                    className={cn(
                      "transition-all hover:shadow-lg",
                      category.status === "compliant" && "border-accent/30",
                      category.status === "partial" && "border-chart-3/30",
                      category.status === "gap" && "border-destructive/30",
                    )}
                  >
                    <CardContent className="p-0">
                      <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center">
                        <div
                          className={cn(
                            "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl",
                            category.status === "compliant" && "bg-accent text-accent-foreground",
                            category.status === "partial" && "bg-chart-3 text-foreground",
                            category.status === "gap" && "bg-destructive text-destructive-foreground",
                          )}
                        >
                          {category.status === "compliant" && <CheckCircle2 className="h-6 w-6" />}
                          {category.status === "partial" && <AlertTriangle className="h-6 w-6" />}
                          {category.status === "gap" && <XCircle className="h-6 w-6" />}
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="font-semibold">{category.title}</h3>
                            <Badge variant="outline" className="text-xs">
                              {category.article}
                            </Badge>
                          </div>
                          <div className="mt-2 flex items-center gap-4">
                            <div className="flex-1 max-w-xs">
                              <Progress
                                value={category.score}
                                className={cn(
                                  "h-2",
                                  category.status === "compliant" && "[&>div]:bg-accent",
                                  category.status === "partial" && "[&>div]:bg-chart-3",
                                  category.status === "gap" && "[&>div]:bg-destructive",
                                )}
                              />
                            </div>
                            <span className="text-sm font-medium">{category.score}%</span>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">
                            {category.compliant} of {category.results.length || category.requirements} controls implemented
                          </p>
                        </div>

                        <div className="flex items-center gap-3">
                          <Badge
                            variant="outline"
                            className={cn(
                              "capitalize",
                              category.status === "compliant" && "border-accent/30 bg-accent/10 text-accent",
                              category.status === "partial" && "border-chart-3/30 bg-chart-3/10 text-chart-3",
                              category.status === "gap" && "border-destructive/30 bg-destructive/10 text-destructive",
                            )}
                          >
                            {category.status === "gap" ? "Action Required" : category.status === "partial" ? "In Progress" : "Complete"}
                          </Badge>
                          <Button variant="ghost" size="sm">
                            <ChevronDown className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>

                      {/* Gap Details */}
                      {category.results.length > 0 && (
                        <div className="border-t border-border/50 bg-muted/30 p-4">
                          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                            {category.results.slice(0, 6).map((result) => (
                              <div
                                key={result.id}
                                className={cn(
                                  "flex items-center gap-2 rounded-lg border p-3 text-sm",
                                  result.status === "compliant" && "border-accent/30 bg-accent/5",
                                  result.status === "partial" && "border-chart-3/30 bg-chart-3/5",
                                  result.status === "gap" && "border-destructive/30 bg-destructive/5",
                                )}
                              >
                                {result.status === "compliant" && <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />}
                                {result.status === "partial" && <AlertCircle className="h-4 w-4 text-chart-3 shrink-0" />}
                                {result.status === "gap" && <XCircle className="h-4 w-4 text-destructive shrink-0" />}
                                <span className="truncate">{result.requirement}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Default items if no results */}
                      {category.results.length === 0 && (
                        <div className="border-t border-border/50 bg-muted/30 p-4">
                          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                            {category.items.map((item, index) => (
                              <div
                                key={index}
                                className="flex items-center gap-2 rounded-lg border border-muted-foreground/30 bg-muted/50 p-3 text-sm"
                              >
                                <AlertCircle className="h-4 w-4 text-muted-foreground shrink-0" />
                                <span className="truncate text-muted-foreground">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Action Items */}
        {priorityItems.length > 0 && (
          <section className="border-t border-border/50 py-8">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <Card className="border-primary/30 bg-gradient-to-br from-primary/5 to-transparent">
                <CardHeader>
                  <CardTitle>Priority Action Items</CardTitle>
                  <CardDescription>Address these gaps to improve your compliance score</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {priorityItems.map((item, index) => (
                      <div
                        key={item.id}
                        className="flex items-center justify-between rounded-xl border border-border/50 bg-background p-4"
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-sm font-semibold text-primary">
                            {index + 1}
                          </div>
                          <div>
                            <p className="font-medium">{item.requirement}</p>
                            <div className="flex items-center gap-2 mt-1">
                              <Badge
                                variant="outline"
                                className={cn(
                                  "text-xs",
                                  item.priority === "critical" && "border-destructive/30 text-destructive",
                                  item.priority === "high" && "border-chart-3/30 text-chart-3",
                                )}
                              >
                                {item.priority}
                              </Badge>
                              {item.dueDate && (
                                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                                  <Clock className="h-3 w-3" />
                                  Due {new Date(item.dueDate).toLocaleDateString()}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                        <Button size="sm" variant="outline" className="bg-transparent">
                          Close Gap
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        )}

        {/* Continue to Monitor */}
        <section className="py-8 border-t border-border/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Card className="border-teal-500/30 bg-gradient-to-r from-teal-500/5 to-transparent">
              <CardContent className="flex flex-col gap-6 p-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-500 text-white shadow-lg shadow-teal-500/25">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Continue to Monitoring</h3>
                    <p className="text-sm text-muted-foreground">
                      Track ongoing compliance status and receive alerts for re-assessments.
                    </p>
                  </div>
                </div>
                <Button className="gap-2 bg-teal-500 hover:bg-teal-600 shadow-lg shadow-teal-500/25" asChild>
                  <Link href="/assess/monitor">
                    View Monitor Dashboard
                    <ArrowRight className="h-4 w-4" />
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
