import { NavWithAuth } from "@/components/nav-with-auth"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import {
  CheckCircle2,
  AlertTriangle,
  XCircle,
  ArrowRight,
  Shield,
  FileText,
  Users,
  Database,
  Eye,
  Activity,
  ClipboardCheck,
  BookOpen,
  ChevronRight,
  Building2,
  Target,
  Scale,
  Lightbulb,
} from "lucide-react"
import { cn } from "@/lib/utils"

// Sample requirements by Article for educational display
const SAMPLE_REQUIREMENTS = [
  {
    article: "Article 9",
    title: "Risk Management System",
    description: "Establish, implement, document and maintain a risk management system",
    icon: Shield,
    color: "red",
    requirements: [
      "Identify and analyze known and foreseeable risks",
      "Estimate and evaluate risks from intended use and misuse",
      "Adopt risk management measures",
      "Test to ensure consistent performance",
      "Document residual risks",
    ],
    controls: 12,
    status: "sample",
  },
  {
    article: "Article 10",
    title: "Data and Data Governance",
    description: "Training, validation and testing data shall be subject to data governance",
    icon: Database,
    color: "blue",
    requirements: [
      "Relevant, representative, and error-free data",
      "Appropriate statistical properties",
      "Bias examination and mitigation",
      "Data provenance documentation",
      "Gap identification procedures",
    ],
    controls: 10,
    status: "sample",
  },
  {
    article: "Article 11",
    title: "Technical Documentation",
    description: "Draw up technical documentation before placing on market",
    icon: FileText,
    color: "purple",
    requirements: [
      "General description of the AI system",
      "Detailed description of elements and development process",
      "Monitoring, functioning and control information",
      "Risk management system description",
      "Changes throughout lifecycle",
    ],
    controls: 15,
    status: "sample",
  },
  {
    article: "Article 12",
    title: "Record-Keeping",
    description: "Automatic recording of events (logs) throughout lifetime",
    icon: Activity,
    color: "amber",
    requirements: [
      "Automatic logging capabilities",
      "Recording of period of use",
      "Reference database for input data",
      "Traceability of AI functioning",
      "Minimum 6-month log retention",
    ],
    controls: 8,
    status: "sample",
  },
  {
    article: "Article 13",
    title: "Transparency",
    description: "Designed to enable deployers to interpret output and use appropriately",
    icon: Eye,
    color: "cyan",
    requirements: [
      "Instructions for use in appropriate format",
      "Identity and contact details of provider",
      "Characteristics, capabilities and limitations",
      "Performance metrics and known limitations",
      "Human oversight measures",
    ],
    controls: 10,
    status: "sample",
  },
  {
    article: "Article 14",
    title: "Human Oversight",
    description: "Designed to be effectively overseen by natural persons",
    icon: Users,
    color: "green",
    requirements: [
      "Enable human oversight during use",
      "Ability to understand AI capabilities",
      "Ability to interpret AI output",
      "Ability to decide not to use or override",
      "Ability to intervene or stop operation",
    ],
    controls: 8,
    status: "sample",
  },
]

// Sample gap analysis for educational display
const SAMPLE_GAPS = [
  {
    id: "gap-1",
    requirement: "Risk Management System",
    article: "Article 9",
    severity: "high",
    description: "No formal risk management process documented",
    recommendation: "Establish a risk management framework following ISO 31000 principles",
  },
  {
    id: "gap-2",
    requirement: "Data Governance",
    article: "Article 10",
    severity: "medium",
    description: "Training data provenance not fully documented",
    recommendation: "Implement data lineage tracking for all training datasets",
  },
  {
    id: "gap-3",
    requirement: "Technical Documentation",
    article: "Article 11",
    severity: "high",
    description: "Missing Annex IV compliant documentation",
    recommendation: "Create technical documentation using the Annex IV template",
  },
  {
    id: "gap-4",
    requirement: "Human Oversight",
    article: "Article 14",
    severity: "low",
    description: "Oversight procedures exist but not formalized",
    recommendation: "Document and train staff on human oversight procedures",
  },
]

