import Link from "next/link"
import {
  ArrowRight,
  BookOpen,
  ClipboardCheck,
  Github,
  Settings,
  Sparkles,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { webApplicationJsonLd } from "@/lib/structured-data"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const pillars = [
  {
    icon: BookOpen,
    title: "Learn the AI Act",
    description:
      "Five interactive modules covering the regulation from fundamentals to advanced compliance. Master key concepts at your own pace.",
    href: "/understand",
    cta: "Start Learning",
  },
  {
    icon: ClipboardCheck,
    title: "Classify Your Systems",
    description:
      "Determine the risk level of your AI systems with our guided classification tool. Understand your obligations clearly.",
    href: "/assess",
    cta: "Assess Now",
  },
  {
    icon: Settings,
    title: "Build Compliance",
    description:
      "Access standards, policies, and implementation guides tailored to your risk level. Turn requirements into action.",
    href: "/implement",
    cta: "Get Started",
  },
]

const stats = [
  { value: "5", label: "Learning Modules", description: "Interactive courses" },
  { value: "14", label: "Standards", description: "Implementation guides" },
  { value: "237+", label: "Implementation Guides", description: "Procedures & templates" },
  { value: "Free", label: "& Open Source", description: "MIT licensed" },
]

export default function HomePage() {
  const jsonLd = webApplicationJsonLd()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground">
              <Sparkles className="size-4" />
              Open-source compliance platform
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              EU AI Act Compliance{" "}
              <span className="text-primary">Made Simple</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
              The complete toolkit to understand the EU AI Act, classify your AI
              systems, and implement compliance frameworks — all in one place.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" variant="outline" asChild>
                <Link href="/understand">
                  Start Learning
                  <BookOpen className="ml-2 size-4" />
                </Link>
              </Button>
              <Button size="lg" asChild>
                <Link href="/assess/classification">
                  Assess Your Systems
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Three pillars */}
      <section className="bg-secondary/50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Your Path to Compliance
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Three steps to navigate the EU AI Act with confidence.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((pillar) => (
              <Card
                key={pillar.title}
                className="group relative transition-shadow hover:shadow-md"
              >
                <CardHeader>
                  <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <pillar.icon className="size-5" />
                  </div>
                  <CardTitle className="text-lg">{pillar.title}</CardTitle>
                  <CardDescription className="leading-relaxed">
                    {pillar.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link
                    href={pillar.href}
                    className="inline-flex items-center text-sm font-medium text-primary transition-colors hover:text-primary/80"
                  >
                    {pillar.cta}
                    <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key numbers */}
      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm font-semibold text-foreground">
                  {stat.label}
                </p>
                <p className="mt-0.5 text-sm text-muted-foreground">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open source CTA */}
      <section className="bg-secondary/50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Built for the Community
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              AI Comply is open source and free to use. We believe compliance
              tooling should be accessible to everyone building with AI in Europe
              — from startups to enterprises.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button variant="outline" size="lg" asChild>
                <a
                  href="https://github.com/ai-comply/ai-act-platform"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 size-4" />
                  View on GitHub
                </a>
              </Button>
              <Button size="lg" asChild>
                <Link href="/understand">
                  Get Started
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
