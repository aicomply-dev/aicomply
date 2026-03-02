# PROC-AI-REG-001: EU AI Act Registration Procedure

**Procedure ID:** PROC-AI-REG-001
**Procedure Name:** EU AI Act Registration Procedure
**Standard:** STD-AI-011: Registration Standard
**Covers Controls:** REG-001, REG-002, REG-003
**EU AI Act Articles:** Article 49 (Registration), Article 71 (EU Database)
**Effective Date:** [To be filled]
**Last Updated:** [To be filled]
**Next Review Date:** [To be filled]
**Approval Status:** [Draft/Approved]

---

## TABLE OF CONTENTS

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Definitions](#2-definitions)
3. [Roles and Responsibilities](#3-roles-and-responsibilities)
4. [Regulatory Framework](#4-regulatory-framework)
5. [Step-by-Step Procedure](#5-step-by-step-procedure)
   - Phase 1: Registration Readiness Assessment
   - Phase 2: Registration Data Preparation
   - Phase 3: EU Database Submission
   - Phase 4: Registration Maintenance
6. [Control Mechanisms](#6-control-mechanisms)
7. [Key Performance Indicators (KPIs) and Metrics](#7-key-performance-indicators-kpis-and-metrics)
8. [Documentation Requirements](#8-documentation-requirements)
9. [Review and Audit](#9-review-and-audit)
10. [Non-Compliance Handling](#10-non-compliance-handling)
11. [Related Documents](#11-related-documents)
12. [Appendices](#12-appendices)

---

## 1. PURPOSE AND SCOPE

### 1.1 Purpose

This procedure establishes the step-by-step process for registering high-risk AI systems in the EU Database for Stand-Alone High-Risk AI Systems in compliance with EU AI Act Article 49 and Article 71. The procedure ensures:

1. **Timely Registration:** AI systems are registered BEFORE placing on market or putting into service
2. **Complete Information:** All mandatory information per Annex VIII is collected and submitted
3. **Accurate Records:** Registration information is maintained and updated as required
4. **Regulatory Compliance:** All provider and deployer registration obligations are met
5. **Transparency:** Publicly accessible information supports market surveillance and user trust

### 1.2 Scope

**This procedure applies to:**

- **Providers** of high-risk AI systems listed in Annex III
- **Authorized Representatives** acting on behalf of non-EU providers
- **Deployers** of high-risk AI systems in specific cases:
  - Public authorities or bodies
  - AI systems intended for use covered by Article 6(2) (law enforcement, migration, asylum, border control, administration of justice, democratic processes)
- All high-risk AI systems before market placement or putting into service
- Updates and changes to registered AI systems

**This procedure does not apply to:**

- Minimal-risk AI systems (unless specifically required)
- Limited-risk AI systems subject only to transparency obligations
- General-purpose AI models (separate registration requirements)
- AI systems exempt under Article 2 (military, national security, research-only)

### 1.3 Procedure Owner and Contacts

| Role | Name | Title | Contact |
|------|------|-------|---------|
| **Procedure Owner** | [Name] | AI Compliance Manager | [Email/Phone] |
| **Escalation** | [Name] | Head of Regulatory Affairs | [Email/Phone] |
| **Technical Support** | [Name] | AI Technical Documentation Lead | [Email/Phone] |
| **Database Administrator** | [Name] | EU Database Coordinator | [Email/Phone] |

---

## 2. DEFINITIONS

### 2.1 Key Terms

| Term | Definition |
|------|------------|
| **AI System** | A machine-based system designed to operate with varying levels of autonomy and that may exhibit adaptiveness after deployment, that infers outputs from the input it receives (EU AI Act Art. 3(1)) |
| **Authorized Representative** | Any natural or legal person located in the EU who has received a written mandate from a provider located outside the EU to act on their behalf for specified tasks (EU AI Act Art. 3(7)) |
| **CE Marking** | A marking by which a provider indicates that an AI system is in conformity with the requirements set out in Title III, Chapter 2 and other applicable Union harmonization legislation |
| **Conformity Assessment** | The process demonstrating whether the requirements of the AI Act relating to a high-risk AI system have been fulfilled |
| **Deployer** | Any natural or legal person, public authority, agency or other body using an AI system under its authority except where the AI system is used in the course of a personal non-professional activity (EU AI Act Art. 3(4)) |
| **EU Database** | The EU Database for Stand-Alone High-Risk AI Systems maintained by the European Commission pursuant to Article 71 |
| **High-Risk AI System** | An AI system listed in Annex III or intended to be used as a safety component of a product covered by Union harmonization legislation |
| **Instructions for Use** | Information provided by the provider to inform the deployer of the AI system's intended purpose and proper use |
| **Market Placement** | The first making available of an AI system on the Union market |
| **Provider** | A natural or legal person, public authority, agency or other body that develops an AI system or that has an AI system developed and places it on the market or puts it into service under its own name or trademark (EU AI Act Art. 3(3)) |
| **Putting into Service** | The supply of an AI system for first use directly to the deployer or for own use in the Union for its intended purpose |
| **Registration** | The act of submitting information to the EU Database in accordance with Article 49 and Annex VIII |
| **Unique Identification Number** | A unique alphanumeric identifier assigned to each registered AI system by the EU Database |

### 2.2 Acronyms

| Acronym | Definition |
|---------|------------|
| **AI** | Artificial Intelligence |
| **CA** | Conformity Assessment |
| **DoC** | Declaration of Conformity |
| **EU** | European Union |
| **FRIA** | Fundamental Rights Impact Assessment |
| **MS** | Member State |
| **NB** | Notified Body |
| **SRN** | Single Registration Number |

---

## 3. ROLES AND RESPONSIBILITIES

### 3.1 Key Roles

| Role | Responsibility | Authority |
|------|----------------|-----------|
| **AI Compliance Manager** | Own and execute registration process; ensure timely submission; maintain registration records | Approve registration submissions; coordinate with EU Database |
| **AI Product Manager** | Provide AI system information; verify intended purpose; coordinate conformity assessment | Approve AI system descriptions; authorize market placement |
| **Technical Documentation Lead** | Prepare technical documentation; compile Annex VIII information; maintain documentation | Approve technical content; verify accuracy of technical data |
| **Legal/Regulatory Affairs** | Ensure legal compliance; review declarations; coordinate with authorized representatives (if applicable) | Approve legal statements; sign declarations |
| **Quality Manager** | Verify conformity assessment completion; maintain quality records; ensure CE marking | Approve conformity statements; authorize CE marking application |
| **EU Database Coordinator** | Manage EU Database account; submit registrations; monitor submission status; handle updates | Access EU Database; submit registration data; update records |
| **Deployer Registration Coordinator** (for deployers) | Collect deployer-specific information; conduct FRIA; coordinate with provider | Submit deployer registrations; maintain deployer records |

### 3.2 RACI Matrix

| Activity | AI Compliance Manager | Product Manager | Tech Doc Lead | Legal/Regulatory | Quality Manager | Database Coordinator | Deployer Coordinator |
|----------|----------------------|-----------------|---------------|------------------|----------------|---------------------|---------------------|
| Registration readiness assessment | A | R | C | C | C | I | I |
| Provider information collection | C | R | C | C | I | I | — |
| AI system description | C | A | R | C | I | I | — |
| Intended purpose definition | C | A | C | C | I | I | — |
| Risk classification verification | A | C | C | C | R | I | — |
| Conformity assessment verification | C | C | C | C | A | I | — |
| Instructions for use URL | C | A | R | I | I | I | — |
| Declaration of conformity preparation | C | C | C | A | R | I | — |
| Registration data preparation | A | C | R | C | C | C | — |
| EU Database submission | A | I | I | C | I | R | — |
| Registration verification | A | C | C | C | C | R | — |
| Deployer information collection | I | I | I | C | I | — | A |
| FRIA coordination | C | I | I | C | I | — | R |
| Registration updates | A | C | C | C | C | R | C |
| Registration maintenance | R | C | C | I | I | A | C |

**Legend:** A=Accountable, R=Responsible, C=Consulted, I=Informed

---

## 4. REGULATORY FRAMEWORK

### 4.1 EU AI Act Requirements

#### 4.1.1 Article 49: Registration Obligations

**Article 49(1) - Provider Registration:**

Providers must register high-risk AI systems in the EU Database **BEFORE** placing on the market or putting into service. The registration must include information specified in Annex VIII, Section A.

**Article 49(2) - Authorized Representative Registration:**

Authorized representatives of non-EU providers must fulfill the registration obligation on behalf of the provider.

**Article 49(3) - Deployer Registration:**

Deployers must register in the EU Database if:
- They are public authorities, agencies, or bodies; OR
- They deploy AI systems referred to in Article 6(2) (law enforcement, migration, asylum, border control, administration of justice, democratic processes)

Deployer registration must include information specified in Annex VIII, Section B.

**Article 49(4) - Single Registration:**

For each AI system, only ONE registration is required regardless of number of Member States where it is placed on the market or put into service.

**Article 49(5) - Update Obligations:**

Providers and deployers must update registration information when changes occur to information provided during registration.

#### 4.1.2 Article 71: EU Database

**Article 71(1) - Commission Responsibilities:**

The European Commission shall establish and maintain the EU Database for Stand-Alone High-Risk AI Systems.

**Article 71(2) - Public Accessibility:**

Information registered shall be publicly accessible and free of charge in a user-friendly manner. The database shall be easily navigable, machine-readable, and allow bulk downloads where appropriate.

**Article 71(3) - Confidentiality:**

Providers may request confidentiality for specific information submitted under Annex VIII if disclosure would harm their commercial interests or intellectual property rights. The Commission shall assess such requests.

**Article 71(4) - Integration:**

The EU Database shall be integrated with national databases maintained by Member State authorities where appropriate.

**Article 71(5) - Search Functionality:**

The database shall provide search and filtering capabilities including by:
- AI system name
- Provider name
- Intended purpose
- Risk classification
- Conformity assessment procedure

### 4.2 Annex VIII: Information to be Submitted

#### 4.2.1 Section A: Information to be Submitted by Providers

Per Annex VIII, Section A, providers must submit:

1. **Provider Identification:**
   - Name
   - Address
   - Contact details (email, phone)

2. **Trade Name and Trademark:**
   - Trade name of the AI system
   - Trademark (if applicable)

3. **AI System Identification:**
   - Name of AI system
   - Type of AI system
   - Version number and release date

4. **Intended Purpose:**
   - Detailed description of intended purpose
   - Intended users and use environment
   - Excluded uses

5. **Risk Classification:**
   - Annex III category under which the system is classified as high-risk
   - Basis for high-risk classification

6. **Conformity Assessment:**
   - Type of conformity assessment procedure followed (Annex VI or VII)
   - Name of notified body (if applicable)
   - Certificate number (if applicable)
   - Certificate expiry date (if applicable)

7. **Instructions for Use:**
   - URL where instructions for use are publicly accessible

8. **Declaration of Conformity:**
   - Reference to the EU declaration of conformity
   - Date of declaration

9. **CE Marking:**
   - Confirmation of CE marking affixing
   - Date of CE marking

10. **Additional Information:**
    - Any other relevant information requested by the Commission

#### 4.2.2 Section B: Information to be Submitted by Deployers

Per Annex VIII, Section B, deployers must submit:

1. **Deployer Identification:**
   - Name
   - Address
   - Contact details (email, phone)
   - Type of deployer (public authority, etc.)

2. **Provider Identification:**
   - Name of provider
   - Contact details
   - Authorized representative (if applicable)

3. **AI System Identification:**
   - Name of AI system
   - Version number
   - Unique identification number (from provider registration)

4. **Use Case Description:**
   - Specific use case for which the AI system is deployed
   - Deployment location(s)
   - Start date of deployment

5. **Fundamental Rights Impact Assessment:**
   - Reference to the fundamental rights impact assessment
   - Summary of findings
   - Date of FRIA completion

6. **Human Oversight:**
   - Description of human oversight measures implemented

### 4.3 Update Timelines

| Change Type | Update Deadline | Article Reference |
|-------------|----------------|-------------------|
| **Substantial modification** (new conformity assessment required) | Before placing modified system on market | Article 49(5) |
| **Change to intended purpose** | Within 30 days of decision | Article 49(5) |
| **Change to provider contact information** | Within 30 days | Article 49(5) |
| **New version release** | Before placing new version on market | Article 49(5) |
| **Withdrawal from market** | Within 15 days of decision | Article 49(5) |
| **CE marking suspension or withdrawal** | Within 15 days | Article 49(5) |
| **Serious incident** | Incident reporting procedure (separate from registration update) | Article 73 |
| **Deployer use case change** | Within 30 days of deployment change | Article 49(5) |

---

## 5. STEP-BY-STEP PROCEDURE

### PHASE 1: REGISTRATION READINESS ASSESSMENT

#### Step 1.1: Verify Registration Requirement (Control REG-001)

**When:** Before market placement or putting into service (minimum 6 weeks before planned launch)

**Who:** AI Compliance Manager + AI Product Manager

**How:**

1. **Determine AI System Classification**
   - Confirm AI system is classified as high-risk per PROC-AI-CLS-001
   - Verify Annex III category assignment
   - Document classification rationale
   - Obtain classification approval

   **Decision Tree:**
   ```
   Is the AI system high-risk (per Annex III or product safety component)?
   ├─ YES → Registration REQUIRED → Continue to Step 1.2
   └─ NO → Is it limited-risk with transparency obligations only?
       ├─ YES → Registration NOT required → Exit procedure
       └─ NO → Minimal-risk → Registration NOT required → Exit procedure
   ```

2. **Identify Registration Party**

   **For Providers:**
   ```
   Are you the provider (developing/placing on market under your name)?
   ├─ YES → Provider registration required
   │   Are you located in the EU?
   │   ├─ YES → Direct provider registration
   │   └─ NO → Must appoint authorized representative
   │       → Authorized representative performs registration
   └─ NO → Are you importing/distributing?
       → Check if provider has registered
       → No additional registration needed (unless you become provider)
   ```

   **For Deployers:**
   ```
   Are you deploying (using) the AI system?
   ├─ YES → Are you a public authority/agency/body?
   │   ├─ YES → Deployer registration REQUIRED → Continue
   │   └─ NO → Is the AI system used for Article 6(2) purposes?
   │       ├─ YES → Deployer registration REQUIRED → Continue
   │       └─ NO → Deployer registration NOT required → Exit
   └─ NO → Not a deployer → Exit procedure
   ```

3. **Verify Pre-Requisites Completed**

   Before registration can begin, verify:

   | Pre-Requisite | Verification Method | Document Reference |
   |---------------|---------------------|-------------------|
   | ✓ Risk classification completed | Review classification assessment | PROC-AI-CLS-001 |
   | ✓ Risk management completed | Verify risk register and acceptance | PROC-AI-RM-001 |
   | ✓ Technical documentation prepared | Check documentation package | PROC-AI-DOC-001 |
   | ✓ Conformity assessment completed | Verify DoC and certificates | PROC-AI-CONF-001 |
   | ✓ CE marking affixed | Verify physical/digital marking | Quality records |
   | ✓ Instructions for use published | Verify publicly accessible URL | Product documentation |
   | ✓ Quality management system operational | Verify QMS certification | PROC-AI-QMS-001 |
   | ✓ Post-market monitoring planned | Verify PMM plan | PROC-AI-PMM-001 |

4. **Assess Registration Readiness**

   Complete Registration Readiness Checklist (CHK-AI-REG-001):
   - All pre-requisites met: ✓ / ✗
   - Registration data available: ✓ / ✗
   - EU Database access configured: ✓ / ✗
   - Target registration date: [Date]
   - Market placement date: [Date]
   - Buffer time adequate (min 2 weeks): ✓ / ✗

5. **Document Readiness Decision**
   - Complete Registration Readiness Assessment (REC-AI-REG-001)
   - Identify any gaps or blockers
   - Create action plan to address gaps
   - Obtain AI Compliance Manager sign-off

**Evidence Required:**
- Classification Assessment (from PROC-AI-CLS-001)
- Registration Readiness Checklist (CHK-AI-REG-001)
- Registration Readiness Assessment (REC-AI-REG-001)
- Pre-requisite verification records

**Timing:** 1 week (can be done in parallel with pre-requisites)

**Quality Check:**
- Registration requirement correctly determined
- Registration party identified
- All pre-requisites verified as complete
- Sufficient buffer time before market placement

---

#### Step 1.2: Establish EU Database Access (Control REG-002)

**When:** Immediately after registration requirement confirmed (minimum 4 weeks before submission)

**Who:** EU Database Coordinator + IT Security

**How:**

1. **Create EU Database Account**

   Access the EU Database for Stand-Alone High-Risk AI Systems:
   - URL: [To be published by European Commission]
   - Navigate to registration portal
   - Select account type: Provider / Authorized Representative / Deployer
   - Complete organization registration form

   **Organization Information Required:**
   - Legal entity name
   - Registration number (VAT, company registration)
   - Legal form (corporation, partnership, public body, etc.)
   - Country of establishment
   - Principal place of business address
   - Administrative contact details
   - Technical contact details

2. **Configure User Access**

   Set up user accounts and permissions:
   - Primary user: EU Database Coordinator (full access)
   - Secondary user: AI Compliance Manager (full access)
   - Read-only users: Product Managers, Legal team (view access)
   - Configure two-factor authentication
   - Set up email notifications for submission status
   - Document credentials in secure password manager

3. **Verify Authentication and Authorization**

   The EU Database may require:
   - eIDAS authentication (electronic identification)
   - Digital certificates
   - Organization verification documentation
   - Authorized signatory designation

   **Process:**
   - Submit organization verification documents
   - Designate authorized signatories (legal authority to bind organization)
   - Wait for Commission verification (typically 5-10 business days)
   - Receive account activation confirmation

4. **Test Database Functionality**

   Before live submission:
   - Log into EU Database
   - Navigate registration interface
   - Review data entry forms
   - Test file upload functionality (instructions for use URL verification)
   - Test search functionality
   - Download user manual and guidance documents
   - Complete practice registration in test environment (if available)

5. **Configure Integration (Optional)**

   For organizations with multiple AI systems:
   - Evaluate API availability for bulk submissions
   - Configure automated data transfer from internal systems
   - Set up synchronization with internal registration tracking database
   - Test API connectivity and data mapping

**Evidence Required:**
- EU Database account creation confirmation
- User access configuration records
- Authentication verification
- Test submission results
- Database access procedure document

**Timing:** 2-3 weeks (includes verification time)

**Quality Check:**
- Account successfully created and verified
- Multiple users configured for redundancy
- Authentication methods tested
- Submission interface understood

---

### PHASE 2: REGISTRATION DATA PREPARATION

#### Step 2.1: Collect Provider Information (Control REG-001)

**When:** After readiness assessment, before data compilation (3-4 weeks before submission)

**Who:** AI Compliance Manager + Legal/Regulatory Affairs

**How:**

1. **Collect Provider Identification Data**

   Complete Provider Information Form (FORM-AI-REG-001):

   **Legal Entity Information:**
   - Full legal name (as registered)
   - Trading name (if different)
   - Legal form (Ltd, GmbH, SA, Public Authority, etc.)
   - Company registration number
   - VAT/Tax identification number
   - Country of establishment
   - Date of establishment

   **Address Information:**
   - Registered office address
   - Principal place of business (if different)
   - Manufacturing location(s)
   - Research & development location(s)
   - Street address
   - City/Town
   - Postal/ZIP code
   - Country
   - Region/State/Province

   **Contact Information:**
   - General email address
   - Phone number (with country code)
   - Fax number (if applicable)
   - Website URL
   - Regulatory contact email
   - Technical support email

2. **Determine Authorized Representative (if applicable)**

   **For providers established OUTSIDE the EU:**

   An authorized representative MUST be appointed before registration.

   **Authorized Representative Requirements:**
   - Must be established in the EU
   - Must have written mandate from provider
   - Must be authorized to perform registration tasks
   - Must be identified in the registration

   **Information to Collect:**
   - Authorized representative legal name
   - Registration number
   - Address (must be in EU)
   - Contact details
   - Mandate reference number and date
   - Scope of authorization

3. **Collect Trade Name and Trademark**

   - Product trade name (commercial name)
   - Trademark (if registered)
   - Trademark registration number
   - Trademark jurisdiction (EU, national, international)
   - Logo/brand name (if different from legal entity)

4. **Verify Information Accuracy**

   - Cross-check with corporate registry
   - Verify VAT registration
   - Confirm contact details are current and monitored
   - Obtain Legal/Regulatory Affairs approval
   - Document verification date and method

5. **Prepare Confidentiality Request (if needed)**

   If any provider information requires confidentiality protection:
   - Identify specific information requiring protection
   - Prepare justification (commercial interests, IP protection)
   - Submit confidentiality request per Article 71(3)
   - Note: Provider name and contact details CANNOT be confidential

**Evidence Required:**
- Provider Information Form (FORM-AI-REG-001) - completed and verified
- Authorized representative mandate (if applicable)
- Corporate registry extract (recent, within 6 months)
- Verification records
- Legal approval

**Timing:** 1 week

**Quality Check:**
- All mandatory fields completed
- Information matches official records
- Contact details current and monitored
- Legal approval obtained

---

#### Step 2.2: Compile AI System Information (Control REG-001)

**When:** In parallel with provider information collection (3-4 weeks before submission)

**Who:** AI Product Manager + Technical Documentation Lead

**How:**

1. **Define AI System Identification**

   Complete AI System Information Form (FORM-AI-REG-002):

   **Basic Identification:**
   - AI system official name (must match technical documentation)
   - Product code/model number
   - Version number (e.g., 1.0.0, 2.3.1)
   - Release date (YYYY-MM-DD)
   - Type of AI system (see Annex I for AI techniques)
   - AI techniques used (machine learning, logic-based, statistical, etc.)

   **Example:**
   ```
   AI System Name: SmartHire Recruitment Assistant
   Product Code: SH-RA-2000
   Version: 2.1.0
   Release Date: 2025-03-15
   Type: Machine learning-based decision support system
   AI Techniques: Supervised learning (neural networks), natural language processing
   ```

2. **Document Intended Purpose**

   **Critical:** The intended purpose determines risk classification and conformity assessment requirements.

   Write a comprehensive intended purpose description including:

   **a) Primary Function:**
   - What does the AI system do?
   - What decisions or outputs does it produce?
   - What problem does it solve?

   **b) Intended Users:**
   - Who will operate the system?
   - What level of expertise is required?
   - What training is needed?

   **c) Use Environment:**
   - Where will the system be used (physical location, setting)?
   - What are the operating conditions?
   - What infrastructure is required?

   **d) Use Cases:**
   - What are the specific use cases?
   - What are the typical scenarios?
   - What is the expected usage volume?

   **e) Excluded Uses:**
   - What uses are explicitly prohibited?
   - What limitations exist?
   - What is out of scope?

   **Example Intended Purpose Statement:**
   ```
   SmartHire Recruitment Assistant is intended to support HR professionals in
   screening job applications for employment positions in private sector organizations.
   The system analyzes CVs and application forms to rank candidates based on
   qualifications, experience, and skills match with job requirements.

   Intended users are HR managers and recruiters with professional training in
   employment practices. The system is designed for use in office environments with
   standard IT infrastructure.

   The system provides ranking recommendations; final hiring decisions remain with
   human recruiters who must review all recommendations.

   EXCLUDED USES: Not intended for public sector recruitment, not intended for
   automated decision-making without human review, not intended for evaluating
   current employees for promotion/termination decisions.
   ```

3. **Specify Risk Classification Basis**

   Document why the AI system is high-risk:

   **Annex III Category:**
   - Cite specific Annex III category (e.g., "Annex III, point 4(a): Employment, workers management and access to self-employment")
   - Quote the exact text from Annex III

   **Classification Justification:**
   - Explain why the system falls within this category
   - Reference risk classification assessment
   - Note any related product safety legislation (if applicable)

   **Example:**
   ```
   HIGH-RISK CLASSIFICATION:

   Annex III Category: Point 4(a) - "AI systems intended to be used for recruitment
   or selection of natural persons, notably for advertising vacancies, screening or
   filtering applications, evaluating candidates in the course of interviews or tests"

   Justification: SmartHire Recruitment Assistant screens and filters job applications
   and ranks candidates, directly falling within the scope of Annex III, point 4(a).
   The system evaluates natural persons in the context of employment, which can
   significantly impact access to employment opportunities and livelihood.

   Risk Classification Assessment Reference: CLS-AI-SYS-042-2025
   ```

4. **Document AI System Type and Architecture (High-Level)**

   Provide high-level technical information:
   - Type of AI model (neural network, decision tree, ensemble, etc.)
   - Training approach (supervised, unsupervised, reinforcement learning)
   - Input data types (text, images, structured data, etc.)
   - Output types (classification, prediction, recommendation, generation)
   - Deployment model (cloud, on-premise, hybrid, edge)
   - Update frequency (static, periodic retraining, continuous learning)

   **Note:** Detailed technical documentation is NOT included in registration; only high-level descriptive information.

5. **Assign Internal Tracking Information**

   For internal tracking purposes:
   - Internal product ID
   - Business unit/division responsible
   - Product manager name and contact
   - Technical lead name and contact
   - Launch date/milestone
   - Market region(s)
   - Expected volume/deployment scale

**Evidence Required:**
- AI System Information Form (FORM-AI-REG-002) - completed
- Intended Purpose Statement - reviewed and approved
- Risk Classification Assessment - reference
- Product Manager approval
- Technical Documentation Lead verification

**Timing:** 1-2 weeks

**Quality Check:**
- AI system name matches technical documentation
- Version number accurate
- Intended purpose comprehensive and specific
- Risk classification correctly cited
- All mandatory fields completed

---

#### Step 2.3: Compile Conformity Assessment Information (Control REG-001)

**When:** After conformity assessment completed (2-3 weeks before submission)

**Who:** Quality Manager + AI Compliance Manager

**How:**

1. **Determine Conformity Assessment Procedure**

   Identify which procedure was followed:

   | Procedure | Description | When Used | Notified Body Required? |
   |-----------|-------------|-----------|------------------------|
   | **Annex VI** | Internal control based on internal control | Provider has ISO 42001 or equivalent QMS | ❌ NO |
   | **Annex VII** | Conformity assessment based on quality management system and assessment of technical documentation by notified body | Provider does NOT have approved QMS | ✅ YES |

   **Document:**
   - Conformity assessment procedure type: Annex VI / Annex VII
   - Procedure reference number
   - Date assessment completed
   - Assessment status: Passed / Ongoing / Failed

2. **Collect Declaration of Conformity Information**

   The EU Declaration of Conformity (DoC) is a mandatory document per Article 47.

   **DoC Information to Register:**
   - DoC reference number (unique identifier)
   - DoC date of issue (YYYY-MM-DD)
   - DoC version (if updated)
   - Signatory name and title
   - Signatory authority (legal authorization to bind organization)
   - Location of DoC (URL or document repository)

   **DoC Must Contain:**
   - Provider name and address
   - Statement that DoC issued under provider's sole responsibility
   - AI system name, type, version
   - Statement of conformity with EU AI Act requirements
   - References to relevant harmonized standards (if used)
   - Conformity assessment procedure followed
   - Notified body details (if Annex VII)
   - Date and place of issue
   - Authorized signature

3. **Collect Notified Body Information (if Annex VII used)**

   If conformity assessment involved a notified body:

   **Notified Body Details:**
   - Notified body name
   - Notified body identification number (4-digit number assigned by Commission)
   - Notified body address
   - Notified body contact details
   - Scope of notification (AI systems authorized to assess)

   **Certificate Information:**
   - EU type-examination certificate number
   - Certificate issue date (YYYY-MM-DD)
   - Certificate expiry date (YYYY-MM-DD)
   - Certificate status: Valid / Suspended / Withdrawn
   - Certificate scope (AI system(s) covered)

   **Example:**
   ```
   Notified Body: TÜV SÜD Product Service GmbH
   NB Number: 0123
   Address: Westendstrasse 199, 80686 Munich, Germany
   Contact: ai-certification@tuvsud.com

   Certificate Number: NB-0123-AI-2025-0042
   Issue Date: 2025-02-15
   Expiry Date: 2030-02-14 (5 years)
   Status: Valid
   Scope: SmartHire Recruitment Assistant v2.1.0
   ```

4. **Verify CE Marking**

   Confirm CE marking requirements fulfilled:

   **CE Marking Requirements:**
   - CE marking affixed to AI system (or documentation if digital product)
   - CE marking visible, legible, indelible
   - CE marking format complies with Regulation (EC) No 765/2008
   - CE marking followed by notified body number (if Annex VII)
   - Date of CE marking affixing

   **Documentation:**
   - CE marking application record
   - CE marking format verification
   - CE marking location (product, packaging, documentation, website)
   - CE marking date (YYYY-MM-DD)

5. **Collect Quality Management System Information**

   Document QMS certification:
   - QMS standard: ISO 42001, ISO 9001, or equivalent
   - Certification body name
   - Certificate number
   - Certificate issue date
   - Certificate expiry date
   - QMS scope (AI systems covered)

6. **Compile References**

   Prepare reference list:
   - Risk management system documentation reference
   - Technical documentation package reference
   - Test reports reference
   - Validation reports reference
   - Post-market monitoring plan reference

**Evidence Required:**
- Conformity Assessment Record (REC-AI-CONF-001)
- EU Declaration of Conformity (signed, dated)
- Notified Body Certificate (if Annex VII)
- CE Marking Application Record
- QMS Certificate
- Quality Manager approval

**Timing:** 1 week

**Quality Check:**
- Conformity assessment procedure correctly identified
- DoC complete and signed by authorized person
- Notified body information accurate (if applicable)
- CE marking properly affixed and documented
- All dates accurate

---

#### Step 2.4: Prepare Instructions for Use URL (Control REG-001)

**When:** Before data compilation finalized (2 weeks before submission)

**Who:** Technical Documentation Lead + AI Product Manager

**How:**

1. **Verify Instructions for Use Completeness**

   Per Article 13, instructions for use must include:

   **Mandatory Content:**
   - Identity and contact details of provider
   - Characteristics, capabilities, and limitations of performance
   - Changes to AI system and performance during lifecycle
   - Human oversight measures
   - Expected lifetime and necessary maintenance
   - Measures to interpret AI system outputs
   - Cybersecurity measures
   - Technical specifications (computational resources, compatibility, etc.)

   **Review Instructions:**
   - Complete Instructions for Use Review Checklist (CHK-AI-REG-002)
   - Verify all Article 13 requirements included
   - Check readability and clarity
   - Verify accuracy and currency
   - Obtain Product Manager approval

2. **Publish Instructions for Use**

   **Public Accessibility Requirement:**
   - Instructions must be publicly accessible via URL
   - No authentication or paywall permitted for accessing instructions
   - URL must be stable (not change)
   - Instructions must remain accessible for lifetime of AI system + 10 years

   **Publication Options:**
   - Provider website (recommended)
   - Product documentation portal
   - Technical support portal
   - EU Database documentation section (if available)

   **Example URLs:**
   ```
   https://www.company.com/products/smarthire/instructions-for-use
   https://docs.company.com/ai-systems/smarthire-v2.1-instructions
   https://support.company.com/ai/smarthire/user-manual
   ```

3. **Format and Structure Instructions**

   **Recommended Format:**
   - HTML (web page) - most accessible
   - PDF (downloadable) - as secondary option
   - Machine-readable format if possible
   - Available in all official EU languages of markets where system sold

   **Structure:**
   - Clear table of contents with anchor links
   - Searchable text
   - Diagrams and illustrations (if helpful)
   - Version number and date clearly displayed
   - Copyright and usage terms
   - Contact information for technical support

4. **Test URL Accessibility**

   Before registration:
   - Test URL in multiple browsers
   - Test from different geographic locations (VPN)
   - Test with screen readers (accessibility compliance)
   - Verify no authentication required
   - Verify correct version displayed
   - Check load time acceptable
   - Verify mobile-friendly

5. **Document URL for Registration**

   **Information to Register:**
   - Full URL (must be exact, including https://)
   - Date of publication (YYYY-MM-DD)
   - Version of instructions published
   - Language(s) available
   - Format (HTML, PDF, etc.)
   - File size (if downloadable)

   **Create Backup:**
   - Archive copy of instructions in document management system
   - Note: If URL becomes inaccessible, registration may be suspended

6. **Establish URL Maintenance Process**

   - Assign URL monitoring responsibility
   - Set up automated monitoring (uptime checks)
   - Configure alerts for URL accessibility issues
   - Document URL update procedure
   - Plan for URL changes (redirects, version updates)

**Evidence Required:**
- Instructions for Use (complete document)
- Instructions Review Checklist (CHK-AI-REG-002) - completed
- URL accessibility test results
- Publication confirmation
- URL monitoring setup confirmation

**Timing:** 1-2 weeks

**Quality Check:**
- Instructions complete per Article 13
- URL publicly accessible without authentication
- URL stable and monitored
- Instructions accurate and current
- Multiple language versions available (if required)

---

#### Step 2.5: Compile Complete Registration Data Package (Control REG-001)

**When:** After all information collected (1 week before submission)

**Who:** AI Compliance Manager + EU Database Coordinator

**How:**

1. **Assemble Provider Registration Data**

   Using Registration Data Compilation Template (TMP-AI-REG-001), compile:

   **Section 1: Provider Information**
   - [ ] Provider legal name
   - [ ] Provider address
   - [ ] Provider contact details (email, phone)
   - [ ] Provider website
   - [ ] Authorized representative (if applicable)

   **Section 2: Trade Name and Trademark**
   - [ ] Trade name of AI system
   - [ ] Trademark (if applicable)
   - [ ] Trademark registration details

   **Section 3: AI System Identification**
   - [ ] AI system name
   - [ ] AI system type
   - [ ] Version number
   - [ ] Release date

   **Section 4: Intended Purpose**
   - [ ] Detailed intended purpose description (200-1000 words)
   - [ ] Intended users description
   - [ ] Use environment description
   - [ ] Excluded uses

   **Section 5: Risk Classification**
   - [ ] Annex III category
   - [ ] Classification justification
   - [ ] Reference to classification assessment

   **Section 6: Conformity Assessment**
   - [ ] Conformity assessment procedure type (Annex VI or VII)
   - [ ] Notified body name and number (if Annex VII)
   - [ ] Certificate number (if Annex VII)
   - [ ] Certificate expiry date (if Annex VII)

   **Section 7: Instructions for Use**
   - [ ] URL where instructions publicly accessible
   - [ ] Date of publication
   - [ ] Language(s) available

   **Section 8: Declaration of Conformity**
   - [ ] DoC reference number
   - [ ] DoC date of issue
   - [ ] Signatory name and title

   **Section 9: CE Marking**
   - [ ] CE marking affixed: Yes/No
   - [ ] Date of CE marking
   - [ ] CE marking location

2. **Conduct Data Quality Review**

   Review each data element for:

   **Accuracy:**
   - Data matches source documents
   - No transcription errors
   - Dates in correct format (YYYY-MM-DD)
   - Contact details current

   **Completeness:**
   - All mandatory fields populated
   - No missing information
   - Optional fields completed where applicable

   **Consistency:**
   - Information consistent across all sections
   - AI system name consistent with technical documentation
   - Version numbers match across all documents
   - Dates logical and sequential

   **Compliance:**
   - All Annex VIII requirements covered
   - Information format matches EU Database requirements
   - Character limits observed (if any)
   - Special character handling correct

3. **Perform Cross-Reference Verification**

   Verify alignment with source documents:

   | Registration Data | Source Document | Verified ✓ |
   |-------------------|-----------------|------------|
   | Provider name/address | Corporate registry | ☐ |
   | AI system name/version | Technical documentation cover page | ☐ |
   | Intended purpose | Technical documentation Section 1 | ☐ |
   | Risk classification | Classification assessment | ☐ |
   | Conformity assessment procedure | DoC | ☐ |
   | Notified body details | NB certificate | ☐ |
   | Instructions URL | Publication record | ☐ |
   | DoC reference | DoC document | ☐ |
   | CE marking date | Quality records | ☐ |

4. **Obtain Internal Approvals**

   Approval workflow:

   **Step 1: Technical Review**
   - Technical Documentation Lead reviews technical data
   - Verifies AI system information accuracy
   - Signs technical approval

   **Step 2: Legal Review**
   - Legal/Regulatory Affairs reviews legal statements
   - Verifies DoC reference and signatory authority
   - Reviews confidentiality considerations
   - Signs legal approval

   **Step 3: Quality Review**
   - Quality Manager reviews conformity assessment data
   - Verifies CE marking and QMS information
   - Signs quality approval

   **Step 4: Final Approval**
   - AI Compliance Manager reviews complete package
   - Verifies all approvals obtained
   - Confirms readiness for submission
   - Signs final approval to submit

5. **Prepare Submission Documentation**

   Create submission package:
   - Registration Data Package (complete compilation)
   - Internal approval records
   - Supporting documents (references only, not submitted):
     - Technical documentation (maintain internally)
     - DoC (maintain internally, may be requested)
     - Certificates (maintain internally)
   - Registration submission checklist
   - Pre-submission self-assessment

**Evidence Required:**
- Registration Data Compilation Template (TMP-AI-REG-001) - completed
- Data Quality Review Record (REC-AI-REG-002)
- Cross-reference verification checklist
- Internal approval signatures (technical, legal, quality, final)
- Registration Data Package - final version

**Timing:** 1 week

**Quality Check:**
- All mandatory Annex VIII information included
- Data quality review completed with no issues
- All cross-references verified
- All internal approvals obtained
- Package ready for submission

---

### PHASE 3: EU DATABASE SUBMISSION

#### Step 3.1: Submit Registration to EU Database (Control REG-002)

**When:** After registration data package approved (minimum 1 week before market placement)

**Who:** EU Database Coordinator + AI Compliance Manager

**How:**

1. **Prepare for Submission**

   Pre-submission checklist:
   - [ ] EU Database account active and credentials confirmed
   - [ ] Registration data package finalized and approved
   - [ ] All source documents available for reference
   - [ ] Instructions for use URL tested and accessible
   - [ ] Submission time allocated (allow 2-4 hours)
   - [ ] Second reviewer available for verification

2. **Log into EU Database**

   Access steps:
   - Navigate to EU Database portal: [URL]
   - Log in with credentials
   - Verify authentication (2FA if required)
   - Navigate to "New Registration" section
   - Select registration type: Provider / Authorized Representative / Deployer

3. **Complete Registration Form**

   **Form Section 1: Provider Identification**

   Enter provider information:
   ```
   Legal Name: [Auto-populated from account registration]
   Trading Name: [If different]
   Address: [Street, City, Postal Code, Country]
   Contact Email: [Monitored email]
   Contact Phone: [Include country code]
   Website: [Optional but recommended]
   ```

   **Form Section 2: Authorized Representative (if applicable)**

   If non-EU provider:
   ```
   Authorized Representative Name: [Legal name]
   AR Registration Number: [EU business registration]
   AR Address: [EU address]
   AR Contact: [Email, phone]
   Mandate Reference: [Mandate document reference]
   ```

   **Form Section 3: AI System Identification**

   ```
   AI System Name: [Official name]
   Trade Name: [Commercial name if different]
   Trademark: [If applicable]
   Product Code: [Internal product code - optional]
   Version: [Semantic version, e.g., 2.1.0]
   Release Date: [YYYY-MM-DD]
   AI System Type: [Select from dropdown: ML-based, Logic-based, etc.]
   AI Techniques: [Describe techniques used]
   ```

   **Form Section 4: Intended Purpose**

   ```
   Intended Purpose: [Paste comprehensive intended purpose statement]
   - Primary function
   - Intended users
   - Use environment
   - Use cases
   - Excluded uses

   [Word count guidance: 200-1000 words]
   [Some databases may have character limits - adjust as needed]
   ```

   **Form Section 5: Risk Classification**

   ```
   High-Risk Classification: [Yes/No - Select "Yes"]
   Annex III Category: [Select from dropdown]
   - Employment, workers management, and access to self-employment
   - Education and vocational training
   - Access to and enjoyment of essential private services and public services and benefits
   - Law enforcement
   - Migration, asylum and border control management
   - Administration of justice and democratic processes
   - [Specific sub-category]

   Specific Annex III Reference: [e.g., "Point 4(a)"]
   Classification Justification: [Explanation why system falls in this category]
   ```

   **Form Section 6: Conformity Assessment**

   ```
   Conformity Assessment Procedure: [Select: Annex VI / Annex VII]

   [If Annex VI - Internal Control:]
   QMS Standard: [ISO 42001 / ISO 9001 / Other]
   QMS Certificate Number: [If certified]

   [If Annex VII - Notified Body:]
   Notified Body Name: [Official name]
   Notified Body Number: [4-digit number]
   Certificate Number: [NB certificate reference]
   Certificate Issue Date: [YYYY-MM-DD]
   Certificate Expiry Date: [YYYY-MM-DD]
   Certificate Status: [Valid / Suspended / Withdrawn]
   ```

   **Form Section 7: Instructions for Use**

   ```
   Instructions URL: [Full URL starting with https://]
   Publication Date: [YYYY-MM-DD]
   Languages Available: [Select all that apply]
   Document Format: [HTML / PDF / Other]

   [URL will be verified by database - ensure accessible]
   ```

   **Form Section 8: Declaration of Conformity**

   ```
   DoC Reference Number: [Unique identifier]
   DoC Issue Date: [YYYY-MM-DD]
   Signatory Name: [Authorized person]
   Signatory Title: [Position/authority]
   DoC Statement: "This AI system complies with all requirements of
                   Regulation (EU) 2024/1689 (EU AI Act)"
   ```

   **Form Section 9: CE Marking**

   ```
   CE Marking Affixed: [Yes / No]
   CE Marking Date: [YYYY-MM-DD]
   CE Marking Location: [Product / Documentation / Digital Interface]
   CE Marking Format: [Standard EU format per Regulation 765/2008]
   Notified Body Number (if applicable): [4-digit number after CE mark]
   ```

   **Form Section 10: Additional Information**

   ```
   [Optional fields - may include:]
   - Expected market volume
   - Target markets (Member States)
   - Deployment model (cloud, on-premise)
   - Update frequency
   - Support contact information
   - Related product information
   ```

4. **Review and Verify Data Entry**

   Before submission:
   - Review ALL fields for accuracy
   - Verify no typos or transcription errors
   - Check all dates in correct format
   - Verify URLs are complete and correct
   - Review character counts (if limits apply)
   - Have second reviewer verify critical fields:
     - AI system name and version
     - Intended purpose statement
     - Annex III classification
     - Notified body details (if applicable)
     - Instructions URL
     - DoC reference

5. **Save Draft (if available)**

   If database allows draft saving:
   - Save as draft
   - Log out and log back in
   - Verify draft saved correctly
   - Review draft one more time

6. **Submit Registration**

   Final submission:
   - Click "Submit Registration" button
   - Review submission summary page
   - Confirm all information correct
   - Accept terms and conditions (legal responsibility statement)
   - Click "Confirm Submission"
   - Wait for submission processing
   - **DO NOT close browser until confirmation received**

7. **Capture Submission Confirmation**

   Upon successful submission, capture:
   - **Unique Identification Number (SRN)** - CRITICAL
   - Submission date and time
   - Submission reference number
   - Confirmation message
   - Download or print confirmation page
   - Save confirmation email (if sent)

   **Example Confirmation:**
   ```
   REGISTRATION SUCCESSFUL

   Unique Identification Number: EU-AI-2025-042-0001234
   AI System Name: SmartHire Recruitment Assistant
   Version: 2.1.0
   Provider: Example Corp Ltd
   Submission Date: 2025-03-10 14:32:15 CET
   Status: Registered - Pending Verification

   Your registration has been submitted successfully. The unique identification
   number (SRN) must be displayed with the AI system and included in all
   documentation.
   ```

8. **Notify Internal Stakeholders**

   Immediately after submission:
   - Email AI Compliance Manager with confirmation
   - Email Product Manager with SRN
   - Email Quality Manager
   - Update internal registration tracking system
   - Update project management system
   - Schedule verification follow-up (Step 3.2)

**Evidence Required:**
- Registration form (filled)
- Pre-submission verification checklist
- Second reviewer sign-off
- Submission confirmation (screenshot/email)
- Unique Identification Number record
- Stakeholder notification emails

**Timing:** 2-4 hours for data entry and submission

**Quality Check:**
- All data entered accurately
- Second reviewer verified critical fields
- Submission successful
- Unique identification number obtained and recorded
- Confirmation saved

---

#### Step 3.2: Verify Registration Acceptance (Control REG-002)

**When:** Immediately after submission and ongoing until accepted (1-2 weeks monitoring period)

**Who:** EU Database Coordinator

**How:**

1. **Monitor Registration Status**

   The EU Database will process the registration submission and may undergo verification.

   **Possible Status Values:**
   - **Submitted:** Initial submission received, pending processing
   - **Under Review:** Commission reviewing submission for completeness
   - **Verification Required:** Additional information or clarification needed
   - **Registered:** Accepted and live in public database
   - **Rejected:** Submission rejected (with reasons)

   **Monitoring Actions:**
   - Log into EU Database daily
   - Check registration status
   - Check for messages or notifications
   - Respond to any information requests promptly
   - Set up email alerts (if available)

2. **Respond to Verification Requests**

   If Commission requests additional information:

   **Typical Requests:**
   - Clarification of intended purpose
   - Verification of instructions URL accessibility
   - Confirmation of Annex III classification
   - Verification of notified body certificate
   - Clarification of conformity assessment procedure

   **Response Process:**
   - Review request carefully
   - Gather requested information
   - Consult with relevant team members
   - Prepare clear response
   - Submit response via EU Database
   - Set response deadline reminder
   - Document all correspondence

   **Response Timeline:**
   - Respond within timeline specified by Commission (typically 5-10 business days)
   - Failure to respond may result in registration rejection

3. **Verify Public Visibility**

   Once status changes to "Registered":

   **Public Database Search:**
   - Access public search interface of EU Database
   - Search by provider name
   - Search by AI system name
   - Search by unique identification number
   - Verify registration appears in search results

   **Verify Public Information:**
   - Provider name and contact
   - AI system name and version
   - Intended purpose
   - Annex III classification
   - Instructions for use URL
   - Unique identification number

   **Check for Accuracy:**
   - Review all publicly displayed information
   - Verify no errors or typos
   - Verify information matches submission
   - Report any discrepancies to Commission

4. **Download Registration Certificate (if provided)**

   Some systems may provide a downloadable registration certificate:
   - Download certificate PDF
   - Verify information accuracy
   - Save to document management system
   - Distribute to relevant stakeholders
   - Include in technical documentation package

5. **Update Internal Systems**

   Record registration completion:
   - Update product lifecycle management system
   - Update compliance tracking system
   - Update quality management system
   - Update internal AI system register
   - Mark registration milestone complete
   - Record registration date
   - Record unique identification number
   - Associate SRN with product code

6. **Notify Stakeholders**

   Distribute registration confirmation:
   - Product Manager: Registration complete, SRN assigned
   - Quality Manager: Market placement approved
   - Sales/Marketing: Can proceed with market launch
   - Legal: Regulatory obligation fulfilled
   - Management: Milestone achieved

7. **Archive Registration Records**

   Maintain complete registration record:
   - Registration data package (submitted version)
   - Submission confirmation
   - All Commission correspondence
   - Registration certificate (if issued)
   - Public database verification screenshots
   - Verification completion record
   - Retention: 10 years after AI system withdrawn from market

**Evidence Required:**
- Registration status monitoring log
- Commission correspondence (if any)
- Public database search results (screenshots)
- Registration certificate (if provided)
- Internal system update records
- Stakeholder notification records
- Registration Verification Record (REC-AI-REG-003)

**Timing:** 1-2 weeks monitoring period

**Quality Check:**
- Registration status "Registered" achieved
- Public database search successful
- Information publicly visible and accurate
- Unique identification number confirmed
- Internal systems updated
- Stakeholders notified

---

#### Step 3.3: Implement Registration Identification Requirements (Control REG-002)

**When:** Immediately after registration accepted (before market placement)

**Who:** Product Manager + Technical Documentation Lead + Marketing

**How:**

1. **Display Unique Identification Number**

   Per Article 49, the unique identification number must be displayed:

   **Required Locations:**
   - **Product itself** (if physical) or **digital interface** (if software)
   - **Instructions for use**
   - **Technical documentation**
   - **Product packaging** (if applicable)
   - **Marketing materials** (recommended)
   - **Website/product page** (recommended)

   **Display Format:**
   ```
   EU AI Act Registration: EU-AI-2025-042-0001234

   or

   EU Database Registration No: EU-AI-2025-042-0001234
   ```

2. **Update Product Labeling**

   **For Software AI Systems:**
   - Add registration number to "About" page
   - Display in system information section
   - Include in login screen footer
   - Show in help documentation
   - Include in API documentation

   **For Physical AI Systems:**
   - Add to product label/nameplate
   - Include in user manual cover
   - Add to packaging

3. **Update Instructions for Use**

   Add registration information section:
   ```markdown
   ## EU AI Act Registration

   This AI system is registered in the EU Database for Stand-Alone High-Risk
   AI Systems in accordance with Regulation (EU) 2024/1689 (EU AI Act).

   Unique Identification Number: EU-AI-2025-042-0001234
   Registration Date: 2025-03-10
   Provider: Example Corp Ltd

   The registration information can be verified at: [EU Database URL]
   ```

4. **Update Technical Documentation**

   Add to technical documentation cover page:
   - Unique identification number
   - Registration date
   - Link to public database entry

5. **Update Marketing and Sales Materials**

   Include registration information:
   - Product website
   - Product brochures
   - Sales presentations
   - Datasheets
   - Proposal templates
   - Customer communications

   **Marketing Message Example:**
   ```
   SmartHire is fully compliant with the EU AI Act and registered in the
   EU Database for High-Risk AI Systems (Registration: EU-AI-2025-042-0001234).
   ```

6. **Verify Implementation**

   Check all locations:
   - [ ] Product/digital interface displays SRN
   - [ ] Instructions for use updated
   - [ ] Technical documentation updated
   - [ ] Packaging updated (if applicable)
   - [ ] Website updated
   - [ ] Marketing materials updated
   - [ ] Sales team informed

**Evidence Required:**
- Product screenshots showing SRN
- Updated instructions for use
- Updated technical documentation cover
- Marketing materials samples
- Implementation verification checklist
- Product Manager approval

**Timing:** 1 week

**Quality Check:**
- SRN displayed in all required locations
- SRN accurate and correctly formatted
- Implementation verified
- Marketing materials updated

---

### PHASE 4: REGISTRATION MAINTENANCE

#### Step 4.1: Monitor for Registration Update Triggers (Control REG-003)

**When:** Ongoing throughout AI system lifecycle

**Who:** AI Compliance Manager + Product Manager + EU Database Coordinator

**How:**

1. **Establish Update Trigger Monitoring**

   Create monitoring process for events requiring registration update:

   **Critical Triggers (Immediate Update Required):**
   - Substantial modification requiring new conformity assessment
   - Change to intended purpose
   - Change to provider legal name or address
   - New version release
   - CE marking suspension or withdrawal
   - Withdrawal from market decision
   - Notified body certificate change (renewal, suspension, withdrawal)

   **Standard Triggers (30-day Update Window):**
   - Change to contact details (email, phone)
   - Change to instructions for use URL
   - Change to authorized representative
   - Minor version updates
   - Deployment geography expansion

2. **Implement Change Management Integration**

   Integrate registration update checks into existing change management:

   **Product Change Process:**
   ```
   Product Change Request Initiated
   ↓
   Impact Assessment
   ↓
   Does change affect registration information? ← CHECK THIS
   ├─ YES → Determine update timeline
   │        → Assign registration update responsibility
   │        → Include in change plan
   │        → Proceed to Step 4.2
   └─ NO → Proceed with change (no registration impact)
   ```

   **Changes to Monitor:**
   - Product roadmap meetings → version releases
   - Engineering changes → substantial modifications
   - Quality management → conformity assessment changes
   - Corporate changes → legal entity, address changes
   - Marketing changes → intended purpose, branding changes

3. **Create Update Trigger Decision Matrix**

   | Change Type | Update Required? | Timeline | Procedure |
   |-------------|-----------------|----------|-----------|
   | **New version release** | YES | Before market placement | Step 4.2 |
   | **Substantial modification** | YES | Before market placement | Step 4.2 + new conformity assessment |
   | **Intended purpose change** | YES | Within 30 days | Step 4.2 |
   | **Provider name/address change** | YES | Within 30 days | Step 4.2 |
   | **Contact details change** | YES | Within 30 days | Step 4.2 |
   | **Instructions URL change** | YES | Within 30 days | Step 4.2 |
   | **Notified body certificate renewal** | YES | Within 15 days of new certificate | Step 4.2 |
   | **CE marking withdrawal** | YES | Within 15 days | Step 4.2 + escalate |
   | **Market withdrawal** | YES | Within 15 days | Step 4.2 + deregistration |
   | **Minor bug fix (no new version)** | NO | N/A | N/A |
   | **Internal process change** | NO | N/A | N/A |
   | **Documentation formatting** | NO | N/A | N/A |

4. **Assign Update Responsibilities**

   Designate clear ownership:
   - **Product Manager:** Notify Compliance Manager of product changes
   - **AI Compliance Manager:** Assess registration impact, initiate updates
   - **Legal:** Notify of corporate structure changes
   - **Quality Manager:** Notify of conformity assessment changes
   - **EU Database Coordinator:** Execute updates in database

5. **Document Monitoring Process**

   Create Registration Update Monitoring Procedure:
   - Update trigger definitions
   - Responsibility assignments
   - Notification workflows
   - Timeline requirements
   - Escalation procedures

**Evidence Required:**
- Registration Update Trigger Checklist (CHK-AI-REG-003)
- Change management integration documentation
- Update trigger decision matrix
- Responsibility assignments
- Monitoring procedure document

**Timing:** Ongoing (establish process once, execute continuously)

**Quality Check:**
- Update triggers clearly defined
- Monitoring integrated with change management
- Responsibilities assigned
- Process documented

---

#### Step 4.2: Update Registration Information (Control REG-003)

**When:** When update trigger identified (per timelines in Step 4.1)

**Who:** EU Database Coordinator + AI Compliance Manager

**How:**

1. **Assess Update Requirement**

   Determine scope of update:
   - What information changed?
   - What registration fields require update?
   - What is the update deadline?
   - Is new conformity assessment required?
   - Are there dependencies (e.g., update instructions first)?

   Complete Registration Update Assessment (FORM-AI-REG-003):
   - Change description
   - Affected registration fields
   - Update deadline
   - Responsible parties
   - Supporting documents needed

2. **Prepare Updated Information**

   Collect updated data:
   - Gather new information
   - Verify accuracy
   - Prepare supporting documents (if needed)
   - Obtain approvals (if significant change)
   - Document change rationale

   **Example Update Scenarios:**

   **Scenario A: New Version Release**
   ```
   Changed Fields:
   - Version number: 2.1.0 → 2.2.0
   - Release date: 2025-03-15 → 2025-06-20
   - Instructions URL: [Updated to v2.2 documentation]
   - DoC reference: [New DoC for v2.2]

   Supporting Documents:
   - New conformity assessment (if substantial modification)
   - New DoC
   - Updated instructions for use
   ```

   **Scenario B: Provider Address Change**
   ```
   Changed Fields:
   - Provider address: Old Address → New Address
   - Contact phone: Old Phone → New Phone

   Supporting Documents:
   - Corporate registry extract showing new address
   - Effective date of change
   ```

   **Scenario C: Intended Purpose Expansion**
   ```
   Changed Fields:
   - Intended purpose: [Expanded to include additional use cases]

   Supporting Documents:
   - Updated risk classification assessment
   - Updated conformity assessment
   - Updated instructions for use
   - Legal approval for expanded purpose
   ```

3. **Submit Update to EU Database**

   **Access Update Function:**
   - Log into EU Database
   - Navigate to "My Registrations"
   - Select AI system by unique identification number
   - Click "Update Registration"

   **Update Process:**
   - Select fields to update
   - Enter new information
   - Provide change justification (may be required)
   - Upload supporting documents (if requested)
   - Review update summary
   - Submit update

   **Update Confirmation:**
   - Capture update confirmation
   - Record update submission date
   - Note any verification requirements
   - Save confirmation email/screenshot

4. **Monitor Update Processing**

   Similar to initial registration:
   - Check update status daily
   - Respond to any Commission inquiries
   - Verify update reflected in public database
   - Confirm information accuracy

5. **Verify Public Database Updated**

   After update processed:
   - Search public database
   - Verify updated information displayed
   - Check update effective date
   - Verify no errors introduced
   - Take screenshot for records

6. **Update Internal Records**

   Maintain registration change log:
   - Record update date
   - Document fields changed
   - Note change reason
   - Reference supporting documents
   - Update internal registration tracking

7. **Notify Stakeholders**

   Inform relevant parties:
   - Product Manager: Update complete
   - Quality Manager: Registration current
   - Sales/Marketing: Update reflected
   - Anyone using registration information

**Evidence Required:**
- Registration Update Assessment (FORM-AI-REG-003)
- Updated information and supporting documents
- Update submission confirmation
- Public database verification (screenshot)
- Internal records update
- Stakeholder notifications
- Registration Update Record (REC-AI-REG-004)

**Timing:** Varies by update type (15-30 days typically)

**Quality Check:**
- Update submitted within required timeline
- Updated information accurate
- Public database reflects changes
- Internal records updated
- No errors introduced

---

#### Step 4.3: Maintain Registration Records (Control REG-003)

**When:** Ongoing throughout AI system lifecycle and for 10 years after market withdrawal

**Who:** AI Compliance Manager + EU Database Coordinator

**How:**

1. **Establish Registration Record Repository**

   Create dedicated storage:
   - Central document management system
   - Folder structure per AI system
   - Version control enabled
   - Access controls configured
   - Backup procedures established

   **Folder Structure Example:**
   ```
   /AI_Systems/
     /SmartHire_v2.1/
       /Registration/
         /Initial_Registration/
           - Registration_Data_Package_v1.0.pdf
           - Submission_Confirmation.pdf
           - Registration_Certificate.pdf
           - Correspondence/
         /Updates/
           - Update_2025-06-20_Version_2.2.0/
           - Update_2025-09-15_Address_Change/
         /Monitoring/
           - Update_Trigger_Assessments/
           - Periodic_Verification_Records/
         /Correspondence/
           - Commission_Inquiries/
           - Responses/
   ```

2. **Maintain Registration File Contents**

   For each AI system, maintain complete registration file:

   **Initial Registration Records:**
   - Registration readiness assessment
   - Registration data package (all versions)
   - Internal approval records
   - Submission confirmation
   - Unique identification number record
   - Registration certificate (if issued)
   - Public database verification records
   - Correspondence with Commission

   **Update Records:**
   - Update trigger assessments
   - Updated information packages
   - Update submission confirmations
   - Update verification records
   - Change rationale documentation

   **Supporting Documentation:**
   - Classification assessments
   - Conformity assessments
   - Declarations of conformity
   - Notified body certificates
   - Instructions for use (archived versions)
   - QMS certificates
   - Technical documentation references

   **Monitoring Records:**
   - Periodic verification records (Step 4.4)
   - Update trigger monitoring logs
   - Compliance audit records
   - Management review records

3. **Implement Version Control**

   For all registration documents:
   - Version numbering scheme (e.g., v1.0, v1.1, v2.0)
   - Version history log
   - Track all changes
   - Maintain all versions (do not delete old versions)
   - Clear naming conventions

4. **Configure Access Controls**

   Define who can access registration records:

   | Role | Access Level | Permissions |
   |------|-------------|-------------|
   | EU Database Coordinator | Full | Read, write, update, delete |
   | AI Compliance Manager | Full | Read, write, update |
   | Product Manager | Read | View only |
   | Quality Manager | Read | View only |
   | Legal/Regulatory | Read | View only |
   | Auditors | Read | View only (temporary) |
   | External Parties | None | No access |

5. **Establish Backup and Disaster Recovery**

   Protect registration records:
   - Automated daily backups
   - Off-site backup storage
   - Geographic redundancy
   - Backup testing (quarterly)
   - Recovery time objective: 24 hours
   - Recovery point objective: Previous day
   - Backup retention: 10 years minimum

6. **Create Registration Record Index**

   Maintain index/register of all AI system registrations:

   | AI System | Version | SRN | Registration Date | Last Update | Status | Record Location |
   |-----------|---------|-----|-------------------|-------------|--------|-----------------|
   | SmartHire | 2.1.0 | EU-AI-2025-042-0001234 | 2025-03-10 | 2025-03-10 | Active | /SmartHire_v2.1/ |
   | SmartHire | 2.2.0 | EU-AI-2025-042-0001234 | 2025-03-10 | 2025-06-20 | Active | /SmartHire_v2.1/ |
   | [System] | [Ver] | [SRN] | [Date] | [Date] | [Status] | [Path] |

7. **Retention and Disposal**

   **Retention Period:**
   - Active AI systems: Retain indefinitely during market availability
   - Withdrawn AI systems: Retain for 10 years after market withdrawal
   - Obsolete versions: Retain for 10 years after superseded

   **Disposal:**
   - After retention period expires, schedule for disposal review
   - Obtain Legal approval for disposal
   - Securely delete or archive per data retention policy
   - Document disposal date and method

**Evidence Required:**
- Registration record repository structure
- Access control configuration
- Backup configuration and test results
- Registration record index
- Version history logs
- Retention schedule

**Timing:** Ongoing (maintain continuously)

**Quality Check:**
- All registration records organized and accessible
- Version control operational
- Backups tested and verified
- Access controls appropriate
- Retention schedule defined

---

#### Step 4.4: Conduct Periodic Registration Verification (Control REG-003)

**When:** Quarterly and annually

**Who:** AI Compliance Manager + EU Database Coordinator

**How:**

1. **Schedule Periodic Verification**

   Establish verification calendar:
   - **Quarterly:** Quick verification (1-2 hours)
   - **Annually:** Comprehensive verification (1 day)
   - Calendar reminders set
   - Responsibility assigned
   - Verification checklist prepared

2. **Conduct Quarterly Verification**

   **Quarterly Verification Checklist (CHK-AI-REG-004):**

   **Public Database Verification:**
   - [ ] Log into public EU Database
   - [ ] Search for each registered AI system
   - [ ] Verify registration still active
   - [ ] Verify information accurate
   - [ ] Verify instructions URL still accessible
   - [ ] Screenshot database entry
   - [ ] Compare with internal records

   **Internal Records Verification:**
   - [ ] Review registration record repository
   - [ ] Verify all records present
   - [ ] Check for missing updates
   - [ ] Verify backup completion
   - [ ] Review access logs

   **Update Status:**
   - [ ] Review pending updates (if any)
   - [ ] Check update deadlines
   - [ ] Verify no missed triggers
   - [ ] Review upcoming product changes

   **Account Status:**
   - [ ] Verify EU Database account active
   - [ ] Check for notifications/messages
   - [ ] Verify contact details current
   - [ ] Test login credentials

3. **Conduct Annual Comprehensive Verification**

   **Annual Verification Process:**

   **Step 1: Registration Accuracy Review**
   - Compare ALL registration data with current reality
   - Verify provider information accurate
   - Verify AI system information current
   - Verify intended purpose unchanged (or updates submitted)
   - Verify risk classification still valid
   - Verify conformity assessment current
   - Verify instructions for use current and accessible
   - Verify DoC current
   - Verify CE marking maintained

   **Step 2: Update History Review**
   - Review all updates submitted in past year
   - Verify all updates processed
   - Verify no missed update triggers
   - Review update timeliness (compliance with deadlines)
   - Identify any delayed updates

   **Step 3: Product Lifecycle Review**
   - Review product roadmap for upcoming changes
   - Identify potential future update triggers
   - Verify no unreported product changes
   - Assess any scope creep in intended purpose
   - Review deployment patterns vs. registered use

   **Step 4: Record Completeness Review**
   - Audit registration record repository
   - Verify all required records present
   - Check for gaps or missing documents
   - Verify version control maintained
   - Test record retrieval

   **Step 5: Compliance Assessment**
   - Assess overall registration compliance
   - Identify any gaps or issues
   - Evaluate process effectiveness
   - Recommend improvements

4. **Document Verification Results**

   Complete Periodic Registration Verification Report (RPT-AI-REG-001):
   - Verification date
   - Verification scope
   - Systems verified
   - Findings summary
   - Issues identified
   - Corrective actions needed
   - Recommendations
   - Verifier signature

5. **Address Identified Issues**

   For any issues found:
   - Prioritize by severity
   - Assign corrective action owner
   - Set deadline for resolution
   - Track to completion
   - Verify correction effectiveness

6. **Report to Management**

   **Quarterly:** Brief summary to AI Compliance Manager
   - Registration status: Current / Issues
   - Number of active registrations
   - Updates submitted
   - Issues identified and resolved

   **Annually:** Comprehensive report to management
   - Present Annual Verification Report
   - Discuss compliance status
   - Highlight risks or concerns
   - Recommend process improvements
   - Request resources if needed

**Evidence Required:**
- Quarterly Verification Checklist (CHK-AI-REG-004) - completed
- Annual Verification Report (RPT-AI-REG-001)
- Public database screenshots
- Issue log and corrective actions
- Management reporting records

**Timing:**
- Quarterly verification: 2-3 hours
- Annual verification: 1 day

**Quality Check:**
- Verification completed on schedule
- All systems verified
- Issues identified and addressed
- Records complete
- Management informed

---

## 6. CONTROL MECHANISMS

### 6.1 Control Mapping

This procedure implements three primary controls from STD-AI-011 (Registration Standard):

#### 6.1.1 Control REG-001: Registration Data Preparation (Preventive, High)

**Control Objective:** Ensure complete and accurate registration data is prepared before submission to prevent rejection or delay.

**Control Activities:**
- Step 1.1: Verify registration requirement and pre-requisites
- Step 2.1: Collect provider information with verification
- Step 2.2: Compile AI system information with approvals
- Step 2.3: Compile conformity assessment information
- Step 2.4: Prepare and test instructions for use URL
- Step 2.5: Compile complete data package with quality review

**Control Owner:** AI Compliance Manager

**Control Frequency:** Per registration event

**Control Testing:**
- Review completed registration data packages
- Verify all Annex VIII requirements covered
- Check internal approval completeness
- Test instructions URL accessibility

**Key Control Indicators:**
- % of registrations with complete data on first submission: Target >95%
- Average data preparation time: Target <4 weeks
- % of submissions requiring rework: Target <10%

---

#### 6.1.2 Control REG-002: EU Database Submission (Preventive, Critical)

**Control Objective:** Ensure timely and accurate submission to EU Database before market placement.

**Control Activities:**
- Step 1.2: Establish EU Database access before needed
- Step 3.1: Submit registration with verification steps
- Step 3.2: Verify registration acceptance and public visibility
- Step 3.3: Implement registration identification requirements

**Control Owner:** EU Database Coordinator

**Control Frequency:** Per registration event

**Control Testing:**
- Review submission confirmations
- Verify unique identification numbers obtained
- Check public database visibility
- Verify submission timeliness (before market placement)

**Key Control Indicators:**
- % of registrations submitted before market placement: Target 100%
- Average time from submission to acceptance: Monitor (benchmark)
- % of registrations accepted without additional information requests: Target >90%
- % of systems displaying registration number: Target 100%

---

#### 6.1.3 Control REG-003: Registration Maintenance (Preventive, Medium)

**Control Objective:** Ensure registration information remains current and accurate throughout AI system lifecycle.

**Control Activities:**
- Step 4.1: Monitor for registration update triggers
- Step 4.2: Update registration information when changes occur
- Step 4.3: Maintain registration records
- Step 4.4: Conduct periodic registration verification

**Control Owner:** AI Compliance Manager

**Control Frequency:** Ongoing (continuous monitoring); Quarterly verification

**Control Testing:**
- Review update trigger monitoring logs
- Verify updates submitted within required timelines
- Check record completeness
- Review periodic verification reports

**Key Control Indicators:**
- % of required updates submitted within deadline: Target 100%
- Average update processing time: Monitor
- % of periodic verifications completed on schedule: Target 100%
- % of registrations verified as accurate: Target 100%

---

### 6.2 Control Effectiveness Monitoring

**Monthly Control Dashboard:**

| Control | Metric | Target | Actual | Status | Trend |
|---------|--------|--------|--------|--------|-------|
| REG-001 | Data preparation completeness | >95% | [Actual] | 🟢/🟡/🔴 | ↑/→/↓ |
| REG-001 | Submissions requiring rework | <10% | [Actual] | 🟢/🟡/🔴 | ↑/→/↓ |
| REG-002 | Registrations before market placement | 100% | [Actual] | 🟢/🟡/🔴 | ↑/→/↓ |
| REG-002 | Registrations accepted first time | >90% | [Actual] | 🟢/🟡/🔴 | ↑/→/↓ |
| REG-003 | Updates within deadline | 100% | [Actual] | 🟢/🟡/🔴 | ↑/→/↓ |
| REG-003 | Periodic verifications on time | 100% | [Actual] | 🟢/🟡/🔴 | ↑/→/↓ |

**Quarterly Control Testing:**
- Sample 3-5 registrations for detailed review
- Verify control activities performed
- Test control effectiveness
- Identify control deficiencies
- Recommend control improvements

---

### 6.3 Control Failure Response

**Control Failure Definition:**
- Registration submitted after market placement
- Registration data incomplete or inaccurate
- Required update not submitted within deadline
- Periodic verification not completed on schedule

**Response Process:**
1. **Immediate Actions:**
   - Stop market placement (if registration not complete)
   - Assess impact of failure
   - Implement immediate corrective action
   - Escalate to management

2. **Investigation:**
   - Determine root cause of control failure
   - Identify process gap or human error
   - Document findings

3. **Corrective Action:**
   - Address immediate compliance issue
   - Implement process improvement
   - Provide additional training if needed
   - Update procedure if necessary

4. **Monitoring:**
   - Verify corrective action effective
   - Monitor for recurrence
   - Report to management

---

## 7. KEY PERFORMANCE INDICATORS (KPIS) AND METRICS

### 7.1 Registration Process KPIs

#### 7.1.1 Timeliness KPIs

| KPI | Definition | Target | Measurement Frequency |
|-----|------------|--------|----------------------|
| **Registration Lead Time** | Time from project initiation to registration acceptance | <8 weeks | Per registration |
| **Data Preparation Time** | Time to compile complete registration data package | <4 weeks | Per registration |
| **Submission to Acceptance Time** | Time from submission to "Registered" status | <2 weeks | Per registration |
| **Pre-Market Compliance Rate** | % of registrations completed before market placement | 100% | Monthly |
| **Update Timeliness** | % of updates submitted within required deadline | 100% | Quarterly |

**Traffic Light Thresholds:**
- 🟢 Green: Target achieved
- 🟡 Yellow: Within 10% of target
- 🔴 Red: More than 10% below target

---

#### 7.1.2 Quality KPIs

| KPI | Definition | Target | Measurement Frequency |
|-----|------------|--------|----------------------|
| **First-Time Acceptance Rate** | % of submissions accepted without additional information requests | >90% | Quarterly |
| **Data Accuracy Rate** | % of registration data verified as accurate | 100% | Per registration |
| **Rework Rate** | % of registrations requiring rework before submission | <10% | Quarterly |
| **Public Database Accuracy** | % of registrations with accurate public information | 100% | Quarterly verification |
| **Instructions URL Uptime** | % of time instructions URL accessible | >99.5% | Continuous monitoring |

---

#### 7.1.3 Compliance KPIs

| KPI | Definition | Target | Measurement Frequency |
|-----|------------|--------|----------------------|
| **Active Registrations Current** | % of active AI systems with current registration | 100% | Monthly |
| **Update Compliance Rate** | % of required updates completed | 100% | Quarterly |
| **Periodic Verification Completion** | % of scheduled verifications completed on time | 100% | Quarterly |
| **Record Completeness** | % of registration records complete per standard | 100% | Annual audit |
| **Audit Findings (Registration)** | Number of non-conformities in registration audits | 0 | Per audit |

---

#### 7.1.4 Operational KPIs

| KPI | Definition | Target | Measurement Frequency |
|-----|------------|--------|----------------------|
| **Database Account Uptime** | % of time EU Database accessible | Monitor | Continuous |
| **Average Update Cycle Time** | Time from trigger identification to update acceptance | <30 days | Quarterly |
| **Registration Volume** | Number of active registrations maintained | Monitor | Monthly |
| **Stakeholder Satisfaction** | Product team satisfaction with registration process | >4/5 | Annual survey |
| **Process Efficiency** | Staff hours per registration | Monitor | Quarterly |

---

### 7.2 KPI Dashboard and Reporting

#### 7.2.1 Monthly Registration Dashboard

Present to AI Compliance Manager:

```
REGISTRATION COMPLIANCE DASHBOARD - [Month Year]

ACTIVE REGISTRATIONS: [X] systems | [Y] versions
NEW REGISTRATIONS THIS MONTH: [N]
UPDATES SUBMITTED THIS MONTH: [N]

TIMELINESS:
- Pre-Market Compliance: [XX]% ✓ Target: 100%
- Average Registration Lead Time: [X] weeks ✓ Target: <8 weeks

QUALITY:
- First-Time Acceptance: [XX]% ✓ Target: >90%
- Data Accuracy: [XX]% ✓ Target: 100%

COMPLIANCE:
- Current Registrations: [XX]% ✓ Target: 100%
- Update Compliance: [XX]% ✓ Target: 100%

ISSUES & ACTIONS:
- [Issue 1]: [Corrective action]
- [Issue 2]: [Corrective action]

UPCOMING:
- [Planned registrations]
- [Upcoming updates]
```

---

#### 7.2.2 Quarterly Registration Report

Present to AI Governance Committee:

**Registration Compliance Quarterly Report** (RPT-AI-REG-002)

**1. Executive Summary**
- Overall compliance status
- Key achievements
- Issues and resolutions
- Outlook

**2. Registration Activity**
- New registrations completed
- Updates submitted
- Registrations withdrawn
- Active registration count

**3. KPI Performance**
- Timeliness KPIs vs. targets
- Quality KPIs vs. targets
- Compliance KPIs vs. targets
- Trend analysis

**4. Compliance Assessment**
- Pre-requisite compliance
- Update timeline compliance
- Record completeness
- Periodic verification results

**5. Issues and Risks**
- Issues identified
- Root causes
- Corrective actions
- Risks to future compliance

**6. Process Improvements**
- Improvements implemented
- Lessons learned
- Recommendations

**7. Forward Look**
- Planned registrations (next quarter)
- Anticipated updates
- Resource needs

---

#### 7.2.3 Annual Registration Report

Present to Executive Management:

**Annual Registration Compliance Report** (RPT-AI-REG-003)

**1. Executive Summary**
- Year in review
- Compliance status
- Strategic recommendations

**2. Registration Portfolio**
- Total registrations managed
- Registration by product line
- Geographic distribution
- Growth trends

**3. Annual KPI Performance**
- All KPIs vs. targets
- Year-over-year comparison
- Benchmarking (if available)

**4. Compliance and Audit**
- Compliance assessment
- Audit findings
- Regulatory interactions
- Issues resolved

**5. Process Maturity**
- Process effectiveness
- Staff capability
- System and tools
- Continuous improvement

**6. Costs and Resources**
- Registration costs (staff, fees, tools)
- Resource utilization
- Efficiency improvements

**7. Strategic Outlook**
- Anticipated regulatory changes
- Portfolio projections
- Resource planning
- Capability development

---

### 7.3 Metrics Analysis and Action

**Metrics Review Frequency:**
- Daily: Instructions URL uptime monitoring
- Weekly: Registration project tracking
- Monthly: KPI dashboard review
- Quarterly: Comprehensive metrics analysis
- Annually: Strategic metrics review

**Analysis Triggers:**
- Any KPI below target (immediate review)
- Trend deterioration (investigate root cause)
- Benchmark comparison (identify improvement opportunities)
- Stakeholder feedback (assess satisfaction)

**Continuous Improvement:**
- Identify KPI improvement opportunities
- Benchmark against industry best practices
- Implement process enhancements
- Monitor improvement effectiveness

---

## 8. DOCUMENTATION REQUIREMENTS

### 8.1 Document Hierarchy

```
┌─────────────────────────────────────────────────────────────┐
│                    POLICY LEVEL (POL)                        │
│                 POL-AI-001: AI Governance Policy             │
└─────────────────────────┬───────────────────────────────────┘
                          │
          ┌───────────────┴───────────────┐
          │                               │
┌─────────▼──────────┐         ┌─────────▼──────────┐
│  STANDARD LEVEL    │         │  PROCEDURE LEVEL   │
│  STD-AI-011:       │────────▶│  PROC-AI-REG-001:  │
│  Registration      │         │  Registration      │
│  Standard          │         │  Procedure         │
└─────────┬──────────┘         └─────────┬──────────┘
          │                               │
          │                    ┌──────────┴──────────┐
          │                    │                     │
┌─────────▼──────────┐ ┌───────▼─────────┐ ┌───────▼─────────┐
│  TEMPLATE LEVEL    │ │   FORM LEVEL    │ │  RECORD LEVEL   │
│  TMP-AI-REG-001:   │ │ FORM-AI-REG-001:│ │ REC-AI-REG-001: │
│  Data Compilation  │ │ Provider Info   │ │ Readiness Assess│
│  Template          │ │ Form            │ │ Record          │
└────────────────────┘ └─────────────────┘ └─────────────────┘
```

---

### 8.2 Document Inventory

#### 8.2.1 Procedure Documents

| Document ID | Document Name | Description | Owner |
|-------------|---------------|-------------|-------|
| **PROC-AI-REG-001** | Registration Procedure | This procedure document | AI Compliance Manager |

---

#### 8.2.2 Templates

| Template ID | Template Name | Purpose | Format |
|-------------|---------------|---------|--------|
| **TMP-AI-REG-001** | Registration Data Compilation Template | Compile all registration data in structured format | Excel/Word |
| **TMP-AI-REG-002** | Registration Tracking Database | Track all registrations and updates | Excel/Database |
| **TMP-AI-REG-003** | Registration Update Template | Document registration updates | Word |

---

#### 8.2.3 Forms

| Form ID | Form Name | Purpose | Used In Step |
|---------|-----------|---------|--------------|
| **FORM-AI-REG-001** | Provider Information Form | Collect provider identification data | 2.1 |
| **FORM-AI-REG-002** | AI System Information Form | Compile AI system details | 2.2 |
| **FORM-AI-REG-003** | Registration Update Assessment Form | Assess update requirements | 4.2 |

---

#### 8.2.4 Checklists

| Checklist ID | Checklist Name | Purpose | Used In Step |
|--------------|----------------|---------|--------------|
| **CHK-AI-REG-001** | Registration Readiness Checklist | Verify readiness to proceed | 1.1 |
| **CHK-AI-REG-002** | Instructions for Use Review Checklist | Verify instructions completeness | 2.4 |
| **CHK-AI-REG-003** | Registration Update Trigger Checklist | Identify update triggers | 4.1 |
| **CHK-AI-REG-004** | Periodic Verification Checklist | Quarterly verification tasks | 4.4 |

---

#### 8.2.5 Records

| Record ID | Record Name | Purpose | Retention |
|-----------|-------------|---------|-----------|
| **REC-AI-REG-001** | Registration Readiness Assessment | Document readiness decision | 10 years |
| **REC-AI-REG-002** | Data Quality Review Record | Document data review results | 10 years |
| **REC-AI-REG-003** | Registration Verification Record | Document acceptance verification | 10 years |
| **REC-AI-REG-004** | Registration Update Record | Document updates submitted | 10 years |
| **REC-AI-REG-005** | Registration Correspondence Log | Track Commission communications | 10 years |

---

#### 8.2.6 Reports

| Report ID | Report Name | Purpose | Frequency |
|-----------|-------------|---------|-----------|
| **RPT-AI-REG-001** | Periodic Registration Verification Report | Annual verification results | Annual |
| **RPT-AI-REG-002** | Quarterly Registration Report | Quarterly compliance summary | Quarterly |
| **RPT-AI-REG-003** | Annual Registration Report | Annual strategic report | Annual |

---

### 8.3 Document Control Requirements

#### 8.3.1 Document Version Control

All registration-related documents must follow version control:

**Version Numbering:**
- Format: Major.Minor (e.g., 1.0, 1.1, 2.0)
- Major version: Significant changes requiring re-approval
- Minor version: Editorial or minor updates

**Version History:**
- Track all document versions
- Maintain change log
- Document change rationale
- Retain superseded versions

---

#### 8.3.2 Document Approval

| Document Type | Approval Required | Approver |
|---------------|------------------|----------|
| **Procedure** | Yes | AI Governance Committee |
| **Templates** | Yes | AI Compliance Manager |
| **Forms** | Yes | AI Compliance Manager |
| **Checklists** | Yes | AI Compliance Manager |
| **Records** | No (completed records approved per procedure) | Per procedure step |
| **Reports** | Yes | Per report distribution |

---

#### 8.3.3 Document Distribution

**Internal Distribution:**
- AI Compliance Manager (all documents)
- EU Database Coordinator (all documents)
- Product Managers (relevant forms and checklists)
- Quality Manager (relevant templates)
- Legal/Regulatory (procedure and reports)

**External Distribution:**
- None (all registration documents are internal)
- Exception: Commission may request specific records during audit

---

#### 8.3.4 Document Retention

**Retention Period:** 10 years from AI system market withdrawal

**Retention Requirements:**
- All registration records retained for full period
- Electronic and/or physical copies acceptable
- Accessible for regulatory inspection
- Backup copies maintained

**Disposal:**
- After retention period, schedule for disposal review
- Obtain Legal approval
- Securely destroy (shred physical, secure delete electronic)
- Document disposal

---

## 9. REVIEW AND AUDIT

### 9.1 Procedure Review

#### 9.1.1 Review Schedule

| Review Type | Frequency | Trigger | Owner |
|-------------|-----------|---------|-------|
| **Annual Review** | Annually | Calendar-based | AI Compliance Manager |
| **Regulatory Review** | As needed | Regulatory change | Legal/Regulatory Affairs |
| **Process Review** | Quarterly | Performance metrics | AI Compliance Manager |
| **Post-Implementation Review** | After each registration | Project completion | EU Database Coordinator |

---

#### 9.1.2 Annual Procedure Review

**Review Process:**

1. **Prepare for Review:**
   - Gather annual metrics and reports
   - Collect stakeholder feedback
   - Review audit findings
   - Identify regulatory changes
   - Compile improvement suggestions

2. **Conduct Review Meeting:**
   - Participants: AI Compliance Manager, EU Database Coordinator, Product Managers, Quality Manager, Legal
   - Review procedure effectiveness
   - Discuss challenges and issues
   - Identify improvement opportunities
   - Assess resource adequacy
   - Review template and form effectiveness

3. **Document Review Findings:**
   - Complete Procedure Review Report
   - Document strengths and weaknesses
   - List recommended changes
   - Prioritize improvements
   - Assign action owners

4. **Update Procedure:**
   - Implement approved changes
   - Update version number
   - Update change log
   - Obtain AI Governance Committee approval
   - Distribute updated procedure
   - Provide training on changes

---

#### 9.1.3 Regulatory Change Review

When EU AI Act guidance or requirements change:

1. **Monitor Regulatory Changes:**
   - Subscribe to Commission updates
   - Monitor EU Database announcements
   - Track Member State guidance
   - Review notified body bulletins

2. **Assess Impact:**
   - Determine impact on registration process
   - Identify required procedure changes
   - Assess impact on existing registrations
   - Determine timeline for implementation

3. **Update Procedure:**
   - Draft procedure updates
   - Obtain legal review
   - Obtain AI Governance Committee approval
   - Implement changes
   - Communicate to stakeholders

---

### 9.2 Internal Audit

#### 9.2.1 Annual Registration Audit

**Audit Objective:** Verify compliance with registration requirements and procedure effectiveness.

**Audit Scope:**
- All active registrations
- Sample of registration processes
- Record completeness
- Control effectiveness
- Compliance with timelines

**Audit Process:**

1. **Planning:**
   - Schedule audit (Q4 annually)
   - Define audit scope
   - Prepare audit checklist
   - Select samples
   - Notify auditees

2. **Fieldwork:**
   - Review registration records
   - Interview process owners
   - Test controls
   - Verify EU Database entries
   - Check public database visibility
   - Review update timeliness

3. **Reporting:**
   - Document findings
   - Classify by severity:
     - Critical: Major non-compliance
     - High: Significant gap
     - Medium: Minor gap
     - Low: Improvement opportunity
   - Issue audit report

4. **Corrective Action:**
   - Develop corrective action plans
   - Assign owners and deadlines
   - Track to completion
   - Verify effectiveness

**Audit Checklist (CHK-AI-REG-005):**

**Registration Completeness:**
- [ ] All high-risk AI systems registered before market placement
- [ ] All Annex VIII information included
- [ ] Unique identification numbers obtained
- [ ] Public database entries verified

**Data Accuracy:**
- [ ] Registration data matches source documents
- [ ] Provider information current
- [ ] AI system information accurate
- [ ] Instructions URL accessible

**Update Compliance:**
- [ ] All required updates identified
- [ ] Updates submitted within deadlines
- [ ] Update trigger monitoring operational
- [ ] Change management integration effective

**Record Maintenance:**
- [ ] Registration records complete
- [ ] Version control maintained
- [ ] Records accessible
- [ ] Backups tested

**Control Effectiveness:**
- [ ] REG-001 operating effectively
- [ ] REG-002 operating effectively
- [ ] REG-003 operating effectively

---

#### 9.2.2 Process Audit

**Quarterly Process Audit:**

Focus on process execution:
- Sample 2-3 recent registrations
- Walk through process steps
- Verify procedure followed
- Identify deviations
- Assess efficiency
- Recommend improvements

---

### 9.3 External Audit

#### 9.3.1 Competent Authority Inspection

Prepare for regulatory inspection:

**Inspection Readiness:**
- Maintain inspection-ready registration records
- Ensure easy retrieval of all documents
- Designate inspection coordinator
- Prepare briefing materials
- Train staff on inspection protocol

**During Inspection:**
- Cooperate fully with inspectors
- Provide requested documents promptly
- Explain registration process
- Demonstrate EU Database access
- Show public database entries
- Address inspector questions

**Post-Inspection:**
- Review inspection findings
- Develop response to findings
- Implement corrective actions
- Document all actions
- Follow up with authority

---

#### 9.3.2 Certification Body Audit

If pursuing ISO 42001 or similar certification:

**Registration Process Audit:**
- Demonstrate registration procedure
- Show registration records
- Demonstrate compliance
- Provide evidence of controls
- Show continuous improvement

---

### 9.4 Management Review

**AI Governance Committee Review:**

**Quarterly Review Agenda:**
- Registration activity summary
- KPI performance
- Compliance status
- Issues and corrective actions
- Process improvements
- Resource needs

**Annual Strategic Review:**
- Registration portfolio overview
- Compliance trends
- Process maturity assessment
- Strategic recommendations
- Resource planning
- Regulatory outlook

---

## 10. NON-COMPLIANCE HANDLING

### 10.1 Non-Compliance Categories

#### 10.1.1 Critical Non-Compliance

**Definition:** AI system placed on market without registration OR registration contains materially false information.

**Examples:**
- High-risk AI system launched without registration
- Registration submitted after market placement
- False conformity assessment claims
- Fake notified body certificate

**Response:**
- **IMMEDIATE:** Stop market placement/distribution
- **Within 24 hours:** Notify AI Governance Committee
- **Within 48 hours:** Notify competent authority (self-disclosure)
- **Within 1 week:** Submit corrective registration (if not registered) or correction (if false info)
- **Ongoing:** Implement corrective action plan

**Consequences:**
- Market suspension required
- Potential fines up to €35M or 7% of worldwide turnover
- Reputational damage
- Potential criminal liability

---

#### 10.1.2 High Non-Compliance

**Definition:** Required update not submitted within deadline OR registration information significantly inaccurate.

**Examples:**
- Substantial modification update >30 days late
- Provider address change not updated
- Instructions URL inaccessible >7 days
- Intended purpose change not reported

**Response:**
- **Within 24 hours:** Assess impact and urgency
- **Within 48 hours:** Notify AI Compliance Manager and Product Manager
- **Within 5 days:** Submit missing/corrected information
- **Within 2 weeks:** Implement process improvement

**Consequences:**
- Potential market surveillance action
- Possible fines up to €15M or 3% of worldwide turnover
- Enhanced monitoring required
- Process review mandatory

---

#### 10.1.3 Medium Non-Compliance

**Definition:** Minor information inaccuracy OR late but submitted update OR internal process deviation.

**Examples:**
- Contact detail update 5 days late (deadline was 30 days)
- Minor typo in public database entry
- Periodic verification completed 1 week late
- Internal approval process skipped

**Response:**
- **Within 1 week:** Correct information
- **Within 2 weeks:** Document corrective action
- **Within 1 month:** Implement process improvement

**Consequences:**
- Internal corrective action
- Process retraining
- Enhanced monitoring

---

#### 10.1.4 Low Non-Compliance

**Definition:** Documentation gap OR minor procedural deviation with no external impact.

**Examples:**
- Registration record missing approval signature (but approved)
- Checklist incomplete but steps performed
- Verification documentation insufficient
- Template not used but information complete

**Response:**
- **Within 2 weeks:** Complete documentation
- **Next review cycle:** Address systemic issues

**Consequences:**
- Documentation correction
- Process reminder

---

### 10.2 Non-Compliance Response Process

#### 10.2.1 Detection

Non-compliance may be detected by:
- Internal periodic verification (Step 4.4)
- Internal audit (Section 9.2)
- Self-identification by team member
- External audit or inspection
- Competent authority notification
- Third-party report

---

#### 10.2.2 Immediate Response

**Upon detection:**

1. **Assess Severity:**
   - Classify per categories above (Critical/High/Medium/Low)
   - Determine immediate impact
   - Identify affected AI systems

2. **Contain Impact:**
   - Stop further non-compliance (if ongoing)
   - Prevent market placement (if Critical)
   - Mitigate harm (if applicable)

3. **Notify:**
   - Immediate: AI Compliance Manager
   - Within 24h: AI Governance Committee (if Critical/High)
   - As required: Competent authority (if Critical)

---

#### 10.2.3 Investigation

**Root Cause Analysis:**

1. **Gather Facts:**
   - What happened?
   - When did it happen?
   - Who was involved?
   - What was supposed to happen?

2. **Identify Root Cause:**
   - Why did it happen?
   - Was it process failure, human error, or system issue?
   - Was it one-time or systemic?

3. **Determine Contributing Factors:**
   - Training inadequate?
   - Procedure unclear?
   - Resources insufficient?
   - Communication breakdown?

4. **Document Investigation:**
   - Complete Non-Compliance Investigation Report (RPT-AI-REG-004)
   - Include timeline of events
   - Document root cause
   - Identify contributing factors

---

#### 10.2.4 Corrective Action

**Develop Corrective Action Plan:**

1. **Immediate Correction:**
   - Fix the specific non-compliance instance
   - Submit missing registration
   - Correct inaccurate information
   - Complete missing documentation

2. **Systemic Correction:**
   - Address root cause
   - Update procedure (if unclear)
   - Provide training (if knowledge gap)
   - Improve controls (if control failure)
   - Allocate resources (if resource issue)

3. **Document Plan:**
   - Complete Corrective Action Plan (FORM-AI-REG-004)
   - Assign owners for each action
   - Set deadlines
   - Define success criteria

4. **Implement Plan:**
   - Execute corrective actions
   - Track progress
   - Monitor effectiveness
   - Report to management

---

#### 10.2.5 Verification

**Verify Effectiveness:**

1. **Verify Immediate Correction:**
   - Confirm registration submitted/corrected
   - Verify public database updated
   - Check documentation complete

2. **Verify Systemic Correction:**
   - Test improved process
   - Monitor for recurrence
   - Review subsequent registrations
   - Collect feedback

3. **Close Non-Compliance:**
   - Document verification results
   - Obtain AI Compliance Manager approval
   - Close non-compliance record
   - Report closure to stakeholders

---

### 10.3 Escalation Procedures

#### 10.3.1 Internal Escalation

| Severity | Escalate To | Timeline | Decision Authority |
|----------|-------------|----------|-------------------|
| **Critical** | AI Governance Committee Chair | Immediate (<4 hours) | Authority notification, market suspension |
| **High** | Head of Regulatory Affairs | Within 24 hours | Corrective action approval |
| **Medium** | AI Compliance Manager | Within 1 week | Process improvement |
| **Low** | Team Lead | Within 2 weeks | Documentation correction |

---

#### 10.3.2 External Escalation

**Competent Authority Notification:**

Required for Critical non-compliance:
- Draft notification letter
- Include non-compliance description
- Explain root cause
- Detail corrective action plan
- Provide timeline for correction
- Obtain Legal review
- Obtain Executive approval
- Submit to competent authority
- Retain all correspondence

**Format:**
```
[Organization Letterhead]
[Date]

[Competent Authority]
[Address]

Re: Self-Disclosure of EU AI Act Registration Non-Compliance

Dear [Authority],

We are writing to self-disclose a non-compliance with Article 49 of
Regulation (EU) 2024/1689 (EU AI Act) regarding registration of high-risk
AI systems.

[Description of non-compliance]
[Root cause explanation]
[Immediate corrective action taken]
[Systemic corrective action plan]
[Timeline for full correction]

We are committed to full compliance and welcome any guidance from the
competent authority.

Sincerely,
[Authorized Signatory]
```

---

### 10.4 Non-Compliance Tracking

**Non-Compliance Register:**

Maintain log of all non-compliances:

| NC ID | Date | AI System | Severity | Description | Root Cause | Corrective Action | Owner | Status | Close Date |
|-------|------|-----------|----------|-------------|------------|-------------------|-------|--------|------------|
| NC-REG-001 | [Date] | [System] | [Level] | [Description] | [Cause] | [Action] | [Name] | Open/Closed | [Date] |

**Quarterly Analysis:**
- Trend analysis
- Common root causes
- Process improvement opportunities
- Training needs identification

---

## 11. RELATED DOCUMENTS

### 11.1 Parent Policy and Standards

| Document ID | Document Name | Relationship |
|-------------|---------------|--------------|
| **POL-AI-001** | AI Governance Policy | Parent policy establishing governance framework |
| **STD-AI-011** | Registration Standard | Parent standard defining registration requirements |

---

### 11.2 Prerequisite Procedures

| Procedure ID | Procedure Name | Relationship |
|--------------|---------------|--------------|
| **PROC-AI-CLS-001** | AI System Classification Procedure | Must complete classification before registration |
| **PROC-AI-RM-001** | Risk Management Procedure | Risk management required before registration |
| **PROC-AI-DOC-001** | Technical Documentation Procedure | Technical documentation required for registration |
| **PROC-AI-CONF-001** | Conformity Assessment Procedure | Conformity assessment required before registration |
| **PROC-AI-QMS-001** | Quality Management System Procedure | QMS required for Annex VI procedure |

---

### 11.3 Related Procedures

| Procedure ID | Procedure Name | Relationship |
|--------------|---------------|--------------|
| **PROC-AI-PMM-001** | Post-Market Monitoring Procedure | Ongoing monitoring after registration |
| **PROC-AI-INC-001** | Incident Management Procedure | Incidents may trigger registration updates |
| **PROC-AI-CHG-001** | Change Management Procedure | Changes may trigger registration updates |
| **PROC-AI-VENDOR-001** | Vendor Management Procedure | Vendor AI systems may require deployer registration |

---

### 11.4 Supporting Documents

| Document Type | Document ID | Document Name |
|---------------|-------------|---------------|
| **Guidance** | GUID-AI-REG-001 | EU Database User Guide |
| **Guidance** | GUID-AI-REG-002 | Registration Quick Start Guide |
| **Guidance** | GUID-AI-REG-003 | Intended Purpose Writing Guide |
| **Training** | TRAIN-AI-REG-001 | Registration Process Training Manual |
| **Training** | TRAIN-AI-REG-002 | EU Database Navigation Training |

---

### 11.5 External References

| Reference | Description | Source |
|-----------|-------------|--------|
| **Regulation (EU) 2024/1689** | EU AI Act (full text) | EUR-Lex |
| **EU AI Act Article 49** | Registration obligations | EU AI Act |
| **EU AI Act Article 71** | EU Database requirements | EU AI Act |
| **EU AI Act Annex VIII** | Information to be submitted upon registration | EU AI Act |
| **EU Database** | Official EU Database for Stand-Alone High-Risk AI Systems | [URL to be published] |
| **Commission Guidelines** | Registration guidance documents | European Commission |
| **Member State Guidance** | National interpretations and guidance | National authorities |

---

## 12. APPENDICES

### APPENDIX A: Registration Data Checklist (Annex VIII Compliance)

**Purpose:** Ensure all mandatory information per Annex VIII is collected before submission.

**Instructions:** Complete this checklist for each registration. Check each box when information is collected, verified, and approved.

---

#### SECTION A: PROVIDER REGISTRATION CHECKLIST

**For use by Providers and Authorized Representatives**

**A.1 PROVIDER IDENTIFICATION**

- [ ] **Provider Legal Name**
  - Source: Corporate registry
  - Verified: ☐ Yes | Date: _______ | By: _______

- [ ] **Provider Address**
  - Registered office address: ______________________
  - Principal place of business (if different): ______________________
  - Verified: ☐ Yes | Date: _______ | By: _______

- [ ] **Provider Contact Details**
  - Email: ______________________
  - Phone: ______________________
  - Website: ______________________
  - Verified: ☐ Yes | Date: _______ | By: _______

- [ ] **Authorized Representative (if applicable)**
  - AR Name: ______________________
  - AR Address (EU): ______________________
  - AR Contact: ______________________
  - Mandate Reference: ______________________
  - Verified: ☐ Yes | Date: _______ | By: _______

---

**A.2 TRADE NAME AND TRADEMARK**

- [ ] **Trade Name**
  - Trade name: ______________________
  - Verified matches marketing materials: ☐ Yes

- [ ] **Trademark (if applicable)**
  - Trademark: ______________________
  - Registration number: ______________________
  - Jurisdiction: ______________________

---

**A.3 AI SYSTEM IDENTIFICATION**

- [ ] **AI System Name**
  - Official name: ______________________
  - Matches technical documentation: ☐ Yes

- [ ] **AI System Type**
  - Type: ______________________
  - AI techniques used: ______________________

- [ ] **Version Number**
  - Version: ______________________
  - Format verified (semantic versioning): ☐ Yes

- [ ] **Release Date**
  - Date: _______ (YYYY-MM-DD format)
  - Verified: ☐ Yes

---

**A.4 INTENDED PURPOSE**

- [ ] **Intended Purpose Statement**
  - Word count: _______ (target 200-1000 words)
  - Includes:
    - [ ] Primary function description
    - [ ] Intended users definition
    - [ ] Use environment description
    - [ ] Specific use cases
    - [ ] Excluded uses
  - Approved by Product Manager: ☐ Yes | Date: _______
  - Approved by Legal: ☐ Yes | Date: _______

---

**A.5 RISK CLASSIFICATION**

- [ ] **High-Risk Classification**
  - Annex III category: ______________________
  - Specific reference (e.g., "Point 4(a)"): ______________________
  - Classification justification documented: ☐ Yes
  - Classification assessment reference: ______________________
  - Approved by AI Compliance Manager: ☐ Yes | Date: _______

---

**A.6 CONFORMITY ASSESSMENT**

- [ ] **Conformity Assessment Procedure**
  - Procedure type: ☐ Annex VI | ☐ Annex VII
  - Assessment completed: ☐ Yes | Date: _______
  - Assessment reference: ______________________

- [ ] **Notified Body Information (if Annex VII)**
  - Notified body name: ______________________
  - Notified body number (4-digit): ______________________
  - Notified body address: ______________________
  - Notified body contact: ______________________

- [ ] **Certificate Information (if Annex VII)**
  - Certificate number: ______________________
  - Issue date: _______ (YYYY-MM-DD)
  - Expiry date: _______ (YYYY-MM-DD)
  - Certificate status: ☐ Valid
  - Certificate scope verified: ☐ Yes

- [ ] **Quality Management System (if Annex VI)**
  - QMS standard: ______________________
  - Certification body: ______________________
  - Certificate number: ______________________
  - Certificate expiry: _______

---

**A.7 INSTRUCTIONS FOR USE**

- [ ] **Instructions URL**
  - URL: ______________________
  - URL format verified (https://): ☐ Yes
  - URL accessibility tested: ☐ Yes | Date: _______
  - No authentication required: ☐ Confirmed
  - Instructions complete per Article 13: ☐ Yes (CHK-AI-REG-002 completed)
  - Publication date: _______ (YYYY-MM-DD)
  - Language(s) available: ______________________

---

**A.8 DECLARATION OF CONFORMITY**

- [ ] **Declaration of Conformity**
  - DoC reference number: ______________________
  - DoC issue date: _______ (YYYY-MM-DD)
  - Signatory name: ______________________
  - Signatory title: ______________________
  - Signatory authority verified: ☐ Yes
  - DoC complete per Article 47: ☐ Yes

---

**A.9 CE MARKING**

- [ ] **CE Marking**
  - CE marking affixed: ☐ Yes
  - CE marking date: _______ (YYYY-MM-DD)
  - CE marking location: ______________________
  - CE marking format verified (Reg 765/2008): ☐ Yes
  - Notified body number included (if Annex VII): ☐ Yes / ☐ N/A

---

**QUALITY REVIEW**

- [ ] All Section A items complete
- [ ] All information verified against source documents
- [ ] All approvals obtained
- [ ] Ready for submission

**Reviewed By:** ______________________
**Title:** ______________________
**Date:** ______________________
**Signature:** ______________________

---

#### SECTION B: DEPLOYER REGISTRATION CHECKLIST

**For use by Deployers (public authorities or Article 6(2) use cases)**

**B.1 DEPLOYER IDENTIFICATION**

- [ ] **Deployer Legal Name**
  - Name: ______________________
  - Verified: ☐ Yes | Date: _______ | By: _______

- [ ] **Deployer Type**
  - Type: ☐ Public authority | ☐ Public agency | ☐ Public body
  - ☐ Article 6(2) deployer (law enforcement, migration, justice, etc.)

- [ ] **Deployer Address**
  - Address: ______________________
  - Verified: ☐ Yes | Date: _______ | By: _______

- [ ] **Deployer Contact Details**
  - Email: ______________________
  - Phone: ______________________
  - Verified: ☐ Yes | Date: _______ | By: _______

---

**B.2 PROVIDER IDENTIFICATION**

- [ ] **Provider Name**
  - Provider: ______________________
  - Contact: ______________________

- [ ] **Authorized Representative (if applicable)**
  - AR Name: ______________________
  - AR Contact: ______________________

---

**B.3 AI SYSTEM IDENTIFICATION**

- [ ] **AI System Name**
  - Name: ______________________
  - Matches provider registration: ☐ Yes

- [ ] **AI System Version**
  - Version: ______________________

- [ ] **Unique Identification Number**
  - SRN: ______________________
  - Verified in EU Database: ☐ Yes | Date: _______

---

**B.4 USE CASE DESCRIPTION**

- [ ] **Specific Use Case**
  - Detailed description of deployer's specific use case (200-500 words):
    ______________________
  - Approved by Deployer Management: ☐ Yes | Date: _______

- [ ] **Deployment Location(s)**
  - Location(s): ______________________
  - Geographic scope: ______________________

- [ ] **Deployment Start Date**
  - Start date: _______ (YYYY-MM-DD)

---

**B.5 FUNDAMENTAL RIGHTS IMPACT ASSESSMENT**

- [ ] **FRIA Completed**
  - FRIA reference number: ______________________
  - FRIA completion date: _______ (YYYY-MM-DD)
  - FRIA approved: ☐ Yes | Date: _______

- [ ] **FRIA Summary**
  - Summary of findings (key rights impacts identified):
    ______________________
  - Mitigation measures implemented:
    ______________________

---

**B.6 HUMAN OVERSIGHT**

- [ ] **Human Oversight Measures**
  - Description of human oversight implemented:
    ______________________
  - Oversight personnel trained: ☐ Yes | Date: _______

---

**QUALITY REVIEW**

- [ ] All Section B items complete
- [ ] All information verified against source documents
- [ ] All approvals obtained
- [ ] Ready for submission

**Reviewed By:** ______________________
**Title:** ______________________
**Date:** ______________________
**Signature:** ______________________

---

### APPENDIX B: EU Database Interface Guide

**Purpose:** Step-by-step guide for navigating and using the EU Database for Stand-Alone High-Risk AI Systems.

**Note:** This guide is based on anticipated database functionality. Update when official database is launched.

---

#### B.1 Accessing the EU Database

**Public Database (Read-Only):**
- URL: [To be published by European Commission]
- No login required for public search
- Access to registered AI system information
- Search and filter capabilities

**Provider/Deployer Portal (Registration Functions):**
- URL: [To be published by European Commission]
- Login required (eIDAS authentication or similar)
- Account registration required before first use
- Functions: Submit registrations, update information, view submissions

---

#### B.2 Creating an Account

**Step-by-Step:**

1. **Navigate to Provider/Deployer Portal**
   - Click "Register Organization" or "Create Account"

2. **Select Organization Type**
   - Options: Provider / Authorized Representative / Deployer
   - Select appropriate type

3. **Complete Organization Profile**
   - Legal entity name
   - Registration/VAT number
   - Country of establishment
   - Business address
   - Contact details

4. **Verify Organization**
   - Upload verification documents (company registration, VAT certificate)
   - Designate authorized signatories
   - Submit for verification

5. **Wait for Activation**
   - Commission will verify organization (5-10 business days)
   - Receive activation email
   - Log in with credentials

6. **Configure Users**
   - Add additional user accounts
   - Set permissions (admin, editor, viewer)
   - Configure two-factor authentication

---

#### B.3 Submitting a New Registration

**Step-by-Step:**

1. **Login and Navigate**
   - Log into Provider/Deployer Portal
   - Select "New Registration"
   - Choose registration type: Provider or Deployer

2. **Complete Registration Form Sections**

   **Section 1: Organization Information**
   - Pre-populated from account profile
   - Verify accuracy
   - Update if needed

   **Section 2: AI System Identification**
   - Enter AI system name
   - Enter version number
   - Enter release date
   - Select AI system type from dropdown

   **Section 3: Intended Purpose**
   - Paste intended purpose statement
   - Character limit: [varies by database - typically 2000-5000 characters]
   - Use clear, plain language

   **Section 4: Risk Classification**
   - Select Annex III category from dropdown
   - Enter specific reference (e.g., "Point 4(a)")
   - Provide justification (500 characters)

   **Section 5: Conformity Assessment**
   - Select procedure type: Annex VI or Annex VII
   - If Annex VII:
     - Enter notified body number
     - Enter certificate number
     - Enter certificate dates
   - If Annex VI:
     - Confirm QMS in place

   **Section 6: Instructions for Use**
   - Enter instructions URL
   - System will validate URL accessibility
   - Fix any URL issues before proceeding

   **Section 7: Declaration of Conformity**
   - Enter DoC reference number
   - Enter DoC issue date
   - Enter signatory details

   **Section 8: CE Marking**
   - Confirm CE marking affixed
   - Enter CE marking date

3. **Review and Validate**
   - Click "Review Submission"
   - System will validate all required fields completed
   - System will check URL accessibility
   - Fix any validation errors

4. **Save Draft (Optional)**
   - Click "Save as Draft" to save progress
   - Can return later to complete

5. **Submit**
   - Review all information carefully
   - Check "I confirm this information is accurate" box
   - Accept terms and conditions
   - Click "Submit Registration"

6. **Confirmation**
   - System generates unique identification number (SRN)
   - Display confirmation page with SRN
   - Download/print confirmation
   - Confirmation email sent to registered email

---

#### B.4 Monitoring Registration Status

**Status Values:**

- **Draft:** Saved but not submitted
- **Submitted:** Submitted, pending Commission review
- **Under Review:** Commission reviewing for completeness
- **Information Requested:** Additional information needed
- **Registered:** Accepted and live in public database
- **Rejected:** Submission rejected (with reasons)

**How to Check Status:**

1. Log into Provider/Deployer Portal
2. Navigate to "My Registrations"
3. View status column
4. Click on registration for details
5. Check for messages or information requests

---

#### B.5 Responding to Information Requests

**If status shows "Information Requested":**

1. Click on registration
2. Read Commission's request carefully
3. Gather requested information
4. Click "Respond to Request"
5. Enter response or updated information
6. Upload documents if requested
7. Submit response
8. Wait for Commission review

---

#### B.6 Updating a Registration

**Step-by-Step:**

1. **Access Registration**
   - Log into Provider/Deployer Portal
   - Navigate to "My Registrations"
   - Select AI system to update
   - Click "Update Registration"

2. **Select Fields to Update**
   - Database may show all fields or only allow specific updates
   - Select checkbox next to fields requiring update
   - Enter new information

3. **Provide Change Justification**
   - Explain reason for change (may be required)
   - Reference date change occurred

4. **Upload Supporting Documents (if requested)**
   - New certificate
   - Updated documentation
   - Other evidence

5. **Submit Update**
   - Review changes
   - Click "Submit Update"
   - Receive update confirmation

6. **Monitor Update Processing**
   - Check status of update
   - Verify update reflected in public database

---

#### B.7 Searching the Public Database

**Public Database Search:**

1. **Navigate to Public Database**
   - URL: [Public database URL]
   - No login required

2. **Search Options**
   - **Simple Search:** Enter keyword (AI system name, provider name, etc.)
   - **Advanced Search:** Use filters:
     - Provider name
     - AI system name
     - Annex III category
     - Country
     - Conformity assessment type
     - Date range

3. **View Results**
   - Results displayed in table
   - Columns: AI System Name, Provider, Category, Registration Date, SRN

4. **View Details**
   - Click on AI system name
   - View full registration details
   - View intended purpose
   - View instructions for use URL
   - View conformity assessment information

5. **Download/Export**
   - Download individual registration (PDF)
   - Export search results (CSV/Excel)
   - Bulk download (if available)

---

#### B.8 Troubleshooting Common Issues

| Issue | Solution |
|-------|----------|
| **Cannot log in** | Reset password; verify account activated; check 2FA setup |
| **Instructions URL validation fails** | Test URL in browser; ensure no authentication required; check for typos; verify HTTPS |
| **Submission validation errors** | Review error messages; check required fields; verify data format (dates, etc.) |
| **Account verification delayed** | Contact Commission support; verify documents submitted correctly |
| **Cannot find registration in public database** | Check status is "Registered"; wait for processing (may take 24-48 hours); search by SRN |
| **Update not reflected** | Check update status; verify update accepted; allow processing time |

---

#### B.9 Database Support

**Technical Support:**
- Email: [EU Database support email - to be published]
- Phone: [EU Database support phone - to be published]
- Help documentation: [URL to be published]
- FAQ: [URL to be published]

---

### APPENDIX C: Registration Update Triggers

**Purpose:** Comprehensive list of events that trigger registration update requirements.

**Instructions:** Review this list during change management to identify registration impacts.

---

#### C.1 Critical Update Triggers (15-Day Deadline)

| Trigger Event | Information to Update | Responsible Party | Timeline |
|---------------|----------------------|-------------------|----------|
| **Market Withdrawal Decision** | Registration status, withdrawal date, reason | AI Compliance Manager | Within 15 days of decision |
| **CE Marking Suspension** | CE marking status, suspension date, reason | Quality Manager | Within 15 days |
| **CE Marking Withdrawal** | CE marking status, withdrawal date, reason | Quality Manager | Within 15 days |
| **Notified Body Certificate Suspension** | Certificate status, suspension details | Quality Manager | Within 15 days |
| **Notified Body Certificate Withdrawal** | Certificate status, withdrawal details | Quality Manager | Within 15 days |

---

#### C.2 Standard Update Triggers (30-Day Deadline)

| Trigger Event | Information to Update | Responsible Party | Timeline |
|---------------|----------------------|-------------------|----------|
| **Provider Name Change** | Provider legal name, supporting documentation | Legal/Regulatory | Within 30 days |
| **Provider Address Change** | Provider address (registered office and/or principal place of business) | Legal/Regulatory | Within 30 days |
| **Provider Contact Details Change** | Email, phone, website URL | AI Compliance Manager | Within 30 days |
| **Authorized Representative Change** | AR name, address, contact details, mandate reference | Legal/Regulatory | Within 30 days |
| **Intended Purpose Change** | Intended purpose statement, use cases, excluded uses | Product Manager | Within 30 days |
| **Intended Purpose Expansion** | Expanded intended purpose, additional use cases | Product Manager | Within 30 days |
| **Trade Name Change** | Trade name, branding information | Marketing Manager | Within 30 days |
| **Instructions for Use URL Change** | New URL, verification of accessibility | Technical Doc Lead | Within 30 days |
| **Deployer Use Case Change** (deployers only) | Updated use case description, deployment location | Deployer Coordinator | Within 30 days |

---

#### C.3 Pre-Release Update Triggers (Before Market Placement)

| Trigger Event | Information to Update | Responsible Party | Timeline |
|---------------|----------------------|-------------------|----------|
| **New Version Release** | Version number, release date, DoC reference, instructions URL | Product Manager | BEFORE market placement of new version |
| **Substantial Modification** | Version number, new conformity assessment info, certificate (if applicable), DoC reference | Product Manager + Quality Mgr | BEFORE market placement of modified system |
| **New Conformity Assessment** | Conformity assessment procedure, certificate details, DoC | Quality Manager | BEFORE market placement |
| **Notified Body Certificate Renewal** | New certificate number, new issue date, new expiry date | Quality Manager | BEFORE old certificate expires OR within 15 days of receiving new certificate |

---

#### C.4 Update Trigger Decision Matrix

**Use this decision tree for change evaluation:**

```
CHANGE EVENT OCCURS
│
├─ Is the change related to the registered AI system?
│  ├─ NO → No update needed
│  └─ YES → Continue
│
├─ Does the change affect information submitted in registration?
│  ├─ NO → No update needed (but document decision)
│  └─ YES → Continue
│
├─ What type of change is it?
│  │
│  ├─ Critical (market withdrawal, CE marking suspension, certificate suspension)
│  │  → Update within 15 days
│  │
│  ├─ Standard (provider info, intended purpose, contact details)
│  │  → Update within 30 days
│  │
│  ├─ Pre-Release (new version, substantial modification)
│  │  → Update BEFORE market placement
│  │
│  └─ Uncertain
│      → Consult AI Compliance Manager
│      → Document decision
```

---

#### C.5 Change Management Integration

**Integrate registration update assessment into existing change management process:**

**Change Request Form:**
Add section:
```
[ ] REGISTRATION IMPACT ASSESSMENT

Does this change affect EU AI Act registered AI system(s)?
☐ Yes → Complete registration impact assessment
☐ No → Proceed without registration consideration

If YES:
AI System(s) Affected: ______________________
Registration Information Impacted: ______________________
Update Trigger Type: ☐ Critical | ☐ Standard | ☐ Pre-Release
Update Deadline: ______________________
Registration Update Owner: ______________________

AI Compliance Manager Approval: ______________________
```

---

#### C.6 Update Trigger Monitoring Checklist

**Use monthly to identify missed triggers:**

| Trigger Category | Check | Frequency | Last Checked | Issues Found |
|------------------|-------|-----------|--------------|--------------|
| Product releases | Review product roadmap for upcoming releases | Monthly | [Date] | [Yes/No] |
| Corporate changes | Check corporate registry for legal changes | Monthly | [Date] | [Yes/No] |
| Contact changes | Verify contact details current | Monthly | [Date] | [Yes/No] |
| Quality changes | Review QMS changes, certificate status | Quarterly | [Date] | [Yes/No] |
| Conformity assessment | Check certificate expiry dates | Quarterly | [Date] | [Yes/No] |
| Instructions URLs | Test URL accessibility | Weekly | [Date] | [Yes/No] |
| Intended purpose | Review for scope creep or changes | Quarterly | [Date] | [Yes/No] |

---

### APPENDIX D: Cross-References to Other Procedures

**Purpose:** Map relationships between registration procedure and other AI compliance procedures.

---

#### D.1 Procedure Dependencies (Input Required)

**Registration requires inputs from these procedures:**

| Input Procedure | Required Input | Used In Registration Step | Timing |
|-----------------|---------------|---------------------------|---------|
| **PROC-AI-CLS-001** (Classification) | High-risk classification determination, Annex III category | Step 1.1 (Verify requirement), Step 2.2 (Risk classification basis) | Before registration |
| **PROC-AI-RM-001** (Risk Management) | Risk management system documentation reference | Step 2.5 (Compile data package) | Before registration |
| **PROC-AI-DOC-001** (Documentation) | Technical documentation package reference, AI system description | Step 2.2 (AI system information) | Before registration |
| **PROC-AI-CONF-001** (Conformity Assessment) | Conformity assessment completion, DoC, certificates | Step 2.3 (Conformity assessment info) | Before registration |
| **PROC-AI-QMS-001** (Quality Management) | QMS certification (for Annex VI procedure) | Step 2.3 (Conformity assessment) | Before registration (if Annex VI) |
| **PROC-AI-DATA-001** (Data Governance) | Data quality and governance compliance | Step 2.2 (Intended purpose), indirect | Before registration |
| **PROC-AI-ARS-001** (Accuracy/Robustness/Security) | Testing completion evidence | Step 1.1 (Pre-requisites) | Before registration |
| **PROC-AI-TRANS-001** (Transparency) | Instructions for use document | Step 2.4 (Instructions URL) | Before registration |

---

#### D.2 Procedure Dependencies (Output Used By)

**Registration outputs used by these procedures:**

| Output to Procedure | Registration Output | Used For | Timing |
|---------------------|---------------------|----------|--------|
| **PROC-AI-PMM-001** (Post-Market Monitoring) | Unique identification number (SRN), registration date | PMM reporting, incident reporting | After registration |
| **PROC-AI-INC-001** (Incident Management) | SRN, registration information | Serious incident reporting to authorities | After registration |
| **PROC-AI-CHG-001** (Change Management) | Registration status, update requirements | Assess impact of changes | After registration, ongoing |
| **PROC-AI-DOC-001** (Documentation) | SRN, registration date | Include in technical documentation | After registration |
| **PROC-AI-TRANS-001** (Transparency) | SRN, public database entry | Display to users, include in transparency info | After registration |

---

#### D.3 Process Integration Points

**Registration procedure integrates with these processes:**

**Product Development Lifecycle:**
```
Requirements → Design → Development → Testing → [REGISTRATION] → Launch → Operations
                                                      ↑
                        Pre-requisites complete ──────┘
```

**Product Launch Gate:**
- Registration must be complete and accepted before market placement
- Registration acceptance is a MANDATORY launch gate
- Cannot proceed to launch without registered status

**Change Management:**
- All product changes assessed for registration impact (Appendix C)
- Registration updates included in change plan
- Change cannot be released until registration updated (if required)

**Quality Management:**
- Registration verification included in quality audits
- Registration compliance monitored in QMS
- Non-conformities tracked in quality system

---

#### D.4 Document Cross-References

**Documents shared between procedures:**

| Document | Created By | Used By | Purpose |
|----------|------------|---------|---------|
| **Classification Assessment** | PROC-AI-CLS-001 | PROC-AI-REG-001 | Verify high-risk classification, determine registration requirement |
| **Technical Documentation** | PROC-AI-DOC-001 | PROC-AI-REG-001 | Source of AI system information |
| **Declaration of Conformity** | PROC-AI-CONF-001 | PROC-AI-REG-001 | Register DoC reference |
| **Instructions for Use** | PROC-AI-TRANS-001 | PROC-AI-REG-001 | Publish and register instructions URL |
| **Unique ID Number (SRN)** | PROC-AI-REG-001 | PROC-AI-PMM-001, PROC-AI-INC-001, PROC-AI-DOC-001 | Identify AI system in all compliance activities |

---

#### D.5 Governance Integration

**Registration reporting to governance bodies:**

**AI Governance Committee:**
- Quarterly registration compliance report (Step 4.4)
- Registration non-compliance escalation (Section 10)
- Annual registration strategic review

**Management Review:**
- Registration KPI dashboard (monthly)
- Registration process effectiveness review (annual)

**Board of Directors:**
- Critical non-compliance escalation
- Strategic registration portfolio overview (annual)

---

### APPENDIX E: Quick Reference Card

**Purpose:** One-page quick reference for registration process.

**Print and display at workstation for easy reference.**

---

#### E.1 Registration Quick Facts

**When to Register:**
- BEFORE placing high-risk AI system on EU market
- BEFORE putting high-risk AI system into service
- Minimum 2 weeks buffer before launch (recommended)

**Who Must Register:**
- **Providers:** All high-risk AI systems
- **Authorized Representatives:** On behalf of non-EU providers
- **Deployers:** Public authorities OR Article 6(2) use cases

**What to Register:**
- Provider information (Annex VIII, Section A)
- AI system information
- Intended purpose
- Risk classification
- Conformity assessment details
- Instructions for use URL
- Declaration of conformity
- CE marking information

---

#### E.2 Pre-Requisites Checklist

Before starting registration:
- [ ] Classification: High-risk determination complete
- [ ] Risk Management: Risk assessment complete
- [ ] Technical Documentation: Documentation package ready
- [ ] Conformity Assessment: DoC signed, certificates obtained
- [ ] CE Marking: CE marking affixed
- [ ] Instructions for Use: Published at public URL
- [ ] Quality Management: QMS operational (if Annex VI)

---

#### E.3 Registration Process Timeline

| Phase | Activities | Duration | Deadline |
|-------|-----------|----------|----------|
| **Readiness** | Verify requirement, establish database access | 2-3 weeks | 6-8 weeks before launch |
| **Data Preparation** | Collect all information, compile package | 3-4 weeks | 3-4 weeks before launch |
| **Submission** | Submit to EU Database, verify acceptance | 1-2 weeks | 1-2 weeks before launch |
| **Implementation** | Display SRN, update materials | 1 week | Before launch |
| **LAUNCH** | Market placement/putting into service | — | Registration complete |

**Total Time:** 6-8 weeks minimum (can be shorter if pre-requisites ready)

---

#### E.4 Update Triggers

**Update Required - 15 Days:**
- Market withdrawal
- CE marking suspension/withdrawal
- Certificate suspension/withdrawal

**Update Required - 30 Days:**
- Provider name/address/contact change
- Authorized representative change
- Intended purpose change
- Instructions URL change

**Update Required - Before Release:**
- New version
- Substantial modification
- New conformity assessment

---

#### E.5 Key Contacts

| Need Help With... | Contact | Email/Phone |
|-------------------|---------|-------------|
| **Registration process** | AI Compliance Manager | [Email/Phone] |
| **EU Database access** | EU Database Coordinator | [Email/Phone] |
| **Technical information** | Technical Documentation Lead | [Email/Phone] |
| **Legal questions** | Legal/Regulatory Affairs | [Email/Phone] |
| **Quality/conformity** | Quality Manager | [Email/Phone] |

---

#### E.6 Important Links

- **EU Database:** [URL]
- **Public Database Search:** [URL]
- **Registration Procedure:** PROC-AI-REG-001
- **Templates:** TMP-AI-REG-001 (Data Compilation)
- **Forms:** FORM-AI-REG-001 (Provider Info), FORM-AI-REG-002 (AI System Info)
- **Checklists:** CHK-AI-REG-001 (Readiness), CHK-AI-REG-002 (Instructions Review)

---

#### E.7 Registration Data Quick List

**What You'll Need:**

**About Your Organization:**
- Legal name, address, VAT number
- Contact email, phone, website
- Authorized representative (if non-EU)

**About Your AI System:**
- AI system name and version
- Type and AI techniques
- Intended purpose (detailed description)
- Annex III risk category
- Instructions for use URL

**About Conformity:**
- Conformity assessment procedure (Annex VI or VII)
- Notified body and certificate (if Annex VII)
- Declaration of Conformity reference
- CE marking date

---

#### E.8 Common Mistakes to Avoid

❌ **Don't:**
- Submit registration AFTER market placement
- Forget to test instructions URL before submission
- Use incomplete intended purpose description
- Skip internal approvals
- Forget to display SRN after registration
- Miss update deadlines

✅ **Do:**
- Start registration process 6-8 weeks before launch
- Verify all pre-requisites complete
- Test instructions URL accessibility
- Get all approvals before submission
- Double-check all information before submitting
- Monitor for update triggers continuously
- Keep registration records for 10 years

---

#### E.9 Registration Status Tracker

**My Registrations:**

| AI System | Version | SRN | Reg Date | Status | Next Review |
|-----------|---------|-----|----------|--------|-------------|
| | | | | | |
| | | | | | |
| | | | | | |

**Upcoming Updates:**

| AI System | Change | Deadline | Owner | Status |
|-----------|--------|----------|-------|--------|
| | | | | |
| | | | | |

---

**END OF PROCEDURE PROC-AI-REG-001**

---

## REVISION HISTORY

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | [Date] | [Name] | Initial procedure development |
| | | | |

---

## APPROVAL AND AUTHORIZATION

| Role | Name | Title | Signature | Date |
|------|------|-------|-----------|------|
| **Prepared By** | [Name] | AI Compliance Manager | __________ | ________ |
| **Reviewed By** | [Name] | Legal/Regulatory Affairs | __________ | ________ |
| **Reviewed By** | [Name] | Quality Manager | __________ | ________ |
| **Approved By** | [Name] | AI Governance Committee Chair | __________ | ________ |

---

## DOCUMENT CONTROL

**Document Status:** [Draft/Approved]
**Classification:** [Internal/Confidential]
**Distribution:** AI Compliance Manager, EU Database Coordinator, Product Managers, Quality Manager, Legal/Regulatory Affairs, AI Governance Committee
**Retention:** 10 years after last AI system deregistered
**Review Frequency:** Annually or upon regulatory change
**Next Review Date:** [Date]
**Document Location:** [Document management system path]
**Document Owner:** AI Compliance Manager

---

**Document Length:** 1,371 lines (excluding this metadata)
**Estimated Page Count:** 95-100 pages (formatted)
**Completion Date:** [Date]
**Procedure Status:** Ready for review and approval
