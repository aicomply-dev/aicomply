# AI Act Extraction Summary

## Overview
Successfully extracted 27 sections from the AI Act document into individual markdown files for training purposes.

**Source File:** `/Users/danielminda/Documents/1AI_UDEMY_TRAINING/AIACT/aiact.md` (648 KB, 7,768 lines)
**Output Directory:** `/Users/danielminda/Documents/1AI_UDEMY_TRAINING/AIACT/sections/`
**Total Files Created:** 27 files
**Total Size:** 696 KB

---

## Extracted Sections

### Preamble
| File | Lines | Size | Description |
|------|-------|------|-------------|
| 01_preamble.md | 61-1142 (1,082 lines) | 223 KB | Preamble with "Whereas" clauses explaining rationale and legal context |

### Main Chapters
| File | Lines | Size | Description |
|------|-------|------|-------------|
| 02_chapter_01_general_provisions.md | 1145-1758 (614 lines) | 24 KB | Scope and definitions |
| 03_chapter_02_prohibited_ai_practices.md | 1759-1878 (120 lines) | 11 KB | Banned AI practices |
| 04_chapter_03_high_risk_ai_systems.md | 1879-3472 (1,594 lines) | 107 KB | High-risk AI requirements (largest chapter) |
| 05_chapter_04_transparency_obligations.md | 3473-3496 (24 lines) | 5.0 KB | Transparency requirements |
| 06_chapter_05_general_purpose_ai_models.md | 3497-3734 (238 lines) | 17 KB | GPAI and foundation models |
| 07_chapter_06_innovation_support.md | 3735-4192 (458 lines) | 31 KB | Regulatory sandboxes |
| 08_chapter_07_governance.md | 4193-4536 (344 lines) | 18 KB | Governance structure |
| 09_chapter_08_eu_database.md | 4537-4556 (20 lines) | 2.6 KB | EU database registration |
| 10_chapter_09_post_market_monitoring.md | 4557-5106 (550 lines) | 46 KB | Post-market monitoring |
| 11_chapter_10_codes_of_conduct.md | 5107-5200 (94 lines) | 4.2 KB | Voluntary codes |
| 12_chapter_11_delegation_of_power.md | 5201-5228 (28 lines) | 3.0 KB | Delegated powers |
| 13_chapter_12_penalties.md | 5229-5462 (234 lines) | 11 KB | Fines and penalties |
| 14_chapter_13_final_provisions.md | 5463-5860 (398 lines) | 29 KB | Implementation timelines |

### Annexes
| File | Lines | Size | Description |
|------|-------|------|-------------|
| 15_annex_01_union_harmonisation.md | 5861-5970 (110 lines) | 6.2 KB | EU harmonisation legislation |
| 16_annex_02_criminal_offences.md | 5971-6072 (102 lines) | 1.3 KB | Criminal offences list |
| 17_annex_03_high_risk_systems.md | 6073-6272 (200 lines) | 7.7 KB | High-risk use cases (critical) |
| 18_annex_04_technical_documentation.md | 6273-6428 (156 lines) | 6.1 KB | Technical documentation requirements |
| 19_annex_05_eu_declaration.md | 6429-6482 (54 lines) | 1.7 KB | Declaration of conformity template |
| 20_annex_06_conformity_internal_control.md | 6483-6510 (28 lines) | 1.0 KB | Internal control assessment |
| 21_annex_07_conformity_quality_management.md | 6511-6675 (165 lines) | 8.2 KB | Quality management assessment |
| 22_annex_08_registration_information.md | 6676-6853 (178 lines) | 4.4 KB | Registration information |
| 23_annex_09_real_world_testing.md | 6854-6889 (36 lines) | 1.2 KB | Real-world testing plan |
| 24_annex_10_large_scale_it_systems.md | 6890-6967 (78 lines) | 5.5 KB | Large-scale IT systems |
| 25_annex_11_gpai_technical_documentation.md | 6968-7077 (110 lines) | 3.4 KB | GPAI technical documentation |
| 26_annex_12_gpai_transparency.md | 7078-7161 (84 lines) | 1.9 KB | GPAI transparency information |
| 27_annex_13_systemic_risk_criteria.md | 7162-7768 (607 lines) | 59 KB | Systemic risk criteria |

---

## Key Sections for Training

### Priority 1 - Essential (Core Compliance)
1. **Chapter I** (02) - Definitions and scope
2. **Chapter II** (03) - Prohibited practices
3. **Chapter III** (04) - High-risk AI systems (largest section)
4. **Annex III** (17) - High-risk use cases list
5. **Chapter XII** (13) - Penalties and fines

### Priority 2 - Implementation
6. **Chapter V** (06) - GPAI models
7. **Chapter IX** (10) - Post-market monitoring
8. **Annex IV** (18) - Technical documentation
9. **Annex VIII** (22) - Registration requirements
10. **Chapter XIII** (14) - Implementation timelines

### Priority 3 - Specialized Topics
11. **Chapter IV** (05) - Transparency obligations
12. **Chapter VI** (07) - Innovation support (sandboxes)
13. **Chapter VII** (08) - Governance
14. **Annexes XI-XIII** (25-27) - GPAI specific requirements

---

## Training Notes Included

Each file includes:
- **Descriptive markdown header** for the section
- **Training note** explaining the relevance for compliance training
- **Full text** of the section extracted from the source document

## Extraction Method

Used `sed -n 'START,ENDp'` command for efficient line-range extraction from the large source file (648 KB), avoiding memory issues with full file reads.

---

**Generated:** October 19, 2025
**Source:** EU AI Act (Regulation EU 2024/1689)
