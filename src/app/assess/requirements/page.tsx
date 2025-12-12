import { Suspense } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  Shield,
  CheckCircle2,
  Clock,
  AlertTriangle,
  FileText,
  Users,
  Building2,
  Target,
  LayoutDashboard,
  Filter,
  Download
} from "lucide-react"
import { NavWithAuth } from "@/components/nav-with-auth"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getAiSystems, getAiSystemsWithRoles, getAiSystemsByRoleSummary } from "@/lib/actions/ai-systems"
import { getOrganizationRequirementsSummary, getOverdueRequirements } from "@/lib/actions/requirements"
import { ROLE_REQUIREMENTS, type OperatorRole } from "@/lib/data/role-requirements"

function LoadingSkeleton() {
  return (
    <div className="space-y-6 animate-pulse">
      <div className="h-32 bg-muted rounded-xl" />
      <div className="grid grid-cols-4 gap-4">
        {[1, 2, 3, 4].map(i => (
          <div key={i} className="h-24 bg-muted rounded-xl" />
        ))}
      </div>
    </div>
  )
}

function RoleBadge({ role }: { role: string }) {
  const roleConfig: Record<string, { label: string; className: string }> = {
    provider: { label: "Provider", className: "bg-blue-500/10 text-blue-600 border-blue-500/30" },
    deployer: { label: "Deployer", className: "bg-green-500/10 text-green-600 border-green-500/30" },
    importer: { label: "Importer", className: "bg-amber-500/10 text-amber-600 border-amber-500/30" },
    distributor: { label: "Distributor", className: "bg-purple-500/10 text-purple-600 border-purple-500/30" },
    gpai_provider: { label: "GPAI Provider", className: "bg-pink-500/10 text-pink-600 border-pink-500/30" },
  }

  const config = roleConfig[role] || { label: role, className: "bg-gray-500/10 text-gray-600 border-gray-500/30" }

  return (
    <Badge variant="outline" className={config.className}>
      {config.label}
    </Badge>
  )
}

function RiskBadge({ level }: { level: string }) {
  const riskConfig: Record<string, { label: string; className: string }> = {
    prohibited: { label: "Prohibited", className: "bg-red-500 text-white" },
    high: { label: "High Risk", className: "bg-orange-500 text-white" },
    limited: { label: "Limited Risk", className: "bg-blue-500 text-white" },
    minimal: { label: "Minimal Risk", className: "bg-green-500 text-white" },
    unclassified: { label: "Unclassified", className: "bg-gray-400 text-white" },
  }

  const config = riskConfig[level] || { label: level, className: "bg-gray-400 text-white" }

  return <Badge className={config.className}>{config.label}</Badge>
}

