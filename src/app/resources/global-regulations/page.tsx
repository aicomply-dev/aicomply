import { NavWithAuth } from "@/components/nav-with-auth"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Globe,
  Scale,
  Shield,
  AlertTriangle,
  CheckCircle2,
  Clock,
  ExternalLink,
  ArrowRight,
  Lightbulb,
  Building2,
  FileText,
  Gavel,
  TrendingUp,
  Lock,
  Users,
  Sparkles,
} from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { GLOBAL_REGULATIONS, COMPLIANCE_MATRIX, STRATEGIC_RECOMMENDATIONS } from "@/lib/data/global-regulations"

const JURISDICTION_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  eu: Globe,
  us: Building2,
  texas: Scale,
  colorado: Shield,
  california: Lightbulb,
  china: Lock,
  uk: Gavel,
  japan: Sparkles,
  australia: Globe,
  canada: Building2,
  brazil: Globe,
  iso: FileText,
  coe: Users,
  g7: Globe,
}

const STATUS_CONFIG: Record<string, { label: string; color: string; bgColor: string }> = {
  enacted: { label: "Enacted", color: "text-accent", bgColor: "bg-accent/10" },
  proposed: { label: "Proposed", color: "text-amber-500", bgColor: "bg-amber-500/10" },
  voluntary: { label: "Voluntary", color: "text-blue-500", bgColor: "bg-blue-500/10" },
  rescinded: { label: "Rescinded", color: "text-muted-foreground", bgColor: "bg-muted" },
}

