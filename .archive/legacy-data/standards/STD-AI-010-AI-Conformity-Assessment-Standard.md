# AI Conformity Assessment Standard

**Document Type:** Standard  
**Standard ID:** STD-AI-010  
**Standard Title:** AI Conformity Assessment Standard  
**Version:** 1.0  
**Effective Date:** 2025-08-01  
**Next Review Date:** 2026-08-01  
**Review Frequency:** Annually or upon regulatory change  
**Parent Policy:** POL-AI-001 - Artificial Intelligence Policy  
**Owner:** Chief Legal Officer  
**Approved By:** AI Governance Committee Chair  
**Status:** Draft  
**Classification:** Confidential

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
| 0.1 | 2025-07-10 | Michael Brown, Chief Legal Officer | Initial draft | - | - |
| 0.2 | 2025-07-25 | Michael Brown, Chief Legal Officer | Added Annex VI/VII details | - | - |
| 0.3 | 2025-08-01 | Michael Brown, Chief Legal Officer | Incorporated stakeholder feedback | - | - |
| 1.0 | 2025-08-01 | Michael Brown, Chief Legal Officer | Final version approved - GRC restructured | 2025-07-25 | Jane Doe, AI Governance Committee Chair |

---

## OBJECTIVE

This standard defines requirements for conducting conformity assessment of high-risk AI systems before market placement, in compliance with EU AI Act Article 43 and Annexes VI & VII.

**Primary Goals:**
- Conduct internal conformity assessment per Annex VI for Annex III high-risk AI systems
- Conduct conformity assessment with notified body per Annex VII for Annex I product safety AI systems
- Prepare and issue EU Declaration of Conformity per Article 47
- Affix CE marking per Article 48
- Maintain conformity throughout AI system lifecycle

---

## SCOPE AND APPLICABILITY

### 2.1 Mandatory Applicability

This standard is **mandatory** for:
- All high-risk AI systems before market placement (EU AI Act Article 43)
- All substantial modifications to high-risk AI systems
- Providers placing high-risk AI systems on EU market

### 2.2 Conformity Assessment Procedures Covered

- **Annex VI:** Internal control (self-assessment) for Annex III high-risk AI
- **Annex VII:** Assessment based on quality management system and technical documentation assessment (notified body) for Annex I product safety AI
- EU Declaration of Conformity (Article 47)
- CE marking (Article 48)

### 2.3 Out of Scope

- Non-high-risk AI systems (no conformity assessment required)
- Conformity assessment outside EU AI Act scope

---

## CONTROL STANDARD

### Control CA-001: Technical Documentation Preparation for Conformity Assessment

**Control ID:** CA-001  
**Control Name:** Technical Documentation Preparation for Annex VI Assessment  
**Control Type:** Preventive  
**Control Frequency:** Per high-risk AI system  
**Risk Level:** High

#### Control Objective

Prepare complete technical documentation per Annex IV for Annex VI internal control conformity assessment to ensure all required documentation is available for compliance verification.

#### Control Requirements

**CR-001.1: Technical Documentation Completeness**

Prepare complete technical documentation per Annex IV.

**Documentation Requirements:**
- All Annex IV elements complete
- Technical documentation current
- Documentation reviewed and approved
- Documentation available for authorities

**Mandatory Actions:**
- Create technical documentation (per STD-AI-004)
- Verify completeness against Annex IV checklist
- Obtain technical review
- Obtain legal review
- Obtain final approval
- Archive documentation

**Annex IV Completeness Checklist:**

| Annex IV Element | Required | Status | Evidence |
|-----------------|----------|--------|----------|
| **System description** | YES | ☐ | Technical documentation |
| **Intended purpose** | YES | ☐ | Technical documentation |
| **System architecture** | YES | ☐ | Architecture documentation |
| **Data governance** | YES | ☐ | Data documentation (STD-AI-003) |
| **Risk management** | YES | ☐ | Risk documentation (STD-AI-002) |
| **Human oversight** | YES | ☐ | Oversight documentation (STD-AI-007) |
| **Accuracy/robustness/security** | YES | ☐ | Performance documentation (STD-AI-008) |
| **Testing and validation** | YES | ☐ | Test documentation (STD-AI-009) |
| **Instructions for use** | YES | ☐ | User documentation (STD-AI-006) |

**Evidence Required:**
- Complete technical documentation package
- Annex IV completeness checklist
- Review records
- Approval records
- Archive records

**Audit Verification:**
- Verify technical documentation prepared
- Confirm Annex IV completeness verified
- Check reviews conducted
- Validate approval obtained

---

### Control CA-002: Compliance Verification

**Control ID:** CA-002  
**Control Name:** EU AI Act Compliance Verification  
**Control Type:** Preventive  
**Control Frequency:** Per conformity assessment  
**Risk Level:** High

#### Control Objective

Verify AI system compliance with all EU AI Act requirements to ensure system meets all regulatory obligations before market placement.

#### Control Requirements

**CR-002.1: Comprehensive Compliance Verification**

Verify compliance with all applicable EU AI Act requirements.

**Compliance Checklist:**

| Requirement | Article | Verification Method | Evidence Required | Status |
|-------------|---------|---------------------|------------------|--------|
| **Risk Management System** | Article 9 | Review risk management documentation | Risk documentation (STD-AI-002) | ☐ |
| **Data Governance** | Article 10 | Review data quality and bias assessments | Data documentation (STD-AI-003) | ☐ |
| **Technical Documentation** | Article 11 | Verify Annex IV completeness | Technical documentation (STD-AI-004) | ☐ |
| **Record-Keeping** | Article 12 | Verify logging implementation | Logging documentation (STD-AI-005) | ☐ |
| **Transparency** | Article 13 | Review instructions for use | User documentation (STD-AI-006) | ☐ |
| **Human Oversight** | Article 14 | Verify oversight measures | Oversight documentation (STD-AI-007) | ☐ |
| **Accuracy/Robustness/Security** | Article 15 | Review test results | Performance documentation (STD-AI-008) | ☐ |
| **Quality Management System** | Article 17 | Verify QMS implementation | QMS documentation (STD-AI-009) | ☐ |

**Mandatory Actions:**
- Review all compliance evidence
- Verify each requirement met
- Document verification results
- Address any gaps
- Obtain compliance sign-off
- Block market placement if non-compliant

