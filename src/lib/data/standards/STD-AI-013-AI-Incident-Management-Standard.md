# AI Incident Management Standard

**Document Type:** Standard  
**Standard ID:** STD-AI-013  
**Standard Title:** AI Incident Management Standard  
**Version:** 1.0  
**Effective Date:** 2025-08-01  
**Next Review Date:** 2026-08-01  
**Review Frequency:** Annually or upon regulatory change  
**Parent Policy:** POL-AI-001 - Artificial Intelligence Policy  
**Owner:** AI Risk Manager  
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
| 0.1 | 2025-07-18 | AI Risk Manager | Initial draft | - | - |
| 0.2 | 2025-08-01 | AI Risk Manager | Added Article 73 details | - | - |
| 0.3 | 2025-08-01 | AI Risk Manager | Incorporated stakeholder feedback | - | - |
| 1.0 | 2025-08-01 | AI Risk Manager | Final version approved - GRC restructured | 2025-07-25 | Jane Doe, AI Governance Committee Chair |

---

## OBJECTIVE

This standard defines requirements for reporting serious incidents and malfunctions to competent authorities in compliance with EU AI Act Article 73.

**Primary Goals:**
- Detect and classify incidents per Article 73
- Report serious incidents to authorities within 15 days per Article 73(2)
- Follow up on incidents and implement improvements

---

## SCOPE AND APPLICABILITY

### 2.1 Mandatory Applicability

This standard is **mandatory** for:
- All high-risk AI systems (EU AI Act Article 73)
- All serious incidents and malfunctions
- All incidents affecting health, safety, or fundamental rights

### 2.2 Incident Management Requirements Covered

- Incident detection and classification
- Serious incident reporting
- Incident investigation
- Corrective actions
- Lessons learned

### 2.3 Out of Scope

- Non-serious incidents (handled by standard incident management)
- Incidents outside EU AI Act scope

---

## CONTROL STANDARD

### Control INC-001: Incident Detection and Classification

**Control ID:** INC-001  
**Control Name:** Incident Detection and Serious Incident Classification  
**Control Type:** Detective  
**Control Frequency:** Continuous  
**Risk Level:** High

#### Control Objective

Detect incidents and classify them as serious or not per Article 73(1) to ensure serious incidents are identified promptly and reported to authorities.

#### Control Requirements

**CR-001.1: Incident Detection**

Implement comprehensive incident detection mechanisms.

**Detection Methods:**

| Method | Description | Implementation | Frequency |
|--------|-------------|----------------|-----------|
| **Automated Monitoring** | Automated monitoring and alerting | Monitoring systems | Real-time |
| **User Reports** | Reports from users | User support system | As needed |
| **Deployer Reports** | Reports from deployers | Deployer communication | As needed |
| **Internal Testing** | Issues found in testing | Testing processes | Continuous |
| **Post-Market Monitoring** | Issues from PMM | PMM system (STD-AI-012) | Continuous |

**Mandatory Actions:**
- Implement detection mechanisms
- Monitor continuously
- Triage incidents
- Escalate serious incidents immediately
- Document all incidents

**CR-001.2: Serious Incident Classification**

Classify incidents as serious or not per Article 73(1).

**Serious Incident Definition (Article 73(1)):**

Incident or malfunctioning that directly or indirectly leads to:

| Criterion | Description | Examples | Classification |
|-----------|-------------|----------|----------------|
| **Death** | Death of a person | Fatal accident | Serious |
| **Serious Health Damage** | Serious damage to health of a person | Severe injury, hospitalization | Serious |
| **Critical Infrastructure Disruption** | Serious and irreversible disruption of management/operation of critical infrastructure | System failure affecting critical services | Serious |
| **Fundamental Rights Infringement** | Infringement of fundamental rights protected by Union law | Discrimination, privacy violation | Serious |

**Mandatory Actions:**
- Assess incident severity
- Classify as serious or not
- Document assessment
- Escalate serious incidents immediately
- Notify stakeholders

**Evidence Required:**
- Incident detection logs
- Severity assessments
- Classification records
- Escalation records
- Notification records

**Audit Verification:**
- Verify incident detection implemented
- Confirm incidents classified
- Check serious incidents escalated
- Validate assessments documented

---

### Control INC-002: Immediate Incident Response

