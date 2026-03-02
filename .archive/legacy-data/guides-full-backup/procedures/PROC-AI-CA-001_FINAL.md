# PROC-AI-CA-001: Conformity Assessment Procedure

**Procedure ID:** PROC-AI-CA-001
**Procedure Name:** EU AI Act Conformity Assessment Procedure
**Standard:** STD-AI-010: Conformity Assessment Standard
**Covers Controls:** CA-001, CA-002, CA-003, CA-004, CA-005, CA-006, CA-007, CA-008, CA-009, CA-010, CA-011, CA-012, CA-013
**Effective Date:** [To be filled]
**Last Updated:** [To be filled]
**Next Review Date:** [To be filled]
**Approval Status:** [Draft/Approved]

---

## TABLE OF CONTENTS

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Roles and Responsibilities](#2-roles-and-responsibilities)
3. [Regulatory Framework](#3-regulatory-framework)
4. [Conformity Assessment Pathways](#4-conformity-assessment-pathways)
5. [Step-by-Step Procedure](#5-step-by-step-procedure)
   - [Phase 1: Assessment Planning](#phase-1-assessment-planning)
   - [Phase 2: Notified Body Selection](#phase-2-notified-body-selection)
   - [Phase 3: Technical Documentation Review](#phase-3-technical-documentation-review)
   - [Phase 4: QMS Assessment](#phase-4-qms-assessment)
   - [Phase 5: Testing and Validation](#phase-5-testing-and-validation)
   - [Phase 6: Declaration of Conformity](#phase-6-declaration-of-conformity)
   - [Phase 7: CE Marking](#phase-7-ce-marking)
   - [Phase 8: Post-Market Conformity Maintenance](#phase-8-post-market-conformity-maintenance)
6. [Control Mechanisms](#6-control-mechanisms)
7. [Key Performance Indicators](#7-key-performance-indicators)
8. [Documentation Requirements](#8-documentation-requirements)
9. [Review and Audit](#9-review-and-audit)
10. [Non-Compliance Handling](#10-non-compliance-handling)
11. [Related Documents](#11-related-documents)
12. [Appendices](#12-appendices)

---

## 1. PURPOSE AND SCOPE

### 1.1 Purpose

This procedure establishes the step-by-step process for conducting conformity assessments of high-risk AI systems in compliance with EU AI Act Articles 43 (Conformity Assessment), 47 (EU Declaration of Conformity), and 48 (CE Marking). The procedure ensures that AI systems meet all applicable requirements before being placed on the market or put into service.

The conformity assessment demonstrates that the AI system:
- Complies with all mandatory requirements of the EU AI Act
- Has undergone appropriate technical and quality management system evaluation
- Is safe and respects fundamental rights
- Can be legally placed on the EU market with the CE marking

### 1.2 Scope

This procedure applies to:
- All high-risk AI systems as defined in EU AI Act Annex III
- AI systems intended to be used as safety components of products covered by EU harmonization legislation
- AI systems requiring third-party conformity assessment per Article 43(1)
- Biometric identification systems (mandatory third-party assessment)
- Providers placing high-risk AI systems on the EU market
- Providers putting high-risk AI systems into service under their own name or trademark

This procedure does not apply to:
- Minimal-risk AI systems (no conformity assessment required)
- Limited-risk AI systems (transparency obligations only, covered by PROC-AI-TRANS-001)
- AI systems subject to internal control only (Annex VI) without notified body involvement
- Third-party AI systems procured as-is (deployer obligations covered by PROC-AI-DEPLOY-001)

### 1.3 Procedure Owner and Contacts

| Role | Name | Title | Contact |
|------|------|-------|---------|
| **Procedure Owner** | [Name] | Conformity Assessment Manager | [Email/Phone] |
| **Escalation** | [Name] | Chief Compliance Officer | [Email/Phone] |
| **Governance** | [Name] | AI Governance Committee Chair | [Email/Phone] |

---

## 2. ROLES AND RESPONSIBILITIES

### 2.1 Key Roles

| Role | Responsibility | Authority |
|------|---|---|
| **Conformity Assessment Manager** | Own and execute conformity assessment process; coordinate with notified body; maintain assessment documentation | Approve assessment plans; sign off on conformity readiness |
| **AI System Owner / Provider** | Ensure AI system meets requirements; provide technical documentation; implement corrective actions | Accept residual non-conformities (low severity only) |
| **Chief Compliance Officer** | Oversight of conformity assessment; approve Declaration of Conformity; sign legal documents | Sign EU Declaration of Conformity; escalate to Board |
| **Quality Management System Lead** | Ensure QMS meets Annex IX requirements; facilitate QMS assessment; implement QMS corrective actions | Approve QMS documentation; authorize QMS changes |
| **Technical Documentation Lead** | Prepare and maintain technical documentation per Annex IV; ensure completeness and accuracy | Approve technical documentation packages |
| **Testing and Validation Lead** | Conduct conformity testing; validate AI system performance; document test results | Approve test plans and results |
| **Notified Body Representative** | Conduct third-party assessment (if applicable); review technical documentation; assess QMS; issue certificates | Issue conformity certificates; conduct surveillance audits |
| **Legal Counsel** | Review Declaration of Conformity; ensure legal compliance; advise on CE marking requirements | Approve legal declarations; advise on liability |
| **AI Governance Committee** | Review and approve conformity decisions; monitor assessment progress; approve market placement | Approve/reject market placement; block non-conforming systems |

### 2.2 RACI Matrix

| Activity | CA Manager | AI System Owner | CCO | QMS Lead | Tech Doc Lead | Test Lead | Notified Body | Legal | AI Gov |
|----------|---|---|---|---|---|---|---|---|---|
| Assessment planning | A | R | C | C | C | C | I | C | I |
| Pathway determination | A | C | C | I | I | I | C | C | C |
| Notified body selection | A | C | C | I | I | I | R | C | C |
| Technical doc review | C | R | I | C | A | C | R* | I | I |
| QMS assessment | C | C | I | A | I | I | R* | I | C |
| Testing and validation | C | R | I | C | C | A | R* | I | I |
| Non-conformity resolution | A | R | C | R | R | R | C | C | C |
| Declaration of Conformity | A | C | R | C | C | C | C | R | C |
| CE marking application | A | R | C | I | I | I | C | C | I |
| Post-market monitoring | C | R | I | C | C | C | C | I | C |
| Re-assessment triggers | A | R | C | C | C | C | C | I | C |

**Legend:** A=Accountable, R=Responsible, C=Consulted, I=Informed
**Note:** R* = Responsible only if third-party assessment required

---

## 3. REGULATORY FRAMEWORK

### 3.1 EU AI Act Requirements

This procedure implements the following EU AI Act provisions:

#### Article 43: Conformity Assessment

**Article 43(1) - Assessment Procedures:**
- High-risk AI systems in Annex III Section 1 (biometric identification) → **Mandatory third-party assessment (Annex VII)**
- Other high-risk AI systems in Annex III → **Internal control (Annex VI)** OR **Third-party assessment (Annex VII)** at provider's choice
- Assessment covers both:
  - **Quality Management System (QMS)** per Article 17 and Annex IX
  - **Technical Documentation** per Article 11 and Annex IV

**Article 43(2) - Harmonized Standards:**
- Compliance with harmonized standards confers **presumption of conformity**
- Reduces need for detailed assessment of conforming elements
- Must be published in Official Journal of the European Union
- Voluntary but strongly recommended

**Article 43(3) - Common Specifications:**
- When no harmonized standards exist or are insufficient
- Compliance with common specifications confers presumption of conformity
- Established by Commission implementing acts

**Article 43(4) - Technical Documentation:**
- Provider demonstrates compliance through technical documentation
- Documentation must be available for 10 years after system placed on market
- Must be kept up-to-date throughout system lifecycle

**Article 43(5) - Assessment Completion:**
- Conformity assessment demonstrates compliance with Chapter III Section 2
- Successful assessment enables issuance of Declaration of Conformity

#### Article 47: EU Declaration of Conformity

**Article 47(1) - Declaration Content:**
- Provider draws up written Declaration of Conformity per **Annex V**
- Declaration certifies AI system meets all requirements of Chapter III Section 2
- Provider keeps Declaration available for 10 years

**Article 47(2) - Declaration Updates:**
- Provider must keep Declaration up-to-date
- Update when substantial modifications occur
- Update when harmonized standards or common specifications change
- Update when system capabilities change

**Article 47(3) - Single Responsible Person:**
- Declaration must identify single natural or legal person responsible
- If provider is not established in EU: authorized representative or importer

**Article 47(4) - Language Requirements:**
- Declaration in language accepted by notified body (if applicable)
- Translation to official language(s) of Member State where system placed on market

**Article 47(5) - Translations:**
- Provider responsible for accuracy of translations
- Original language version prevails in case of discrepancy

#### Article 48: CE Marking

**Article 48(1) - CE Marking Requirement:**
- High-risk AI systems that comply → affixed with CE marking
- CE marking indicates conformity with EU AI Act

**Article 48(2) - General Principles:**
- CE marking governed by Regulation (EC) No 765/2008, Article 30
- Visible, legible, and indelible
- Affixed before system placed on market or put into service

**Article 48(3) - Notified Body Number:**
- If notified body involved in conformity assessment → identification number appears alongside CE marking

**Article 48(4) - Digital Marking:**
- AI systems without physical interface → CE marking in accompanying documentation or digital interface
- Accessible by deployers and authorities

**Article 48(5) - Prohibition on Misleading Markings:**
- Other markings allowed if they do not reduce visibility/legibility of CE marking
- Must not create confusion with CE marking

### 3.2 Supporting Regulations

| Regulation | Relevance | Key Provisions |
|------------|-----------|----------------|
| **Regulation (EC) No 765/2008** | Accreditation and market surveillance | CE marking rules; notified body framework |
| **Decision No 768/2008/EC** | Common framework for marketing of products | Conformity assessment modules; declaration requirements |
| **Regulation (EU) 2019/1020** | Market surveillance and product compliance | Authorities' powers; non-compliance procedures |
| **GDPR (EU 2016/679)** | Data protection | If AI processes personal data; privacy by design |

### 3.3 Conformity Assessment Annexes

| Annex | Title | Purpose |
|-------|-------|---------|
| **Annex IV** | Technical Documentation | Specifies content of technical documentation package |
| **Annex V** | EU Declaration of Conformity | Template and required content for Declaration |
| **Annex VI** | Internal Control Procedure | Assessment based on internal control only (no notified body) |
| **Annex VII** | Conformity Assessment with Notified Body | Third-party assessment procedure requirements |
| **Annex IX** | Quality Management System | Requirements for QMS covering AI system lifecycle |

---

## 4. CONFORMITY ASSESSMENT PATHWAYS

### 4.1 Decision Tree: Which Pathway Applies?

```
START: High-Risk AI System Identified
│
├─ Is system a biometric identification system (Annex III Section 1)?
│  │
│  ├─ YES → MANDATORY PATH: Annex VII (Third-Party Assessment)
│  │        - Notified body involvement required
│  │        - QMS assessment + Technical documentation review
│  │        - Notified body certificate issued
│  │        - CE marking with notified body number
│  │        → Proceed to Section 4.2
│  │
│  └─ NO → Continue
│
├─ Is system in other Annex III categories (Sections 2-8)?
│  │
│  ├─ YES → PROVIDER CHOICE:
│  │        │
│  │        ├─ OPTION A: Annex VI (Internal Control)
│  │        │   - Provider conducts own assessment
│  │        │   - No notified body required
│  │        │   - Provider prepares technical documentation
│  │        │   - Provider issues Declaration of Conformity
│  │        │   - CE marking without notified body number
│  │        │   → Proceed to Section 4.3
│  │        │
│  │        └─ OPTION B: Annex VII (Third-Party Assessment)
│  │            - Provider chooses voluntary notified body involvement
│  │            - Same as biometric systems pathway
│  │            - Higher market confidence
│  │            → Proceed to Section 4.2
│  │
│  └─ NO → Not high-risk; this procedure does not apply
│
└─ END: Pathway Determined
```

### 4.2 Annex VII Pathway: Third-Party Assessment with Notified Body

**When Required:**
- **Mandatory:** Biometric identification and categorization systems (Annex III Section 1)
- **Optional:** Any other high-risk AI system (provider's choice)

**Process Overview:**

```
┌────────────────────────────────────────────────────────────────┐
│          ANNEX VII: THIRD-PARTY CONFORMITY ASSESSMENT          │
├────────────────────────────────────────────────────────────────┤
│                                                                 │
│  STAGE 1: QMS ASSESSMENT (Article 17 + Annex IX)              │
│  ├─ Provider establishes QMS                                   │
│  ├─ Notified body reviews QMS documentation                    │
│  ├─ Notified body conducts on-site audit (if needed)          │
│  ├─ Provider addresses non-conformities                        │
│  └─ Notified body issues QMS Certificate (valid 5 years)      │
│                                                                 │
│  STAGE 2: TECHNICAL DOCUMENTATION ASSESSMENT (Annex IV)        │
│  ├─ Provider prepares technical documentation                  │
│  ├─ Notified body reviews documentation completeness          │
│  ├─ Notified body assesses compliance with requirements       │
│  ├─ Provider addresses findings                                │
│  └─ Notified body approves technical documentation            │
│                                                                 │
│  STAGE 3: CONFORMITY CERTIFICATE                               │
│  ├─ Notified body issues EU Technical Documentation Certificate│
│  ├─ Valid for AI system and any substantial modifications     │
│  ├─ Certificate number recorded                                │
│  └─ Certificate maintained for 10 years                        │
│                                                                 │
│  STAGE 4: DECLARATION & CE MARKING                             │
│  ├─ Provider draws up EU Declaration of Conformity (Annex V)  │
│  ├─ Provider affixes CE marking                                │
│  ├─ CE marking includes notified body identification number   │
│  └─ System can be placed on market                             │
│                                                                 │
│  ONGOING: SURVEILLANCE                                          │
│  ├─ Notified body conducts periodic surveillance (annual)     │
│  ├─ Provider notifies substantial modifications               │
│  ├─ Provider maintains QMS effectiveness                       │
│  └─ Certificate can be suspended/withdrawn for non-compliance  │
│                                                                 │
└────────────────────────────────────────────────────────────────┘
```

**Key Characteristics:**
- **Duration:** 6-12 months typical
- **Cost:** €50,000-€200,000 (depends on system complexity and notified body)
- **Ongoing:** Annual surveillance audits required
- **Certificate Validity:** 5 years (QMS certificate)
- **Market Confidence:** High (third-party verified)

### 4.3 Annex VI Pathway: Internal Control

**When Allowed:**
- High-risk AI systems **other than** biometric identification (Annex III Sections 2-8)
- Provider's choice (alternative to Annex VII)

**Process Overview:**

```
┌────────────────────────────────────────────────────────────────┐
│            ANNEX VI: INTERNAL CONTROL PROCEDURE                │
├────────────────────────────────────────────────────────────────┤
│                                                                 │
│  STAGE 1: QMS ESTABLISHMENT (Article 17 + Annex IX)           │
│  ├─ Provider establishes and documents QMS                     │
│  ├─ Provider conducts internal QMS audit                       │
│  ├─ Provider ensures QMS effectiveness                         │
│  └─ NO NOTIFIED BODY ASSESSMENT                                │
│                                                                 │
│  STAGE 2: TECHNICAL DOCUMENTATION PREPARATION (Annex IV)       │
│  ├─ Provider prepares complete technical documentation         │
│  ├─ Provider conducts internal technical review                │
│  ├─ Provider verifies compliance with all requirements         │
│  └─ NO NOTIFIED BODY REVIEW                                    │
│                                                                 │
│  STAGE 3: CONFORMITY VERIFICATION                              │
│  ├─ Provider verifies AI system complies                       │
│  ├─ Provider conducts testing and validation                   │
│  ├─ Provider documents conformity evidence                     │
│  └─ Internal verification only                                 │
│                                                                 │
│  STAGE 4: DECLARATION & CE MARKING                             │
│  ├─ Provider draws up EU Declaration of Conformity (Annex V)  │
│  ├─ Provider affixes CE marking                                │
│  ├─ CE marking WITHOUT notified body number                    │
│  └─ System can be placed on market                             │
│                                                                 │
│  ONGOING: MAINTENANCE                                           │
│  ├─ Provider maintains technical documentation (10 years)     │
│  ├─ Provider maintains QMS effectiveness                       │
│  ├─ Provider updates for substantial modifications            │
│  └─ Subject to market surveillance by authorities              │
│                                                                 │
└────────────────────────────────────────────────────────────────┘
```

**Key Characteristics:**
- **Duration:** 3-6 months typical
- **Cost:** Internal costs only (€10,000-€50,000 estimated)
- **Ongoing:** No surveillance audits (but market surveillance possible)
- **Certificate:** None (self-declaration)
- **Market Confidence:** Lower (self-assessed)

### 4.4 Pathway Selection Decision Factors

| Factor | Annex VI (Internal) | Annex VII (Notified Body) |
|--------|---------------------|---------------------------|
| **Legal Requirement** | Optional (except Annex III-1) | Mandatory for Annex III-1; optional otherwise |
| **Market Confidence** | Lower (self-certified) | Higher (third-party verified) |
| **Time to Market** | Faster (3-6 months) | Slower (6-12 months) |
| **Cost** | Lower (€10K-€50K) | Higher (€50K-€200K+) |
| **Regulatory Scrutiny** | Higher (market surveillance) | Lower (pre-certified) |
| **Competitive Advantage** | Lower | Higher (differentiation) |
| **Liability Risk** | Higher (sole responsibility) | Lower (shared with notified body) |
| **Customer Preference** | Varies | Often preferred for critical systems |
| **International Recognition** | Lower | Higher (notified body known) |

### 4.5 Pathway Selection Recommendation Matrix

| AI System Characteristics | Recommended Pathway | Rationale |
|---------------------------|---------------------|-----------|
| Biometric identification | **Annex VII (Mandatory)** | Legal requirement |
| High safety criticality | **Annex VII** | Market confidence; liability reduction |
| B2B enterprise customers | **Annex VII** | Customer preference; procurement requirements |
| Public sector deployment | **Annex VII** | Regulatory expectations; transparency |
| International markets | **Annex VII** | Broader recognition |
| Startup with limited budget | **Annex VI** | Cost constraints; faster time to market |
| Low-complexity system | **Annex VI** | Sufficient for compliance |
| Established internal QMS | **Annex VI** | Leverage existing capabilities |

---

## 5. STEP-BY-STEP PROCEDURE

### PHASE 1: ASSESSMENT PLANNING

#### Step 1.1: Initiate Conformity Assessment Planning (Control CA-001)

**When:** After AI system classified as high-risk and ready for conformity assessment

**Who:** Conformity Assessment Manager + AI System Owner

**Regulatory Basis:** Article 43 (conformity assessment required); Annex VI/VII (process requirements)

**How:**

1. **Verify Prerequisites**
   - Confirm AI system is classified as high-risk (per PROC-AI-CLS-001)
   - Verify classification documented and approved
   - Confirm AI system development is sufficiently mature for assessment
   - Check that quality management system is operational (per PROC-AI-QMS-001)
   - Verify technical documentation preparation has started (per PROC-AI-DOC-001)

   **Gate Criteria:**
   - ✅ High-risk classification documented and approved
   - ✅ AI system at minimum 80% development complete
   - ✅ QMS operational and documented
   - ✅ Technical documentation 50% complete or more
   - ✅ Risk management completed (per PROC-AI-RM-001)

2. **Determine Conformity Assessment Pathway**
   - Use Decision Tree in Section 4.1
   - Check if system is in Annex III Section 1 (biometric identification)
     - If YES → **Annex VII mandatory**
     - If NO → Provider choice between **Annex VI** or **Annex VII**
   - Document pathway selection with rationale
   - Use Pathway Selection Decision Factors (Section 4.4)
   - Consider recommendation matrix (Section 4.5)

   **Documentation:**
   - Complete Conformity Assessment Pathway Selection Form (FORM-CA-001)
   - Document decision factors and rationale
   - Obtain approval from Chief Compliance Officer
   - If Annex VII selected: Document notified body selection criteria

3. **Establish Assessment Timeline**
   - Create detailed project timeline with milestones
   - Typical timelines:
     - **Annex VI:** 12-24 weeks
     - **Annex VII:** 24-48 weeks (includes notified body timelines)
   - Key milestones:
     - Technical documentation completion
     - QMS readiness review
     - Testing and validation completion
     - Notified body engagement (if Annex VII)
     - Non-conformity resolution deadline
     - Declaration of Conformity target date
     - Market placement target date

4. **Allocate Resources**
   - Identify assessment team members
   - Assign roles and responsibilities
   - Allocate budget:
     - **Annex VI:** Internal costs (personnel, testing, documentation)
     - **Annex VII:** Add notified body fees (€50K-€200K+)
   - Reserve external consultant budget if needed
   - Allocate testing resources and environments

5. **Conduct Readiness Assessment**
   - Evaluate current state vs. conformity requirements
   - Identify gaps in:
     - Technical documentation (Annex IV checklist)
     - QMS implementation (Annex IX requirements)
     - Testing and validation (Article 15 requirements)
     - Risk management (Article 9 requirements)
     - Data governance (Article 10 requirements)
     - Transparency (Article 13 requirements)
   - Estimate effort to close gaps
   - Prioritize gap closure activities

6. **Create Conformity Assessment Plan**
   - Document comprehensive assessment plan
   - Include:
     - Pathway selection and rationale
     - Assessment scope and objectives
     - Timeline and milestones
     - Resource allocation
     - Gap closure action plan
     - Risk register for assessment project
     - Communication plan
     - Escalation procedures
   - Use template: Conformity Assessment Plan (FORM-CA-002)

7. **Obtain Approval**
   - Present assessment plan to AI Governance Committee
   - Review budget and resource requirements
   - Confirm pathway selection
   - Obtain formal approval to proceed
   - Document approval and communicate to team

**Evidence Required:**
- Conformity Assessment Pathway Selection Form (FORM-CA-001)
- Conformity Assessment Readiness Report (RPT-CA-001)
- Conformity Assessment Plan (FORM-CA-002)
- Gap Analysis Report (RPT-CA-002)
- AI Governance Committee approval (meeting minutes)

**Timing:** 2-4 weeks

**Quality Check:**
- ✅ Pathway selection documented with clear rationale
- ✅ Timeline realistic and includes buffer for unexpected delays
- ✅ Budget approved and allocated
- ✅ All prerequisites met
- ✅ Gap analysis complete and action plan defined

---

#### Step 1.2: Establish Assessment Governance (Control CA-001)

**When:** Immediately after assessment plan approval

**Who:** Conformity Assessment Manager

**How:**

1. **Create Assessment Governance Structure**
   - Establish Conformity Assessment Steering Committee
   - Members:
     - Conformity Assessment Manager (Chair)
     - AI System Owner
     - QMS Lead
     - Technical Documentation Lead
     - Testing and Validation Lead
     - Legal Counsel
     - Chief Compliance Officer
   - Meeting frequency: Weekly during active assessment; bi-weekly during notified body review

2. **Define Communication Protocols**
   - Weekly status reports to AI Governance Committee
   - Escalation procedures for:
     - Timeline delays > 2 weeks
     - Budget overruns > 10%
     - Critical non-conformities identified
     - Notified body issues (if applicable)
   - Stakeholder communication plan
   - Notified body communication lead (if Annex VII)

3. **Establish Issue Tracking**
   - Set up conformity assessment issue tracker
   - Issue categories:
     - Technical documentation gaps
     - QMS deficiencies
     - Testing failures
     - Non-conformities identified
     - Notified body findings
   - Assign severity levels:
     - **Critical:** Blocks conformity assessment
     - **High:** Significant delay risk
     - **Medium:** Minor delay possible
     - **Low:** No impact on timeline
   - Track issue resolution and closure

4. **Create Assessment Dashboard**
   - Real-time visibility into assessment progress
   - Key metrics:
     - % Technical documentation complete
     - % QMS requirements met
     - % Testing complete
     - Open issues by severity
     - Timeline status (on-track / at-risk / delayed)
     - Budget utilization
   - Update weekly

**Evidence Required:**
- Assessment Governance Charter (DOC-CA-001)
- Communication Plan (DOC-CA-002)
- Issue Tracking System setup
- Assessment Dashboard configuration

**Timing:** 1 week

---

### PHASE 2: NOTIFIED BODY SELECTION

**Note:** This phase applies **only if Annex VII pathway selected**. Skip to Phase 3 if Annex VI pathway.

#### Step 2.1: Identify Candidate Notified Bodies (Control CA-002)

**When:** Immediately after Annex VII pathway confirmed

**Who:** Conformity Assessment Manager + Procurement

**Regulatory Basis:** Article 43 (notified body involvement); Regulation (EC) No 765/2008 (notified body framework)

**How:**

1. **Access Notified Body Database**
   - EU Commission maintains official NANDO database: https://ec.europa.eu/growth/tools-databases/nando/
   - Filter for notified bodies accredited for:
     - **EU AI Act (Regulation (EU) 2024/1689)**
     - Conformity assessment procedures per Annex VII
   - Export list of accredited notified bodies

2. **Define Selection Criteria**

   | Criterion | Weight | Scoring Method |
   |-----------|--------|----------------|
   | **AI Act Accreditation** | 25% | Binary (accredited=5, not=0) |
   | **Domain Expertise** | 20% | 1-5 scale (domain match to AI system sector) |
   | **Geographic Presence** | 10% | 1-5 scale (local presence advantageous) |
   | **Timeline Capacity** | 15% | 1-5 scale (can meet target dates) |
   | **Cost** | 15% | 1-5 scale (within budget) |
   | **Reputation** | 10% | 1-5 scale (references, track record) |
   | **Language Capability** | 5% | 1-5 scale (supports required languages) |

   **Weighted Score** = Sum of (Criterion Score × Weight)

3. **Create Candidate Shortlist**
   - Minimum 3 candidates for comparison
   - Maximum 5 candidates (beyond this diminishing returns)
   - Use Selection Criteria Scoring Matrix (FORM-CA-003)
   - Calculate weighted scores
   - Rank candidates

4. **Conduct Preliminary Outreach**
   - Contact top 3 candidates
   - Request:
     - Confirmation of AI Act accreditation scope
     - Availability and timeline estimates
     - Preliminary cost estimate (non-binding)
     - Reference customers (similar AI systems)
     - Lead auditor credentials
   - Schedule introductory calls

5. **Perform Due Diligence**
   - Check accreditation status in NANDO database
   - Verify accreditation scope covers your AI system type
   - Check for any suspensions or restrictions
   - Contact references:
     - Assessment quality
     - Timeline adherence
     - Communication effectiveness
     - Cost transparency
     - Post-certificate support
   - Review notified body's published guidance documents

**Evidence Required:**
- Notified Body Candidate List (RPT-CA-003)
- Selection Criteria Scoring Matrix (FORM-CA-003)
- Due Diligence Report (RPT-CA-004)
- Reference Check Records (REC-CA-001)

**Timing:** 2-3 weeks

---

#### Step 2.2: Select and Engage Notified Body (Control CA-002)

**When:** After candidate evaluation complete

**Who:** Conformity Assessment Manager + Procurement + Legal Counsel

**How:**

1. **Request Formal Proposals**
   - Send Request for Proposal (RFP) to top 3 candidates
   - RFP should include:
     - AI system description and classification
     - Technical documentation outline (Annex IV)
     - QMS maturity assessment
     - Target timeline and milestones
     - Scope of assessment (QMS + technical documentation)
     - Request for detailed cost breakdown
     - Contract terms requirements
   - Set proposal deadline (2-3 weeks)

2. **Evaluate Proposals**
   - Review proposals against selection criteria
   - Key evaluation factors:
     - **Timeline:** Can they meet market placement target?
     - **Cost:** Total cost of ownership (assessment + surveillance)
     - **Approach:** Assessment methodology and rigor
     - **Team:** Qualifications and experience of assessment team
     - **Support:** Post-certificate ongoing support
   - Conduct proposal clarification meetings if needed
   - Update scoring matrix with proposal data

3. **Make Selection Decision**
   - Present comparative analysis to Chief Compliance Officer
   - Recommend notified body based on weighted scoring
   - Obtain approval for selection
   - Document selection rationale
   - Notify selected and non-selected candidates

4. **Negotiate Contract**
   - Key contract terms:
     - **Scope:** QMS assessment + technical documentation review
     - **Timeline:** Milestones and deliverables with dates
     - **Cost:** Fixed fee vs. time & materials; payment terms
     - **Responsibilities:** Provider vs. notified body obligations
     - **Confidentiality:** NDA for sensitive technical information
     - **Liability:** Limitations and indemnification
     - **Termination:** Conditions and notice periods
     - **Surveillance:** Post-certificate surveillance audit frequency and cost
   - Legal Counsel reviews and approves contract
   - Both parties sign

5. **Initiate Engagement**
   - Kick-off meeting with notified body
   - Agenda:
     - Introduction of teams
     - Review assessment scope and timeline
     - Discuss assessment methodology
     - Clarify documentation requirements
     - Establish communication protocols
     - Schedule preliminary QMS audit (if ready)
     - Address questions and concerns
   - Assign primary contact points
   - Establish document sharing mechanism (secure portal)

6. **Register Engagement**
   - Document notified body selection and engagement
   - Record notified body identification number (for CE marking)
   - Update conformity assessment plan with notified body timeline
   - Communicate engagement to assessment team
   - Update assessment dashboard

**Evidence Required:**
- Notified Body Proposals (received proposals)
- Notified Body Selection Report (RPT-CA-005)
- Notified Body Contract (signed agreement)
- Kick-off Meeting Minutes (REC-CA-002)
- Notified Body Identification Number (for CE marking)

**Timing:** 4-6 weeks

**Quality Check:**
- ✅ Minimum 3 proposals evaluated
- ✅ Selection criteria applied objectively
- ✅ Contract reviewed and approved by Legal Counsel
- ✅ Notified body accreditation verified in NANDO
- ✅ Kick-off meeting conducted and documented

---

#### Step 2.3: Plan Notified Body Assessment Schedule (Control CA-011)

**When:** After notified body engagement

**Who:** Conformity Assessment Manager + Notified Body Lead Auditor

**How:**

1. **Develop Joint Assessment Schedule**
   - Collaborate with notified body to create detailed schedule
   - Key activities:
     - **QMS Documentation Review** (2-4 weeks)
     - **QMS On-Site Audit** (3-5 days)
     - **QMS Non-Conformity Resolution** (2-6 weeks)
     - **QMS Certificate Issuance** (1-2 weeks)
     - **Technical Documentation Submission** (1 week)
     - **Technical Documentation Review** (4-8 weeks)
     - **Technical Documentation Clarifications** (2-4 weeks)
     - **Final Assessment Report** (2 weeks)
     - **Certificate Issuance** (1 week)
   - Total duration: 16-30 weeks typical

2. **Identify Assessment Readiness Gates**
   - QMS readiness gate: QMS must be operational before audit
   - Technical documentation readiness gate: Complete before submission
   - Testing completion gate: All validation testing complete
   - Non-conformity resolution gate: All critical/high issues resolved

3. **Establish Communication Cadence**
   - Weekly status calls with notified body
   - Bi-weekly progress reports from notified body
   - Escalation protocol for issues
   - Primary contact points on both sides

**Evidence Required:**
- Notified Body Assessment Schedule (DOC-CA-003)
- Assessment Readiness Gates (checklist)
- Communication Protocol (DOC-CA-004)

**Timing:** 1-2 weeks

---

### PHASE 3: TECHNICAL DOCUMENTATION REVIEW

#### Step 3.1: Complete Technical Documentation Package (Control CA-003, CA-012)

**When:** During assessment preparation (before submission to notified body if Annex VII)

**Who:** Technical Documentation Lead + AI System Owner

**Regulatory Basis:** Article 11 (technical documentation requirement); Annex IV (documentation content)

**How:**

1. **Review Annex IV Requirements**

   Annex IV specifies technical documentation must contain:

   **Section 1: General Description**
   - 1.a) Name, type, unique identification of AI system
   - 1.b) Provider name, address, contact information
   - 1.c) Authorized representative (if applicable)
   - 1.d) AI system intended purpose
   - 1.e) Hardware requirements
   - 1.f) Software dependencies and versions
   - 1.g) Date of AI system version / release

   **Section 2: Detailed Description**
   - 2.a) AI system's methods and steps for development
   - 2.b) Design specifications and architecture
   - 2.c) Components, how they interact
   - 2.d) Computational resources used
   - 2.e) Relevant changes made throughout lifecycle
   - 2.f) Description of how AI system operates and provides outputs
   - 2.g) Human oversight measures (Article 14)
   - 2.h) Cybersecurity measures (Article 15)

   **Section 3: Detailed Description of Data**
   - 3.a) Training, validation, testing datasets
   - 3.b) Data sources and collection methodology
   - 3.c) Data preparation, filtering, labeling procedures
   - 3.d) Data representativeness assessment
   - 3.e) Biases identified in data
   - 3.f) Data governance and management procedures (Article 10)

   **Section 4: Assessment of AI System**
   - 4.a) Risk management documentation (Article 9)
   - 4.b) Testing procedures and results (Article 15)
   - 4.c) Metrics used to measure performance (Article 15)
   - 4.d) Validation results on test dataset
   - 4.e) Assessment of bias and discrimination (Article 10(5))
   - 4.f) Robustness, security, cybersecurity assessment

   **Section 5: Quality Management System**
   - 5.a) QMS documentation per Annex IX
   - 5.b) Post-market monitoring procedures (Article 72)
   - 5.c) Incident reporting procedures (Article 73)

   **Section 6: Declaration and Harmonized Standards**
   - 6.a) EU Declaration of Conformity (once issued)
   - 6.b) Harmonized standards or common specifications applied
   - 6.c) Justification if harmonized standards not applied

