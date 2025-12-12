# AI Registration Standard

**Document Type:** Standard  
**Standard ID:** STD-AI-011  
**Standard Title:** AI Registration Standard  
**Version:** 1.0  
**Effective Date:** 2025-08-01  
**Next Review Date:** 2026-08-01  
**Review Frequency:** Annually or upon regulatory change  
**Parent Policy:** POL-AI-001 - Artificial Intelligence Policy  
**Owner:** Chief Legal Officer  
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
| 0.1 | 2025-07-12 | Michael Brown, Chief Legal Officer | Initial draft | - | - |
| 0.2 | 2025-07-28 | Michael Brown, Chief Legal Officer | Added Article 49/60 details | - | - |
| 0.3 | 2025-08-01 | Michael Brown, Chief Legal Officer | Incorporated stakeholder feedback | - | - |
| 1.0 | 2025-08-01 | Michael Brown, Chief Legal Officer | Final version approved - GRC restructured | 2025-07-25 | Jane Doe, AI Governance Committee Chair |

---

## OBJECTIVE

This standard defines requirements for registering high-risk AI systems in the EU database before market placement in compliance with EU AI Act Articles 49 and 60.

**Primary Goals:**
- Prepare for AI system registration with all required information
- Submit registration to EU database before market placement
- Maintain registration accuracy through timely updates

---

## SCOPE AND APPLICABILITY

### 2.1 Mandatory Applicability

This standard is **mandatory** for:
- All high-risk AI systems before market placement (EU AI Act Article 49)
- All updates when AI system changes
- All substantial modifications requiring registration updates

### 2.2 Registration Requirements Covered

- Registration information gathering
- Registration submission to EU database
- Registration updates and maintenance

### 2.3 Out of Scope

- Non-high-risk AI systems (no registration required)
- Registration outside EU AI Act scope

---

## CONTROL STANDARD

### Control REG-001: Registration Information Gathering

**Control ID:** REG-001  
**Control Name:** Registration Information Preparation  
**Control Type:** Preventive  
**Control Frequency:** Per high-risk AI system  
**Risk Level:** High

#### Control Objective

Gather and verify all required registration information per Article 49(1) to ensure complete and accurate registration data is available before submission to EU database.

#### Control Requirements

**CR-001.1: Registration Information Collection**

Gather all required registration information per Article 49(1).

**Required Information (Article 49(1)):**

| Information Element | Description | Source | Required | Verification |
|-------------------|-------------|--------|----------|-------------|
| **Provider Name** | Legal name of provider | Company records | YES | Legal verification |
| **Provider Contact Details** | Address, phone, email | Company records | YES | Contact verification |
| **AI System Name** | Name of AI system | Technical documentation | YES | Technical verification |
| **AI System Type** | Type/category of AI system | Technical documentation | YES | Technical verification |
| **Intended Purpose** | Description of intended purpose | Technical documentation | YES | Technical verification |
| **Status** | On market, in service, withdrawn | Market status | YES | Status verification |
| **EU Member States** | Member States where available | Market information | YES | Market verification |
| **Annex III Reference** | Reference to relevant Annex III entry | Classification (STD-AI-001) | YES | Classification verification |
| **Conformity Assessment Procedure** | Annex VI or Annex VII | Conformity assessment (STD-AI-010) | YES | Conformity verification |
| **EU Declaration of Conformity** | Reference to declaration | Declaration (STD-AI-010) | YES | Declaration verification |
| **Instructions for Use** | Reference to instructions | User documentation (STD-AI-006) | YES | Documentation verification |
| **CE Marking Information** | CE marking details | CE marking (STD-AI-010) | YES | CE marking verification |

**Mandatory Actions:**
- Gather all required information
- Verify information accuracy
- Compile registration package
- Review for completeness
- Obtain approvals
- Archive registration package

**Information Verification:**