**Control ID:** INC-002  
**Control Name:** Immediate Incident Response and Notification  
**Control Type:** Corrective  
**Control Frequency:** As needed, within 24 hours  
**Risk Level:** Critical

#### Control Objective

Respond immediately to serious incidents and notify stakeholders per Article 73 to ensure rapid response and proper escalation.

#### Control Requirements

**CR-002.1: Immediate Response Actions**

Take immediate actions upon serious incident detection.

**Immediate Actions (Day 0-1):**

| Action | Description | Timeline | Owner |
|--------|-------------|----------|-------|
| **Incident Assessment** | Assess if incident is serious | < 1 hour | AI Risk Manager |
| **Stakeholder Notification** | Notify key stakeholders | < 2 hours | AI Risk Manager |
| **Incident Response Initiation** | Initiate incident response | < 2 hours | Incident Response Team |
| **Incident Containment** | Contain incident impact | < 4 hours | Incident Response Team |
| **Legal Notification** | Notify Legal immediately | < 1 hour | AI Risk Manager |

**Stakeholder Notification:**

| Stakeholder | Notification Method | Timeline | Information Provided |
|-------------|-------------------|----------|---------------------|
| **AI System Owner** | Phone, email | < 1 hour | Incident summary, severity |
| **AI Governance Committee** | Phone, email | < 1 hour | Incident summary, severity |
| **Legal** | Phone, email | < 1 hour | Incident summary, legal implications |
| **Executive Management** | Phone, email | < 2 hours | Incident summary, business impact |
| **Product Director** | Email | < 2 hours | Incident summary, product impact |

**Mandatory Actions:**
- Assess severity immediately
- Notify stakeholders per timeline
- Initiate incident response
- Contain incident
- Document all actions

**Evidence Required:**
- Incident assessment
- Notification records
- Response initiation records
- Containment records
- Action logs

**Audit Verification:**
- Verify immediate response taken
- Confirm stakeholders notified per timeline
- Check incident response initiated
- Validate incident contained

---

### Control INC-003: Incident Investigation and Report Preparation

**Control ID:** INC-003  
**Control Name:** Serious Incident Investigation and Report Preparation  
**Control Type:** Corrective  
**Control Frequency:** Per serious incident, within 10 days  
**Risk Level:** High

#### Control Objective

Investigate serious incidents and prepare serious incident report per Article 73(2) to provide complete information to competent authorities.

#### Control Requirements

**CR-003.1: Incident Investigation**

Conduct comprehensive investigation of serious incident.

**Investigation Requirements (Day 1-10):**

| Requirement | Description | Timeline | Owner |
|-------------|-------------|----------|-------|
| **Investigation Initiation** | Initiate investigation | Day 1 | AI Risk Manager |
| **Information Gathering** | Gather all relevant information | Day 1-7 | Investigation Team |
| **Root Cause Analysis** | Analyze root causes | Day 3-8 | Investigation Team |
| **Impact Assessment** | Assess impact | Day 5-9 | Investigation Team |
| **Findings Documentation** | Document findings | Day 7-10 | Investigation Team |

**Information to Gather:**

| Information Type | Description | Source | Required |
|-----------------|-------------|--------|----------|
| **Incident Details** | What happened, when, where | Incident logs, witnesses | YES |
| **AI System Details** | System identification, version | Technical documentation | YES |
| **Persons Affected** | Who was affected, how many | Incident reports, user data | YES |
| **Root Causes** | Why it happened | Root cause analysis | YES |
| **Impact** | What was the impact | Impact assessment | YES |
| **Corrective Measures** | What was done | Response records | YES |

**Mandatory Actions:**
- Conduct investigation
- Gather all relevant information
- Conduct root cause analysis
- Assess impact
- Document findings
- Prepare investigation report

**CR-003.2: Serious Incident Report Preparation**

Prepare serious incident report per Article 73(2).

**Report Contents (Article 73(2)):**

| Section | Content | Required | Source |
|---------|---------|----------|--------|
| **Incident Identification** | Unique identifier, reference number | YES | Incident system |
| **AI System Details** | Name, type, version, registration number | YES | Technical documentation |
| **Date and Time** | When incident occurred | YES | Incident logs |
| **Description** | Description of incident | YES | Investigation report |
| **Nature and Cause** | Nature and cause of incident | YES | Root cause analysis |
| **Persons Affected** | Number and details of persons affected | YES | Impact assessment |
| **Corrective Measures** | Corrective measures taken | YES | Response records |
| **Preventive Measures** | Preventive measures planned | YES | Action plan |

