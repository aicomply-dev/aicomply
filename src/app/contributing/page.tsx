import { NavWithAuth } from "@/components/nav-with-auth"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, GitPullRequest, Bug, BookOpen, MessageSquare, Code } from "lucide-react"

export default function ContributingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <NavWithAuth />

      <main className="flex-1">
        <section className="relative overflow-hidden py-16 sm:py-24">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />

          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4 gap-2 border-primary/30 bg-primary/5 px-4 py-1.5 text-primary">
                <Heart className="h-3.5 w-3.5" />
                Contributing
              </Badge>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Contributing to AI Comply</h1>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                AI Comply is an open-source project and we welcome contributions from the community.
                Here&apos;s how you can help make EU AI Act compliance accessible to everyone.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 mb-12">
              <Card>
                <CardHeader>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 mb-2">
                    <Bug className="h-5 w-5" />
                  </div>
                  <CardTitle>Report Issues</CardTitle>
                  <CardDescription>
                    Found a bug or have a suggestion? Open an issue on GitHub to let us know.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <a
                    href="https://github.com/aicomply-dev/aicomply/issues/new"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline"
                  >
                    Create an issue →
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/10 text-violet-600 mb-2">
                    <GitPullRequest className="h-5 w-5" />
                  </div>
                  <CardTitle>Submit Pull Requests</CardTitle>
                  <CardDescription>
                    Ready to contribute code? Fork the repository and submit a pull request.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <a
                    href="https://github.com/aicomply-dev/aicomply/pulls"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline"
                  >
                    View pull requests →
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10 text-amber-600 mb-2">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <CardTitle>Improve Content</CardTitle>
                  <CardDescription>
                    Help improve the learning modules, documentation, or add translations.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <a
                    href="https://github.com/aicomply-dev/aicomply/tree/main/src/content"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline"
                  >
                    Browse content →
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-600 mb-2">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <CardTitle>Join Discussions</CardTitle>
                  <CardDescription>
                    Participate in discussions about features, roadmap, and EU AI Act interpretations.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <a
                    href="https://github.com/aicomply-dev/aicomply/discussions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline"
                  >
                    Join the conversation →
                  </a>
                </CardContent>
              </Card>
            </div>

            <div className="prose prose-gray dark:prose-invert max-w-none">
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Code className="h-5 w-5" />
                  Development Setup
                </h2>
                <div className="rounded-lg border border-border bg-muted/30 p-4 font-mono text-sm">
                  <p className="text-muted-foreground mb-2"># Clone the repository</p>
                  <p className="mb-4">git clone https://github.com/aicomply-dev/aicomply.git</p>
                  <p className="text-muted-foreground mb-2"># Install dependencies</p>
                  <p className="mb-4">npm install</p>
                  <p className="text-muted-foreground mb-2"># Start development server</p>
                  <p>npm run dev</p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Contribution Guidelines</h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Fork the repository and create a new branch for your feature or fix</li>
                  <li>Write clear, descriptive commit messages</li>
                  <li>Ensure your code follows the existing style and conventions</li>
                  <li>Test your changes thoroughly before submitting</li>
                  <li>Update documentation if your changes affect user-facing features</li>
                  <li>Be respectful and follow our Code of Conduct</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Areas Where Help is Needed</h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong>Regulatory Expertise:</strong> Review and improve the accuracy of compliance assessments</li>
                  <li><strong>UI/UX Design:</strong> Help improve the user experience and accessibility</li>
                  <li><strong>Translations:</strong> Help make the platform available in more EU languages</li>
                  <li><strong>Testing:</strong> Help identify bugs and edge cases</li>
                  <li><strong>Documentation:</strong> Improve guides and explanations</li>
                </ul>
              </section>
            </div>

            <div className="mt-8 rounded-lg border border-primary/20 bg-primary/5 p-6 text-center">
              <Heart className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Thank You!</h3>
              <p className="text-sm text-muted-foreground">
                Every contribution, no matter how small, helps make EU AI Act compliance more accessible.
                We appreciate your support!
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
