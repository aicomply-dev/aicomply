# Content Migration Plan: Legacy to New Architecture

**Version**: 1.0  
**Last Updated**: 2024  
**Status**: 🔄 In Progress (~40% Complete)

---

## Executive Summary

**Objective**: Migrate all hardcoded content from `src/lib/data/` to the new external content system in `content/` directory.

**Why**: 
- 8,998-line `modules-data.ts` file is unmaintainable
- Enable non-technical content editing
- Support native multi-locale translations
- Enable organization-specific content customization
- Improve developer experience and build times

**Timeline**: 8-12 weeks (estimated)

**Risk Level**: 🟡 Medium - Requires careful fallback management to avoid breaking production

---

## Current Status

### ✅ Completed (40%)

| Item | Status | Files | Notes |
|------|--------|-------|-------|
| Infrastructure | ✅ Done | - | Content loader with 3-tier resolution implemented |
| Regulation Text | ✅ Done | 118 files | All articles migrated with multi-locale support |
| FAQ System | ✅ Done | 12 files | New content, multi-locale |
| Firewall Config | ✅ Done | 6 files | New content, multi-locale |
| Module Structure | ✅ Done | - | Directory structure created |
| Standards Structure | ✅ Done | 14 folders | Metadata and controls migrated |

### 🔄 In Progress (20%)

| Item | Status | Files | Blockers |
|------|--------|-------|----------|
| Module Content | 🔄 20% | 44 chapters | Need to extract from modules-data.ts |
| Assessment Questions | 🔄 30% | 11 types | Partial migration, dual system active |
| Glossary Terms | 🔄 10% | 8 categories | Structure exists, content in legacy |
| Standard Guidance | 🔄 50% | 14 standards | English done, translations partial |
| Policy Templates | 🔄 40% | 1 template | Structure exists, needs expansion |

### ⏳ Not Started (40%)

| Item | Status | Files | Priority |
|------|--------|-------|----------|
| Procedures | ⏳ 0% | 65 files | 🔴 High |
| Checklists | ⏳ 0% | 32 files | 🔴 High |
| Forms | ⏳ 0% | 36 files | 🔴 High |
| Records | ⏳ 0% | 96 files | 🔴 High |
| Assessment Tools | ⏳ 0% | 16 files | 🟡 Medium |

**Total Content Pieces**: ~450 files  
**Estimated Lines of Code to Migrate**: ~15,000 lines

---

## Migration Phases

## Phase 1: Infrastructure ✅ COMPLETE

**Duration**: 2 weeks  
**Status**: ✅ Complete  
**Effort**: 40 hours

### Completed Tasks

- [x] Design 3-tier content resolution system
- [x] Create `content/` directory structure
- [x] Implement `src/lib/content/loader.ts`
- [x] Update server actions to support dual system
- [x] Add multi-locale file loading
- [x] Create `organizationContent` database table
- [x] Migrate regulation text (118 files)
- [x] Test fallback mechanisms

### Deliverables

✅ Content loader with DB → Files → Legacy fallback  
✅ Multi-locale support (EN, DE, FR, ES, RO)  
✅ `content/` directory with proper structure  
✅ 118 regulation files migrated and tested  

---

## Phase 2: Core Content 🔄 IN PROGRESS

**Duration**: 4 weeks  
**Status**: 🔄 In Progress (Week 2 of 4)  
**Estimated Effort**: 80 hours  
**Current Progress**: 25%

### 2.1 Learning Modules Migration 🔴 CRITICAL

**Priority**: 🔴 Highest  
**Estimated Effort**: 40 hours  
**Progress**: 20% (Structure created, content needs extraction)

#### Tasks

- [x] Create module directory structure
- [x] Define module.json schema
- [x] Define chapter metadata schema
- [ ] **Extract Module 1: AI Act Fundamentals** (8 chapters)
  - [ ] Extract chapter metadata from modules-data.ts
  - [ ] Extract markdown content to individual .md files
  - [ ] Create EN chapters (chapters/en/)
  - [ ] Test loading with content loader
  - [ ] Verify fallback to legacy works
  - **Estimate**: 8 hours
  
- [ ] **Extract Module 2: High-Risk AI Compliance** (12 chapters)
  - [ ] Extract chapter metadata
  - [ ] Extract markdown content
  - [ ] Create EN chapters
  - [ ] Test and verify
  - **Estimate**: 10 hours
  
