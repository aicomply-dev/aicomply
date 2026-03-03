# Migration Quick Start Guide

**For developers starting content migration work**

---

## 🚀 Getting Started in 5 Minutes

### 1. Understand the Current State

```bash
# Check overall progress
cat docs/MIGRATION_STATUS.md

# Read detailed plan
cat docs/CONTENT_MIGRATION_PLAN.md

# Review architecture
cat docs/ARCHITECTURE.md | grep -A 50 "Content Management System"
```

**Key Points**:
- We're migrating from `src/lib/data/` (hardcoded) to `content/` (external files)
- Currently 40% complete (Phase 2 in progress)
- Using 3-tier system: Database → Files → Legacy fallback

---

### 2. Set Up Your Environment

```bash
# Install dependencies
npm install

# Create content directories (if needed)
mkdir -p content/modules
mkdir -p content/assessments
mkdir -p content/glossary
mkdir -p content/guides

# Run dev server
npm run dev
```

---

### 3. Pick a Task

Check [CONTENT_MIGRATION_PLAN.md](./CONTENT_MIGRATION_PLAN.md) Phase 2 for current tasks.

**Recommended starting points** (easiest to hardest):

#### 🟢 Easy: Migrate an Assessment (2 hours)
```bash
# 1. Look at existing structure
ls content/assessments/

# 2. Find assessment in legacy code
grep -A 50 "riskManagementQuestions" src/lib/data/assessment-questions.ts

# 3. Create new files
mkdir content/assessments/risk-management
touch content/assessments/risk-management/metadata.json
touch content/assessments/risk-management/questions.json

# 4. Extract content (see example below)
# 5. Test it loads
npm run dev
# Visit: http://localhost:3000/assess/gap-analysis
```

#### 🟡 Medium: Migrate a Module Chapter (4 hours)
```bash
# Use extraction script (to be created)
npm run extract-modules
```

#### 🔴 Hard: Create Module Extraction Script (8 hours)
See [CONTENT_MIGRATION_PLAN.md](./CONTENT_MIGRATION_PLAN.md) Section 2.1

---

## 📝 Migration Patterns

### Pattern 1: Simple File Copy

**Use for**: Guides, procedures, checklists, forms, records

```bash
# Example: Migrating a procedure
cp src/lib/data/guides/procedures/PROC-AI-RM-001_FINAL.md \
   content/guides/procedures/PROC-AI-RM-001_FINAL.md

# Verify it loads
npm run dev
```

### Pattern 2: Extract from TypeScript

**Use for**: Modules, assessments, glossary

**Before** (in `src/lib/data/assessment-questions.ts`):
```typescript
export const riskManagementQuestions = {
  title: "Risk Management Assessment",
  questions: [
    {
      id: "rm-1",
      question: "Do you have a risk management system?",
      // ...
    }
  ]
}
```

**After** (in `content/assessments/risk-management/`):

`metadata.json`:
```json
{
  "id": "risk-management",
  "title": "Risk Management Assessment",
  "category": "technical",
  "estimatedDuration": 20
}
```

`questions.json`:
```json
{
  "questions": [
    {
      "id": "rm-1",
      "question": "Do you have a risk management system?",
      "type": "yes_no_na",
      "article": "Article 9",
      "weight": 1.0
    }
  ]
}
```

### Pattern 3: Multi-Locale Content

**Use for**: Content that needs translation

```bash
# Create base English content
touch content/modules/ai-act-fundamentals/chapters/en/00-1.md

# Create localized versions
touch content/modules/ai-act-fundamentals/chapters/fr/00-1.md
touch content/modules/ai-act-fundamentals/chapters/es/00-1.md
touch content/modules/ai-act-fundamentals/chapters/ro/00-1.md

# Loader will fallback: fr → en → legacy
```

---

## 🧪 Testing Your Migration

### 1. Test Content Loads

```bash
# Start dev server
npm run dev

# Open browser
# Navigate to the page that uses your content
# Verify it displays correctly
```

### 2. Test Fallback Works

