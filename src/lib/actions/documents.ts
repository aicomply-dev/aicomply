"use server"

import { revalidatePath } from "next/cache"
import { db } from "@/lib/db"
import { document } from "@/lib/db/schema"
import { eq, and, desc } from "drizzle-orm"
import { nanoid } from "nanoid"
import { getSession } from "@/lib/auth/session"

// Helper to get organization ID from session
async function getOrganizationId(): Promise<string> {
  const session = await getSession()
  if (!session?.user?.organizationId) {
    throw new Error("Authentication required")
  }
  return session.user.organizationId
}

// Document package templates
const DOCUMENT_PACKAGES = [
  {
    type: "technical-documentation",
    title: "Technical Documentation Package",
    description: "Complete technical documentation for AI system compliance",
    documents: [
      "System Architecture Overview",
      "Algorithm Description",
      "Training Data Documentation",
      "Performance Metrics",
      "Limitations and Risks",
      "API Documentation",
    ],
  },
  {
    type: "risk-management",
    title: "Risk Management Package",
    description: "Risk assessment and mitigation documentation",
    documents: [
      "Risk Assessment Report",
      "Risk Mitigation Plan",
      "Residual Risk Analysis",
      "Risk Monitoring Procedures",
    ],
  },
  {
    type: "data-governance",
    title: "Data Governance Package",
    description: "Data management and quality documentation",
    documents: [
      "Data Quality Assessment",
      "Data Sources Inventory",
      "Data Processing Documentation",
      "Bias Analysis Report",
      "Data Retention Policy",
    ],
  },
  {
    type: "quality-management",
    title: "Quality Management System",
    description: "QMS documentation for AI systems",
    documents: [
      "QMS Manual",
      "Process Documentation",
      "Quality Objectives",
      "Internal Audit Reports",
      "Corrective Actions Log",
    ],
  },
  {
    type: "transparency",
    title: "Transparency Package",
    description: "User-facing transparency documentation",
    documents: [
      "Instructions for Use",
      "AI System Disclosure Notice",
      "User Information Sheet",
      "Capability Limitations",
    ],
  },
  {
    type: "conformity-assessment",
    title: "Conformity Assessment Package",
    description: "Documentation for conformity assessment",
    documents: [
      "Self-Assessment Checklist",
      "Compliance Evidence Matrix",
      "Declaration of Conformity Draft",
      "CE Marking Documentation",
    ],
  },
]

// Seed default documents if organization has none
async function seedDocumentsIfNeeded(orgId: string) {
  try {
    const existingDocs = await db.query.document.findMany({
      where: eq(document.organizationId, orgId),
    })

    if (existingDocs.length === 0) {
      const now = new Date()
      for (const pkg of DOCUMENT_PACKAGES) {
        for (const docTitle of pkg.documents) {
          await db.insert(document).values({
            id: nanoid(),
            organizationId: orgId,
            title: docTitle,
            type: pkg.type,
            status: "draft",
            content: JSON.stringify({
              package: pkg.title,
              template: true,
              sections: [],
            }),
            createdAt: now,
            updatedAt: now,
            createdById: null,
          })
        }
      }
    }
  } catch (error) {
    console.error("Failed to seed documents:", error)
  }
}

export async function getDocuments(type?: string) {
  try {
    const orgId = await getOrganizationId()
    await seedDocumentsIfNeeded(orgId)

    const whereClause = type
      ? and(eq(document.organizationId, orgId), eq(document.type, type))
      : eq(document.organizationId, orgId)

    const docs = await db.query.document.findMany({
      where: whereClause,
      orderBy: [desc(document.updatedAt)],
    })

    return docs.map(d => ({
      ...d,
      content: d.content ? JSON.parse(d.content) : null,
    }))
  } catch (error) {
    console.error("Failed to get documents:", error)
    return []
  }
}

