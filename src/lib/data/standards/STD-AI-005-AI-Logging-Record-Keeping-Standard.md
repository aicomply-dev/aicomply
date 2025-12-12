# AI Logging and Record Keeping Standard

**Document Type:** Standard  
**Standard ID:** STD-AI-005  
**Standard Title:** AI Logging and Record Keeping Standard  
**Version:** 1.0  
**Effective Date:** 2025-08-01  
**Next Review Date:** 2026-08-01  
**Review Frequency:** Annually or upon regulatory change  
**Parent Policy:** POL-AI-001 - Artificial Intelligence Policy  
**Owner:** IT Security Manager  
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
| 0.1 | 2025-06-28 | Thomas Wilson, IT Security Manager | Initial draft | - | - |
| 0.2 | 2025-07-12 | Thomas Wilson, IT Security Manager | Added retention details | - | - |
| 0.3 | 2025-07-25 | Thomas Wilson, IT Security Manager | Incorporated security feedback | - | - |
| 1.0 | 2025-08-01 | Thomas Wilson, IT Security Manager | Final version approved - GRC restructured | 2025-07-25 | Jane Doe, AI Governance Committee Chair |

---

## OBJECTIVE

This standard defines requirements for automated logging of AI system operations and record-keeping with 10-year retention in compliance with EU AI Act Article 12.

**Primary Goals:**
- Implement automated logging per Article 12(1) for all high-risk AI systems
- Retain logs for 10 years per Article 12(2) with secure storage
- Enable appropriate access to logs for monitoring, investigation, and regulatory compliance

---

## SCOPE AND APPLICABILITY

### 2.1 Mandatory Applicability

This standard is **mandatory** for:
- All high-risk AI systems (EU AI Act Article 12)
- All AI system operations and events

### 2.2 Recommended Applicability

This standard is **recommended** for:
- All AI systems for operational monitoring
- Limited-risk and minimal-risk AI systems (voluntary best practices)

### 2.3 Logging Coverage

- System operations and events
- Input data and outputs
- User interactions
- System errors and exceptions
- Configuration changes
- Access and authentication events

### 2.4 Out of Scope

- General IT system logging (covered by IT logging standards)
- Non-AI system logging (covered by other logging standards)
- Logging outside EU AI Act scope

---

## CONTROL STANDARD

### Control LOG-001: Automated Logging Requirements

**Control ID:** LOG-001  
**Control Name:** Automated Logging Implementation  
**Control Type:** Preventive  
**Control Frequency:** Continuous  
**Risk Level:** High

#### Control Objective

Implement automated logging per Article 12(1) to capture all required log elements for high-risk AI systems, enabling traceability, auditability, and regulatory compliance.

#### Control Requirements

**CR-001.1: Mandatory Log Elements**

Capture all required log elements per Article 12(1) and additional operational elements.

**Required Log Elements (Article 12(1)):**

| Element | Description | Mandatory | Example |
|---------|-------------|-----------|---------|
| **Period of Use** | Start and end time of each AI system use | YES | 2025-08-01 10:00:00 - 10:05:23 |
| **Reference Database** | Database against which input data checked | YES | Database ID, version |
| **Matched Input Data** | Input data for which search led to match | YES | Input data hash, reference |
| **Person Verification** | Identification of persons verifying results | YES | User ID, role |

**Additional Logging Requirements:**

| Element | Description | Mandatory | Example |
|---------|-------------|-----------|---------|
| **Timestamp** | Date and time (UTC) | YES | 2025-08-01T10:00:00Z |
| **User Identification** | User ID, role, organization | YES | user123, admin, org1 |
| **Action Performed** | Type of operation/action | YES | search, decision, classification |
| **Input Data Summary** | Summary/hash of input data | YES | SHA-256 hash, data type |
| **Output/Decision** | AI system output or decision | YES | Decision: approve, confidence: 0.95 |
| **Confidence Scores** | Confidence/probability scores (if applicable) | If applicable | 0.95, 0.87 |
| **System Version** | AI system version used | YES | v2.1.3 |
| **Configuration Used** | Configuration parameters | YES | Config ID, parameters |

**Mandatory Actions:**
- Implement automated logging (no manual intervention)
- Capture all mandatory log elements
- Capture additional operational elements
- Log in real-time or near-real-time
- Ensure logging cannot be disabled
- Verify logging operational continuously

**Evidence Required:**
- Logging configuration documentation
- Logging infrastructure documentation
- Log sample verification
- Logging health monitoring records

**Audit Verification:**
- Verify automated logging implemented for all high-risk AI
- Confirm all mandatory log elements captured
- Check logging operational continuously
- Validate log samples contain all required elements