**Mandatory Actions:**
- Prepare serious incident report
- Include all required information
- Obtain legal review
- Obtain executive approval
- Finalize report

**Evidence Required:**
- Investigation report
- Root cause analysis
- Impact assessment
- Serious incident report (RPT-AI-INC-XXX)
- Legal review records
- Approval records

**Audit Verification:**
- Verify investigation conducted
- Confirm all information gathered
- Check report prepared with all required elements
- Validate legal review and approval obtained

---

### Control INC-004: Regulatory Reporting

**Control ID:** INC-004  
**Control Name:** Serious Incident Regulatory Reporting  
**Control Type:** Corrective  
**Control Frequency:** Per serious incident, within 15 days  
**Risk Level:** Critical

#### Control Objective

Submit serious incident report to competent authority within 15 days per Article 73(2) to comply with regulatory reporting obligations.

#### Control Requirements

**CR-004.1: Regulatory Submission**

Submit serious incident report to competent authority.

**Submission Requirements (Day 10-15):**

| Requirement | Description | Timeline | Owner |
|-------------|-------------|----------|-------|
| **Report Finalization** | Finalize report | Day 10-12 | AI Risk Manager |
| **Submission Preparation** | Prepare for submission | Day 12-13 | AI Risk Manager |
| **Regulatory Submission** | Submit to competent authority | Day 13-15 | Legal |
| **Confirmation** | Obtain confirmation of receipt | Day 15 | Legal |
| **Follow-Up** | Respond to follow-up questions | As needed | Legal + AI Risk Manager |

**Submission Process:**

| Step | Description | Owner | Timeline |
|------|-------------|-------|----------|
| **Identify Competent Authority** | Identify appropriate authority | Legal | Day 10 |
| **Access Reporting Channel** | Access official reporting channel | Legal | Day 12 |
| **Submit Report** | Submit complete report | Legal | Day 13-15 |
| **Obtain Confirmation** | Obtain confirmation of receipt | Legal | Day 15 |
| **Track Submission** | Track submission status | Legal | Ongoing |

**Mandatory Actions:**
- Submit to competent authority
- Use official reporting channel
- Provide all required information
- Obtain confirmation of receipt
- Respond to follow-up questions
- Document submission

**Evidence Required:**
- Submission records
- Confirmation receipts
- Authority correspondence
- Follow-up responses

**Audit Verification:**
- Verify report submitted within 15 days
- Confirm official channel used
- Check all required information provided
- Validate confirmation obtained
- Verify follow-up questions responded to

---

### Control INC-005: Incident Follow-Up and Corrective Actions

**Control ID:** INC-005  
**Control Name:** Incident Follow-Up and Corrective Actions  
**Control Type:** Corrective  
**Control Frequency:** Per incident, ongoing  
**Risk Level:** Medium

#### Control Objective

Follow up on incidents and implement corrective actions to prevent recurrence and improve AI system safety.

#### Control Requirements

**CR-005.1: Corrective Actions**

Implement corrective actions based on incident investigation.

**Corrective Action Requirements:**

| Requirement | Description | Timeline | Owner |
|-------------|-------------|----------|-------|
| **Action Planning** | Plan corrective actions | Day 10-20 | AI System Owner |
| **Action Implementation** | Implement corrective actions | Day 20-50 | AI System Owner |
| **Effectiveness Verification** | Verify action effectiveness | Day 50-60 | Quality Director |
| **Documentation Update** | Update documentation | Day 60-70 | AI System Owner |
| **Stakeholder Communication** | Communicate to stakeholders | Ongoing | AI Risk Manager |

**Corrective Action Types:**

| Action Type | Description | When to Use | Example |
|-------------|-------------|-------------|---------|
| **Immediate Fix** | Fix immediate issue | Urgent issues | Bug fix, configuration change |
| **System Update** | Update AI system | System issues | Model update, architecture change |
| **Process Improvement** | Improve processes | Process issues | Process redesign |
| **Training** | Provide training | Human error | Staff training |
| **Monitoring Enhancement** | Enhance monitoring | Detection issues | Monitoring improvements |

