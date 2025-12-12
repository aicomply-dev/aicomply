/**
 * Procedure Markdown Parser
 * Extracts structured data from EU AI Act procedure markdown documents
 */

import type {
  ParsedProcedure,
  ProcedureMetadata,
  ContactEntry,
  TOCItem,
  RACIMatrix,
  RACIValue,
  FrameworkDiagram,
  FrameworkComponent,
  ProcedureStep,
  HowStep,
  ControlDefinition,
  ControlType,
  RiskLevel,
  KPITable,
  KPIDefinition,
  DocumentationRequirements,
  TemplateDefinition,
  RecordDefinition,
  SimpleTable,
  ClassificationMatrix,
  ClassificationLevel,
  Appendix,
  GlossaryEntry,
  PurposeScope,
  RolesResponsibilities,
} from "@/lib/types/procedure"

// ============================================
// MAIN PARSER FUNCTION
// ============================================

export function parseProcedure(markdown: string): ParsedProcedure {
  const sections = splitIntoSections(markdown)

  return {
    metadata: extractMetadata(markdown),
    tableOfContents: extractTableOfContents(markdown),
    purposeScope: extractPurposeScope(sections),
    rolesResponsibilities: extractRolesResponsibilities(sections),
    framework: extractFrameworkDiagram(markdown),
    steps: extractProcedureSteps(markdown),
    controls: extractControls(markdown),
    kpis: extractKPIs(markdown),
    documentationRequirements: extractDocumentationRequirements(markdown),
    reviewAudit: extractReviewAudit(markdown),
    relatedDocuments: extractRelatedDocuments(sections),
    appendices: extractAppendices(markdown),
    approvalBlock: undefined, // Optional, extract if needed
    revisionHistory: extractRevisionHistory(markdown),
    rawContent: markdown,
  }
}

// ============================================
// SECTION SPLITTER
// ============================================

function splitIntoSections(markdown: string): Map<string, string> {
  const sections = new Map<string, string>()
  const lines = markdown.split("\n")
  let currentSection = ""
  let currentContent: string[] = []

  for (const line of lines) {
    const h2Match = line.match(/^## (\d+)\. (.+)$/)
    if (h2Match) {
      if (currentSection) {
        sections.set(currentSection, currentContent.join("\n"))
      }
      currentSection = h2Match[2].toUpperCase().replace(/\s+/g, "_")
      currentContent = [line]
    } else {
      currentContent.push(line)
    }
  }

  if (currentSection) {
    sections.set(currentSection, currentContent.join("\n"))
  }

  return sections
}

// ============================================
// METADATA EXTRACTION
// ============================================

export function extractMetadata(markdown: string): ProcedureMetadata {
  const getField = (pattern: RegExp): string => {
    const match = markdown.match(pattern)
    return match?.[1]?.trim() || ""
  }

  const coversControlsMatch = markdown.match(/\*\*Covers Controls:\*\*\s*(.+)/i)
  const coversControls = coversControlsMatch
    ? coversControlsMatch[1].split(",").map(c => c.trim())
    : []

  const approvalStatus = getField(/\*\*Approval Status:\*\*\s*\[?([^\]]+)\]?/i)

  return {
    procedureId: getField(/\*\*Procedure ID:\*\*\s*(.+)/i),
    procedureName: getField(/\*\*Procedure Name:\*\*\s*(.+)/i),
    standard: getField(/\*\*Standard:\*\*\s*(.+)/i),
    coversControls,
    euAiActArticle: getField(/\*\*EU AI Act Article:\*\*\s*(.+)/i) || undefined,
    effectiveDate: getField(/\*\*Effective Date:\*\*\s*(.+)/i),
    lastUpdated: getField(/\*\*Last Updated:\*\*\s*(.+)/i),
    nextReviewDate: getField(/\*\*Next Review Date:\*\*\s*(.+)/i),
    approvalStatus: (approvalStatus === "Approved" || approvalStatus === "In Review" || approvalStatus === "Draft")
      ? approvalStatus
      : "Draft",
  }
}

// ============================================
// TABLE OF CONTENTS EXTRACTION
// ============================================

