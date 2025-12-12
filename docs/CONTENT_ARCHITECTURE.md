# AI Comply Content Architecture

This document explains how the content system works in AI Comply, enabling organizations to customize their EU AI Act compliance content without modifying application code.

## Overview

AI Comply uses a **3-tier content resolution system** that allows organizations to customize content at multiple levels:

```
┌─────────────────────────────────────────────────────────────────┐
│                     APPLICATION LAYER                           │
│              (React Components - Never Changes)                 │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│                    SERVER ACTIONS LAYER                         │
│         (Handles Content Resolution with Org Fallback)          │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────┬─────────────────────────┬─────────────────────────┐
│   TIER 1    │        TIER 2           │        TIER 3           │
│  ORG DB     │    DEFAULT CONTENT      │    STATIC FALLBACK      │
│ (Highest    │     (/content/)         │    (TypeScript)         │
│  Priority)  │    JSON/MD Files        │    Built-in Data        │
└─────────────┴─────────────────────────┴─────────────────────────┘
```

## Content Resolution Order

When the application needs content, it resolves in this order:

1. **Organization Database Override** (Highest Priority)
   - Custom content stored in `organization_content` table
   - Unique per organization via `organization_id`
   - Enables per-client customization

2. **Default Content Files** (`/content/` directory)
   - JSON and Markdown files
   - Base content that ships with the application
   - Can be modified for self-hosted deployments

3. **Static TypeScript Fallback** (`/src/lib/data/`)
   - Original hardcoded content
   - Ensures application always has content
   - Never modified at runtime

## Content Directory Structure

```
/content/
├── modules/                    # Learning modules
│   ├── index.json             # Module index with metadata
│   └── {slug}/                # One folder per module
│       ├── module.json        # Module metadata
│       └── chapters/          # Chapter content
│           ├── 00-chapter-id.json   # Chapter metadata
│           ├── 00-chapter-id.md     # Chapter content (lessons)
│           └── 06-quiz.json         # Quiz chapters (questions embedded)
│
├── assessments/               # Compliance assessments
│   ├── index.json            # Assessment sections index
│   └── {section-id}/         # One folder per section
│       ├── metadata.json     # Section title, article reference
│       └── questions.json    # Assessment questions array
│
├── standards/                 # Compliance standards
│   ├── index.json            # Standards index
│   └── {std-ai-xxx}/         # One folder per standard
│       ├── metadata.json     # Standard metadata
│       ├── standard.json     # Full standard data
│       ├── controls.json     # Control requirements
│       └── guidance.md       # Implementation guidance
│
├── glossary/                  # Terminology glossary
│   ├── index.json            # Category index
│   ├── terms.json            # All terms (flat array)
│   └── {category}.json       # Terms grouped by category
│
└── faq/                       # Frequently asked questions
    ├── index.json            # FAQ metadata
    ├── categories.json       # FAQ categories
    └── faqs.json             # All FAQ entries
```

## Database Schema for Organization Overrides

The `organization_content` table stores organization-specific content overrides:

```sql
CREATE TABLE organization_content (
    id TEXT PRIMARY KEY,
    organization_id TEXT NOT NULL REFERENCES organization(id) ON DELETE CASCADE,
    content_type TEXT NOT NULL,      -- 'module', 'assessment', 'standard', 'glossary', 'faq'
    content_id TEXT NOT NULL,        -- Identifier for specific content item
    content TEXT NOT NULL,           -- JSON content
    is_customized BOOLEAN DEFAULT TRUE,
    version TEXT DEFAULT '1.0',
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),
    UNIQUE(organization_id, content_type, content_id)
);
```

## How to Customize Content

### Option 1: Modify Default Content Files (Self-Hosted Deployments)

For organizations hosting their own instance, edit files in the `/content/` directory:

**Example: Adding a Custom FAQ**

1. Edit `/content/faq/faqs.json`:
```json
[
  {
    "id": "custom-faq-1",
    "question": "How does our organization handle AI governance?",
    "answer": "Our organization follows...",
    "category": "general"
  }
]
```

