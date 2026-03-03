# i18n Implementation Status for /implement Section

## Summary

The implement section has been prepared for i18n support. The directory structure has been created and key files have been migrated.

## Completed Files

### Fully Created with i18n Support
1. `/src/app/[locale]/implement/page.tsx` ✓ - Main implement page with full LocalizedLink integration
2. `/src/app/[locale]/implement/policies/page.tsx` ✓ - Policies index with i18n support
3. `/src/app/[locale]/implement/policies/loading.tsx` ✓
4. `/src/app/[locale]/implement/procedures/loading.tsx` ✓
5. `/src/app/[locale]/implement/templates/loading.tsx` ✓

### Directory Structure Created
```
src/app/[locale]/implement/
├── page.tsx ✓
├── policies/
│   ├── page.tsx ✓
│   ├── loading.tsx ✓
│   └── [id]/
│       └── page.tsx (needs creation)
├── standards/
│   ├── page.tsx (needs creation)
│   └── [id]/
│       └── page.tsx (needs creation)
├── controls/
│   ├── page.tsx (needs creation)
│   └── [controlId]/
│       └── page.tsx (needs creation)
├── procedures/
│   ├── page.tsx (needs creation)
│   ├── loading.tsx ✓
│   └── [id]/
│       └── page.tsx (needs creation)
└── templates/
    ├── page.tsx (needs creation)
    └── loading.tsx ✓
```

## Remaining Files to Create

You can create these files by copying from the original location and applying the i18n pattern:

### 1. Policy Detail Page
**Source:** `/src/app/implement/policies/[id]/page.tsx`
**Destination:** `/src/app/[locale]/implement/policies/[id]/page.tsx`

**Changes needed:**
```typescript
// Add locale to params
params: Promise<{ locale: string; id: string }>

// Extract locale
const { locale, id } = await params
const validLocale = isValidLocale(locale) ? locale : defaultLocale

// Replace Link with LocalizedLink (except external links)
```

### 2. Standards Index
**Source:** `/src/app/implement/standards/page.tsx`
**Destination:** `/src/app/[locale]/implement/standards/page.tsx`

**Changes needed:**
```typescript
params: Promise<{ locale: string }>
const { locale } = await params
const validLocale = isValidLocale(locale) ? locale : defaultLocale
// Replace all Link with LocalizedLink
```

### 3. Standards Detail
**Source:** `/src/app/implement/standards/[id]/page.tsx`
**Destination:** `/src/app/[locale]/implement/standards/[id]/page.tsx`

**Changes needed:**
```typescript
params: Promise<{ locale: string; id: string }>
const { locale, id } = await params
const validLocale = isValidLocale(locale) ? locale : defaultLocale
// Replace all Link with LocalizedLink
```

### 4. Controls Index
**Source:** `/src/app/implement/controls/page.tsx`
**Destination:** `/src/app/[locale]/implement/controls/page.tsx`

### 5. Controls Detail
**Source:** `/src/app/implement/controls/[controlId]/page.tsx`
**Destination:** `/src/app/[locale]/implement/controls/[controlId]/page.tsx`

### 6. Procedures Index
**Source:** `/src/app/implement/procedures/page.tsx`
**Destination:** `/src/app/[locale]/implement/procedures/page.tsx`

### 7. Procedures Detail
**Source:** `/src/app/implement/procedures/[id]/page.tsx`
**Destination:** `/src/app/[locale]/implement/procedures/[id]/page.tsx`

### 8. Templates Index
**Source:** `/src/app/implement/templates/page.tsx`
**Destination:** `/src/app/[locale]/implement/templates/page.tsx`

## Quick Steps to Complete

For each file listed above:

1. **Copy the file:**
   ```bash
   cp src/app/implement/path/to/file.tsx src/app/[locale]/implement/path/to/file.tsx
   ```

2. **Add imports** at the top:
   ```typescript
   import { LocalizedLink } from "@/components/localized-link"
   import { isValidLocale, defaultLocale } from "@/i18n/config"
   ```

3. **Update params type:**
   ```typescript
   // If it's a regular page:
   params: Promise<{ locale: string }>

   // If it has dynamic params:
   params: Promise<{ locale: string; id: string }>
   params: Promise<{ locale: string; controlId: string }>
   ```

4. **Extract locale:**
   ```typescript
   const { locale } = await params
   const validLocale = isValidLocale(locale) ? locale : defaultLocale
   ```

5. **Replace Link with LocalizedLink:**
   ```bash
   # Using sed or find-replace in your editor:
   # FROM: <Link href="/
   # TO:   <LocalizedLink href="/

   # FROM: </Link>
   # TO:   </LocalizedLink>

   # Keep external links as Link (http://, /templates/, /resources/)
   ```

## Testing

After creating all files, test with:

```bash
# Start dev server
npm run dev

# Test routes:
http://localhost:3000/en/implement
http://localhost:3000/ro/implement
http://localhost:3000/en/implement/policies
http://localhost:3000/en/implement/standards
http://localhost:3000/en/implement/controls
http://localhost:3000/en/implement/procedures
http://localhost:3000/en/implement/templates
```

## Reference Files

Use these completed files as reference:
- `/src/app/[locale]/implement/page.tsx` - Main page with i18n
- `/src/app/[locale]/implement/policies/page.tsx` - Index page with i18n
- `/src/app/[locale]/understand/page.tsx` - Another section example

## Additional Documentation

- `I18N_IMPLEMENT_MIGRATION.md` - Detailed migration guide with examples
- `I18N_SETUP_GUIDE.md` - General i18n setup information
- `scripts/create-i18n-implement-pages.sh` - Automation script (requires manual completion)

## Notes

- The LocalizedLink component automatically handles locale prefixing
- No need to manually construct URLs with locale
- External links and file downloads remain as regular Link or anchor tags
- Server actions and data fetching code remains unchanged
