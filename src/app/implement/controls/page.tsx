import { Suspense } from "react"
import Link from "next/link"
import { NavWithAuth } from "@/components/nav-with-auth"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
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
  Filter,
  Download,
  Circle,
  CheckCircle,
  Search
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { getAiSystemsWithRoles } from "@/lib/actions/ai-systems"
import { getOrganizationRequirementsSummary } from "@/lib/actions/requirements"
import {
  STANDARD_CONTROLS,
  CONTROL_IDS,
  type StandardControl
} from "@/lib/data/standard-controls"

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

function ControlCategoryBadge({ category }: { category: string }) {
  const categoryConfig: Record<string, { className: string }> = {
    "Risk Management": { className: "bg-red-500/10 text-red-600 border-red-500/30" },
    "Data Governance": { className: "bg-blue-500/10 text-blue-600 border-blue-500/30" },
    "Documentation": { className: "bg-purple-500/10 text-purple-600 border-purple-500/30" },
    "Logging": { className: "bg-amber-500/10 text-amber-600 border-amber-500/30" },
    "Transparency": { className: "bg-cyan-500/10 text-cyan-600 border-cyan-500/30" },
    "Human Oversight": { className: "bg-green-500/10 text-green-600 border-green-500/30" },
    "Accuracy": { className: "bg-indigo-500/10 text-indigo-600 border-indigo-500/30" },
    "Security": { className: "bg-pink-500/10 text-pink-600 border-pink-500/30" },
    "QMS": { className: "bg-orange-500/10 text-orange-600 border-orange-500/30" },
    "Conformity": { className: "bg-teal-500/10 text-teal-600 border-teal-500/30" },
    "Deployer": { className: "bg-emerald-500/10 text-emerald-600 border-emerald-500/30" },
    "GPAI": { className: "bg-violet-500/10 text-violet-600 border-violet-500/30" },
  }

  // Extract category from control ID pattern
  const matchedCategory = Object.keys(categoryConfig).find(cat =>
    category.toLowerCase().includes(cat.toLowerCase().split(" ")[0])
  )

  const config = matchedCategory
    ? categoryConfig[matchedCategory]
    : { className: "bg-gray-500/10 text-gray-600 border-gray-500/30" }

  return (
    <Badge variant="outline" className={config.className}>
      {category}
    </Badge>
  )
}

// Map control ID prefixes to human-readable categories
const CONTROL_CATEGORIES: Record<string, { name: string; description: string }> = {
  "CLS": { name: "Classification", description: "AI System classification controls" },
  "RM": { name: "Risk Management", description: "Risk management system controls" },
  "DATA": { name: "Data Governance", description: "Data and data governance controls" },
  "DOC": { name: "Documentation", description: "Technical documentation controls" },
  "LOG": { name: "Logging", description: "Logging and record-keeping controls" },
  "TRANS": { name: "Transparency", description: "Transparency and information controls" },
  "HO": { name: "Human Oversight", description: "Human oversight controls" },
  "ARS": { name: "Accuracy & Security", description: "Accuracy, robustness, and cybersecurity controls" },
  "QMS": { name: "Quality Management", description: "Quality management system controls" },
  "CA": { name: "Conformity Assessment", description: "Conformity assessment controls" },
  "REG": { name: "Registration", description: "EU database registration controls" },
  "PMM": { name: "Post-Market Monitoring", description: "Post-market monitoring controls" },
  "INC": { name: "Incident Management", description: "Incident management and reporting controls" },
  "LIT": { name: "Literacy & Training", description: "AI literacy and training controls" },
}

function getControlCategory(controlId: string): string {
  const prefix = controlId.split("-")[0]
  return CONTROL_CATEGORIES[prefix]?.name || "General"
}

