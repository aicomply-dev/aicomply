'use server'

import { eq, and } from 'drizzle-orm'
import { revalidatePath } from 'next/cache'

import { db } from '@/lib/db'
import { complianceRequirement, gapAnalysisResult, aiSystem } from '@/lib/db/schema'
import { getUserProfile } from './utils'

/**
 * Get compliance requirements for a specific AI system (org-scoped)
 */
export async function getComplianceRequirements(aiSystemId: string) {
  const { organizationId } = await getUserProfile()

  // Verify the system belongs to the user's org
  const systems = await db
    .select()
    .from(aiSystem)
    .where(and(eq(aiSystem.id, aiSystemId), eq(aiSystem.organizationId, organizationId)))
    .limit(1)

  if (!systems[0]) {
    throw new Error('AI system not found')
  }

  return db
    .select()
    .from(complianceRequirement)
    .where(
      and(
        eq(complianceRequirement.aiSystemId, aiSystemId),
        eq(complianceRequirement.organizationId, organizationId),
      ),
    )
    .orderBy(complianceRequirement.standardId)
}

/**
 * Update a compliance requirement
 */
export async function updateComplianceRequirement(
  id: string,
  data: {
    status?: string
    evidence?: string
  },
) {
  const { organizationId } = await getUserProfile()

  const updateData: Record<string, unknown> = {}
  if (data.status !== undefined) updateData.status = data.status
  if (data.evidence !== undefined) updateData.evidence = data.evidence
  if (data.status === 'verified') updateData.verifiedAt = new Date()

  const rows = await db
    .update(complianceRequirement)
    .set(updateData)
    .where(
      and(
        eq(complianceRequirement.id, id),
        eq(complianceRequirement.organizationId, organizationId),
      ),
    )
    .returning()

  if (!rows[0]) {
    throw new Error('Compliance requirement not found')
  }

  revalidatePath(`/assess/requirements/${rows[0].aiSystemId}`)

  return rows[0]
}

/**
 * Get gap analysis results for a specific AI system
 */
export async function getGapAnalysisResults(aiSystemId: string) {
  const { organizationId } = await getUserProfile()

  return db
    .select()
    .from(gapAnalysisResult)
    .where(
      and(
        eq(gapAnalysisResult.aiSystemId, aiSystemId),
        eq(gapAnalysisResult.organizationId, organizationId),
      ),
    )
    .orderBy(gapAnalysisResult.createdAt)
}

/**
 * Create a gap analysis result
 */
export async function createGapAnalysisResult(data: {
  aiSystemId: string
  requirementId?: string
  gapDescription: string
  severity?: string
  remediationPlan?: string
}) {
  const { organizationId } = await getUserProfile()

  // Verify system belongs to org
  const systems = await db
    .select()
    .from(aiSystem)
    .where(and(eq(aiSystem.id, data.aiSystemId), eq(aiSystem.organizationId, organizationId)))
    .limit(1)

  if (!systems[0]) {
    throw new Error('AI system not found')
  }

  const rows = await db
    .insert(gapAnalysisResult)
    .values({
      aiSystemId: data.aiSystemId,
      organizationId,
      requirementId: data.requirementId ?? '',
      gapDescription: data.gapDescription,
      severity: data.severity ?? null,
      remediationPlan: data.remediationPlan ?? null,
    })
    .returning()

  revalidatePath(`/assess/inventory/${data.aiSystemId}`)

  return rows[0]
}
