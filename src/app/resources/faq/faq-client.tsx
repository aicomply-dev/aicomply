"use client"

import { useState } from "react"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Search,
  ChevronDown,
  ChevronUp,
  ThumbsUp,
  ThumbsDown,
  MessageCircle,
  HelpCircle,
  Scale,
  Clock,
  Building2,
  FileText,
  Shield,
} from "lucide-react"
import { cn } from "@/lib/utils"

// Category icon mapping
const CATEGORY_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  general: HelpCircle,
  scope: Scale,
  timeline: Clock,
  compliance: FileText,
  organizations: Building2,
  enforcement: Shield,
}

export interface FAQCategory {
  id: string
  label: string
  count?: number
}

export interface FAQ {
  id: string
  question: string
  answer: string
  category: string
  helpful?: number
  views?: number
}

interface FAQClientProps {
  categories: FAQCategory[]
  faqs: FAQ[]
}

export function FAQClient({ categories, faqs }: FAQClientProps) {
  const [search, setSearch] = useState("")
  const [selectedCategory, setSelectedCategory] = useState(categories[0]?.id || "general")
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([faqs[0]?.id || "1"])

  const filteredFaqs = faqs.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(search.toLowerCase()) ||
      faq.answer.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = selectedCategory === "all" || faq.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const toggleExpand = (id: string) => {
    setExpandedFaqs((prev) => (prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]))
  }

  // Calculate counts per category from actual FAQ data
  const categoriesWithCounts = categories.map((cat) => ({
    ...cat,
    count: cat.count || faqs.filter((f) => f.category === cat.id).length,
  }))

  return (
    <div className="flex min-h-screen flex-col">
      <Nav />

      <main className="flex-1">
        <PageHeader
          badge="Help Center"
          title="Frequently Asked Questions"
          description="Find answers to common questions about the EU AI Act and compliance requirements."
          color="indigo"
        />

        {/* Search */}
        <section className="border-b border-border/50 py-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search frequently asked questions..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-xl border border-border bg-background py-3 pl-12 pr-4 text-base focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>
        </section>

        {/* Categories and FAQs */}
        <section className="py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-4">
              {/* Categories Sidebar */}
              <div className="lg:col-span-1">
                <Card className="sticky top-4 border-border/50">
                  <CardHeader>
                    <CardTitle className="text-lg">Categories</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-1 p-2">
                    {categoriesWithCounts.map((category) => {
                      const Icon = CATEGORY_ICONS[category.id] || HelpCircle
                      return (
                        <button
                          key={category.id}
                          onClick={() => setSelectedCategory(category.id)}
                          className={cn(
                            "flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm transition-colors",
                            selectedCategory === category.id ? "bg-primary text-primary-foreground" : "hover:bg-muted",
                          )}
                        >
                          <Icon className="h-4 w-4" />
                          <span className="flex-1">{category.label}</span>
                          <Badge
                            variant="secondary"
                            className={cn(
                              "text-xs",
                              selectedCategory === category.id && "bg-primary-foreground/20 text-primary-foreground",
                            )}
                          >
                            {category.count}
                          </Badge>
                        </button>
                      )
                    })}
                  </CardContent>
                </Card>
              </div>

              {/* FAQs List */}
              <div className="lg:col-span-3 space-y-4">
                <div className="text-sm text-muted-foreground mb-4">Showing {filteredFaqs.length} questions</div>

                {filteredFaqs.map((faq) => {
                  const isExpanded = expandedFaqs.includes(faq.id)
                  return (
                    <Card key={faq.id} className={cn("transition-all", isExpanded && "border-primary/30 shadow-lg")}>
                      <CardContent className="p-0">
                        <button
                          onClick={() => toggleExpand(faq.id)}
                          className="flex w-full items-start gap-4 p-5 text-left"
                        >
                          <div
                            className={cn(
                              "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors",
                              isExpanded ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary",
                            )}
                          >
                            <HelpCircle className="h-4 w-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold pr-8">{faq.question}</h3>
                            {!isExpanded && (
                              <p className="mt-1 text-sm text-muted-foreground line-clamp-1">
                                {faq.answer.split("\n")[0]}
                              </p>
                            )}
                          </div>
                          <div className="shrink-0">
                            {isExpanded ? (
                              <ChevronUp className="h-5 w-5 text-muted-foreground" />
                            ) : (
                              <ChevronDown className="h-5 w-5 text-muted-foreground" />
                            )}
                          </div>
                        </button>

                        {isExpanded && (
                          <div className="border-t border-border/50 px-5 pb-5">
                            <div className="ml-12 pt-4">
                              <div className="prose prose-sm max-w-none text-muted-foreground whitespace-pre-line">
                                {faq.answer}
                              </div>

                              <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-border/50 pt-4">
                                <span className="text-sm text-muted-foreground">Was this helpful?</span>
                                <div className="flex items-center gap-2">
                                  <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                                    <ThumbsUp className="h-4 w-4" />
                                    Yes ({faq.helpful || 0})
                                  </Button>
                                  <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                                    <ThumbsDown className="h-4 w-4" />
                                    No
                                  </Button>
                                </div>
                                <span className="text-xs text-muted-foreground ml-auto">
                                  {(faq.views || 0).toLocaleString()} views
                                </span>
                              </div>
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  )
                })}

                {filteredFaqs.length === 0 && (
                  <Card className="border-dashed">
                    <CardContent className="flex flex-col items-center justify-center py-12 text-center">
                      <HelpCircle className="h-12 w-12 text-muted-foreground mb-4" />
                      <h3 className="text-lg font-semibold">No questions found</h3>
                      <p className="text-muted-foreground">Try adjusting your search or category filter.</p>
                    </CardContent>
                  </Card>
                )}

                {/* Still Have Questions */}
                <Card className="border-primary/30 bg-gradient-to-br from-primary/5 to-transparent">
                  <CardContent className="flex flex-col items-center gap-4 p-8 text-center sm:flex-row sm:text-left">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/25">
                      <MessageCircle className="h-7 w-7" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold">Still have questions?</h3>
                      <p className="text-muted-foreground">
                        Can't find what you're looking for? Our compliance experts are here to help.
                      </p>
                    </div>
                    <Button className="bg-primary shadow-lg shadow-primary/25 hover:bg-primary/90">
                      Contact Support
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
