import Link from "next/link"
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
  FileText,
  ShieldCheck,
  Settings2,
  Scale,
  Layers,
  Target,
  AlertTriangle,
  TrendingUp,
  AlertCircle,
} from "lucide-react"
import { cn } from "@/lib/utils"

// Server actions for real data
import {
  getStandards,
  getStandardsStats,
  getControlsStats,
  getOverallProgress,
  getAtRiskKPIs,
  getLowProgressStandards,
} from "@/lib/actions/standards"
import { getPolicyStats } from "@/lib/actions/policies"
import { getImplementationStats } from "@/lib/actions/implementation"
import { getGuideStats } from "@/lib/actions/guides"
import { getTemplateStats } from "@/lib/actions/templates"

// Static policy data (reference only)
import { aiPolicy } from "@/lib/data/compliance-framework"

export default async function ImplementPage() {
  // Fetch all data in parallel
  const [
    standards,
    standardStats,
    controlStats,
    overallProgress,
    kpisAtRisk,
    lowProgressStandards,
    policyStats,
    implStats,
    guideStats,
    templateStats,
  ] = await Promise.all([
    getStandards(),
    getStandardsStats(),
    getControlsStats(),
    getOverallProgress(),
    getAtRiskKPIs(),
    getLowProgressStandards(50),
    getPolicyStats(),
    getImplementationStats(),
    getGuideStats(),
    getTemplateStats(),
  ])

  return (
    <div className="flex min-h-screen flex-col">
      <NavWithAuth />

      <main className="flex-1">
        <PageHeader
          badge="Implementation"
          title="Implement Compliance Measures"
          description="Apply technical and organizational measures to achieve EU AI Act compliance through structured policy, standards, and controls."
          color="amber"
        />

        {/* Progress Section */}
        <section className="border-b border-border/50 py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex items-center gap-4 rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/5 to-transparent p-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/25">
                  <Layers className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">Standards</p>
                  <div className="mt-1 flex items-center gap-3">
                    <span className="text-2xl font-bold">{standardStats.total}</span>
                    <Badge variant="secondary" className="text-xs">{standardStats.draft} draft</Badge>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-accent/20 bg-gradient-to-r from-accent/5 to-transparent p-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-foreground shadow-lg shadow-accent/25">
                  <Target className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">Controls</p>
                  <div className="mt-1 flex items-center gap-3">
                    <span className="text-2xl font-bold">{controlStats.total}</span>
                    <Badge variant="secondary" className="text-xs">{controlStats.byRiskLevel.critical} critical</Badge>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-chart-3/20 bg-gradient-to-r from-chart-3/5 to-transparent p-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-chart-3 text-foreground shadow-lg shadow-chart-3/25">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">Overall Progress</p>
                  <div className="mt-1 flex items-center gap-3">
                    <Progress value={overallProgress} className="h-2 flex-1" />
                    <span className="text-lg font-bold">{overallProgress}%</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-destructive/20 bg-gradient-to-r from-destructive/5 to-transparent p-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-destructive text-destructive-foreground shadow-lg shadow-destructive/25">
                  <AlertTriangle className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">KPIs At Risk</p>
                  <div className="mt-1 flex items-center gap-3">
                    <span className="text-2xl font-bold">{kpisAtRisk.length}</span>
                    <Badge variant="secondary" className="text-xs">requires attention</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Policy Framework Card */}
        <section className="py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Link href={`/implement/policies/${aiPolicy.id}`}>
              <Card className="group cursor-pointer border-amber-500/30 bg-gradient-to-r from-amber-500/5 via-background to-background transition-all hover:border-amber-500/50 hover:shadow-xl">
                <CardContent className="p-6">
                  <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex items-center gap-5">
                      <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-amber-500/10">
                        <Scale className="h-8 w-8 text-amber-500" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="font-mono">{aiPolicy.policyNumber}</Badge>
                          <Badge className="bg-chart-3/10 text-chart-3 border-chart-3/30" variant="outline">
                            {aiPolicy.status}
                          </Badge>
                        </div>
                        <h2 className="mt-2 text-xl font-bold">{aiPolicy.title}</h2>
                        <p className="mt-1 text-muted-foreground">
                          {aiPolicy.requirements.length} requirements | {standards.length} supporting standards | {controlStats.total} controls
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">Compliance Progress</p>
                        <p className="text-2xl font-bold text-amber-500">{overallProgress}%</p>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground transition-colors group-hover:text-amber-500">
                        <span className="text-sm font-medium">View Policy</span>
                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="relative overflow-hidden py-10">
          <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-6">
              <h2 className="text-xl font-bold">Quick Actions</h2>
              <p className="text-muted-foreground">Navigate to key compliance areas</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Link href="/implement/standards">
                <Card className="group cursor-pointer border-primary/20 bg-gradient-to-br from-primary/5 to-transparent transition-all hover:shadow-lg hover:border-primary/40 h-full">
                  <CardContent className="flex items-center gap-4 p-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-all group-hover:bg-primary group-hover:shadow-lg">
                      <Layers className="h-6 w-6 text-primary transition-colors group-hover:text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">Standards Library</p>
                      <p className="text-sm text-muted-foreground">{standards.length} internal standards</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/implement/policies">
                <Card className="group cursor-pointer border-accent/20 bg-gradient-to-br from-accent/5 to-transparent transition-all hover:shadow-lg hover:border-accent/40 h-full">
                  <CardContent className="flex items-center gap-4 p-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 transition-all group-hover:bg-accent group-hover:shadow-lg">
                      <FileText className="h-6 w-6 text-accent transition-colors group-hover:text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">Policies</p>
                      <p className="text-sm text-muted-foreground">Governance framework</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/implement/templates">
                <Card className="group cursor-pointer border-chart-3/20 bg-gradient-to-br from-chart-3/5 to-transparent transition-all hover:shadow-lg hover:border-chart-3/40 h-full">
                  <CardContent className="flex items-center gap-4 p-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-chart-3/10 transition-all group-hover:bg-chart-3 group-hover:shadow-lg">
                      <Settings2 className="h-6 w-6 text-chart-3 transition-colors group-hover:text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">Excel Templates</p>
                      <p className="text-sm text-muted-foreground">{templateStats.total} downloadable workbooks</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/implement/procedures">
                <Card className="group cursor-pointer border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-transparent transition-all hover:shadow-lg hover:border-emerald-500/40 h-full">
                  <CardContent className="flex items-center gap-4 p-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 transition-all group-hover:bg-emerald-500 group-hover:shadow-lg">
                      <ShieldCheck className="h-6 w-6 text-emerald-500 transition-colors group-hover:text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">Procedures & Documents</p>
                      <p className="text-sm text-muted-foreground">{guideStats.procedures} procedures, {guideStats.assessmentTools} tools</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>

        {/* Standards Requiring Attention */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold tracking-tight">Standards Requiring Attention</h2>
                <p className="mt-2 text-muted-foreground">
                  Standards with low progress or critical controls that need focus
                </p>
              </div>
              <Button variant="outline" asChild>
                <Link href="/implement/standards">
                  View All Standards
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {lowProgressStandards.slice(0, 6).map((standard) => {
                const kpisAtRiskForStandard = standard.kpis.filter(
                  (k) => k.status === "at_risk" || k.status === "off_track"
                ).length

                return (
                  <Link key={standard.id} href={`/implement/standards/${standard.id}`}>
                    <Card className="group cursor-pointer transition-all hover:shadow-lg hover:border-primary/40 h-full">
                      <div className="h-1 bg-muted">
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
                          <Badge variant="outline" className="font-mono text-xs">
                            {standard.standardId}
                          </Badge>
                          {kpisAtRiskForStandard > 0 && (
                            <Badge variant="outline" className="text-xs bg-destructive/10 text-destructive border-destructive/30">
                              <AlertCircle className="mr-1 h-3 w-3" />
                              {kpisAtRiskForStandard} at risk
                            </Badge>
                          )}
                        </div>
                        <CardTitle className="text-base mt-2">{standard.shortTitle}</CardTitle>
                        <CardDescription className="line-clamp-2">{standard.title}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Progress
                              value={standard.progress}
                              className={cn(
                                "h-2 w-20",
                                standard.progress >= 80 && "[&>div]:bg-accent",
                                standard.progress >= 50 && standard.progress < 80 && "[&>div]:bg-primary",
                                standard.progress < 50 && "[&>div]:bg-chart-3"
                              )}
                            />
                            <span className="text-sm font-medium">{standard.progress}%</span>
                          </div>
                          <div className="flex items-center gap-1 text-muted-foreground transition-colors group-hover:text-primary">
                            <span className="text-sm">View</span>
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* Compliance Hierarchy */}
        <section className="relative overflow-hidden py-16">
          <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-bold tracking-tight">Compliance Framework Structure</h2>
              <p className="mt-2 text-muted-foreground">
                Understanding the hierarchy: Policy governs Standards which contain Controls
              </p>
            </div>

            <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-center lg:gap-8">
              {/* Policy */}
              <Card className="w-full max-w-sm border-amber-500/30 bg-gradient-to-br from-amber-500/5 to-transparent">
                <CardContent className="pt-6 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-500/10">
                    <Scale className="h-8 w-8 text-amber-500" />
                  </div>
                  <Badge className="bg-amber-500 text-white mb-2">1. Policy</Badge>
                  <h3 className="text-lg font-bold">{aiPolicy.policyNumber}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Overarching governance framework defining principles and requirements
                  </p>
                  <p className="mt-3 text-2xl font-bold text-amber-500">
                    {aiPolicy.requirements.length}
                  </p>
                  <p className="text-xs text-muted-foreground">Requirements</p>
                </CardContent>
              </Card>

              <ArrowRight className="h-8 w-8 text-muted-foreground hidden lg:block" />
              <div className="h-8 w-px bg-border lg:hidden" />

              {/* Standards */}
              <Card className="w-full max-w-sm border-primary/30 bg-gradient-to-br from-primary/5 to-transparent">
                <CardContent className="pt-6 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Layers className="h-8 w-8 text-primary" />
                  </div>
                  <Badge className="bg-primary text-primary-foreground mb-2">2. Standards</Badge>
                  <h3 className="text-lg font-bold">STD-AI-001 to 014</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Detailed standards implementing each policy requirement
                  </p>
                  <p className="mt-3 text-2xl font-bold text-primary">
                    {standards.length}
                  </p>
                  <p className="text-xs text-muted-foreground">Internal Standards</p>
                </CardContent>
              </Card>

              <ArrowRight className="h-8 w-8 text-muted-foreground hidden lg:block" />
              <div className="h-8 w-px bg-border lg:hidden" />

              {/* Controls */}
              <Card className="w-full max-w-sm border-accent/30 bg-gradient-to-br from-accent/5 to-transparent">
                <CardContent className="pt-6 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                    <Target className="h-8 w-8 text-accent" />
                  </div>
                  <Badge className="bg-accent text-accent-foreground mb-2">3. Controls</Badge>
                  <h3 className="text-lg font-bold">Compliance Controls</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Specific measures with requirements and evidence documentation
                  </p>
                  <p className="mt-3 text-2xl font-bold text-accent">
                    {controlStats.total}
                  </p>
                  <p className="text-xs text-muted-foreground">Total Controls</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Back to Dashboard CTA */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-primary/30 bg-gradient-to-r from-primary/10 to-transparent p-8 sm:flex-row">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-white shadow-lg shadow-primary/25">
                  <CheckCircle2 className="h-7 w-7" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Implementation complete?</p>
                  <p className="text-lg font-bold">Return to dashboard to monitor progress</p>
                </div>
              </div>
              <Button
                size="lg"
                className="shadow-lg shadow-primary/25"
                asChild
              >
                <Link href="/">
                  Back to Dashboard
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
