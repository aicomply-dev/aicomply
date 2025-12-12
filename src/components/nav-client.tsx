"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  Menu,
  X,
  Sparkles,
  Github,
  BookOpen,
  ClipboardCheck,
  Cog,
  HelpCircle,
  ChevronDown,
  GraduationCap,
  BookMarked,
  MessageCircleQuestion,
  Database,
  FileSearch,
  Scale,
  TrendingUp,
  FileText,
  ShieldCheck,
  Compass,
  FileCode,
  ScrollText,
  UserCheck,
} from "lucide-react"
import { useState, useRef, useEffect } from "react"

const journeySteps = [
  {
    label: "Understand",
    href: "/understand",
    icon: BookOpen,
    color: "from-indigo-500 to-violet-500",
    bgColor: "bg-indigo-500/10",
    textColor: "text-indigo-600",
    description: "Learn the EU AI Act fundamentals",
    items: [
      {
        href: "/understand/modules",
        label: "Learning Modules",
        description: "Interactive courses",
        icon: GraduationCap,
      },
      { href: "/resources/global-regulations", label: "Global Regulations", description: "Compare frameworks", icon: Scale },
      { href: "/resources/regulation", label: "EU AI Act Text", description: "Full regulation", icon: ScrollText },
      { href: "/resources/glossary", label: "Glossary", description: "Key definitions", icon: BookMarked },
      { href: "/resources/faq", label: "FAQ", description: "Common questions", icon: MessageCircleQuestion },
    ],
  },
  {
    label: "Assess",
    href: "/assess",
    icon: ClipboardCheck,
    color: "from-teal-500 to-emerald-500",
    bgColor: "bg-teal-500/10",
    textColor: "text-teal-600",
    description: "Evaluate your AI systems",
    items: [
      { href: "/assess/inventory", label: "1. Register", description: "Catalog systems", icon: Database },
      { href: "/assess/classification", label: "2. Classify", description: "Risk & Role", icon: Scale },
      { href: "/assess/requirements", label: "3. Requirements", description: "View obligations", icon: FileText },
      { href: "/assess/comply", label: "4. Comply", description: "Close gaps", icon: TrendingUp },
      { href: "/assess/monitor", label: "5. Monitor", description: "Track status", icon: ShieldCheck },
    ],
  },
  {
    label: "Implement",
    href: "/implement",
    icon: Cog,
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-500/10",
    textColor: "text-amber-600",
    description: "Build compliance controls",
    items: [
      { href: "/implement/policies", label: "Policies", description: "Governance docs", icon: FileText },
      { href: "/implement/standards", label: "Standards", description: "Technical specs", icon: ShieldCheck },
      { href: "/implement/controls", label: "Controls", description: "Control library", icon: FileSearch },
      { href: "/implement/procedures", label: "Procedures", description: "Compliance documents", icon: Compass },
      { href: "/implement/templates", label: "Templates", description: "Ready-to-use", icon: FileCode },
    ],
  },
  ]

