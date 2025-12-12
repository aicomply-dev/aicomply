import { pgTable, text, integer, real, boolean, timestamp, index, uniqueIndex } from "drizzle-orm/pg-core"
import { nanoid } from "nanoid"

// ============================================
// Better Auth Tables
// ============================================

export const user = pgTable("user", {
  id: text("id").primaryKey(),
  name: text("name"),
  email: text("email").notNull().unique(),
  emailVerified: timestamp("emailVerified"),
  image: text("image"),
  passwordHash: text("passwordHash"),
  organizationId: text("organizationId"),
  lastLoginAt: timestamp("lastLoginAt"),
  createdAt: timestamp("createdAt"),
  updatedAt: timestamp("updatedAt"),
})

export const session = pgTable("session", {
  sessionToken: text("sessionToken").primaryKey(),
  userId: text("userId")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  expires: timestamp("expires").notNull(),
})

export const account = pgTable("account", {
  id: text("id").primaryKey().$defaultFn(() => nanoid()),
  userId: text("userId")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  type: text("type").notNull(),
  provider: text("provider").notNull(),
  providerAccountId: text("providerAccountId").notNull(),
  refresh_token: text("refresh_token"),
  access_token: text("access_token"),
  expires_at: integer("expires_at"),
  token_type: text("token_type"),
  scope: text("scope"),
  id_token: text("id_token"),
  session_state: text("session_state"),
})

export const verificationToken = pgTable("verificationToken", {
  identifier: text("identifier").notNull(),
  token: text("token").notNull().unique(),
  expires: timestamp("expires").notNull(),
})

// ============================================
// Organization Tables
// ============================================

export const organization = pgTable("organization", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description"),
  industry: text("industry"),
  size: text("size"), // small, medium, large, enterprise
  country: text("country"),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
})

export const organizationMember = pgTable("organization_member", {
  id: text("id").primaryKey(),
  organizationId: text("organization_id")
    .notNull()
    .references(() => organization.id, { onDelete: "cascade" }),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  role: text("role").notNull().default("member"), // owner, admin, member
  createdAt: timestamp("created_at").notNull(),
})

// ============================================
// AI Systems Inventory
// ============================================

export const aiSystem = pgTable(
  "ai_system",
  {
    id: text("id").primaryKey(),
    organizationId: text("organization_id")
      .notNull()
      .references(() => organization.id, { onDelete: "cascade" }),
    name: text("name").notNull(),
    description: text("description"),
    vendor: text("vendor"), // internal, third-party vendor name
    category: text("category"), // chatbot, recommendation, fraud-detection, etc.
    riskLevel: text("risk_level"), // prohibited, high, limited, minimal, unclassified
    status: text("status").notNull().default("active"), // active, inactive, decommissioned
    department: text("department"),
    dataTypes: text("data_types"), // JSON array of data types processed
    deploymentDate: timestamp("deployment_date"),
    lastAssessmentDate: timestamp("last_assessment_date"),
    // EU AI Act Role fields
    operatorRole: text("operator_role"), // primary role: provider, deployer, importer, distributor, gpai_provider
    additionalRoles: text("additional_roles"), // JSON array for multiple roles
    rolesDeterminedAt: timestamp("roles_determined_at"),
    createdAt: timestamp("created_at").notNull(),
    updatedAt: timestamp("updated_at").notNull(),
    createdById: text("created_by_id").references(() => user.id),
  },
  (table) => ({
    orgIdx: index("ai_system_org_idx").on(table.organizationId),
    riskIdx: index("ai_system_risk_idx").on(table.riskLevel),
    statusIdx: index("ai_system_status_idx").on(table.status),
    operatorRoleIdx: index("ai_system_operator_role_idx").on(table.operatorRole),
  })
)

// ============================================
// Assessments
// ============================================