const COLOR_MAP: Record<string, string> = {
  red: "bg-red-500/10 text-red-600 border-red-500/30",
  blue: "bg-blue-500/10 text-blue-600 border-blue-500/30",
  purple: "bg-purple-500/10 text-purple-600 border-purple-500/30",
  amber: "bg-amber-500/10 text-amber-600 border-amber-500/30",
  cyan: "bg-cyan-500/10 text-cyan-600 border-cyan-500/30",
  green: "bg-green-500/10 text-green-600 border-green-500/30",
}

export default function ComplyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <NavWithAuth />

      <main className="flex-1">
        <PageHeader
          badge="Step 4: Comply"
          title="Achieve Compliance"
          description="Learn about EU AI Act requirements, controls, and gap analysis methodology to achieve and maintain compliance."
          color="teal"
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
                <Link href="/assess/classification" className="text-muted-foreground hover:text-foreground">
                  Step 2: Classify
                </Link>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
                <Link href="/assess/requirements" className="text-muted-foreground hover:text-foreground">
                  Step 3: Requirements
                </Link>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium text-teal-600">Step 4: Comply</span>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
                <Link href="/assess/monitor" className="text-muted-foreground hover:text-foreground">
                  Step 5: Monitor
                </Link>
              </div>
              <Button asChild>
                <Link href="/assess/inventory">
                  <Building2 className="mr-2 h-4 w-4" />
                  View Your Systems
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="requirements" className="space-y-8">
              <TabsList className="grid w-full max-w-3xl grid-cols-4">
                <TabsTrigger value="requirements" className="gap-2">
                  <ClipboardCheck className="h-4 w-4" />
                  Requirements
                </TabsTrigger>
                <TabsTrigger value="controls" className="gap-2">
                  <Shield className="h-4 w-4" />
                  Controls
                </TabsTrigger>
                <TabsTrigger value="gap-analysis" className="gap-2">
                  <Target className="h-4 w-4" />
                  Gap Analysis
                </TabsTrigger>
                <TabsTrigger value="methodology" className="gap-2">
                  <BookOpen className="h-4 w-4" />
                  Methodology
                </TabsTrigger>
              </TabsList>

              {/* Requirements Tab */}
              <TabsContent value="requirements" className="space-y-8">
                <Card className="border-2">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <ClipboardCheck className="h-5 w-5" />
                      High-Risk AI System Requirements (Articles 9-15)
                    </CardTitle>
                    <CardDescription>
                      These are the mandatory requirements for providers of high-risk AI systems under the EU AI Act.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 p-3 rounded-lg bg-amber-500/10 border border-amber-500/30 mb-6">
                      <AlertTriangle className="h-5 w-5 text-amber-600" />
                      <p className="text-sm text-amber-700">
                        <strong>Sample Data:</strong> This shows example requirements. View your actual requirements in the AI System Inventory.
                      </p>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      {SAMPLE_REQUIREMENTS.map((req) => {
                        const Icon = req.icon
                        const colorClass = COLOR_MAP[req.color]
                        return (
                          <Card key={req.article} className="border">
                            <CardHeader className="pb-2">
                              <div className="flex items-start justify-between">
                                <div className={cn("flex h-10 w-10 items-center justify-center rounded-lg", colorClass.split(" ")[0])}>
                                  <Icon className={cn("h-5 w-5", colorClass.split(" ")[1])} />
                                </div>
                                <Badge variant="outline">{req.article}</Badge>
                              </div>
                              <CardTitle className="text-base mt-2">{req.title}</CardTitle>
                              <CardDescription className="text-sm">
                                {req.description}
                              </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-3">
                              <ul className="text-sm space-y-1">
                                {req.requirements.slice(0, 3).map((item, i) => (
                                  <li key={i} className="flex items-start gap-2 text-muted-foreground">
                                    <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-muted-foreground/50" />
                                    {item}
                                  </li>
                                ))}
                                {req.requirements.length > 3 && (
                                  <li className="text-xs text-muted-foreground">
                                    +{req.requirements.length - 3} more requirements
                                  </li>
                                )}
                              </ul>
                              <div className="flex items-center justify-between pt-2 border-t">
                                <span className="text-xs text-muted-foreground">{req.controls} controls</span>
                              </div>
                            </CardContent>
                          </Card>
                        )
                      })}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Controls Tab */}
              <TabsContent value="controls" className="space-y-8">
                <Card className="border-2">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-5 w-5" />
                      Control Framework
                    </CardTitle>
                    <CardDescription>
                      Controls are specific measures you implement to meet EU AI Act requirements.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid gap-4 md:grid-cols-3">
                      <Card className="bg-muted/30">
                        <CardContent className="pt-6">
                          <div className="text-center">
                            <div className="text-4xl font-bold text-primary">111</div>
                            <p className="text-sm text-muted-foreground">Standard Controls</p>
                          </div>
                        </CardContent>
                      </Card>
                      <Card className="bg-muted/30">
                        <CardContent className="pt-6">
                          <div className="text-center">
                            <div className="text-4xl font-bold text-amber-600">14</div>
                            <p className="text-sm text-muted-foreground">Control Categories</p>
                          </div>
                        </CardContent>
                      </Card>
                      <Card className="bg-muted/30">
                        <CardContent className="pt-6">
                          <div className="text-center">
                            <div className="text-4xl font-bold text-teal-600">7</div>
                            <p className="text-sm text-muted-foreground">Core Articles</p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-4">Control Categories</h3>
                      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                        {[
                          { id: "RM", name: "Risk Management", count: 15, article: "Art. 9" },
                          { id: "DATA", name: "Data Governance", count: 15, article: "Art. 10" },
                          { id: "DOC", name: "Documentation", count: 10, article: "Art. 11" },
                          { id: "LOG", name: "Logging", count: 5, article: "Art. 12" },
                          { id: "TRANS", name: "Transparency", count: 5, article: "Art. 13" },
                          { id: "HO", name: "Human Oversight", count: 4, article: "Art. 14" },
                          { id: "ARS", name: "Accuracy & Security", count: 8, article: "Art. 15" },
                          { id: "QMS", name: "Quality Management", count: 14, article: "Art. 17" },
                          { id: "CA", name: "Conformity Assessment", count: 10, article: "Art. 43" },
                          { id: "PMM", name: "Post-Market Monitoring", count: 8, article: "Art. 72" },
                          { id: "DEP", name: "Deployer Controls", count: 8, article: "Art. 26" },
                          { id: "GPAI", name: "GPAI Controls", count: 9, article: "Art. 53" },
                        ].map((cat) => (
                          <div key={cat.id} className="flex items-center justify-between p-3 rounded-lg border">
                            <div className="flex items-center gap-3">
                              <Badge variant="outline" className="font-mono">{cat.id}</Badge>
                              <span className="text-sm font-medium">{cat.name}</span>
                            </div>
                            <div className="text-right">
                              <span className="text-sm font-bold">{cat.count}</span>
                              <p className="text-xs text-muted-foreground">{cat.article}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Gap Analysis Tab */}
              <TabsContent value="gap-analysis" className="space-y-8">
                <Card className="border-2">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="h-5 w-5" />
                      Gap Analysis
                    </CardTitle>
                    <CardDescription>
                      Gap analysis identifies where your current state differs from EU AI Act requirements.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center gap-2 p-3 rounded-lg bg-amber-500/10 border border-amber-500/30">
                      <AlertTriangle className="h-5 w-5 text-amber-600" />
                      <p className="text-sm text-amber-700">
                        <strong>Sample Data:</strong> This shows example gaps. Run gap analysis on your actual systems in the Inventory.
                      </p>
                    </div>

                    {/* Sample Gap Summary */}
                    <div className="grid gap-4 md:grid-cols-4">
                      <Card className="bg-red-500/10 border-red-500/30">
                        <CardContent className="pt-6 text-center">
                          <XCircle className="h-8 w-8 mx-auto text-red-600 mb-2" />
                          <div className="text-2xl font-bold text-red-600">2</div>
                          <p className="text-sm text-red-700">High Severity</p>
                        </CardContent>
                      </Card>
                      <Card className="bg-amber-500/10 border-amber-500/30">
                        <CardContent className="pt-6 text-center">
                          <AlertTriangle className="h-8 w-8 mx-auto text-amber-600 mb-2" />
                          <div className="text-2xl font-bold text-amber-600">1</div>
                          <p className="text-sm text-amber-700">Medium Severity</p>
                        </CardContent>
                      </Card>
                      <Card className="bg-blue-500/10 border-blue-500/30">
                        <CardContent className="pt-6 text-center">
                          <Lightbulb className="h-8 w-8 mx-auto text-blue-600 mb-2" />
                          <div className="text-2xl font-bold text-blue-600">1</div>
                          <p className="text-sm text-blue-700">Low Severity</p>
                        </CardContent>
                      </Card>
                      <Card className="bg-green-500/10 border-green-500/30">
                        <CardContent className="pt-6 text-center">
                          <CheckCircle2 className="h-8 w-8 mx-auto text-green-600 mb-2" />
                          <div className="text-2xl font-bold text-green-600">65%</div>
                          <p className="text-sm text-green-700">Compliance Score</p>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Sample Gaps List */}
                    <div className="space-y-3">
                      <h3 className="font-semibold">Identified Gaps</h3>
                      {SAMPLE_GAPS.map((gap) => (
                        <Card key={gap.id} className={cn(
                          "border-l-4",
                          gap.severity === "high" && "border-l-red-500",
                          gap.severity === "medium" && "border-l-amber-500",
                          gap.severity === "low" && "border-l-blue-500"
                        )}>
                          <CardContent className="py-4">
                            <div className="flex items-start justify-between">
                              <div className="space-y-1">
                                <div className="flex items-center gap-2">
                                  <Badge variant="outline">{gap.article}</Badge>
                                  <span className="font-medium">{gap.requirement}</span>
                                </div>
                                <p className="text-sm text-muted-foreground">{gap.description}</p>
                                <div className="flex items-start gap-2 mt-2 p-2 rounded bg-muted/50">
                                  <Lightbulb className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                                  <p className="text-sm">{gap.recommendation}</p>
                                </div>
                              </div>
                              <Badge className={cn(
                                gap.severity === "high" && "bg-red-500",
                                gap.severity === "medium" && "bg-amber-500",
                                gap.severity === "low" && "bg-blue-500"
                              )}>
                                {gap.severity}
                              </Badge>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Methodology Tab */}
              <TabsContent value="methodology" className="space-y-8">
                <Card className="border-2">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5" />
                      Compliance Methodology
                    </CardTitle>
                    <CardDescription>
                      A structured approach to achieving EU AI Act compliance.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      {[
                        {
                          step: 1,
                          title: "Inventory & Classification",
                          description: "Register all AI systems and classify them by risk level (prohibited, high, limited, minimal) and determine your operator role.",
                          icon: Scale,
                        },
                        {
                          step: 2,
                          title: "Requirements Mapping",
                          description: "Based on risk level and role, identify applicable requirements from the EU AI Act (Articles 9-15 for high-risk providers).",
                          icon: ClipboardCheck,
                        },
                        {
                          step: 3,
                          title: "Gap Analysis",
                          description: "Compare current state against requirements to identify gaps. Prioritize by severity and impact.",
                          icon: Target,
                        },
                        {
                          step: 4,
                          title: "Control Implementation",
                          description: "Implement controls to address gaps. Use our control library mapped to EU AI Act articles.",
                          icon: Shield,
                        },
                        {
                          step: 5,
                          title: "Evidence Collection",
                          description: "Document implementation with evidence: policies, procedures, test results, training records.",
                          icon: FileText,
                        },
                        {
                          step: 6,
                          title: "Continuous Monitoring",
                          description: "Establish ongoing monitoring, incident reporting, and periodic re-assessment processes.",
                          icon: Activity,
                        },
                      ].map((item) => {
                        const Icon = item.icon
                        return (
                          <div key={item.step} className="flex items-start gap-4 p-4 rounded-lg border">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold shrink-0">
                              {item.step}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <Icon className="h-5 w-5 text-primary" />
                                <h4 className="font-semibold">{item.title}</h4>
                              </div>
                              <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </CardContent>
                </Card>

                {/* CTA */}
                <Card className="border-2">
                  <CardContent className="py-8">
                    <div className="text-center space-y-4">
                      <h3 className="text-xl font-bold">Ready to assess your AI systems?</h3>
                      <p className="text-muted-foreground max-w-xl mx-auto">
                        Go to the AI System Inventory to view requirements and run gap analysis on your actual systems.
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
