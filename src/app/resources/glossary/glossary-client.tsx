"use client"

import { useState, useMemo } from "react"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Search,
  BookOpen,
  ChevronDown,
  ChevronUp,
  Info,
  Lightbulb,
  Scale,
  Users,
  AlertTriangle,
  FileCheck,
  FileText,
  Settings,
  Building2,
  Cpu,
  Gavel,
  Sparkles,
  ListFilter,
  Hash,
  ExternalLink,
} from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { buildArticleUrl } from "@/lib/data/regulation-data"

// Category icons and colors
const CATEGORY_CONFIG: Record<
  string,
  { icon: React.ComponentType<{ className?: string }>; color: string; bgColor: string }
> = {
  "Core Concepts": { icon: Lightbulb, color: "text-amber-500", bgColor: "bg-amber-500/10" },
  "Actors & Roles": { icon: Users, color: "text-blue-500", bgColor: "bg-blue-500/10" },
  "Risk Classification": { icon: AlertTriangle, color: "text-red-500", bgColor: "bg-red-500/10" },
  "Compliance & Assessment": { icon: FileCheck, color: "text-emerald-500", bgColor: "bg-emerald-500/10" },
  Documentation: { icon: FileText, color: "text-purple-500", bgColor: "bg-purple-500/10" },
  Requirements: { icon: Settings, color: "text-cyan-500", bgColor: "bg-cyan-500/10" },
  Governance: { icon: Building2, color: "text-indigo-500", bgColor: "bg-indigo-500/10" },
  Technical: { icon: Cpu, color: "text-slate-500", bgColor: "bg-slate-500/10" },
  Enforcement: { icon: Gavel, color: "text-orange-500", bgColor: "bg-orange-500/10" },
  GPAI: { icon: Sparkles, color: "text-pink-500", bgColor: "bg-pink-500/10" },
}

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")

export interface GlossaryTerm {
  id: string
  term: string
  definition: string
  category: string
  article: string
  related: string[]
  examples?: string[]
  keyPoints?: string[]
}

interface GlossaryClientProps {
  terms: GlossaryTerm[]
  categories: string[]
}

