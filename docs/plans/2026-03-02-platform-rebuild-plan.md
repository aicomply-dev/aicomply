# AI Comply Platform Rebuild — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Rebuild the AI Comply platform as a UX-oriented, SEO/GEO-driven site with Supabase backend, keeping all existing English content.

**Architecture:** Next.js 15 App Router with route groups — `(public)` for statically generated content pages, `(protected)` for auth-required platform features. Supabase for auth, Drizzle ORM over Supabase Postgres for data, shadcn/ui for components.

**Tech Stack:** Next.js 15, React 19, TypeScript, Tailwind CSS 4, shadcn/ui, Supabase (Auth + Postgres), Drizzle ORM, unified/remark/rehype for markdown, Fuse.js for search.

**Design doc:** `docs/plans/2026-03-02-platform-rebuild-design.md`

---

## Phase 1: Clean Slate + Project Bootstrap

### Task 1: Clean Up — Delete i18n and Locale Infrastructure

**Files:**
- Delete: `src/app/[locale]/` (entire directory tree)
- Delete: `messages/` (entire directory)
- Delete: `src/i18n/` (entire directory)
- Delete: `src/middleware.ts`
- Delete: `src/lib/i18n.ts`
- Delete: `src/lib/server-translations.ts`
- Delete: `src/hooks/use-translations.ts`
- Delete: `src/components/language-switcher.tsx`
- Delete: `src/components/localized-link.tsx`
- Delete: `src/components/set-lang.tsx`
- Delete: `src/components/translations-provider.tsx`
- Delete: `src/lib/data/modules-translations.ts`

**Step 1: Delete all i18n files and directories**

```bash
rm -rf src/app/\[locale\]/
rm -rf messages/
rm -rf src/i18n/
rm -f src/middleware.ts
rm -f src/lib/i18n.ts
rm -f src/lib/server-translations.ts
rm -f src/hooks/use-translations.ts
rm -f src/components/language-switcher.tsx
rm -f src/components/localized-link.tsx
rm -f src/components/set-lang.tsx
rm -f src/components/translations-provider.tsx
rm -f src/lib/data/modules-translations.ts
```

**Step 2: Verify deletion**

```bash
find src -name '*i18n*' -o -name '*translation*' -o -name '*locale*' -o -name 'language-switcher*' -o -name 'set-lang*' -o -name 'localized-link*'
```

Expected: no output.

**Step 3: Commit**

```bash
git add -A
git commit -m "chore: remove all i18n and locale infrastructure"
```

---

### Task 2: Clean Up — Delete Locale Content Files

**Files:**
- Delete: all `*.fr.*`, `*.es.*`, `*.ro.*`, `*.de.*` files in `content/`
- Delete: all `fr/`, `es/`, `ro/`, `de/` directories in `content/`

**Step 1: Delete locale content files and directories**

```bash
# Delete locale-specific files
find content -name '*.fr.*' -delete
find content -name '*.es.*' -delete
find content -name '*.ro.*' -delete
find content -name '*.de.*' -delete

# Delete locale directories
find content -type d \( -name 'fr' -o -name 'es' -o -name 'ro' -o -name 'de' \) -exec rm -rf {} + 2>/dev/null
```

**Step 2: Verify only English content remains**

```bash
find content -name '*.fr.*' -o -name '*.es.*' -o -name '*.ro.*' -o -name '*.de.*' | wc -l
```

Expected: `0`

**Step 3: Commit**

```bash
git add -A
git commit -m "chore: remove all non-English content files"
```

---

### Task 3: Clean Up — Delete Old Auth and Legacy Files

**Files:**
- Delete: `src/lib/auth/` (entire directory — NextAuth helpers)
- Delete: `src/lib/auth.ts` (NextAuth config)
- Delete: `src/app/api/auth/` (NextAuth route)
- Delete: `drizzle-pg/` (old migrations)
- Delete: `src/proxy.ts`
- Delete: all `*-page-old.tsx` and `*-old.tsx` files
- Delete: `src/lib/db/ensure-demo-org.ts`

**Step 1: Delete old auth, migrations, and legacy files**

```bash
rm -rf src/lib/auth/
rm -f src/lib/auth.ts
rm -rf src/app/api/auth/
rm -rf drizzle-pg/
rm -f src/proxy.ts
rm -f src/lib/db/ensure-demo-org.ts
find src -name '*-old.tsx' -delete
find src -name '*-old.ts' -delete
```

**Step 2: Commit**

```bash
git add -A
git commit -m "chore: remove NextAuth, old migrations, and legacy files"
```

---

### Task 4: Clean Up — Delete Remaining Old Source Files

Delete the old page tree and components that will be rewritten.

**Files:**
- Delete: all files in `src/app/` except `globals.css` and `api/status/` (keep health check)
- Delete: all files in `src/components/` except `ui/` directory
- Delete: `src/lib/actions/` (entire directory — will be rewritten for Supabase)
- Delete: `src/lib/content/loader.ts` (will be rewritten without DB tier)
- Delete: `src/lib/db/` (entire directory — will be rewritten for Supabase/Drizzle)
- Delete: `src/lib/get-session.ts`
- Delete: `src/lib/errors.ts`
- Delete: `src/lib/logger.ts`
- Delete: `src/__tests__/` (will be rewritten)

**Step 1: Delete old source, keeping what we need**

```bash
# Keep globals.css and api/status, delete everything else in app/
find src/app -maxdepth 1 -name '*.tsx' -o -name '*.ts' | xargs rm -f
find src/app -mindepth 1 -maxdepth 1 -type d ! -name 'api' | xargs rm -rf
rm -rf src/app/api/auth/

# Delete old components (keep ui/)
find src/components -maxdepth 1 -name '*.tsx' -delete
find src/components -mindepth 1 -maxdepth 1 -type d ! -name 'ui' | xargs rm -rf

# Delete old lib files
rm -rf src/lib/actions/
rm -f src/lib/content/loader.ts
rm -rf src/lib/db/
rm -f src/lib/get-session.ts
rm -f src/lib/errors.ts
rm -f src/lib/logger.ts
rm -f src/lib/server-translations.ts

# Delete old tests
rm -rf src/__tests__/
```

**Step 2: Verify remaining structure**