```bash
# Temporarily rename your new content file
mv content/assessments/risk-management content/assessments/risk-management.bak

# Reload page - should still work (using legacy)
# Restore file
mv content/assessments/risk-management.bak content/assessments/risk-management

# Reload page - should use new content
```

### 3. Test Multi-Locale

```bash
# Visit English version
http://localhost:3000/en/path

# Visit French version (should fallback to English if not translated)
http://localhost:3000/fr/path

# Check browser console for any errors
```

### 4. Run Tests

```bash
# Run unit tests
npm test

# Run specific test file
npm test content-loader.test.ts
```

---

## 🛠️ Useful Scripts

### Create Module Extraction Script

Create `scripts/extract-modules.ts`:

```typescript
import fs from 'fs'
import path from 'path'
import { DEFAULT_MODULES } from '../src/lib/data/modules-data'

console.log('🚀 Starting module extraction...')

for (const module of DEFAULT_MODULES) {
  console.log(`📦 Processing: ${module.slug}`)
  
  const moduleDir = path.join(process.cwd(), 'content', 'modules', module.slug)
  fs.mkdirSync(moduleDir, { recursive: true })
  
  // Create module.json
  const metadata = {
    title: module.title,
    description: module.description,
    category: module.category,
    difficulty: module.difficulty,
    duration: module.duration,
    order: module.order
  }
  
  fs.writeFileSync(
    path.join(moduleDir, 'module.json'),
    JSON.stringify(metadata, null, 2)
  )
  
  // Extract chapters
  const chapters = JSON.parse(module.chapters)
  const chaptersDir = path.join(moduleDir, 'chapters', 'en')
  fs.mkdirSync(chaptersDir, { recursive: true })
  
  chapters.forEach((chapter: any, index: number) => {
    const chapterNum = index.toString().padStart(2, '0')
    
    // Create chapter metadata
    const chapterMeta = {
      id: chapter.id,
      title: chapter.title,
      type: chapter.type,
      duration: chapter.duration
    }
    
    const metaPath = path.join(chaptersDir, `${chapterNum}-${index + 1}.json`)
    fs.writeFileSync(metaPath, JSON.stringify(chapterMeta, null, 2))
    console.log(`  ✅ Created: ${metaPath}`)
    
    // Create chapter content (if lesson)
    if (chapter.type !== 'quiz' && chapter.content) {
      const contentPath = path.join(chaptersDir, `${chapterNum}-${index + 1}.md`)
      fs.writeFileSync(contentPath, chapter.content)
      console.log(`  ✅ Created: ${contentPath}`)
    }
  })
  
  console.log(`✅ Completed: ${module.slug}\n`)
}

console.log('🎉 All modules extracted!')
```

Add to `package.json`:
```json
{
  "scripts": {
    "extract-modules": "ts-node scripts/extract-modules.ts"
  }
}
```

Run it:
```bash
npm run extract-modules
```

---

### Migrate Guides Script

Create `scripts/migrate-guides.sh`:

```bash
#!/bin/bash

echo "🚀 Starting guide migration..."

# Create directories
mkdir -p content/guides/procedures
mkdir -p content/guides/checklists
mkdir -p content/guides/forms
mkdir -p content/guides/records
mkdir -p content/guides/assessment-tools

# Copy files
echo "📋 Migrating procedures..."
cp src/lib/data/guides/procedures/*.md content/guides/procedures/
echo "✅ Migrated $(ls src/lib/data/guides/procedures/*.md | wc -l) procedures"

echo "📋 Migrating checklists..."
cp src/lib/data/guides/checklists/*.md content/guides/checklists/
echo "✅ Migrated $(ls src/lib/data/guides/checklists/*.md | wc -l) checklists"

echo "📋 Migrating forms..."
cp src/lib/data/guides/forms/*.md content/guides/forms/
echo "✅ Migrated $(ls src/lib/data/guides/forms/*.md | wc -l) forms"

echo "📋 Migrating records..."
cp src/lib/data/guides/records/*.md content/guides/records/
echo "✅ Migrated $(ls src/lib/data/guides/records/*.md | wc -l) records"

echo "📋 Migrating assessment tools..."
cp src/lib/data/guides/assessment-tools/*.md content/guides/assessment-tools/
echo "✅ Migrated $(ls src/lib/data/guides/assessment-tools/*.md | wc -l) tools"

echo "🎉 All guides migrated!"
```

