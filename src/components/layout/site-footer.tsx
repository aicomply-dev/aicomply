import Link from "next/link"
import { Shield } from "lucide-react"

const learnLinks = [
  { href: "/understand", label: "Modules" },
  { href: "/resources/regulation", label: "Regulation" },
  { href: "/resources/glossary", label: "Glossary" },
  { href: "/resources/faq", label: "FAQ" },
]

const toolLinks = [
  { href: "/assess/classification", label: "Classification" },
  { href: "/implement/standards", label: "Standards" },
  { href: "/implement/guides", label: "Guides" },
]

const projectLinks = [
  { href: "https://github.com/ai-comply/ai-act-platform", label: "GitHub", external: true },
  { href: "https://github.com/ai-comply/ai-act-platform/blob/main/CONTRIBUTING.md", label: "Contributing", external: true },
  { href: "/changelog", label: "Changelog" },
  { href: "/docs", label: "Docs" },
]

function FooterColumn({
  title,
  links,
}: {
  title: string
  links: { href: string; label: string; external?: boolean }[]
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-foreground">{title}</h3>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            {link.external ? (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ) : (
              <Link
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export function SiteFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-bold tracking-tight text-foreground">
              <Shield className="size-5 text-primary" />
              <span>AI Comply</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Open-source EU AI Act compliance platform. Learn, assess, and implement with confidence.
            </p>
          </div>

          {/* Link columns */}
          <FooterColumn title="Learn" links={learnLinks} />
          <FooterColumn title="Tools" links={toolLinks} />
          <FooterColumn title="Project" links={projectLinks} />
        </div>

        {/* Bottom row */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-sm text-muted-foreground sm:flex-row">
          <p>&copy; {new Date().getFullYear()} AI Comply. MIT License.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="transition-colors hover:text-foreground">
              Privacy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-foreground">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
