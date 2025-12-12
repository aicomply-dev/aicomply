import Link from "next/link"
import { notFound } from "next/navigation"
import { NavWithAuth } from "@/components/nav-with-auth"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  Clock,
  FileText,
  ClipboardCheck,
  User,
  Calendar,
  Shield,
  BookOpen,
  Layers,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { getGuideById, getGuideContent, getGuides, type Guide } from "@/lib/actions/guides"
import { parseProcedure } from "@/lib/parsers/procedure-parser"
import { ProcedureContent } from "@/components/procedures"
import { DocumentLinker } from "@/components/document-linker"
import { ChecklistContent, FormContent, RecordContent } from "@/components/documents"

export default async function GuideDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  const [guide, content, allGuides] = await Promise.all([
    getGuideById(id),
    getGuideContent(id),
    getGuides(),
  ])

  if (!guide) {
    notFound()
  }

  // Find prev/next guides
  const currentIndex = allGuides.findIndex(g => g.id === id)
  const prevGuide = currentIndex > 0 ? allGuides[currentIndex - 1] : null
  const nextGuide = currentIndex < allGuides.length - 1 ? allGuides[currentIndex + 1] : null

  return (
    <div className="flex min-h-screen flex-col">
      <NavWithAuth />

      <main className="flex-1">
        {/* Header */}
        <section className={cn(
          "relative overflow-hidden border-b border-border/50 py-12",
          guide.type === "procedure"
            ? "bg-gradient-to-br from-primary/5 via-background to-background"
            : "bg-gradient-to-br from-accent/5 via-background to-background"
        )}>
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <div className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/implement" className="hover:text-foreground transition-colors">
                Implement
              </Link>
              <ChevronRight className="h-4 w-4" />
              <Link href="/implement/procedures" className="hover:text-foreground transition-colors">
                Procedures
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground font-medium">
                {guide.type === "procedure" ? "Procedure" : guide.type === "checklist" ? "Checklist" : guide.type === "form" ? "Form" : guide.type === "record" ? "Record" : "Tool"}
              </span>
            </div>

            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-4">
                  <div className={cn(
                    "flex h-14 w-14 items-center justify-center rounded-xl",
                    guide.type === "procedure" ? "bg-primary/10" : "bg-accent/10"
                  )}>
                    {guide.type === "procedure" ? (
                      <FileText className={cn("h-7 w-7", guide.type === "procedure" ? "text-primary" : "text-accent")} />
                    ) : (
                      <ClipboardCheck className="h-7 w-7 text-accent" />
                    )}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <Badge variant="secondary">
                        {guide.type === "procedure" ? "Procedure" : "Assessment Tool"}
                      </Badge>
                      <Badge
                        variant="outline"
                        className={cn(
                          guide.status === "Ready to Use" && "bg-accent/10 text-accent border-accent/30",
                          guide.status === "Draft" && "bg-muted text-muted-foreground"
                        )}
                      >
                        {guide.status}
                      </Badge>
                      <Badge variant="outline">v{guide.version}</Badge>
                    </div>
                    <h1 className="mt-2 text-2xl font-bold tracking-tight lg:text-3xl">
                      {guide.title}
                    </h1>
                  </div>
                </div>
                <p className="mt-4 text-muted-foreground max-w-3xl">
                  {guide.description}
                </p>
              </div>

              {/* Quick Stats */}
              <div className="flex items-center gap-6 rounded-2xl border border-border/50 bg-card p-6">
                <div className="text-center">
                  <p className="text-2xl font-bold">{guide.readTime}</p>
                  <p className="text-sm text-muted-foreground">Read Time</p>
                </div>
                <div className="h-12 w-px bg-border" />
                <div className="text-center">
                  <Badge
                    variant="outline"
                    className={cn(
                      "text-sm",
                      guide.difficulty === "Beginner" && "border-accent/50 text-accent",
                      guide.difficulty === "Intermediate" && "border-primary/50 text-primary",
                      guide.difficulty === "Advanced" && "border-chart-5/50 text-chart-5"
                    )}
                  >
                    {guide.difficulty}
                  </Badge>
                  <p className="text-sm text-muted-foreground mt-1">Level</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Metadata Bar */}
        <section className="border-b border-border/50 py-4">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">Owner:</span>
                <span className="font-medium">{guide.owner}</span>
              </div>
              {guide.effectiveDate && (
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Effective:</span>
                  <span className="font-medium">{guide.effectiveDate}</span>
                </div>
              )}
              {guide.parentStandard && (
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Standard:</span>
                  <Link
                    href={`/implement/standards/${guide.parentStandard.toLowerCase().replace("-", "-ai-")}`}
                    className="font-medium text-primary hover:underline"
                  >
                    {guide.parentStandard}
                  </Link>
                </div>
              )}
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">Category:</span>
                <span className="font-medium">{guide.category}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Topics */}
        <section className="border-b border-border/50 py-4 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm text-muted-foreground mr-2">Topics:</span>
              {guide.topics.map((topic) => (
                <Badge key={topic} variant="secondary" className="text-xs">
                  {topic}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {content ? (
              guide.type === "procedure" ? (
                // Structured procedure view
                <ProcedureContent procedure={parseProcedure(content)} />
              ) : guide.type === "checklist" ? (
                // Enhanced checklist view
                <ChecklistContent content={content} title={guide.title} />
              ) : guide.type === "form" ? (
                // Enhanced form view
                <FormContent content={content} title={guide.title} />
              ) : guide.type === "record" ? (
                // Enhanced record view
                <RecordContent content={content} title={guide.title} />
              ) : (
                // Standard markdown view for assessment-tools with auto-linked document references
                <Card className="border-border/50">
                  <CardContent className="p-8 lg:p-12">
                    <DocumentLinker
                      content={content}
                      className="prose prose-neutral dark:prose-invert max-w-none prose-headings:scroll-mt-20 prose-h1:text-2xl prose-h1:font-bold prose-h1:mb-4 prose-h2:text-xl prose-h2:font-bold prose-h2:mt-8 prose-h2:mb-4 prose-h2:pb-2 prose-h2:border-b prose-h3:text-lg prose-h3:font-semibold prose-h3:mt-6 prose-h3:mb-3 prose-h4:text-base prose-h4:font-semibold prose-h4:mt-4 prose-h4:mb-2 prose-table:text-sm prose-th:bg-muted prose-th:p-3 prose-td:p-3 prose-td:border prose-tr:border-b prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none prose-blockquote:border-l-primary prose-blockquote:bg-primary/5 prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:not-italic"
                    />
                  </CardContent>
                </Card>
              )
            ) : (
              <Card className="border-border/50">
                <CardContent className="p-8 text-center">
                  <p className="text-muted-foreground">
                    Content not available. Please ensure the guide file exists.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </section>

        {/* Navigation */}
        <section className="py-8 border-t border-border/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              {prevGuide ? (
                <Link href={`/implement/guides/${prevGuide.id}`} className="flex-1">
                  <Card className="h-full transition-all hover:border-primary/30 hover:shadow-lg group">
                    <CardContent className="p-4 flex items-center gap-4">
                      <ArrowLeft className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-muted-foreground">Previous</p>
                        <p className="font-medium truncate group-hover:text-primary transition-colors">
                          {prevGuide.title}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ) : (
                <div className="flex-1" />
              )}

              <Link href="/implement/guides">
                <Button variant="outline" className="h-full">
                  <Layers className="h-4 w-4 mr-2" />
                  All Guides
                </Button>
              </Link>

              {nextGuide ? (
                <Link href={`/implement/guides/${nextGuide.id}`} className="flex-1">
                  <Card className="h-full transition-all hover:border-primary/30 hover:shadow-lg group">
                    <CardContent className="p-4 flex items-center gap-4">
                      <div className="flex-1 min-w-0 text-right">
                        <p className="text-xs text-muted-foreground">Next</p>
                        <p className="font-medium truncate group-hover:text-primary transition-colors">
                          {nextGuide.title}
                        </p>
                      </div>
                      <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </CardContent>
                  </Card>
                </Link>
              ) : (
                <div className="flex-1" />
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
