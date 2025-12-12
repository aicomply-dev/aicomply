"use server"

import { revalidatePath } from "next/cache"
import { db } from "@/lib/db"
import { complianceRequirement } from "@/lib/db/schema"
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

// Default technical requirements based on EU AI Act
const DEFAULT_TECHNICAL_REQUIREMENTS = [
  {
    article: "Article 10",
    title: "Data Governance Framework",
    description: "Establish policies and procedures for training, validation, and testing data management.",
    category: "technical",
    priority: "high",
    subitems: [
      { label: "Document data sources and provenance for all training datasets" },
      { label: "Implement data quality assessment procedures" },
      { label: "Establish bias detection and mitigation processes" },
      { label: "Create data retention and deletion policies" },
      { label: "Document data processing activities in compliance with GDPR" },
    ],
  },
  {
    article: "Article 11",
    title: "Technical Documentation",
    description: "Create comprehensive technical documentation for high-risk AI systems.",
    category: "technical",
    priority: "high",
    subitems: [
      { label: "System architecture and design documentation" },
      { label: "Training methodology and validation approach" },
      { label: "Performance metrics and testing results" },
      { label: "Known limitations and risk analysis" },
      { label: "Instructions for use and deployment" },
      { label: "Maintenance and update procedures" },
    ],
  },
  {
    article: "Article 9",
    title: "Risk Management System",
    description: "Implement a continuous risk management process for AI systems throughout their lifecycle.",
    category: "technical",
    priority: "high",
    subitems: [
      { label: "Identify and analyze known and foreseeable risks" },
      { label: "Estimate risks based on intended purpose and misuse scenarios" },
      { label: "Implement risk mitigation measures" },
      { label: "Document residual risks and communicate to users" },
    ],
  },
  {
    article: "Article 14",
    title: "Human Oversight Mechanisms",
    description: "Ensure appropriate human oversight capabilities are built into AI systems.",
    category: "technical",
    priority: "medium",
    subitems: [
      { label: "Design interfaces for human monitoring and intervention" },
      { label: "Implement override and stop functions" },
      { label: "Create alerts for anomalous behavior" },
      { label: "Document human oversight procedures" },
    ],
  },
  {
    article: "Article 12",
    title: "Logging & Monitoring",
    description: "Implement automatic logging and monitoring capabilities for traceability.",
    category: "technical",
    priority: "medium",
    subitems: [
      { label: "Implement event logging for system operations" },
      { label: "Store logs securely with appropriate retention periods" },
      { label: "Create monitoring dashboards for key metrics" },
      { label: "Set up automated alerts for incidents" },
    ],
  },
  {
    article: "Article 13",
    title: "Transparency Requirements",
    description: "Ensure users are informed when interacting with AI systems.",
    category: "technical",
    priority: "medium",
    subitems: [
      { label: "Implement clear AI disclosure notices" },
      { label: "Provide explanations for AI decisions where required" },
      { label: "Document AI capabilities and limitations for users" },
    ],
  },
]

const DEFAULT_ORGANIZATIONAL_REQUIREMENTS = [
  {
    article: "Article 17",
    title: "Quality Management System",
    description: "Establish a QMS for AI development and deployment processes.",
    category: "organizational",
    priority: "high",
    subitems: [
      { label: "Define quality policies and objectives for AI systems" },
      { label: "Establish roles and responsibilities" },
      { label: "Implement change management procedures" },
      { label: "Create internal audit processes" },
      { label: "Establish supplier management procedures" },
    ],
  },
  {
    article: "Article 4",
    title: "Training & Competence",
    description: "Ensure staff have appropriate training and competence for AI compliance.",
    category: "organizational",
    priority: "medium",
    subitems: [
      { label: "Identify training needs for AI compliance roles" },
      { label: "Develop and deliver compliance training programs" },
      { label: "Maintain training records and certifications" },
      { label: "Establish competence assessment procedures" },
    ],
  },
  {
    article: "Article 62",
    title: "Incident Management",
    description: "Establish procedures for handling AI-related incidents and serious incidents.",
    category: "organizational",
    priority: "high",
    subitems: [
      { label: "Define incident classification and severity levels" },
      { label: "Create incident response procedures" },
      { label: "Establish reporting channels to authorities" },
      { label: "Document corrective action processes" },
    ],
  },
  {
    article: "Article 72",
    title: "Post-Market Monitoring",
    description: "Implement ongoing monitoring of AI systems after deployment.",
    category: "organizational",
    priority: "medium",
    subitems: [
      { label: "Define monitoring metrics and KPIs" },
      { label: "Establish feedback collection mechanisms" },
      { label: "Create performance review schedules" },
      { label: "Document update and improvement processes" },
    ],
  },
]

// Track seeded organizations
const seededOrgs = new Set<string>()