**Gap Analysis and Remediation:**

| Gap Type | Severity | Remediation Required | Timeline |
|----------|---------|---------------------|----------|
| **Missing documentation** | High | Complete documentation | Before assessment |
| **Non-compliance** | Critical | Remediate non-compliance | Before market placement |
| **Minor gaps** | Medium | Document and plan remediation | Per remediation plan |

**Evidence Required:**
- Compliance Verification Checklist (CHK-AI-CA-001)
- Verification records
- Gap analysis (if applicable)
- Remediation records
- Compliance sign-off

**Audit Verification:**
- Verify compliance verification conducted
- Confirm all requirements checked
- Check gaps identified and addressed
- Validate compliance sign-off obtained
- Verify market placement blocked if non-compliant

---

### Control CA-003: Conformity Assessment Report

**Control ID:** CA-003  
**Control Name:** Annex VI Conformity Assessment Report  
**Control Type:** Preventive  
**Control Frequency:** Per conformity assessment  
**Risk Level:** High

#### Control Objective

Prepare conformity assessment report documenting compliance for Annex VI internal control procedure to provide evidence of conformity assessment completion.

#### Control Requirements

**CR-003.1: Conformity Assessment Report Preparation**

Prepare comprehensive conformity assessment report.

**Report Contents:**

| Section | Content | Required |
|---------|---------|----------|
| **AI System Identification** | Name, type, version, unique identifier | YES |
| **Intended Purpose** | Description of intended purpose | YES |
| **Conformity Assessment Procedure** | Annex VI (Internal Control) | YES |
| **Technical Documentation Summary** | Summary of technical documentation | YES |
| **Compliance Verification Results** | Results of compliance verification | YES |
| **Test Results Summary** | Summary of testing and validation | YES |
| **Risk Management Summary** | Summary of risk management | YES |
| **Conclusion of Conformity** | Statement of conformity | YES |
| **Date and Signature** | Date and authorized signature | YES |

**Mandatory Actions:**
- Compile assessment results
- Prepare conformity assessment report
- Review report for accuracy
- Obtain approval
- Archive report
- Maintain for 10 years

**Evidence Required:**
- Conformity Assessment Report (RPT-AI-CA-XXX)
- Supporting documentation
- Review records
- Approval records
- Archive records

**Audit Verification:**
- Verify conformity assessment report prepared
- Confirm all required sections included
- Check report reviewed and approved
- Validate report archived

---

### Control CA-004: Notified Body Selection

**Control ID:** CA-004  
**Control Name:** Notified Body Selection and Engagement  
**Control Type:** Preventive  
**Control Frequency:** Per Annex VII assessment  
**Risk Level:** High

#### Control Objective

Select and engage qualified notified body for Annex VII conformity assessment to ensure competent third-party assessment for Annex I product safety AI systems.

#### Control Requirements

**CR-004.1: Notified Body Selection Process**

Select and engage qualified notified body.

**Selection Criteria:**

| Criterion | Description | Weight | Evaluation |
|-----------|-------------|--------|------------|
| **Designation** | Designated for AI Act conformity assessment | Critical | Must be designated |
| **Expertise** | Expertise in relevant domain | High | Domain expertise required |
| **Availability** | Availability and timeline | Medium | Timeline acceptable |
| **Cost** | Assessment cost | Medium | Cost reasonable |
| **Reputation** | Reputation and track record | Medium | Good reputation |

**Mandatory Actions:**
- Identify candidate notified bodies
- Evaluate against criteria
- Select notified body
- Negotiate contract
- Engage notified body
- Document selection

**Evidence Required:**
- Notified body evaluation
- Selection justification
- Contract with notified body
- Engagement records

**Audit Verification:**
- Verify notified body selected
- Confirm notified body designated for AI Act
- Check contract executed
- Validate engagement documented

---

### Control CA-005: QMS Assessment Preparation

**Control ID:** CA-005  
**Control Name:** QMS Assessment Preparation for Annex VII  
**Control Type:** Preventive  
**Control Frequency:** Per Annex VII assessment  
**Risk Level:** High

#### Control Objective

Prepare for notified body QMS assessment to ensure QMS is ready for third-party evaluation.

#### Control Requirements

**CR-005.1: QMS Assessment Readiness**

Ensure QMS fully implemented and ready for assessment.

**Preparation Activities:**

| Activity | Description | Required | Evidence |
|----------|-------------|----------|----------|
| **QMS Implementation** | Ensure QMS fully implemented | YES | QMS documentation (STD-AI-009) |
| **Internal QMS Audit** | Conduct internal QMS audit | YES | Internal audit report |
| **Nonconformity Remediation** | Address any nonconformities | YES | Remediation records |
| **QMS Documentation** | Prepare QMS documentation package | YES | QMS documentation package |
| **Notified Body Briefing** | Brief notified body on QMS | YES | Briefing records |

**Mandatory Actions:**
- Review QMS implementation
- Conduct pre-assessment audit
- Remediate findings
- Compile QMS documentation package
- Schedule notified body assessment
- Brief notified body

**Evidence Required:**
- QMS documentation package
- Internal audit report
- Remediation records
- Assessment schedule
- Briefing records

**Audit Verification:**
- Verify QMS fully implemented
- Confirm internal audit conducted
- Check findings remediated
- Validate documentation package prepared

---

### Control CA-006: Technical Documentation Assessment Preparation

**Control ID:** CA-006  
**Control Name:** Technical Documentation Preparation for Annex VII  
**Control Type:** Preventive  
**Control Frequency:** Per Annex VII assessment  
**Risk Level:** High

#### Control Objective

Prepare technical documentation for notified body review to ensure complete and accurate documentation is available for Annex VII assessment.

#### Control Requirements

**CR-006.1: Technical Documentation Readiness**

Ensure technical documentation complete and ready for notified body review.

**Preparation Activities:**

| Activity | Description | Required | Evidence |
|----------|-------------|----------|----------|
| **Documentation Completeness** | Ensure technical documentation complete | YES | Technical documentation (STD-AI-004) |
| **Internal Documentation Review** | Conduct internal documentation review | YES | Internal review records |
| **Gap Remediation** | Address any gaps | YES | Gap remediation records |
| **Documentation Package** | Prepare documentation package | YES | Documentation package |
| **Submission to Notified Body** | Submit to notified body | YES | Submission records |