- [ ] **Extract Module 3: GPAI Compliance** (8 chapters)
  - **Estimate**: 8 hours
  
- [ ] **Extract Module 4: Governance & Penalties** (8 chapters)
  - **Estimate**: 8 hours
  
- [ ] **Extract Module 5: Innovation Pathways** (8 chapters)
  - **Estimate**: 8 hours

- [ ] **Update module loader** to prefer content/ over modules-data.ts
  - [ ] Modify loadModulesFromContent() in src/lib/actions/modules.ts
  - [ ] Add error handling and logging
  - [ ] Test all edge cases
  - **Estimate**: 4 hours

- [ ] **Test complete module system**
  - [ ] Test all 5 modules load correctly
  - [ ] Test chapter navigation
  - [ ] Test quiz functionality
  - [ ] Test progress tracking
  - **Estimate**: 4 hours

**Acceptance Criteria**:
- ✅ All 44 chapters available in content/modules/
- ✅ Content loader prefers new location
- ✅ Legacy modules-data.ts serves as fallback
- ✅ All locales work (EN for now, others later)
- ✅ No regression in module functionality

#### Module Extraction Script

Create `scripts/extract-modules.ts`:
```typescript
import fs from 'fs'
import path from 'path'
import { DEFAULT_MODULES } from '../src/lib/data/modules-data'

for (const module of DEFAULT_MODULES) {
  const moduleDir = path.join(process.cwd(), 'content', 'modules', module.slug)
  
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
    fs.writeFileSync(
      path.join(chaptersDir, `${chapterNum}-${index + 1}.json`),
      JSON.stringify(chapterMeta, null, 2)
    )
    
    // Create chapter content (if lesson)
    if (chapter.type !== 'quiz' && chapter.content) {
      fs.writeFileSync(
        path.join(chaptersDir, `${chapterNum}-${index + 1}.md`),
        chapter.content
      )
    }
  })
}
```

**Run**: `ts-node scripts/extract-modules.ts`

---

### 2.2 Assessment Questions Migration 🟡 MEDIUM

**Priority**: 🟡 Medium  
**Estimated Effort**: 20 hours  
**Progress**: 30% (Structure exists, content partial)

#### Tasks

- [x] Create assessments directory structure
- [x] Define metadata.json and questions.json schemas
- [ ] **Migrate Risk Management Assessment**
  - [ ] Extract questions from assessment-questions.ts
  - [ ] Create metadata.json
  - [ ] Create questions.json
  - [ ] Test assessment flow
  - **Estimate**: 2 hours
  
- [ ] **Migrate remaining 10 assessments** (same process)
  - Data Governance
  - Technical Documentation
  - Human Oversight
  - Transparency
  - Accuracy & Robustness
  - Conformity Assessment
  - High-Risk Classification
  - Limited Risk
  - Prohibited Practices
  - Record Keeping
  - **Estimate**: 15 hours (1.5 hours each)

- [ ] **Update assessment loader**
  - [ ] Modify getAssessmentQuestions() to check content/ first
  - [ ] Add caching for performance
  - **Estimate**: 3 hours

**Acceptance Criteria**:
- ✅ All 11 assessment types in content/assessments/
- ✅ Assessment flow works with new content
- ✅ Backward compatibility with legacy maintained

---

### 2.3 Glossary Migration 🟢 LOW

**Priority**: 🟢 Low  
**Estimated Effort**: 15 hours  
**Progress**: 10%

#### Tasks

- [x] Create glossary directory structure
- [ ] **Migrate English glossary terms**
  - [ ] Extract from glossary-data.ts
  - [ ] Organize by category
  - [ ] Create JSON files per category
  - **Estimate**: 8 hours
  
- [ ] **Add translations** (optional for Phase 2)
  - [ ] French glossary
  - [ ] Spanish glossary
  - [ ] Romanian glossary
  - **Estimate**: 6 hours (can defer to Phase 3)

- [ ] **Update glossary loader**
  - **Estimate**: 1 hour

---

### 2.4 Cleanup After Phase 2

- [ ] **Update modules-data.ts**
  - [ ] Remove hardcoded chapter content (keep structure for types)
  - [ ] Add deprecation comments
  - [ ] Keep as fallback for 1 release cycle
  
