"use server"

import { revalidatePath } from "next/cache"
import { db } from "@/lib/db"
import { policy } from "@/lib/db/schema"
import { eq, and, desc } from "drizzle-orm"
import { nanoid } from "nanoid"
import { readFile } from "fs/promises"
import { join } from "path"
import { existsSync } from "fs"
import { getSession } from "@/lib/auth/session"

// Helper to get organization ID from session
async function getOrganizationId(): Promise<string> {
  const session = await getSession()
  if (!session?.user?.organizationId) {
    throw new Error("Authentication required")
  }
  return session.user.organizationId
}

// Path to policy markdown file
const POLICY_PATH = join(process.cwd(), "src/lib/data/policy/AI-POLICY.md")

// Load AI Policy content from markdown file
async function loadAIPolicyContent(): Promise<string> {
  try {
    const policyPath = join(process.cwd(), "src/lib/data/policy/AI-POLICY.md")
    return await readFile(policyPath, "utf-8")
  } catch {
    return "# Artificial Intelligence Policy\n\nPolicy content not found. Please ensure AI-POLICY.md exists in src/lib/data/policy/"
  }
}

// The single AI Policy (POL-AI-001)
const AI_POLICY_METADATA = {
  id: "pol-ai-001",
  title: "Artificial Intelligence Policy",
  description: "Overarching policy establishing the organization's framework for responsible AI development, deployment, and operation in compliance with EU AI Act.",
  category: "governance",
  status: "draft",
  version: "1.0",
  policyNumber: "POL-AI-001",
}

// Track seeded organizations to avoid duplicate seeding
const seededOrgs = new Set<string>()

// Seed the single AI Policy if not exists for the organization
async function seedPoliciesIfNeeded(orgId: string) {
  if (seededOrgs.has(orgId)) return

  try {
    // Check if the AI Policy already exists for this org
    const existingPolicy = await db.query.policy.findFirst({
      where: and(
        eq(policy.organizationId, orgId),
        eq(policy.id, `${AI_POLICY_METADATA.id}-${orgId}`)
      ),
    })

    if (!existingPolicy) {
      // Load the full policy content from markdown
      const content = await loadAIPolicyContent()
      const now = new Date()

      await db.insert(policy).values({
        id: `${AI_POLICY_METADATA.id}-${orgId}`,
        organizationId: orgId,
        title: AI_POLICY_METADATA.title,
        description: AI_POLICY_METADATA.description,
        category: AI_POLICY_METADATA.category,
        status: AI_POLICY_METADATA.status,
        version: AI_POLICY_METADATA.version,
        content,
        ownerId: null,
        createdAt: now,
        updatedAt: now,
      })
    }

    seededOrgs.add(orgId)
  } catch (error) {
    // Ignore unique constraint errors (race condition - policy already exists)
    if ((error as Error).message?.includes("UNIQUE constraint")) {
      seededOrgs.add(orgId)
      return
    }
    console.error("Failed to seed AI Policy:", error)
  }
}

// Calculate completeness score for a policy
function calculateCompleteness(p: { title?: string | null; description?: string | null; content?: string | null; status: string }) {
  let score = 0
  if (p.title) score += 10
  if (p.description) score += 10
  if (p.content && p.content.length > 100) score += 40
  if (p.content && p.content.length > 500) score += 20
  if (p.status === "in_review") score += 10
  if (p.status === "approved") score += 10
  return Math.min(100, score)
}

