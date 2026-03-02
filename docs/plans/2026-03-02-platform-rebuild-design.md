# AI Comply Platform Rebuild — Design Document

**Date:** 2026-03-02
**Status:** Approved
**Authors:** Daniel Minda, Claude

## Overview

Rebuild the AI Comply platform from the ground up as a UX-oriented, SEO/GEO-driven website. The project is open-source; this website (deployed on Vercel + Supabase) serves as the full demo experience. Self-hosters can fork and deploy with their own Supabase instance.

### Goals

- Fully public content pages for maximum SEO/GEO crawlability
- Full platform experience behind auth (Supabase) for assessments, inventory, compliance tracking
- Clean & professional design (Stripe/Linear style)
- English only — no i18n infrastructure
- Guided user journey: understand > assess > implement

### Audience

- Compliance officers — need to understand obligations and track compliance
- CTOs / Tech leaders — need to assess whether the AI Act applies to them
- Developers / Engineers — need technical requirements and implementation guidance

---

## 1. Site Structure & Routing

```
/                           # Landing page — hero, value prop, funnel CTA
├── /understand/            # Learning hub overview
│   ├── /modules/           # Module listing
│   │   └── /[slug]/        # Module detail + chapter navigation
│   │       └── /[chapter]/ # Individual lesson/quiz
│   ├── /regulation/        # Full AI Act text browser
│   │   └── /[slug]/        # Individual chapter/annex
│   ├── /glossary/          # Searchable glossary
│   └── /faq/               # FAQ
│
├── /assess/                # Assessment hub (auth required except classification)
│   ├── /inventory/         # AI system inventory
│   │   └── /[id]/          # System detail + tabs
│   ├── /classification/    # Risk classification wizard (public, client-side)
│   ├── /assessments/       # Saved assessments
│   │   └── /[id]/          # Assessment detail
│   └── /requirements/      # Requirements tracking
│       └── /[systemId]/    # Per-system requirements
│
├── /implement/             # Implementation hub
│   ├── /standards/         # 14 standards listing (public)
│   │   └── /[id]/          # Standard detail + controls + guidance
│   ├── /guides/            # Procedures, checklists, forms, records (public)
│   │   └── /[category]/
│   │       └── /[id]/      # Individual guide
│   ├── /policies/          # Policy management (auth required)
│   │   └── /[id]/
│   └── /controls/          # Control tracking (auth required)
│       └── /[id]/
│
├── /resources/             # Additional resources
│   └── /global-regulations/ # Comparison of global AI regulations
│
├── /auth/
│   ├── /login/
│   └── /register/
│
├── /dashboard/             # Authenticated user dashboard
├── /privacy/
├── /terms/
├── /changelog/
└── /docs/                  # Open-source project docs / self-hosting guide
```

### Public vs Protected

| Layer | Pages | Rendering | Auth |
|-------|-------|-----------|------|
| **Public content** | Modules, standards, guides, regulation, glossary, FAQ, risk wizard | Static (SSG) | None |
| **Platform tools** | AI system inventory, assessments, compliance tracking, gap analysis, policies | Server-rendered | Required |

---

## 2. Tech Stack & Project Structure

### Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript (strict) |
| Database | Supabase (managed Postgres) |
| Auth | Supabase Auth (email/password, social providers later) |
| ORM | Drizzle ORM (over Supabase Postgres connection) |
| UI | React 19, Tailwind CSS 4, shadcn/ui (Radix primitives) |
| Content | JSON + Markdown files (static generation at build time) |
| Search | Client-side (Fuse.js or FlexSearch) with pre-built index |
| Deployment | Vercel (demo), Docker for self-hosting |

### Directory Structure

