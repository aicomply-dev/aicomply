import { NavWithAuth } from "@/components/nav-with-auth"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { ClassificationWizard } from "@/components/classification-wizard"
import { ComprehensiveAssessmentWizard } from "@/components/comprehensive-assessment-wizard"
import { RoleDeterminationWizard } from "@/components/role-determination-wizard"
import { getAiSystems } from "@/lib/actions/ai-systems"
import {
  getRiskClassificationQuestions,
  getAssessmentSections,
  getAssessmentTypes,
} from "@/lib/actions/assessments"
import {
  PROHIBITED_PRACTICES_QUESTIONS,
  HIGH_RISK_CLASSIFICATION_QUESTIONS,
  LIMITED_RISK_QUESTIONS,
  RISK_MANAGEMENT_QUESTIONS,
  DATA_GOVERNANCE_QUESTIONS,
  TECHNICAL_DOCUMENTATION_QUESTIONS,
  RECORD_KEEPING_QUESTIONS,
  TRANSPARENCY_REQUIREMENTS_QUESTIONS,
  HUMAN_OVERSIGHT_QUESTIONS,
  ACCURACY_ROBUSTNESS_QUESTIONS,
  CONFORMITY_ASSESSMENT_QUESTIONS,
  ASSESSMENT_SECTIONS,
} from "@/lib/data/assessment-questions"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Scale,
  Zap,
  Ban,
  ShieldAlert,
  Database,
  FileText,
  ScrollText,
  Eye,
  Users,
  Shield,
  CheckCircle,
  ClipboardCheck,
  ArrowRight,
  ArrowLeft,
  Clock,
  HelpCircle,
  ChevronRight,
  Building2,
  Truck,
  AlertTriangle,
  PackageCheck,
  Info,
} from "lucide-react"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Scale,
  Zap,
  Ban,
  ShieldAlert,
  Database,
  FileText,
  ScrollText,
  Eye,
  Users,
  Shield,
  CheckCircle,
  ClipboardCheck,
}

const colorMap: Record<string, string> = {
  primary: "bg-primary/10 text-primary",
  accent: "bg-accent/10 text-accent",
  destructive: "bg-destructive/10 text-destructive",
  amber: "bg-amber-500/10 text-amber-600",
  teal: "bg-teal-500/10 text-teal-600",
  indigo: "bg-indigo-500/10 text-indigo-600",
  violet: "bg-violet-500/10 text-violet-600",
  cyan: "bg-cyan-500/10 text-cyan-600",
  emerald: "bg-emerald-500/10 text-emerald-600",
  blue: "bg-blue-500/10 text-blue-600",
  green: "bg-green-500/10 text-green-600",
}

interface SearchParams {
  type?: string
  systemId?: string
}