export const assessment = pgTable(
  "assessment",
  {
    id: text("id").primaryKey(),
    organizationId: text("organization_id")
      .notNull()
      .references(() => organization.id, { onDelete: "cascade" }),
    aiSystemId: text("ai_system_id").references(() => aiSystem.id, { onDelete: "set null" }),
    type: text("type").notNull(), // risk-classification, gap-analysis, inventory, provider-deployer
    status: text("status").notNull().default("in_progress"), // not_started, in_progress, completed
    title: text("title").notNull(),
    description: text("description"),
    result: text("result"), // JSON with assessment results
    score: real("score"), // Overall compliance score 0-100
    completedAt: timestamp("completed_at"),
    createdAt: timestamp("created_at").notNull(),
    updatedAt: timestamp("updated_at").notNull(),
    createdById: text("created_by_id").references(() => user.id),
  },
  (table) => ({
    orgIdx: index("assessment_org_idx").on(table.organizationId),
    typeIdx: index("assessment_type_idx").on(table.type),
    statusIdx: index("assessment_status_idx").on(table.status),
    systemIdx: index("assessment_system_idx").on(table.aiSystemId),
    createdAtIdx: index("assessment_created_at_idx").on(table.createdAt),
  })
)

export const assessmentAnswer = pgTable(
  "assessment_answer",
  {
    id: text("id").primaryKey(),
    assessmentId: text("assessment_id")
      .notNull()
      .references(() => assessment.id, { onDelete: "cascade" }),
    questionId: text("question_id").notNull(),
    answer: text("answer").notNull(),
    notes: text("notes"),
    createdAt: timestamp("created_at").notNull(),
  },
  (table) => ({
    assessmentIdx: index("answer_assessment_idx").on(table.assessmentId),
    questionIdx: index("answer_question_idx").on(table.questionId),
    assessmentQuestionIdx: index("answer_assessment_question_idx").on(
      table.assessmentId,
      table.questionId
    ),
  })
)

// ============================================
// Policies & Documents
// ============================================

export const policy = pgTable("policy", {
  id: text("id").primaryKey(),
  organizationId: text("organization_id")
    .notNull()
    .references(() => organization.id, { onDelete: "cascade" }),
  title: text("title").notNull(),
  description: text("description"),
  category: text("category"), // governance, risk, ethics, data, technical, security
  status: text("status").notNull().default("draft"), // draft, in_review, approved, archived
  version: text("version").notNull().default("1.0"),
  content: text("content"), // Markdown content
  ownerId: text("owner_id").references(() => user.id),
  reviewDate: timestamp("review_date"),
  approvedAt: timestamp("approved_at"),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
})

export const document = pgTable("document", {
  id: text("id").primaryKey(),
  organizationId: text("organization_id")
    .notNull()
    .references(() => organization.id, { onDelete: "cascade" }),
  title: text("title").notNull(),
  type: text("type").notNull(), // technical-doc, conformity-declaration, risk-assessment, audit-report
  status: text("status").notNull().default("draft"), // draft, generated, approved
  content: text("content"), // JSON or Markdown content
  filePath: text("file_path"), // Path to generated file
  aiSystemId: text("ai_system_id").references(() => aiSystem.id, { onDelete: "set null" }),
  generatedAt: timestamp("generated_at"),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
  createdById: text("created_by_id").references(() => user.id),
})

// ============================================
// Compliance Tracking
// ============================================

export const complianceRequirement = pgTable("compliance_requirement", {
  id: text("id").primaryKey(),
  organizationId: text("organization_id")
    .notNull()
    .references(() => organization.id, { onDelete: "cascade" }),
  aiSystemId: text("ai_system_id").references(() => aiSystem.id, { onDelete: "cascade" }),
  article: text("article").notNull(), // e.g., "Article 9", "Article 10"
  title: text("title").notNull(),
  description: text("description"),
  category: text("category"), // technical, organizational
  status: text("status").notNull().default("not_started"), // not_started, in_progress, completed, not_applicable
  priority: text("priority").default("medium"), // high, medium, low
  dueDate: timestamp("due_date"),
  completedAt: timestamp("completed_at"),
  notes: text("notes"),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
})

// ============================================
// Audit Log
// ============================================

export const auditLog = pgTable("audit_log", {
  id: text("id").primaryKey(),
  organizationId: text("organization_id").references(() => organization.id, { onDelete: "set null" }),
  userId: text("user_id").references(() => user.id, { onDelete: "set null" }),
  action: text("action").notNull(), // create, update, delete, view, export
  entityType: text("entity_type").notNull(), // ai_system, assessment, policy, document
  entityId: text("entity_id"),
  details: text("details"), // JSON with additional details
  ipAddress: text("ip_address"),
  createdAt: timestamp("created_at").notNull(),
})