---

### Control LOG-002: Logging Infrastructure

**Control ID:** LOG-002  
**Control Name:** Logging Infrastructure and Tamper Protection  
**Control Type:** Preventive  
**Control Frequency:** Continuous  
**Risk Level:** High

#### Control Objective

Implement robust, tamper-proof logging infrastructure with high availability to ensure reliable log capture, storage, and protection throughout the 10-year retention period.

#### Control Requirements

**CR-002.1: Infrastructure Requirements**

Implement logging infrastructure meeting all requirements.

**Infrastructure Requirements:**

| Requirement | Specification | Implementation |
|-------------|--------------|---------------|
| **Automation** | Fully automated, no manual intervention | Automated logging framework |
| **Real-Time** | Real-time or near-real-time logging (< 1 second delay) | Real-time log collection |
| **Tamper-Proof** | Logs cannot be modified or deleted | Write-once storage, cryptographic integrity |
| **Centralized** | Centralized log management | Centralized log management system |
| **Scalable** | Handle expected log volume | Scalable infrastructure |
| **High Availability** | ≥99.9% uptime | HA configuration, redundancy |
| **Integrity Protection** | Cryptographic integrity verification | Hash chains, digital signatures |

**Mandatory Actions:**
- Implement logging framework
- Configure log collection
- Enable tamper protection (write-once storage)
- Set up centralized storage
- Implement high availability
- Monitor logging health continuously
- Alert on logging failures

**Tamper Protection Mechanisms:**
- Write-once storage (WORM - Write Once Read Many)
- Cryptographic hash chains
- Digital signatures
- Immutable log storage
- Access controls preventing log modification
- Integrity verification

**Evidence Required:**
- Logging infrastructure documentation
- Configuration records
- Health monitoring dashboard
- Availability metrics
- Tamper protection verification
- Integrity verification records

**Audit Verification:**
- Verify logging infrastructure implemented
- Confirm tamper protection enabled
- Check high availability configured
- Validate centralized storage operational
- Verify health monitoring active

---

### Control LOG-003: 10-Year Log Retention

**Control ID:** LOG-003  
**Control Name:** 10-Year Log Retention and Storage  
**Control Type:** Preventive  
**Control Frequency:** Continuous  
**Risk Level:** High

#### Control Objective

Retain all logs for minimum 10 years per Article 12(2) with secure storage, backup, and retrieval capability to support audits, investigations, and regulatory compliance.

#### Control Requirements

**CR-003.1: Retention and Storage Implementation**

Implement 10-year retention with secure storage and retrieval capability.

**Retention Requirements:**

| Requirement | Specification | Implementation |
|-------------|--------------|---------------|
| **Retention Period** | Minimum 10 years | Automated retention policy |
| **Secure Storage** | Encrypted, access-controlled storage | Secure storage system |
| **Backup** | Daily backups with 30-day retention | Automated backup system |
| **Disaster Recovery** | RTO < 24 hours, RPO < 24 hours | DR plan and testing |
| **Archival** | Long-term archival for old logs | Archival system |
| **Retrieval** | Ability to retrieve logs throughout retention | Retrieval system and testing |

**Mandatory Actions:**
- Configure 10-year retention policy
- Implement secure storage
- Set up backup procedures (daily)
- Enable archival for long-term storage
- Test retrieval regularly (quarterly)
- Monitor storage capacity
- Plan for storage growth

**Storage Capacity Planning:**

| Year | Estimated Log Volume | Storage Required | Action |
|------|---------------------|------------------|--------|
| Year 1 | [Volume] | [Storage] | Initial storage allocation |
| Year 5 | [Volume] | [Storage] | Capacity expansion |
| Year 10 | [Volume] | [Storage] | Final capacity planning |

**Evidence Required:**
- Retention policy configuration
- Storage capacity planning
- Backup verification records
- Retrieval test results
- Archival records
- Storage monitoring records

**Audit Verification:**
- Verify 10-year retention policy configured
- Confirm secure storage implemented
- Check backup procedures operational
- Validate retrieval capability tested
- Verify storage capacity monitored

---

### Control LOG-004: Log Security and Access Control

**Control ID:** LOG-004  
**Control Name:** Log Security and Access Management  
**Control Type:** Preventive  
**Control Frequency:** Continuous, quarterly reviews  
**Risk Level:** High

#### Control Objective

Protect logs with encryption, access controls, and audit trails to prevent unauthorized access, modification, or deletion, ensuring log integrity and confidentiality throughout the retention period.

#### Control Requirements

**CR-004.1: Security Controls Implementation**