```bash
find src -name '*.ts' -o -name '*.tsx' -o -name '*.css' | sort
```

Expected: `src/app/globals.css`, `src/app/api/status/route.ts` (if exists), `src/components/ui/*.tsx`, `src/lib/utils/*`, `src/lib/data/*`, `src/lib/validators/*`, `src/lib/constants.ts`, `src/lib/utils.ts`.

**Step 3: Commit**

```bash
git add -A
git commit -m "chore: remove old pages, components, actions, and DB layer

Keeping: shadcn/ui, domain logic (risk classification, compliance scoring),
data definitions, validators, globals.css"
```

---

### Task 5: Update package.json — New Dependencies

**Files:**
- Modify: `package.json`

**Step 1: Remove old dependencies, add new ones**

Remove:
- `@auth/drizzle-adapter`, `next-auth` (replaced by Supabase Auth)
- `@neondatabase/serverless` (using Supabase Postgres)
- `better-sqlite3`, `@types/better-sqlite3` (no SQLite)
- `nanoid` (using crypto.randomUUID)

Add:
- `@supabase/supabase-js` (Supabase client)
- `@supabase/ssr` (Next.js SSR helpers for Supabase)
- `postgres` (Postgres driver for Drizzle — keep if already present)
- `unified`, `remark-parse`, `remark-gfm`, `remark-rehype` (markdown pipeline)
- `rehype-stringify`, `rehype-slug`, `rehype-autolink-headings` (rehype plugins)
- `rehype-pretty-code`, `shiki` (syntax highlighting)
- `next-mdx-remote` (MDX rendering in React)
- `fuse.js` (client-side search)
- `gray-matter` (frontmatter parsing if needed)

```bash
npm uninstall @auth/drizzle-adapter next-auth @neondatabase/serverless better-sqlite3 @types/better-sqlite3 nanoid

npm install @supabase/supabase-js @supabase/ssr unified remark-parse remark-gfm remark-rehype rehype-stringify rehype-slug rehype-autolink-headings rehype-pretty-code shiki next-mdx-remote fuse.js gray-matter
```

**Step 2: Update `.env.example`**

Create: `.env.example`

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Database (Supabase Postgres connection string)
DATABASE_URL=postgresql://postgres:[password]@db.[project-ref].supabase.co:5432/postgres

# App
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

**Step 3: Commit**

```bash
git add package.json package-lock.json .env.example
git commit -m "chore: update dependencies for Supabase stack"
```

---

### Task 6: Set Up Supabase Client Libraries

**Files:**
- Create: `src/lib/supabase/client.ts`
- Create: `src/lib/supabase/server.ts`
- Create: `src/lib/supabase/middleware.ts`

**Step 1: Write browser client**

```typescript
// src/lib/supabase/client.ts
import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}
```

**Step 2: Write server client**

```typescript
// src/lib/supabase/server.ts
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export async function createClient() {
  const cookieStore = await cookies()

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            )
          } catch {
            // Called from Server Component — ignore
          }
        },
      },
    }
  )
}

export async function getUser() {
  const supabase = await createClient()
  const { data: { user }, error } = await supabase.auth.getUser()
  if (error || !user) throw new Error('Not authenticated')
  return user
}
```

**Step 3: Write middleware helper**

```typescript
// src/lib/supabase/middleware.ts
import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) =>
            request.cookies.set(name, value)
          )
          supabaseResponse = NextResponse.next({ request })
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  await supabase.auth.getUser()

  return supabaseResponse
}
```

**Step 4: Commit**

```bash
git add src/lib/supabase/
git commit -m "feat: add Supabase client libraries (browser, server, middleware)"
```

---

### Task 7: Set Up Middleware (Session Refresh Only)

**Files:**
- Create: `src/middleware.ts`

**Step 1: Write minimal middleware**

```typescript
// src/middleware.ts
import { type NextRequest } from 'next/server'
import { updateSession } from '@/lib/supabase/middleware'

export async function middleware(request: NextRequest) {
  return await updateSession(request)
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
```

**Step 2: Commit**

```bash
git add src/middleware.ts
git commit -m "feat: add middleware for Supabase session refresh"
```

---

### Task 8: Set Up Drizzle Schema for Supabase

**Files:**
- Create: `src/lib/db/schema.ts`
- Create: `src/lib/db/index.ts`
- Modify: `drizzle.config.ts`

**Step 1: Write Drizzle schema**

