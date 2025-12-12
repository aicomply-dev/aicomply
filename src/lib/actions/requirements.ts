"use server"

import { revalidatePath } from "next/cache"
import { db } from "@/lib/db"
import { requirementsStatus, aiSystem } from "@/lib/db/schema"
import { desc, eq, and, sql } from "drizzle-orm"
import { nanoid } from "nanoid"
import {
  ROLE_REQUIREMENTS,
  getRequirementsForRole,
  getControlsForRole,
  type OperatorRole,
  type RiskLevel,
  type Requirement,
} from "@/lib/data/role-requirements"
import { getSession } from "@/lib/auth/session"

// Helper to get organization ID from session
async function getOrganizationId(): Promise<string> {
  const session = await getSession()
  if (!session?.user?.organizationId) {
    throw new Error("Authentication required")
  }
  return session.user.organizationId
}

export type RequirementStatusRecord = {
  id: string
  organizationId: string
  aiSystemId: string | null
  requirementId: string
  article: string
  category: string
  controlId: string | null
  status: string
  evidence: string | null
  owner: string | null
  dueDate: Date | null
  completedAt: Date | null
  verifiedAt: Date | null
  verifiedBy: string | null
  notes: string | null
  createdAt: Date
  updatedAt: Date
}

/**
 * Initialize requirements status for an AI system based on its role and risk level
 */
export async function initializeRequirementsForAiSystem(
  aiSystemId: string,
  role: OperatorRole,
  riskLevel: RiskLevel
) {
  try {
    const orgId = await getOrganizationId()

    // Get applicable requirements for this role and risk level
    const requirements = getRequirementsForRole(role, riskLevel)
    const controls = getControlsForRole(role)

    const now = new Date()
    const records = []

    // Create a requirement status record for each requirement
    for (const req of requirements) {
      records.push({
        id: nanoid(),
        organizationId: orgId,
        aiSystemId,
        requirementId: req.id,
        article: req.article,
        category: req.category,
        controlId: req.controls[0] || null, // Link to first control
        status: "not_started",
        evidence: null,
        owner: null,
        dueDate: null,
        completedAt: null,
        verifiedAt: null,
        verifiedBy: null,
        notes: null,
        createdAt: now,
        updatedAt: now,
      })
    }

    // Insert all records if there are any
    if (records.length > 0) {
      await db.insert(requirementsStatus).values(records)
    }

    // Note: revalidatePath removed - this function may be called during render
    // Revalidation should happen in server actions that mutate data via user interaction

    return { success: true, count: records.length }
  } catch (error) {
    console.error("Failed to initialize requirements:", error)
    return { error: "Failed to initialize requirements" }
  }
}

/**
 * Get all requirements status for an AI system
 */
export async function getRequirementsStatusForSystem(aiSystemId: string) {
  try {
    const records = await db.query.requirementsStatus.findMany({
      where: eq(requirementsStatus.aiSystemId, aiSystemId),
      orderBy: [requirementsStatus.article, requirementsStatus.category],
    })

    return records
  } catch (error) {
    console.error("Failed to get requirements status:", error)
    return []
  }
}

/**
 * Get organization-wide requirements summary
 */
export async function getOrganizationRequirementsSummary() {
  try {
    const orgId = await getOrganizationId()
    
    const records = await db.query.requirementsStatus.findMany({
      where: eq(requirementsStatus.organizationId, orgId),
    })

    const summary = {
      total: records.length,
      notStarted: records.filter(r => r.status === "not_started").length,
      inProgress: records.filter(r => r.status === "in_progress").length,
      implemented: records.filter(r => r.status === "implemented").length,
      verified: records.filter(r => r.status === "verified").length,
      byCategory: {} as Record<string, { total: number; completed: number }>,
      byArticle: {} as Record<string, { total: number; completed: number }>,
    }

    // Group by category
    for (const record of records) {
      if (!summary.byCategory[record.category]) {
        summary.byCategory[record.category] = { total: 0, completed: 0 }
      }
      summary.byCategory[record.category].total++
      if (record.status === "implemented" || record.status === "verified") {
        summary.byCategory[record.category].completed++
      }

      // Group by article
      if (!summary.byArticle[record.article]) {
        summary.byArticle[record.article] = { total: 0, completed: 0 }
      }
      summary.byArticle[record.article].total++
      if (record.status === "implemented" || record.status === "verified") {
        summary.byArticle[record.article].completed++
      }
    }

    return summary
  } catch (error) {
    console.error("Failed to get organization requirements summary:", error)
    return {
      total: 0,
      notStarted: 0,
      inProgress: 0,
      implemented: 0,
      verified: 0,
      byCategory: {},
      byArticle: {},
    }
  }
}

/**
 * Update a requirement status
 */