Implement comprehensive security controls for log storage and access.

**Security Requirements:**

| Control | Requirement | Implementation |
|---------|-------------|---------------|
| **Encryption at Rest** | AES-256 or equivalent | Storage encryption |
| **Encryption in Transit** | TLS 1.3 or equivalent | Transport encryption |
| **Access Controls** | Role-based access control (RBAC) | RBAC system |
| **Audit Trail** | Log all access to logs | Access logging |
| **Tamper Detection** | Detect unauthorized modifications | Integrity monitoring |
| **Integrity Verification** | Regular integrity checks | Automated integrity verification |

**Access Levels:**

| Role | Access Level | Justification | Approval Required |
|------|--------------|---------------|-------------------|
| **AI System Owner** | Full read access | Responsible for AI system | Automatic |
| **Operations Team** | Read access for monitoring | Operational monitoring | AI System Owner |
| **Security Team** | Full read access | Security monitoring and investigation | Security Manager |
| **Internal Audit** | Read access | Audit and compliance verification | Audit Manager |
| **Competent Authorities** | Read access (upon request) | Regulatory oversight (Article 53) | Legal + IT Security Manager |
| **Log Administrators** | Full access (with approval) | System administration | IT Security Manager |

**Mandatory Actions:**
- Enable encryption (at rest and in transit)
- Configure role-based access controls
- Log all access to logs
- Implement tamper detection
- Verify integrity regularly (monthly)
- Review access quarterly
- Revoke unnecessary access

**Evidence Required:**
- Encryption configuration
- Access control matrix
- Access audit logs
- Integrity verification records
- Quarterly access reviews
- Tamper detection alerts (if any)

**Audit Verification:**
- Verify encryption enabled
- Confirm access controls configured
- Check access audit logs maintained
- Validate integrity verification conducted
- Verify quarterly access reviews completed

---

### Control LOG-005: Log Analysis and Monitoring

**Control ID:** LOG-005  
**Control Name:** Log Analysis, Monitoring, and Investigation Support  
**Control Type:** Detective  
**Control Frequency:** Continuous, regular analysis  
**Risk Level:** Medium

#### Control Objective

Enable log analysis, monitoring, and investigation support to detect anomalies, support incident response, and provide insights for continuous improvement.

#### Control Requirements

**CR-005.1: Monitoring and Analysis Implementation**

Implement log monitoring, analysis, and investigation capabilities.

**Monitoring Requirements:**

| Capability | Requirement | Implementation |
|------------|-------------|---------------|
| **Real-Time Monitoring** | Monitor critical events in real-time | Real-time monitoring system |
| **Automated Alerting** | Alert on anomalies and critical events | Alerting system |
| **Regular Analysis** | Conduct regular log analysis | Analysis tools and processes |
| **Trend Analysis** | Identify trends and patterns | Trend analysis tools |
| **Incident Investigation** | Support incident investigation | Investigation tools and procedures |
| **Reporting** | Generate regular reports | Reporting system |

**Monitoring Rules and Alerts:**

| Alert Type | Trigger | Severity | Response |
|------------|---------|----------|---------|
| **Logging Failure** | Logging system down or not capturing logs | Critical | Immediate escalation |
| **Tamper Detection** | Unauthorized log modification detected | Critical | Immediate escalation to Security |
| **Anomalous Activity** | Unusual patterns or volumes | High | Investigation required |
| **Access Violation** | Unauthorized access attempt | High | Security investigation |
| **System Errors** | High error rate | Medium | Operations investigation |
| **Performance Degradation** | Slow response times | Medium | Operations investigation |

**Mandatory Actions:**
- Configure monitoring rules
- Set up alerting
- Conduct regular analysis (weekly)
- Generate trend reports (monthly)
- Support incident investigations
- Document analysis findings
- Review monitoring effectiveness (quarterly)

**Evidence Required:**
- Monitoring dashboard
- Alert configurations
- Analysis reports (weekly)
- Trend reports (monthly)
- Investigation records
- Monitoring effectiveness reviews (quarterly)

**Audit Verification:**
- Verify monitoring implemented
- Confirm alerting configured
- Check regular analysis conducted
- Validate trend reports generated
- Verify investigation support available

---

## SUPPORTING PROCEDURES

This standard is implemented through the following detailed procedures:

### Procedure PROC-AI-LOG-001: Logging Configuration Procedure

**Purpose:** Define step-by-step process for configuring automated logging  
**Owner:** IT Security Manager  
**Implements:** Controls LOG-001, LOG-002