- [ ] **Documentation**
  - [ ] Update content editing guide
  - [ ] Create video tutorial for module editing
  - [ ] Document new content structure

- [ ] **Testing**
  - [ ] E2E tests for module system
  - [ ] E2E tests for assessment system
  - [ ] Load testing with new file system

**Phase 2 Milestone**: Core content editable without code changes

---

## Phase 3: Implementation Content ⏳ PLANNED

**Duration**: 3 weeks  
**Status**: ⏳ Not Started  
**Estimated Effort**: 60 hours

### 3.1 Guides Directory Structure

**Priority**: 🔴 High  
**Estimated Effort**: 40 hours

#### Tasks

- [ ] **Create content/guides/ structure**
  ```
  content/guides/
  ├── procedures/
  ├── checklists/
  ├── forms/
  ├── records/
  └── assessment-tools/
  ```
  - **Estimate**: 1 hour

- [ ] **Migrate Procedures (65 files)**
  - [ ] Create migration script for batch processing
  - [ ] Copy PROC-*.md files to content/guides/procedures/
  - [ ] Validate markdown structure
  - [ ] Test procedure loading
  - **Estimate**: 10 hours

- [ ] **Migrate Checklists (32 files)**
  - [ ] Copy CHK-*.md files
  - [ ] Validate checklist format
  - [ ] Test checklist rendering
  - **Estimate**: 5 hours

- [ ] **Migrate Forms (36 files)**
  - [ ] Copy FORM-*.md files
  - [ ] Validate form structure
  - [ ] Test form display
  - **Estimate**: 6 hours

- [ ] **Migrate Records (96 files)**
  - [ ] Copy REC-*.md files
  - [ ] Validate record templates
  - [ ] Test record generation
  - **Estimate**: 12 hours

- [ ] **Migrate Assessment Tools (16 files)**
  - [ ] Copy tool markdown files
  - [ ] Validate tool content
  - [ ] Test tool integration
  - **Estimate**: 3 hours

- [ ] **Update guide loader**
  - [ ] Modify getGuides() in src/lib/actions/guides.ts
  - [ ] Add content/ directory check
  - [ ] Maintain fallback to src/lib/data/guides/
  - **Estimate**: 3 hours

**Migration Script** `scripts/migrate-guides.sh`:
```bash
#!/bin/bash

# Migrate procedures
mkdir -p content/guides/procedures
cp src/lib/data/guides/procedures/*.md content/guides/procedures/

# Migrate checklists
mkdir -p content/guides/checklists
cp src/lib/data/guides/checklists/*.md content/guides/checklists/

# Migrate forms
mkdir -p content/guides/forms
cp src/lib/data/guides/forms/*.md content/guides/forms/

# Migrate records
mkdir -p content/guides/records
cp src/lib/data/guides/records/*.md content/guides/records/

# Migrate assessment tools
mkdir -p content/guides/assessment-tools
cp src/lib/data/guides/assessment-tools/*.md content/guides/assessment-tools/

echo "✅ All guides migrated to content/guides/"
```

**Acceptance Criteria**:
- ✅ All 245 guide files in content/guides/
- ✅ Guide loader checks content/ first
- ✅ All guides render correctly
- ✅ Multi-locale support works

---

### 3.2 Policy Templates

**Priority**: 🟢 Low  
**Estimated Effort**: 10 hours

#### Tasks

- [x] Create policies directory structure
- [ ] **Expand policy templates**
  - [ ] Add risk management policy template
  - [ ] Add data governance policy template
  - [ ] Add human oversight policy template
  - **Estimate**: 6 hours

- [ ] **Add multi-locale policy templates**
  - [ ] Translate AI governance policy (FR, ES, RO)
  - **Estimate**: 3 hours

- [ ] **Update policy loader**
  - **Estimate**: 1 hour

---

### 3.3 Testing & Validation

**Estimated Effort**: 10 hours

- [ ] **Integration testing**
  - [ ] Test all content types load correctly
  - [ ] Test multi-locale fallbacks
  - [ ] Test organization overrides
  - **Estimate**: 4 hours

- [ ] **Performance testing**
  - [ ] Benchmark content loading times
  - [ ] Optimize file reads if needed
  - [ ] Add caching where appropriate
  - **Estimate**: 3 hours

