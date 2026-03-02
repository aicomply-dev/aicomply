# Regulation Translation Guide

This directory contains the EU AI Act regulation text organized by locale.

## Directory Structure

```
content/regulation/
├── en/    - English (source language)
├── es/    - Spanish
├── de/    - German
├── fr/    - French
└── ro/    - Romanian
```

## File Naming

All files maintain the same name across locales:
- `00_title_and_introduction.md`
- `01_preamble.md`
- `15_annex_01_union_harmonisation.md`
- etc.

## Translation Priority

The system loads files in this order:
1. `content/regulation/{locale}/{fileName}` - Locale-specific file
2. `content/regulation/en/{fileName}` - English fallback
3. `src/lib/data/regulation/{fileName}` - Legacy fallback

## Files to Translate

Total: 31 markdown files

### Foundation Documents
- `00_title_and_introduction.md`
- `01_preamble.md`

### Chapters (I-XIII)
- `02_chapter_01_general_provisions.md`
- `03_chapter_02_prohibited_ai_practices.md`
- `04_chapter_03_high_risk_ai_systems.md`
- `05_chapter_04_transparency_obligations.md`
- `06_chapter_05_general_purpose_ai_models.md`
- `07_chapter_06_innovation_support.md`
- `08_chapter_07_governance.md`
- `09_chapter_08_eu_database.md`
- `10_chapter_09_post_market_monitoring.md`
- `11_chapter_10_codes_of_conduct.md`
- `12_chapter_11_delegation_of_power.md`
- `13_chapter_12_penalties.md`
- `14_chapter_13_final_provisions.md`

### Annexes (I-XIII)
- `15_annex_01_union_harmonisation.md`
- `16_annex_02_criminal_offences.md`
- `17_annex_03_high_risk_systems.md`
- `18_annex_04_technical_documentation.md`
- `19_annex_05_eu_declaration.md`
- `20_annex_06_conformity_internal_control.md`
- `21_annex_07_conformity_quality_management.md`
- `22_annex_08_registration_information.md`
- `23_annex_09_real_world_testing.md`
- `24_annex_10_large_scale_it_systems.md`
- `25_annex_11_gpai_technical_documentation.md`
- `26_annex_12_gpai_transparency.md`
- `27_annex_13_systemic_risk_criteria.md`

## Translation Tips

1. **Preserve Markdown Structure**: Keep all markdown formatting (headers, lists, links, etc.)
2. **Maintain Legal Accuracy**: This is official legal text - ensure translations are accurate
3. **Keep Article Numbers**: Article references (e.g., "Article 3(1)") should remain in English format
4. **Preserve Links**: Keep URLs and link structures intact
5. **Training Notes**: Translate training notes but keep them clearly marked

## Status Tracking

Use this checklist to track translation progress:

### Spanish (es)
- [ ] 00_title_and_introduction.md
- [ ] 01_preamble.md
- [ ] All chapters (02-14)
- [ ] All annexes (15-27)

### German (de)
- [ ] 00_title_and_introduction.md
- [ ] 01_preamble.md
- [ ] All chapters (02-14)
- [ ] All annexes (15-27)

### French (fr)
- [ ] 00_title_and_introduction.md
- [ ] 01_preamble.md
- [ ] All chapters (02-14)
- [ ] All annexes (15-27)

### Romanian (ro)
- [ ] 00_title_and_introduction.md
- [ ] 01_preamble.md
- [ ] All chapters (02-14)
- [ ] All annexes (15-27)
