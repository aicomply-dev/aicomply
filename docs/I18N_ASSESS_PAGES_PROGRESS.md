# i18n Assess Section - Migration Progress

## Completed Files

The following assess pages have been successfully migrated to i18n-compatible versions:

### ✅ Main Pages
1. **src/app/[locale]/assess/page.tsx** - Main assess dashboard
2. **src/app/[locale]/assess/inventory/page.tsx** - AI systems inventory list
3. **src/app/[locale]/assess/inventory/[id]/page.tsx** - Individual AI system details
4. **src/app/[locale]/assess/classification/page.tsx** - Risk classification and role determination

### ✅ Redirect Pages
5. **src/app/[locale]/assess/gap-analysis/page.tsx** - Redirects to comply page
6. **src/app/[locale]/assess/roles/page.tsx** - Redirects to classification page
7. **src/app/[locale]/assess/assessments/page.tsx** - Redirects to classification page

## Key Changes Applied

All migrated files include:

1. **Locale parameter in params**:
   ```typescript
   export default async function PageName({
     params,
   }: {
     params: Promise<{ locale: string; /* other params */ }>
   }) {
     const { locale } = await params
     const validLocale = isValidLocale(locale) ? locale : defaultLocale
   ```

2. **Import statements**:
   ```typescript
   import { isValidLocale, defaultLocale } from "@/i18n/config"
   import { LocalizedLink } from "@/components/localized-link"
   ```

3. **Link component replacements**:
   - `import Link from "next/link"` → removed (except for external links)
   - `<Link href="/assess/inventory">` → `<LocalizedLink href="/assess/inventory">`
   - LocalizedLink automatically prepends the locale to internal links

## Remaining Files to Migrate

The following files still need to be created (they exist in src/app/assess/ but not in src/app/[locale]/assess/):

### 📝 TODO: Large Component Files

1. **src/app/[locale]/assess/requirements/page.tsx**
   - Source: src/app/assess/requirements/page.tsx
   - ~550+ lines
   - Link conversions needed at lines: 97, 104, 114, 121, 250, 265, 304, 334, 534

2. **src/app/[locale]/assess/requirements/[systemId]/page.tsx**
   - Source: src/app/assess/requirements/[systemId]/page.tsx
   - Needs both `locale` and `systemId` params
   - Check for Link usage and convert

3. **src/app/[locale]/assess/comply/page.tsx**
   - Source: src/app/assess/comply/page.tsx
   - Educational/demo page with sample requirements
   - Check for Link usage and convert

4. **src/app/[locale]/assess/monitor/page.tsx**
   - Source: src/app/assess/monitor/page.tsx
   - Educational/demo page with sample monitoring metrics
   - Check for Link usage and convert

5. **src/app/[locale]/assess/assessments/[id]/page.tsx**
   - Source: src/app/assess/assessments/[id]/page.tsx
   - Needs both `locale` and `id` params
   - Link conversions needed at lines: 208, 221, 259, 638, 698

## How to Complete Remaining Files

For each remaining file:

1. Read the source file from `src/app/assess/`
2. Apply these transformations:
   - Add `locale` to params type
   - Extract and validate locale
   - Replace `Link` with `LocalizedLink` for internal links
   - Keep regular `Link` for external links only
   - Add required imports

3. Write to `src/app/[locale]/assess/`

### Example Pattern for Dynamic Routes

For files with multiple params like `[id]` or `[systemId]`:

```typescript
interface Props {
  params: Promise<{ locale: string; id: string }> // or systemId, etc.
}

export default async function PageName({ params }: Props) {
  const { locale, id } = await params
  const validLocale = isValidLocale(locale) ? locale : defaultLocale
  // ... rest of component
}
```

## Verification Steps

After creating remaining files:

1. Check all files compile: `npm run build` or `npm run typecheck`
2. Verify all internal links use `LocalizedLink`
3. Verify params are properly awaited and destructured
4. Test navigation between pages works with locale prefix

## Notes

- External links (starting with `http://` or `https://`) should keep using regular `<a>` tags or `Link` with absolute URLs
- LocalizedLink handles relative paths automatically - just use `/assess/inventory` not `/${locale}/assess/inventory`
- Query params in links work fine: `<LocalizedLink href="/assess/classification?type=role-determination">`