**Mandatory Actions:**
- Review technical documentation
- Verify completeness
- Address gaps
- Compile documentation package
- Submit to notified body
- Track submission

**Evidence Required:**
- Technical documentation package
- Internal review records
- Submission records

**Audit Verification:**
- Verify technical documentation complete
- Confirm internal review conducted
- Check gaps addressed
- Validate documentation submitted

---

### Control CA-007: Notified Body Assessment Support

**Control ID:** CA-007  
**Control Name:** Notified Body Assessment Support and Response  
**Control Type:** Preventive  
**Control Frequency:** Per Annex VII assessment  
**Risk Level:** High

#### Control Objective

Support notified body during assessment and respond to findings to ensure successful Annex VII conformity assessment.

#### Control Requirements

**CR-007.1: Notified Body Assessment Support**

Support notified body during assessment process.

**Assessment Process:**

| Step | Description | Support Required |
|------|-------------|-----------------|
| **QMS Review** | Notified body reviews QMS | Provide QMS documentation, answer questions |
| **Technical Documentation Review** | Notified body reviews technical documentation | Provide documentation, clarify questions |
| **On-Site Assessment** | Notified body may conduct on-site assessment | Facilitate on-site visit, provide access |
| **Additional Information** | Notified body may request additional information | Provide requested information promptly |
| **Assessment Report** | Notified body issues assessment report | Review report, respond to findings |
| **Certificate** | Notified body issues certificate (if compliant) | Obtain and archive certificate |

**Mandatory Actions:**
- Provide requested information
- Support on-site assessment
- Address notified body findings
- Obtain assessment report
- Obtain certificate (if compliant)
- Archive assessment records

**Findings Response:**

| Finding Type | Severity | Response Required | Timeline |
|-------------|---------|------------------|----------|
| **Major Nonconformity** | Critical | Immediate remediation | Before certificate |
| **Minor Nonconformity** | Medium | Remediation plan | Per plan |
| **Observation** | Low | Document and monitor | Ongoing |

**Evidence Required:**
- Notified body assessment report
- Findings and responses
- EU-type examination certificate (if applicable)
- Correspondence with notified body
- Archive records

**Audit Verification:**
- Verify notified body supported
- Confirm findings addressed
- Check certificate obtained (if compliant)
- Validate records archived

---

### Control CA-008: EU Declaration of Conformity Preparation

**Control ID:** CA-008  
**Control Name:** EU Declaration of Conformity Preparation  
**Control Type:** Preventive  
**Control Frequency:** Per high-risk AI system, per substantial modification  
**Risk Level:** High

#### Control Objective

Prepare EU Declaration of Conformity with all required elements per Article 47 to provide formal declaration of compliance.

#### Control Requirements

**CR-008.1: Declaration Preparation**

Prepare EU Declaration of Conformity with all required elements.

**Required Elements (Article 47(1)):**

| Element | Content | Required | Source |
|---------|--------|----------|--------|
| **AI System Identification** | Name, type, version | YES | Technical documentation |
| **Provider Information** | Name, address | YES | Company information |
| **Declaration Statement** | "This declaration of conformity is issued under the sole responsibility of the provider" | YES | Standard text |
| **Object of Declaration** | AI system description and intended purpose | YES | Technical documentation |
| **Conformity Statement** | "The object of the declaration described above is in conformity with Regulation (EU) 2024/1689" | YES | Standard text |
| **Harmonized Standards** | References to harmonized standards applied | If applicable | Standards documentation |
| **Common Specifications** | References (if no harmonized standards) | If applicable | Specifications documentation |
| **Notified Body Details** | Name, number, certificate number (if Annex VII) | If Annex VII | Notified body certificate |
| **Additional Information** | Any other relevant information | If applicable | As needed |
| **Place and Date** | Where and when issued | YES | Declaration location and date |
| **Signature** | Name and function of signatory | YES | Authorized signatory |

**Mandatory Actions:**
- Complete declaration template
- Verify all required elements included
- Review for accuracy
- Obtain legal review
- Obtain authorized signature
- Date declaration

**Evidence Required:**
- EU Declaration of Conformity (DOC-AI-CONFORM-XXX)
- Declaration template
- Review records
- Signature authorization

**Audit Verification:**
- Verify declaration prepared
- Confirm all required elements included
- Check legal review conducted
- Validate signature obtained

---

### Control CA-009: EU Declaration of Conformity Review and Approval

**Control ID:** CA-009  
**Control Name:** EU Declaration of Conformity Review and Approval  
**Control Type:** Preventive  
**Control Frequency:** Per declaration  
**Risk Level:** High

#### Control Objective

Review and approve EU Declaration of Conformity before issuance to ensure accuracy, completeness, and legal compliance.

#### Control Requirements

**CR-009.1: Declaration Review and Approval Process**

Conduct comprehensive review and obtain approval.

**Review Checklist:**

| Check | Description | Required | Status |
|-------|-------------|----------|--------|
| **Completeness** | All required elements present | YES | ☐ |
| **Accuracy** | Information accurate and current | YES | ☐ |
| **Consistency with Technical Documentation** | Consistent with technical documentation | YES | ☐ |
| **Consistency with Conformity Assessment** | Consistent with conformity assessment | YES | ☐ |
| **Legal Compliance** | Legally compliant | YES | ☐ |
| **Proper Signature** | Properly signed | YES | ☐ |

**Approval Authority:**
- Legal review required
- Executive approval required (CEO or authorized delegate)

**Mandatory Actions:**
- Conduct legal review
- Verify accuracy
- Obtain executive approval
- Sign declaration
- Date declaration
- Archive declaration

**Evidence Required:**
- Review checklist
- Legal approval
- Executive approval
- Signed declaration
- Archive records

**Audit Verification:**
- Verify review conducted
- Confirm legal approval obtained
- Check executive approval obtained
- Validate declaration signed and dated

---

### Control CA-010: EU Declaration of Conformity Availability

**Control ID:** CA-010  
**Control Name:** EU Declaration of Conformity Retention and Availability  
**Control Type:** Preventive  
**Control Frequency:** Continuous, 10-year retention  
**Risk Level:** Medium

