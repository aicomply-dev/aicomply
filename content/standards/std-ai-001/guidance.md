# AI System Classification Standard

**Document Type:** Standard  
**Standard ID:** STD-AI-001  
**Standard Title:** AI System Classification Standard  
**Version:** 1.0  
**Effective Date:** 2025-08-01  
**Next Review Date:** 2026-08-01  
**Review Frequency:** Annually or upon regulatory change  
**Parent Policy:** POL-AI-001 - Artificial Intelligence Policy  
**Owner:** AI Act Program Manager  
**Approved By:** AI Governance Committee Chair  
**Status:** Draft  
**Classification:** Internal Use Only

---

## TABLE OF CONTENTS

1. [Document History](#document-history)
2. [Objective](#objective)
3. [Scope and Applicability](#scope-and-applicability)
4. [Control Standard](#control-standard)
5. [Supporting Procedures](#supporting-procedures)
6. [Compliance](#compliance)
7. [Roles and Responsibilities](#roles-and-responsibilities)
8. [Exceptions](#exceptions)
9. [Enforcement](#enforcement)
10. [Key Performance Indicators (KPIs)](#key-performance-indicators-kpis)
11. [Training Requirements](#training-requirements)
12. [Definitions](#definitions)
13. [Link with AI Act and ISO42001](#link-with-ai-act-and-iso42001)

---

## DOCUMENT HISTORY

| Version | Date | Author | Changes | Approval Date | Approved By |
|---------|------|--------|---------|---------------|-------------|
| 0.1 | 2025-06-15 | Sarah Johnson, AI Act Program Manager | Initial draft | - | - |
| 0.2 | 2025-07-01 | Sarah Johnson, AI Act Program Manager | Incorporated stakeholder feedback | - | - |
| 0.3 | 2025-07-20 | Sarah Johnson, AI Act Program Manager | Added Annex III details | - | - |
| 1.0 | 2025-08-01 | Sarah Johnson, AI Act Program Manager | Final version approved | 2025-07-25 | Jane Doe, AI Governance Committee Chair |

---

## OBJECTIVE

This standard defines the requirements and process for classifying AI systems according to EU AI Act risk categories (prohibited, high-risk, limited-risk, minimal-risk) to ensure appropriate compliance obligations are applied to each AI system throughout its lifecycle.

**Primary Goals:**
- Prevent deployment of prohibited AI practices
- Accurately identify high-risk AI systems requiring full EU AI Act compliance
- Maintain a comprehensive classification register for all organizational AI systems
- Ensure timely reclassification when AI systems or regulations change

---

## SCOPE AND APPLICABILITY

### 2.1 Mandatory Applicability

This standard is **mandatory** for:
- All AI systems developed, deployed, or distributed by the organization
- All AI systems at any lifecycle stage (design, development, testing, deployment, operation, decommissioning)
- All business units and third parties developing or using AI systems on behalf of the organization
- All AI system modifications that may affect classification

### 2.2 AI Systems Covered

This standard applies to all systems meeting the EU AI Act definition of "AI system" including:
- Machine learning systems (supervised, unsupervised, reinforcement learning)
- Logic- and knowledge-based systems (expert systems, rule-based systems)
- Statistical approaches (Bayesian methods, statistical inference)
- Search and optimization methods (genetic algorithms, particle swarm optimization)
- Any system meeting EU AI Act Article 3 definition of "AI system"

### 2.3 Geographical Scope

- All AI systems placed on the EU market
- All AI systems used within the EU regardless of provider location
- All AI systems with EU users or affecting EU persons

### 2.4 Out of Scope

- AI systems used exclusively for personal, non-professional activity
- AI systems used exclusively for military, defense, or national security purposes
- AI systems used exclusively for research and development (pre-market)

---

## CONTROL STANDARD

### Control CLS-001: Prohibited Practice Screening

**Control ID:** CLS-001  
**Control Name:** Prohibited Practice Assessment and Prevention  
**Control Type:** Preventive  
**Control Frequency:** Before development starts, before deployment, annually  
**Risk Level:** Critical

#### Control Objective

Ensure no AI systems constitute prohibited practices under EU AI Act Article 5 by systematically screening all AI systems against the 8 prohibited practices before development or deployment, thereby preventing legal violations, regulatory penalties, and reputational damage.

#### Control Requirements

**CR-001.1: Prohibited Practice Screening Process**

All AI systems must be screened against Article 5 prohibited practices using the approved assessment form before any development or deployment activities commence.

**Mandatory Actions:**
- Complete Prohibited Practice Assessment Form (FORM-AI-CLS-001) for each AI system
- Screen against all 8 prohibited practices defined in Article 5(1)(a-h)
- Document assessment results with clear justification
- Halt all development/deployment if any prohibited practice is identified
- Obtain legal review for borderline or unclear cases

**Article 5 Prohibited Practices:**

| Practice | Article | Description | Assessment Criteria |
|----------|---------|-------------|-------------------|
| **1. Subliminal Techniques** | 5(1)(a) | Deploying subliminal techniques beyond person's consciousness to materially distort behavior causing significant harm | Does AI use subliminal manipulation? Does it bypass conscious awareness? Could it cause harm? |
| **2. Exploitation of Vulnerabilities** | 5(1)(b) | Exploiting vulnerabilities due to age, disability, social/economic situation to materially distort behavior causing harm | Does AI target vulnerable groups? Does it exploit vulnerabilities? Could it cause harm? |
| **3. Social Scoring** | 5(1)(c) | Evaluation/classification by public authorities based on social behavior or personal characteristics leading to detrimental treatment | Is it social scoring by/for public authorities? Based on social behavior? Leads to detrimental treatment? |
| **4. Crime Risk Profiling** | 5(1)(d) | Assessing risk of natural person committing criminal offense based solely on profiling or personality traits (not objective criminal activity data) | Does it assess crime risk? Based only on profiling? Not based on objective criminal data? |
| **5. Untargeted Facial Scraping** | 5(1)(e) | Creating or expanding facial recognition databases through untargeted scraping from internet or CCTV | Does it scrape facial images? Is scraping untargeted? From internet/CCTV? |
| **6. Emotion Recognition in Workplace/Education** | 5(1)(f) | Inferring emotions in workplace or educational institutions (except medical or safety reasons) | Does it infer emotions? In workplace or education setting? Not for medical/safety? |
| **7. Biometric Categorization (Sensitive Attributes)** | 5(1)(g) | Categorizing persons based on biometric data to infer sensitive attributes (race, political opinions, religion, etc.) | Does it categorize using biometrics? Does it infer sensitive attributes? |
| **8. Real-Time Biometric ID in Public** | 5(1)(h) | Real-time remote biometric identification in publicly accessible spaces for law enforcement (limited exceptions) | Real-time biometric ID? In public spaces? For law enforcement? |

**Evidence Required:**
- Completed FORM-AI-CLS-001 (Prohibited Practice Assessment Form)
- Legal review records for borderline cases
- Assessment approval by AI Act Program Manager
- Halt decision documentation if prohibited practice identified

**Audit Verification:**
- Review 100% of AI systems for prohibited practice assessment completion
- Verify assessment quality through sampling (minimum 20%)
- Confirm legal review for all borderline cases
- Verify no prohibited practices are in development or operation

---

### Control CLS-002: High-Risk Classification (Annex I - Product Safety)

**Control ID:** CLS-002  
**Control Name:** Annex I Product Safety AI Assessment  
**Control Type:** Preventive  
**Control Frequency:** Initial classification, after substantial modifications  
**Risk Level:** High

#### Control Objective

Accurately identify AI systems that are safety components of products covered by Union harmonization legislation (Annex I) to ensure they undergo appropriate conformity assessment and meet product safety requirements.

#### Control Requirements

**CR-002.1: Annex I Product Assessment**

Assess whether the AI system is a safety component of a product listed in Annex I and subject to third-party conformity assessment under Union harmonization legislation.

**Mandatory Actions:**
- Review AI system against all 12 Annex I product categories
- Determine if AI system is a "safety component" of the product
- Assess if product requires third-party conformity assessment
- Complete Annex I Assessment Form (FORM-AI-CLS-002)
- Classify as HIGH-RISK (Annex I) if all three criteria are met

**Annex I Product Categories:**

| Category | Legislation | Assessment Question |
|----------|-------------|-------------------|
| Machinery | Machinery Regulation | Is AI a safety component of machinery requiring conformity assessment? |
| Toys | Toys Directive | Is AI a safety component of toys requiring conformity assessment? |
| Recreational craft and personal watercraft | Recreational Craft Directive | Is AI a safety component requiring conformity assessment? |
| Lifts | Lifts Directive | Is AI a safety component of lifts requiring conformity assessment? |
| Equipment in explosive atmospheres | ATEX Directive | Is AI a safety component of ATEX equipment requiring conformity assessment? |
| Radio equipment | Radio Equipment Directive | Is AI a safety component of radio equipment requiring conformity assessment? |
| Pressure equipment | Pressure Equipment Directive | Is AI a safety component of pressure equipment requiring conformity assessment? |
| Cableway installations | Cableway Directive | Is AI a safety component of cableways requiring conformity assessment? |
| Personal protective equipment | PPE Regulation | Is AI a safety component of PPE requiring conformity assessment? |
| Appliances burning gaseous fuels | Gas Appliances Regulation | Is AI a safety component of gas appliances requiring conformity assessment? |
| Medical devices | Medical Device Regulation | Is AI a safety component of medical devices requiring conformity assessment? |
| In vitro diagnostic medical devices | IVD Regulation | Is AI a safety component of IVD devices requiring conformity assessment? |

**Three-Part Test for Annex I Classification:**
1. ✓ Is the AI system part of a product listed in Annex I?
2. ✓ Is the AI system a **safety component** of that product?
3. ✓ Does the product require **third-party conformity assessment**?

**If YES to all three → HIGH-RISK (Annex I)**

**Evidence Required:**
- Completed FORM-AI-CLS-002 (Annex I Assessment Form)
- Product documentation and specifications
- Safety component determination with justification
- Conformity assessment requirement verification

**Audit Verification:**
- Verify assessment completion for all AI systems that are product components
- Validate safety component determination through technical review
- Confirm conformity assessment requirements correctly identified
- Cross-check with product safety documentation

---

### Control CLS-003: High-Risk Classification (Annex III - Standalone Use Cases)

**Control ID:** CLS-003  
**Control Name:** Annex III Standalone High-Risk AI Assessment  
**Control Type:** Preventive  
**Control Frequency:** Initial classification, after substantial modifications  
**Risk Level:** High

#### Control Objective

Accurately identify AI systems that fall under Annex III high-risk use cases to ensure they comply with all EU AI Act requirements for high-risk systems, protecting fundamental rights and safety of persons.

#### Control Requirements

**CR-003.1: Annex III Use Case Assessment**

Systematically assess whether the AI system falls under any of the 8 Annex III high-risk categories by evaluating the AI system's intended purpose, deployment context, and impact on persons.

**Mandatory Actions:**
- Review AI system against all 8 Annex III categories
- Assess each specific use case within applicable categories
- Complete Annex III Assessment Form (FORM-AI-CLS-003) with detailed justification
- Obtain legal review for borderline cases
- Classify as HIGH-RISK (Annex III) if any category applies

**Annex III High-Risk Categories:**

**Category 1: Biometrics (Annex III #1)**

| Use Case | Description | Classification Trigger |
|----------|-------------|----------------------|
| Remote Biometric Identification | Real-time or post identification of persons | ANY remote biometric identification system |
| Biometric Categorization | Categorizing persons based on biometric data to infer sensitive attributes | ANY biometric categorization for sensitive attributes |
| Emotion Recognition | Inferring emotions from biometric data | ANY emotion recognition system |

**Category 2: Critical Infrastructure (Annex III #2)**

| Use Case | Description | Classification Trigger |
|----------|-------------|----------------------|
| Road Traffic Management | AI as safety component in road traffic management/operation | AI controls/manages road traffic AND is safety component |
| Utilities Supply | AI as safety component in water, gas, heating, electricity supply | AI controls/manages utilities AND is safety component |

**Category 3: Education and Vocational Training (Annex III #3)**

| Use Case | Description | Classification Trigger |
|----------|-------------|----------------------|
| Educational Access | Determining access or admission to educational institutions | AI makes/influences admission decisions |
| Educational Assignment | Assigning persons to educational institutions | AI assigns students to schools/programs |
| Learning Outcome Evaluation | Evaluating learning outcomes or educational performance | AI evaluates student performance/outcomes |
| Exam Proctoring | Monitoring and detecting prohibited behavior during tests | AI monitors/detects cheating or violations |
| Education Level Assessment | Assessing appropriate level of education for person | AI determines educational level/placement |

**Category 4: Employment, Workers Management, and Self-Employment (Annex III #4)**

| Use Case | Description | Classification Trigger |
|----------|-------------|----------------------|
| Recruitment | Targeted job advertisements, screening, evaluation of candidates | AI screens CVs, evaluates candidates, targets job ads |
| Employment Decisions | Making decisions on hiring, promotion, termination, task allocation | AI makes/influences hire/fire/promote decisions |
| Performance Monitoring | Monitoring and evaluating performance and behavior of workers | AI monitors worker performance or behavior |

**Category 5: Access to Essential Private/Public Services and Benefits (Annex III #5)**

| Use Case | Description | Classification Trigger |
|----------|-------------|----------------------|
| Public Assistance Eligibility | Evaluating eligibility for public assistance benefits and services | AI determines eligibility for public benefits |
| Creditworthiness Assessment | Evaluating creditworthiness (except fraud detection) | AI assesses credit risk or loan eligibility |
| Emergency Service Dispatching | Dispatching or establishing priority for emergency first response services | AI dispatches ambulance/fire/police services |
| Insurance Risk Assessment | Risk assessment and pricing for life and health insurance | AI assesses risk or sets premiums |

**Category 6: Law Enforcement (Annex III #6)**

| Use Case | Description | Classification Trigger |
|----------|-------------|----------------------|
| Crime Victim Risk Assessment | Assessing risk of person becoming victim of criminal offense | AI predicts victimization risk |
| Polygraph Tools | Polygraphs and similar tools to detect emotional state | AI detects deception or emotional state |
| Evidence Reliability | Evaluating reliability of evidence in criminal proceedings | AI assesses evidence credibility |
| Crime Risk Prediction | Assessing risk of person committing or reoffending based on profiling | AI predicts criminal behavior via profiling |
| Criminal Profiling | Profiling in detection, investigation, or prosecution of criminal offenses | AI profiles suspects or criminal patterns |

**Category 7: Migration, Asylum, and Border Control (Annex III #7)**

| Use Case | Description | Classification Trigger |
|----------|-------------|----------------------|
| Border Polygraph Tools | Polygraphs and similar tools for border/immigration control | AI detects deception at borders |
| Border Risk Assessment | Assessing risk posed by persons entering territory | AI assesses security risk of entrants |
| Immigration Application Examination | Examining applications for asylum, visa, residence permits | AI evaluates/decides on immigration applications |
| Border Person Identification | Detecting, recognizing, or identifying persons at borders (except verification) | AI identifies persons crossing borders |

**Category 8: Administration of Justice and Democratic Processes (Annex III #8)**

| Use Case | Description | Classification Trigger |
|----------|-------------|----------------------|
| Judicial Research Assistance | Assisting judicial authority in researching and interpreting facts and law | AI assists judges in legal research |
| Law Application | Applying law to concrete set of facts | AI applies legal rules to cases |
| Election/Referendum Influence | Influencing outcome of election or referendum | AI influences voting outcomes |
| Voting Behavior Influence | Influencing voting behavior | AI manipulates or influences voters |

**Evidence Required:**
- Completed FORM-AI-CLS-003 (Annex III Assessment Form)
- Use case description and intended purpose documentation
- Deployment context analysis
- Legal review records for borderline cases
- Classification decision with justification

**Audit Verification:**
- Review 100% of AI systems for Annex III assessment completion
- Verify assessment accuracy through sampling (minimum 20%)
- Validate use case categorization through expert review
- Confirm legal review for all borderline determinations

---

### Control CLS-004: Classification Decision and Documentation

**Control ID:** CLS-004  
**Control Name:** Final Classification Determination and Documentation  
**Control Type:** Preventive  
**Control Frequency:** Per AI system, after substantial modifications  
**Risk Level:** High

#### Control Objective

Make definitive classification decisions based on comprehensive assessments and maintain complete documentation to ensure traceability, support audits, and enable appropriate compliance obligations for each AI system.

#### Control Requirements

**CR-004.1: Classification Decision Tree Execution**

Apply the standardized classification decision tree to make final classification determination based on results from prohibited practice, Annex I, and Annex III assessments.

**Classification Decision Tree:**

```
STEP 1: Prohibited Practice Check (Article 5)
├─ Is AI system a prohibited practice?
   ├─ YES → Classification: PROHIBITED
   │         Action: Do NOT develop or deploy
   │         Escalation: IMMEDIATE to AI Governance Committee + Legal
   └─ NO → Continue to Step 2

STEP 2: Annex I Assessment (Product Safety)
├─ Is AI a safety component of Annex I product requiring conformity assessment?
   ├─ YES → Classification: HIGH-RISK (Annex I)
   │         Action: Apply ALL high-risk requirements + Annex VII conformity assessment
   │         Trigger: STD-AI-002 through STD-AI-014
   └─ NO → Continue to Step 3

STEP 3: Annex III Assessment (Standalone Use Cases)
├─ Does AI fall under any Annex III category?
   ├─ YES → Classification: HIGH-RISK (Annex III)
   │         Action: Apply ALL high-risk requirements + Annex VI conformity assessment
   │         Trigger: STD-AI-002 through STD-AI-014
   └─ NO → Continue to Step 4

STEP 4: Transparency Obligations (Article 50)
├─ Does AI have transparency obligations?
│  - Chatbot or conversational AI?
│  - Generates synthetic content (deepfakes)?
│  - Emotion recognition (not workplace/education)?
│  - Biometric categorization (not sensitive attributes)?
   ├─ YES → Classification: LIMITED-RISK
   │         Action: Apply transparency disclosure requirements
   │         Trigger: STD-AI-006 (Transparency Standard)
   └─ NO → Continue to Step 5

STEP 5: Default Classification
└─ Classification: MINIMAL-RISK
   Action: No specific EU AI Act obligations (voluntary best practices recommended)
```

**Mandatory Actions:**
- Execute decision tree systematically for each AI system
- Document decision at each step with justification
- Complete Classification Decision Record (REC-AI-CLS-001)
- Obtain AI Governance Committee approval for HIGH-RISK classifications
- Trigger applicable compliance obligations based on classification

**Evidence Required:**
- Classification Decision Record (REC-AI-CLS-001)
- All assessment forms (FORM-AI-CLS-001, -002, -003)
- Decision tree execution documentation
- AI Governance Committee approval for high-risk systems
- Classification certificate

**Audit Verification:**
- Verify decision tree properly executed for 100% of AI systems
- Validate classification decisions through sampling
- Confirm AI Governance Committee approvals obtained
- Verify compliance obligations correctly triggered

---

### Control CLS-005: Classification Register Maintenance

**Control ID:** CLS-005  
**Control Name:** AI System Classification Register Management  
**Control Type:** Detective  
**Control Frequency:** Continuous updates, monthly reviews  
**Risk Level:** Medium

#### Control Objective

Maintain a comprehensive, current, and accurate register of all AI system classifications to enable effective oversight, compliance monitoring, audit support, and regulatory reporting.

#### Control Requirements

**CR-005.1: Classification Register Management**

Maintain a centralized AI System Classification Register containing all classification decisions, statuses, and key metadata for every AI system in the organization.

**Mandatory Register Fields:**

| Field | Description | Mandatory | Format/Values |
|-------|-------------|-----------|---------------|
| AI_System_ID | Unique identifier | YES | AI-SYS-XXXX |
| AI_System_Name | Official name | YES | Text |
| Classification | Risk classification | YES | PROHIBITED / HIGH-RISK / LIMITED-RISK / MINIMAL-RISK |
| Classification_Basis | Legal basis for classification | YES | Article 5 / Annex I / Annex III / Article 50 / Default |
| Annex_III_Category | Specific Annex III category (if applicable) | If HIGH-RISK | #1-#8 |
| Classification_Date | Date of classification decision | YES | YYYY-MM-DD |
| Classifier_Name | Person who performed classification | YES | Text |
| Approver_Name | Person who approved classification | YES | Text |
| Approval_Date | Date of approval | YES | YYYY-MM-DD |
| Next_Review_Date | Scheduled review date | YES | YYYY-MM-DD |
| Status | Current status | YES | Active / Under Review / Reclassified / Decommissioned |
| Lifecycle_Stage | Current development stage | YES | Design / Development / Testing / Deployed / Operational / Decommissioned |
| Business_Owner | Business unit owner | YES | Text |
| Compliance_Status | Compliance with classification requirements | YES | Compliant / Gaps Identified / Remediation In Progress |

**Mandatory Actions:**
- Create register entry within 5 business days of classification decision
- Update register within 2 business days of any status change
- Conduct monthly register review for completeness and accuracy
- Generate quarterly register reports for AI Governance Committee
- Provide register access to internal audit and competent authorities
- Archive decommissioned AI system records (retain for 10 years)

**Evidence Required:**
- AI System Classification Register (REC-AI-CLS-002)
- Monthly register review records
- Quarterly reports to AI Governance Committee
- Register update audit trail
- Access logs for register

**Audit Verification:**
- Verify register completeness (100% of AI systems recorded)
- Validate register accuracy through sampling
- Confirm timely updates (within SLA)
- Review monthly review completion
- Verify 10-year retention for decommissioned systems

---

### Control CLS-006: Periodic Classification Review

**Control ID:** CLS-006  
**Control Name:** Annual Classification Review and Validation  
**Control Type:** Detective  
**Control Frequency:** Annually (minimum)  
**Risk Level:** Medium

#### Control Objective

Ensure all AI system classifications remain accurate and current through systematic annual reviews, identifying any changes in AI systems, intended purposes, deployment contexts, or regulatory requirements that necessitate reclassification.

#### Control Requirements

**CR-006.1: Annual Classification Review Process**

Conduct comprehensive annual reviews of all AI system classifications to validate accuracy and identify reclassification needs.

**Mandatory Actions:**
- Schedule annual review for each AI system (based on last classification date)
- Re-assess against current Article 5, Annex I, and Annex III criteria
- Review for changes in: intended purpose, deployment context, functionality, user population
- Review for regulatory updates (EU AI Act guidance, implementing acts)
- Document review results in Annual Classification Review Record
- Update classification if changes identified
- Obtain approval for any reclassifications

**Annual Review Checklist:**
- [ ] Has the AI system's intended purpose changed?
- [ ] Has the deployment context changed?
- [ ] Has the user population changed?
- [ ] Have system capabilities or functionality changed?
- [ ] Have there been EU AI Act regulatory updates affecting classification?
- [ ] Has the AI system undergone substantial modifications?
- [ ] Is the prohibited practice assessment still valid?
- [ ] Is the Annex I/III assessment still valid?
- [ ] Does the classification still reflect the current risk level?

**Evidence Required:**
- Annual review schedule
- Annual Classification Review Records (per AI system)
- Updated classifications (if changed)
- AI Governance Committee approval for reclassifications
- Annual review completion report

**Audit Verification:**
- Verify 100% of AI systems reviewed annually
- Validate review quality through sampling
- Confirm reclassifications properly approved
- Verify timely completion of annual reviews

---

### Control CLS-007: Event-Triggered Reclassification

**Control ID:** CLS-007  
**Control Name:** Event-Triggered Classification Reassessment  
**Control Type:** Detective  
**Control Frequency:** As triggered by events  
**Risk Level:** High

#### Control Objective

Ensure AI system classifications are reassessed immediately when triggering events occur that may affect the classification, preventing operation of AI systems under incorrect classifications and associated compliance gaps.

#### Control Requirements

**CR-007.1: Reclassification Trigger Monitoring**

Monitor for and respond to events that trigger mandatory reclassification assessment within defined timeframes.

**Reclassification Triggers:**

| Trigger Event | Description | Action Required | Timeframe |
|---------------|-------------|-----------------|-----------|
| **Substantial Modification** | Significant change to AI system affecting compliance or intended purpose | Immediate reclassification assessment | Within 10 business days |
| **Intended Purpose Change** | Change in how or why AI system is used | Immediate reclassification assessment | Within 10 business days |
| **Deployment Context Change** | Change in where, when, or on whom AI system is used | Reclassification assessment | Within 15 business days |
| **Regulatory Update** | EU AI Act amendments, implementing acts, or guidance affecting classification | Review impact, assess if reclassification needed | Within 30 days of publication |
| **Regulatory Interpretation Change** | New interpretation from Commission or competent authorities | Review impact, assess if reclassification needed | Within 30 days of notification |
| **Incident or Near-Miss** | Incident suggesting classification may be incorrect | Immediate reclassification assessment | Within 5 business days |
| **Audit Finding** | Internal/external audit identifies classification issue | Reclassification assessment | Within 10 business days |
| **User Population Expansion** | AI system used on new or broader user populations | Reclassification assessment | Within 15 business days |

**Mandatory Actions:**
- Monitor systems and processes for reclassification triggers
- Log trigger event within 1 business day of identification
- Initiate reclassification assessment within required timeframe
- Conduct full classification assessment (all three: Article 5, Annex I, Annex III)
- Document reclassification decision
- Update Classification Register
- Communicate changes to stakeholders
- Halt deployment if reclassification increases risk level until compliance gaps addressed

**Evidence Required:**
- Trigger event log
- Trigger event documentation
- Reclassification assessment records
- Updated Classification Decision Record
- Updated Classification Register entry
- Stakeholder communication records
- Deployment hold records (if applicable)

**Audit Verification:**
- Verify all trigger events logged and assessed
- Validate reclassification completed within timeframes
- Confirm appropriate escalation and approval
- Verify stakeholder communications completed

---

### Control CLS-008: Classification Change Management

**Control ID:** CLS-008  
**Control Name:** Classification Change Control and Impact Management  
**Control Type:** Corrective  
**Control Frequency:** Per reclassification  
**Risk Level:** High

#### Control Objective

Manage classification changes through formal change control to ensure compliance obligations are appropriately updated, gaps are identified and addressed, and all stakeholders are informed of classification changes and their implications.

#### Control Requirements

**CR-008.1: Classification Change Control Process**

Execute formal change control process for all classification changes, ensuring impact assessment, gap analysis, and remediation planning.

**Mandatory Change Control Steps:**

**Step 1: Change Request (Day 0)**
- Document reason for reclassification
- Identify current vs. new classification
- Submit Change Request (CR-AI-CLS-XXX)

**Step 2: Impact Assessment (Days 1-3)**
- Assess impact on compliance obligations
- Identify new requirements triggered by reclassification
- Identify requirements no longer applicable
- Estimate effort and resources required
- Document in Classification Change Impact Assessment

**Step 3: Gap Analysis (Days 4-5)**
- Compare current state to new classification requirements
- Identify compliance gaps
- Prioritize gaps by risk and regulatory deadline
- Document in Gap Analysis Report

**Step 4: Remediation Planning (Days 6-10)**
- Develop remediation plan for all gaps
- Assign owners and target dates
- Obtain resource commitments
- Define interim risk mitigation measures (if deployment continuing)

**Step 5: Approval (Days 11-15)**
- Present to AI Governance Committee
- Obtain approval for reclassification
- Obtain approval for remediation plan
- Obtain approval for interim risk mitigation (if needed)

**Step 6: Implementation (Days 16+)**
- Update Classification Register
- Implement remediation plan
- Update all affected documentation (technical docs, risk assessments, etc.)
- Communicate to all affected stakeholders
- Monitor remediation progress

**Step 7: Verification (After remediation)**
- Verify all gaps closed
- Confirm compliance with new classification requirements
- Obtain final sign-off

**Classification Change Impact Matrix:**

| From → To | Impact Level | Key Actions Required |
|-----------|--------------|---------------------|
| MINIMAL → LIMITED | Low | Implement transparency disclosures (STD-AI-006) |
| MINIMAL → HIGH-RISK | Critical | Full compliance program: STD-AI-002 through STD-AI-014 |
| LIMITED → HIGH-RISK | High | Add all high-risk requirements beyond transparency |
| HIGH-RISK → LIMITED | Medium | Maintain documentation; reduce ongoing compliance burden |
| HIGH-RISK → MINIMAL | Medium | Maintain documentation; minimal ongoing obligations |
| Any → PROHIBITED | Critical | IMMEDIATE HALT; Do not deploy; Decommission if deployed |

**Evidence Required:**
- Classification Change Request (CR-AI-CLS-XXX)
- Classification Change Impact Assessment
- Gap Analysis Report
- Remediation Plan
- AI Governance Committee approval records
- Updated Classification Register
- Stakeholder communication records
- Remediation completion verification

**Audit Verification:**
- Verify change control process followed for all reclassifications
- Validate impact assessment and gap analysis completed
- Confirm AI Governance Committee approval obtained
- Verify remediation completed before deployment (if upgrading to high-risk)
- Confirm stakeholder communications completed

---

### Control CLS-009: Classification Documentation Package

**Control ID:** CLS-009  
**Control Name:** Classification Documentation and Record Retention  
**Control Type:** Detective  
**Control Frequency:** Per classification, 10-year retention  
**Risk Level:** Medium

#### Control Objective

Maintain complete, organized, and accessible documentation packages for all classification decisions to support audits, regulatory inspections, and demonstrate due diligence in classification processes.

#### Control Requirements

**CR-009.1: Classification Documentation Package Management**

Compile and retain complete documentation packages for each AI system classification decision for minimum 10 years.

**Mandatory Documentation Package Contents:**

| Document | Document ID | Mandatory | Retention Period |
|----------|-------------|-----------|------------------|
| Classification Request Form | FORM-AI-CLS-REQUEST-XXX | YES | 10 years |
| Prohibited Practice Assessment | FORM-AI-CLS-001 | YES | 10 years |
| Annex I Assessment | FORM-AI-CLS-002 | If product AI | 10 years |
| Annex III Assessment | FORM-AI-CLS-003 | YES | 10 years |
| Legal Review (if conducted) | REVIEW-AI-CLS-LEGAL-XXX | If borderline case | 10 years |
| Classification Decision Record | REC-AI-CLS-001 | YES | 10 years |
| AI Governance Committee Approval | APPROVAL-AI-CLS-XXX | If HIGH-RISK | 10 years |
| Classification Certificate | CERT-AI-CLS-XXX | YES | 10 years |
| Annual Review Records | REVIEW-AI-CLS-ANNUAL-XXX | YES (ongoing) | 10 years after decommission |
| Reclassification Records | All reclassification docs | If reclassified | 10 years |
| Change Impact Assessments | IMPACT-AI-CLS-XXX | If reclassified | 10 years |

**Mandatory Actions:**
- Create documentation package within 5 business days of classification decision
- Store in approved document management system with access controls
- Apply 10-year retention policy automatically
- Enable search and retrieval within 2 business days of request
- Provide to competent authorities within 5 business days of request
- Backup documentation packages in disaster recovery system
- Maintain audit trail of all access to documentation packages

**Document Management Requirements:**
- Secure storage with encryption at rest
- Role-based access control
- Version control for all documents
- Audit trail of all access and modifications
- Retention policy enforcement
- Disaster recovery and backup

**Evidence Required:**
- Complete documentation packages (one per AI system)
- Document management system records
- Retention policy configuration
- Access logs
- Backup verification records
- Authority request response records

**Audit Verification:**
- Verify 100% of AI systems have complete documentation packages
- Validate package completeness through sampling
- Confirm 10-year retention policy applied
- Verify access controls properly configured
- Test retrieval capability (sample requests)

---

## SUPPORTING PROCEDURES

This standard is implemented through the following detailed procedures:

### Procedure PROC-AI-CLS-001: AI System Classification Procedure

**Purpose:** Define step-by-step process for classifying new AI systems  
**Owner:** AI Act Program Manager  
**Implements:** Controls CLS-001, CLS-002, CLS-003, CLS-004, CLS-005, CLS-009

**Procedure Steps:**
1. Receive classification request from AI System Owner
2. Gather AI system information (intended purpose, functionality, users, deployment)
3. Conduct prohibited practice assessment (Control CLS-001)
4. Conduct Annex I assessment if AI is part of regulated product (Control CLS-002)
5. Conduct Annex III assessment (Control CLS-003)
6. Apply classification decision tree (Control CLS-004)
7. Obtain legal review for borderline cases
8. Document classification decision
9. Obtain AI Governance Committee approval (if HIGH-RISK)
10. Issue classification certificate
11. Update Classification Register (Control CLS-005)
12. Create documentation package (Control CLS-009)
13. Communicate classification to stakeholders
14. Trigger applicable compliance standards based on classification

**Outputs:**
- Classification certificate
- Updated Classification Register
- Documentation package
- Stakeholder communications

---

### Procedure PROC-AI-CLS-002: Classification Review and Update Procedure

**Purpose:** Define process for periodic reviews and event-triggered reclassifications  
**Owner:** AI Act Program Manager  
**Implements:** Controls CLS-006, CLS-007, CLS-008

**Procedure Steps:**
1. **For Annual Reviews (Control CLS-006):**
   - Generate list of AI systems due for annual review
   - Schedule review meetings with AI System Owners
   - Conduct review using Annual Review Checklist
   - Re-assess against current Article 5, Annex I, Annex III criteria
   - Document review results
   - Initiate reclassification if needed
   
2. **For Event-Triggered Reviews (Control CLS-007):**
   - Monitor for reclassification trigger events
   - Log trigger event immediately
   - Assess if reclassification needed
   - Initiate reclassification within required timeframe
   - Document trigger and assessment

3. **For Reclassifications (Control CLS-008):**
   - Submit classification change request
   - Conduct impact assessment
   - Perform gap analysis
   - Develop remediation plan
   - Obtain AI Governance Committee approval
   - Update Classification Register
   - Implement remediation
   - Communicate changes to stakeholders
   - Verify remediation completion

**Outputs:**
- Annual review records
- Trigger event logs
- Reclassification assessments
- Updated classifications
- Gap analyses and remediation plans

---

### Procedure PROC-AI-CLS-003: Classification Documentation and Record Management Procedure

**Purpose:** Define process for maintaining classification documentation packages  
**Owner:** Document Control / AI Act Program Manager  
**Implements:** Control CLS-009

**Procedure Steps:**
1. Create documentation package folder in document management system
2. Upload all required classification documents
3. Verify package completeness against checklist
4. Apply metadata (AI System ID, classification, dates)
5. Set retention policy (10 years)
6. Configure access permissions
7. Enable audit logging
8. Schedule backup
9. Conduct periodic documentation package audits (quarterly)
10. Respond to documentation requests from authorities

**Outputs:**
- Complete documentation packages
- Documentation audit reports
- Authority response records

---

## COMPLIANCE

### 5.1 Compliance Monitoring

**Monitoring Approach:**
Continuous automated monitoring supplemented by monthly manual reviews and quarterly comprehensive audits.

**Compliance Metrics:**

| Metric | Target | Measurement Method | Frequency | Owner |
|--------|--------|--------------------|-----------|-------|
| Classification Completeness | 100% | % of AI systems with current classification | Monthly | AI Act Program Manager |
| Classification Timeliness | < 10 business days | Average days from request to classification | Monthly | AI Act Program Manager |
| Annual Review Completion | 100% | % of AI systems reviewed annually on schedule | Quarterly | AI Act Program Manager |
| Reclassification Responsiveness | 100% | % of triggered reclassifications completed within SLA | Monthly | AI Act Program Manager |
| High-Risk Compliance | 100% | % of high-risk AI with full compliance to all standards | Quarterly | Compliance Officer |
| Prohibited Practice Prevention | 100% (Zero tolerance) | Zero prohibited practices in development or operation | Continuous | AI Governance Committee |
| Documentation Package Completeness | 100% | % of AI systems with complete documentation packages | Monthly | Document Control |
| Authority Response Time | < 5 days | Average days to respond to authority documentation requests | Per request | Legal |

**Monitoring Tools:**
- Classification Register Dashboard (real-time)
- Automated alerts for classification due dates
- Monthly compliance reports
- Quarterly AI Governance Committee reviews

---

### 5.2 Internal Audit Requirements

**Audit Frequency:** Annually (minimum)

**Audit Scope:**
- Classification Register completeness and accuracy
- Classification documentation quality and completeness
- Classification decision accuracy (sample-based testing)
- Annual review completion and quality
- Reclassification trigger response
- Compliance with classification procedures
- Controls effectiveness (CLS-001 through CLS-009)

**Audit Activities:**
- Review 100% of Classification Register for completeness
- Sample 20% of classifications for detailed accuracy review
- Test controls through transaction sampling
- Interview key personnel (classifiers, AI System Owners)
- Review AI Governance Committee meeting minutes
- Test documentation retrieval capability
- Verify retention policy enforcement

**Audit Outputs:**
- Annual Classification Audit Report
- Findings and recommendations
- Corrective action plans for deficiencies

---

### 5.3 External Audit / Regulatory Inspection

**Preparation:**
- Maintain audit-ready documentation packages at all times
- Designate Legal and AI Act Program Manager as regulatory liaisons
- Prepare standard response procedures for authority requests

**Provide to Auditors/Regulators:**
- AI System Classification Register (REC-AI-CLS-002)
- Sample classification documentation packages
- Classification procedures (PROC-AI-CLS-001, -002, -003)
- Annual review completion reports
- Internal audit reports
- AI Governance Committee meeting minutes (relevant to classification)
- Evidence of controls execution

**Authority Request Response:**
- Acknowledge request within 1 business day
- Provide requested documentation within 5 business days
- Coordinate through Legal and AI Act Program Manager
- Document all interactions with authorities

---

## ROLES AND RESPONSIBILITIES

### 6.1 RACI Matrix

| Activity | AI Act Program Manager | AI System Owner | Product Director | Legal & Compliance | AI Governance Committee | DPO | CTO |
|----------|----------------------|-----------------|------------------|-------------------|------------------------|-----|-----|
| **Classification Execution** | **R** | **A** | C | C | I | C | I |
| **Prohibited Practice Assessment** | **R** | **A** | I | C | I | C | I |
| **Annex I Assessment** | C | **R** | **A** | C | I | I | **A** |
| **Annex III Assessment** | **R** | **A** | C | C | I | I | I |
| **Classification Decision** | **R** | **A** | I | C | I | I | I |
| **High-Risk Approval** | **R** | I | I | C | **A** | I | I |
| **Classification Register Management** | **R/A** | I | I | I | I | I | I |
| **Annual Reviews** | **R** | **A** | I | I | I | I | I |
| **Reclassification Assessment** | **R** | **A** | C | C | I | I | I |
| **Legal Review (Borderline Cases)** | C | I | I | **R/A** | I | C | I |
| **Documentation Package Management** | **R** | C | I | I | I | I | I |
| **Compliance Monitoring** | **R** | I | I | **A** | I | I | I |
| **Internal Audit** | C | I | I | I | I | I | I |

**RACI Legend:**
- **R** = Responsible (does the work)
- **A** = Accountable (ultimately answerable)
- **C** = Consulted (provides input)
- **I** = Informed (kept up-to-date)

---

### 6.2 Role Descriptions

**AI Act Program Manager**
- **Primary Responsibility:** Executes classification process, maintains Classification Register, ensures compliance
- **Key Activities:**
  - Conducts prohibited practice and Annex III assessments
  - Applies classification decision tree
  - Maintains Classification Register
  - Coordinates annual reviews
  - Manages reclassification process
  - Reports metrics to AI Governance Committee
- **Required Competencies:** EU AI Act expertise, risk assessment, project management

**AI System Owner**
- **Primary Responsibility:** Accountable for accurate classification of their AI system
- **Key Activities:**
  - Requests classification
  - Provides complete AI system information
  - Participates in classification assessment
  - Approves classification decision
  - Monitors for reclassification triggers
  - Participates in annual reviews
- **Required Competencies:** Deep knowledge of AI system, business context, intended use

**Product Director / CTO**
- **Primary Responsibility:** Provides technical expertise, conducts Annex I assessments
- **Key Activities:**
  - Assesses if AI is safety component of Annex I products
  - Provides technical input on AI system capabilities
  - Reviews technical accuracy of classifications
- **Required Competencies:** Technical AI expertise, product safety knowledge

**Legal & Compliance**
- **Primary Responsibility:** Reviews borderline cases, ensures regulatory compliance
- **Key Activities:**
  - Reviews complex or borderline classification cases
  - Interprets EU AI Act requirements
  - Advises on legal implications of classifications
  - Manages regulatory authority interactions
- **Required Competencies:** EU AI Act legal expertise, regulatory compliance

**AI Governance Committee**
- **Primary Responsibility:** Approves high-risk classifications, provides oversight
- **Key Activities:**
  - Approves all HIGH-RISK classifications
  - Approves reclassifications
  - Reviews classification metrics quarterly
  - Escalation point for classification disputes
  - Oversight of classification compliance
- **Authority:** Final approval authority for high-risk classifications

**Data Protection Officer (DPO)**
- **Primary Responsibility:** Reviews privacy implications of classifications
- **Key Activities:**
  - Reviews classifications involving personal data processing
  - Advises on GDPR considerations
  - Identifies privacy risks in high-risk AI systems
- **Required Competencies:** GDPR expertise, privacy impact assessment

---

## EXCEPTIONS

### 7.1 Exception Philosophy

Classification is a **critical regulatory compliance activity**. Exceptions are granted restrictively and only where compensating controls adequately mitigate risks.

---

### 7.2 Allowed Exceptions

The following exceptions **may** be granted with proper justification and approval:

| Exception Type | Justification Required | Maximum Duration | Approval Authority | Compensating Controls |
|----------------|----------------------|------------------|-------------------|---------------------|
| **Delayed Classification (Pilot/Research)** | AI system in early research phase; intended use unclear | 6 months | AI Act Program Manager | Restrict to research environment; No deployment to production; Provisional "Assumed High-Risk" classification |
| **Simplified Assessment (Clearly Minimal-Risk)** | AI system obviously minimal-risk (e.g., simple spell checker) | Permanent | AI Act Program Manager | Document simplified rationale; Legal review if challenged; Annual re-confirmation |
| **Extended Annual Review Timeline** | Resource constraints prevent timely review | 3 months extension | AI Governance Committee Chair | Prioritize high-risk systems; Interim monitoring; No new deployments until review complete |

---

### 7.3 Prohibited Exceptions

The following exceptions **cannot** be granted under any circumstances:

❌ **Skipping prohibited practice assessment** - Mandatory for all AI systems, no exceptions  
❌ **Operating high-risk AI without proper classification** - Regulatory violation, legal liability  
❌ **Ignoring reclassification triggers** - Creates compliance gaps, regulatory risk  
❌ **Deploying prohibited AI practices** - Explicitly forbidden by Article 5  
❌ **Incomplete documentation packages** - Required for regulatory inspections  

---

### 7.4 Exception Request Process

**Step 1: Submit Exception Request**
- Complete Exception Request Form (FORM-AI-EXCEPTION-001)
- Include business justification
- Propose compensating controls
- Specify duration requested
- Attach risk assessment

**Step 2: Risk Assessment**
- AI Act Program Manager assesses risk of granting exception
- Evaluates adequacy of compensating controls
- Documents residual risk

**Step 3: Approval**
- Route to appropriate approval authority based on exception type
- AI Act Program Manager approval: Minor exceptions (simplified assessment, short delays)
- AI Governance Committee Chair approval: Significant exceptions (extended timelines)
- AI Governance Committee approval: Critical exceptions

**Step 4: Documentation and Monitoring**
- Document exception in Exception Register
- Assign exception owner
- Set review date
- Monitor compensating controls
- Report exceptions quarterly to AI Governance Committee

**Step 5: Exception Review and Closure**
- Review exception at specified review date
- Assess if exception still needed
- Close exception when normal classification completed
- Document lessons learned

---

## ENFORCEMENT

### 8.1 Non-Compliance Consequences

| Violation | Severity | Consequence | Remediation Required |
|-----------|----------|-------------|---------------------|
| **Operating AI without classification** | Critical | Immediate suspension of AI system until classified | Complete classification within 5 business days; Root cause analysis; Corrective action plan |
| **Incorrect classification (high-risk as lower)** | Critical | Immediate reclassification; Compliance gap assessment; Halt deployment until gaps closed | Full compliance assessment; Gap remediation; Re-approval by AI Governance Committee |
| **Prohibited practice deployed** | Critical | Immediate shutdown; Incident investigation; Regulatory reporting (Article 73) | Decommission system; Legal review; Report to authorities; Disciplinary action |
| **Missing annual review** | High | Escalation to AI Governance Committee; Freeze on new features until reviewed | Complete review within 10 business days; Assess if reclassification needed |
| **Late reclassification response** | Medium | Written warning; Escalation to management | Complete reclassification immediately; Process improvement plan |
| **Incomplete documentation package** | Medium | Classification invalid until documentation complete | Complete documentation within 5 business days |
| **Classification Register not updated** | Low | Written warning | Update register immediately; Process correction |

---

### 8.2 Escalation Procedures

**Level 1: AI Act Program Manager**
- Minor procedural violations
- Documentation deficiencies
- Timeline delays < 5 days
- **Action:** Written warning, corrective action required

**Level 2: AI Governance Committee Chair**
- Repeated violations
- High-risk misclassifications
- Missing annual reviews
- **Action:** Formal review, corrective action plan, management notification

**Level 3: AI Governance Committee**
- Prohibited practices identified
- Critical compliance failures
- Regulatory violations
- **Action:** Immediate AI system suspension, investigation, disciplinary action, regulatory reporting

**Level 4: Executive Management + Legal**
- Potential regulatory enforcement action
- Significant legal liability
- Reputational risk
- **Action:** Executive crisis management, legal strategy, regulatory engagement

---

### 8.3 Immediate Escalation Triggers

Escalate **immediately** to AI Governance Committee + Legal if:
- ⚠️ Prohibited practice (Article 5) suspected or identified
- ⚠️ High-risk AI system operating without proper classification or compliance
- ⚠️ Regulatory inquiry or inspection related to classification
- ⚠️ Classification dispute that cannot be resolved
- ⚠️ Potential serious incident (Article 73) related to classification error
- ⚠️ Media or public attention to AI system classification

---

### 8.4 Disciplinary Actions

Individuals responsible for classification violations may be subject to:
- Verbal or written warning
- Mandatory retraining
- Performance improvement plan
- Reassignment of responsibilities
- Suspension (with pay during investigation)
- Termination (for egregious violations, e.g., knowingly deploying prohibited practices)

**Factors Considered:**
- Intent (knowing violation vs. honest mistake)
- Severity of violation
- Impact (actual or potential)
- Cooperation with remediation
- Prior violation history

---

## KEY PERFORMANCE INDICATORS (KPIs)

### 9.1 Classification KPIs

| KPI ID | KPI Name | Definition | Target | Measurement Method | Frequency | Owner | Reporting To |
|--------|----------|------------|--------|-------------------|-----------|-------|--------------|
| **KPI-CLS-001** | Classification Completeness | % of AI systems with current, valid classification | 100% | (# AI systems classified / # total AI systems) × 100 | Monthly | AI Act Program Manager | AI Governance Committee |
| **KPI-CLS-002** | Classification Timeliness | Average business days from classification request to decision | < 10 days | Σ (classification date - request date) / # classifications | Monthly | AI Act Program Manager | Management |
| **KPI-CLS-003** | Annual Review Completion Rate | % of AI systems reviewed annually on schedule | 100% | (# annual reviews completed on time / # annual reviews due) × 100 | Quarterly | AI Act Program Manager | AI Governance Committee |
| **KPI-CLS-004** | Reclassification Responsiveness | % of triggered reclassifications completed within SLA | 100% | (# reclassifications within SLA / # reclassification triggers) × 100 | Monthly | AI Act Program Manager | AI Governance Committee |
| **KPI-CLS-005** | High-Risk Compliance Rate | % of high-risk AI systems with full compliance to required standards | 100% | (# high-risk AI fully compliant / # high-risk AI systems) × 100 | Quarterly | Compliance Officer | AI Governance Committee |
| **KPI-CLS-006** | Prohibited Practice Prevention | Number of prohibited practices in development or operation | 0 (Zero tolerance) | Count of prohibited AI systems | Continuous | AI Governance Committee | Executive Management |
| **KPI-CLS-007** | Classification Accuracy | % of classifications validated as accurate in audits | ≥ 95% | (# accurate classifications in sample / # classifications audited) × 100 | Annually | Internal Audit | AI Governance Committee |
| **KPI-CLS-008** | Documentation Package Completeness | % of AI systems with complete documentation packages | 100% | (# complete documentation packages / # AI systems) × 100 | Monthly | Document Control | AI Act Program Manager |
| **KPI-CLS-009** | Authority Response Time | Average business days to respond to authority documentation requests | < 5 days | Σ (response date - request date) / # requests | Per request | Legal | Executive Management |
| **KPI-CLS-010** | Classification Register Accuracy | % of Classification Register fields complete and accurate | 100% | (# complete/accurate records / # total records) × 100 | Monthly | AI Act Program Manager | AI Governance Committee |

---

### 9.2 KPI Dashboards and Reporting

**Real-Time Dashboard** (AI Act Program Manager access)
- Current classification completeness
- Classifications due this month
- Annual reviews due this quarter
- Reclassification triggers logged (pending action)
- Prohibited practice alerts

**Monthly Management Report**
- KPI-CLS-001, 002, 004, 008, 010
- Trend analysis (vs. previous month)
- Issues and risks
- Planned actions

**Quarterly AI Governance Committee Report**
- All KPIs
- High-risk AI system inventory and compliance status
- Annual review completion status
- Reclassifications completed this quarter
- Internal audit findings (if conducted)
- Exception register review
- Regulatory update impacts

**Annual Executive Report**
- Full-year KPI performance
- Classification accuracy validation (audit results)
- Compliance maturity assessment
- Strategic recommendations
- Regulatory outlook

---

### 9.3 KPI Thresholds and Alerts

| KPI | Green (Good) | Yellow (Warning) | Red (Critical) | Alert Action |
|-----|-------------|------------------|----------------|--------------|
| **Classification Completeness** | 100% | 95-99% | < 95% | Red: Immediate escalation to AI Governance Committee Chair |
| **Classification Timeliness** | < 10 days | 10-15 days | > 15 days | Red: Escalate to AI Governance Committee; Review resource allocation |
| **Annual Review Completion** | 100% | 90-99% | < 90% | Yellow: Accelerate reviews; Red: Freeze new AI deployments until caught up |
| **Reclassification Responsiveness** | 100% | 90-99% | < 90% | Red: Escalate each overdue reclassification to AI Governance Committee |
| **High-Risk Compliance** | 100% | 95-99% | < 95% | Red: Halt high-risk AI deployments until compliant |
| **Prohibited Practice Prevention** | 0 | N/A | > 0 | Red: Immediate escalation to Executive Management + Legal |

---

## TRAINING REQUIREMENTS

### 10.1 Training Program Overview

All personnel involved in AI classification must complete role-specific training to ensure competency in EU AI Act requirements and classification procedures.

---

### 10.2 Role-Based Training Requirements

| Role | Training Course | Duration | Content | Frequency | Assessment Required |
|------|----------------|----------|---------|-----------|-------------------|
| **AI Act Program Manager** | Classification Expert Training | 16 hours | Deep dive into Article 5, Annex I, Annex III; Decision tree application; Edge cases; Legal considerations; Procedure mastery | Initial + annually | Yes - Written exam (≥90%) + Practical classification exercise |
| **AI System Owners** | Classification Overview | 4 hours | Classification categories; Classification process; Responsibilities; How to request classification; Reclassification triggers | At onboarding + annually | Yes - Knowledge check (≥80%) |
| **Product Directors / CTO** | Annex I/III Assessment Training | 6 hours | Annex I product safety requirements; Annex III use case analysis; Technical considerations; Safety component determination | Initial + annually | Yes - Practical assessment exercise |
| **Legal & Compliance** | EU AI Act Regulatory Training | 8 hours | Full EU AI Act structure; Classification legal framework; Regulatory interpretation; Borderline case analysis; Authority engagement | Initial + annually | Yes - Written exam (≥90%) |
| **All AI Development Staff** | Prohibited Practices Awareness | 2 hours | All 8 prohibited practices; Examples; How to spot prohibited practices; Escalation procedures | At onboarding + annually | Yes - Knowledge check (≥80%) |
| **AI Governance Committee Members** | AI Classification Governance | 4 hours | Classification framework overview; Governance responsibilities; Approval criteria; Risk implications; Compliance oversight | At appointment + annually | Yes - Knowledge check (≥80%) |
| **Document Control Staff** | Classification Documentation Management | 3 hours | Documentation package requirements; Document management procedures; Retention policies; Authority requests | Initial + as needed | Yes - Practical exercise |

---

### 10.3 Training Content by Topic

**Prohibited Practices Training (Article 5)**
- Detailed explanation of all 8 prohibited practices
- Real-world examples and case studies
- How to identify prohibited practices in AI design
- Legal consequences of deploying prohibited practices
- Escalation procedures
- Recent regulatory guidance and enforcement actions

**Annex I Training (Product Safety AI)**
- Overview of 12 Annex I product categories
- Union harmonization legislation framework
- What constitutes a "safety component"
- Third-party conformity assessment requirements
- Integration with product safety processes
- Case studies of Annex I AI systems

**Annex III Training (Standalone High-Risk AI)**
- Detailed analysis of all 8 Annex III categories
- Specific use cases within each category
- How to assess intended purpose and deployment context
- Edge cases and borderline scenarios
- Recent regulatory interpretations
- Industry examples across all categories

**Classification Decision Tree Training**
- Step-by-step decision tree application
- How to use assessment forms
- Documentation requirements
- When to seek legal review
- Approval processes
- Common mistakes and how to avoid them

**Classification Procedures Training**
- PROC-AI-CLS-001: Classification Procedure
- PROC-AI-CLS-002: Review and Update Procedure
- PROC-AI-CLS-003: Documentation Management
- Hands-on exercises with classification tools
- Case studies and role-playing

---

### 10.4 Training Delivery Methods

**Initial Training:**
- Instructor-led classroom or virtual training
- Includes interactive exercises and case studies
- Hands-on practice with classification tools
- Group discussions of complex scenarios

**Annual Refresher:**
- E-learning modules for core content review
- Live update sessions for regulatory changes
- Case study reviews of recent classifications
- Knowledge assessment

**On-the-Job Training:**
- Mentoring for new AI Act Program Managers
- Job shadowing during classification process
- Supervised classifications for first 5 AI systems

**Just-in-Time Training:**
- Quick reference guides and job aids
- Video tutorials on specific topics
- Help desk support from experienced classifiers

---

### 10.5 Training Effectiveness Measurement

**Assessment Methods:**
- Written exams for knowledge retention
- Practical exercises for skill application
- On-the-job observations for competency validation
- Feedback surveys for training quality

**Competency Validation:**
- AI Act Program Managers: Must correctly classify 5 sample AI systems with 100% accuracy before independent classification
- AI System Owners: Must demonstrate understanding of classification categories and their responsibilities
- All staff: Must pass knowledge assessments with minimum required scores

**Training Metrics:**
| Metric | Target | Frequency |
|--------|--------|-----------|
| Training completion rate | 100% | Quarterly |
| Assessment pass rate (first attempt) | ≥ 90% | Per training |
| Training effectiveness score (survey) | ≥ 4.0/5.0 | Per training |
| Time to competency (AI Act Program Managers) | < 30 days | Per person |

---

### 10.6 Training Records

**Records Maintained:**
- Training attendance records
- Assessment scores
- Competency validations
- Refresher training completion
- Individual training transcripts

**Retention:** 10 years (to align with EU AI Act documentation retention)

**Access:** HR, AI Act Program Manager, Internal Audit, Competent Authorities (upon request)

---

## DEFINITIONS

| Term | Definition | Source |
|------|------------|--------|
| **AI System** | Machine-based system that, for explicit or implicit objectives, infers from input how to generate outputs (predictions, content, recommendations, decisions) that can influence physical or virtual environments | EU AI Act Article 3(1) |
| **Prohibited AI Practice** | AI system use explicitly forbidden by Article 5 of the EU AI Act due to unacceptable risks to safety, livelihoods, or fundamental rights | EU AI Act Article 5 |
| **High-Risk AI System** | AI system listed in Annex III or serving as a safety component under Annex I, subject to mandatory requirements before market placement | EU AI Act Article 6, Annexes I & III |
| **Limited-Risk AI** | AI system with specific transparency obligations under Article 50 (e.g., chatbots, deepfakes, emotion recognition, biometric categorization not covered by prohibited or high-risk categories) | EU AI Act Article 50 |
| **Minimal-Risk AI** | AI system not classified as prohibited, high-risk, or limited-risk; no specific EU AI Act obligations but voluntary codes of conduct encouraged | EU AI Act (default category) |
| **Provider** | Natural or legal person, public authority, agency, or other body that develops an AI system or has an AI system developed with a view to placing it on the market or putting it into service under its own name or trademark, whether for payment or free of charge | EU AI Act Article 3(3) |
| **Deployer** | Natural or legal person, public authority, agency, or other body using an AI system under its authority, except where the AI system is used in the course of a personal non-professional activity | EU AI Act Article 3(4) |
| **Safety Component** | Component of a product or system which fulfills a safety function for that product or system or the failure or malfunctioning of which endangers the health and safety of persons or property | EU AI Act Article 3(14) |
| **Substantial Modification** | Change to an AI system after its placing on the market or putting into service which affects the compliance of the AI system with the requirements of the EU AI Act or results in a modification to the intended purpose for which the AI system has been assessed | EU AI Act Article 3(23) |
| **Intended Purpose** | Use for which an AI system is intended by the provider, including the specific context and conditions of use, as specified in the information supplied by the provider in the instructions for use, promotional or sales materials and statements, as well as in the technical documentation | EU AI Act Article 3(12) |
| **Reasonably Foreseeable Misuse** | Use of an AI system in a way that is not in accordance with its intended purpose, but which may result from reasonably foreseeable human behavior or interaction with other systems | EU AI Act Article 3(13) |
| **Classification** | Process of determining which EU AI Act risk category (prohibited, high-risk, limited-risk, or minimal-risk) applies to a specific AI system based on its characteristics, intended purpose, and deployment context | This Standard |
| **Classification Register** | Centralized database of all AI system classifications maintained by the organization, including classification decisions, rationale, dates, approvers, and current status | This Standard |
| **Reclassification** | Process of reassessing and potentially changing an AI system's classification due to substantial modifications, intended purpose changes, deployment context changes, or regulatory updates | This Standard |
| **Annex I Product** | Product covered by Union harmonization legislation listed in Annex I of the EU AI Act (e.g., machinery, medical devices, toys) where AI may serve as a safety component | EU AI Act Annex I |
| **Annex III Use Case** | Specific high-risk use case listed in Annex III of the EU AI Act across 8 categories: biometrics, critical infrastructure, education, employment, essential services, law enforcement, migration, and justice/democracy | EU AI Act Annex III |
| **Biometric Data** | Personal data resulting from specific technical processing relating to the physical, physiological, or behavioral characteristics of a natural person, which allow or confirm the unique identification of that natural person, such as facial images or dactyloscopic (fingerprint) data | EU AI Act Article 3(33) / GDPR Article 4(14) |
| **Sensitive Attributes** | Personal data revealing racial or ethnic origin, political opinions, religious or philosophical beliefs, trade union membership, genetic data, biometric data (for unique identification), health data, or data concerning sex life or sexual orientation | GDPR Article 9(1) |
| **Conformity Assessment** | Process demonstrating whether the requirements of the EU AI Act relating to a high-risk AI system have been fulfilled | EU AI Act Article 3(24) |
| **Placing on the Market** | First making available of an AI system on the Union market | EU AI Act Article 3(9) |
| **Putting into Service** | Supply of an AI system for first use directly to the deployer or for own use in the Union for its intended purpose | EU AI Act Article 3(11) |
| **CE Marking** | Marking by which a provider indicates that an AI system is in conformity with the requirements set out in the EU AI Act and other applicable Union legislation harmonising the conditions for the marketing of products | EU AI Act Article 3(22) |

---

## LINK WITH AI ACT AND ISO42001

### 12.1 EU AI Act Regulatory Mapping

This standard implements the following EU AI Act requirements:

| EU AI Act Provision | Article/Annex | Requirement Summary | Implemented By (Controls) |
|-------------------|---------------|-------------------|------------------------|
| **AI System Definition** | Article 3(1) | Defines what constitutes an AI system subject to the regulation | Scope (Section 2.2) |
| **Prohibited AI Practices** | Article 5 | Lists 8 AI practices that are prohibited due to unacceptable risk | CLS-001 |
| **Classification Rules for High-Risk AI** | Article 6 | Defines how to identify high-risk AI systems | CLS-002, CLS-003, CLS-004 |
| **Annex I: Product Safety AI** | Annex I | Lists 12 product categories where AI safety components are high-risk | CLS-002 |
| **Annex III: Standalone High-Risk Use Cases** | Annex III | Lists 8 categories of high-risk standalone AI systems | CLS-003 |
| **Transparency Obligations** | Article 50 | Requires disclosure for certain AI systems (chatbots, deepfakes, etc.) | CLS-004 (decision tree) |
| **Provider Obligations** | Articles 16, 17, 25 | Requires providers to ensure AI systems are classified and compliant | CLS-005, CLS-006, CLS-007 |
| **Documentation Requirements** | Article 11, Annex IV | Requires technical documentation (classification is prerequisite) | CLS-009 |
| **Record Keeping** | Article 12, Article 18 | Requires 10-year retention of documentation | CLS-009 |
| **Conformity Assessment** | Article 43 | Requires conformity assessment for high-risk AI (classification determines procedure) | CLS-004 (triggers STD-AI-010) |

---

### 12.2 ISO/IEC 42001:2023 Alignment

This standard aligns with ISO/IEC 42001:2023 (Artificial Intelligence Management System) as follows:

| ISO 42001 Clause | Requirement | Implementation in This Standard |
|-----------------|-------------|-------------------------------|
| **Clause 4.1: Understanding the organization and its context** | Understand external issues affecting AI management system (including legal/regulatory requirements) | Section 2 (Scope and Applicability); Section 12.1 (EU AI Act mapping) |
| **Clause 4.2: Understanding needs and expectations of interested parties** | Identify interested parties and their requirements | Roles & Responsibilities (Section 6); Stakeholder communication through classification |
| **Clause 5.2: AI policy** | Establish AI policy including regulatory compliance commitment | Links to parent POL-AI-001; Classification as first step in compliance |
| **Clause 6.1: Actions to address risks and opportunities** | Risk-based approach to AI management | Classification determines risk level and compliance obligations |
| **Clause 6.1.2: AI system impact assessment** | Assess AI systems for risks to individuals, groups, society, environment | Prohibited practice assessment (CLS-001); High-risk assessment (CLS-002, CLS-003) |
| **Clause 6.2: AI objectives** | Establish measurable AI objectives | KPIs (Section 9) |
| **Clause 7.2: Competence** | Ensure persons have appropriate competence | Training Requirements (Section 10) |
| **Clause 7.5: Documented information** | Maintain documented information | Classification documentation packages (CLS-009) |
| **Clause 8.2: AI system risk assessment** | Establish process for AI risk assessment throughout lifecycle | Classification as initial risk assessment; Links to STD-AI-002 (Risk Management) |
| **Clause 9.1: Monitoring, measurement, analysis, and evaluation** | Monitor and measure AI management system performance | Compliance monitoring (Section 5); KPIs (Section 9) |
| **Clause 9.2: Internal audit** | Conduct internal audits | Internal audit requirements (Section 5.2) |
| **Clause 9.3: Management review** | Conduct management reviews | AI Governance Committee quarterly reviews |
| **Clause 10.1: Nonconformity and corrective action** | Address nonconformities | Enforcement (Section 8); Reclassification (CLS-007, CLS-008) |
| **Clause 10.2: Continual improvement** | Continually improve AI management system | Annual reviews (CLS-006); KPI tracking; Procedure improvements |

---

### 12.3 Relationship to Other Standards

This classification standard is the **foundational standard** that determines which other AI Act standards apply:

| Classification Result | Triggered Standards (Mandatory) | Rationale |
|---------------------|-------------------------------|-----------|
| **PROHIBITED** | None (system must not be developed/deployed) | Article 5 prohibition |
| **HIGH-RISK (Annex I or III)** | All of the following: | Articles 8-15, 17-18, 43, 49, 72-73 |
| | • STD-AI-002: Risk Management | Article 9 |
| | • STD-AI-003: Data Governance | Article 10 |
| | • STD-AI-004: Technical Documentation | Article 11 |
| | • STD-AI-005: Logging and Record Keeping | Article 12 |
| | • STD-AI-006: Transparency | Article 13 |
| | • STD-AI-007: Human Oversight | Article 14 |
| | • STD-AI-008: Accuracy, Robustness, Security | Article 15 |
| | • STD-AI-009: Quality Management | Article 17 |
| | • STD-AI-010: Conformity Assessment | Article 43 |
| | • STD-AI-011: Registration | Article 49 |
| | • STD-AI-012: Post-Market Monitoring | Article 72 |
| | • STD-AI-013: Incident Management | Article 73 |
| | • STD-AI-014: AI Literacy and Training | Article 4 |
| **LIMITED-RISK** | • STD-AI-006: Transparency (Article 50 obligations only) | Article 50 |
| **MINIMAL-RISK** | None (voluntary best practices recommended) | No specific EU AI Act obligations |

**Classification Decision Impact:**
- Classification determines **regulatory burden** (none to comprehensive)
- Classification determines **time to market** (minimal-risk: fast; high-risk: months for conformity assessment)
- Classification determines **ongoing compliance costs** (minimal-risk: low; high-risk: significant)
- Classification determines **regulatory oversight** (minimal-risk: none; high-risk: authority supervision)

---

### 12.4 References and Related Documents

**EU AI Act (Regulation (EU) 2024/1689):**
- Full text: [Official Journal of the European Union]
- Article 3: Definitions
- Article 5: Prohibited AI Practices
- Article 6: Classification Rules for High-Risk AI Systems
- Annex I: List of Union Harmonization Legislation
- Annex III: High-Risk AI Systems
- Article 50: Transparency Obligations for Certain AI Systems

**ISO/IEC Standards:**
- ISO/IEC 42001:2023: Information technology — Artificial intelligence — Management system
- ISO/IEC 23894:2023: Information technology — Artificial intelligence — Guidance on risk management
- ISO/IEC 5338:2023: Information technology — Artificial intelligence — AI system life cycle processes

**Internal Documents:**
- POL-AI-001: Artificial Intelligence Policy (parent policy)
- STD-AI-002 through STD-AI-014: Related AI Act compliance standards
- PROC-AI-CLS-001, -002, -003: Classification procedures

**External Guidance:**
- European Commission: AI Act Implementation Guidance
- European AI Office: Classification Guidelines
- National Competent Authorities: Jurisdiction-specific guidance

---

## APPROVAL AND AUTHORIZATION

| Role | Name | Title | Signature | Date |
|------|------|-------|-----------|------|
| **Prepared By** | Sarah Johnson | AI Act Program Manager | _________________ | ________ |
| **Reviewed By** | Michael Brown | Chief Legal Officer | _________________ | ________ |
| **Reviewed By** | David Lee | Chief Technology Officer | _________________ | ________ |
| **Reviewed By** | Jane Doe | Chief Strategy & Risk Officer | _________________ | ________ |
| **Approved By** | Jane Doe | AI Governance Committee Chair | _________________ | ________ |

**Effective Date:** 2025-08-01  
**Next Review Date:** 2026-08-01  
**Review Frequency:** Annually or upon regulatory change

---

**END OF STANDARD STD-AI-001**

---

*This standard is a living document. Feedback and improvement suggestions should be directed to the AI Act Program Manager.*