export async function getDocumentById(id: string) {
  try {
    const orgId = await getOrganizationId()
    
    const doc = await db.query.document.findFirst({
      where: and(eq(document.id, id), eq(document.organizationId, orgId)),
    })

    if (!doc) return null

    return {
      ...doc,
      content: doc.content ? JSON.parse(doc.content) : null,
    }
  } catch (error) {
    console.error("Failed to get document:", error)
    return null
  }
}

export async function createDocument(data: {
  title: string
  type: string
  content?: string
  aiSystemId?: string
}) {
  try {
    const orgId = await getOrganizationId()
    const now = new Date()
    const id = nanoid()

    await db.insert(document).values({
      id,
      organizationId: orgId,
      title: data.title,
      type: data.type,
      status: "draft",
      content: data.content || null,
      aiSystemId: data.aiSystemId || null,
      createdAt: now,
      updatedAt: now,
      createdById: null,
    })

    revalidatePath("/deliver/documentation")
    return { success: true, id }
  } catch (error) {
    console.error("Failed to create document:", error)
    return { error: "Failed to create document" }
  }
}

export async function updateDocument(id: string, data: {
  title?: string
  type?: string
  content?: string
  status?: string
}) {
  try {
    const now = new Date()
    const updates: Record<string, unknown> = { updatedAt: now }

    if (data.title !== undefined) updates.title = data.title
    if (data.type !== undefined) updates.type = data.type
    if (data.content !== undefined) updates.content = data.content
    if (data.status !== undefined) {
      updates.status = data.status
      if (data.status === "generated") {
        updates.generatedAt = now
      }
    }

    const orgId = await getOrganizationId()
    
    await db.update(document).set(updates).where(
      and(eq(document.id, id), eq(document.organizationId, orgId))
    )

    revalidatePath("/deliver/documentation")
    return { success: true }
  } catch (error) {
    console.error("Failed to update document:", error)
    return { error: "Failed to update document" }
  }
}

export async function deleteDocument(id: string) {
  try {
    const orgId = await getOrganizationId()
    
    await db.delete(document).where(
      and(eq(document.id, id), eq(document.organizationId, orgId))
    )

    revalidatePath("/deliver/documentation")
    return { success: true }
  } catch (error) {
    console.error("Failed to delete document:", error)
    return { error: "Failed to delete document" }
  }
}

export async function getDocumentPackages() {
  try {
    const orgId = await getOrganizationId()
    await seedDocumentsIfNeeded(orgId)

    const docs = await db.query.document.findMany({
      where: eq(document.organizationId, orgId),
    })

    // Group documents by type
    const packages = DOCUMENT_PACKAGES.map(pkg => {
      const packageDocs = docs.filter(d => d.type === pkg.type)
      const completedDocs = packageDocs.filter(d => d.status === "approved" || d.status === "generated")
      const progress = packageDocs.length > 0
        ? Math.round((completedDocs.length / packageDocs.length) * 100)
        : 0

      return {
        ...pkg,
        totalDocuments: packageDocs.length,
        completedDocuments: completedDocs.length,
        progress,
        status: progress === 100 ? "complete" : progress > 0 ? "in_progress" : "not_started",
      }
    })

    return packages
  } catch (error) {
    console.error("Failed to get document packages:", error)
    return []
  }
}

export async function getDocumentStats() {
  try {
    const orgId = await getOrganizationId()
    await seedDocumentsIfNeeded(orgId)

    const docs = await db.query.document.findMany({
      where: eq(document.organizationId, orgId),
    })

    return {
      total: docs.length,
      completed: docs.filter(d => d.status === "approved" || d.status === "generated").length,
      inProgress: docs.filter(d => d.status === "in_progress").length,
      draft: docs.filter(d => d.status === "draft").length,
    }
  } catch (error) {
    console.error("Failed to get document stats:", error)
    return { total: 0, completed: 0, inProgress: 0, draft: 0 }
  }
}
