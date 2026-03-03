# Translation Example: SAFE_FIREWALL_CONFIG.md

This document shows a practical example of how to translate your `SAFE_FIREWALL_CONFIG.md` file.

## Current Structure

Your file is currently at:
```
/SAFE_FIREWALL_CONFIG.md
```

## Recommended Structure for Translations

```
content/
  firewall-config/
    en.md          # English (original)
    de.md          # German
    fr.md          # French
    es.md          # Spanish
    metadata.json  # Metadata about the document
```

## Step 1: Create the Directory Structure

```bash
mkdir -p content/firewall-config
```

## Step 2: Move and Organize Files

```bash
# Move original to English version
cp SAFE_FIREWALL_CONFIG.md content/firewall-config/en.md

# Create placeholder files for other languages
touch content/firewall-config/de.md
touch content/firewall-config/fr.md
touch content/firewall-config/es.md
```

## Step 3: Create Metadata File

```json
// content/firewall-config/metadata.json
{
  "title": {
    "en": "Safe Firewall Configuration for Cursor & AI Tools",
    "de": "Sichere Firewall-Konfiguration für Cursor & AI-Tools",
    "fr": "Configuration de pare-feu sécurisée pour Cursor et les outils IA",
    "es": "Configuración segura del firewall para Cursor y herramientas de IA"
  },
  "description": {
    "en": "Verified working firewall configuration tested with Cursor IDE, GitHub, Windsurf, and more",
    "de": "Getestete und funktionierende Firewall-Konfiguration mit Cursor IDE, GitHub, Windsurf und mehr",
    "fr": "Configuration de pare-feu testée et fonctionnelle avec Cursor IDE, GitHub, Windsurf et plus",
    "es": "Configuración de firewall verificada y funcional probada con Cursor IDE, GitHub, Windsurf y más"
  },
  "lastUpdated": "2025-12-13",
  "supportedLocales": ["en", "de", "fr", "es"]
}
```

## Step 4: Create Content Loader

```typescript
// src/lib/content/firewall.ts
import {readFile} from 'fs/promises';
import {join} from 'path';
import {readFileSync} from 'fs';

export interface FirewallConfigMetadata {
  title: Record<string, string>;
  description: Record<string, string>;
  lastUpdated: string;
  supportedLocales: string[];
}

export async function getFirewallConfigMetadata(): Promise<FirewallConfigMetadata> {
  const filePath = join(
    process.cwd(),
    'content',
    'firewall-config',
    'metadata.json'
  );
  const content = await readFile(filePath, 'utf-8');
  return JSON.parse(content);
}

export async function getFirewallConfig(locale: string = 'en'): Promise<string> {
  // Fallback to English if locale not available
  const supportedLocales = ['en', 'de', 'fr', 'es'];
  const targetLocale = supportedLocales.includes(locale) ? locale : 'en';
  
  const filePath = join(
    process.cwd(),
    'content',
    'firewall-config',
    `${targetLocale}.md`
  );
  
  try {
    return await readFile(filePath, 'utf-8');
  } catch (error) {
    // Fallback to English if file doesn't exist
    if (targetLocale !== 'en') {
      return getFirewallConfig('en');
    }
    throw error;
  }
}

export async function getAvailableLocales(): Promise<string[]> {
  const metadata = await getFirewallConfigMetadata();
  return metadata.supportedLocales;
}
```

## Step 5: Create the Page Component

```tsx
// src/app/[locale]/firewall/page.tsx
import {getFirewallConfig, getFirewallConfigMetadata} from '@/lib/content/firewall';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import {notFound} from 'next/navigation';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {LanguageSwitcher} from '@/components/language-switcher';

export async function generateStaticParams() {
  const locales = await getAvailableLocales();
  return locales.map((locale) => ({locale}));
}

export default async function FirewallConfigPage({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  
  const [content, metadata] = await Promise.all([
    getFirewallConfig(locale),
    getFirewallConfigMetadata()
  ]);

  if (!content) {
    notFound();
  }

  const title = metadata.title[locale] || metadata.title['en'];
  const description = metadata.description[locale] || metadata.description['en'];

  return (
    <div className="container py-8 max-w-4xl">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">{title}</h1>
          <p className="text-muted-foreground">{description}</p>
        </div>
        <LanguageSwitcher currentPath="/firewall" />
      </div>

      <Card className="border-border/50">
        <CardContent className="p-6 sm:p-8">
          <div className="prose prose-neutral dark:prose-invert max-w-none 
                         prose-headings:scroll-mt-20 
                         prose-h1:text-2xl prose-h1:font-bold prose-h1:mb-4 
                         prose-h2:text-xl prose-h2:font-bold prose-h2:mt-8 prose-h2:mb-4 
                         prose-h2:pb-2 prose-h2:border-b 
                         prose-h3:text-lg prose-h3:font-semibold prose-h3:mt-6 prose-h3:mb-3 
                         prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:rounded 
                         prose-code:before:content-none prose-code:after:content-none
                         prose-blockquote:border-l-primary prose-blockquote:bg-primary/5 
                         prose-blockquote:py-1 prose-blockquote:px-4">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {content}
            </ReactMarkdown>
          </div>
        </CardContent>
      </Card>

      <div className="mt-6 text-sm text-muted-foreground">
        <p>Last updated: {metadata.lastUpdated}</p>
        <p>Available in: {metadata.supportedLocales.join(', ').toUpperCase()}</p>
      </div>
    </div>
  );
}
```