| Verification Type | Method | Owner | Evidence |
|------------------|--------|-------|----------|
| **Legal Verification** | Review company records | Legal | Legal records |
| **Technical Verification** | Review technical documentation | CTO | Technical documentation |
| **Market Verification** | Review market information | Product Management | Market records |
| **Classification Verification** | Review classification | AI Act Program Manager | Classification records |
| **Conformity Verification** | Review conformity assessment | Chief Legal Officer | Conformity records |

**Evidence Required:**
- Registration information package
- Verification records
- Approval records
- Archive records

**Audit Verification:**
- Verify all required information gathered
- Confirm information verified
- Check approvals obtained
- Validate registration package compiled

---

### Control REG-002: Registration Submission

**Control ID:** REG-002  
**Control Name:** EU Database Registration Submission  
**Control Type:** Preventive  
**Control Frequency:** Per high-risk AI system, before market placement  
**Risk Level:** High

#### Control Objective

Submit registration to EU database before market placement per Article 49 to ensure high-risk AI systems are registered before being placed on the market.

#### Control Requirements

**CR-002.1: Registration Submission Process**

Submit registration to EU database using official portal.

**Submission Requirements:**

| Requirement | Specification | Implementation |
|-------------|---------------|----------------|
| **Timing** | Before placing on market | Submit before market placement |
| **Portal** | Official EU database portal | Use official portal |
| **Information Completeness** | All required information provided | Complete all fields |
| **Confirmation** | Obtain registration confirmation | Track confirmation |
| **Registration Number** | Maintain registration number | Archive registration number |

**Mandatory Actions:**
- Access EU database portal
- Complete registration form
- Submit registration
- Verify submission
- Obtain confirmation
- Record registration number
- Block market placement if not registered

**Registration Submission Checklist:**

| Step | Description | Status | Evidence |
|------|-------------|--------|----------|
| **Portal Access** | Access official EU database portal | ☐ | Portal access records |
| **Form Completion** | Complete all registration fields | ☐ | Form completion records |
| **Information Verification** | Verify all information accurate | ☐ | Verification records |
| **Submission** | Submit registration | ☐ | Submission records |
| **Confirmation** | Obtain registration confirmation | ☐ | Confirmation records |
| **Registration Number** | Record registration number | ☐ | Registration number records |
| **Market Placement Authorization** | Authorize market placement | ☐ | Authorization records |

**Evidence Required:**
- Registration submission records
- Confirmation from EU database
- Registration number
- Market placement authorization

**Audit Verification:**
- Verify registration submitted before market placement
- Confirm official portal used
- Check all information provided
- Validate confirmation obtained
- Verify registration number recorded
- Check market placement blocked if not registered

---

### Control REG-003: Registration Updates

**Control ID:** REG-003  
**Control Name:** Registration Update and Maintenance  
**Control Type:** Detective  
**Control Frequency:** As needed, when changes occur  
**Risk Level:** Medium

#### Control Objective

Update registration when changes occur to ensure registration information remains accurate and current throughout AI system lifecycle.

#### Control Requirements

**CR-003.1: Registration Update Process**

Monitor for update triggers and update registration promptly.

**Update Triggers:**

| Trigger | Description | Update Required | Timeline |
|---------|-------------|----------------|----------|
| **Substantial Modifications** | Change affecting compliance or intended purpose | YES | < 30 days |
| **Intended Purpose Change** | Change to intended purpose | YES | < 30 days |
| **Market Availability Change** | Change in market availability | YES | < 30 days |
| **Withdrawal from Market** | AI system withdrawn from market | YES | < 30 days |
| **Provider Information Change** | Change in provider information | YES | < 30 days |
| **Status Change** | Change in system status | YES | < 30 days |

**Mandatory Actions:**
- Monitor for update triggers
- Assess if update required
- Prepare update information
- Update registration
- Submit updates
- Obtain confirmation
- Document update

**Update Process:**

