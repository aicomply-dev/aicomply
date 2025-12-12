"use server"

import { revalidatePath } from "next/cache"
import { db } from "@/lib/db"
import { aiSystem } from "@/lib/db/schema"
import { desc, eq, and } from "drizzle-orm"
import { nanoid } from "nanoid"
import { requireAuth } from "@/lib/auth/require-auth"

export async function createAiSystem(formData: FormData) {
  // Require authentication
  const session = await requireAuth()

  const name = formData.get("name") as string
  const description = formData.get("description") as string
  const vendor = formData.get("vendor") as string
  const category = formData.get("category") as string
  const department = formData.get("department") as string

  if (!name) {
    return { error: "Name is required" }
  }

  try {
    const now = new Date()
    const id = nanoid()

    await db.insert(aiSystem).values({
      id,
      organizationId: session.user.organizationId,
      name,
      description: description || null,
      vendor: vendor || null,
      category: category || null,
      department: department || null,
      status: "active",
      riskLevel: "unclassified",
      createdAt: now,
      updatedAt: now,
      createdById: session.user.id,
    })

    revalidatePath("/dashboard")
    revalidatePath("/assess")
    return { success: true, id }
  } catch (error) {
    console.error("Failed to create AI system:", error)
    return { error: "Failed to create AI system" }
  }
}

export async function getAiSystems() {
  try {
    // Get user's organization for data filtering
    const session = await requireAuth()

    const systems = await db.query.aiSystem.findMany({
      where: eq(aiSystem.organizationId, session.user.organizationId),
      orderBy: [desc(aiSystem.createdAt)],
    })

    return systems
  } catch (error) {
    console.error("Failed to get AI systems:", error)
    return []
  }
}

export async function getAiSystemStats() {
  try {
    // Get user's organization for data filtering
    const session = await requireAuth()

    const systems = await db.query.aiSystem.findMany({
      where: eq(aiSystem.organizationId, session.user.organizationId),
    })

    const total = systems.length
    const highRisk = systems.filter((s) => s.riskLevel === "high" || s.riskLevel === "prohibited").length
    const compliant = systems.filter((s) => s.riskLevel === "minimal" || s.riskLevel === "limited").length
    const pending = systems.filter((s) => s.riskLevel === "unclassified").length

    return { total, highRisk, compliant, pending }
  } catch (error) {
    console.error("Failed to get AI system stats:", error)
    return { total: 0, highRisk: 0, compliant: 0, pending: 0 }
  }
}

export async function getAiSystemById(id: string) {
  try {
    const session = await requireAuth()
    
    const system = await db.query.aiSystem.findFirst({
      where: and(eq(aiSystem.id, id), eq(aiSystem.organizationId, session.user.organizationId)),
    })
    return system || null
  } catch (error) {
    console.error("Failed to get AI system:", error)
    return null
  }
}

export async function updateAiSystem(id: string, data: {
  name?: string
  description?: string
  vendor?: string
  category?: string
  department?: string
  riskLevel?: string
  status?: string
  dataTypes?: string
}) {
  try {
    const session = await requireAuth()
    
    await db.update(aiSystem)
      .set({
        ...data,
        updatedAt: new Date(),
      })
      .where(and(eq(aiSystem.id, id), eq(aiSystem.organizationId, session.user.organizationId)))

    revalidatePath("/assess/inventory")
    revalidatePath(`/assess/inventory/${id}`)
    return { success: true }
  } catch (error) {
    console.error("Failed to update AI system:", error)
    return { error: "Failed to update AI system" }
  }
}

export async function deleteAiSystem(id: string) {
  try {
    const session = await requireAuth()
    
    await db.delete(aiSystem).where(and(eq(aiSystem.id, id), eq(aiSystem.organizationId, session.user.organizationId)))
    revalidatePath("/assess/inventory")
    return { success: true }
  } catch (error) {
    console.error("Failed to delete AI system:", error)
    return { error: "Failed to delete AI system" }
  }
}

/**
 * Save operator roles for an AI system
 */