```typescript
// src/lib/db/schema.ts
import { pgTable, uuid, text, varchar, timestamp, integer, jsonb } from 'drizzle-orm/pg-core'
import { relations } from 'drizzle-orm'

export const organization = pgTable('organization', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: varchar('name', { length: 255 }).notNull(),
  slug: varchar('slug', { length: 255 }).notNull().unique(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
})

export const profile = pgTable('profile', {
  id: uuid('id').primaryKey(), // FK to auth.users
  fullName: varchar('full_name', { length: 255 }),
  role: varchar('role', { length: 50 }),
  organizationId: uuid('organization_id').references(() => organization.id),
  createdAt: timestamp('created_at').defaultNow().notNull(),
})

export const aiSystem = pgTable('ai_system', {
  id: uuid('id').primaryKey().defaultRandom(),
  organizationId: uuid('organization_id').references(() => organization.id).notNull(),
  name: varchar('name', { length: 255 }).notNull(),
  description: text('description'),
  riskLevel: varchar('risk_level', { length: 50 }),
  operatorRole: varchar('operator_role', { length: 50 }),
  category: varchar('category', { length: 100 }),
  status: varchar('status', { length: 50 }).default('active'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
})

export const assessment = pgTable('assessment', {
  id: uuid('id').primaryKey().defaultRandom(),
  organizationId: uuid('organization_id').references(() => organization.id).notNull(),
  aiSystemId: uuid('ai_system_id').references(() => aiSystem.id),
  type: varchar('type', { length: 50 }).notNull(),
  status: varchar('status', { length: 50 }).default('in_progress'),
  score: integer('score'),
  completedAt: timestamp('completed_at'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
})

export const assessmentAnswer = pgTable('assessment_answer', {
  id: uuid('id').primaryKey().defaultRandom(),
  assessmentId: uuid('assessment_id').references(() => assessment.id).notNull(),
  questionId: varchar('question_id', { length: 100 }).notNull(),
  answer: jsonb('answer'),
  score: integer('score'),
})

export const complianceRequirement = pgTable('compliance_requirement', {
  id: uuid('id').primaryKey().defaultRandom(),
  aiSystemId: uuid('ai_system_id').references(() => aiSystem.id).notNull(),
  organizationId: uuid('organization_id').references(() => organization.id).notNull(),
  standardId: varchar('standard_id', { length: 50 }).notNull(),
  controlId: varchar('control_id', { length: 50 }),
  status: varchar('status', { length: 50 }).default('not_started'),
  evidence: text('evidence'),
  verifiedAt: timestamp('verified_at'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
})

export const gapAnalysisResult = pgTable('gap_analysis_result', {
  id: uuid('id').primaryKey().defaultRandom(),
  aiSystemId: uuid('ai_system_id').references(() => aiSystem.id).notNull(),
  organizationId: uuid('organization_id').references(() => organization.id).notNull(),
  requirementId: varchar('requirement_id', { length: 100 }),
  gapDescription: text('gap_description'),
  severity: varchar('severity', { length: 50 }),
  remediationPlan: text('remediation_plan'),
  status: varchar('status', { length: 50 }).default('identified'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
})

export const policy = pgTable('policy', {
  id: uuid('id').primaryKey().defaultRandom(),
  organizationId: uuid('organization_id').references(() => organization.id).notNull(),
  title: varchar('title', { length: 255 }).notNull(),
  content: text('content'),
  status: varchar('status', { length: 50 }).default('draft'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
})

// Relations
export const organizationRelations = relations(organization, ({ many }) => ({
  profiles: many(profile),
  aiSystems: many(aiSystem),
  assessments: many(assessment),
  policies: many(policy),
}))

export const profileRelations = relations(profile, ({ one }) => ({
  organization: one(organization, {
    fields: [profile.organizationId],
    references: [organization.id],
  }),
}))

export const aiSystemRelations = relations(aiSystem, ({ one, many }) => ({
  organization: one(organization, {
    fields: [aiSystem.organizationId],
    references: [organization.id],
  }),
  assessments: many(assessment),
  complianceRequirements: many(complianceRequirement),
  gapAnalysisResults: many(gapAnalysisResult),
}))

export const assessmentRelations = relations(assessment, ({ one, many }) => ({
  organization: one(organization, {
    fields: [assessment.organizationId],
    references: [organization.id],
  }),
  aiSystem: one(aiSystem, {
    fields: [assessment.aiSystemId],
    references: [aiSystem.id],
  }),
  answers: many(assessmentAnswer),
}))

export const assessmentAnswerRelations = relations(assessmentAnswer, ({ one }) => ({
  assessment: one(assessment, {
    fields: [assessmentAnswer.assessmentId],
    references: [assessment.id],
  }),
}))
```

**Step 2: Write Drizzle client**

```typescript
// src/lib/db/index.ts
import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as schema from './schema'

const connectionString = process.env.DATABASE_URL!

const client = postgres(connectionString, { prepare: false })
export const db = drizzle(client, { schema })
```

Note: `prepare: false` is required for Supabase connection pooling (Supavisor).

**Step 3: Update drizzle.config.ts**

```typescript
// drizzle.config.ts
import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  schema: './src/lib/db/schema.ts',
  out: './supabase/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
})
```

**Step 4: Create supabase/migrations directory**

```bash
mkdir -p supabase/migrations
```

**Step 5: Commit**

```bash
git add src/lib/db/ drizzle.config.ts supabase/
git commit -m "feat: add Drizzle schema and client for Supabase Postgres"
```

---

### Task 9: Create Supabase SQL Migration (RLS + Triggers)

**Files:**
- Create: `supabase/migrations/00001_initial_schema.sql`
- Create: `supabase/seed.sql`

**Step 1: Write initial SQL migration with RLS policies**

```sql
-- supabase/migrations/00001_initial_schema.sql

-- Enable RLS on all tables
-- Tables are created by Drizzle migration, this adds RLS + trigger

-- Profile trigger: auto-create on auth.users insert
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
DECLARE
  org_id uuid;
  org_slug text;
BEGIN
  -- Generate a slug from org name or email
  org_slug := lower(regexp_replace(
    coalesce(new.raw_user_meta_data->>'organization_name', split_part(new.email, '@', 1)),
    '[^a-z0-9]+', '-', 'g'
  ));

  -- Create organization
  INSERT INTO public.organization (name, slug)
  VALUES (
    coalesce(new.raw_user_meta_data->>'organization_name', split_part(new.email, '@', 1) || '''s Org'),
    org_slug || '-' || substr(gen_random_uuid()::text, 1, 8)
  )
  RETURNING id INTO org_id;

  -- Create profile
  INSERT INTO public.profile (id, full_name, organization_id)
  VALUES (
    new.id,
    coalesce(new.raw_user_meta_data->>'full_name', ''),
    org_id
  );

  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- RLS Policies

-- Profile: users can read/update their own profile
ALTER TABLE public.profile ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own profile"
  ON public.profile FOR SELECT
  USING (id = auth.uid());

CREATE POLICY "Users can update own profile"
  ON public.profile FOR UPDATE
  USING (id = auth.uid());

-- Organization: users can view their own org
ALTER TABLE public.organization ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own organization"
  ON public.organization FOR SELECT
  USING (id = (SELECT organization_id FROM public.profile WHERE id = auth.uid()));

-- AI System: org-scoped
ALTER TABLE public.ai_system ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Org members can view ai_systems"
  ON public.ai_system FOR SELECT
  USING (organization_id = (SELECT organization_id FROM public.profile WHERE id = auth.uid()));

CREATE POLICY "Org members can insert ai_systems"
  ON public.ai_system FOR INSERT
  WITH CHECK (organization_id = (SELECT organization_id FROM public.profile WHERE id = auth.uid()));

CREATE POLICY "Org members can update ai_systems"
  ON public.ai_system FOR UPDATE
  USING (organization_id = (SELECT organization_id FROM public.profile WHERE id = auth.uid()));

CREATE POLICY "Org members can delete ai_systems"
  ON public.ai_system FOR DELETE
  USING (organization_id = (SELECT organization_id FROM public.profile WHERE id = auth.uid()));

-- Assessment: org-scoped
ALTER TABLE public.assessment ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Org members can view assessments"
  ON public.assessment FOR SELECT
  USING (organization_id = (SELECT organization_id FROM public.profile WHERE id = auth.uid()));

CREATE POLICY "Org members can insert assessments"
  ON public.assessment FOR INSERT
  WITH CHECK (organization_id = (SELECT organization_id FROM public.profile WHERE id = auth.uid()));

CREATE POLICY "Org members can update assessments"
  ON public.assessment FOR UPDATE
  USING (organization_id = (SELECT organization_id FROM public.profile WHERE id = auth.uid()));

-- Assessment Answer: via assessment
ALTER TABLE public.assessment_answer ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Org members can manage assessment_answers"
  ON public.assessment_answer FOR ALL
  USING (assessment_id IN (
    SELECT id FROM public.assessment
    WHERE organization_id = (SELECT organization_id FROM public.profile WHERE id = auth.uid())
  ));

-- Compliance Requirement: org-scoped
ALTER TABLE public.compliance_requirement ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Org members can manage compliance_requirements"
  ON public.compliance_requirement FOR ALL
  USING (organization_id = (SELECT organization_id FROM public.profile WHERE id = auth.uid()));

-- Gap Analysis Result: org-scoped
ALTER TABLE public.gap_analysis_result ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Org members can manage gap_analysis_results"
  ON public.gap_analysis_result FOR ALL
  USING (organization_id = (SELECT organization_id FROM public.profile WHERE id = auth.uid()));

-- Policy: org-scoped
ALTER TABLE public.policy ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Org members can manage policies"
  ON public.policy FOR ALL
  USING (organization_id = (SELECT organization_id FROM public.profile WHERE id = auth.uid()));
```