2. **Use Technical Documentation Checklist**
   - Complete Annex IV Compliance Checklist (CHK-CA-001)
   - For each requirement:
     - ✅ Complete: Documentation exists and is comprehensive
     - 🟡 Partial: Documentation exists but has gaps
     - ❌ Missing: Documentation does not exist
     - N/A: Requirement not applicable to this AI system
   - Calculate completeness: % of applicable requirements marked complete

3. **Compile Documentation Package**
   - Organize documentation according to Annex IV structure
   - Create master document index
   - Ensure internal cross-references are correct
   - Version control: Clearly identify document versions
   - Add cover page with:
     - AI system identification
     - Documentation version and date
     - Provider information
     - Confidentiality notice
   - Use template: Technical Documentation Package Template (TMP-CA-001)

4. **Conduct Internal Technical Review**
   - Assemble review team:
     - Technical Documentation Lead (chair)
     - AI System Owner
     - Data Scientist / ML Engineer
     - QMS Lead
     - Compliance Officer
     - Legal Counsel (for sensitive sections)
   - Review criteria:
     - **Completeness:** All Annex IV requirements addressed
     - **Accuracy:** Information is correct and up-to-date
     - **Clarity:** Documentation is clear and understandable
     - **Consistency:** No contradictions or discrepancies
     - **Sufficiency:** Adequate detail for conformity assessment
   - Document review findings
   - Identify gaps and assign owners to address

5. **Address Documentation Gaps**
   - Prioritize gaps:
     - **Critical:** Required for conformity; blocking issue
     - **High:** Important for assessment; may cause delay
     - **Medium:** Desirable; improves documentation quality
     - **Low:** Nice-to-have; cosmetic improvements
   - Assign owners and target dates for gap closure
   - Track progress in issue tracker
   - Conduct follow-up review when gaps addressed

6. **Obtain Internal Approval**
   - Technical Documentation Lead reviews final package
   - Chief Compliance Officer reviews for regulatory completeness
   - Legal Counsel reviews for liability and IP considerations
   - AI System Owner signs off on technical accuracy
   - Document approval with signatures

7. **Prepare for Submission (Annex VII) or Archive (Annex VI)**
   - **If Annex VII (notified body):**
     - Upload to notified body's secure document portal
     - Confirm receipt and completeness
     - Provide any additional information requested
     - Schedule technical documentation review kickoff
   - **If Annex VI (internal control):**
     - Archive in secure document management system
     - Ensure 10-year retention capability
     - Make available for market surveillance authorities upon request

**Evidence Required:**
- Technical Documentation Package (per Annex IV structure)
- Annex IV Compliance Checklist (CHK-CA-001)
- Technical Documentation Index (master document list)
- Internal Technical Review Report (RPT-CA-006)
- Technical Documentation Approval (signatures)
- Submission Confirmation (if Annex VII)

**Timing:** 8-12 weeks (can be done in parallel with QMS assessment)

**Quality Check:**
- ✅ Annex IV checklist 100% complete (all applicable requirements)
- ✅ Internal review conducted with documented findings
- ✅ All critical and high gaps addressed
- ✅ Approval signatures obtained
- ✅ Document version control clear and correct
- ✅ 10-year retention capability confirmed

---

#### Step 3.2: Technical Documentation Assessment by Notified Body (Control CA-003)

**Note:** This step applies **only to Annex VII pathway**. Skip if Annex VI.

**When:** After technical documentation submitted to notified body

**Who:** Notified Body + Technical Documentation Lead

**Regulatory Basis:** Annex VII (notified body assessment procedure)

**How:**

1. **Notified Body Conducts Desk Review**
   - Notified body reviews documentation against Annex IV requirements
   - Typical review duration: 4-8 weeks
   - Notified body assesses:
     - Completeness (all required sections present)
     - Adequacy (sufficient detail and evidence)
     - Compliance (AI system meets EU AI Act requirements)
     - Consistency (documentation aligns with QMS)
   - Notified body may request clarifications or additional information

2. **Respond to Notified Body Requests**
   - Notified body issues Information Request List
   - Prioritize responses:
     - Critical information requests answered within 5 business days
     - Standard requests answered within 10 business days
   - Provide clear, complete, referenced responses
   - Track all information requests in issue tracker
   - Document all communications

3. **Address Technical Documentation Findings**
   - Notified body issues Preliminary Assessment Report
   - Findings categorized:
     - **Non-Conformity (NC):** Requirement not met; must be resolved
     - **Observation:** Potential issue; improvement recommended
     - **Positive Finding:** Good practice noted
   - For each non-conformity:
     - Root cause analysis
     - Corrective action plan with owner and target date
     - Implement corrective action
     - Document evidence of resolution
     - Submit resolution evidence to notified body

4. **Participate in Assessment Meetings**
   - Notified body may request clarification meetings
   - Prepare thoroughly:
     - Review questions/topics in advance
     - Bring subject matter experts
     - Prepare supporting materials
   - Document meeting discussions and commitments

5. **Receive Technical Documentation Approval**
   - After all non-conformities resolved, notified body issues Technical Documentation Approval
   - Approval includes:
     - Statement of compliance with Annex IV
     - List of harmonized standards applied (if any)
     - Any conditions or limitations
   - Technical documentation approval is input to certificate issuance

**Evidence Required:**
- Information Request List from notified body
- Provider Responses to Information Requests (REC-CA-003)
- Preliminary Assessment Report from notified body
- Non-Conformity Resolution Evidence (REC-CA-004)
- Technical Documentation Approval from notified body
- All communications with notified body (email archive)

**Timing:** 6-10 weeks (including clarifications and resolutions)

---

### PHASE 4: QMS ASSESSMENT

#### Step 4.1: QMS Readiness Review (Control CA-004)

**When:** Before QMS assessment (internal or notified body)

**Who:** QMS Lead + Conformity Assessment Manager

**Regulatory Basis:** Article 17 (QMS requirement); Annex IX (QMS elements)

**How:**

1. **Review Annex IX QMS Requirements**

   Annex IX specifies QMS must address:

   **Section 1: Strategy for Regulatory Compliance**
   - 1.a) Compliance policy and objectives
   - 1.b) Procedures to ensure compliance awareness
   - 1.c) Procedures for examining compliance with EU AI Act
   - 1.d) Procedures to maintain compliance

   **Section 2: Design, Control, and Documentation**
   - 2.a) Strategy for design and development of AI systems
   - 2.b) Techniques, procedures, systematic actions for AI design
   - 2.c) Procedures for design verification and validation
   - 2.d) Technical specifications including harmonized standards
   - 2.e) Quality control and quality assurance procedures
   - 2.f) Procedures for design changes and approvals
   - 2.g) Procedures to identify and trace AI system versions
   - 2.h) Post-market monitoring system (Article 72)

   **Section 3: Documentation and Record Keeping**
   - 3.a) Procedures to maintain technical documentation (10 years)
   - 3.b) Procedures to maintain EU Declaration of Conformity (10 years)
   - 3.c) Procedures to maintain logs generated by AI system
   - 3.d) Document control and retention procedures

   **Section 4: Resource Management**
   - 4.a) Procedures to ensure adequate resources
   - 4.b) Staff competence requirements
   - 4.c) Training procedures

   **Section 5: Risk Management**
   - 5.a) Risk management system per Article 9
   - 5.b) Procedures for identifying, analyzing, evaluating risks
   - 5.c) Procedures for risk treatment and monitoring

   **Section 6: Post-Market Monitoring**
   - 6.a) Post-market monitoring plan per Article 72
   - 6.b) Procedures to collect and analyze data from deployed systems
   - 6.c) Procedures to identify and address issues
   - 6.d) Serious incident reporting per Article 73

   **Section 7: Communication**
   - 7.a) Procedures to communicate with authorities
   - 7.b) Procedures to communicate with customers and deployers
   - 7.c) Procedures to handle complaints

