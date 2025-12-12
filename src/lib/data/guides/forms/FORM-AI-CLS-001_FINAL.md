# FORM-AI-CLS-001: AI System Classification Form

**Form ID:** FORM-AI-CLS-001
**Form Name:** AI System Classification Form
**Version:** 1.0
**Effective Date:** [To be filled]
**Related Standard:** STD-AI-001: AI System Classification Standard
**Related Procedure:** PROC-AI-CLS-001: AI Classification Procedure

---

## Purpose

This form is used to document the risk classification of AI systems under the EU AI Act. Complete this form for all AI systems before development or deployment to determine the applicable regulatory requirements.

## Instructions

1. Complete all sections in order
2. Provide supporting evidence for classification decisions
3. Obtain required approvals based on classification outcome
4. Retain completed form for minimum 10 years (high-risk systems)

---

## SECTION 1: AI SYSTEM IDENTIFICATION

| Field | Entry |
|-------|-------|
| **AI System Name** | |
| **AI System ID** | |
| **Version/Release** | |
| **Date of Assessment** | |
| **Assessor Name** | |
| **Assessor Role** | |
| **AI System Owner** | |
| **Business Unit** | |

---

## SECTION 2: AI SYSTEM DESCRIPTION

### 2.1 Intended Purpose
*Describe the intended purpose of the AI system per EU AI Act Article 3(12)*

| Field | Entry |
|-------|-------|
| **Primary Function** | |
| **Problem Being Solved** | |
| **Key Outputs/Decisions** | |

### 2.2 Technical Description
| Field | Entry |
|-------|-------|
| **AI Technology Type** | [ ] Machine Learning [ ] Deep Learning [ ] NLP [ ] Computer Vision [ ] Expert System [ ] Other: _____ |
| **Model Type** | [ ] Classification [ ] Regression [ ] Clustering [ ] Generative [ ] Reinforcement Learning [ ] Other: _____ |
| **Deployment Mode** | [ ] On-premise [ ] Cloud [ ] Edge [ ] Hybrid |

### 2.3 Users and Affected Persons
| Field | Entry |
|-------|-------|
| **Target Users** | |
| **Affected Natural Persons** | |
| **Estimated Number Affected** | |
| **Geographical Scope** | [ ] EU Only [ ] EU + Other [ ] Global |

---

## SECTION 3: PROHIBITED PRACTICE SCREENING (Article 5)

*All AI systems must first be screened for prohibited practices. If ANY item below is checked "Yes", the AI system is PROHIBITED and cannot proceed.*

### 3.1 Prohibited Practices Assessment

| # | Prohibited Practice | Yes | No | Evidence/Notes |
|---|---------------------|-----|-----|----------------|
| 3.1.1 | Does the system deploy subliminal, manipulative, or deceptive techniques to materially distort behavior causing significant harm? | [ ] | [ ] | |
| 3.1.2 | Does the system exploit vulnerabilities of persons due to age, disability, or social/economic situation? | [ ] | [ ] | |
| 3.1.3 | Does the system evaluate or classify natural persons based on social behavior or personal characteristics (social scoring) leading to detrimental treatment? | [ ] | [ ] | |
| 3.1.4 | Does the system assess or predict the risk of a natural person committing a criminal offense solely based on profiling or personality traits? | [ ] | [ ] | |
| 3.1.5 | Does the system create or expand facial recognition databases through untargeted scraping? | [ ] | [ ] | |
| 3.1.6 | Does the system infer emotions in workplace or education settings (except medical or safety)? | [ ] | [ ] | |
| 3.1.7 | Does the system categorize natural persons based on biometric data to deduce race, political opinions, trade union membership, religious beliefs, sex life or sexual orientation? | [ ] | [ ] | |
| 3.1.8 | Does the system enable real-time remote biometric identification in publicly accessible spaces for law enforcement (except narrow exceptions)? | [ ] | [ ] | |

### 3.2 Prohibited Practice Determination

| Field | Entry |
|-------|-------|
| **Any "Yes" answers above?** | [ ] Yes → **SYSTEM IS PROHIBITED** [ ] No → Proceed to Section 4 |
| **If Prohibited, Rationale** | |
| **Reviewer Signature** | |
| **Review Date** | |

**If the system is PROHIBITED, do not proceed. Document decision and archive.**

---

## SECTION 4: HIGH-RISK ASSESSMENT - ANNEX I (Product Safety)