**Mandatory Actions:**
- Plan corrective actions
- Implement actions
- Verify effectiveness
- Update documentation
- Communicate to stakeholders
- Track to closure

**CR-005.2: Lessons Learned**

Document and share lessons learned from incidents.

**Lessons Learned Process:**

| Step | Description | Timeline | Owner |
|------|-------------|----------|-------|
| **Lessons Learned Session** | Conduct lessons learned session | Day 30-40 | AI Risk Manager |
| **Documentation** | Document lessons learned | Day 40-45 | AI Risk Manager |
| **Sharing** | Share with organization | Day 45-50 | AI Risk Manager |
| **Process Updates** | Update processes | Day 50-60 | Process Owners |
| **Prevention** | Implement preventive measures | Ongoing | AI System Owner |

**Mandatory Actions:**
- Conduct lessons learned session
- Document findings
- Share learnings
- Update procedures
- Implement preventive measures

**Evidence Required:**
- Corrective action plans
- Implementation records
- Verification results
- Documentation updates
- Lessons learned reports
- Process updates
- Communication records

**Audit Verification:**
- Verify corrective actions planned
- Confirm actions implemented
- Check effectiveness verified
- Validate documentation updated
- Verify lessons learned documented and shared

---

## SUPPORTING PROCEDURES

This standard is implemented through the following detailed procedures:

### Procedure PROC-AI-INC-001: Incident Detection and Classification Procedure

**Purpose:** Define step-by-step process for detecting and classifying incidents  
**Owner:** AI Risk Manager  
**Implements:** Control INC-001

**Procedure Steps:**
1. Monitor for incidents
2. Detect incidents
3. Assess severity
4. Classify as serious or not
5. Escalate serious incidents
6. Document incidents

**Outputs:**
- Incident detection logs
- Severity assessments
- Classification records

---

### Procedure PROC-AI-INC-002: Serious Incident Reporting Procedure

**Purpose:** Define process for reporting serious incidents per Article 73  
**Owner:** AI Risk Manager  
**Implements:** Controls INC-002, INC-003, INC-004

**Procedure Steps:**
1. Immediate response - Control INC-002
2. Incident investigation - Control INC-003
3. Report preparation - Control INC-003
4. Regulatory submission - Control INC-004
5. Follow-up

**Outputs:**
- Incident response records
- Investigation reports
- Serious incident reports
- Submission records

---

### Procedure PROC-AI-INC-003: Incident Investigation Procedure

**Purpose:** Define process for investigating incidents  
**Owner:** AI Risk Manager  
**Implements:** Control INC-003

**Procedure Steps:**
1. Initiate investigation
2. Gather information
3. Conduct root cause analysis
4. Assess impact
5. Document findings
6. Prepare report

**Outputs:**
- Investigation reports
- Root cause analysis
- Impact assessments

---

## COMPLIANCE

### 5.1 Compliance Monitoring

**Monitoring Approach:**
Continuous automated monitoring supplemented by monthly manual reviews and quarterly comprehensive audits.

**Compliance Metrics:**

| Metric | Target | Measurement Method | Frequency | Owner |
|--------|--------|--------------------|-----------|-------|
| Serious Incident Reporting Timeliness | 100% within 15 days | % of incidents reported within 15 days | Per incident | AI Risk Manager |
| Incident Detection Time | <1 hour | Average time to detect incidents | Per incident | AI Risk Manager |
| Investigation Completion | <10 days | Average days to complete investigation | Per incident | AI Risk Manager |
| Corrective Action Closure | <30 days | Average days to close actions | Per action | AI Risk Manager |
| Lessons Learned Documentation | 100% | % of incidents with lessons learned | Per incident | AI Risk Manager |

**Monitoring Tools:**
- Incident Management Dashboard
- Compliance Reports
- Monthly compliance reports
- Quarterly AI Governance Committee reviews

---

### 5.2 Internal Audit Requirements

**Audit Frequency:** Annually (minimum)

**Audit Scope:**
- Incident detection effectiveness
- Incident classification accuracy
- Reporting timeliness
- Investigation quality
- Corrective action effectiveness
- Controls effectiveness (INC-001 through INC-005)

