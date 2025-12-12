import { NavWithAuth } from "@/components/nav-with-auth"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  Bot,
  Building2,
  Calendar,
  ChevronRight,
  AlertTriangle,
  Shield,
  Eye,
  Ban,
  CheckCircle2,
  Clock,
  FileText,
  ClipboardCheck,
  ArrowLeft,
  Users,
  Database,
  Scale,
  Briefcase,
  ShieldCheck,
  Target,
  FileCheck,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { getAiSystemById } from "@/lib/actions/ai-systems"
import { getRequirementsStatusForSystem, initializeRequirementsForAiSystem } from "@/lib/actions/requirements"
import { type OperatorRole, type RiskLevel, LIMITED_RISK_REQUIREMENTS, MINIMAL_RISK_REQUIREMENTS, UNIVERSAL_REQUIREMENTS } from "@/lib/data/role-requirements"
import { getGapAnalysisResults } from "@/lib/actions/assessments"
import { getGuides } from "@/lib/actions/guides"
import { STANDARD_CONTROLS } from "@/lib/data/standard-controls"
import { notFound } from "next/navigation"
import Link from "next/link"
import { RiskAssessmentTab } from "@/components/system-tabs/risk-assessment-tab"
import { RoleAssessmentTab } from "@/components/system-tabs/role-assessment-tab"
import { ComplianceTab } from "@/components/system-tabs/compliance-tab"
import { EvidenceTab } from "@/components/system-tabs/evidence-tab"

interface Props {
  params: Promise<{ id: string }>
}

// Risk level configurations
const RISK_CONFIGS = {
  prohibited: { label: "Prohibited", icon: Ban, color: "destructive", bgColor: "bg-destructive/10", textColor: "text-destructive" },
  high: { label: "High Risk", icon: AlertTriangle, color: "amber", bgColor: "bg-amber-500/10", textColor: "text-amber-600" },
  limited: { label: "Limited Risk", icon: Eye, color: "primary", bgColor: "bg-primary/10", textColor: "text-primary" },
  minimal: { label: "Minimal Risk", icon: Shield, color: "accent", bgColor: "bg-accent/10", textColor: "text-accent" },
  unclassified: { label: "Not Classified", icon: Clock, color: "muted", bgColor: "bg-muted", textColor: "text-muted-foreground" },
}

// Role configurations
const ROLE_CONFIGS = {
  provider: { label: "Provider", icon: Building2, bgColor: "bg-primary/10", textColor: "text-primary" },
  deployer: { label: "Deployer", icon: Users, bgColor: "bg-teal-500/10", textColor: "text-teal-600" },
  importer: { label: "Importer", icon: Briefcase, bgColor: "bg-amber-500/10", textColor: "text-amber-600" },
  distributor: { label: "Distributor", icon: Briefcase, bgColor: "bg-rose-500/10", textColor: "text-rose-600" },
  gpai_provider: { label: "GPAI Provider", icon: Bot, bgColor: "bg-violet-500/10", textColor: "text-violet-600" },
}