2. **Conduct QMS Readiness Self-Assessment**
   - Complete Annex IX Compliance Checklist (CHK-CA-002)
   - For each requirement:
     - ✅ Implemented: Procedure exists, documented, operational, evidence available
     - 🟡 Partial: Procedure exists but has gaps or limited evidence
     - ❌ Not Implemented: Procedure missing or not operational
     - N/A: Not applicable to this organization/system
   - Calculate QMS maturity: % of applicable requirements marked implemented

3. **Conduct Internal QMS Audit**
   - Select internal auditors (independent of area being audited)
   - Develop audit plan covering all Annex IX sections
   - Conduct audit:
     - Review QMS documentation
     - Interview process owners
     - Review objective evidence (records, work products)
     - Test process effectiveness
   - Document audit findings:
     - **Major Non-Conformity:** Requirement not met; critical gap
     - **Minor Non-Conformity:** Partial implementation; improvement needed
     - **Observation:** Opportunity for improvement
   - Report to QMS Lead and management

4. **Address Internal Audit Findings**
   - For each non-conformity:
     - Root cause analysis
     - Corrective action plan
     - Implementation with target dates
     - Verification of effectiveness
   - Close all major non-conformities before external assessment
   - Document corrective actions

5. **Prepare QMS Documentation Package**
   - Compile QMS documentation:
     - QMS Manual (high-level overview)
     - Procedures (detailed work instructions per Annex IX section)
     - Forms and templates
     - Records (evidence of QMS operation)
   - Organize per Annex IX structure
   - Create QMS documentation index
   - Ensure version control is clear

6. **Conduct Management Review**
   - Management reviews QMS readiness
   - Review:
     - Internal audit results
     - QMS effectiveness metrics
     - Corrective actions status
     - Resource adequacy
     - Readiness for external assessment
   - Management approves QMS documentation package
   - Document management review meeting

**Evidence Required:**
- Annex IX Compliance Checklist (CHK-CA-002)
- Internal QMS Audit Report (RPT-CA-007)
- Internal Audit Findings and Corrective Actions (REC-CA-005)
- QMS Documentation Package (organized per Annex IX)
- QMS Documentation Index
- Management Review Meeting Minutes (REC-CA-006)

**Timing:** 4-6 weeks

**Quality Check:**
- ✅ Annex IX checklist ≥90% implemented
- ✅ Internal audit conducted by independent auditors
- ✅ All major non-conformities closed
- ✅ QMS documentation complete and organized
- ✅ Management review conducted and documented

---

#### Step 4.2: QMS Assessment Execution (Control CA-004)

**When:** After QMS readiness review complete

**Who:**
- **Annex VII:** Notified Body Lead Auditor + QMS Lead
- **Annex VI:** Internal QMS Lead (self-assessment)

**Regulatory Basis:** Annex VII Section 1 (QMS assessment by notified body) or Annex VI (internal control)

**How:**

**FOR ANNEX VII PATHWAY (Notified Body Assessment):**

1. **QMS Documentation Review (Desk Review)**
   - Provider submits QMS documentation package to notified body
   - Notified body reviews documentation against Annex IX
   - Duration: 2-4 weeks
   - Notified body issues documentation review report
   - Provider addresses documentation gaps before on-site audit

2. **QMS On-Site Audit**
   - Notified body conducts on-site audit at provider's facilities
   - Duration: 3-5 days (depends on organization size and scope)
   - Audit activities:
     - Opening meeting (agenda, logistics, introductions)
     - Process walkthroughs and interviews
     - Review of objective evidence (records, work products)
     - Testing of process effectiveness
     - Observations and findings documentation
     - Closing meeting (preliminary findings presentation)
   - Audit checklist based on Annex IX requirements

3. **QMS Audit Findings Resolution**
   - Notified body issues QMS Audit Report
   - Findings categorized:
     - **Major Non-Conformity:** Critical gap; must be resolved before certificate
     - **Minor Non-Conformity:** Improvement needed; resolve within 30-90 days
     - **Observation:** Opportunity for improvement; no formal resolution required
   - Provider responds:
     - Root cause analysis for each non-conformity
     - Corrective action plan with owner, action, target date
     - Implementation of corrective actions
     - Evidence of effectiveness
   - Provider submits Corrective Action Response (CAR) to notified body
   - Notified body verifies corrective actions (may require follow-up audit)

4. **QMS Certificate Issuance**
   - After all major non-conformities resolved, notified body issues **QMS Certificate**
   - Certificate contents:
     - Provider identification
     - Certificate number (unique identifier)
     - Scope of QMS (AI system types covered)
     - Issuance date
     - Expiration date (typically 5 years)
     - Notified body identification
     - Any conditions or limitations
   - Provider maintains certificate copy
   - Certificate required for technical documentation assessment

**FOR ANNEX VI PATHWAY (Internal Control):**

1. **Self-Assessment Completion**
   - QMS Lead conducts comprehensive self-assessment against Annex IX
   - Document QMS implementation evidence
   - Complete Annex IX Compliance Statement
   - Chief Compliance Officer reviews and approves

2. **QMS Effectiveness Verification**
   - Conduct management review of QMS effectiveness
   - Review QMS metrics and performance data
   - Verify QMS processes are operational and effective
   - Document management approval

3. **QMS Documentation Archival**
   - Archive QMS documentation package
   - Ensure 10-year retention
   - Make available for market surveillance authorities

**Evidence Required:**

**Annex VII:**
- QMS Documentation Package submission confirmation
- QMS Documentation Review Report (from notified body)
- QMS Audit Plan (from notified body)
- QMS Audit Report (from notified body)
- Corrective Action Response (CAR) (REC-CA-007)
- QMS Certificate (from notified body)

**Annex VI:**
- Annex IX Compliance Statement (RPT-CA-008)
- QMS Effectiveness Evidence
- Management Review and Approval (REC-CA-008)

**Timing:**
- **Annex VII:** 8-12 weeks (documentation review + audit + findings resolution)
- **Annex VI:** 2-3 weeks (self-assessment and approval)

**Quality Check:**
- ✅ All Annex IX requirements addressed
- ✅ All major non-conformities resolved (if Annex VII)
- ✅ QMS certificate obtained (if Annex VII) or self-assessment approved (if Annex VI)
- ✅ Evidence of QMS effectiveness documented

---

### PHASE 5: TESTING AND VALIDATION

#### Step 5.1: Develop Conformity Testing Plan (Control CA-005)

**When:** During assessment preparation (parallel to documentation preparation)

**Who:** Testing and Validation Lead + AI System Owner

**Regulatory Basis:** Article 15 (accuracy, robustness, cybersecurity); Annex IV Section 4 (testing documentation)

**How:**

1. **Define Testing Objectives**
   - Demonstrate compliance with EU AI Act requirements
   - Validate AI system performance against specifications
   - Verify risk controls are effective
   - Assess accuracy, robustness, security, fairness
   - Generate objective evidence for conformity assessment

2. **Identify Testing Requirements**

   Testing must cover:

   **Article 15 - Accuracy, Robustness, Cybersecurity:**
   - Accuracy testing on test dataset
   - Performance against metrics (precision, recall, F1, etc.)
   - Robustness against input variations
   - Robustness against adversarial attacks
   - Security vulnerability assessment
   - Cybersecurity controls testing

   **Article 9 - Risk Management:**
   - Risk control effectiveness testing
   - Residual risk verification
   - Misuse scenario testing

   **Article 10 - Data Governance:**
   - Data quality verification
   - Bias and fairness testing
   - Data representativeness assessment

   **Article 14 - Human Oversight:**
   - Human oversight interface testing
   - Override capability verification
   - Interpretability of outputs

3. **Define Test Cases**
   - Develop comprehensive test case library
   - For each requirement:
     - Test case ID
     - Requirement being tested
     - Test objective
     - Test procedure (step-by-step)
     - Test data / inputs
     - Expected results
     - Pass/fail criteria
     - Traceability to technical documentation
   - Organize test cases by category:
     - Functional testing (system does what it should)
     - Performance testing (accuracy, speed, scalability)
     - Security testing (vulnerabilities, attacks)
     - Fairness testing (bias, discrimination)
     - Robustness testing (edge cases, adversarial inputs)
     - Usability testing (human oversight, interpretability)

4. **Plan Testing Environments**
   - **Development Environment:** Initial testing by developers
   - **Staging Environment:** Pre-production testing, mirrors production
   - **Production Environment:** Final validation (limited scope)
   - Test data:
     - Separate test dataset (not used in training)
     - Representative of real-world distribution
     - Includes edge cases and adversarial examples
     - Privacy-protected (if sensitive data)

5. **Define Testing Schedule**
   - Integrate with conformity assessment timeline
   - Typical testing phases:
     - Unit testing (ongoing during development)
     - Integration testing (2-3 weeks)
     - System testing (3-4 weeks)
     - Acceptance testing (2-3 weeks)
   - Build buffer for re-testing if failures occur

6. **Identify Testing Resources**
   - Testing personnel (internal or external)
   - Testing tools and infrastructure
   - Test datasets
   - Budget for testing activities

7. **Document Testing Plan**
   - Comprehensive Conformity Testing Plan (DOC-CA-005)
   - Includes:
     - Testing objectives and scope
     - Testing requirements and test case library
     - Testing environments and data
     - Testing schedule and milestones
     - Resource allocation
     - Roles and responsibilities
     - Pass/fail criteria
     - Issue escalation procedures
   - Use template: Conformity Testing Plan Template (TMP-CA-002)

8. **Obtain Approval**
   - Review testing plan with AI System Owner
   - Review with notified body (if Annex VII)
   - Obtain approval from Testing and Validation Lead
   - Document approval

**Evidence Required:**
- Conformity Testing Plan (DOC-CA-005)
- Test Case Library (DOC-CA-006)
- Testing Schedule (integrated with assessment timeline)
- Testing Plan Approval

**Timing:** 2-3 weeks

---

#### Step 5.2: Execute Conformity Testing (Control CA-005)

**When:** After testing plan approved; AI system development complete

**Who:** Testing and Validation Lead + Test Engineers + Data Scientists

**How:**

1. **Prepare Testing Environment**
   - Set up testing infrastructure
   - Deploy AI system to staging environment
   - Load test datasets
   - Configure monitoring and logging
   - Verify test environment readiness

2. **Execute Test Cases**
   - Execute test cases per testing plan
   - For each test case:
     - Record test execution date/time
     - Record test executor
     - Follow test procedure exactly
     - Capture test inputs and outputs
     - Compare actual results to expected results
     - Record pass/fail status
     - Document any deviations or anomalies
   - Use Test Execution Record Template (TMP-CA-003)

3. **Capture Testing Evidence**
   - Screenshots of test execution
   - Log files and system outputs
   - Performance metrics and statistics
   - Test data samples (anonymized if needed)
   - Any artifacts generated during testing

4. **Document Test Failures**
   - For each failed test:
     - Test case ID
     - Failure description (what happened vs. what should have happened)
     - Severity:
       - **Critical:** Complete failure; blocks conformity
       - **High:** Significant deviation; major concern
       - **Medium:** Minor deviation; acceptable with mitigation
       - **Low:** Cosmetic issue; no functional impact
     - Root cause analysis
     - Assign to owner for resolution
   - Track in issue tracker

5. **Conduct Re-Testing**
   - After fixes implemented, re-execute failed test cases
   - Verify issue is resolved
   - Record re-test results
   - Continue until all tests pass or acceptable residual failures documented

6. **Perform Statistical Analysis**
   - Calculate performance metrics:
     - Accuracy, precision, recall, F1 score
     - True positive rate, false positive rate
     - Fairness metrics (demographic parity, equal opportunity, etc.)
     - Latency and throughput
   - Compare to acceptance criteria
   - Document statistical results

7. **Assess Fairness and Bias**
   - Test AI system outputs across demographic groups
   - Calculate fairness metrics per Article 10(5)
   - Identify any disparate impact
   - Document bias assessment results
   - Link to Risk Management bias assessment (PROC-AI-RM-001)

8. **Test Security and Robustness**
   - Conduct adversarial testing (attack scenarios)
   - Test input validation and sanitization
   - Verify security controls operational
   - Test robustness to input variations and noise
   - Document security and robustness results

9. **Validate Human Oversight**
   - Test human oversight interfaces
   - Verify override capabilities work
   - Test interpretability features
   - Validate alerts and notifications
   - Document human oversight validation

10. **Compile Test Results**
    - Aggregate all test execution records
    - Calculate test pass rate: (passed tests / total tests) × 100%
    - Summarize findings by category
    - Document any residual failures with acceptance rationale

**Evidence Required:**
- Test Execution Records (TMP-CA-003) - for each test case
- Test Results Summary Report (RPT-CA-009)
- Test Evidence Package (screenshots, logs, data)
- Failed Test Analysis and Resolution (REC-CA-009)
- Re-Test Results
- Statistical Analysis Report (RPT-CA-010)
- Bias and Fairness Testing Report (RPT-CA-011)
- Security and Robustness Testing Report (RPT-CA-012)
- Human Oversight Validation Report (RPT-CA-013)

**Timing:** 6-10 weeks (depends on system complexity and re-testing needs)

**Quality Check:**
- ✅ All planned test cases executed
- ✅ Test pass rate ≥95% (or justified)
- ✅ All critical and high severity failures resolved
- ✅ Performance metrics meet acceptance criteria
- ✅ Fairness metrics within acceptable range
- ✅ Security controls verified operational
- ✅ Human oversight capabilities validated

---

#### Step 5.3: Validation by Notified Body (Control CA-005)

**Note:** This step applies **only to Annex VII pathway**. Skip if Annex VI.

**When:** After testing complete and results documented

**Who:** Notified Body + Testing and Validation Lead

**How:**

1. **Submit Testing Evidence to Notified Body**
   - Provide test results summary report
   - Provide test execution records (sample or all)
   - Provide statistical analysis
   - Provide bias, security, human oversight reports
   - Make test evidence package available

2. **Notified Body Reviews Testing**
   - Notified body reviews test plan and results
   - Assesses:
     - Testing comprehensiveness (all requirements covered?)
     - Testing methodology (appropriate tests?)
     - Test execution (properly conducted?)
     - Test results (AI system meets requirements?)
     - Evidence quality (sufficient and credible?)
   - May request:
     - Additional test cases
     - Clarifications on test methodology
     - Re-testing with notified body observation

3. **Witness Testing (If Required)**
   - Notified body may require witness testing
   - Provider executes test cases with notified body present
   - Notified body observes and verifies results
   - Notified body documents witnessed testing

4. **Address Notified Body Testing Findings**
   - Notified body issues Testing Assessment Report
   - Provider addresses any findings:
     - Additional testing if gaps identified
     - Re-testing if results questioned
     - Clarifications if methodology unclear
   - Provider submits resolution evidence

5. **Notified Body Approves Testing**
   - After satisfactory testing evidence, notified body approves
   - Testing approval is input to certificate issuance
   - Document approval in assessment record

**Evidence Required:**
- Testing Evidence Submission Confirmation
- Notified Body Testing Assessment Report
- Witness Testing Records (if applicable)
- Testing Approval from Notified Body

**Timing:** 3-5 weeks (including clarifications and witness testing if needed)

---

### PHASE 6: DECLARATION OF CONFORMITY

#### Step 6.1: Prepare EU Declaration of Conformity (Control CA-006)

**When:** After all assessments complete and conformity verified

**Who:** Conformity Assessment Manager + Chief Compliance Officer + Legal Counsel

**Regulatory Basis:** Article 47 (Declaration of Conformity); Annex V (Declaration template)

**How:**

1. **Review Annex V Requirements**

   Per Annex V, the EU Declaration of Conformity must contain:

   **1. AI System and Provider Identification:**
   - AI system trade name, product name, or unique identification
   - Type and version of AI system
   - Name and address of provider (or authorized representative if provider outside EU)

   **2. Declaration Statement:**
   - Statement that Declaration issued under sole responsibility of provider
   - Statement that AI system complies with EU AI Act Regulation (EU) 2024/1689

   **3. Harmonized Standards or Common Specifications:**
   - References to harmonized standards applied (if any)
   - References to common specifications applied (if any)
   - Where applicable: parts of standards applied

   **4. Notified Body Information (if applicable):**
   - Name, identification number, and address of notified body
   - Certificate number issued by notified body
   - Conformity assessment procedure followed (Annex VII)

   **5. Additional Regulatory References:**
   - References to other applicable EU legislation (if any)
   - E.g., GDPR, Machinery Directive, Medical Devices Regulation, etc.

   **6. Signature:**
   - Place and date of issue
   - Name and function of person who signed
   - Signature (original or qualified electronic signature)

2. **Gather Required Information**

   Collect all information needed for Declaration:

   | Information Item | Source Document |
   |------------------|-----------------|
   | AI system identification | Technical Documentation (Annex IV Section 1) |
   | AI system version | Version control records |
   | Provider name and address | Corporate registration documents |
   | Authorized representative (if applicable) | Authorization agreement |
   | Harmonized standards applied | Technical Documentation (Annex IV Section 6) |
   | Common specifications applied | Technical Documentation (Annex IV Section 6) |
   | Notified body information | Notified body certificate (if Annex VII) |
   | Certificate number | Notified body certificate |
   | Conformity assessment procedure | Assessment plan (Annex VI or VII) |
   | Other applicable EU legislation | Legal analysis |
   | Responsible person | Executive authorization |

3. **Complete Declaration Template**
   - Use Annex V Declaration of Conformity Template (see Appendix A)
   - Complete all mandatory fields
   - Ensure accuracy of all information
   - Verify consistency with technical documentation
   - Language:
     - If notified body involved: Language accepted by notified body
     - Additionally: Official language(s) of Member State(s) where system placed on market
     - English recommended for international markets

4. **Conduct Legal Review**
   - Legal Counsel reviews Declaration
   - Verifies:
     - Legal accuracy of statements
     - Compliance with Article 47 requirements
     - Consistency with Annex V template
     - Authorized signatory identified
     - Liability implications understood
   - Legal Counsel approves Declaration

5. **Obtain Management Authorization**
   - Identify authorized signatory:
     - Must be senior management or executive
     - Must have legal authority to bind the organization
     - Recommended: CEO, CTO, Chief Compliance Officer
   - Brief authorized signatory on:
     - Declaration content and implications
     - Legal obligations under EU AI Act
     - Liability and enforcement consequences
     - Ongoing obligations (updates, post-market monitoring)
   - Authorized signatory reviews and approves

6. **Execute Declaration**
   - Authorized signatory signs Declaration
   - Signature options:
     - **Original handwritten signature** on paper document
     - **Qualified electronic signature** per eIDAS Regulation (EU) No 910/2014
   - Record:
     - Place of signature (city, country)
     - Date of signature (DD/MM/YYYY format)
     - Name of signatory (printed)
     - Function/title of signatory
   - Create signed original

7. **Manage Translations**
   - If multiple languages required:
     - Prepare accurate translations
     - Professional translation recommended for legal text
     - Note on each translation: "Original version: [language]"
     - Provider responsible for accuracy of translations
     - Original language version prevails in case of discrepancy
   - Document translation approval

8. **Archive Declaration**
   - Archive signed Declaration (original)
   - Archive translations (if any)
   - Retention period: **10 years** from date AI system placed on market
   - Make Declaration available to:
     - National competent authorities (upon request)
     - Notified body (if applicable)
     - Deployers (upon request)
   - Include Declaration in technical documentation package

**Evidence Required:**
- Completed EU Declaration of Conformity per Annex V (DOC-CA-007)
- Legal Review Approval (REC-CA-010)
- Management Authorization (REC-CA-011)
- Signed Declaration (original with signature)
- Translations (if applicable)
- Archival confirmation (10-year retention capability)

**Timing:** 1-2 weeks

**Quality Check:**
- ✅ All Annex V required fields completed
- ✅ Information accurate and consistent with technical documentation
- ✅ Legal review conducted and approved
- ✅ Authorized signatory identified and briefed
- ✅ Declaration signed by authorized person
- ✅ Archived with 10-year retention capability
- ✅ Translations accurate (if applicable)

---

#### Step 6.2: Issue Declaration and Notify Stakeholders (Control CA-006)

**When:** Immediately after Declaration signed

**Who:** Conformity Assessment Manager

**How:**

1. **Assign Declaration Number**
   - Create unique Declaration identifier
   - Format: DOC-[Provider]-[Year]-[Sequential Number]
   - Example: DOC-ACME-2025-001
   - Record in Declaration register