#### Control Objective

Keep EU Declaration of Conformity available per Article 47(2) to ensure availability to competent authorities for 10 years.

#### Control Requirements

**CR-010.1: Declaration Availability Management**

Maintain declaration availability per regulatory requirements.

**Availability Requirements:**

| Requirement | Specification | Implementation |
|-------------|---------------|----------------|
| **Retention Period** | 10 years | Archive for 10 years |
| **Language** | Available in language(s) required by Member State(s) | Provide translations if needed |
| **Authority Requests** | Provided upon request | Respond promptly to requests |
| **Updates** | Kept up to date | Update when AI system changes |

**Mandatory Actions:**
- Store declaration securely
- Maintain for 10 years
- Provide translations if needed
- Update when AI system changes
- Respond to authority requests
- Document availability

**Evidence Required:**
- Declaration storage records
- Retention compliance
- Translation records (if applicable)
- Authority request responses
- Update records

**Audit Verification:**
- Verify declaration stored securely
- Confirm 10-year retention maintained
- Check translations provided (if needed)
- Validate authority requests responded to

---

### Control CA-011: CE Marking Affixing

**Control ID:** CA-011  
**Control Name:** CE Marking Affixing and Display  
**Control Type:** Preventive  
**Control Frequency:** Per high-risk AI system  
**Risk Level:** High

#### Control Objective

Affix CE marking to high-risk AI system per Article 48 to indicate EU conformity.

#### Control Requirements

**CR-011.1: CE Marking Affixing**

Affix CE marking per Article 48 requirements.

**CE Marking Requirements (Article 48(1)):**

| Requirement | Specification | Implementation |
|-------------|---------------|----------------|
| **Visibility** | Visible, legible, and indelible | Ensure proper display |
| **Timing** | Affixed before placing on market | Affix before market placement |
| **Physical Products** | Affixed to AI system or packaging | Affix to product/packaging |
| **Software** | Affixed to instructions for use | Include in instructions for use |
| **Additional Markings** | May be accompanied by pictogram or other marking | If applicable |

**Mandatory Actions:**
- Determine where to affix CE marking
- Design CE marking display
- Affix CE marking
- Verify visibility and legibility
- Document CE marking
- Verify before market placement

**CE Marking Placement:**

| AI System Type | Placement Location | Verification |
|----------------|-------------------|-------------|
| **Physical Product** | Product or packaging | Visual inspection |
| **Software** | Instructions for use | Documentation review |
| **Cloud Service** | Instructions for use, website | Documentation review |

**Evidence Required:**
- CE marking placement documentation
- CE marking images
- Instructions for use with CE marking
- Verification records

**Audit Verification:**
- Verify CE marking affixed
- Confirm visibility and legibility
- Check placement appropriate
- Validate documented

---

### Control CA-012: CE Marking Compliance

**Control ID:** CA-012  
**Control Name:** CE Marking Rules Compliance  
**Control Type:** Preventive  
**Control Frequency:** Per CE marking  
**Risk Level:** High

#### Control Objective

Ensure CE marking complies with all rules per Article 48(2-5) to maintain regulatory compliance.

#### Control Requirements

**CR-012.1: CE Marking Rules Compliance**

Ensure CE marking complies with all regulatory rules.

**CE Marking Rules (Article 48(2-5)):**

| Rule | Description | Compliance Requirement |
|------|-------------|----------------------|
| **Conformity Indication** | CE marking indicates conformity with EU AI Act | Only affix if compliant |
| **Provider Responsibility** | CE marking affixed under provider's responsibility | Ensure provider responsibility clear |
| **Non-Compliant Systems** | CE marking not affixed if AI system not compliant | Verify compliance before affixing |
| **Other Markings** | Other markings allowed if not confused with CE marking | Avoid confusing markings |
| **Authority Evidence** | National authorities may request evidence of conformity | Prepare evidence package |

**Mandatory Actions:**
- Verify conformity before affixing CE marking
- Ensure provider responsibility clear
- Avoid confusing markings
- Prepare evidence for authorities
- Monitor CE marking compliance

**Evidence Required:**
- Conformity verification
- CE marking authorization
- Evidence package for authorities

**Audit Verification:**
- Verify conformity verified before affixing
- Confirm provider responsibility clear
- Check no confusing markings
- Validate evidence package prepared

---

### Control CA-013: Conformity Assessment Maintenance

**Control ID:** CA-013  
**Control Name:** Ongoing Conformity Maintenance and Monitoring  
**Control Type:** Detective  
**Control Frequency:** Continuous  
**Risk Level:** Medium

#### Control Objective

Maintain conformity throughout AI system lifecycle and reassess when substantial modifications occur to ensure ongoing compliance.

#### Control Requirements

**CR-013.1: Ongoing Compliance Monitoring**

Monitor ongoing compliance with EU AI Act requirements.

**Monitoring Activities:**

| Activity | Description | Frequency | Evidence |
|----------|-------------|-----------|----------|
| **Substantial Modification Monitoring** | Monitor for substantial modifications | Continuous | Modification tracking |
| **Regulatory Change Monitoring** | Monitor regulatory changes | Quarterly | Regulatory update log |
| **Conformity Assessment Validity** | Monitor conformity assessment validity | Annually | Validity tracking |
| **Certificate Validity** | Monitor certificate validity (if Annex VII) | Annually | Certificate tracking |
| **CE Marking Integrity** | Monitor CE marking integrity | Annually | CE marking verification |

**Mandatory Actions:**
- Establish compliance monitoring process
- Track modifications
- Track regulatory updates
- Verify certificate validity
- Verify CE marking
- Report compliance status

**CR-013.2: Substantial Modification Assessment**

Reassess conformity when substantial modifications occur.

**Substantial Modification Triggers:**

| Trigger | Description | Assessment Required |
|---------|-------------|-------------------|
| **Compliance Impact** | Change affecting compliance | YES |
| **Intended Purpose Change** | Change to intended purpose | YES |
| **Risk Profile Change** | Change to risk profile | YES |
| **Technical Specification Change** | Change to technical specifications | YES |
| **Regulatory Interpretation** | Regulatory interpretation changes | YES |

**Mandatory Actions:**
- Assess if modification is substantial
- If substantial, initiate new conformity assessment
- Update technical documentation
- Update EU Declaration of Conformity
- Update CE marking if needed
- Document modification assessment