export default async function AiSystemDetailPage({ params }: Props) {
  const { id } = await params

  // Fetch system data
  const system = await getAiSystemById(id)
  if (!system) {
    notFound()
  }

  // Fetch requirements
  let requirements = await getRequirementsStatusForSystem(id)
  
  // Auto-initialize requirements if system has role and risk level but no requirements yet
  if (requirements.length === 0 && system.operatorRole && system.riskLevel && system.riskLevel !== "unclassified") {
    await initializeRequirementsForAiSystem(id, system.operatorRole as OperatorRole, system.riskLevel as RiskLevel)
    requirements = await getRequirementsStatusForSystem(id)
  }

  // Fetch gaps
  const allGaps = await getGapAnalysisResults(id)
  const gaps = allGaps.filter(g => g.aiSystemId === id)

  // Fetch guides (real documents from compliance library)
  const allGuides = await getGuides()

  // Get controls filtered by risk level
  // For high-risk: all standard controls (111)
  // For limited risk: only transparency controls from LIMITED_RISK_REQUIREMENTS (4)
  // For minimal risk: only universal controls
  const getApplicableControls = () => {
    if (system.riskLevel === "high" || system.riskLevel === "prohibited") {
      return STANDARD_CONTROLS
    }
    if (system.riskLevel === "limited") {
      // Use LIMITED_RISK_REQUIREMENTS controls (Article 50 transparency)
      // Convert to StandardControl format for compatibility
      return LIMITED_RISK_REQUIREMENTS.controls.map(c => ({
        id: c.id,
        name: c.name,
        type: "preventive" as const,
        frequency: "Continuous",
        riskLevel: "medium" as const,
        objective: c.description || "",
        standardId: "eu-ai-act",
        euAiActArticle: c.article,
      }))
    }
    // Minimal risk - universal controls only
    return UNIVERSAL_REQUIREMENTS.controls.map(c => ({
      id: c.id,
      name: c.name,
      type: "preventive" as const,
      frequency: "Continuous",
      riskLevel: "low" as const,
      objective: c.description || "",
      standardId: "eu-ai-act",
      euAiActArticle: c.article,
    }))
  }
  const applicableControls = getApplicableControls()

  // Calculate metrics
  const reqCompleted = requirements.filter(r => r.status === "verified" || r.status === "implemented").length
  const reqProgress = requirements.length > 0 ? Math.round((reqCompleted / requirements.length) * 100) : 0

  const riskConfig = RISK_CONFIGS[system.riskLevel as keyof typeof RISK_CONFIGS] || RISK_CONFIGS.unclassified
  const roleConfig = system.operatorRole ? ROLE_CONFIGS[system.operatorRole as keyof typeof ROLE_CONFIGS] : null
  const RiskIcon = riskConfig.icon
  const RoleIcon = roleConfig?.icon || Users

  const formatDate = (date: Date | null) => {
    if (!date) return "—"
    return new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short", year: "numeric" }).format(new Date(date))
  }

  return (
    <div className="flex min-h-screen flex-col">
      <NavWithAuth />

      <main className="flex-1">
        {/* Header */}
        <div className="border-b border-border/50 bg-gradient-to-b from-muted/50 to-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Link href="/assess/inventory" className="hover:text-foreground transition-colors flex items-center gap-1">
                <ArrowLeft className="h-4 w-4" />
                AI Inventory
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground font-medium">{system.name}</span>
            </nav>

            {/* System Header */}
            <div className="flex items-start gap-4">
              <div className={cn("flex h-14 w-14 items-center justify-center rounded-xl shrink-0", riskConfig.bgColor)}>
                <Bot className={cn("h-7 w-7", riskConfig.textColor)} />
              </div>
              <div className="flex-1 min-w-0">
                <h1 className="text-2xl font-bold truncate">{system.name}</h1>
                <p className="text-muted-foreground text-sm mt-1 line-clamp-2">
                  {system.description || "No description provided"}
                </p>
              </div>
            </div>

            {/* Status Cards */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              {/* Risk Level */}
              <Card className={cn("border-2", system.riskLevel !== "unclassified" ? "border-amber-500/30" : "border-dashed border-muted-foreground/30")}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={cn("flex h-10 w-10 items-center justify-center rounded-lg", riskConfig.bgColor)}>
                        <RiskIcon className={cn("h-5 w-5", riskConfig.textColor)} />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Risk Level</p>
                        <p className={cn("font-semibold", riskConfig.textColor)}>{riskConfig.label}</p>
                      </div>
                    </div>
                    {system.riskLevel === "unclassified" && (
                      <Badge variant="outline" className="text-xs">Pending</Badge>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Role */}
              <Card className={cn("border-2", system.operatorRole ? "border-primary/30" : "border-dashed border-muted-foreground/30")}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={cn("flex h-10 w-10 items-center justify-center rounded-lg", roleConfig?.bgColor || "bg-muted")}>
                        <RoleIcon className={cn("h-5 w-5", roleConfig?.textColor || "text-muted-foreground")} />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Your Role</p>
                        <p className={cn("font-semibold", roleConfig?.textColor || "text-muted-foreground")}>
                          {roleConfig?.label || "Not Determined"}
                        </p>
                      </div>
                    </div>
                    {!system.operatorRole && (
                      <Badge variant="outline" className="text-xs">Pending</Badge>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Compliance Progress */}
              <Card className="border-2 border-accent/30">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                      <ShieldCheck className="h-5 w-5 text-accent" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-muted-foreground">Compliance</p>
                      <div className="flex items-center gap-2">
                        <p className="font-semibold text-accent">{reqProgress}%</p>
                        <Progress value={reqProgress} className="h-2 flex-1" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Main Content with Tabs */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-6">
              <TabsTrigger value="overview" className="gap-2">
                <Database className="h-4 w-4" />
                Overview
              </TabsTrigger>
              <TabsTrigger value="risk" className="gap-2">
                <Scale className="h-4 w-4" />
                Risk Level
              </TabsTrigger>
              <TabsTrigger value="role" className="gap-2">
                <Users className="h-4 w-4" />
                Your Role
              </TabsTrigger>
              <TabsTrigger value="compliance" className="gap-2">
                <ClipboardCheck className="h-4 w-4" />
                Compliance
              </TabsTrigger>
              <TabsTrigger value="evidence" className="gap-2">
                <FileCheck className="h-4 w-4" />
                Evidence
              </TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                {/* System Details */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">System Details</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <dl className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <dt className="text-sm text-muted-foreground">Category</dt>
                        <dd className="font-medium capitalize">{system.category || "—"}</dd>
                      </div>
                      <div>
                        <dt className="text-sm text-muted-foreground">Vendor</dt>
                        <dd className="font-medium">{system.vendor || "—"}</dd>
                      </div>
                      <div>
                        <dt className="text-sm text-muted-foreground">Department</dt>
                        <dd className="font-medium">{system.department || "—"}</dd>
                      </div>
                      <div>
                        <dt className="text-sm text-muted-foreground">Status</dt>
                        <dd>
                          <Badge variant="outline" className="capitalize">{system.status}</Badge>
                        </dd>
                      </div>
                      <div>
                        <dt className="text-sm text-muted-foreground">Created</dt>
                        <dd className="font-medium">{formatDate(system.createdAt)}</dd>
                      </div>
                      <div>
                        <dt className="text-sm text-muted-foreground">Last Assessment</dt>
                        <dd className="font-medium">{formatDate(system.lastAssessmentDate)}</dd>
                      </div>
                    </dl>
                  </CardContent>
                </Card>

                {/* Compliance Checklist */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Compliance Checklist</CardTitle>
                    <CardDescription>Complete these steps for full compliance</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                        <span className="text-sm">System registered in inventory</span>
                      </li>
                      <li className="flex items-center gap-3">
                        {system.riskLevel && system.riskLevel !== "unclassified" ? (
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                        ) : (
                          <Clock className="h-5 w-5 text-muted-foreground shrink-0" />
                        )}
                        <span className={cn("text-sm", (!system.riskLevel || system.riskLevel === "unclassified") && "text-muted-foreground")}>
                          Risk level classified
                        </span>
                      </li>
                      <li className="flex items-center gap-3">
                        {system.operatorRole ? (
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                        ) : (
                          <Clock className="h-5 w-5 text-muted-foreground shrink-0" />
                        )}
                        <span className={cn("text-sm", !system.operatorRole && "text-muted-foreground")}>
                          Operator role determined
                        </span>
                      </li>
                      <li className="flex items-center gap-3">
                        {requirements.length > 0 ? (
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                        ) : (
                          <Clock className="h-5 w-5 text-muted-foreground shrink-0" />
                        )}
                        <span className={cn("text-sm", requirements.length === 0 && "text-muted-foreground")}>
                          Requirements identified ({requirements.length})
                        </span>
                      </li>
                      <li className="flex items-center gap-3">
                        {reqProgress >= 100 ? (
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                        ) : (
                          <Clock className="h-5 w-5 text-muted-foreground shrink-0" />
                        )}
                        <span className={cn("text-sm", reqProgress < 100 && "text-muted-foreground")}>
                          All requirements addressed
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Next Steps */}
              {(system.riskLevel === "unclassified" || !system.operatorRole) && (
                <Card className="border-primary/30 bg-primary/5">
                  <CardHeader>
                    <CardTitle className="text-base flex items-center gap-2">
                      <Target className="h-5 w-5 text-primary" />
                      Next Steps
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-3">
                      {system.riskLevel === "unclassified" && (
                        <Button asChild>
                          <Link href="#" onClick={() => document.querySelector('[value="risk"]')?.dispatchEvent(new Event('click'))}>
                            <Scale className="mr-2 h-4 w-4" />
                            Classify Risk Level
                          </Link>
                        </Button>
                      )}
                      {!system.operatorRole && (
                        <Button variant={system.riskLevel === "unclassified" ? "outline" : "default"} asChild>
                          <Link href="#" onClick={() => document.querySelector('[value="role"]')?.dispatchEvent(new Event('click'))}>
                            <Users className="mr-2 h-4 w-4" />
                            Determine Your Role
                          </Link>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            {/* Risk Assessment Tab */}
            <TabsContent value="risk">
              <RiskAssessmentTab 
                systemId={system.id}
                systemName={system.name}
                currentRiskLevel={system.riskLevel}
              />
            </TabsContent>

            {/* Role Assessment Tab */}
            <TabsContent value="role">
              <RoleAssessmentTab 
                systemId={system.id}
                systemName={system.name}
                currentRole={system.operatorRole}
              />
            </TabsContent>

            {/* Compliance Tab (Requirements + Controls) */}
            <TabsContent value="compliance">
              <ComplianceTab 
                systemId={system.id}
                riskLevel={system.riskLevel}
                operatorRole={system.operatorRole}
                requirements={requirements}
                controls={applicableControls}
                gaps={gaps}
              />
            </TabsContent>

            {/* Evidence Tab */}
            <TabsContent value="evidence">
              <EvidenceTab 
                systemId={system.id}
                requirements={requirements}
                guides={allGuides}
                riskLevel={system.riskLevel || "unclassified"}
                role={system.operatorRole}
              />
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  )
}
