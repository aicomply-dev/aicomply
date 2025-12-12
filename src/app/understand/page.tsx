import { NavWithAuth } from "@/components/nav-with-auth"
import { Footer } from "@/components/footer"
import { ModuleCard } from "@/components/module-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  BookOpen,
  FileText,
  Video,
  HelpCircle,
  ArrowRight,
  CheckCircle2,
  Lightbulb,
  ExternalLink,
  Scale,
  Shield,
  AlertTriangle,
  Clock,
  Target,
  Users,
  Building2,
  Cpu,
  Ban,
  ShieldCheck,
  Calendar,
  GraduationCap,
} from "lucide-react"
import Link from "next/link"
import { getModules } from "@/lib/actions/modules"
import { cn } from "@/lib/utils"

const resources = [
  {
    type: "Document",
    title: "Official EU AI Act Text",
    description: "Full text of the regulation from EUR-Lex",
    icon: FileText,
    href: "https://eur-lex.europa.eu/eli/reg/2024/1689/oj",
  },
  {
    type: "Video",
    title: "EU AI Act Explained",
    description: "30-minute video overview for executives",
    icon: Video,
    href: "https://www.youtube.com/results?search_query=eu+ai+act+explained",
  },
  {
    type: "Guide",
    title: "Quick Reference Card",
    description: "One-page summary of key requirements",
    icon: BookOpen,
    href: "/resources/regulation",
  },
  {
    type: "FAQ",
    title: "Common Questions",
    description: "Answers to frequently asked questions",
    icon: HelpCircle,
    href: "/resources/faq",
  },
]

// EU AI Act Risk Categories
const riskCategories = [
  {
    level: "Prohibited",
    color: "destructive",
    icon: Ban,
    examples: ["Social scoring", "Real-time biometric identification", "Emotion recognition at work"],
    description: "AI practices that are banned entirely due to unacceptable risks",
  },
  {
    level: "High Risk",
    color: "chart-3",
    icon: AlertTriangle,
    examples: ["CV screening", "Credit scoring", "Medical devices"],
    description: "Requires strict compliance measures and conformity assessment",
  },
  {
    level: "Limited Risk",
    color: "primary",
    icon: Shield,
    examples: ["Chatbots", "Emotion detection", "AI-generated content"],
    description: "Transparency obligations apply",
  },
  {
    level: "Minimal Risk",
    color: "accent",
    icon: CheckCircle2,
    examples: ["Spam filters", "Video games", "Inventory management"],
    description: "No specific requirements, voluntary codes of conduct",
  },
]

// Key Timeline Milestones
const timelineMilestones = [
  {
    date: "August 1, 2024",
    title: "AI Act Entry into Force",
    description: "The regulation officially entered into force",
    status: "complete",
  },
  {
    date: "February 2, 2025",
    title: "Prohibited AI Ban",
    description: "Prohibitions on unacceptable AI practices take effect",
    status: "complete",
  },
  {
    date: "August 2, 2025",
    title: "GPAI Rules Apply",
    description: "General-purpose AI model requirements become mandatory",
    status: "upcoming",
  },
  {
    date: "August 2, 2027",
    title: "Full Enforcement",
    description: "All high-risk AI requirements fully applicable",
    status: "future",
  },
]