**Evidence Required:**
- Compliance monitoring records
- Modification tracking
- Regulatory update log
- Certificate validity tracking
- Modification assessment records
- New conformity assessment (if needed)
- Updated documentation

**Audit Verification:**
- Verify compliance monitoring established
- Confirm modifications tracked
- Check substantial modifications reassessed
- Validate documentation updated

---

## SUPPORTING PROCEDURES

This standard is implemented through the following detailed procedures:

### Procedure PROC-AI-CA-001: Conformity Assessment Planning Procedure

**Purpose:** Define step-by-step process for planning conformity assessment  
**Owner:** Chief Legal Officer  
**Implements:** Controls CA-001, CA-002, CA-003, CA-004

**Procedure Steps:**
1. Determine conformity assessment procedure (Annex VI or VII)
2. Prepare technical documentation - Control CA-001
3. Verify compliance - Control CA-002
4. Prepare conformity assessment report (Annex VI) - Control CA-003
5. Select notified body (Annex VII) - Control CA-004

**Outputs:**
- Conformity assessment plan
- Technical documentation
- Compliance verification
- Conformity assessment report (Annex VI)
- Notified body selection (Annex VII)

---

### Procedure PROC-AI-CA-002: Internal Control Procedure (Annex VI)

**Purpose:** Define process for Annex VI internal control assessment  
**Owner:** Chief Legal Officer  
**Implements:** Controls CA-001, CA-002, CA-003

**Procedure Steps:**
1. Prepare technical documentation - Control CA-001
2. Verify compliance - Control CA-002
3. Prepare conformity assessment report - Control CA-003
4. Obtain approval
5. Archive records

**Outputs:**
- Technical documentation
- Compliance verification
- Conformity assessment report

---

### Procedure PROC-AI-CA-003: EU Declaration of Conformity Procedure

**Purpose:** Define process for preparing and issuing EU Declaration of Conformity  
**Owner:** Chief Legal Officer  
**Implements:** Controls CA-008, CA-009, CA-010

**Procedure Steps:**
1. Prepare declaration - Control CA-008
2. Review and approve - Control CA-009
3. Sign and date
4. Archive declaration - Control CA-010
5. Maintain availability

**Outputs:**
- EU Declaration of Conformity
- Review records
- Approval records
- Archive records

---

## COMPLIANCE

### 5.1 Compliance Monitoring

**Monitoring Approach:**
Continuous automated monitoring supplemented by monthly manual reviews and quarterly comprehensive audits.

**Compliance Metrics:**

| Metric | Target | Measurement Method | Frequency | Owner |
|--------|--------|--------------------|-----------|-------|
| Conformity Assessment Completion | 100% | % of high-risk AI assessed before market placement | Monthly | Chief Legal Officer |
| EU Declaration of Conformity Coverage | 100% | % of high-risk AI with declaration | Monthly | Chief Legal Officer |
| CE Marking Compliance | 100% | % of high-risk AI with proper CE marking | Monthly | Chief Legal Officer |
| Assessment Timeliness | < 90 days | Average days to complete assessment | Per assessment | Chief Legal Officer |
| Substantial Modification Reassessment | 100% | % of substantial modifications reassessed | Monthly | Chief Legal Officer |
| Notified Body Findings | 0 major | # of major findings from notified body | Per assessment | Chief Legal Officer |

**Monitoring Tools:**
- Conformity Assessment Dashboard
- Compliance Reports
- Monthly compliance reports
- Quarterly AI Governance Committee reviews

---

### 5.2 Internal Audit Requirements

**Audit Frequency:** Annually (minimum)

**Audit Scope:**
- Conformity assessment completion
- Technical documentation completeness
- Compliance verification quality
- EU Declaration of Conformity accuracy
- CE marking compliance
- Conformity maintenance
- Controls effectiveness (CA-001 through CA-013)

**Audit Activities:**
- Review 100% of high-risk AI for conformity assessment
- Sample 20% of conformity assessments for quality review
- Test compliance verification process
- Review EU Declarations of Conformity
- Test CE marking compliance
- Review conformity maintenance

**Audit Outputs:**
- Annual Conformity Assessment Audit Report
- Findings and recommendations
- Corrective action plans for deficiencies

---

### 5.3 External Audit / Regulatory Inspection

**Preparation:**
- Maintain audit-ready conformity assessment documentation at all times
- Designate Chief Legal Officer and Legal as regulatory liaisons
- Prepare standard response procedures for authority requests

**Provide to Auditors/Regulators:**
- Conformity assessment reports
- Technical documentation
- EU Declarations of Conformity
- CE marking documentation
- Notified body certificates (if applicable)
- Internal audit reports
- Evidence of controls execution

**Authority Request Response:**
- Acknowledge request within 1 business day
- Provide requested documentation within 5 business days
- Coordinate through Legal and Chief Legal Officer
- Document all interactions with authorities

---

## ROLES AND RESPONSIBILITIES

### 6.1 RACI Matrix

| Activity | Chief Legal Officer | AI Act Program Manager | AI System Owner | Quality Director | CTO | Executive Management |
|----------|-------------------|------------------------|-----------------|-----------------|-----|---------------------|
| **Conformity Assessment Planning** | **R/A** | **R** | C | I | C | I |
| **Technical Documentation Preparation** | **R** | C | **A** | I | **R** | I |
| **Compliance Verification** | **R/A** | **R** | C | C | C | I |
| **Conformity Assessment Report** | **R** | **R** | C | I | C | I |
| **Notified Body Selection** | **R/A** | **R** | I | I | I | I |
| **QMS Assessment Preparation** | **R** | C | I | **R/A** | I | I |
| **EU Declaration Preparation** | **R/A** | **R** | C | I | I | I |
| **EU Declaration Approval** | **R** | C | I | I | I | **A** |
| **CE Marking** | **R** | **R** | **A** | I | I | I |
| **Conformity Maintenance** | **R/A** | **R** | **A** | I | I | I |

**RACI Legend:**
- **R** = Responsible (does the work)
- **A** = Accountable (ultimately answerable)
- **C** = Consulted (provides input)
- **I** = Informed (kept up-to-date)

---

### 6.2 Role Descriptions

