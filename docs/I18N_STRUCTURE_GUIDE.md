# Multi-Language Structure Guide

## 🎯 Quick Overview

**ALL pages must be inside `src/app/[locale]/` folder**
- URL structure: `https://aicomply.dev/{locale}/{page}`
- Example: `https://aicomply.dev/fr/understand` = French version of understand page
- Supported locales: `en`, `de`, `fr`, `es`, `ro`

---

## 📁 File Structure

```
src/app/
├── layout.tsx                    # Root layout (has <html><body>)
├── [locale]/                     # ⭐ ALL PAGES GO HERE
│   ├── layout.tsx                # Locale-specific layout (provides translations)
│   ├── page.tsx                  # Homepage: /en/, /fr/, etc.
│   ├── understand/
│   │   └── page.tsx              # /en/understand, /fr/understand
│   ├── assess/
│   │   └── page.tsx              # /en/assess, /fr/assess
│   └── auth/
│       └── login/
│           └── page.tsx          # /en/auth/login, /fr/auth/login
│
messages/                          # Translation files
├── en.json                        # English translations
├── de.json                        # German translations
├── fr.json                        # French translations
├── es.json                        # Spanish translations
└── ro.json                        # Romanian translations
```

---

## 🔄 How It Works

### 1. **URL Routing**
```
User visits: https://aicomply.dev/understand
↓
Middleware detects no locale
↓
Redirects to: https://aicomply.dev/en/understand (or user's browser language)
↓
Next.js routes to: src/app/[locale]/understand/page.tsx
↓
Page receives: params = { locale: "en" }
```

### 2. **Translation Files**
All translations are in `messages/{locale}.json`:
```json
{
  "common": {
    "home": "Home",
    "save": "Save"
  },
  "homepage": {
    "title": "Navigate AI compliance"
  }
}
```

### 3. **Using Translations**

#### **In Server Components** (pages, layouts):
```tsx
import { getServerTranslations } from "@/lib/server-translations"
import { isValidLocale, defaultLocale } from "@/i18n/config"

export default async function MyPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const validLocale = isValidLocale(locale) ? locale : defaultLocale
  const t = await getServerTranslations(validLocale, "homepage")
  
  return (
    <div>
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>
    </div>
  )
}
```

#### **In Client Components**:
```tsx
'use client'
import { useTranslations } from "@/hooks/use-translations"
import { useParams } from "next/navigation"

export function MyComponent() {
  const params = useParams()
  const locale = params?.locale as string
  const t = useTranslations("homepage")
  
  return (
    <div>
      <h1>{t("title")}</h1>
    </div>
  )
}
```

---

## 📝 Step-by-Step: Adding a New Page

### Example: Create `/about` page in multiple languages

**1. Create the page file:**
```bash
mkdir -p src/app/[locale]/about
touch src/app/[locale]/about/page.tsx
```

**2. Write the page:**
```tsx
// src/app/[locale]/about/page.tsx
import { getServerTranslations } from "@/lib/server-translations"
import { isValidLocale, defaultLocale } from "@/i18n/config"
import { LocalizedLink } from "@/components/localized-link"

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const validLocale = isValidLocale(locale) ? locale : defaultLocale
  const t = await getServerTranslations(validLocale, "about")
  
  return (
    <div>
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>
      <LocalizedLink href="/">Go Home</LocalizedLink>
    </div>
  )
}
```

**3. Add translations to all language files:**

**`messages/en.json`:**
```json
{
  "about": {
    "title": "About Us",
    "description": "We are a compliance platform..."
  }
}
```

**`messages/fr.json`:**
```json
{
  "about": {
    "title": "À propos de nous",
    "description": "Nous sommes une plateforme de conformité..."
  }
}
```

**Do the same for `de.json`, `es.json`, `ro.json`**

**4. Access the page:**
- English: `https://aicomply.dev/en/about`
- French: `https://aicomply.dev/fr/about`
- German: `https://aicomply.dev/de/about`
- etc.

---

## 🔗 Navigation Links

### ❌ WRONG - Regular Link:
```tsx
import Link from "next/link"
<Link href="/about">About</Link>  // ❌ Breaks locale routing
```

### ✅ CORRECT - LocalizedLink:
```tsx
import { LocalizedLink } from "@/components/localized-link"
<LocalizedLink href="/about">About</LocalizedLink>  // ✅ Automatically adds locale
```

**LocalizedLink automatically:**
- Adds current locale to URL: `/en/about`, `/fr/about`
- Preserves locale when navigating

---

## 🎨 Translation File Structure

### Nested Keys (Recommended):
```json
{
  "homepage": {
    "hero": {
      "title": "Welcome",
      "description": "This is the homepage"
    },
    "cta": {
      "button": "Get Started"
    }
  }
}
```

**Usage:**
```tsx
const t = await getServerTranslations(locale, "homepage")
t("hero.title")           // "Welcome"
t("hero.description")      // "This is the homepage"
t("cta.button")           // "Get Started"
```

**Or with namespace:**
```tsx
const t = await getServerTranslations(locale)  // No namespace
t("homepage.hero.title")  // "Welcome"
```

---

## 🛠️ Key Components & Functions

