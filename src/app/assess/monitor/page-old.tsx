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
  TrendingUp,
  TrendingDown,
  Clock,
  AlertCircle,
  ChevronRight,
  Bell,
  Calendar,
  RefreshCw,
  Activity,
  Shield,
  Bot,
  BarChart3,
  Eye,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { getAiSystems, getAiSystemStats } from "@/lib/actions/ai-systems"
import { getGapAnalysisStats } from "@/lib/actions/assessments"
import Link from "next/link"

export default async function MonitorPage() {
  const [aiSystems, systemStats, gapStats] = await Promise.all([
    getAiSystems(),
    getAiSystemStats(),
    getGapAnalysisStats(),
  ])

  // Deterministic placeholders: no random data
  const systemsWithCompliance = aiSystems.map(system => ({
    ...system,
    // Until per-system compliance is available, show pending
    compliance: gapStats.score ?? null,
    trend: null,
    trendValue: null,
    lastAssessment: system.updatedAt || null,
    nextAssessment: null,
  }))

  // Systems needing attention: high/prohibited risk
  const needsAttention = systemsWithCompliance.filter(s => s.riskLevel === "high" || s.riskLevel === "prohibited")

  // Static sample deadlines (deterministic)
  const upcomingDeadlines = [
    { id: 1, title: "Annual Risk Assessment Due", date: new Date("2025-06-30"), type: "assessment" },
    { id: 2, title: "CE Marking Renewal", date: new Date("2025-08-15"), type: "certification" },
    { id: 3, title: "Technical Documentation Review", date: new Date("2025-07-20"), type: "documentation" },
  ]

  // Static recent activity sample (non-random)
  const recentActivity = [
    { id: 1, action: "Compliance assessment completed", system: "Customer Service Bot", time: "Today", type: "success" },
    { id: 2, action: "Gap identified in risk management", system: "HR Analytics System", time: "Yesterday", type: "warning" },
    { id: 3, action: "New AI system registered", system: "Document Processor", time: "This week", type: "info" },
    { id: 4, action: "Control implemented", system: "Fraud Detection Model", time: "This week", type: "success" },
  ]

  const overallCompliance = gapStats.score ?? 0

  return (
    <div className="flex min-h-screen flex-col">
      <NavWithAuth />

      <main className="flex-1">
        <PageHeader
          badge="Step 5 of 5"
          title="Compliance Monitor"
          description="Track ongoing compliance status, receive alerts, and manage re-assessments."
          color="teal"
        />

        {/* Lifecycle Navigation */}
        <section className="border-b border-border/50 py-4 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
                  Step 3: Requirements
                </Link>
              </Button>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
              <Button variant="ghost" size="sm" asChild>
                <Link href="/assess/comply" className="gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Step 4: Comply
                </Link>
              </Button>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
              <Badge variant="outline" className="bg-teal-500/10 text-teal-600 border-teal-500/30">
                Step 5: Monitor
              </Badge>
            </div>
          </div>
        </section>

        {/* Overall Status */}
        <section className="border-b border-border/50 py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-4">
              {/* Main Compliance Score */}
              <Card className="lg:col-span-1 border-primary/30 bg-gradient-to-br from-primary/5 to-transparent">
                <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                  <div className="relative mb-4">
                    <svg className="h-28 w-28 -rotate-90">
                      <circle
                        cx="56"
                        cy="56"
                        r="48"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="10"
                        className="text-muted"
                      />
                      <circle
                        cx="56"
                        cy="56"
                        r="48"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="10"
                        strokeDasharray={`${overallCompliance * 3.02} 302`}
                        strokeLinecap="round"
                        className={cn(
                          overallCompliance >= 80 && "text-accent",
                          overallCompliance >= 60 && overallCompliance < 80 && "text-chart-3",
                          overallCompliance < 60 && "text-destructive",
                        )}
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-3xl font-bold">{overallCompliance}%</span>
                    </div>
                  </div>
                  <h3 className="font-semibold">Overall Compliance</h3>
                  <p className="text-sm text-muted-foreground">Across {systemStats.total} AI systems</p>
                </CardContent>
              </Card>

              {/* Stats Grid */}
              <div className="lg:col-span-3 grid gap-4 sm:grid-cols-3">
                <Card className="border-accent/30 bg-gradient-to-br from-accent/5 to-transparent">
                  <CardContent className="flex items-center gap-4 p-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                      <CheckCircle2 className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-accent">{systemStats.compliant}</p>
                      <p className="text-sm text-muted-foreground">Compliant Systems</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-amber-500/30 bg-gradient-to-br from-amber-500/5 to-transparent">
                  <CardContent className="flex items-center gap-4 p-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10">
                      <AlertTriangle className="h-6 w-6 text-amber-500" />
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-amber-500">{needsAttention.length}</p>
                      <p className="text-sm text-muted-foreground">Needs Attention</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-destructive/30 bg-gradient-to-br from-destructive/5 to-transparent">
                  <CardContent className="flex items-center gap-4 p-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-destructive/10">
                      <Shield className="h-6 w-6 text-destructive" />
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-destructive">{systemStats.highRisk}</p>
                      <p className="text-sm text-muted-foreground">High-Risk Systems</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Grid */}
        <section className="py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-3">
              {/* System Status */}
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold">AI System Status</h2>
                    <Button variant="outline" size="sm" className="bg-transparent gap-2">
                      <RefreshCw className="h-4 w-4" />
                      Refresh
                    </Button>
                  </div>

                  {systemsWithCompliance.length === 0 ? (
                    <Card className="border-dashed">
                      <CardContent className="flex flex-col items-center justify-center py-12 text-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted mb-4">
                          <Bot className="h-8 w-8 text-muted-foreground" />
                        </div>
                        <h3 className="text-lg font-semibold">No AI Systems Yet</h3>
                        <p className="mt-1 text-muted-foreground max-w-sm">
                          Start by registering your AI systems to track compliance.
                        </p>
                        <Button className="mt-6 bg-teal-500 hover:bg-teal-600" asChild>
                          <Link href="/assess/inventory">
                            Register AI Systems
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ) : (
                    <div className="space-y-3">
                  {systemsWithCompliance.slice(0, 5).map((system) => {
                    const hasCompliance = typeof system.compliance === "number"
                    const complianceValue = hasCompliance ? system.compliance : 0
                    const progressClass = !hasCompliance
                      ? "[&>div]:bg-muted"
                      : complianceValue >= 80
                        ? "[&>div]:bg-accent"
                        : complianceValue >= 60
                          ? "[&>div]:bg-chart-3"
                          : "[&>div]:bg-destructive"

                    const cardBgClass = !hasCompliance
                      ? "bg-muted/30"
                      : complianceValue >= 80
                        ? "bg-accent/10"
                        : complianceValue >= 60
                          ? "bg-chart-3/10"
                          : "bg-destructive/10"

                    const iconColorClass = !hasCompliance
                      ? "text-muted-foreground"
                      : complianceValue >= 80
                        ? "text-accent"
                        : complianceValue >= 60
                          ? "text-chart-3"
                          : "text-destructive"

                    return (
                      <Card key={system.id} className="hover:shadow-lg transition-all">
                        <CardContent className="flex items-center gap-4 p-4">
                          <div className={cn(
                            "flex h-12 w-12 items-center justify-center rounded-xl shrink-0",
                            cardBgClass,
                          )}>
                            <Bot className={cn(
                              "h-6 w-6",
                              iconColorClass,
                            )} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <h3 className="font-semibold truncate">{system.name}</h3>
                              <Badge
                                variant="outline"
                                className={cn(
                                  "text-xs capitalize shrink-0",
                                  (system.riskLevel === "high" || system.riskLevel === "prohibited") && "border-destructive/30 text-destructive",
                                  system.riskLevel === "limited" && "border-chart-3/30 text-chart-3",
                                  system.riskLevel === "minimal" && "border-accent/30 text-accent",
                                )}
                              >
                                {system.riskLevel || "unclassified"}
                              </Badge>
                            </div>
                            <div className="mt-2 flex items-center gap-4">
                              <div className="flex-1 max-w-[200px]">
                                <Progress
                                  value={complianceValue}
                                  className={cn(
                                    "h-2",
                                    progressClass,
                                  )}
                                />
                              </div>
                              <span className="text-sm font-medium">
                                {hasCompliance ? `${complianceValue}%` : "Pending"}
                              </span>
                              {system.trend ? (
                                <div className={cn(
                                  "flex items-center gap-1 text-xs",
                                  system.trend === "up" ? "text-accent" : "text-destructive",
                                )}>
                                  {system.trend === "up" ? (
                                    <TrendingUp className="h-3 w-3" />
                                  ) : (
                                    <TrendingDown className="h-3 w-3" />
                                  )}
                                  {system.trendValue}%
                                </div>
                              ) : (
                                <span className="text-xs text-muted-foreground">Tracking pending</span>
                              )}
                            </div>
                          </div>
                          <Button variant="ghost" size="sm" asChild>
                            <Link href={`/assess/inventory/${system.id}`}>
                              <Eye className="h-4 w-4" />
                            </Link>
                          </Button>
                        </CardContent>
                      </Card>
                    )
                  })}
                      {systemsWithCompliance.length > 5 && (
                        <Button variant="outline" className="w-full bg-transparent" asChild>
                          <Link href="/assess/inventory">
                            View All {systemsWithCompliance.length} Systems
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      )}
                    </div>
                  )}
                </div>

                {/* Recent Activity */}
                <div>
                  <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
                  <Card>
                    <CardContent className="p-0">
                      <div className="divide-y divide-border/50">
                        {recentActivity.map((activity) => (
                          <div key={activity.id} className="flex items-center gap-4 p-4">
                            <div className={cn(
                              "flex h-8 w-8 items-center justify-center rounded-lg shrink-0",
                              activity.type === "success" && "bg-accent/10",
                              activity.type === "warning" && "bg-amber-500/10",
                              activity.type === "info" && "bg-primary/10",
                            )}>
                              {activity.type === "success" && <CheckCircle2 className="h-4 w-4 text-accent" />}
                              {activity.type === "warning" && <AlertTriangle className="h-4 w-4 text-amber-500" />}
                              {activity.type === "info" && <Activity className="h-4 w-4 text-primary" />}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium">{activity.action}</p>
                              <p className="text-xs text-muted-foreground">{activity.system}</p>
                            </div>
                            <span className="text-xs text-muted-foreground shrink-0">{activity.time}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Alerts */}
                <Card className="border-amber-500/30">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-base">
                      <Bell className="h-4 w-4 text-amber-500" />
                      Alerts & Reminders
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {needsAttention.length > 0 && (
                      <div className="flex items-start gap-3 p-3 rounded-lg bg-amber-500/5 border border-amber-500/20">
                        <AlertCircle className="h-4 w-4 text-amber-500 mt-0.5 shrink-0" />
                        <div>
                          <p className="text-sm font-medium">{needsAttention.length} systems need attention</p>
                          <p className="text-xs text-muted-foreground">High or prohibited risk classification</p>
                        </div>
                      </div>
                    )}
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-primary/5 border border-primary/20">
                      <Calendar className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="text-sm font-medium">Quarterly review due</p>
                        <p className="text-xs text-muted-foreground">In 14 days</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Upcoming Deadlines */}
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-base">
                      <Clock className="h-4 w-4 text-primary" />
                      Upcoming Deadlines
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {upcomingDeadlines.map((deadline) => (
                      <div key={deadline.id} className="flex items-center justify-between p-3 rounded-lg border border-border/50">
                        <div>
                          <p className="text-sm font-medium">{deadline.title}</p>
                          <p className="text-xs text-muted-foreground">
                            {deadline.date.toLocaleDateString()}
                          </p>
                        </div>
                        <Badge variant="outline" className="text-xs capitalize">
                          {deadline.type}
                        </Badge>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                      <Link href="/assess/classification">
                        <BarChart3 className="mr-2 h-4 w-4" />
                        Run Assessment
                      </Link>
                    </Button>
                    <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                      <Link href="/assess/comply">
                        <Shield className="mr-2 h-4 w-4" />
                        View Compliance Gaps
                      </Link>
                    </Button>
                    <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                      <Link href="/assess/controls">
                        <Activity className="mr-2 h-4 w-4" />
                        Browse Controls
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
