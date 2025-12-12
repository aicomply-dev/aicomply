/**
 * Type definitions for parsed standard documents
 * Used by the markdown parser and UI components
 */

// ============================================================================
// Main Parsed Standard Interface
// ============================================================================

export interface ParsedStandard {
  metadata: StandardMetadata
  tableOfContents: TOCItem[]
  documentHistory: VersionHistoryEntry[]
  objective: ObjectiveSection
  scope: ScopeSection
  controls: ControlDefinition[]
  procedures: ProcedureSection[]
  compliance: ComplianceSection
  rolesResponsibilities: RACIMatrix
  exceptions: ExceptionDefinition[]
  enforcement: EnforcementRule[]
  kpis: KPIDefinition[]
  training: TrainingRequirement[]
  definitions: DefinitionEntry[]
  regulatoryMapping: RegulatoryMappingEntry[]
  rawContent: string // Original markdown for fallback rendering
}

// ============================================================================
// Document Metadata
// ============================================================================

export interface StandardMetadata {
  documentType: string
  standardId: string
  title: string
  version: string
  effectiveDate: string
  nextReviewDate: string
  reviewFrequency: string
  parentPolicy: string
  owner: string
  approvedBy: string
  status: "Draft" | "In Review" | "Approved"
  classification: string
}

// ============================================================================
// Table of Contents
// ============================================================================

export interface TOCItem {
  id: string
  title: string
  level: number // 1 = h1, 2 = h2, 3 = h3
  children?: TOCItem[]
}

// ============================================================================
// Document History
// ============================================================================

export interface VersionHistoryEntry {
  version: string
  date: string
  author: string
  changes: string
}

// ============================================================================
// Content Sections
// ============================================================================

export interface ObjectiveSection {
  primary: string
  goals: string[]
}

export interface ScopeSection {
  applicability: string[]
  inclusions: string[]
  exclusions: string[]
}

export interface ComplianceSection {
  requirements: string[]
  monitoring: string[]
  reporting: string[]
}

export interface ProcedureSection {
  id: string
  title: string
  steps: ProcedureStep[]
}

export interface ProcedureStep {
  order: number
  description: string
  responsible?: string
  outputs?: string[]
}

// ============================================================================
// Controls - Core Component
// ============================================================================

export interface ControlDefinition {
  id: string                    // CLS-001, RM-001, etc.
  name: string
  type: ControlType
  frequency: string
  riskLevel: RiskLevel
  objective: string
  requirements: ControlRequirement[]
  evidenceRequired: string[]
  auditVerification: string[]
}

export type ControlType = "preventive" | "detective" | "corrective"
export type RiskLevel = "critical" | "high" | "medium" | "low"

export interface ControlRequirement {
  id: string          // CR-001.1, CR-001.2, etc.
  title: string
  description: string
  mandatoryActions: string[]
}

// ============================================================================
// KPIs
// ============================================================================

export interface KPIDefinition {
  id: string                    // KPI-CLS-001, KPI-RM-001, etc.
  name: string
  definition: string
  target: string
  measurementMethod: string
  frequency: string
  owner: string
  reportingTo: string
  thresholds?: KPIThresholds
}

export interface KPIThresholds {
  green: string   // Target met
  yellow: string  // Warning threshold
  red: string     // Critical threshold
}

// ============================================================================
// RACI Matrix
// ============================================================================

export interface RACIMatrix {
  activities: RACIActivity[]
  roles: string[]
}

export interface RACIActivity {
  name: string
  assignments: Record<string, RACIValue>
}

export type RACIValue = "R" | "A" | "C" | "I" | ""

// ============================================================================
// Training Requirements
// ============================================================================

export interface TrainingRequirement {
  role: string
  course: string
  duration: string
  content: string[]
  frequency: string
  assessmentRequired: boolean
  passingScore?: string
}

// ============================================================================
// Exceptions & Enforcement
// ============================================================================

export interface ExceptionDefinition {
  type: string
  approvalAuthority: string
  process: string
  duration: string
  documentation: string[]
}

export interface EnforcementRule {
  violation: string
  consequence: string
  escalation: string
}

// ============================================================================
// Definitions & Glossary
// ============================================================================

export interface DefinitionEntry {
  term: string
  definition: string
  source?: string
}

// ============================================================================
// Regulatory Mapping
// ============================================================================

export interface RegulatoryMappingEntry {
  requirement: string
  aiActReference: string
  isoReference?: string
  nistReference?: string
  notes?: string
}

// ============================================================================
// Helper Types for UI Components
// ============================================================================

export interface ControlCardProps {
  control: ControlDefinition
  showDetails?: boolean
  onStatusChange?: (controlId: string, status: ControlStatus) => void
}

export type ControlStatus = "not_started" | "in_progress" | "implemented" | "verified"

export interface KPICardProps {
  kpi: KPIDefinition
  currentValue?: number | string
  status?: "green" | "yellow" | "red"
}

export interface RACIMatrixProps {
  matrix: RACIMatrix
  highlightRole?: string
  compact?: boolean
}

export interface ChecklistItem {
  id: string
  text: string
  checked: boolean
  category?: string
}

export interface ComplianceChecklistProps {
  items: ChecklistItem[]
  title: string
  editable?: boolean
  onItemToggle?: (itemId: string, checked: boolean) => void
}

export interface TOCNavProps {
  items: TOCItem[]
  activeId?: string
  onNavigate?: (id: string) => void
}
