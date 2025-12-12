import { Suspense } from "react"
import Link from "next/link"
import { notFound } from "next/navigation"
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
  BookOpen,
  CheckSquare,
  ListChecks,
  Clipboard,
  ExternalLink,
  Download,
  Circle
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import {
  STANDARD_CONTROLS,
  type StandardControl
} from "@/lib/data/standard-controls"

// Helper to find a control by ID
function getControlById(controlId: string): StandardControl | undefined {
  return STANDARD_CONTROLS.find(c => c.id === controlId)
}

// Category mapping for display
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

// Standard ID to name mapping
const STANDARD_NAMES: Record<string, string> = {
  "std-ai-001": "AI System Classification Standard",
  "std-ai-002": "AI Risk Management Standard",
  "std-ai-003": "AI Data Governance Standard",
  "std-ai-004": "AI Technical Documentation Standard",
  "std-ai-005": "AI Logging & Record-Keeping Standard",
  "std-ai-006": "AI Transparency Standard",
  "std-ai-007": "AI Human Oversight Standard",
  "std-ai-008": "AI Accuracy, Robustness & Security Standard",
  "std-ai-009": "AI Quality Management Standard",
  "std-ai-010": "AI Conformity Assessment Standard",
  "std-ai-011": "AI Registration Standard",
  "std-ai-012": "AI Post-Market Monitoring Standard",
  "std-ai-013": "AI Incident Management Standard",
  "std-ai-014": "AI Literacy & Training Standard",
}

function LoadingSkeleton() {
  return (
    <div className="space-y-6 animate-pulse">
      <div className="h-32 bg-muted rounded-xl" />
      <div className="h-64 bg-muted rounded-xl" />
      <div className="h-96 bg-muted rounded-xl" />
    </div>
  )
}

function getControlCategory(controlId: string): string {
  const prefix = controlId.split("-")[0]
  return CONTROL_CATEGORIES[prefix]?.name || "General Compliance"
}

function getRoleFromControlId(controlId: string): string {
  const prefix = controlId.split("-")[0]
  // Map control prefixes to primary applicable roles
  const roleMap: Record<string, string> = {
    "CLS": "All Roles",
    "RM": "Provider",
    "DATA": "Provider",
    "DOC": "Provider",
    "LOG": "Provider/Deployer",
    "TRANS": "Provider",
    "HO": "Provider/Deployer",
    "ARS": "Provider",
    "QMS": "Provider",
    "CA": "Provider",
    "REG": "Provider/Deployer",
    "PMM": "Provider",
    "INC": "Provider/Deployer",
    "LIT": "All Roles",
  }
  return roleMap[prefix] || "Provider"
}

function getRelatedRequirements(controlId: string): { id: string; title: string; article: string }[] {
  // StandardControl doesn't have related requirements mapping
  // This can be enhanced later to link controls to requirements
  return []
}

interface PageProps {
  params: Promise<{ controlId: string }>
}