*Assess whether the AI system is a safety component of, or is itself, a product covered by EU harmonization legislation listed in Annex I.*

### 4.1 Annex I Product Legislation Check

| # | EU Legislation | Applicable? | If Yes, Describe Relevance |
|---|----------------|-------------|---------------------------|
| 4.1.1 | Machinery Regulation (EU) 2023/1230 | [ ] Yes [ ] No | |
| 4.1.2 | Toy Safety Directive 2009/48/EC | [ ] Yes [ ] No | |
| 4.1.3 | Recreational Craft Directive 2013/53/EU | [ ] Yes [ ] No | |
| 4.1.4 | Lifts Directive 2014/33/EU | [ ] Yes [ ] No | |
| 4.1.5 | Equipment for Use in Potentially Explosive Atmospheres (ATEX) 2014/34/EU | [ ] Yes [ ] No | |
| 4.1.6 | Radio Equipment Directive 2014/53/EU | [ ] Yes [ ] No | |
| 4.1.7 | Pressure Equipment Directive 2014/68/EU | [ ] Yes [ ] No | |
| 4.1.8 | Cableway Installations Regulation (EU) 2016/424 | [ ] Yes [ ] No | |
| 4.1.9 | Personal Protective Equipment Regulation (EU) 2016/425 | [ ] Yes [ ] No | |
| 4.1.10 | Gas Appliances Regulation (EU) 2016/426 | [ ] Yes [ ] No | |
| 4.1.11 | Medical Devices Regulation (EU) 2017/745 | [ ] Yes [ ] No | |
| 4.1.12 | In Vitro Diagnostic Medical Devices Regulation (EU) 2017/746 | [ ] Yes [ ] No | |
| 4.1.13 | Civil Aviation Safety Regulation (EU) 2018/1139 | [ ] Yes [ ] No | |
| 4.1.14 | Motor Vehicles Type-approval Regulation (EU) 2019/2144 | [ ] Yes [ ] No | |
| 4.1.15 | Rail Interoperability Directive (EU) 2016/797 | [ ] Yes [ ] No | |
| 4.1.16 | Marine Equipment Directive 2014/90/EU | [ ] Yes [ ] No | |

### 4.2 Annex I Determination

| Field | Entry |
|-------|-------|
| **Is the AI system covered by Annex I legislation?** | [ ] Yes → **HIGH-RISK** (requires third-party conformity assessment) [ ] No → Proceed to Section 5 |
| **Applicable Legislation** | |
| **Is AI a safety component?** | [ ] Yes [ ] No |
| **Conformity Assessment Path** | [ ] Third-party required [ ] Self-assessment allowed |

---

## SECTION 5: HIGH-RISK ASSESSMENT - ANNEX III (Use Cases)

*Assess whether the AI system falls within any of the high-risk use cases listed in Annex III.*

### 5.1 Biometrics (Annex III, Point 1)

| # | Use Case | Applicable? | Evidence/Notes |
|---|----------|-------------|----------------|
| 5.1.1 | Remote biometric identification systems (excluding verification) | [ ] Yes [ ] No | |
| 5.1.2 | Biometric categorization by sensitive attributes | [ ] Yes [ ] No | |
| 5.1.3 | Emotion recognition systems | [ ] Yes [ ] No | |

### 5.2 Critical Infrastructure (Annex III, Point 2)

| # | Use Case | Applicable? | Evidence/Notes |
|---|----------|-------------|----------------|
| 5.2.1 | Safety component in management/operation of critical digital infrastructure | [ ] Yes [ ] No | |
| 5.2.2 | Safety component in road traffic | [ ] Yes [ ] No | |
| 5.2.3 | Safety component in water, gas, heating, electricity supply | [ ] Yes [ ] No | |

### 5.3 Education and Vocational Training (Annex III, Point 3)

| # | Use Case | Applicable? | Evidence/Notes |
|---|----------|-------------|----------------|
| 5.3.1 | Determining access to or admission to educational institutions | [ ] Yes [ ] No | |
| 5.3.2 | Assigning persons to educational institutions or programs | [ ] Yes [ ] No | |
| 5.3.3 | Assessing students in educational institutions | [ ] Yes [ ] No | |
| 5.3.4 | Assessing appropriate level of education for individuals | [ ] Yes [ ] No | |
| 5.3.5 | Monitoring/detecting prohibited behavior during tests | [ ] Yes [ ] No | |

