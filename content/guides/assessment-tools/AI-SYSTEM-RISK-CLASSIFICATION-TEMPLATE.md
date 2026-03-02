# AI System Risk Classification Template

## Document Information

| Field | Value |
|-------|-------|
| **Document ID** | TOOL-CLS-001 |
| **Version** | 1.0 |
| **Status** | Ready to Use |
| **Owner** | AI Act Program Manager |
| **Last Updated** | 2024-12-01 |

## Purpose

This template provides a structured approach to classifying AI systems according to EU AI Act risk levels. Use this decision tree and documentation template to ensure consistent, defensible classification decisions.

---

## EU AI Act Risk Levels

| Risk Level | Description | Key Requirements |
|------------|-------------|------------------|
| **Prohibited** | AI practices that are banned outright | Cannot be placed on market or used |
| **High-Risk** | AI systems in Annex III areas or safety components | Full Chapter 2 compliance required |
| **Limited Risk** | AI systems with transparency obligations | Article 50 transparency requirements |
| **Minimal Risk** | All other AI systems | Voluntary codes of conduct |

---

## Classification Decision Tree

### Step 1: Prohibited Practices Check (Article 5)

Does the AI system involve any of the following?

| # | Prohibited Practice | Check |
|---|---------------------|-------|
| 1.1 | Subliminal manipulation causing harm | [ ] Yes [ ] No |
| 1.2 | Exploitation of vulnerabilities (age, disability, social situation) | [ ] Yes [ ] No |
| 1.3 | Social scoring by public authorities | [ ] Yes [ ] No |
| 1.4 | Real-time remote biometric identification in public spaces (law enforcement) | [ ] Yes [ ] No |
| 1.5 | Untargeted scraping for facial recognition databases | [ ] Yes [ ] No |
| 1.6 | Emotion recognition in workplace/education (except safety/medical) | [ ] Yes [ ] No |
| 1.7 | Biometric categorization inferring sensitive attributes | [ ] Yes [ ] No |
| 1.8 | Individual predictive policing based solely on profiling | [ ] Yes [ ] No |

**If ANY box is checked YES** → **PROHIBITED** (Stop here)
**If ALL boxes are NO** → Proceed to Step 2

---

### Step 2: Annex I Product Legislation Check

Is the AI system a safety component of, or itself a product covered by:

| # | EU Legislation | Check |
|---|----------------|-------|
| 2.1 | Machinery Regulation (EU) 2023/1230 | [ ] Yes [ ] No |
| 2.2 | Toy Safety Directive 2009/48/EC | [ ] Yes [ ] No |
| 2.3 | Medical Devices Regulation (EU) 2017/745 | [ ] Yes [ ] No |
| 2.4 | In Vitro Diagnostic Regulation (EU) 2017/746 | [ ] Yes [ ] No |
| 2.5 | Civil Aviation Regulation (EU) 2018/1139 | [ ] Yes [ ] No |
| 2.6 | Motor Vehicles Regulation (EU) 2019/2144 | [ ] Yes [ ] No |
| 2.7 | Other Annex I legislation | [ ] Yes [ ] No |

**If ANY box is checked YES** → **HIGH-RISK** (Third-party conformity assessment required)
**If ALL boxes are NO** → Proceed to Step 3

---

### Step 3: Annex III High-Risk Areas Check

Does the AI system fall into any Annex III category?

#### 3.1 Biometrics

| Use Case | Check |
|----------|-------|
| Remote biometric identification | [ ] Yes [ ] No |
| Biometric categorization by sensitive attributes | [ ] Yes [ ] No |
| Emotion recognition | [ ] Yes [ ] No |

#### 3.2 Critical Infrastructure

| Use Case | Check |
|----------|-------|
| Safety component in critical infrastructure management | [ ] Yes [ ] No |
| Road traffic management | [ ] Yes [ ] No |
| Water, gas, heating, electricity supply | [ ] Yes [ ] No |

#### 3.3 Education and Vocational Training

| Use Case | Check |
|----------|-------|
| Determining access to education | [ ] Yes [ ] No |
| Assessing learning outcomes | [ ] Yes [ ] No |
| Assessing appropriate level of education | [ ] Yes [ ] No |
| Monitoring prohibited behavior during tests | [ ] Yes [ ] No |