async function ControlDetail({ controlId }: { controlId: string }) {
  const decodedControlId = decodeURIComponent(controlId)
  const control = getControlById(decodedControlId)

  if (!control) {
    notFound()
  }

  const category = getControlCategory(control.id)
  const role = getRoleFromControlId(control.id)
  const relatedRequirements = getRelatedRequirements(control.id)

  return (
    <div className="space-y-8">
      {/* Breadcrumb Navigation */}
      <section className="border-b border-border/50 py-4 bg-muted/30 -mx-6 px-6 -mt-6">
        <div className="flex items-center gap-2 text-sm">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/implement/controls">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Controls Library
            </Link>
          </Button>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
          <Badge variant="outline" className="bg-teal-500/10 text-teal-600 border-teal-500/30">
            {control.id}
          </Badge>
        </div>
      </section>

      {/* Control Header */}
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-3 flex-wrap">
              <Badge variant="outline" className="font-mono text-sm">
                {control.id}
              </Badge>
              <Badge
                variant={control.riskLevel === "critical" ? "destructive" : "secondary"}
                className={
                  control.riskLevel === "critical" ? "" :
                  control.riskLevel === "high" ? "bg-orange-500/10 text-orange-600 border-orange-500/30" :
                  control.riskLevel === "medium" ? "bg-amber-500/10 text-amber-600 border-amber-500/30" :
                  "bg-green-500/10 text-green-600 border-green-500/30"
                }
              >
                {control.riskLevel.charAt(0).toUpperCase() + control.riskLevel.slice(1)} Risk
              </Badge>
              <Badge variant="outline" className="capitalize">
                {control.type}
              </Badge>
              <Badge variant="secondary">{role}</Badge>
            </div>
            <h1 className="text-3xl font-bold tracking-tight">{control.name}</h1>
            <p className="text-lg text-muted-foreground">
              {control.objective}
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>
      </div>

      {/* Control Overview Cards */}
      <div className="grid md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                <BookOpen className="h-5 w-5 text-blue-500" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">EU AI Act</p>
                <p className="font-semibold">{control.euAiActArticle || "N/A"}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-green-500/10 flex items-center justify-center">
                <Clock className="h-5 w-5 text-green-500" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Frequency</p>
                <p className="font-semibold text-sm">{control.frequency}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-purple-500/10 flex items-center justify-center">
                <Shield className="h-5 w-5 text-purple-500" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Category</p>
                <p className="font-semibold">{category}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-amber-500/10 flex items-center justify-center">
                <Building2 className="h-5 w-5 text-amber-500" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Standard</p>
                <p className="font-semibold text-sm">{control.standardId.toUpperCase()}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Control Objective */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                Control Objective
              </CardTitle>
              <CardDescription>
                What this control aims to achieve
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed">{control.objective}</p>
            </CardContent>
          </Card>

          {/* Control Details */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ListChecks className="h-5 w-5 text-teal-500" />
                Control Details
              </CardTitle>
              <CardDescription>
                Key information about this control
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="flex items-start gap-3 p-3 rounded-lg border bg-muted/30">
                  <div className="h-8 w-8 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="h-4 w-4 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Control Type</p>
                    <p className="text-sm text-muted-foreground capitalize">{control.type} control - {
                      control.type === "preventive" ? "Designed to prevent issues before they occur" :
                      control.type === "detective" ? "Designed to detect issues when they occur" :
                      "Designed to correct issues after they occur"
                    }</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-lg border bg-muted/30">
                  <div className="h-8 w-8 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-4 w-4 text-green-500" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Review Frequency</p>
                    <p className="text-sm text-muted-foreground">{control.frequency}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-lg border bg-muted/30">
                  <div className="h-8 w-8 rounded-full bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="h-4 w-4 text-amber-500" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Risk Level</p>
                    <p className="text-sm text-muted-foreground capitalize">{control.riskLevel} - {
                      control.riskLevel === "critical" ? "Failure could result in severe regulatory action" :
                      control.riskLevel === "high" ? "Important for compliance, requires prompt attention" :
                      control.riskLevel === "medium" ? "Moderate priority for implementation" :
                      "Lower priority, implement when resources allow"
                    }</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Implementation Guidance */}
          <Card className="border-dashed">
            <CardContent className="pt-6 text-center py-12">
              <FileText className="h-12 w-12 text-teal-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Implementation Guidance</h3>
              <p className="text-muted-foreground mb-4">
                Refer to the source standard for detailed implementation steps, evidence requirements, and success criteria.
              </p>
              <p className="text-sm text-muted-foreground">
                Standard: {STANDARD_NAMES[control.standardId] || control.standardId}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Related Requirements */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Related Requirements</CardTitle>
              <CardDescription>
                Requirements that reference this control
              </CardDescription>
            </CardHeader>
            <CardContent>
              {relatedRequirements.length === 0 ? (
                <p className="text-sm text-muted-foreground">
                  No requirements directly reference this control.
                </p>
              ) : (
                <div className="space-y-3">
                  {relatedRequirements.map(req => (
                    <div key={req.id} className="p-3 rounded-lg border space-y-1">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">
                          {req.article}
                        </Badge>
                        <Badge variant="secondary" className="text-xs font-mono">
                          {req.id}
                        </Badge>
                      </div>
                      <p className="text-sm line-clamp-2">{req.title}</p>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Quick Reference */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Quick Reference</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Control ID</p>
                <p className="font-mono text-sm bg-muted px-2 py-1 rounded">{control.id}</p>
              </div>
              <Separator />
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Legal Basis</p>
                <p className="text-sm font-medium">{control.euAiActArticle || "N/A"}</p>
              </div>
              <Separator />
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Source Standard</p>
                <p className="text-sm font-medium">{control.standardId.toUpperCase()}</p>
              </div>
              <Separator />
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Risk Level</p>
                <Badge
                  variant={control.riskLevel === "critical" ? "destructive" : "secondary"}
                  className={
                    control.riskLevel === "critical" ? "" :
                    control.riskLevel === "high" ? "bg-orange-500/10 text-orange-600 border-orange-500/30" :
                    control.riskLevel === "medium" ? "bg-amber-500/10 text-amber-600 border-amber-500/30" :
                    "bg-green-500/10 text-green-600 border-green-500/30"
                  }
                >
                  {control.riskLevel.charAt(0).toUpperCase() + control.riskLevel.slice(1)}
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Regulation Reference */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">EU AI Act Reference</CardTitle>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/resources/regulation">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View EU AI Act
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Navigation */}
      <Card className="bg-gradient-to-r from-teal-50 to-cyan-50 border-teal-200">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-teal-900">
                Track this control's implementation
              </h3>
              <p className="text-sm text-teal-700">
                View AI systems that need to implement this control
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

export default async function ControlDetailPage({ params }: PageProps) {
  const { controlId } = await params

  return (
    <div className="flex min-h-screen flex-col">
      <NavWithAuth />
      <main className="flex-1">
        <PageHeader
          badge="Control Details"
          title="Control Implementation"
          description="View control requirements, implementation steps, and evidence."
          color="teal"
        />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <Suspense fallback={<LoadingSkeleton />}>
            <ControlDetail controlId={controlId} />
          </Suspense>
        </div>
      </main>
      <Footer />
    </div>
  )
}