**Procedure Steps:**
1. Identify AI system requiring logging
2. Configure logging framework - Control LOG-002
3. Configure mandatory log elements - Control LOG-001
4. Configure additional log elements
5. Enable tamper protection
6. Configure centralized storage
7. Test logging functionality
8. Monitor logging health

**Outputs:**
- Logging configuration
- Logging infrastructure documentation
- Health monitoring setup

---

### Procedure PROC-AI-LOG-002: Log Retention and Access Procedure

**Purpose:** Define process for log retention, storage, and access management  
**Owner:** IT Security Manager  
**Implements:** Controls LOG-003, LOG-004, LOG-005

**Procedure Steps:**
1. Configure 10-year retention policy - Control LOG-003
2. Implement secure storage
3. Configure encryption - Control LOG-004
4. Configure access controls
5. Set up backup procedures
6. Enable archival
7. Configure monitoring - Control LOG-005
8. Test retrieval capability
9. Review access quarterly

**Outputs:**
- Retention policy configuration
- Secure storage setup
- Access control configuration
- Backup and archival setup

---

## COMPLIANCE

### 5.1 Compliance Monitoring

**Monitoring Approach:**
Continuous automated monitoring supplemented by monthly manual reviews and quarterly comprehensive audits.

**Compliance Metrics:**

| Metric | Target | Measurement Method | Frequency | Owner |
|--------|--------|--------------------|-----------|-------|
| Logging Availability | ≥99.9% | % uptime of logging system | Monthly | IT Security Manager |
| Log Completeness | 100% | % of AI operations logged | Daily | IT Security Manager |
| Retention Compliance | 100% | % of logs retained for 10 years | Monthly | IT Security Manager |
| Access Control Compliance | 100% | % of logs with proper access controls | Monthly | IT Security Manager |
| Authority Response Time | < 5 days | Average days to respond to authority requests | Per request | Legal |
| Integrity Verification | 100% | % of logs with verified integrity | Monthly | IT Security Manager |

**Monitoring Tools:**
- Logging Health Dashboard
- Compliance Reports
- Access Logs
- Monthly compliance reports
- Quarterly AI Governance Committee reviews

---

### 5.2 Internal Audit Requirements

**Audit Frequency:** Annually (minimum)

**Audit Scope:**
- Logging implementation completeness
- Logging infrastructure robustness
- Retention policy compliance
- Security controls effectiveness
- Access control compliance
- Monitoring and analysis effectiveness
- Controls effectiveness (LOG-001 through LOG-005)

**Audit Activities:**
- Review 100% of high-risk AI for logging implementation
- Test logging infrastructure
- Verify retention policy compliance
- Test security controls
- Review access controls
- Test retrieval capability
- Review monitoring effectiveness
- Interview key personnel

**Audit Outputs:**
- Annual Logging and Record Keeping Audit Report
- Findings and recommendations
- Corrective action plans for deficiencies

---

### 5.3 External Audit / Regulatory Inspection

**Preparation:**
- Maintain audit-ready logging documentation at all times
- Designate IT Security Manager and Legal as regulatory liaisons
- Prepare standard response procedures for authority requests

**Provide to Auditors/Regulators:**
- Logging infrastructure documentation
- Log samples (anonymized if personal data)
- Retention policy documentation
- Security controls documentation
- Access control records
- Authority request logs
- Logging procedures
- Internal audit reports
- Evidence of controls execution

**Authority Request Response:**
- Acknowledge request within 1 business day
- Provide requested logs within 5 business days
- Coordinate through Legal and IT Security Manager
- Document all interactions with authorities

---

## ROLES AND RESPONSIBILITIES

### 6.1 RACI Matrix

| Activity | IT Security Manager | AI System Owner | Operations Team | Security Team | Internal Audit | Legal |
|----------|-------------------|-----------------|----------------|--------------|----------------|-------|
| **Logging Implementation** | **R/A** | **A** | C | C | I | I |
| **Logging Infrastructure** | **R/A** | I | C | C | I | I |
| **Retention Management** | **R/A** | I | C | I | I | I |
| **Security Controls** | **R/A** | I | I | C | I | I |
| **Access Management** | **R/A** | **A** | C | C | C | C |
| **Log Monitoring** | **R** | **A** | **R** | **R** | I | I |
| **Log Analysis** | **R** | **A** | **R** | **R** | I | I |
| **Authority Requests** | **R** | I | I | I | I | **R** |
| **Internal Audit** | C | I | I | I | **R/A** | I |

**RACI Legend:**
- **R** = Responsible (does the work)
- **A** = Accountable (ultimately answerable)
- **C** = Consulted (provides input)
- **I** = Informed (kept up-to-date)

---

### 6.2 Role Descriptions