- [ ] **User acceptance testing**
  - [ ] Content team tests editing workflow
  - [ ] Verify non-technical users can edit
  - [ ] Document any pain points
  - **Estimate**: 3 hours

**Phase 3 Milestone**: All implementation content externalized

---

## Phase 4: Cleanup & Optimization ⏳ PLANNED

**Duration**: 1 week  
**Status**: ⏳ Not Started  
**Estimated Effort**: 20 hours

### 4.1 Legacy Code Removal

**Priority**: 🟡 Medium  
**Estimated Effort**: 10 hours

#### Tasks

- [ ] **Archive legacy content**
  - [ ] Remove hardcoded content from modules-data.ts (keep types)
  - [ ] Remove hardcoded content from assessment-questions.ts
  - [ ] Remove glossary-data.ts content
  - [ ] Remove files from src/lib/data/guides/
  - [ ] Remove files from src/lib/data/regulation/
  - [ ] Remove files from src/lib/data/standards/
  - **Estimate**: 4 hours

- [ ] **Update imports**
  - [ ] Find all imports of removed files
  - [ ] Update to use content loader
  - [ ] Remove dead code
  - **Estimate**: 3 hours

- [ ] **Cleanup type definitions**
  - [ ] Keep only type interfaces in src/lib/data/
  - [ ] Move content-related types to appropriate places
  - [ ] Update exports
  - **Estimate**: 2 hours

- [ ] **Git cleanup**
  - [ ] Remove large legacy files from history (optional)
  - [ ] Update .gitignore if needed
  - **Estimate**: 1 hour

**Expected Outcome**: ~10,000 lines of code removed

---

### 4.2 Documentation

**Priority**: 🔴 High  
**Estimated Effort**: 8 hours

#### Tasks

- [ ] **Content Editing Guide**
  - [ ] Create guide for non-technical users
  - [ ] Document content structure
  - [ ] Explain multi-locale workflow
  - [ ] Add screenshots/examples
  - **Estimate**: 4 hours

- [ ] **Developer Documentation**
  - [ ] Update ARCHITECTURE.md (mark migration complete)
  - [ ] Document content loader API
  - [ ] Add troubleshooting section
  - **Estimate**: 2 hours

- [ ] **Video Tutorials**
  - [ ] Record module editing tutorial
  - [ ] Record translation workflow tutorial
  - [ ] Record organization customization tutorial
  - **Estimate**: 2 hours

---

### 4.3 Performance Optimization

**Priority**: 🟢 Low  
**Estimated Effort**: 2 hours

#### Tasks

- [ ] **Add content caching**
  - [ ] Cache frequently accessed content
  - [ ] Implement cache invalidation strategy
  - **Estimate**: 1 hour

- [ ] **Optimize file reads**
  - [ ] Batch file reads where possible
  - [ ] Use streaming for large files
  - **Estimate**: 1 hour

**Phase 4 Milestone**: Migration complete, legacy code removed

---

## Risk Management

### High-Risk Items 🔴

| Risk | Impact | Likelihood | Mitigation |
|------|--------|------------|------------|
| **Content loss during migration** | High | Low | - Always test fallback<br>- Keep legacy code for 1 release<br>- Backup content/ directory |
| **Breaking production** | High | Medium | - Gradual rollout<br>- Feature flags<br>- Comprehensive testing |
| **Module functionality regression** | High | Low | - E2E tests<br>- Manual QA testing<br>- Beta user testing |
| **Translation errors** | Medium | Medium | - Native speaker review<br>- Translation tools<br>- Community feedback |

### Medium-Risk Items 🟡

| Risk | Impact | Likelihood | Mitigation |
|------|--------|------------|------------|
| **Performance degradation** | Medium | Low | - Benchmark before/after<br>- Implement caching<br>- Monitor production metrics |
| **Content format inconsistencies** | Medium | Medium | - Schema validation<br>- Automated tests<br>- Content linting |
| **Timeline overrun** | Medium | Medium | - Buffer time in estimates<br>- Prioritize critical items<br>- Parallel work where possible |

### Rollback Plan

If critical issues occur:

1. **Immediate**: Revert to legacy code (feature flag flip)
2. **Short-term**: Fix content/ files, test, redeploy
3. **Long-term**: Keep legacy system for 2 releases minimum