async function ControlsDashboard() {
  const [systemsWithRoles, reqSummary] = await Promise.all([
    getAiSystemsWithRoles(),
    getOrganizationRequirementsSummary(),
  ])

  // Use extracted standard controls (114 controls from 14 standards)
  const allControls = STANDARD_CONTROLS

  // Group controls by category (using prefix)
  const controlsByCategory = allControls.reduce((acc, ctrl) => {
    const category = getControlCategory(ctrl.id)
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(ctrl)
    return acc
  }, {} as Record<string, StandardControl[]>)

  // Group controls by standard
  const controlsByStandard = allControls.reduce((acc, ctrl) => {
    const stdId = ctrl.standardId
    if (!acc[stdId]) {
      acc[stdId] = []
    }
    acc[stdId].push(ctrl)
    return acc
  }, {} as Record<string, StandardControl[]>)

  // Get controls by risk level
  const criticalControls = allControls.filter(c => c.riskLevel === "critical")
  const highRiskControls = allControls.filter(c => c.riskLevel === "high")
  const mediumRiskControls = allControls.filter(c => c.riskLevel === "medium")

  // Summary stats
  const totalControls = allControls.length
  const categoryCount = Object.keys(controlsByCategory).length
  const standardsCount = Object.keys(controlsByStandard).length

  return (
    <div className="space-y-8">
      {/* Reference Library Badge */}
      <section className="border-b border-border/50 py-4 bg-muted/30 -mx-6 px-6 -mt-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm">
            <Badge variant="outline" className="bg-blue-500/10 text-blue-600 border-blue-500/30">
              Reference Library
            </Badge>
            <span className="text-muted-foreground">|</span>
            <span className="text-muted-foreground">Browse implementation guides for compliance controls</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/assess/comply" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Comply
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight flex items-center gap-3">
            <Shield className="h-8 w-8 text-teal-500" />
            Controls Library
          </h1>
          <p className="text-muted-foreground mt-1">
            Browse and manage EU AI Act compliance controls across all operator roles
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export Controls
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Controls</p>
                <p className="text-3xl font-bold">{totalControls}</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                <Shield className="h-6 w-6 text-blue-500" />
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Across {standardsCount} standards
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Critical</p>
                <p className="text-3xl font-bold text-red-600">{criticalControls.length}</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-red-500/10 flex items-center justify-center">
                <AlertTriangle className="h-6 w-6 text-red-500" />
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Highest priority controls
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">High Risk</p>
                <p className="text-3xl font-bold text-amber-600">{highRiskControls.length}</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-amber-500/10 flex items-center justify-center">
                <Building2 className="h-6 w-6 text-amber-500" />
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              High-priority controls
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Categories</p>
                <p className="text-3xl font-bold text-green-600">{categoryCount}</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-green-500/10 flex items-center justify-center">
                <Target className="h-6 w-6 text-green-500" />
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Control categories
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Standards Overview */}
      <Card className="bg-gradient-to-r from-teal-50 to-cyan-50 border-teal-200">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-teal-900">
                EU AI Act Control Standards
              </h3>
              <p className="text-sm text-teal-700">
                {totalControls} controls extracted from {standardsCount} official standards (STD-AI-001 through STD-AI-014)
              </p>
            </div>
            <div className="flex gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-red-600">{criticalControls.length}</p>
                <p className="text-xs text-red-600">Critical</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-amber-600">{highRiskControls.length}</p>
                <p className="text-xs text-amber-600">High</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-teal-600">{mediumRiskControls.length}</p>
                <p className="text-xs text-teal-600">Medium</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="by-category" className="space-y-6">
        <TabsList>
          <TabsTrigger value="by-category" className="gap-2">
            <Shield className="h-4 w-4" />
            By Category
          </TabsTrigger>
          <TabsTrigger value="by-role" className="gap-2">
            <Building2 className="h-4 w-4" />
            By Standard
          </TabsTrigger>
          <TabsTrigger value="all-controls" className="gap-2">
            <FileText className="h-4 w-4" />
            All Controls
          </TabsTrigger>
        </TabsList>

        {/* By Category Tab */}
        <TabsContent value="by-category" className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Controls by Category</h2>
          </div>

          <div className="grid gap-6">
            {Object.entries(controlsByCategory)
              .sort(([, a], [, b]) => b.length - a.length)
              .map(([category, controls]) => (
                <Card key={category}>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <ControlCategoryBadge category={category} />
                        <CardTitle className="text-lg">{category}</CardTitle>
                      </div>
                      <Badge variant="secondary">{controls.length} controls</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3">
                      {controls.map(control => (
                        <div
                          key={control.id}
                          className="flex items-start justify-between p-3 rounded-lg border bg-muted/30 hover:bg-muted/50 transition-colors"
                        >
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <Badge variant="outline" className="font-mono text-xs">
                                {control.id}
                              </Badge>
                              <span className="font-medium text-sm">{control.name}</span>
                              <Badge
                                variant="outline"
                                className={
                                  control.riskLevel === "critical" ? "bg-red-500/10 text-red-600 border-red-500/30" :
                                  control.riskLevel === "high" ? "bg-amber-500/10 text-amber-600 border-amber-500/30" :
                                  "bg-blue-500/10 text-blue-600 border-blue-500/30"
                                }
                              >
                                {control.riskLevel}
                              </Badge>
                            </div>
                            <p className="text-xs text-muted-foreground line-clamp-2">
                              {control.objective}
                            </p>
                            <div className="flex items-center gap-3 text-xs text-muted-foreground">
                              <span>Type: {control.type}</span>
                              <span>Frequency: {control.frequency}</span>
                              {control.euAiActArticle && <span>Article: {control.euAiActArticle}</span>}
                            </div>
                          </div>
                          <Button variant="ghost" size="sm" asChild>
                            <Link href={`/implement/controls/${encodeURIComponent(control.id)}`}>
                              View
                            </Link>
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>

        {/* By Standard Tab */}
        <TabsContent value="by-role" className="space-y-6">
          <h2 className="text-xl font-semibold">Controls by Standard</h2>

          <div className="grid gap-6">
            {Object.entries(controlsByStandard)
              .sort(([a], [b]) => a.localeCompare(b))
              .map(([standardId, controls]) => {
                const prefix = controls[0]?.id.split("-")[0] || "?"
                const categoryInfo = CONTROL_CATEGORIES[prefix] || { name: standardId, description: "" }
                return (
                  <Card key={standardId}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Badge variant="outline" className="bg-teal-500/10 text-teal-600 border-teal-500/30 font-mono">
                            {standardId.toUpperCase()}
                          </Badge>
                          <CardTitle>{categoryInfo.name}</CardTitle>
                        </div>
                        <Badge variant="secondary">{controls.length} controls</Badge>
                      </div>
                      <CardDescription>
                        {categoryInfo.description} ({controls[0]?.euAiActArticle || "Various articles"})
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-3">
                        {controls.slice(0, 6).map(control => (
                          <div
                            key={control.id}
                            className="flex items-center justify-between p-3 rounded-lg border"
                          >
                            <div className="space-y-1">
                              <div className="flex items-center gap-2">
                                <Badge variant="outline" className="font-mono text-xs">
                                  {control.id}
                                </Badge>
                                <Badge
                                  variant="outline"
                                  className={
                                    control.riskLevel === "critical" ? "bg-red-500/10 text-red-600 border-red-500/30 text-xs" :
                                    control.riskLevel === "high" ? "bg-amber-500/10 text-amber-600 border-amber-500/30 text-xs" :
                                    "bg-blue-500/10 text-blue-600 border-blue-500/30 text-xs"
                                  }
                                >
                                  {control.riskLevel}
                                </Badge>
                              </div>
                              <p className="text-sm font-medium line-clamp-1">{control.name}</p>
                            </div>
                            <Button variant="ghost" size="sm" asChild>
                              <Link href={`/implement/controls/${encodeURIComponent(control.id)}`}>
                                <ArrowRight className="h-4 w-4" />
                              </Link>
                            </Button>
                          </div>
                        ))}
                      </div>
                      {controls.length > 6 && (
                        <p className="text-sm text-muted-foreground mt-3 text-center">
                          + {controls.length - 6} more controls
                        </p>
                      )}
                    </CardContent>
                  </Card>
                )
              })}
          </div>
        </TabsContent>

        {/* All Controls Tab */}
        <TabsContent value="all-controls" className="space-y-4">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-xl font-semibold">All {totalControls} Controls</h2>
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search controls..." className="pl-9" />
            </div>
          </div>

          <div className="border rounded-lg divide-y">
            {allControls.map(control => (
              <div
                key={control.id}
                className="flex items-start justify-between p-4 hover:bg-muted/30 transition-colors"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Badge variant="outline" className="font-mono text-xs">
                      {control.id}
                    </Badge>
                    <span className="font-medium">{control.name}</span>
                    <Badge
                      variant="outline"
                      className={
                        control.riskLevel === "critical" ? "bg-red-500/10 text-red-600 border-red-500/30 text-xs" :
                        control.riskLevel === "high" ? "bg-amber-500/10 text-amber-600 border-amber-500/30 text-xs" :
                        control.riskLevel === "medium" ? "bg-blue-500/10 text-blue-600 border-blue-500/30 text-xs" :
                        "bg-gray-500/10 text-gray-600 border-gray-500/30 text-xs"
                      }
                    >
                      {control.riskLevel}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {control.type}
                    </Badge>
                    <ControlCategoryBadge category={getControlCategory(control.id)} />
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {control.objective}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span>
                      Frequency: <span className="text-foreground">{control.frequency}</span>
                    </span>
                    {control.euAiActArticle && (
                      <span>
                        Article: <span className="text-foreground">{control.euAiActArticle}</span>
                      </span>
                    )}
                  </div>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/implement/controls/${encodeURIComponent(control.id)}`}>
                    View Details
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* CTA */}
      <Card className="bg-gradient-to-r from-teal-50 to-cyan-50 border-teal-200">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-teal-900">
                Track control implementation for your systems
              </h3>
              <p className="text-sm text-teal-700">
                View requirements and track control implementation status per AI system
              </p>
            </div>
            <Button asChild className="bg-teal-600 hover:bg-teal-700">
              <Link href="/assess/requirements">
                View Requirements
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default function ControlsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <NavWithAuth />
      <main className="flex-1">
        <PageHeader
          badge="Reference Library"
          title="Controls Library"
          description="Browse implementation guides for EU AI Act compliance controls across all operator roles."
          color="teal"
        />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <Suspense fallback={<LoadingSkeleton />}>
            <ControlsDashboard />
          </Suspense>
        </div>
      </main>
      <Footer />
    </div>
  )
}