```
ai-act-platform/
├── content/                    # Existing content (English only)
│   ├── modules/                # 5 learning modules (JSON + MD)
│   ├── standards/              # 14 standards (metadata, controls, guidance)
│   ├── guides/                 # 237 docs (procedures, checklists, forms, records)
│   ├── regulation/             # Full EU AI Act text (60 files)
│   ├── glossary/               # 12 glossary category files
│   ├── faq/                    # 3 FAQ files
│   ├── assessments/            # 23 assessment question bank files
│   └── policies/               # Policy templates
│
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout — nav, footer, Supabase provider
│   │   ├── page.tsx            # Landing page
│   │   ├── (public)/           # Route group — static content pages
│   │   │   ├── understand/
│   │   │   ├── implement/standards/
│   │   │   ├── implement/guides/
│   │   │   ├── resources/
│   │   │   └── assess/classification/
│   │   ├── (protected)/        # Route group — auth-required pages
│   │   │   ├── layout.tsx      # Auth guard layout
│   │   │   ├── dashboard/
│   │   │   ├── assess/inventory/
│   │   │   ├── assess/assessments/
│   │   │   ├── assess/requirements/
│   │   │   ├── implement/policies/
│   │   │   └── implement/controls/
│   │   ├── auth/
│   │   └── api/
│   │
│   ├── components/
│   │   ├── ui/                 # shadcn/ui primitives
│   │   ├── layout/             # Nav, footer, sidebar, breadcrumbs
│   │   ├── content/            # Content rendering (markdown, module viewer)
│   │   └── tools/              # Interactive tools (risk wizard, assessments)
│   │
│   ├── lib/
│   │   ├── supabase/
│   │   │   ├── client.ts       # Browser Supabase client
│   │   │   ├── server.ts       # Server Supabase client (cookies)
│   │   │   └── middleware.ts   # Auth session refresh
│   │   ├── db/
│   │   │   ├── schema.ts       # Drizzle schema
│   │   │   └── index.ts        # Drizzle client
│   │   ├── actions/            # Server actions (Drizzle queries)
│   │   ├── content/            # Content loader (reads from content/ dir)
│   │   ├── utils/              # Risk classification, compliance scoring
│   │   └── validators/         # Zod schemas
│   │
│   └── hooks/
│
├── supabase/
│   ├── migrations/             # SQL migrations (schema + RLS policies)
│   └── seed.sql                # Demo data
│
├── drizzle.config.ts
├── next.config.ts
├── tailwind.config.ts
└── package.json
```

### Key Architectural Decisions

- **Route groups** `(public)` and `(protected)` handle the split — no middleware-based auth checking for route protection
- **Supabase client split** — browser client for auth state, server client (with cookies) for server components and actions
- **Drizzle connects to Supabase Postgres** via connection string
- **Content loader** reads JSON/MD from disk at build time for static pages
- **No i18n infrastructure** — no middleware locale detection, no translation providers, no message files

---

## 3. Database Schema

### Changes from Current Schema

- User IDs from `auth.users` (Supabase Auth) — no custom user table
- UUIDs instead of nanoid
- RLS policies for multi-tenancy
- Fewer tables — Supabase handles auth tables

### Tables (8 total)

```
auth.users (managed by Supabase)
  │
  │ 1:1 on signup (trigger)
  ▼
profile
  - id (uuid, FK → auth.users)
  - full_name
  - role
  - organization_id (FK → organization)
  - created_at

organization
  - id (uuid, PK)
  - name
  - slug (unique)
  - created_at

ai_system (org-scoped via RLS)
  - id (uuid, PK)
  - organization_id (FK → organization)
  - name, description
  - risk_level, operator_role, category, status
  - created_at, updated_at

assessment (org-scoped via RLS)
  - id (uuid, PK)
  - organization_id (FK → organization)
  - ai_system_id (FK → ai_system)
  - type, status, score
  - completed_at, created_at

assessment_answer
  - id (uuid, PK)
  - assessment_id (FK → assessment)
  - question_id, answer, score

compliance_requirement (org-scoped via RLS)
  - id (uuid, PK)
  - ai_system_id (FK → ai_system)
  - organization_id (FK → organization)
  - standard_id, control_id
  - status, evidence
  - verified_at, created_at

gap_analysis_result (org-scoped via RLS)
  - id (uuid, PK)
  - ai_system_id (FK → ai_system)
  - organization_id (FK → organization)
  - requirement_id, gap_description
  - severity, remediation_plan, status
  - created_at

policy (org-scoped via RLS)
  - id (uuid, PK)
  - organization_id (FK → organization)
  - title, content, status
  - created_at, updated_at
```

### RLS Policy Pattern

```sql
CREATE POLICY "org_isolation" ON ai_system
  USING (organization_id = (
    SELECT organization_id FROM profile WHERE id = auth.uid()
  ));
```

Applied to all org-scoped tables.

### Supabase Trigger — Profile on Signup

```sql
CREATE FUNCTION handle_new_user() RETURNS trigger AS $$
BEGIN
  INSERT INTO profile (id, full_name)
  VALUES (new.id, new.raw_user_meta_data->>'full_name');
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();
```

### Tables Dropped

Supabase replaces: `user`, `session`, `account`, `verification_token`.
Static content replaces: `learning_module`, `user_module_progress`, `quiz_attempt`, `module_resource`, `glossary_term`, `glossary_bookmark`.
Removed for simplicity: `certificate`, `report`, `audit_log`, `organization_content`, `organization_member`, `document`, `requirements_status`.

---

## 4. SEO & GEO Strategy

### Static Generation

