import { NavWithAuth } from "@/components/nav-with-auth"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Github, FileText, HelpCircle, Sparkles } from "lucide-react"
import Link from "next/link"

export default function DocsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <NavWithAuth />

      <main className="flex-1">
        <section className="relative overflow-hidden py-16 sm:py-24">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />

          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4 gap-2 border-primary/30 bg-primary/5 px-4 py-1.5 text-primary">
                <BookOpen className="h-3.5 w-3.5" />
                Documentation
              </Badge>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Documentation</h1>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                Learn how to use AI Comply to understand, assess, and implement EU AI Act compliance
                for your organization.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card className="group hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-2">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <CardTitle>Getting Started</CardTitle>
                  <CardDescription>
                    New to AI Comply? Start with the Understand module to learn the fundamentals of the EU AI Act.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link
                    href="/understand"
                    className="text-sm text-primary hover:underline"
                  >
                    Start learning →
                  </Link>
                </CardContent>
              </Card>

              <Card className="group hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-500/10 text-teal-600 mb-2">
                    <FileText className="h-5 w-5" />
                  </div>
                  <CardTitle>EU AI Act Text</CardTitle>
                  <CardDescription>
                    Browse the full regulation text with our annotated viewer, organized by chapters and articles.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link
                    href="/resources/regulation"
                    className="text-sm text-primary hover:underline"
                  >
                    Read the regulation →
                  </Link>
                </CardContent>
              </Card>

              <Card className="group hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10 text-amber-600 mb-2">
                    <HelpCircle className="h-5 w-5" />
                  </div>
                  <CardTitle>FAQ</CardTitle>
                  <CardDescription>
                    Find answers to frequently asked questions about the EU AI Act and using this platform.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link
                    href="/resources/faq"
                    className="text-sm text-primary hover:underline"
                  >
                    View FAQ →
                  </Link>
                </CardContent>
              </Card>

              <Card className="group hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/10 text-violet-600 mb-2">
                    <Github className="h-5 w-5" />
                  </div>
                  <CardTitle>GitHub Repository</CardTitle>
                  <CardDescription>
                    Access the source code, report issues, and contribute to the project on GitHub.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <a
                    href="https://github.com/aicomply-dev/aicomply"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline"
                  >
                    View on GitHub →
                  </a>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 rounded-lg border border-border bg-muted/30 p-6">
              <h2 className="text-lg font-semibold mb-2">About This Platform</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                AI Comply is an open-source demonstration platform that provides an interpretation of EU AI Act
                applicability assessment. This project is community-driven and intended for educational purposes.
                It does not guarantee regulatory compliance and should not be used as a substitute for professional
                legal or compliance advice.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