**IT Security Manager**
- **Primary Responsibility:** Owns logging framework, ensures compliance
- **Key Activities:**
  - Implements logging infrastructure
  - Configures retention policies
  - Manages security controls
  - Manages access controls
  - Reports logging metrics
- **Required Competencies:** EU AI Act Article 12, logging systems, security, retention management

**AI System Owner**
- **Primary Responsibility:** Accountable for logging of their AI system
- **Key Activities:**
  - Ensures logging implemented
  - Approves logging configuration
  - Monitors log availability
  - Participates in access reviews
- **Required Competencies:** AI system knowledge, logging requirements

**Operations Team**
- **Primary Responsibility:** Monitor logs for operational issues
- **Key Activities:**
  - Monitor logs for errors
  - Analyze performance issues
  - Support incident investigation
- **Required Competencies:** Log analysis, system operations

**Security Team**
- **Primary Responsibility:** Monitor logs for security issues
- **Key Activities:**
  - Monitor for security events
  - Investigate security incidents
  - Analyze security trends
- **Required Competencies:** Security monitoring, incident response

**Internal Audit**
- **Primary Responsibility:** Audit logging compliance
- **Key Activities:**
  - Audit logging implementation
  - Test retention compliance
  - Review access controls
- **Required Competencies:** Audit expertise, logging knowledge

**Legal**
- **Primary Responsibility:** Manage authority requests
- **Key Activities:**
  - Respond to authority requests
  - Coordinate log provision
  - Ensure legal compliance
- **Required Competencies:** EU AI Act legal expertise, regulatory compliance

---

## EXCEPTIONS

### 7.1 Exception Philosophy

Logging and record keeping is a **critical regulatory compliance activity** for high-risk AI systems. Exceptions are granted restrictively and only where compensating controls adequately mitigate risks.

---

### 7.2 Allowed Exceptions

The following exceptions **may** be granted with proper justification and approval:

| Exception Type | Justification Required | Maximum Duration | Approval Authority | Compensating Controls |
|----------------|----------------------|------------------|-------------------|---------------------|
| **Reduced Log Detail (Minimal-Risk AI)** | AI system clearly minimal-risk; reduced logging sufficient | Permanent | IT Security Manager | Document rationale; Annual re-confirmation |
| **Extended Retention Retrieval Time** | Technical constraints prevent immediate retrieval | 48 hours | IT Security Manager | Document technical constraints; Accelerated retrieval plan |

---

### 7.3 Prohibited Exceptions

The following exceptions **cannot** be granted under any circumstances:

❌ **Skipping logging for high-risk AI** - Mandatory per Article 12(1), no exceptions  
❌ **Reducing retention below 10 years** - Mandatory per Article 12(2), no exceptions  
❌ **Disabling tamper protection** - Required for log integrity  
❌ **Allowing unauthorized log modification** - Violates integrity requirements  
❌ **Ignoring authority requests** - Required per Article 53  

---

### 7.4 Exception Request Process

**Step 1: Submit Exception Request**
- Complete Exception Request Form (FORM-AI-EXCEPTION-001)
- Include business justification
- Propose compensating controls
- Specify duration requested
- Attach risk assessment

**Step 2: Risk Assessment**
- IT Security Manager assesses risk of granting exception
- Evaluates adequacy of compensating controls
- Documents residual risk

**Step 3: Approval**
- Route to appropriate approval authority based on exception type
- IT Security Manager approval: Minor exceptions
- AI Governance Committee: Significant exceptions

**Step 4: Documentation and Monitoring**
- Document exception in Exception Register
- Assign exception owner
- Set review date
- Monitor compensating controls
- Report exceptions quarterly to AI Governance Committee

**Step 5: Exception Review and Closure**
- Review exception at specified review date
- Assess if exception still needed
- Close exception when normal logging completed
- Document lessons learned

---

## ENFORCEMENT

### 8.1 Non-Compliance Consequences

| Violation | Severity | Consequence | Remediation Required |
|-----------|----------|-------------|---------------------|
| **High-risk AI without logging** | Critical | Immediate suspension until logging implemented | Implement logging within 5 business days; Root cause analysis |
| **Logging system failure** | Critical | Immediate escalation; System may need suspension | Restore logging within 4 hours; Root cause analysis |
| **Retention below 10 years** | Critical | Immediate correction; Compliance gap assessment | Extend retention to 10 years; Assess impact |
| **Tamper protection disabled** | High | Immediate correction; Security investigation | Re-enable tamper protection; Security review |
| **Unauthorized log access** | High | Security investigation; Access revocation | Revoke access; Security review; Disciplinary action |
| **Late authority request response** | Medium | Written warning; Escalation to management | Respond immediately; Process improvement plan |

