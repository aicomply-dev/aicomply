'use client'

import * as React from 'react'
import { useRouter } from 'next/navigation'
import { Search, FileText, BookOpen, Scale, ScrollText, HelpCircle, Library } from 'lucide-react'
import Fuse from 'fuse.js'

import { Button } from '@/components/ui/button'
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from '@/components/ui/command'

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface SearchEntry {
  title: string
  description: string
  url: string
  category: string
  snippet: string
}

// ---------------------------------------------------------------------------
// Category icons
// ---------------------------------------------------------------------------

const categoryIcons: Record<string, React.ReactNode> = {
  Module: <BookOpen className="size-4 shrink-0 text-blue-500" />,
  Chapter: <BookOpen className="size-4 shrink-0 text-blue-400" />,
  Standard: <FileText className="size-4 shrink-0 text-green-500" />,
  Regulation: <Scale className="size-4 shrink-0 text-amber-500" />,
  Glossary: <Library className="size-4 shrink-0 text-purple-500" />,
  FAQ: <HelpCircle className="size-4 shrink-0 text-teal-500" />,
  Guide: <ScrollText className="size-4 shrink-0 text-orange-500" />,
}

function getCategoryIcon(category: string): React.ReactNode {
  // Guide categories like "Procedures", "Checklists", etc.
  if (!(category in categoryIcons)) {
    return categoryIcons.Guide
  }
  return categoryIcons[category]
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function SearchBar() {
  const [open, setOpen] = React.useState(false)
  const [query, setQuery] = React.useState('')
  const [index, setIndex] = React.useState<SearchEntry[] | null>(null)
  const [fuse, setFuse] = React.useState<Fuse<SearchEntry> | null>(null)
  const router = useRouter()

  // Cmd+K / Ctrl+K keyboard shortcut
  React.useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setOpen((prev) => !prev)
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [])

  // Lazy-load search index on first open
  React.useEffect(() => {
    if (!open || index !== null) return

    fetch('/search-index.json')
      .then((res) => res.json())
      .then((data: SearchEntry[]) => {
        setIndex(data)
        setFuse(
          new Fuse(data, {
            keys: [
              { name: 'title', weight: 0.4 },
              { name: 'description', weight: 0.3 },
              { name: 'snippet', weight: 0.2 },
              { name: 'category', weight: 0.1 },
            ],
            threshold: 0.4,
            includeScore: true,
            minMatchCharLength: 2,
          }),
        )
      })
      .catch(() => {
        setIndex([])
        setFuse(null)
      })
  }, [open, index])

  // Search results
  const results = React.useMemo(() => {
    if (!fuse || !query.trim()) return []
    return fuse.search(query, { limit: 15 }).map((r) => r.item)
  }, [fuse, query])

  // Group results by category
  const grouped = React.useMemo(() => {
    const map = new Map<string, SearchEntry[]>()
    for (const entry of results) {
      const existing = map.get(entry.category)
      if (existing) {
        existing.push(entry)
      } else {
        map.set(entry.category, [entry])
      }
    }
    return map
  }, [results])

  function handleSelect(url: string) {
    setOpen(false)
    setQuery('')
    router.push(url)
  }

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="hidden md:inline-flex"
        onClick={() => setOpen(true)}
        aria-label="Search content"
      >
        <Search className="size-4" />
      </Button>

      <CommandDialog
        open={open}
        onOpenChange={setOpen}
        title="Search"
        description="Search across all AI Comply content"
      >
        <CommandInput
          placeholder="Search modules, standards, guides..."
          value={query}
          onValueChange={setQuery}
        />
        <CommandList>
          {index === null && (
            <div className="py-6 text-center text-sm text-muted-foreground">
              Loading search index...
            </div>
          )}

          {index !== null && query.trim() && results.length === 0 && (
            <CommandEmpty>No results found.</CommandEmpty>
          )}

          {!query.trim() && index !== null && (
            <div className="py-6 text-center text-sm text-muted-foreground">
              Type to search across all content...
            </div>
          )}

          {Array.from(grouped.entries()).map(([category, items]) => (
            <CommandGroup key={category} heading={category}>
              {items.map((item) => (
                <CommandItem
                  key={item.url}
                  value={`${item.title} ${item.description}`}
                  onSelect={() => handleSelect(item.url)}
                  className="cursor-pointer"
                >
                  {getCategoryIcon(category)}
                  <div className="ml-2 min-w-0 flex-1">
                    <p className="truncate text-sm font-medium">
                      {item.title}
                    </p>
                    {item.description && (
                      <p className="truncate text-xs text-muted-foreground">
                        {item.description.slice(0, 120)}
                      </p>
                    )}
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  )
}