2. **Update Technical Documentation**
   - Add signed Declaration to technical documentation package
   - Update Annex IV Section 6 with Declaration reference
   - Ensure version control updated

3. **Notify Internal Stakeholders**
   - Inform:
     - AI Governance Committee (conformity achieved)
     - Product Management (ready for market placement decision)
     - Marketing (CE marking can be applied)
     - Sales (system can be offered to customers)
     - Operations (system can be deployed)
   - Provide copy of Declaration
   - Brief on ongoing obligations

4. **Notify Notified Body (if applicable)**
   - Inform notified body that Declaration issued
   - Provide copy of Declaration
   - Confirm certificate numbers correctly referenced

5. **Prepare Deployer Information Package**
   - Create package for deployers containing:
     - EU Declaration of Conformity (copy)
     - Instructions for use (Article 13)
     - Information for deployers (Annex IV)
     - CE marking confirmation
   - Make available to customers and deployers

6. **Register Declaration**
   - Maintain Declaration Register (internal)
   - Record:
     - Declaration number
     - AI system identification
     - Issue date
     - Authorized signatory
     - Notified body (if applicable)
     - Languages available
     - Location of original
   - Update register for any Declaration updates

**Evidence Required:**
- Declaration Number Assignment (REC-CA-012)
- Updated Technical Documentation Package
- Internal Stakeholder Notification (email/meeting minutes)
- Notified Body Notification (if applicable)
- Deployer Information Package (DOC-CA-008)
- Declaration Register (REC-CA-013)

**Timing:** 1 week

---

### PHASE 7: CE MARKING

#### Step 7.1: Determine CE Marking Requirements (Control CA-007)

**When:** After Declaration of Conformity issued

**Who:** Conformity Assessment Manager + Product Management

**Regulatory Basis:** Article 48 (CE marking)

**How:**

1. **Verify CE Marking Eligibility**
   - Confirm AI system complies with EU AI Act
   - Confirm EU Declaration of Conformity issued
   - Confirm conformity assessment complete
   - Eligibility established → proceed to CE marking

2. **Determine CE Marking Format**

   **Article 48(2) - CE Marking Principles:**
   - CE marking must be:
     - **Visible:** Easily seen by users and authorities
     - **Legible:** Clear and readable
     - **Indelible:** Permanent, not easily removed or altered

   **If notified body involved (Annex VII):**
   - CE marking includes notified body identification number
   - Format: "CE [notified body number]"
   - Example: "CE 0123"

   **If internal control only (Annex VI):**
   - CE marking alone (no number)
   - Format: "CE"

3. **Determine CE Marking Placement**

   **For AI systems with physical product:**
   - Affix CE marking to:
     - The product itself (preferred), OR
     - Product packaging, OR
     - Accompanying documents (if physical marking not possible)

   **For AI systems without physical product (Article 48(4)):**
   - Digital CE marking options:
     - Digital interface of AI system (displayed to users)
     - Accompanying documentation (digital or paper)
     - Provider website (product page)
   - Must be accessible by deployers and national authorities

4. **Design CE Marking**
   - Use official CE marking logo per Regulation (EC) No 765/2008
   - Minimum height: 5mm (physical marking)
   - If reduced or enlarged: maintain proportions
   - Download official CE marking graphics from EU Commission website
   - If notified body number: Place immediately after CE marking in same font/size

5. **Check for Other Markings**
   - Identify if other EU regulations apply (e.g., Machinery Directive, Medical Devices)
   - If multiple CE markings required: Ensure consistency
   - Ensure other markings do not:
     - Reduce visibility/legibility of CE marking
     - Create confusion with CE marking meaning

6. **Document CE Marking Plan**
   - Complete CE Marking Application Plan (DOC-CA-009)
   - Includes:
     - CE marking format (with or without notified body number)
     - CE marking placement (where and how)
     - CE marking design specifications
     - Implementation timeline
     - Responsible parties
   - Use template: CE Marking Plan Template (TMP-CA-004)

**Evidence Required:**
- CE Marking Eligibility Verification (checklist)
- CE Marking Application Plan (DOC-CA-009)
- CE Marking Design Specification (graphics and placement)

**Timing:** 1 week

---

#### Step 7.2: Apply CE Marking (Control CA-007)

**When:** After CE marking requirements determined

**Who:** Product Management + Operations

**How:**

1. **Prepare CE Marking Materials**

   **For physical products:**
   - Create CE marking label, sticker, or engraving
   - Ensure durability (indelible requirement)
   - Verify size and legibility
   - Test adhesion / permanence

   **For digital products:**
   - Create digital CE marking graphic
   - Ensure proper resolution and clarity
   - Integrate into digital interface or documentation

2. **Apply CE Marking to Products**

   **Physical marking:**
   - Affix CE marking to product, packaging, or documentation
   - Verify marking is visible, legible, indelible
   - Quality check: Inspect sample products

   **Digital marking:**
   - Integrate CE marking into:
     - Software interface (splash screen, about page, settings)
     - Digital documentation (user manual, online help)
     - Provider website (product page)
   - Verify marking is accessible and clear
   - Test across devices and browsers (if digital interface)

3. **Update Product Documentation**
   - Include CE marking in:
     - User manuals and instructions for use
     - Product specification sheets
     - Marketing materials (if appropriate)
     - Product packaging and labels
   - Ensure consistency across all materials

4. **Document CE Marking Application**
   - Record:
     - Date CE marking applied
     - Products/versions to which CE marking applies
     - CE marking format and placement
     - Responsible person who applied marking
   - Photograph or screenshot of CE marking (evidence)
   - Update product records

5. **Notify Stakeholders**
   - Inform:
     - Sales and Marketing (CE marking applied, can promote)
     - Operations (deploy with CE marking)
     - Customer Support (answer customer questions about CE marking)
   - Provide CE marking explanation for customer-facing teams

6. **Market Placement Authorization**
   - With CE marking applied, AI system can be placed on EU market
   - Obtain final authorization from:
     - Chief Compliance Officer (regulatory clearance)
     - Product Management (market placement decision)
     - AI Governance Committee (governance approval)
   - Document market placement authorization

**Evidence Required:**
- CE Marking Materials (labels, graphics, specifications)
- CE Marking Application Evidence (photos/screenshots)
- Updated Product Documentation with CE marking
- CE Marking Application Record (REC-CA-014)
- Market Placement Authorization (REC-CA-015)

**Timing:** 2-3 weeks (depends on product update cycles)

**Quality Check:**
- ✅ CE marking visible, legible, indelible
- ✅ CE marking includes notified body number (if Annex VII)
- ✅ CE marking applied to all products/versions in scope
- ✅ Product documentation updated consistently
- ✅ Market placement authorized

---

### PHASE 8: POST-MARKET CONFORMITY MAINTENANCE

#### Step 8.1: Maintain Conformity Documentation (Control CA-008, CA-012)

**When:** Ongoing after market placement

**Who:** Conformity Assessment Manager + Technical Documentation Lead

**Regulatory Basis:** Article 47(2) (Declaration updates); Article 11 (technical documentation maintenance)

**How:**

1. **Establish Documentation Retention System**
   - Implement secure document management system
   - Retention period: **10 years** from date AI system placed on market
   - Document types to retain:
     - Technical documentation (Annex IV)
     - EU Declaration of Conformity (Annex V)
     - QMS documentation (Annex IX)
     - Conformity assessment records
     - Testing evidence
     - Notified body certificates (if applicable)
     - All communications with notified body and authorities
   - Access controls:
     - Available to national competent authorities upon request
     - Available to notified body (if applicable)
     - Available to authorized internal personnel
   - Backup and disaster recovery procedures

2. **Monitor for Update Triggers**

   **Declaration and documentation must be updated when:**

   | Update Trigger | Description | Action Required |
   |----------------|-------------|-----------------|
   | **Substantial Modification** | Changes to AI system that affect compliance | Re-assessment + Declaration update |
   | **Intended Purpose Change** | Expansion or modification of intended use | Risk assessment + Declaration update |
   | **Harmonized Standards Update** | New/updated harmonized standards published | Review applicability + Declaration update |
   | **Common Specifications Update** | New/updated common specifications | Review applicability + Declaration update |
   | **QMS Changes** | Significant QMS process changes | QMS re-assessment (if Annex VII) |
   | **Non-Conformity Detected** | Conformity issue identified post-market | Corrective action + Declaration update |
   | **Regulatory Change** | EU AI Act requirements amended | Compliance review + updates as needed |

3. **Conduct Periodic Documentation Reviews**
   - Frequency: **Annually** minimum; quarterly recommended
   - Review:
     - Documentation accuracy and currency
     - Any changes to AI system since last review
     - Any changes to regulatory requirements
     - Any non-conformities or incidents
     - Harmonized standards updates
   - Document review in Conformity Documentation Review Report (RPT-CA-014)
   - Update documentation as needed

4. **Update Declaration and Technical Documentation**
   - When updates required:
     - Revise technical documentation (maintain version control)
     - Update EU Declaration of Conformity (new version with date)
     - Obtain new management signature on Declaration
     - Notify notified body (if Annex VII and significant change)
     - Update CE marking if needed (e.g., new notified body)
     - Communicate updates to deployers
   - Archive previous versions (maintain audit trail)

5. **Maintain Notified Body Relationship (if Annex VII)**
   - Ongoing communication with notified body
   - Notify notified body of:
     - Substantial modifications
     - QMS changes
     - Non-conformities detected
     - Serious incidents
   - Cooperate with surveillance audits
   - Renew QMS certificate before expiration (5-year validity)

**Evidence Required:**
- Document Retention System configuration
- Conformity Documentation Review Reports (RPT-CA-014) - annual
- Declaration and Documentation Updates (version-controlled)
- Notified Body Communications (if applicable)

**Timing:** Ongoing (annual reviews minimum)

---

#### Step 8.2: Manage Re-Assessment Triggers (Control CA-009)

**When:** When substantial modification or other re-assessment trigger occurs

**Who:** Conformity Assessment Manager + AI System Owner

**Regulatory Basis:** Article 43 (conformity assessment); Article 47 (Declaration updates)

**How:**

1. **Define Substantial Modification**

   Per EU AI Act, a **substantial modification** is a change that affects:
   - AI system's compliance with requirements
   - AI system's intended purpose
   - AI system's level of risk

   **Examples of substantial modifications:**
   - Change in intended purpose (e.g., from low-risk to high-risk use case)
   - Significant architecture change (e.g., new model, new algorithms)
   - Training data change affecting performance or bias
   - Integration with new systems or data sources
   - Output format or decision logic change
   - Human oversight process change
   - Security or robustness degradation

   **Examples of non-substantial modifications (updates only):**
   - Bug fixes that don't affect core functionality
   - Performance optimization without changing outputs
   - UI/UX improvements without affecting AI logic
   - Documentation corrections
   - Minor configuration changes

2. **Establish Change Assessment Process**
   - For any proposed change to AI system:
     - Complete Change Impact Assessment Form (FORM-CA-004)
     - Assess whether change is substantial or non-substantial
     - Criteria:
       - Does change affect compliance with EU AI Act requirements?
       - Does change affect intended purpose?
       - Does change affect risk level?
       - Does change affect QMS processes?
     - If any answer YES → Substantial modification
   - Change review by Conformity Assessment Manager + AI Governance Committee

3. **Substantial Modification Process**

   **If substantial modification identified:**

   ```
   STEP 1: Suspend Market Placement (if new systems)
   - Do not place new/modified systems on market until re-assessed
   - Existing deployed systems can continue (unless safety issue)

   STEP 2: Conduct Re-Assessment
   - Determine re-assessment scope:
     - Full re-assessment (if major changes)
     - Partial re-assessment (if localized changes)
   - Follow conformity assessment procedure (this document)
   - Pathways:
     - Annex VII: Notify notified body; conduct assessment of changes
     - Annex VI: Internal re-assessment

   STEP 3: Update Technical Documentation
   - Revise Annex IV documentation for changes
   - Document change rationale and impact assessment
   - Update testing evidence (re-test affected areas)
   - Maintain version control

   STEP 4: Update EU Declaration of Conformity
   - Revise Declaration with new information
   - Update date and version
   - Obtain new management signature
   - Archive previous version

   STEP 5: Update CE Marking (if needed)
   - If notified body changes: Update CE marking with new NB number
   - If moving Annex VI to VII: Add NB number

   STEP 6: Notify Stakeholders
   - Notify notified body (if Annex VII)
   - Notify deployers of changes
   - Update market placement authorization

   STEP 7: Resume Market Placement
   - After re-assessment complete and approved
   - Document re-assessment completion
   ```

4. **Non-Substantial Modification Process**

   **If non-substantial modification (update only):**
   - Update technical documentation (version control)
   - Update internal records
   - No re-assessment required
   - No Declaration update required
   - Notify deployers if change affects operation
   - Document change in change log

5. **Monitor EU AI Act Updates**
   - Subscribe to EU Commission notifications
   - Monitor harmonized standards publications
   - Monitor common specifications
   - When regulatory changes occur:
     - Assess impact on AI system conformity
     - Conduct gap analysis
     - Implement necessary updates
     - Update Declaration and documentation

**Evidence Required:**
- Change Impact Assessment Forms (FORM-CA-004)
- Re-Assessment Records (when substantial modification)
- Updated Technical Documentation (version-controlled)
- Updated EU Declaration of Conformity (when substantial modification)
- Stakeholder Notifications
- Change Log (all modifications tracked)

**Timing:** Ongoing (as changes occur)

---

#### Step 8.3: Handle Post-Market Non-Conformities (Control CA-010)

**When:** When non-conformity detected after market placement

**Who:** Conformity Assessment Manager + AI System Owner + Chief Compliance Officer

**Regulatory Basis:** Article 21 (corrective actions); Article 73 (serious incident reporting)

**How:**

1. **Detect Non-Conformity**

   **Sources of non-conformity detection:**
   - Post-market monitoring (per PROC-AI-PMM-001)
   - Customer complaints
   - Deployer reports
   - Internal audit findings
   - Market surveillance authority inspection
   - Notified body surveillance audit (if Annex VII)
   - Serious incident investigation (per PROC-AI-INC-001)

2. **Classify Non-Conformity Severity**

   | Severity | Definition | Examples | Response Time |
   |----------|------------|----------|---------------|
   | **Critical** | Non-conformity that poses immediate risk to health, safety, or fundamental rights | Safety failure; serious incident; prohibited practice | **Immediate** (< 24 hours) |
   | **High** | Significant non-compliance with EU AI Act requirements | Major requirement not met; Declaration error | **< 7 days** |
   | **Medium** | Moderate non-compliance; does not pose immediate risk | Documentation gap; minor requirement issue | **< 30 days** |
   | **Low** | Minor non-compliance; no impact on safety or compliance | Cosmetic documentation issue | **< 90 days** |

3. **Initiate Non-Conformity Response**

   **Immediate actions (Critical severity):**
   - Escalate to Chief Compliance Officer immediately
   - Assess need for market withdrawal or recall
   - Notify notified body (if Annex VII) within 24 hours
   - Notify national competent authorities if serious incident
   - Implement temporary risk mitigation measures
   - Document all actions

4. **Conduct Root Cause Analysis**
   - Investigate root cause of non-conformity
   - Methods: 5 Whys, Fishbone Diagram, Failure Mode Analysis
   - Document:
     - What happened (non-conformity description)
     - How it was detected
     - Why it occurred (root cause)
     - When it started
     - What is affected (scope and impact)
   - Use Root Cause Analysis Form (FORM-CA-005)

5. **Develop Corrective Action Plan**
   - For each non-conformity:
     - **Immediate containment:** Stop the issue from spreading
     - **Corrective action:** Fix the root cause
     - **Preventive action:** Prevent recurrence
   - Corrective action plan includes:
     - Specific actions to be taken
     - Responsible person and owner
     - Target completion date
     - Resources required
     - Verification method
   - Obtain approval from Chief Compliance Officer (High/Critical) or CA Manager (Medium/Low)

6. **Implement Corrective Actions**
   - Execute corrective action plan
   - Document implementation progress
   - Collect evidence of corrective action completion
   - Verify effectiveness of corrective action

7. **Update Conformity Documentation**
   - Update technical documentation to reflect corrective actions
   - Update risk management documentation
   - Update QMS procedures (if process failure)
   - Consider if EU Declaration of Conformity update needed
   - Document lessons learned

8. **Notify and Close Non-Conformity**
   - Notify notified body of corrective actions and closure (if Annex VII)
   - Notify market surveillance authorities if they opened the non-conformity
   - Update non-conformity tracking register
   - Close non-conformity with documented evidence of resolution
   - Obtain sign-off from Chief Compliance Officer

9. **Conduct Post-Closure Review**
   - After 3-6 months, verify non-conformity has not recurred
   - Review effectiveness of corrective actions
   - Identify systemic improvements to prevent similar issues
   - Update conformity assessment procedures if needed

**Evidence Required:**
- Non-Conformity Report (RPT-CA-015)
- Root Cause Analysis (FORM-CA-005)
- Corrective Action Plan (DOC-CA-010)
- Corrective Action Implementation Evidence
- Updated Technical Documentation
- Non-Conformity Closure Report (RPT-CA-016)
- Stakeholder Notifications (notified body, authorities)

**Timing:** Per severity (Immediate to 90 days)

**Quality Check:**
- ✅ Non-conformity severity correctly classified
- ✅ Root cause identified (not just symptoms)
- ✅ Corrective actions address root cause
- ✅ Notified body and authorities notified (if required)
- ✅ Technical documentation updated
- ✅ Non-conformity formally closed with evidence

---

#### Step 8.4: Conduct Post-Market Conformity Monitoring (Control CA-013)

**When:** Ongoing after market placement

**Who:** Conformity Assessment Manager + Post-Market Monitoring Lead

**Regulatory Basis:** Article 72 (post-market monitoring); Article 21 (corrective actions)

**How:**

1. **Establish Conformity Monitoring Process**
   - Integrate with post-market monitoring system (PROC-AI-PMM-001)
   - Specific conformity monitoring activities:
     - Monitor AI system performance vs. technical documentation specifications
     - Monitor for deviations from intended purpose
     - Monitor for compliance drift (system changes affecting conformity)
     - Monitor customer complaints related to conformity
     - Monitor regulatory landscape for changes
     - Monitor harmonized standards updates

2. **Define Conformity Monitoring Metrics**

   | Metric | Target | Frequency | Action if Threshold Breached |
   |--------|--------|-----------|------------------------------|
   | AI system performance vs. spec | Within 5% of documented performance | Monthly | Investigate cause; update documentation or improve system |
   | Customer conformity complaints | < 2 per quarter | Monthly | Root cause analysis; corrective action |
   | Non-conformities identified | 0 High/Critical per quarter | Monthly | Immediate corrective action |
   | Declaration accuracy | 100% accurate | Annual review | Update Declaration |
   | QMS effectiveness | No major findings | Annual audit | QMS improvement actions |

3. **Conduct Conformity Reviews**
   - **Monthly:** Review conformity monitoring metrics
   - **Quarterly:** Conformity status report to AI Governance Committee
   - **Annually:** Comprehensive conformity review and documentation update
   - Document reviews and findings

4. **Coordinate with Notified Body Surveillance (if Annex VII)**
   - Notified body conducts surveillance audits (typically annual)
   - Prepare for surveillance:
     - Update QMS documentation
     - Prepare evidence of ongoing conformity
     - Address any non-conformities from previous audit
     - Make technical documentation available
   - Participate in surveillance audit
   - Address surveillance findings
   - Maintain surveillance audit records

5. **Report Conformity Status**
   - Regular reporting to:
     - AI Governance Committee (quarterly)
     - Chief Compliance Officer (monthly)
     - Executive management (annually)
   - Report contents:
     - Conformity status (compliant / issues identified)
     - Conformity monitoring metrics
     - Non-conformities and corrective actions
     - Surveillance audit results (if Annex VII)
     - Regulatory updates impacting conformity
     - Recommendations for improvement

**Evidence Required:**
- Conformity Monitoring Metrics Dashboard
- Monthly Conformity Monitoring Reports (RPT-CA-017)
- Quarterly Conformity Status Reports to AI Governance (RPT-CA-018)
- Annual Conformity Review Report (RPT-CA-019)
- Notified Body Surveillance Audit Reports (if Annex VII)

**Timing:** Ongoing (monthly/quarterly/annual reviews)

---

## 6. CONTROL MECHANISMS

This section details the specific controls that ensure conformity assessment is conducted effectively and in compliance with EU AI Act requirements.

### 6.1 Control Summary Table