All public content pages are statically generated at build time — pure HTML, no client JS to render content. Perfect Core Web Vitals.

### URL Structure

```
/understand/modules/ai-act-fundamentals/
/understand/modules/ai-act-fundamentals/1/
/understand/regulation/chapter-03-high-risk-ai-systems/
/understand/glossary/
/understand/faq/
/implement/standards/std-ai-001/
/implement/guides/procedures/PROC-AI-RM-001/
/assess/classification/
```

### Structured Data (JSON-LD)

| Page type | Schema.org type | Key properties |
|-----------|----------------|----------------|
| Module/Chapter | `Course` + `LearningResource` | name, description, educationalLevel, timeRequired |
| Standard | `TechArticle` | name, description, articleSection, keywords |
| Guide/Procedure | `HowTo` | name, step[].text, tool, supply |
| Regulation article | `Legislation` | legislationIdentifier, name, text |
| Glossary | `DefinedTermSet` + `DefinedTerm` | name, description, inDefinedTermSet |
| FAQ | `FAQPage` + `Question/Answer` | name, acceptedAnswer |
| Risk wizard | `WebApplication` | name, applicationCategory, offers (free) |

### GEO Optimizations

1. **Quotable content** — concise summary at top of every page, short factual paragraphs, headings as standalone questions
2. **Expertise signals** — author attribution, last updated dates, regulation article citations, internal cross-linking
3. **Crawlability** — `sitemap.xml` auto-generated, `robots.txt` allows all crawlers including AI bots (GPTBot, ClaudeBot)
4. **Meta per page** — unique title, description, Open Graph tags, canonical URL
5. **Internal linking graph** — glossary terms auto-linked in content, standards reference guides, modules link to regulation articles, "related content" sections

---

## 5. UI & Component Architecture

### Layout Variants

1. **Full-width** — landing page, hub pages (`/understand/`, `/assess/`, `/implement/`)
2. **Content + sidebar** — detail pages with table of contents or section navigation

### Component Tree

```
components/
├── ui/                     # shadcn/ui primitives (carried over)
│
├── layout/
│   ├── site-header.tsx     # Nav with mega-menu for 3 pillars
│   ├── site-footer.tsx     # Links, GitHub star, license
│   ├── sidebar-nav.tsx     # Left sidebar for content pages
│   ├── breadcrumbs.tsx     # Auto-generated from route
│   ├── table-of-contents.tsx  # Right-side TOC from markdown headings
│   └── mobile-nav.tsx      # Sheet-based mobile menu
│
├── content/
│   ├── markdown-renderer.tsx   # MD → React (syntax highlighting, callouts)
│   ├── module-card.tsx         # Module listing card
│   ├── standard-card.tsx       # Standard listing card
│   ├── guide-card.tsx          # Guide listing card
│   ├── chapter-nav.tsx         # Previous/next chapter navigation
│   ├── search-bar.tsx          # Client-side content search
│   ├── glossary-tooltip.tsx    # Hover tooltip for glossary terms
│   └── related-content.tsx     # Related section at bottom of detail pages
│
├── tools/
│   ├── risk-classification-wizard.tsx
│   ├── self-assessment-form.tsx
│   └── compliance-checklist.tsx
│
├── dashboard/
│   ├── overview-stats.tsx
│   ├── system-list.tsx
│   └── assessment-summary.tsx
│
└── auth/
    ├── login-form.tsx
    ├── register-form.tsx
    └── user-menu.tsx
```

### Design Tokens

```
Colors:
  primary:    slate-900         # Near-black for text/headings
  accent:     blue-600          # CTA buttons, links, active states
  surface:    white / slate-50  # Cards on light gray background
  border:     slate-200         # Subtle dividers
  muted:      slate-500         # Secondary text
  success:    emerald-600       # Compliance met
  warning:    amber-500         # Needs attention
  danger:     red-600           # Non-compliant / high risk

Typography:
  Font:       Inter
  Headings:   font-semibold tracking-tight
  Body:       text-base leading-relaxed text-slate-700

Spacing:
  Page max-width:  max-w-7xl (1280px)
  Content width:   max-w-3xl (768px) for long-form reading
  Section padding: py-16 (desktop), py-10 (mobile)
```

### UX Patterns

- Hub pages: cards in a grid with filters/search
- Content pages: reading-optimized width (768px) with sidebar and TOC
- Progress indicators on wizards
- Breadcrumbs on every non-landing page
- Mobile-first — sidebar collapses to sheet, TOC becomes dropdown
- No heavy animations — fast, professional, content-focused

---

## 6. Content Loading & Rendering

### Static Generation

