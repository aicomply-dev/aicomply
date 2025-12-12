import "server-only"
import { cookies } from 'next/headers'
import { verifyToken, createToken } from './jwt'
import { db } from '@/lib/db'
import { user } from '@/lib/db/schema'
import { eq } from 'drizzle-orm'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

export interface Session {
  user: {
    id: string
    email: string
    name?: string
    organizationId: string
  }
}

export async function getSession(): Promise<Session | null> {
  try {
    // First try NextAuth session (for OAuth users)
    console.log("🔍 getSession: Checking NextAuth session...")
    const nextAuthSession = await getServerSession(authOptions)
    console.log("🔍 getSession: NextAuth session result:", {
      hasSession: !!nextAuthSession,
      hasUser: !!nextAuthSession?.user,
      email: nextAuthSession?.user?.email
    })

    if (nextAuthSession?.user) {
      return {
        user: {
          id: nextAuthSession.user.id || '',
          email: nextAuthSession.user.email || '',
          name: nextAuthSession.user.name || undefined,
          organizationId: nextAuthSession.user.organizationId || '',
        }
      }
    }

    // Fall back to custom JWT auth (for email/password users)
    const cookieStore = await cookies()
    const token = cookieStore.get('auth-token')?.value

    if (!token) {
      return null
    }

    const payload = await verifyToken(token)
    if (!payload) {
      return null
    }

    // Verify user still exists in database
    const dbUser = await db.query.user.findFirst({
      where: eq(user.id, payload.userId),
    })

    if (!dbUser) {
      return null
    }

    return {
      user: {
        id: dbUser.id,
        email: dbUser.email,
        name: dbUser.name || undefined,
        organizationId: payload.orgId,
      }
    }
  } catch {
    return null
  }
}

export async function createSession(userId: string, email: string, orgId: string) {
  const token = await createToken({ userId, email, orgId })

  const cookieStore = await cookies()
  cookieStore.set('auth-token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 24 * 60 * 60, // 24 hours
    path: '/',
  })

  return token
}

export async function destroySession() {
  const cookieStore = await cookies()
  cookieStore.delete('auth-token')
}