// Count sections in markdown content
function countSections(content: string | null): number {
  if (!content) return 0
  const matches = content.match(/^##\s+/gm)
  return matches ? matches.length : 0
}

export async function getPolicies(category?: string) {
  try {
    const orgId = await getOrganizationId()
    await seedPoliciesIfNeeded(orgId)

    const whereClause = category
      ? and(eq(policy.organizationId, orgId), eq(policy.category, category))
      : eq(policy.organizationId, orgId)

    const policies = await db.query.policy.findMany({
      where: whereClause,
      orderBy: [desc(policy.updatedAt)],
    })

    // Return policies with computed fields
    return policies.map(p => ({
      ...p,
      completeness: calculateCompleteness(p),
      sections: countSections(p.content),
      owner: "Organization", // Default owner name
      policyNumber: `POL-${p.id.slice(0, 6).toUpperCase()}`,
    }))
  } catch (error) {
    console.error("Failed to get policies:", error)
    return []
  }
}

export async function getPolicyById(id: string) {
  try {
    const orgId = await getOrganizationId()
    
    return db.query.policy.findFirst({
      where: and(eq(policy.id, id), eq(policy.organizationId, orgId)),
    })
  } catch (error) {
    console.error("Failed to get policy:", error)
    return null
  }
}

export async function createPolicy(data: {
  title: string
  description?: string
  category: string
  content?: string
}) {
  try {
    const orgId = await getOrganizationId()
    const now = new Date()
    const id = nanoid()

    await db.insert(policy).values({
      id,
      organizationId: orgId,
      title: data.title,
      description: data.description || null,
      category: data.category,
      status: "draft",
      version: "1.0",
      content: data.content || null,
      ownerId: null,
      createdAt: now,
      updatedAt: now,
    })

    revalidatePath("/implement/policies")
    return { success: true, id }
  } catch (error) {
    console.error("Failed to create policy:", error)
    return { error: "Failed to create policy" }
  }
}

export async function updatePolicy(id: string, data: {
  title?: string
  description?: string
  category?: string
  content?: string
  status?: string
}) {
  try {
    const orgId = await getOrganizationId()
    
    const existing = await db.query.policy.findFirst({
      where: and(eq(policy.id, id), eq(policy.organizationId, orgId)),
    })

    if (!existing) return { error: "Policy not found" }

    const now = new Date()
    const updates: Record<string, unknown> = { updatedAt: now }

    if (data.title !== undefined) updates.title = data.title
    if (data.description !== undefined) updates.description = data.description
    if (data.category !== undefined) updates.category = data.category
    if (data.content !== undefined) updates.content = data.content
    if (data.status !== undefined) {
      updates.status = data.status
      if (data.status === "approved") {
        updates.approvedAt = now
        // Increment version on approval
        const currentVersion = parseFloat(existing.version)
        updates.version = (currentVersion + 0.1).toFixed(1)
      }
    }

    await db.update(policy).set(updates).where(eq(policy.id, id))

    revalidatePath("/implement/policies")
    return { success: true }
  } catch (error) {
    console.error("Failed to update policy:", error)
    return { error: "Failed to update policy" }
  }
}

export async function deletePolicy(id: string) {
  try {
    const orgId = await getOrganizationId()
    
    await db.delete(policy).where(
      and(eq(policy.id, id), eq(policy.organizationId, orgId))
    )

    revalidatePath("/implement/policies")
    return { success: true }
  } catch (error) {
    console.error("Failed to delete policy:", error)
    return { error: "Failed to delete policy" }
  }
}

export async function getPolicyStats() {
  try {
    const orgId = await getOrganizationId()
    await seedPoliciesIfNeeded(orgId)

    const policies = await db.query.policy.findMany({
      where: eq(policy.organizationId, orgId),
    })

    // Calculate completeness for each policy based on content and status
    const completenessScores = policies.map(p => {
      let score = 0
      if (p.title) score += 10
      if (p.description) score += 10
      if (p.content && p.content.length > 100) score += 40
      if (p.content && p.content.length > 500) score += 20
      if (p.status === "in_review") score += 10
      if (p.status === "approved") score += 10
      return Math.min(100, score)
    })

    const avgCompleteness = policies.length > 0
      ? Math.round(completenessScores.reduce((a, b) => a + b, 0) / policies.length)
      : 0

    return {
      total: policies.length,
      approved: policies.filter(p => p.status === "approved").length,
      inReview: policies.filter(p => p.status === "in_review").length,
      draft: policies.filter(p => p.status === "draft").length,
      avgCompleteness,
    }
  } catch (error) {
    console.error("Failed to get policy stats:", error)
    return { total: 0, approved: 0, inReview: 0, draft: 0, avgCompleteness: 0 }
  }
}

/**
 * Get the markdown content for the AI Policy document
 */
export async function getPolicyContent(): Promise<string | null> {
  if (!existsSync(POLICY_PATH)) {
    console.log(`Policy file not found: ${POLICY_PATH}`)
    return null
  }

  try {
    const content = await readFile(POLICY_PATH, "utf-8")
    return content
  } catch (error) {
    console.error(`Error reading policy file: ${POLICY_PATH}`, error)
    return null
  }
}