**Audit Activities:**
- Review 100% of serious incidents for reporting
- Sample 20% of incidents for quality review
- Test incident detection process
- Review investigation reports
- Review corrective actions
- Interview key personnel

**Audit Outputs:**
- Annual Incident Management Audit Report
- Findings and recommendations
- Corrective action plans for deficiencies

---

### 5.3 External Audit / Regulatory Inspection

**Preparation:**
- Maintain audit-ready incident documentation at all times
- Designate AI Risk Manager and Legal as regulatory liaisons
- Prepare standard response procedures for authority requests

**Provide to Auditors/Regulators:**
- Incident reports
- Investigation reports
- Corrective action records
- Lessons learned reports
- Internal audit reports
- Evidence of controls execution

**Authority Request Response:**
- Acknowledge request within 1 business day
- Provide requested documentation within 5 business days
- Coordinate through Legal and AI Risk Manager
- Document all interactions with authorities

---

## ROLES AND RESPONSIBILITIES

### 6.1 RACI Matrix

| Activity | AI Risk Manager | AI System Owner | Legal | Incident Response Team | Quality Director |
|----------|----------------|-----------------|-------|----------------------|-----------------|
| **Incident Detection** | **R/A** | C | I | **R** | I |
| **Incident Classification** | **R** | C | C | C | I |
| **Immediate Response** | **R** | **A** | C | **R** | I |
| **Investigation** | **R** | **A** | C | **R** | C |
| **Report Preparation** | **R** | **A** | **R** | C | I |
| **Regulatory Submission** | **R** | I | **R/A** | I | I |
| **Corrective Actions** | **R** | **A** | I | C | **R** |
| **Lessons Learned** | **R** | C | I | C | I |

**RACI Legend:**
- **R** = Responsible (does the work)
- **A** = Accountable (ultimately answerable)
- **C** = Consulted (provides input)
- **I** = Informed (kept up-to-date)

---

### 6.2 Role Descriptions

**AI Risk Manager**
- **Primary Responsibility:** Owns incident management framework, ensures compliance
- **Key Activities:**
  - Manages incident detection
  - Coordinates incident response
  - Ensures regulatory reporting
  - Reports to management
- **Required Competencies:** EU AI Act Article 73, incident management, regulatory reporting

**AI System Owner**
- **Primary Responsibility:** Accountable for incidents of their AI system
- **Key Activities:**
  - Supports incident response
  - Implements corrective actions
  - Updates documentation
- **Required Competencies:** AI system knowledge, incident awareness

**Legal**
- **Primary Responsibility:** Ensures legal compliance in reporting
- **Key Activities:**
  - Reviews incident reports
  - Submits to authorities
  - Responds to authority questions
- **Required Competencies:** EU AI Act Article 73, regulatory reporting

**Incident Response Team**
- **Primary Responsibility:** Responds to incidents
- **Key Activities:**
  - Detects incidents
  - Responds to incidents
  - Investigates incidents
- **Required Competencies:** Incident response, investigation

**Quality Director**
- **Primary Responsibility:** Supports corrective actions
- **Key Activities:**
  - Verifies corrective actions
  - Supports CAPA process
- **Required Competencies:** Quality management, CAPA

---

## EXCEPTIONS

### 7.1 Exception Philosophy

Serious incident reporting is a **mandatory regulatory requirement** for high-risk AI systems. Exceptions are granted restrictively and only where compensating controls adequately mitigate risks.

---

### 7.2 Allowed Exceptions

The following exceptions **may** be granted with proper justification and approval:

| Exception Type | Justification Required | Maximum Duration | Approval Authority | Compensating Controls |
|----------------|----------------------|------------------|-------------------|---------------------|
| **Extended Investigation Timeline** | Complex incident requiring extended investigation | 5 days | AI Risk Manager + Legal | Interim report; Accelerated plan |

---

### 7.3 Prohibited Exceptions

The following exceptions **cannot** be granted under any circumstances:

❌ **Skipping serious incident reporting** - Mandatory per Article 73, no exceptions  
❌ **Reporting beyond 15 days** - Mandatory timeline, no exceptions  
❌ **Skipping incident investigation** - Required for complete reporting  
❌ **Skipping corrective actions** - Required to prevent recurrence  

---

### 7.4 Exception Request Process