| Step | Description | Owner | Timeline |
|------|-------------|-------|----------|
| **Trigger Detection** | Detect update trigger | AI Act Program Manager | Immediate |
| **Update Assessment** | Assess if update required | Chief Legal Officer | 1 day |
| **Information Preparation** | Prepare update information | AI Act Program Manager | 2 days |
| **Update Submission** | Submit update to EU database | AI Act Program Manager | 1 day |
| **Confirmation** | Obtain update confirmation | AI Act Program Manager | 1 day |
| **Documentation** | Document update | AI Act Program Manager | 1 day |

**Evidence Required:**
- Update trigger detection records
- Update assessment records
- Update submission records
- Submission confirmations
- Update documentation

**Audit Verification:**
- Verify update triggers monitored
- Confirm updates submitted within timeline
- Check update confirmations obtained
- Validate updates documented

---

## SUPPORTING PROCEDURES

This standard is implemented through the following detailed procedure:

### Procedure PROC-AI-REG-001: AI System Registration Procedure

**Purpose:** Define step-by-step process for registering AI systems  
**Owner:** Chief Legal Officer  
**Implements:** Controls REG-001, REG-002, REG-003

**Procedure Steps:**
1. Gather registration information - Control REG-001
2. Verify information accuracy
3. Compile registration package
4. Submit registration - Control REG-002
5. Obtain confirmation
6. Record registration number
7. Monitor for updates - Control REG-003
8. Update registration as needed

**Outputs:**
- Registration information package
- Registration submission records
- Registration confirmation
- Registration number
- Update records

---

## COMPLIANCE

### 5.1 Compliance Monitoring

**Monitoring Approach:**
Continuous automated monitoring supplemented by monthly manual reviews and quarterly comprehensive audits.

**Compliance Metrics:**

| Metric | Target | Measurement Method | Frequency | Owner |
|--------|--------|--------------------|-----------|-------|
| Registration Completion | 100% | % of high-risk AI registered before market placement | Monthly | Chief Legal Officer |
| Registration Accuracy | 100% | % of registrations with no errors | Per registration | Chief Legal Officer |
| Update Timeliness | < 30 days | Average days to update registration | Per update | Chief Legal Officer |
| Update Coverage | 100% | % of required updates completed | Monthly | Chief Legal Officer |

**Monitoring Tools:**
- Registration Dashboard
- Compliance Reports
- Monthly compliance reports
- Quarterly AI Governance Committee reviews

---

### 5.2 Internal Audit Requirements

**Audit Frequency:** Annually (minimum)

**Audit Scope:**
- Registration completion
- Registration information accuracy
- Registration submission timeliness
- Registration update coverage
- Controls effectiveness (REG-001 through REG-003)

**Audit Activities:**
- Review 100% of high-risk AI for registration
- Sample 20% of registrations for accuracy review
- Test registration submission process
- Review registration updates
- Verify registration numbers recorded

**Audit Outputs:**
- Annual Registration Audit Report
- Findings and recommendations
- Corrective action plans for deficiencies

---

### 5.3 External Audit / Regulatory Inspection

**Preparation:**
- Maintain audit-ready registration documentation at all times
- Designate Chief Legal Officer and Legal as regulatory liaisons
- Prepare standard response procedures for authority requests

**Provide to Auditors/Regulators:**
- Registration records
- Registration confirmations
- Registration numbers
- Update records
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

| Activity | Chief Legal Officer | AI Act Program Manager | AI System Owner | CTO | Product Management |
|----------|-------------------|------------------------|-----------------|-----|-------------------|
| **Registration Information Gathering** | **R/A** | **R** | C | C | C |
| **Information Verification** | **R** | **R** | C | C | C |
| **Registration Submission** | **R/A** | **R** | I | I | I |
| **Registration Updates** | **R** | **R** | **A** | I | C |
| **Registration Monitoring** | **R** | **R** | C | I | C |

**RACI Legend:**
- **R** = Responsible (does the work)
- **A** = Accountable (ultimately answerable)
- **C** = Consulted (provides input)
- **I** = Informed (kept up-to-date)

---

### 6.2 Role Descriptions