2. Update `/content/faq/categories.json` if adding new categories.

3. Restart the application to load changes.

### Option 2: Database Overrides (Multi-Tenant / Per-Organization)

For per-organization customization, insert records into `organization_content`:

**Example: Custom Assessment Questions for Organization**

```sql
INSERT INTO organization_content (
    id,
    organization_id,
    content_type,
    content_id,
    content
) VALUES (
    'org-content-001',
    'your-org-id',
    'assessment',
    'prohibited-practices',  -- Section ID
    '[
        {
            "id": "custom-q1",
            "question": "Does your AI system use subliminal techniques?",
            "description": "Custom description...",
            "category": "prohibited",
            "article": "Article 5",
            "weight": 10,
            "answerType": "yes-no-na",
            "options": [
                {"value": "yes", "label": "Yes", "score": 0},
                {"value": "no", "label": "No", "score": 100},
                {"value": "na", "label": "N/A", "score": 100}
            ],
            "guidance": "Custom guidance text..."
        }
    ]'
);
```

**Example: Custom Glossary Terms**

```sql
INSERT INTO organization_content (
    id,
    organization_id,
    content_type,
    content_id,
    content
) VALUES (
    'org-content-002',
    'your-org-id',
    'glossary',
    'all',
    '[
        {
            "id": "custom-term-1",
            "term": "Internal AI System",
            "definition": "Our internal definition...",
            "category": "core-concepts",
            "article": "Internal Policy",
            "related": ["ai-system", "high-risk-ai"]
        }
    ]'
);
```

### Option 3: Admin API (Coming Soon)

A future admin interface will allow organizations to:
- Upload custom content via web UI
- Edit existing content in-place
- Preview changes before publishing
- Track content versions

## Content Types Reference

### Modules (`content_type: 'module'`)

| content_id | Description |
|------------|-------------|
| `index` | All modules index |
| `{module-slug}` | Specific module (e.g., `ai-act-fundamentals`) |

**Module JSON Structure:**
```json
{
    "slug": "ai-act-fundamentals",
    "title": "AI Act Fundamentals",
    "description": "Learn the basics...",
    "category": "fundamentals",
    "difficulty": "beginner",
    "duration": 60,
    "order": 1,
    "chapters": "[...]"  // JSON string of chapters array
}
```

### Assessments (`content_type: 'assessment'`)

| content_id | Description |
|------------|-------------|
| `index` | Assessment sections index |
| `all-questions` | All questions (flat array) |
| `{section-id}` | Specific section (e.g., `prohibited-practices`) |

**Available Section IDs:**
- `prohibited-practices` (Article 5)
- `high-risk-classification` (Article 6)
- `limited-risk` (Article 50)
- `risk-management` (Article 9)
- `data-governance` (Article 10)
- `technical-documentation` (Article 11)
- `record-keeping` (Article 12)
- `transparency` (Article 13)
- `human-oversight` (Article 14)
- `accuracy-robustness` (Article 15)
- `conformity-assessment` (Article 43)

**Question JSON Structure:**
```json
{
    "id": "pp-001",
    "question": "Does your AI system...",
    "description": "Additional context...",
    "category": "prohibited",
    "subcategory": "subliminal-techniques",
    "article": "Article 5",
    "weight": 10,
    "riskTrigger": true,
    "answerType": "yes-no-na",
    "options": [
        {"value": "yes", "label": "Yes", "score": 0},
        {"value": "no", "label": "No", "score": 100},
        {"value": "na", "label": "N/A", "score": 100}
    ],
    "guidance": "Implementation guidance...",
    "evidenceRequired": ["Policy documents"],
    "followUp": ["pp-002"]
}
```

### Standards (`content_type: 'standard'`)

| content_id | Description |
|------------|-------------|
| `all` | All standards array |
| `std-ai-001` through `std-ai-014` | Individual standards |