// ============================================
// Learning Modules
// ============================================

export const learningModule = pgTable("learning_module", {
  id: text("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  description: text("description"),
  category: text("category").notNull(), // fundamentals, compliance, specialized
  difficulty: text("difficulty").notNull().default("beginner"), // beginner, intermediate, advanced
  duration: integer("duration").notNull().default(30), // minutes
  chapters: text("chapters").notNull(), // JSON array of chapter objects
  order: integer("order").notNull().default(0),
  isPublished: boolean("is_published").notNull().default(true),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
})

export const userModuleProgress = pgTable("user_module_progress", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  moduleId: text("module_id")
    .notNull()
    .references(() => learningModule.id, { onDelete: "cascade" }),
  status: text("status").notNull().default("not_started"), // not_started, in_progress, completed
  progress: integer("progress").notNull().default(0), // 0-100
  currentChapter: integer("current_chapter").notNull().default(0),
  completedChapters: text("completed_chapters"), // JSON array of completed chapter indices
  startedAt: timestamp("started_at"),
  completedAt: timestamp("completed_at"),
  lastAccessedAt: timestamp("last_accessed_at"),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
})

// ============================================
// Certificates
// ============================================

export const certificate = pgTable("certificate", {
  id: text("id").primaryKey(),
  organizationId: text("organization_id")
    .notNull()
    .references(() => organization.id, { onDelete: "cascade" }),
  aiSystemId: text("ai_system_id").references(() => aiSystem.id, { onDelete: "set null" }),
  type: text("type").notNull(), // conformity-declaration, conformity-assessment, quality-management, training
  title: text("title").notNull(),
  description: text("description"),
  status: text("status").notNull().default("draft"), // draft, pending, issued, expired, revoked
  certificateNumber: text("certificate_number"),
  issuedAt: timestamp("issued_at"),
  expiresAt: timestamp("expires_at"),
  revokedAt: timestamp("revoked_at"),
  metadata: text("metadata"), // JSON with additional certificate data
  filePath: text("file_path"),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
  createdById: text("created_by_id").references(() => user.id),
})

// ============================================
// Reports
// ============================================

export const report = pgTable("report", {
  id: text("id").primaryKey(),
  organizationId: text("organization_id")
    .notNull()
    .references(() => organization.id, { onDelete: "cascade" }),
  type: text("type").notNull(), // compliance-dashboard, risk-assessment, audit-trail, gap-analysis, training, incident
  title: text("title").notNull(),
  description: text("description"),
  status: text("status").notNull().default("draft"), // draft, generating, generated, failed
  parameters: text("parameters"), // JSON with report parameters
  data: text("data"), // JSON with report data
  filePath: text("file_path"),
  generatedAt: timestamp("generated_at"),
  scheduledFor: timestamp("scheduled_for"),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
  createdById: text("created_by_id").references(() => user.id),
})

// ============================================
// Quiz Attempts (Learning)
// ============================================

export const quizAttempt = pgTable("quiz_attempt", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  moduleId: text("module_id")
    .notNull()
    .references(() => learningModule.id, { onDelete: "cascade" }),
  chapterIndex: integer("chapter_index").notNull(),
  score: integer("score").notNull(), // Percentage 0-100
  totalQuestions: integer("total_questions").notNull(),
  correctAnswers: integer("correct_answers").notNull(),
  passed: boolean("passed").notNull(),
  answers: text("answers").notNull(), // JSON array of user answers
  completedAt: timestamp("completed_at").notNull(),
  createdAt: timestamp("created_at").notNull(),
})

// ============================================
// Module Resources (Learning)
// ============================================

export const moduleResource = pgTable("module_resource", {
  id: text("id").primaryKey(),
  moduleId: text("module_id")
    .notNull()
    .references(() => learningModule.id, { onDelete: "cascade" }),
  title: text("title").notNull(),
  description: text("description"),
  type: text("type").notNull(), // pdf, video, link, document
  url: text("url").notNull(),
  size: text("size"), // e.g., "2.4 MB"
  order: integer("order").notNull().default(0),
  createdAt: timestamp("created_at").notNull(),
})