**Chief Legal Officer**
- **Primary Responsibility:** Owns conformity assessment framework, ensures compliance
- **Key Activities:**
  - Oversees conformity assessment process
  - Ensures regulatory compliance
  - Approves EU Declarations of Conformity
  - Reports to management
- **Required Competencies:** EU AI Act Article 43-48, conformity assessment, regulatory compliance

**AI Act Program Manager**
- **Primary Responsibility:** Manages conformity assessment process
- **Key Activities:**
  - Coordinates conformity assessments
  - Manages assessment timelines
  - Tracks compliance status
  - Reports metrics
- **Required Competencies:** Conformity assessment procedures, project management

**AI System Owner**
- **Primary Responsibility:** Accountable for conformity of their AI system
- **Key Activities:**
  - Provides technical information
  - Supports assessment
  - Ensures CE marking affixed
  - Monitors for modifications
- **Required Competencies:** AI system knowledge, conformity assessment awareness

**Quality Director**
- **Primary Responsibility:** Ensures QMS ready for Annex VII assessment
- **Key Activities:**
  - Prepares QMS for assessment
  - Supports notified body assessment
- **Required Competencies:** QMS management, Annex VII requirements

**CTO**
- **Primary Responsibility:** Ensures technical documentation ready
- **Key Activities:**
  - Prepares technical documentation
  - Supports assessment
- **Required Competencies:** Technical documentation, Annex IV requirements

**Executive Management**
- **Primary Responsibility:** Signs EU Declaration of Conformity
- **Key Activities:**
  - Reviews and approves declarations
  - Signs declarations
- **Required Competencies:** Executive authority, regulatory awareness

---

## EXCEPTIONS

### 7.1 Exception Philosophy

Conformity assessment is a **mandatory regulatory requirement** for high-risk AI systems before market placement. Exceptions are granted restrictively and only where compensating controls adequately mitigate risks.

---

### 7.2 Allowed Exceptions

The following exceptions **may** be granted with proper justification and approval:

| Exception Type | Justification Required | Maximum Duration | Approval Authority | Compensating Controls |
|----------------|----------------------|------------------|-------------------|---------------------|
| **Extended Assessment Timeline** | Resource constraints prevent timely assessment | 30 days | Chief Legal Officer + AI Governance Committee | Interim compliance measures; Accelerated plan |

---

### 7.3 Prohibited Exceptions

The following exceptions **cannot** be granted under any circumstances:

❌ **Skipping conformity assessment for high-risk AI** - Mandatory per Article 43, no exceptions  
❌ **Placing high-risk AI on market without assessment** - Illegal, no exceptions  
❌ **Skipping EU Declaration of Conformity** - Mandatory per Article 47, no exceptions  
❌ **Skipping CE marking** - Mandatory per Article 48, no exceptions  
❌ **Skipping substantial modification reassessment** - Required for ongoing compliance  

---

### 7.4 Exception Request Process

**Step 1: Submit Exception Request**
- Complete Exception Request Form (FORM-AI-EXCEPTION-001)
- Include business justification
- Propose compensating controls
- Specify duration requested
- Attach risk assessment

**Step 2: Risk Assessment**
- Chief Legal Officer assesses risk of granting exception
- Evaluates adequacy of compensating controls
- Documents residual risk

**Step 3: Approval**
- Route to appropriate approval authority based on exception type
- Chief Legal Officer approval: Minor exceptions
- Chief Legal Officer + AI Governance Committee: Significant exceptions
- AI Governance Committee: Critical exceptions

**Step 4: Documentation and Monitoring**
- Document exception in Exception Register
- Assign exception owner
- Set review date
- Monitor compensating controls
- Report exceptions quarterly to AI Governance Committee

**Step 5: Exception Review and Closure**
- Review exception at specified review date
- Assess if exception still needed
- Close exception when normal assessment completed
- Document lessons learned

---

## ENFORCEMENT

### 8.1 Non-Compliance Consequences

| Violation | Severity | Consequence | Remediation Required |
|-----------|----------|-------------|---------------------|
| **Placing high-risk AI on market without assessment** | Critical | Immediate removal from market; Legal investigation | Complete assessment immediately; Root cause analysis |
| **Missing EU Declaration of Conformity** | Critical | Immediate suspension; Compliance gap assessment | Prepare declaration within 5 business days |
| **Missing CE marking** | Critical | Immediate correction; Compliance gap assessment | Affix CE marking within 5 business days |
| **Incomplete conformity assessment** | High | Escalation to AI Governance Committee | Complete assessment within 10 business days |
| **Substantial modification not reassessed** | High | Escalation to management | Reassess within 10 business days |

---

### 8.2 Escalation Procedures

**Level 1: Chief Legal Officer**
- Minor procedural violations
- Documentation deficiencies
- Timeline delays < 5 days
- **Action:** Written warning, corrective action required

**Level 2: Chief Legal Officer + AI Governance Committee**
- Repeated violations
- Incomplete assessments
- Missing declarations
- **Action:** Formal review, corrective action plan, management notification

**Level 3: AI Governance Committee**
- Placing AI on market without assessment
- Missing CE marking
- Critical compliance failures
- **Action:** Immediate market removal, investigation, disciplinary action

**Level 4: Executive Management + Legal**
- Potential regulatory enforcement action
- Significant legal liability
- Reputational risk
- **Action:** Executive crisis management, legal strategy, regulatory engagement

---

### 8.3 Immediate Escalation Triggers

Escalate **immediately** to AI Governance Committee + Legal if:
- ⚠️ High-risk AI system placed on market without conformity assessment
- ⚠️ Missing EU Declaration of Conformity
- ⚠️ Missing CE marking
- ⚠️ Regulatory inquiry or inspection related to conformity assessment
- ⚠️ Notified body finding of major nonconformity

---

### 8.4 Disciplinary Actions

Individuals responsible for conformity assessment violations may be subject to:
- Verbal or written warning
- Mandatory retraining
- Performance improvement plan
- Reassignment of responsibilities
- Suspension (with pay during investigation)
- Termination (for egregious violations, e.g., knowingly placing AI on market without assessment)

**Factors Considered:**
- Intent (knowing violation vs. honest mistake)
- Severity of violation
- Impact (actual or potential)
- Cooperation with remediation
- Prior violation history