export default async function ClassificationPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>
}) {
  const params = await searchParams
  const assessmentType = params.type
  const preSelectedSystemId = params.systemId

  // Fetch AI systems
  const aiSystems = await getAiSystems()
  const systemsList = aiSystems.map((system) => ({
    id: system.id,
    name: system.name,
    riskLevel: system.riskLevel,
  }))
  
  // Get pre-selected system details if provided
  const preSelectedSystem = preSelectedSystemId 
    ? systemsList.find(s => s.id === preSelectedSystemId)
    : null

  // If a specific assessment type is selected, require a system to be selected
  if (assessmentType && !preSelectedSystemId) {
    // Redirect to system selection - assessments must start from a system
    return (
      <div className="flex min-h-screen flex-col">
        <NavWithAuth />
        <main className="flex-1">
          <PageHeader
            badge="Select AI System"
            title="Assessment Requires an AI System"
            description="To run an assessment, please select an AI system from your inventory first."
            color="amber"
          />
          <section className="py-12">
            <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
              <Card className="border-amber-500/30 bg-amber-500/5">
                <CardHeader className="text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500/10 mb-4">
                    <AlertTriangle className="h-8 w-8 text-amber-600" />
                  </div>
                  <CardTitle className="text-xl">No AI System Selected</CardTitle>
                  <CardDescription className="text-base">
                    Assessments must be linked to a specific AI system so results can be saved and tracked.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-col gap-3">
                    <Button asChild size="lg" className="w-full">
                      <Link href="/assess/inventory">
                        <Building2 className="mr-2 h-5 w-5" />
                        Go to AI System Inventory
                      </Link>
                    </Button>
                    <Button variant="outline" asChild size="lg" className="w-full">
                      <Link href="/assess/classification">
                        <ArrowLeft className="mr-2 h-5 w-5" />
                        Back to Assessment Library
                      </Link>
                    </Button>
                  </div>
                  <p className="text-center text-sm text-muted-foreground">
                    Select an AI system from your inventory, then click "Run Assessment" from the system's Assessments tab.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    )
  }

  // If a specific assessment type is selected with a system, show that assessment
  if (assessmentType) {
    let sections = []
    let title = ""
    let description = ""

    switch (assessmentType) {
      case "comprehensive-risk-classification":
        sections = [
          {
            id: "prohibited-practices",
            title: "Prohibited AI Practices",
            description: "Assessment against Article 5 prohibited practices",
            article: "Article 5",
            questions: PROHIBITED_PRACTICES_QUESTIONS,
          },
          {
            id: "high-risk-classification",
            title: "High-Risk Classification",
            description: "Classification under Article 6 and Annex III",
            article: "Article 6, Annex III",
            questions: HIGH_RISK_CLASSIFICATION_QUESTIONS,
          },
          {
            id: "limited-risk-transparency",
            title: "Limited Risk & Transparency",
            description: "Transparency obligations under Article 50",
            article: "Article 50",
            questions: LIMITED_RISK_QUESTIONS,
          },
        ]
        title = "Comprehensive Risk Classification"
        description = "Full EU AI Act risk classification covering prohibited practices, high-risk systems, and transparency obligations."
        break

      case "prohibited-check":
        sections = [
          {
            id: "prohibited-practices",
            title: "Prohibited AI Practices",
            description: "Assessment against Article 5 prohibited practices",
            article: "Article 5",
            questions: PROHIBITED_PRACTICES_QUESTIONS,
          },
        ]
        title = "Prohibited Practices Check"
        description = "Verify your AI system does not fall under prohibited AI practices defined in Article 5."
        break

      case "compliance-risk-management":
        sections = [
          {
            id: "risk-management",
            title: "Risk Management System",
            description: "Evaluation of risk management practices",
            article: "Article 9",
            questions: RISK_MANAGEMENT_QUESTIONS,
          },
        ]
        title = "Risk Management System Assessment"
        description = "Evaluate your risk management system against Article 9 requirements."
        break

      case "compliance-data-governance":
        sections = [
          {
            id: "data-governance",
            title: "Data and Data Governance",
            description: "Assessment of data governance practices",
            article: "Article 10",
            questions: DATA_GOVERNANCE_QUESTIONS,
          },
        ]
        title = "Data Governance Assessment"
        description = "Assess data governance practices for training, validation, and testing data."
        break

      case "compliance-technical-documentation":
        sections = [
          {
            id: "technical-documentation",
            title: "Technical Documentation",
            description: "Review of documentation requirements",
            article: "Article 11, Annex IV",
            questions: TECHNICAL_DOCUMENTATION_QUESTIONS,
          },
        ]
        title = "Technical Documentation Assessment"
        description = "Review technical documentation requirements under Article 11 and Annex IV."
        break

      case "compliance-record-keeping":
        sections = [
          {
            id: "record-keeping",
            title: "Record-Keeping and Logging",
            description: "Assessment of logging capabilities",
            article: "Article 12",
            questions: RECORD_KEEPING_QUESTIONS,
          },
        ]
        title = "Record-Keeping Assessment"
        description = "Evaluate automatic logging capabilities under Article 12."
        break

      case "compliance-transparency":
        sections = [
          {
            id: "transparency",
            title: "Transparency to Deployers",
            description: "Evaluation of transparency requirements",
            article: "Article 13",
            questions: TRANSPARENCY_REQUIREMENTS_QUESTIONS,
          },
        ]
        title = "Transparency Requirements Assessment"
        description = "Assess transparency and information disclosure under Article 13."
        break

      case "compliance-human-oversight":
        sections = [
          {
            id: "human-oversight",
            title: "Human Oversight",
            description: "Assessment of human oversight mechanisms",
            article: "Article 14",
            questions: HUMAN_OVERSIGHT_QUESTIONS,
          },
        ]
        title = "Human Oversight Assessment"
        description = "Evaluate human oversight mechanisms as required by Article 14."
        break

      case "compliance-accuracy-robustness":
        sections = [
          {
            id: "accuracy-robustness",
            title: "Accuracy, Robustness & Cybersecurity",
            description: "Evaluation of accuracy and security",
            article: "Article 15",
            questions: ACCURACY_ROBUSTNESS_QUESTIONS,
          },
        ]
        title = "Accuracy, Robustness & Cybersecurity Assessment"
        description = "Assess accuracy, resilience, and cybersecurity measures under Article 15."
        break

      case "compliance-conformity-assessment":
        sections = [
          {
            id: "conformity-assessment",
            title: "Conformity Assessment",
            description: "Conformity and quality management assessment",
            article: "Article 43, Article 17",
            questions: CONFORMITY_ASSESSMENT_QUESTIONS,
          },
        ]
        title = "Conformity Assessment"
        description = "Full conformity assessment and quality management system evaluation."
        break

      case "full-high-risk-compliance":
        sections = [
          {
            id: "risk-management",
            title: "Risk Management (Art. 9)",
            description: "Risk management system evaluation",
            article: "Article 9",
            questions: RISK_MANAGEMENT_QUESTIONS,
          },
          {
            id: "data-governance",
            title: "Data Governance (Art. 10)",
            description: "Data governance assessment",
            article: "Article 10",
            questions: DATA_GOVERNANCE_QUESTIONS,
          },
          {
            id: "technical-documentation",
            title: "Technical Documentation (Art. 11)",
            description: "Documentation requirements",
            article: "Article 11",
            questions: TECHNICAL_DOCUMENTATION_QUESTIONS,
          },
          {
            id: "record-keeping",
            title: "Record-Keeping (Art. 12)",
            description: "Logging requirements",
            article: "Article 12",
            questions: RECORD_KEEPING_QUESTIONS,
          },
          {
            id: "transparency",
            title: "Transparency (Art. 13)",
            description: "Transparency requirements",
            article: "Article 13",
            questions: TRANSPARENCY_REQUIREMENTS_QUESTIONS,
          },
          {
            id: "human-oversight",
            title: "Human Oversight (Art. 14)",
            description: "Oversight mechanisms",
            article: "Article 14",
            questions: HUMAN_OVERSIGHT_QUESTIONS,
          },
          {
            id: "accuracy-robustness",
            title: "Accuracy & Security (Art. 15)",
            description: "Accuracy and cybersecurity",
            article: "Article 15",
            questions: ACCURACY_ROBUSTNESS_QUESTIONS,
          },
        ]
        title = "Complete High-Risk Compliance Assessment"
        description = "Comprehensive assessment covering all Article 9-15 requirements for high-risk AI systems."
        break

      case "role-determination":
        // Show the Role Determination Wizard
        return (
          <div className="flex min-h-screen flex-col">
            <NavWithAuth />
            <main className="flex-1">
              <PageHeader
                badge="Step 2 of 5"
                title="Role Determination"
                description="Determine your obligations under the EU AI Act based on your role for each AI system."
                color="teal"
              />
              {/* Lifecycle Navigation */}
              <section className="border-b border-border/50 py-4 bg-muted/30">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                  <div className="flex items-center gap-2 text-sm flex-wrap">
                    <Button variant="ghost" size="sm" asChild>
                      <Link href="/assess/inventory" className="gap-2">
                        <ArrowLeft className="h-4 w-4" />
                        Step 1: Register
                      </Link>
                    </Button>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    <Badge variant="outline" className="bg-teal-500/10 text-teal-600 border-teal-500/30">
                      Step 2: Classify
                    </Badge>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    <Button variant="ghost" size="sm" asChild>
                      <Link href="/assess/requirements" className="gap-2">
                        Step 3: Requirements
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    <Button variant="ghost" size="sm" asChild>
                      <Link href="/assess/comply" className="gap-2">
                        Step 4: Comply
                      </Link>
                    </Button>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    <Button variant="ghost" size="sm" asChild>
                      <Link href="/assess/monitor" className="gap-2">
                        Step 5: Monitor
                      </Link>
                    </Button>
                  </div>
                </div>
              </section>
              <section className="py-8">
                <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                  <Card className="border-border/50">
                    <CardContent className="p-6">
                      <RoleDeterminationWizard 
                        aiSystemName={preSelectedSystem?.name}
                        preSelectedSystemId={preSelectedSystemId}
                      />
                    </CardContent>
                  </Card>
                </div>
              </section>
            </main>
            <Footer />
          </div>
        )

      case "quick-risk-classification":
      default:
        // Use the legacy quick classification
        const questions = await getRiskClassificationQuestions()
        return (
          <div className="flex min-h-screen flex-col">
            <NavWithAuth />
            <main className="flex-1">
              <PageHeader
                badge="Step 2 of 5"
                title="AI Risk Classification"
                description="Rapid initial screening to identify potential risk category."
                color="teal"
              />
              {/* Lifecycle Navigation */}
              <section className="border-b border-border/50 py-4 bg-muted/30">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                  <div className="flex items-center gap-2 text-sm flex-wrap">
                    <Button variant="ghost" size="sm" asChild>
                      <Link href="/assess/inventory" className="gap-2">
                        <ArrowLeft className="h-4 w-4" />
                        Step 1: Register
                      </Link>
                    </Button>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    <Badge variant="outline" className="bg-teal-500/10 text-teal-600 border-teal-500/30">
                      Step 2: Classify
                    </Badge>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    <Button variant="ghost" size="sm" asChild>
                      <Link href="/assess/requirements" className="gap-2">
                        Step 3: Requirements
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    <Button variant="ghost" size="sm" asChild>
                      <Link href="/assess/comply" className="gap-2">
                        Step 4: Comply
                      </Link>
                    </Button>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    <Button variant="ghost" size="sm" asChild>
                      <Link href="/assess/monitor" className="gap-2">
                        Step 5: Monitor
                      </Link>
                    </Button>
                  </div>
                </div>
              </section>
              <section className="py-8">
                <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                  <ClassificationWizard
                    aiSystems={systemsList}
                    isAuthenticated={false}
                    questions={questions}
                    preSelectedSystemId={preSelectedSystemId}
                  />
                </div>
              </section>
            </main>
            <Footer />
          </div>
        )
    }

    return (
      <div className="flex min-h-screen flex-col">
        <NavWithAuth />
        <main className="flex-1">
          <PageHeader
            badge="Step 2 of 5"
            title={title}
            description={description}
            color="teal"
          />
          {/* Lifecycle Navigation */}
          <section className="border-b border-border/50 py-4 bg-muted/30">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-2 text-sm flex-wrap">
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/assess/inventory" className="gap-2">
                    <ArrowLeft className="h-4 w-4" />
                    Step 1: Register
                  </Link>
                </Button>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
                <Badge variant="outline" className="bg-teal-500/10 text-teal-600 border-teal-500/30">
                  Step 2: Classify
                </Badge>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/assess/requirements" className="gap-2">
                    Step 3: Requirements
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/assess/comply" className="gap-2">
                    Step 4: Comply
                  </Link>
                </Button>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/assess/monitor" className="gap-2">
                    Step 5: Monitor
                  </Link>
                </Button>
              </div>
            </div>
          </section>
          <section className="py-8">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
              <ComprehensiveAssessmentWizard
                aiSystems={systemsList}
                isAuthenticated={false}
                sections={sections}
                assessmentType={assessmentType}
                title={title}
                description={description}
                preSelectedSystemId={preSelectedSystemId}
              />
            </div>
          </section>
        </main>
        <Footer />
      </div>
    )
  }

  // Show assessment type selection
  const assessmentTypes = await getAssessmentTypes()

  const classificationTypes = assessmentTypes.filter((t) => t.category === "classification")
  const complianceTypes = assessmentTypes.filter((t) => t.category === "high-risk-compliance")
  const fullComplianceTypes = assessmentTypes.filter((t) => t.category === "full-compliance")

  return (
    <div className="flex min-h-screen flex-col">
      <NavWithAuth />

      <main className="flex-1">
        <PageHeader
          badge={preSelectedSystem ? "Select Assessment" : "Assessment Library"}
          title={preSelectedSystem ? `Assess: ${preSelectedSystem.name}` : "EU AI Act Assessment Library"}
          description={preSelectedSystem 
            ? "Select an assessment type to evaluate this AI system against EU AI Act requirements."
            : "Learn about the different assessment types available under the EU AI Act. To run an assessment, select an AI system from your inventory first."
          }
          color="teal"
        />

        {/* Lifecycle Navigation */}
        <section className="border-b border-border/50 py-4 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {preSelectedSystem ? (
              <div className="flex items-center gap-2 text-sm">
                <Button variant="ghost" size="sm" asChild>
                  <Link href={`/assess/inventory/${preSelectedSystemId}`}>
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to {preSelectedSystem.name}
                  </Link>
                </Button>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
                <Badge variant="outline" className="bg-teal-500/10 text-teal-600 border-teal-500/30">
                  Select Assessment
                </Badge>
              </div>
            ) : (
              <div className="flex items-center gap-2 text-sm flex-wrap">
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/assess/inventory" className="gap-2">
                    <ArrowLeft className="h-4 w-4" />
                    Step 1: Register
                  </Link>
                </Button>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
                <Badge variant="outline" className="bg-teal-500/10 text-teal-600 border-teal-500/30">
                  Step 2: Classify
                </Badge>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/assess/requirements" className="gap-2">
                    Step 3: Requirements
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/assess/comply" className="gap-2">
                    Step 4: Comply
                  </Link>
                </Button>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/assess/monitor" className="gap-2">
                    Step 5: Monitor
                  </Link>
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* System Context Banner */}
        {preSelectedSystem && (
          <section className="border-b border-primary/20 py-3 bg-primary/5">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-3">
                <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                  Assessing
                </Badge>
                <span className="font-medium">{preSelectedSystem.name}</span>
                {preSelectedSystem.riskLevel && preSelectedSystem.riskLevel !== "unclassified" && (
                  <Badge variant="secondary" className="capitalize">{preSelectedSystem.riskLevel} Risk</Badge>
                )}
              </div>
            </div>
          </section>
        )}

        <section className="py-12">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-12">
            {/* Risk Classification Section */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                  <Scale className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">Risk Classification</h2>
                  <p className="text-sm text-muted-foreground">
                    Determine the risk category of your AI system
                  </p>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {classificationTypes.map((type) => {
                  const Icon = iconMap[type.icon || "Scale"] || Scale
                  const colorClass = colorMap[type.color || "primary"] || colorMap.primary

                  return (
                    <Card
                      key={type.type}
                      className="group hover:shadow-lg transition-all duration-300 hover:border-primary/30"
                    >
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between">
                          <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${colorClass}`}>
                            <Icon className="h-5 w-5" />
                          </div>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Clock className="h-3 w-3" />
                            {type.duration}
                          </div>
                        </div>
                        <CardTitle className="text-lg mt-3">{type.title}</CardTitle>
                        <CardDescription className="line-clamp-2">
                          {type.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="flex items-center justify-between">
                          <Badge variant="secondary" className="text-xs">
                            {type.questions} questions
                          </Badge>
                          <Button size="sm" asChild>
                            <Link href={`/assess/classification?type=${type.type}${preSelectedSystemId ? `&systemId=${preSelectedSystemId}` : ''}`}>
                              Start
                              <ArrowRight className="ml-1 h-3 w-3" />
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>

            {/* High-Risk Compliance Section */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10">
                  <ShieldAlert className="h-5 w-5 text-amber-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">High-Risk Compliance Assessments</h2>
                  <p className="text-sm text-muted-foreground">
                    Individual assessments for each Article 9-15 requirement
                  </p>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {complianceTypes.map((type) => {
                  const Icon = iconMap[type.icon || "Shield"] || Shield
                  const colorClass = colorMap[type.color || "primary"] || colorMap.primary

                  return (
                    <Card
                      key={type.type}
                      className="group hover:shadow-lg transition-all duration-300 hover:border-primary/30"
                    >
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${colorClass}`}>
                            <Icon className="h-4 w-4" />
                          </div>
                          <Badge variant="outline" className="text-xs">
                            {type.article}
                          </Badge>
                        </div>
                        <CardTitle className="text-base mt-2">{type.title.split(" (")[0]}</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0 space-y-3">
                        <p className="text-xs text-muted-foreground line-clamp-2">
                          {type.description.split(".")[0]}.
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">
                            {type.questions} questions · {type.duration}
                          </span>
                        </div>
                        <Button size="sm" variant="outline" className="w-full" asChild>
                          <Link href={`/assess/classification?type=${type.type}${preSelectedSystemId ? `&systemId=${preSelectedSystemId}` : ''}`}>
                            Start Assessment
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>

            {/* Full Compliance Package */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500/10">
                  <ClipboardCheck className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">Complete Compliance Package</h2>
                  <p className="text-sm text-muted-foreground">
                    Full assessment covering all requirements
                  </p>
                </div>
              </div>

              {fullComplianceTypes.map((type) => (
                <Card
                  key={type.type}
                  className="border-2 border-primary/20 hover:shadow-xl transition-all duration-300"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <Badge className="mb-2 bg-primary">Recommended for High-Risk Systems</Badge>
                        <CardTitle className="text-xl">{type.title}</CardTitle>
                        <CardDescription className="mt-2">{type.description}</CardDescription>
                      </div>
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                        <ClipboardCheck className="h-7 w-7 text-primary" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <HelpCircle className="h-4 w-4" />
                        {type.questions} questions
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        {type.duration}
                      </div>
                      <Badge variant="secondary">Articles 9-15</Badge>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {["Risk Management", "Data Governance", "Documentation", "Logging", "Transparency", "Human Oversight", "Accuracy & Security"].map(
                        (item) => (
                          <Badge key={item} variant="outline" className="text-xs">
                            {item}
                          </Badge>
                        )
                      )}
                    </div>
                    <Button size="lg" className="w-full sm:w-auto bg-primary shadow-lg shadow-primary/25" asChild>
                      <Link href={`/assess/classification?type=${type.type}${preSelectedSystemId ? `&systemId=${preSelectedSystemId}` : ''}`}>
                        Start Complete Assessment
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Role Determination Section */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500/10">
                  <Users className="h-5 w-5 text-teal-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">Role Determination</h2>
                  <p className="text-sm text-muted-foreground">
                    Determine your obligations under the EU AI Act based on your role
                  </p>
                </div>
              </div>

              <div className="grid gap-6 lg:grid-cols-3">
                {/* Role Determination Card */}
                <div className="lg:col-span-2">
                  <Card className="border-teal-500/30 hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <Badge className="mb-2 bg-teal-500">Recommended First Step</Badge>
                          <CardTitle className="text-lg">Determine Your Role</CardTitle>
                          <CardDescription className="mt-2">
                            Answer 5 questions to understand your obligations as a Provider, Deployer, Importer, or Distributor under the EU AI Act.
                          </CardDescription>
                        </div>
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-500/10">
                          <Users className="h-6 w-6 text-teal-600" />
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <HelpCircle className="h-4 w-4" />
                          5 questions
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          2-3 minutes
                        </div>
                        <Badge variant="secondary">Article 3</Badge>
                      </div>
                      <Button size="lg" className="w-full sm:w-auto bg-teal-500 hover:bg-teal-600 shadow-lg shadow-teal-500/25" asChild>
                        <Link href={`/assess/classification?type=role-determination${preSelectedSystemId ? `&systemId=${preSelectedSystemId}` : ''}`}>
                          Start Role Determination
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                {/* Role Quick Reference */}
                <div className="space-y-4">
                  <Card className="border-border/50">
                    <CardContent className="p-5">
                      <h3 className="font-semibold mb-4 flex items-center gap-2">
                        <Info className="h-4 w-4 text-primary" />
                        EU AI Act Roles
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg shrink-0 bg-primary/10 text-primary">
                            <Building2 className="h-4 w-4" />
                          </div>
                          <div>
                            <p className="text-sm font-medium">Provider</p>
                            <p className="text-xs text-muted-foreground">Develops or places AI on market</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg shrink-0 bg-teal-500/10 text-teal-500">
                            <Users className="h-4 w-4" />
                          </div>
                          <div>
                            <p className="text-sm font-medium">Deployer</p>
                            <p className="text-xs text-muted-foreground">Uses AI professionally</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg shrink-0 bg-amber-500/10 text-amber-500">
                            <Truck className="h-4 w-4" />
                          </div>
                          <div>
                            <p className="text-sm font-medium">Importer</p>
                            <p className="text-xs text-muted-foreground">Brings AI from outside EU</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg shrink-0 bg-rose-500/10 text-rose-500">
                            <PackageCheck className="h-4 w-4" />
                          </div>
                          <div>
                            <p className="text-sm font-medium">Distributor</p>
                            <p className="text-xs text-muted-foreground">Distributes AI to others</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
