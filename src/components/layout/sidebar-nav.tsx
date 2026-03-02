'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu } from 'lucide-react'
import { cn } from '@/lib/utils'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'

export interface SidebarNavItem {
  label: string
  href: string
}

interface SidebarNavProps {
  items: SidebarNavItem[]
  title?: string
}

export function SidebarNav({ items, title }: SidebarNavProps) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const navContent = (
    <nav className="flex flex-col gap-1">
      {title && (
        <h3 className="mb-2 px-3 text-sm font-semibold text-foreground">
          {title}
        </h3>
      )}
      {items.map((item) => {
        const isActive = pathname === item.href
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setOpen(false)}
            className={cn(
              'block rounded-md px-3 py-2 text-sm transition-colors',
              isActive
                ? 'border-l-2 border-blue-600 bg-blue-50 text-blue-600 font-medium dark:bg-blue-950/30 dark:text-blue-400'
                : 'text-muted-foreground hover:bg-muted hover:text-foreground',
            )}
          >
            {item.label}
          </Link>
        )
      })}
    </nav>
  )

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden md:block sticky top-20 w-64 shrink-0 self-start">
        {navContent}
      </aside>

      {/* Mobile sheet trigger */}
      <div className="md:hidden mb-4">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="sm" className="gap-2">
              <Menu className="h-4 w-4" />
              {title ?? 'Navigation'}
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>{title ?? 'Navigation'}</SheetTitle>
            </SheetHeader>
            <div className="mt-4 px-2">{navContent}</div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  )
}
