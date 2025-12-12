import { NavWithAuth } from "@/components/nav-with-auth"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Clock,
  FileText,
  HelpCircle,
  PlayCircle,
  Video,
} from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { LessonContent } from "@/components/lesson-content"
import { getModuleBySlug, getUserModuleProgress, type Chapter } from "@/lib/actions/modules"

function chapterIcon(type: Chapter["type"]) {
  switch (type) {
    case "video":
      return Video
    case "quiz":
      return HelpCircle
    default:
      return FileText
  }
}

export default async function ChapterPage({
  params,
}: {
  params: Promise<{ slug: string; index: string }>
}) {
  const { slug, index } = await params
  const chapterIndex = Number.parseInt(index, 10)
  if (Number.isNaN(chapterIndex)) {
    notFound()
  }

  const mod = await getModuleBySlug(slug)
  if (!mod) {
    notFound()
  }

  const chapters = (mod.chapters || []) as Chapter[]
  if (chapterIndex < 0 || chapterIndex >= chapters.length) {
    notFound()
  }

  const chapter = chapters[chapterIndex]
  const PrevIcon = chapterIcon(chapter.type)
  const prevIndex = chapterIndex > 0 ? chapterIndex - 1 : null
  const nextIndex = chapterIndex < chapters.length - 1 ? chapterIndex + 1 : null

  // Get user progress for this module
  const userProgress = await getUserModuleProgress(mod.id)
  const progressRecord = userProgress[0]
  const completedChapters = progressRecord?.completedChapters || []
  const isChapterCompleted = completedChapters.includes(chapterIndex)

  return (
    <div className="flex min-h-screen flex-col">
      <NavWithAuth />

      <main className="flex-1">
        <section className="border-b border-border/50 bg-gradient-to-b from-muted/50 to-background">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8 space-y-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/understand" className="hover:text-foreground transition-colors">
                Understand
              </Link>
              <span>/</span>
              <Link href={`/understand/modules/${slug}`} className="hover:text-foreground transition-colors">
                {mod.title}
              </Link>
              <span>/</span>
              <span className="text-foreground">Chapter {chapterIndex + 1}</span>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline" className="border-primary/20 bg-primary/10 text-primary">
                  {chapter.type === "lesson" ? "Lesson" : chapter.type === "video" ? "Video" : "Quiz"}
                </Badge>
                <Badge variant="secondary" className="gap-1">
                  <Clock className="h-3 w-3" />
                  {chapter.duration} min
                </Badge>
                <Badge variant="secondary" className="gap-1">
                  <BookOpen className="h-3 w-3" />
                  Chapter {chapterIndex + 1} of {chapters.length}
                </Badge>
              </div>

              <h1 className="text-3xl font-bold tracking-tight">{chapter.title}</h1>
              <p className="text-muted-foreground">{chapter.description}</p>

              <div className="flex flex-wrap gap-3">
                {prevIndex !== null && (
                  <Button variant="outline" asChild>
                    <Link href={`/understand/modules/${slug}/chapter/${prevIndex}`}>
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Previous
                    </Link>
                  </Button>
                )}
                {nextIndex !== null && (
                  <Button asChild>
                    <Link href={`/understand/modules/${slug}/chapter/${nextIndex}`}>
                      Next
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                )}
                <Button variant="ghost" asChild>
                  <Link href={`/understand/modules/${slug}`}>
                    <PrevIcon className="mr-2 h-4 w-4" />
                    Back to Module
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <LessonContent
              moduleId={mod.id}
              moduleSlug={slug}
              chapterId={chapter.id}
              chapterIndex={chapterIndex}
              chapter={chapter}
              isCompleted={isChapterCompleted}
              totalChapters={chapters.length}
              moduleTitle={mod.title}
              prevChapterIndex={prevIndex ?? undefined}
              nextChapterIndex={nextIndex ?? undefined}
              prevChapterTitle={prevIndex !== null ? chapters[prevIndex].title : undefined}
              nextChapterTitle={nextIndex !== null ? chapters[nextIndex].title : undefined}
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}