export function GlossaryClient({ terms, categories }: GlossaryClientProps) {
  const [search, setSearch] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | "All">("All")
  const [expandedTerms, setExpandedTerms] = useState<string[]>([])

  // Filter and sort terms
  const filteredTerms = useMemo(() => {
    return terms
      .filter((item) => {
        const matchesSearch =
          item.term.toLowerCase().includes(search.toLowerCase()) ||
          item.definition.toLowerCase().includes(search.toLowerCase()) ||
          item.article.toLowerCase().includes(search.toLowerCase())
        const matchesCategory = selectedCategory === "All" || item.category === selectedCategory
        return matchesSearch && matchesCategory
      })
      .sort((a, b) => a.term.localeCompare(b.term))
  }, [terms, search, selectedCategory])

  // Group terms by first letter
  const groupedTerms = useMemo(() => {
    return filteredTerms.reduce(
      (acc, term) => {
        const letter = term.term[0].toUpperCase()
        if (!acc[letter]) acc[letter] = []
        acc[letter].push(term)
        return acc
      },
      {} as Record<string, GlossaryTerm[]>
    )
  }, [filteredTerms])

  // Category stats
  const categoryStats = useMemo(() => {
    return categories.reduce(
      (acc, cat) => {
        acc[cat] = terms.filter((t) => t.category === cat).length
        return acc
      },
      {} as Record<string, number>
    )
  }, [terms, categories])

  const toggleExpand = (termId: string) => {
    setExpandedTerms((prev) => (prev.includes(termId) ? prev.filter((t) => t !== termId) : [...prev, termId]))
  }

  const handleRelatedClick = (relatedTerm: string) => {
    setSearch(relatedTerm)
    setSelectedCategory("All")
    setExpandedTerms([])
    document.getElementById("terms-list")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Nav />

      <main className="flex-1">
        <PageHeader
          badge="Reference"
          title="EU AI Act Glossary"
          description="Comprehensive glossary of 60+ official terms, definitions, and concepts from the EU AI Act regulation."
          color="indigo"
        />

        {/* Stats Bar */}
        <section className="border-b border-border/50 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Hash className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">{terms.length} Terms</span>
                </div>
                <div className="flex items-center gap-2">
                  <ListFilter className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{categories.length} Categories</span>
                </div>
                <div className="flex items-center gap-2">
                  <Scale className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Official EU AI Act Definitions</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Showing {filteredTerms.length} results</span>
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="sticky top-0 z-10 border-b border-border/50 bg-background/95 py-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Search Bar */}
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
              <div className="relative flex-1 max-w-xl">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search terms, definitions, or articles..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full rounded-xl border border-border bg-background py-2.5 pl-10 pr-4 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                />
                {search && (
                  <button
                    onClick={() => setSearch("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    <span className="sr-only">Clear</span>
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
            </div>

            {/* Category Pills */}
            <div className="mt-4 flex flex-wrap gap-2">
              <Button
                variant={selectedCategory === "All" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory("All")}
                className={cn(
                  "shrink-0 rounded-full",
                  selectedCategory === "All" && "bg-primary shadow-lg shadow-primary/25"
                )}
              >
                All
                <Badge variant="secondary" className="ml-1.5 px-1.5 py-0 text-xs">
                  {terms.length}
                </Badge>
              </Button>
              {categories.map((category) => {
                const config = CATEGORY_CONFIG[category] || { icon: Info, color: "text-gray-500", bgColor: "bg-gray-500/10" }
                const Icon = config.icon
                const count = categoryStats[category] || 0
                return (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={cn(
                      "shrink-0 rounded-full gap-1.5",
                      selectedCategory === category
                        ? "bg-primary shadow-lg shadow-primary/25"
                        : "bg-transparent hover:bg-muted"
                    )}
                  >
                    <Icon className={cn("h-3.5 w-3.5", selectedCategory !== category && config.color)} />
                    <span className="hidden sm:inline">{category}</span>
                    <Badge
                      variant="secondary"
                      className={cn("ml-0.5 px-1.5 py-0 text-xs", selectedCategory === category && "bg-primary-foreground/20")}
                    >
                      {count}
                    </Badge>
                  </Button>
                )
              })}
            </div>

            {/* Alphabet Navigation */}
            <div className="mt-4 flex flex-wrap gap-1">
              {alphabet.map((letter) => {
                const hasTerms = groupedTerms[letter]?.length > 0
                return (
                  <button
                    key={letter}
                    disabled={!hasTerms}
                    onClick={() => {
                      const element = document.getElementById(`letter-${letter}`)
                      element?.scrollIntoView({ behavior: "smooth", block: "start" })
                    }}
                    className={cn(
                      "flex h-8 w-8 items-center justify-center rounded-lg text-sm font-medium transition-all",
                      hasTerms
                        ? "bg-muted hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:shadow-primary/25"
                        : "text-muted-foreground/40 cursor-not-allowed"
                    )}
                  >
                    {letter}
                  </button>
                )
              })}
            </div>
          </div>
        </section>

        {/* Terms List */}
        <section id="terms-list" className="py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-10">
              {Object.entries(groupedTerms).map(([letter, letterTerms]) => (
                <div key={letter} id={`letter-${letter}`} className="scroll-mt-48">
                  {/* Letter Header */}
                  <div className="sticky top-[200px] z-[5] mb-4 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/80 text-xl font-bold text-primary-foreground shadow-lg shadow-primary/25">
                      {letter}
                    </div>
                    <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
                    <span className="text-sm text-muted-foreground">{letterTerms.length} terms</span>
                  </div>

                  {/* Terms Grid */}
                  <div className="space-y-3 pl-2">
                    {letterTerms.map((item) => {
                      const isExpanded = expandedTerms.includes(item.id)
                      const config = CATEGORY_CONFIG[item.category] || { icon: Info, color: "text-gray-500", bgColor: "bg-gray-500/10" }
                      const CategoryIcon = config.icon

                      return (
                        <Card
                          key={item.id}
                          className={cn(
                            "group transition-all duration-200",
                            isExpanded
                              ? "shadow-xl border-primary/30 bg-gradient-to-br from-primary/[0.02] to-transparent"
                              : "hover:shadow-lg hover:border-primary/20"
                          )}
                        >
                          <CardContent className="p-5">
                            {/* Term Header */}
                            <div
                              className="flex cursor-pointer items-start justify-between gap-4"
                              onClick={() => toggleExpand(item.id)}
                            >
                              <div className="flex-1">
                                <div className="flex items-center gap-2 flex-wrap mb-2">
                                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                                    {item.term}
                                  </h3>
                                  <Badge variant="outline" className="text-xs font-mono">
                                    {item.article}
                                  </Badge>
                                  <Badge
                                    className={cn(
                                      "text-xs border-0",
                                      config.bgColor,
                                      config.color
                                    )}
                                  >
                                    <CategoryIcon className="h-3 w-3 mr-1" />
                                    {item.category}
                                  </Badge>
                                </div>
                                <p
                                  className={cn(
                                    "text-muted-foreground leading-relaxed",
                                    !isExpanded && "line-clamp-2"
                                  )}
                                >
                                  {item.definition}
                                </p>
                              </div>
                              <Button
                                variant="ghost"
                                size="icon"
                                className={cn(
                                  "shrink-0 transition-all",
                                  isExpanded && "bg-primary/10 text-primary"
                                )}
                              >
                                {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                              </Button>
                            </div>

                            {/* Expanded Content */}
                            {isExpanded && (
                              <div className="mt-5 space-y-4 border-t border-border/50 pt-5">
                                {/* Key Points */}
                                {item.keyPoints && item.keyPoints.length > 0 && (
                                  <div>
                                    <h4 className="flex items-center gap-2 text-sm font-semibold mb-2">
                                      <Lightbulb className="h-4 w-4 text-amber-500" />
                                      Key Points
                                    </h4>
                                    <ul className="grid gap-1.5 sm:grid-cols-2">
                                      {item.keyPoints.map((point, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                                          {point}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}

                                {/* Examples */}
                                {item.examples && item.examples.length > 0 && (
                                  <div>
                                    <h4 className="flex items-center gap-2 text-sm font-semibold mb-2">
                                      <Info className="h-4 w-4 text-blue-500" />
                                      Examples
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                      {item.examples.map((example, idx) => (
                                        <Badge
                                          key={idx}
                                          variant="secondary"
                                          className="bg-muted text-muted-foreground font-normal"
                                        >
                                          {example}
                                        </Badge>
                                      ))}
                                    </div>
                                  </div>
                                )}

                                {/* Related Terms */}
                                {item.related && item.related.length > 0 && (
                                  <div>
                                    <h4 className="flex items-center gap-2 text-sm font-semibold mb-2">
                                      <ExternalLink className="h-4 w-4 text-primary" />
                                      Related Terms
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                      {item.related.map((related) => (
                                        <Badge
                                          key={related}
                                          variant="outline"
                                          className="cursor-pointer hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-colors"
                                          onClick={(e) => {
                                            e.stopPropagation()
                                            handleRelatedClick(related)
                                          }}
                                        >
                                          {related}
                                        </Badge>
                                      ))}
                                    </div>
                                  </div>
                                )}

                                {/* Article Link */}
                                <div className="pt-2">
                                  <Link href={buildArticleUrl(item.article)}>
                                    <Button
                                      variant="outline"
                                      size="sm"
                                      className="bg-transparent hover:bg-primary/5"
                                    >
                                      <BookOpen className="mr-2 h-4 w-4" />
                                      View {item.article} in Full Text
                                    </Button>
                                  </Link>
                                </div>
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State */}
            {filteredTerms.length === 0 && (
              <Card className="border-dashed">
                <CardContent className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted mb-4">
                    <BookOpen className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">No terms found</h3>
                  <p className="text-muted-foreground max-w-sm">
                    Try adjusting your search query or selecting a different category filter.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-4"
                    onClick={() => {
                      setSearch("")
                      setSelectedCategory("All")
                    }}
                  >
                    Clear Filters
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