| Control ID | Control Name | Type | Criticality | Owner | Frequency |
|------------|--------------|------|-------------|-------|-----------|
| **CA-001** | Assessment Planning | Preventive | Critical | CA Manager | Per assessment |
| **CA-002** | Notified Body Selection | Preventive | High | CA Manager | Per assessment (Annex VII only) |
| **CA-003** | Technical Documentation Review | Detective | Critical | Tech Doc Lead | Per assessment + annual |
| **CA-004** | QMS Assessment | Detective | High | QMS Lead | Per assessment + annual |
| **CA-005** | Testing and Validation | Detective | Critical | Test Lead | Per assessment + after changes |
| **CA-006** | Declaration of Conformity | Preventive | Critical | CCO | Per assessment + updates |
| **CA-007** | CE Marking Application | Preventive | High | Product Mgmt | Per product version |
| **CA-008** | Conformity Maintenance | Preventive | High | CA Manager | Ongoing |
| **CA-009** | Re-Assessment Triggers | Detective | High | CA Manager | Per change |
| **CA-010** | Non-Conformity Handling | Corrective | Critical | CCO | Per incident |
| **CA-011** | Notified Body Communication | Preventive | Medium | CA Manager | Ongoing (Annex VII only) |
| **CA-012** | Assessment Documentation | Preventive | High | CA Manager | Ongoing |
| **CA-013** | Post-Assessment Monitoring | Detective | Medium | PMM Lead | Monthly |

### 6.2 Detailed Control Descriptions

#### CA-001: Assessment Planning (Preventive, Critical)

**Control Objective:** Ensure conformity assessment is properly planned and resourced before execution.

**Control Activities:**
1. Determine conformity assessment pathway (Annex VI or VII) with documented rationale
2. Create comprehensive assessment plan with timeline, resources, and responsibilities
3. Conduct gap analysis identifying conformity readiness gaps
4. Obtain AI Governance Committee approval for assessment plan and budget
5. Establish assessment governance structure and communication protocols

**Control Owner:** Conformity Assessment Manager

**Control Frequency:** Per conformity assessment (initial + substantial modifications)

**Testing Method:**
- Review assessment plan for completeness
- Verify pathway selection documented with rationale
- Verify AI Governance Committee approval documented
- Check gap analysis conducted and action plan defined

**Evidence:**
- Conformity Assessment Plan (FORM-CA-002)
- Pathway Selection Form (FORM-CA-001)
- Gap Analysis Report (RPT-CA-002)
- AI Governance Committee approval minutes

---

#### CA-002: Notified Body Selection (Preventive, High)

**Control Objective:** Ensure qualified and accredited notified body selected for third-party assessment (Annex VII).

**Control Activities:**
1. Verify notified body accreditation in EU NANDO database for EU AI Act scope
2. Evaluate minimum 3 candidate notified bodies using selection criteria scoring
3. Conduct due diligence including reference checks and accreditation verification
4. Obtain Chief Compliance Officer approval for notified body selection
5. Execute formal contract with selected notified body reviewed by Legal Counsel

**Control Owner:** Conformity Assessment Manager

**Control Frequency:** Per Annex VII assessment

**Testing Method:**
- Verify NANDO database accreditation check documented
- Review notified body selection scoring matrix
- Verify reference checks conducted
- Verify CCO and Legal Counsel approvals obtained

**Evidence:**
- Notified Body Candidate List (RPT-CA-003)
- Selection Criteria Scoring Matrix (FORM-CA-003)
- Due Diligence Report (RPT-CA-004)
- Notified Body Contract (signed)

---

#### CA-003: Technical Documentation Review (Detective, Critical)

**Control Objective:** Ensure technical documentation per Annex IV is complete, accurate, and demonstrates conformity.

**Control Activities:**
1. Complete all Annex IV required sections with supporting evidence
2. Conduct internal technical documentation review using Annex IV checklist
3. Address all critical and high documentation gaps before submission
4. Obtain Technical Documentation Lead and Chief Compliance Officer sign-off
5. For Annex VII: Submit to notified body and address all findings before approval

**Control Owner:** Technical Documentation Lead

**Control Frequency:** Per conformity assessment + annual updates

**Testing Method:**
- Audit technical documentation package against Annex IV checklist
- Verify internal review conducted with documented findings
- Verify all critical/high gaps addressed
- Verify sign-offs obtained
- For Annex VII: Verify notified body approval obtained

**Evidence:**
- Technical Documentation Package (per Annex IV structure)
- Annex IV Compliance Checklist (CHK-CA-001) - 100% complete
- Internal Technical Review Report (RPT-CA-006)
- Technical Documentation Approval signatures
- Notified Body Technical Documentation Approval (if Annex VII)

---

#### CA-004: QMS Assessment (Detective, High)

**Control Objective:** Ensure Quality Management System per Annex IX is established, documented, and operational.

**Control Activities:**
1. Complete all Annex IX required QMS elements with documented procedures
2. Conduct internal QMS audit before external assessment
3. Close all major non-conformities identified in internal audit
4. For Annex VII: Participate in notified body QMS audit and address all findings
5. For Annex VI: Conduct management review and approve QMS for self-assessment

**Control Owner:** QMS Lead

**Control Frequency:** Per conformity assessment + annual audits

**Testing Method:**
- Audit QMS documentation against Annex IX checklist
- Review internal audit report and verify major NCs closed
- For Annex VII: Verify notified body QMS certificate obtained
- For Annex VI: Verify management review conducted and QMS approved

**Evidence:**
- QMS Documentation Package (per Annex IX structure)
- Annex IX Compliance Checklist (CHK-CA-002) - ≥90% implemented
- Internal QMS Audit Report (RPT-CA-007)
- QMS Certificate (if Annex VII) or Management Approval (if Annex VI)

---

#### CA-005: Testing and Validation (Detective, Critical)

**Control Objective:** Ensure AI system tested and validated to demonstrate conformity with EU AI Act requirements.

**Control Activities:**
1. Develop comprehensive testing plan covering all EU AI Act requirements (Articles 9, 10, 14, 15)
2. Execute all planned test cases and document results with evidence
3. Achieve minimum 95% test pass rate or document justification for failures
4. Conduct fairness, security, robustness, and human oversight testing
5. For Annex VII: Notified body reviews and approves testing evidence

**Control Owner:** Testing and Validation Lead

**Control Frequency:** Per conformity assessment + after substantial modifications

**Testing Method:**
- Review testing plan for completeness
- Audit test execution records and verify all test cases executed
- Verify test pass rate ≥95% or justification documented
- Review fairness, security, robustness, human oversight test reports
- For Annex VII: Verify notified body testing approval

**Evidence:**
- Conformity Testing Plan (DOC-CA-005)
- Test Execution Records (TMP-CA-003) - all test cases
- Test Results Summary Report (RPT-CA-009) - pass rate ≥95%
- Bias/Fairness, Security, Robustness, Human Oversight Testing Reports
- Notified Body Testing Approval (if Annex VII)

---

#### CA-006: Declaration of Conformity (Preventive, Critical)

**Control Objective:** Ensure EU Declaration of Conformity per Annex V is accurate, complete, and legally binding.

**Control Activities:**
1. Complete Declaration per Annex V template with all mandatory fields
2. Verify Declaration information consistent with technical documentation
3. Conduct Legal Counsel review and obtain approval
4. Obtain authorized signatory signature (senior management/executive)
5. Archive signed Declaration with 10-year retention capability

**Control Owner:** Chief Compliance Officer

**Control Frequency:** Per conformity assessment + updates when triggered

**Testing Method:**
- Review Declaration against Annex V requirements checklist
- Verify consistency with technical documentation (sample check)
- Verify Legal Counsel review and approval documented
- Verify authorized signatory signature present
- Verify 10-year retention capability confirmed

**Evidence:**
- EU Declaration of Conformity (DOC-CA-007) per Annex V - signed original
- Legal Review Approval (REC-CA-010)
- Management Authorization (REC-CA-011)
- Archival confirmation (10-year retention capability)

---

#### CA-007: CE Marking Application (Preventive, High)

**Control Objective:** Ensure CE marking correctly applied per Article 48 requirements.

**Control Activities:**
1. Verify CE marking eligibility (conformity assessment complete, Declaration issued)
2. Determine correct CE marking format (with or without notified body number)
3. Apply CE marking that is visible, legible, and indelible
4. For digital AI systems: Ensure CE marking accessible in digital interface/documentation
5. Verify CE marking applied to all products/versions in scope before market placement

**Control Owner:** Product Management

**Control Frequency:** Per product version / substantial modification

**Testing Method:**
- Verify conformity assessment complete and Declaration issued before CE marking
- Inspect sample products for CE marking presence, visibility, legibility
- For Annex VII: Verify notified body number present on CE marking
- For digital systems: Verify CE marking accessible in interface/documentation
- Verify market placement authorization obtained

**Evidence:**
- CE Marking Application Plan (DOC-CA-009)
- CE Marking Application Evidence (photos/screenshots)
- Market Placement Authorization (REC-CA-015)

---

#### CA-008: Conformity Maintenance (Preventive, High)

**Control Objective:** Ensure conformity documentation maintained and updated to reflect AI system changes and regulatory updates.

**Control Activities:**
1. Maintain all conformity documentation (technical docs, Declaration, QMS, certificates) with 10-year retention
2. Conduct annual conformity documentation review and update as needed
3. Update Declaration and technical documentation when triggers occur (substantial modifications, harmonized standards updates, etc.)
4. For Annex VII: Maintain notified body relationship and cooperate with surveillance audits
5. Communicate documentation updates to deployers and authorities as required

**Control Owner:** Conformity Assessment Manager

**Control Frequency:** Annual reviews minimum; updates as triggered

**Testing Method:**
- Verify document retention system operational with 10-year capability
- Review annual conformity documentation review reports
- Verify documentation updated when triggers occurred (sample check)
- For Annex VII: Verify surveillance audit participation and findings addressed
- Verify stakeholder notifications sent when updates made

**Evidence:**
- Document Retention System configuration
- Annual Conformity Documentation Review Reports (RPT-CA-014)
- Updated Documentation (version-controlled)
- Notified Body Surveillance Audit Reports (if Annex VII)
- Stakeholder Notifications

---

#### CA-009: Re-Assessment Triggers (Detective, High)

**Control Objective:** Ensure substantial modifications identified and trigger re-assessment per EU AI Act requirements.

**Control Activities:**
1. Define substantial modification criteria per EU AI Act
2. Conduct change impact assessment for all proposed AI system changes
3. Identify if change is substantial (requires re-assessment) or non-substantial (update only)
4. For substantial modifications: Suspend market placement and conduct re-assessment before releasing modified system
5. Update technical documentation and Declaration after re-assessment

**Control Owner:** Conformity Assessment Manager

**Control Frequency:** Per AI system change

**Testing Method:**
- Review change impact assessments for all changes (sample check)
- Verify substantial modifications correctly identified using defined criteria
- Verify re-assessment conducted before modified system placed on market
- Verify technical documentation and Declaration updated after re-assessment
- Verify non-substantial modifications documented in change log

**Evidence:**
- Change Impact Assessment Forms (FORM-CA-004) - all changes
- Re-Assessment Records (for substantial modifications)
- Updated Technical Documentation and Declaration (version-controlled)
- Change Log (all modifications tracked)

---

#### CA-010: Non-Conformity Handling (Corrective, Critical)

**Control Objective:** Ensure post-market non-conformities identified, investigated, and corrected promptly.

**Control Activities:**
1. Classify non-conformity severity (Critical / High / Medium / Low)
2. For Critical severity: Escalate to CCO immediately (<24 hours) and notify notified body/authorities
3. Conduct root cause analysis to identify why non-conformity occurred
4. Develop and implement corrective action plan addressing root cause
5. Update conformity documentation and verify corrective action effectiveness before closure

**Control Owner:** Chief Compliance Officer

**Control Frequency:** Per non-conformity occurrence

**Testing Method:**
- Review non-conformity reports and verify severity correctly classified
- Verify Critical severity non-conformities escalated within 24 hours
- Audit root cause analysis quality (addresses root cause, not symptoms)
- Verify corrective action plan addresses root cause
- Verify conformity documentation updated and effectiveness verified before closure

**Evidence:**
- Non-Conformity Reports (RPT-CA-015) - all non-conformities
- Root Cause Analysis (FORM-CA-005)
- Corrective Action Plans (DOC-CA-010)
- Non-Conformity Closure Reports (RPT-CA-016) - with effectiveness evidence
- Stakeholder Notifications (notified body, authorities)

---

#### CA-011: Notified Body Communication (Preventive, Medium)

**Control Objective:** Ensure effective communication and coordination with notified body throughout assessment and surveillance (Annex VII only).

**Control Activities:**
1. Establish communication protocol with notified body (primary contacts, meeting cadence, escalation)
2. Conduct weekly status calls during active assessment
3. Respond to notified body information requests within defined timelines (Critical: 5 days; Standard: 10 days)
4. Notify notified body of substantial modifications, non-conformities, and serious incidents
5. Document all communications with notified body (email archive, meeting minutes)

**Control Owner:** Conformity Assessment Manager

**Control Frequency:** Ongoing during Annex VII assessment and surveillance

**Testing Method:**
- Review communication protocol documented and shared with notified body
- Verify weekly status calls conducted during active assessment (sample check)
- Review information request response timelines (sample check)
- Verify notified body notified of substantial modifications, non-conformities, incidents (sample check)
- Verify communications archived

**Evidence:**
- Communication Protocol with Notified Body (DOC-CA-004)
- Meeting Minutes (REC-CA-002 and subsequent)
- Information Request Responses (REC-CA-003) - with timestamps
- Notified Body Notifications (email archive)

---

#### CA-012: Assessment Documentation (Preventive, High)

**Control Objective:** Ensure comprehensive conformity assessment records maintained for audit and market surveillance.

**Control Activities:**
1. Maintain centralized conformity assessment record repository
2. Document all assessment activities (planning, execution, reviews, decisions, approvals)
3. Organize documentation per assessment phase with clear version control
4. Ensure documentation accessible to authorities, notified body, and authorized personnel
5. Retain all assessment documentation for 10 years per EU AI Act

**Control Owner:** Conformity Assessment Manager

**Control Frequency:** Ongoing throughout assessment and post-market

**Testing Method:**
- Audit conformity assessment record repository for completeness (sample check)
- Verify all required assessment documents present and organized
- Verify version control clear and correct
- Verify access controls configured (authorities, notified body, internal)
- Verify 10-year retention capability confirmed

**Evidence:**
- Conformity Assessment Record Repository (index/catalog)
- Assessment Documentation (organized by phase)
- Version Control Records
- Access Control Configuration
- Retention Policy Documentation (10-year capability)

---

#### CA-013: Post-Assessment Monitoring (Detective, Medium)

**Control Objective:** Ensure ongoing conformity monitored after market placement to detect conformity drift.

**Control Activities:**
1. Integrate conformity monitoring into post-market monitoring system
2. Monitor conformity metrics monthly (performance vs. spec, complaints, non-conformities)
3. Conduct quarterly conformity status reporting to AI Governance Committee
4. Conduct annual comprehensive conformity review and documentation update
5. For Annex VII: Participate in annual notified body surveillance audits

**Control Owner:** Post-Market Monitoring Lead

**Control Frequency:** Monthly monitoring; Quarterly reporting; Annual reviews

**Testing Method:**
- Review conformity monitoring metrics dashboard for currency
- Verify monthly conformity monitoring reports generated
- Verify quarterly conformity status reports to AI Governance Committee
- Verify annual conformity reviews conducted and documented
- For Annex VII: Verify surveillance audit participation and findings addressed

**Evidence:**
- Conformity Monitoring Metrics Dashboard
- Monthly Conformity Monitoring Reports (RPT-CA-017)
- Quarterly Conformity Status Reports (RPT-CA-018)
- Annual Conformity Review Reports (RPT-CA-019)
- Notified Body Surveillance Audit Reports (if Annex VII)

---

## 7. KEY PERFORMANCE INDICATORS

### 7.1 Conformity Assessment Efficiency KPIs

| KPI ID | KPI Name | Definition | Target | Frequency | Owner |
|--------|----------|------------|--------|-----------|-------|
| **KPI-CA-001** | Time to Conformity | Days from assessment initiation to CE marking authorization | Annex VI: ≤120 days<br>Annex VII: ≤240 days | Per assessment | CA Manager |
| **KPI-CA-002** | Assessment Budget Variance | % deviation from planned assessment budget | ±10% | Per assessment | CA Manager |
| **KPI-CA-003** | First-Time Assessment Pass Rate | % of assessments that pass without major findings | ≥80% | Annual | CA Manager |
| **KPI-CA-004** | Technical Documentation Completeness | % of Annex IV requirements complete at first submission | 100% | Per assessment | Tech Doc Lead |
| **KPI-CA-005** | QMS Readiness Score | % of Annex IX requirements implemented at first audit | ≥90% | Per assessment | QMS Lead |

### 7.2 Conformity Quality KPIs

| KPI ID | KPI Name | Definition | Target | Frequency | Owner |
|--------|----------|------------|--------|-----------|-------|
| **KPI-CA-006** | Testing Pass Rate | % of conformity test cases passed on first execution | ≥95% | Per assessment | Test Lead |
| **KPI-CA-007** | Non-Conformity Rate | Number of post-market non-conformities per AI system per year | ≤2 (Medium/Low)<br>0 (High/Critical) | Quarterly | CA Manager |
| **KPI-CA-008** | Non-Conformity Resolution Time | Average days to close non-conformities | Critical: ≤7 days<br>High: ≤30 days<br>Medium: ≤60 days | Monthly | CCO |
| **KPI-CA-009** | Declaration Accuracy Rate | % of Declarations accurate and up-to-date at annual review | 100% | Annual | CCO |
| **KPI-CA-010** | Substantial Modification Detection Rate | % of substantial modifications correctly identified before implementation | 100% | Quarterly | CA Manager |

### 7.3 Notified Body Performance KPIs (Annex VII Only)

| KPI ID | KPI Name | Definition | Target | Frequency | Owner |
|--------|----------|------------|--------|-----------|-------|
| **KPI-CA-011** | Notified Body Response Time | Average days for notified body to respond to information requests | ≤10 days | Per assessment | CA Manager |
| **KPI-CA-012** | Notified Body Finding Closure Rate | % of notified body findings closed within agreed timeline | ≥90% | Per assessment | CA Manager |
| **KPI-CA-013** | Surveillance Audit Findings | Number of major findings in annual surveillance audits | 0 | Annual | QMS Lead |
| **KPI-CA-014** | Notified Body Satisfaction | Provider satisfaction score with notified body performance (1-5 scale) | ≥4.0 | Annual | CA Manager |

### 7.4 Post-Market Conformity KPIs

| KPI ID | KPI Name | Definition | Target | Frequency | Owner |
|--------|----------|------------|--------|-----------|-------|
| **KPI-CA-015** | Conformity Documentation Currency | % of conformity documentation up-to-date at spot check | 100% | Quarterly | CA Manager |
| **KPI-CA-016** | Performance vs. Specification Variance | % deviation of actual AI system performance from technical documentation specification | ≤5% | Monthly | PMM Lead |
| **KPI-CA-017** | Re-Assessment Timeliness | % of substantial modifications that undergo re-assessment before market placement | 100% | Quarterly | CA Manager |
| **KPI-CA-018** | Deployer Conformity Complaints | Number of deployer complaints related to conformity issues per quarter | ≤1 | Quarterly | CA Manager |
| **KPI-CA-019** | Market Surveillance Inspections Passed | % of market surveillance authority inspections passed without enforcement action | 100% | Per inspection | CCO |

### 7.5 KPI Dashboard and Reporting

**Dashboard Requirements:**
- Real-time KPI dashboard accessible to CA Manager, CCO, AI Governance Committee
- Traffic light indicators: Green (target met), Yellow (approaching threshold), Red (target missed)
- Trend charts showing KPI performance over time
- Drill-down capability to underlying data

**Reporting Frequency:**
- **Monthly:** KPI Dashboard review by CA Manager
- **Quarterly:** KPI Report to AI Governance Committee
- **Annually:** Comprehensive KPI analysis and target setting for next year

**KPI Review and Target Adjustment:**
- Annual review of KPI definitions and targets
- Adjust targets based on:
  - Historical performance trends
  - Industry benchmarks
  - Regulatory expectations
  - Organizational maturity
- Obtain AI Governance Committee approval for target changes

---

## 8. DOCUMENTATION REQUIREMENTS

### 8.1 Mandatory Records

This procedure requires the following documentation to demonstrate conformity assessment compliance:

| Record ID | Record Name | Purpose | Retention | Owner |
|-----------|-------------|---------|-----------|-------|
| **FORM-CA-001** | Conformity Assessment Pathway Selection Form | Document pathway choice (Annex VI or VII) with rationale | 10 years | CA Manager |
| **FORM-CA-002** | Conformity Assessment Plan | Comprehensive assessment project plan | 10 years | CA Manager |
| **FORM-CA-003** | Notified Body Selection Criteria Scoring Matrix | Document notified body evaluation | 10 years | CA Manager |
| **FORM-CA-004** | Change Impact Assessment Form | Assess if change is substantial modification | 10 years | CA Manager |
| **FORM-CA-005** | Root Cause Analysis Form | Analyze non-conformity root causes | 10 years | CCO |
| **CHK-CA-001** | Annex IV Compliance Checklist | Verify technical documentation completeness | 10 years | Tech Doc Lead |
| **CHK-CA-002** | Annex IX Compliance Checklist | Verify QMS implementation completeness | 10 years | QMS Lead |
| **DOC-CA-001** | Assessment Governance Charter | Define governance structure for assessment | 10 years | CA Manager |
| **DOC-CA-002** | Communication Plan | Define stakeholder communication protocols | 10 years | CA Manager |
| **DOC-CA-003** | Notified Body Assessment Schedule | Joint schedule with notified body | 10 years | CA Manager |
| **DOC-CA-004** | Communication Protocol with Notified Body | Define notified body communication cadence | 10 years | CA Manager |
| **DOC-CA-005** | Conformity Testing Plan | Comprehensive testing plan | 10 years | Test Lead |
| **DOC-CA-006** | Test Case Library | Repository of all test cases | 10 years | Test Lead |
| **DOC-CA-007** | EU Declaration of Conformity | Official Declaration per Annex V | 10 years | CCO |
| **DOC-CA-008** | Deployer Information Package | Information provided to deployers | 10 years | CA Manager |
| **DOC-CA-009** | CE Marking Application Plan | Plan for CE marking application | 10 years | Product Mgmt |
| **DOC-CA-010** | Corrective Action Plan | Plan to address non-conformities | 10 years | CCO |
| **RPT-CA-001** | Conformity Assessment Readiness Report | Gap analysis and readiness assessment | 10 years | CA Manager |
| **RPT-CA-002** | Gap Analysis Report | Identified gaps vs. conformity requirements | 10 years | CA Manager |
| **RPT-CA-003** | Notified Body Candidate List | List of candidate notified bodies | 10 years | CA Manager |
| **RPT-CA-004** | Due Diligence Report | Notified body due diligence findings | 10 years | CA Manager |
| **RPT-CA-005** | Notified Body Selection Report | Final selection decision and rationale | 10 years | CA Manager |
| **RPT-CA-006** | Internal Technical Review Report | Internal review of technical documentation | 10 years | Tech Doc Lead |
| **RPT-CA-007** | Internal QMS Audit Report | Internal QMS audit findings | 10 years | QMS Lead |
| **RPT-CA-008** | Annex IX Compliance Statement (Annex VI) | Self-assessment statement for internal control | 10 years | QMS Lead |
| **RPT-CA-009** | Test Results Summary Report | Aggregated testing results | 10 years | Test Lead |
| **RPT-CA-010** | Statistical Analysis Report | Performance metrics and statistical analysis | 10 years | Test Lead |
| **RPT-CA-011** | Bias and Fairness Testing Report | Bias and discrimination assessment results | 10 years | Test Lead |
| **RPT-CA-012** | Security and Robustness Testing Report | Security and robustness testing results | 10 years | Test Lead |
| **RPT-CA-013** | Human Oversight Validation Report | Human oversight capability validation | 10 years | Test Lead |
| **RPT-CA-014** | Conformity Documentation Review Report | Annual documentation review findings | 10 years | CA Manager |
| **RPT-CA-015** | Non-Conformity Report | Detailed non-conformity description and analysis | 10 years | CCO |
| **RPT-CA-016** | Non-Conformity Closure Report | Non-conformity resolution evidence | 10 years | CCO |
| **RPT-CA-017** | Monthly Conformity Monitoring Report | Monthly conformity metrics and status | 10 years | PMM Lead |
| **RPT-CA-018** | Quarterly Conformity Status Report | Quarterly report to AI Governance Committee | 10 years | CA Manager |
| **RPT-CA-019** | Annual Conformity Review Report | Annual comprehensive conformity review | 10 years | CA Manager |
| **REC-CA-001** | Reference Check Records | Notified body reference check notes | 10 years | CA Manager |
| **REC-CA-002** | Kick-off Meeting Minutes (Notified Body) | Initial engagement meeting record | 10 years | CA Manager |
| **REC-CA-003** | Provider Responses to Information Requests | Responses to notified body questions | 10 years | CA Manager |
| **REC-CA-004** | Non-Conformity Resolution Evidence | Evidence of notified body finding resolution | 10 years | CA Manager |
| **REC-CA-005** | Internal Audit Findings and Corrective Actions | Internal QMS audit findings and resolutions | 10 years | QMS Lead |
| **REC-CA-006** | Management Review Meeting Minutes (QMS) | QMS management review record | 10 years | QMS Lead |
| **REC-CA-007** | Corrective Action Response (CAR) | Response to notified body QMS audit findings | 10 years | QMS Lead |
| **REC-CA-008** | Management Review and Approval (Annex VI) | Management approval for internal control | 10 years | QMS Lead |
| **REC-CA-009** | Failed Test Analysis and Resolution | Analysis and resolution of failed test cases | 10 years | Test Lead |
| **REC-CA-010** | Legal Review Approval (Declaration) | Legal counsel approval of Declaration | 10 years | Legal |
| **REC-CA-011** | Management Authorization (Declaration) | Management authorization to issue Declaration | 10 years | CCO |
| **REC-CA-012** | Declaration Number Assignment | Record of Declaration unique identifier | 10 years | CA Manager |
| **REC-CA-013** | Declaration Register | Registry of all Declarations issued | 10 years | CA Manager |
| **REC-CA-014** | CE Marking Application Record | Record of CE marking application | 10 years | Product Mgmt |
| **REC-CA-015** | Market Placement Authorization | Authorization to place AI system on market | 10 years | CCO |
| **TMP-CA-001** | Technical Documentation Package Template | Template for organizing Annex IV documentation | N/A (template) | Tech Doc Lead |
| **TMP-CA-002** | Conformity Testing Plan Template | Template for testing plan | N/A (template) | Test Lead |
| **TMP-CA-003** | Test Execution Record Template | Template for documenting test execution | N/A (template) | Test Lead |
| **TMP-CA-004** | CE Marking Plan Template | Template for CE marking plan | N/A (template) | Product Mgmt |

### 8.2 Document Control Requirements

**Version Control:**
- All documents must have clear version numbers (Major.Minor format, e.g., 1.0, 1.1, 2.0)
- Major version change: Significant content changes, structural changes
- Minor version change: Corrections, clarifications, minor updates
- Version history table in each document showing changes

**Document Approval:**
- Documents requiring approval must have signature/approval section
- Electronic approvals acceptable (email with clear approval statement)
- Approval authority defined in Section 2 (Roles and Responsibilities)

**Document Retention:**
- **10-year retention** for all conformity assessment records per EU AI Act
- Retention period starts from date AI system placed on market (not from document creation)
- Secure storage with backup and disaster recovery
- Access controls (confidentiality + availability to authorities)

**Document Access:**
- Internal access: Conformity Assessment Manager, AI System Owner, QMS Lead, Technical Documentation Lead, Chief Compliance Officer
- External access upon request: National competent authorities, notified body (if applicable)
- Confidentiality: Mark documents containing sensitive information (trade secrets, personal data)

---

## 9. REVIEW AND AUDIT

### 9.1 Internal Reviews

#### 9.1.1 Monthly Conformity Assessment Status Review

**Frequency:** Monthly during active assessment; Quarterly post-market

**Participants:** Conformity Assessment Manager, AI System Owner, QMS Lead, Technical Documentation Lead, Testing and Validation Lead

**Agenda:**
1. Assessment progress vs. timeline
2. Open issues and blockers
3. Budget status
4. Risk register review
5. Notified body communications (if Annex VII)
6. Decisions and action items

**Output:** Monthly Assessment Status Report

---

#### 9.1.2 Quarterly Conformity Status Review to AI Governance Committee

**Frequency:** Quarterly

**Participants:** AI Governance Committee, Conformity Assessment Manager, Chief Compliance Officer

**Agenda:**
1. Conformity assessment status (active assessments)
2. Post-market conformity monitoring results
3. Non-conformities and corrective actions
4. KPI performance vs. targets
5. Regulatory updates impacting conformity
6. Recommendations and approvals needed

**Output:** Quarterly Conformity Status Report (RPT-CA-018)

---

#### 9.1.3 Annual Conformity Management System Review

**Frequency:** Annually

**Participants:** Chief Compliance Officer, Conformity Assessment Manager, AI Governance Committee

**Agenda:**
1. Conformity assessment procedure effectiveness
2. KPI performance analysis and trends
3. Lessons learned from assessments
4. Regulatory landscape changes
5. Notified body performance (if Annex VII)
6. Conformity management system improvements
7. Resource and budget planning for next year

**Output:** Annual Conformity Review Report (RPT-CA-019)

---

### 9.2 Internal Audits

#### 9.2.1 Conformity Assessment Process Audit

**Frequency:** Annually

**Auditor:** Internal Audit (independent of conformity assessment process)

**Scope:**
- Conformity assessment procedure adherence
- Control effectiveness (Section 6)
- Documentation completeness and accuracy
- EU AI Act compliance (Articles 43, 47, 48)

**Methodology:**
- Review sample of completed conformity assessments
- Interview process owners
- Review documentation against requirements
- Test control operation

**Output:** Internal Audit Report with findings and recommendations

**Follow-up:** Corrective action plan for all findings; follow-up audit to verify closure

---

#### 9.2.2 Technical Documentation Audit

**Frequency:** Annually or before major external audit

**Auditor:** Quality Assurance or Internal Audit

**Scope:**
- Annex IV compliance (all required sections)
- Technical accuracy
- Consistency with AI system implementation
- Documentation currency (up-to-date)

**Output:** Technical Documentation Audit Report

---

### 9.3 External Audits

#### 9.3.1 Notified Body Surveillance Audit (Annex VII Only)

**Frequency:** Annually (minimum) for QMS certificate maintenance

**Auditor:** Notified Body

**Scope:**
- QMS continued effectiveness per Annex IX
- QMS compliance with Annex IX requirements
- Corrective actions from previous audit
- Changes to QMS since last audit
- AI system conformity maintenance

**Preparation:**
- Update QMS documentation
- Prepare evidence of QMS operation
- Close previous audit findings
- Schedule audit with notified body

**Output:** Notified Body Surveillance Audit Report

**Follow-up:** Corrective action response for all findings; notified body verification

---

#### 9.3.2 Market Surveillance Authority Inspection

**Frequency:** Unpredictable (triggered by authority)

**Inspector:** National Competent Authority (market surveillance)

**Scope:** Varies; may include:
- Technical documentation review (Annex IV)
- EU Declaration of Conformity verification
- CE marking correctness
- QMS effectiveness
- Compliance with EU AI Act requirements
- Follow-up on complaints or incidents

**Preparation:**
- Maintain conformity documentation ready for inspection
- Designate authority liaison (Chief Compliance Officer or Conformity Assessment Manager)
- Prepare to provide documentation within authority's requested timeframe (typically 24-72 hours)

**Output:** Market Surveillance Inspection Report (issued by authority)

**Follow-up:**
- If no non-conformities: No action required
- If non-conformities: Corrective action plan and implementation per authority's timeline
- Severe non-conformities: Potential market withdrawal, recall, or fines

---

### 9.4 Procedure Review and Updates

**Review Frequency:** Annually or when triggered by:
- EU AI Act amendments or implementing acts
- Harmonized standards publication or updates
- Common specifications updates
- Significant process failures or non-conformities
- Organizational structure changes
- Notified body guidance changes (if Annex VII)

**Review Process:**
1. Conformity Assessment Manager initiates review
2. Gather input from process owners and stakeholders
3. Identify improvement opportunities
4. Draft procedure updates
5. Review by Chief Compliance Officer and Legal Counsel
6. Approval by AI Governance Committee
7. Communicate updates to organization
8. Train affected personnel
9. Update version number and revision history

**Version Control:** See Section 10 (Revision History)

---

## 10. NON-COMPLIANCE HANDLING

### 10.1 Conformity Assessment Non-Compliance

**Definition:** Failure to follow this conformity assessment procedure or meet EU AI Act conformity requirements.

### 10.2 Sources of Non-Compliance Detection

| Source | Description | Example |
|--------|-------------|---------|
| **Internal Audit** | Internal audit identifies procedure non-compliance | Assessment conducted without notified body for biometric system (Annex VII mandatory) |
| **Process Review** | Management review identifies non-compliance | Declaration issued before conformity assessment complete |
| **Self-Reporting** | Team member identifies and reports non-compliance | Technical documentation missing required Annex IV section |
| **Notified Body Findings** | Notified body identifies non-compliance during assessment | QMS does not meet Annex IX requirements |
| **Market Surveillance** | Authority identifies non-compliance during inspection | CE marking incorrect (missing notified body number) |
| **Incident Investigation** | Incident reveals underlying conformity non-compliance | Serious incident reveals risk management inadequate |

### 10.3 Non-Compliance Severity Classification

| Severity | Definition | Examples | Response Timeline |
|----------|------------|----------|-------------------|
| **Critical** | Non-compliance that renders conformity assessment invalid or AI system non-conformant with EU AI Act | - CE marking applied without completed conformity assessment<br>- Declaration false or misleading<br>- Prohibited practice (Article 5) identified<br>- Biometric system deployed without notified body assessment | **Immediate** (< 24 hours) |
| **High** | Significant non-compliance with major impact on conformity validity | - Substantial modification deployed without re-assessment<br>- Technical documentation missing critical sections<br>- QMS major non-conformity not addressed | **< 7 days** |
| **Medium** | Moderate non-compliance; correctable without invaliding conformity | - Documentation gaps (non-critical sections)<br>- Procedure step skipped but objective met<br>- Delayed annual conformity review | **< 30 days** |
| **Low** | Minor non-compliance; no impact on conformity validity | - Administrative documentation errors<br>- Cosmetic procedure non-adherence<br>- Documentation formatting issues | **< 90 days** |

### 10.4 Non-Compliance Response Procedure

```
┌─────────────────────────────────────────────────────────────────┐
│          CONFORMITY ASSESSMENT NON-COMPLIANCE RESPONSE          │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  STEP 1: DETECT AND REPORT                                      │
│  ├─ Identify non-compliance from any source                     │
│  ├─ Document non-compliance with evidence                       │
│  ├─ Classify severity (Critical / High / Medium / Low)         │
│  └─ Report to Conformity Assessment Manager immediately         │
│                                                                  │
│  STEP 2: IMMEDIATE CONTAINMENT (Critical/High Severity)         │
│  ├─ Escalate to Chief Compliance Officer (< 24 hours)          │
│  ├─ Assess need for market action (withdrawal, recall)         │
│  ├─ Suspend market placement of affected AI systems            │
│  ├─ Notify notified body (if Annex VII) within 24 hours       │
│  ├─ Notify national authorities if serious non-compliance      │
│  └─ Implement temporary mitigation measures                     │
│                                                                  │
│  STEP 3: ROOT CAUSE ANALYSIS                                    │
│  ├─ Assemble investigation team                                 │
│  ├─ Conduct root cause analysis (5 Whys, Fishbone, etc.)       │
│  ├─ Identify why non-compliance occurred                        │
│  ├─ Identify why non-compliance was not detected earlier        │
│  └─ Document root cause analysis (FORM-CA-005)                  │
│                                                                  │
│  STEP 4: CORRECTIVE ACTION PLAN                                 │
│  ├─ Develop corrective action to address root cause            │
│  ├─ Develop preventive action to prevent recurrence            │
│  ├─ Assign owner, actions, target dates                         │
│  ├─ Obtain approval (CCO for High/Critical; CA Mgr for Med/Low)│
│  └─ Document corrective action plan (DOC-CA-010)                │
│                                                                  │
│  STEP 5: IMPLEMENT CORRECTIVE ACTIONS                           │
│  ├─ Execute corrective action plan                              │
│  ├─ Update procedures and controls as needed                    │
│  ├─ Re-conduct conformity assessment if invalidated            │
│  ├─ Update technical documentation and Declaration if needed   │
│  └─ Document implementation evidence                            │
│                                                                  │
│  STEP 6: VERIFY EFFECTIVENESS                                   │
│  ├─ Verify corrective action resolves non-compliance           │
│  ├─ Verify preventive action prevents recurrence               │
│  ├─ Conduct follow-up audit or review                           │
│  └─ Document verification evidence                              │
│                                                                  │
│  STEP 7: NOTIFY AND CLOSE                                       │
│  ├─ Notify notified body of resolution (if Annex VII)          │
│  ├─ Notify authorities of resolution (if they were notified)   │
│  ├─ Update non-compliance register                              │
│  ├─ Close non-compliance with documented evidence              │
│  └─ Resume market placement if suspended                        │
│                                                                  │
│  STEP 8: LESSONS LEARNED                                        │
│  ├─ Conduct lessons learned session                             │
│  ├─ Identify systemic improvements                              │
│  ├─ Update conformity assessment procedure if needed           │
│  └─ Communicate lessons learned to organization                │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### 10.5 Escalation Matrix

| Non-Compliance Severity | Immediate Notification | Investigation Lead | Approval Authority | External Notification |
|-------------------------|------------------------|--------------------|--------------------|----------------------|
| **Critical** | CCO (< 1 hour) | CCO + CA Manager | AI Governance Committee | Notified body + Authorities (< 24 hours) |
| **High** | CCO (< 4 hours) | CA Manager | CCO | Notified body (< 48 hours) |
| **Medium** | CA Manager (< 24 hours) | CA Manager | CA Manager | Notified body (if material to certificate) |
| **Low** | CA Manager (< 72 hours) | Process Owner | Process Owner | None (unless requested) |

### 10.6 Market Actions for Critical Non-Compliance

**When Critical Non-Compliance Detected:**

1. **Assess Risk to Deployed Systems**
   - Does non-compliance affect safety, health, fundamental rights?
   - Are deployed AI systems non-conformant?
   - Is immediate action needed?

2. **Market Action Options:**

   | Action | When to Use | Process |
   |--------|-------------|---------|
   | **Market Withdrawal** | AI systems not yet deployed; can prevent placement | Recall unsold inventory; do not sell new systems |
   | **Recall** | AI systems already deployed; serious risk exists | Notify all deployers; request return or deactivation |
   | **Field Corrective Action** | AI systems deployed; issue correctable without recall | Issue update/patch; verify deployers apply correction |
   | **Use Restriction** | AI systems deployed; risk mitigated by restricting use | Issue guidance limiting use cases; monitor compliance |

3. **Authority Notification:**
   - Notify national competent authorities in Member States where system placed on market
   - Provide:
     - Description of non-compliance
     - Risk assessment
     - Affected AI systems and quantities
     - Market action being taken
     - Timeline for resolution
   - Cooperate with authority instructions

4. **Deployer Notification:**
   - Notify all known deployers immediately
   - Provide clear instructions
   - Offer support for corrective action
   - Track deployer response and compliance

5. **Resume Market Placement:**
   - After non-compliance corrected and verified
   - After conformity assessment validated
   - After authority clearance obtained (if applicable)
   - Document authorization to resume

### 10.7 Non-Compliance Register

**Maintain Non-Compliance Register containing:**
- Non-compliance ID (unique identifier)
- Detection date and source
- Non-compliance description
- Severity classification
- Root cause
- Corrective action plan
- Implementation status
- Closure date and verification
- Lessons learned

**Register Review:** Monthly by Conformity Assessment Manager; Quarterly by AI Governance Committee

---

## 11. RELATED DOCUMENTS

### 11.1 EU AI Act References

| Document | Title | Description |
|----------|-------|-------------|
| **Regulation (EU) 2024/1689** | Artificial Intelligence Act | Primary regulation establishing AI system requirements |
| **EU AI Act Article 43** | Conformity Assessment | Conformity assessment procedures and requirements |
| **EU AI Act Article 47** | EU Declaration of Conformity | Declaration requirements and obligations |
| **EU AI Act Article 48** | CE Marking | CE marking requirements and principles |
| **EU AI Act Annex IV** | Technical Documentation | Required content of technical documentation |
| **EU AI Act Annex V** | EU Declaration of Conformity | Declaration template and required information |
| **EU AI Act Annex VI** | Internal Control Procedure | Assessment based on internal control |
| **EU AI Act Annex VII** | Conformity Assessment Procedure (Notified Body) | Assessment involving notified body |
| **EU AI Act Annex IX** | Quality Management System | QMS requirements for providers |

### 11.2 Supporting EU Regulations

| Document | Title | Relevance |
|----------|-------|-----------|
| **Regulation (EC) No 765/2008** | Accreditation and Market Surveillance | CE marking rules; notified body accreditation framework |
| **Decision No 768/2008/EC** | Common Framework for Marketing of Products | Conformity assessment modules; common rules |
| **Regulation (EU) 2019/1020** | Market Surveillance and Compliance | Market surveillance authorities' powers |
| **Regulation (EU) No 910/2014 (eIDAS)** | Electronic Identification and Trust Services | Electronic signatures for Declaration |
| **Regulation (EU) 2016/679 (GDPR)** | General Data Protection Regulation | Data protection requirements if AI processes personal data |

### 11.3 Internal Procedures

| Procedure ID | Procedure Name | Relationship to This Procedure |
|--------------|----------------|-------------------------------|
| **PROC-AI-CLS-001** | AI System Classification | Input: Classification determines if conformity assessment required |
| **PROC-AI-RM-001** | Risk Management | Input: Risk management documentation required for conformity assessment (Annex IV) |
| **PROC-AI-DOC-001** | Technical Documentation | Input: Technical documentation package required for conformity assessment |
| **PROC-AI-QMS-001** | Quality Management System | Input: QMS required for conformity assessment (Annex IX) |
| **PROC-AI-DATA-001** | Data Governance | Input: Data governance documentation required for conformity assessment (Annex IV Section 3) |
| **PROC-AI-TEST-001** | Testing and Validation | Input: Testing evidence required for conformity assessment |
| **PROC-AI-PMM-001** | Post-Market Monitoring | Output: Post-market monitoring maintains conformity |
| **PROC-AI-INC-001** | Incident Management | Trigger: Serious incidents may require re-assessment or corrective action |
| **PROC-AI-DEPLOY-001** | AI System Deployment | Gate: Conformity assessment required before deployment (high-risk systems) |

### 11.4 Standards and Guidelines

| Standard/Guideline | Title | Purpose |
|-------------------|-------|---------|
| **ISO/IEC 42001:2023** | Artificial Intelligence Management System | Framework for AI management including QMS elements |
| **ISO/IEC 23894:2023** | AI Risk Management | Risk management methodology aligned with EU AI Act |
| **ISO/IEC 27001:2022** | Information Security Management | Security and cybersecurity controls (Article 15) |
| **Harmonized Standards** | (To be published by EU Commission) | Standards conferring presumption of conformity |
| **Common Specifications** | (To be published by EU Commission) | Technical specifications for conformity when no harmonized standards |

### 11.5 External Resources

| Resource | Description | URL |
|----------|-------------|-----|
| **NANDO Database** | EU database of notified bodies | https://ec.europa.eu/growth/tools-databases/nando/ |
| **EU AI Act Portal** | Official EU Commission AI Act information | https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai |
| **National Competent Authority** | Contact information for Member State authorities | (Varies by Member State) |
| **Notified Body Information** | Selected notified body contact and portal | (From Step 2.2) |

---

## 12. APPENDICES

### APPENDIX A: EU DECLARATION OF CONFORMITY TEMPLATE

This template implements Annex V requirements for the EU Declaration of Conformity.

```
═══════════════════════════════════════════════════════════════════
                   EU DECLARATION OF CONFORMITY
              (EU Artificial Intelligence Act - EU AI Act)
