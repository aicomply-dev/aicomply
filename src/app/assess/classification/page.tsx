import { NavWithAuth } from "@/components/nav-with-auth"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import {
  Scale,
  Ban,
  ShieldAlert,
  Eye,
  Leaf,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Info,
  Building2,
  Truck,
  PackageCheck,
  Users,
  Cpu,
  BookOpen,
  PlayCircle,
  ChevronRight,
} from "lucide-react"
import { ClassificationWizard } from "@/components/classification-wizard"
import { RoleDeterminationWizard } from "@/components/role-determination-wizard"
import { getRiskClassificationQuestions } from "@/lib/actions/assessments"

// Risk level definitions for educational content
const RISK_LEVELS = [
  {
    id: "prohibited",
    title: "Prohibited",
    icon: Ban,
    color: "destructive",
    bgColor: "bg-red-500/10",
    textColor: "text-red-600",
    borderColor: "border-red-500/30",
    article: "Article 5",
    description: "AI practices that are completely banned under the EU AI Act",
    examples: [
      "Social scoring by public authorities",
      "Real-time biometric identification in public spaces (with exceptions)",
      "Subliminal manipulation causing harm",
      "Exploitation of vulnerabilities (age, disability)",
      "Emotion recognition in workplace/education (with exceptions)",
    ],
    consequence: "These AI systems cannot be placed on the EU market or used in the EU.",
  },
  {
    id: "high",
    title: "High Risk",
    icon: ShieldAlert,
    color: "amber",
    bgColor: "bg-amber-500/10",
    textColor: "text-amber-600",
    borderColor: "border-amber-500/30",
    article: "Article 6, Annex III",
    description: "AI systems with significant impact on health, safety, or fundamental rights",
    examples: [
      "Biometric identification and categorization",
      "Critical infrastructure management",
      "Education and vocational training",
      "Employment and worker management",
      "Access to essential services (credit, insurance)",
      "Law enforcement and border control",
      "Administration of justice",
    ],
    consequence: "Must comply with Articles 9-15: risk management, data governance, documentation, logging, transparency, human oversight, accuracy & security.",
  },
  {
    id: "limited",
    title: "Limited Risk",
    icon: Eye,
    color: "blue",
    bgColor: "bg-blue-500/10",
    textColor: "text-blue-600",
    borderColor: "border-blue-500/30",
    article: "Article 50",
    description: "AI systems with transparency obligations",
    examples: [
      "Chatbots and conversational AI",
      "Emotion recognition systems",
      "Biometric categorization systems",
      "AI-generated content (deepfakes, synthetic media)",
    ],
    consequence: "Must inform users they are interacting with AI and label AI-generated content.",
  },
  {
    id: "minimal",
    title: "Minimal Risk",
    icon: Leaf,
    color: "green",
    bgColor: "bg-green-500/10",
    textColor: "text-green-600",
    borderColor: "border-green-500/30",
    article: "No specific requirements",
    description: "AI systems with no or minimal risk to rights and safety",
    examples: [
      "AI-enabled video games",
      "Spam filters",
      "Inventory management systems",
      "AI-powered search engines",
    ],
    consequence: "No mandatory requirements, but voluntary codes of conduct encouraged.",
  },
]

// Operator roles for educational content
const OPERATOR_ROLES = [
  {
    id: "provider",
    title: "Provider",
    icon: Building2,
    description: "Develops or has AI system developed and places it on market or puts into service under own name/trademark",
    obligations: "Full compliance obligations including conformity assessment, CE marking, technical documentation",
    articles: "Articles 16-22",
  },
  {
    id: "deployer",
    title: "Deployer",
    icon: Users,
    description: "Uses AI system under their authority (except personal non-professional use)",
    obligations: "Human oversight, monitoring, incident reporting, data protection impact assessment",
    articles: "Articles 26-27",
  },
  {
    id: "importer",
    title: "Importer",
    icon: Truck,
    description: "Places AI system from third country on EU market",
    obligations: "Verify conformity assessment, ensure documentation, keep records",
    articles: "Article 23",
  },
  {
    id: "distributor",
    title: "Distributor",
    icon: PackageCheck,
    description: "Makes AI system available on market (not provider or importer)",
    obligations: "Verify CE marking, verify documentation accompanies system",
    articles: "Article 24",
  },
  {
    id: "gpai_provider",
    title: "GPAI Provider",
    icon: Cpu,
    description: "Provides general-purpose AI models",
    obligations: "Technical documentation, training data summary, copyright compliance, systemic risk assessment (if applicable)",
    articles: "Articles 51-56",
  },
]

