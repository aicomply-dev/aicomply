import { NavWithAuth } from "@/components/nav-with-auth"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  BookOpen,
  FileText,
  Scale,
  AlertTriangle,
  Ban,
  Sparkles,
  Building2,
  Gavel,
  Database,
  Eye,
  Lightbulb,
  FileCheck,
  Calendar,
  ArrowRight,
  ChevronRight,
  ScrollText,
  ListChecks,
} from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { getTableOfContents } from "@/lib/actions/regulation"
import { KEY_DATES } from "@/lib/data/regulation-data"

// Icon mapping
const SECTION_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  ban: Ban,
  "alert-triangle": AlertTriangle,
  sparkles: Sparkles,
  "building-2": Building2,
  gavel: Gavel,
  "list-checks": ListChecks,
}

export default async function RegulationPage() {
  const { chapters, annexes, other } = await getTableOfContents()

  return (
    <div className="flex min-h-screen flex-col">
      <NavWithAuth />

      <main className="flex-1">
        <PageHeader
          badge="Official Text"
          title="EU AI Act Full Text"
          description="Complete text of Regulation (EU) 2024/1689 - the world's first comprehensive AI regulation. Navigate chapters, articles, and annexes."
          color="teal"
        />

        {/* Key Dates Section */}
        <section className="border-b border-border/50 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="h-5 w-5 text-primary" />
              <h2 className="font-semibold">Key Implementation Dates</h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {KEY_DATES.map((item, index) => (
                <div
                  key={index}
                  className={cn(
                    "rounded-xl border p-3 transition-colors",
                    index === 0 && "border-accent/30 bg-accent/5",
                    index === 1 && "border-red-500/30 bg-red-500/5",
                    index > 1 && "border-border/50 bg-background"
                  )}
                >
                  <p
                    className={cn(
                      "text-sm font-semibold",
                      index === 0 && "text-accent",
                      index === 1 && "text-red-500"
                    )}
                  >
                    {item.date}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">{item.provision}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Foundation Documents */}
        <section className="py-8 border-b border-border/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10">
                <ScrollText className="h-5 w-5 text-amber-500" />
              </div>
              <div>
                <h2 className="text-xl font-bold">Foundation Documents</h2>
                <p className="text-sm text-muted-foreground">Preamble and legal basis</p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {other.map((section) => (
                <Link key={section.id} href={`/resources/regulation/${section.slug}`}>
                  <Card className="h-full transition-all hover:shadow-lg hover:border-primary/30 group">
                    <CardHeader className="pb-2">
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                          {section.shortTitle}
                        </CardTitle>
                        <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                      {section.size && (
                        <Badge variant="secondary" className="w-fit text-xs">
                          {section.size}
                        </Badge>
                      )}
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{section.description}</p>
                      {section.trainingFocus && (
                        <p className="mt-2 text-xs text-primary flex items-center gap-1">
                          <Lightbulb className="h-3 w-3" />
                          {section.trainingFocus}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Chapters Section */}
        <section className="py-8 border-b border-border/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                <BookOpen className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-bold">Chapters (I-XIII)</h2>
                <p className="text-sm text-muted-foreground">
                  Core regulatory framework - Articles 1-113
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {chapters.map((section) => {
                const IconComponent = section.icon
                  ? SECTION_ICONS[section.icon]
                  : FileText

                return (
                  <Link key={section.id} href={`/resources/regulation/${section.slug}`}>
                    <Card
                      className={cn(
                        "h-full transition-all hover:shadow-lg group",
                        section.chapterNumber === 2 &&
                          "border-red-500/30 hover:border-red-500/50 bg-red-500/[0.02]",
                        section.chapterNumber === 3 &&
                          "border-amber-500/30 hover:border-amber-500/50 bg-amber-500/[0.02]",
                        section.chapterNumber === 12 &&
                          "border-orange-500/30 hover:border-orange-500/50 bg-orange-500/[0.02]",
                        ![2, 3, 12].includes(section.chapterNumber || 0) &&
                          "hover:border-primary/30"
                      )}
                    >
                      <CardHeader className="pb-2">
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <div
                              className={cn(
                                "flex h-8 w-8 items-center justify-center rounded-lg",
                                section.chapterNumber === 2 && "bg-red-500/10",
                                section.chapterNumber === 3 && "bg-amber-500/10",
                                section.chapterNumber === 12 && "bg-orange-500/10",
                                ![2, 3, 12].includes(section.chapterNumber || 0) &&
                                  "bg-muted"
                              )}
                            >
                              <IconComponent
                                className={cn(
                                  "h-4 w-4",
                                  section.chapterNumber === 2 && "text-red-500",
                                  section.chapterNumber === 3 && "text-amber-500",
                                  section.chapterNumber === 12 && "text-orange-500",
                                  ![2, 3, 12].includes(section.chapterNumber || 0) &&
                                    "text-muted-foreground"
                                )}
                              />
                            </div>
                            <Badge variant="outline" className="text-xs">
                              Chapter {section.chapterNumber}
                            </Badge>
                          </div>
                          <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                        <CardTitle className="text-base mt-2 group-hover:text-primary transition-colors">
                          {section.shortTitle}
                        </CardTitle>
                        {section.articles && (
                          <Badge variant="secondary" className="w-fit text-xs mt-1">
                            {section.articles}
                          </Badge>
                        )}
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {section.description}
                        </p>
                        {section.trainingFocus && (
                          <p
                            className={cn(
                              "mt-2 text-xs flex items-center gap-1",
                              section.chapterNumber === 2 && "text-red-500",
                              section.chapterNumber === 3 && "text-amber-500",
                              section.chapterNumber === 12 && "text-orange-500",
                              ![2, 3, 12].includes(section.chapterNumber || 0) && "text-primary"
                            )}
                          >
                            <Lightbulb className="h-3 w-3" />
                            {section.trainingFocus}
                          </p>
                        )}
                      </CardContent>
                    </Card>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* Annexes Section */}
        <section className="py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10">
                <FileCheck className="h-5 w-5 text-purple-500" />
              </div>
              <div>
                <h2 className="text-xl font-bold">Technical Annexes (I-XIII)</h2>
                <p className="text-sm text-muted-foreground">
                  Detailed requirements, lists, and procedures
                </p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {annexes.map((section) => {
                const IconComponent = section.icon
                  ? SECTION_ICONS[section.icon]
                  : FileText

                return (
                  <Link key={section.id} href={`/resources/regulation/${section.slug}`}>
                    <Card className="h-full transition-all hover:shadow-lg hover:border-purple-500/30 group">
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <Badge
                            variant="outline"
                            className="text-xs border-purple-500/30 text-purple-500"
                          >
                            Annex {section.annexNumber}
                          </Badge>
                          <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-purple-500 transition-colors" />
                        </div>
                        <h3 className="font-medium text-sm group-hover:text-purple-500 transition-colors">
                          {section.shortTitle}
                        </h3>
                        <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                          {section.description}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-8 bg-muted/30 border-t border-border/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-lg font-semibold mb-4">Quick Access</h2>
            <div className="flex flex-wrap gap-2">
              <Link href="/resources/regulation/chapter-2-prohibited-practices">
                <Button variant="outline" size="sm" className="bg-red-500/5 border-red-500/30 hover:bg-red-500/10">
                  <Ban className="mr-2 h-4 w-4 text-red-500" />
                  Prohibited Practices
                </Button>
              </Link>
              <Link href="/resources/regulation/chapter-3-high-risk-systems">
                <Button variant="outline" size="sm" className="bg-amber-500/5 border-amber-500/30 hover:bg-amber-500/10">
                  <AlertTriangle className="mr-2 h-4 w-4 text-amber-500" />
                  High-Risk AI
                </Button>
              </Link>
              <Link href="/resources/regulation/annex-3-high-risk-list">
                <Button variant="outline" size="sm" className="bg-purple-500/5 border-purple-500/30 hover:bg-purple-500/10">
                  <ListChecks className="mr-2 h-4 w-4 text-purple-500" />
                  High-Risk List
                </Button>
              </Link>
              <Link href="/resources/regulation/chapter-12-penalties">
                <Button variant="outline" size="sm" className="bg-orange-500/5 border-orange-500/30 hover:bg-orange-500/10">
                  <Gavel className="mr-2 h-4 w-4 text-orange-500" />
                  Penalties
                </Button>
              </Link>
              <Link href="/resources/regulation/chapter-5-gpai">
                <Button variant="outline" size="sm">
                  <Sparkles className="mr-2 h-4 w-4" />
                  GPAI Models
                </Button>
              </Link>
              <Link href="/resources/glossary">
                <Button variant="outline" size="sm">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Glossary
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
