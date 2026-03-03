'use server'

import { eq, and } from 'drizzle-orm'
import { revalidatePath } from 'next/cache'

import { db } from '@/lib/db'
import { aiSystem, assessment } from '@/lib/db/schema'
import { getUserProfile } from './utils'

/**
 * List all AI systems for the current user's organization
 */
export async function getAISystems() {
  const { organizationId } = await getUserProfile()

  return db
    .select()
    .from(aiSystem)
    .where(eq(aiSystem.organizationId, organizationId))
    .orderBy(aiSystem.createdAt)
}

/**
 * Get a single AI system by ID (org-scoped) with its assessments
 */
export async function getAISystem(id: string) {
  const { organizationId } = await getUserProfile()

  const rows = await db
    .select()
    .from(aiSystem)
    .where(and(eq(aiSystem.id, id), eq(aiSystem.organizationId, organizationId)))
    .limit(1)

  const system = rows[0]
  if (!system) {
    throw new Error('AI system not found')
  }

  // Fetch related assessments
  const systemAssessments = await db
    .select()
    .from(assessment)
    .where(eq(assessment.aiSystemId, id))

  return { ...system, assessments: systemAssessments }
}

/**
 * Create a new AI system
 */
export async function createAISystem(data: {
  name: string
  description?: string
  riskLevel?: string
  operatorRole?: string
  category?: string
}) {
  const { organizationId } = await getUserProfile()

  const rows = await db
    .insert(aiSystem)
    .values({
      organizationId,
      name: data.name,
      description: data.description ?? null,
      riskLevel: data.riskLevel ?? null,
      operatorRole: data.operatorRole ?? null,
      category: data.category ?? null,
    })
    .returning()

  revalidatePath('/dashboard')
  revalidatePath('/assess/inventory')

  return rows[0]
}

/**
 * Update an existing AI system
 */
export async function updateAISystem(
  id: string,
  data: {
    name?: string
    description?: string
    riskLevel?: string
    operatorRole?: string
    category?: string
    status?: string
  },
) {
  const { organizationId } = await getUserProfile()

  const rows = await db
    .update(aiSystem)
    .set({
      ...data,
      updatedAt: new Date(),
    })
    .where(and(eq(aiSystem.id, id), eq(aiSystem.organizationId, organizationId)))
    .returning()

  if (!rows[0]) {
    throw new Error('AI system not found')
  }

  revalidatePath('/dashboard')
  revalidatePath('/assess/inventory')
  revalidatePath(`/assess/inventory/${id}`)

  return rows[0]
}

/**
 * Delete an AI system
 */
export async function deleteAISystem(id: string) {
  const { organizationId } = await getUserProfile()

  const rows = await db
    .delete(aiSystem)
    .where(and(eq(aiSystem.id, id), eq(aiSystem.organizationId, organizationId)))
    .returning()

  if (!rows[0]) {
    throw new Error('AI system not found')
  }

  revalidatePath('/dashboard')
  revalidatePath('/assess/inventory')

  return rows[0]
}
