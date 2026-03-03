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
import { loadModule, loadAllChapters, loadChapter } from "@/lib/actions/content"
import type { Chapter } from "@/lib/data/modules-data"

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

  const mod = await loadModule(slug)
  if (!mod) {
    notFound()
  }

  const allChapters = await loadAllChapters(slug)
  if (chapterIndex < 0 || chapterIndex >= allChapters.length) {
    notFound()
  }

  const chapterMeta = allChapters[chapterIndex]
  // Map ChapterMetadata to Chapter shape for LessonContent compatibility
  const chapter: Chapter = {
    id: chapterIndex,
    title: chapterMeta.title,
    description: chapterMeta.description || "",
    type: chapterMeta.type as "lesson" | "quiz" | "video",
    duration: parseInt(String(chapterMeta.duration || "0"), 10) || 0,
    videoUrl: chapterMeta.videoUrl,
    questions: chapterMeta.questions as Chapter["questions"],
  }

  // Load chapter content if available
  const chapterData = await loadChapter(slug, chapterIndex)
  if (chapterData?.content) {
    chapter.content = chapterData.content
  }

  const chapters = allChapters.map((ch, idx) => ({
    id: idx,
    title: ch.title,
    description: ch.description || "",
    type: ch.type as "lesson" | "quiz" | "video",
    duration: ch.duration || 0,
  }))

  const PrevIcon = chapterIcon(chapter.type)
  const prevIndex = chapterIndex > 0 ? chapterIndex - 1 : null
  const nextIndex = chapterIndex < allChapters.length - 1 ? chapterIndex + 1 : null

  const isChapterCompleted = false

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
                  Chapter {chapterIndex + 1} of {allChapters.length}
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
              totalChapters={allChapters.length}
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