All public content pages use `generateStaticParams()` to pre-render at build time from the `content/` directory.

### Markdown Pipeline

```
.md file → unified/remark → remark-gfm
         → rehype          → rehype-slug (heading anchors)
                           → rehype-autolink-headings
                           → rehype-pretty-code (Shiki)
                           → custom: glossary-linker
         → React components
```

Custom callout blocks:
```markdown
:::regulation
Article 6(1) — Classification rules for high-risk AI systems
:::
```

### Content Search

Pre-built search index at build time (`public/search-index.json`). Client-side search via Fuse.js or FlexSearch. ~200-400KB gzipped for ~400 pages.

### Content Types

| Content | Source | Rendering |
|---------|--------|-----------|
| Module chapter | `chapters/en/NN-N.md` + `.json` | Markdown + sidebar chapter nav + prev/next |
| Quiz | `chapters/en/NN-N.json` (type: quiz) | Client component — interactive |
| Standard | `metadata.json` + `controls.json` + `guidance.md` | Metadata card + controls table + markdown |
| Guide | `*.md` | Markdown with TOC |
| Regulation | `en/*.md` | Markdown with auto-linked cross-references |
| Glossary | `*.json` per category | Categorized term list with anchors |
| FAQ | `faqs.json` + `categories.json` | Accordion + FAQPage JSON-LD |
| Assessment | `questions.json` per section | Client component — multi-step form |

---

## 7. Authentication & Protected Routes

### Supabase Auth Flow

1. User signs up via `supabase.auth.signUp({ email, password, options: { data: { full_name, organization_name } } })`
2. Supabase creates `auth.users` row
3. DB trigger creates `profile` row + `organization` row
4. User redirected to `/dashboard`

### Middleware

Session refresh only — no locale detection, no route protection:

```typescript
export async function middleware(request: NextRequest) {
  const supabase = createServerClient(request, response)
  await supabase.auth.getUser()
  return response
}
```

### Protected Layout

```typescript
// src/app/(protected)/layout.tsx
export default async function ProtectedLayout({ children }) {
  const supabase = createServerClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/auth/login')
  return <>{children}</>
}
```

### Server Actions Pattern

```typescript
'use server'
import { db } from '@/lib/db'
import { getUser } from '@/lib/supabase/server'

export async function getAISystems() {
  const user = await getUser()
  const userProfile = await db.query.profile.findFirst({
    where: eq(profile.id, user.id)
  })
  return db.query.aiSystem.findMany({
    where: eq(aiSystem.organizationId, userProfile.organizationId)
  })
}
```

RLS is the safety net. Drizzle queries still filter by org for clarity and performance.

---

## 8. Deployment & Open-Source

### Vercel Demo Site

- Auto-deploy from GitHub main branch
- Environment variables: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`, `DATABASE_URL`

### Self-Hosting Options

1. **Vercel + Supabase Cloud** — fork, connect, set env vars, deploy
2. **Docker + Supabase Cloud** — Dockerfile with standalone Next.js output
3. **Fully self-hosted** — Docker Compose with Next.js + any Postgres

### Files to Delete

- `src/app/[locale]/` — entire locale routing tree
- `src/middleware.ts` — replaced with Supabase session refresh
- `messages/` — all translation JSON files
- `src/i18n/` — config, request loader
- `src/lib/i18n.ts`, `src/lib/server-translations.ts`
- `src/hooks/use-translations.ts`
- `src/components/language-switcher.tsx`, `localized-link.tsx`, `set-lang.tsx`, `translations-provider.tsx`
- `src/lib/data/modules-translations.ts`
- All locale content files (`*.fr.*`, `*.es.*`, `*.ro.*`, `*.de.*`, `*/fr/`, `*/es/`, `*/ro/`, `*/de/`)
- `src/lib/auth/`, `src/lib/auth.ts` — replaced by Supabase Auth
- `src/app/api/auth/` — NextAuth route
- `drizzle-pg/` — replaced by `supabase/migrations/`
- `src/proxy.ts`
- Old `*-page-old.tsx` files

### Files to Keep

- `content/` directory (English files only)
- `src/lib/utils/risk-classification.ts` — domain logic
- `src/lib/utils/compliance-scoring.ts` — domain logic
- `src/lib/data/compliance-framework.ts` — framework definitions
- `src/lib/data/assessment-questions.ts` — question bank
- `src/lib/data/role-requirements.ts` — role definitions
- `src/lib/data/standard-controls.ts` — control definitions
- `src/lib/data/global-regulations.ts` — regulation comparison data
- `src/lib/validators/` — Zod schemas (adapted)
- `src/components/ui/` — shadcn/ui primitives
