import Link from "next/link"
import { Shield } from "lucide-react"

import { MobileNav } from "@/components/layout/mobile-nav"
import { UserMenu } from "@/components/auth/user-menu"
import { SearchBar } from "@/components/content/search-bar"

const navLinks = [
  { href: "/understand", label: "Understand" },
  { href: "/assess", label: "Assess" },
  { href: "/implement", label: "Implement" },
  { href: "/resources", label: "Resources" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-14 max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="mr-8 flex items-center gap-2 font-bold tracking-tight text-foreground"
        >
          <Shield className="size-5 text-primary" />
          <span>AI Comply</span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="ml-auto flex items-center gap-2">
          <SearchBar />
          <UserMenu />
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