// Seed requirements if organization has none
async function seedRequirementsIfNeeded(orgId: string) {
  if (seededOrgs.has(orgId)) return
  
  try {
    const existing = await db.query.complianceRequirement.findMany({
      where: eq(complianceRequirement.organizationId, orgId),
    })

    if (existing.length === 0) {
      const now = new Date()
      const allRequirements = [...DEFAULT_TECHNICAL_REQUIREMENTS, ...DEFAULT_ORGANIZATIONAL_REQUIREMENTS]

      for (const req of allRequirements) {
        await db.insert(complianceRequirement).values({
          id: nanoid(),
          organizationId: orgId,
          article: req.article,
          title: req.title,
          description: req.description,
          category: req.category,
          priority: req.priority,
          status: "not_started",
          notes: JSON.stringify(req.subitems),
          createdAt: now,
          updatedAt: now,
        })
      }
    }
    seededOrgs.add(orgId)
  } catch (error) {
    console.error("Failed to seed requirements:", error)
  }
}

export async function getComplianceRequirements(category?: string) {
  try {
    const orgId = await getOrganizationId()
    await seedRequirementsIfNeeded(orgId)

    const whereClause = category
      ? and(eq(complianceRequirement.organizationId, orgId), eq(complianceRequirement.category, category))
      : eq(complianceRequirement.organizationId, orgId)

    const requirements = await db.query.complianceRequirement.findMany({
      where: whereClause,
      orderBy: [desc(complianceRequirement.priority)],
    })

    return requirements.map(req => ({
      ...req,
      subitems: req.notes ? JSON.parse(req.notes) : [],
    }))
  } catch (error) {
    console.error("Failed to get compliance requirements:", error)
    return []
  }
}

export async function updateRequirementStatus(id: string, status: string) {
  try {
    const orgId = await getOrganizationId()
    const now = new Date()
    const updates: Record<string, unknown> = {
      status,
      updatedAt: now,
    }

    if (status === "completed") {
      updates.completedAt = now
    }

    await db.update(complianceRequirement)
      .set(updates)
      .where(and(
        eq(complianceRequirement.id, id),
        eq(complianceRequirement.organizationId, orgId)
      ))

    revalidatePath("/implement")
    return { success: true }
  } catch (error) {
    console.error("Failed to update requirement status:", error)
    return { error: "Failed to update requirement status" }
  }
}

export async function getImplementationStats() {
  try {
    const orgId = await getOrganizationId()
    await seedRequirementsIfNeeded(orgId)

    const requirements = await db.query.complianceRequirement.findMany({
      where: eq(complianceRequirement.organizationId, orgId),
    })

    const technical = requirements.filter(r => r.category === "technical")
    const organizational = requirements.filter(r => r.category === "organizational")

    const technicalCompleted = technical.filter(r => r.status === "completed").length
    const organizationalCompleted = organizational.filter(r => r.status === "completed").length
    const totalCompleted = requirements.filter(r => r.status === "completed").length

    return {
      technicalProgress: technical.length > 0
        ? Math.round((technicalCompleted / technical.length) * 100)
        : 0,
      organizationalProgress: organizational.length > 0
        ? Math.round((organizationalCompleted / organizational.length) * 100)
        : 0,
      overallProgress: requirements.length > 0
        ? Math.round((totalCompleted / requirements.length) * 100)
        : 0,
      totalRequirements: requirements.length,
      completedRequirements: totalCompleted,
    }
  } catch (error) {
    console.error("Failed to get implementation stats:", error)
    return {
      technicalProgress: 0,
      organizationalProgress: 0,
      overallProgress: 0,
      totalRequirements: 0,
      completedRequirements: 0,
    }
  }
}

// Get guides - these are static content but we return them from server for consistency
export async function getImplementationGuides() {
  return [
    {
      id: "risk-assessment",
      title: "Risk Assessment Methodology",
      description: "Learn how to conduct systematic risk assessments for AI systems.",
      readTime: "15 min read",
      href: "/implement/procedures/risk-assessment",
    },
    {
      id: "qms",
      title: "Building a QMS for AI",
      description: "Framework for establishing a quality management system.",
      readTime: "20 min read",
      href: "/implement/procedures/qms",
    },
    {
      id: "human-oversight",
      title: "Human Oversight Design Patterns",
      description: "Best practices for implementing human oversight mechanisms.",
      readTime: "12 min read",
      href: "/implement/procedures/human-oversight",
    },
    {
      id: "technical-doc",
      title: "Technical Documentation Template",
      description: "Comprehensive template for high-risk AI documentation.",
      readTime: "10 min read",
      href: "/implement/procedures/technical-doc",
    },
    {
      id: "logging",
      title: "Logging & Audit Trail Setup",
      description: "Technical guide for implementing compliant logging systems.",
      readTime: "18 min read",
      href: "/implement/procedures/logging",
    },
    {
      id: "incident-response",
      title: "Incident Response Playbook",
      description: "Step-by-step procedures for handling AI incidents.",
      readTime: "14 min read",
      href: "/implement/procedures/incident-response",
    },
  ]
}
