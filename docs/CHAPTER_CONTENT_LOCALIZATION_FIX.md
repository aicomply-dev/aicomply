# Chapter Content Localization Fix

**Date:** 2024-12-19

## Problem

The training content (chapter markdown files) was not being loaded based on locale. The system was always loading English content regardless of the selected language.

## Root Cause

The `getModuleBySlug()` function in `src/lib/actions/modules.ts` was:
1. Not accepting a locale parameter
2. Always loading chapters from the database (which were seeded with English content only)
3. Not checking for locale-specific chapter files in the file system

## Solution

Updated `getModuleBySlug()` to:
1. Accept a `locale` parameter (defaults to "en")
2. Check for locale-specific chapters in the file system first (`content/modules/{slug}/chapters/{locale}/`)
3. Fall back to English chapters if locale-specific content doesn't exist
4. Fall back to database chapters if no file system content is found

## Changes Made

### 1. Updated `getModuleBySlug()` function
**File:** `src/lib/actions/modules.ts`

```typescript
export async function getModuleBySlug(slug: string, locale: string = "en") {
  // ... existing code ...
  
  // Try to load locale-specific chapters from file system
  const chaptersDir = path.join(CONTENT_MODULES_DIR, slug, "chapters")
  let chapters: Chapter[] = []
  
  if (existsSync(chaptersDir)) {
    // Try locale-specific directory first (chapters/fr/, chapters/es/, etc.)
    const localeChaptersDir = path.join(chaptersDir, locale)
    const actualChaptersDir = existsSync(localeChaptersDir) ? localeChaptersDir : path.join(chaptersDir, "en")
    
    // Load chapters from file system...
  }
  
  // Fall back to database if no file system chapters found
  if (chapters.length === 0) {
    chapters = JSON.parse(mod.chapters) as Chapter[]
  }
  
  return { ...mod, chapters }
}
```

### 2. Updated page components to pass locale
**Files Updated:**
- `src/app/[locale]/understand/modules/[slug]/chapter/[index]/page.tsx`
- `src/app/[locale]/understand/modules/[slug]/page.tsx`
- `src/app/understand/modules/[slug]/page.tsx` (old route, defaults to "en")
- `src/app/understand/modules/[slug]/chapter/[index]/page.tsx` (old route, defaults to "en")

## Content Status by Module

### ✅ Modules with French Content

| Module | French Chapters | Status |
|--------|----------------|--------|
| `ai-act-fundamentals` | ✅ Complete (8 chapters) | ✅ **Will now load French content** |
| `high-risk-ai-compliance` | ✅ Partial (12 chapters) | ✅ **Will now load French content** |
| `governance-penalties` | ⚠️ Only module.json | ⚠️ Falls back to English |
| `innovation-pathways` | ⚠️ Only module.json | ⚠️ Falls back to English |

### ❌ Modules without French Content

| Module | French Chapters | Status |
|--------|----------------|--------|
| `gpai-compliance` | ❌ Only module.json | ⚠️ **Falls back to English** |

## How It Works Now

### Priority Order for Loading Chapters:

1. **Locale-specific file system** (`content/modules/{slug}/chapters/{locale}/`)
   - Example: `content/modules/ai-act-fundamentals/chapters/fr/00-1.json`
   - Example: `content/modules/ai-act-fundamentals/chapters/fr/00-1.md`

2. **English file system** (`content/modules/{slug}/chapters/en/`)
   - Fallback if locale-specific directory doesn't exist
   - Example: `content/modules/gpai-compliance/chapters/en/00-1.json`

3. **Database** (seeded English content)
   - Final fallback if no file system content exists

## Testing

### Test URLs

1. **Module with French content:**
   - 🇫🇷 French: `https://aicomply.dev/fr/understand/modules/ai-act-fundamentals/chapter/0`
   - Should load: `content/modules/ai-act-fundamentals/chapters/fr/00-1.md`

2. **Module without French content:**
   - 🇫🇷 French: `https://aicomply.dev/fr/understand/modules/gpai-compliance/chapter/0`
   - Will fallback to: `content/modules/gpai-compliance/chapters/en/00-1.md`

## Next Steps

To fully translate `gpai-compliance`:

1. Create French chapter files:
   ```
   content/modules/gpai-compliance/chapters/fr/
   ├── 00-1.json
   ├── 00-1.md
   ├── 01-2.json
   ├── 01-2.md
   └── ... (copy structure from en/ directory)
   ```

2. Translate the content in each `.md` file
3. Update `.json` metadata files with French titles/descriptions

## Summary

✅ **Fixed:** System now loads locale-specific chapter content from file system  
✅ **Working:** Modules with French content (ai-act-fundamentals, high-risk-ai-compliance) will display in French  
⚠️ **Pending:** Modules without French content (gpai-compliance) need French chapter files created