**Step 1: Submit Exception Request**
- Complete Exception Request Form (FORM-AI-EXCEPTION-001)
- Include business justification
- Propose compensating controls
- Specify duration requested
- Attach risk assessment

**Step 2: Risk Assessment**
- AI Risk Manager assesses risk of granting exception
- Evaluates adequacy of compensating controls
- Documents residual risk

**Step 3: Approval**
- Route to appropriate approval authority based on exception type
- AI Risk Manager approval: Minor exceptions
- AI Risk Manager + AI Governance Committee: Significant exceptions
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
- Close exception when normal reporting completed
- Document lessons learned

---

## ENFORCEMENT

### 8.1 Non-Compliance Consequences

| Violation | Severity | Consequence | Remediation Required |
|-----------|----------|-------------|---------------------|
| **Serious incident not reported** | Critical | Immediate escalation; Legal investigation | Report immediately; Root cause analysis |
| **Reporting beyond 15 days** | Critical | Immediate escalation; Compliance gap assessment | Report immediately; Process improvement |
| **Incomplete incident investigation** | High | Escalation to AI Governance Committee | Complete investigation within 5 business days |
| **Missing corrective actions** | High | Escalation to management | Implement actions within 10 business days |
| **Incomplete incident report** | Medium | Written warning | Complete report within 5 business days |

---

### 8.2 Escalation Procedures

**Level 1: AI Risk Manager**
- Minor procedural violations
- Documentation deficiencies
- Timeline delays < 2 days
- **Action:** Written warning, corrective action required

**Level 2: AI Risk Manager + AI Governance Committee**
- Repeated violations
- Incomplete investigations
- Missing corrective actions
- **Action:** Formal review, corrective action plan, management notification

**Level 3: AI Governance Committee**
- Serious incident not reported
- Reporting beyond 15 days
- Critical compliance failures
- **Action:** Immediate investigation, disciplinary action

**Level 4: Executive Management + Legal**
- Potential regulatory enforcement action
- Significant legal liability
- Reputational risk
- **Action:** Executive crisis management, legal strategy, regulatory engagement

---

### 8.3 Immediate Escalation Triggers

Escalate **immediately** to AI Governance Committee + Legal if:
- ⚠️ Serious incident not reported within 15 days
- ⚠️ Regulatory inquiry or inspection related to incident reporting
- ⚠️ Critical incident affecting safety or fundamental rights
- ⚠️ Authority enforcement action

---

### 8.4 Disciplinary Actions

Individuals responsible for incident management violations may be subject to:
- Verbal or written warning
- Mandatory retraining
- Performance improvement plan
- Reassignment of responsibilities
- Suspension (with pay during investigation)
- Termination (for egregious violations, e.g., knowingly not reporting serious incident)

**Factors Considered:**
- Intent (knowing violation vs. honest mistake)
- Severity of violation
- Impact (actual or potential)
- Cooperation with remediation
- Prior violation history

---

## KEY PERFORMANCE INDICATORS (KPIs)

### 9.1 Incident Management KPIs