**Step 2: Write seed data**

```sql
-- supabase/seed.sql
-- Demo data for development. Run after schema migration.
-- Note: In dev, create a user via Supabase Auth first, then this seed
-- adds demo AI systems to their org.

-- This is a placeholder. Actual seeding happens via the app after signup.
```

**Step 3: Commit**

```bash
git add supabase/
git commit -m "feat: add Supabase migration with RLS policies and auth trigger"
```

---

## Phase 2: Root Layout + Landing Page

### Task 10: Create Root Layout

**Files:**
- Create: `src/app/layout.tsx`
- Modify: `src/app/globals.css` (keep existing Tailwind setup)

**Step 1: Write root layout**

```typescript
// src/app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'AI Comply — EU AI Act Compliance Platform',
    template: '%s | AI Comply',
  },
  description: 'Open-source platform for understanding, assessing, and implementing EU AI Act compliance. Free tools, standards, and guides for organizations.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://aicomply.dev'),
  openGraph: {
    type: 'website',
    siteName: 'AI Comply',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
```

**Step 2: Verify globals.css has Tailwind directives**

Ensure `src/app/globals.css` contains the Tailwind imports. Keep existing file, just verify.

**Step 3: Commit**

```bash
git add src/app/layout.tsx
git commit -m "feat: add root layout with SEO metadata"
```

---

### Task 11: Create Site Header Component

**Files:**
- Create: `src/components/layout/site-header.tsx`
- Create: `src/components/layout/mobile-nav.tsx`

**Step 1: Write site header**

Navigation with three pillars (Understand, Assess, Implement) plus Resources, login/register CTAs. Use shadcn/ui `NavigationMenu` if available, otherwise a clean custom nav.

Key structure:
- Logo (left)
- Nav links: Understand, Assess, Implement, Resources (center)
- Auth buttons: Log In, Get Started (right)
- Mobile: hamburger → sheet with nav links

This is a server component with a client-side mobile nav sheet.

**Step 2: Write mobile nav**

Client component using shadcn/ui `Sheet` for mobile navigation.

**Step 3: Commit**

```bash
git add src/components/layout/
git commit -m "feat: add site header with navigation and mobile menu"
```

---

### Task 12: Create Site Footer Component

**Files:**
- Create: `src/components/layout/site-footer.tsx`

**Step 1: Write site footer**

Four-column footer:
- Column 1: AI Comply logo + short description
- Column 2: Understand links (Modules, Regulation, Glossary, FAQ)
- Column 3: Assess & Implement links (Classification, Standards, Guides)
- Column 4: Project links (GitHub, Contributing, Changelog, Docs)
- Bottom row: MIT License, Privacy, Terms

**Step 2: Commit**

```bash
git add src/components/layout/site-footer.tsx
git commit -m "feat: add site footer"
```

---

### Task 13: Create Landing Page

**Files:**
- Create: `src/app/page.tsx`

**Step 1: Write landing page**

Sections:
1. **Hero** — headline ("EU AI Act Compliance Made Simple"), subhead, two CTAs ("Start Learning" → /understand, "Assess Your Systems" → /assess/classification)
2. **Three pillars** — Understand, Assess, Implement cards with icons and descriptions
3. **Key numbers** — "5 Learning Modules", "14 Standards", "237 Implementation Guides", "Free & Open Source"
4. **How it works** — 3-step funnel visualization
5. **Open source CTA** — GitHub link, self-hosting mention

Server component, no client JS. Include JSON-LD for `WebApplication` schema.

**Step 2: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: add landing page with hero, pillars, and CTA sections"
```

---

### Task 14: Verify Build

**Step 1: Run build**

```bash
npm run build
```

Expected: successful build with landing page statically generated.

**Step 2: Run dev server and check**

```bash
npm run dev
```

Visit `http://localhost:3000` — should see landing page with header and footer.

**Step 3: Fix any build errors, then commit if fixes needed**

---

## Phase 3: Content Infrastructure

### Task 15: Create Content Loader (File-Based, No DB)

**Files:**
- Create: `src/lib/content/loader.ts`

**Step 1: Write simplified content loader**

The new loader reads from the filesystem only — no database tier, no org-specific overrides. Functions:

```typescript
// Functions to implement:
getModuleIndex(): Promise<ModuleMetadata[]>
getModule(slug: string): Promise<ModuleMetadata | null>
getChapter(moduleSlug: string, chapterIndex: number): Promise<{ metadata: ChapterMetadata, content: string } | null>
getChapterList(moduleSlug: string): Promise<ChapterMetadata[]>

getStandardIndex(): Promise<StandardMetadata[]>
getStandard(id: string): Promise<{ metadata: StandardMetadata, controls: Control[], guidance: string } | null>

getGuideIndex(category?: string): Promise<GuideMetadata[]>
getGuide(category: string, id: string): Promise<{ metadata: GuideMetadata, content: string } | null>

getRegulationIndex(): Promise<RegulationSection[]>
getRegulationSection(slug: string): Promise<{ metadata: RegulationSection, content: string } | null>

getGlossaryIndex(): Promise<GlossaryCategory[]>
getGlossaryCategory(id: string): Promise<GlossaryTerm[]>

getFaqIndex(): Promise<FaqCategory[]>
getFaqs(): Promise<Faq[]>

getAssessmentIndex(): Promise<AssessmentSection[]>
getAssessmentQuestions(sectionId: string): Promise<AssessmentQuestion[]>
```

All functions read JSON/MD from `content/` directory using `fs.readFileSync` (safe at build time for SSG).

**Step 2: Commit**

```bash
git add src/lib/content/
git commit -m "feat: add file-based content loader"
```

---

### Task 16: Create Markdown Renderer Component

**Files:**
- Create: `src/components/content/markdown-renderer.tsx`

**Step 1: Install and configure markdown pipeline**

Uses `next-mdx-remote/rsc` for server-side rendering of markdown to React. Plugins:
- `remark-gfm` (tables, strikethrough)
- `rehype-slug` (heading anchors)
- `rehype-autolink-headings`
- `rehype-pretty-code` with Shiki (syntax highlighting)

Custom components for callout blocks (regulation, tip, warning).

**Step 2: Commit**

```bash
git add src/components/content/
git commit -m "feat: add markdown renderer with syntax highlighting and callouts"
```

---

### Task 17: Create Breadcrumbs Component

**Files:**
- Create: `src/components/layout/breadcrumbs.tsx`

**Step 1: Write breadcrumbs**

Server component that takes a `items: { label: string, href?: string }[]` prop. Uses shadcn/ui styling. Last item is not a link (current page).

**Step 2: Commit**

```bash
git add src/components/layout/breadcrumbs.tsx
git commit -m "feat: add breadcrumbs component"
```

---

### Task 18: Create Sidebar Navigation Component

**Files:**
- Create: `src/components/layout/sidebar-nav.tsx`

**Step 1: Write sidebar nav**

Client component (needs active state). Takes `items: { label: string, href: string }[]` prop. Highlights current page using `usePathname()`. Collapses to sheet on mobile.

**Step 2: Commit**

```bash
git add src/components/layout/sidebar-nav.tsx
git commit -m "feat: add sidebar navigation component"
```

---

### Task 19: Create Table of Contents Component

**Files:**
- Create: `src/components/content/table-of-contents.tsx`

**Step 1: Write TOC**

Client component that extracts headings from page content (passed as prop or parsed from DOM with IntersectionObserver). Shows heading hierarchy on the right side. Highlights current section on scroll.

**Step 2: Commit**

```bash
git add src/components/content/table-of-contents.tsx
git commit -m "feat: add table of contents component with scroll tracking"
```

---

## Phase 4: Public Content Pages — Understand

### Task 20: Understand Hub Page

**Files:**
- Create: `src/app/(public)/understand/page.tsx`
- Create: `src/components/content/module-card.tsx`

**Step 1: Write understand hub**

Lists all 5 learning modules as cards. Each card shows: title, description, difficulty badge, duration, chapter count. Cards link to `/understand/modules/[slug]`.

Also shows links to: Regulation Browser, Glossary, FAQ.

Include JSON-LD `ItemList` schema.

**Step 2: Commit**

```bash
git add src/app/\(public\)/understand/ src/components/content/module-card.tsx
git commit -m "feat: add understand hub page with module cards"
```

---

### Task 21: Module Detail + Chapter Pages

**Files:**
- Create: `src/app/(public)/understand/modules/page.tsx` (module listing, redirects to /understand)
- Create: `src/app/(public)/understand/modules/[slug]/page.tsx`
- Create: `src/app/(public)/understand/modules/[slug]/[chapter]/page.tsx`
- Create: `src/components/content/chapter-nav.tsx`

**Step 1: Write module detail page**

Shows module metadata + list of chapters with sidebar. `generateStaticParams()` from module index.

**Step 2: Write chapter page**

Renders chapter markdown with sidebar (chapter list) and previous/next navigation. For quiz chapters, renders interactive quiz client component.

Include JSON-LD `Course` + `LearningResource` schema.

`generateStaticParams()` generates all module+chapter combinations.

**Step 3: Write chapter nav (prev/next)**

**Step 4: Commit**

```bash
git add src/app/\(public\)/understand/modules/ src/components/content/chapter-nav.tsx
git commit -m "feat: add module detail and chapter pages with static generation"
```

---

### Task 22: Regulation Browser Pages

**Files:**
- Create: `src/app/(public)/understand/regulation/page.tsx`
- Create: `src/app/(public)/understand/regulation/[slug]/page.tsx`

**Step 1: Write regulation index page**

Lists all regulation sections (chapters + annexes) from `content/regulation/en/`. Table of contents style.

**Step 2: Write regulation detail page**

Renders regulation section markdown. Sidebar with all sections. `generateStaticParams()` from regulation file listing.

Include JSON-LD `Legislation` schema.

**Step 3: Commit**

```bash
git add src/app/\(public\)/understand/regulation/
git commit -m "feat: add regulation browser with static generation"
```

---

### Task 23: Glossary Page

**Files:**
- Create: `src/app/(public)/understand/glossary/page.tsx`

**Step 1: Write glossary page**

Server component. Loads all glossary categories and terms. Renders as categorized list with anchored terms. Client-side search/filter at the top.

Include JSON-LD `DefinedTermSet` schema.

**Step 2: Commit**

```bash
git add src/app/\(public\)/understand/glossary/
git commit -m "feat: add glossary page with search and structured data"
```

---

### Task 24: FAQ Page

**Files:**
- Create: `src/app/(public)/understand/faq/page.tsx`

