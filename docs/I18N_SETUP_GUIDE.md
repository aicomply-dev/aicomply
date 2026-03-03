# Internationalization (i18n) Setup Guide

This guide explains how to translate your Next.js application and content into different languages.

## Overview

Your application currently has:
- ✅ Next.js 16 with App Router
- ✅ Markdown content rendering (using `react-markdown`)
- ✅ Content stored in `/content` directory (JSON + Markdown)
- ❌ No i18n setup yet

## Approach Options

### Option 1: Next.js Built-in i18n (Recommended for App Router)

Next.js 16 App Router supports i18n through **route groups** and **middleware**. This is the most native approach.

**Structure:**
```
src/app/
  [locale]/          # Route group for locale
    page.tsx
    layout.tsx
    ...
```

### Option 2: next-intl Library (Most Popular)

A popular library that provides:
- Type-safe translations
- Automatic locale detection
- Server and client components support
- Built-in formatting (dates, numbers, etc.)

## Recommended Implementation: next-intl

We'll use `next-intl` as it provides the best developer experience and type safety.

## Step-by-Step Setup

### 1. Install Dependencies

```bash
npm install next-intl
```

### 2. Create Translation Files Structure

```
messages/
  en.json          # English translations
  de.json          # German translations
  fr.json          # French translations
  es.json          # Spanish translations
```

### 3. Configure next-intl

Create `src/i18n/request.ts`:
```typescript
import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';

export default getRequestConfig(async ({requestLocale}) => {
  let locale = await requestLocale;
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }
  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});
```

Create `src/i18n/routing.ts`:
```typescript
import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['en', 'de', 'fr', 'es'],
  defaultLocale: 'en'
});

export const {Link, redirect, usePathname, useRouter} =
  createNavigation(routing);
```

### 4. Update Middleware

Create `src/middleware.ts`:
```typescript
import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  matcher: ['/', '/(de|en|fr|es)/:path*']
};
```

### 5. Restructure App Directory

Move your app structure to include locale:

```
src/app/
  [locale]/              # New locale route group
    layout.tsx           # Updated with locale provider
    page.tsx
    assess/
    implement/
    ...
```

### 6. Update Root Layout

```typescript
// src/app/[locale]/layout.tsx
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {routing} from '@/i18n/routing';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
```

## Translating Markdown Content

### Approach 1: Separate Markdown Files per Language

```
content/
  firewall-config/
    en.md
    de.md
    fr.md
    es.md
```

### Approach 2: Translation Keys in JSON

Store markdown content as translation keys:

```json
// messages/en.json
{
  "firewall": {
    "title": "Safe Firewall Configuration",
    "content": "# Safe Firewall Configuration\n\n## ✅ VERIFIED..."
  }
}
```

Then render:
```tsx
import {useTranslations} from 'next-intl';
import ReactMarkdown from 'react-markdown';

export function FirewallPage() {
  const t = useTranslations('firewall');
  return (
    <ReactMarkdown>{t('content')}</ReactMarkdown>
  );
}
```

### Approach 3: Hybrid Approach (Recommended)

For large markdown files like `SAFE_FIREWALL_CONFIG.md`:

1. Keep markdown files separate per language:
   ```
   content/
     firewall-config/
       en.md
       de.md
       fr.md
       es.md
   ```

2. Load based on locale:
   ```typescript
   // src/lib/content/firewall.ts
   import {readFile} from 'fs/promises';
   import {join} from 'path';

   export async function getFirewallConfig(locale: string = 'en') {
     const filePath = join(
       process.cwd(),
       'content',
       'firewall-config',
       `${locale}.md`
     );
     return readFile(filePath, 'utf-8');
   }
   ```

3. Use in page:
   ```tsx
   // src/app/[locale]/firewall/page.tsx
   import {getFirewallConfig} from '@/lib/content/firewall';
   import ReactMarkdown from 'react-markdown';

   export default async function FirewallPage({
     params
   }: {
     params: Promise<{locale: string}>;
   }) {
     const {locale} = await params;
     const content = await getFirewallConfig(locale);
     
     return (
       <div className="prose">
         <ReactMarkdown>{content}</ReactMarkdown>
       </div>
     );
   }
   ```

## Translating JSON Content

For your existing JSON content in `/content`:

### Option 1: Separate Directories

```
content/
  en/
    assessments/
    modules/
    ...
  de/
    assessments/
    modules/
    ...
```

