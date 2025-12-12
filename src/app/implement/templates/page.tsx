import { NavWithAuth } from "@/components/nav-with-auth"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  FileSpreadsheet,
  Download,
  Star,
  FileText,
  Shield,
  Database,
  Eye,
  Users,
  Gauge,
  CheckCircle,
  ClipboardList,
  AlertTriangle,
  GraduationCap,
  Activity,
  BookOpen,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"
import { getTemplates, getFeaturedTemplates, getTemplateStats } from "@/lib/actions/templates"

// Icon mapping for categories
const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "Risk Management": Shield,
  "Classification": FileText,
  "Data Management": Database,
  "Documentation": BookOpen,
  "Operations": Activity,
  "Transparency": Eye,
  "Governance": Users,
  "Technical": Gauge,
  "Quality": CheckCircle,
  "Certification": ClipboardList,
  "Registration": FileText,
  "Training": GraduationCap,
}

// Color mapping for categories
const categoryColors: Record<string, string> = {
  "Risk Management": "destructive",
  "Classification": "primary",
  "Data Management": "chart-2",
  "Documentation": "chart-3",
  "Operations": "chart-4",
  "Transparency": "chart-5",
  "Governance": "primary",
  "Technical": "chart-1",
  "Quality": "chart-2",
  "Certification": "chart-3",
  "Registration": "chart-4",
  "Training": "chart-5",
}