| KPI ID | KPI Name | Definition | Target | Measurement Method | Frequency | Owner | Reporting To |
|--------|----------|------------|--------|-------------------|-----------|-------|--------------|
| **KPI-INC-001** | Serious Incident Reporting Timeliness | % of serious incidents reported within 15 days | 100% | (# reported within 15 days / # total serious incidents) × 100 | Per incident | AI Risk Manager | AI Governance Committee |
| **KPI-INC-002** | Incident Detection Time | Average time to detect incidents | <1 hour | Σ (detection time) / # incidents | Per incident | AI Risk Manager | Management |
| **KPI-INC-003** | Investigation Completion | Average days to complete investigation | <10 days | Σ (investigation days) / # investigations | Per incident | AI Risk Manager | Management |
| **KPI-INC-004** | Corrective Action Closure | Average days to close corrective actions | <30 days | Σ (closure days) / # actions | Per action | AI Risk Manager | Management |
| **KPI-INC-005** | Lessons Learned Documentation | % of incidents with lessons learned | 100% | (# with lessons learned / # total incidents) × 100 | Per incident | AI Risk Manager | Management |
| **KPI-INC-006** | Incident Report Completeness | % of reports with all required elements | 100% | (# complete / # total reports) × 100 | Per report | AI Risk Manager | Management |
| **KPI-INC-007** | Regulatory Submission Confirmation | % of submissions with confirmation | 100% | (# with confirmation / # total submissions) × 100 | Per submission | Legal | AI Risk Manager |

---

### 9.2 KPI Dashboards and Reporting

**Real-Time Dashboard** (AI Risk Manager access)
- Current incident status
- Incident detection time
- Investigation status
- Reporting status
- Corrective action status

**Monthly Management Report**
- KPI-INC-001, 002, 003, 004, 005, 006, 007
- Trend analysis (vs. previous month)
- Issues and risks
- Planned actions

**Quarterly AI Governance Committee Report**
- All KPIs
- Incident management effectiveness assessment
- Internal audit findings (if conducted)
- Exception register review

**Annual Executive Report**
- Full-year KPI performance
- Incident management maturity assessment
- Strategic recommendations
- Regulatory outlook

---

### 9.3 KPI Thresholds and Alerts

| KPI | Green (Good) | Yellow (Warning) | Red (Critical) | Alert Action |
|-----|-------------|------------------|----------------|--------------|
| **Serious Incident Reporting Timeliness** | 100% | 95-99% | < 95% | Red: Immediate escalation to AI Governance Committee Chair |
| **Incident Detection Time** | <1 hour | 1-2 hours | > 2 hours | Red: Escalate to AI Governance Committee |
| **Investigation Completion** | <10 days | 10-12 days | > 12 days | Red: Escalate to AI Governance Committee |
| **Corrective Action Closure** | <30 days | 30-45 days | > 45 days | Red: Escalate to AI Governance Committee |

---

## TRAINING REQUIREMENTS

### 10.1 Training Program Overview

All personnel involved in incident management must complete role-specific training to ensure competency in EU AI Act Article 73 requirements, incident management procedures, and regulatory reporting.

---

### 10.2 Role-Based Training Requirements

| Role | Training Course | Duration | Content | Frequency | Assessment Required |
|------|----------------|----------|---------|-----------|-------------------|
| **AI Risk Manager** | Incident Management Expert Training | 16 hours | EU AI Act Article 73; Incident detection; Investigation; Reporting | Initial + annually | Yes - Written exam (≥90%) |
| **Incident Response Team** | Incident Response Training | 12 hours | Incident detection; Response; Investigation | Initial + annually | Yes - Practical exercise |
| **Legal Staff** | Regulatory Reporting Training | 8 hours | EU AI Act Article 73; Reporting procedures; Authority communication | Initial + annually | Yes - Written exam (≥90%) |
| **AI System Owners** | Incident Management Overview | 4 hours | Incident requirements; Responsibilities; Support | At onboarding + annually | Yes - Knowledge check (≥80%) |
| **All AI Development Staff** | Incident Awareness | 2 hours | Incident basics; Reporting requirements; Awareness | At onboarding + annually | Yes - Knowledge check (≥80%) |

---

### 10.3 Training Content by Topic

**EU AI Act Article 73 Requirements**
- Serious incident definition (Article 73(1))
- Reporting obligation (Article 73(1))
- Reporting timeline (Article 73(2))
- Compliance obligations

**Incident Management**
- Incident detection
- Incident classification
- Incident investigation
- Incident reporting
- Corrective actions

**Regulatory Reporting**
- Report preparation
- Regulatory submission
- Authority communication
- Follow-up

---

### 10.4 Training Delivery Methods

**Initial Training:**
- Instructor-led classroom or virtual training
- Includes interactive exercises and case studies
- Hands-on practice with incident management tools
- Group discussions of complex scenarios

**Annual Refresher:**
- E-learning modules for core content review
- Live update sessions for regulatory changes
- Case study reviews of recent incidents
- Knowledge assessment

**On-the-Job Training:**
- Mentoring for new incident management staff
- Job shadowing during incident response
- Supervised incident management for first 3 incidents

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
- AI Risk Managers: Must demonstrate ability to manage 1 sample serious incident with 100% compliance before independent work
- All staff: Must pass knowledge assessments with minimum required scores

**Training Metrics:**
| Metric | Target | Frequency |
|--------|--------|-----------|
| Training completion rate | 100% | Quarterly |
| Assessment pass rate (first attempt) | ≥ 90% | Per training |
| Training effectiveness score (survey) | ≥ 4.0/5.0 | Per training |
| Time to competency (AI Risk Managers) | < 45 days | Per person |

---

### 10.6 Training Records

**Records Maintained:**
- Training attendance records
- Assessment scores
- Competency validations
- Refresher training completion
- Individual training transcripts

**Retention:** 10 years (to align with EU AI Act documentation retention)

**Access:** HR, AI Risk Manager, Internal Audit, Competent Authorities (upon request)

---

## DEFINITIONS

| Term | Definition | Source |
|------|------------|--------|
| **Serious Incident** | Incident or malfunctioning that directly or indirectly leads to death, serious health damage, critical infrastructure disruption, or fundamental rights infringement | EU AI Act Article 73(1) |
| **Malfunctioning** | Failure of AI system to perform as intended | EU AI Act Article 3 |
| **Competent Authority** | National authority designated to receive incident reports | EU AI Act Article 73 |
| **Corrective Action** | Action to eliminate cause of incident | This Standard |
| **Preventive Action** | Action to prevent recurrence | This Standard |

---

## LINK WITH AI ACT AND ISO42001

### 12.1 EU AI Act Regulatory Mapping

This standard implements the following EU AI Act requirements:

| EU AI Act Provision | Article | Requirement Summary | Implemented By (Controls) |
|-------------------|---------|-------------------|------------------------|
| **Serious Incident Reporting** | Article 73 | Reporting of serious incidents | All controls (INC-001 through INC-005) |
| **Reporting Obligation** | Article 73(1) | Obligation to report serious incidents | INC-001, INC-004 |
| **Reporting Timeline** | Article 73(2) | 15-day reporting deadline | INC-004 |

---

### 12.2 ISO/IEC 42001:2023 Alignment

This standard aligns with ISO/IEC 42001:2023 as follows:

| ISO 42001 Clause | Requirement | Implementation in This Standard |
|-----------------|-------------|-------------------------------|
| **Clause 10.1: Nonconformity and corrective action** | Address nonconformities | INC-005 |
| **Clause 9.1: Monitoring, measurement, analysis, and evaluation** | Monitor and measure | INC-001 |

---

### 12.3 Relationship to Other Standards

This incident management standard integrates with other AI Act standards:

| Related Standard | Integration Point | Rationale |
|----------------|-------------------|-----------|
| **STD-AI-001: Classification** | Classification determines if reporting required | High-risk AI requires Article 73 reporting |
| **STD-AI-002: Risk Management** | Incidents feed into risk management | Incident data updates risk assessments |
| **STD-AI-012: Post-Market Monitoring** | PMM may identify incidents | PMM data feeds incident detection |

---

### 12.4 References and Related Documents

**EU AI Act (Regulation (EU) 2024/1689):**
- Article 73: Reporting of Serious Incidents
- Article 73(1): Reporting Obligation
- Article 73(2): Reporting Timeline

**ISO/IEC Standards:**
- ISO/IEC 42001:2023: Information technology — Artificial intelligence — Management system

**Internal Documents:**
- POL-AI-001: Artificial Intelligence Policy (parent policy)
- STD-AI-001: AI System Classification Standard
- STD-AI-002: AI Risk Management Standard
- STD-AI-012: AI Post-Market Monitoring Standard
- PROC-AI-INC-001, -002, -003: Incident management procedures

---

## APPROVAL AND AUTHORIZATION

| Role | Name | Title | Signature | Date |
|------|------|-------|-----------|------|
| **Prepared By** | AI Risk Manager | AI Risk Manager | _________________ | ________ |
| **Reviewed By** | Sarah Johnson | AI Act Program Manager | _________________ | ________ |
| **Reviewed By** | Michael Brown | Chief Legal Officer | _________________ | ________ |
| **Reviewed By** | Jane Doe | Chief Strategy & Risk Officer | _________________ | ________ |
| **Approved By** | Jane Doe | AI Governance Committee Chair | _________________ | ________ |

**Effective Date:** 2025-08-01  
**Next Review Date:** 2026-08-01  
**Review Frequency:** Annually or upon regulatory change

---

**END OF STANDARD STD-AI-013**

---

*This standard is a living document. Feedback and improvement suggestions should be directed to the AI Risk Manager.*