### Option 2: Locale Suffix

```
content/
  assessments/
    en.json
    de.json
    fr.json
```

Update your content loader:
```typescript
// src/lib/content/loader.ts
export async function loadContent(
  path: string,
  locale: string = 'en'
) {
  const filePath = join(
    process.cwd(),
    'content',
    path,
    `${locale}.json`
  );
  // ... load logic
}
```

## Translating UI Components

Use `useTranslations` hook:

```tsx
'use client';

import {useTranslations} from 'next-intl';

export function MyComponent() {
  const t = useTranslations('common');
  
  return (
    <button>{t('submit')}</button>
  );
}
```

For server components:
```tsx
import {useTranslations} from 'next-intl/server';

export async function ServerComponent() {
  const t = await useTranslations('common');
  return <h1>{t('title')}</h1>;
}
```

## Language Switcher Component

```tsx
'use client';

import {useLocale} from 'next-intl';
import {useRouter, usePathname} from '@/i18n/routing';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const locales = [
  {code: 'en', name: 'English'},
  {code: 'de', name: 'Deutsch'},
  {code: 'fr', name: 'Français'},
  {code: 'es', name: 'Español'},
];

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (newLocale: string) => {
    router.replace(pathname, {locale: newLocale});
  };

  return (
    <Select value={locale} onValueChange={handleChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {locales.map((loc) => (
          <SelectItem key={loc.code} value={loc.code}>
            {loc.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
```

## SEO Considerations

### Update Metadata

```typescript
// src/app/[locale]/layout.tsx
export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string}>;
}): Promise<Metadata> {
  const {locale} = await params;
  const t = await useTranslations('metadata');
  
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        'en': '/en',
        'de': '/de',
        'fr': '/fr',
        'es': '/es',
      }
    }
  };
}
```

### Add hreflang Tags

```tsx
// In layout.tsx
const locales = ['en', 'de', 'fr', 'es'];

{locales.map((loc) => (
  <link
    key={loc}
    rel="alternate"
    hrefLang={loc}
    href={`${baseUrl}/${loc}${pathname}`}
  />
))}
```

## Testing Translations

1. **Check all pages load** with different locales
2. **Verify markdown renders** correctly
3. **Test language switcher**
4. **Check SEO** (hreflang tags, metadata)

## Migration Checklist

- [ ] Install `next-intl`
- [ ] Create `messages/` directory with translation files
- [ ] Set up `src/i18n/` configuration
- [ ] Create/update middleware
- [ ] Restructure app directory with `[locale]` route group
- [ ] Update all page components to use translations
- [ ] Create language switcher component
- [ ] Organize markdown files by locale
- [ ] Update content loaders to support locale
- [ ] Update metadata for SEO
- [ ] Test all locales

## Quick Start for SAFE_FIREWALL_CONFIG.md

To translate your current `SAFE_FIREWALL_CONFIG.md`:

1. **Create locale directories:**
   ```bash
   mkdir -p content/firewall-config
   ```

2. **Copy and translate:**
   ```bash
   cp SAFE_FIREWALL_CONFIG.md content/firewall-config/en.md
   # Then create de.md, fr.md, es.md with translations
   ```

3. **Create a page to display it:**
   ```tsx
   // src/app/[locale]/firewall/page.tsx
   import {getFirewallConfig} from '@/lib/content/firewall';
   import ReactMarkdown from 'react-markdown';
   import remarkGfm from 'remark-gfm';

   export default async function FirewallPage({
     params
   }: {
     params: Promise<{locale: string}>;
   }) {
     const {locale} = await params;
     const content = await getFirewallConfig(locale);
     
     return (
       <div className="container py-8">
         <div className="prose prose-neutral dark:prose-invert max-w-none">
           <ReactMarkdown remarkPlugins={[remarkGfm]}>
             {content}
           </ReactMarkdown>
         </div>
       </div>
     );
   }
   ```

## Resources

- [next-intl Documentation](https://next-intl-docs.vercel.app/)
- [Next.js Internationalization](https://nextjs.org/docs/app/building-your-application/routing/internationalization)
- [React Markdown](https://github.com/remarkjs/react-markdown)

## Need Help?

If you want me to implement this setup for you, I can:
1. Install and configure next-intl
2. Set up the locale routing structure
3. Create translation file templates
4. Create a language switcher component
5. Set up the firewall config page with translations

Just let me know which languages you want to support!