function NavDropdown({
  item,
  isActive,
  isOpen,
  onOpen,
  onClose,
}: {
  item: (typeof journeySteps)[0]
  isActive: boolean
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}) {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    onOpen()
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      onClose()
    }, 150)
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  const Icon = item.icon

  return (
    <div
      ref={dropdownRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={cn(
          "group flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200",
          isActive
            ? `${item.bgColor} ${item.textColor}`
            : "text-foreground/70 hover:text-foreground hover:bg-secondary",
        )}
      >
        <span>{item.label}</span>
        <ChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-200", isOpen && "rotate-180")} />
      </button>

      <div
        className={cn(
          "absolute left-1/2 top-full z-50 pt-2 -translate-x-1/2 transition-all duration-200",
          isOpen
            ? "visible opacity-100 translate-y-0 pointer-events-auto"
            : "invisible opacity-0 -translate-y-2 pointer-events-none",
        )}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="w-[320px] overflow-hidden rounded-2xl border border-border/50 bg-card/95 p-2 shadow-xl shadow-black/10 backdrop-blur-xl">
          {/* Overview link with gradient accent */}
          <Link
            href={item.href}
            className={cn(
              "group flex items-center gap-3 rounded-xl p-3 transition-all duration-200",
              "bg-gradient-to-r hover:shadow-md",
              item.bgColor,
            )}
          >
            <div
              className={cn(
                "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br shadow-lg",
                item.color,
              )}
            >
              <Icon className="h-5 w-5 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <div className={cn("text-sm font-semibold", item.textColor)}>{item.label} Overview</div>
              <p className="text-xs text-muted-foreground truncate">{item.description}</p>
            </div>
          </Link>

          {/* Divider */}
          <div className="my-2 h-px bg-border/50" />

          {/* Sub-items with icons */}
          <div className="space-y-0.5">
            {item.items.map((subItem) => {
              const SubIcon = subItem.icon
              return (
                <Link
                  key={subItem.href}
                  href={subItem.href}
                  className="group flex items-center gap-3 rounded-xl p-2.5 transition-all duration-200 hover:bg-secondary"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-colors group-hover:bg-primary/10 group-hover:text-primary">
                    <SubIcon className="h-4 w-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      {subItem.label}
                    </div>
                    <p className="text-xs text-muted-foreground truncate">{subItem.description}</p>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

interface NavProps {
  userMenu?: React.ReactNode
}

export function Nav({ userMenu }: NavProps) {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const handleDropdownOpen = (href: string) => {
    setOpenDropdown(href)
  }

  const handleDropdownClose = () => {
    setOpenDropdown(null)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary via-primary to-accent shadow-lg shadow-primary/20 transition-transform duration-200 group-hover:scale-105">
            <Sparkles className="h-4.5 w-4.5 text-white" />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
              AI Comply
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          <Link
            href="/"
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-all duration-200",
              pathname === "/"
                ? "bg-primary/10 text-primary"
                : "text-foreground/70 hover:text-foreground hover:bg-secondary",
            )}
          >
            Home
          </Link>

          {journeySteps.map((item) => (
            <NavDropdown
              key={item.href}
              item={item}
              isActive={pathname.startsWith(item.href)}
              isOpen={openDropdown === item.href}
              onOpen={() => handleDropdownOpen(item.href)}
              onClose={handleDropdownClose}
            />
          ))}

          <Link
            href="/resources"
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-all duration-200",
              pathname.startsWith("/resources")
                ? "bg-primary/10 text-primary"
                : "text-foreground/70 hover:text-foreground hover:bg-secondary",
            )}
          >
            Resources
          </Link>
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full text-muted-foreground hover:text-foreground h-9 w-9"
            asChild
          >
            <a href="https://github.com/aicomply-dev/aicomply" target="_blank" rel="noopener noreferrer" title="GitHub">
              <Github className="h-4 w-4" />
            </a>
          </Button>
          {userMenu || (
            <Button
              size="sm"
              className="rounded-full bg-gradient-to-r from-primary to-primary/90 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-shadow"
              asChild
            >
              <Link href="/understand/modules">
                Get Started
              </Link>
            </Button>
          )}
        </div>

        {/* Mobile menu button */}
        <button
          className="inline-flex items-center justify-center rounded-xl p-2.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="absolute inset-x-0 top-full border-b border-border/50 bg-background/98 backdrop-blur-xl md:hidden">
          <nav className="mx-auto max-w-7xl p-4 space-y-6">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className={cn(
                "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                pathname === "/" ? "bg-primary/10 text-primary" : "text-foreground hover:bg-secondary",
              )}
            >
              Home
            </Link>

            {journeySteps.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.href} className="space-y-2">
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn("flex items-center gap-3 rounded-xl px-4 py-3 transition-colors", item.bgColor)}
                  >
                    <div
                      className={cn(
                        "flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br shadow-md",
                        item.color,
                      )}
                    >
                      <Icon className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <div className={cn("text-sm font-semibold", item.textColor)}>{item.label}</div>
                      <p className="text-xs text-muted-foreground">{item.description}</p>
                    </div>
                  </Link>
                  <div className="ml-4 grid grid-cols-2 gap-1.5">
                    {item.items.map((subItem) => {
                      const SubIcon = subItem.icon
                      return (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          onClick={() => setMobileOpen(false)}
                          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                        >
                          <SubIcon className="h-3.5 w-3.5" />
                          {subItem.label}
                        </Link>
                      )
                    })}
                  </div>
                </div>
              )
            })}

            <Link
              href="/resources"
              onClick={() => setMobileOpen(false)}
              className={cn(
                "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                pathname.startsWith("/resources") ? "bg-primary/10 text-primary" : "text-foreground hover:bg-secondary",
              )}
            >
              <HelpCircle className="h-4 w-4" />
              Resources
            </Link>

            <div className="flex gap-2 pt-2 border-t border-border/50">
              <Button variant="outline" size="sm" className="flex-1 rounded-xl bg-transparent" asChild>
                <a href="https://github.com/aicomply-dev/aicomply" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
              {userMenu ? (
                <div className="flex-1 flex justify-center">
                  {userMenu}
                </div>
              ) : (
                <Button size="sm" className="flex-1 rounded-xl shadow-lg shadow-primary/20" asChild>
                  <Link href="/understand/modules">
                    Get Started
                  </Link>
                </Button>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
