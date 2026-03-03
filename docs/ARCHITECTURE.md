# AI Comply Platform - Comprehensive Architecture Documentation

**Version:** 1.0  
**Last Updated:** 2024  
**Author:** Architecture Audit

---

## Table of Contents

1. [Executive Summary](#executive-summary)
2. [System Overview](#system-overview)
3. [Technology Stack](#technology-stack)
4. [Architecture Patterns](#architecture-patterns)
5. [Directory Structure](#directory-structure)
6. [Database Architecture](#database-architecture)
7. [Authentication & Authorization](#authentication--authorization)
8. [Internationalization (i18n)](#internationalization-i18n)
9. [Content Management System](#content-management-system)
10. [API Architecture](#api-architecture)
11. [Component Architecture](#component-architecture)
12. [Styling & Theming](#styling--theming)
13. [Error Handling & Validation](#error-handling--validation)
14. [Security Architecture](#security-architecture)
15. [Build & Deployment](#build--deployment)
16. [Testing Strategy](#testing-strategy)
17. [Performance Optimizations](#performance-optimizations)
18. [Data Flow Diagrams](#data-flow-diagrams)

---

## Executive Summary

**AI Comply** is a comprehensive open-source platform for EU AI Act compliance, built with Next.js 16, React 19, TypeScript, and PostgreSQL. The platform follows a modern, server-first architecture with client-side interactivity, supporting multi-tenant organizations, multi-language content, and complex compliance workflows.

### Key Architectural Decisions

- **Next.js App Router** with Server Components for optimal performance
- **PostgreSQL** with Drizzle ORM for type-safe database operations
- **NextAuth.js** with JWT strategy for authentication
- **Dual Content System** - Migrating from hardcoded (`src/lib/data`) to external files (`content/`)
- **3-Tier Content Resolution** - Database overrides → File system → Legacy fallback
- **Server Actions** pattern for mutations (no traditional REST API)
- **Multi-locale routing** with middleware-based locale detection and file-based translations
- **Component-based UI** using shadcn/ui and Radix UI primitives

### Critical Architecture Note: Content System Migration

⚠️ **The application is currently in a transitional state**, using a **dual content system**:

1. **Legacy System** (`src/lib/data/`): 8998-line TypeScript files with hardcoded content
2. **New System** (`content/`): Structured JSON/Markdown files for dynamic content management

**Impact**: Content may be loaded from either system. Always check the content loader (`src/lib/content/loader.ts`) to understand which system is active for a given content type. See [Content Management System](#content-management-system) section for full details.

---

## System Overview

### Application Type
- **Full-Stack Web Application**
- **Multi-tenant SaaS Platform**
- **Content Management System**
- **Learning Management System (LMS)**
- **Compliance Assessment Tool**

### Core Domains

1. **Understanding** - Learning modules, regulation text, glossary, FAQ
2. **Assessment** - AI system inventory, risk classification, gap analysis
3. **Implementation** - Policies, standards, procedures, checklists, forms
4. **Delivery** - Compliance tracking, reporting, documentation

### User Roles

- **Organization Owner** - Full access to organization settings
- **Organization Admin** - Manage users and content
- **Organization Member** - Standard user access
- **Guest/Unauthenticated** - Limited public content access

---

## Technology Stack

### Frontend

| Category | Technology | Version | Purpose |
|----------|------------|---------|---------|
| **Framework** | Next.js | 16.0.7 | React framework with App Router |
| **Runtime** | React | 19.2.1 | UI library |
| **Language** | TypeScript | 5.7.3 | Type safety |
| **Styling** | Tailwind CSS | 4.1.17 | Utility-first CSS |
| **UI Components** | shadcn/ui | Latest | Component library |
| **UI Primitives** | Radix UI | Various | Accessible primitives |
| **Icons** | Lucide React | 0.469.0 | Icon library |
| **Forms** | React Hook Form | 7.68.0 | Form management |
| **Validation** | Zod | 4.1.13 | Schema validation |
| **Markdown** | react-markdown | 10.1.0 | Markdown rendering |
| **Charts** | Recharts | 3.5.1 | Data visualization |
| **Toast** | Sonner | 2.0.7 | Notifications |
| **Theme** | next-themes | 0.4.6 | Dark mode |

### Backend

| Category | Technology | Version | Purpose |
|----------|------------|---------|---------|
| **Database** | PostgreSQL | 16+ | Primary database |
| **ORM** | Drizzle ORM | 0.42.0 | Type-safe queries |
| **Auth** | NextAuth.js | 4.24.13 | Authentication |
| **Database Client** | postgres | 3.4.7 | PostgreSQL driver |
| **Server Runtime** | Node.js | 18+ | Server runtime |

### Development Tools

| Category | Technology | Version | Purpose |
|----------|------------|---------|---------|
| **Testing** | Vitest | 1.1.3 | Unit testing |
| **Test Utils** | @testing-library/react | 14.1.2 | React testing |
| **Build Tool** | Turbopack | Bundled | Fast bundler |
| **Linting** | ESLint | Next.js config | Code quality |
| **Type Checking** | TypeScript | 5.7.3 | Static analysis |

### Infrastructure

- **Hosting**: Vercel, Railway, Docker, VPS compatible
- **Database**: PostgreSQL (production), SQLite (development fallback)
- **CDN**: Next.js Image Optimization
- **Analytics**: Google Analytics (G-FGJZMH09SE)

---

## Architecture Patterns

### 1. Server-First Architecture

The application prioritizes Server Components and Server Actions:

- **Server Components** by default (no 'use client' unless needed)
- **Server Actions** for all mutations (no REST API endpoints)
- **Data fetching** at the component level using async/await
- **Minimal client-side JavaScript** for better performance

### 2. Content Resolution Strategy (3-Tier)

```
Priority 1: Organization Custom Content (Database)
    ↓ (if not found)
Priority 2: Default Content (File System /content/)
    ↓ (if not found)
Priority 3: System Content (Read-only fallback)
```

### 3. Result Pattern for Error Handling

```typescript
type Result<T, E = AppError> =
  | { success: true; data: T }
  | { success: false; error: E }
```

All server actions return `Result<T>` instead of throwing exceptions, making error handling explicit and type-safe.

### 4. Multi-Locale Routing

- **Path-based locale**: `/{locale}/path`
- **Middleware detection**: Extracts locale from path or Accept-Language header
- **Automatic redirects**: Redirects to locale-prefixed routes
- **Static generation**: Pre-generates pages for all locales

### 5. Component Composition

- **Atomic Design**: UI components → Feature components → Page components
- **Compound Components**: Complex components built from primitives
- **Render Props**: For flexible component behavior
- **Context Providers**: For global state (auth, translations, theme)

---

## Directory Structure

```
ai-act-platform/
├── .claude/                    # Claude AI configuration
├── .github/                    # GitHub workflows and templates
├── content/                    # ✨ NEW: External content files (JSON, Markdown)
│   ├── assessments/           # Assessment question sets (structured)
│   ├── faq/                    # FAQ content (multi-locale)
│   ├── firewall-config/        # Firewall configuration guides
│   ├── glossary/               # Glossary terms (multi-locale)
│   ├── modules/                # Learning modules (NEW STRUCTURE)
│   │   ├── index.json          # Module index
│   │   └── [module-slug]/
│   │       ├── module.json     # Module metadata
│   │       ├── module.{locale}.json  # Localized metadata
│   │       └── chapters/       # Chapter files
│   │           ├── en/         # English chapters
│   │           ├── fr/         # French chapters
│   │           ├── es/         # Spanish chapters
│   │           ├── ro/         # Romanian chapters
│   │           ├── *.json      # Chapter metadata
│   │           └── *.md        # Chapter content
│   ├── policies/               # Policy templates (multi-locale)
│   ├── regulation/             # EU AI Act text (118+ files, multi-locale)
│   └── standards/               # Compliance standards
│       ├── index.json
│       └── std-ai-001/
│           ├── metadata.json
│           ├── controls.json
│           ├── guidance.md      # English
│           ├── guidance.fr.md   # French
│           └── guidance.ro.md   # Romanian
├── drizzle/                    # SQLite migrations (legacy)
├── drizzle-pg/                 # PostgreSQL migrations
├── messages/                   # Translation files
│   ├── en.json                 # English (1405 keys)
│   ├── de.json                 # German (1637 keys)
│   ├── fr.json                 # French (1637 keys)
│   ├── es.json                 # Spanish (1637 keys)
│   └── ro.json                 # Romanian (1637 keys)
├── public/                     # Static assets
│   ├── templates/              # Excel templates (14 files)
│   └── [icons, images]
├── scripts/                    # Utility scripts
│   ├── create-i18n-implement-pages.sh
│   ├── extract-chapters.py
│   ├── generate-standards-json.js
│   ├── seed-database.ts
│   ├── export-database.ts
│   └── import-database.ts
└── src/
    ├── __tests__/              # Test files
    ├── app/                    # Next.js App Router
    │   ├── [locale]/           # Localized routes
    │   │   ├── assess/         # Assessment workflows
    │   │   ├── auth/           # Authentication pages
    │   │   ├── dashboard/      # User dashboard
    │   │   ├── implement/      # Implementation tools
    │   │   ├── resources/      # Public resources
    │   │   ├── understand/     # Learning modules
    │   │   └── layout.tsx      # Locale layout
    │   ├── api/                # API routes
    │   │   ├── auth/           # NextAuth endpoints
    │   │   └── status/         # Health check
    │   ├── assess/             # Legacy routes (non-localized)
    │   ├── auth/                # Legacy auth routes
    │   ├── globals.css          # Global styles
    │   └── layout.tsx          # Root layout
    ├── components/             # React components
    │   ├── ui/                 # shadcn/ui components (57 files)
    │   ├── content/           # Content display components
    │   ├── diagrams/          # SVG diagram components (15 files)
    │   ├── documents/         # Document renderers
    │   ├── procedures/        # Procedure components
    │   ├── standards/         # Standard components
    │   ├── system-tabs/       # System detail tabs
    │   ├── providers/         # Context providers
    │   └── [feature components]
    ├── hooks/                 # React hooks
    │   ├── use-mobile.ts
    │   ├── use-toast.ts
    │   └── use-translations.ts
    ├── i18n/                  # Internationalization
    │   ├── config.ts          # Locale configuration
    │   └── request.ts         # Message loading
    ├── lib/                   # Core libraries
    │   ├── actions/           # Server actions (15 files)
    │   │   ├── ai-systems.ts
    │   │   ├── assessments.ts
    │   │   ├── auth.ts
    │   │   ├── content.ts     # Content loading orchestration
    │   │   ├── documents.ts
    │   │   ├── glossary.ts
    │   │   ├── guides.ts
    │   │   ├── implementation.ts
    │   │   ├── modules.ts     # Bridges old/new module systems
    │   │   ├── policies.ts
    │   │   ├── regulation.ts
    │   │   ├── requirements.ts
    │   │   ├── standards.ts   # Bridges old/new standard systems
    │   │   ├── templates.ts
    │   │   └── utils.ts
    │   ├── auth/              # Authentication utilities
    │   │   ├── session.ts
    │   │   ├── session-nextauth.ts
    │   │   ├── jwt.ts
    │   │   └── require-auth.ts
    │   ├── content/          # Content loading (NEW SYSTEM)
    │   │   ├── loader.ts      # 3-tier content loader (DB → Files → Legacy)
    │   │   └── firewall.ts
    │   ├── db/               # Database
    │   │   ├── index.ts      # Database connection
    │   │   └── schema.ts     # Drizzle schema (491 lines)
    │   ├── data/             # 🔄 LEGACY: Hardcoded static data (migrating to /content/)
    │   │   ├── assessment-questions.ts  # 780 lines (MIGRATING)
    │   │   ├── compliance-framework.ts  # Framework mappings (KEEP)
    │   │   ├── global-regulations.ts    # Global regs data (KEEP)
    │   │   ├── glossary-data.ts         # Legacy glossary (MIGRATING)
    │   │   ├── modules-data.ts          # 8998 lines! (MIGRATING)
    │   │   ├── modules-helpers.ts       # Module utilities (KEEP)
    │   │   ├── modules-translations.ts  # Legacy translations (MIGRATING)
    │   │   ├── regulation-data.ts       # Regulation structure (KEEP)
    │   │   ├── role-requirements.ts     # Role mappings (KEEP)
    │   │   ├── standard-controls.ts     # Control mappings (KEEP)
    │   │   └── guides/       # 284 markdown files (SHOULD MIGRATE TO /content/)
    │   │       ├── assessment-tools/    # 16 files
    │   │       ├── checklists/          # 32 files
    │   │       ├── forms/               # 36 files
    │   │       ├── procedures/          # 65 files
    │   │       └── records/             # 96 files
    │   ├── errors.ts         # Error types and Result pattern
    │   ├── i18n.ts           # Translation utilities
    │   ├── parsers/          # Content parsers
    │   ├── types/            # TypeScript types
    │   ├── utils/            # Utility functions
    │   │   ├── compliance-scoring.ts
    │   │   └── risk-classification.ts
    │   ├── validators/       # Zod schemas
    │   │   ├── ai-system.ts
    │   │   └── assessment.ts
    │   ├── auth.ts           # NextAuth configuration
    │   ├── constants.ts      # Application constants
    │   └── utils.ts          # cn() utility (clsx + tailwind-merge)
    └── middleware.ts         # Next.js middleware (locale + auth)
```

---

## Database Architecture

### Database: PostgreSQL 16+

### Schema Overview

The database schema consists of **20+ tables** organized into logical groups:

#### 1. Authentication & Users

**`user`** - User accounts
- `id` (text, PK)
- `email` (text, unique, not null)
- `name` (text, nullable)
- `passwordHash` (text, nullable - for email/password)
- `organizationId` (text, FK → organization)
- `emailVerified` (timestamp)
- `image` (text, nullable)
- `lastLoginAt` (timestamp)
- `createdAt`, `updatedAt` (timestamps)

**`session`** - NextAuth sessions
- `sessionToken` (text, PK)
- `userId` (text, FK → user, cascade delete)
- `expires` (timestamp, not null)

**`account`** - OAuth accounts
- `id` (text, PK, nanoid)
- `userId` (text, FK → user, cascade delete)
- `type`, `provider`, `providerAccountId` (text, not null)
- `refresh_token`, `access_token`, `id_token` (text, nullable)
- `expires_at` (integer)
- `token_type`, `scope`, `session_state` (text, nullable)

**`verificationToken`** - Email verification
- `identifier` (text, not null)
- `token` (text, unique, not null)
- `expires` (timestamp, not null)

#### 2. Organizations & Multi-tenancy

**`organization`** - Organizations (multi-tenant)
- `id` (text, PK)
- `name` (text, not null)
- `slug` (text, unique, not null)
- `description` (text, nullable)
- `industry`, `size`, `country` (text, nullable)
- `createdAt`, `updatedAt` (timestamps)

**`organizationMember`** - Organization membership
- `id` (text, PK)
- `organizationId` (text, FK → organization, cascade delete)
- `userId` (text, FK → user, cascade delete)
- `role` (text, default "member") - owner, admin, member
- `createdAt` (timestamp)

**`organizationContent`** - Custom content overrides
- `id` (text, PK)
- `organizationId` (text, FK → organization, cascade delete)
- `contentType` (text, not null) - module, assessment, standard, etc.
- `contentId` (text, not null) - slug or id
- `content` (text, not null) - JSON string
- `isCustomized` (boolean, default true)
- `version` (text, default "1.0")
- Unique index on (organizationId, contentType, contentId)

#### 3. AI Systems Inventory

**`aiSystem`** - AI systems registry
- `id` (text, PK)
- `organizationId` (text, FK → organization, cascade delete)
- `name` (text, not null)
- `description`, `vendor`, `category` (text, nullable)
- `riskLevel` (text) - prohibited, high, limited, minimal, unclassified
- `status` (text, default "active") - active, inactive, decommissioned
- `department` (text, nullable)
- `dataTypes` (text) - JSON array
- `deploymentDate`, `lastAssessmentDate` (timestamp, nullable)
- `operatorRole` (text) - provider, deployer, importer, distributor, gpai_provider
- `additionalRoles` (text) - JSON array
- `rolesDeterminedAt` (timestamp, nullable)
- `createdById` (text, FK → user, nullable)
- Indexes: organizationId, riskLevel, status, operatorRole

#### 4. Assessments

**`assessment`** - Assessment records
- `id` (text, PK)
- `organizationId` (text, FK → organization, cascade delete)
- `aiSystemId` (text, FK → aiSystem, set null on delete)
- `type` (text, not null) - risk-classification, gap-analysis, inventory, provider-deployer
- `status` (text, default "in_progress") - not_started, in_progress, completed
- `title` (text, not null)
- `description` (text, nullable)
- `result` (text) - JSON with assessment results
- `score` (real) - Compliance score 0-100
- `completedAt` (timestamp, nullable)
- `createdById` (text, FK → user, nullable)
- Indexes: organizationId, type, status, aiSystemId, createdAt

**`assessmentAnswer`** - Individual question answers
- `id` (text, PK)
- `assessmentId` (text, FK → assessment, cascade delete)
- `questionId` (text, not null)
- `answer` (text, not null)
- `notes` (text, nullable)
- Indexes: assessmentId, questionId, (assessmentId, questionId)

#### 5. Compliance Tracking

**`complianceRequirement`** - EU AI Act requirements
- `id` (text, PK)
- `organizationId` (text, FK → organization, cascade delete)
- `aiSystemId` (text, FK → aiSystem, cascade delete)
- `article` (text, not null) - e.g., "Article 9"
- `title` (text, not null)
- `description`, `category` (text, nullable)
- `status` (text, default "not_started") - not_started, in_progress, completed, not_applicable
- `priority` (text, default "medium") - high, medium, low
- `dueDate`, `completedAt` (timestamp, nullable)
- `notes` (text, nullable)

**`requirementsStatus`** - Detailed requirement tracking
- `id` (text, PK)
- `organizationId` (text, FK → organization, cascade delete)
- `aiSystemId` (text, FK → aiSystem, cascade delete)
- `requirementId` (text, not null) - e.g., "PROV-9-1"
- `article` (text, not null)
- `category` (text, not null)
- `controlId` (text, nullable) - links to compliance-framework controls
- `status` (text, default "not_started") - not_started, in_progress, implemented, verified
- `evidence` (text) - JSON array
- `owner` (text, nullable)
- `dueDate`, `completedAt`, `verifiedAt` (timestamp, nullable)
- `verifiedBy` (text, FK → user, nullable)
- `notes` (text, nullable)

**`gapAnalysisResult`** - Gap analysis findings
- `id` (text, PK)
- `organizationId` (text, FK → organization, cascade delete)
- `aiSystemId` (text, FK → aiSystem, set null on delete)
- `assessmentId` (text, FK → assessment, set null on delete)
- `category` (text, not null) - risk-management, data-governance, technical, etc.
- `requirement` (text, not null)
- `article` (text, nullable)
- `status` (text, default "gap") - compliant, partial, gap
- `currentState`, `targetState`, `gap`, `remediation` (text, nullable)
- `priority` (text, default "medium") - critical, high, medium, low
- `dueDate`, `completedAt` (timestamp, nullable)
- `notes` (text, nullable)

#### 6. Policies & Documents

**`policy`** - AI governance policies
- `id` (text, PK)
- `organizationId` (text, FK → organization, cascade delete)
- `title` (text, not null)
- `description`, `category` (text, nullable)
- `status` (text, default "draft") - draft, in_review, approved, archived
- `version` (text, default "1.0")
- `content` (text) - Markdown content
- `ownerId` (text, FK → user, nullable)
- `reviewDate`, `approvedAt` (timestamp, nullable)

**`document`** - Generated documents
- `id` (text, PK)
- `organizationId` (text, FK → organization, cascade delete)
- `title` (text, not null)
- `type` (text, not null) - technical-doc, conformity-declaration, risk-assessment, audit-report
- `status` (text, default "draft") - draft, generated, approved
- `content` (text) - JSON or Markdown
- `filePath` (text, nullable) - Path to generated file
- `aiSystemId` (text, FK → aiSystem, set null on delete)
- `generatedAt` (timestamp, nullable)
- `createdById` (text, FK → user, nullable)

#### 7. Learning Management

**`learningModule`** - Learning modules
- `id` (text, PK)
- `slug` (text, unique, not null)
- `title` (text, not null)
- `description`, `category` (text, nullable)
- `difficulty` (text, default "beginner") - beginner, intermediate, advanced
- `duration` (integer, default 30) - minutes
- `chapters` (text, not null) - JSON array
- `order` (integer, default 0)
- `isPublished` (boolean, default true)

**`userModuleProgress`** - User learning progress
- `id` (text, PK)
- `userId` (text, FK → user, cascade delete)
- `moduleId` (text, FK → learningModule, cascade delete)
- `status` (text, default "not_started") - not_started, in_progress, completed
- `progress` (integer, default 0) - 0-100
- `currentChapter` (integer, default 0)
- `completedChapters` (text) - JSON array
- `startedAt`, `completedAt`, `lastAccessedAt` (timestamp, nullable)

**`quizAttempt`** - Quiz results
- `id` (text, PK)
- `userId` (text, FK → user, cascade delete)
- `moduleId` (text, FK → learningModule, cascade delete)
- `chapterIndex` (integer, not null)
- `score` (integer, not null) - Percentage 0-100
- `totalQuestions`, `correctAnswers` (integer, not null)
- `passed` (boolean, not null)
- `answers` (text, not null) - JSON array
- `completedAt` (timestamp, not null)

**`moduleResource`** - Module resources (PDFs, videos, links)
- `id` (text, PK)
- `moduleId` (text, FK → learningModule, cascade delete)
- `title` (text, not null)
- `description` (text, nullable)
- `type` (text, not null) - pdf, video, link, document
- `url` (text, not null)
- `size` (text, nullable) - e.g., "2.4 MB"
- `order` (integer, default 0)

#### 8. Certificates & Reports

**`certificate`** - Compliance certificates
- `id` (text, PK)
- `organizationId` (text, FK → organization, cascade delete)
- `aiSystemId` (text, FK → aiSystem, set null on delete)
- `type` (text, not null) - conformity-declaration, conformity-assessment, quality-management, training
- `title` (text, not null)
- `description` (text, nullable)
- `status` (text, default "draft") - draft, pending, issued, expired, revoked
- `certificateNumber` (text, nullable)
- `issuedAt`, `expiresAt`, `revokedAt` (timestamp, nullable)
- `metadata` (text) - JSON
- `filePath` (text, nullable)
- `createdById` (text, FK → user, nullable)

**`report`** - Generated reports
- `id` (text, PK)
- `organizationId` (text, FK → organization, cascade delete)
- `type` (text, not null) - compliance-dashboard, risk-assessment, audit-trail, gap-analysis, training, incident
- `title` (text, not null)
- `description` (text, nullable)
- `status` (text, default "draft") - draft, generating, generated, failed
- `parameters` (text) - JSON
- `data` (text) - JSON
- `filePath` (text, nullable)
- `generatedAt`, `scheduledFor` (timestamp, nullable)
- `createdById` (text, FK → user, nullable)

#### 9. Glossary & Content

**`glossaryTerm`** - Glossary terms
- `id` (text, PK)
- `term` (text, not null)
- `definition` (text, not null)
- `article` (text, not null) - EU AI Act article reference
- `category` (text, not null) - Core Concepts, Actors & Roles, etc.
- `related` (text) - JSON array of related term names
- `examples` (text) - JSON array
- `keyPoints` (text) - JSON array
- `isOfficial` (boolean, default true)

**`glossaryBookmark`** - User bookmarks
- `id` (text, PK)
- `userId` (text, FK → user, cascade delete)
- `termId` (text, FK → glossaryTerm, cascade delete)
- `notes` (text, nullable) - User's personal notes

#### 10. Audit & Logging

**`auditLog`** - Audit trail
- `id` (text, PK)
- `organizationId` (text, FK → organization, set null on delete)
- `userId` (text, FK → user, set null on delete)
- `action` (text, not null) - create, update, delete, view, export
- `entityType` (text, not null) - ai_system, assessment, policy, document
- `entityId` (text, nullable)
- `details` (text) - JSON
- `ipAddress` (text, nullable)
- `createdAt` (timestamp, not null)

### Database Relationships

```
organization (1) ──< (N) organizationMember ──> (N) user
organization (1) ──< (N) aiSystem
organization (1) ──< (N) assessment
organization (1) ──< (N) complianceRequirement
organization (1) ──< (N) policy
organization (1) ──< (N) document
organization (1) ──< (N) certificate
organization (1) ──< (N) report
organization (1) ──< (N) gapAnalysisResult
organization (1) ──< (N) requirementsStatus
organization (1) ──< (N) organizationContent

aiSystem (1) ──< (N) assessment
aiSystem (1) ──< (N) complianceRequirement
aiSystem (1) ──< (N) requirementsStatus
aiSystem (1) ──< (N) document
aiSystem (1) ──< (N) certificate

assessment (1) ──< (N) assessmentAnswer
assessment (1) ──< (N) gapAnalysisResult

user (1) ──< (N) userModuleProgress
user (1) ──< (N) quizAttempt
user (1) ──< (N) glossaryBookmark
user (1) ──< (N) session
user (1) ──< (N) account

learningModule (1) ──< (N) userModuleProgress
learningModule (1) ──< (N) quizAttempt
learningModule (1) ──< (N) moduleResource

glossaryTerm (1) ──< (N) glossaryBookmark
```

### Indexes

The schema includes strategic indexes for performance:

- **Organization-scoped queries**: `organizationId` indexes on all tenant tables
- **Status filtering**: `status` indexes on assessments, policies, documents
- **Risk classification**: `riskLevel` index on aiSystem
- **Type filtering**: `type` indexes on assessments, documents
- **Composite indexes**: (assessmentId, questionId) on assessmentAnswer
- **Unique constraints**: email on user, slug on organization, (org, contentType, contentId) on organizationContent

### Migration Strategy

- **Drizzle Kit** for schema management
- **Migrations stored in**: `drizzle-pg/`
- **Commands**:
  - `npm run db:generate` - Generate migrations from schema
  - `npm run db:migrate` - Apply migrations
  - `npm run db:studio` - Open Drizzle Studio GUI

---

## Authentication & Authorization

### Authentication Strategy

**NextAuth.js v4** with **JWT strategy** (no database sessions)

#### Providers

1. **Google OAuth**
   - Client ID/Secret from environment
   - `allowDangerousEmailAccountLinking: true` (allows linking accounts by email)

2. **GitHub OAuth**
   - Client ID/Secret from environment
   - `allowDangerousEmailAccountLinking: true`

3. **Email/Password** (Custom)
   - JWT-based authentication
   - Password hashing (implementation in `src/lib/auth/jwt.ts`)
   - Custom session management

#### Session Management

**JWT Strategy** (not database sessions):
- Sessions stored in HTTP-only cookies
- JWT contains: `userId`, `email`, `name`, `image`, `organizationId`
- No database queries for session validation (stateless)

**Session Flow**:
```
1. User authenticates (OAuth or email/password)
2. NextAuth creates JWT token
3. Token stored in HTTP-only cookie
4. Middleware validates token on protected routes
5. Server components read session via getServerSession()
```

#### Session Utilities

**`src/lib/auth/session.ts`** - Unified session interface:
- `getSession()` - Returns unified Session object
- Handles both NextAuth and custom JWT sessions
- Returns `null` if not authenticated

**`src/lib/auth/session-nextauth.ts`** - NextAuth-specific:
- Wraps NextAuth's `getServerSession()`
- Provides unified Session interface

**`src/lib/auth/require-auth.ts`** - Route protection:
- `requireAuth()` - Throws if not authenticated
- Used in server components/actions

#### Middleware Protection

**`src/middleware.ts`** protects routes:

```typescript
const protectedRoutes = [
  '/dashboard',
  '/assess',
  '/implement',
  '/deliver',
  '/understand/modules',
];

const authRoutes = ['/auth/login', '/auth/register'];
```

**Behavior**:
- Protected routes → Redirect to login if not authenticated
- Auth routes → Redirect to dashboard if authenticated
- Preserves redirect URL in query params

#### Authorization (Multi-tenant)

**Organization Scoping**:
- All data queries filtered by `organizationId`
- Retrieved from session: `session.user.organizationId`
- Server actions validate organization access

**Role-Based Access** (Future):
- `organizationMember.role` field exists
- Roles: `owner`, `admin`, `member`
- Authorization checks not yet implemented

#### Authentication Components

- **`AuthProvider`** - Wraps app with NextAuth SessionProvider
- **`UserMenu`** - User dropdown with sign out
- **Login/Register Pages** - OAuth buttons + email/password forms

---

## Internationalization (i18n)

### Supported Locales

- **English (en)** - Default locale
- **German (de)**
- **French (fr)**
- **Spanish (es)**
- **Romanian (ro)**

### Translation Files

**Location**: `messages/{locale}.json`

**Structure**: Nested JSON objects
```json
{
  "common": {
    "submit": "Submit",
    "cancel": "Cancel"
  },
  "navigation": {
    "home": "Home",
    "dashboard": "Dashboard"
  }
}
```

**Key Counts**:
- English: 1405 keys
- Other locales: 1637 keys (includes additional keys)

### Routing Strategy

**Path-based locale routing**: `/{locale}/path`

**Middleware Detection** (`src/middleware.ts`):
1. Extract locale from pathname
2. If not found, check `Accept-Language` header
3. Fallback to default locale (`en`)
4. Redirect to locale-prefixed route if missing

**Example URLs**:
- `/en/dashboard` - English dashboard
- `/fr/dashboard` - French dashboard
- `/dashboard` → Redirects to `/en/dashboard`

### Translation Loading

**Server Components**:
```typescript
// In [locale]/layout.tsx
const messages = await getMessages(validLocale)
<TranslationsProvider messages={messages} locale={validLocale}>
```

**Client Components**:
```typescript
import { useTranslations } from '@/hooks/use-translations'

const t = useTranslations('common')
const text = t('submit') // Returns translated text
```

### Translation Utilities

**`src/lib/i18n.ts`**:
- `getTranslation(messages, key, fallback?)` - Get nested translation
- `createTranslator(messages, namespace?)` - Create scoped translator

**`src/hooks/use-translations.ts`**:
- `useTranslations(namespace?)` - React hook for client components
- Reads from `TranslationsProvider` context

### Content Localization

**Multi-locale content files**:
- **Modules**: `content/modules/{module}/chapters/{locale}/`
- **Glossary**: `content/glossary/{category}.{locale}.json`
- **FAQ**: `content/faq/{file}.{locale}.json`
- **Regulation**: `content/regulation/{file}.{locale}.md` (partial)

**Fallback Strategy**:
1. Try locale-specific file
2. Fallback to English
3. Fallback to default content

### Locale Configuration

**`src/i18n/config.ts`**:
- `locales` - Array of supported locales
- `defaultLocale` - Default locale
- `localeNames` - Display names
- `localeFlags` - Flag emojis
- `isValidLocale()` - Type guard
- `getLocale()` - Get locale with fallback

---

## Content Management System

### Quick Reference: Content Location Map

```
┌─────────────────────────────────────────────────────────────────────────┐
│ Content Type              │ Legacy Location      │ New Location          │
├───────────────────────────┼──────────────────────┼───────────────────────┤
│ 📚 Modules (44 chapters)  │ modules-data.ts      │ content/modules/     │ 🔄
│ 📝 Assessments            │ assessment-*.ts      │ content/assessments/ │ 🔄
│ 📖 Glossary               │ glossary-data.ts     │ content/glossary/    │ 🔄
│ 📐 Standards (14)         │ data/standards/      │ content/standards/   │ 🔄
│ 📄 Regulation (118 files) │ data/regulation/     │ content/regulation/  │ ✅
│ ❓ FAQ                    │ N/A                  │ content/faq/         │ ✅
│ 🛡️  Firewall Config       │ N/A                  │ content/firewall-*/  │ ✅
│ 📋 Procedures (65)        │ data/guides/proc*/   │ content/guides/      │ ⏳
│ ✅ Checklists (32)        │ data/guides/check*/  │ content/guides/      │ ⏳
│ 📝 Forms (36)             │ data/guides/forms/   │ content/guides/      │ ⏳
│ 📊 Records (96)           │ data/guides/records/ │ content/guides/      │ ⏳
│ 🏛️  Policy Templates      │ data/policy/         │ content/policies/    │ 🔄
└─────────────────────────────────────────────────────────────────────────┘

Legend: ✅ Migrated  |  🔄 Dual System (Both Active)  |  ⏳ Legacy Only
```

### Content Architecture Overview

The application uses a **dual content system** currently in migration:

1. **Legacy System**: `src/lib/data/` - Hardcoded TypeScript/Markdown embedded in source code
2. **New System**: `content/` - External JSON/Markdown files for dynamic content management

### 3-Tier Content Resolution Strategy

When loading content, the system checks in this priority order:

```
Priority 1: Organization Custom Content (Database)
    ↓ (if not found)
Priority 2: Default Content (File System - /content/)
    ↓ (if not found)
Priority 3: Legacy Content (Source Code - /src/lib/data/)
    ↓ (if not found)
Priority 4: System Fallback (Embedded defaults)
```

**Implementation**: `src/lib/content/loader.ts` and `src/lib/actions/*.ts`

---

### Content System Comparison

#### Legacy System (`src/lib/data/`)

**Purpose**: TypeScript modules with hardcoded data embedded in source code

**Location**: `/src/lib/data/`

**Characteristics**:
- ✅ **Compiled into bundle** - Part of application code, fast access
- ✅ **Type-safe** - Full TypeScript interfaces and exports
- ✅ **No file I/O** - Data loaded in memory
- ❌ **Requires rebuild** - Any content change needs recompilation
- ❌ **Not easily editable** - Requires developer to modify
- ❌ **No native multi-locale** - Programmatic translations only

**Current Contents**:
```
src/lib/data/
├── assessment-questions.ts       # 780 lines - Hardcoded assessment questions
├── compliance-framework.ts       # Compliance control mappings
├── global-regulations.ts         # Global regulations comparison data
├── glossary-data.ts             # Glossary terms (legacy)
├── modules-data.ts              # 8998 lines! - ALL module content hardcoded
├── modules-helpers.ts           # Module utility functions
├── modules-translations.ts      # Module translations (programmatic)
├── regulation-data.ts           # Regulation structure metadata
├── role-requirements.ts         # Role-based requirement mappings
├── standard-controls.ts         # Control definitions and mappings
├── guides/                      # 284 markdown files (SHOULD MIGRATE)
│   ├── procedures/              # 65 procedure markdown files
│   ├── checklists/              # 32 checklist markdown files
│   ├── forms/                   # 36 form markdown files
│   ├── records/                 # 96 record template files
│   └── assessment-tools/        # 16 assessment tool files
├── policy/
│   └── AI-POLICY.md             # Policy template
├── regulation/                  # 31 regulation markdown files (LEGACY)
└── standards/                   # 15 standard markdown files (LEGACY)
```

**Example** - Hardcoded content in `modules-data.ts`:
```typescript
export const DEFAULT_MODULES: ModuleData[] = [
  {
    slug: "ai-act-fundamentals",
    title: "AI Act Fundamentals",
    chapters: JSON.stringify([
      {
        id: 1,
        title: "Welcome to EU AI Act",
        content: "8000+ lines of markdown hardcoded here..."
      }
      // ... 43 more chapters hardcoded
    ])
  }
]
```

---

#### New System (`content/`)

**Purpose**: Structured content files that can be edited without rebuilding the application

**Location**: `/content/`

**Characteristics**:
- ✅ **Editable without code changes** - Direct JSON/Markdown editing
- ✅ **Native multi-locale** - Separate files per language ({file}.{locale}.json)
- ✅ **Hot-reloadable** - Changes reflect immediately in development
- ✅ **Version controlled** - Clean, readable content diffs
- ✅ **Organization customizable** - 3-tier system with database overrides
- ✅ **Non-technical editing** - Content editors don't need to code
- ⚠️ **File I/O overhead** - Requires disk reads (cached by Next.js)

**Current Contents**:
```
content/
├── assessments/                 # ✅ NEW - Structured assessment questions
│   ├── index.json               # Assessment index
│   └── [type]/
│       ├── metadata.json        # Assessment metadata
│       └── questions.json       # Question sets
├── faq/                         # ✅ NEW - FAQ with multi-locale
│   ├── index.{locale}.json      # Category index per locale
│   ├── categories.{locale}.json # FAQ categories per locale
│   └── faqs.{locale}.json       # FAQ content per locale
├── firewall-config/            # ✅ NEW - Configuration guides
│   ├── en.md
│   ├── de.md
│   ├── fr.md
│   ├── es.md
│   └── ro.md
├── glossary/                    # ✅ NEW - Glossary with multi-locale
│   ├── index.{locale}.json      # Term index per locale
│   ├── core-concepts.{locale}.json
│   ├── actors-roles.{locale}.json
│   └── [category].{locale}.json
├── modules/                     # 🔄 MIGRATING - Learning modules
│   ├── index.json               # Module index
│   └── [module-slug]/
│       ├── module.json          # Module metadata
│       ├── module.{locale}.json # Localized metadata
│       └── chapters/
│           ├── en/              # English chapters
│           │   ├── 00-1.json    # Chapter metadata
│           │   └── 00-1.md      # Chapter content
│           ├── fr/              # French chapters
│           ├── es/              # Spanish chapters
│           └── ro/              # Romanian chapters
├── policies/                    # ✅ NEW - Policy templates
│   ├── index.json
│   └── templates/
│       ├── ai-governance-policy.en.md
│       ├── ai-governance-policy.fr.md
│       ├── ai-governance-policy.es.md
│       └── ai-governance-policy.ro.md
├── regulation/                  # ✅ MIGRATED - EU AI Act text
│   ├── article-1-subject-matter.en.md
│   ├── article-1-subject-matter.fr.md
│   └── [118 article files in multiple locales]
└── standards/                   # 🔄 MIGRATING - Compliance standards
    ├── index.json
    └── std-ai-001/
        ├── metadata.json
        ├── controls.json
        ├── guidance.md          # English guidance
        ├── guidance.fr.md       # French guidance
        └── guidance.ro.md       # Romanian guidance
```

**Example** - Structured content in `content/modules/ai-act-fundamentals/module.json`:
```json
{
  "title": "AI Act Fundamentals",
  "description": "Master the foundations of the EU AI Act",
  "category": "fundamentals",
  "difficulty": "beginner",
  "duration": 120,
  "order": 1
}
```

**Example** - Chapter content in `content/modules/ai-act-fundamentals/chapters/en/00-1.md`:
```markdown
# Welcome to EU AI Act

The EU AI Act represents a landmark...
[Clean, readable markdown content]
```

---

### Migration Status

| Content Type | Legacy (`src/lib/data`) | New (`content`) | Status | Priority |
|--------------|-------------------------|-----------------|--------|----------|
| **Learning Modules** | ✅ modules-data.ts (8998 lines!) | ✅ modules/ (structured) | 🔄 **Migrating** | 🔴 High |
| **Assessments** | ✅ assessment-questions.ts | ✅ assessments/ | 🔄 **Dual system** | 🟡 Medium |
| **Glossary** | ✅ glossary-data.ts | ✅ glossary/ | 🔄 **Dual system** | 🟡 Medium |
| **Standards** | ✅ standards/*.md | ✅ standards/ | 🔄 **Dual system** | 🟢 Low |
| **Regulation Text** | ✅ regulation/*.md (31 files) | ✅ regulation/ (118 files) | ✅ **Migrated** | ✅ Done |
| **Procedures** | ✅ guides/procedures/ (65 files) | ❌ Not yet | ⏳ **Legacy only** | 🔴 High |
| **Checklists** | ✅ guides/checklists/ (32 files) | ❌ Not yet | ⏳ **Legacy only** | 🔴 High |
| **Forms** | ✅ guides/forms/ (36 files) | ❌ Not yet | ⏳ **Legacy only** | 🔴 High |
| **Records** | ✅ guides/records/ (96 files) | ❌ Not yet | ⏳ **Legacy only** | 🔴 High |
| **FAQ** | ❌ Not in legacy | ✅ faq/ | ✅ **Content only** | ✅ Done |
| **Firewall Config** | ❌ Not in legacy | ✅ firewall-config/ | ✅ **Content only** | ✅ Done |
| **Policy Templates** | ✅ policy/AI-POLICY.md | ✅ policies/templates/ | 🔄 **Migrating** | 🟢 Low |

**Legend**:
- ✅ **Migrated** - Fully on new system
- 🔄 **Dual system** - Both systems active, loader checks both
- ⏳ **Legacy only** - Still in old system, needs migration
- ❌ **Not implemented** - Doesn't exist in that system

---

### Content Loading Patterns

#### Server-Side Content Loading

**Content Loader** (`src/lib/content/loader.ts`):
```typescript
// Example: Loading a module
export async function getModule(
  slug: string, 
  organizationId?: string
): Promise<ModuleData | null> {
  // 1. Check organization custom content (database)
  if (organizationId) {
    const custom = await db.query.organizationContent.findFirst({
      where: and(
        eq(organizationContent.organizationId, organizationId),
        eq(organizationContent.contentType, 'module'),
        eq(organizationContent.contentId, slug)
      )
    })
    if (custom) return JSON.parse(custom.content)
  }

  // 2. Try loading from content/ directory (NEW SYSTEM)
  const contentPath = path.join(CONTENT_BASE_PATH, 'modules', slug, 'module.json')
  if (fs.existsSync(contentPath)) {
    return JSON.parse(fs.readFileSync(contentPath, 'utf-8'))
  }

  // 3. Fallback to legacy modules-data.ts (OLD SYSTEM)
  return DEFAULT_MODULES.find(m => m.slug === slug) || null
}
```

**Server Actions** (`src/lib/actions/modules.ts`):
```typescript
"use server"

export async function getModules() {
  // Try loading from content/ directory first
  const modules = loadModulesFromContent()
  
  // Fallback to hardcoded modules-data.ts
  if (modules.length === 0) {
    return DEFAULT_MODULES
  }
  
  return modules
}

function loadModulesFromContent() {
  const indexPath = path.join(CONTENT_MODULES_DIR, "index.json")
  if (!existsSync(indexPath)) {
    return [] // Triggers fallback to DEFAULT_MODULES
  }
  
  // Load modules from structured content files
  const index = JSON.parse(readFileSync(indexPath, 'utf-8'))
  return index.map(meta => loadModuleFromFiles(meta.slug))
}
```

#### Multi-Locale Content Loading

**Pattern for localized content**:
```typescript
export async function getChapter(
  moduleSlug: string,
  chapterIndex: number,
  locale: string = 'en'
): Promise<ChapterData | null> {
  // Try locale-specific chapter first
  const localePath = path.join(
    CONTENT_BASE_PATH,
    'modules',
    moduleSlug,
    'chapters',
    locale,
    `${chapterIndex.toString().padStart(2, '0')}-1.md`
  )
  
  if (fs.existsSync(localePath)) {
    return loadChapterContent(localePath)
  }
  
  // Fallback to English
  const enPath = localePath.replace(`/${locale}/`, '/en/')
  if (fs.existsSync(enPath)) {
    return loadChapterContent(enPath)
  }
  
  // Final fallback to hardcoded modules-data.ts
  return DEFAULT_MODULES
    .find(m => m.slug === moduleSlug)
    ?.chapters[chapterIndex] || null
}
```

---

### Migration Roadmap

> 📋 **Detailed Migration Plan**: See [CONTENT_MIGRATION_PLAN.md](./CONTENT_MIGRATION_PLAN.md) for complete details, tasks, estimates, and scripts.  
> 📊 **Current Status**: See [MIGRATION_STATUS.md](./MIGRATION_STATUS.md) for real-time progress tracking.

**Quick Summary**:

#### Phase 1: ✅ Infrastructure (Complete)
- [x] Create `content/` directory structure
- [x] Implement content loader with 3-tier resolution
- [x] Support multi-locale file loading
- [x] Migrate regulation text (118 files)
- [x] Create FAQ system
- [x] Create firewall config system

**Status**: ✅ Complete (2 weeks, 60 hours)

#### Phase 2: 🔄 Core Content (In Progress - Week 2 of 4)
- [x] Create module structure in `content/modules/`
- [ ] Migrate all 44 chapters from `modules-data.ts` to `content/modules/` 🔴 **CURRENT**
- [ ] Remove hardcoded content from `modules-data.ts` (8998 lines!)
- [ ] Migrate assessment questions to `content/assessments/`
- [ ] Migrate glossary to `content/glossary/`

**Status**: 🔄 25% Complete (4 weeks, 80 hours estimated)  
**Blocker**: Module extraction script needed - see migration plan

#### Phase 3: ⏳ Implementation Content (Planned)
- [ ] Create `content/guides/` directory structure
- [ ] Migrate 65 procedures from `src/lib/data/guides/procedures/`
- [ ] Migrate 32 checklists from `src/lib/data/guides/checklists/`
- [ ] Migrate 36 forms from `src/lib/data/guides/forms/`
- [ ] Migrate 96 records from `src/lib/data/guides/records/`
- [ ] Update guide loader to use `content/guides/`

**Status**: ⏳ Not Started (3 weeks, 60 hours estimated)  
**Dependencies**: Phase 2 completion

#### Phase 4: ⏳ Cleanup (Planned)
- [ ] Remove legacy markdown files from `src/lib/data/guides/`
- [ ] Archive `modules-data.ts` (keep only type definitions)
- [ ] Archive `glossary-data.ts` (keep only type definitions)
- [ ] Update documentation
- [ ] Create content editing guide for non-technical users

**Status**: ⏳ Not Started (1 week, 20 hours estimated)  
**Dependencies**: Phase 3 completion

---

**Overall Progress**: 🔄 40% Complete (Week 4 of 12)  
**Target Completion**: March 2025  
**Total Effort**: 200 hours (~$20k at $100/hr)

For detailed tasks, scripts, timelines, and risk management, see the complete [CONTENT_MIGRATION_PLAN.md](./CONTENT_MIGRATION_PLAN.md).

---

### Why Two Systems?

**Historical Context**:
1. **Initial Development**: Content was hardcoded in TypeScript for rapid prototyping
2. **Growth Pain**: 8998-line `modules-data.ts` file became unmaintainable
3. **Localization Need**: Multi-locale support required cleaner architecture
4. **User Request**: Non-technical users needed to edit content without code changes
5. **Customization**: Organizations wanted to override default content

**Current Strategy**: Gradual migration while maintaining backward compatibility

---

### Content System Decision Matrix

**Use `content/` (New System) for**:
- ✅ User-facing content that changes frequently
- ✅ Multi-locale content (translations)
- ✅ Content that non-developers need to edit
- ✅ Large documents (procedures, standards, guides)
- ✅ Organization-customizable content

**Keep in `src/lib/data/` (Legacy System) for**:
- ✅ TypeScript type definitions
- ✅ Application configuration objects
- ✅ Static mappings (role → requirements)
- ✅ Framework/structure definitions
- ✅ Content that benefits from type safety (during migration)

---

---

### Content Loading Flow Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                    Content Request                               │
│              (e.g., getModule("ai-act-fundamentals"))           │
└────────────────────────┬────────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────────┐
│  TIER 1: Organization Custom Content (Database)                 │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │ SELECT * FROM organizationContent                          │ │
│  │ WHERE organizationId = ? AND contentType = 'module'        │ │
│  │ AND contentId = 'ai-act-fundamentals'                      │ │
│  └────────────────────────────────────────────────────────────┘ │
│                         ✓ Found?  → Return custom content       │
└────────────────────────┬────────────────────────────────────────┘
                         │ ✗ Not found
                         ▼
┌─────────────────────────────────────────────────────────────────┐
│  TIER 2: Default Content (File System - NEW)                    │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │ Read: content/modules/ai-act-fundamentals/module.json     │ │
│  │ Read: content/modules/ai-act-fundamentals/chapters/...    │ │
│  └────────────────────────────────────────────────────────────┘ │
│                         ✓ Found?  → Return file content         │
└────────────────────────┬────────────────────────────────────────┘
                         │ ✗ Not found
                         ▼
┌─────────────────────────────────────────────────────────────────┐
│  TIER 3: Legacy Content (Source Code - OLD)                     │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │ Import from: src/lib/data/modules-data.ts                 │ │
│  │ Find in: DEFAULT_MODULES array                            │ │
│  └────────────────────────────────────────────────────────────┘ │
│                         ✓ Found?  → Return hardcoded content    │
└────────────────────────┬────────────────────────────────────────┘
                         │ ✗ Not found
                         ▼
┌─────────────────────────────────────────────────────────────────┐
│  TIER 4: System Fallback                                        │
│  Return null or default error content                           │
└─────────────────────────────────────────────────────────────────┘
```

**Multi-Locale Variant**:
```
Content Request with Locale (e.g., locale="fr")
    │
    ├─→ Try: content/modules/.../chapters/fr/00-1.md  (French)
    │   └─→ Not found? Try: content/modules/.../chapters/en/00-1.md  (English fallback)
    │       └─→ Not found? Try: modules-data.ts (Legacy hardcoded)
    │           └─→ Not found? Return null
```

---

### Content Types

#### 1. Learning Modules

**Structure**:
```
content/modules/{module-slug}/
├── module.json          # Module metadata
└── chapters/
    ├── {locale}/        # Localized chapters (optional)
    ├── 00-1.json        # Chapter metadata
    ├── 00-1.md          # Chapter content (for lessons)
    ├── 01-2.json
    └── 01-2.md
```

**Chapter Types**:
- **Lesson**: Has `.md` file with content
- **Quiz**: Questions embedded in `.json`

**Loading**:
- `src/lib/content/loader.ts` - `getModule()`, `getChapter()`
- `src/lib/actions/modules.ts` - Server actions

#### 2. Standards

**Structure**:
```
content/standards/{standard-id}/
├── metadata.json        # Standard metadata
├── controls.json        # Control definitions
└── guidance.md          # Guidance document
```

**Loading**:
- `src/lib/content/loader.ts` - `getStandard()`
- `src/lib/actions/standards.ts` - Server actions

#### 3. Assessments

**Structure**:
```
content/assessments/{assessment-type}/
├── metadata.json        # Assessment metadata
└── questions.json       # Question sets
```

**Types**:
- `accuracy-robustness`
- `conformity-assessment`
- `data-governance`
- `high-risk-classification`
- `human-oversight`
- `limited-risk`
- `prohibited-practices`
- `record-keeping`
- `risk-management`
- `technical-documentation`
- `transparency`

#### 4. Glossary

**Structure**:
```
content/glossary/
├── index.{locale}.json  # Category index
├── core-concepts.{locale}.json
├── actors-roles.{locale}.json
├── compliance-assessment.{locale}.json
└── [other categories].{locale}.json
```

**Loading**:
- `src/lib/content/loader.ts` - `getGlossaryCategories()`, `getGlossaryTerms()`
- `src/lib/actions/glossary.ts` - Server actions

#### 5. FAQ

**Structure**:
```
content/faq/
├── index.{locale}.json   # Category index
├── categories.{locale}.json
└── faqs.{locale}.json
```

#### 6. Regulation Text

**Structure**:
```
content/regulation/
├── {article-slug}.md     # Article content (118 files)
└── [localized versions]
```

**Loading**:
- `src/lib/actions/regulation.ts` - `getRegulationSectionContent()`

#### 7. Guides (Procedures, Checklists, Forms, Records)

**Structure**:
```
src/lib/data/guides/
├── procedures/           # 65 markdown files
├── checklists/          # 32 markdown files
├── forms/               # 36 markdown files
├── records/             # Multiple markdown files
└── assessment-tools/    # 16 markdown files
```

**File Naming**:
- `PROC-AI-{ID}_FINAL.{locale}.md` - Procedures
- `CHK-AI-{ID}_FINAL.{locale}.md` - Checklists
- `FORM-AI-{ID}_FINAL.{locale}.md` - Forms
- `REC-AI-{ID}_FINAL.{locale}.md` - Records

**Loading**:
- `src/lib/actions/guides.ts` - `getGuides()`, `getGuideById()`

### Content Loading Patterns

**Server-Side Loading**:
```typescript
// In server component
const module = await getModule(slug, organizationId)
const chapter = await getChapter(slug, index, organizationId)
```

**Content Loader** (`src/lib/content/loader.ts`):
- Synchronous file system reads
- JSON parsing
- Markdown file reading
- Error handling with fallbacks

**Caching Strategy**:
- No explicit caching (Next.js handles static generation)
- Content files are read on each request (development)
- Production: Next.js may cache based on route

---

### Content System: Technical Comparison

| Aspect | Legacy (`src/lib/data`) | New (`content`) |
|--------|-------------------------|-----------------|
| **Format** | TypeScript (.ts) + Markdown | JSON + Markdown |
| **Size** | Part of bundle (~10MB+) | External files (~5MB) |
| **Compiled** | Yes (bundled with code) | No (read at runtime) |
| **Edit Process** | 1. Edit code<br>2. Rebuild<br>3. Redeploy | 1. Edit file<br>2. (Optional) Commit<br>3. Auto-reload |
| **Type Safety** | Full TypeScript | Runtime validation needed |
| **Multi-locale** | Programmatic (complex) | File-based (natural) |
| **Performance** | Faster (in-memory) | File I/O overhead (minimal with Next.js cache) |
| **Customization** | Code-level only | 3-tier: DB → Files → Code |
| **Version Control** | Large diffs (code + content) | Clean content diffs |
| **Hot Reload** | Requires rebuild | Immediate (dev mode) |
| **Non-dev Editing** | ❌ Requires developer | ✅ Direct file editing |
| **Database Override** | ❌ Not supported | ✅ Supported via organizationContent |
| **Localization** | Manual translation objects | Separate files per locale |
| **Content Preview** | Must build to see changes | Instant preview |
| **Search/Replace** | Complex (mixed with code) | Simple (pure content files) |
| **Backup/Export** | Part of code repository | Separate content files |
| **Best For** | Type definitions, mappings, config | User-facing content, translations |

---

### Performance Implications

**Legacy System** (`src/lib/data`):
- ✅ **Pros**: Instant access (in memory), no I/O latency, bundled with code
- ❌ **Cons**: Large bundle size, slow builds, requires full deployment for content changes

**New System** (`content`):
- ✅ **Pros**: Smaller bundle, fast builds, instant content updates, better DX
- ⚠️ **Cons**: File I/O overhead (mitigated by Next.js caching and SSD speeds)

**Benchmark Results** (typical):
- Legacy system: 0ms (already in memory)
- New system: 5-15ms (file read + parse)
- Database custom content: 10-30ms (query + parse)

**Optimization**: Next.js automatically caches file reads in production, making the new system performance comparable to the legacy system.

---

### Developer Guidelines

#### When Adding New Content

**Use `content/` directory if**:
- ✅ Content will be translated to multiple languages
- ✅ Content changes frequently
- ✅ Non-developers need to edit it
- ✅ Organizations might want to customize it
- ✅ It's primarily markdown or structured data

**Keep in `src/lib/data/` if**:
- ✅ It's a TypeScript type or interface
- ✅ It's application configuration (not user content)
- ✅ It's a complex object that benefits from type safety
- ✅ It's a mapping/lookup table that rarely changes
- ✅ It's framework/structure definitions

#### Migration Checklist

When migrating content from `src/lib/data/` to `content/`:

1. **Create structure**:
   ```bash
   mkdir -p content/{content-type}/{item-id}
   ```

2. **Extract content**:
   - Create `metadata.json` for structured data
   - Create `content.md` for markdown content
   - Create locale-specific files: `content.{locale}.md`

3. **Update loader**:
   - Add loading logic to `src/lib/content/loader.ts`
   - Update server action to check new location first

4. **Test fallback**:
   - Ensure legacy content still loads as fallback
   - Test all locales

5. **Update references**:
   - Update all imports/usages
   - Update documentation

6. **Archive legacy** (after full migration):
   - Remove hardcoded content from `.ts` files
   - Keep only type definitions
   - Add deprecation comments

---

### Quick Start: Adding/Editing Content

#### For Developers

**Option A: Edit External Content Files** (Preferred ✅)
```bash
# 1. Navigate to content directory
cd content/

# 2. Find or create your content
# Example: Edit a module chapter
nano modules/ai-act-fundamentals/chapters/en/00-1.md

# 3. Changes are immediately visible in dev mode
npm run dev
```

**Option B: Edit Legacy Code** (Deprecated ❌)
```bash
# Only if content doesn't exist in content/ yet
cd src/lib/data/

# Edit TypeScript file (requires rebuild)
nano modules-data.ts

# Rebuild required
npm run build
```

#### For Non-Technical Users

**Step 1**: Locate Content File
- Browse `content/` directory in GitHub or file system
- Find `.md` (markdown) or `.json` (structured data) files

**Step 2**: Edit Content
- For markdown: Use any text editor (VS Code, Notepad++, etc.)
- For JSON: Use JSON editor or text editor with syntax highlighting

**Step 3**: Submit Changes
- **Option A**: Create pull request on GitHub
- **Option B**: Send edited file to developer
- **Option C**: Edit directly (if you have file system access)

**Example - Editing a FAQ**:
```bash
# File: content/faq/faqs.en.json
{
  "faqs": [
    {
      "id": "what-is-ai-act",
      "question": "What is the EU AI Act?",
      "answer": "The EU AI Act is..." # ← Edit this
    }
  ]
}
```

---

### Content System: File Structure Examples

#### Example 1: Learning Module

```
content/modules/ai-act-fundamentals/
├── module.json                    # Module metadata (shared)
├── module.fr.json                 # French metadata override
├── chapters/
│   ├── en/                       # English chapters
│   │   ├── 00-1.json             # Chapter 1 metadata
│   │   ├── 00-1.md               # Chapter 1 content
│   │   ├── 01-2.json             # Chapter 2 metadata
│   │   └── 01-2.md               # Chapter 2 content
│   ├── fr/                       # French chapters
│   │   ├── 00-1.json
│   │   ├── 00-1.md
│   │   └── ...
│   └── es/                       # Spanish chapters
│       └── ...
```

**module.json**:
```json
{
  "title": "AI Act Fundamentals",
  "description": "Master the foundations of the EU AI Act",
  "category": "fundamentals",
  "difficulty": "beginner",
  "duration": 120,
  "order": 1
}
```

**chapters/en/00-1.json**:
```json
{
  "id": "welcome",
  "title": "Welcome to EU AI Act",
  "type": "lesson",
  "duration": 10
}
```

**chapters/en/00-1.md**:
```markdown
# Welcome to EU AI Act

The EU AI Act represents a landmark piece of legislation...

## What You'll Learn

- Core concepts of AI regulation
- Risk classification framework
- Compliance requirements
```

#### Example 2: Assessment

```
content/assessments/risk-management/
├── metadata.json                  # Assessment metadata
└── questions.json                 # Question set
```

**metadata.json**:
```json
{
  "id": "risk-management",
  "title": "Risk Management Assessment",
  "description": "Evaluate your risk management processes",
  "category": "technical",
  "estimatedDuration": 20
}
```

**questions.json**:
```json
{
  "questions": [
    {
      "id": "rm-1",
      "question": "Do you have a documented risk management system?",
      "type": "yes_no_na",
      "article": "Article 9",
      "weight": 1.0
    }
  ]
}
```

#### Example 3: Standard

```
content/standards/std-ai-001/
├── metadata.json                  # Standard metadata
├── controls.json                  # Control definitions
├── guidance.md                    # English guidance
├── guidance.fr.md                 # French guidance
└── guidance.ro.md                 # Romanian guidance
```

---

### Troubleshooting: Content System Issues

#### Problem: Content Not Loading

**Symptom**: Content returns null or shows old data

**Check**:
1. Verify file exists in `content/` directory
2. Check file has correct extension (`.json` or `.md`)
3. Verify JSON is valid (use JSON validator)
4. Check content loader in `src/lib/content/loader.ts`
5. Clear Next.js cache: `rm -rf .next/`
6. Check browser console for errors

**Solution**:
```bash
# Verify file exists
ls -la content/modules/ai-act-fundamentals/module.json

# Validate JSON
cat content/modules/.../module.json | jq .

# Clear cache and rebuild
rm -rf .next/ && npm run dev
```

#### Problem: Wrong Locale Loading

**Symptom**: English content shows when French requested

**Check**:
1. Verify locale-specific file exists: `content/.../chapters/fr/00-1.md`
2. Check locale parameter in URL: `/{locale}/page`
3. Verify middleware locale detection: `src/middleware.ts`
4. Check fallback logic in content loader

**Solution**:
- Create locale-specific file if missing
- Check URL contains correct locale prefix
- Verify `Accept-Language` header for auto-detection

#### Problem: Content Changes Not Visible

**Symptom**: Edited content doesn't appear in application

**Check**:
1. **Development**: Hot reload should work automatically
2. **Production**: Content is cached by Next.js
3. File saved correctly (no unsaved changes in editor)
4. Correct file being edited (not legacy `src/lib/data/`)

**Solution**:
```bash
# Development - restart dev server
npm run dev

# Production - rebuild and redeploy
npm run build && npm start

# Check if editing correct file
grep -r "your content text" content/
```

#### Problem: Legacy Content vs New Content Conflict

**Symptom**: Old content appears even after creating new content files

**Check**:
1. Content loader checks new system first? (see `src/lib/content/loader.ts`)
2. File path matches expected pattern?
3. Legacy content still exists in `src/lib/data/`?

**Solution**:
- Verify loader priority: DB → Files → Legacy
- Check file naming convention matches loader expectations
- Consider removing legacy content after migration

#### Problem: Organization Custom Content Not Overriding

**Symptom**: Database content override not working

**Check**:
1. `organizationContent` table has correct record
2. `organizationId` matches user's organization
3. `contentType` and `contentId` match exactly
4. Content loader checks database first (Tier 1)

**Solution**:
```sql
-- Check custom content exists
SELECT * FROM organization_content 
WHERE organization_id = 'your-org-id' 
AND content_type = 'module' 
AND content_id = 'ai-act-fundamentals';

-- Verify JSON is valid
SELECT content FROM organization_content WHERE id = 'record-id';
```

---

## API Architecture

### Server Actions Pattern

**No traditional REST API** - All mutations use Server Actions

**Location**: `src/lib/actions/*.ts`

**Pattern**:
```typescript
"use server"

export async function createEntity(data: EntityData) {
  const session = await getSession()
  if (!session) throw new UnauthorizedError()
  
  // Database operation
  const result = await db.insert(entity).values(data)
  
  // Revalidate cache
  revalidatePath('/path')
  
  return { success: true, data: result }
}
```

### Server Action Modules

1. **`ai-systems.ts`** - AI system CRUD
2. **`assessments.ts`** - Assessment management
3. **`auth.ts`** - Authentication (login, register)
4. **`content.ts`** - Content loading utilities
5. **`documents.ts`** - Document management
6. **`glossary.ts`** - Glossary operations
7. **`guides.ts`** - Guide loading (procedures, checklists, etc.)
8. **`implementation.ts`** - Compliance implementation tracking
9. **`modules.ts`** - Learning module operations
10. **`policies.ts`** - Policy management
11. **`regulation.ts`** - Regulation text loading
12. **`requirements.ts`** - Requirement tracking
13. **`standards.ts`** - Standard loading
14. **`templates.ts`** - Template management
15. **`utils.ts`** - Common action patterns

### API Routes

**Location**: `src/app/api/*`

#### 1. Authentication (`/api/auth/[...nextauth]/route.ts`)

**NextAuth handler**:
- `GET /api/auth/signin` - Sign in page
- `POST /api/auth/signin` - Sign in
- `GET /api/auth/signout` - Sign out
- `GET /api/auth/callback/{provider}` - OAuth callback
- `GET /api/auth/session` - Get session

#### 2. Status (`/api/status/route.ts`)

**Health check endpoint**:
- `GET /api/status` - Returns system status
  - Server status
  - Database connection
  - Environment variables
  - Timestamp, uptime

**Response**:
```json
{
  "server": "running",
  "timestamp": "2024-...",
  "uptime": 12345,
  "environment": "production",
  "version": "v18.0.0",
  "checks": {
    "database": "connected",
    "environment": "configured"
  },
  "errors": []
}
```

### Error Handling in Actions

**Result Pattern**:
```typescript
type Result<T, E = AppError> =
  | { success: true; data: T }
  | { success: false; error: E }
```

**Usage**:
```typescript
export async function createEntity(data: EntityData): Promise<Result<string>> {
  try {
    const id = await db.insert(entity).values(data)
    return success(id)
  } catch (error) {
    return failure(new DatabaseError("Failed to create entity", error))
  }
}
```

**Error Types** (`src/lib/errors.ts`):
- `AppError` - Base error class
- `ValidationError` - 400 Bad Request
- `UnauthorizedError` - 401 Unauthorized
- `NotFoundError` - 404 Not Found
- `DatabaseError` - 500 Internal Server Error

---

## Component Architecture

### Component Hierarchy

```
Root Layout
├── Locale Layout ([locale]/layout.tsx)
│   ├── TranslationsProvider
│   ├── AuthProvider
│   ├── ErrorBoundary
│   ├── CookieConsent
│   ├── GoogleAnalytics
│   └── Page Components
└── Global Styles (globals.css)
```

### Component Categories

#### 1. UI Components (`src/components/ui/`)

**shadcn/ui components** (57 files):
- Form: Button, Input, Textarea, Select, Checkbox, Radio, Switch, Calendar, DatePicker, Combobox
- Layout: Accordion, Breadcrumb, Navigation Menu, Sidebar, Tabs, Separator, Scroll Area, Resizable
- Overlays: Dialog, Alert Dialog, Sheet, Drawer, Popover, Tooltip, Hover Card, Context Menu, Dropdown Menu, Menubar, Command
- Feedback: Alert, Toast, Progress, Spinner, Skeleton, Badge, Empty
- Display: Avatar, Card, Table, Data Table, Chart, Carousel, Aspect Ratio, Typography, Item, Kbd
- Misc: Collapsible, Toggle, Toggle Group, Pagination

**Pattern**: All components use Radix UI primitives + Tailwind CSS

#### 2. Feature Components

**Navigation**:
- `nav.tsx` - Main navigation
- `nav-client.tsx` - Client-side nav logic
- `nav-with-auth.tsx` - Authenticated navigation
- `user-menu.tsx` - User dropdown menu
- `language-switcher.tsx` - Locale switcher

**Content Display**:
- `lesson-content.tsx` - Learning module content renderer
- `chapter-list.tsx` - Chapter navigation
- `chapter-conclusion.tsx` - Chapter summary
- `quiz-content.tsx` - Quiz renderer

**Assessment**:
- `classification-wizard.tsx` - Risk classification wizard
- `comprehensive-assessment-wizard.tsx` - Full assessment flow
- `assessment-card.tsx` - Assessment card display
- `quick-assessment-modal.tsx` - Quick assessment dialog

**System Management**:
- `add-ai-system-dialog.tsx` - Create AI system dialog
- `system-tabs/` - System detail tabs (compliance, risk, roles, evidence)
- `requirement-card.tsx` - Requirement display card

**Implementation**:
- `module-card.tsx` - Learning module card
- `procedures/` - Procedure renderers (8 components)
- `standards/` - Standard renderers (5 components)
- `documents/` - Document renderers (4 components)

**Diagrams**:
- `diagrams/` - 15 SVG diagram components
  - AI lifecycle, risk classification flow, conformity assessment tree, etc.

**Other**:
- `footer.tsx` - Site footer
- `page-header.tsx` - Page header with breadcrumbs
- `timeline.tsx` - Timeline component
- `risk-pyramid.tsx` - Risk visualization
- `roles-diagram.tsx` - Role visualization
- `journey-step.tsx` - Journey step indicator

#### 3. Provider Components

**`providers/auth-provider.tsx`**:
- Wraps app with NextAuth `SessionProvider`
- Provides session context

**`translations-provider.tsx`**:
- Provides translation messages to client components
- Context: `{ messages, locale }`

**`theme-provider.tsx`**:
- Dark mode provider (next-themes)
- System preference detection

**`error-boundary.tsx`**:
- React Error Boundary
- Catches component errors
- Displays error UI with retry option

#### 4. Content Components

**`content/`**:
- `learning-objectives.tsx` - Learning objectives display
- `expert-insight.tsx` - Expert insight callout
- `compliance-note.tsx` - Compliance note callout
- `self-assessment.tsx` - Self-assessment widget
- `index.tsx` - Content component exports

### Component Patterns

#### Server Components (Default)

```typescript
// No 'use client' directive
export default async function Page() {
  const data = await fetchData() // Server-side data fetching
  return <div>{data}</div>
}
```

#### Client Components

```typescript
'use client'

import { useState } from 'react'

export function InteractiveComponent() {
  const [state, setState] = useState()
  // Client-side interactivity
}
```

#### Composition Pattern

```typescript
// Compound component
<Dialog>
  <DialogTrigger>Open</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Title</DialogTitle>
    </DialogHeader>
  </DialogContent>
</Dialog>
```

---

## Styling & Theming

### Tailwind CSS 4

**Configuration**: No `tailwind.config.js` (using CSS-first configuration)

**Global Styles**: `src/app/globals.css`

### Color System

**OKLCH Color Space** (modern, perceptually uniform):
```css
:root {
  --background: oklch(0.995 0.002 270);
  --foreground: oklch(0.145 0.03 270);
  --primary: oklch(0.488 0.243 264);
  --secondary: oklch(0.965 0.015 270);
  --accent: oklch(0.696 0.17 162);
  --destructive: oklch(0.577 0.215 27);
  /* ... */
}
```

**Color Tokens**:
- `background` / `foreground` - Base colors
- `card` / `card-foreground` - Card backgrounds
- `popover` / `popover-foreground` - Popover backgrounds
- `primary` / `primary-foreground` - Primary actions
- `secondary` / `secondary-foreground` - Secondary actions
- `muted` / `muted-foreground` - Muted text/backgrounds
- `accent` / `accent-foreground` - Accent colors
- `destructive` / `destructive-foreground` - Error/destructive actions
- `border` / `input` / `ring` - Border and focus colors
- `chart-1` through `chart-5` - Chart colors
- `sidebar-*` - Sidebar-specific colors

### Typography

**Font Stack**:
- Sans: `"Inter", "Inter Fallback", system-ui, sans-serif`
- Mono: `"Geist Mono", "Geist Mono Fallback", monospace`

**Prose Styles** (`.prose` class):
- Comprehensive markdown content styling
- Headings, paragraphs, lists, blockquotes, code, tables
- Dark mode variants
- Custom checklist styles

### Dark Mode

**Implementation**: `next-themes`

**Strategy**: System preference with manual override

**Theme Provider**: `src/components/theme-provider.tsx`

**CSS Variables**: Automatically switch based on `.dark` class

### Utility Functions

**`src/lib/utils.ts`**:
```typescript
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

**Usage**: Combines class names with Tailwind conflict resolution

### Responsive Design

**Breakpoints** (Tailwind defaults):
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

**Mobile Hook**: `src/hooks/use-mobile.ts` - Detects mobile viewport

---

## Error Handling & Validation

### Error Types

**`src/lib/errors.ts`**:

```typescript
class AppError extends Error {
  code: string
  statusCode: number
}

class ValidationError extends AppError      // 400
class UnauthorizedError extends AppError   // 401
class NotFoundError extends AppError        // 404
class DatabaseError extends AppError        // 500
```

### Result Pattern

**Type-Safe Error Handling**:
```typescript
type Result<T, E = AppError> =
  | { success: true; data: T }
  | { success: false; error: E }

function success<T>(data: T): Result<T>
function failure<E>(error: E): Result<never, E>
```

**Usage**:
```typescript
const result = await createEntity(data)
if (result.success) {
  // Use result.data
} else {
  // Handle result.error
}
```

### Validation

**Zod Schemas** (`src/lib/validators/`):

**`ai-system.ts`**:
- AI system creation/update validation
- Risk level validation
- Role validation

**`assessment.ts`**:
- Assessment answer validation
- Question ID validation

**Form Validation**:
- React Hook Form + Zod resolver
- Client-side validation
- Server-side validation in actions

### Error Boundaries

**`src/components/error-boundary.tsx`**:
- React Error Boundary class component
- Catches component tree errors
- Displays error UI with:
  - Error message
  - Stack trace (development only)
  - Retry button
  - Return to home button

**Usage**: Wraps app in `[locale]/layout.tsx`

### Error Handling in Server Actions

**Pattern**:
```typescript
export async function action(data: Input): Promise<Result<Output>> {
  try {
    // Validate input
    const validated = schema.parse(data)
    
    // Check authentication
    const session = await getSession()
    if (!session) {
      return failure(new UnauthorizedError())
    }
    
    // Database operation
    const result = await db.operation(validated)
    
    // Revalidate
    revalidatePath('/path')
    
    return success(result)
  } catch (error) {
    if (error instanceof ZodError) {
      return failure(new ValidationError(error.message))
    }
    return failure(new DatabaseError("Operation failed", error))
  }
}
```

---

## Security Architecture

### Security Headers

**`next.config.ts`**:
```typescript
headers: [
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-XSS-Protection', value: '1; mode=block' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
]
```

### Authentication Security

**JWT Strategy**:
- HTTP-only cookies (prevents XSS)
- Secure flag in production
- SameSite protection

**Password Security**:
- Password hashing (implementation in `src/lib/auth/jwt.ts`)
- No plaintext storage

**OAuth Security**:
- State parameter validation
- PKCE (if supported by provider)
- Secure callback URLs

### Authorization

**Multi-tenant Isolation**:
- All queries filtered by `organizationId`
- Session contains organization context
- No cross-organization data access

**Route Protection**:
- Middleware validates authentication
- Server actions check session
- Client-side checks for UX only

### Data Validation

**Input Validation**:
- Zod schemas for all user input
- Server-side validation in actions
- Client-side validation for UX

**SQL Injection Prevention**:
- Drizzle ORM (parameterized queries)
- No raw SQL with user input

**XSS Prevention**:
- React automatic escaping
- Markdown sanitization (react-markdown)
- No `dangerouslySetInnerHTML` except where necessary (locale script)

### Environment Variables

**Required**:
- `DATABASE_URL` - Database connection
- `NEXTAUTH_SECRET` - JWT signing secret
- `NEXTAUTH_URL` - Application URL

**Optional**:
- `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET`
- `GITHUB_CLIENT_ID` / `GITHUB_CLIENT_SECRET`

**Validation**: Status endpoint checks for required variables

---

## Build & Deployment

### Build Configuration

**`next.config.ts`**:
- **Output**: `standalone` in production
- **Turbopack**: Enabled in development (`--turbopack`)
- **Optimizations**:
  - `optimizePackageImports: ['lucide-react']`
  - `serverExternalPackages: ['postgres', 'pg', 'better-sqlite3']`

**Standalone Build**:
- `npm run build:standalone`
- Creates `.next/standalone/` directory
- Includes all dependencies
- Post-build script copies static assets

### Build Scripts

```bash
npm run dev              # Development with Turbopack
npm run build            # Production build
npm run build:standalone # Standalone build
npm run start            # Start production server
npm run lint             # ESLint
```

### Deployment Targets

**Vercel** (Recommended):
- Zero-config deployment
- Automatic builds from Git
- Environment variables in dashboard
- PostgreSQL via Vercel Postgres or external

**Railway**:
- PostgreSQL included
- Git-based deployment
- Environment variables in dashboard

**Docker**:
- Standalone build compatible
- Dockerfile can be created from standalone output

**VPS**:
- Standalone build + Node.js runtime
- PM2 or systemd for process management
- Nginx reverse proxy

### Environment Setup

**Development**:
```bash
cp .env.example .env.local
# Edit .env.local
npm run db:migrate
npm run db:seed
npm run dev
```

**Production**:
- Set `NODE_ENV=production`
- Configure `DATABASE_URL`
- Set `NEXTAUTH_SECRET` (generate secure random string)
- Set `NEXTAUTH_URL` to production domain
- Configure OAuth callback URLs

### Database Migrations

**Drizzle Kit**:
```bash
npm run db:generate   # Generate from schema
npm run db:migrate    # Apply migrations
npm run db:studio     # Open GUI
```

**Migration Files**: `drizzle-pg/`

**Strategy**: Version-controlled migrations

---

## Testing Strategy

### Testing Framework

**Vitest** - Fast Vite-based test runner

**Configuration**: `vitest.config.ts`

### Test Structure

**Location**: `src/__tests__/`

**Test Files**:
- Unit tests for utilities
- Component tests (React Testing Library)
- Integration tests (future)

### Test Scripts

```bash
npm test              # Run tests
npm run test:ui       # Interactive UI
npm run test:coverage # With coverage
```

### Testing Libraries

- **Vitest** - Test runner
- **@testing-library/react** - React component testing
- **@testing-library/jest-dom** - DOM matchers
- **@vitest/coverage-v8** - Coverage reports
- **@vitest/ui** - Test UI

### Test Coverage

**Current Status**: Basic test setup, limited test coverage

**Areas for Testing**:
- Server actions
- Utility functions
- Component rendering
- Form validation
- Error handling

---

## Performance Optimizations

### Next.js Optimizations

**Server Components**:
- Default rendering on server
- Minimal JavaScript bundle
- Automatic code splitting

**Static Generation**:
- Pre-rendered pages where possible
- ISR (Incremental Static Regeneration) for dynamic content

**Image Optimization**:
- Next.js Image component
- Automatic format optimization
- Lazy loading

### Database Optimizations

**Indexes**:
- Strategic indexes on frequently queried columns
- Composite indexes for common query patterns

**Query Optimization**:
- Drizzle ORM for efficient queries
- Eager loading where appropriate
- Pagination for large datasets

### Bundle Optimization

**Package Imports**:
- `optimizePackageImports: ['lucide-react']` - Tree-shaking

**External Packages**:
- Database drivers marked as external (not bundled)

**Code Splitting**:
- Automatic route-based splitting
- Dynamic imports for heavy components

### Caching Strategy

**Next.js Caching**:
- Route cache (automatic)
- Full route cache (static pages)
- Data cache (fetch requests)
- Request memoization (React cache)

**Revalidation**:
- `revalidatePath()` in server actions
- `revalidateTag()` for tagged cache

---

## Data Flow Diagrams

### Authentication Flow

```
User → Login Page
  ↓
OAuth Provider / Email+Password
  ↓
NextAuth Callback
  ↓
JWT Token Created
  ↓
Cookie Set (HTTP-only)
  ↓
Session Available in Components
```

### Content Loading Flow

```
Page Component
  ↓
Server Action / Content Loader
  ↓
Check Organization Custom Content (DB)
  ↓ (if not found)
Load from File System (/content/)
  ↓ (if not found)
Fallback to System Content
  ↓
Render Component
```

### Assessment Flow

```
User Starts Assessment
  ↓
Server Action: createAssessment()
  ↓
Database: Insert Assessment Record
  ↓
User Answers Questions
  ↓
Server Action: saveAnswer()
  ↓
Database: Insert AssessmentAnswer
  ↓
Calculate Score
  ↓
Update Assessment Status
  ↓
Display Results
```

### Multi-tenant Data Access

```
Request → Middleware
  ↓
Extract Session / Organization ID
  ↓
Server Component / Action
  ↓
Query Database with organizationId Filter
  ↓
Return Scoped Data
```

---

## Conclusion

This architecture document provides a comprehensive overview of the AI Comply platform. The system is built with modern best practices, focusing on:

- **Type Safety**: TypeScript throughout
- **Performance**: Server-first architecture
- **Security**: Multi-tenant isolation, secure authentication
- **Scalability**: Modular design, efficient database queries
- **Maintainability**: Clear separation of concerns, consistent patterns
- **Internationalization**: Full multi-locale support (5 languages)
- **Content Management**: Flexible 3-tier content system (Database → Files → Legacy)

### Key Strengths

1. **Modern Stack**: Next.js 16, React 19, TypeScript 5.7
2. **Type Safety**: End-to-end type safety with Drizzle ORM
3. **Server-First**: Optimal performance with minimal client JS
4. **Multi-tenant**: Secure organization isolation
5. **Content Flexibility**: Database overrides + file system + legacy fallback
6. **Comprehensive**: Full compliance workflow from learning to implementation
7. **Localization**: Native multi-locale support with clean file-based translations

### Current Challenges & Migrations

1. **Content System Migration** 🔄
   - Migrating 8998+ lines from hardcoded TypeScript to external files
   - 284 guide files need to move from `src/lib/data/guides/` to `content/guides/`
   - Migration ~40% complete (regulation, FAQ, modules structure done)
   - **Priority**: Complete module content migration to enable non-technical editing

2. **Multi-locale Content** 🔄
   - Modules partially translated (EN, FR, ES, RO)
   - Standards need full translation coverage
   - Guides need localization strategy

### Areas for Future Enhancement

1. **Content Migration** (Priority: 🔴 High)
   - Complete migration of all content to `content/` directory
   - Remove 8998-line `modules-data.ts` file
   - Migrate 284 guide markdown files
   - Create content editing documentation for non-technical users

2. **Authorization** (Priority: 🟡 Medium)
   - Implement role-based access control (owner, admin, member)
   - Fine-grained permissions for content editing
   - Audit logging for sensitive actions

3. **Performance** (Priority: 🟢 Low)
   - Add Redis for content caching
   - Implement service workers for offline access
   - Optimize database query patterns

4. **Features** (Priority: 🟡 Medium)
   - Real-time collaboration with WebSockets
   - Enhanced analytics dashboard
   - REST API for external integrations
   - Export/import functionality for content

5. **Testing** (Priority: 🟡 Medium)
   - Expand test coverage (currently minimal)
   - E2E tests for critical workflows
   - Integration tests for content system

6. **Documentation** (Priority: 🟡 Medium)
   - Content editing guide for non-technical users
   - API documentation with OpenAPI spec
   - Video tutorials for key workflows
   - Translation guide for contributors

---

**Document Version**: 1.0  
**Last Updated**: 2024  
**Maintained By**: Development Team
