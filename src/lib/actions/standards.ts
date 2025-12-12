"use server"

import { readFile } from "fs/promises"
import { existsSync, readFileSync } from "fs"
import path from "path"
import { standards as staticStandards, getStandardStats, calculateOverallProgress, getKPIsAtRisk, type Standard, type KPI } from "@/lib/data/compliance-framework"
import { STANDARD_CONTROLS, type StandardControl } from "@/lib/data/standard-controls"
import { parseStandardDocument } from "@/lib/parsers/standard-parser"
import type { ParsedStandard } from "@/lib/types/standard"
import { getSession } from "@/lib/auth/session"
import { db } from "@/lib/db"
import { organizationContent } from "@/lib/db/schema"
import { eq, and } from "drizzle-orm"

// Path to standards content (extracted content directory)
const CONTENT_STANDARDS_DIR = path.join(process.cwd(), "content", "standards")

// Legacy path to standards markdown files
const STANDARDS_DIR = path.join(process.cwd(), "src", "lib", "data", "standards")

// Helper to get current user's organization ID
async function getOrganizationId(): Promise<string | undefined> {
  const session = await getSession()
  return session?.user?.organizationId
}

// Load standards from content directory
function loadStandardsFromContent(): Standard[] {
  const indexPath = path.join(CONTENT_STANDARDS_DIR, "index.json")
  if (!existsSync(indexPath)) {
    return []
  }

  try {
    const index = JSON.parse(readFileSync(indexPath, "utf-8"))
    const standards: Standard[] = []

    for (const meta of index) {
      const standardPath = path.join(CONTENT_STANDARDS_DIR, meta.id.toLowerCase(), "standard.json")
      const controlsPath = path.join(CONTENT_STANDARDS_DIR, meta.id.toLowerCase(), "controls.json")

      if (existsSync(standardPath)) {
        const standard = JSON.parse(readFileSync(standardPath, "utf-8"))
        let controls: any[] = []
        if (existsSync(controlsPath)) {
          controls = JSON.parse(readFileSync(controlsPath, "utf-8"))
        }
        standards.push({ ...standard, controls })
      }
    }

    return standards
  } catch (error) {
    console.error("Failed to load standards from content:", error)
    return []
  }
}

// Get standards - prefer content directory, fall back to static
function getStandardsData(): Standard[] {
  const contentStandards = loadStandardsFromContent()
  if (contentStandards.length > 0) {
    return contentStandards
  }
  return staticStandards
}

// Map standard ID to filename
const STANDARD_ID_TO_FILENAME: Record<string, string> = {
  "std-ai-001": "STD-AI-001-AI-System-Classification-Standard.md",
  "std-ai-002": "STD-AI-002-AI-Risk-Management-Standard.md",
  "std-ai-003": "STD-AI-003-AI-Data-Governance-Standard.md",
  "std-ai-004": "STD-AI-004-AI-Technical-Documentation-Standard.md",
  "std-ai-005": "STD-AI-005-AI-Logging-Record-Keeping-Standard.md",
  "std-ai-006": "STD-AI-006-AI-Transparency-Standard.md",
  "std-ai-007": "STD-AI-007-AI-Human-Oversight-Standard.md",
  "std-ai-008": "STD-AI-008-AI-Accuracy-Robustness-Security-Standard.md",
  "std-ai-009": "STD-AI-009-AI-Quality-Management-Standard.md",
  "std-ai-010": "STD-AI-010-AI-Conformity-Assessment-Standard.md",
  "std-ai-011": "STD-AI-011-AI-Registration-Standard.md",
  "std-ai-012": "STD-AI-012-AI-Post-Market-Monitoring-Standard.md",
  "std-ai-013": "STD-AI-013-AI-Incident-Management-Standard.md",
  "std-ai-014": "STD-AI-014-AI-Literacy-Training-Standard.md",
}

// Map standard number to control prefix
const STANDARD_TO_CONTROL_PREFIX: Record<string, string> = {
  "001": "CLS",
  "002": "RM",
  "003": "DATA",
  "004": "DOC",
  "005": "LOG",
  "006": "TRANS",
  "007": "HO",
  "008": "ARS",
  "009": "QMS",
  "010": "CA",
  "011": "REG",
  "012": "PMM",
  "013": "INC",
  "014": "LIT",
}

/**
 * Merge controls from STANDARD_CONTROLS into standards
 * This ensures all controls are included even if compliance-framework.ts has incomplete lists
 */