export default async function TemplatesPage() {
  const [templates, featuredTemplates, stats] = await Promise.all([
    getTemplates(),
    getFeaturedTemplates(),
    getTemplateStats(),
  ])

  return (
    <div className="flex min-h-screen flex-col">
      <NavWithAuth />

      <main className="flex-1">
        <PageHeader
          badge="Excel Templates"
          title="Compliance Templates"
          description="Download ready-to-use Excel workbooks for EU AI Act compliance. Each template includes article-specific checklists, KPI tracking, and regulatory mapping."
          color="amber"
        />

        {/* Stats Section */}
        <section className="border-b border-border/50 py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Card className="border-chart-3/30">
                <CardContent className="flex items-center gap-4 p-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-chart-3/10">
                    <FileSpreadsheet className="h-6 w-6 text-chart-3" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold">{stats.total}</p>
                    <p className="text-sm text-muted-foreground">Total Templates</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-primary/30">
                <CardContent className="flex items-center gap-4 p-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <Star className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold">{stats.featured}</p>
                    <p className="text-sm text-muted-foreground">Featured</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-chart-2/30">
                <CardContent className="flex items-center gap-4 p-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-chart-2/10">
                    <Download className="h-6 w-6 text-chart-2" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold">{stats.totalDownloads.toLocaleString()}</p>
                    <p className="text-sm text-muted-foreground">Total Downloads</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-chart-4/30">
                <CardContent className="flex items-center gap-4 p-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-chart-4/10">
                    <Star className="h-6 w-6 text-chart-4" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold">{stats.avgRating}</p>
                    <p className="text-sm text-muted-foreground">Avg Rating</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Featured Templates */}
        <section className="py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold">Featured Templates</h2>
              <p className="text-muted-foreground">Essential workbooks for EU AI Act compliance.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {featuredTemplates.map((template) => {
                const Icon = categoryIcons[template.category] || FileSpreadsheet
                return (
                  <Card
                    key={template.id}
                    className="group relative overflow-hidden transition-all hover:shadow-xl hover:border-chart-3/30"
                  >
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-chart-3 to-chart-3/50" />
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-chart-3/10 transition-all group-hover:bg-chart-3 group-hover:shadow-lg group-hover:shadow-chart-3/25">
                          <Icon className="h-6 w-6 text-chart-3 transition-colors group-hover:text-foreground" />
                        </div>
                        <Badge variant="secondary" className="bg-chart-3/10 text-chart-3">
                          Featured
                        </Badge>
                      </div>
                      <CardTitle className="mt-4 text-lg group-hover:text-chart-3">{template.title}</CardTitle>
                      <CardDescription className="line-clamp-2">{template.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex flex-wrap gap-1">
                        {template.articles.slice(0, 3).map((article) => (
                          <Badge key={article} variant="outline" className="text-xs">
                            {article}
                          </Badge>
                        ))}
                        {template.articles.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{template.articles.length - 3}
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Star className="h-4 w-4 fill-chart-3 text-chart-3" />
                          <span>{template.rating}</span>
                        </div>
                        <span>{template.fileSize} • {template.sheets.length} sheets</span>
                      </div>
                      <div className="flex items-center gap-2 border-t border-border/50 pt-4">
                        <Button asChild size="sm" className="flex-1 bg-chart-3 text-foreground hover:bg-chart-3/90">
                          <a href={`/templates/${template.filename}`} download>
                            <Download className="mr-2 h-4 w-4" />
                            Download
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* All Templates */}
        <section className="py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="all" className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold">All Templates</h2>
                  <p className="text-muted-foreground">{templates.length} templates available for download</p>
                </div>
                <TabsList>
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="risk">Risk & Compliance</TabsTrigger>
                  <TabsTrigger value="operations">Operations</TabsTrigger>
                  <TabsTrigger value="technical">Technical</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="all" className="space-y-4">
                {templates.map((template) => {
                  const Icon = categoryIcons[template.category] || FileSpreadsheet
                  return (
                    <Card key={template.id} className="group transition-all hover:shadow-lg hover:border-primary/30">
                      <CardContent className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-all group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/25">
                          <Icon className="h-7 w-7 text-primary transition-colors group-hover:text-primary-foreground" />
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="font-semibold group-hover:text-primary">{template.title}</h3>
                            <Badge variant="outline" className="text-xs">
                              {template.category}
                            </Badge>
                            <Badge variant="secondary" className="text-xs">
                              v{template.version}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground line-clamp-1 mt-1">{template.description}</p>
                          <div className="mt-2 flex flex-wrap gap-1">
                            {template.articles.map((article) => (
                              <Badge key={article} variant="outline" className="text-xs bg-muted/50">
                                {article}
                              </Badge>
                            ))}
                            {template.annexes.map((annex) => (
                              <Badge key={annex} variant="outline" className="text-xs bg-chart-3/10 text-chart-3 border-chart-3/30">
                                {annex}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="flex flex-col items-end gap-3 shrink-0">
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Star className="h-4 w-4 fill-chart-3 text-chart-3" />
                              {template.rating}
                            </span>
                            <span>{template.downloads.toLocaleString()} downloads</span>
                            <span>{template.fileSize}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm" asChild className="gap-2">
                              <Link href={`/implement/guides/${template.relatedProcedure}`}>
                                <BookOpen className="h-4 w-4" />
                                Related Procedure
                              </Link>
                            </Button>
                            <Button
                              size="sm"
                              asChild
                              className="gap-2 bg-primary shadow-lg shadow-primary/25 hover:bg-primary/90"
                            >
                              <a href={`/templates/${template.filename}`} download>
                                <Download className="h-4 w-4" />
                                Download XLSX
                              </a>
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </TabsContent>

              <TabsContent value="risk" className="space-y-4">
                {templates
                  .filter(t => ["Risk Management", "Classification", "Certification", "Quality"].includes(t.category))
                  .map((template) => {
                    const Icon = categoryIcons[template.category] || FileSpreadsheet
                    return (
                      <Card key={template.id} className="group transition-all hover:shadow-lg hover:border-primary/30">
                        <CardContent className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center">
                          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-destructive/10 transition-all group-hover:bg-destructive group-hover:shadow-lg group-hover:shadow-destructive/25">
                            <Icon className="h-7 w-7 text-destructive transition-colors group-hover:text-destructive-foreground" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 flex-wrap">
                              <h3 className="font-semibold group-hover:text-destructive">{template.title}</h3>
                              <Badge variant="outline" className="text-xs">{template.category}</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground line-clamp-1 mt-1">{template.description}</p>
                            <div className="mt-2 flex flex-wrap gap-1">
                              {template.articles.map((article) => (
                                <Badge key={article} variant="outline" className="text-xs">{article}</Badge>
                              ))}
                            </div>
                          </div>
                          <Button size="sm" asChild className="gap-2 bg-destructive hover:bg-destructive/90">
                            <a href={`/templates/${template.filename}`} download>
                              <Download className="h-4 w-4" />
                              Download
                            </a>
                          </Button>
                        </CardContent>
                      </Card>
                    )
                  })}
              </TabsContent>

              <TabsContent value="operations" className="space-y-4">
                {templates
                  .filter(t => ["Operations", "Governance", "Training", "Registration"].includes(t.category))
                  .map((template) => {
                    const Icon = categoryIcons[template.category] || FileSpreadsheet
                    return (
                      <Card key={template.id} className="group transition-all hover:shadow-lg hover:border-chart-4/30">
                        <CardContent className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center">
                          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-chart-4/10 transition-all group-hover:bg-chart-4 group-hover:shadow-lg group-hover:shadow-chart-4/25">
                            <Icon className="h-7 w-7 text-chart-4 transition-colors group-hover:text-foreground" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 flex-wrap">
                              <h3 className="font-semibold group-hover:text-chart-4">{template.title}</h3>
                              <Badge variant="outline" className="text-xs">{template.category}</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground line-clamp-1 mt-1">{template.description}</p>
                            <div className="mt-2 flex flex-wrap gap-1">
                              {template.articles.map((article) => (
                                <Badge key={article} variant="outline" className="text-xs">{article}</Badge>
                              ))}
                            </div>
                          </div>
                          <Button size="sm" asChild className="gap-2 bg-chart-4 text-foreground hover:bg-chart-4/90">
                            <a href={`/templates/${template.filename}`} download>
                              <Download className="h-4 w-4" />
                              Download
                            </a>
                          </Button>
                        </CardContent>
                      </Card>
                    )
                  })}
              </TabsContent>

              <TabsContent value="technical" className="space-y-4">
                {templates
                  .filter(t => ["Technical", "Documentation", "Data Management", "Transparency"].includes(t.category))
                  .map((template) => {
                    const Icon = categoryIcons[template.category] || FileSpreadsheet
                    return (
                      <Card key={template.id} className="group transition-all hover:shadow-lg hover:border-chart-2/30">
                        <CardContent className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center">
                          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-chart-2/10 transition-all group-hover:bg-chart-2 group-hover:shadow-lg group-hover:shadow-chart-2/25">
                            <Icon className="h-7 w-7 text-chart-2 transition-colors group-hover:text-foreground" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 flex-wrap">
                              <h3 className="font-semibold group-hover:text-chart-2">{template.title}</h3>
                              <Badge variant="outline" className="text-xs">{template.category}</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground line-clamp-1 mt-1">{template.description}</p>
                            <div className="mt-2 flex flex-wrap gap-1">
                              {template.articles.map((article) => (
                                <Badge key={article} variant="outline" className="text-xs">{article}</Badge>
                              ))}
                            </div>
                          </div>
                          <Button size="sm" asChild className="gap-2 bg-chart-2 text-foreground hover:bg-chart-2/90">
                            <a href={`/templates/${template.filename}`} download>
                              <Download className="h-4 w-4" />
                              Download
                            </a>
                          </Button>
                        </CardContent>
                      </Card>
                    )
                  })}
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Card className="bg-gradient-to-br from-primary/5 via-chart-3/5 to-chart-2/5 border-primary/20">
              <CardContent className="flex flex-col items-center gap-6 p-8 text-center md:flex-row md:text-left">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                  <AlertTriangle className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold">Need the Related Procedures?</h3>
                  <p className="mt-2 text-muted-foreground">
                    Each template has a corresponding procedure document with step-by-step implementation guidance,
                    controls mapping, and compliance verification checklists.
                  </p>
                </div>
                <Button asChild size="lg" className="shrink-0 gap-2">
                  <Link href="/implement/guides">
                    View All Procedures
                    <ArrowRight className="h-4 w-4" />
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
