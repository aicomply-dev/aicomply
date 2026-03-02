import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

import { Button } from '@/components/ui/button'

interface ChapterLink {
  title: string
  href: string
}

interface ChapterNavProps {
  prevChapter?: ChapterLink | null
  nextChapter?: ChapterLink | null
}

export function ChapterNav({ prevChapter, nextChapter }: ChapterNavProps) {
  return (
    <nav
      className="mt-12 flex items-stretch gap-4 border-t pt-8"
      aria-label="Chapter navigation"
    >
      {prevChapter ? (
        <Button
          variant="outline"
          asChild
          className="h-auto flex-1 justify-start gap-2 whitespace-normal py-4 text-left"
        >
          <Link href={prevChapter.href}>
            <ArrowLeft className="h-4 w-4 shrink-0" />
            <span className="flex flex-col">
              <span className="text-xs text-muted-foreground">Previous</span>
              <span className="text-sm font-medium">{prevChapter.title}</span>
            </span>
          </Link>
        </Button>
      ) : (
        <div className="flex-1" />
      )}

      {nextChapter ? (
        <Button
          variant="outline"
          asChild
          className="h-auto flex-1 justify-end gap-2 whitespace-normal py-4 text-right"
        >
          <Link href={nextChapter.href}>
            <span className="flex flex-col items-end">
              <span className="text-xs text-muted-foreground">Next</span>
              <span className="text-sm font-medium">{nextChapter.title}</span>
            </span>
            <ArrowRight className="h-4 w-4 shrink-0" />
          </Link>
        </Button>
      ) : (
        <div className="flex-1" />
      )}
    </nav>
  )
}