---

## KEY PERFORMANCE INDICATORS (KPIs)

### 9.1 Conformity Assessment KPIs

| KPI ID | KPI Name | Definition | Target | Measurement Method | Frequency | Owner | Reporting To |
|--------|----------|------------|--------|-------------------|-----------|-------|--------------|
| **KPI-CA-001** | Conformity Assessment Completion | % of high-risk AI assessed before market placement | 100% | (# assessed / # high-risk AI) × 100 | Per system | Chief Legal Officer | AI Governance Committee |
| **KPI-CA-002** | EU Declaration of Conformity Coverage | % of high-risk AI with declaration | 100% | (# with declaration / # high-risk AI) × 100 | Monthly | Chief Legal Officer | Management |
| **KPI-CA-003** | CE Marking Compliance | % of high-risk AI with proper CE marking | 100% | (# with CE marking / # high-risk AI) × 100 | Monthly | Chief Legal Officer | Management |
| **KPI-CA-004** | Assessment Timeliness | Average days to complete assessment | < 90 days | Σ (assessment days) / # assessments | Per assessment | Chief Legal Officer | Management |
| **KPI-CA-005** | Substantial Modification Reassessment | % of substantial modifications reassessed | 100% | (# reassessed / # substantial modifications) × 100 | Monthly | Chief Legal Officer | AI Governance Committee |
| **KPI-CA-006** | Notified Body Findings | Number of major findings from notified body | 0 | Count of major findings | Per assessment | Chief Legal Officer | AI Governance Committee |
| **KPI-CA-007** | Declaration Accuracy | % of declarations with no errors | 100% | (# error-free / # total declarations) × 100 | Per declaration | Chief Legal Officer | Management |
| **KPI-CA-008** | Technical Documentation Completeness | % of assessments with complete documentation | 100% | (# complete / # assessments) × 100 | Per assessment | Chief Legal Officer | Management |

---

### 9.2 KPI Dashboards and Reporting

**Real-Time Dashboard** (Chief Legal Officer access)
- Current conformity assessment status
- Declaration status
- CE marking status
- Assessment timelines
- Compliance status

**Monthly Management Report**
- KPI-CA-001, 002, 003, 004, 005, 007, 008
- Trend analysis (vs. previous month)
- Issues and risks
- Planned actions

**Quarterly AI Governance Committee Report**
- All KPIs
- Conformity assessment effectiveness assessment
- Notified body findings review
- Internal audit findings (if conducted)
- Exception register review

**Annual Executive Report**
- Full-year KPI performance
- Conformity assessment maturity assessment
- Strategic recommendations
- Regulatory outlook

---

### 9.3 KPI Thresholds and Alerts

| KPI | Green (Good) | Yellow (Warning) | Red (Critical) | Alert Action |
|-----|-------------|------------------|----------------|--------------|
| **Conformity Assessment Completion** | 100% | 95-99% | < 95% | Red: Immediate escalation to AI Governance Committee Chair |
| **EU Declaration of Conformity Coverage** | 100% | 95-99% | < 95% | Red: Immediate escalation to AI Governance Committee |
| **CE Marking Compliance** | 100% | 95-99% | < 95% | Red: Immediate escalation to AI Governance Committee |
| **Assessment Timeliness** | < 90 days | 90-120 days | > 120 days | Red: Escalate to AI Governance Committee |
| **Notified Body Findings** | 0 | 1-2 | > 2 | Red: Immediate escalation to AI Governance Committee |

---

## TRAINING REQUIREMENTS

### 10.1 Training Program Overview

All personnel involved in conformity assessment must complete role-specific training to ensure competency in EU AI Act Article 43-48 requirements, conformity assessment procedures, and regulatory compliance.

---

### 10.2 Role-Based Training Requirements

| Role | Training Course | Duration | Content | Frequency | Assessment Required |
|------|----------------|----------|---------|-----------|-------------------|
| **Chief Legal Officer** | Conformity Assessment Expert Training | 20 hours | EU AI Act Article 43-48; Annex VI/VII; Declaration; CE marking | Initial + annually | Yes - Written exam (≥90%) |
| **AI Act Program Manager** | Conformity Assessment Management Training | 16 hours | Conformity assessment procedures; Planning; Coordination | Initial + annually | Yes - Written exam (≥90%) |
| **Legal Staff** | Conformity Assessment Legal Training | 12 hours | Legal requirements; Declaration; Compliance | Initial + annually | Yes - Written exam (≥90%) |
| **AI System Owners** | Conformity Assessment Overview | 4 hours | Conformity assessment requirements; Responsibilities; Support | At onboarding + annually | Yes - Knowledge check (≥80%) |
| **All AI Development Staff** | Conformity Assessment Awareness | 2 hours | Conformity assessment basics; Requirements; Awareness | At onboarding + annually | Yes - Knowledge check (≥80%) |

---

### 10.3 Training Content by Topic

**EU AI Act Article 43-48 Requirements**
- Conformity assessment (Article 43)
- Certificates (Article 44)
- EU Declaration of Conformity (Article 47)
- CE marking (Article 48)
- Compliance obligations

**Annex VI - Internal Control**
- Self-assessment procedure
- Technical documentation requirements
- Compliance verification
- Conformity assessment report

**Annex VII - QMS + Technical Documentation**
- Notified body assessment
- QMS assessment preparation
- Technical documentation assessment
- Certificate process

**EU Declaration of Conformity**
- Declaration requirements
- Declaration preparation
- Declaration review and approval
- Declaration availability

**CE Marking**
- CE marking requirements
- CE marking affixing
- CE marking rules
- CE marking compliance

---

### 10.4 Training Delivery Methods

**Initial Training:**
- Instructor-led classroom or virtual training
- Includes interactive exercises and case studies
- Hands-on practice with declaration templates
- Group discussions of complex scenarios

**Annual Refresher:**
- E-learning modules for core content review
- Live update sessions for regulatory changes
- Case study reviews of recent conformity assessments
- Knowledge assessment

**On-the-Job Training:**
- Mentoring for new conformity assessment staff
- Job shadowing during conformity assessments
- Supervised conformity assessment for first 3 AI systems

**Just-in-Time Training:**
- Quick reference guides and job aids
- Video tutorials on specific topics
- Help desk support from experienced staff

---

### 10.5 Training Effectiveness Measurement

**Assessment Methods:**
- Written exams for knowledge retention
- Practical exercises for skill application
- On-the-job observations for competency validation
- Feedback surveys for training quality

**Competency Validation:**
- Chief Legal Officers: Must demonstrate ability to conduct conformity assessment for 1 sample AI system with 100% compliance before independent work
- All staff: Must pass knowledge assessments with minimum required scores

**Training Metrics:**
| Metric | Target | Frequency |
|--------|--------|-----------|
| Training completion rate | 100% | Quarterly |
| Assessment pass rate (first attempt) | ≥ 90% | Per training |
| Training effectiveness score (survey) | ≥ 4.0/5.0 | Per training |
| Time to competency (Chief Legal Officers) | < 45 days | Per person |

---

### 10.6 Training Records

**Records Maintained:**
- Training attendance records
- Assessment scores
- Competency validations
- Refresher training completion
- Individual training transcripts

**Retention:** 10 years (to align with EU AI Act documentation retention)

**Access:** HR, Chief Legal Officer, Internal Audit, Competent Authorities (upon request)

---

## DEFINITIONS

| Term | Definition | Source |
|------|------------|--------|
| **Conformity Assessment** | Process demonstrating AI system meets EU AI Act requirements | EU AI Act Article 43 |
| **Internal Control** | Self-assessment procedure (Annex VI) | EU AI Act Annex VI |
| **Notified Body** | Third-party organization designated to conduct conformity assessments | EU AI Act Article 44 |
| **EU Declaration of Conformity** | Document declaring AI system compliance | EU AI Act Article 47 |
| **CE Marking** | Marking indicating EU conformity | EU AI Act Article 48 |
| **Substantial Modification** | Change affecting compliance or intended purpose | EU AI Act Article 43 |
| **Annex III High-Risk AI** | AI systems listed in Annex III as high-risk | EU AI Act Annex III |
| **Annex I Product Safety AI** | AI systems that are safety components of products listed in Annex I | EU AI Act Annex I |
| **EU-Type Examination Certificate** | Certificate issued by notified body (Annex VII) | EU AI Act Article 44 |

---

## LINK WITH AI ACT AND ISO42001

### 12.1 EU AI Act Regulatory Mapping

This standard implements the following EU AI Act requirements:

| EU AI Act Provision | Article | Requirement Summary | Implemented By (Controls) |
|-------------------|---------|-------------------|------------------------|
| **Conformity Assessment** | Article 43 | Conformity assessment before market placement | All controls (CA-001 through CA-013) |
| **Annex VI - Internal Control** | Annex VI | Self-assessment procedure | CA-001, CA-002, CA-003 |
| **Annex VII - QMS + Technical Documentation** | Annex VII | Notified body assessment | CA-004, CA-005, CA-006, CA-007 |
| **EU Declaration of Conformity** | Article 47 | Declaration requirements | CA-008, CA-009, CA-010 |
| **CE Marking** | Article 48 | CE marking requirements | CA-011, CA-012 |
| **Conformity Maintenance** | Article 43 | Ongoing conformity maintenance | CA-013 |

---

### 12.2 ISO/IEC 42001:2023 Alignment

This standard aligns with ISO/IEC 42001:2023 as follows:

| ISO 42001 Clause | Requirement | Implementation in This Standard |
|-----------------|-------------|-------------------------------|
| **Clause 4.4: AI management system** | Establish AI management system | Conformity assessment verifies QMS |
| **Clause 9.2: Internal audit** | Conduct internal audits | Internal audits support conformity assessment |
| **Clause 9.3: Management review** | Conduct management reviews | Management review supports conformity |

---

### 12.3 Relationship to Other Standards

This conformity assessment standard integrates with other AI Act standards:

| Related Standard | Integration Point | Rationale |
|----------------|-------------------|-----------|
| **STD-AI-001: Classification** | Classification determines if conformity assessment required | High-risk AI requires conformity assessment |
| **STD-AI-002: Risk Management** | Risk management evidence in conformity assessment | Conformity assessment verifies risk management |
| **STD-AI-003: Data Governance** | Data governance evidence in conformity assessment | Conformity assessment verifies data governance |
| **STD-AI-004: Technical Documentation** | Technical documentation required for conformity assessment | Technical documentation is conformity assessment input |
| **STD-AI-009: Quality Management** | QMS required for Annex VII assessment | QMS is Annex VII assessment component |

---

### 12.4 References and Related Documents

**EU AI Act (Regulation (EU) 2024/1689):**
- Article 43: Conformity Assessment
- Article 44: Certificates
- Article 47: EU Declaration of Conformity
- Article 48: CE Marking
- Annex VI: Internal Control Procedure
- Annex VII: Assessment Based on Quality Management System and Technical Documentation Assessment

**ISO/IEC Standards:**
- ISO/IEC 42001:2023: Information technology — Artificial intelligence — Management system

**Internal Documents:**
- POL-AI-001: Artificial Intelligence Policy (parent policy)
- STD-AI-001: AI System Classification Standard
- STD-AI-002: AI Risk Management Standard
- STD-AI-003: AI Data Governance Standard
- STD-AI-004: AI Technical Documentation Standard
- STD-AI-009: AI Quality Management Standard
- PROC-AI-CA-001, -002, -003: Conformity assessment procedures

---

## APPROVAL AND AUTHORIZATION

| Role | Name | Title | Signature | Date |
|------|------|-------|-----------|------|
| **Prepared By** | Michael Brown | Chief Legal Officer | _________________ | ________ |
| **Reviewed By** | Sarah Johnson | AI Act Program Manager | _________________ | ________ |
| **Reviewed By** | David Lee | Chief Technology Officer | _________________ | ________ |
| **Reviewed By** | Jane Doe | Chief Strategy & Risk Officer | _________________ | ________ |
| **Approved By** | Jane Doe | AI Governance Committee Chair | _________________ | ________ |

**Effective Date:** 2025-08-01  
**Next Review Date:** 2026-08-01  
**Review Frequency:** Annually or upon regulatory change

---

**END OF STANDARD STD-AI-010**

---

*This standard is a living document. Feedback and improvement suggestions should be directed to the Chief Legal Officer.*