---

### 8.2 Escalation Procedures

**Level 1: IT Security Manager**
- Minor procedural violations
- Logging configuration issues
- Timeline delays < 5 days
- **Action:** Written warning, corrective action required

**Level 2: IT Security Manager + AI Governance Committee**
- Repeated violations
- Logging system failures
- Retention issues
- **Action:** Formal review, corrective action plan, management notification

**Level 3: AI Governance Committee**
- High-risk AI without logging
- Critical security violations
- Regulatory violations
- **Action:** Immediate AI system suspension, investigation, disciplinary action

**Level 4: Executive Management + Legal**
- Potential regulatory enforcement action
- Significant legal liability
- Reputational risk
- **Action:** Executive crisis management, legal strategy, regulatory engagement

---

### 8.3 Immediate Escalation Triggers

Escalate **immediately** to AI Governance Committee + Legal if:
- ⚠️ High-risk AI system operating without logging
- ⚠️ Logging system failure affecting multiple systems
- ⚠️ Tamper detection alert
- ⚠️ Unauthorized log deletion or modification
- ⚠️ Regulatory inquiry or inspection related to logging
- ⚠️ Authority request not responded to within 5 days

---

### 8.4 Disciplinary Actions

Individuals responsible for logging violations may be subject to:
- Verbal or written warning
- Mandatory retraining
- Performance improvement plan
- Reassignment of responsibilities
- Suspension (with pay during investigation)
- Termination (for egregious violations, e.g., knowingly disabling logging)

**Factors Considered:**
- Intent (knowing violation vs. honest mistake)
- Severity of violation
- Impact (actual or potential)
- Cooperation with remediation
- Prior violation history

---

## KEY PERFORMANCE INDICATORS (KPIs)

### 9.1 Logging and Record Keeping KPIs