// ============================================
// Gap Analysis Results
// ============================================

export const gapAnalysisResult = pgTable("gap_analysis_result", {
  id: text("id").primaryKey(),
  organizationId: text("organization_id")
    .notNull()
    .references(() => organization.id, { onDelete: "cascade" }),
  aiSystemId: text("ai_system_id").references(() => aiSystem.id, { onDelete: "set null" }),
  assessmentId: text("assessment_id").references(() => assessment.id, { onDelete: "set null" }),
  category: text("category").notNull(), // risk-management, data-governance, technical, human-oversight, transparency, documentation
  requirement: text("requirement").notNull(),
  article: text("article"), // EU AI Act article reference
  status: text("status").notNull().default("gap"), // compliant, partial, gap
  currentState: text("current_state"),
  targetState: text("target_state"),
  gap: text("gap"),
  priority: text("priority").notNull().default("medium"), // critical, high, medium, low
  remediation: text("remediation"),
  dueDate: timestamp("due_date"),
  completedAt: timestamp("completed_at"),
  notes: text("notes"),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
})

// ============================================
// Requirements Status (EU AI Act Compliance Tracking)
// ============================================

export const requirementsStatus = pgTable("requirements_status", {
  id: text("id").primaryKey(),
  organizationId: text("organization_id")
    .notNull()
    .references(() => organization.id, { onDelete: "cascade" }),
  aiSystemId: text("ai_system_id").references(() => aiSystem.id, { onDelete: "cascade" }),
  requirementId: text("requirement_id").notNull(), // e.g., "PROV-9-1", "DEPL-26-1"
  article: text("article").notNull(), // e.g., "Article 9", "Article 26"
  category: text("category").notNull(), // Risk Management, Data Governance, etc.
  controlId: text("control_id"), // links to compliance-framework controls
  status: text("status").notNull().default("not_started"), // not_started, in_progress, implemented, verified
  evidence: text("evidence"), // JSON array of evidence links/descriptions
  owner: text("owner"),
  dueDate: timestamp("due_date"),
  completedAt: timestamp("completed_at"),
  verifiedAt: timestamp("verified_at"),
  verifiedBy: text("verified_by").references(() => user.id),
  notes: text("notes"),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
})

// ============================================
// Glossary Terms
// ============================================

export const glossaryTerm = pgTable("glossary_term", {
  id: text("id").primaryKey(),
  term: text("term").notNull(),
  definition: text("definition").notNull(),
  article: text("article").notNull(), // EU AI Act article reference
  category: text("category").notNull(), // Core Concepts, Actors & Roles, Risk Classification, etc.
  related: text("related"), // JSON array of related term names
  examples: text("examples"), // JSON array of example strings
  keyPoints: text("key_points"), // JSON array of key point strings
  isOfficial: boolean("is_official").notNull().default(true), // Official EU AI Act definition
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
})

// ============================================
// Organization Custom Content
// ============================================

export const organizationContent = pgTable(
  "organization_content",
  {
    id: text("id").primaryKey(),
    organizationId: text("organization_id")
      .notNull()
      .references(() => organization.id, { onDelete: "cascade" }),
    contentType: text("content_type").notNull(), // module, assessment, standard, glossary, faq, policy-template
    contentId: text("content_id").notNull(), // slug or id of the content item
    content: text("content").notNull(), // JSON string of content overrides
    isCustomized: boolean("is_customized").default(true),
    version: text("version").default("1.0"),
    createdAt: timestamp("created_at").notNull(),
    updatedAt: timestamp("updated_at").notNull(),
  },
  (table) => ({
    orgContentIdx: index("org_content_org_idx").on(table.organizationId),
    contentTypeIdx: index("org_content_type_idx").on(table.contentType),
    uniqueContent: uniqueIndex("org_content_unique_idx").on(
      table.organizationId,
      table.contentType,
      table.contentId
    ),
  })
)

// ============================================
// User Glossary Bookmarks
// ============================================

export const glossaryBookmark = pgTable("glossary_bookmark", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  termId: text("term_id")
    .notNull()
    .references(() => glossaryTerm.id, { onDelete: "cascade" }),
  notes: text("notes"), // User's personal notes about this term
  createdAt: timestamp("created_at").notNull(),
})
