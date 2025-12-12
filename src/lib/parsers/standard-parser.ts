/**
 * Standard Document Parser
 *
 * Parses markdown standard documents into structured data for rendering
 * with specialized UI components.
 */

import type {
  ParsedStandard,
  StandardMetadata,
  TOCItem,
  VersionHistoryEntry,
  ObjectiveSection,
  ScopeSection,
  ControlDefinition,
  ControlRequirement,
  ControlType,
  RiskLevel,
  KPIDefinition,
  KPIThresholds,
  RACIMatrix,
  RACIActivity,
  RACIValue,
  TrainingRequirement,
  ExceptionDefinition,
  EnforcementRule,
  DefinitionEntry,
  RegulatoryMappingEntry,
  ProcedureSection,
  ComplianceSection,
} from "@/lib/types/standard"

/**
 * Parse a complete standard markdown document
 */
export function parseStandardDocument(content: string): ParsedStandard {
  return {
    metadata: extractMetadata(content),
    tableOfContents: extractTableOfContents(content),
    documentHistory: extractDocumentHistory(content),
    objective: extractObjective(content),
    scope: extractScope(content),
    controls: extractControls(content),
    procedures: extractProcedures(content),
    compliance: extractCompliance(content),
    rolesResponsibilities: extractRACIMatrix(content),
    exceptions: extractExceptions(content),
    enforcement: extractEnforcement(content),
    kpis: extractKPIs(content),
    training: extractTrainingRequirements(content),
    definitions: extractDefinitions(content),
    regulatoryMapping: extractRegulatoryMapping(content),
    rawContent: content,
  }
}

/**
 * Extract document metadata from the header section
 * Format: **Field:** Value
 */
export function extractMetadata(content: string): StandardMetadata {
  const lines = content.split("\n").slice(0, 20)

  const getValue = (field: string): string => {
    const regex = new RegExp(`\\*\\*${field}:\\*\\*\\s*(.+?)(?:\\s{2}|$)`, "i")
    for (const line of lines) {
      const match = line.match(regex)
      if (match) return match[1].trim()
    }
    return ""
  }

  return {
    documentType: getValue("Document Type"),
    standardId: getValue("Standard ID"),
    title: getValue("Standard Title"),
    version: getValue("Version"),
    effectiveDate: getValue("Effective Date"),
    nextReviewDate: getValue("Next Review Date"),
    reviewFrequency: getValue("Review Frequency"),
    parentPolicy: getValue("Parent Policy"),
    owner: getValue("Owner"),
    approvedBy: getValue("Approved By"),
    status: (getValue("Status") as "Draft" | "In Review" | "Approved") || "Draft",
    classification: getValue("Classification"),
  }
}

/**
 * Extract table of contents from numbered list with links
 * Format: 1. [Title](#slug)
 */
