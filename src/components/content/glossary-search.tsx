'use client'

import { useState, useMemo } from 'react'
import { Search } from 'lucide-react'

import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'

interface GlossaryTerm {
  id: string
  term: string
  definition: string
  article: string
  category: string
  related: string[]
  keyPoints: string[]
}

interface GlossaryCategory {
  id: string
  title: string
  termCount: number
}

interface GlossarySearchProps {
  categories: GlossaryCategory[]
  termsByCategory: Record<string, GlossaryTerm[]>
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

export function GlossarySearch({
  categories,
  termsByCategory,
}: GlossarySearchProps) {
  const [query, setQuery] = useState('')

  const filteredByCategory = useMemo(() => {
    if (!query.trim()) return termsByCategory

    const q = query.toLowerCase()
    const result: Record<string, GlossaryTerm[]> = {}

    for (const [catId, terms] of Object.entries(termsByCategory)) {
      if (!Array.isArray(terms)) continue
      const filtered = terms.filter(
        (t) =>
          t.term.toLowerCase().includes(q) ||
          t.definition.toLowerCase().includes(q),
      )
      if (filtered.length > 0) {
        result[catId] = filtered
      }
    }

    return result
  }, [query, termsByCategory])

  const visibleCategories = categories.filter(
    (c) => (filteredByCategory[c.id] ?? []).length > 0,
  )

  return (
    <div>
      {/* Search input */}
      <div className="relative mb-8">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search terms..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Category navigation */}
      {!query.trim() && (
        <nav className="mb-10 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <a
              key={cat.id}
              href={`#category-${cat.id}`}
              className="inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-blue-600"
            >
              {cat.title}
              <Badge variant="secondary" className="text-xs">
                {cat.termCount}
              </Badge>
            </a>
          ))}
        </nav>
      )}

      {/* Terms grouped by category */}
      {visibleCategories.length === 0 ? (
        <p className="py-12 text-center text-muted-foreground">
          No terms found matching &ldquo;{query}&rdquo;.
        </p>
      ) : (
        <div className="space-y-12">
          {visibleCategories.map((cat) => (
            <section key={cat.id} id={`category-${cat.id}`}>
              <h2 className="mb-4 text-xl font-semibold text-slate-900 scroll-mt-20">
                {cat.title}
              </h2>
              <div className="space-y-6">
                {(filteredByCategory[cat.id] ?? []).map((term) => (
                  <div
                    key={term.id}
                    id={slugify(term.term)}
                    className="scroll-mt-20 rounded-lg border bg-white p-5"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-base font-bold text-slate-900">
                        {term.term}
                      </h3>
                      {term.article && (
                        <Badge variant="outline" className="shrink-0 text-xs">
                          {term.article}
                        </Badge>
                      )}
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {term.definition}
                    </p>
                    {(term.keyPoints ?? []).length > 0 && (
                      <ul className="mt-3 space-y-1">
                        {(term.keyPoints ?? []).map((point) => (
                          <li
                            key={point}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    )}
                    {(term.related ?? []).length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {(term.related ?? []).map((rel) => (
                          <a
                            key={rel}
                            href={`#${slugify(rel)}`}
                            className="text-xs text-blue-600 hover:underline"
                          >
                            {rel}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  )
}