function enrichStandardWithControls(standard: Standard): Standard {
  const standardControls = STANDARD_CONTROLS.filter(c => c.standardId === standard.id)

  // Create a map of existing controls by ID for merging
  const existingControlsMap = new Map(standard.controls.map(c => [c.id, c]))

  // Merge: use existing control if it exists (preserves status/progress), otherwise create from STANDARD_CONTROLS
  const mergedControls = standardControls.map(standardControl => {
    const existing = existingControlsMap.get(standardControl.id)
    if (existing) {
      // Keep existing control data (status, progress, requirements, evidence)
      return existing
    }
    // Create new control from STANDARD_CONTROLS data
    return {
      id: standardControl.id,
      name: standardControl.name,
      type: standardControl.type,
      frequency: standardControl.frequency,
      riskLevel: standardControl.riskLevel,
      objective: standardControl.objective,
      requirements: [], // Will be populated from parsed standard if available
      evidence: [],
      status: "not_started" as const,
      progress: 0,
    }
  })

  return {
    ...standard,
    controls: mergedControls,
  }
}

/**
 * Get all standards with controls merged from STANDARD_CONTROLS
 * Now loads from /content/standards/ directory with org override support
 */
export async function getStandards(): Promise<Standard[]> {
  // Check for org-specific override first
  const orgId = await getOrganizationId()
  if (orgId) {
    try {
      const orgContent = await db
        .select()
        .from(organizationContent)
        .where(
          and(
            eq(organizationContent.organizationId, orgId),
            eq(organizationContent.contentType, "standard"),
            eq(organizationContent.contentId, "all")
          )
        )
        .limit(1)

      if (orgContent.length > 0) {
        const customStandards = JSON.parse(orgContent[0].content) as Standard[]
        return customStandards.map(enrichStandardWithControls)
      }
    } catch (error) {
      // Fall through to default
    }
  }

  // Load from content directory
  const standards = getStandardsData()
  return standards.map(enrichStandardWithControls)
}

/**
 * Get a single standard by ID with controls merged
 * Now loads from /content/standards/ directory with org override support
 */
export async function getStandardById(id: string): Promise<Standard | undefined> {
  // Check for org-specific override first
  const orgId = await getOrganizationId()
  if (orgId) {
    try {
      const orgContent = await db
        .select()
        .from(organizationContent)
        .where(
          and(
            eq(organizationContent.organizationId, orgId),
            eq(organizationContent.contentType, "standard"),
            eq(organizationContent.contentId, id.toLowerCase())
          )
        )
        .limit(1)

      if (orgContent.length > 0) {
        const customStandard = JSON.parse(orgContent[0].content) as Standard
        return enrichStandardWithControls(customStandard)
      }
    } catch (error) {
      // Fall through to default
    }
  }

  // Load from content directory
  const standards = getStandardsData()
  const standard = standards.find(s => s.id === id || s.id.toLowerCase() === id.toLowerCase())
  return standard ? enrichStandardWithControls(standard) : undefined
}

/**
 * Get standards statistics
 */
export async function getStandardsStats() {
  return getStandardStats()
}

/**
 * Get overall compliance progress
 */
export async function getOverallProgress(): Promise<number> {
  return calculateOverallProgress()
}

/**
 * Get KPIs that are at risk or off track
 */
export async function getAtRiskKPIs(): Promise<KPI[]> {
  return getKPIsAtRisk()
}

/**
 * Get controls statistics using the comprehensive STANDARD_CONTROLS
 */
export async function getControlsStats() {
  const controls = STANDARD_CONTROLS

  return {
    total: controls.length,
    byType: {
      preventive: controls.filter(c => c.type === "preventive").length,
      detective: controls.filter(c => c.type === "detective").length,
      corrective: controls.filter(c => c.type === "corrective").length,
    },
    byRiskLevel: {
      critical: controls.filter(c => c.riskLevel === "critical").length,
      high: controls.filter(c => c.riskLevel === "high").length,
      medium: controls.filter(c => c.riskLevel === "medium").length,
      low: controls.filter(c => c.riskLevel === "low").length,
    },
    // Legacy field for compatibility with existing code
    compliant: 0, // Not tracked in static data
    inProgress: 0,
    notStarted: controls.length,
  }
}

/**
 * Get all controls from STANDARD_CONTROLS
 */
export async function getAllControls(): Promise<StandardControl[]> {
  return STANDARD_CONTROLS
}

/**
 * Get controls for a specific standard
 */
export async function getControlsByStandard(standardId: string): Promise<StandardControl[]> {
  // Extract the number part from the standard ID (e.g., "std-ai-001" -> "001")
  const match = standardId.match(/(\d+)$/)
  if (!match) return []

  const standardNum = match[1].padStart(3, "0")
  const controlPrefix = STANDARD_TO_CONTROL_PREFIX[standardNum]

  if (!controlPrefix) return []

  return STANDARD_CONTROLS.filter(c => c.id.startsWith(controlPrefix + "-"))
}

/**
 * Get a single control by ID
 */
export async function getControlById(controlId: string): Promise<StandardControl | undefined> {
  return STANDARD_CONTROLS.find(c => c.id === controlId)
}

/**
 * Get controls by risk level
 */