export function extractTableOfContents(content: string): TOCItem[] {
  const tocSection = content.match(/## TABLE OF CONTENTS\n\n([\s\S]*?)(?=\n---|\n## )/i)
  if (!tocSection) return []

  const items: TOCItem[] = []
  const lines = tocSection[1].split("\n").filter(l => l.trim())

  for (const line of lines) {
    const match = line.match(/^\d+\.\s*\[(.+?)\]\(#(.+?)\)/)
    if (match) {
      items.push({
        id: match[2],
        title: match[1],
        level: 1,
      })
    }
  }

  return items
}

/**
 * Extract document history from table
 */
export function extractDocumentHistory(content: string): VersionHistoryEntry[] {
  const section = content.match(/## DOCUMENT HISTORY\n\n([\s\S]*?)(?=\n---|\n## )/i)
  if (!section) return []

  const entries: VersionHistoryEntry[] = []
  const tableRows = section[1].match(/\|[^|]+\|[^|]+\|[^|]+\|[^|]+\|[^|]+\|[^|]+\|/g)

  if (!tableRows) return []

  // Skip header and separator rows
  for (let i = 2; i < tableRows.length; i++) {
    const cells = tableRows[i].split("|").map(c => c.trim()).filter(Boolean)
    if (cells.length >= 4) {
      entries.push({
        version: cells[0],
        date: cells[1],
        author: cells[2],
        changes: cells[3],
      })
    }
  }

  return entries
}

/**
 * Extract objective section
 */
export function extractObjective(content: string): ObjectiveSection {
  const section = content.match(/## OBJECTIVE\n\n([\s\S]*?)(?=\n---|\n## )/i)
  if (!section) return { primary: "", goals: [] }

  const text = section[1]

  // Extract primary objective (first paragraph)
  const primaryMatch = text.match(/^([\s\S]+?)(?=\n\n|\*\*Primary Goals)/)
  const primary = primaryMatch ? primaryMatch[1].trim() : ""

  // Extract goals from bullet list
  const goals: string[] = []
  const goalsMatch = text.match(/\*\*Primary Goals:\*\*\n([\s\S]*?)(?=\n\n|$)/i)
  if (goalsMatch) {
    const bulletItems = goalsMatch[1].match(/^-\s+(.+)$/gm)
    if (bulletItems) {
      bulletItems.forEach(item => {
        goals.push(item.replace(/^-\s+/, "").trim())
      })
    }
  }

  return { primary, goals }
}

/**
 * Extract scope section
 */
export function extractScope(content: string): ScopeSection {
  const section = content.match(/## SCOPE AND APPLICABILITY\n\n([\s\S]*?)(?=\n---|\n## )/i)
  if (!section) return { applicability: [], inclusions: [], exclusions: [] }

  const text = section[1]
  const scope: ScopeSection = {
    applicability: [],
    inclusions: [],
    exclusions: [],
  }

  // Extract mandatory applicability
  const applicabilityMatch = text.match(/### \d+\.\d+ Mandatory Applicability\n\n[\s\S]*?((?:^-\s+.+$\n?)+)/mi)
  if (applicabilityMatch) {
    const items = applicabilityMatch[1].match(/^-\s+(.+)$/gm)
    if (items) {
      scope.applicability = items.map(i => i.replace(/^-\s+/, "").trim())
    }
  }

  // Extract covered systems
  const coveredMatch = text.match(/### \d+\.\d+ AI Systems Covered\n\n[\s\S]*?((?:^-\s+.+$\n?)+)/mi)
  if (coveredMatch) {
    const items = coveredMatch[1].match(/^-\s+(.+)$/gm)
    if (items) {
      scope.inclusions = items.map(i => i.replace(/^-\s+/, "").trim())
    }
  }

  // Extract out of scope
  const outOfScopeMatch = text.match(/### \d+\.\d+ Out of Scope\n\n((?:^-\s+.+$\n?)+)/mi)
  if (outOfScopeMatch) {
    const items = outOfScopeMatch[1].match(/^-\s+(.+)$/gm)
    if (items) {
      scope.exclusions = items.map(i => i.replace(/^-\s+/, "").trim())
    }
  }

  return scope
}

/**
 * Extract all controls from the document
 * Format: ### Control XXX-NNN: Control Name
 */
export function extractControls(content: string): ControlDefinition[] {
  const controls: ControlDefinition[] = []

  // Match control sections
  const controlPattern = /### Control ([A-Z]+-\d+):\s*(.+?)\n\n([\s\S]*?)(?=\n### Control|\n---\n|\n## |$)/gi
  let match

  while ((match = controlPattern.exec(content)) !== null) {
    const controlId = match[1]
    const controlContent = match[3]

    const control = parseControlBlock(controlId, controlContent)
    if (control) {
      controls.push(control)
    }
  }

  return controls
}

/**
 * Parse a single control block
 */
function parseControlBlock(id: string, content: string): ControlDefinition | null {
  const getValue = (field: string): string => {
    const regex = new RegExp(`\\*\\*${field}:\\*\\*\\s*(.+?)(?:\\s{2}|$|\\n)`, "i")
    const match = content.match(regex)
    return match ? match[1].trim() : ""
  }

  const name = getValue("Control Name")
  const typeStr = getValue("Control Type").toLowerCase()
  const frequency = getValue("Control Frequency")
  const riskLevelStr = getValue("Risk Level").toLowerCase()

  // Extract objective
  const objectiveMatch = content.match(/#### Control Objective\n\n([\s\S]*?)(?=\n####|\n---|\n### |$)/i)
  const objective = objectiveMatch ? objectiveMatch[1].trim() : ""

  // Extract requirements
  const requirements = extractControlRequirements(content)

  // Extract evidence required
  const evidenceMatch = content.match(/\*\*Evidence Required:\*\*\n([\s\S]*?)(?=\n\*\*|\n####|\n---|\n### |$)/i)
  const evidenceRequired: string[] = []
  if (evidenceMatch) {
    const items = evidenceMatch[1].match(/^-\s+(.+)$/gm)
    if (items) {
      items.forEach(item => {
        evidenceRequired.push(item.replace(/^-\s+/, "").trim())
      })
    }
  }

  // Extract audit verification
  const auditMatch = content.match(/\*\*Audit Verification:\*\*\n([\s\S]*?)(?=\n\*\*|\n####|\n---|\n### |$)/i)
  const auditVerification: string[] = []
  if (auditMatch) {
    const items = auditMatch[1].match(/^-\s+(.+)$/gm)
    if (items) {
      items.forEach(item => {
        auditVerification.push(item.replace(/^-\s+/, "").trim())
      })
    }
  }

  return {
    id,
    name,
    type: (typeStr as ControlType) || "preventive",
    frequency,
    riskLevel: (riskLevelStr as RiskLevel) || "medium",
    objective,
    requirements,
    evidenceRequired,
    auditVerification,
  }
}

/**
 * Extract control requirements (CR-XXX.X items)
 */
function extractControlRequirements(content: string): ControlRequirement[] {
  const requirements: ControlRequirement[] = []

  // Match CR-XXX.X patterns
  const crPattern = /\*\*CR-(\d+\.\d+):\s*(.+?)\*\*\n\n([\s\S]*?)(?=\n\*\*CR-|\n\*\*Evidence|\n\*\*Audit|\n####|\n---|\n### |$)/gi
  let match

  while ((match = crPattern.exec(content)) !== null) {
    const crId = `CR-${match[1]}`
    const title = match[2].trim()
    const crContent = match[3]

    // Extract description (first paragraph)
    const descMatch = crContent.match(/^([\s\S]+?)(?=\n\n|\*\*Mandatory)/)
    const description = descMatch ? descMatch[1].trim() : ""

    // Extract mandatory actions
    const mandatoryActions: string[] = []
    const actionsMatch = crContent.match(/\*\*Mandatory Actions:\*\*\n([\s\S]*?)(?=\n\*\*|\n\n[A-Z]|$)/i)
    if (actionsMatch) {
      const items = actionsMatch[1].match(/^-\s+(.+)$/gm)
      if (items) {
        items.forEach(item => {
          mandatoryActions.push(item.replace(/^-\s+/, "").trim())
        })
      }
    }

    requirements.push({
      id: crId,
      title,
      description,
      mandatoryActions,
    })
  }

  return requirements
}

/**
 * Extract KPIs from table
 * Format: | KPI ID | KPI Name | Definition | Target | Measurement Method | Frequency | Owner | Reporting To |
 */
export function extractKPIs(content: string): KPIDefinition[] {
  const kpis: KPIDefinition[] = []

  // Find KPI table section
  const section = content.match(/### \d+\.\d+ Classification KPIs\n\n([\s\S]*?)(?=\n---|\n### )/i) ||
                  content.match(/## KEY PERFORMANCE INDICATORS.*?\n\n([\s\S]*?)(?=\n---|\n## )/i)

  if (!section) return kpis

  // Parse table rows
  const tableRows = section[1].match(/\|\s*\*\*KPI-[A-Z]+-\d+\*\*\s*\|[^|]+\|[^|]+\|[^|]+\|[^|]+\|[^|]+\|[^|]+\|[^|]+\|/g)

  if (!tableRows) return kpis

  for (const row of tableRows) {
    const cells = row.split("|").map(c => c.trim().replace(/\*\*/g, "")).filter(Boolean)
    if (cells.length >= 8) {
      kpis.push({
        id: cells[0],
        name: cells[1],
        definition: cells[2],
        target: cells[3],
        measurementMethod: cells[4],
        frequency: cells[5],
        owner: cells[6],
        reportingTo: cells[7],
      })
    }
  }

  // Try to extract thresholds
  const thresholdsSection = content.match(/### \d+\.\d+ KPI Thresholds.*?\n\n([\s\S]*?)(?=\n---|\n### |$)/i)
  if (thresholdsSection) {
    const thresholdRows = thresholdsSection[1].match(/\|\s*\*\*[^|]+\*\*\s*\|[^|]+\|[^|]+\|[^|]+\|[^|]+\|/g)
    if (thresholdRows) {
      for (const row of thresholdRows) {
        const cells = row.split("|").map(c => c.trim().replace(/\*\*/g, "")).filter(Boolean)
        if (cells.length >= 4) {
          const kpiName = cells[0]
          const kpi = kpis.find(k => k.name.includes(kpiName) || kpiName.includes(k.name.substring(0, 20)))
          if (kpi) {
            kpi.thresholds = {
              green: cells[1],
              yellow: cells[2],
              red: cells[3],
            }
          }
        }
      }
    }
  }

  return kpis
}

/**
 * Extract RACI matrix
 */
export function extractRACIMatrix(content: string): RACIMatrix {
  const section = content.match(/## ROLES AND RESPONSIBILITIES\n\n([\s\S]*?)(?=\n---|\n## )/i)
  if (!section) return { activities: [], roles: [] }

  // Find RACI table
  const raciTableMatch = section[1].match(/### \d+\.\d+ RACI Matrix.*?\n\n([\s\S]*?)(?=\n---|\n### |$)/i)
  if (!raciTableMatch) return { activities: [], roles: [] }

  const tableContent = raciTableMatch[1]
  const lines = tableContent.split("\n").filter(l => l.trim().startsWith("|"))

  if (lines.length < 3) return { activities: [], roles: [] }

  // Parse header to get roles
  const headerCells = lines[0].split("|").map(c => c.trim()).filter(Boolean)
  const roles = headerCells.slice(1) // First column is Activity

  // Parse data rows
  const activities: RACIActivity[] = []
  for (let i = 2; i < lines.length; i++) { // Skip header and separator
    const cells = lines[i].split("|").map(c => c.trim()).filter(Boolean)
    if (cells.length >= 2) {
      const activityName = cells[0].replace(/\*\*/g, "")
      const assignments: Record<string, RACIValue> = {}

      for (let j = 1; j < cells.length && j <= roles.length; j++) {
        const value = cells[j].toUpperCase().trim()
        if (["R", "A", "C", "I"].includes(value)) {
          assignments[roles[j - 1]] = value as RACIValue
        } else {
          assignments[roles[j - 1]] = ""
        }
      }

      activities.push({ name: activityName, assignments })
    }
  }

  return { activities, roles }
}

/**
 * Extract training requirements
 */
export function extractTrainingRequirements(content: string): TrainingRequirement[] {
  const training: TrainingRequirement[] = []

  const section = content.match(/### \d+\.\d+ Role-Based Training Requirements\n\n([\s\S]*?)(?=\n---|\n### )/i)
  if (!section) return training

  // Parse table rows
  const tableRows = section[1].match(/\|\s*\*\*[^|]+\*\*\s*\|[^|]+\|[^|]+\|[^|]+\|[^|]+\|[^|]+\|/g)

  if (!tableRows) return training

  for (const row of tableRows) {
    const cells = row.split("|").map(c => c.trim().replace(/\*\*/g, "")).filter(Boolean)
    if (cells.length >= 6) {
      const assessmentText = cells[5].toLowerCase()
      const passingMatch = assessmentText.match(/(\d+%?)/)

      training.push({
        role: cells[0],
        course: cells[1],
        duration: cells[2],
        content: cells[3].split(";").map(c => c.trim()),
        frequency: cells[4],
        assessmentRequired: assessmentText.includes("yes"),
        passingScore: passingMatch ? passingMatch[1] : undefined,
      })
    }
  }

  return training
}

/**
 * Extract procedures section
 */
export function extractProcedures(content: string): ProcedureSection[] {
  const procedures: ProcedureSection[] = []

  const section = content.match(/## SUPPORTING PROCEDURES\n\n([\s\S]*?)(?=\n---|\n## )/i)
  if (!section) return procedures

  // Match procedure subsections
  const procPattern = /### \d+\.\d+ (PROC-[A-Z]+-\d+):\s*(.+?)\n\n([\s\S]*?)(?=\n### |$)/gi
  let match

  while ((match = procPattern.exec(section[1])) !== null) {
    const procId = match[1]
    const title = match[2].trim()
    const procContent = match[3]

    // Extract steps from workflow table or bullet list
    const steps: { order: number; description: string; responsible?: string; outputs?: string[] }[] = []

    const tableMatch = procContent.match(/\|[^|]+\|[^|]+\|[^|]+\|[^|]+\|/g)
    if (tableMatch && tableMatch.length > 2) {
      for (let i = 2; i < tableMatch.length; i++) {
        const cells = tableMatch[i].split("|").map(c => c.trim()).filter(Boolean)
        if (cells.length >= 3) {
          steps.push({
            order: parseInt(cells[0]) || i - 1,
            description: cells[1],
            responsible: cells[2] || undefined,
            outputs: cells[3] ? cells[3].split(",").map(o => o.trim()) : undefined,
          })
        }
      }
    }

    procedures.push({
      id: procId,
      title,
      steps,
    })
  }

  return procedures
}

/**
 * Extract compliance section
 */
export function extractCompliance(content: string): ComplianceSection {
  const section = content.match(/## COMPLIANCE\n\n([\s\S]*?)(?=\n---|\n## )/i)
  if (!section) return { requirements: [], monitoring: [], reporting: [] }

  const compliance: ComplianceSection = {
    requirements: [],
    monitoring: [],
    reporting: [],
  }

  // Extract requirements
  const reqMatch = section[1].match(/### \d+\.\d+ Compliance Requirements\n\n([\s\S]*?)(?=\n### |$)/i)
  if (reqMatch) {
    const items = reqMatch[1].match(/^-\s+(.+)$/gm)
    if (items) {
      compliance.requirements = items.map(i => i.replace(/^-\s+/, "").trim())
    }
  }

  // Extract monitoring
  const monMatch = section[1].match(/### \d+\.\d+ Compliance Monitoring\n\n([\s\S]*?)(?=\n### |$)/i)
  if (monMatch) {
    const items = monMatch[1].match(/^-\s+(.+)$/gm)
    if (items) {
      compliance.monitoring = items.map(i => i.replace(/^-\s+/, "").trim())
    }
  }

  return compliance
}

/**
 * Extract exceptions
 */
export function extractExceptions(content: string): ExceptionDefinition[] {
  const exceptions: ExceptionDefinition[] = []

  const section = content.match(/## EXCEPTIONS\n\n([\s\S]*?)(?=\n---|\n## )/i)
  if (!section) return exceptions

  // Parse exception types table
  const tableMatch = section[1].match(/### \d+\.\d+ Exception Types.*?\n\n([\s\S]*?)(?=\n### |$)/i)
  if (tableMatch) {
    const rows = tableMatch[1].match(/\|[^|]+\|[^|]+\|[^|]+\|[^|]+\|[^|]+\|/g)
    if (rows && rows.length > 2) {
      for (let i = 2; i < rows.length; i++) {
        const cells = rows[i].split("|").map(c => c.trim().replace(/\*\*/g, "")).filter(Boolean)
        if (cells.length >= 4) {
          exceptions.push({
            type: cells[0],
            approvalAuthority: cells[1],
            process: cells[2],
            duration: cells[3],
            documentation: cells[4] ? cells[4].split(",").map(d => d.trim()) : [],
          })
        }
      }
    }
  }

  return exceptions
}

/**
 * Extract enforcement rules
 */
export function extractEnforcement(content: string): EnforcementRule[] {
  const rules: EnforcementRule[] = []

  const section = content.match(/## ENFORCEMENT\n\n([\s\S]*?)(?=\n---|\n## )/i)
  if (!section) return rules

  // Parse non-compliance consequences table
  const tableMatch = section[1].match(/### \d+\.\d+ Non-Compliance Consequences.*?\n\n([\s\S]*?)(?=\n### |$)/i)
  if (tableMatch) {
    const rows = tableMatch[1].match(/\|[^|]+\|[^|]+\|[^|]+\|/g)
    if (rows && rows.length > 2) {
      for (let i = 2; i < rows.length; i++) {
        const cells = rows[i].split("|").map(c => c.trim().replace(/\*\*/g, "")).filter(Boolean)
        if (cells.length >= 2) {
          rules.push({
            violation: cells[0],
            consequence: cells[1],
            escalation: cells[2] || "",
          })
        }
      }
    }
  }

  return rules
}

/**
 * Extract definitions/glossary
 */
export function extractDefinitions(content: string): DefinitionEntry[] {
  const definitions: DefinitionEntry[] = []

  const section = content.match(/## DEFINITIONS\n\n([\s\S]*?)(?=\n---|\n## )/i)
  if (!section) return definitions

  // Parse table
  const rows = section[1].match(/\|\s*\*\*[^|]+\*\*\s*\|[^|]+\|/g)
  if (rows) {
    for (const row of rows) {
      const cells = row.split("|").map(c => c.trim().replace(/\*\*/g, "")).filter(Boolean)
      if (cells.length >= 2) {
        definitions.push({
          term: cells[0],
          definition: cells[1],
          source: cells[2] || undefined,
        })
      }
    }
  }

  return definitions
}

/**
 * Extract regulatory mapping (AI Act / ISO 42001)
 */
export function extractRegulatoryMapping(content: string): RegulatoryMappingEntry[] {
  const mappings: RegulatoryMappingEntry[] = []

  const section = content.match(/## LINK WITH AI ACT AND ISO42001\n\n([\s\S]*?)(?=\n---|\n## |$)/i)
  if (!section) return mappings

  // Parse AI Act mapping table
  const aiActMatch = section[1].match(/### \d+\.\d+ EU AI Act Mapping.*?\n\n([\s\S]*?)(?=\n### |$)/i)
  if (aiActMatch) {
    const rows = aiActMatch[1].match(/\|[^|]+\|[^|]+\|[^|]+\|/g)
    if (rows && rows.length > 2) {
      for (let i = 2; i < rows.length; i++) {
        const cells = rows[i].split("|").map(c => c.trim().replace(/\*\*/g, "")).filter(Boolean)
        if (cells.length >= 2) {
          mappings.push({
            requirement: cells[0],
            aiActReference: cells[1],
            notes: cells[2] || undefined,
          })
        }
      }
    }
  }

  // Parse ISO 42001 mapping table
  const isoMatch = section[1].match(/### \d+\.\d+ ISO 42001 Mapping.*?\n\n([\s\S]*?)(?=\n### |$)/i)
  if (isoMatch) {
    const rows = isoMatch[1].match(/\|[^|]+\|[^|]+\|[^|]+\|/g)
    if (rows && rows.length > 2) {
      for (let i = 2; i < rows.length; i++) {
        const cells = rows[i].split("|").map(c => c.trim().replace(/\*\*/g, "")).filter(Boolean)
        if (cells.length >= 2) {
          // Find existing mapping or create new
          const existing = mappings.find(m => m.requirement === cells[0])
          if (existing) {
            existing.isoReference = cells[1]
          } else {
            mappings.push({
              requirement: cells[0],
              aiActReference: "",
              isoReference: cells[1],
              notes: cells[2] || undefined,
            })
          }
        }
      }
    }
  }

  return mappings
}

/**
 * Extract checklist items from content
 * Format: - [ ] or - [x]
 */
export function extractChecklists(content: string): { checked: boolean; text: string }[] {
  const items: { checked: boolean; text: string }[] = []

  const matches = content.match(/^-\s*\[([ xX])\]\s*(.+)$/gm)
  if (matches) {
    for (const match of matches) {
      const parsed = match.match(/^-\s*\[([ xX])\]\s*(.+)$/)
      if (parsed) {
        items.push({
          checked: parsed[1].toLowerCase() === "x",
          text: parsed[2].trim(),
        })
      }
    }
  }

  return items
}

/**
 * Get section by heading
 */
export function getSection(content: string, heading: string): string | null {
  const regex = new RegExp(`## ${heading}\\n\\n([\\s\\S]*?)(?=\\n---\\n|\\n## |$)`, "i")
  const match = content.match(regex)
  return match ? match[1].trim() : null
}

/**
 * Count total controls in document
 */
export function countControls(content: string): number {
  const matches = content.match(/### Control [A-Z]+-\d+:/gi)
  return matches ? matches.length : 0
}

/**
 * Get control prefix from standard ID
 * e.g., "std-ai-001" -> "CLS", "std-ai-002" -> "RM"
 */
export function getControlPrefixFromStandardId(standardId: string): string {
  const prefixMap: Record<string, string> = {
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

  const match = standardId.match(/(\d+)$/)
  if (!match) return ""

  const num = match[1].padStart(3, "0")
  return prefixMap[num] || ""
}
