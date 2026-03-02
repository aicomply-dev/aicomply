# Guides Directory - MIGRATED

**⚠️ This directory has been migrated!**

All guide markdown files have been moved to: **`content/guides/`**

## Migration Details

- **Date**: December 16, 2024
- **Files Migrated**: 237 markdown files
- **Destination**: `/content/guides/`
- **Backup**: `.archive/legacy-data/guides-full-backup/`

## New Structure

```
content/guides/
├── procedures/       (65 files)
├── checklists/       (32 files)
├── forms/            (36 files)
├── records/          (88 files)
└── assessment-tools/ (16 files)
```

## Guide Loading

Guides are now loaded via:
- **`src/lib/actions/guides.ts`** - Server actions
- **`src/lib/content/loader.ts`** - Content loader

The loader checks:
1. `content/guides/` (NEW)
2. `src/lib/data/guides/` (LEGACY fallback)

## Editing Guides

To edit guides, navigate to:
- `content/guides/procedures/PROC-AI-*.md`
- `content/guides/checklists/CHK-AI-*.md`
- `content/guides/forms/FORM-AI-*.md`
- `content/guides/records/REC-AI-*.md`

No code changes or rebuilding required!

---

**See**: `docs/MIGRATION_COMPLETE.md` for full migration report