**Standard JSON Structure:**
```json
{
    "id": "std-ai-001",
    "standardId": "STD-AI-001",
    "title": "AI System Classification Standard",
    "shortTitle": "Classification",
    "description": "Defines requirements...",
    "version": "1.0",
    "effectiveDate": "2025-08-01",
    "owner": "AI Act Program Manager",
    "euAiActArticles": ["Article 5", "Article 6"],
    "category": "classification",
    "status": "draft",
    "progress": 45,
    "controls": [...]
}
```

### Glossary (`content_type: 'glossary'`)

| content_id | Description |
|------------|-------------|
| `all` | All glossary terms |
| `{category}` | Terms by category |

**Available Categories:**
- `core-concepts`
- `risk-categories`
- `compliance-requirements`
- `technical-requirements`
- `documentation`
- `oversight-governance`
- `assessment-certification`
- `regulatory-framework`
- `prohibited-practices`
- `deployment-usage`

**Term JSON Structure:**
```json
{
    "id": "ai-system",
    "term": "AI System",
    "definition": "A machine-based system...",
    "category": "core-concepts",
    "article": "Article 3(1)",
    "related": ["general-purpose-ai", "high-risk-ai"],
    "examples": ["Chatbots", "Image recognition"],
    "keyPoints": ["Must be machine-based", "Processes inputs"]
}
```

### FAQ (`content_type: 'faq'`)

| content_id | Description |
|------------|-------------|
| `index` | FAQ metadata (counts) |
| `categories` | Category definitions |
| `all` | All FAQs |

**FAQ JSON Structure:**
```json
{
    "id": "faq-001",
    "question": "What is the EU AI Act?",
    "answer": "The EU AI Act is...",
    "category": "general"
}
```

## Server Actions Reference

The following server actions handle content loading with organization fallback:

### `/src/lib/actions/content.ts`
- `loadModulesIndex()` - Load modules list
- `loadModuleBySlug(slug)` - Load specific module
- `loadGlossaryTerms()` - Load all glossary terms
- `loadGlossaryCategories()` - Load glossary categories
- `loadFAQIndex()` - Load FAQ metadata
- `loadFAQs()` - Load all FAQs

### `/src/lib/actions/assessments.ts`
- `getAllQuestions()` - Load all assessment questions
- `getSectionById(sectionId)` - Load specific section
- `getAssessmentSections()` - Load sections index

### `/src/lib/actions/standards.ts`
- `getStandards()` - Load all standards
- `getStandardById(id)` - Load specific standard
- `getStandardContent(id)` - Load standard guidance markdown

## Best Practices

### 1. Content Versioning
Always update the `version` field when modifying content:
```sql
UPDATE organization_content
SET version = '1.1', updated_at = NOW()
WHERE id = 'your-content-id';
```

### 2. Content Validation
Before inserting custom content, validate JSON structure matches expected format. Invalid JSON will cause the application to fall back to default content.

### 3. Testing Customizations
1. Insert your custom content
2. Clear application cache (restart if needed)
3. Access the relevant page as a user from that organization
4. Verify custom content appears

### 4. Backup Strategy
Export organization content before major updates:
```sql
SELECT * FROM organization_content
WHERE organization_id = 'your-org-id';
```

### 5. Content IDs
- Use consistent, lowercase IDs
- Match existing content ID patterns
- Document custom IDs for your organization

## Troubleshooting

### Content Not Appearing
1. Verify `organization_id` matches the logged-in user's organization
2. Check JSON is valid (use a JSON validator)
3. Ensure `content_type` and `content_id` are correct
4. Restart the application to clear caches

### Falling Back to Defaults
If your custom content isn't loading:
1. Check database connection
2. Verify record exists with correct `organization_id`
3. Check application logs for parsing errors

### Performance Considerations
- Organization overrides add database queries
- Content files are read at request time
- Consider caching for high-traffic deployments

## Migration from Hardcoded Content

If you previously customized content in TypeScript files:

1. Export your customizations to JSON format
2. Place in `/content/` directory OR insert into `organization_content`
3. Remove TypeScript modifications
4. Test thoroughly before deployment

## Support

For questions about content customization:
- GitHub Issues: https://github.com/anthropics/claude-code/issues
- Documentation: Check `/docs/` directory for additional guides