Make executable and run:
```bash
chmod +x scripts/migrate-guides.sh
./scripts/migrate-guides.sh
```

---

### Validate Content Script

Create `scripts/validate-content.ts`:

```typescript
import fs from 'fs'
import path from 'path'

const contentDir = path.join(process.cwd(), 'content')

function validateJSON(filePath: string): boolean {
  try {
    const content = fs.readFileSync(filePath, 'utf-8')
    JSON.parse(content)
    return true
  } catch (e) {
    console.error(`❌ Invalid JSON: ${filePath}`)
    console.error(e)
    return false
  }
}

function validateMarkdown(filePath: string): boolean {
  try {
    const content = fs.readFileSync(filePath, 'utf-8')
    if (content.length === 0) {
      console.warn(`⚠️  Empty file: ${filePath}`)
      return false
    }
    return true
  } catch (e) {
    console.error(`❌ Cannot read: ${filePath}`)
    return false
  }
}

function walkDir(dir: string) {
  const files = fs.readdirSync(dir)
  
  files.forEach(file => {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)
    
    if (stat.isDirectory()) {
      walkDir(filePath)
    } else if (file.endsWith('.json')) {
      validateJSON(filePath)
    } else if (file.endsWith('.md')) {
      validateMarkdown(filePath)
    }
  })
}

console.log('🔍 Validating content files...')
walkDir(contentDir)
console.log('✅ Validation complete!')
```

Add to `package.json`:
```json
{
  "scripts": {
    "validate-content": "ts-node scripts/validate-content.ts"
  }
}
```

---

## 🐛 Common Issues & Solutions

### Issue: "Module not found"

**Cause**: Content file doesn't exist yet

**Solution**: Check if content exists in both locations:
```bash
# Check new location
ls content/modules/ai-act-fundamentals/

# Check legacy location
grep "ai-act-fundamentals" src/lib/data/modules-data.ts
```

### Issue: "Invalid JSON"

**Cause**: Syntax error in JSON file

**Solution**: Validate JSON
```bash
# Use jq to validate
cat content/assessments/risk-management/metadata.json | jq .

# Or use online validator
# Copy JSON to https://jsonlint.com/
```

### Issue: "Content not updating"

**Cause**: Next.js cache

**Solution**: Clear cache
```bash
rm -rf .next/
npm run dev
```

### Issue: "Wrong locale loading"

**Cause**: Locale file doesn't exist, using fallback

**Solution**: Create locale-specific file or check fallback works
```bash
# Create French version
cp content/modules/.../chapters/en/00-1.md \
   content/modules/.../chapters/fr/00-1.md

# Edit for French translation
```

---

## 📚 References

- **Detailed Plan**: [CONTENT_MIGRATION_PLAN.md](./CONTENT_MIGRATION_PLAN.md)
- **Current Status**: [MIGRATION_STATUS.md](./MIGRATION_STATUS.md)
- **Architecture**: [ARCHITECTURE.md](./ARCHITECTURE.md)
- **Content Loader Code**: `src/lib/content/loader.ts`
- **Module Actions**: `src/lib/actions/modules.ts`

---

## 💬 Getting Help

1. **Check existing documentation** (above)
2. **Review similar migrations** (look at regulation/ or faq/)
3. **Ask in team chat** with:
   - What you're trying to migrate
   - What error you're getting
   - What you've tried so far
4. **Create an issue** if it's a bug

---

## ✅ Checklist Before Starting

- [ ] Read this quick start guide
- [ ] Understand 3-tier content system
- [ ] Have dev environment running
- [ ] Know which content type to migrate
- [ ] Have tested fallback system works
- [ ] Know how to validate your changes

**Ready?** Pick a task from [CONTENT_MIGRATION_PLAN.md](./CONTENT_MIGRATION_PLAN.md) and get started! 🚀
