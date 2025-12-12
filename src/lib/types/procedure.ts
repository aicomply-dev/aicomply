/**
 * Type definitions for parsed EU AI Act procedure documents
 * These types enable structured rendering of markdown procedures
 */

// ============================================
// METADATA & HEADER TYPES
// ============================================

export interface ProcedureMetadata {
  procedureId: string           // PROC-AI-XXX-001
  procedureName: string         // AI XXX Procedure
  standard: string              // STD-AI-XXX: XXX Standard
  coversControls: string[]      // ["XXX-001", "XXX-002"]
  euAiActArticle?: string       // Article 73
  effectiveDate: string         // Date or "[To be filled]"
  lastUpdated: string
  nextReviewDate: string
  approvalStatus: "Draft" | "Approved" | "In Review"
}

export interface ContactEntry {
  role: string                  // "Procedure Owner", "Escalation"
  name: string                  // "[Name]" or actual name
  title: string                 // "AI Incident Manager"
  contact: string               // "[Email/Phone]" or actual contact
}

// ============================================
// TABLE OF CONTENTS
// ============================================

export interface TOCItem {
  id: string                    // Section anchor
  number: string                // "1", "1.1", "1.1.1"
  title: string                 // Section title
  level: 1 | 2 | 3              // Heading level
  children?: TOCItem[]
}

// ============================================
// RACI MATRIX
// ============================================

export type RACIValue = "R" | "A" | "C" | "I" | ""

export interface RACIMatrix {
  title: string
  activities: string[]          // Row headers
  roles: string[]               // Column headers
  assignments: Record<string, Record<string, RACIValue>>
  // Key: activity name, Value: { role: RACI value }
}

// ============================================
// FRAMEWORK/ASCII DIAGRAM
// ============================================

export interface FrameworkComponent {
  id: string
  name: string
  subComponents: string[]
}

export interface FrameworkDiagram {
  title: string
  components: FrameworkComponent[]
  rawAscii: string              // Original ASCII for fallback
}

// ============================================
// DECISION TREE
// ============================================

export interface DecisionNode {
  id: string
  question: string
  yesPath?: DecisionNode | DecisionOutcome
  noPath?: DecisionNode | DecisionOutcome
  type: "question" | "outcome"
}

export interface DecisionOutcome {
  id: string
  label: string                 // "PROHIBITED", "HIGH-RISK", etc.
  description?: string
  type: "outcome"
}

export interface DecisionTree {
  title: string
  rootNode: DecisionNode
  rawAscii: string
}

// ============================================
// CLASSIFICATION MATRIX
// ============================================

export interface ClassificationLevel {
  level: string                 // "Critical", "High", "Medium", "Low"
  severity?: string             // Numeric or text
  definition: string
  examples?: string[]
  responseTimeline?: string
  authorityReporting?: string
  additionalColumns?: Record<string, string>
}

export interface ClassificationMatrix {
  title: string
  headers: string[]
  levels: ClassificationLevel[]
}

// ============================================
// PROCEDURE STEPS
// ============================================

export interface ProcedureStep {
  id: string                    // "1.1", "1.2"
  stepNumber: string
  title: string                 // "Detect Incident"
  controlId?: string            // "Control INC-001"
  when: string                  // Timing description
  who: string                   // Roles involved
  regulatoryBasis?: string      // Article reference
  howSteps: HowStep[]           // Numbered instructions
  evidenceRequired: string[]
  timing?: string               // Duration
  qualityChecks?: string[]
}

export interface HowStep {
  number: string                // "1", "1.a", "1.a.i"
  title?: string                // Bold title if present
  description?: string          // Description text
  subSteps?: HowStep[]
  items?: string[]              // Bullet points
  table?: SimpleTable           // Embedded table
}

// ============================================
// CONTROL DEFINITIONS
// ============================================

export type ControlType = "preventive" | "detective" | "corrective"
export type RiskLevel = "critical" | "high" | "medium" | "low"

export interface ControlDefinition {
  id: string                    // "CLS-001", "INC-001"
  name: string
  type: ControlType
  riskLevel: RiskLevel
  objective: string
  description: string[]
  activities: string[]
  owner: string
  frequency: string
  testingApproach: string[]
  kpi?: string
}

// ============================================
// KPI TABLES
// ============================================

export interface KPIDefinition {
  id: string                    // "KPI-CLS-001"
  name: string
  definition: string
  target: string                // "100%", "≤ 14 days"
  frequency: string             // "Monthly", "Quarterly"
  owner: string
  thresholds?: {
    green: string
    yellow: string
    red: string
  }
}