export default function GlobalRegulationsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <NavWithAuth />

      <main className="flex-1">
        <PageHeader
          badge="2025 Landscape"
          title="Global AI Regulations"
          description="Navigate the complex matrix of AI governance frameworks across jurisdictions. From the EU AI Act to US state laws and China's technical standards."
          color="indigo"
        />

        {/* Executive Summary */}
        <section className="border-b border-border/50 py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Card className="border-primary/30 bg-gradient-to-r from-primary/5 to-transparent">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-primary" />
                  The Era of Regulatory Divergence
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  The global governance of AI has transitioned from theoretical alignment to stark operational divergence. 
                  The vision of a unified global standard has been challenged by a decisive shift in US federal policy towards 
                  deregulation and "AI dominance," creating a bifurcated reality.
                </p>
                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="h-5 w-5 text-blue-500" />
                      <span className="font-semibold text-blue-600">Comprehensive Safety</span>
                    </div>
                    <p className="text-sm text-muted-foreground">EU, Brazil: Ex-ante conformity assessments, fundamental rights focus</p>
                  </div>
                  <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Scale className="h-5 w-5 text-amber-500" />
                      <span className="font-semibold text-amber-600">Distributed Liability</span>
                    </div>
                    <p className="text-sm text-muted-foreground">US States: Intent-based (TX) vs. duty of care (CO) standards</p>
                  </div>
                  <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Lock className="h-5 w-5 text-red-500" />
                      <span className="font-semibold text-red-600">Technical Security</span>
                    </div>
                    <p className="text-sm text-muted-foreground">China: Information control, data purity, mandatory standards</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Regulations by Category */}
        {GLOBAL_REGULATIONS.map((category) => (
          <section key={category.id} className="py-8 border-b border-border/50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mb-6">
                <h2 className="text-2xl font-bold">{category.title}</h2>
                <p className="text-muted-foreground">{category.description}</p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {category.regulations.map((reg) => {
                  const Icon = JURISDICTION_ICONS[reg.icon] || Globe
                  const statusConfig = STATUS_CONFIG[reg.status]
                  
                  return (
                    <Card 
                      key={reg.id} 
                      className={cn(
                        "border-border/50 transition-all hover:shadow-lg",
                        reg.status === "rescinded" && "opacity-60"
                      )}
                    >
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <div className={cn(
                              "flex h-10 w-10 items-center justify-center rounded-lg",
                              `bg-${reg.color}-500/10`
                            )}>
                              <Icon className={cn("h-5 w-5", `text-${reg.color}-500`)} />
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground">{reg.jurisdiction}</p>
                              <CardTitle className="text-lg">{reg.shortName}</CardTitle>
                            </div>
                          </div>
                          <Badge className={cn(statusConfig.bgColor, statusConfig.color, "border-0")}>
                            {statusConfig.label}
                          </Badge>
                        </div>
                        <CardDescription className="mt-2">{reg.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-1.5">
                            <Lightbulb className="h-4 w-4 text-muted-foreground" />
                            <span className="text-muted-foreground">Philosophy:</span>
                            <span className="font-medium">{reg.philosophy}</span>
                          </div>
                        </div>
                        
                        {reg.effectiveDate && (
                          <div className="flex items-center gap-1.5 text-sm">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span className="text-muted-foreground">Effective:</span>
                            <span className="font-medium">{reg.effectiveDate}</span>
                          </div>
                        )}

                        <div className="space-y-2">
                          <p className="text-sm font-medium">Key Features:</p>
                          <ul className="space-y-1">
                            {reg.keyFeatures.slice(0, 4).map((feature, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                                {feature}
                              </li>
                            ))}
                            {reg.keyFeatures.length > 4 && (
                              <li className="text-sm text-muted-foreground pl-6">
                                +{reg.keyFeatures.length - 4} more...
                              </li>
                            )}
                          </ul>
                        </div>

                        {reg.penalties && (
                          <div className="flex items-center gap-1.5 text-sm">
                            <AlertTriangle className="h-4 w-4 text-destructive" />
                            <span className="text-muted-foreground">Penalties:</span>
                            <span className="font-medium text-destructive">{reg.penalties}</span>
                          </div>
                        )}

                        {reg.links && reg.links.length > 0 && (
                          <div className="flex flex-wrap gap-2 pt-2">
                            {reg.links.map((link, idx) => (
                              <Button key={idx} variant="outline" size="sm" asChild>
                                {link.url.startsWith("/") ? (
                                  <Link href={link.url}>
                                    {link.label}
                                    <ArrowRight className="ml-1 h-3 w-3" />
                                  </Link>
                                ) : (
                                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                                    {link.label}
                                    <ExternalLink className="ml-1 h-3 w-3" />
                                  </a>
                                )}
                              </Button>
                            ))}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          </section>
        ))}

        {/* Compliance Matrix */}
        <section className="py-12 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-bold">2025 Global Compliance Matrix</h2>
              <p className="text-muted-foreground mt-2">
                Compare regulatory requirements across major jurisdictions
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse bg-background rounded-xl overflow-hidden shadow-lg">
                <thead>
                  <tr className="bg-muted">
                    {COMPLIANCE_MATRIX.headers.map((header, idx) => (
                      <th 
                        key={idx} 
                        className={cn(
                          "p-4 text-left font-semibold border-b border-border",
                          idx === 0 && "bg-muted/80"
                        )}
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {COMPLIANCE_MATRIX.rows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-muted/30 transition-colors">
                      <td className="p-4 font-medium border-b border-border bg-muted/30">
                        {row.feature}
                      </td>
                      <td className="p-4 border-b border-border">{row.eu}</td>
                      <td className="p-4 border-b border-border">{row.usFederal}</td>
                      <td className="p-4 border-b border-border">{row.usStates}</td>
                      <td className="p-4 border-b border-border">{row.china}</td>
                      <td className="p-4 border-b border-border">{row.uk}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Strategic Recommendations */}
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold">Strategic Recommendations</h2>
              <p className="text-muted-foreground mt-2">
                Key strategies for navigating the 2025 compliance landscape
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {STRATEGIC_RECOMMENDATIONS.map((rec, idx) => (
                <Card 
                  key={idx} 
                  className={cn(
                    "border-border/50",
                    rec.priority === "high" && "border-accent/30 bg-accent/5"
                  )}
                >
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <TrendingUp className={cn(
                          "h-5 w-5",
                          rec.priority === "high" ? "text-accent" : "text-muted-foreground"
                        )} />
                        {rec.title}
                      </CardTitle>
                      <Badge variant={rec.priority === "high" ? "default" : "secondary"}>
                        {rec.priority === "high" ? "High Priority" : "Medium Priority"}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{rec.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Card className="border-primary/30 bg-gradient-to-r from-primary/10 to-accent/10">
              <CardContent className="flex flex-col items-center gap-6 p-8 text-center sm:flex-row sm:text-left">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg">
                  <Shield className="h-8 w-8" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold">Focus on EU AI Act Compliance</h3>
                  <p className="text-muted-foreground mt-1">
                    The EU AI Act remains the most comprehensive framework. Start your compliance journey with our detailed guides and tools.
                  </p>
                </div>
                <Button size="lg" asChild>
                  <Link href="/resources/regulation">
                    Explore EU AI Act
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
