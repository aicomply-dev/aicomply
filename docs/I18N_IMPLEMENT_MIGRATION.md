# i18n Migration Guide for /implement Section

## Completed Files

The following files have been successfully created with i18n support:

1. `/src/app/[locale]/implement/page.tsx` - Main implement page
2. `/src/app/[locale]/implement/policies/page.tsx` - Policies index
3. `/src/app/[locale]/implement/policies/loading.tsx` - Loading state
4. `/src/app/[locale]/implement/procedures/loading.tsx` - Loading state
5. `/src/app/[locale]/implement/templates/loading.tsx` - Loading state

## Remaining Files to Create

Due to file size limitations, the following files need to be created following the same pattern:

### Policies
- `/src/app/[locale]/implement/policies/[id]/page.tsx`

### Standards
- `/src/app/[locale]/implement/standards/page.tsx`
- `/src/app/[locale]/implement/standards/[id]/page.tsx`

### Controls
- `/src/app/[locale]/implement/controls/page.tsx`
- `/src/app/[locale]/implement/controls/[controlId]/page.tsx`

### Procedures
- `/src/app/[locale]/implement/procedures/page.tsx`
- `/src/app/[locale]/implement/procedures/[id]/page.tsx`

### Templates
- `/src/app/[locale]/implement/templates/page.tsx`

## i18n Pattern to Follow

For each page, make these modifications:

### 1. Add locale to params type

**From:**
```typescript
export default async function Page() {
```

**To:**
```typescript
export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const validLocale = isValidLocale(locale) ? locale : defaultLocale
```

**For dynamic routes with existing params:**
```typescript
// Before
export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

// After
export default async function Page({
  params,
}: {
  params: Promise<{ locale: string; id: string }>
}) {
  const { locale, id } = await params
  const validLocale = isValidLocale(locale) ? locale : defaultLocale
```

### 2. Add imports

Add at the top of the file:
```typescript
import { LocalizedLink } from "@/components/localized-link"
import { isValidLocale, defaultLocale } from "@/i18n/config"
```

### 3. Replace Link with LocalizedLink

**From:**
```typescript
import Link from "next/link"

<Link href="/implement/policies">
  View Policies
</Link>
```

**To:**
```typescript
import { LocalizedLink } from "@/components/localized-link"

<LocalizedLink href="/implement/policies">
  View Policies
</LocalizedLink>
```

### 4. Keep external links as regular Link

External links (starting with http://, https://, or linking to files) should remain as regular anchor tags or next/link:

```typescript
// Keep as is - external link
<a href={`/templates/${template.filename}`} download>
  Download
</a>

// Keep as is - resource link
<Link href="/resources/regulation">
  View EU AI Act
</Link>
```

### 5. Button with asChild pattern

**From:**
```typescript
<Button asChild>
  <Link href="/implement/standards">View Standards</Link>
</Button>
```

**To:**
```typescript
<Button asChild>
  <LocalizedLink href="/implement/standards">View Standards</LocalizedLink>
</Button>
```

## Quick Reference: All Files to Update

Copy each file from `src/app/implement/` to `src/app/[locale]/implement/` and apply the pattern above.

### File List
1. `policies/[id]/page.tsx` - Policy detail page
2. `standards/page.tsx` - Standards index
3. `standards/[id]/page.tsx` - Standard detail page
4. `controls/page.tsx` - Controls index
5. `controls/[controlId]/page.tsx` - Control detail page
6. `procedures/page.tsx` - Procedures index
7. `procedures/[id]/page.tsx` - Procedure detail page
8. `templates/page.tsx` - Templates index

## Example: Converting a Dynamic Route

Here's a complete example for `/policies/[id]/page.tsx`:

```typescript
// Original
export default async function PolicyDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  // ... rest of code

  return (
    <div>
      <Link href="/implement">Back</Link>
      <Link href="/implement/standards">Standards</Link>
    </div>
  )
}

// i18n version
import { LocalizedLink } from "@/components/localized-link"
import { isValidLocale, defaultLocale } from "@/i18n/config"

export default async function PolicyDetailPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>
}) {
  const { locale, id } = await params
  const validLocale = isValidLocale(locale) ? locale : defaultLocale

  // ... rest of code (unchanged)

  return (
    <div>
      <LocalizedLink href="/implement">Back</LocalizedLink>
      <LocalizedLink href="/implement/standards">Standards</LocalizedLink>
    </div>
  )
}
```

## Testing

After creating all files, test with different locales:
- `/en/implement` - English
- `/ro/implement` - Romanian
- `/implement` - Should redirect to default locale

## Notes

- The LocalizedLink component automatically adds the locale prefix to all href values
- No need to manually construct URLs like `/{{locale}}/implement`
- External links and download links remain unchanged
- Server actions and data fetching remain unchanged
