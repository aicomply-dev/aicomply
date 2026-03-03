'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { LogOut, LayoutDashboard, User } from 'lucide-react'
import type { User as SupabaseUser } from '@supabase/supabase-js'

import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

function getInitials(user: SupabaseUser): string {
  const name = user.user_metadata?.full_name as string | undefined
  if (name) {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }
  return (user.email?.[0] ?? 'U').toUpperCase()
}

export function UserMenu() {
  const router = useRouter()
  const [user, setUser] = useState<SupabaseUser | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const supabase = createClient()

    if (!supabase) {
      setLoading(false)
      return
    }

    // Check initial session
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user)
      setLoading(false)
    })

    // Subscribe to auth state changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
      setLoading(false)
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  async function handleSignOut() {
    const supabase = createClient()
    if (!supabase) return
    await supabase.auth.signOut()
    router.push('/')
  }

  // Loading: render nothing to avoid layout shift
  if (loading) {
    return <div className="hidden h-9 w-[140px] md:block" />
  }

  // Not authenticated: show login / get started buttons
  if (!user) {
    return (
      <>
        <Button variant="ghost" size="sm" asChild className="hidden md:inline-flex">
          <Link href="/auth/login">Log In</Link>
        </Button>
        <Button size="sm" asChild className="hidden md:inline-flex">
          <Link href="/assess/classification">Get Started</Link>
        </Button>
      </>
    )
  }

  // Authenticated: show avatar dropdown
  const displayEmail = user.email ?? ''
  const truncatedEmail =
    displayEmail.length > 24 ? displayEmail.slice(0, 24) + '...' : displayEmail

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="hidden gap-2 md:inline-flex">
          <Avatar className="h-7 w-7">
            <AvatarFallback className="bg-primary/10 text-xs text-primary">
              {getInitials(user)}
            </AvatarFallback>
          </Avatar>
          <span className="max-w-[120px] truncate text-sm">{truncatedEmail}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            {user.user_metadata?.full_name && (
              <p className="text-sm font-medium">{user.user_metadata.full_name}</p>
            )}
            <p className="text-xs text-muted-foreground">{displayEmail}</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/dashboard" className="cursor-pointer">
            <LayoutDashboard className="mr-2 h-4 w-4" />
            Dashboard
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleSignOut} className="cursor-pointer">
          <LogOut className="mr-2 h-4 w-4" />
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
