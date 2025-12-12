import Link from "next/link"
import { NavWithAuth } from "@/components/nav-with-auth"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Clock,
  ChevronRight,
  FileText,
  Lightbulb,
  BookOpen,
  ClipboardCheck,
  Database,
  Shield,
  Target,
  AlertTriangle,
  ArrowRight,
  Layers,
  CheckSquare,
  FormInput,
  FolderOpen,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { getGuides, getGuideStats, getFeaturedGuides, type Guide } from "@/lib/actions/guides"

// Icon mapping for guide categories
const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Classification: Target,
  "Data Management": Database,
  "Risk Management": AlertTriangle,
  Compliance: ClipboardCheck,
}

// Get icon for guide type
function getGuideIcon(guide: Guide) {
  if (guide.type === "procedure") {
    return FileText
  }
  return categoryIcons[guide.category] || BookOpen
}

export default async function GuidesPage() {
  const [allGuides, stats, featuredGuides] = await Promise.all([
    getGuides(),
    getGuideStats(),
    getFeaturedGuides(),
  ])

  const procedures = allGuides.filter(g => g.type === "procedure")
  const assessmentTools = allGuides.filter(g => g.type === "assessment-tool")
  const checklists = allGuides.filter(g => g.type === "checklist")
  const forms = allGuides.filter(g => g.type === "form")
  const records = allGuides.filter(g => g.type === "record")

  return (
    <div className="flex min-h-screen flex-col">
      <NavWithAuth />

      <main className="flex-1">
        <PageHeader
          badge="Implementation Documents"
          title="Procedures & Compliance Documents"
          description="Step-by-step procedures, checklists, forms, and record templates for implementing EU AI Act compliance."
          color="amber"
        />

        {/* Stats Bar */}
        <section className="border-b border-border/50 py-4 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-primary" />
                <span className="font-semibold">{stats.procedures}</span>
                <span className="text-muted-foreground">Procedures</span>
              </div>
              <div className="h-4 w-px bg-border" />
              <div className="flex items-center gap-2">
                <CheckSquare className="h-4 w-4 text-accent" />
                <span className="font-semibold">{stats.checklists}</span>
                <span className="text-muted-foreground">Checklists</span>
              </div>
              <div className="h-4 w-px bg-border" />
              <div className="flex items-center gap-2">
                <FormInput className="h-4 w-4 text-chart-3" />
                <span className="font-semibold">{stats.forms}</span>
                <span className="text-muted-foreground">Forms</span>
              </div>
              <div className="h-4 w-px bg-border" />
              <div className="flex items-center gap-2">
                <FolderOpen className="h-4 w-4 text-chart-5" />
                <span className="font-semibold">{stats.records}</span>
                <span className="text-muted-foreground">Records</span>
              </div>
              <div className="h-4 w-px bg-border" />
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="bg-accent/10 text-accent border-accent/30">
                  {stats.byStatus.ready} Ready to Use
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Guides */}
        <section className="border-b border-border/50 py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-6 flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-chart-3" />
              <h2 className="text-xl font-bold">Featured Guides</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {featuredGuides.map((guide) => {
                const Icon = getGuideIcon(guide)
                return (
                  <Link key={guide.id} href={`/implement/procedures/${guide.id}`}>
                    <Card className="group h-full cursor-pointer border-chart-3/20 bg-gradient-to-br from-chart-3/5 to-transparent transition-all hover:border-chart-3/40 hover:shadow-xl">
                      <CardContent className="p-5">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-chart-3/10 transition-all group-hover:bg-chart-3 group-hover:shadow-lg group-hover:shadow-chart-3/25">
                          <Icon className="h-6 w-6 text-chart-3 transition-colors group-hover:text-white" />
                        </div>
                        <div className="mt-4">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="secondary" className="text-xs">
                              {guide.type === "procedure" ? "Procedure" : "Tool"}
                            </Badge>
                            <Badge
                              variant="outline"
                              className={cn(
                                "text-xs",
                                guide.status === "Ready to Use" && "border-accent/50 text-accent",
                                guide.status === "Draft" && "border-muted-foreground/50 text-muted-foreground"
                              )}
                            >
                              {guide.status}
                            </Badge>
                          </div>
                          <h3 className="font-semibold line-clamp-2 group-hover:text-chart-3 text-sm">
                            {guide.title}
                          </h3>
                          <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                            <Clock className="h-3 w-3" />
                            {guide.readTime}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* All Guides */}
        <section className="py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="all" className="space-y-6">
              <TabsList className="p-1 flex-wrap h-auto gap-1">
                <TabsTrigger value="all">
                  All ({allGuides.length})
                </TabsTrigger>
                <TabsTrigger value="procedures">
                  <FileText className="h-4 w-4 mr-1" />
                  Procedures ({procedures.length})
                </TabsTrigger>
                <TabsTrigger value="checklists">
                  <CheckSquare className="h-4 w-4 mr-1" />
                  Checklists ({checklists.length})
                </TabsTrigger>
                <TabsTrigger value="forms">
                  <FormInput className="h-4 w-4 mr-1" />
                  Forms ({forms.length})
                </TabsTrigger>
                <TabsTrigger value="records">
                  <FolderOpen className="h-4 w-4 mr-1" />
                  Records ({records.length})
                </TabsTrigger>
                <TabsTrigger value="tools">
                  <ClipboardCheck className="h-4 w-4 mr-1" />
                  Tools ({assessmentTools.length})
                </TabsTrigger>
              </TabsList>

              {/* All Tab */}
              <TabsContent value="all" className="space-y-4">
                <GuidesList guides={allGuides} />
              </TabsContent>

              {/* Procedures Tab */}
              <TabsContent value="procedures" className="space-y-4">
                <div className="mb-6 p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-primary" />
                    <div>
                      <h3 className="font-semibold">Standard Operating Procedures</h3>
                      <p className="text-sm text-muted-foreground">
                        Step-by-step procedures linked to supporting standards for consistent AI Act compliance implementation.
                      </p>
                    </div>
                  </div>
                </div>
                <GuidesList guides={procedures} />
              </TabsContent>

              {/* Checklists Tab */}
              <TabsContent value="checklists" className="space-y-4">
                <div className="mb-6 p-4 rounded-lg bg-accent/5 border border-accent/20">
                  <div className="flex items-center gap-3">
                    <CheckSquare className="h-5 w-5 text-accent" />
                    <div>
                      <h3 className="font-semibold">Compliance Checklists</h3>
                      <p className="text-sm text-muted-foreground">
                        Pre-built checklists for conformity assessment, documentation review, and compliance verification.
                      </p>
                    </div>
                  </div>
                </div>
                <GuidesList guides={checklists} />
              </TabsContent>

              {/* Forms Tab */}
              <TabsContent value="forms" className="space-y-4">
                <div className="mb-6 p-4 rounded-lg bg-chart-3/5 border border-chart-3/20">
                  <div className="flex items-center gap-3">
                    <FormInput className="h-5 w-5 text-chart-3" />
                    <div>
                      <h3 className="font-semibold">Compliance Forms</h3>
                      <p className="text-sm text-muted-foreground">
                        Standardized forms for classification, risk assessment, incident reporting, and registration.
                      </p>
                    </div>
                  </div>
                </div>
                <GuidesList guides={forms} />
              </TabsContent>

              {/* Records Tab */}
              <TabsContent value="records" className="space-y-4">
                <div className="mb-6 p-4 rounded-lg bg-chart-5/5 border border-chart-5/20">
                  <div className="flex items-center gap-3">
                    <FolderOpen className="h-5 w-5 text-chart-5" />
                    <div>
                      <h3 className="font-semibold">Record Templates</h3>
                      <p className="text-sm text-muted-foreground">
                        Templates for maintaining compliance records, audit trails, and evidence documentation.
                      </p>
                    </div>
                  </div>
                </div>
                <GuidesList guides={records} />
              </TabsContent>

              {/* Assessment Tools Tab */}
              <TabsContent value="tools" className="space-y-4">
                <div className="mb-6 p-4 rounded-lg bg-purple-500/5 border border-purple-500/20">
                  <div className="flex items-center gap-3">
                    <ClipboardCheck className="h-5 w-5 text-purple-500" />
                    <div>
                      <h3 className="font-semibold">Assessment Tools & Templates</h3>
                      <p className="text-sm text-muted-foreground">
                        Ready-to-use tools for role determination, risk classification, and compliance tracking.
                      </p>
                    </div>
                  </div>
                </div>
                <GuidesList guides={assessmentTools} />
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Card className="overflow-hidden border-0 bg-gradient-to-br from-primary via-primary to-indigo-600 text-primary-foreground">
              <CardContent className="flex flex-col items-center gap-8 p-8 sm:flex-row sm:p-12">
                <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-white/20 backdrop-blur">
                  <Layers className="h-12 w-12" />
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-2xl font-bold">View Supporting Standards</h3>
                  <p className="mt-2 text-white/80">
                    These procedures and tools implement the 14 standards that support the AI Policy.
                  </p>
                </div>
                <Button size="lg" variant="secondary" className="shadow-xl" asChild>
                  <Link href="/implement/standards">
                    View Standards
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

// Guides List Component
function GuidesList({ guides }: { guides: Guide[] }) {
  return (
    <div className="grid gap-4">
      {guides.map((guide) => {
        const Icon = getGuideIcon(guide)
        return (
          <Link key={guide.id} href={`/implement/procedures/${guide.id}`}>
            <Card className="group cursor-pointer transition-all hover:border-primary/30 hover:shadow-lg">
              <CardContent className="flex items-start gap-5 p-5">
                <div className={cn(
                  "flex h-14 w-14 shrink-0 items-center justify-center rounded-xl transition-all group-hover:shadow-lg",
                  guide.type === "procedure"
                    ? "bg-primary/10 group-hover:bg-primary group-hover:shadow-primary/25"
                    : "bg-accent/10 group-hover:bg-accent group-hover:shadow-accent/25"
                )}>
                  <Icon className={cn(
                    "h-7 w-7 transition-colors",
                    guide.type === "procedure"
                      ? "text-primary group-hover:text-primary-foreground"
                      : "text-accent group-hover:text-accent-foreground"
                  )} />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-semibold group-hover:text-primary">{guide.title}</h3>
                        <Badge variant="secondary" className="text-xs">
                          {guide.type === "procedure" ? "Procedure" : "Tool"}
                        </Badge>
                        <Badge
                          variant="outline"
                          className={cn(
                            "text-xs",
                            guide.status === "Ready to Use" && "border-accent/50 text-accent bg-accent/5",
                            guide.status === "Draft" && "border-muted-foreground/50"
                          )}
                        >
                          {guide.status}
                        </Badge>
                        {guide.featured && (
                          <Badge className="bg-chart-3/10 text-chart-3 border-chart-3/30" variant="outline">
                            Featured
                          </Badge>
                        )}
                      </div>
                      <CardDescription className="mt-1 line-clamp-2">{guide.description}</CardDescription>
                    </div>
                    <ChevronRight className="h-5 w-5 shrink-0 text-muted-foreground opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100 group-hover:text-primary" />
                  </div>

                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    {guide.topics.slice(0, 4).map((topic) => (
                      <Badge key={topic} variant="secondary" className="text-xs">
                        {topic}
                      </Badge>
                    ))}
                    {guide.topics.length > 4 && (
                      <Badge variant="outline" className="text-xs">
                        +{guide.topics.length - 4} more
                      </Badge>
                    )}
                  </div>

                  <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {guide.readTime}
                    </span>
                    <Badge
                      variant="outline"
                      className={cn(
                        "text-xs",
                        guide.difficulty === "Beginner" && "border-accent/50 text-accent",
                        guide.difficulty === "Intermediate" && "border-primary/50 text-primary",
                        guide.difficulty === "Advanced" && "border-chart-5/50 text-chart-5"
                      )}
                    >
                      {guide.difficulty}
                    </Badge>
                    {guide.parentStandard && (
                      <span className="flex items-center gap-1">
                        <Shield className="h-4 w-4" />
                        {guide.parentStandard}
                      </span>
                    )}
                    <span className="text-xs">
                      v{guide.version} • {guide.owner}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        )
      })}
    </div>
  )
}