export async function saveAiSystemRoles(
  id: string,
  data: {
    operatorRole: string
    additionalRoles?: string[]
  }
) {
  try {
    const session = await requireAuth()
    
    await db.update(aiSystem)
      .set({
        operatorRole: data.operatorRole,
        additionalRoles: data.additionalRoles ? JSON.stringify(data.additionalRoles) : null,
        rolesDeterminedAt: new Date(),
        updatedAt: new Date(),
      })
      .where(and(eq(aiSystem.id, id), eq(aiSystem.organizationId, session.user.organizationId)))

    revalidatePath("/assess/inventory")
    revalidatePath(`/assess/inventory/${id}`)
    revalidatePath("/assess/requirements")
    revalidatePath(`/assess/requirements/${id}`)
    return { success: true }
  } catch (error) {
    console.error("Failed to save AI system roles:", error)
    return { error: "Failed to save AI system roles" }
  }
}

/**
 * Update risk level for an AI system
 */
export async function updateAiSystemRiskLevel(
  id: string,
  riskLevel: "prohibited" | "high" | "limited" | "minimal" | "unclassified"
) {
  try {
    const session = await requireAuth()
    
    await db.update(aiSystem)
      .set({
        riskLevel,
        updatedAt: new Date(),
      })
      .where(and(eq(aiSystem.id, id), eq(aiSystem.organizationId, session.user.organizationId)))

    revalidatePath("/assess/inventory")
    revalidatePath(`/assess/inventory/${id}`)
    revalidatePath("/assess/classification")
    revalidatePath("/assess/requirements")
    return { success: true }
  } catch (error) {
    console.error("Failed to update AI system risk level:", error)
    return { error: "Failed to update AI system risk level" }
  }
}

/**
 * Update operator role for an AI system
 */
export async function updateAiSystemRole(
  id: string,
  operatorRole: "provider" | "deployer" | "importer" | "distributor" | "gpai_provider"
) {
  try {
    const session = await requireAuth()
    
    await db.update(aiSystem)
      .set({
        operatorRole,
        rolesDeterminedAt: new Date(),
        updatedAt: new Date(),
      })
      .where(and(eq(aiSystem.id, id), eq(aiSystem.organizationId, session.user.organizationId)))

    revalidatePath("/assess/inventory")
    revalidatePath(`/assess/inventory/${id}`)
    revalidatePath("/assess/requirements")
    return { success: true }
  } catch (error) {
    console.error("Failed to update AI system role:", error)
    return { error: "Failed to update AI system role" }
  }
}

/**
 * Get high-risk AI systems that need assessment
 */
export async function getHighRiskAiSystems() {
  try {
    const session = await requireAuth()
    
    const systems = await db.query.aiSystem.findMany({
      where: eq(aiSystem.organizationId, session.user.organizationId),
      orderBy: [desc(aiSystem.createdAt)],
    })

    return systems.filter(s =>
      s.riskLevel === "high" || s.riskLevel === "prohibited"
    )
  } catch (error) {
    console.error("Failed to get high-risk AI systems:", error)
    return []
  }
}

/**
 * Get AI systems with roles determined
 */
export async function getAiSystemsWithRoles() {
  try {
    const session = await requireAuth()
    
    const systems = await db.query.aiSystem.findMany({
      where: eq(aiSystem.organizationId, session.user.organizationId),
      orderBy: [desc(aiSystem.createdAt)],
    })

    return systems.filter(s => s.operatorRole !== null)
  } catch (error) {
    console.error("Failed to get AI systems with roles:", error)
    return []
  }
}

/**
 * Get summary of AI systems by role
 */
export async function getAiSystemsByRoleSummary() {
  try {
    const session = await requireAuth()
    
    const systems = await db.query.aiSystem.findMany({
      where: eq(aiSystem.organizationId, session.user.organizationId),
    })

    const summary = {
      provider: systems.filter(s => s.operatorRole === "provider").length,
      deployer: systems.filter(s => s.operatorRole === "deployer").length,
      importer: systems.filter(s => s.operatorRole === "importer").length,
      distributor: systems.filter(s => s.operatorRole === "distributor").length,
      gpai_provider: systems.filter(s => s.operatorRole === "gpai_provider").length,
      undetermined: systems.filter(s => s.operatorRole === null).length,
    }

    return summary
  } catch (error) {
    console.error("Failed to get AI systems by role summary:", error)
    return {
      provider: 0,
      deployer: 0,
      importer: 0,
      distributor: 0,
      gpai_provider: 0,
      undetermined: 0,
    }
  }
}
