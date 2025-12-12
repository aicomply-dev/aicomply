import { NavWithAuth } from "@/components/nav-with-auth"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, HelpCircle, FileText, ExternalLink, Video, Users, ArrowRight, Download, Globe, ScrollText } from "lucide-react"
import Link from "next/link"

const resources = [
  {
    title: "Global AI Regulations",
    description: "Compare AI governance frameworks across EU, US, China, UK, and more.",
    href: "/resources/global-regulations",
    icon: Globe,
    count: "15+ frameworks",
    color: "indigo",
    featured: true,
  },
  {
    title: "EU AI Act Full Text",
    description: "Complete regulation text with all chapters, articles, and annexes.",
    href: "/resources/regulation",
    icon: ScrollText,
    count: "113 articles",
    color: "amber",
  },
  {
    title: "Glossary",
    description: "Comprehensive glossary of EU AI Act terms and definitions.",
    href: "/resources/glossary",
    icon: BookOpen,
    count: "60+ terms",
    color: "primary",
  },
  {
    title: "FAQ",
    description: "Frequently asked questions about the EU AI Act.",
    href: "/resources/faq",
    icon: HelpCircle,
    count: "50+ questions",
    color: "accent",
  },
]

const externalResources = [
  {
    title: "EUR-Lex Official Source",
    description: "Original legal text from the Official Journal of the European Union.",
    href: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689",
    type: "Legal Document",
    icon: FileText,
  },
  {
    title: "European Commission AI Guide",
    description: "Official guidance from the European Commission on AI regulation.",
    href: "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai",
    type: "Official Guide",
    icon: Globe,
  },
  {
    title: "AI Act Explorer",
    description: "Interactive tool to explore the EU AI Act provisions.",
    href: "https://artificialintelligenceact.eu/",
    type: "Tool",
    icon: ExternalLink,
  },
]

const tutorials = [
  {
    title: "Getting Started with EU AI Act Compliance",
    duration: "15 min",
    level: "Beginner",
  },
  {
    title: "Risk Classification Walkthrough",
    duration: "20 min",
    level: "Intermediate",
  },
  {
    title: "Technical Documentation Deep Dive",
    duration: "45 min",
    level: "Advanced",
  },
]

export default function ResourcesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <NavWithAuth />

      <main className="flex-1">
        <PageHeader
          badge="Resource Center"
          title="Learning Resources"
          description="Everything you need to understand and comply with the EU AI Act."
          color="indigo"
        />

        {/* Main Resources */}
        <section className="py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {resources.map((resource) => {
                const Icon = resource.icon
                return (
                  <Link key={resource.href} href={resource.href}>
                    <Card className="group h-full cursor-pointer transition-all hover:shadow-xl hover:border-primary/30">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div
                            className={`flex h-14 w-14 items-center justify-center rounded-xl bg-${resource.color}/10 transition-all group-hover:bg-${resource.color} group-hover:shadow-lg`}
                          >
                            <Icon
                              className={`h-7 w-7 text-${resource.color} transition-colors group-hover:text-white`}
                            />
                          </div>
                          <Badge variant="secondary">{resource.count}</Badge>
                        </div>
                        <CardTitle className="mt-4 text-xl group-hover:text-primary">{resource.title}</CardTitle>
                        <CardDescription>{resource.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button variant="ghost" className="gap-2 p-0 group-hover:text-primary">
                          Explore
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </CardContent>
                    </Card>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* Video Tutorials */}
        <section className="border-t border-border/50 py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold">Video Tutorials</h2>
              <p className="text-muted-foreground">Step-by-step video guides for compliance.</p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {tutorials.map((tutorial, index) => (
                <Card
                  key={index}
                  className="group cursor-pointer transition-all hover:shadow-lg hover:border-primary/30"
                >
                  <CardContent className="p-5">
                    <div className="aspect-video rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 mb-4 flex items-center justify-center">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/25 transition-transform group-hover:scale-110">
                        <Video className="h-6 w-6" />
                      </div>
                    </div>
                    <h3 className="font-semibold group-hover:text-primary">{tutorial.title}</h3>
                    <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                      <span>{tutorial.duration}</span>
                      <span>•</span>
                      <Badge variant="outline" className="text-xs">
                        {tutorial.level}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* External Resources */}
        <section className="border-t border-border/50 py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold">External Resources</h2>
              <p className="text-muted-foreground">Official documents and third-party tools.</p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {externalResources.map((resource, index) => {
                const Icon = resource.icon
                return (
                  <a key={index} href={resource.href} target="_blank" rel="noopener noreferrer">
                    <Card className="group h-full cursor-pointer transition-all hover:shadow-lg hover:border-primary/30">
                      <CardContent className="flex items-start gap-4 p-5">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold group-hover:text-primary truncate">{resource.title}</h3>
                            <ExternalLink className="h-4 w-4 text-muted-foreground shrink-0" />
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">{resource.description}</p>
                          <Badge variant="secondary" className="mt-2 text-xs">
                            {resource.type}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                )
              })}
            </div>
          </div>
        </section>

        {/* Community */}
        <section className="py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Card className="border-accent/30 bg-gradient-to-br from-accent/5 to-transparent">
              <CardContent className="flex flex-col gap-6 p-8 lg:flex-row lg:items-center">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-accent text-accent-foreground shadow-lg shadow-accent/25">
                  <Users className="h-8 w-8" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold">Join Our Community</h3>
                  <p className="text-muted-foreground mt-1">
                    Connect with other compliance professionals, share insights, and get help from experts.
                  </p>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <Button variant="outline" className="bg-transparent">
                    <Download className="mr-2 h-4 w-4" />
                    Download Toolkit
                  </Button>
                  <Button className="bg-accent text-accent-foreground shadow-lg shadow-accent/25 hover:bg-accent/90">
                    Join Discord
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