═══════════════════════════════════════════════════════════════════

Declaration Number: [Unique ID, e.g., DOC-PROVIDER-2025-001]
Issue Date: [DD/MM/YYYY]
Version: [e.g., 1.0]

───────────────────────────────────────────────────────────────────
1. AI SYSTEM IDENTIFICATION
───────────────────────────────────────────────────────────────────

AI System Trade Name:        [Product/service name as marketed]
AI System Type:              [Brief description of AI system type]
AI System Version:           [Version number, e.g., 2.1.0]
Unique Identification:       [Model number, serial number, or unique ID]

───────────────────────────────────────────────────────────────────
2. PROVIDER INFORMATION
───────────────────────────────────────────────────────────────────

Provider Name:               [Legal entity name]
Registered Address:          [Street address]
                             [City, Postal Code]
                             [Country]
Business Registration:       [Registration number, if applicable]
Contact Information:         Email: [email@example.com]
                             Phone: [+XX XXX XXX XXXX]
Website:                     [https://www.example.com]

[If provider not established in EU:]
Authorized Representative:   [Name of authorized representative]
Representative Address:      [Address in EU]
Representative Contact:      [Contact information]

───────────────────────────────────────────────────────────────────
3. DECLARATION OF CONFORMITY
───────────────────────────────────────────────────────────────────

This Declaration of Conformity is issued under the sole
responsibility of the provider identified above.

The AI system identified in Section 1 is in conformity with:

   ☑ Regulation (EU) 2024/1689 of the European Parliament and of
     the Council on Artificial Intelligence (Artificial Intelligence
     Act)

   [Check if applicable:]
   ☐ Other applicable EU legislation:
     ☐ Regulation (EU) 2016/679 (General Data Protection Regulation)
     ☐ Regulation (EU) 2017/745 (Medical Devices Regulation)
     ☐ [Other relevant EU legislation]

───────────────────────────────────────────────────────────────────
4. HARMONIZED STANDARDS AND COMMON SPECIFICATIONS
───────────────────────────────────────────────────────────────────

The following harmonized standards and/or common specifications
have been applied:

Harmonized Standards:
☐ [Standard reference, e.g., EN ISO/IEC 42001:2023]
  - Sections applied: [Specify sections/clauses]

☐ [Additional harmonized standard]
  - Sections applied: [Specify sections/clauses]

☐ No harmonized standards applied

Common Specifications:
☐ [Common specification reference]
  - Sections applied: [Specify sections/clauses]

☐ No common specifications applied

Justification for non-application of harmonized standards
(if applicable):
[Explain why harmonized standards were not applied or were
only partially applied]

───────────────────────────────────────────────────────────────────
5. CONFORMITY ASSESSMENT PROCEDURE
───────────────────────────────────────────────────────────────────

Conformity assessment procedure followed:

☐ Annex VI: Conformity based on internal control
   - The provider has conducted conformity assessment based on
     internal control without involvement of a notified body.

☑ Annex VII: Conformity assessment with notified body involvement
   - Notified body involvement for quality management system
     assessment and/or technical documentation review.

───────────────────────────────────────────────────────────────────
6. NOTIFIED BODY INFORMATION
   (Complete this section ONLY if Annex VII procedure used)
───────────────────────────────────────────────────────────────────

Notified Body Name:          [Name of notified body]
Notified Body Number:        [4-digit number, e.g., 0123]
Notified Body Address:       [Address]
                             [City, Country]

Assessment Performed:
☐ Quality management system assessment per Article 17 and Annex IX
☐ Technical documentation assessment per Annex IV

Certificate(s) Issued:

   Certificate Type: [e.g., QMS Certificate, EU Technical
                      Documentation Certificate]
   Certificate Number: [Certificate unique number]
   Issue Date: [DD/MM/YYYY]
   Expiration Date: [DD/MM/YYYY] (if applicable)

───────────────────────────────────────────────────────────────────
7. ADDITIONAL INFORMATION
───────────────────────────────────────────────────────────────────

[Any additional information relevant to the Declaration, such as
specific conditions, limitations, or references to additional
documentation]

───────────────────────────────────────────────────────────────────
8. SIGNATURE
───────────────────────────────────────────────────────────────────

Place of Issue: [City, Country]
Date of Issue:  [DD/MM/YYYY]

Signed for and on behalf of:
[Provider Legal Name]

Name:     [Full name of authorized signatory]
Position: [Title/function, e.g., Chief Executive Officer,
          Chief Compliance Officer]

Signature: _________________________
           [Handwritten or qualified electronic signature
            per eIDAS Regulation]

───────────────────────────────────────────────────────────────────
9. LANGUAGE AND TRANSLATION INFORMATION
───────────────────────────────────────────────────────────────────

Original Language: [e.g., English]

This Declaration has been translated into the following languages:
☐ [Language] - Translation date: [DD/MM/YYYY]
☐ [Language] - Translation date: [DD/MM/YYYY]

Note: The provider is responsible for the accuracy of translations.
In case of discrepancy, the original language version prevails.

───────────────────────────────────────────────────────────────────
END OF DECLARATION
═══════════════════════════════════════════════════════════════════

DOCUMENT CONTROL:
Retention Period: 10 years from date AI system placed on market
Classification: [Confidential / Internal / Public]
Location: [Document management system location]
```

**Usage Instructions:**

1. **Complete all applicable sections** - Delete non-applicable checkboxes
2. **Notified Body section** - Complete only if Annex VII pathway
3. **Authorized signatory** - Must be senior management with authority to bind organization
4. **Signature** - Original handwritten or qualified electronic signature per eIDAS
5. **Language** - Issue in language accepted by notified body (if applicable) + official language(s) of Member State(s) where placed on market
6. **Retention** - Archive for 10 years from date AI system placed on market
7. **Availability** - Make available to competent authorities, notified body, deployers upon request

---

### APPENDIX B: CONFORMITY ASSESSMENT DECISION TREE

This decision tree guides providers through determining the correct conformity assessment pathway.

```
┌──────────────────────────────────────────────────────────────────┐
│   CONFORMITY ASSESSMENT PATHWAY DECISION TREE - EU AI ACT       │
└──────────────────────────────────────────────────────────────────┘

START: AI System Developed or Updated
│
│
▼
┌────────────────────────────────────────────────────────┐
│ Q1: Is the AI system classified as HIGH-RISK?         │
│     (per EU AI Act Annex III or as safety component)  │
└────────────────────────────────────────────────────────┘
         │
         ├─[NO]───────────────────────────────────────────────┐
         │                                                      │
         │  AI system is NOT HIGH-RISK                         │
         │  → Conformity assessment NOT required               │
         │  → Proceed to transparency obligations (if limited  │
         │     risk) or no obligations (if minimal risk)       │
         │  → END (This procedure does not apply)              │
         │                                                      │
         └─[YES]──▶ Continue to Q2                             │
                                                                │
▼                                                               │
┌────────────────────────────────────────────────────────┐      │
│ Q2: Is the AI system a BIOMETRIC IDENTIFICATION or    │      │
│     CATEGORIZATION system (Annex III Section 1)?      │      │
│                                                         │      │
│     Examples:                                          │      │
│     - Remote biometric identification                  │      │
│     - Real-time biometric identification               │      │
│     - Post-remote biometric identification             │      │
│     - Biometric categorization                         │      │
└────────────────────────────────────────────────────────┘      │
         │                                                      │
         ├─[YES]───────────────────────────────────────┐       │
         │                                              │       │
         │  ╔══════════════════════════════════════╗   │       │
         │  ║  MANDATORY: ANNEX VII PATHWAY        ║   │       │
         │  ║  (Third-Party Assessment)            ║   │       │
         │  ╚══════════════════════════════════════╝   │       │
         │                                              │       │
         │  REQUIRED STEPS:                             │       │
         │  ✓ Select and engage notified body          │       │
         │  ✓ QMS assessment by notified body          │       │
         │  ✓ Technical documentation review by NB     │       │
         │  ✓ Notified body issues certificates        │       │
         │  ✓ Provider issues Declaration (Annex V)    │       │
         │  ✓ Apply CE marking with NB number          │       │
         │  ✓ Annual surveillance audits               │       │
         │                                              │       │
         │  → Proceed to Phase 2 (Notified Body        │       │
         │    Selection) in this procedure              │       │
         │  → END                                       │       │
         │                                              │       │
         └─[NO]───▶ Continue to Q3                     │       │
                                                        │       │
▼                                                       │       │
┌─────────────────────────────────────────────────┐   │       │
│ Q3: AI system is HIGH-RISK but NOT biometric   │   │       │
│     (Annex III Sections 2-8)                    │   │       │
│                                                  │   │       │
│     Provider CHOICE of pathway:                 │   │       │
│                                                  │   │       │
│     OPTION A: Annex VI (Internal Control)       │   │       │
│     OPTION B: Annex VII (Notified Body)         │   │       │
│                                                  │   │       │
│     Which pathway do you choose?                │   │       │
└─────────────────────────────────────────────────┘   │       │
         │                                            │       │
         ├─[OPTION A: ANNEX VI]──────────────────┐   │       │
         │                                        │   │       │
         │  ╔══════════════════════════════════╗ │   │       │
         │  ║  ANNEX VI PATHWAY                ║ │   │       │
         │  ║  (Internal Control)              ║ │   │       │
         │  ╚══════════════════════════════════╝ │   │       │
         │                                        │   │       │
         │  REQUIRED STEPS:                       │   │       │
         │  ✓ Establish QMS per Annex IX         │   │       │
         │  ✓ Prepare tech documentation (IV)    │   │       │
         │  ✓ Conduct conformity testing          │   │       │
         │  ✓ Internal verification of conformity│   │       │
         │  ✓ Provider issues Declaration (V)    │   │       │
         │  ✓ Apply CE marking (no NB number)    │   │       │
         │  ✓ Maintain documentation (10 years)  │   │       │
         │                                        │   │       │
         │  ADVANTAGES:                           │   │       │
         │  + Faster (3-6 months typical)        │   │       │
         │  + Lower cost (internal only)         │   │       │
         │  + No ongoing surveillance audits     │   │       │
         │                                        │   │       │
         │  DISADVANTAGES:                        │   │       │
         │  - Lower market confidence            │   │       │
         │  - Higher regulatory scrutiny risk    │   │       │
         │  - Full liability on provider         │   │       │
         │                                        │   │       │
         │  → Skip Phase 2 (Notified Body)       │   │       │
         │  → Proceed to Phase 3 (Technical      │   │       │
         │    Documentation) in this procedure    │   │       │
         │  → END                                 │   │       │
         │                                        │   │       │
         └─[OPTION B: ANNEX VII]─────────────────┼───┘       │
                                                  │           │
           ╔══════════════════════════════════╗  │           │
           ║  ANNEX VII PATHWAY               ║  │           │
           ║  (Notified Body - Voluntary)     ║  │           │
           ╚══════════════════════════════════╝  │           │
                                                  │           │
           REQUIRED STEPS:                        │           │
           ✓ Select and engage notified body     │           │
           ✓ QMS assessment by notified body     │           │
           ✓ Technical documentation review      │           │
           ✓ Notified body issues certificates   │           │
           ✓ Provider issues Declaration (V)     │           │
           ✓ Apply CE marking with NB number     │           │
           ✓ Annual surveillance audits          │           │
                                                  │           │
           ADVANTAGES:                            │           │
           + Higher market confidence            │           │
           + Third-party verification            │           │
           + Lower regulatory scrutiny risk      │           │
           + Shared liability with NB            │           │
           + Often preferred by customers        │           │
                                                  │           │
           DISADVANTAGES:                         │           │
           - Slower (6-12 months typical)        │           │
           - Higher cost (€50K-€200K+)           │           │
           - Ongoing surveillance audits         │           │
           - NB dependencies                     │           │
                                                  │           │
           → Proceed to Phase 2 (Notified Body   │           │
             Selection) in this procedure         │           │
           → END                                  │           │
                                                  │           │
═══════════════════════════════════════════════════════════════════

DECISION FACTORS FOR ANNEX VI vs. VII (When Choice Available):

┌───────────────────────┬─────────────────┬─────────────────┐
│ Factor                │ Favor Annex VI  │ Favor Annex VII │
├───────────────────────┼─────────────────┼─────────────────┤
│ Time to Market        │ ✓ (3-6 months)  │ (6-12 months)   │
│ Budget                │ ✓ (€10-50K)     │ (€50-200K+)     │
│ Market Confidence     │                 │ ✓ (higher)      │
│ Customer Preference   │                 │ ✓ (often req.)  │
│ Liability Risk        │                 │ ✓ (shared)      │
│ Regulatory Scrutiny   │                 │ ✓ (lower)       │
│ Safety Criticality    │                 │ ✓ (high safety) │
│ Public Sector Deploy  │                 │ ✓ (expected)    │
│ International Markets │                 │ ✓ (recognition) │
│ Startup/SME          │ ✓ (resource)    │                 │
│ Mature QMS Exists     │ ✓ (leverage)    │                 │
└───────────────────────┴─────────────────┴─────────────────┘

═══════════════════════════════════════════════════════════════════
```

**Usage Instructions:**

1. Start at Q1 and answer each question based on your AI system characteristics
2. Follow the decision path indicated by your answers
3. Review the decision factors table if you have a choice between Annex VI and VII
4. Document your pathway selection using FORM-CA-001 (Pathway Selection Form)
5. Obtain AI Governance Committee approval for pathway selection

---

### APPENDIX C: NOTIFIED BODY SELECTION CRITERIA

This appendix provides detailed criteria for evaluating and selecting a notified body for Annex VII conformity assessment.

#### C.1 Mandatory Prerequisites

Before evaluating notified bodies, verify these mandatory prerequisites:

| Criterion | Requirement | Verification Method |
|-----------|-------------|---------------------|
| **AI Act Accreditation** | Notified body accredited for EU AI Act (Regulation (EU) 2024/1689) conformity assessment | Check NANDO database: https://ec.europa.eu/growth/tools-databases/nando/ |
| **Scope Coverage** | Accreditation scope covers your AI system type (e.g., employment, law enforcement, critical infrastructure) | Review notified body's accreditation certificate scope |
| **Annex VII Authorization** | Authorized to conduct Annex VII assessments (QMS + technical documentation) | Verify in accreditation documentation |
| **Active Status** | No suspensions, restrictions, or withdrawals of accreditation | Check NANDO database status field |

**If any prerequisite not met → Eliminate candidate from consideration**

---

#### C.2 Evaluation Criteria and Scoring

| Criterion | Weight | Scoring Guidelines (1-5 scale) | Evidence to Review |
|-----------|--------|-------------------------------|-------------------|
| **1. Domain Expertise** | 20% | **5:** Extensive experience in your AI system's domain (>10 assessments)<br>**4:** Significant experience (5-10 assessments)<br>**3:** Moderate experience (2-4 assessments)<br>**2:** Limited experience (1 assessment)<br>**1:** No demonstrated experience in domain | - Case studies<br>- Customer references<br>- Sector-specific expertise documentation |
| **2. Technical Competence** | 15% | **5:** Team includes AI experts, data scientists, domain specialists<br>**4:** Team includes AI experts and technical specialists<br>**3:** Team includes technical specialists<br>**2:** General auditors with limited AI expertise<br>**1:** Minimal technical competence | - Lead auditor CVs<br>- Team qualifications<br>- Technical publications |
| **3. Timeline Capacity** | 15% | **5:** Can start immediately; meet all target dates with buffer<br>**4:** Can start within 2 weeks; meet target dates<br>**3:** Can start within 4 weeks; tight timeline<br>**2:** Delayed start; may miss target dates<br>**1:** Cannot meet target dates | - Preliminary timeline estimate<br>- Current workload disclosure |
| **4. Cost** | 15% | **5:** Total cost <€75K<br>**4:** Total cost €75K-€100K<br>**3:** Total cost €100K-€150K<br>**2:** Total cost €150K-€200K<br>**1:** Total cost >€200K | - Preliminary cost estimate<br>- Fee structure transparency<br>- Surveillance cost estimate |
| **5. Geographic Presence** | 10% | **5:** Local office in same city; on-site visits easy<br>**4:** Office in same country; minimal travel<br>**3:** Office in neighboring country; moderate travel<br>**2:** Office in EU but distant; significant travel<br>**1:** No EU presence; remote only | - Office locations<br>- Travel requirements<br>- On-site audit logistics |
| **6. Reputation and Track Record** | 10% | **5:** Excellent reputation; all references highly positive<br>**4:** Good reputation; references positive<br>**3:** Adequate reputation; mixed references<br>**2:** Concerning reputation; negative feedback<br>**1:** Poor reputation; multiple complaints | - Customer references (min. 3)<br>- Industry reputation<br>- Complaints or disputes |
| **7. Communication and Responsiveness** | 8% | **5:** Highly responsive (<24h); excellent communication<br>**4:** Responsive (24-48h); good communication<br>**3:** Adequate response (2-3 days); acceptable communication<br>**2:** Slow response (>3 days); poor communication<br>**1:** Unresponsive or unprofessional | - Response time to initial inquiry<br>- Clarity of communications<br>- Availability for meetings |
| **8. Transparency and Flexibility** | 7% | **5:** Fully transparent process; very flexible approach<br>**4:** Transparent; some flexibility<br>**3:** Standard transparency; rigid process<br>**2:** Limited transparency; inflexible<br>**1:** Opaque process; no flexibility | - Assessment methodology disclosure<br>- Willingness to customize approach<br>- Fee structure transparency |

**Total Weighted Score Calculation:**
```
Total Score = Σ (Criterion Score × Weight)
Range: 1.00 (lowest) to 5.00 (highest)
```

**Recommendation Threshold:**
- Score ≥ 4.0: **Highly Recommended** - Excellent fit
- Score 3.5-3.9: **Recommended** - Good fit
- Score 3.0-3.4: **Acceptable** - Adequate but not ideal
- Score < 3.0: **Not Recommended** - Consider alternatives

---

#### C.3 Reference Check Questions

When contacting notified body references, ask:

**Assessment Quality:**
1. How would you rate the thoroughness of the conformity assessment? (1-5)
2. Did the notified body identify issues that you had missed?
3. Was the assessment methodology appropriate for your AI system?
4. How would you rate the technical competence of the assessment team? (1-5)

**Timeline Adherence:**
5. Did the notified body meet agreed timelines?
6. Were there any significant delays? If so, why?
7. How long did the overall assessment take from start to certificate?

**Communication:**
8. How would you rate communication and responsiveness? (1-5)
9. Were findings and requirements clearly explained?
10. Was the notified body flexible and collaborative?

**Cost:**
11. Were there any unexpected costs or scope creep?
12. Was the final cost in line with the initial estimate?
13. Do you feel you received good value for money?

**Post-Certificate:**
14. How is the ongoing relationship for surveillance audits?
15. Is the notified body supportive with questions and issues?
16. Would you choose this notified body again? Why or why not?

**Overall:**
17. On a scale of 1-5, how satisfied are you with this notified body?
18. What did they do particularly well?
19. What could they have done better?
20. Any other advice for a provider considering this notified body?

---

#### C.4 Notified Body Comparison Template

Use this template to compare candidate notified bodies side-by-side:

| Criterion | Weight | Candidate A | Candidate B | Candidate C |
|-----------|--------|-------------|-------------|-------------|
| **Prerequisites Met** | — | ☐ Yes ☐ No | ☐ Yes ☐ No | ☐ Yes ☐ No |
| **Domain Expertise** | 20% | Score: ___<br>Weighted: ___ | Score: ___<br>Weighted: ___ | Score: ___<br>Weighted: ___ |
| **Technical Competence** | 15% | Score: ___<br>Weighted: ___ | Score: ___<br>Weighted: ___ | Score: ___<br>Weighted: ___ |
| **Timeline Capacity** | 15% | Score: ___<br>Weighted: ___ | Score: ___<br>Weighted: ___ | Score: ___<br>Weighted: ___ |
| **Cost** | 15% | Score: ___<br>Weighted: ___ | Score: ___<br>Weighted: ___ | Score: ___<br>Weighted: ___ |
| **Geographic Presence** | 10% | Score: ___<br>Weighted: ___ | Score: ___<br>Weighted: ___ | Score: ___<br>Weighted: ___ |
| **Reputation** | 10% | Score: ___<br>Weighted: ___ | Score: ___<br>Weighted: ___ | Score: ___<br>Weighted: ___ |
| **Communication** | 8% | Score: ___<br>Weighted: ___ | Score: ___<br>Weighted: ___ | Score: ___<br>Weighted: ___ |
| **Transparency** | 7% | Score: ___<br>Weighted: ___ | Score: ___<br>Weighted: ___ | Score: ___<br>Weighted: ___ |
| **TOTAL SCORE** | **100%** | **___** | **___** | **___** |
| **Recommendation** | — | ☐ Highly Rec.<br>☐ Rec.<br>☐ Acceptable<br>☐ Not Rec. | ☐ Highly Rec.<br>☐ Rec.<br>☐ Acceptable<br>☐ Not Rec. | ☐ Highly Rec.<br>☐ Rec.<br>☐ Acceptable<br>☐ Not Rec. |

**Selection Recommendation:**
- **First Choice:** [Candidate ___] - Score: ___ - Rationale: [Explain why]
- **Second Choice:** [Candidate ___] - Score: ___ - Rationale: [Explain why]
- **Third Choice:** [Candidate ___] - Score: ___ - Rationale: [Explain why]

**Approvals:**
- Conformity Assessment Manager: _____________ Date: _______
- Chief Compliance Officer: _____________ Date: _______

---

### APPENDIX D: CE MARKING GUIDELINES

This appendix provides detailed guidance on correct CE marking application per Article 48.

#### D.1 CE Marking Design Specifications

**Official CE Marking Logo:**

The CE marking consists of the letters "C" and "E" in a specific stylized form defined by Regulation (EC) No 765/2008.

```
    ╭─────╮
   ╱       ╲
  │    ╭────╯
  │   ╱
  │  ╱
  │  ╲
  │   ╲
   ╲   ╰────╮
    ╲       │
     ╰─────╮│
 C         ╰╯ E
```

**Download Official Graphics:**
- EU Commission provides official CE marking graphics
- Available at: https://single-market-economy.ec.europa.eu/single-market/ce-marking_en
- Use official graphics to ensure correct proportions

**Size Requirements:**
- **Minimum height:** 5mm (for physical marking)
- **Proportions:** If CE marking enlarged or reduced, maintain official proportions
- **Digital marking:** Ensure sufficient resolution for clarity (minimum 300 DPI for print)

**Visibility, Legibility, Indelibility:**
- **Visible:** CE marking must be easily seen; prominent placement
- **Legible:** Clear and readable; adequate contrast with background
- **Indelible:** Permanent; cannot be easily removed or altered
  - Physical products: Engraved, embossed, or permanent label
  - Digital products: Embedded in software; not user-editable

---

#### D.2 CE Marking Placement

**For AI Systems with Physical Product:**

| Placement Option | When to Use | Examples |
|------------------|-------------|----------|
| **On the product itself** | Preferred if physical device exists | Hardware appliances, embedded systems, robotics |
| **On product packaging** | If marking on product not possible/practical | Software on physical media, small devices |
| **On accompanying documents** | If neither product nor packaging practical | Pure software products with documentation |

**For AI Systems without Physical Product (Article 48(4)):**

| Placement Option | When to Use | Examples |
|------------------|-------------|----------|
| **Digital interface** | AI system has user interface accessible to deployers | SaaS applications, web platforms, mobile apps |
| **Digital documentation** | AI system accessed via API or without interface | Cloud services, API-based AI systems |
| **Provider website** | Supplementary to other placements | Product page showing CE marking |

**Placement Guidelines:**
- Place CE marking in location where deployers and authorities can easily find it
- For digital systems: Include in "About," "Legal," or "Compliance" section
- Ensure marking not obscured by other elements
- For multi-component systems: Mark each component or mark system as a whole

---

#### D.3 Notified Body Identification Number

**When Notified Body Involved (Annex VII):**
- CE marking **must be followed** by notified body identification number
- Format: `CE [space] [4-digit number]`
- Example: `CE 0123`
- Font size: Same as or slightly smaller than CE marking
- Placement: Immediately after CE marking on same line

**Notified Body Number Source:**
- Obtain from notified body certificate
- Verify in NANDO database: https://ec.europa.eu/growth/tools-databases/nando/
- Number is assigned by EU Commission upon notified body accreditation

**When Notified Body NOT Involved (Annex VI):**
- CE marking alone (no number)
- Format: `CE`

**Example Placements:**
```
Annex VII (with notified body):    Annex VI (internal control):
┌─────────────────────┐             ┌─────────────────────┐
│                     │             │                     │
│    CE 0123          │             │    CE               │
│                     │             │                     │
└─────────────────────┘             └─────────────────────┘
```

---

#### D.4 Prohibited Practices and Common Errors

**PROHIBITED:**

| Error | Why Prohibited | Consequence |
|-------|----------------|-------------|
| Applying CE marking before conformity assessment complete | Misrepresentation; false declaration | Market surveillance enforcement; fines |
| CE marking without EU Declaration of Conformity | Declaration required before marking (Article 47) | Non-compliance; potential recall |
| Incorrect notified body number or omitting when required | Misleading; does not accurately represent assessment | Market surveillance enforcement |
| CE marking that is not visible, legible, or indelible | Does not meet Article 48(2) requirements | Non-compliance |
| Confusing CE marking with other markings | Reduces visibility or creates confusion (Article 48(5)) | Non-compliance |

**Common Errors:**

| Error | Correction |
|-------|-----------|
| Using "CE" text instead of official logo | Use official CE marking graphic with correct proportions |
| CE marking too small (< 5mm) | Increase size to minimum 5mm height |
| Wrong notified body number | Verify certificate and use correct number from NANDO database |
| CE marking in obscure location | Place in prominent, easily accessible location |
| CE marking easily removable (e.g., paper sticker that peels off) | Use permanent method (engraving, indelible printing, embedded digital) |

---

#### D.5 CE Marking for Software and Digital AI Systems

**Digital CE Marking Placement Options:**

1. **In Application Interface:**
   - "About" dialog or screen
   - Settings or Preferences menu under "Legal" or "Compliance"
   - Footer of main application screen
   - Help menu → "About [Product]" → Compliance information

2. **In Digital Documentation:**
   - User manual (PDF, HTML, or online help)
   - README or LICENSE file (if open-source components)
   - Online knowledge base or support portal

3. **On Provider Website:**
   - Product page under "Compliance" section
   - Legal notices or regulatory information page
   - Download page (if downloadable software)

**Example Digital CE Marking Display:**

```
═══════════════════════════════════════════════════════════════
                         [Product Name]
                        Version [X.X.X]

─────────────────────────────────────────────────────────────

EU CONFORMITY INFORMATION:

   CE 0123

   This AI system complies with Regulation (EU) 2024/1689
   (Artificial Intelligence Act).

   EU Declaration of Conformity available at:
   https://www.example.com/compliance/declaration

   For more information, contact:
   [Provider Name]
   [Address]
   [Email]

═══════════════════════════════════════════════════════════════
```

**Accessibility Requirements:**
- Deployers must be able to access CE marking information easily
- National authorities must be able to verify CE marking
- Include link to full Declaration of Conformity (online or available upon request)

---

#### D.6 CE Marking Checklist

Use this checklist before applying CE marking:

| Check Item | Verified | Evidence |
|------------|----------|----------|
| ☐ Conformity assessment completed per Annex VI or VII | ☐ Yes | Assessment completion record |
| ☐ EU Declaration of Conformity issued and signed | ☐ Yes | Signed Declaration (DOC-CA-007) |
| ☐ All non-conformities resolved | ☐ Yes | Non-conformity closure records |
| ☐ If Annex VII: Notified body certificate obtained | ☐ Yes ☐ N/A | Notified body certificate |
| ☐ Official CE marking graphic obtained | ☐ Yes | CE marking graphic file |
| ☐ CE marking meets size requirements (≥5mm physical) | ☐ Yes | Measurement verification |
| ☐ Notified body number correct (if Annex VII) | ☐ Yes ☐ N/A | Verified against NANDO database |
| ☐ CE marking placement determined and documented | ☐ Yes | CE Marking Plan (DOC-CA-009) |
| ☐ CE marking visible, legible, indelible | ☐ Yes | Physical or digital inspection |
| ☐ For digital systems: CE marking accessible to deployers | ☐ Yes ☐ N/A | Accessibility testing |
| ☐ No other markings create confusion with CE marking | ☐ Yes | Visual inspection |
| ☐ CE marking applied to all products/versions in scope | ☐ Yes | Product inventory check |
| ☐ Market placement authorization obtained | ☐ Yes | Authorization record (REC-CA-015) |

**Final Approval:**
- Conformity Assessment Manager: _____________ Date: _______
- Chief Compliance Officer: _____________ Date: _______

**Market Placement Authorization:**
- Authorized Signatory: _____________ Date: _______
- AI system may be placed on EU market: ☐ Yes ☐ No (if no, explain):

---

### APPENDIX E: CROSS-REFERENCES TO OTHER PROCEDURES

This appendix maps touchpoints between conformity assessment and other AI compliance procedures.

#### E.1 Procedure Dependency Map

```
┌────────────────────────────────────────────────────────────────┐
│              CONFORMITY ASSESSMENT DEPENDENCIES                │
└────────────────────────────────────────────────────────────────┘

                    INPUTS TO CONFORMITY ASSESSMENT
                              ▼
    ┌────────────────────────────────────────────────────────┐
    │                                                        │
┌───▼────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────▼──┐
│PROC-AI-    │  │PROC-AI-     │  │PROC-AI-     │  │PROC-AI-    │
│CLS-001     ├─▶│RM-001       ├─▶│DOC-001      ├─▶│CA-001      │
│            │  │             │  │             │  │            │
│Classifica  │  │Risk Mgmt    │  │Tech Doc     │  │Conformity  │
│tion        │  │             │  │             │  │Assessment  │
│            │  │             │  │             │  │(THIS PROC) │
└────────────┘  └─────────────┘  └─────────────┘  └──────┬─────┘
                                                           │
    ┌──────────────────────────────────────────────────────┘
    │
┌───▼────────┐  ┌─────────────┐  ┌─────────────┐
│PROC-AI-    │  │PROC-AI-     │  │PROC-AI-     │
│DATA-001    ├─▶│QMS-001      ├─▶│TEST-001     │
│            │  │             │  │             │
│Data        │  │Quality Mgmt │  │Testing &    │
│Governance  │  │System       │  │Validation   │
└────────────┘  └─────────────┘  └─────────────┘

                    OUTPUTS FROM CONFORMITY ASSESSMENT
                              ▼
    ┌────────────────────────────────────────────────────────┐
    │                                                        │
┌───▼────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────▼──┐
│PROC-AI-    │  │PROC-AI-     │  │PROC-AI-     │  │PROC-AI-    │
│DEPLOY-001  │◀─│PMM-001      │◀─│INC-001      │◀─│CA-001      │
│            │  │             │  │             │  │            │
│Deployment  │  │Post-Market  │  │Incident     │  │Conformity  │
│            │  │Monitoring   │  │Management   │  │Assessment  │
└────────────┘  └─────────────┘  └─────────────┘  └────────────┘
```

---

#### E.2 Cross-Reference Table

| From Procedure | To This Procedure (CA-001) | Interface | When | Information Flow |
|----------------|---------------------------|-----------|------|------------------|
| **PROC-AI-CLS-001** (Classification) | → CA-001 | Classification determines if CA required | After high-risk classification | AI system classification; risk category; Annex III section |
| **PROC-AI-RM-001** (Risk Management) | → CA-001 | Risk management documentation required for technical documentation (Annex IV Section 4) | During tech doc preparation | Risk register; risk assessments; bias analysis; misuse scenarios; residual risks |
| **PROC-AI-DATA-001** (Data Governance) | → CA-001 | Data governance documentation required for technical documentation (Annex IV Section 3) | During tech doc preparation | Training datasets; data quality; data bias; data representativeness |
| **PROC-AI-DOC-001** (Technical Documentation) | → CA-001 | Technical documentation package is core conformity assessment input | Before assessment submission | Complete Annex IV technical documentation package |
| **PROC-AI-QMS-001** (Quality Management System) | → CA-001 | QMS required for conformity assessment (Annex IX) | Before QMS assessment | QMS documentation; QMS processes; QMS effectiveness evidence |
| **PROC-AI-TEST-001** (Testing and Validation) | → CA-001 | Testing evidence required for conformity assessment (Annex IV Section 4) | During conformity assessment | Test plans; test results; validation evidence; performance metrics |
| **CA-001** (This Procedure) | → **PROC-AI-PMM-001** (Post-Market Monitoring) | Conformity must be maintained post-market | After market placement | Conformity monitoring requirements; Declaration; technical documentation baseline |
| **CA-001** (This Procedure) | → **PROC-AI-INC-001** (Incident Management) | Serious incidents may invalidate conformity; require re-assessment | When incident occurs | Non-conformity information; corrective actions; re-assessment requirements |
| **CA-001** (This Procedure) | → **PROC-AI-DEPLOY-001** (Deployment) | Conformity assessment required before deployment (high-risk systems) | Before production deployment | CE marking authorization; Declaration of Conformity; deployment clearance |

---

#### E.3 Document Cross-References

| Document from Other Procedure | Used in CA-001 | Purpose |
|-------------------------------|----------------|---------|
| **AI System Classification Report** (CLS-001) | Phase 1: Assessment Planning | Determine if conformity assessment required; determine pathway |
| **Risk Register** (RM-001) | Phase 3: Technical Documentation | Include in Annex IV Section 4 (assessment of AI system) |
| **Bias and Discrimination Assessment** (RM-001) | Phase 3: Technical Documentation | Include in Annex IV Section 4 (biases identified) |
| **Training Data Documentation** (DATA-001) | Phase 3: Technical Documentation | Include in Annex IV Section 3 (detailed description of data) |
| **Data Quality Assessment** (DATA-001) | Phase 3: Technical Documentation | Include in Annex IV Section 3 (data preparation procedures) |
| **Technical Documentation Package** (DOC-001) | Phase 3: Technical Documentation Review | Core input for conformity assessment |
| **QMS Manual and Procedures** (QMS-001) | Phase 4: QMS Assessment | Required for Annex IX compliance verification |
| **Test Plans and Results** (TEST-001) | Phase 5: Testing and Validation | Required for Annex IV Section 4 (testing procedures and results) |
| **EU Declaration of Conformity** (CA-001) | Post-Market Monitoring (PMM-001) | Baseline for conformity monitoring |
| **CE Marking Authorization** (CA-001) | Deployment (DEPLOY-001) | Gate criterion for production deployment |

---

#### E.4 Process Integration Points

**Gate 1: Before Starting Conformity Assessment**
- **Prerequisite:** PROC-AI-CLS-001 completed → AI system classified as high-risk
- **Prerequisite:** PROC-AI-RM-001 in progress → Risk management system operational
- **Prerequisite:** PROC-AI-QMS-001 in progress → QMS established (minimum 50% complete)
- **Decision Point:** Proceed to conformity assessment planning

**Gate 2: Before Technical Documentation Submission**
- **Prerequisite:** PROC-AI-DOC-001 completed → Technical documentation 100% complete per Annex IV
- **Prerequisite:** PROC-AI-RM-001 completed → Risk management documentation finalized
- **Prerequisite:** PROC-AI-DATA-001 completed → Data governance documentation finalized
- **Decision Point:** Submit technical documentation for assessment

**Gate 3: Before QMS Assessment**
- **Prerequisite:** PROC-AI-QMS-001 completed → QMS operational and documented per Annex IX
- **Prerequisite:** Internal QMS audit completed → Major non-conformities closed
- **Decision Point:** Proceed to QMS assessment (internal or notified body)

**Gate 4: Before Testing and Validation**
- **Prerequisite:** PROC-AI-TEST-001 testing plan approved
- **Prerequisite:** AI system development complete and deployed to test environment
- **Decision Point:** Execute conformity testing

**Gate 5: Before Market Placement**
- **Prerequisite:** PROC-AI-CA-001 completed → Conformity assessment complete
- **Prerequisite:** EU Declaration of Conformity issued
- **Prerequisite:** CE marking applied
- **Prerequisite:** PROC-AI-PMM-001 prepared → Post-market monitoring system ready
- **Decision Point:** Authorize market placement

**Gate 6: Post-Market Ongoing**
- **Continuous:** PROC-AI-PMM-001 monitors conformity maintenance
- **Trigger:** PROC-AI-INC-001 incidents may trigger conformity re-assessment
- **Trigger:** Substantial modifications trigger conformity re-assessment per PROC-AI-CA-001

---

## REVISION HISTORY

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [Date] | [Name] | Initial procedure development - comprehensive conformity assessment procedure per EU AI Act Articles 43, 47, 48 |
| | | | |

---

## APPROVAL AND AUTHORIZATION

| Role | Name | Title | Signature | Date |
|---|---|---|---|---|
| **Prepared By** | [Name] | Conformity Assessment Manager | __________ | ________ |
| **Reviewed By** | [Name] | Chief Compliance Officer | __________ | ________ |
| **Reviewed By** | [Name] | Legal Counsel | __________ | ________ |
| **Reviewed By** | [Name] | QMS Lead | __________ | ________ |
| **Approved By** | [Name] | AI Governance Committee Chair | __________ | ________ |

---

## DOCUMENT CONTROL

**Document Status:** [Draft/Approved]
**Classification:** [Internal/Confidential]
**Distribution:** Conformity Assessment Manager, AI System Owners, QMS Lead, Technical Documentation Lead, Testing and Validation Lead, Chief Compliance Officer, AI Governance Committee, Legal Counsel, Internal Audit
**Retention:** 10 years (per EU AI Act Article 18 and Article 47)
**Review Frequency:** Annually or upon EU AI Act amendment / harmonized standards update
**Next Review Date:** [Date + 1 year]

---

**END OF PROCEDURE PROC-AI-CA-001**