**Step 1: Write FAQ page**

Server component. Loads FAQ data. Renders as accordion (shadcn/ui `Accordion`). Grouped by category.

Include JSON-LD `FAQPage` schema — this is critical for search result rich snippets.

**Step 2: Commit**

```bash
git add src/app/\(public\)/understand/faq/
git commit -m "feat: add FAQ page with accordion and FAQPage structured data"
```

---

### Task 25: Verify Understand Section Build

**Step 1: Run build**

```bash
npm run build
```

Verify all understand pages are statically generated. Check build output for page count.

**Step 2: Spot-check pages in dev**

```bash
npm run dev
```

Visit `/understand`, `/understand/modules/ai-act-fundamentals`, `/understand/modules/ai-act-fundamentals/1`, `/understand/regulation`, `/understand/glossary`, `/understand/faq`.

**Step 3: Commit any fixes**

---

## Phase 5: Public Content Pages — Implement

### Task 26: Implement Hub Page

**Files:**
- Create: `src/app/(public)/implement/page.tsx`

**Step 1: Write implement hub**

Overview page with three sections:
1. Standards (14 cards) → `/implement/standards/`
2. Guides (by category) → `/implement/guides/`
3. CTA to authenticated tools (policies, controls)

**Step 2: Commit**

```bash
git add src/app/\(public\)/implement/
git commit -m "feat: add implement hub page"
```

---

### Task 27: Standards Listing + Detail Pages

**Files:**
- Create: `src/app/(public)/implement/standards/page.tsx`
- Create: `src/app/(public)/implement/standards/[id]/page.tsx`
- Create: `src/components/content/standard-card.tsx`

**Step 1: Write standards listing**

Grid of 14 standard cards. Each shows: ID, title, EU AI Act reference, control count, status badge.

**Step 2: Write standard detail page**

Shows: metadata card, controls table (expandable rows), guidance markdown. Sidebar with standard list.

`generateStaticParams()` from standards index.

Include JSON-LD `TechArticle` schema.

**Step 3: Commit**

```bash
git add src/app/\(public\)/implement/standards/ src/components/content/standard-card.tsx
git commit -m "feat: add standards listing and detail pages with static generation"
```

---

### Task 28: Guides Listing + Detail Pages

**Files:**
- Create: `src/app/(public)/implement/guides/page.tsx`
- Create: `src/app/(public)/implement/guides/[category]/page.tsx`
- Create: `src/app/(public)/implement/guides/[category]/[id]/page.tsx`
- Create: `src/components/content/guide-card.tsx`

**Step 1: Write guides listing (top-level)**

Shows 5 categories: Procedures (65), Checklists (32), Forms (36), Records (88), Assessment Tools (16). Cards with counts.

**Step 2: Write category listing**

Lists all guides in a category as cards.

**Step 3: Write guide detail page**

Renders guide markdown with TOC sidebar. `generateStaticParams()` for all category+guide combinations.

Include JSON-LD `HowTo` schema for procedures.

**Step 4: Commit**

```bash
git add src/app/\(public\)/implement/guides/ src/components/content/guide-card.tsx
git commit -m "feat: add guides listing and detail pages with static generation"
```

---

### Task 29: Verify Implement Section Build

**Step 1: Run build, check page counts**

```bash
npm run build
```

**Step 2: Spot-check pages in dev**

---

## Phase 6: Public Content Pages — Assess & Resources

### Task 30: Assess Hub Page

**Files:**
- Create: `src/app/(public)/assess/page.tsx`

**Step 1: Write assess hub**

Overview: explains the assessment process. Links to:
- Risk Classification Wizard (public) → `/assess/classification`
- AI System Inventory (requires login) → `/assess/inventory`
- Assessments (requires login) → `/assess/assessments`
- Requirements (requires login) → `/assess/requirements`

Protected features show a lock icon with "Free account required" note.

**Step 2: Commit**

```bash
git add src/app/\(public\)/assess/
git commit -m "feat: add assess hub page"
```

---

### Task 31: Risk Classification Wizard (Public, Client-Side)

**Files:**
- Create: `src/app/(public)/assess/classification/page.tsx`
- Create: `src/components/tools/risk-classification-wizard.tsx`

**Step 1: Write wizard page wrapper**

Server component with metadata + JSON-LD `WebApplication` schema. Renders the client wizard component.

**Step 2: Port risk classification wizard**

Adapt existing `src/lib/utils/risk-classification.ts` logic. Multi-step client component:
- Step 1: What does your AI system do?
- Step 2: Where is it used? (sector/domain)
- Step 3: Classification questions
- Result: Risk level with explanation and next steps

No database — results displayed client-side. Optional CTA: "Save this assessment" → login.

**Step 3: Commit**

```bash
git add src/app/\(public\)/assess/classification/ src/components/tools/
git commit -m "feat: add public risk classification wizard"
```

---

### Task 32: Resources — Global Regulations Page

**Files:**
- Create: `src/app/(public)/resources/page.tsx`
- Create: `src/app/(public)/resources/global-regulations/page.tsx`

**Step 1: Write resources hub**

Links to global regulations comparison and any other resource pages.

**Step 2: Write global regulations page**

Port existing `src/lib/data/global-regulations.ts` data. Comparison table of international AI regulation approaches.

**Step 3: Commit**

```bash
git add src/app/\(public\)/resources/
git commit -m "feat: add resources hub and global regulations comparison page"
```

---

### Task 33: Static Pages (Privacy, Terms, Changelog, etc.)

**Files:**
- Create: `src/app/(public)/privacy/page.tsx`
- Create: `src/app/(public)/terms/page.tsx`
- Create: `src/app/(public)/changelog/page.tsx`
- Create: `src/app/(public)/contributing/page.tsx`
- Create: `src/app/(public)/code-of-conduct/page.tsx`
- Create: `src/app/(public)/docs/page.tsx`

**Step 1: Write static pages**

Simple server components with markdown content or hardcoded text. These can be minimal for now.

**Step 2: Commit**

```bash
git add src/app/\(public\)/privacy/ src/app/\(public\)/terms/ src/app/\(public\)/changelog/ src/app/\(public\)/contributing/ src/app/\(public\)/code-of-conduct/ src/app/\(public\)/docs/
git commit -m "feat: add static pages (privacy, terms, changelog, contributing, docs)"
```