export interface KPITable {
  title: string
  kpis: KPIDefinition[]
}

// ============================================
// DOCUMENTATION TABLES
// ============================================

export interface TemplateDefinition {
  id: string                    // "TMP-AI-CLS-001"
  name: string
  content: string
  usage?: string
}

export interface RecordDefinition {
  id: string                    // "REC-AI-CLS-001"
  name: string
  content: string
  retention: string             // "10 years"
}

export interface DocumentationRequirements {
  templates: TemplateDefinition[]
  records: RecordDefinition[]
  governanceRecords?: RecordDefinition[]
}

// ============================================
// CHECKLISTS
// ============================================

export interface ChecklistItem {
  id: string
  text: string
  checked: boolean
  subItems?: ChecklistItem[]
}

export interface Checklist {
  title: string
  items: ChecklistItem[]
  category?: string
}

// ============================================
// GLOSSARY
// ============================================

export interface GlossaryEntry {
  term: string
  definition: string
  source?: string               // "EU AI Act Art. 3(1)"
}

// ============================================
// APPROVAL BLOCK
// ============================================

export interface ApprovalEntry {
  role: string                  // "Prepared By", "Approved By"
  name: string
  title: string
  signature?: string            // Placeholder
  date?: string
}

export interface ApprovalBlock {
  entries: ApprovalEntry[]
  documentStatus: string
  classification: string
  distribution: string
  retention: string
  reviewFrequency: string
  nextReviewDate: string
}

// ============================================
// SIMPLE TABLE (Generic)
// ============================================

export interface SimpleTable {
  headers: string[]
  rows: string[][]
  caption?: string
}

// ============================================
// SECTION TYPES
// ============================================

export interface PurposeScope {
  purpose: string
  scope: {
    applies: string[]
    doesNotApply: string[]
  }
  regulatoryBasis?: string[]
  ownerContacts: ContactEntry[]
}

export interface RolesResponsibilities {
  keyRoles: SimpleTable
  raciMatrix: RACIMatrix
}

export interface NonComplianceHandling {
  triggers: ClassificationMatrix
  escalationProcess: HowStep[]
  authorityNotification?: string
}

export interface RelatedDocuments {
  policies: string[]
  procedures: string[]
  regulatoryReferences: string[]
}

// ============================================
// APPENDIX TYPES
// ============================================

export interface Appendix {
  id: string                    // "A", "B", "C"
  title: string
  type: "decision-tree" | "glossary" | "checklist" | "cross-reference" | "quick-reference" | "other"
  content: DecisionTree | GlossaryEntry[] | Checklist | SimpleTable | string
}

// ============================================
// FULL PARSED PROCEDURE
// ============================================

export interface ParsedProcedure {
  metadata: ProcedureMetadata
  tableOfContents: TOCItem[]

  // Main sections
  purposeScope: PurposeScope
  rolesResponsibilities: RolesResponsibilities
  framework?: FrameworkDiagram
  steps: ProcedureStep[]
  controls: ControlDefinition[]
  kpis: KPITable[]
  documentationRequirements: DocumentationRequirements
  reviewAudit?: SimpleTable[]
  nonCompliance?: NonComplianceHandling
  relatedDocuments?: RelatedDocuments

  // Appendices
  appendices: Appendix[]

  // Approval
  approvalBlock?: ApprovalBlock
  revisionHistory?: SimpleTable

  // Raw content for fallback
  rawContent: string
}

// ============================================
// COMPONENT PROPS TYPES
// ============================================

export interface ProcedureMetadataCardProps {
  metadata: ProcedureMetadata
  contacts?: ContactEntry[]
}

export interface RACIMatrixProps {
  matrix: RACIMatrix
  highlightRole?: string
}

export interface ProcedureStepProps {
  step: ProcedureStep
  isExpanded?: boolean
}

export interface ControlCardProps {
  control: ControlDefinition
  isExpanded?: boolean
}

export interface KPITableProps {
  table: KPITable
  showThresholds?: boolean
}

export interface FrameworkDiagramProps {
  diagram: FrameworkDiagram
}

export interface DecisionTreeProps {
  tree: DecisionTree
  interactive?: boolean
}

export interface ChecklistProps {
  checklist: Checklist
  editable?: boolean
  onItemToggle?: (itemId: string, checked: boolean) => void
}

export interface ClassificationMatrixProps {
  matrix: ClassificationMatrix
  highlightLevel?: string
}