### 5.4 Employment, Workers Management (Annex III, Point 4)

| # | Use Case | Applicable? | Evidence/Notes |
|---|----------|-------------|----------------|
| 5.4.1 | Recruitment or selection (advertising, filtering, evaluating candidates) | [ ] Yes [ ] No | |
| 5.4.2 | Decisions on promotion, termination, task allocation, monitoring, or evaluating work performance | [ ] Yes [ ] No | |

### 5.5 Access to Essential Services (Annex III, Point 5)

| # | Use Case | Applicable? | Evidence/Notes |
|---|----------|-------------|----------------|
| 5.5.1 | Evaluating eligibility for public assistance benefits/services | [ ] Yes [ ] No | |
| 5.5.2 | Creditworthiness assessment (excluding fraud detection) | [ ] Yes [ ] No | |
| 5.5.3 | Risk assessment and pricing in life/health insurance | [ ] Yes [ ] No | |
| 5.5.4 | Evaluating and classifying emergency calls (911/112) | [ ] Yes [ ] No | |
| 5.5.5 | Dispatching emergency first response services | [ ] Yes [ ] No | |

### 5.6 Law Enforcement (Annex III, Point 6)

| # | Use Case | Applicable? | Evidence/Notes |
|---|----------|-------------|----------------|
| 5.6.1 | Individual risk assessment for offending/re-offending | [ ] Yes [ ] No | |
| 5.6.2 | Polygraphs and similar tools | [ ] Yes [ ] No | |
| 5.6.3 | Evaluating reliability of evidence in criminal investigations | [ ] Yes [ ] No | |
| 5.6.4 | Predicting occurrence/reoccurrence of criminal offense | [ ] Yes [ ] No | |
| 5.6.5 | Profiling in crime detection/investigation/prosecution | [ ] Yes [ ] No | |
| 5.6.6 | Crime analytics for searching large datasets | [ ] Yes [ ] No | |

### 5.7 Migration, Asylum, Border Control (Annex III, Point 7)

| # | Use Case | Applicable? | Evidence/Notes |
|---|----------|-------------|----------------|
| 5.7.1 | Polygraphs and similar tools for migration purposes | [ ] Yes [ ] No | |
| 5.7.2 | Assessing irregular migration risks | [ ] Yes [ ] No | |
| 5.7.3 | Examining applications for asylum/visa/residence permits | [ ] Yes [ ] No | |
| 5.7.4 | Detecting/recognizing/identifying persons in migration context | [ ] Yes [ ] No | |

### 5.8 Administration of Justice (Annex III, Point 8)

| # | Use Case | Applicable? | Evidence/Notes |
|---|----------|-------------|----------------|
| 5.8.1 | Assisting judicial authorities in researching/interpreting facts and law | [ ] Yes [ ] No | |
| 5.8.2 | Applying law to concrete set of facts | [ ] Yes [ ] No | |
| 5.8.3 | Alternative dispute resolution | [ ] Yes [ ] No | |
| 5.8.4 | Influencing outcome of elections/referendums or voting behavior | [ ] Yes [ ] No | |

### 5.9 Annex III Determination

| Field | Entry |
|-------|-------|
| **Any "Yes" answers in Section 5?** | [ ] Yes → **HIGH-RISK** [ ] No → Proceed to Section 6 |
| **Applicable High-Risk Category** | |

---

## SECTION 6: LIMITED-RISK ASSESSMENT (Transparency Obligations)

*If not high-risk, assess for limited-risk transparency obligations.*

### 6.1 Limited-Risk Triggers (Article 50)

| # | Trigger | Applicable? | Evidence/Notes |
|---|---------|-------------|----------------|
| 6.1.1 | System designed to interact directly with natural persons | [ ] Yes [ ] No | |
| 6.1.2 | System generates synthetic audio, image, video, or text content | [ ] Yes [ ] No | |
| 6.1.3 | System performs emotion recognition | [ ] Yes [ ] No | |
| 6.1.4 | System performs biometric categorization | [ ] Yes [ ] No | |

### 6.2 Limited-Risk Determination

| Field | Entry |
|-------|-------|
| **Any "Yes" answers?** | [ ] Yes → **LIMITED-RISK** (Transparency obligations apply) [ ] No → **MINIMAL-RISK** |
| **Required Transparency Measures** | |