export function extractTableOfContents(markdown: string): TOCItem[] {
  const tocSection = markdown.match(/## TABLE OF CONTENTS\n\n([\s\S]*?)(?=\n---|\n## \d)/i)
  if (!tocSection) return []

  const items: TOCItem[] = []
  const lines = tocSection[1].split("\n").filter(l => l.trim())

  for (const line of lines) {
    const match = line.match(/^(\d+)\.?\s*\[(.+?)\]\(#(.+?)\)/)
    if (match) {
      items.push({
        id: match[3],
        number: match[1],
        title: match[2],
        level: 1,
      })
    }
  }

  return items
}

// ============================================
// CONTACT EXTRACTION
// ============================================

export function extractContacts(markdown: string): ContactEntry[] {
  const contacts: ContactEntry[] = []

  // Find the owner/contacts table
  const tableMatch = markdown.match(/### \d+\.\d+ Procedure Owner and Contacts\n\n([\s\S]*?)(?=\n---|\n### |\n## )/i)
  if (!tableMatch) return contacts

  const table = parseMarkdownTable(tableMatch[1])
  if (!table) return contacts

  for (const row of table.rows) {
    if (row.length >= 4) {
      contacts.push({
        role: row[0].replace(/\*\*/g, "").trim(),
        name: row[1].trim(),
        title: row[2].trim(),
        contact: row[3].trim(),
      })
    }
  }

  return contacts
}

// ============================================
// PURPOSE & SCOPE EXTRACTION
// ============================================

function extractPurposeScope(sections: Map<string, string>): PurposeScope {
  const section = sections.get("PURPOSE_AND_SCOPE") || ""

  // Extract purpose
  const purposeMatch = section.match(/### \d+\.\d+ Purpose\n\n([\s\S]*?)(?=\n### |\n## |$)/i)
  const purpose = purposeMatch ? purposeMatch[1].trim() : ""

  // Extract scope
  const scopeMatch = section.match(/### \d+\.\d+ Scope\n\n([\s\S]*?)(?=\n### |\n## |$)/i)
  const scopeContent = scopeMatch ? scopeMatch[1] : ""

  const applies: string[] = []
  const doesNotApply: string[] = []

  const appliesMatch = scopeContent.match(/This procedure applies to:\n([\s\S]*?)(?=This procedure does not apply|$)/i)
  if (appliesMatch) {
    const items = appliesMatch[1].match(/^- .+$/gm)
    if (items) {
      applies.push(...items.map(i => i.replace(/^- /, "").trim()))
    }
  }

  const notAppliesMatch = scopeContent.match(/This procedure does not apply to:\n([\s\S]*?)(?=\n### |\n## |$)/i)
  if (notAppliesMatch) {
    const items = notAppliesMatch[1].match(/^- .+$/gm)
    if (items) {
      doesNotApply.push(...items.map(i => i.replace(/^- /, "").trim()))
    }
  }

  return {
    purpose,
    scope: { applies, doesNotApply },
    ownerContacts: extractContacts(section),
  }
}

// ============================================
// ROLES & RESPONSIBILITIES EXTRACTION
// ============================================

function extractRolesResponsibilities(sections: Map<string, string>): RolesResponsibilities {
  const section = sections.get("ROLES_AND_RESPONSIBILITIES") || ""

  // Extract key roles table
  const keyRolesMatch = section.match(/### \d+\.\d+ Key Roles\n\n([\s\S]*?)(?=\n### |\n## |$)/i)
  const keyRoles = keyRolesMatch ? parseMarkdownTable(keyRolesMatch[1]) : { headers: [], rows: [] }

  // Extract RACI matrix
  const raciMatch = section.match(/### \d+\.\d+ RACI Matrix\n\n([\s\S]*?)(?=\*\*Legend\*\*|\n### |\n## |$)/i)
  const raciMatrix = raciMatch ? extractRACIMatrix(raciMatch[1]) : {
    title: "RACI Matrix",
    activities: [],
    roles: [],
    assignments: {},
  }

  return {
    keyRoles: keyRoles || { headers: [], rows: [] },
    raciMatrix,
  }
}

// ============================================
// RACI MATRIX EXTRACTION
// ============================================

export function extractRACIMatrix(content: string): RACIMatrix {
  const table = parseMarkdownTable(content)
  if (!table || table.rows.length === 0) {
    return {
      title: "RACI Matrix",
      activities: [],
      roles: [],
      assignments: {},
    }
  }

  const roles = table.headers.slice(1) // First column is Activity
  const activities: string[] = []
  const assignments: Record<string, Record<string, RACIValue>> = {}

  for (const row of table.rows) {
    const activity = row[0].replace(/\*\*/g, "").trim()
    activities.push(activity)
    assignments[activity] = {}

    for (let i = 1; i < row.length && i <= roles.length; i++) {
      const value = row[i].trim().toUpperCase()
      assignments[activity][roles[i - 1]] =
        (value === "R" || value === "A" || value === "C" || value === "I") ? value : ""
    }
  }

  return {
    title: "RACI Matrix",
    activities,
    roles,
    assignments,
  }
}

// ============================================
// FRAMEWORK DIAGRAM EXTRACTION
// ============================================

export function extractFrameworkDiagram(markdown: string): FrameworkDiagram | undefined {
  // Find ASCII box diagram
  const asciiMatch = markdown.match(/```\n(┌[\s\S]*?└[─┘]+)\n```/m)
  if (!asciiMatch) return undefined

  const rawAscii = asciiMatch[1]

  // Extract title from first line
  const titleMatch = rawAscii.match(/│\s*(.+?FRAMEWORK|.+?SYSTEM)\s*│/i)
  const title = titleMatch ? titleMatch[1].trim() : "Framework"

  // Extract components
  const components: FrameworkComponent[] = []
  const componentMatches = rawAscii.matchAll(/│\s*(\d+)\.\s*([A-Z][A-Z\s&]+)\s*│/g)

  for (const match of componentMatches) {
    const componentId = match[1]
    const componentName = match[2].trim()

    // Find sub-components (├─ or └─ lines)
    const subComponents: string[] = []
    const subPattern = new RegExp(`│\\s*├─\\s*(.+?)\\s*│|│\\s*└─\\s*(.+?)\\s*│`, "g")
    let subMatch

    // Look for sub-components after this component
    const componentIndex = rawAscii.indexOf(`${componentId}. ${componentName}`)
    const nextComponentIndex = rawAscii.indexOf(`│  ${parseInt(componentId) + 1}.`)
    const componentSection = nextComponentIndex > -1
      ? rawAscii.slice(componentIndex, nextComponentIndex)
      : rawAscii.slice(componentIndex)

    while ((subMatch = subPattern.exec(componentSection)) !== null) {
      const subName = (subMatch[1] || subMatch[2])?.trim()
      if (subName) {
        subComponents.push(subName)
      }
    }

    components.push({
      id: componentId,
      name: componentName,
      subComponents,
    })
  }

  return {
    title,
    components,
    rawAscii,
  }
}

// ============================================
// PROCEDURE STEPS EXTRACTION
// ============================================

export function extractProcedureSteps(markdown: string): ProcedureStep[] {
  const steps: ProcedureStep[] = []

  // Find all step headers like "#### Step X.X: Step Name (Control XXX-001)"
  const stepPattern = /#### \*?\*?Step (\d+\.\d+):?\*?\*?\s*(.+?)(?:\s*\(Control ([A-Z]+-\d+)\))?\n\n([\s\S]*?)(?=\n#### |\n### |\n## |$)/gi

  let match
  while ((match = stepPattern.exec(markdown)) !== null) {
    const stepNumber = match[1]
    const title = match[2].trim().replace(/\*\*/g, "")
    const controlId = match[3] || undefined
    const content = match[4]

    // Extract When, Who, How sections
    const whenMatch = content.match(/\*\*When:\*\*\s*(.+?)(?=\n\*\*|$)/s)
    const whoMatch = content.match(/\*\*Who:\*\*\s*(.+?)(?=\n\*\*|$)/s)
    const regulatoryMatch = content.match(/\*\*Regulatory Basis:\*\*\s*(.+?)(?=\n\*\*|$)/s)
    const evidenceMatch = content.match(/\*\*Evidence Required:\*\*\n([\s\S]*?)(?=\n\*\*|\n---|\n#### |$)/i)
    const timingMatch = content.match(/\*\*Timing:\*\*\s*(.+?)(?=\n\*\*|\n---|\n#### |$)/s)
    const qualityMatch = content.match(/\*\*Quality Check:\*\*\n([\s\S]*?)(?=\n---|\n#### |$)/i)

    // Extract How steps
    const howMatch = content.match(/\*\*How:\*\*\n\n([\s\S]*?)(?=\n\*\*Evidence|\n---|\n#### |$)/i)
    const howSteps = howMatch ? extractHowSteps(howMatch[1]) : []

    // Extract evidence list
    const evidenceRequired: string[] = []
    if (evidenceMatch) {
      const items = evidenceMatch[1].match(/^- .+$/gm)
      if (items) {
        evidenceRequired.push(...items.map(i => i.replace(/^- /, "").trim()))
      }
    }

    // Extract quality checks
    const qualityChecks: string[] = []
    if (qualityMatch) {
      const items = qualityMatch[1].match(/^- .+$/gm)
      if (items) {
        qualityChecks.push(...items.map(i => i.replace(/^- /, "").trim()))
      }
    }

    steps.push({
      id: `step-${stepNumber}`,
      stepNumber,
      title,
      controlId,
      when: whenMatch ? whenMatch[1].trim() : "",
      who: whoMatch ? whoMatch[1].trim() : "",
      regulatoryBasis: regulatoryMatch ? regulatoryMatch[1].trim() : undefined,
      howSteps,
      evidenceRequired,
      timing: timingMatch ? timingMatch[1].trim() : undefined,
      qualityChecks: qualityChecks.length > 0 ? qualityChecks : undefined,
    })
  }

  return steps
}

function extractHowSteps(content: string): HowStep[] {
  const steps: HowStep[] = []
  const lines = content.split("\n")
  let currentStep: HowStep | null = null
  let currentSubStep: HowStep | null = null

  for (const line of lines) {
    // Main numbered step: "1. **Title**" or "1. Description"
    const mainMatch = line.match(/^(\d+)\.\s*\*\*(.+?)\*\*\s*(.*)$/) ||
                      line.match(/^(\d+)\.\s*(.+)$/)

    if (mainMatch) {
      if (currentStep) {
        steps.push(currentStep)
      }
      currentStep = {
        number: mainMatch[1],
        title: mainMatch[2].replace(/\*\*/g, "").trim(),
        description: mainMatch[3]?.trim() || undefined,
        items: [],
        subSteps: [],
      }
      currentSubStep = null
      continue
    }

    // Sub-step: "   a. Description" or "   - Bullet"
    if (currentStep) {
      const subMatch = line.match(/^\s+([a-z])\.\s*\*?\*?(.+?)\*?\*?\s*$/)
      if (subMatch) {
        currentSubStep = {
          number: `${currentStep.number}.${subMatch[1]}`,
          description: subMatch[2].trim(),
          items: [],
        }
        currentStep.subSteps = currentStep.subSteps || []
        currentStep.subSteps.push(currentSubStep)
        continue
      }

      // Bullet item
      const bulletMatch = line.match(/^\s+- (.+)$/)
      if (bulletMatch) {
        const item = bulletMatch[1].trim()
        if (currentSubStep) {
          currentSubStep.items = currentSubStep.items || []
          currentSubStep.items.push(item)
        } else {
          currentStep.items = currentStep.items || []
          currentStep.items.push(item)
        }
      }
    }
  }

  if (currentStep) {
    steps.push(currentStep)
  }

  return steps
}

// ============================================
// CONTROLS EXTRACTION
// ============================================

export function extractControls(markdown: string): ControlDefinition[] {
  const controls: ControlDefinition[] = []

  // Find control sections like "### 6.X Control XXX-001: Name (Type, Risk)"
  const controlPattern = /### \d+\.\d+ Control ([A-Z]+-\d+):\s*(.+?)\s*\((\w+),\s*(\w+)\)\n\n([\s\S]*?)(?=\n### \d+\.\d+ Control|\n## \d|\n---\n## |$)/gi

  let match
  while ((match = controlPattern.exec(markdown)) !== null) {
    const id = match[1]
    const name = match[2].trim()
    const typeStr = match[3].toLowerCase()
    const riskStr = match[4].toLowerCase()
    const content = match[5]

    // Extract sections
    const objectiveMatch = content.match(/\*\*Control Objective:\*\*\s*(.+?)(?=\n\*\*|$)/s)
    const descriptionMatch = content.match(/\*\*Control Description:\*\*\n([\s\S]*?)(?=\n\*\*Control Activities|$)/i)
    const activitiesMatch = content.match(/\*\*Control Activities:\*\*\n([\s\S]*?)(?=\n\*\*Control Owner|$)/i)
    const ownerMatch = content.match(/\*\*Control Owner:\*\*\s*(.+?)(?=\n\*\*|$)/s)
    const frequencyMatch = content.match(/\*\*Control Frequency:\*\*\s*(.+?)(?=\n\*\*|$)/s)
    const testingMatch = content.match(/\*\*Testing Approach:\*\*\n([\s\S]*?)(?=\n\*\*KPI|$)/i)
    const kpiMatch = content.match(/\*\*KPI:\*\*\s*(.+?)(?=\n---|$)/s)

    const extractList = (text: string | undefined): string[] => {
      if (!text) return []
      const items = text.match(/^- .+$/gm)
      return items ? items.map(i => i.replace(/^- /, "").trim()) : []
    }

    controls.push({
      id,
      name,
      type: (typeStr === "preventive" || typeStr === "detective" || typeStr === "corrective")
        ? typeStr as ControlType
        : "preventive",
      riskLevel: (riskStr === "critical" || riskStr === "high" || riskStr === "medium" || riskStr === "low")
        ? riskStr as RiskLevel
        : "medium",
      objective: objectiveMatch ? objectiveMatch[1].trim() : "",
      description: extractList(descriptionMatch?.[1]),
      activities: extractList(activitiesMatch?.[1]),
      owner: ownerMatch ? ownerMatch[1].trim() : "",
      frequency: frequencyMatch ? frequencyMatch[1].trim() : "",
      testingApproach: extractList(testingMatch?.[1]),
      kpi: kpiMatch ? kpiMatch[1].trim() : undefined,
    })
  }

  return controls
}

// ============================================
// KPI EXTRACTION
// ============================================

export function extractKPIs(markdown: string): KPITable[] {
  const tables: KPITable[] = []

  // Find KPI sections
  const kpiSectionPattern = /### \d+\.\d+\s*(.+?KPIs?.*?)\n\n([\s\S]*?)(?=\n### \d+\.\d+|\n## \d|$)/gi

  let match
  while ((match = kpiSectionPattern.exec(markdown)) !== null) {
    const title = match[1].trim()
    const content = match[2]

    const table = parseMarkdownTable(content)
    if (!table || table.rows.length === 0) continue

    const kpis: KPIDefinition[] = []

    for (const row of table.rows) {
      if (row.length >= 6) {
        kpis.push({
          id: row[0].replace(/\*\*/g, "").trim(),
          name: row[1].trim(),
          definition: row[2].trim(),
          target: row[3].trim(),
          frequency: row[4].trim(),
          owner: row[5].trim(),
        })
      }
    }

    if (kpis.length > 0) {
      tables.push({ title, kpis })
    }
  }

  return tables
}

// ============================================
// DOCUMENTATION REQUIREMENTS EXTRACTION
// ============================================

export function extractDocumentationRequirements(markdown: string): DocumentationRequirements {
  const templates: TemplateDefinition[] = []
  const records: RecordDefinition[] = []

  // Find documentation section
  const docSection = markdown.match(/## \d+\. DOCUMENTATION REQUIREMENTS\n\n([\s\S]*?)(?=\n## \d|\n---\n## |$)/i)
  if (!docSection) return { templates, records }

  const content = docSection[1]

  // Extract templates table
  const templateTableMatch = content.match(/### \d+\.\d+\s*.*Templates.*\n\n([\s\S]*?)(?=\n### |\n## |$)/i)
  if (templateTableMatch) {
    const table = parseMarkdownTable(templateTableMatch[1])
    if (table) {
      for (const row of table.rows) {
        if (row.length >= 3) {
          templates.push({
            id: row[0].replace(/\*\*/g, "").trim(),
            name: row[1].trim(),
            content: row[2].trim(),
            usage: row[3]?.trim(),
          })
        }
      }
    }
  }

  // Extract records table
  const recordTableMatch = content.match(/### \d+\.\d+\s*.*Records.*\n\n([\s\S]*?)(?=\n### |\n## |$)/i)
  if (recordTableMatch) {
    const table = parseMarkdownTable(recordTableMatch[1])
    if (table) {
      for (const row of table.rows) {
        if (row.length >= 4) {
          records.push({
            id: row[0].replace(/\*\*/g, "").trim(),
            name: row[1].trim(),
            content: row[2].trim(),
            retention: row[3].trim(),
          })
        }
      }
    }
  }

  return { templates, records }
}

// ============================================
// REVIEW & AUDIT EXTRACTION
// ============================================

function extractReviewAudit(markdown: string): SimpleTable[] {
  const tables: SimpleTable[] = []

  const section = markdown.match(/## \d+\. REVIEW AND AUDIT\n\n([\s\S]*?)(?=\n## \d|$)/i)
  if (!section) return tables

  const content = section[1]
  const tableMatches = content.matchAll(/### \d+\.\d+\s*(.+)\n\n(\|[\s\S]*?\|)\n(?=\n### |\n## |$)/gi)

  for (const match of tableMatches) {
    const table = parseMarkdownTable(match[2])
    if (table) {
      tables.push({ ...table, caption: match[1].trim() })
    }
  }

  return tables
}

// ============================================
// RELATED DOCUMENTS EXTRACTION
// ============================================

function extractRelatedDocuments(sections: Map<string, string>): { policies: string[]; procedures: string[]; regulatoryReferences: string[] } | undefined {
  const section = sections.get("RELATED_DOCUMENTS")
  if (!section) return undefined

  const extractList = (pattern: RegExp): string[] => {
    const match = section.match(pattern)
    if (!match) return []
    const items = match[1].match(/^- .+$/gm)
    return items ? items.map(i => i.replace(/^- /, "").trim()) : []
  }

  return {
    policies: extractList(/### \d+\.\d+\s*Policies.*\n\n([\s\S]*?)(?=\n### |\n## |$)/i),
    procedures: extractList(/### \d+\.\d+\s*Procedures.*\n\n([\s\S]*?)(?=\n### |\n## |$)/i),
    regulatoryReferences: extractList(/### \d+\.\d+\s*Regulatory.*\n\n([\s\S]*?)(?=\n### |\n## |$)/i),
  }
}

// ============================================
// APPENDICES EXTRACTION
// ============================================

export function extractAppendices(markdown: string): Appendix[] {
  const appendices: Appendix[] = []

  // Find appendix sections
  const appendixPattern = /### APPENDIX ([A-Z]):\s*(.+)\n\n([\s\S]*?)(?=\n### APPENDIX [A-Z]|\n---\n\*\*END|\n## REVISION|$)/gi

  let match
  while ((match = appendixPattern.exec(markdown)) !== null) {
    const id = match[1]
    const title = match[2].trim()
    const content = match[3]

    // Determine type and extract content
    let type: Appendix["type"] = "other"
    let parsedContent: Appendix["content"] = content

    if (title.toLowerCase().includes("decision tree") || title.toLowerCase().includes("flowchart")) {
      type = "decision-tree"
    } else if (title.toLowerCase().includes("glossary")) {
      type = "glossary"
      parsedContent = extractGlossary(content)
    } else if (title.toLowerCase().includes("checklist")) {
      type = "checklist"
    } else if (title.toLowerCase().includes("cross-reference")) {
      type = "cross-reference"
    } else if (title.toLowerCase().includes("quick reference")) {
      type = "quick-reference"
    }

    appendices.push({
      id,
      title,
      type,
      content: parsedContent,
    })
  }

  return appendices
}

// ============================================
// GLOSSARY EXTRACTION
// ============================================

function extractGlossary(content: string): GlossaryEntry[] {
  const entries: GlossaryEntry[] = []

  const table = parseMarkdownTable(content)
  if (table) {
    for (const row of table.rows) {
      if (row.length >= 2) {
        entries.push({
          term: row[0].replace(/\*\*/g, "").trim(),
          definition: row[1].trim(),
        })
      }
    }
  }

  return entries
}

// ============================================
// REVISION HISTORY EXTRACTION
// ============================================

function extractRevisionHistory(markdown: string): SimpleTable | undefined {
  const match = markdown.match(/## REVISION HISTORY\n\n([\s\S]*?)(?=\n---|\n## |$)/i)
  if (!match) return undefined

  return parseMarkdownTable(match[1]) || undefined
}

// ============================================
// CLASSIFICATION MATRIX EXTRACTION
// ============================================

export function extractClassificationMatrix(content: string): ClassificationMatrix | null {
  const table = parseMarkdownTable(content)
  if (!table || table.rows.length === 0) return null

  const levels: ClassificationLevel[] = []

  for (const row of table.rows) {
    if (row.length >= 2) {
      levels.push({
        level: row[0].replace(/\*\*/g, "").trim(),
        definition: row[1].trim(),
        examples: row[2]?.split("<br>").map(e => e.trim()) || [],
        responseTimeline: row[3]?.trim(),
        authorityReporting: row[4]?.trim(),
      })
    }
  }

  return {
    title: "Classification Matrix",
    headers: table.headers,
    levels,
  }
}

// ============================================
// MARKDOWN TABLE PARSER
// ============================================

export function parseMarkdownTable(content: string): SimpleTable | null {
  const lines = content.split("\n").filter(l => l.trim().startsWith("|"))
  if (lines.length < 2) return null

  const parseRow = (line: string): string[] => {
    return line
      .split("|")
      .slice(1, -1) // Remove empty first and last elements
      .map(cell => cell.trim())
  }

  const headers = parseRow(lines[0])

  // Skip separator line (---|---|---)
  const dataLines = lines.slice(2)
  const rows = dataLines.map(parseRow)

  return { headers, rows }
}
