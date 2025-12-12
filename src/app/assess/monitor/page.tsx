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
  ArrowRight,
  Activity,
  Bell,
  Calendar,
  RefreshCw,
  Shield,
  FileText,
  Users,
  TrendingUp,
  Clock,
  BookOpen,
  ChevronRight,
  Building2,
  AlertCircle,
  Eye,
  BarChart3,
} from "lucide-react"
import { cn } from "@/lib/utils"

// Sample monitoring metrics for educational display
const SAMPLE_METRICS = {
  overallCompliance: 78,
  systemsMonitored: 12,
  activeAlerts: 3,
  upcomingDeadlines: 5,
  lastAssessment: "2 weeks ago",
}

// Sample systems for monitoring dashboard
const SAMPLE_SYSTEMS = [
  { name: "HR Recruitment AI", riskLevel: "high", compliance: 85, trend: "up", lastCheck: "Today" },
  { name: "Customer Service Bot", riskLevel: "limited", compliance: 92, trend: "stable", lastCheck: "Yesterday" },
  { name: "Fraud Detection Model", riskLevel: "high", compliance: 71, trend: "down", lastCheck: "3 days ago" },
  { name: "Document Processor", riskLevel: "minimal", compliance: 100, trend: "stable", lastCheck: "1 week ago" },
]

// Sample alerts
const SAMPLE_ALERTS = [
  { id: 1, type: "warning", title: "Risk assessment due", system: "HR Recruitment AI", date: "In 7 days" },
  { id: 2, type: "error", title: "Compliance score dropped", system: "Fraud Detection Model", date: "Today" },
  { id: 3, type: "info", title: "New regulation update", system: "All systems", date: "Yesterday" },
]

// Sample deadlines
const SAMPLE_DEADLINES = [
  { id: 1, title: "Annual Risk Assessment", system: "HR Recruitment AI", date: "2025-06-30", type: "assessment" },
  { id: 2, title: "CE Marking Renewal", system: "Fraud Detection Model", date: "2025-08-15", type: "certification" },
  { id: 3, title: "Technical Documentation Review", system: "All high-risk systems", date: "2025-07-20", type: "documentation" },
  { id: 4, title: "Post-Market Monitoring Report", system: "HR Recruitment AI", date: "2025-09-01", type: "report" },
]

