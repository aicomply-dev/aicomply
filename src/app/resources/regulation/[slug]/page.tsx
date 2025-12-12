import { NavWithAuth } from "@/components/nav-with-auth"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  ChevronLeft,
  ChevronRight,
  BookOpen,
  AlertTriangle,
  Lightbulb,
  FileText,
  Home,
  Copy,
  ExternalLink,
} from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { cn } from "@/lib/utils"
import { getRegulationSectionContent } from "@/lib/actions/regulation"
import { REGULATION_SECTIONS, getSectionBySlug } from "@/lib/data/regulation-data"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import type { Components } from "react-markdown"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return REGULATION_SECTIONS.map((section) => ({
    slug: section.slug,
  }))
}

export default async function RegulationSectionPage({ params }: Props) {
  const { slug } = await params
  const { section, content, error } = await getRegulationSectionContent(slug)

  if (!section || error) {
    notFound()
  }

  // Find previous and next sections
  const currentIndex = REGULATION_SECTIONS.findIndex((s) => s.slug === slug)
  const prevSection = currentIndex > 0 ? REGULATION_SECTIONS[currentIndex - 1] : null
  const nextSection =
    currentIndex < REGULATION_SECTIONS.length - 1 ? REGULATION_SECTIONS[currentIndex + 1] : null

  // Custom components for markdown rendering
  const components: Components = {
    h1: ({ children }) => (
      <h1
        id={createAnchorId(children)}
        className="text-3xl font-bold tracking-tight mt-10 mb-6 first:mt-0 scroll-mt-24"
      >
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2
        id={createAnchorId(children)}
        className="text-2xl font-bold tracking-tight mt-10 mb-4 pb-2 border-b border-border scroll-mt-24"
      >
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3
        id={createAnchorId(children)}
        className="text-xl font-semibold mt-8 mb-3 scroll-mt-24"
      >
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg font-semibold mt-6 mb-2">{children}</h4>
    ),
    p: ({ children }) => <p className="leading-7 mb-4 [&:last-child]:mb-0">{children}</p>,
    strong: ({ children }) => (
      <strong className="font-semibold text-foreground">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    ul: ({ children }) => <ul className="my-4 ml-6 list-disc [&>li]:mt-2">{children}</ul>,
    ol: ({ children }) => <ol className="my-4 ml-6 list-decimal [&>li]:mt-2">{children}</ol>,
    li: ({ children }) => <li className="leading-7 pl-1">{children}</li>,
    blockquote: ({ children }) => (
      <blockquote className="mt-4 mb-4 border-l-4 border-primary pl-4 py-2 bg-muted/30 rounded-r-lg italic text-muted-foreground">
        {children}
      </blockquote>
    ),
    pre: ({ children }) => (
      <pre className="my-4 overflow-x-auto rounded-lg bg-muted p-4 text-sm border border-border">
        {children}
      </pre>
    ),
    code: ({ children, className }) => {
      const isInline = !className
      if (isInline) {
        return (
          <code className="relative rounded bg-muted px-[0.4rem] py-[0.2rem] font-mono text-sm text-primary">
            {children}
          </code>
        )
      }
      return <code className={className}>{children}</code>
    },
    table: ({ children }) => (
      <div className="my-6 w-full overflow-x-auto">
        <table className="w-full border-collapse text-sm">{children}</table>
      </div>
    ),
    thead: ({ children }) => <thead className="bg-muted">{children}</thead>,
    tbody: ({ children }) => (
      <tbody className="[&>tr:nth-child(even)]:bg-muted/30">{children}</tbody>
    ),
    tr: ({ children }) => <tr className="border-b border-border">{children}</tr>,
    th: ({ children }) => (
      <th className="px-4 py-3 text-left font-semibold text-foreground">{children}</th>
    ),
    td: ({ children }) => <td className="px-4 py-3">{children}</td>,
    hr: () => <hr className="my-8 border-border" />,
    a: ({ href, children }) => (
      <Link
        href={href || "#"}
        className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
      >
        {children}
      </Link>
    ),
  }

  return (
    <div className="flex min-h-screen flex-col">
      <NavWithAuth />

      <main className="flex-1">
        {/* Breadcrumb & Section Header */}
        <div className="border-b border-border/50 bg-gradient-to-b from-muted/50 to-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Link href="/resources" className="hover:text-foreground transition-colors">
                Resources
              </Link>
              <ChevronRight className="h-4 w-4" />
              <Link
                href="/resources/regulation"
                className="hover:text-foreground transition-colors"
              >
                EU AI Act
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground">{section.shortTitle}</span>
            </nav>

            {/* Section Header */}
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  {section.type === "chapter" && (
                    <Badge variant="outline" className="text-sm">
                      Chapter {section.chapterNumber}
                    </Badge>
                  )}
                  {section.type === "annex" && (
                    <Badge
                      variant="outline"
                      className="text-sm border-purple-500/30 text-purple-500"
                    >
                      Annex {section.annexNumber}
                    </Badge>
                  )}
                  {section.articles && (
                    <Badge variant="secondary" className="text-sm">
                      {section.articles}
                    </Badge>
                  )}
                </div>
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">{section.title}</h1>
                <p className="mt-2 text-muted-foreground max-w-2xl">{section.description}</p>
                {section.trainingFocus && (
                  <div className="mt-3 flex items-center gap-2 text-sm text-primary">
                    <Lightbulb className="h-4 w-4" />
                    <span>{section.trainingFocus}</span>
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2">
                <Link href="/resources/regulation">
                  <Button variant="outline" size="sm">
                    <Home className="mr-2 h-4 w-4" />
                    All Sections
                  </Button>
                </Link>
                <Link href="/resources/glossary">
                  <Button variant="outline" size="sm">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Glossary
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex gap-8">
            {/* Main Content */}
            <Card className="flex-1 border-border/50">
              <CardContent className="p-6 sm:p-8 lg:p-10">
                <article className="prose prose-neutral dark:prose-invert max-w-none">
                  <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
                    {content || ""}
                  </ReactMarkdown>
                </article>
              </CardContent>
            </Card>
          </div>

          {/* Navigation */}
          <div className="mt-8 flex flex-col sm:flex-row justify-between gap-4">
            {prevSection ? (
              <Link href={`/resources/regulation/${prevSection.slug}`} className="flex-1">
                <Card className="h-full transition-all hover:shadow-lg hover:border-primary/30 group">
                  <CardContent className="p-4 flex items-center gap-3">
                    <ChevronLeft className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-muted-foreground">Previous</p>
                      <p className="font-medium truncate group-hover:text-primary transition-colors">
                        {prevSection.shortTitle}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ) : (
              <div className="flex-1" />
            )}

            {nextSection && (
              <Link href={`/resources/regulation/${nextSection.slug}`} className="flex-1">
                <Card className="h-full transition-all hover:shadow-lg hover:border-primary/30 group">
                  <CardContent className="p-4 flex items-center gap-3">
                    <div className="flex-1 min-w-0 text-right">
                      <p className="text-xs text-muted-foreground">Next</p>
                      <p className="font-medium truncate group-hover:text-primary transition-colors">
                        {nextSection.shortTitle}
                      </p>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </CardContent>
                </Card>
              </Link>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

// Helper to create anchor IDs from heading text
function createAnchorId(children: React.ReactNode): string {
  if (typeof children === "string") {
    // Handle Article headings specially
    const articleMatch = children.match(/Article\s+(\d+)/i)
    if (articleMatch) {
      return `article-${articleMatch[1]}`
    }
    return children
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim()
  }
  return ""
}