async function RequirementsDashboard() {
  const [systems, systemsWithRoles, roleSummary, reqSummary, overdueReqs] = await Promise.all([
    getAiSystems(),
    getAiSystemsWithRoles(),
    getAiSystemsByRoleSummary(),
    getOrganizationRequirementsSummary(),
    getOverdueRequirements(),
  ])

  const totalSystems = systems.length
  const systemsWithRolesCount = systemsWithRoles.length
  const completionRate = reqSummary.total > 0
    ? Math.round(((reqSummary.implemented + reqSummary.verified) / reqSummary.total) * 100)
    : 0

  return (
    <div className="space-y-8">
      {/* Lifecycle Navigation */}
      <section className="border-b border-border/50 py-4 bg-muted/30 -mx-6 px-6 -mt-6">
        <div className="flex items-center gap-2 text-sm flex-wrap">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/assess/inventory" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
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
          <Badge variant="outline" className="bg-teal-500/10 text-teal-600 border-teal-500/30">
            Step 3: Requirements
          </Badge>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
          <Button variant="ghost" size="sm" asChild>
            <Link href="/assess/comply" className="gap-2">
              Step 4: Comply
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
          <Button variant="ghost" size="sm" asChild>
            <Link href="/assess/monitor" className="gap-2">
              Step 5: Monitor
            </Link>
          </Button>
        </div>
      </section>

      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight flex items-center gap-3">
            <FileText className="h-8 w-8 text-teal-500" />
            Requirements Dashboard
          </h1>
          <p className="text-muted-foreground mt-1">
            Track and manage EU AI Act compliance requirements across your organization
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Organization Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Requirements</p>
                <p className="text-3xl font-bold">{reqSummary.total}</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                <FileText className="h-6 w-6 text-blue-500" />
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Across {systemsWithRolesCount} AI systems
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Implemented</p>
                <p className="text-3xl font-bold text-green-600">
                  {reqSummary.implemented + reqSummary.verified}
                </p>
              </div>
              <div className="h-12 w-12 rounded-full bg-green-500/10 flex items-center justify-center">
                <CheckCircle2 className="h-6 w-6 text-green-500" />
              </div>
            </div>
            <Progress value={completionRate} className="h-2 mt-3" />
            <p className="text-xs text-muted-foreground mt-1">
              {completionRate}% completion rate
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">In Progress</p>
                <p className="text-3xl font-bold text-amber-600">{reqSummary.inProgress}</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-amber-500/10 flex items-center justify-center">
                <Clock className="h-6 w-6 text-amber-500" />
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              {reqSummary.notStarted} not started
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Overdue</p>
                <p className="text-3xl font-bold text-red-600">{overdueReqs.length}</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-red-500/10 flex items-center justify-center">
                <AlertTriangle className="h-6 w-6 text-red-500" />
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Requires immediate attention
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="by-system" className="space-y-6">
        <TabsList>
          <TabsTrigger value="by-system" className="gap-2">
            <Target className="h-4 w-4" />
            By AI System
          </TabsTrigger>
          <TabsTrigger value="by-role" className="gap-2">
            <Users className="h-4 w-4" />
            By Role
          </TabsTrigger>
          <TabsTrigger value="by-article" className="gap-2">
            <FileText className="h-4 w-4" />
            By Article
          </TabsTrigger>
          <TabsTrigger value="overview" className="gap-2">
            <LayoutDashboard className="h-4 w-4" />
            Organization Overview
          </TabsTrigger>
        </TabsList>

        {/* By System Tab */}
        <TabsContent value="by-system" className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">AI Systems Requirements</h2>
            <Button asChild>
              <Link href="/assess/classification">
                Classify New System
              </Link>
            </Button>
          </div>

          {systemsWithRoles.length === 0 ? (
            <Card className="border-dashed">
              <CardContent className="pt-6 text-center py-12">
                <Building2 className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">No AI Systems with Roles Determined</h3>
                <p className="text-muted-foreground mb-4">
                  Complete the classification process to see applicable requirements for your AI systems.
                </p>
                <Button asChild>
                  <Link href="/assess/classification">Start Classification</Link>
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-4">
              {systemsWithRoles.map(system => {
                const roleReqs = system.operatorRole
                  ? ROLE_REQUIREMENTS[system.operatorRole as OperatorRole]
                  : null

                return (
                  <Card key={system.id} className="hover:border-primary/50 transition-colors">
                    <CardContent className="pt-6">
                      <div className="flex items-start justify-between">
                        <div className="space-y-2">
                          <div className="flex items-center gap-3">
                            <h3 className="text-lg font-semibold">{system.name}</h3>
                            <RoleBadge role={system.operatorRole || "unknown"} />
                            <RiskBadge level={system.riskLevel || "unclassified"} />
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {system.description || "No description provided"}
                          </p>
                          {roleReqs && (
                            <div className="flex items-center gap-4 text-sm">
                              <span className="text-muted-foreground">
                                <span className="font-medium text-foreground">{roleReqs.obligationsCount}</span> obligations
                              </span>
                              <span className="text-muted-foreground">
                                <span className="font-medium text-foreground">{roleReqs.controlsCount}</span> controls
                              </span>
                              <span className="text-muted-foreground">
                                Articles: <span className="font-medium text-foreground">{roleReqs.articles.join(", ")}</span>
                              </span>
                            </div>
                          )}
                        </div>
                        <Button asChild>
                          <Link href={`/assess/requirements/${system.id}`}>
                            View Requirements
                            <ArrowRight className="h-4 w-4 ml-2" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          )}

          {/* Systems without roles */}
          {systems.filter(s => !s.operatorRole).length > 0 && (
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-amber-500" />
                Systems Pending Role Determination
              </h3>
              <div className="grid gap-2">
                {systems.filter(s => !s.operatorRole).map(system => (
                  <Card key={system.id} className="border-amber-200">
                    <CardContent className="py-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">{system.name}</p>
                          <p className="text-sm text-muted-foreground">Role not determined</p>
                        </div>
                        <Button variant="outline" size="sm" asChild>
                          <Link href="/assess/classification?type=role-determination">Determine Role</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </TabsContent>

        {/* By Role Tab */}
        <TabsContent value="by-role" className="space-y-4">
          <h2 className="text-xl font-semibold">Requirements by Operator Role</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(ROLE_REQUIREMENTS).map(([roleKey, roleReqs]) => {
              const count = roleSummary[roleKey as keyof typeof roleSummary] || 0

              return (
                <Card key={roleKey} className="hover:border-primary/50 transition-colors">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <RoleBadge role={roleKey} />
                      <Badge variant="secondary">{count} systems</Badge>
                    </div>
                    <CardTitle className="text-lg">{roleReqs.title}</CardTitle>
                    <CardDescription>{roleReqs.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="bg-muted rounded-lg p-2 text-center">
                        <p className="font-semibold">{roleReqs.obligationsCount}</p>
                        <p className="text-xs text-muted-foreground">Obligations</p>
                      </div>
                      <div className="bg-muted rounded-lg p-2 text-center">
                        <p className="font-semibold">{roleReqs.controlsCount}</p>
                        <p className="text-xs text-muted-foreground">Controls</p>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Articles: {roleReqs.articles.join(", ")}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </TabsContent>

        {/* By Article Tab */}
        <TabsContent value="by-article" className="space-y-4">
          <h2 className="text-xl font-semibold">Requirements by EU AI Act Article</h2>

          <div className="space-y-4">
            {Object.entries(reqSummary.byArticle).length === 0 ? (
              <Card className="border-dashed">
                <CardContent className="pt-6 text-center py-12">
                  <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    No requirements tracked yet. Complete classification for your AI systems to see article breakdown.
                  </p>
                </CardContent>
              </Card>
            ) : (
              Object.entries(reqSummary.byArticle)
                .sort(([a], [b]) => {
                  const numA = parseInt(a.replace(/\D/g, "")) || 0
                  const numB = parseInt(b.replace(/\D/g, "")) || 0
                  return numA - numB
                })
                .map(([article, stats]) => (
                  <Card key={article}>
                    <CardContent className="py-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <FileText className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-semibold">{article}</p>
                            <p className="text-sm text-muted-foreground">
                              {stats.completed} of {stats.total} completed
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <Progress
                            value={stats.total > 0 ? (stats.completed / stats.total) * 100 : 0}
                            className="w-32 h-2"
                          />
                          <span className="text-sm font-medium w-12 text-right">
                            {stats.total > 0 ? Math.round((stats.completed / stats.total) * 100) : 0}%
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
            )}
          </div>
        </TabsContent>

        {/* Organization Overview Tab */}
        <TabsContent value="overview" className="space-y-4">
          <h2 className="text-xl font-semibold">Organization-Wide Compliance Overview</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Compliance by Category */}
            <Card>
              <CardHeader>
                <CardTitle>Compliance by Category</CardTitle>
                <CardDescription>Progress across requirement categories</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {Object.entries(reqSummary.byCategory).length === 0 ? (
                  <p className="text-sm text-muted-foreground">No data available yet</p>
                ) : (
                  Object.entries(reqSummary.byCategory).map(([category, stats]) => (
                    <div key={category} className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium">{category}</span>
                        <span className="text-muted-foreground">
                          {stats.completed}/{stats.total}
                        </span>
                      </div>
                      <Progress
                        value={stats.total > 0 ? (stats.completed / stats.total) * 100 : 0}
                        className="h-2"
                      />
                    </div>
                  ))
                )}
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Statistics</CardTitle>
                <CardDescription>Key compliance metrics</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between py-2 border-b">
                  <span className="text-sm">Total AI Systems</span>
                  <span className="font-semibold">{totalSystems}</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b">
                  <span className="text-sm">Systems with Roles</span>
                  <span className="font-semibold">{systemsWithRolesCount}</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b">
                  <span className="text-sm">Provider Systems</span>
                  <span className="font-semibold">{roleSummary.provider}</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b">
                  <span className="text-sm">Deployer Systems</span>
                  <span className="font-semibold">{roleSummary.deployer}</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-sm">GPAI Provider Systems</span>
                  <span className="font-semibold">{roleSummary.gpai_provider}</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Overdue Requirements Alert */}
          {overdueReqs.length > 0 && (
            <Card className="border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="text-red-700 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  Overdue Requirements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-red-600 mb-4">
                  {overdueReqs.length} requirement{overdueReqs.length !== 1 ? "s" : ""} past due date
                </p>
                <Button variant="destructive" size="sm">
                  View Overdue Items
                </Button>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>

      {/* Call to Action */}
      <Card className="bg-gradient-to-r from-teal-50 to-cyan-50 border-teal-200">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-teal-900">Ready to assess your gaps?</h3>
              <p className="text-sm text-teal-700">
                Identify compliance gaps and generate remediation plans
              </p>
            </div>
            <Button asChild className="bg-teal-600 hover:bg-teal-700">
              <Link href="/assess/comply">
                Continue to Comply
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default function RequirementsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <NavWithAuth />
      <main className="flex-1">
        <PageHeader
          badge="Step 3 of 5"
          title="Requirements Dashboard"
          description="Track and manage EU AI Act compliance requirements across your organization."
          color="teal"
        />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <Suspense fallback={<LoadingSkeleton />}>
            <RequirementsDashboard />
          </Suspense>
        </div>
      </main>
      <Footer />
    </div>
  )
}
