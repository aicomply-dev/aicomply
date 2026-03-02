'use client'

import { useEffect, useState, useRef } from 'react'
import { cn } from '@/lib/utils'

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface TocItem {
  id: string
  text: string
  level: number // 2 or 3
}

interface TableOfContentsProps {
  items: TocItem[]
}

// ---------------------------------------------------------------------------
// Server-side utility: extract TOC items from markdown
// ---------------------------------------------------------------------------

export function extractTocItems(content: string): TocItem[] {
  const items: TocItem[] = []
  const lines = content.split('\n')

  for (const line of lines) {
    // Match ## and ### headings (not inside code blocks)
    const h2Match = line.match(/^##\s+(.+)$/)
    const h3Match = line.match(/^###\s+(.+)$/)

    if (h2Match) {
      const text = h2Match[1].replace(/[*_`]/g, '').trim()
      const id = slugify(text)
      items.push({ id, text, level: 2 })
    } else if (h3Match) {
      const text = h3Match[1].replace(/[*_`]/g, '').trim()
      const id = slugify(text)
      items.push({ id, text, level: 3 })
    }
  }

  return items
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

// ---------------------------------------------------------------------------
// TableOfContents component
// ---------------------------------------------------------------------------

export function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('')
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    if (items.length === 0) return

    const headingElements = items
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[]

    if (headingElements.length === 0) return

    // Clean up previous observer
    if (observerRef.current) {
      observerRef.current.disconnect()
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        // Find the first heading that is currently intersecting
        const intersecting = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) =>
              a.boundingClientRect.top - b.boundingClientRect.top,
          )

        if (intersecting.length > 0) {
          setActiveId(intersecting[0].target.id)
        }
      },
      {
        rootMargin: '-80px 0px -60% 0px',
        threshold: 0,
      },
    )

    headingElements.forEach((el) => observerRef.current!.observe(el))

    return () => {
      observerRef.current?.disconnect()
    }
  }, [items])

  if (items.length === 0) return null

  return (
    <nav
      className="hidden md:block sticky top-20 w-56 shrink-0 self-start"
      aria-label="Table of contents"
    >
      <h4 className="mb-3 text-sm font-semibold text-foreground">
        On this page
      </h4>
      <ul className="space-y-1 text-sm">
        {items.map((item) => {
          const isActive = activeId === item.id
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault()
                  const el = document.getElementById(item.id)
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' })
                    setActiveId(item.id)
                  }
                }}
                className={cn(
                  'block py-1 transition-colors border-l-2',
                  item.level === 3 ? 'pl-6' : 'pl-3',
                  isActive
                    ? 'border-blue-600 text-foreground font-medium'
                    : 'border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground/30',
                )}
              >
                {item.text}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
