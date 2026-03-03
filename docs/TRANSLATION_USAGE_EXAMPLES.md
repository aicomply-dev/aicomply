# Translation Usage Examples

This guide shows how to use the multilingual module system in your application.

## Quick Start

```typescript
import { DEFAULT_MODULES } from '@/lib/data/modules-data'
import {
  getLocalizedModule,
  getLocalizedChapters,
  type Locale
} from '@/lib/data/modules-helpers'

// Get a module in French
const module = DEFAULT_MODULES[0]  // AI Act Fundamentals
const frModule = getLocalizedModule(module, 'fr')

console.log(frModule.title)
// → "Fondamentaux de la loi sur l'IA"

console.log(frModule.description)
// → "Apprenez les bases de la loi européenne sur l'IA..."
```

## Server Components (Next.js App Router)

```typescript
// app/[locale]/learn/modules/page.tsx
import { DEFAULT_MODULES } from '@/lib/data/modules-data'
import { getLocalizedModule, type Locale } from '@/lib/data/modules-helpers'

interface PageProps {
  params: {
    locale: Locale
  }
}

export default function ModulesPage({ params }: PageProps) {
  const { locale } = params

  return (
    <div>
      <h1>Training Modules</h1>
      {DEFAULT_MODULES.map(module => {
        const localized = getLocalizedModule(module, locale)

        return (
          <div key={module.slug}>
            <h2>{localized.title}</h2>
            <p>{localized.description}</p>
            <span>{localized.category}</span>
            <span>{localized.difficulty}</span>
            <span>{localized.duration} min</span>
          </div>
        )
      })}
    </div>
  )
}
```

## Client Components

```typescript
'use client'

import { useParams } from 'next/navigation'
import { DEFAULT_MODULES } from '@/lib/data/modules-data'
import {
  getLocalizedModule,
  getLocalizedChapters,
  type Locale
} from '@/lib/data/modules-helpers'

export function ModuleDetail({ moduleSlug }: { moduleSlug: string }) {
  const params = useParams()
  const locale = (params?.locale || 'en') as Locale

  const module = DEFAULT_MODULES.find(m => m.slug === moduleSlug)
  if (!module) return <div>Module not found</div>

  const localizedModule = getLocalizedModule(module, locale)
  const chapters = getLocalizedChapters(module.chapters, locale)

  return (
    <div>
      <h1>{localizedModule.title}</h1>
      <p>{localizedModule.description}</p>

      <h2>Chapters</h2>
      <ul>
        {chapters.map(chapter => (
          <li key={chapter.id}>
            <h3>{chapter.title}</h3>
            <p>{chapter.description}</p>
            <span>{chapter.type}</span>
            <span>{chapter.duration} min</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
```

## API Routes

```typescript
// app/api/modules/[slug]/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { DEFAULT_MODULES } from '@/lib/data/modules-data'
import { getLocalizedModule, type Locale } from '@/lib/data/modules-helpers'

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const locale = request.headers.get('Accept-Language')?.split(',')[0]?.split('-')[0] as Locale || 'en'

  const module = DEFAULT_MODULES.find(m => m.slug === params.slug)
  if (!module) {
    return NextResponse.json({ error: 'Module not found' }, { status: 404 })
  }

  const localized = getLocalizedModule(module, locale)

  return NextResponse.json({
    ...localized,
    // Don't parse chapters here unless needed
    chaptersCount: JSON.parse(module.chapters).length
  })
}
```

## Working with Individual Chapters

```typescript
import { DEFAULT_MODULES } from '@/lib/data/modules-data'
import { getLocalizedChapters, type Locale } from '@/lib/data/modules-helpers'

function ChapterViewer({
  moduleSlug,
  chapterId,
  locale
}: {
  moduleSlug: string
  chapterId: number
  locale: Locale
}) {
  const module = DEFAULT_MODULES.find(m => m.slug === moduleSlug)
  if (!module) return null

  const chapters = getLocalizedChapters(module.chapters, locale)
  const chapter = chapters.find(c => c.id === chapterId)

  if (!chapter) return <div>Chapter not found</div>

  return (
    <div>
      <h1>{chapter.title}</h1>
      <p>{chapter.description}</p>
      <div>{chapter.type}</div>
      <div>{chapter.duration} minutes</div>

      {/* Content is still in English - not yet translated */}
      {chapter.content && (
        <div dangerouslySetInnerHTML={{ __html: chapter.content }} />
      )}

      {/* Quiz questions are still in English */}
      {chapter.questions && (
        <div>
          {chapter.questions.map(q => (
            <div key={q.id}>
              <p>{q.question}</p>
              <ul>
                {q.options.map((opt, i) => (
                  <li key={i}>{opt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
```

## Filtering and Searching