export default async function ClassificationPage() {
  // Get questions for demo wizard
  const questions = await getRiskClassificationQuestions()

  return (
    <div className="flex min-h-screen flex-col">
      <NavWithAuth />

      <main className="flex-1">
        <PageHeader
          badge="Step 2: Classify"
          title="AI Risk Classification"
          description="Learn how to classify AI systems under the EU AI Act and determine your obligations based on risk level and operator role."
          color="amber"
        />

        {/* Quick Navigation */}
        <section className="border-b border-border/50 py-4 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm">
                <Link href="/assess/inventory" className="text-muted-foreground hover:text-foreground">
                  Step 1: Register
                </Link>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium text-amber-600">Step 2: Classify</span>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
                <Link href="/assess/requirements" className="text-muted-foreground hover:text-foreground">
                  Step 3: Requirements
                </Link>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
                <Link href="/assess/comply" className="text-muted-foreground hover:text-foreground">
                  Step 4: Comply
                </Link>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
                <Link href="/assess/monitor" className="text-muted-foreground hover:text-foreground">
                  Step 5: Monitor
                </Link>
              </div>
              <Button asChild>
                <Link href="/assess/inventory">
                  <Building2 className="mr-2 h-4 w-4" />
                  Classify Your Systems
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="risk-levels" className="space-y-8">
              <TabsList className="grid w-full max-w-2xl grid-cols-3">
                <TabsTrigger value="risk-levels" className="gap-2">
                  <Scale className="h-4 w-4" />
                  Risk Levels
                </TabsTrigger>
                <TabsTrigger value="roles" className="gap-2">
                  <Users className="h-4 w-4" />
                  Operator Roles
                </TabsTrigger>
                <TabsTrigger value="demo" className="gap-2">
                  <PlayCircle className="h-4 w-4" />
                  Try Demo
                </TabsTrigger>
              </TabsList>

              {/* Risk Levels Tab */}
              <TabsContent value="risk-levels" className="space-y-8">
                {/* Risk Pyramid Visual */}
                <Card className="border-2">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Scale className="h-5 w-5" />
                      EU AI Act Risk Pyramid
                    </CardTitle>
                    <CardDescription>
                      The EU AI Act categorizes AI systems into four risk levels, each with different regulatory requirements.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col items-center gap-2">
                      {/* Pyramid visualization */}
                      <div className="w-full max-w-2xl space-y-2">
                        <div className="flex justify-center">
                          <div className="w-1/4 bg-red-500/20 border-2 border-red-500/50 rounded-t-lg p-4 text-center">
                            <Ban className="h-6 w-6 mx-auto text-red-600 mb-1" />
                            <span className="font-semibold text-red-600 text-sm">Prohibited</span>
                          </div>
                        </div>
                        <div className="flex justify-center">
                          <div className="w-2/4 bg-amber-500/20 border-2 border-amber-500/50 p-4 text-center">
                            <ShieldAlert className="h-6 w-6 mx-auto text-amber-600 mb-1" />
                            <span className="font-semibold text-amber-600 text-sm">High Risk</span>
                          </div>
                        </div>
                        <div className="flex justify-center">
                          <div className="w-3/4 bg-blue-500/20 border-2 border-blue-500/50 p-4 text-center">
                            <Eye className="h-6 w-6 mx-auto text-blue-600 mb-1" />
                            <span className="font-semibold text-blue-600 text-sm">Limited Risk (Transparency)</span>
                          </div>
                        </div>
                        <div className="flex justify-center">
                          <div className="w-full bg-green-500/20 border-2 border-green-500/50 rounded-b-lg p-4 text-center">
                            <Leaf className="h-6 w-6 mx-auto text-green-600 mb-1" />
                            <span className="font-semibold text-green-600 text-sm">Minimal Risk</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Detailed Risk Level Cards */}
                <div className="grid gap-6 md:grid-cols-2">
                  {RISK_LEVELS.map((level) => {
                    const Icon = level.icon
                    return (
                      <Card key={level.id} className={`border-2 ${level.borderColor}`}>
                        <CardHeader>
                          <div className="flex items-start justify-between">
                            <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${level.bgColor}`}>
                              <Icon className={`h-6 w-6 ${level.textColor}`} />
                            </div>
                            <Badge variant="outline" className={level.borderColor}>
                              {level.article}
                            </Badge>
                          </div>
                          <CardTitle className={`text-xl ${level.textColor}`}>{level.title}</CardTitle>
                          <CardDescription className="text-base">
                            {level.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div>
                            <h4 className="font-medium mb-2 flex items-center gap-2">
                              <Info className="h-4 w-4" />
                              Examples
                            </h4>
                            <ul className="text-sm text-muted-foreground space-y-1">
                              {level.examples.map((example, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0" />
                                  {example}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className={`p-3 rounded-lg ${level.bgColor}`}>
                            <h4 className="font-medium mb-1 flex items-center gap-2">
                              <AlertTriangle className="h-4 w-4" />
                              Consequence
                            </h4>
                            <p className="text-sm">{level.consequence}</p>
                          </div>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </TabsContent>

              {/* Operator Roles Tab */}
              <TabsContent value="roles" className="space-y-8">
                <Card className="border-2">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5" />
                      Operator Roles Under EU AI Act
                    </CardTitle>
                    <CardDescription>
                      Your obligations depend not only on the risk level of the AI system, but also on your role in the AI value chain.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                      {OPERATOR_ROLES.map((role) => {
                        const Icon = role.icon
                        return (
                          <Card key={role.id} className="border">
                            <CardHeader className="pb-2">
                              <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                                  <Icon className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                  <CardTitle className="text-base">{role.title}</CardTitle>
                                  <Badge variant="outline" className="text-xs mt-1">
                                    {role.articles}
                                  </Badge>
                                </div>
                              </div>
                            </CardHeader>
                            <CardContent className="space-y-3">
                              <p className="text-sm text-muted-foreground">
                                {role.description}
                              </p>
                              <div className="p-2 rounded bg-muted/50">
                                <p className="text-xs font-medium">Key Obligations:</p>
                                <p className="text-xs text-muted-foreground">{role.obligations}</p>
                              </div>
                            </CardContent>
                          </Card>
                        )
                      })}
                    </div>
                  </CardContent>
                </Card>

                {/* Role Decision Flowchart */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5" />
                      How to Determine Your Role
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4 p-4 rounded-lg border">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm">1</div>
                        <div>
                          <h4 className="font-medium">Did you develop or commission the AI system?</h4>
                          <p className="text-sm text-muted-foreground">If yes, and you place it on the market under your name → <strong>Provider</strong></p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 p-4 rounded-lg border">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm">2</div>
                        <div>
                          <h4 className="font-medium">Are you importing AI from outside the EU?</h4>
                          <p className="text-sm text-muted-foreground">If yes → <strong>Importer</strong></p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 p-4 rounded-lg border">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm">3</div>
                        <div>
                          <h4 className="font-medium">Are you making AI available to others (not as provider/importer)?</h4>
                          <p className="text-sm text-muted-foreground">If yes → <strong>Distributor</strong></p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 p-4 rounded-lg border">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm">4</div>
                        <div>
                          <h4 className="font-medium">Are you using the AI system in your operations?</h4>
                          <p className="text-sm text-muted-foreground">If yes → <strong>Deployer</strong></p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Demo Tab */}
              <TabsContent value="demo" className="space-y-8">
                <Card className="border-2 border-primary/30 bg-primary/5">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                        <PlayCircle className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle>Try the Classification Wizards</CardTitle>
                        <CardDescription>
                          These are standalone demos. To classify your actual AI systems, go to the Inventory.
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 p-3 rounded-lg bg-amber-500/10 border border-amber-500/30 mb-6">
                      <AlertTriangle className="h-5 w-5 text-amber-600" />
                      <p className="text-sm text-amber-700">
                        <strong>Demo Mode:</strong> Results from these wizards are not saved. To classify real systems, use the AI System Inventory.
                      </p>
                    </div>
                    
                    <Tabs defaultValue="risk" className="w-full">
                      <TabsList className="grid w-full grid-cols-2 mb-6">
                        <TabsTrigger value="risk">Risk Classification</TabsTrigger>
                        <TabsTrigger value="role">Role Determination</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="risk">
                        <ClassificationWizard
                          aiSystems={[]}
                          isAuthenticated={false}
                          questions={questions}
                          demoMode={true}
                        />
                      </TabsContent>
                      
                      <TabsContent value="role">
                        <RoleDeterminationWizard demoMode={true} />
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>

                {/* CTA to real inventory */}
                <Card className="border-2">
                  <CardContent className="py-8">
                    <div className="text-center space-y-4">
                      <h3 className="text-xl font-bold">Ready to classify your real AI systems?</h3>
                      <p className="text-muted-foreground max-w-xl mx-auto">
                        Go to the AI System Inventory to register your systems and run assessments that save to your compliance records.
                      </p>
                      <Button size="lg" asChild>
                        <Link href="/assess/inventory">
                          <Building2 className="mr-2 h-5 w-5" />
                          Go to AI System Inventory
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