export default async function UnderstandPage() {
  const modules = await getModules()

  // Transform modules for display
  const displayModules = modules.map((mod) => {
    const chapters = mod.chapters || []
    return {
      slug: mod.slug,
      title: mod.title,
      description: mod.description || "",
      duration: `${mod.duration} min`,
      topics: chapters.slice(0, 4).map((ch: { title: string }) => ch.title),
      completed: false,
      locked: false,
      progress: 0,
    }
  })

  // Calculate total learning time
  const totalMinutes = modules.reduce((sum, mod) => sum + mod.duration, 0)
  const totalHours = Math.round(totalMinutes / 60)
  const totalChapters = modules.reduce((sum, mod) => sum + (mod.chapters?.length || 0), 0)

  return (
    <div className="flex min-h-screen flex-col">
      <NavWithAuth />

      <main className="flex-1">
        {/* Hero Section - with checkered background like homepage */}
        <section className="relative overflow-hidden border-b border-border/50">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
          {/* Checkered grid pattern overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

          {/* Floating orbs for visual interest */}
          <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -right-40 top-40 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <Badge className="mb-4 bg-primary/10 text-primary border-primary/20" variant="outline">
                  <Scale className="mr-1 h-3 w-3" />
                  EU AI Act Learning Center
                </Badge>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                  Master the{" "}
                  <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                    EU AI Act
                  </span>
                </h1>
                <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                  The EU AI Act is the world&apos;s first comprehensive AI regulation. Learn everything you need
                  to know about compliance requirements, risk classifications, and implementation strategies
                  through our structured learning modules.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button size="lg" className="shadow-lg shadow-primary/25" asChild>
                    <Link href="#modules">
                      Start Learning
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="bg-transparent" asChild>
                    <Link href="https://eur-lex.europa.eu/eli/reg/2024/1689/oj" target="_blank">
                      Read Full Text
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="border-primary/20 bg-gradient-to-br from-primary/10 to-transparent">
                  <CardContent className="p-6">
                    <GraduationCap className="h-8 w-8 text-primary mb-3" />
                    <p className="text-3xl font-bold">{modules.length}</p>
                    <p className="text-sm text-muted-foreground">Learning Modules</p>
                  </CardContent>
                </Card>
                <Card className="border-accent/20 bg-gradient-to-br from-accent/10 to-transparent">
                  <CardContent className="p-6">
                    <BookOpen className="h-8 w-8 text-accent mb-3" />
                    <p className="text-3xl font-bold">{totalChapters}</p>
                    <p className="text-sm text-muted-foreground">Chapters</p>
                  </CardContent>
                </Card>
                <Card className="border-chart-3/20 bg-gradient-to-br from-chart-3/10 to-transparent">
                  <CardContent className="p-6">
                    <Clock className="h-8 w-8 text-chart-3 mb-3" />
                    <p className="text-3xl font-bold">~{totalHours}h</p>
                    <p className="text-sm text-muted-foreground">Total Content</p>
                  </CardContent>
                </Card>
                <Card className="border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 to-transparent">
                  <CardContent className="p-6">
                    <Target className="h-8 w-8 text-emerald-500 mb-3" />
                    <p className="text-3xl font-bold">100%</p>
                    <p className="text-sm text-muted-foreground">Open Source</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* What is the EU AI Act - Overview */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <Badge variant="outline" className="mb-4">Overview</Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What is the EU AI Act?</h2>
              <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
                The EU AI Act (Regulation 2024/1689) is a comprehensive regulatory framework that establishes
                harmonized rules for the development, deployment, and use of AI systems within the European Union.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 mb-2">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Risk-Based Approach</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    The AI Act categorizes AI systems into four risk levels: prohibited, high-risk, limited risk,
                    and minimal risk. Requirements are proportional to the level of risk.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-accent/20 bg-gradient-to-br from-accent/5 to-transparent">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 mb-2">
                    <Users className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle>Who Must Comply?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Providers, deployers, importers, and distributors of AI systems in the EU market must comply,
                    regardless of where they are established. This includes non-EU companies.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-chart-3/20 bg-gradient-to-br from-chart-3/5 to-transparent">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-chart-3/10 mb-2">
                    <Building2 className="h-6 w-6 text-chart-3" />
                  </div>
                  <CardTitle>Enforcement</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    National authorities will enforce the regulation. Penalties can reach up to €35 million or
                    7% of global annual turnover for the most serious violations.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Risk Classification Pyramid */}
        <section className="relative overflow-hidden py-16 sm:py-24">
          <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <Badge variant="outline" className="mb-4 border-chart-3/30 bg-chart-3/5 text-chart-3">
                Risk Categories
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">AI Risk Classification</h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                The EU AI Act uses a risk-based approach. Different requirements apply based on the risk level of your AI system.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {riskCategories.map((category) => (
                <Card
                  key={category.level}
                  className={cn(
                    "relative overflow-hidden transition-all hover:shadow-lg",
                    category.color === "destructive" && "border-destructive/30 hover:border-destructive/50",
                    category.color === "chart-3" && "border-chart-3/30 hover:border-chart-3/50",
                    category.color === "primary" && "border-primary/30 hover:border-primary/50",
                    category.color === "accent" && "border-accent/30 hover:border-accent/50"
                  )}
                >
                  <div
                    className={cn(
                      "absolute top-0 left-0 right-0 h-1",
                      category.color === "destructive" && "bg-destructive",
                      category.color === "chart-3" && "bg-chart-3",
                      category.color === "primary" && "bg-primary",
                      category.color === "accent" && "bg-accent"
                    )}
                  />
                  <CardHeader className="pb-2">
                    <div
                      className={cn(
                        "flex h-10 w-10 items-center justify-center rounded-lg mb-2",
                        category.color === "destructive" && "bg-destructive/10",
                        category.color === "chart-3" && "bg-chart-3/10",
                        category.color === "primary" && "bg-primary/10",
                        category.color === "accent" && "bg-accent/10"
                      )}
                    >
                      <category.icon
                        className={cn(
                          "h-5 w-5",
                          category.color === "destructive" && "text-destructive",
                          category.color === "chart-3" && "text-chart-3",
                          category.color === "primary" && "text-primary",
                          category.color === "accent" && "text-accent"
                        )}
                      />
                    </div>
                    <CardTitle className="text-lg">{category.level}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">{category.description}</p>
                    <div className="space-y-1">
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Examples:</p>
                      <ul className="text-sm space-y-1">
                        {category.examples.map((example) => (
                          <li key={example} className="flex items-center gap-2">
                            <div
                              className={cn(
                                "h-1.5 w-1.5 rounded-full",
                                category.color === "destructive" && "bg-destructive",
                                category.color === "chart-3" && "bg-chart-3",
                                category.color === "primary" && "bg-primary",
                                category.color === "accent" && "bg-accent"
                              )}
                            />
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <Badge variant="outline" className="mb-4 gap-1.5 border-destructive/30 bg-destructive/5 text-destructive">
                <Clock className="h-3.5 w-3.5" />
                Time-Sensitive Deadlines
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Key Compliance Dates</h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                The EU AI Act has a phased implementation timeline. Know what deadlines apply to you.
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-primary to-muted hidden md:block" />

              <div className="space-y-6">
                {timelineMilestones.map((milestone) => (
                  <div key={milestone.date} className="relative flex gap-6 md:gap-8">
                    {/* Timeline dot */}
                    <div className="hidden md:flex flex-col items-center">
                      <div
                        className={cn(
                          "z-10 flex h-16 w-16 items-center justify-center rounded-full border-4",
                          milestone.status === "complete"
                            ? "border-accent bg-accent text-accent-foreground"
                            : milestone.status === "upcoming"
                              ? "border-primary bg-primary text-primary-foreground"
                              : "border-muted bg-muted text-muted-foreground"
                        )}
                      >
                        {milestone.status === "complete" ? (
                          <CheckCircle2 className="h-6 w-6" />
                        ) : milestone.status === "upcoming" ? (
                          <Clock className="h-6 w-6" />
                        ) : (
                          <Calendar className="h-6 w-6" />
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <Card
                      className={cn(
                        "flex-1",
                        milestone.status === "complete"
                          ? "border-accent/30 bg-accent/5"
                          : milestone.status === "upcoming"
                            ? "border-primary/30 bg-primary/5"
                            : "border-muted"
                      )}
                    >
                      <CardContent className="p-6">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <Badge
                            variant={milestone.status === "complete" ? "default" : "outline"}
                            className={cn(
                              milestone.status === "complete"
                                ? "bg-accent text-accent-foreground"
                                : milestone.status === "upcoming"
                                  ? "border-primary text-primary"
                                  : ""
                            )}
                          >
                            {milestone.status === "complete"
                              ? "Completed"
                              : milestone.status === "upcoming"
                                ? "Upcoming"
                                : "Future"}
                          </Badge>
                          <span className="text-sm font-medium text-muted-foreground">{milestone.date}</span>
                        </div>
                        <h3 className="text-xl font-semibold">{milestone.title}</h3>
                        <p className="mt-1 text-muted-foreground">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Learning Modules */}
        <section id="modules" className="relative overflow-hidden py-16 sm:py-24">
          <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <Badge variant="outline" className="mb-4 border-primary/30 bg-primary/5 text-primary">
                <GraduationCap className="mr-1 h-3 w-3" />
                Training
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Learning Modules</h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Complete these {modules.length} comprehensive modules to master EU AI Act compliance.
                Each module includes lessons, quizzes, and practical guidance.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {displayModules.map((module, index) => (
                <div key={module.slug} className="relative">
                  <Badge
                    className="absolute -top-3 -left-3 z-10 h-8 w-8 rounded-full flex items-center justify-center bg-primary text-primary-foreground"
                  >
                    {index + 1}
                  </Badge>
                  <ModuleCard {...module} />
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button size="lg" className="shadow-lg shadow-primary/25" asChild>
                <Link href={`/understand/modules/${displayModules[0]?.slug}`}>
                  Start with Module 1
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Key Concepts */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-chart-3/10">
                <Lightbulb className="h-5 w-5 text-chart-3" />
              </div>
              <div>
                <h2 className="text-2xl font-bold tracking-tight">Key Concepts</h2>
                <p className="text-muted-foreground">Essential terms and definitions you need to know.</p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  term: "AI System",
                  definition:
                    "A machine-based system designed to operate with varying levels of autonomy and generate outputs such as predictions, recommendations, or decisions.",
                  icon: Cpu,
                  color: "primary",
                },
                {
                  term: "Provider",
                  definition:
                    "A natural or legal person that develops an AI system or has one developed and places it on the market or puts it into service under its own name.",
                  icon: Building2,
                  color: "accent",
                },
                {
                  term: "Deployer",
                  definition:
                    "A natural or legal person using an AI system under their authority, except for personal non-professional activity.",
                  icon: Users,
                  color: "chart-3",
                },
                {
                  term: "High-Risk AI",
                  definition:
                    "AI systems that pose significant risks to health, safety, or fundamental rights and require strict compliance measures.",
                  icon: AlertTriangle,
                  color: "destructive",
                },
                {
                  term: "GPAI",
                  definition:
                    "General-purpose AI models capable of performing a wide range of tasks, subject to specific transparency requirements.",
                  icon: Cpu,
                  color: "primary",
                },
                {
                  term: "Conformity Assessment",
                  definition:
                    "The process of demonstrating that a high-risk AI system meets the requirements of the EU AI Act.",
                  icon: ShieldCheck,
                  color: "accent",
                },
              ].map((concept) => (
                <Card
                  key={concept.term}
                  className={cn(
                    "transition-all hover:shadow-lg",
                    concept.color === "primary" && "border-primary/20 bg-gradient-to-br from-primary/5 to-transparent",
                    concept.color === "accent" && "border-accent/20 bg-gradient-to-br from-accent/5 to-transparent",
                    concept.color === "chart-3" && "border-chart-3/20 bg-gradient-to-br from-chart-3/5 to-transparent",
                    concept.color === "destructive" && "border-destructive/20 bg-gradient-to-br from-destructive/5 to-transparent"
                  )}
                >
                  <CardHeader className="pb-2">
                    <div
                      className={cn(
                        "flex h-8 w-8 items-center justify-center rounded-lg mb-2",
                        concept.color === "primary" && "bg-primary/10",
                        concept.color === "accent" && "bg-accent/10",
                        concept.color === "chart-3" && "bg-chart-3/10",
                        concept.color === "destructive" && "bg-destructive/10"
                      )}
                    >
                      <concept.icon
                        className={cn(
                          "h-4 w-4",
                          concept.color === "primary" && "text-primary",
                          concept.color === "accent" && "text-accent",
                          concept.color === "chart-3" && "text-chart-3",
                          concept.color === "destructive" && "text-destructive"
                        )}
                      />
                    </div>
                    <CardTitle
                      className={cn(
                        "text-base",
                        concept.color === "primary" && "text-primary",
                        concept.color === "accent" && "text-accent",
                        concept.color === "chart-3" && "text-chart-3",
                        concept.color === "destructive" && "text-destructive"
                      )}
                    >
                      {concept.term}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">{concept.definition}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="relative overflow-hidden py-16 sm:py-24">
          <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-2xl font-bold tracking-tight">Additional Resources</h2>
              <p className="mt-2 text-muted-foreground">Supplementary materials to deepen your understanding.</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {resources.map((resource) => (
                <Card
                  key={resource.title}
                  className="group cursor-pointer border-border/50 transition-all hover:border-primary/30 hover:shadow-lg"
                >
                  <Link href={resource.href} target={resource.href.startsWith("http") ? "_blank" : undefined}>
                    <CardContent className="p-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-all group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/25">
                        <resource.icon className="h-6 w-6 text-primary transition-colors group-hover:text-primary-foreground" />
                      </div>
                      <Badge variant="outline" className="mt-4 text-xs">
                        {resource.type}
                      </Badge>
                      <h3 className="mt-2 font-semibold flex items-center gap-1">
                        {resource.title}
                        {resource.href.startsWith("http") && (
                          <ExternalLink className="h-3 w-3 text-muted-foreground" />
                        )}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">{resource.description}</p>
                    </CardContent>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Next Step CTA */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-accent/30 bg-gradient-to-r from-accent/10 to-transparent p-8 sm:flex-row">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent text-accent-foreground shadow-lg shadow-accent/25">
                  <CheckCircle2 className="h-7 w-7" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Ready for the next step?</p>
                  <p className="text-lg font-bold">Assess your AI systems for compliance</p>
                </div>
              </div>
              <Button
                size="lg"
                className="bg-accent text-accent-foreground shadow-lg shadow-accent/25 hover:bg-accent/90"
                asChild
              >
                <Link href="/assess">
                  Continue to Assess
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