export async function updateRequirementStatus(
  id: string,
  data: {
    status?: "not_started" | "in_progress" | "implemented" | "verified"
    evidence?: string[]
    owner?: string
    dueDate?: Date
    notes?: string
  }
) {
  try {
    const updateData: Record<string, unknown> = {
      updatedAt: new Date(),
    }

    if (data.status) {
      updateData.status = data.status
      if (data.status === "implemented") {
        updateData.completedAt = new Date()
      }
      if (data.status === "verified") {
        updateData.verifiedAt = new Date()
      }
    }

    if (data.evidence) {
      updateData.evidence = JSON.stringify(data.evidence)
    }

    if (data.owner !== undefined) {
      updateData.owner = data.owner
    }

    if (data.dueDate !== undefined) {
      updateData.dueDate = data.dueDate
    }

    if (data.notes !== undefined) {
      updateData.notes = data.notes
    }

    await db.update(requirementsStatus)
      .set(updateData)
      .where(eq(requirementsStatus.id, id))

    revalidatePath("/assess/requirements")
    return { success: true }
  } catch (error) {
    console.error("Failed to update requirement status:", error)
    return { error: "Failed to update requirement status" }
  }
}

/**
 * Bulk update requirements status
 */
export async function bulkUpdateRequirementsStatus(
  ids: string[],
  status: "not_started" | "in_progress" | "implemented" | "verified"
) {
  try {
    const now = new Date()
    const updateData: Record<string, unknown> = {
      status,
      updatedAt: now,
    }

    if (status === "implemented") {
      updateData.completedAt = now
    }
    if (status === "verified") {
      updateData.verifiedAt = now
    }

    for (const id of ids) {
      await db.update(requirementsStatus)
        .set(updateData)
        .where(eq(requirementsStatus.id, id))
    }

    revalidatePath("/assess/requirements")
    return { success: true, count: ids.length }
  } catch (error) {
    console.error("Failed to bulk update requirements:", error)
    return { error: "Failed to bulk update requirements" }
  }
}

/**
 * Get requirements with their static data enriched
 */
export async function getEnrichedRequirementsForSystem(aiSystemId: string) {
  try {
    // Get the AI system to know its role
    const system = await db.query.aiSystem.findFirst({
      where: eq(aiSystem.id, aiSystemId),
    })

    if (!system || !system.operatorRole) {
      return { error: "AI system not found or role not determined" }
    }

    // Get requirement status records
    const statusRecords = await db.query.requirementsStatus.findMany({
      where: eq(requirementsStatus.aiSystemId, aiSystemId),
    })

    // Get the role requirements
    const roleReqs = ROLE_REQUIREMENTS[system.operatorRole as OperatorRole]
    if (!roleReqs) {
      return { error: "Invalid role" }
    }

    // Enrich with static data
    const enrichedRequirements = statusRecords.map(record => {
      const staticReq = roleReqs.requirements.find(r => r.id === record.requirementId)

      return {
        ...record,
        staticData: staticReq || null,
        controlDetails: staticReq?.controls.map(ctrlId =>
          roleReqs.controls.find(c => c.id === ctrlId)
        ).filter(Boolean) || [],
      }
    })

    return {
      system: {
        id: system.id,
        name: system.name,
        role: system.operatorRole,
        riskLevel: system.riskLevel,
      },
      roleInfo: {
        title: roleReqs.title,
        description: roleReqs.description,
        obligationsCount: roleReqs.obligationsCount,
        controlsCount: roleReqs.controlsCount,
      },
      requirements: enrichedRequirements,
    }
  } catch (error) {
    console.error("Failed to get enriched requirements:", error)
    return { error: "Failed to get enriched requirements" }
  }
}

/**
 * Delete all requirements for an AI system (used when role changes)
 */
export async function deleteRequirementsForSystem(aiSystemId: string) {
  try {
    await db.delete(requirementsStatus)
      .where(eq(requirementsStatus.aiSystemId, aiSystemId))

    revalidatePath(`/assess/requirements/${aiSystemId}`)
    return { success: true }
  } catch (error) {
    console.error("Failed to delete requirements:", error)
    return { error: "Failed to delete requirements" }
  }
}

/**
 * Get overdue requirements
 */
export async function getOverdueRequirements() {
  try {
    const orgId = await getOrganizationId()
    const now = new Date()
    const records = await db.query.requirementsStatus.findMany({
      where: eq(requirementsStatus.organizationId, orgId),
    })

    return records.filter(r =>
      r.dueDate &&
      r.dueDate < now &&
      r.status !== "implemented" &&
      r.status !== "verified"
    )
  } catch (error) {
    console.error("Failed to get overdue requirements:", error)
    return []
  }
}

/**
 * Get requirements by article
 */
export async function getRequirementsByArticle(aiSystemId: string) {
  try {
    const records = await db.query.requirementsStatus.findMany({
      where: eq(requirementsStatus.aiSystemId, aiSystemId),
    })

    const byArticle: Record<string, RequirementStatusRecord[]> = {}

    for (const record of records) {
      if (!byArticle[record.article]) {
        byArticle[record.article] = []
      }
      byArticle[record.article].push(record as RequirementStatusRecord)
    }

    return byArticle
  } catch (error) {
    console.error("Failed to get requirements by article:", error)
    return {}
  }
}