---

## Testing Strategy

### Unit Tests

- [ ] Content loader unit tests
- [ ] Multi-locale fallback tests
- [ ] Organization override tests
- [ ] File parsing tests

### Integration Tests

- [ ] Module loading integration tests
- [ ] Assessment flow integration tests
- [ ] Guide rendering integration tests

### E2E Tests

- [ ] Complete module walkthrough
- [ ] Assessment completion flow
- [ ] Content editing workflow
- [ ] Multi-locale switching

### Performance Tests

- [ ] Content loading benchmarks
- [ ] Large file handling
- [ ] Concurrent user load testing

---

## Success Metrics

### Technical Metrics

- ✅ 0 hardcoded content lines in TypeScript files
- ✅ 100% content in external files
- ✅ < 50ms average content load time
- ✅ 0 production incidents during migration
- ✅ 100% test coverage for content system

### User Metrics

- ✅ Non-technical users can edit content without developer help
- ✅ Content updates deploy without code changes
- ✅ Translation workflow takes < 2 hours per module
- ✅ Organization customization works seamlessly

### Business Metrics

- ✅ Reduced developer time for content updates (80% reduction)
- ✅ Faster content iteration (from weeks to hours)
- ✅ More frequent content updates (target: weekly)

---

## Timeline & Milestones

```
Week 1-2:  Phase 1 ✅ COMPLETE
           └─ Infrastructure & regulation migration

Week 3-6:  Phase 2 🔄 IN PROGRESS (Currently Week 4)
           ├─ Module content extraction (Weeks 3-4)
           ├─ Assessment migration (Week 5)
           └─ Glossary migration (Week 6)

Week 7-9:  Phase 3 ⏳ PLANNED
           ├─ Guides migration (Weeks 7-8)
           └─ Testing & validation (Week 9)

Week 10:   Phase 4 ⏳ PLANNED
           ├─ Cleanup & optimization
           └─ Documentation & training

Week 11-12: Buffer & Polish
           └─ Final testing, bug fixes, optimization
```

**Target Completion**: End of Week 12

---

## Resource Allocation

### Development Team

- **Lead Developer**: 40 hours (architecture, complex migrations)
- **Developer 1**: 80 hours (module/assessment migration)
- **Developer 2**: 60 hours (guides migration, testing)
- **Content Team**: 20 hours (validation, documentation)

**Total**: ~200 hours (~5 weeks at 40h/week)

### Tools & Infrastructure

- TypeScript/Node.js scripts for automation
- Git for version control
- VS Code for content editing
- Vitest for testing
- Vercel preview deployments for testing

---

## Communication Plan

### Weekly Updates

- **Monday**: Sprint planning, assign tasks
- **Wednesday**: Mid-week sync, blocker discussion
- **Friday**: Demo completed work, retrospective

### Stakeholders

- **Development Team**: Daily standup
- **Content Team**: Weekly review
- **Product Owner**: Weekly milestone review
- **Users**: Release notes on completion

---

## Post-Migration Plan

### Monitoring

- [ ] Set up content loading metrics
- [ ] Monitor error rates for content system
- [ ] Track content update frequency
- [ ] Measure developer time savings

### Maintenance

- [ ] Schedule quarterly content audit
- [ ] Update translations as content changes
- [ ] Keep documentation current
- [ ] Monitor community feedback

### Future Enhancements

- [ ] Content CMS UI (web-based editing)
- [ ] Automated translation integration
- [ ] Content versioning system
- [ ] A/B testing for content variations

---

## Appendix

### A. Migration Commands

```bash
# Extract modules from modules-data.ts
npm run extract-modules

# Migrate guides
./scripts/migrate-guides.sh

# Validate content structure
npm run validate-content

# Test content loading
npm run test:content

# Build with new system
npm run build

# Deploy preview
vercel --prod
```

### B. Content File Templates

See `docs/content-templates/` for:
- module.json template
- chapter.json template
- assessment metadata template
- guide frontmatter template

### C. Troubleshooting Guide

See `docs/ARCHITECTURE.md` → "Troubleshooting: Content System Issues"

---

**Document Version**: 1.0  
**Last Updated**: 2024  
**Next Review**: After Phase 2 completion
