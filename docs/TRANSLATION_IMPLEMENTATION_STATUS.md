# Assessment Questions Translation Implementation Status

## Overview

The assessment questions file has been restructured to support multi-language translations for French (FR), Spanish (ES), and Romanian (RO).

## What Has Been Completed

### 1. Type System Updates
- Added `LocalizedString` type with support for `en`, `fr`, `es`, `ro`
- Updated `AssessmentQuestion` interface to use `LocalizedString` for:
  - `question`
  - `description`
  - `guidance`
  - `evidenceRequired` (array of LocalizedString)
  - `options.label` (for multiple choice questions)
- Updated `AssessmentSection` interface for:
  - `title`
  - `description`

### 2. Helper Function
Created a `t()` helper function for clean translation syntax:
```typescript
function t(en: string, fr: string, es: string, ro: string): LocalizedString {
  return { en, fr, es, ro }
}
```

### 3. Translated Sections

#### PROHIBITED_PRACTICES_QUESTIONS (Complete - 20/20 questions)
All 20 prohibited practices questions have been fully translated including:
- Social Scoring (3 questions)
- Subliminal Manipulation (3 questions)
- Exploitation of Vulnerabilities (3 questions)
- Real-time Remote Biometric Identification (4 questions)
- Emotion Recognition in Workplace/Education (3 questions)
- Biometric Categorization (2 questions)
- Facial Recognition Databases (1 question)
- Predictive Policing (1 question)

#### HIGH_RISK_CLASSIFICATION_QUESTIONS (1/69 questions)
- Sample translation provided for `highrisk_annex1_1`
- **Remaining: 68 questions need translation**

#### ASSESSMENT_SECTIONS (2/11 sections)
- Prohibited Practices (Complete)
- High-Risk Classification (Structure only)
- **Remaining: 9 sections need titles and descriptions**

## What Needs to Be Completed

### Remaining Question Categories (Not yet translated)

1. **HIGH_RISK_CLASSIFICATION_QUESTIONS** (68 remaining)
   - Annex I questions (2 more)
   - Biometrics questions (3)
   - Critical Infrastructure (2)
   - Education (4)
   - Employment (3)
   - Essential Services (4)
   - Law Enforcement (5)
   - Migration/Border Control (4)
   - Administration of Justice (3)
   - Exceptions (4)

2. **LIMITED_RISK_QUESTIONS** (5 questions)
   - Transparency obligations

3. **RISK_MANAGEMENT_QUESTIONS** (14 questions)
   - Risk management system requirements

4. **DATA_GOVERNANCE_QUESTIONS** (12 questions)
   - Data governance practices

5. **TECHNICAL_DOCUMENTATION_QUESTIONS** (10 questions)
   - Documentation requirements

6. **RECORD_KEEPING_QUESTIONS** (8 questions)
   - Logging and traceability

7. **TRANSPARENCY_REQUIREMENTS_QUESTIONS** (10 questions)
   - Transparency and information to deployers

8. **HUMAN_OVERSIGHT_QUESTIONS** (11 questions)
   - Human oversight mechanisms

9. **ACCURACY_ROBUSTNESS_QUESTIONS** (10 questions)
   - Accuracy, robustness, and cybersecurity

10. **CONFORMITY_ASSESSMENT_QUESTIONS** (15 questions)
    - Conformity assessment and QMS

### Remaining Assessment Sections (9 sections)

Need to add translated titles and descriptions for:
1. Limited Risk & Transparency Obligations
2. Risk Management System
3. Data and Data Governance
4. Technical Documentation
5. Record-Keeping and Logging
6. Transparency and Information to Deployers
7. Human Oversight
8. Accuracy, Robustness and Cybersecurity
9. Conformity Assessment

## Translation Pattern to Follow

For each question, use this structure:

```typescript
{
  id: "question_id",
  question: t(
    "English question text",
    "Texte de la question en français",
    "Texto de la pregunta en español",
    "Textul întrebării în română"
  ),
  description: t(
    "English description",
    "Description en français",
    "Descripción en español",
    "Descriere în română"
  ),
  category: "category-name",
  subcategory: "subcategory-name",
  article: "Article X",
  weight: 10,
  riskTrigger: "prohibited",
  answerType: "yes_no",
  guidance: t(
    "English guidance",
    "Conseils en français",
    "Orientación en español",
    "Îndrumare în română"
  ),
  evidenceRequired: [
    t(
      "Evidence item 1",
      "Élément de preuve 1",
      "Elemento de evidencia 1",
      "Element de probă 1"
    ),
    t(
      "Evidence item 2",
      "Élément de preuve 2",
      "Elemento de evidencia 2",
      "Element de probă 2"
    )
  ],
}
```

## Translation Quality Guidelines

### French (Français)
- Use formal "vous" form for questions
- Technical terms: système d'IA, données biométriques, apprentissage automatique
- Legal terms: interdit, à haut risque, conformité

### Spanish (Español)
- Use formal "usted" form (implicit in verb conjugation)
- Technical terms: sistema de IA, datos biométricos, aprendizaje automático
- Legal terms: prohibido, alto riesgo, cumplimiento

### Romanian (Română)
- Use formal addressing
- Technical terms: sistem de IA, date biometrice, învățare automată
- Legal terms: interzis, risc ridicat, conformitate

## Key Technical Terms Reference

| English | French | Spanish | Romanian |
|---------|--------|---------|----------|
| AI system | système d'IA | sistema de IA | sistem de IA |
| High-risk | à haut risque | alto riesgo | risc ridicat |
| Prohibited | interdit | prohibido | interzis |
| Biometric data | données biométriques | datos biométricos | date biometrice |
| Assessment | évaluation | evaluación | evaluare |
| Compliance | conformité | cumplimiento | conformitate |
| Documentation | documentation | documentación | documentație |
| Risk management | gestion des risques | gestión de riesgos | gestionarea riscurilor |
| Data governance | gouvernance des données | gobernanza de datos | guvernarea datelor |
| Human oversight | surveillance humaine | supervisión humana | supraveghere umană |
| Transparency | transparence | transparencia | transparență |

## File Location

`/var/www/aicomply/ai-act-platform/src/lib/data/assessment-questions.ts`

## Estimated Completion Effort

- **Completed**: 20 questions (PROHIBITED_PRACTICES)
- **Remaining**: ~178 questions across 10 categories
- **Estimated time**: 10-15 hours for professional translation
- **Recommended approach**: Work category by category, validate technical/legal terms with EU AI Act official translations

## Usage in Application

Once complete, components can access translations like:

```typescript
import { getQuestionById } from '@/lib/data/assessment-questions'
import { useLocale } from '@/hooks/use-locale'

const locale = useLocale() // 'en' | 'fr' | 'es' | 'ro'
const question = getQuestionById('prohibited_1')
const translatedText = question.question[locale]
```

## Next Steps

1. Complete HIGH_RISK_CLASSIFICATION_QUESTIONS translations (68 questions)
2. Translate remaining 8 question categories (110 questions total)
3. Complete ASSESSMENT_SECTIONS translations (9 sections)
4. Review all translations for consistency and accuracy
5. Test with actual application components
6. Validate technical and legal terminology with subject matter experts