export async function getControlsByRiskLevel(riskLevel: "critical" | "high" | "medium" | "low"): Promise<StandardControl[]> {
  return STANDARD_CONTROLS.filter(c => c.riskLevel === riskLevel)
}

/**
 * Get standards with low progress (below threshold)
 */
export async function getLowProgressStandards(threshold: number = 50): Promise<Standard[]> {
  const allStandards = getStandardsData()
  return allStandards.filter((s: Standard) => s.progress < threshold).sort((a: Standard, b: Standard) => a.progress - b.progress)
}

/**
 * Get standards that have critical controls
 */
export async function getHighPriorityStandards(): Promise<Standard[]> {
  const allStandards = getStandardsData()
  return allStandards.filter((s: Standard) =>
    s.controls.some((c: any) => c.riskLevel === "critical")
  )
}

/**
 * Get the markdown content for a standard
 * Now loads from /content/standards/{id}/guidance.md with fallback to legacy location
 * Returns null if file doesn't exist or can't be read (non-blocking)
 * Uses timeout protection to prevent hanging
 */
export async function getStandardContent(standardId: string): Promise<string | null> {
  // First try the content directory (new location)
  const contentGuidancePath = path.join(CONTENT_STANDARDS_DIR, standardId.toLowerCase(), "guidance.md")
  if (existsSync(contentGuidancePath)) {
    try {
      const content = await Promise.race([
        readFile(contentGuidancePath, "utf-8"),
        new Promise<null>((resolve) => setTimeout(() => resolve(null), 1500))
      ])
      return content
    } catch (error) {
      // Fall through to legacy location
    }
  }

  // Fall back to legacy location
  const filename = STANDARD_ID_TO_FILENAME[standardId.toLowerCase()]
  if (!filename) {
    return null
  }

  const filePath = path.join(STANDARDS_DIR, filename)

  // Quick check - if directory doesn't exist, return null immediately
  if (!existsSync(STANDARDS_DIR)) {
    return null
  }

  // Check if file exists (non-blocking check)
  if (!existsSync(filePath)) {
    return null
  }

  try {
    // Add timeout to prevent hanging - 1.5 seconds max
    const content = await Promise.race([
      readFile(filePath, "utf-8"),
      new Promise<null>((resolve) => setTimeout(() => resolve(null), 1500))
    ])
    return content
  } catch (error) {
    // Silently fail - don't block the page
    return null
  }
}

/**
 * Parse standard content into sections
 */
export async function getStandardSections(standardId: string): Promise<{
  tableOfContents: string[]
  sections: Array<{ title: string; content: string; level: number }>
} | null> {
  const content = await getStandardContent(standardId)
  if (!content) return null

  const lines = content.split("\n")
  const sections: Array<{ title: string; content: string; level: number }> = []
  const tableOfContents: string[] = []

  let currentSection: { title: string; content: string[]; level: number } | null = null

  for (const line of lines) {
    const h2Match = line.match(/^## (.+)$/)
    const h3Match = line.match(/^### (.+)$/)

    if (h2Match) {
      // Save previous section
      if (currentSection) {
        sections.push({
          title: currentSection.title,
          content: currentSection.content.join("\n"),
          level: currentSection.level,
        })
      }
      currentSection = { title: h2Match[1], content: [], level: 2 }
      tableOfContents.push(h2Match[1])
    } else if (h3Match) {
      // Save previous section
      if (currentSection) {
        sections.push({
          title: currentSection.title,
          content: currentSection.content.join("\n"),
          level: currentSection.level,
        })
      }
      currentSection = { title: h3Match[1], content: [], level: 3 }
    } else if (currentSection) {
      currentSection.content.push(line)
    }
  }

  // Save last section
  if (currentSection) {
    sections.push({
      title: currentSection.title,
      content: currentSection.content.join("\n"),
      level: currentSection.level,
    })
  }

  return { tableOfContents, sections }
}

/**
 * Get fully parsed standard with structured data
 * Uses the standard-parser to extract all components
 * Returns null if content unavailable or parsing fails (non-blocking)
 * Parsing runs asynchronously with timeout protection
 */
export async function getStandardParsed(standardId: string): Promise<ParsedStandard | null> {
  const content = await getStandardContent(standardId)
  if (!content) return null

  try {
    // Parse in a timeout-protected async way
    // Use setTimeout to defer parsing to next event loop tick
    const parsed = await Promise.race([
      new Promise<ParsedStandard>((resolve, reject) => {
        // Defer parsing to prevent blocking
        setTimeout(() => {
          try {
            const result = parseStandardDocument(content)
            resolve(result)
          } catch (error) {
            reject(error)
          }
        }, 0)
      }),
      // Timeout after 2 seconds - parsing should be fast for most files
      new Promise<null>((resolve) => setTimeout(() => resolve(null), 2000))
    ])
    return parsed
  } catch (error) {
    // Silently fail - don't block the page
    return null
  }
}
