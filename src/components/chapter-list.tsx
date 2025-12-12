"use client"

import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, ChevronRight, FileText, Video, HelpCircle } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import type { Chapter } from "@/lib/actions/modules"

function getTypeIcon(type: string) {
  switch (type) {
    case "video":
      return Video
    case "quiz":
      return HelpCircle
    default:
      return FileText
  }
}

interface ChapterListProps {
  slug: string
  chapters: Chapter[]
  completedChapters: number[]
}

export function ChapterList({ slug, chapters, completedChapters }: ChapterListProps) {
  return (
    <div className="space-y-4">
      {chapters.map((chapter, index) => {
        const Icon = getTypeIcon(chapter.type)
        const isCompleted = completedChapters.includes(chapter.id)

        return (
          <Link
            key={`${slug}-chapter-${chapter.id}-${index}`}
            href={`/understand/modules/${slug}/chapter/${index}`}
            className="block"
          >
            <Card
              className={cn(
                "group cursor-pointer transition-all hover:shadow-lg",
                isCompleted ? "border-accent/30 bg-accent/5" : "hover:border-primary/30",
              )}
            >
              <CardContent className="flex items-center gap-4 p-4">
                <div
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-lg transition-colors",
                    isCompleted
                      ? "bg-accent text-accent-foreground"
                      : "bg-muted group-hover:bg-primary group-hover:text-primary-foreground",
                  )}
                >
                  {isCompleted ? (
                    <CheckCircle2 className="h-5 w-5" />
                  ) : (
                    <span className="text-sm font-semibold">{index + 1}</span>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium group-hover:text-primary truncate">{chapter.title}</h3>
                    <Icon className="h-4 w-4 text-muted-foreground shrink-0" />
                  </div>
                  <p className="text-sm text-muted-foreground truncate">{chapter.description}</p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-sm text-muted-foreground">{chapter.duration} min</span>
                  <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </CardContent>
            </Card>
          </Link>
        )
      })}
    </div>
  )
}
