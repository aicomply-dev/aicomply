import Link from "next/link"
import { Sparkles, Github, Twitter, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative border-t border-border/50 bg-muted/50">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary/70">
                <Sparkles className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold">AI Comply</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Open-source EU AI Act compliance platform. Built by the community, for the community.
            </p>
            <div className="mt-6 flex items-center gap-3">
                      <a
                        href="https://github.com/aicomply-dev/aicomply"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-9 w-9 items-center justify-center rounded-lg bg-foreground/5 text-muted-foreground transition-colors hover:bg-foreground/10 hover:text-foreground"
                        aria-label="GitHub"
                      >
                        <Github className="h-4 w-4" />
                      </a>
              <a
                href="https://www.linkedin.com/in/danielm7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-foreground/5 text-muted-foreground transition-colors hover:bg-foreground/10 hover:text-foreground"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://x.com/mndaniel78"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-foreground/5 text-muted-foreground transition-colors hover:bg-foreground/10 hover:text-foreground"
                aria-label="X (Twitter)"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Platform</h4>
            <ul className="mt-4 space-y-3">
              {["Understand", "Assess", "Implement", "Deliver"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Resources</h4>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/docs" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/changelog" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Changelog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Community</h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="https://github.com/aicomply-dev/aicomply/discussions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  GitHub Discussions
                </a>
              </li>
              <li>
                <Link href="/contributing" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Contributing
                </Link>
              </li>
              <li>
                <Link href="/code-of-conduct" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Code of Conduct
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} AI Comply Contributors. Open source under MIT License.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-sm text-muted-foreground transition-colors hover:text-primary">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground transition-colors hover:text-primary">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
