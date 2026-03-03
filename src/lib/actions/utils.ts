'use server'

import { eq } from 'drizzle-orm'
import { db } from '@/lib/db'
import { profile } from '@/lib/db/schema'
import { getUser } from '@/lib/supabase/server'

export interface UserProfile {
  userId: string
  organizationId: string
}

/**
 * Get the current user's profile with organizationId.
 * Throws if not authenticated or no profile/org found.
 */
export async function getUserProfile(): Promise<UserProfile> {
  const user = await getUser()

  const rows = await db
    .select({
      id: profile.id,
      organizationId: profile.organizationId,
    })
    .from(profile)
    .where(eq(profile.id, user.id))
    .limit(1)

  const row = rows[0]
  if (!row || !row.organizationId) {
    throw new Error('User profile or organization not found')
  }

  return {
    userId: user.id,
    organizationId: row.organizationId,
  }
}