---

## Phase 7: Authentication

### Task 34: Auth Pages — Login and Register

**Files:**
- Create: `src/app/auth/login/page.tsx`
- Create: `src/app/auth/register/page.tsx`
- Create: `src/components/auth/login-form.tsx`
- Create: `src/components/auth/register-form.tsx`

**Step 1: Write login page + form**

Login form: email + password. Uses `supabase.auth.signInWithPassword()`. Redirect to `/dashboard` on success. Link to register.

**Step 2: Write register page + form**

Register form: full name, organization name, email, password. Uses `supabase.auth.signUp()` with metadata. Redirect to `/dashboard` on success. Link to login.

**Step 3: Commit**

```bash
git add src/app/auth/ src/components/auth/
git commit -m "feat: add login and register pages with Supabase Auth"
```

---

### Task 35: User Menu Component

**Files:**
- Create: `src/components/auth/user-menu.tsx`

**Step 1: Write user menu**

Client component. If authenticated: shows avatar dropdown with profile info and logout. If not authenticated: shows "Log In" and "Get Started" buttons.

Uses `createClient()` (browser) to get session and handle logout.

**Step 2: Integrate into site header**

Update `site-header.tsx` to include `UserMenu` in the right section.

**Step 3: Commit**

```bash
git add src/components/auth/user-menu.tsx src/components/layout/site-header.tsx
git commit -m "feat: add user menu with auth state"
```

---

### Task 36: Protected Layout

**Files:**
- Create: `src/app/(protected)/layout.tsx`

**Step 1: Write protected layout**

```typescript
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/auth/login')
  }

  return <>{children}</>
}
```

**Step 2: Commit**

```bash
git add src/app/\(protected\)/
git commit -m "feat: add protected layout with auth guard"
```

---

## Phase 8: Protected Platform Features

### Task 37: Server Actions — AI Systems CRUD

**Files:**
- Create: `src/lib/actions/ai-systems.ts`

**Step 1: Write server actions**

```typescript
'use server'

// Functions:
// getAISystems() — list all systems for user's org
// getAISystem(id) — get single system
// createAISystem(data) — create new system
// updateAISystem(id, data) — update system
// deleteAISystem(id) — delete system
```

Each action: get user via `getUser()`, get profile with org, query with Drizzle filtering by `organizationId`.

**Step 2: Commit**

```bash
git add src/lib/actions/
git commit -m "feat: add AI systems server actions"
```

---

### Task 38: Server Actions — Assessments + Policies

**Files:**
- Create: `src/lib/actions/assessments.ts`
- Create: `src/lib/actions/policies.ts`
- Create: `src/lib/actions/compliance.ts`

**Step 1: Write assessment actions**

CRUD for assessments and assessment answers. Includes score calculation using existing `compliance-scoring.ts`.

**Step 2: Write policy actions**

CRUD for policies.

**Step 3: Write compliance actions**

CRUD for compliance requirements and gap analysis results.

**Step 4: Commit**

```bash
git add src/lib/actions/
git commit -m "feat: add assessment, policy, and compliance server actions"
```

---

### Task 39: Dashboard Page

**Files:**
- Create: `src/app/(protected)/dashboard/page.tsx`
- Create: `src/components/dashboard/overview-stats.tsx`

**Step 1: Write dashboard**

Shows:
- Welcome message with org name
- Stats: total AI systems, assessments completed, compliance score average
- Recent activity / quick actions
- CTAs to inventory, assessments, standards

**Step 2: Commit**

```bash
git add src/app/\(protected\)/dashboard/ src/components/dashboard/
git commit -m "feat: add dashboard page with overview stats"
```

---

### Task 40: AI System Inventory Pages

**Files:**
- Create: `src/app/(protected)/assess/inventory/page.tsx`
- Create: `src/app/(protected)/assess/inventory/[id]/page.tsx`
- Create: `src/components/dashboard/system-list.tsx`

**Step 1: Write inventory listing**

Table of AI systems with columns: name, risk level, status, last updated. "Add System" button opens dialog.

**Step 2: Write system detail page**

Tabbed view: Overview, Assessments, Compliance Requirements, Gap Analysis.

**Step 3: Commit**

```bash
git add src/app/\(protected\)/assess/inventory/ src/components/dashboard/system-list.tsx
git commit -m "feat: add AI system inventory listing and detail pages"
```

---

### Task 41: Assessment Pages

**Files:**
- Create: `src/app/(protected)/assess/assessments/page.tsx`
- Create: `src/app/(protected)/assess/assessments/[id]/page.tsx`
- Create: `src/components/tools/self-assessment-form.tsx`

**Step 1: Write assessments listing**

Lists saved assessments with status, score, date.

**Step 2: Write assessment detail/form**

Multi-step assessment form using questions from `content/assessments/`. Saves answers via server actions. Shows results and score.

**Step 3: Commit**

```bash
git add src/app/\(protected\)/assess/assessments/ src/components/tools/self-assessment-form.tsx
git commit -m "feat: add assessment listing, detail, and form pages"
```

---

### Task 42: Requirements + Policies + Controls Pages

**Files:**
- Create: `src/app/(protected)/assess/requirements/page.tsx`
- Create: `src/app/(protected)/assess/requirements/[systemId]/page.tsx`
- Create: `src/app/(protected)/implement/policies/page.tsx`
- Create: `src/app/(protected)/implement/policies/[id]/page.tsx`
- Create: `src/app/(protected)/implement/controls/page.tsx`
- Create: `src/app/(protected)/implement/controls/[id]/page.tsx`

**Step 1: Write requirements pages**

Requirements listing per system. Detail page shows each requirement's status, evidence, verification.

**Step 2: Write policies pages**

Policy listing + editor. Create from template or blank.

**Step 3: Write controls pages**

Control tracking — list all controls from standards, mark implementation status per system.

**Step 4: Commit**

```bash
git add src/app/\(protected\)/assess/requirements/ src/app/\(protected\)/implement/policies/ src/app/\(protected\)/implement/controls/
git commit -m "feat: add requirements, policies, and controls pages"
```

---

## Phase 9: SEO, Search & Polish

