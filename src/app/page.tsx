import { NavWithAuth } from "@/components/nav-with-auth"
import { Footer } from "@/components/footer"
import { JourneyStep } from "@/components/journey-step"
import { Timeline } from "@/components/timeline"
import { RiskPyramid } from "@/components/risk-pyramid"
import { RolesDiagram } from "@/components/roles-diagram"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  BookOpen,
  ClipboardCheck,
  Cog,
  FileCheck,
  Shield,
  Building2,
  Scale,
  Sparkles,
  Github,
  Clock,
  Users,
} from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <NavWithAuth />

      <main className="flex-1">
        <section className="relative overflow-hidden">
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

          {/* Floating orbs for visual interest */}
          <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -right-40 top-40 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
            <div className="mx-auto max-w-3xl text-center">
              {/* Open source badge */}
              <Badge variant="outline" className="mb-6 gap-2 border-primary/30 bg-primary/5 px-4 py-1.5 text-primary">
                <Sparkles className="h-3.5 w-3.5" />
                Open Source EU AI Act Compliance
              </Badge>

              <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
                Navigate AI compliance
                <span className="mt-2 block bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
                  with confidence
                </span>
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground sm:text-xl">
                Your complete open-source platform for understanding, assessing, and implementing EU AI Act
                compliance. Built for organizations of all sizes.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button size="lg" className="h-12 px-8 shadow-lg shadow-primary/25" asChild>
                  <Link href="/understand">
                    Start Your Journey
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="h-12 px-8 bg-transparent" asChild>
                  <a href="https://github.com/aicomply-dev/aicomply" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View on GitHub
                  </a>
                </Button>
              </div>

              {/* License indicator */}
              <div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <span>MIT License</span>
              </div>
            </div>
          </div>

          {/* Bottom gradient fade */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
        </section>

        {/* Journey Steps - Added colorful cards */}
        <section className="relative py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <Badge variant="outline" className="mb-4 border-primary/30 bg-primary/5 text-primary">
                3-Step Journey
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Your path to compliance</h2>
              <p className="mt-4 text-muted-foreground">
                Follow our structured approach to achieve and maintain EU AI Act compliance.
              </p>
            </div>

            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
              <JourneyStep
                step={1}
                title="Understand"
                description="Learn the fundamentals of the EU AI Act, key definitions, and how it applies to your AI systems."
                href="/understand"
                icon={<BookOpen className="h-5 w-5" />}
                color="indigo"
              />
              <JourneyStep
                step={2}
                title="Assess"
                description="Evaluate your AI systems against risk classifications and identify compliance gaps."
                href="/assess"
                icon={<ClipboardCheck className="h-5 w-5" />}
                color="teal"
              />
              <JourneyStep
                step={3}
                title="Implement"
                description="Apply required technical and organizational measures to achieve compliance."
                href="/implement"
                icon={<Cog className="h-5 w-5" />}
                color="amber"
              />
            </div>
          </div>
        </section>

        {/* Timeline Section - Updated with new header design */}
        <section className="relative overflow-hidden py-24 sm:py-32">
          <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-background" />

          {/* Decorative elements */}
          <div className="absolute left-1/4 top-20 h-64 w-64 rounded-full bg-destructive/5 blur-3xl" />
          <div className="absolute right-1/4 bottom-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <Badge variant="outline" className="mb-4 gap-1.5 border-destructive/30 bg-destructive/5 text-destructive">
                <Clock className="h-3.5 w-3.5" />
                Time-Sensitive Deadlines
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Don't miss critical
                <span className="block mt-1 bg-gradient-to-r from-destructive via-primary to-accent bg-clip-text text-transparent">
                  compliance deadlines
                </span>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                The EU AI Act enforcement happens in phases. Know what's coming and when you need to be ready.
              </p>
            </div>

            <Timeline />
          </div>
        </section>

        {/* Risk Classification */}
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <Badge variant="outline" className="mb-4 border-amber-500/30 bg-amber-500/5 text-amber-600">
                Risk Classification
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Understand your risk level</h2>
              <p className="mt-4 text-muted-foreground">
                The EU AI Act classifies AI systems into four risk categories, each with different requirements.
              </p>
            </div>

            <div className="mt-16">
              <RiskPyramid />
            </div>
          </div>
        </section>

        {/* Role Classification */}
        <section className="relative overflow-hidden py-24 sm:py-32">
          <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-background" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <Badge variant="outline" className="mb-4 gap-1.5 border-primary/30 bg-primary/5 text-primary">
                <Users className="h-3.5 w-3.5" />
                Supply Chain Roles
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Understand your role</h2>
              <p className="mt-4 text-muted-foreground">
                The EU AI Act defines specific roles in the AI supply chain, each with distinct obligations and responsibilities.
              </p>
            </div>

            <div className="mt-16">
              <RolesDiagram />
            </div>
          </div>
        </section>

        {/* Who It's For */}
        <section className="relative overflow-hidden py-24 sm:py-32">
          <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-background" />

          {/* Decorative elements */}
          <div className="absolute left-1/4 top-20 h-64 w-64 rounded-full bg-accent/5 blur-3xl" />
          <div className="absolute right-1/4 bottom-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <Badge variant="outline" className="mb-4 gap-1.5 border-accent/30 bg-accent/5 text-accent">
                <Users className="h-3.5 w-3.5" />
                Built For You
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Who uses AI Comply?</h2>
              <p className="mt-4 text-muted-foreground">
                Designed for teams across your organization who need to understand, assess, and implement EU AI Act compliance.
              </p>
            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-3">
              {[
                {
                  icon: Shield,
                  title: "Compliance Teams",
                  description:
                    "Streamline your compliance workflows with structured assessments, automated documentation, and clear audit trails.",
                  color: "primary",
                },
                {
                  icon: Scale,
                  title: "Legal & Risk Officers",
                  description:
                    "Navigate regulatory requirements with confidence. Get clear guidance on obligations and generate audit-ready documentation.",
                  color: "accent",
                },
                {
                  icon: Building2,
                  title: "CTOs & Tech Leaders",
                  description:
                    "Make informed decisions about AI governance. Understand technical requirements and implementation strategies.",
                  color: "chart-3",
                },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <Card
                    key={item.title}
                    className="group relative overflow-hidden border-border/50 transition-all hover:border-border hover:shadow-xl"
                  >
                    <CardContent className="p-8">
                      <div
                        className={cn(
                          "flex h-14 w-14 items-center justify-center rounded-xl transition-transform group-hover:scale-110",
                          item.color === "primary" && "bg-primary/10 text-primary",
                          item.color === "accent" && "bg-accent/10 text-accent",
                          item.color === "chart-3" && "bg-chart-3/10 text-chart-3"
                        )}
                      >
                        <Icon className="h-7 w-7" />
                      </div>
                      <h3 className="mt-6 text-xl font-bold">{item.title}</h3>
                      <p className="mt-3 text-muted-foreground leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section - Vibrant gradient CTA */}
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-indigo-600 px-8 py-16 shadow-2xl sm:px-16 sm:py-24">
              {/* Pattern overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#fff1_1px,transparent_1px),linear-gradient(to_bottom,#fff1_1px,transparent_1px)] bg-[size:24px_24px]" />

              <div className="relative mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Ready to start your compliance journey?
                </h2>
                <p className="mt-4 text-lg text-white/80">
                  Join hundreds of organizations already using AI Comply to navigate EU AI Act compliance.
                </p>
                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Button size="lg" variant="secondary" className="h-12 px-8 shadow-lg" asChild>
                    <Link href="/understand">
                      Get Started Free
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
