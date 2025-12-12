import { NavWithAuth } from "@/components/nav-with-auth"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { History, Sparkles, Bug, Wrench, Plus } from "lucide-react"

const changelog = [
  {
    version: "0.1.0",
    date: "December 2024",
    title: "Initial Release",
    description: "First public release of AI Comply platform.",
    changes: [
      { type: "feature", text: "Learning modules covering EU AI Act fundamentals" },
      { type: "feature", text: "AI system risk classification assessment tool" },
      { type: "feature", text: "Role identification (Provider, Deployer, Importer, Distributor)" },
      { type: "feature", text: "Compliance requirements mapping" },
      { type: "feature", text: "Implementation templates and procedures" },
      { type: "feature", text: "Documentation and report generation" },
      { type: "feature", text: "Full EU AI Act text with annotations" },
      { type: "feature", text: "Glossary of key terms and definitions" },
    ],
  },
]

function ChangeIcon({ type }: { type: string }) {
  switch (type) {
    case "feature":
      return <Plus className="h-3.5 w-3.5 text-emerald-500" />
    case "fix":
      return <Bug className="h-3.5 w-3.5 text-amber-500" />
    case "improvement":
      return <Wrench className="h-3.5 w-3.5 text-blue-500" />
    default:
      return <Sparkles className="h-3.5 w-3.5 text-primary" />
  }
}

export default function ChangelogPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <NavWithAuth />

      <main className="flex-1">
        <section className="relative overflow-hidden py-16 sm:py-24">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />

          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4 gap-2 border-primary/30 bg-primary/5 px-4 py-1.5 text-primary">
                <History className="h-3.5 w-3.5" />
                Changelog
              </Badge>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Changelog</h1>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                Track the evolution of AI Comply. All notable changes to this project are documented here.
              </p>
            </div>

            <div className="space-y-12">
              {changelog.map((release) => (
                <div key={release.version} className="relative">
                  <div className="flex items-center gap-4 mb-4">
                    <Badge variant="secondary" className="text-sm font-mono">
                      v{release.version}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{release.date}</span>
                  </div>

                  <div className="rounded-lg border border-border bg-card p-6">
                    <h2 className="text-xl font-semibold mb-2">{release.title}</h2>
                    <p className="text-muted-foreground mb-6">{release.description}</p>

                    <ul className="space-y-3">
                      {release.changes.map((change, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="mt-0.5">
                            <ChangeIcon type={change.type} />
                          </div>
                          <span className="text-sm text-muted-foreground">{change.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-sm text-muted-foreground">
                For the complete commit history, visit our{" "}
                <a
                  href="https://github.com/aicomply-dev/aicomply/commits/main"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  GitHub repository
                </a>.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
