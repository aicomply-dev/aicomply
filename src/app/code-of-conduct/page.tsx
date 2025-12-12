import { NavWithAuth } from "@/components/nav-with-auth"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Users, Heart, MessageSquare, Shield, AlertTriangle } from "lucide-react"

export default function CodeOfConductPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <NavWithAuth />

      <main className="flex-1">
        <section className="relative overflow-hidden py-16 sm:py-24">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />

          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4 gap-2 border-primary/30 bg-primary/5 px-4 py-1.5 text-primary">
                <Users className="h-3.5 w-3.5" />
                Code of Conduct
              </Badge>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Contributor Code of Conduct</h1>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                Our pledge to foster an open and welcoming community.
              </p>
            </div>

            <div className="prose prose-gray dark:prose-invert max-w-none">
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Heart className="h-5 w-5 text-primary" />
                  Our Pledge
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  In the interest of fostering an open and welcoming environment, we as contributors and maintainers
                  pledge to make participation in our project and our community a harassment-free experience for
                  everyone, regardless of age, body size, disability, ethnicity, sex characteristics, gender identity
                  and expression, level of experience, education, socio-economic status, nationality, personal
                  appearance, race, religion, or sexual identity and orientation.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Shield className="h-5 w-5 text-emerald-500" />
                  Our Standards
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Examples of behavior that contributes to creating a positive environment include:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                  <li>Using welcoming and inclusive language</li>
                  <li>Being respectful of differing viewpoints and experiences</li>
                  <li>Gracefully accepting constructive criticism</li>
                  <li>Focusing on what is best for the community</li>
                  <li>Showing empathy towards other community members</li>
                </ul>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  Examples of unacceptable behavior include:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>The use of sexualized language or imagery and unwelcome sexual attention or advances</li>
                  <li>Trolling, insulting/derogatory comments, and personal or political attacks</li>
                  <li>Public or private harassment</li>
                  <li>Publishing others&apos; private information without explicit permission</li>
                  <li>Other conduct which could reasonably be considered inappropriate in a professional setting</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-blue-500" />
                  Our Responsibilities
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Project maintainers are responsible for clarifying the standards of acceptable behavior and are
                  expected to take appropriate and fair corrective action in response to any instances of unacceptable
                  behavior. Project maintainers have the right and responsibility to remove, edit, or reject comments,
                  commits, code, wiki edits, issues, and other contributions that are not aligned to this Code of
                  Conduct, or to ban temporarily or permanently any contributor for other behaviors that they deem
                  inappropriate, threatening, offensive, or harmful.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Scope</h2>
                <p className="text-muted-foreground leading-relaxed">
                  This Code of Conduct applies within all project spaces, and it also applies when an individual is
                  representing the project or its community in public spaces. Examples of representing a project or
                  community include using an official project e-mail address, posting via an official social media
                  account, or acting as an appointed representative at an online or offline event.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-amber-500" />
                  Enforcement
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Instances of abusive, harassing, or otherwise unacceptable behavior may be reported by opening an
                  issue or contacting the project maintainers. All complaints will be reviewed and investigated and
                  will result in a response that is deemed necessary and appropriate to the circumstances. The project
                  team is obligated to maintain confidentiality with regard to the reporter of an incident.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Project maintainers who do not follow or enforce the Code of Conduct in good faith may face temporary
                  or permanent repercussions as determined by other members of the project&apos;s leadership.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Attribution</h2>
                <p className="text-muted-foreground leading-relaxed">
                  This Code of Conduct is adapted from the{" "}
                  <a
                    href="https://www.contributor-covenant.org/version/1/4/code-of-conduct.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Contributor Covenant, version 1.4
                  </a>.
                </p>
              </section>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
