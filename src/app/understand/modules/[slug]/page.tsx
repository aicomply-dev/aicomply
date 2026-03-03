import { NavWithAuth } from "@/components/nav-with-auth"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  BookOpen,
  Clock,
  PlayCircle,
  ChevronLeft,
  Bookmark,
  Share2,
  Award,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { loadModule, loadModuleIndex, loadAllChapters, type ChapterMetadata } from "@/lib/actions/content"
import { ChapterList } from "@/components/chapter-list"

function getDifficultyLabel(difficulty: string) {
  switch (difficulty) {
    case "beginner": return "Beginner"
    case "intermediate": return "Intermediate"
    case "advanced": return "Advanced"
    default: return difficulty
  }
}

export default async function ModuleDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  const mod = await loadModule(slug)
  if (!mod) {
    notFound()
  }

  const chapters: ChapterMetadata[] = await loadAllChapters(slug)
  const totalChapters = chapters.length
  const completedChapters: number[] = []
  const completedCount = 0

  // Get related modules (other modules in same category, or just next modules)
  const allModules = await loadModuleIndex()
  const relatedModules = allModules
    .filter(m => m.id !== mod.id && m.category === mod.category)
    .slice(0, 3)
    .map(m => ({
      slug: m.slug,
      title: m.title,
      lessons: m.chapterCount || 0,
    }))

  // If not enough related, add other modules
  if (relatedModules.length < 3) {
    const otherModules = allModules
      .filter(m => m.id !== mod.id && !relatedModules.find(r => r.slug === m.slug))
      .slice(0, 3 - relatedModules.length)
      .map(m => ({
        slug: m.slug,
        title: m.title,
        lessons: m.chapterCount || 0,
      }))
    relatedModules.push(...otherModules)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <NavWithAuth />

      <main className="flex-1">
        {/* Module Header */}
        <section className="relative overflow-hidden border-b border-border/50 py-12 sm:py-16">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Link
              href="/understand"
              className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ChevronLeft className="h-4 w-4" />
              Back to Modules
            </Link>

            <div className="grid gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <Badge variant="outline" className="border-primary/20 bg-primary/10 text-primary">
                    {getDifficultyLabel(mod.difficulty)}
                  </Badge>
                  <Badge variant="secondary" className="gap-1">
                    <Clock className="h-3 w-3" />
                    {mod.duration} min
                  </Badge>
                  <Badge variant="secondary" className="gap-1">
                    <BookOpen className="h-3 w-3" />
                    {totalChapters} lessons
                  </Badge>
                </div>

                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{mod.title}</h1>
                <p className="mt-4 text-lg text-muted-foreground">{mod.description}</p>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  {chapters.length > 0 && (
                    <Button
                      size="lg"
                      className="gap-2 bg-primary shadow-lg shadow-primary/25 hover:bg-primary/90"
                      asChild
                    >
                      <Link href={`/understand/modules/${slug}/chapter/0`}>
                        <PlayCircle className="h-5 w-5" />
                        Start Learning
                      </Link>
                    </Button>
                  )}
                  <Button size="lg" variant="outline" className="gap-2 bg-transparent">
                    <Bookmark className="h-5 w-5" />
                    Save for Later
                  </Button>
                  <Button size="lg" variant="ghost" className="gap-2">
                    <Share2 className="h-5 w-5" />
                    Share
                  </Button>
                </div>
              </div>

              <div>
                <Card className="border-border/50 bg-background/50 backdrop-blur">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Module Info</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-sm text-muted-foreground">
                      {totalChapters} chapters available
                    </div>
                    <div className="flex items-center gap-3 rounded-lg bg-muted/50 p-3">
                      <Award className="h-8 w-8 text-muted-foreground" />
                      <div className="text-sm">
                        <p className="font-medium">Self-Paced Learning</p>
                        <p className="text-muted-foreground">
                          Work through lessons at your own pace
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Course Content */}
        <section id="course-content" className="py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold">Course Content</h2>
                  <p className="text-muted-foreground">
                    {totalChapters} lessons • {mod.duration} min total
                  </p>
                </div>

                <ChapterList
                  slug={slug}
                  chapters={chapters.map((ch, idx) => ({
                    id: idx,
                    title: ch.title,
                    description: ch.description || "",
                    type: ch.type as "lesson" | "quiz" | "video",
                    duration: parseInt(String(ch.duration || "0"), 10) || 0,
                  }))}
                  completedChapters={completedChapters}
                />
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Related Modules */}
                {relatedModules.length > 0 && (
                  <Card className="border-border/50">
                    <CardHeader>
                      <CardTitle className="text-lg">Related Modules</CardTitle>
                      <CardDescription>Continue your learning journey</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {relatedModules.map((related) => (
                        <Link
                          key={related.slug}
                          href={`/understand/modules/${related.slug}`}
                          className="group flex items-center justify-between rounded-lg border border-border/50 bg-muted/30 p-3 transition-colors hover:bg-muted/50"
                        >
                          <div className="flex items-center gap-3">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                              <BookOpen className="h-4 w-4 text-primary" />
                            </div>
                            <div>
                              <p className="text-sm font-medium group-hover:text-primary">{related.title}</p>
                              <p className="text-xs text-muted-foreground">{related.lessons} lessons</p>
                            </div>
                          </div>
                          <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        </Link>
                      ))}
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
