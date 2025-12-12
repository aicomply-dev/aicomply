import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"

export interface Session {
  user: {
    id: string
    email: string
    name?: string | null
    organizationId: string
  }
}

export async function getSession(): Promise<Session | null> {
  const session = await getServerSession(authOptions)

  if (!session?.user) {
    return null
  }

  return {
    user: {
      id: session.user.id,
      email: session.user.email,
      name: session.user.name,
      organizationId: session.user.organizationId || "",
    }
  }
}

export async function requireAuth() {
  const session = await getSession()

  if (!session) {
    redirect("/auth/login")
  }

  return session
}

// These functions are handled by NextAuth now
export async function createSession(userId: string, email: string, orgId: string) {
  // NextAuth handles session creation
  return ""
}

export async function destroySession() {
  // NextAuth handles session destruction via signOut
}