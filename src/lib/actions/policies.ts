'use server'

import { eq, and } from 'drizzle-orm'
import { revalidatePath } from 'next/cache'

import { db } from '@/lib/db'
import { policy } from '@/lib/db/schema'
import { getUserProfile } from './utils'

/**
 * List all policies for the current user's organization
 */
export async function getPolicies() {
  const { organizationId } = await getUserProfile()

  return db
    .select()
    .from(policy)
    .where(eq(policy.organizationId, organizationId))
    .orderBy(policy.createdAt)
}

/**
 * Get a single policy by ID (org-scoped)
 */
export async function getPolicy(id: string) {
  const { organizationId } = await getUserProfile()

  const rows = await db
    .select()
    .from(policy)
    .where(and(eq(policy.id, id), eq(policy.organizationId, organizationId)))
    .limit(1)

  const row = rows[0]
  if (!row) {
    throw new Error('Policy not found')
  }

  return row
}

/**
 * Create a new policy
 */
export async function createPolicy(data: {
  title: string
  content?: string
}) {
  const { organizationId } = await getUserProfile()

  const rows = await db
    .insert(policy)
    .values({
      organizationId,
      title: data.title,
      content: data.content ?? null,
      status: 'draft',
    })
    .returning()

  revalidatePath('/dashboard')
  revalidatePath('/implement/policies')

  return rows[0]
}

/**
 * Update an existing policy
 */
export async function updatePolicy(
  id: string,
  data: {
    title?: string
    content?: string
    status?: string
  },
) {
  const { organizationId } = await getUserProfile()

  const rows = await db
    .update(policy)
    .set({
      ...data,
      updatedAt: new Date(),
    })
    .where(and(eq(policy.id, id), eq(policy.organizationId, organizationId)))
    .returning()

  if (!rows[0]) {
    throw new Error('Policy not found')
  }

  revalidatePath('/implement/policies')
  revalidatePath(`/implement/policies/${id}`)

  return rows[0]
}

/**
 * Delete a policy
 */
export async function deletePolicy(id: string) {
  const { organizationId } = await getUserProfile()

  const rows = await db
    .delete(policy)
    .where(and(eq(policy.id, id), eq(policy.organizationId, organizationId)))
    .returning()

  if (!rows[0]) {
    throw new Error('Policy not found')
  }

  revalidatePath('/dashboard')
  revalidatePath('/implement/policies')

  return rows[0]
}
