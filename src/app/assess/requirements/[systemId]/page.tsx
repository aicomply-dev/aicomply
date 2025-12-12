import { Suspense } from "react"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  ChevronDown,
  Shield,
  CheckCircle2,
  Clock,
  AlertTriangle,
  FileText,
  Users,
  Building2,
  Target,
  BookOpen,
  ClipboardList,
  Download,
  ExternalLink,
  Circle,
  CheckCircle,
  XCircle
} from "lucide-react"
import { NavWithAuth } from "@/components/nav-with-auth"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { getAiSystemById } from "@/lib/actions/ai-systems"
import {
  getRequirementsStatusForSystem,
  getRequirementsByArticle,
  initializeRequirementsForAiSystem
} from "@/lib/actions/requirements"
import {
  ROLE_REQUIREMENTS,
  type OperatorRole,
  type RiskLevel,
  type Requirement,
  type Control
} from "@/lib/data/role-requirements"

function LoadingSkeleton() {
  return (
    <div className="space-y-6 animate-pulse">
      <div className="h-32 bg-muted rounded-xl" />
      <div className="grid grid-cols-4 gap-4">
        {[1, 2, 3, 4].map(i => (
          <div key={i} className="h-24 bg-muted rounded-xl" />
        ))}
      </div>
      <div className="h-96 bg-muted rounded-xl" />
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

function StatusIcon({ status }: { status: string }) {
  switch (status) {
    case "verified":
      return <CheckCircle2 className="h-5 w-5 text-green-600" />
    case "implemented":
      return <CheckCircle className="h-5 w-5 text-blue-600" />
    case "in_progress":
      return <Clock className="h-5 w-5 text-amber-600" />
    case "not_started":
    default:
      return <Circle className="h-5 w-5 text-gray-400" />
  }
}

function StatusBadge({ status }: { status: string }) {
  const statusConfig: Record<string, { label: string; className: string }> = {
    verified: { label: "Verified", className: "bg-green-500/10 text-green-600 border-green-500/30" },
    implemented: { label: "Implemented", className: "bg-blue-500/10 text-blue-600 border-blue-500/30" },
    in_progress: { label: "In Progress", className: "bg-amber-500/10 text-amber-600 border-amber-500/30" },
    not_started: { label: "Not Started", className: "bg-gray-500/10 text-gray-600 border-gray-500/30" },
  }

  const config = statusConfig[status] || statusConfig.not_started

  return (
    <Badge variant="outline" className={config.className}>
      {config.label}
    </Badge>
  )
}

interface PageProps {
  params: Promise<{ systemId: string }>
}

async function SystemRequirements({ systemId }: { systemId: string }) {
  const system = await getAiSystemById(systemId)

  if (!system) {
    notFound()
  }

  if (!system.operatorRole) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/assess/requirements">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Requirements
            </Link>
          </Button>
        </div>

        <Card className="border-amber-200 bg-amber-50">
          <CardContent className="pt-6 text-center py-12">
            <AlertTriangle className="h-12 w-12 text-amber-500 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-amber-900 mb-2">
              Role Not Determined
            </h2>
            <p className="text-amber-700 mb-6">
              To view requirements for "{system.name}", you must first determine your operator role under the EU AI Act.
            </p>
            <Button asChild className="bg-amber-600 hover:bg-amber-700">
              <Link href="/assess/roles">
                Determine Role
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  // Get role requirements
  const roleReqs = ROLE_REQUIREMENTS[system.operatorRole as OperatorRole]
  if (!roleReqs) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">Invalid role configuration</p>
      </div>
    )
  }

  // Get or initialize requirements status
  let statusRecords = await getRequirementsStatusForSystem(systemId)

  // If no status records exist, initialize them
  if (statusRecords.length === 0 && system.riskLevel) {
    await initializeRequirementsForAiSystem(
      systemId,
      system.operatorRole as OperatorRole,
      system.riskLevel as RiskLevel
    )
    statusRecords = await getRequirementsStatusForSystem(systemId)
  }

  // Calculate stats
  const totalReqs = roleReqs.requirements.length
  const implementedCount = statusRecords.filter(r =>
    r.status === "implemented" || r.status === "verified"
  ).length
  const inProgressCount = statusRecords.filter(r => r.status === "in_progress").length
  const notStartedCount = statusRecords.filter(r => r.status === "not_started").length
  const completionRate = totalReqs > 0 ? Math.round((implementedCount / totalReqs) * 100) : 0

  // Group requirements by article
  const reqsByArticle = roleReqs.requirements.reduce((acc, req) => {
    if (!acc[req.article]) {
      acc[req.article] = []
    }
    acc[req.article].push(req)
    return acc
  }, {} as Record<string, Requirement[]>)

  return (
    <div className="space-y-8">
      {/* Lifecycle Navigation */}
      <section className="border-b border-border/50 py-4 bg-muted/30 -mx-6 px-6 -mt-6">
        <div className="flex items-center gap-2 text-sm">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/assess/requirements">
              <ArrowLeft className="h-4 w-4 mr-2" />
              All Systems
            </Link>
          </Button>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
          <Badge variant="outline" className="bg-teal-500/10 text-teal-600 border-teal-500/30">
            {system.name}
          </Badge>
        </div>
      </section>

      {/* System Header */}
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold tracking-tight">{system.name}</h1>
            <RoleBadge role={system.operatorRole} />
            <RiskBadge level={system.riskLevel || "unclassified"} />
          </div>
          <p className="text-muted-foreground">
            {roleReqs.title} - {roleReqs.description}
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total</p>
                <p className="text-2xl font-bold">{totalReqs}</p>
              </div>
              <FileText className="h-8 w-8 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Implemented</p>
                <p className="text-2xl font-bold text-green-600">{implementedCount}</p>
              </div>
              <CheckCircle2 className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">In Progress</p>
                <p className="text-2xl font-bold text-amber-600">{inProgressCount}</p>
              </div>
              <Clock className="h-8 w-8 text-amber-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Not Started</p>
                <p className="text-2xl font-bold text-gray-600">{notStartedCount}</p>
              </div>
              <Circle className="h-8 w-8 text-gray-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-primary/5">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Completion</p>
                <p className="text-2xl font-bold text-primary">{completionRate}%</p>
              </div>
              <div className="h-12 w-12">
                <Progress value={completionRate} className="h-12 w-12 rounded-full" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Overall Progress */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Overall Compliance Progress</h3>
            <span className="text-sm text-muted-foreground">
              {implementedCount} of {totalReqs} requirements completed
            </span>
          </div>
          <Progress value={completionRate} className="h-3" />
          <div className="flex justify-between mt-2 text-xs text-muted-foreground">
            <span>0%</span>
            <span>Compliant at 100%</span>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="requirements" className="space-y-6">
        <TabsList>
          <TabsTrigger value="requirements" className="gap-2">
            <ClipboardList className="h-4 w-4" />
            Requirements
          </TabsTrigger>
          <TabsTrigger value="controls" className="gap-2">
            <Shield className="h-4 w-4" />
            Controls
          </TabsTrigger>
          <TabsTrigger value="evidence" className="gap-2">
            <FileText className="h-4 w-4" />
            Evidence
          </TabsTrigger>
        </TabsList>

        {/* Requirements Tab */}
        <TabsContent value="requirements" className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Requirements by Article</h2>
            <p className="text-sm text-muted-foreground">
              Covering Articles: {roleReqs.articles.join(", ")}
            </p>
          </div>

          <Accordion type="multiple" className="space-y-4">
            {Object.entries(reqsByArticle)
              .sort(([a], [b]) => {
                const numA = parseInt(a.replace(/\D/g, "")) || 0
                const numB = parseInt(b.replace(/\D/g, "")) || 0
                return numA - numB
              })
              .map(([article, requirements]) => {
                const articleStatuses = statusRecords.filter(s =>
                  requirements.some(r => r.id === s.requirementId)
                )
                const articleCompleted = articleStatuses.filter(s =>
                  s.status === "implemented" || s.status === "verified"
                ).length

                return (
                  <AccordionItem key={article} value={article} className="border rounded-lg px-4">
                    <AccordionTrigger className="hover:no-underline py-4">
                      <div className="flex items-center justify-between w-full pr-4">
                        <div className="flex items-center gap-4">
                          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <BookOpen className="h-5 w-5 text-primary" />
                          </div>
                          <div className="text-left">
                            <p className="font-semibold">{article}</p>
                            <p className="text-sm text-muted-foreground">
                              {requirements[0]?.category || "Requirements"}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <Badge variant="secondary">
                            {articleCompleted}/{requirements.length} completed
                          </Badge>
                          <Progress
                            value={requirements.length > 0 ? (articleCompleted / requirements.length) * 100 : 0}
                            className="w-24 h-2"
                          />
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-4">
                      <div className="space-y-4 pt-2">
                        {requirements.map(req => {
                          const status = statusRecords.find(s => s.requirementId === req.id)

                          return (
                            <Card key={req.id} className="border-l-4 border-l-primary/50">
                              <CardContent className="pt-4">
                                <div className="flex items-start justify-between gap-4">
                                  <div className="flex items-start gap-3">
                                    <StatusIcon status={status?.status || "not_started"} />
                                    <div className="space-y-2">
                                      <div className="flex items-center gap-2">
                                        <p className="font-medium">{req.requirement}</p>
                                        {req.mandatory && (
                                          <Badge variant="destructive" className="text-xs">
                                            Mandatory
                                          </Badge>
                                        )}
                                      </div>
                                      <p className="text-sm text-muted-foreground">
                                        {req.category}
                                      </p>
                                      {req.items && req.items.length > 0 && (
                                        <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 mt-2">
                                          {req.items.slice(0, 3).map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                          ))}
                                          {req.items.length > 3 && (
                                            <li className="text-primary">
                                              +{req.items.length - 3} more items
                                            </li>
                                          )}
                                        </ul>
                                      )}
                                      {req.controls.length > 0 && (
                                        <div className="flex items-center gap-2 mt-2">
                                          <span className="text-xs text-muted-foreground">
                                            Controls:
                                          </span>
                                          {req.controls.slice(0, 2).map(ctrl => (
                                            <Badge key={ctrl} variant="outline" className="text-xs">
                                              {ctrl}
                                            </Badge>
                                          ))}
                                          {req.controls.length > 2 && (
                                            <Badge variant="outline" className="text-xs">
                                              +{req.controls.length - 2} more
                                            </Badge>
                                          )}
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <StatusBadge status={status?.status || "not_started"} />
                                    <Button variant="outline" size="sm">
                                      Update
                                    </Button>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          )
                        })}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                )
              })}
          </Accordion>
        </TabsContent>

        {/* Controls Tab */}
        <TabsContent value="controls" className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Implementation Controls</h2>
            <Badge variant="secondary">{roleReqs.controlsCount} controls</Badge>
          </div>

          <div className="grid gap-4">
            {roleReqs.controls.map(control => (
              <Card key={control.id}>
                <CardContent className="pt-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="font-mono text-xs">
                          {control.id}
                        </Badge>
                        <h4 className="font-medium">{control.name}</h4>
                        {control.mandatory && (
                          <Badge variant="destructive" className="text-xs">
                            Mandatory
                          </Badge>
                        )}
                      </div>
                      {control.description && (
                        <p className="text-sm text-muted-foreground">
                          {control.description}
                        </p>
                      )}
                      <div className="flex items-center gap-4 text-sm">
                        <span className="text-muted-foreground">
                          Owner: <span className="font-medium text-foreground">{control.owner}</span>
                        </span>
                        <span className="text-muted-foreground">
                          Article: <span className="font-medium text-foreground">{control.article}</span>
                        </span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Evidence Tab */}
        <TabsContent value="evidence" className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Required Evidence</h2>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Download Evidence Checklist
            </Button>
          </div>

          <Card className="border-dashed">
            <CardContent className="pt-6 text-center py-12">
              <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Evidence Documentation</h3>
              <p className="text-muted-foreground mb-4">
                Track and upload evidence documents for each requirement.
              </p>
              <p className="text-sm text-muted-foreground">
                Required evidence types include:
              </p>
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {Array.from(new Set(
                  roleReqs.requirements.flatMap(r => r.evidence)
                )).slice(0, 8).map(evidence => (
                  <Badge key={evidence} variant="secondary">
                    {evidence}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Next Steps CTA */}
      <Card className="bg-gradient-to-r from-teal-50 to-cyan-50 border-teal-200">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-teal-900">
                Ready to identify compliance gaps?
              </h3>
              <p className="text-sm text-teal-700">
                Run a gap analysis to generate remediation recommendations
              </p>
            </div>
            <Button asChild className="bg-teal-600 hover:bg-teal-700">
              <Link href={`/assess/comply?systemId=${systemId}`}>
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

export default async function SystemRequirementsPage({ params }: PageProps) {
  const { systemId } = await params

  return (
    <div className="flex min-h-screen flex-col">
      <NavWithAuth />
      <main className="flex-1">
        <PageHeader
          badge="System Requirements"
          title="System Requirements"
          description="Track compliance requirements for this AI system."
          color="teal"
        />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <Suspense fallback={<LoadingSkeleton />}>
            <SystemRequirements systemId={systemId} />
          </Suspense>
        </div>
      </main>
      <Footer />
    </div>
  )
}