## Step 6: Translation Workflow

### For Translators

1. **Copy the English file as a template:**
   ```bash
   cp content/firewall-config/en.md content/firewall-config/de.md
   ```

2. **Translate section by section:**
   - Keep code blocks unchanged (bash commands, etc.)
   - Translate all text content
   - Keep technical terms consistent
   - Maintain markdown formatting

3. **Example Translation (German):**

   **English:**
   ```markdown
   # Safe Firewall Configuration for Cursor & AI Tools
   
   ## ✅ VERIFIED WORKING CONFIGURATION
   ```

   **German:**
   ```markdown
   # Sichere Firewall-Konfiguration für Cursor & AI-Tools
   
   ## ✅ VERIFIZIERTE FUNKTIONIERENDE KONFIGURATION
   ```

### What NOT to Translate

- ✅ Code blocks (bash commands, configs)
- ✅ Domain names (`*.cursor.sh`, `github.com`)
- ✅ Port numbers (443, 80, 22)
- ✅ IP addresses (100.64.0.0/10)
- ✅ File paths and commands
- ✅ Technical protocol names (HTTPS, SSH, TLS)

### What TO Translate

- ✅ Headings and titles
- ✅ Explanatory text
- ✅ Error messages and troubleshooting
- ✅ Descriptions and notes
- ✅ Status messages

## Step 7: Automated Translation Helpers

You can create a script to help with translation:

```typescript
// scripts/translate-firewall.ts
import {readFileSync, writeFileSync} from 'fs';
import {join} from 'path';

/**
 * Helper to extract translatable content from markdown
 * Keeps code blocks and technical terms intact
 */
function extractTranslatableContent(markdown: string) {
  const codeBlockRegex = /```[\s\S]*?```/g;
  const inlineCodeRegex = /`[^`]+`/g;
  
  // Replace code blocks with placeholders
  const placeholders: string[] = [];
  let content = markdown;
  
  // Replace code blocks
  content = content.replace(codeBlockRegex, (match) => {
    placeholders.push(match);
    return `[CODE_BLOCK_${placeholders.length - 1}]`;
  });
  
  // Replace inline code
  content = content.replace(inlineCodeRegex, (match) => {
    placeholders.push(match);
    return `[INLINE_CODE_${placeholders.length - 1}]`;
  });
  
  return {content, placeholders};
}

/**
 * Restore code blocks after translation
 */
function restoreCodeBlocks(translated: string, placeholders: string[]) {
  let result = translated;
  
  placeholders.forEach((placeholder, index) => {
    const regex = new RegExp(`\\[${placeholder.includes('CODE_BLOCK') ? 'CODE_BLOCK' : 'INLINE_CODE'}_${index}\\]`, 'g');
    result = result.replace(regex, placeholder);
  });
  
  return result;
}

// Usage example
const sourceFile = join(process.cwd(), 'content/firewall-config/en.md');
const content = readFileSync(sourceFile, 'utf-8');
const {content: translatable, placeholders} = extractTranslatableContent(content);

console.log('Translatable content (code blocks preserved):');
console.log(translatable);
```

## Step 8: Testing Translations

```typescript
// scripts/test-translations.ts
import {readFileSync} from 'fs';
import {join} from 'path';

const locales = ['en', 'de', 'fr', 'es'];

async function testTranslations() {
  for (const locale of locales) {
    const filePath = join(
      process.cwd(),
      'content',
      'firewall-config',
      `${locale}.md`
    );
    
    try {
      const content = readFileSync(filePath, 'utf-8');
      console.log(`✅ ${locale}: ${content.length} characters`);
      
      // Check for common issues
      if (content.includes('[CODE_BLOCK_')) {
        console.warn(`⚠️  ${locale}: Contains unreplaced code block placeholders`);
      }
      
      // Check markdown structure
      const headingCount = (content.match(/^#+\s/gm) || []).length;
      console.log(`   - ${headingCount} headings found`);
      
    } catch (error) {
      console.error(`❌ ${locale}: File not found or error reading`);
    }
  }
}

testTranslations();
```

## Next Steps

1. **Set up the directory structure** (Step 1)
2. **Move your current file** (Step 2)
3. **Create metadata** (Step 3)
4. **Implement the loader** (Step 4)
5. **Create the page** (Step 5)
6. **Translate content** (Step 6)
7. **Test translations** (Step 8)

## Need Help?

I can help you:
- ✅ Set up the complete i18n infrastructure
- ✅ Create the firewall config page
- ✅ Set up translation workflows
- ✅ Create automated translation helpers

Just let me know which languages you want to support!