#### 3.4 Employment and Workers Management

| Use Case | Check |
|----------|-------|
| Recruitment or selection | [ ] Yes [ ] No |
| Decisions on promotion or termination | [ ] Yes [ ] No |
| Task allocation based on behavior/traits | [ ] Yes [ ] No |
| Monitoring or evaluating performance | [ ] Yes [ ] No |

#### 3.5 Essential Services Access

| Use Case | Check |
|----------|-------|
| Creditworthiness assessment | [ ] Yes [ ] No |
| Risk assessment for life/health insurance | [ ] Yes [ ] No |
| Eligibility for public benefits | [ ] Yes [ ] No |
| Emergency services dispatch | [ ] Yes [ ] No |

#### 3.6 Law Enforcement

| Use Case | Check |
|----------|-------|
| Risk assessment of natural persons | [ ] Yes [ ] No |
| Polygraphs or similar tools | [ ] Yes [ ] No |
| Evaluation of evidence reliability | [ ] Yes [ ] No |
| Profiling during investigation | [ ] Yes [ ] No |

#### 3.7 Migration, Asylum, Border Control

| Use Case | Check |
|----------|-------|
| Polygraphs or similar tools | [ ] Yes [ ] No |
| Risk assessment (security, health, irregular migration) | [ ] Yes [ ] No |
| Examination of applications | [ ] Yes [ ] No |
| Detection/identification of persons | [ ] Yes [ ] No |

#### 3.8 Administration of Justice

| Use Case | Check |
|----------|-------|
| Researching/interpreting facts and law | [ ] Yes [ ] No |
| Applying law to facts | [ ] Yes [ ] No |
| Alternative dispute resolution | [ ] Yes [ ] No |

**If ANY box is checked YES** → **HIGH-RISK**
**If ALL boxes are NO** → Proceed to Step 4

---

### Step 4: Limited Risk (Transparency) Check (Article 50)

Does the AI system involve any of the following?

| # | Transparency Trigger | Check |
|---|---------------------|-------|
| 4.1 | Direct interaction with natural persons (chatbots, virtual assistants) | [ ] Yes [ ] No |
| 4.2 | Generation of synthetic audio, image, video, or text content | [ ] Yes [ ] No |
| 4.3 | Emotion recognition or biometric categorization | [ ] Yes [ ] No |
| 4.4 | Deep fakes or manipulated content | [ ] Yes [ ] No |

**If ANY box is checked YES** → **LIMITED RISK** (Article 50 transparency obligations apply)
**If ALL boxes are NO** → **MINIMAL RISK**

---

## Classification Documentation Template

### System Information

| Field | Entry |
|-------|-------|
| **AI System Name** | |
| **System ID** | |
| **Version** | |
| **Description** | |
| **Intended Purpose** | |
| **Classification Date** | |
| **Classifier** | |

### Classification Result

| Field | Entry |
|-------|-------|
| **Risk Level** | [ ] Prohibited [ ] High-Risk [ ] Limited [ ] Minimal |
| **Classification Basis** | |
| **Annex I Applicable** | [ ] Yes [ ] No |
| **Annex III Category** | |
| **Article 50 Applicable** | [ ] Yes [ ] No |

### Supporting Evidence

| Evidence Type | Document Reference |
|---------------|-------------------|
| System description | |
| Intended use documentation | |
| Technical specifications | |
| Legal review (if applicable) | |

### Approval

| Field | Entry |
|-------|-------|
| **Approved By** | |
| **Approval Date** | |
| **Next Review Date** | |

---

## Classification Review Triggers

Reclassification should be considered when:

- [ ] Intended purpose changes
- [ ] New use cases are added
- [ ] Substantial modifications are made
- [ ] Regulatory guidance is updated
- [ ] Annual review is due

---

## Related Documents

- [Classification Procedure](../procedures/PROC-AI-CLS-001_FINAL.md)
- [Classification Form](../forms/FORM-AI-CLS-001_FINAL.md)
- [Role Determination Process](./AI-ACT-ROLE-DETERMINATION-PROCESS.md)

---

## Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2024-12-01 | AI Act Program Manager | Initial release |