| KPI ID | KPI Name | Definition | Target | Measurement Method | Frequency | Owner | Reporting To |
|--------|----------|------------|--------|-------------------|-----------|-------|--------------|
| **KPI-LOG-001** | Logging Availability | % uptime of logging system | ≥99.9% | (Uptime / Total time) × 100 | Monthly | IT Security Manager | AI Governance Committee |
| **KPI-LOG-002** | Log Completeness | % of AI operations logged | 100% | (# operations logged / # total operations) × 100 | Daily | IT Security Manager | Management |
| **KPI-LOG-003** | Retention Compliance | % of logs retained for 10 years | 100% | (# logs retained / # logs created) × 100 | Monthly | IT Security Manager | AI Governance Committee |
| **KPI-LOG-004** | Access Control Compliance | % of logs with proper access controls | 100% | (# logs with access controls / # total logs) × 100 | Monthly | IT Security Manager | Management |
| **KPI-LOG-005** | Authority Response Time | Average days to respond to authority requests | < 5 days | Σ (response date - request date) / # requests | Per request | Legal | Executive Management |
| **KPI-LOG-006** | Integrity Verification | % of logs with verified integrity | 100% | (# logs verified / # total logs) × 100 | Monthly | IT Security Manager | Management |
| **KPI-LOG-007** | Log Analysis Completion | % of scheduled log analyses completed | 100% | (# analyses completed / # scheduled analyses) × 100 | Monthly | IT Security Manager | Management |
| **KPI-LOG-008** | Access Review Completion | % of quarterly access reviews completed on time | 100% | (# reviews on time / # scheduled reviews) × 100 | Quarterly | IT Security Manager | AI Governance Committee |
| **KPI-LOG-009** | Tamper Detection | Number of tamper attempts detected | 0 | Count of tamper attempts | Continuous | IT Security Manager | AI Governance Committee |
| **KPI-LOG-010** | Retrieval Test Success | % of retrieval tests successful | 100% | (# successful tests / # total tests) × 100 | Quarterly | IT Security Manager | Management |

---

### 9.2 KPI Dashboards and Reporting

**Real-Time Dashboard** (IT Security Manager access)
- Current logging availability
- Log completeness status
- Retention compliance
- Access control status
- Tamper detection alerts
- System health

**Monthly Management Report**
- KPI-LOG-001, 002, 003, 004, 006, 007, 010
- Trend analysis (vs. previous month)
- Issues and risks
- Planned actions

**Quarterly AI Governance Committee Report**
- All KPIs
- Logging infrastructure status
- Retention compliance status
- Security controls effectiveness
- Internal audit findings (if conducted)
- Exception register review

**Annual Executive Report**
- Full-year KPI performance
- Logging maturity assessment
- Strategic recommendations
- Regulatory outlook

---

### 9.3 KPI Thresholds and Alerts

| KPI | Green (Good) | Yellow (Warning) | Red (Critical) | Alert Action |
|-----|-------------|------------------|----------------|--------------|
| **Logging Availability** | ≥99.9% | 99.0-99.8% | < 99.0% | Red: Immediate escalation to AI Governance Committee |
| **Log Completeness** | 100% | 95-99% | < 95% | Red: Immediate escalation to AI Governance Committee |
| **Retention Compliance** | 100% | 95-99% | < 95% | Red: Immediate escalation to AI Governance Committee |
| **Tamper Detection** | 0 | N/A | > 0 | Red: Immediate escalation to Security + AI Governance Committee |

---

## TRAINING REQUIREMENTS

### 10.1 Training Program Overview

All personnel involved in logging and record keeping must complete role-specific training to ensure competency in EU AI Act Article 12 requirements, logging systems, and logging procedures.

---

### 10.2 Role-Based Training Requirements

| Role | Training Course | Duration | Content | Frequency | Assessment Required |
|------|----------------|----------|---------|-----------|-------------------|
| **IT Security Manager** | Logging Management Expert Training | 16 hours | EU AI Act Article 12; Logging infrastructure; Retention management; Security controls; Access management | Initial + annually | Yes - Written exam (≥90%) + Practical exercise |
| **Operations Team** | Log Monitoring and Analysis | 8 hours | Log monitoring; Log analysis; Alerting; Incident investigation | Initial + annually | Yes - Practical exercise |
| **Security Team** | Security Log Analysis | 12 hours | Security monitoring; Incident investigation; Threat detection; Log forensics | Initial + annually | Yes - Practical exercise |
| **AI System Owners** | Logging Overview | 4 hours | Logging requirements; Responsibilities; Access management | At onboarding + annually | Yes - Knowledge check (≥80%) |
| **All AI Development Staff** | Logging Awareness | 2 hours | Logging basics; When logging needed; Logging requirements | At onboarding + annually | Yes - Knowledge check (≥80%) |

---

### 10.3 Training Content by Topic

**EU AI Act Article 12 Requirements**
- Mandatory log elements
- 10-year retention requirement
- Authority access requirements
- Compliance obligations

**Logging Infrastructure**
- Logging frameworks
- Centralized log management
- Tamper protection
- High availability
- Scalability

**Retention Management**
- 10-year retention policy
- Storage capacity planning
- Backup and archival
- Retrieval capability

**Security Controls**
- Encryption (at rest and in transit)
- Access controls
- Audit trails
- Tamper detection
- Integrity verification

**Log Analysis and Monitoring**
- Real-time monitoring
- Automated alerting
- Log analysis techniques
- Trend analysis
- Incident investigation

---

### 10.4 Training Delivery Methods

**Initial Training:**
- Instructor-led classroom or virtual training
- Includes interactive exercises and case studies
- Hands-on practice with logging tools
- Group discussions of complex scenarios

**Annual Refresher:**
- E-learning modules for core content review
- Live update sessions for regulatory changes
- Case study reviews of recent logging activities
- Knowledge assessment

**On-the-Job Training:**
- Mentoring for new logging staff
- Job shadowing during logging implementation
- Supervised logging setup for first 3 AI systems

**Just-in-Time Training:**
- Quick reference guides and job aids
- Video tutorials on specific topics
- Help desk support from experienced logging staff

---

### 10.5 Training Effectiveness Measurement

**Assessment Methods:**
- Written exams for knowledge retention
- Practical exercises for skill application
- On-the-job observations for competency validation
- Feedback surveys for training quality

**Competency Validation:**
- IT Security Managers: Must configure logging for 1 sample AI system with 100% compliance before independent implementation
- All staff: Must pass knowledge assessments with minimum required scores

**Training Metrics:**
| Metric | Target | Frequency |
|--------|--------|-----------|
| Training completion rate | 100% | Quarterly |
| Assessment pass rate (first attempt) | ≥ 90% | Per training |
| Training effectiveness score (survey) | ≥ 4.0/5.0 | Per training |
| Time to competency (IT Security Managers) | < 30 days | Per person |

---

### 10.6 Training Records

**Records Maintained:**
- Training attendance records
- Assessment scores
- Competency validations
- Refresher training completion
- Individual training transcripts

**Retention:** 10 years (to align with EU AI Act documentation retention)

**Access:** HR, IT Security Manager, Internal Audit, Competent Authorities (upon request)

---

## DEFINITIONS

| Term | Definition | Source |
|------|------------|--------|
| **Automated Logging** | Automatic capture of AI system operations without manual intervention | EU AI Act Article 12(1) |
| **Period of Use** | Start and end time of each AI system use | EU AI Act Article 12(1) |
| **Reference Database** | Database against which input data has been checked | EU AI Act Article 12(1) |
| **Matched Input Data** | Input data for which search has led to match | EU AI Act Article 12(1) |
| **Person Verification** | Identification of natural persons involved in verification of results | EU AI Act Article 12(1) |
| **Log Retention** | Period for which logs must be kept (10 years per Article 12(2)) | EU AI Act Article 12(2) |
| **Tamper-Proof** | Logs cannot be modified or deleted after creation | This Standard |
| **Write-Once Storage** | Storage that allows writing once and reading many times (WORM) | This Standard |
| **Integrity Verification** | Process of verifying log integrity using cryptographic methods | This Standard |
| **Log Analysis** | Process of examining logs to identify patterns, anomalies, or issues | This Standard |
| **Competent Authority** | National authority designated to supervise application of EU AI Act | EU AI Act Article 3(40) |

---

## LINK WITH AI ACT AND ISO42001

### 12.1 EU AI Act Regulatory Mapping

This standard implements the following EU AI Act requirements:

| EU AI Act Provision | Article | Requirement Summary | Implemented By (Controls) |
|-------------------|---------|-------------------|------------------------|
| **Record-Keeping** | Article 12 | Automated logging and 10-year retention | All controls (LOG-001 through LOG-005) |
| **Automatic Logging** | Article 12(1) | Automated logging of specified elements | LOG-001, LOG-002 |
| **Log Retention** | Article 12(2) | 10-year retention of logs | LOG-003 |
| **Documentation Availability** | Article 53 | Logs available to competent authorities | LOG-004, LOG-005 |

---

### 12.2 ISO/IEC 42001:2023 Alignment

This standard aligns with ISO/IEC 42001:2023 as follows:

| ISO 42001 Clause | Requirement | Implementation in This Standard |
|-----------------|-------------|-------------------------------|
| **Clause 7.5: Documented information** | Maintain documented information | LOG-001, LOG-002, LOG-003 |
| **Clause 7.5.3: Control of documented information** | Control documented information | LOG-004 |
| **Clause 9.1: Monitoring, measurement, analysis, and evaluation** | Monitor and measure AI management system performance | LOG-005 |
| **Clause 9.2: Internal audit** | Conduct internal audits | Compliance Section 5.2 |

---

### 12.3 Relationship to Other Standards

This logging and record keeping standard integrates with other AI Act standards:

| Related Standard | Integration Point | Rationale |
|----------------|-------------------|-----------|
| **STD-AI-001: Classification** | Classification determines if logging required | High-risk AI requires Article 12 logging |
| **STD-AI-004: Technical Documentation** | Logging configuration documented in Annex IV | Logging infrastructure documented in technical documentation |
| **STD-AI-013: Incident Management** | Logs used for incident investigation | Log analysis supports incident management |

---

### 12.4 References and Related Documents

**EU AI Act (Regulation (EU) 2024/1689):**
- Article 12: Record-Keeping
- Article 12(1): Automatic Logging
- Article 12(2): Log Retention
- Article 53: Documentation Availability

**ISO/IEC Standards:**
- ISO/IEC 42001:2023: Information technology — Artificial intelligence — Management system
- ISO/IEC 27001:2022: Information security management systems
- ISO/IEC 27035:2023: Information security incident management

**Internal Documents:**
- POL-AI-001: Artificial Intelligence Policy (parent policy)
- STD-AI-001: AI System Classification Standard
- STD-AI-004: AI Technical Documentation Standard
- STD-AI-013: AI Incident Management Standard
- PROC-AI-LOG-001, -002: Logging procedures

---

## APPROVAL AND AUTHORIZATION

| Role | Name | Title | Signature | Date |
|------|------|-------|-----------|------|
| **Prepared By** | Thomas Wilson | IT Security Manager | _________________ | ________ |
| **Reviewed By** | David Lee | Chief Technology Officer | _________________ | ________ |
| **Reviewed By** | Sarah Johnson | AI Act Program Manager | _________________ | ________ |
| **Reviewed By** | Jane Doe | Chief Strategy & Risk Officer | _________________ | ________ |
| **Approved By** | Jane Doe | AI Governance Committee Chair | _________________ | ________ |

**Effective Date:** 2025-08-01  
**Next Review Date:** 2026-08-01  
**Review Frequency:** Annually or upon regulatory change

---

**END OF STANDARD STD-AI-005**

---

*This standard is a living document. Feedback and improvement suggestions should be directed to the IT Security Manager.*