```typescript
import { DEFAULT_MODULES } from '@/lib/data/modules-data'
import { getLocalizedModule, type Locale } from '@/lib/data/modules-helpers'

function searchModules(query: string, locale: Locale) {
  return DEFAULT_MODULES
    .map(module => ({
      module,
      localized: getLocalizedModule(module, locale)
    }))
    .filter(({ localized }) =>
      localized.title.toLowerCase().includes(query.toLowerCase()) ||
      localized.description.toLowerCase().includes(query.toLowerCase())
    )
}

// Usage
const results = searchModules('conformité', 'fr')
// Returns modules matching "conformité" in French titles/descriptions
```

## Generating Metadata for SEO

```typescript
// app/[locale]/learn/modules/[slug]/page.tsx
import { Metadata } from 'next'
import { DEFAULT_MODULES } from '@/lib/data/modules-data'
import { getLocalizedModule, type Locale } from '@/lib/data/modules-helpers'

export async function generateMetadata({
  params
}: {
  params: { locale: Locale; slug: string }
}): Promise<Metadata> {
  const module = DEFAULT_MODULES.find(m => m.slug === params.slug)
  if (!module) return {}

  const localized = getLocalizedModule(module, params.locale)

  return {
    title: localized.title,
    description: localized.description,
    openGraph: {
      title: localized.title,
      description: localized.description,
      locale: params.locale,
    }
  }
}
```

## Type Safety Examples

```typescript
import { LocalizedString } from '@/lib/data/modules-translations'
import { getLocalizedString } from '@/lib/data/modules-helpers'

// This function works with both string and LocalizedString
function displayTitle(title: string | LocalizedString, locale: Locale) {
  // Helper handles both cases automatically
  return getLocalizedString(title, locale)
}

// TypeScript knows the return type is always string
const title: string = displayTitle(module.title, 'es')
```

## Fallback Behavior

The helpers automatically fall back to English if a translation is missing:

```typescript
// If 'de' (German) is not available, returns English
const german = getLocalizedModule(module, 'de' as Locale)
// german.title will be in English (fallback)
```

## Performance Considerations

```typescript
// ❌ DON'T: Parse chapters multiple times
{modules.map(m => {
  const chapters = getLocalizedChapters(m.chapters, locale) // Parses JSON
  return chapters.map(c => <div>{c.title}</div>)
})}

// ✅ DO: Parse once, reuse
const chapters = getLocalizedChapters(module.chapters, locale)
return chapters.map(c => <div>{c.title}</div>)

// ✅ BEST: Only parse chapters when needed
// Don't parse if you only need module-level data
const localized = getLocalizedModule(module, locale)
// No chapter parsing happens here
```

## Integration with next-intl

If you're using next-intl for UI translations, you can combine approaches:

```typescript
import { useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'
import { getLocalizedModule, type Locale } from '@/lib/data/modules-helpers'

function ModuleCard({ module }) {
  const t = useTranslations('modules')
  const params = useParams()
  const locale = params.locale as Locale

  const localized = getLocalizedModule(module, locale)

  return (
    <div>
      {/* Content data from modules-translations */}
      <h2>{localized.title}</h2>
      <p>{localized.description}</p>

      {/* UI labels from next-intl */}
      <button>{t('startModule')}</button>
      <span>{t('duration', { minutes: localized.duration })}</span>
    </div>
  )
}
```

## Direct Access to Translation Objects

If you need the raw translation objects (advanced use):

```typescript
import {
  MODULE_TRANSLATIONS,
  MODULE_1_CHAPTER_TRANSLATIONS
} from '@/lib/data/modules-translations'

// Get all language variants at once
const moduleTitle = MODULE_TRANSLATIONS['ai-act-fundamentals'].title
console.log(moduleTitle.en) // "AI Act Fundamentals"
console.log(moduleTitle.fr) // "Fondamentaux de la loi sur l'IA"
console.log(moduleTitle.es) // "Fundamentos del Reglamento de IA"
console.log(moduleTitle.ro) // "Fundamentele Actului privind IA"

// Get chapter translation
const chapter1 = MODULE_1_CHAPTER_TRANSLATIONS[1]
console.log(chapter1.title.fr) // "Qu'est-ce que la loi européenne sur l'IA ?"
```

## Supported Locales

```typescript
type Locale = 'en' | 'fr' | 'es' | 'ro'

// English (en) - Default
// French (fr) - Français
// Spanish (es) - Español
// Romanian (ro) - Română
```

## Future Enhancements

These translations currently cover:
- ✅ Module titles and descriptions (5 modules)
- ✅ Chapter titles and descriptions (44 chapters)
- ❌ Chapter content (markdown lessons)
- ❌ Quiz questions and answers
- ❌ Quiz explanations

To translate the detailed content, you would extend the `LocalizedString` approach to the `content`, `question`, `options`, and `explanation` fields.