---

## SECTION 7: GPAI MODEL ASSESSMENT

*Complete only if the AI system incorporates or is a General-Purpose AI (GPAI) model.*

### 7.1 GPAI Determination

| # | Question | Response | Evidence/Notes |
|---|----------|----------|----------------|
| 7.1.1 | Does the system incorporate a GPAI model? | [ ] Yes [ ] No | |
| 7.1.2 | Is the GPAI model capable of performing a wide range of tasks? | [ ] Yes [ ] No | |
| 7.1.3 | Was the model trained on broad data at scale using self-supervision? | [ ] Yes [ ] No | |
| 7.1.4 | Does the GPAI model have systemic risk? (>10^25 FLOP training compute or Commission designation) | [ ] Yes [ ] No | |

### 7.2 GPAI Classification

| Field | Entry |
|-------|-------|
| **GPAI Classification** | [ ] Not GPAI [ ] GPAI without systemic risk [ ] GPAI with systemic risk |
| **GPAI Provider Compliance Confirmed?** | [ ] Yes [ ] No [ ] N/A |

---

## SECTION 8: CLASSIFICATION SUMMARY

### 8.1 Final Classification

| Classification | Selected | Basis |
|----------------|----------|-------|
| **PROHIBITED** | [ ] | Section 3 - Prohibited practice identified |
| **HIGH-RISK** | [ ] | Section 4 - Annex I product safety legislation |
| **HIGH-RISK** | [ ] | Section 5 - Annex III high-risk use case |
| **LIMITED-RISK** | [ ] | Section 6 - Transparency obligations apply |
| **MINIMAL-RISK** | [ ] | No specific obligations (voluntary codes) |

### 8.2 Classification Details

| Field | Entry |
|-------|-------|
| **Final Classification** | |
| **Primary Basis for Classification** | |
| **Applicable EU AI Act Articles** | |
| **Required Conformity Assessment** | [ ] Third-party [ ] Self-assessment [ ] None |

### 8.3 Applicable Requirements Summary

| Requirement Category | Applicable? | Notes |
|---------------------|-------------|-------|
| Risk Management System | [ ] Yes [ ] No | |
| Data Governance | [ ] Yes [ ] No | |
| Technical Documentation | [ ] Yes [ ] No | |
| Record-Keeping/Logging | [ ] Yes [ ] No | |
| Transparency | [ ] Yes [ ] No | |
| Human Oversight | [ ] Yes [ ] No | |
| Accuracy, Robustness, Cybersecurity | [ ] Yes [ ] No | |
| CE Marking | [ ] Yes [ ] No | |
| EU Database Registration | [ ] Yes [ ] No | |
| Conformity Assessment | [ ] Yes [ ] No | |

---

## SECTION 9: EVIDENCE AND DOCUMENTATION

### 9.1 Supporting Documentation

| # | Document | Reference/Location | Attached |
|---|----------|-------------------|----------|
| 1 | System description/specifications | | [ ] Yes [ ] No |
| 2 | Technical architecture | | [ ] Yes [ ] No |
| 3 | Intended purpose statement | | [ ] Yes [ ] No |
| 4 | User/affected persons analysis | | [ ] Yes [ ] No |
| 5 | Legal/regulatory analysis | | [ ] Yes [ ] No |
| 6 | Other: | | [ ] Yes [ ] No |

---

## SECTION 10: APPROVALS

### 10.1 Assessment Approval

| Role | Name | Signature | Date |
|------|------|-----------|------|
| **Assessor** | | | |
| **AI Compliance Officer** | | | |
| **AI Risk Manager** | | | |

### 10.2 Classification Approval (High-Risk Only)

| Role | Name | Signature | Date |
|------|------|-----------|------|
| **AI Governance Committee Representative** | | | |
| **Legal Counsel** | | | |

---

## SECTION 11: REVIEW AND UPDATE

### 11.1 Classification Review Schedule

| Field | Entry |
|-------|-------|
| **Next Scheduled Review Date** | |
| **Review Triggers** | [ ] Significant functionality change [ ] Intended purpose change [ ] Regulatory change [ ] Periodic review |

### 11.2 Classification History

| Version | Date | Classification | Reason for Change | Approved By |
|---------|------|----------------|-------------------|-------------|
| 1.0 | | | Initial classification | |
| | | | | |
| | | | | |

---

**End of Form**
