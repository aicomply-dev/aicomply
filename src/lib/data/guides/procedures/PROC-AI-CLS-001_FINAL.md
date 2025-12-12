# PROC-AI-CLS-001: AI System Classification Procedure

**Procedure ID:** PROC-AI-CLS-001
**Procedure Name:** AI System Classification Procedure
**Standard:** STD-AI-001: AI System Classification Standard
**Covers Controls:** CLS-001, CLS-002, CLS-003, CLS-004, CLS-005, CLS-006, CLS-007
**Effective Date:** [To be filled]
**Last Updated:** [To be filled]
**Next Review Date:** [To be filled]
**Approval Status:** [Draft/Approved]

---

## TABLE OF CONTENTS

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Roles and Responsibilities](#2-roles-and-responsibilities)
3. [Classification Framework](#3-classification-framework)
4. [Step-by-Step Procedure](#4-step-by-step-procedure)
5. [General Purpose AI (GPAI) Classification](#5-general-purpose-ai-gpai-classification)
6. [Control Mechanisms](#6-control-mechanisms)
7. [KPIs and Metrics](#7-kpis-and-metrics)
8. [Documentation Requirements](#8-documentation-requirements)
9. [Review and Audit](#9-review-and-audit)
10. [Non-Compliance Handling](#10-non-compliance-handling)
11. [Related Documents](#11-related-documents)
12. [Appendices](#12-appendices)

---

## 1. PURPOSE AND SCOPE

### 1.1 Purpose

This procedure establishes the mandatory, step-by-step process for classifying all AI systems according to the EU AI Act's risk categories (prohibited, high-risk, limited-risk, minimal-risk, and General Purpose AI). Its purpose is to ensure that every AI system is accurately classified before development begins and is re-evaluated throughout its lifecycle, guaranteeing that the appropriate compliance obligations are applied consistently and correctly.

### 1.2 Scope

This procedure applies to:
- All systems meeting the EU AI Act definition of an "AI system"
- All General Purpose AI (GPAI) models per Articles 51-56
- All AI systems at any lifecycle stage (design, development, deployment, operation)
- All AI systems developed internally or by third parties on behalf of the organization
- All AI systems integrated from upstream GPAI providers

This procedure does not apply to:
- AI systems used exclusively for personal, non-professional activity
- AI systems used exclusively for military, defense, or national security purposes

### 1.3 Regulatory Basis

This procedure implements:
- **EU AI Act Articles 5, 6, 7, 50:** Prohibited practices, high-risk classification, limited-risk transparency
- **EU AI Act Articles 51-56:** General Purpose AI model requirements
- **Annex I:** Products covered by Union harmonisation legislation
- **Annex III:** High-risk AI system use cases

### 1.4 Procedure Owner and Contacts

| Role | Name | Title | Contact |
|---|---|---|---|
| **Procedure Owner** | [Name] | AI Act Program Manager | [Email/Phone] |
| **Escalation** | [Name] | Chief Legal Officer | [Email/Phone] |
| **Governance** | [Name] | AI Governance Committee Chair | [Email/Phone] |

---

## 2. ROLES AND RESPONSIBILITIES

### 2.1 Key Roles

| Role | Responsibility | Authority |
|---|---|---|
| **AI Act Program Manager** | Owns and executes the classification process; maintains the AI System Register; provides final sign-off on classifications | Approve final classifications; escalate borderline cases to the AI Governance Committee |
| **AI System Owner** | Initiates classification requests; provides all necessary information; implements required controls based on classification | Propose initial classification; challenge classification decisions |
| **Chief Legal Officer (CLO)** | Provides binding legal interpretation of the AI Act, especially for prohibited practices and high-risk definitions | Veto a proposed classification on legal grounds; mandate re-classification |
| **AI Governance Committee** | Reviews and approves all high-risk classifications; resolves escalated or disputed classifications | Approve high-risk classifications; block deployment of improperly classified systems |
| **GPAI Compliance Officer** | Assesses GPAI model systemic risk; manages GPAI-specific obligations | Classify GPAI models; approve GPAI compliance documentation |

### 2.2 RACI Matrix

| Activity | AI Act Program Manager | AI System Owner | CLO | AI Gov Committee | GPAI Officer |
|---|---|---|---|---|---|
| Prohibited Practice Screening | A | R | C | I | I |
| High-Risk Annex I Assessment | A | R | C | I | I |
| High-Risk Annex III Assessment | A | R | C | I | I |
| GPAI Model Classification | C | R | I | I | A |
| Final Classification Decision | R | C | C | A (for High-Risk) | C |
| AI System Register Maintenance | R | C | I | I | C |
| Re-classification Assessment | A | R | C | C | C |

**Legend:** A=Accountable, R=Responsible, C=Consulted, I=Informed

---

## 3. CLASSIFICATION FRAMEWORK

### 3.1 Classification Decision Flow

The classification process follows a strict, sequential decision tree to determine the risk level of an AI system.

```
┌────────────────────────────────────────────────────────────────────┐
│              AI SYSTEM CLASSIFICATION DECISION TREE                 │
└────────────────────────────────────────────────────────────────────┘

START: New AI System or GPAI Model
│
├─ Step 1: Is this a GPAI model? (Articles 51-56)
│  ├─ YES → Proceed to Section 5 (GPAI Classification)
│  └─ NO → Continue to Step 2
│
├─ Step 2: Prohibited Practice Screening (Article 5)
│  ├─ YES → HALT - PROHIBITED (Cannot develop/deploy)
│  └─ NO → Continue to Step 3
│
├─ Step 3: Annex I High-Risk? (Article 6)
│  ├─ YES → CLASSIFIED: HIGH-RISK
│  └─ NO → Continue to Step 4
│
├─ Step 4: Annex III High-Risk? (Article 7)
│  ├─ YES → Continue to Step 5
│  └─ NO → Continue to Step 6
│
├─ Step 5: Significant Risk of Harm Assessment
│  ├─ YES → CLASSIFIED: HIGH-RISK
│  └─ NO → Continue to Step 6
│
├─ Step 6: Limited-Risk Transparency Obligations? (Article 50)
│  ├─ YES → CLASSIFIED: LIMITED-RISK
│  └─ NO → CLASSIFIED: MINIMAL-RISK
│
END: Apply Classification-Specific Controls
```

### 3.2 Lifecycle Integration

Classification is not a one-time event. It is integrated into the AI system lifecycle.

| Lifecycle Phase | Classification Activities | Gate Criteria |
|---|---|---|
| **1. Design** | Initial classification assessment performed; GPAI provider obligations assessed | Classification approved before development starts |
| **2. Development** | Monitor for changes that could impact classification | No changes triggering re-classification |
| **3. Deployment** | Final classification verification before deployment | Final classification confirmed and documented |
| **4. Operation** | Annual re-classification review; trigger-based re-classification on substantial modification | Annual review completed; re-classification performed if needed |

### 3.3 Risk Categories and Obligations

| Classification | Risk Level | Compliance Obligations | Controls Required | Monitoring |
|---|---|---|---|---|
| **Prohibited** | Extreme | Project must be halted; no deployment allowed | None - system cannot be developed | N/A |
| **High-Risk** | High | Full EU AI Act compliance; technical documentation; conformity assessment; registration | All controls in STD-AI-002 through STD-AI-014 | Continuous monitoring; annual review |
| **Limited-Risk** | Medium | Transparency obligations; disclosure requirements | Transparency controls; user notification | Periodic review (annually) |
| **Minimal-Risk** | Low | General compliance; best practices recommended | Basic governance; documentation | As needed |
| **GPAI (Standard)** | Variable | Transparency; technical documentation; copyright compliance | Model cards; documentation; instructions | Periodic review |
| **GPAI (Systemic Risk)** | High | Enhanced obligations; systemic risk evaluation; adversarial testing | All standard GPAI controls + enhanced testing | Continuous monitoring |

---

## 4. STEP-BY-STEP PROCEDURE

### PHASE 1: INITIAL CLASSIFICATION

#### **Step 1.1: Prohibited Practice Screening (Control CLS-001)**

**When:** Before any development work begins on a new AI system proposal

**Who:** AI System Owner, with mandatory review by the AI Act Program Manager and CLO

**How:**

1. **Initiate Classification Request**
   - AI System Owner submits a classification request via the AI System Classification Request Form (TMP-AI-CLS-001)
   - The form includes: system name, intended purpose, use case description, target users, and deployment context
   - AI Act Program Manager assigns a unique classification ID (e.g., CLS-2025-001)
   - Classification request is logged in the AI System Register

2. **Screen for Prohibited Practices**
   - AI System Owner completes the **Prohibited Practice Assessment Form** (part of TMP-AI-CLS-001)
   - The form requires a detailed assessment against all 8 prohibited practices defined in Article 5(1) of the Act:

   **Article 5(1) Prohibited AI Practices:**

   a) **Subliminal techniques:** AI systems that deploy subliminal techniques beyond a person's consciousness to materially distort behavior in a manner that causes or is likely to cause harm

   b) **Vulnerability exploitation:** AI systems that exploit vulnerabilities of specific groups (age, disability) to materially distort behavior in a manner that causes or is likely to cause harm

   c) **Social scoring by public authorities:** AI systems used by public authorities or on their behalf for social scoring purposes

   d) **Real-time remote biometric identification in publicly accessible spaces:** For law enforcement purposes, except in strictly limited cases (preventing immediate threat, victim identification, serious criminal offenses)

   e) **Biometric categorization systems inferring sensitive attributes:** AI systems that infer race, political opinions, trade union membership, religious or philosophical beliefs, sex life, or sexual orientation (with exceptions for law enforcement)

   f) **Emotion recognition in workplace/education:** AI systems for emotion recognition in workplaces and educational institutions (with exceptions for medical or safety reasons)

   g) **Facial recognition database scraping:** AI systems that create or expand facial recognition databases through untargeted scraping of facial images from the internet or CCTV footage

   h) **Risk assessment for criminal offenses:** AI systems that assess risk of natural persons committing criminal offenses based solely on profiling or personality traits (with exceptions for augmenting human assessment)

   - For each prohibited practice, the AI System Owner provides: whether the system uses this practice, justification if unclear, and supporting evidence

3. **Review Assessment**
   - AI Act Program Manager reviews the completed form for accuracy, completeness, and quality of justification
   - **Decision Point:** If the system potentially falls under any prohibited practice, the CLO must be engaged for a binding legal opinion. The project is paused pending this opinion
   - If the CLO confirms the system is a prohibited practice, all work on the project is **immediately and permanently halted**
   - The decision and its legal basis are logged in the AI System Register with classification status "PROHIBITED - DO NOT DEVELOP"

4. **Document Screening Results**
   - Complete the Prohibited Practice Screening Report (REC-AI-CLS-001)
   - If system passes screening, proceed to Step 1.2
   - If system fails screening, document the prohibition and notify all stakeholders

**Evidence Required:**
- Completed and signed Prohibited Practice Assessment Form
- Binding legal opinion from CLO for any borderline or confirmed cases
- Entry in the AI System Register with final determination and rationale
- Prohibited Practice Screening Report (REC-AI-CLS-001)

**Timing:** 1 week from new system proposal

**Quality Check:**
- 100% of new AI systems are screened before any development resources are allocated
- CLO sign-off is obtained for all cases that are not clearly and unambiguously outside the prohibited categories
- Documentation is complete and defensible in an audit

---

#### **Step 1.2: High-Risk Annex I Assessment (Control CLS-002)**

**When:** Immediately after passing the prohibited practice screen

**Who:** AI System Owner, reviewed by AI Act Program Manager

**How:**

1. **Assess Product Classification**
   - AI System Owner completes the **Annex I Assessment Form** (part of TMP-AI-CLS-001)
   - This requires performing the three-part test for Annex I classification:
     1. Is the AI system intended to be used as a safety component of a product, or is it itself a product, covered by the Union harmonisation legislation listed in Annex I (e.g., machinery, toys, medical devices)?
     2. Is the product subject to a third-party conformity assessment related to health and safety risks under the legislation listed in Annex I?
     3. Does the AI system's operation directly affect the safety of the product?

2. **Determine Safety Component Status**
   - Review the product's technical specifications and safety requirements
   - Assess whether the AI system is a "safety component" (i.e., its failure could directly cause harm)
   - Document the reasoning with specific references to product specifications
   - Obtain confirmation from the Product Manager and Engineering Lead

3. **Verify Applicable Legislation**
   - Identify the relevant Annex I legislation (e.g., Machinery Directive 2006/42/EC, Medical Devices Regulation 2017/745)
   - Confirm that the product is subject to third-party conformity assessment
   - Document the applicable legislation and conformity assessment requirements

4. **Make Classification Decision**
   - **Decision Point:** If the answer to all three questions is YES, the system is classified as **High-Risk (Annex I)**
   - The process stops here, the classification is recorded, and the AI Governance Committee is notified
   - If any answer is NO, proceed to Step 1.3 (Annex III Assessment)

5. **Document Assessment**
   - Complete the Annex I Assessment Report (REC-AI-CLS-002)
   - Include the three-part test results, supporting evidence, and the final classification decision

**Evidence Required:**
- Completed and signed Annex I Assessment Form
- Clear identification of the relevant Annex I legislation
- Product technical specifications and safety documentation
- Justification for the determination of "safety component" if applicable
- Annex I Assessment Report (REC-AI-CLS-002)

**Timing:** 1-2 days

**Quality Check:**
- The determination of "safety component" is well-documented and defensible, with reference to the product's technical specifications
- All three parts of the test are clearly answered with supporting evidence

---

#### **Step 1.3: High-Risk Annex III Assessment (Control CLS-003)**

**When:** If the system is not classified as high-risk under Annex I

**Who:** AI System Owner, reviewed by AI Act Program Manager

**How:**

1. **Assess Use Case Classification**
   - AI System Owner completes the **Annex III Assessment Form** (part of TMP-AI-CLS-001)
   - This requires assessing if the AI system's intended purpose falls into one of the 8 high-risk use cases defined in Annex III:

   **Annex III High-Risk Use Cases:**

   1. **Biometric identification and categorization of natural persons**
      - Remote biometric identification systems
      - Biometric categorization systems

   2. **Management and operation of critical infrastructure**
      - AI systems for traffic and water/gas/heating/electricity supply management

   3. **Education and vocational training**
      - AI systems for admission, assessment, evaluation of learning outcomes
      - AI systems for monitoring and detecting prohibited behavior during tests

   4. **Employment, workers management and access to self-employment**
      - AI systems for recruitment, screening, filtering, evaluation
      - AI systems for task allocation, monitoring, evaluation of performance

   5. **Access to and enjoyment of essential private services and public services and benefits**
      - AI systems for creditworthiness assessment
      - AI systems for risk assessment and pricing of life/health insurance
      - AI systems for eligibility for public assistance benefits/services
      - AI systems for emergency response services dispatch and prioritization

   6. **Law enforcement**
      - AI systems for risk assessment of potential victims of criminal offenses
      - AI systems for polygraph and similar tools
      - AI systems for evaluation of reliability of evidence
      - AI systems for crime analytics, detection, investigation, prosecution
      - AI systems for migration, asylum, border control management

   7. **Migration, asylum and border control management**
      - AI systems for polygraph and similar tools
      - AI systems for risk assessment of irregular immigration or security/health risks
      - AI systems for examination of asylum applications
      - AI systems for detection of persons for law enforcement purposes

   8. **Administration of justice and democratic processes**
      - AI systems for assisting judicial authorities in researching and interpreting facts and law

2. **Map to Annex III Category**
   - For each Annex III category, assess whether the AI system's intended purpose falls within that category
   - Document the mapping with specific reference to the system's intended purpose and use case
   - Obtain confirmation from the Product Manager and relevant subject matter experts

3. **Make Classification Decision**
   - **Decision Point:** If the system's intended purpose clearly falls into one of these categories, proceed to Step 1.4 (Significant Risk of Harm Assessment)
   - If not, proceed to Step 1.5 (Limited-Risk Assessment)

4. **Document Assessment**
   - Complete the Annex III Assessment Report (REC-AI-CLS-003)
   - Include the mapping to Annex III categories, supporting evidence, and the decision to proceed

**Evidence Required:**
- Completed and signed Annex III Assessment Form
- Clear mapping of the AI system's intended purpose to a specific Annex III category and sub-category
- Annex III Assessment Report (REC-AI-CLS-003)

**Timing:** 1-2 days

**Quality Check:**
- The mapping to an Annex III category is accurate, specific, and justifiable based on the system's intended purpose statement
- The assessment is thorough and considers all relevant aspects of the use case

---

#### **Step 1.4: Significant Risk of Harm Assessment (Control CLS-004)**

**When:** Only for systems that fall under an Annex III category

**Who:** AI System Owner, reviewed by AI Act Program Manager

**How:**

1. **Assess Harm Potential**
   - For an Annex III system, a formal assessment must be conducted to determine if it poses a **significant risk of harm** to the health, safety, or fundamental rights of natural persons
   - AI System Owner completes the **Significant Risk of Harm Assessment Form** (part of TMP-AI-CLS-001)

2. **Evaluate Risk Factors**
   - The assessment must consider:
     - **Intensity:** The severity of potential harm (e.g., physical injury, financial loss, discrimination)
     - **Scope:** The number of persons who could be affected
     - **Vulnerability:** The vulnerability of the persons or groups likely to be affected (e.g., children, elderly, persons with disabilities)
     - **Reversibility:** Whether the harm is reversible or permanent
     - **Likelihood:** The probability that the harm will occur

3. **Conduct Risk Analysis**
   - Document specific scenarios where the system could cause harm
   - Assess the likelihood and severity of each scenario
   - Consider both direct and indirect harms
   - Evaluate the system's design and safeguards that might mitigate the harm

4. **Make Classification Decision**
   - **Decision Point:** If the assessment concludes the system *does* pose a significant risk of harm, it is classified as **High-Risk (Annex III)**
   - The process stops here, the classification is recorded, and the AI Governance Committee is notified
   - If it *does not* pose a significant risk, the provider must document this assessment and register the system in the EU database
   - The process then proceeds to the Limited-Risk Assessment (Step 1.5)

5. **Document Assessment**
   - Complete the Significant Risk of Harm Assessment Report (REC-AI-CLS-004)
   - Include the risk analysis, supporting evidence, and the final classification decision

**Evidence Required:**
- Completed Significant Risk of Harm Assessment with detailed justification and supporting evidence
- Approval of the assessment by the AI Act Program Manager
- For systems deemed not to pose a significant risk, proof of registration in the EU database
- Significant Risk of Harm Assessment Report (REC-AI-CLS-004)

**Timing:** 3-5 days

**Quality Check:**
- The assessment of "significant risk" is thorough, evidence-based, and well-documented
- All relevant risk factors are considered
- The reasoning is defensible in an audit or regulatory review

---

#### **Step 1.5: Limited-Risk and Minimal-Risk Classification (Controls CLS-005, CLS-006)**

**When:** If a system is not classified as high-risk

**Who:** AI Act Program Manager

**How:**

1. **Assess Transparency Obligations**
   - Assess if the system has specific transparency obligations under Article 50:
     - Systems that interact directly with natural persons (chatbots, virtual assistants)
     - Emotion recognition systems
     - Biometric categorization systems
     - AI systems that generate or manipulate image, audio, or video content (deepfakes)
   - Complete the **Limited-Risk Assessment Form** (part of TMP-AI-CLS-001)

2. **Make Classification Decision**
   - **Decision Point:** If the system is subject to these transparency obligations, it is classified as **Limited-Risk**
   - If the system is not high-risk and has no specific transparency obligations, it is classified as **Minimal-Risk**

3. **Record Classification**
   - The final classification is recorded in the AI System Register with the date and rationale
   - For Limited-Risk systems, document the specific transparency obligations that apply

4. **Notify Stakeholders**
   - Notify the AI System Owner of the final classification
   - Provide guidance on applicable compliance obligations

**Evidence Required:**
- Final classification decision documented in the AI System Register
- For Limited-Risk systems, a record of the specific transparency obligations that apply
- Limited-Risk Assessment Form (REC-AI-CLS-005)

**Timing:** 1 day

---

### PHASE 2: ONGOING MANAGEMENT

#### **Step 2.1: Maintain AI System Register (Control CLS-007)**

**When:** Continuously

**Who:** AI Act Program Manager

**How:**

1. **Maintain Central Register**
   - Maintain a centralized **AI System Register** (TMP-AI-CLS-002) for all AI systems in the organization
   - The register must include, at a minimum:
     - System name and unique ID
     - System owner and contact information
     - Brief description of intended purpose
     - Classification (Prohibited, High-Risk, Limited-Risk, Minimal-Risk, GPAI)
     - Date of classification
     - Rationale for classification
     - Status (In Development, Deployed, Decommissioned)
     - For GPAI: Provider type (upstream/downstream), systemic risk designation

2. **Update Register**
   - Update the register whenever a new system is classified
   - Update the register whenever a system's classification changes
   - Update the register whenever a system's status changes

3. **Review and Governance**
   - The register is the single source of truth for AI system classifications
   - The register is reviewed quarterly by the AI Governance Committee
   - Any discrepancies or questions are escalated to the AI Act Program Manager

**Evidence Required:**
- An up-to-date AI System Register
- Quarterly review minutes from the AI Governance Committee

**Timing:** Ongoing

---

#### **Step 2.2: Re-classification on Substantial Modification (Control CLS-008)**

**When:** Whenever a substantial modification is proposed for an existing AI system

**Who:** AI System Owner

**How:**

1. **Identify Substantial Modification**
   - A substantial modification is defined as any change that could affect the system's classification, including:
     - Change in intended purpose
     - Significant change in the model architecture
     - Change in the data used that could alter its risk profile
     - Change in the system's deployment context or target users

2. **Initiate Re-classification**
   - AI System Owner notifies the AI Act Program Manager of the proposed modification
   - AI Act Program Manager initiates a full re-classification process, starting from **Step 1.1: Prohibited Practice Screening**

3. **Conduct Full Assessment**
   - The system is treated as a new system, and all classification steps are repeated
   - No development work on the substantial modification may begin until the re-classification is complete and approved

4. **Update Register**
   - Upon completion of re-classification, the AI System Register is updated with the new classification (if changed) and the date of the modification

**Evidence Required:**
- A new, complete classification assessment for the modified system
- Updated entry in the AI System Register
- Documentation of the substantial modification and its rationale

**Timing:** Before the modification is deployed

---

#### **Step 2.3: Annual Classification Review (Control CLS-009)**

**When:** Annually for all deployed AI systems

**Who:** AI Act Program Manager

**How:**

1. **Schedule Annual Review**
   - Schedule an annual review of all deployed AI systems, typically in Q1 of each year
   - Notify all AI System Owners of the review schedule

2. **Conduct Review**
   - For each deployed AI system, review:
     - Whether the system's classification remains accurate based on current deployment and usage
     - Whether there have been any changes to the AI Act or its implementing acts that could affect the classification
     - Whether there have been any incidents or issues that could affect the classification
   - Complete the **Annual Classification Review Form** (part of TMP-AI-CLS-001)

3. **Update Classifications**
   - If the review identifies that a system's classification should change, initiate a formal re-classification process
   - Update the AI System Register with the results of the review

4. **Report Results**
   - Prepare the **Annual Classification Review Report** (REC-AI-CLS-006)
   - Present the results to the AI Governance Committee
   - Highlight any systems with changed classifications or any areas of concern

**Evidence Required:**
- Record of the annual classification review, including a list of all systems reviewed and the outcome
- Annual Classification Review Form (part of TMP-AI-CLS-001)
- Minutes from the AI Governance Committee meeting where the review was presented
- Annual Classification Review Report (REC-AI-CLS-006)

**Timing:** Annually

---

## 5. GENERAL PURPOSE AI (GPAI) CLASSIFICATION

### 5.1 GPAI Model Identification

**When:** When evaluating any AI model that could be a GPAI model

**Who:** GPAI Compliance Officer + AI System Owner

**Regulatory Basis:** Articles 51-56 of the EU AI Act

**How:**

1. **Assess GPAI Criteria**

   A General Purpose AI model is defined as an AI model that:
   - Displays significant generality
   - Is capable of competently performing a wide range of distinct tasks
   - Can be integrated into a variety of downstream systems or applications (except tools for R&D before market release)

   Complete the **GPAI Model Identification Assessment** (part of TMP-AI-CLS-003)

2. **Determine Provider Type**

   | Provider Type | Definition | Obligations |
   |---------------|------------|-------------|
   | **GPAI Model Provider** | Develops or has a GPAI model developed and releases it on the market under own name/trademark | Articles 53-54 obligations; technical documentation; model cards; copyright compliance |
   | **Downstream Provider** | Uses GPAI model to develop/deploy AI system | Compliance with system-level requirements; due diligence on upstream provider |

3. **Assess Market Placement**
   - Is the model released under a free and open-source license?
   - Are source code, model parameters, and training data publicly available?
   - Does the model meet free and open-source exemptions per Article 51(2)?

4. **Document GPAI Determination**
   - Complete GPAI Model Identification Report (REC-AI-GPAI-001)
   - Record provider type and exemption status
   - Add to AI System Register with GPAI designation

**Evidence Required:**
- GPAI Model Identification Assessment (part of TMP-AI-CLS-003)
- GPAI Model Identification Report (REC-AI-GPAI-001)
- Updated AI System Register

**Timing:** 2-3 days

---

### 5.2 Systemic Risk Assessment

**When:** For all GPAI models identified in Step 5.1

**Who:** GPAI Compliance Officer + Technical Team

**Regulatory Basis:** Article 51(1)(b) defines GPAI models with systemic risk

**How:**

1. **Apply Computational Threshold Test**

   **Primary Test:** Does the GPAI model have high impact capabilities, determined by:
   - Training compute used for model training ≥ **10²⁵ floating point operations (FLOPs)**?

   | Compute Level | Classification | Obligations |
   |---------------|---------------|-------------|
   | < 10²⁵ FLOPs | Standard GPAI | Articles 53-54 |
   | ≥ 10²⁵ FLOPs | GPAI with Systemic Risk | Articles 53-55 (enhanced) |

2. **Apply Alternative Designation Test**

   Even if below the FLOP threshold, the European AI Office may designate a model as having systemic risk based on:
   - Capabilities or impact equivalent to models at/above FLOP threshold
   - Reasoning based on criteria in Annex XIII:
     - Number of parameters
     - Quality or size of training dataset
     - Modalities (text, image, audio, video)
     - Tools and level of autonomy
     - Specific risk posed by the model
     - Reach (number of users, revenue)
     - Market share

3. **Document Systemic Risk Determination**

   Complete **GPAI Systemic Risk Assessment** (part of TMP-AI-CLS-003):
   - Training compute calculation and documentation
   - Annex XIII criteria evaluation
   - European AI Office designation status (if applicable)
   - Rationale for systemic risk determination

4. **Apply Enhanced Obligations (if Systemic Risk)**

   If classified as GPAI with systemic risk, the following **additional** obligations apply:

   | Obligation | Article | Description |
   |------------|---------|-------------|
   | Model Evaluation | 55(1)(a) | Perform and document model evaluation per standardised protocols |
   | Adversarial Testing | 55(1)(b) | Assess and mitigate systemic risks (red teaming, adversarial testing) |
   | Incident Tracking | 55(1)(c) | Track, document, and report serious incidents |
   | Cybersecurity | 55(1)(d) | Ensure adequate level of cybersecurity protection |
   | Codes of Practice | 56 | Follow codes of practice or harmonised standards |

5. **Register Systemic Risk Determination**
   - Update AI System Register with systemic risk designation
   - Notify AI Governance Committee of systemic risk classification
   - Implement enhanced monitoring and controls

**Evidence Required:**
- GPAI Systemic Risk Assessment (part of TMP-AI-CLS-003)
- Training compute calculations and documentation
- Annex XIII criteria evaluation
- European AI Office designation documentation (if applicable)
- Updated AI System Register
- AI Governance Committee notification

**Timing:** 1-2 weeks

**Quality Check:**
- Training compute calculations are accurate and verifiable
- Annex XIII criteria are thoroughly documented
- Enhanced obligations are identified and assigned

---

### 5.3 GPAI Provider Obligations Matrix

| Obligation | Standard GPAI (Art. 53) | Systemic Risk GPAI (Art. 55) |
|------------|------------------------|------------------------------|
| **Technical Documentation** | ✅ Required | ✅ Required + Enhanced |
| **Information to Downstream Providers** | ✅ Required | ✅ Required |
| **Policy on Copyright Compliance** | ✅ Required | ✅ Required |
| **Publicly Available Summary** | ✅ Required | ✅ Required |
| **Model Evaluation Protocol** | ❌ Not Required | ✅ Required |
| **Systemic Risk Assessment** | ❌ Not Required | ✅ Required |
| **Adversarial Testing** | ❌ Not Required | ✅ Required |
| **Serious Incident Tracking** | ❌ Not Required | ✅ Required |
| **Cybersecurity Measures** | ❌ Not Required | ✅ Required |

### 5.4 Free and Open-Source Exemptions

**Article 51(2) Exemption Criteria:**

GPAI models released under a free and open-source license are exempt from certain obligations if:

1. **License Type:**
   - Model released under free and open-source license
   - License allows access, use, modification, and distribution

2. **Public Availability:**
   - Model parameters (including weights, biases, architecture)
   - Information about training data (dataset characteristics, provenance, methodologies)
   - Training code (if technically feasible)

3. **Exclusions from Exemption:**
   - Exemption does **NOT** apply if:
     - Model qualifies as GPAI with systemic risk per Article 51(1)(b)
     - Provider applies downstream restrictions that contradict free/open license

**Documentation Requirements for Exemption:**
- Verify license is approved open-source license (OSI-approved, Creative Commons, etc.)
- Document public availability of model, parameters, training data info
- Confirm no systemic risk designation applies
- Record exemption in AI System Register

---

### 5.5 GPAI Downstream Provider Due Diligence

**When:** When integrating GPAI models from upstream providers into AI systems

**Who:** AI System Owner + GPAI Compliance Officer

**How:**

1. **Verify Upstream Provider Compliance**
   - Request and review GPAI model documentation (Article 53 compliance)
   - Verify upstream provider is on EU compliance register
   - Request model card and technical documentation
   - Assess upstream provider's EU AI Act compliance posture

2. **Assess System-Level Classification**
   - Even if using a compliant GPAI model, assess the downstream system classification
   - Apply standard classification process (Steps 1.1-1.5)
   - Document how GPAI model is integrated and used

3. **Document Due Diligence**
   - Complete **GPAI Downstream Provider Assessment** (part of TMP-AI-CLS-003)
   - Record upstream provider compliance verification
   - Document system-level classification
   - Add to AI System Register

**Evidence Required:**
- GPAI Downstream Provider Assessment (part of TMP-AI-CLS-003)
- Upstream provider documentation (model card, technical docs)
- Upstream provider compliance verification
- System-level classification documentation

**Timing:** 1 week

---

## 6. CONTROL MECHANISMS

This section documents the 7 classification controls that ensure accurate, complete, and auditable AI system classification.

### 6.1 Control CLS-001: System Categorization (Preventive, Critical)

**Control Objective:** Ensure all AI systems are identified and categorized for classification assessment

**Control Description:**
- All AI systems and GPAI models are registered in the AI System Register upon initiation
- Unique classification IDs are assigned (CLS-YYYY-NNN format)
- System owner and stakeholder roles are assigned
- Initial categorization determines classification pathway (standard AI system vs. GPAI model)

**Control Activities:**
- Intake process for new AI system proposals
- Classification ID assignment and tracking
- Role assignment (System Owner, Technical Lead, etc.)
- Initial GPAI vs. standard AI determination

**Control Owner:** AI Act Program Manager

**Control Frequency:** Upon initiation of each new AI system/model

**Testing Approach:**
- Sample 20 AI systems from register
- Verify all have classification IDs and assigned owners
- Verify all underwent initial categorization assessment
- Verify 100% completeness of intake documentation

**KPI:** % of new AI systems registered within 1 week of initiation (Target: 100%)

---

### 6.2 Control CLS-002: Risk Criteria Application (Preventive, Critical)

**Control Objective:** Ensure classification criteria are applied accurately and consistently per EU AI Act requirements

**Control Description:**
- Prohibited practice screening is mandatory for all systems
- Annex I and Annex III criteria are applied systematically
- GPAI systemic risk thresholds are calculated and documented
- Legal review is obtained for borderline cases

**Control Activities:**
- Completion of prohibited practice checklist (Article 5)
- Application of Annex I three-part test
- Application of Annex III use case mapping
- GPAI FLOP threshold calculation
- CLO legal review for prohibited practices

**Control Owner:** AI Act Program Manager (with CLO for legal review)

**Control Frequency:** For each classification assessment

**Testing Approach:**
- Sample 20 classification assessments
- Verify all steps in decision tree were completed
- Verify CLO sign-off obtained for prohibited practice assessments
- Verify Annex I/III criteria applied correctly
- Verify GPAI FLOP calculations are accurate

**KPI:** % of classifications with complete criteria application (Target: 100%)

---

### 6.3 Control CLS-003: Classification Documentation (Preventive, High)

**Control Objective:** Ensure classification decisions are fully documented with evidence and rationale

**Control Description:**
- All classification assessments are documented in standardized templates
- Evidence supporting classification decisions is collected and retained
- Rationale for borderline or complex classifications is documented
- Documentation is reviewed and approved before finalization

**Control Activities:**
- Completion of classification assessment forms
- Collection of supporting evidence (technical specs, use case descriptions)
- Documentation of classification rationale
- Review and approval by AI Act Program Manager
- Archival in classification repository

**Control Owner:** AI System Owner (execution), AI Act Program Manager (approval)

**Control Frequency:** For each classification

**Testing Approach:**
- Sample 20 classification decisions
- Verify all mandatory documentation is complete
- Verify evidence supports classification conclusion
- Verify approval signatures obtained
- Verify documentation is stored per retention policy

**KPI:** % of classifications with complete documentation (Target: 100%)

---

### 6.4 Control CLS-004: Classification Review (Detective, High)

**Control Objective:** Ensure classification decisions are reviewed and validated by appropriate authority

**Control Description:**
- All high-risk classifications are reviewed and approved by AI Governance Committee
- Prohibited practice determinations are reviewed and approved by CLO
- GPAI systemic risk classifications are reviewed by GPAI Compliance Officer
- Classification decisions are challenged and validated through peer review

**Control Activities:**
- AI Governance Committee review meetings for high-risk classifications
- CLO legal review for prohibited practices
- GPAI Compliance Officer review for systemic risk models
- Peer review of classification rationale
- Escalation process for disputed classifications

**Control Owner:** AI Governance Committee (high-risk), CLO (prohibited), GPAI Officer (GPAI)

**Control Frequency:** For each high-risk, prohibited, or GPAI systemic risk classification

**Testing Approach:**
- Sample 20 high-risk classifications
- Verify AI Governance Committee approval obtained
- Verify CLO sign-off on prohibited practice assessments
- Verify GPAI Officer sign-off on systemic risk determinations
- Review meeting minutes for evidence of challenge and validation

**KPI:** % of high-risk classifications with governance approval (Target: 100%)

---

### 6.5 Control CLS-005: Classification Change Management (Preventive, High)

**Control Objective:** Ensure classification changes are identified, assessed, and approved before implementation

**Control Description:**
- Substantial modifications trigger re-classification assessment
- Annual reviews identify changes requiring re-classification
- Re-classification follows same process as initial classification
- Classification changes are documented and communicated to stakeholders

**Control Activities:**
- Substantial modification identification and notification
- Re-classification assessment execution
- Annual classification review process
- Classification change approval and communication
- AI System Register update

**Control Owner:** AI Act Program Manager

**Control Frequency:** Upon substantial modification, annually

**Testing Approach:**
- Sample 10 substantial modifications
- Verify re-classification was triggered
- Verify re-classification followed full process
- Verify classification changes were approved
- Verify AI System Register was updated

**KPI:** % of substantial modifications triggering re-classification (Target: 100%)

---

### 6.6 Control CLS-006: Regulatory Monitoring (Detective, Medium)

**Control Objective:** Ensure changes to EU AI Act and implementing acts are monitored and incorporated into classification process

**Control Description:**
- EU AI Act and implementing acts are monitored for changes
- Changes affecting classification criteria are identified
- Classification procedures and templates are updated
- Affected AI systems are re-classified if needed

**Control Activities:**
- Quarterly regulatory monitoring review
- Change impact assessment
- Procedure and template updates
- Communication to stakeholders
- Targeted re-classification of affected systems

**Control Owner:** AI Act Program Manager

**Control Frequency:** Quarterly

**Testing Approach:**
- Review regulatory monitoring logs
- Verify quarterly reviews conducted
- Verify identified changes were assessed for impact
- Verify procedures updated within 30 days of regulatory change
- Verify affected systems were re-classified

**KPI:** Days from regulatory change to procedure update (Target: < 30 days)

---

### 6.7 Control CLS-007: Classification Audit Trail (Detective, High)

**Control Objective:** Ensure complete and tamper-evident audit trail of all classification decisions and changes

**Control Description:**
- All classification activities are logged with timestamps and user IDs
- Classification history is maintained for each AI system
- Changes to classifications are logged with rationale
- Audit trail is retained for 10 years per EU AI Act requirements

**Control Activities:**
- Automated logging of classification activities
- Version control for classification documents
- Change log maintenance in AI System Register
- Annual audit trail review
- Secure archival and retention

**Control Owner:** AI Act Program Manager

**Control Frequency:** Continuous (automated logging), annual review

**Testing Approach:**
- Sample 20 AI systems
- Verify complete classification history is available
- Verify all changes are logged with rationale
- Verify audit trail integrity (no gaps or tampering)
- Verify retention policy compliance

**KPI:** % of AI systems with complete audit trail (Target: 100%)

---

## 7. KPIS AND METRICS

### 7.1 Classification Process KPIs

| KPI ID | KPI Name | Definition | Target | Frequency | Owner |
|--------|----------|------------|--------|-----------|-------|
| **KPI-CLS-001** | Classification Completion Time | Days from initiation to final classification | ≤ 14 days | Per classification | AI Act Program Manager |
| **KPI-CLS-002** | Classification Coverage | % of AI systems with documented classification | 100% | Monthly | AI Act Program Manager |
| **KPI-CLS-003** | Prohibited Practice Screening Rate | % of new systems screened for prohibited practices | 100% | Monthly | AI Act Program Manager |
| **KPI-CLS-004** | CLO Review Completion | % of borderline cases with CLO sign-off | 100% | Monthly | Chief Legal Officer |
| **KPI-CLS-005** | High-Risk Governance Approval | % of high-risk classifications with AI Gov Committee approval | 100% | Quarterly | AI Governance Committee |
| **KPI-CLS-006** | Re-classification Trigger Rate | % of substantial modifications triggering re-classification | 100% | Quarterly | AI Act Program Manager |
| **KPI-CLS-007** | Annual Review Completion | % of deployed systems reviewed annually | 100% | Annually | AI Act Program Manager |
| **KPI-CLS-008** | Classification Documentation Completeness | % of classifications with all mandatory documentation | 100% | Quarterly | AI Act Program Manager |
| **KPI-CLS-009** | Classification Accuracy Rate | % of classifications confirmed accurate upon audit/review | ≥ 95% | Annually | Internal Audit |
| **KPI-CLS-010** | GPAI Model Identification Rate | % of GPAI models correctly identified | 100% | Quarterly | GPAI Compliance Officer |

### 7.2 GPAI-Specific KPIs

| KPI ID | KPI Name | Definition | Target | Frequency | Owner |
|--------|----------|------------|--------|-----------|-------|
| **KPI-GPAI-001** | Systemic Risk Assessment Time | Days from GPAI identification to systemic risk determination | ≤ 10 days | Per GPAI model | GPAI Compliance Officer |
| **KPI-GPAI-002** | FLOP Calculation Accuracy | % of FLOP calculations verified and accurate | 100% | Per GPAI model | GPAI Compliance Officer |
| **KPI-GPAI-003** | Upstream Provider Due Diligence | % of upstream GPAI providers with completed due diligence | 100% | Quarterly | GPAI Compliance Officer |
| **KPI-GPAI-004** | Free/Open-Source Exemption Verification | % of FOSS exemptions with complete verification | 100% | Per GPAI model | GPAI Compliance Officer |

### 7.3 KPI Reporting and Escalation

**Monthly Reporting:**
- Classification completion time trends
- Classification coverage status
- Prohibited practice screening rate
- CLO review completion

**Quarterly Reporting to AI Governance Committee:**
- All monthly KPIs
- High-risk governance approval rate
- Re-classification trigger rate
- GPAI-specific KPIs
- Trend analysis and recommendations

**Annual Reporting:**
- All quarterly KPIs
- Annual review completion
- Classification accuracy rate (audit results)
- Year-over-year trends
- Process improvement recommendations

**Escalation Thresholds:**
- Any KPI below target → Escalate to AI Act Program Manager
- Classification coverage < 95% → Escalate to AI Governance Committee
- Classification accuracy < 95% → Escalate to Chief Legal Officer

---

## 8. DOCUMENTATION REQUIREMENTS

### 8.1 Classification Templates and Forms

**TMP-AI-CLS-001: AI System Classification Workbook**
- Sheet 1: Classification Request Form
- Sheet 2: Prohibited Practice Assessment Form (with exact Article 5(1) text)
- Sheet 3: Annex I Assessment Form
- Sheet 4: Annex III Assessment Form
- Sheet 5: Significant Risk of Harm Assessment Form
- Sheet 6: Limited-Risk Assessment Form
- Sheet 7: Annual Classification Review Form

**TMP-AI-CLS-002: AI System Register**
- Central database of all AI systems and their classifications
- Fields: System ID, Name, Owner, Description, Classification, Rationale, Status, Dates

**TMP-AI-CLS-003: GPAI Classification Workbook**
- Sheet 1: GPAI Model Identification Assessment
- Sheet 2: GPAI Systemic Risk Assessment (FLOP calculation, Annex XIII)
- Sheet 3: GPAI Downstream Provider Assessment
- Sheet 4: Free/Open-Source Exemption Verification

### 8.2 Classification Records

| Record ID | Record Name | Content | Retention |
|-----------|-------------|---------|-----------|
| REC-AI-CLS-001 | Prohibited Practice Screening Report | Assessment results, CLO opinion, decision | 10 years |
| REC-AI-CLS-002 | Annex I Assessment Report | Three-part test results, evidence, decision | 10 years |
| REC-AI-CLS-003 | Annex III Assessment Report | Use case mapping, evidence, decision | 10 years |
| REC-AI-CLS-004 | Significant Risk of Harm Assessment Report | Risk factors, scenarios, analysis, decision | 10 years |
| REC-AI-CLS-005 | Limited-Risk Assessment Form | Transparency obligations assessment | 10 years |
| REC-AI-CLS-006 | Annual Classification Review Report | Annual review results, changes, recommendations | 10 years |
| REC-AI-GPAI-001 | GPAI Model Identification Report | GPAI determination, provider type, exemptions | 10 years |
| REC-AI-GPAI-002 | GPAI Systemic Risk Report | FLOP calculation, Annex XIII criteria, determination | 10 years |

### 8.3 Governance Records

| Record ID | Record Name | Retention |
|-----------|-------------|-----------|
| REC-AI-CLS-GOVMIN-001 | AI Governance Committee Meeting Minutes | 10 years |
| REC-AI-CLS-CLOREVIEW-001 | CLO Legal Opinion Records | 10 years |
| REC-AI-CLS-ESCALATION-001 | Classification Escalation Records | 10 years |

---

## 9. REVIEW AND AUDIT

### 9.1 Quality Checks

| Step | Quality Check | Verification Method |
|---|---|---|
| 1.1 | 100% of new systems screened for prohibited practices | Audit of AI System Register |
| 1.1 | CLO sign-off obtained for borderline cases | Review of CLO approval records |
| 1.2 | Annex I assessment complete and documented | Review of assessment forms |
| 1.3 | Annex III mapping accurate and justified | Review of assessment forms |
| 1.4 | Risk assessment thorough and evidence-based | Review of assessment reports |
| 2.1 | Register maintained and current | Quarterly review of register |
| 2.2 | Re-classification triggered for substantial modifications | Audit of modification records |
| 2.3 | Annual review completed for all systems | Review of annual review report |
| 5.1 | GPAI models correctly identified | Review of GPAI identification assessments |
| 5.2 | FLOP calculations accurate and documented | Technical review of calculations |

### 9.2 Audit Verification Procedures

Internal auditors will verify:

1. **Completeness:** All AI systems have been classified
2. **Accuracy:** Classifications are accurate based on the assessment criteria
3. **Documentation:** All required documentation is complete and signed
4. **Timeliness:** Classifications are completed within the required timelines
5. **Governance:** High-risk classifications have been approved by the AI Governance Committee
6. **Updates:** The AI System Register is maintained and current
7. **GPAI Compliance:** GPAI models are correctly identified and systemic risk assessed
8. **Control Effectiveness:** All 7 classification controls are operating effectively

### 9.3 Annual Audit Schedule

| Audit Activity | Scope | Frequency | Auditor |
|----------------|-------|-----------|---------|
| Classification Process Audit | All classifications in prior year | Annual | Internal Audit |
| GPAI Compliance Audit | All GPAI models and assessments | Annual | Internal Audit + GPAI Officer |
| Control Testing | Test 7 classification controls | Annual | Internal Audit |
| Register Accuracy Review | Verify register vs. actual systems | Annual | AI Act Program Manager |
| Documentation Completeness | Sample 20 classifications | Quarterly | Compliance Officer |

---

## 10. NON-COMPLIANCE HANDLING

### 10.1 Non-Compliance Triggers

| Trigger | Severity | Action Required |
|---------|----------|-----------------|
| **Prohibited system deployed** | Critical | Immediate deployment halt; CLO escalation; authority notification |
| **High-risk system deployed without classification** | High | Immediate deployment halt; expedited classification; governance review |
| **Classification documentation missing** | Medium | Classification review; documentation remediation; 30-day deadline |
| **Re-classification not triggered** | Medium | Immediate re-classification; root cause analysis |
| **Annual review not completed** | Low | Complete within 30 days; process improvement |

### 10.2 Non-Compliance Escalation Process

1. **Identify Non-Compliance**
   - Through audit, review, or incident
   - Document the non-compliance finding

2. **Assess Severity**
   - Apply severity criteria (Critical, High, Medium, Low)
   - Determine immediate actions required

3. **Escalate per Severity**
   - Critical → AI Governance Committee + CLO (immediate)
   - High → AI Act Program Manager + Product Director (within 24 hours)
   - Medium → AI Act Program Manager (within 3 business days)
   - Low → AI System Owner (within 1 week)

4. **Remediate Non-Compliance**
   - Execute required actions per severity
   - Document remediation activities
   - Verify remediation effectiveness

5. **Root Cause Analysis**
   - Identify why non-compliance occurred
   - Implement corrective actions
   - Update procedures if needed

6. **Close Non-Compliance**
   - Verify all actions completed
   - Document closure and lessons learned
   - Report to AI Governance Committee

### 10.3 Authority Notification

If a prohibited AI system has been developed or deployed, the competent national authority must be notified per Article 73:
- Notification within 15 days of discovery
- Include description, classification assessment, remediation actions
- Cooperate with authority investigation
- Document all communications

---

## 11. RELATED DOCUMENTS

### 11.1 Policies and Standards

- POL-AI-001: AI Governance Policy
- STD-AI-001: AI System Classification Standard
- STD-AI-002: AI Risk Management Standard

### 11.2 Procedures

- PROC-AI-RM-001: AI Risk Management Procedure
- PROC-AI-DATA-001: AI Data Governance Procedure
- PROC-AI-QMS-001: AI Quality Management Procedure
- PROC-AI-DOC-001: AI Technical Documentation Procedure
- PROC-AI-INC-001: AI Incident Response Procedure
- PROC-AI-VENDOR-001: AI Vendor Management Procedure

### 11.3 Regulatory References

- **EU AI Act (Regulation (EU) 2024/1689):**
  - Article 5: Prohibited AI Practices
  - Article 6: Classification Rules for High-Risk AI Systems (Annex I)
  - Article 7: Amendments to List of High-Risk AI Systems (Annex III)
  - Article 50: Transparency Obligations for Certain AI Systems
  - Articles 51-56: General Purpose AI Models
  - Article 73: Reporting of Serious Incidents
  - Annex I: List of Union Harmonisation Legislation
  - Annex III: High-Risk AI Systems
  - Annex XIII: Criteria for Classification as GPAI with Systemic Risk

---

## 12. APPENDICES

### APPENDIX A: CLASSIFICATION DECISION TREE (VISUAL FLOWCHART)

```
┌─────────────────────────────────────────────────────────────────────┐
│           AI SYSTEM CLASSIFICATION DECISION TREE (DETAILED)          │
└─────────────────────────────────────────────────────────────────────┘

START: New AI System or Model
│
▼
┌─────────────────────────────────────┐
│ STEP 1: GPAI MODEL IDENTIFICATION   │
│ (Section 5.1)                       │
└─────────────────┬───────────────────┘
                  │
     ┌────────────┴────────────┐
     │                         │
     ▼                         ▼
  YES: GPAI Model           NO: Standard AI System
     │                         │
     ▼                         │
┌──────────────────────────┐  │
│ GPAI Systemic Risk Test  │  │
│ (Section 5.2)            │  │
│ - FLOP ≥ 10^25?          │  │
│ - Annex XIII criteria?   │  │
└────────┬────────┬────────┘  │
         │        │            │
    YES  │        │ NO         │
         │        │            │
         ▼        ▼            │
    GPAI with    GPAI          │
    Systemic     (Standard)    │
    Risk                       │
         │        │            │
         └────┬───┘            │
              │                │
              ▼                │
    Enhanced Obligations       │
    (Articles 53-55)           │
                               │
                               │
    ┌──────────────────────────┘
    │
    ▼
┌─────────────────────────────────────┐
│ STEP 2: PROHIBITED PRACTICE         │
│ SCREENING (Article 5)               │
│ (Step 1.1)                          │
└─────────────────┬───────────────────┘
                  │
     ┌────────────┴────────────┐
     │                         │
     ▼                         ▼
  YES: Prohibited          NO: Proceed
     │
     ▼
┌──────────────────────────┐
│ PROHIBITED PRACTICE      │
│ Article 5(1)(a-h):       │
│ - Subliminal techniques  │
│ - Vulnerability exploit  │
│ - Social scoring         │
│ - Real-time biometric ID │
│ - Emotion recognition    │
│ - Workplace/edu emotion  │
│ - Facial scraping (g)    │ ← CORRECTED
│ - Criminal profiling     │
└────────┬─────────────────┘
         │
         ▼
    STOP: Cannot Develop
    CLO Review Required
    Halt Project
         │
         └─→ END

                  ┌────────────────
                  │
                  ▼
┌─────────────────────────────────────┐
│ STEP 3: ANNEX I HIGH-RISK           │
│ (Article 6)                         │
│ (Step 1.2)                          │
└─────────────────┬───────────────────┘
                  │
     ┌────────────┴────────────┐
     │                         │
     ▼                         ▼
  YES: Safety Component    NO: Continue
     │
     ▼
┌──────────────────────────┐
│ THREE-PART TEST:         │
│ 1. Annex I product?      │
│ 2. Third-party assess?   │
│ 3. Safety critical?      │
│ All YES?                 │
└────────┬─────────────────┘
         │
         ▼
    HIGH-RISK (Annex I)
    Full Compliance Required
         │
         └─→ END: Apply High-Risk Controls

                  ┌────────────────
                  │
                  ▼
┌─────────────────────────────────────┐
│ STEP 4: ANNEX III HIGH-RISK         │
│ (Article 7)                         │
│ (Step 1.3)                          │
└─────────────────┬───────────────────┘
                  │
     ┌────────────┴────────────┐
     │                         │
     ▼                         ▼
  YES: Annex III Use Case  NO: Continue
     │
     ▼
┌──────────────────────────┐
│ ANNEX III CATEGORIES:    │
│ 1. Biometric ID          │
│ 2. Critical infra        │
│ 3. Education             │
│ 4. Employment            │
│ 5. Essential services    │
│ 6. Law enforcement       │
│ 7. Migration/asylum      │
│ 8. Justice/democracy     │
└────────┬─────────────────┘
         │
         ▼
┌─────────────────────────────────────┐
│ STEP 5: SIGNIFICANT RISK OF HARM   │
│ ASSESSMENT (Step 1.4)               │
│ Factors:                            │
│ - Intensity of harm                 │
│ - Scope (# affected)                │
│ - Vulnerability of persons          │
│ - Reversibility                     │
│ - Likelihood                        │
└─────────────────┬───────────────────┘
                  │
     ┌────────────┴────────────┐
     │                         │
     ▼                         ▼
  YES: Significant Risk    NO: Low Risk
     │                         │
     ▼                         │
HIGH-RISK (Annex III)          │
Full Compliance Required       │
     │                         │
     └─→ END: Apply Controls   │
                               │
                  ┌────────────┘
                  │
                  ▼
┌─────────────────────────────────────┐
│ STEP 6: LIMITED-RISK                │
│ TRANSPARENCY (Article 50)           │
│ (Step 1.5)                          │
└─────────────────┬───────────────────┘
                  │
     ┌────────────┴────────────┐
     │                         │
     ▼                         ▼
  YES: Transparency Obligs  NO: Minimal
     │                         │
     ▼                         ▼
LIMITED-RISK                MINIMAL-RISK
- Chatbots                  - No specific obligations
- Emotion recognition       - Best practices
- Deepfakes                 - Voluntary codes
- Biometric categorization
     │                         │
     └────────┬────────────────┘
              │
              ▼
         END: Apply Classification-Specific Controls
```

---

### APPENDIX B: GLOSSARY OF TERMS

| Term | Definition |
|------|------------|
| **AI System** | A machine-based system designed to operate with varying levels of autonomy and that may exhibit adaptiveness after deployment and that, for explicit or implicit objectives, infers, from the input it receives, how to generate outputs such as predictions, content, recommendations, or decisions that can influence physical or virtual environments (EU AI Act Art. 3(1)) |
| **Annex I** | List of Union harmonisation legislation where AI systems used as safety components are considered high-risk (machinery, toys, medical devices, etc.) |
| **Annex III** | List of 8 high-risk AI system use cases (biometric ID, critical infrastructure, employment, essential services, law enforcement, migration, justice, education) |
| **Annex XIII** | Criteria for classification of GPAI models with systemic risk (parameters, compute, dataset, modalities, reach, market share) |
| **Deployer** | Any natural or legal person, public authority, agency or other body using an AI system under its authority (EU AI Act Art. 3(4)) |
| **Downstream Provider** | Provider who uses a General Purpose AI model to develop an AI system for placing on the market or putting into service |
| **FLOP (Floating Point Operation)** | Unit of computational work; 10^25 FLOPs is the threshold for GPAI systemic risk designation |
| **Free and Open-Source AI Model** | AI model released under a free and open-source license that allows access, use, modification, and distribution, with model parameters and training information publicly available |
| **Fundamental Rights** | Rights recognized by the EU Charter of Fundamental Rights, including dignity, freedoms, equality, solidarity, citizens' rights, and justice |
| **General Purpose AI (GPAI) Model** | An AI model that displays significant generality and is capable of competently performing a wide range of distinct tasks regardless of the way the model is placed on the market and that can be integrated into a variety of downstream systems or applications (EU AI Act Art. 3(63)) |
| **GPAI with Systemic Risk** | A GPAI model that has high impact capabilities evaluated on the basis of appropriate technical tools and methodologies, or that has been designated as such by the European AI Office |
| **High-Risk AI System** | An AI system that is either: (1) used as a safety component of a product covered by Union harmonisation legislation (Annex I), or (2) falls into one of the 8 use case categories in Annex III and poses significant risk of harm |
| **Limited-Risk AI System** | An AI system not classified as high-risk but subject to specific transparency obligations under Article 50 (chatbots, emotion recognition, deepfakes, biometric categorization) |
| **Minimal-Risk AI System** | An AI system that is not prohibited, high-risk, or limited-risk; subject only to voluntary codes of conduct and general compliance |
| **Placing on the Market** | The first making available of an AI system or general-purpose AI model on the Union market |
| **Prohibited Practice** | An AI practice explicitly banned under Article 5 of the EU AI Act (8 specific practices) |
| **Provider** | Any natural or legal person, public authority, agency or other body that develops an AI system or general-purpose AI model, or has an AI system developed, and places it on the market or puts it into service under its own name or trademark (EU AI Act Art. 3(3)) |
| **Putting into Service** | The supply of an AI system for first use directly to the deployer or for own use in the Union for its intended purpose |
| **Safety Component** | A component of a product that fulfills a safety function for that product or the failure or malfunctioning of which endangers the health and safety of persons or property |
| **Serious Incident** | Any incident or malfunctioning of an AI system that directly or indirectly leads to death, serious harm to health, serious and irreversible disruption of critical infrastructure, or infringement of fundamental rights (EU AI Act Art. 3(49)) |
| **Significant Risk of Harm** | Risk that meets threshold criteria for intensity, scope, vulnerability, reversibility, and likelihood of harm to health, safety, or fundamental rights |
| **Substantial Modification** | A change to an AI system after its placing on the market or putting into service which is not foreseen or planned in the initial conformity assessment and affects compliance with the requirements or results in a modification to the intended purpose |
| **Systemic Risk** | Risk that is specific to the high impact capabilities of general-purpose AI models, having a significant impact on the Union market due to their reach, or due to actual or reasonably foreseeable negative effects on public health, safety, security, fundamental rights, or society as a whole |
| **Transparency Obligations** | Requirements under Article 50 to inform natural persons that they are interacting with an AI system (chatbots, deepfakes, etc.) |
| **Union Harmonisation Legislation** | EU legislation listed in Annex I that harmonizes conditions for marketing of products (machinery, toys, medical devices, aviation, automotive, etc.) |
| **Upstream Provider** | Provider of a General Purpose AI model that is used by downstream providers to develop AI systems |

---

### APPENDIX C: CROSS-REFERENCES TO OTHER PROCEDURES

This appendix maps relationships between this procedure and other AI compliance procedures.

#### C.1 Procedure Dependencies

```
                    ┌─────────────────────────────┐
                    │  POL-AI-001                 │
                    │  AI Governance Policy       │
                    │  (Parent Policy)            │
                    └─────────────┬───────────────┘
                                  │
        ┌─────────────────────────┼─────────────────────────┐
        │                         │                         │
        ▼                         ▼                         ▼
┌───────────────────┐   ┌───────────────────┐   ┌───────────────────┐
│ PROC-AI-CLS-001   │   │ PROC-AI-RM-001    │   │ PROC-AI-DATA-001  │
│ Classification    │──▶│ Risk Management   │◀──│ Data Governance   │
│ (THIS PROCEDURE)  │   │                   │   │                   │
└───────────────────┘   └─────────┬─────────┘   └───────────────────┘
        │                         │                         │
        │                         ▼                         │
        │               ┌───────────────────┐               │
        └──────────────▶│ PROC-AI-DOC-001   │◀──────────────┘
                        │ Documentation     │
                        └─────────┬─────────┘
                                  │
                                  ▼
                        ┌───────────────────┐
                        │ PROC-AI-INC-001   │
                        │ Incident Response │
                        └───────────────────┘
```

#### C.2 Procedure Interface Matrix

| From This Procedure | To Procedure | Interface | When |
|---------------------|--------------|-----------|------|
| Step 1.1-1.5 | PROC-AI-RM-001 | Classification informs initial risk assessment scope | After classification complete |
| Step 2.1 (Register) | PROC-AI-DOC-001 | Register feeds technical documentation requirements | Ongoing |
| Step 5.2 (GPAI Systemic Risk) | PROC-AI-RM-001 | GPAI systemic risks added to risk register | Upon GPAI classification |
| Step 10.3 (Authority Notification) | PROC-AI-INC-001 | Prohibited system deployment triggers incident | Upon non-compliance discovery |
| High-Risk Classification | PROC-AI-QMS-001 | High-risk designation triggers QMS requirements | After classification |
| GPAI Classification | PROC-AI-VENDOR-001 | GPAI upstream provider due diligence | When using third-party GPAI |

#### C.3 Template Cross-Reference

| Template from This Procedure | Used By | Purpose |
|------------------------------|---------|---------|
| TMP-AI-CLS-002 (AI System Register) | PROC-AI-RM-001 | Risk register links to classification register |
| TMP-AI-CLS-002 (AI System Register) | PROC-AI-DOC-001 | Technical documentation scope based on classification |
| TMP-AI-CLS-003 (GPAI Workbook) | PROC-AI-VENDOR-001 | Vendor assessment for GPAI providers |

---

### APPENDIX D: QUICK REFERENCE CARD

#### Classification Quick Reference

**PROHIBITED PRACTICES (Article 5) - HALT IMMEDIATELY:**

1. ❌ Subliminal manipulation
2. ❌ Vulnerability exploitation
3. ❌ Social scoring by authorities
4. ❌ Real-time biometric ID (with exceptions)
5. ❌ Emotion recognition in workplace/education
6. ❌ Biometric categorization (sensitive attributes)
7. ❌ **Facial recognition database scraping (internet/CCTV)**
8. ❌ Criminal profiling without human oversight

**HIGH-RISK CLASSIFICATION:**

- Annex I: Safety component + third-party assessment + Annex I product = HIGH-RISK
- Annex III: Use case match + significant risk of harm = HIGH-RISK

**ANNEX III USE CASES:**

1. Biometric identification
2. Critical infrastructure
3. Education
4. Employment
5. Essential services
6. Law enforcement
7. Migration/asylum
8. Justice/democracy

**GPAI CLASSIFICATION:**

- Standard GPAI: Articles 53-54 obligations
- Systemic Risk GPAI: Training compute ≥ 10^25 FLOPs OR Annex XIII designation
- Free/Open-Source: Exemptions if truly open + not systemic risk

**KEY CONTACTS:**

| Need | Contact | For |
|------|---------|-----|
| Classification questions | AI Act Program Manager | [Email] |
| Prohibited practice legal opinion | Chief Legal Officer | [Email] |
| High-risk approval | AI Governance Committee | [Distribution List] |
| GPAI classification | GPAI Compliance Officer | [Email] |

**KEY TIMELINES:**

| Activity | Timeline |
|----------|----------|
| Prohibited practice screening | 1 week from initiation |
| Full classification | ≤ 14 days from initiation |
| Re-classification (substantial modification) | Before deployment |
| Annual review | Annually for all deployed systems |

**ESCALATION:**

- Prohibited practice → CLO + AI Gov Committee (immediate)
- High-risk classification → AI Gov Committee (before deployment)
- Borderline case → AI Act Program Manager (within 3 days)

---

### APPENDIX E: ARTICLE 5 PROHIBITED PRACTICES CHECKLIST

This appendix provides the complete, exact legal text of all 8 prohibited practices from Article 5(1) of the EU AI Act, with assessment guidance.

#### Practice 1: Subliminal Techniques (Article 5(1)(a))

**Legal Text:**
"The placing on the market, the putting into service for this specific purpose, or the use of an AI system that deploys subliminal techniques beyond a person's consciousness with the objective to or the effect to materially distort the behaviour of a person or a group of persons by appreciably impairing their ability to make an informed decision, thereby causing them to take a decision that they would not have otherwise taken in a manner that causes or is reasonably likely to cause that person, another person or group of persons significant harm."

**Assessment Questions:**
- Does the AI system operate below conscious awareness?
- Does it manipulate decision-making without user knowledge?
- Could it cause significant harm?

**Examples:**
- ❌ Prohibited: AI that uses subliminal audio/visual cues to influence purchasing
- ✅ Permitted: Transparent recommendation systems

---

#### Practice 2: Vulnerability Exploitation (Article 5(1)(b))

**Legal Text:**
"The placing on the market, the putting into service for this specific purpose, or the use of an AI system that exploits any of the vulnerabilities of a natural person or a specific group of persons due to their age, disability or a specific social or economic situation, with the objective to or the effect to materially distort the behaviour of that person or a person pertaining to that group in a manner that causes or is reasonably likely to cause that person or another person significant harm."

**Assessment Questions:**
- Does the system target vulnerable groups (children, elderly, disabled)?
- Does it exploit vulnerabilities to manipulate behavior?
- Could it cause significant harm?

**Examples:**
- ❌ Prohibited: AI toys that exploit children's credulity to make purchases
- ❌ Prohibited: AI targeting elderly with cognitive decline for financial products
- ✅ Permitted: Assistive AI with appropriate safeguards

---

#### Practice 3: Social Scoring by Public Authorities (Article 5(1)(c))

**Legal Text:**
"The placing on the market, the putting into service for this specific purpose, or the use of an AI system by public authorities or on their behalf for the evaluation or classification of the trustworthiness of natural persons over a certain period of time based on their social behaviour or known, inferred or predicted personal or personality characteristics, with the social score leading to either or both of the following:

(i) detrimental or unfavourable treatment of certain natural persons or whole groups thereof in social contexts which are unrelated to the contexts in which the data was originally generated or collected;

(ii) detrimental or unfavourable treatment of certain natural persons or whole groups thereof that is unjustified or disproportionate to their social behaviour or its gravity."

**Assessment Questions:**
- Is this used by or for public authorities?
- Does it evaluate trustworthiness based on social behavior?
- Does it lead to detrimental treatment in unrelated contexts?

**Examples:**
- ❌ Prohibited: Government social credit score system
- ✅ Permitted: Credit scoring by private entities (not social scoring)

---

#### Practice 4: Real-Time Remote Biometric Identification (Article 5(1)(d))

**Legal Text:**
"The use of 'real-time' remote biometric identification systems in publicly accessible spaces for the purpose of law enforcement, unless and in so far as such use is strictly necessary for one of the following objectives:

(i) the targeted search for specific potential victims of abduction, trafficking in human beings or sexual exploitation of human beings, as well as the search for missing persons;

(ii) the prevention of a specific, substantial and imminent threat to the life or physical safety of natural persons or a genuine and present or genuine and foreseeable threat of a terrorist attack;

(iii) the localisation or identification of a person suspected of having committed a criminal offence, for the purpose of conducting a criminal investigation or prosecution or executing a criminal penalty for offences referred to in Annex II and punishable in the Member State concerned by a custodial sentence or a detention order for a maximum period of at least four years."

**Assessment Questions:**
- Is this real-time remote biometric identification?
- Is it used in publicly accessible spaces?
- Is it for law enforcement purposes?
- Do any of the three exceptions apply?

**Exceptions Apply When:**
- Strictly necessary for the stated objective
- Prior authorization obtained (judicial or independent authority)
- Appropriate safeguards in place

**Examples:**
- ❌ Prohibited: Real-time facial recognition for general public surveillance
- ✅ Permitted (with authorization): Real-time facial recognition to find missing child
- ✅ Permitted (with authorization): Real-time facial recognition to prevent imminent terrorist attack

---

#### Practice 5: Biometric Categorization Inferring Sensitive Attributes (Article 5(1)(e))

**Legal Text:**
"The placing on the market, the putting into service for this specific purpose, or the use of AI systems that create or expand facial recognition databases through the untargeted scraping of facial images from the internet or CCTV footage."

**Assessment Questions:**
- Does the system infer sensitive attributes from biometric data?
- Are the inferred attributes: race, political opinions, trade union membership, religious/philosophical beliefs, sex life, or sexual orientation?
- Is it used by law enforcement?

**Exceptions:**
- Labelling or filtering of lawfully acquired biometric datasets
- Law enforcement categorization for specific investigations (with safeguards)

**Examples:**
- ❌ Prohibited: AI inferring race or sexual orientation from facial images for law enforcement
- ✅ Permitted: Age verification systems (age is not sensitive attribute)

---

#### Practice 6: Emotion Recognition in Workplace and Educational Institutions (Article 5(1)(f))

**Legal Text:**
"The placing on the market, the putting into service for this specific purpose, or the use of AI systems to infer emotions of a natural person in the areas of workplace and education institutions, except where the use of the AI system is intended to be put in place or into the market for medical or safety reasons."

**Assessment Questions:**
- Does the system recognize or infer emotions?
- Is it used in workplace or educational institutions?
- Is it for medical or safety reasons?

**Medical/Safety Exceptions:**
- Driver drowsiness detection for safety
- Medical diagnosis of emotional conditions

**Examples:**
- ❌ Prohibited: Emotion recognition to evaluate employee performance
- ❌ Prohibited: Emotion recognition to assess student engagement in classroom
- ✅ Permitted: Emotion recognition for driver safety systems
- ✅ Permitted: Emotion recognition for diagnosing mental health conditions

---

#### Practice 7: Facial Recognition Database Scraping (Article 5(1)(g)) [CORRECTED]

**Legal Text:**
"The placing on the market, the putting into service for this specific purpose, or the use of AI systems that create or expand facial recognition databases through the untargeted scraping of facial images from the internet or CCTV footage."

**Assessment Questions:**
- Does the system create or expand facial recognition databases?
- Does it use untargeted scraping from internet or CCTV?
- Is the scraping targeted or untargeted?

**Key Distinction:**
- **Untargeted scraping:** Prohibited (mass collection without specific purpose)
- **Targeted collection:** Permitted (specific investigation with legal basis)

**Examples:**
- ❌ Prohibited: AI scraping millions of faces from social media to build facial recognition database
- ❌ Prohibited: AI scraping CCTV footage to build facial database
- ✅ Permitted: Targeted collection of images of specific suspect with warrant

---

#### Practice 8: Risk Assessment for Criminal Offenses Based on Profiling (Article 5(1)(h))

**Legal Text:**
"The placing on the market, the putting into service for this specific purpose, or the use of AI systems to assess the risk of a natural person for offending or reoffending not solely on the basis of the profiling of natural persons as referred to in Article 3(4) of Directive (EU) 2016/680 or the assessment of personality traits and characteristics or the past criminal behaviour of natural persons or groups."

**Assessment Questions:**
- Does the system assess risk of criminal offending/reoffending?
- Is it based solely on profiling, personality traits, or past behavior?
- Or does it augment human assessment with additional factors?

**Prohibited When:**
- Assessment is based **solely** on automated profiling
- No human oversight or additional factors

**Permitted When:**
- AI augments human assessment (not sole basis)
- Additional objective factors considered
- Human review and override capability

**Examples:**
- ❌ Prohibited: Fully automated recidivism prediction based only on profiling
- ✅ Permitted: Risk assessment tool that provides additional information to judges (human decision-maker)

---

**CHECKLIST USAGE INSTRUCTIONS:**

For each AI system, assess against ALL 8 prohibited practices:

1. Read the exact legal text
2. Answer the assessment questions
3. Review examples for guidance
4. Document rationale for determination
5. If ANY practice applies → PROHIBITED classification
6. If borderline → Escalate to CLO for binding legal opinion
7. Document CLO opinion in classification record

**CRITICAL:** If any prohibited practice applies, development and deployment must immediately cease. No exceptions.

---

**END OF PROCEDURE PROC-AI-CLS-001**

---

## REVISION HISTORY

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [Date] | [Name] | Initial procedure development |
| 2.0 | [Date] | [Name] | Added GPAI classification (Section 5); Corrected Article 5(1)(g) text; Added Appendices A-E; Enhanced control mechanisms; Added KPI library |
| | | | |

---

## APPROVAL AND AUTHORIZATION

| Role | Name | Title | Signature | Date |
|---|---|---|---|---|
| **Prepared By** | [Name] | AI Act Program Manager | __________ | ________ |
| **Reviewed By** | [Name] | Chief Legal Officer | __________ | ________ |
| **Reviewed By** | [Name] | GPAI Compliance Officer | __________ | ________ |
| **Approved By** | [Name] | AI Governance Committee Chair | __________ | ________ |

---

## DOCUMENT CONTROL

**Document Status:** [Draft/Approved]
**Classification:** [Public/Internal/Confidential]
**Distribution:** AI Act Program Manager, AI System Owners, AI Governance Committee, GPAI Compliance Officer, Compliance, Internal Audit
**Retention:** 10 years (per EU AI Act)
**Review Frequency:** Annually or upon regulatory change
**Next Review Date:** [Date]

---

**END OF DOCUMENT**