### 1. **`getServerTranslations(locale, namespace?)`**
- Use in **Server Components** (pages, layouts)
- Returns a `t(key)` function
- Example: `const t = await getServerTranslations("fr", "homepage")`

### 2. **`useTranslations(namespace?)`**
- Use in **Client Components** (`'use client'`)
- Returns a `t(key)` function
- Example: `const t = useTranslations("homepage")`

### 3. **`LocalizedLink`**
- Use instead of `next/link` for internal navigation
- Automatically adds locale prefix
- Example: `<LocalizedLink href="/about">About</LocalizedLink>`

### 4. **`isValidLocale(locale)`**
- Check if locale is valid
- Example: `if (isValidLocale(locale)) { ... }`

### 5. **`defaultLocale`**
- Fallback locale (currently `"en"`)
- Use when locale is invalid

---

## 📋 Common Patterns

### Pattern 1: Simple Page
```tsx
// src/app/[locale]/contact/page.tsx
export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const validLocale = isValidLocale(locale) ? locale : defaultLocale
  const t = await getServerTranslations(validLocale, "contact")
  
  return <h1>{t("title")}</h1>
}
```

### Pattern 2: Page with Dynamic Route
```tsx
// src/app/[locale]/blog/[slug]/page.tsx
export default async function BlogPost({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  const validLocale = isValidLocale(locale) ? locale : defaultLocale
  const t = await getServerTranslations(validLocale, "blog")
  
  return (
    <div>
      <h1>{t("postTitle")}</h1>
      <p>Slug: {slug}</p>
    </div>
  )
}
```

### Pattern 3: Client Component with Translations
```tsx
'use client'
import { useTranslations } from "@/hooks/use-translations"

export function MyButton() {
  const t = useTranslations("common")
  
  return <button>{t("save")}</button>
}
```

---

## ⚠️ Common Mistakes

### ❌ Mistake 1: Page outside `[locale]` folder
```
src/app/about/page.tsx  ❌ WRONG
```
**Fix:** Move to `src/app/[locale]/about/page.tsx`

### ❌ Mistake 2: Using regular `Link` instead of `LocalizedLink`
```tsx
<Link href="/about">About</Link>  ❌ WRONG
```
**Fix:** Use `<LocalizedLink href="/about">About</LocalizedLink>`

### ❌ Mistake 3: Hardcoded text
```tsx
<h1>Welcome</h1>  ❌ WRONG
```
**Fix:** Use `{t("welcome")}`

### ❌ Mistake 4: Not handling locale param
```tsx
export default function Page({ params }) {  ❌ WRONG
  // params is a Promise in Next.js 16!
}
```
**Fix:**
```tsx
export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params  ✅ CORRECT
}
```

---

## 🎯 Quick Reference

| What | Where | How |
|------|-------|-----|
| **Pages** | `src/app/[locale]/` | All pages go here |
| **Translations** | `messages/{locale}.json` | JSON files with all text |
| **Server Components** | Pages, layouts | Use `getServerTranslations()` |
| **Client Components** | Components with `'use client'` | Use `useTranslations()` |
| **Links** | Anywhere | Use `LocalizedLink` component |
| **Locale in URL** | Always | `/en/page`, `/fr/page`, etc. |

---

## 🔍 How to Check Current Locale

### In Server Component:
```tsx
const { locale } = await params
const validLocale = isValidLocale(locale) ? locale : defaultLocale
```

### In Client Component:
```tsx
const params = useParams()
const locale = params?.locale as string
```

---

## 📚 Example: Complete Translated Page

```tsx
// src/app/[locale]/products/page.tsx
import { getServerTranslations } from "@/lib/server-translations"
import { isValidLocale, defaultLocale } from "@/i18n/config"
import { LocalizedLink } from "@/components/localized-link"
import { NavWithAuth } from "@/components/nav-with-auth"
import { Footer } from "@/components/footer"

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const validLocale = isValidLocale(locale) ? locale : defaultLocale
  const t = await getServerTranslations(validLocale, "products")
  
  return (
    <div>
      <NavWithAuth />
      <main>
        <h1>{t("title")}</h1>
        <p>{t("description")}</p>
        <LocalizedLink href="/">{t("backToHome")}</LocalizedLink>
      </main>
      <Footer />
    </div>
  )
}
```

**Translation files:**
```json
// messages/en.json
{
  "products": {
    "title": "Our Products",
    "description": "Check out our amazing products",
    "backToHome": "Back to Home"
  }
}

// messages/fr.json
{
  "products": {
    "title": "Nos Produits",
    "description": "Découvrez nos produits incroyables",
    "backToHome": "Retour à l'accueil"
  }
}
```

---

## 🚀 That's It!

**Remember:**
1. ✅ All pages in `src/app/[locale]/`
2. ✅ Use `getServerTranslations()` in server components
3. ✅ Use `useTranslations()` in client components
4. ✅ Use `LocalizedLink` for navigation
5. ✅ Add translations to all 5 language files

**Questions?** Check existing pages like:
- `src/app/[locale]/understand/page.tsx` (fully translated)
- `src/app/[locale]/page.tsx` (homepage, fully translated)