**Chief Legal Officer**
- **Primary Responsibility:** Owns registration framework, ensures compliance
- **Key Activities:**
  - Oversees registration process
  - Ensures regulatory compliance
  - Approves registrations
  - Reports to management
- **Required Competencies:** EU AI Act Article 49-60, registration procedures, regulatory compliance

**AI Act Program Manager**
- **Primary Responsibility:** Manages registration process
- **Key Activities:**
  - Coordinates registration
  - Gathers registration information
  - Submits registrations
  - Monitors for updates
  - Tracks registration status
- **Required Competencies:** Registration procedures, EU database portal, project management

**AI System Owner**
- **Primary Responsibility:** Accountable for registration of their AI system
- **Key Activities:**
  - Provides technical information
  - Supports registration
  - Notifies of changes requiring updates
- **Required Competencies:** AI system knowledge, registration awareness

**CTO**
- **Primary Responsibility:** Provides technical information for registration
- **Key Activities:**
  - Provides technical documentation references
  - Verifies technical information
- **Required Competencies:** Technical documentation, AI system knowledge

**Product Management**
- **Primary Responsibility:** Provides market information for registration
- **Key Activities:**
  - Provides market availability information
  - Notifies of market changes
- **Required Competencies:** Market information, product management

---

## EXCEPTIONS

### 7.1 Exception Philosophy

Registration is a **mandatory regulatory requirement** for high-risk AI systems before market placement. Exceptions are granted restrictively and only where compensating controls adequately mitigate risks.

---

### 7.2 Allowed Exceptions

The following exceptions **may** be granted with proper justification and approval:

| Exception Type | Justification Required | Maximum Duration | Approval Authority | Compensating Controls |
|----------------|----------------------|------------------|-------------------|---------------------|
| **Extended Update Timeline** | Technical issues preventing timely update | 15 days | Chief Legal Officer | Interim documentation; Accelerated plan |

---

### 7.3 Prohibited Exceptions

The following exceptions **cannot** be granted under any circumstances:

❌ **Skipping registration for high-risk AI** - Mandatory per Article 49, no exceptions  
❌ **Placing high-risk AI on market without registration** - Illegal, no exceptions  
❌ **Skipping registration updates** - Required for ongoing compliance  

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
- Close exception when normal registration completed
- Document lessons learned

---

## ENFORCEMENT

### 8.1 Non-Compliance Consequences

| Violation | Severity | Consequence | Remediation Required |
|-----------|----------|-------------|---------------------|
| **Placing high-risk AI on market without registration** | Critical | Immediate removal from market; Legal investigation | Register immediately; Root cause analysis |
| **Incomplete registration information** | High | Escalation to AI Governance Committee | Complete registration within 5 business days |
| **Registration update not submitted** | High | Escalation to management | Submit update within 5 business days |
| **Inaccurate registration information** | Medium | Written warning | Correct information within 10 business days |

---

### 8.2 Escalation Procedures

**Level 1: Chief Legal Officer**
- Minor procedural violations
- Documentation deficiencies
- Timeline delays < 5 days
- **Action:** Written warning, corrective action required

**Level 2: Chief Legal Officer + AI Governance Committee**
- Repeated violations
- Incomplete registrations
- Missing updates
- **Action:** Formal review, corrective action plan, management notification

**Level 3: AI Governance Committee**
- Placing AI on market without registration
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
- ⚠️ High-risk AI system placed on market without registration
- ⚠️ Regulatory inquiry or inspection related to registration
- ⚠️ Critical registration errors affecting compliance

---

### 8.4 Disciplinary Actions

Individuals responsible for registration violations may be subject to:
- Verbal or written warning
- Mandatory retraining
- Performance improvement plan
- Reassignment of responsibilities
- Suspension (with pay during investigation)
- Termination (for egregious violations, e.g., knowingly placing AI on market without registration)

**Factors Considered:**
- Intent (knowing violation vs. honest mistake)
- Severity of violation
- Impact (actual or potential)
- Cooperation with remediation
- Prior violation history