### Task 43: JSON-LD Structured Data Helper

**Files:**
- Create: `src/lib/structured-data.ts`

**Step 1: Write structured data helpers**

Functions that generate JSON-LD objects for each page type:

```typescript
export function courseJsonLd(module: ModuleMetadata): object
export function articleJsonLd(standard: StandardMetadata): object
export function howToJsonLd(guide: GuideMetadata): object
export function legislationJsonLd(section: RegulationSection): object
export function faqPageJsonLd(faqs: Faq[]): object
export function glossaryJsonLd(terms: GlossaryTerm[]): object
export function webAppJsonLd(): object
```

Each returns a `<script type="application/ld+json">` ready object.

**Step 2: Add to content pages**

Go back and add JSON-LD to each public page that doesn't have it yet.

**Step 3: Commit**

```bash
git add src/lib/structured-data.ts
git commit -m "feat: add JSON-LD structured data for all content page types"
```

---

### Task 44: Sitemap + Robots.txt

**Files:**
- Create: `src/app/sitemap.ts`
- Create: `src/app/robots.ts`

**Step 1: Write dynamic sitemap**

```typescript
// src/app/sitemap.ts
import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Generate entries for all public content pages:
  // - Landing page
  // - All module pages + chapters
  // - All regulation sections
  // - Glossary, FAQ
  // - All standards
  // - All guides
  // - Resources, static pages
}
```

**Step 2: Write robots.txt**

```typescript
// src/app/robots.ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${process.env.NEXT_PUBLIC_SITE_URL}/sitemap.xml`,
  }
}
```

**Step 3: Commit**

```bash
git add src/app/sitemap.ts src/app/robots.ts
git commit -m "feat: add dynamic sitemap and robots.txt"
```

---

### Task 45: Client-Side Content Search

**Files:**
- Create: `scripts/build-search-index.ts`
- Create: `src/components/content/search-bar.tsx`

**Step 1: Write search index builder**

Script that runs at build time. Reads all content pages, extracts: title, description, URL, first 200 words. Outputs `public/search-index.json`.

Add to `package.json` scripts: `"prebuild": "tsx scripts/build-search-index.ts"`

**Step 2: Write search bar component**

Client component. Loads search index on demand (when user focuses search). Uses Fuse.js for fuzzy matching. Shows results in a dropdown/dialog. Links to matching pages.

**Step 3: Integrate into site header**

Add search trigger (icon) to header.

**Step 4: Commit**

```bash
git add scripts/build-search-index.ts src/components/content/search-bar.tsx src/components/layout/site-header.tsx
git commit -m "feat: add client-side content search with Fuse.js"
```

---

### Task 46: Update next.config.ts

**Files:**
- Modify: `next.config.ts`

**Step 1: Clean up config**

Remove old auth/i18n related config. Keep:
- Security headers (HSTS, X-Frame-Options, etc.)
- Standalone output for Docker
- `serverExternalPackages` for postgres

Add:
- `images.remotePatterns` if needed
- Verify `output: 'standalone'` is set

**Step 2: Commit**

```bash
git add next.config.ts
git commit -m "chore: clean up next.config.ts for new architecture"
```

---

## Phase 10: Final Verification

### Task 47: Full Build + Smoke Test

**Step 1: Clean install and build**

```bash
rm -rf .next node_modules
npm install
npm run build
```

Expected: successful build. Check output for:
- All public pages listed as "static"
- Protected pages listed as "dynamic"
- No build warnings/errors

**Step 2: Start production server**

```bash
npm start
```

**Step 3: Smoke test all public pages**

Visit and verify:
- `/` — landing page renders
- `/understand` — hub page with module cards
- `/understand/modules/ai-act-fundamentals` — module detail
- `/understand/modules/ai-act-fundamentals/1` — chapter content renders
- `/understand/regulation` — regulation index
- `/understand/glossary` — terms render
- `/understand/faq` — accordion works
- `/implement` — hub page
- `/implement/standards` — 14 standards listed
- `/implement/standards/std-ai-001` — standard detail with controls
- `/implement/guides` — categories listed
- `/assess` — hub page
- `/assess/classification` — wizard works client-side
- `/resources/global-regulations` — comparison table

**Step 4: Smoke test auth flow (requires Supabase project)**

- `/auth/register` — form renders
- `/auth/login` — form renders
- Protected pages redirect to login when not authenticated

**Step 5: Commit any final fixes**

---

### Task 48: Update .gitignore and Clean Up

**Files:**
- Modify: `.gitignore`

**Step 1: Update .gitignore**

Ensure it includes:
```
node_modules/
.next/
.env
.env.local
.env.production.local
```

Remove `docs` from `.gitignore` if it was excluded.

**Step 2: Remove stale files**

Delete any remaining stale files from the old codebase:
- `.archive/`
- `bun.lock` (if using npm)
- Old scripts that reference deleted code
- `MIGRATION_SUMMARY.md`
- `SAFE_FIREWALL_CONFIG.md.backup`

**Step 3: Final commit**

```bash
git add -A
git commit -m "chore: clean up gitignore and remove stale files"
```

---

## Summary

| Phase | Tasks | What it delivers |
|-------|-------|-----------------|
| 1: Clean Slate | 1-9 | Cleaned repo, Supabase setup, Drizzle schema, middleware |
| 2: Root Layout | 10-14 | Root layout, header, footer, landing page — app boots |
| 3: Content Infra | 15-19 | Content loader, markdown renderer, nav components |
| 4: Understand | 20-25 | Modules, regulation, glossary, FAQ — all static |
| 5: Implement | 26-29 | Standards, guides — all static |
| 6: Assess & Resources | 30-33 | Risk wizard, global regulations, static pages |
| 7: Auth | 34-36 | Login, register, user menu, protected layout |
| 8: Protected Features | 37-42 | Dashboard, inventory, assessments, policies, controls |
| 9: SEO & Search | 43-46 | JSON-LD, sitemap, search, config cleanup |
| 10: Verification | 47-48 | Full build, smoke test, cleanup |

**Total: 48 tasks across 10 phases.**

Phases 1-6 deliver a fully functional public content site with SEO.
Phases 7-8 add the authenticated platform features.
Phases 9-10 polish and verify.