export default function MonitorPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <NavWithAuth />

      <main className="flex-1">
        <PageHeader
          badge="Step 5: Monitor"
          title="Compliance Monitoring"
          description="Learn about ongoing compliance monitoring, incident reporting, and maintaining EU AI Act compliance over time."
          color="indigo"
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
                <Link href="/assess/comply" className="text-muted-foreground hover:text-foreground">
                  Step 4: Comply
                </Link>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium text-indigo-600">Step 5: Monitor</span>
              </div>
              <Button asChild>
                <Link href="/assess/inventory">
                  <Building2 className="mr-2 h-4 w-4" />
                  Monitor Your Systems
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="dashboard" className="space-y-8">
              <TabsList className="grid w-full max-w-3xl grid-cols-4">
                <TabsTrigger value="dashboard" className="gap-2">
                  <BarChart3 className="h-4 w-4" />
                  Dashboard
                </TabsTrigger>
                <TabsTrigger value="post-market" className="gap-2">
                  <Activity className="h-4 w-4" />
                  Post-Market
                </TabsTrigger>
                <TabsTrigger value="incidents" className="gap-2">
                  <AlertCircle className="h-4 w-4" />
                  Incidents
                </TabsTrigger>
                <TabsTrigger value="obligations" className="gap-2">
                  <BookOpen className="h-4 w-4" />
                  Obligations
                </TabsTrigger>
              </TabsList>

              {/* Dashboard Tab */}
              <TabsContent value="dashboard" className="space-y-8">
                <div className="flex items-center gap-2 p-3 rounded-lg bg-amber-500/10 border border-amber-500/30">
                  <AlertTriangle className="h-5 w-5 text-amber-600" />
                  <p className="text-sm text-amber-700">
                    <strong>Sample Dashboard:</strong> This shows example monitoring data. View real metrics in the AI System Inventory.
                  </p>
                </div>

                {/* Key Metrics */}
                <div className="grid gap-4 md:grid-cols-4">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground">Overall Compliance</p>
                          <p className="text-3xl font-bold">{SAMPLE_METRICS.overallCompliance}%</p>
                        </div>
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500/10">
                          <CheckCircle2 className="h-6 w-6 text-green-600" />
                        </div>
                      </div>
                      <Progress value={SAMPLE_METRICS.overallCompliance} className="mt-3" />
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground">Systems Monitored</p>
                          <p className="text-3xl font-bold">{SAMPLE_METRICS.systemsMonitored}</p>
                        </div>
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10">
                          <Eye className="h-6 w-6 text-blue-600" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground">Active Alerts</p>
                          <p className="text-3xl font-bold">{SAMPLE_METRICS.activeAlerts}</p>
                        </div>
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/10">
                          <Bell className="h-6 w-6 text-amber-600" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground">Upcoming Deadlines</p>
                          <p className="text-3xl font-bold">{SAMPLE_METRICS.upcomingDeadlines}</p>
                        </div>
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/10">
                          <Calendar className="h-6 w-6 text-purple-600" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Systems Status */}
                <Card>
                  <CardHeader>
                    <CardTitle>System Compliance Status</CardTitle>
                    <CardDescription>Real-time compliance tracking for all monitored AI systems</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {SAMPLE_SYSTEMS.map((system, i) => (
                        <div key={i} className="flex items-center justify-between p-4 rounded-lg border">
                          <div className="flex items-center gap-4">
                            <div className={cn(
                              "flex h-10 w-10 items-center justify-center rounded-lg",
                              system.riskLevel === "high" && "bg-amber-500/10",
                              system.riskLevel === "limited" && "bg-blue-500/10",
                              system.riskLevel === "minimal" && "bg-green-500/10"
                            )}>
                              <Shield className={cn(
                                "h-5 w-5",
                                system.riskLevel === "high" && "text-amber-600",
                                system.riskLevel === "limited" && "text-blue-600",
                                system.riskLevel === "minimal" && "text-green-600"
                              )} />
                            </div>
                            <div>
                              <p className="font-medium">{system.name}</p>
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Badge variant="outline" className="capitalize">{system.riskLevel}</Badge>
                                <span>•</span>
                                <span>Last check: {system.lastCheck}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="text-right">
                              <p className="text-2xl font-bold">{system.compliance}%</p>
                              <div className="flex items-center gap-1 text-sm">
                                {system.trend === "up" && <TrendingUp className="h-4 w-4 text-green-600" />}
                                {system.trend === "down" && <TrendingUp className="h-4 w-4 text-red-600 rotate-180" />}
                                {system.trend === "stable" && <span className="text-muted-foreground">—</span>}
                                <span className={cn(
                                  system.trend === "up" && "text-green-600",
                                  system.trend === "down" && "text-red-600",
                                  system.trend === "stable" && "text-muted-foreground"
                                )}>
                                  {system.trend}
                                </span>
                              </div>
                            </div>
                            <Progress value={system.compliance} className="w-24" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Alerts & Deadlines */}
                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Bell className="h-5 w-5" />
                        Active Alerts
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {SAMPLE_ALERTS.map((alert) => (
                          <div key={alert.id} className={cn(
                            "flex items-start gap-3 p-3 rounded-lg border-l-4",
                            alert.type === "error" && "border-l-red-500 bg-red-500/5",
                            alert.type === "warning" && "border-l-amber-500 bg-amber-500/5",
                            alert.type === "info" && "border-l-blue-500 bg-blue-500/5"
                          )}>
                            <AlertCircle className={cn(
                              "h-5 w-5 mt-0.5",
                              alert.type === "error" && "text-red-600",
                              alert.type === "warning" && "text-amber-600",
                              alert.type === "info" && "text-blue-600"
                            )} />
                            <div>
                              <p className="font-medium text-sm">{alert.title}</p>
                              <p className="text-xs text-muted-foreground">{alert.system} • {alert.date}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Calendar className="h-5 w-5" />
                        Upcoming Deadlines
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {SAMPLE_DEADLINES.map((deadline) => (
                          <div key={deadline.id} className="flex items-center justify-between p-3 rounded-lg border">
                            <div>
                              <p className="font-medium text-sm">{deadline.title}</p>
                              <p className="text-xs text-muted-foreground">{deadline.system}</p>
                            </div>
                            <div className="text-right">
                              <Badge variant="outline">{deadline.type}</Badge>
                              <p className="text-xs text-muted-foreground mt-1">{deadline.date}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Post-Market Monitoring Tab */}
              <TabsContent value="post-market" className="space-y-8">
                <Card className="border-2">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Activity className="h-5 w-5" />
                      Post-Market Monitoring (Article 72)
                    </CardTitle>
                    <CardDescription>
                      Providers of high-risk AI systems must establish a post-market monitoring system.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid gap-4 md:grid-cols-2">
                      <Card className="bg-muted/30">
                        <CardHeader>
                          <CardTitle className="text-base">What is Post-Market Monitoring?</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">
                            A systematic process to actively collect, document, and analyze data on AI system 
                            performance throughout its lifetime to ensure continued compliance with EU AI Act requirements.
                          </p>
                        </CardContent>
                      </Card>
                      <Card className="bg-muted/30">
                        <CardHeader>
                          <CardTitle className="text-base">Who Must Implement It?</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">
                            Providers of high-risk AI systems must establish and document a post-market monitoring 
                            system proportionate to the nature and risks of the AI system.
                          </p>
                        </CardContent>
                      </Card>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-4">Key Elements of Post-Market Monitoring</h3>
                      <div className="grid gap-3 md:grid-cols-2">
                        {[
                          { title: "Data Collection", description: "Actively collect data on AI system performance from deployers and users" },
                          { title: "Performance Analysis", description: "Analyze collected data to identify potential risks or compliance issues" },
                          { title: "Feedback Integration", description: "Integrate feedback into risk management and system improvements" },
                          { title: "Documentation", description: "Document all monitoring activities and findings" },
                          { title: "Corrective Actions", description: "Take corrective actions when issues are identified" },
                          { title: "Authority Reporting", description: "Report to authorities when required (serious incidents, non-compliance)" },
                        ].map((item, i) => (
                          <div key={i} className="flex items-start gap-3 p-3 rounded-lg border">
                            <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                            <div>
                              <p className="font-medium text-sm">{item.title}</p>
                              <p className="text-xs text-muted-foreground">{item.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Incidents Tab */}
              <TabsContent value="incidents" className="space-y-8">
                <Card className="border-2">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <AlertCircle className="h-5 w-5" />
                      Serious Incident Reporting (Article 73)
                    </CardTitle>
                    <CardDescription>
                      Providers and deployers must report serious incidents to market surveillance authorities.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <Card className="bg-red-500/5 border-red-500/30">
                      <CardHeader>
                        <CardTitle className="text-base text-red-700">What is a Serious Incident?</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-red-700 mb-4">
                          An incident or malfunctioning that directly or indirectly leads to:
                        </p>
                        <ul className="space-y-2 text-sm">
                          {[
                            "Death of a person or serious damage to health",
                            "Serious and irreversible disruption of critical infrastructure",
                            "Breach of fundamental rights obligations",
                            "Serious damage to property or environment",
                          ].map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <AlertTriangle className="h-4 w-4 mt-0.5 text-red-600" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>

                    <div>
                      <h3 className="font-semibold mb-4">Reporting Timeline</h3>
                      <div className="space-y-3">
                        {[
                          { time: "Immediately", action: "Become aware of serious incident", description: "Upon becoming aware of a serious incident" },
                          { time: "15 days", action: "Initial report to authorities", description: "Submit initial report to market surveillance authority" },
                          { time: "Ongoing", action: "Investigation & updates", description: "Investigate root cause and provide updates" },
                          { time: "As needed", action: "Corrective actions", description: "Implement corrective actions and inform authorities" },
                        ].map((item, i) => (
                          <div key={i} className="flex items-start gap-4 p-4 rounded-lg border">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 shrink-0">
                              <Clock className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <div className="flex items-center gap-2">
                                <Badge>{item.time}</Badge>
                                <span className="font-medium">{item.action}</span>
                              </div>
                              <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Obligations Tab */}
              <TabsContent value="obligations" className="space-y-8">
                <Card className="border-2">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5" />
                      Ongoing Compliance Obligations
                    </CardTitle>
                    <CardDescription>
                      Key ongoing obligations for maintaining EU AI Act compliance.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid gap-4 md:grid-cols-2">
                      {[
                        {
                          title: "Documentation Updates",
                          icon: FileText,
                          items: [
                            "Keep technical documentation up to date",
                            "Update instructions for use when needed",
                            "Maintain quality management records",
                            "Document all substantial modifications",
                          ],
                        },
                        {
                          title: "Monitoring Activities",
                          icon: Eye,
                          items: [
                            "Monitor AI system performance",
                            "Track accuracy and bias metrics",
                            "Collect user feedback",
                            "Analyze incident reports",
                          ],
                        },
                        {
                          title: "Periodic Assessments",
                          icon: RefreshCw,
                          items: [
                            "Annual risk assessment review",
                            "Conformity re-assessment after changes",
                            "Data quality audits",
                            "Human oversight effectiveness review",
                          ],
                        },
                        {
                          title: "Stakeholder Communication",
                          icon: Users,
                          items: [
                            "Inform deployers of updates",
                            "Cooperate with authorities",
                            "Respond to user complaints",
                            "Share safety information",
                          ],
                        },
                      ].map((section) => {
                        const Icon = section.icon
                        return (
                          <Card key={section.title}>
                            <CardHeader className="pb-2">
                              <CardTitle className="text-base flex items-center gap-2">
                                <Icon className="h-5 w-5 text-primary" />
                                {section.title}
                              </CardTitle>
                            </CardHeader>
                            <CardContent>
                              <ul className="space-y-2">
                                {section.items.map((item, i) => (
                                  <li key={i} className="flex items-start gap-2 text-sm">
                                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-muted-foreground" />
                                    <span className="text-muted-foreground">{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </CardContent>
                          </Card>
                        )
                      })}
                    </div>
                  </CardContent>
                </Card>

                {/* CTA */}
                <Card className="border-2">
                  <CardContent className="py-8">
                    <div className="text-center space-y-4">
                      <h3 className="text-xl font-bold">Ready to monitor your AI systems?</h3>
                      <p className="text-muted-foreground max-w-xl mx-auto">
                        Go to the AI System Inventory to set up monitoring for your actual systems.
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