---

## KEY PERFORMANCE INDICATORS (KPIs)

### 9.1 Registration KPIs

| KPI ID | KPI Name | Definition | Target | Measurement Method | Frequency | Owner | Reporting To |
|--------|----------|------------|--------|-------------------|-----------|-------|--------------|
| **KPI-REG-001** | Registration Completion | % of high-risk AI registered before market placement | 100% | (# registered / # high-risk AI) × 100 | Monthly | Chief Legal Officer | AI Governance Committee |
| **KPI-REG-002** | Registration Accuracy | % of registrations with no errors | 100% | (# error-free / # total registrations) × 100 | Per registration | Chief Legal Officer | Management |
| **KPI-REG-003** | Update Timeliness | Average days to update registration | < 30 days | Σ (update days) / # updates | Per update | Chief Legal Officer | Management |
| **KPI-REG-004** | Update Coverage | % of required updates completed | 100% | (# updates completed / # required updates) × 100 | Monthly | Chief Legal Officer | AI Governance Committee |
| **KPI-REG-005** | Registration Number Tracking | % of registrations with recorded numbers | 100% | (# with numbers / # total registrations) × 100 | Monthly | Chief Legal Officer | Management |

---

### 9.2 KPI Dashboards and Reporting

**Real-Time Dashboard** (Chief Legal Officer access)
- Current registration status
- Registration completion rate
- Update status
- Registration numbers
- Compliance status

**Monthly Management Report**
- KPI-REG-001, 002, 004, 005
- Trend analysis (vs. previous month)
- Issues and risks
- Planned actions

**Quarterly AI Governance Committee Report**
- All KPIs
- Registration effectiveness assessment
- Internal audit findings (if conducted)
- Exception register review

**Annual Executive Report**
- Full-year KPI performance
- Registration maturity assessment
- Strategic recommendations
- Regulatory outlook

---

### 9.3 KPI Thresholds and Alerts

| KPI | Green (Good) | Yellow (Warning) | Red (Critical) | Alert Action |
|-----|-------------|------------------|----------------|--------------|
| **Registration Completion** | 100% | 95-99% | < 95% | Red: Immediate escalation to AI Governance Committee Chair |
| **Registration Accuracy** | 100% | 95-99% | < 95% | Red: Immediate escalation to AI Governance Committee |
| **Update Timeliness** | < 30 days | 30-45 days | > 45 days | Red: Escalate to AI Governance Committee |
| **Update Coverage** | 100% | 95-99% | < 95% | Red: Escalate to AI Governance Committee |

---

## TRAINING REQUIREMENTS

### 10.1 Training Program Overview

All personnel involved in registration must complete role-specific training to ensure competency in EU AI Act Article 49-60 requirements, registration procedures, and EU database portal usage.

---

### 10.2 Role-Based Training Requirements

| Role | Training Course | Duration | Content | Frequency | Assessment Required |
|------|----------------|----------|---------|-----------|-------------------|
| **Chief Legal Officer** | Registration Expert Training | 12 hours | EU AI Act Article 49-60; Registration procedures; EU database | Initial + annually | Yes - Written exam (≥90%) |
| **AI Act Program Manager** | Registration Management Training | 8 hours | Registration procedures; EU database portal; Information gathering | Initial + annually | Yes - Practical exercise |
| **AI System Owners** | Registration Overview | 2 hours | Registration requirements; Responsibilities; Information provision | At onboarding + annually | Yes - Knowledge check (≥80%) |
| **All AI Development Staff** | Registration Awareness | 1 hour | Registration basics; Requirements; Awareness | At onboarding + annually | Yes - Knowledge check (≥80%) |

---

### 10.3 Training Content by Topic

**EU AI Act Article 49-60 Requirements**
- Registration requirement (Article 49)
- EU database (Article 60)
- Compliance obligations

**Registration Procedures**
- Information gathering
- Registration submission
- Registration updates
- EU database portal usage

**Registration Information**
- Required information elements
- Information verification
- Information accuracy

---

### 10.4 Training Delivery Methods

**Initial Training:**
- Instructor-led classroom or virtual training
- Includes interactive exercises and case studies
- Hands-on practice with EU database portal
- Group discussions of complex scenarios

**Annual Refresher:**
- E-learning modules for core content review
- Live update sessions for regulatory changes
- Case study reviews of recent registrations
- Knowledge assessment

**On-the-Job Training:**
- Mentoring for new registration staff
- Job shadowing during registrations
- Supervised registration for first 3 AI systems

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
- AI Act Program Managers: Must demonstrate ability to register 1 sample AI system with 100% accuracy before independent work
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

**Access:** HR, Chief Legal Officer, Internal Audit, Competent Authorities (upon request)

---

## DEFINITIONS

| Term | Definition | Source |
|------|------------|--------|
| **Registration** | Process of registering high-risk AI system in EU database | EU AI Act Article 49 |
| **EU Database** | EU database for high-risk AI systems | EU AI Act Article 60 |
| **Registration Number** | Unique identifier assigned upon registration | EU AI Act Article 49 |
| **Substantial Modification** | Change affecting compliance or intended purpose | EU AI Act Article 43 |
| **Market Placement** | Making AI system available on EU market | EU AI Act Article 3 |

---

## LINK WITH AI ACT AND ISO42001

### 12.1 EU AI Act Regulatory Mapping

This standard implements the following EU AI Act requirements:

| EU AI Act Provision | Article | Requirement Summary | Implemented By (Controls) |
|-------------------|---------|-------------------|------------------------|
| **Registration** | Article 49 | Registration before market placement | All controls (REG-001 through REG-003) |
| **EU Database** | Article 60 | EU database specifications | REG-002, REG-003 |

---

### 12.2 ISO/IEC 42001:2023 Alignment

This standard aligns with ISO/IEC 42001:2023 as follows:

| ISO 42001 Clause | Requirement | Implementation in This Standard |
|-----------------|-------------|-------------------------------|
| **Clause 4.4: AI management system** | Establish AI management system | Registration supports AI management system |
| **Clause 9.1: Monitoring, measurement, analysis, and evaluation** | Monitor and measure | Registration monitoring |

---

### 12.3 Relationship to Other Standards

This registration standard integrates with other AI Act standards:

| Related Standard | Integration Point | Rationale |
|----------------|-------------------|-----------|
| **STD-AI-001: Classification** | Classification determines if registration required | High-risk AI requires registration |
| **STD-AI-010: Conformity Assessment** | Conformity assessment information in registration | Registration includes conformity assessment information |

---

### 12.4 References and Related Documents

**EU AI Act (Regulation (EU) 2024/1689):**
- Article 49: Registration
- Article 60: EU Database

**ISO/IEC Standards:**
- ISO/IEC 42001:2023: Information technology — Artificial intelligence — Management system

**Internal Documents:**
- POL-AI-001: Artificial Intelligence Policy (parent policy)
- STD-AI-001: AI System Classification Standard
- STD-AI-010: AI Conformity Assessment Standard
- PROC-AI-REG-001: Registration procedure

---

## APPROVAL AND AUTHORIZATION

| Role | Name | Title | Signature | Date |
|------|------|-------|-----------|------|
| **Prepared By** | Michael Brown | Chief Legal Officer | _________________ | ________ |
| **Reviewed By** | Sarah Johnson | AI Act Program Manager | _________________ | ________ |
| **Reviewed By** | Jane Doe | Chief Strategy & Risk Officer | _________________ | ________ |
| **Approved By** | Jane Doe | AI Governance Committee Chair | _________________ | ________ |

**Effective Date:** 2025-08-01  
**Next Review Date:** 2026-08-01  
**Review Frequency:** Annually or upon regulatory change

---

**END OF STANDARD STD-AI-011**

---

*This standard is a living document. Feedback and improvement suggestions should be directed to the Chief Legal Officer.*
