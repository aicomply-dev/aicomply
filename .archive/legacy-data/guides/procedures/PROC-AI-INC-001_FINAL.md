# PROC-AI-INC-001: AI Incident Management Procedure

**Procedure ID:** PROC-AI-INC-001
**Procedure Name:** AI Incident Management Procedure
**Standard:** STD-AI-013: Incident Management Standard
**Covers Controls:** INC-001, INC-002, INC-003, INC-004, INC-005
**EU AI Act Article:** Article 73 (Reporting of Serious Incidents)
**Effective Date:** [To be filled]
**Last Updated:** [To be filled]
**Next Review Date:** [To be filled]
**Approval Status:** [Draft/Approved]

---

## 1. PURPOSE AND SCOPE

### 1.1 Purpose

This procedure establishes the step-by-step process for detecting, classifying, responding to, investigating, and reporting incidents related to high-risk AI systems in compliance with EU AI Act Article 73. The procedure ensures serious incidents are identified promptly, reported to competent authorities within required timelines, and properly investigated to prevent recurrence and improve AI system safety.

### 1.2 Scope

This procedure applies to:
- All high-risk AI systems classified per STD-AI-001
- All AI systems that could cause serious incidents as defined in Article 3(49)
- Providers and deployers of high-risk AI systems
- All incidents and malfunctions affecting AI systems
- Serious incidents requiring regulatory reporting per Article 73

This procedure does not apply to:
- Minimal-risk AI systems (unless incident causes serious harm)
- Limited-risk AI systems (unless incident causes serious harm)
- Third-party AI system incidents (covered by vendor escalation in PROC-AI-VENDOR-001)

### 1.3 Procedure Owner and Contacts

| Role | Name | Title | Contact |
|------|------|-------|---------|
| **Procedure Owner** | [Name] | AI Incident Manager | [Email/Phone] |
| **Escalation** | [Name] | Chief Risk Officer | [Email/Phone] |
| **Governance** | [Name] | AI Governance Committee Chair | [Email/Phone] |
| **Regulatory** | [Name] | Compliance Officer | [Email/Phone] |

---

## 2. ROLES AND RESPONSIBILITIES

### 2.1 Key Roles

| Role | Responsibility | Authority |
|------|---|---|
| **AI Incident Manager** | Own incident management process; classify incidents; coordinate response; report to authorities | Classify incidents; activate incident response; approve incident reports |
| **AI System Owner** | Detect and report incidents; implement immediate corrective actions; participate in investigations | Implement corrective actions; escalate to Incident Manager |
| **Chief Risk Officer** | Oversight of incident management; approve serious incident reports; regulatory escalation | Approve serious incident reports; escalate to Board |
| **AI Governance Committee** | Review serious incidents; approve corrective action plans; monitor incident trends | Approve major corrective actions; recommend process improvements |
| **Compliance Officer** | Ensure regulatory compliance; coordinate authority notifications; manage regulatory relationships | Challenge incident classifications; recommend reporting improvements |
| **Legal Counsel** | Legal advice on incident response; review communications; liability assessment | Approve external communications; advise on legal obligations |
| **Data Scientist/ML Engineer** | Technical investigation; root cause analysis; implement technical fixes | Execute corrective actions; provide technical expertise |
| **Internal Audit** | Audit incident management effectiveness; verify control operation; assess compliance | Validate incident response; recommend improvements |
| **Market Surveillance Authority Contact** | Receive serious incident reports; request additional information; conduct investigations | Request documentation; conduct inspections |

### 2.2 RACI Matrix

| Activity | Incident Manager | AI System Owner | CRO | AI Gov Committee | Compliance | Legal | Data Scientist | Audit |
|----------|---|---|---|---|---|---|---|---|
| Incident detection | A | R | I | I | I | I | R | I |
| Incident classification | R | C | A | I | C | C | I | I |
| Immediate response | A | R | I | I | C | I | R | I |
| Incident investigation | A | R | I | C | C | I | R | I |
| Root cause analysis | C | C | I | I | I | I | A | I |
| Report preparation | R | C | A | C | C | C | C | I |
| Authority notification | A | I | A | C | R | C | I | I |
| Corrective actions | C | R | I | A | I | I | A | I |
| Follow-up reporting | A | C | C | C | R | I | C | I |
| Incident closure | A | C | C | C | C | I | I | R |

**Legend:** A=Accountable, R=Responsible, C=Consulted, I=Informed

---

## 3. INCIDENT MANAGEMENT FRAMEWORK

### 3.1 Incident Management System Components

The AI incident management system consists of five integrated components:

```
┌─────────────────────────────────────────────────────────────┐
│         AI INCIDENT MANAGEMENT SYSTEM FRAMEWORK             │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  1. INCIDENT DETECTION & CLASSIFICATION                     │
│     ├─ Continuous Monitoring                                │
│     ├─ Incident Detection Mechanisms                        │
│     ├─ Serious Incident Classification                      │
│     └─ Incident Register Maintenance                        │
│                                                              │
│  2. IMMEDIATE RESPONSE & NOTIFICATION                       │
│     ├─ Incident Response Activation                         │
│     ├─ Immediate Containment Actions                        │
│     ├─ Stakeholder Notification                             │
│     └─ Authority Initial Notification (if serious)          │
│                                                              │
│  3. INVESTIGATION & ROOT CAUSE ANALYSIS                     │
│     ├─ Incident Investigation Process                       │
│     ├─ Root Cause Analysis Methods                          │
│     ├─ Evidence Collection & Preservation                   │
│     └─ Impact Assessment                                    │
│                                                              │
│  4. REGULATORY REPORTING                                    │
│     ├─ Serious Incident Report Preparation                  │
│     ├─ Authority Submission (15-day deadline)               │
│     ├─ Follow-Up Reporting                                  │
│     └─ Documentation & Record Retention                     │
│                                                              │
│  5. CORRECTIVE ACTIONS & CONTINUOUS IMPROVEMENT             │
│     ├─ Corrective Action Planning                           │
│     ├─ Preventive Measures Implementation                   │
│     ├─ Lessons Learned Process                              │
│     └─ Incident Management Process Improvement              │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### 3.2 Serious Incident Definition (Article 3(49))

Per EU AI Act Article 3(49), a **serious incident** is:

> "Any incident or malfunctioning of an AI system that directly or indirectly leads to any of the following:
> (a) the death of a person, or serious harm to a person's health;
> (b) a serious and irreversible disruption of the management or operation of critical infrastructure;
> (c) the infringement of obligations under Union law intended to protect fundamental rights;
> (d) serious harm to property or the environment."

**Key Characteristics:**
- Must be **direct or indirect** causation
- Must result in one of the four serious consequences
- Includes both incidents (actual events) and malfunctioning (system failures)
- Applies to AI systems in use (not development/testing environments)

### 3.3 Incident Classification Matrix

All incidents are classified using a 4-level severity matrix:

| Severity Level | Definition | Examples | Response Timeline | Authority Reporting |
|----------------|-----------|----------|-------------------|---------------------|
| **Critical (Serious)** | Death, serious injury, fundamental rights breach, critical infrastructure disruption | • Death from autonomous vehicle<br>• Serious injury from medical AI<br>• Discrimination in hiring/credit<br>• Critical infrastructure failure | Immediate (< 1 hour) | Yes - 15 days for report<br>72 hours for initial notification if death/serious injury |
| **High** | Significant harm, major service disruption, severe property damage | • Non-serious injury<br>• Major system malfunction<br>• Significant financial loss<br>• Major privacy breach | Within 4 hours | No (unless becomes serious) |
| **Medium** | Limited harm, recoverable issues, minor service disruption | • Temporary service degradation<br>• Minor inaccuracies<br>• Limited user impact | Within 24 hours | No |
| **Low** | Minimal/no harm, minor technical issues | • UI glitches<br>• Performance variations<br>• No user impact | Within 72 hours | No |

### 3.4 Reporting Timeline Requirements

Different incident types have different reporting timelines per Article 73:

| Incident Type | Initial Notification | Full Report | Follow-Up | Authority |
|---------------|---------------------|-------------|-----------|-----------|
| **Death or serious injury** | 72 hours | 15 days | As needed | Market surveillance authority (Member State where occurred) |
| **Fundamental rights breach** | N/A (immediate internal escalation) | 15 days | As needed | Market surveillance authority |
| **Critical infrastructure disruption** | Immediate (per infrastructure sector regulations) | 15 days | As needed | Market surveillance authority + sector regulator |
| **Serious property/environmental harm** | N/A (immediate internal escalation) | 15 days | As needed | Market surveillance authority |
| **Widespread malfunctioning** | N/A | 15 days (from detection) | As needed | Market surveillance authority |

**Additional Coordination:**
- Medical devices: Coordinate with MDR/IVDR reporting (Article 73(5))
- Product safety: Coordinate with Annex I legislation reporting
- GDPR breaches: Coordinate with DPA notification (72 hours)

### 3.5 Provider vs. Deployer Reporting Obligations

| Obligation | Provider (Article 73(1)) | Deployer (Article 73(2)) |
|-----------|-------------------------|--------------------------|
| **Report serious incidents** | Yes - to market surveillance authority of Member State where incident occurred | Yes - to provider AND to relevant market surveillance authority |
| **Report widespread malfunctioning** | Yes - if multiple AI systems affected | N/A |
| **Timeline** | 15 days after becoming aware | Immediately inform provider; report to authority per provider timeline |
| **Information to include** | Full incident report per Article 73(1) | Incident description; AI system identification; circumstances |
| **Follow-up reporting** | Yes - update authorities on investigation progress | As requested by provider or authority |

---

## 4. STEP-BY-STEP PROCEDURE

### PHASE 1: INCIDENT DETECTION AND CLASSIFICATION

#### Step 1.1: Detect Incident (Control INC-001)

**When:** Continuous monitoring; as incidents occur

**Who:** AI System Owner, ML Ops, Users, Monitoring Systems

**How:**

1. **Automated Detection Mechanisms**

   Configure automated incident detection systems:

   - **Monitoring System Alerts**
     - Model performance degradation alerts
     - Accuracy/precision threshold breaches
     - Fairness metric violations
     - System error rate spikes
     - Latency/availability issues

   - **Anomaly Detection**
     - Unusual output patterns
     - Unexpected decision distributions
     - Data drift alerts
     - Input anomaly detection

   - **Integration Alerts**
     - API error rate spikes
     - Downstream system failures
     - Data pipeline failures

   - **Security Alerts**
     - Unauthorized access attempts
     - Adversarial attack detection
     - Data breach indicators

2. **Manual Detection Sources**

   Incidents may also be detected through:

   - **User Reports**
     - Customer complaints
     - User feedback forms
     - Support tickets
     - Social media mentions

   - **Internal Observations**
     - Quality assurance testing
     - Manual review findings
     - Internal audit discoveries
     - Penetration testing results

   - **External Reports**
     - Media reports
     - Regulatory inquiries
     - Third-party notifications
     - Legal claims

3. **Initial Incident Logging**

   When incident is detected, immediately:

   a. **Create Initial Incident Record** (FORM-AI-INC-001)
      - Incident ID (INC-AI-YYYY-NNNN format)
      - Date/time detected
      - Detection source (automated/manual)
      - AI system identification
      - Brief description
      - Initial severity estimate
      - Reporter name and contact

   b. **Preserve Evidence**
      - Capture system logs
      - Save screenshots/outputs
      - Record environmental conditions
      - Document witness observations
      - Preserve data snapshots

   c. **Notify Incident Manager**
      - Email to incident-manager@organization.com
      - For potential serious incidents: Phone call immediately
      - Include incident ID and brief description

4. **Document Detection**

   Complete Incident Detection Record (REC-AI-INC-001):
   - Incident ID
   - Detection timestamp
   - Detection method
   - Initial observations
   - Evidence preserved
   - Incident Manager notified

**Evidence Required:**
- Initial Incident Record (FORM-AI-INC-001)
- Incident Detection Record (REC-AI-INC-001)
- Preserved evidence (logs, screenshots, data)
- Notification confirmation

**Timing:** Immediate (within minutes of detection)

---

#### Step 1.2: Classify Incident Severity (Control INC-001)

**When:** Immediately after incident detection (within 1 hour)

**Who:** AI Incident Manager + AI System Owner + Subject Matter Experts

**Regulatory Basis:** Article 73(1) requires reporting of "serious incidents" - accurate classification is critical

**How:**

1. **Gather Classification Information**

   Collect information needed for classification:

   a. **Incident Details**
      - What happened? (factual description)
      - When did it happen? (date/time)
      - Where did it happen? (location/system)
      - Who was affected? (persons/systems)
      - How many affected? (single/multiple)

   b. **AI System Context**
      - AI system ID and classification
      - Intended purpose and use case
      - Deployment environment
      - User population
      - Risk classification (per PROC-AI-CLS-001)

   c. **Impact Assessment**
      - Actual harm caused (observed)
      - Potential harm (could have occurred)
      - Affected persons/systems count
      - Duration of impact
      - Reversibility of impact

2. **Apply Serious Incident Classification Criteria**

   Assess against Article 3(49) criteria:

   **Criterion A: Death or Serious Harm to Health**

   | Question | Yes = Serious | No = Assess Next |
   |----------|--------------|------------------|
   | Did the incident cause death? | SERIOUS | Continue |
   | Did the incident cause serious injury requiring hospitalization? | SERIOUS | Continue |
   | Did the incident cause permanent disability or impairment? | SERIOUS | Continue |
   | Did the incident cause serious psychological harm? | SERIOUS | Continue |
   | Did the incident create imminent risk of death/serious injury? | SERIOUS | Continue |

   **Examples of Serious:**
   - Autonomous vehicle causes fatality
   - Medical AI misdiagnosis leads to serious harm
   - Safety system fails causing injury

   **Examples of NOT Serious:**
   - Minor injury requiring first aid only
   - Temporary discomfort with full recovery
   - No physical harm occurred

   **Criterion B: Critical Infrastructure Disruption**

   | Question | Yes = Serious | No = Assess Next |
   |----------|--------------|------------------|
   | Did incident disrupt energy grid/power supply? | SERIOUS | Continue |
   | Did incident disrupt water/sanitation systems? | SERIOUS | Continue |
   | Did incident disrupt transportation systems? | SERIOUS | Continue |
   | Did incident disrupt financial infrastructure? | SERIOUS | Continue |
   | Did incident disrupt healthcare systems? | SERIOUS | Continue |
   | Did incident disrupt telecommunications? | SERIOUS | Continue |
   | Was disruption serious AND irreversible? | SERIOUS | Continue |

   **Note:** BOTH serious AND irreversible required for this criterion

   **Examples of Serious:**
   - AI controlling power grid causes multi-day blackout
   - Traffic management AI causes citywide gridlock
   - Banking AI causes financial system disruption

   **Examples of NOT Serious:**
   - Temporary service degradation (reversible)
   - Minor delays or inconveniences
   - Disruption to non-critical systems

   **Criterion C: Fundamental Rights Infringement**

   | Right Infringed | Yes = Serious | Examples |
   |-----------------|--------------|----------|
   | Non-discrimination (Article 21) | SERIOUS | Systematic bias in hiring, credit, housing |
   | Privacy and data protection (Article 8) | SERIOUS | Mass surveillance, unauthorized profiling |
   | Human dignity (Article 1) | SERIOUS | Social scoring, manipulation |
   | Freedom of expression (Article 11) | SERIOUS | Censorship, suppression of speech |
   | Right to effective remedy (Article 47) | SERIOUS | Inability to challenge AI decisions |
   | Right to fair trial (Article 47) | SERIOUS | Biased judicial AI affecting outcomes |
   | Child rights (Article 24) | SERIOUS | Harm to children, exploitation |

   **Assessment Questions:**
   - Did incident violate EU Charter of Fundamental Rights?
   - Was infringement of obligations under Union law?
   - Was infringement serious (not minor/technical)?
   - Did incident affect protected characteristics?

   **Examples of Serious:**
   - Hiring AI systematically discriminates against women
   - Credit scoring AI discriminates by race/ethnicity
   - Biometric AI violates privacy rights at scale
   - Judicial AI produces biased risk assessments

   **Examples of NOT Serious:**
   - Minor data processing irregularity (GDPR breach but not serious)
   - Isolated incorrect decision (not systematic)
   - Technical violation with no actual rights impact

   **Criterion D: Serious Property or Environmental Harm**

   | Question | Yes = Serious | No = Not Serious |
   |----------|--------------|------------------|
   | Did incident cause property damage > €1M? | SERIOUS | Continue assessment |
   | Did incident cause environmental contamination? | SERIOUS | Continue assessment |
   | Did incident destroy critical/irreplaceable property? | SERIOUS | Continue assessment |
   | Did incident cause ecosystem damage? | SERIOUS | Not Serious |

   **Examples of Serious:**
   - Industrial AI causes factory explosion/major damage
   - Agricultural AI causes crop failure/environmental harm
   - Construction AI causes building collapse

   **Examples of NOT Serious:**
   - Minor property damage (< €100K)
   - Cosmetic damage
   - Easily repairable issues

3. **Apply 4-Level Severity Classification**

   Based on assessment above, classify incident:

   | Level | Criteria | Authority Reporting |
   |-------|----------|---------------------|
   | **Critical (Serious)** | Meets ANY Article 3(49) criterion (A, B, C, or D) | YES - 15 days |
   | **High** | Significant harm but not "serious" per Article 3(49) | NO (monitor) |
   | **Medium** | Limited harm, recoverable | NO |
   | **Low** | Minimal/no harm | NO |

   **Special Case: Widespread Malfunctioning**

   Per Article 73(1), also report if:
   - Same malfunction affects multiple AI systems (same type/version)
   - Affects multiple users/deployers
   - Timeline: 15 days from detection

   **Classification Decision Tree:**

   ```
   START: Incident Detected
   │
   ├─ Did incident cause death?
   │  └─ YES → CRITICAL (Serious) - Report within 72 hours
   │
   ├─ Did incident cause serious injury/health harm?
   │  └─ YES → CRITICAL (Serious) - Report within 72 hours
   │
   ├─ Did incident seriously disrupt critical infrastructure (irreversibly)?
   │  └─ YES → CRITICAL (Serious) - Report within 15 days
   │
   ├─ Did incident infringe fundamental rights?
   │  └─ YES → CRITICAL (Serious) - Report within 15 days
   │
   ├─ Did incident cause serious property/environmental harm?
   │  └─ YES → CRITICAL (Serious) - Report within 15 days
   │
   ├─ Is this widespread malfunctioning (multiple systems)?
   │  └─ YES → CRITICAL (Serious) - Report within 15 days
   │
   ├─ Did incident cause significant harm (but not "serious")?
   │  └─ YES → HIGH - Internal escalation, monitor
   │
   ├─ Did incident cause limited, recoverable harm?
   │  └─ YES → MEDIUM - Standard response
   │
   └─ Minimal/no harm?
      └─ YES → LOW - Log and monitor
   ```

4. **Document Classification Decision**

   Complete Incident Classification Record (REC-AI-INC-002):
   - Incident ID
   - Classification date/time
   - Classifier name
   - Severity level (Critical/High/Medium/Low)
   - Serious incident? (Yes/No)
   - Classification rationale
   - Article 3(49) criterion met (if serious)
   - Supporting evidence
   - Approver signature

5. **Obtain Classification Approval**

   **Approval Requirements:**

   | Severity | Approver | Timeline |
   |----------|----------|----------|
   | Critical (Serious) | AI Incident Manager + CRO | Within 2 hours |
   | High | AI Incident Manager | Within 4 hours |
   | Medium/Low | AI System Owner | Within 24 hours |

   **If Disagreement:**
   - Escalate to AI Governance Committee
   - Apply precautionary principle (classify as serious if uncertain)
   - Document dissenting opinions

6. **Escalate Serious Incidents**

   If classified as SERIOUS:

   a. **Immediate Escalation** (within 1 hour):
      - Notify CRO (phone + email)
      - Notify AI Governance Committee Chair
      - Notify Legal Counsel
      - Notify Compliance Officer

   b. **Activate Serious Incident Response**
      - Proceed to Step 2.1 (Immediate Response)
      - Start 15-day reporting clock
      - Assign investigation lead
      - Schedule daily status meetings

**Evidence Required:**
- Incident Classification Record (REC-AI-INC-002)
- Classification approval documentation
- Escalation notifications (if serious)
- Supporting analysis and evidence

**Timing:** Within 1 hour of detection (critical for serious incidents)

**Quality Check:**
- Classification criteria applied correctly
- Sufficient evidence to support classification
- Appropriate approvals obtained
- If serious: Escalation completed within 1 hour

---

### PHASE 2: IMMEDIATE RESPONSE AND NOTIFICATION

#### Step 2.1: Activate Incident Response (Control INC-002)

**When:** Immediately after classification (within 1 hour)

**Who:** AI Incident Manager + AI System Owner + Incident Response Team

**How:**

1. **Assemble Incident Response Team**

   Based on incident severity and type:

   **Serious Incidents (Critical):**
   - AI Incident Manager (Lead)
   - AI System Owner
   - Data Scientist/ML Engineer (technical lead)
   - Legal Counsel
   - Compliance Officer
   - Communications/PR (if public-facing)
   - Domain expert (e.g., medical, financial)

   **High Incidents:**
   - AI Incident Manager (Lead)
   - AI System Owner
   - Data Scientist/ML Engineer
   - Compliance Officer (as needed)

   **Medium/Low Incidents:**
   - AI System Owner (Lead)
   - Data Scientist/ML Engineer

2. **Conduct Initial Incident Response Meeting**

   Schedule within 1 hour of classification (for serious incidents):

   **Meeting Agenda:**
   - Review incident facts and classification
   - Assess immediate risks and impacts
   - Determine containment strategy
   - Assign response roles and responsibilities
   - Establish communication protocols
   - Set investigation timeline
   - Identify regulatory reporting requirements

   **Meeting Duration:** 30-60 minutes

   **Documentation:** Incident Response Meeting Minutes (REC-AI-INC-003)

3. **Implement Immediate Containment Actions**

   Take actions to prevent further harm:

   **Technical Containment:**

   | Action | When to Use | Implementation |
   |--------|-------------|----------------|
   | **Disable AI System** | Ongoing harm; safety risk | Immediately shut down system; switch to manual process |
   | **Rollback to Previous Version** | Recent deployment caused incident | Restore last known good version |
   | **Adjust Thresholds** | Overly aggressive decisions | Increase decision thresholds; require human review |
   | **Activate Human Review** | Unsafe to disable completely | Route all decisions through human validation |
   | **Isolate Affected Component** | Specific feature/module issue | Disable problematic feature; maintain core functionality |
   | **Rate Limiting** | Overload/abuse | Reduce request rates; prioritize critical use cases |

   **Operational Containment:**
   - Notify affected users of incident and mitigation
   - Provide interim manual alternative
   - Escalate affected decisions for human review
   - Monitor for additional incidents
   - Increase logging and monitoring

   **Communication Containment:**
   - Prepare holding statement for external inquiries
   - Brief customer support team
   - Alert public relations team (if public-facing incident)
   - Coordinate with legal on external communications

4. **Document Immediate Actions Taken**

   Complete Immediate Response Actions Log (REC-AI-INC-004):
   - Incident ID
   - Response team members
   - Containment actions taken (with timestamps)
   - Systems/features disabled
   - Users notified
   - Interim alternatives provided
   - Approvals obtained
   - Evidence preserved

**Evidence Required:**
- Incident Response Meeting Minutes (REC-AI-INC-003)
- Immediate Response Actions Log (REC-AI-INC-004)
- System change logs (disabling, rollbacks)
- User notification records

**Timing:**
- Serious incidents: Within 1 hour of classification
- High incidents: Within 4 hours
- Medium/Low: Within 24 hours

---

#### Step 2.2: Notify Stakeholders (Control INC-002)

**When:** Immediately after containment (within 2-4 hours of detection)

**Who:** AI Incident Manager + Compliance Officer + Legal Counsel

**How:**

1. **Determine Notification Requirements**

   Based on incident classification and type:

   | Stakeholder | Serious Incident | High Incident | Medium/Low |
   |-------------|------------------|---------------|------------|
   | **Internal Leadership** | Immediate | Within 4 hours | Within 24 hours |
   | **AI Governance Committee** | Within 4 hours | Within 24 hours | Monthly summary |
   | **Affected Users/Deployers** | Immediate (if safety risk) | Within 24 hours | As appropriate |
   | **Provider (if deployer)** | Immediate | Within 24 hours | As appropriate |
   | **Market Surveillance Authority** | Initial: 72 hours (death/injury)<br>Report: 15 days (all serious) | No | No |
   | **Data Protection Authority** | 72 hours (if GDPR breach) | If applicable | No |
   | **Sector Regulator** | Per sector requirements | If applicable | No |
   | **Media/Public** | As advised by legal/PR | Only if public safety | No |

2. **Internal Stakeholder Notification**

   **Immediate Notifications (Serious Incidents):**

   a. **Executive Leadership**
      - CEO
      - CRO
      - Chief Technology Officer
      - Chief Compliance Officer
      - General Counsel

   **Notification Method:** Phone call + email

   **Information to Include:**
   - Incident ID and classification
   - Brief factual description
   - Actual/potential harm
   - Immediate actions taken
   - Regulatory reporting requirements
   - Next steps and timeline

   b. **AI Governance Committee**
      - Chair and all members
      - Schedule emergency meeting if needed

   c. **Board of Directors**
      - For death, serious injury, or major fundamental rights breach
      - Via CEO or General Counsel
      - Timing: Within 4 hours

3. **External Stakeholder Notification**

   **Affected Users/Deployers:**

   If incident creates ongoing safety risk or affects their operations:

   - **Timing:** Immediate (within 2-4 hours)
   - **Method:** Email + in-app notification + phone (for critical)
   - **Content:**
     - Factual description of incident
     - Actions users should take
     - Interim alternatives available
     - Expected resolution timeline
     - Contact for questions

   **Template:** Use User Notification Template (TMPL-AI-INC-001)

   **Approval:** Legal Counsel review before sending

   **Provider Notification (if deployer):**

   Per Article 73(2), deployers must immediately inform provider:

   - **Timing:** Immediate (within 1 hour of classification)
   - **Method:** Emergency contact per provider's incident procedures
   - **Content:**
     - Incident description
     - AI system identification
     - Circumstances of incident
     - Harm caused/potential harm
     - Actions taken
     - Evidence available

   **Follow-Up:** Provide ongoing updates as investigation progresses

4. **Regulatory Notification Preparation**

   For SERIOUS incidents requiring authority notification:

   a. **Identify Competent Authority**
      - Market surveillance authority of Member State where incident occurred
      - If cross-border: Authority of each affected Member State
      - Coordination with national contact points

   b. **Determine Notification Timeline**
      - **72 hours:** Death or serious injury requiring hospitalization (initial notification)
      - **15 days:** Full serious incident report (all serious incidents)

   c. **Assign Regulatory Reporting Lead**
      - Compliance Officer (primary)
      - AI Incident Manager (support)
      - Legal Counsel (review)

   d. **Start Reporting Clock**
      - Document when organization "became aware" of serious incident
      - Calculate 15-day deadline
      - Set internal milestone at day 10 (draft completion target)

5. **Document All Notifications**

   Complete Stakeholder Notification Log (REC-AI-INC-005):
   - Incident ID
   - Stakeholder notified
   - Notification date/time
   - Notification method
   - Information provided
   - Acknowledgment received
   - Follow-up required

**Evidence Required:**
- Stakeholder Notification Log (REC-AI-INC-005)
- Notification emails/letters
- Acknowledgment receipts
- Provider notification confirmation
- Authority notification submission (if applicable)

**Timing:**
- Internal: Within 1-4 hours of classification
- Users: Immediate if safety risk; otherwise within 24 hours
- Provider: Within 1 hour (deployer obligation)
- Authority: 72 hours (death/injury) or 15 days (report)

---

### PHASE 3: INVESTIGATION AND ROOT CAUSE ANALYSIS

#### Step 3.1: Conduct Incident Investigation (Control INC-003)

**When:** Immediately after immediate response; ongoing until completion

**Who:** AI Incident Manager + Investigation Team + Technical Experts

**How:**

1. **Establish Investigation Scope and Objectives**

   Define investigation scope:

   **Investigation Objectives:**
   - Determine root cause(s) of incident
   - Assess actual and potential impact
   - Identify contributing factors
   - Determine if similar risks exist in other systems
   - Recommend corrective and preventive actions
   - Gather evidence for regulatory report

   **Investigation Scope:**
   - AI system(s) involved
   - Time period to investigate
   - Data sources to examine
   - Stakeholders to interview
   - Related systems/processes to review

   **Investigation Timeline:**
   - Serious incidents: Complete within 10 days
   - High incidents: Complete within 15 days
   - Medium/Low: Complete within 30 days

2. **Collect and Preserve Evidence**

   **Technical Evidence:**

   | Evidence Type | What to Collect | How to Preserve |
   |---------------|----------------|-----------------|
   | **System Logs** | Application logs, model inference logs, API logs, error logs | Export and archive with timestamps; chain of custody |
   | **Model Artifacts** | Model version, weights, training data snapshot, hyperparameters | Version control export; secure storage |
   | **Input/Output Data** | Specific inputs that triggered incident, corresponding outputs | Database export; anonymize if needed |
   | **Configuration** | System configuration, feature flags, environment variables | Configuration dump; version control |
   | **Monitoring Data** | Performance metrics, fairness metrics, anomaly alerts | Time-series export; visualization |
   | **Code Version** | Exact code version deployed when incident occurred | Git commit hash; repository snapshot |

   **Operational Evidence:**
   - Incident reports and tickets
   - User complaints and feedback
   - Support interactions
   - Change logs and deployment records
   - Incident response actions taken

   **Human Evidence:**
   - Witness statements
   - User interviews
   - Operator observations
   - Subject matter expert consultations

   **Evidence Management:**
   - Assign unique evidence ID to each item
   - Maintain evidence chain of custody
   - Store securely with access controls
   - Document evidence collection process
   - Preserve metadata (timestamps, sources)

3. **Analyze Incident Timeline**

   Reconstruct what happened:

   **Timeline Construction:**

   | Time | Event | Evidence | Source |
   |------|-------|----------|--------|
   | T-30 days | Model retrained and deployed | Deployment log | CI/CD system |
   | T-7 days | First fairness metric warning | Monitoring alert | Dashboard |
   | T-1 day | Fairness threshold breach | Alert log | Monitoring system |
   | T-0 (incident) | Discriminatory decision made | Output log | System logs |
   | T+5 min | User complaint received | Support ticket | Ticketing system |
   | T+30 min | Incident detected and logged | Incident record | Incident system |
   | T+1 hour | System disabled | Change log | Operations |

   **Analysis Questions:**
   - What sequence of events led to incident?
   - When did the problem first appear?
   - Were there warning signs missed?
   - What triggered the incident at this specific time?
   - What made this incident different from normal operation?

4. **Conduct Technical Analysis**

   **For Model-Related Incidents:**

   a. **Model Behavior Analysis**
      - Reproduce incident with test inputs
      - Examine model decision process
      - Analyze feature importance for incident case
      - Check for adversarial inputs
      - Review model explanations (if available)

   b. **Data Analysis**
      - Examine training data for incident-related patterns
      - Check for data quality issues
      - Assess data representativeness
      - Look for bias in training data
      - Analyze input data distribution shift

   c. **Performance Analysis**
      - Calculate accuracy/precision/recall for affected cases
      - Measure fairness metrics
      - Assess calibration
      - Check for model drift
      - Compare to baseline performance

   **For System-Related Incidents:**

   - System architecture review
   - Integration point analysis
   - API/interface examination
   - Configuration review
   - Infrastructure assessment

5. **Identify Contributing Factors**

   Analyze all factors that contributed to incident:

   **Technical Factors:**
   - Model design flaws
   - Data quality issues
   - Algorithmic bias
   - Software bugs
   - Configuration errors
   - Infrastructure failures

   **Process Factors:**
   - Inadequate testing
   - Insufficient validation
   - Weak quality controls
   - Poor change management
   - Inadequate monitoring

   **Human Factors:**
   - User error/misuse
   - Operator mistakes
   - Training deficiencies
   - Communication failures
   - Misunderstanding of capabilities

   **Organizational Factors:**
   - Resource constraints
   - Pressure to deploy quickly
   - Inadequate expertise
   - Insufficient oversight
   - Unclear responsibilities

6. **Assess Actual and Potential Impact**

   **Actual Impact:**
   - Persons affected (count, demographics)
   - Harm caused (type, severity)
   - Financial impact
   - Reputational impact
   - Operational disruption

   **Potential Impact:**
   - What could have happened (worst case)
   - How many could have been affected
   - Maximum potential harm
   - Systemic risk assessment

   **Broader Risk Assessment:**
   - Could this happen in other AI systems?
   - Are there similar vulnerabilities elsewhere?
   - What is the organization-wide risk?

7. **Document Investigation Findings**

   Complete Incident Investigation Report (RPT-AI-INC-001):

   **Report Structure:**
   1. Executive Summary
   2. Incident Overview
   3. Investigation Scope and Methodology
   4. Timeline of Events
   5. Evidence Summary
   6. Technical Analysis
   7. Contributing Factors
   8. Impact Assessment
   9. Root Cause Analysis (see Step 3.2)
   10. Recommendations
   11. Appendices (evidence, data analysis)

**Evidence Required:**
- Incident Investigation Report (RPT-AI-INC-001)
- Evidence Collection Log (REC-AI-INC-006)
- Technical Analysis Documentation
- Timeline Reconstruction
- Impact Assessment

**Timing:**
- Serious incidents: 10 days (to support 15-day report)
- High incidents: 15 days
- Medium/Low: 30 days

---

#### Step 3.2: Perform Root Cause Analysis (Control INC-005)

**When:** As part of incident investigation (concurrent with Step 3.1)

**Who:** AI Incident Manager + Technical Experts + Process Experts

**How:**

1. **Select Root Cause Analysis Method**

   Choose appropriate RCA method based on incident type:

   | Method | Best For | Timeline |
   |--------|----------|----------|
   | **5 Whys** | Simple incidents, linear causation | 1-2 hours |
   | **Fishbone Diagram** | Complex incidents, multiple factors | 2-4 hours |
   | **Fault Tree Analysis** | Technical/system failures | 4-8 hours |
   | **Barrier Analysis** | Control failures, safety incidents | 2-4 hours |

   **For most AI incidents:** Use 5 Whys + Fishbone (combined approach)

2. **Conduct 5 Whys Analysis**

   **Method:** Ask "Why?" five times to drill down to root cause

   **Example: Discriminatory Hiring Decision**

   | Level | Question | Answer |
   |-------|----------|--------|
   | **Problem** | What happened? | AI made discriminatory hiring recommendation |
   | **Why 1** | Why did AI make discriminatory decision? | Model predicted lower scores for female candidates |
   | **Why 2** | Why did model predict lower scores for women? | Training data contained historical hiring bias |
   | **Why 3** | Why did training data contain bias? | Historical hiring decisions over-represented men |
   | **Why 4** | Why was biased data used for training? | Bias assessment was not performed before training |
   | **Why 5** | Why was bias assessment not performed? | **ROOT CAUSE:** Data governance procedure did not require bias assessment for AI training data |

   **Documentation:** Record each "why" level with supporting evidence

   **Multiple Paths:** If multiple causes, perform 5 Whys for each path

3. **Create Fishbone (Ishikawa) Diagram**

   **Method:** Categorize contributing factors into 6 categories

   **Categories (6 Ms):**
   - **Machine** (AI model/system)
   - **Method** (processes/procedures)
   - **Material** (data/inputs)
   - **Measurement** (monitoring/testing)
   - **Manpower** (people/skills)
   - **Mother Nature** (environment/context)

   **Example Fishbone for Discriminatory Incident:**

   ```
                                      Discriminatory
                                      Hiring Decision
                                           │
   ┌──────────────────┐                    │                    ┌──────────────────┐
   │ MACHINE          │────────────────────┼────────────────────│ METHOD           │
   │ • Model not      │                    │                    │ • No bias        │
   │   tested for     │                    │                    │   assessment     │
   │   fairness       │                    │                    │   required       │
   │ • No fairness    │                    │                    │ • Inadequate     │
   │   constraints    │                    │                    │   testing        │
   └──────────────────┘                    │                    └──────────────────┘
   ┌──────────────────┐                    │                    ┌──────────────────┐
   │ MATERIAL         │────────────────────┼────────────────────│ MEASUREMENT      │
   │ • Training data  │                    │                    │ • Fairness       │
   │   historically   │                    │                    │   metrics not    │
   │   biased         │                    │                    │   monitored      │
   │ • Data not       │                    │                    │ • No alerts for  │
   │   representative │                    │                    │   bias           │
   └──────────────────┘                    │                    └──────────────────┘
   ┌──────────────────┐                    │                    ┌──────────────────┐
   │ MANPOWER         │────────────────────┼────────────────────│ ENVIRONMENT      │
   │ • Insufficient   │                    │                    │ • Pressure to    │
   │   diversity      │                    │                    │   deploy quickly │
   │   expertise      │                    │                    │ • Regulatory     │
   │ • Lack of bias   │                    │                    │   requirements   │
   │   awareness      │                    │                    │   unclear        │
   └──────────────────┘                    │                    └──────────────────┘
   ```

   **Documentation:** Use Fishbone Diagram Template (TMPL-AI-INC-002)

4. **Identify Root Cause(s)**

   Based on 5 Whys and Fishbone analysis:

   **Primary Root Cause:**
   - The fundamental reason(s) the incident occurred
   - If eliminated, incident would not have happened
   - Typically a process/control gap or system design flaw

   **Secondary Root Causes:**
   - Contributing factors that enabled primary root cause
   - Weaknesses in defense layers

   **Example Root Cause Statement:**

   > **Primary Root Cause:** Data governance procedure (PROC-AI-DATA-001) does not require bias assessment of training datasets before use in AI model training, allowing historically biased data to be used without mitigation.
   >
   > **Secondary Root Causes:**
   > 1. Model validation procedure does not include fairness testing requirements
   > 2. Monitoring system does not track fairness metrics in production
   > 3. AI team lacked expertise in bias detection and mitigation techniques

5. **Validate Root Cause**

   Test root cause validity:

   **Validation Questions:**
   - If we eliminate this root cause, will the incident not recur?
   - Is this truly a root cause, or just a symptom?
   - Do we have evidence to support this root cause?
   - Have we addressed all contributing factors?

   **Validation Methods:**
   - Review with subject matter experts
   - Check against evidence
   - Test hypothetical scenarios
   - Compare to similar incidents

6. **Document Root Cause Analysis**

   Complete Root Cause Analysis Report (RPT-AI-INC-002):
   - Incident ID
   - RCA method(s) used
   - 5 Whys analysis (all paths)
   - Fishbone diagram
   - Primary root cause statement
   - Secondary root causes
   - Validation evidence
   - Root cause category (technical/process/human/organizational)

**Evidence Required:**
- Root Cause Analysis Report (RPT-AI-INC-002)
- 5 Whys documentation
- Fishbone diagram
- Validation records

**Timing:** Complete within investigation timeline (10-15 days for serious)

---

### PHASE 4: REGULATORY REPORTING

#### Step 4.1: Prepare Serious Incident Report (Control INC-003, INC-004)

**When:** For serious incidents; within 10 days of incident (to meet 15-day deadline)

**Who:** Compliance Officer + AI Incident Manager + Legal Counsel

**Regulatory Basis:** Article 73(1) and 73(2) require specific information in serious incident reports

**How:**

1. **Verify Reporting Requirement**

   Confirm this is a serious incident requiring reporting:

   - ✅ Classified as "serious" per Article 3(49)
   - ✅ Incident occurred during operational use (not testing)
   - ✅ Organization is provider or deployer of AI system
   - ✅ Incident occurred in EU Member State (or affects EU persons)

   **If any "no" → no Article 73 reporting required (but may have other obligations)**

2. **Identify Competent Authority**

   **Market Surveillance Authority:**
   - Authority of the Member State where incident occurred
   - If cross-border: Each affected Member State
   - If uncertain: Coordinate with AI Office (Article 77)

   **How to Identify:**
   - Consult Authority Contact List (maintained in Appendix C)
   - Check EU Commission list of designated authorities
   - Coordinate with legal counsel if multiple authorities

   **Notification Channels:**
   - Dedicated incident reporting portal (if available)
   - Official email address for serious incidents
   - Backup: Postal mail to registered address
   - CC: AI Office (if required by authority)

3. **Gather Required Information per Article 73**

   **Article 73(1) requires the following information:**

   a. **AI System Identification**
      - AI system name and version
      - Type and classification (high-risk category per Annex III)
      - Unique identifier (serial number, product ID)
      - Provider name and contact information
      - Deployer name and contact (if different from provider)

   b. **Description of the Incident or Malfunctioning**
      - What happened (factual description)
      - When it happened (date, time, duration)
      - Where it happened (location, context)
      - How it was discovered
      - Type of incident (death, injury, infrastructure, rights, property)

   c. **Circumstances and Relevant Context**
      - Intended use of AI system
      - Actual use at time of incident
      - User/operator involved
      - Environmental conditions
      - Input data characteristics
      - Any unusual circumstances

   d. **Analysis of Incident and Cause (if known)**
      - Root cause (if determined)
      - Contributing factors
      - Whether malfunction or misuse
      - Technical explanation
      - Relationship to known risks

   e. **Immediate Measures Taken**
      - Containment actions implemented
      - Users/deployers notified
      - System modifications made
      - Interim safety measures
      - Ongoing monitoring

   f. **Consequences and Harm**
      - Persons affected (number, characteristics)
      - Type of harm (death, injury, discrimination, etc.)
      - Severity of harm
      - Property/environmental damage
      - Reversibility of harm

   g. **Corrective and Preventive Actions**
      - Actions taken to prevent recurrence
      - Actions planned (with timeline)
      - System updates or recalls
      - Process improvements
      - Additional safeguards

   h. **Contact Information**
      - Primary contact for follow-up
      - Technical contact for questions
      - Legal contact
      - 24/7 emergency contact (if applicable)

4. **Draft Serious Incident Report**

   Use Serious Incident Report Template (TMPL-AI-INC-003)

   **Report Structure:**

   ```
   SERIOUS INCIDENT REPORT
   Per EU AI Act Article 73

   SECTION 1: EXECUTIVE SUMMARY
   - Incident ID
   - Report date
   - Incident date
   - Severity and classification
   - Brief description (2-3 sentences)

   SECTION 2: AI SYSTEM INFORMATION
   - System identification
   - Provider/deployer details
   - System classification and risk category
   - Intended purpose

   SECTION 3: INCIDENT DESCRIPTION
   - Detailed factual description
   - Timeline of events
   - Discovery and detection
   - Affected persons/systems

   SECTION 4: CIRCUMSTANCES AND CONTEXT
   - Use context at time of incident
   - Environmental factors
   - Operator/user information
   - Input data characteristics

   SECTION 5: HARM AND CONSEQUENCES
   - Type of harm (per Article 3(49))
   - Persons affected (count, demographics if relevant)
   - Severity and reversibility
   - Property/environmental damage

   SECTION 6: CAUSE ANALYSIS
   - Root cause (if determined)
   - Contributing factors
   - Malfunction vs. misuse determination
   - Relationship to risk assessment

   SECTION 7: IMMEDIATE MEASURES
   - Containment actions taken
   - Notifications made
   - System modifications
   - Interim safety measures

   SECTION 8: CORRECTIVE AND PREVENTIVE ACTIONS
   - Actions to prevent recurrence
   - Implementation timeline
   - Responsible parties
   - Verification methods

   SECTION 9: CONTACT INFORMATION
   - Primary contact
   - Technical contact
   - Emergency contact

   APPENDICES:
   - Supporting documentation
   - Technical analysis
   - Evidence summary
   ```

   **Writing Guidelines:**
   - Factual and objective (no speculation)
   - Clear and concise (avoid jargon)
   - Complete (all Article 73 requirements)
   - Accurate (verified information only)
   - Structured (follow template)

5. **Review and Approve Report**

   **Review Process:**

   | Reviewer | Focus Area | Timeline |
   |----------|-----------|----------|
   | AI Incident Manager | Technical accuracy, completeness | Day 8 |
   | Compliance Officer | Regulatory compliance, format | Day 9 |
   | Legal Counsel | Legal implications, liability | Day 9 |
   | CRO | Oversight, final approval | Day 10 |

   **Review Checklist:**
   - ✅ All Article 73 information included
   - ✅ Factual accuracy verified
   - ✅ Root cause analysis complete (if possible)
   - ✅ Corrective actions clearly stated
   - ✅ Contact information accurate
   - ✅ Supporting documentation attached
   - ✅ No confidential information disclosed inappropriately
   - ✅ Clear and professional language
   - ✅ Translated to required language (if applicable)

6. **Translate Report (if required)**

   - Report must be in language accepted by competent authority
   - Typically: Official language of Member State
   - Engage professional translator if needed
   - Verify technical terminology translation
   - Attach English version as appendix (if not primary language)

7. **Prepare Submission Package**

   **Package Contents:**
   - Serious Incident Report (main document)
   - Cover letter
   - Supporting documentation:
     - Investigation report summary
     - Technical analysis
     - Evidence logs (as appropriate)
     - Risk assessment updates
     - Corrective action plan
   - Contact information sheet

   **Format:**
   - PDF format (signed digitally if required)
   - Named per authority requirements
   - Version controlled
   - All pages numbered
   - Table of contents (if > 10 pages)

**Evidence Required:**
- Serious Incident Report (RPT-AI-INC-003)
- Review and approval records
- Supporting documentation package
- Translation certificates (if applicable)

**Timing:** Complete by Day 10 (to allow 5 days for submission and contingency)

---

#### Step 4.2: Submit Report to Authority (Control INC-004)

**When:** Within 15 days of becoming aware of serious incident

**Who:** Compliance Officer + AI Incident Manager

**Regulatory Basis:** Article 73(1) - Providers must report within 15 days; Article 73(2) - Deployers must report immediately to provider

**How:**

1. **Calculate Submission Deadline**

   **Start Clock:** When organization "became aware" of serious incident
   - Typically: When incident was classified as "serious"
   - Not: When incident occurred (may be earlier)
   - Not: When investigation completed (may be later)

   **Calculate Deadline:**
   - Count 15 calendar days from "became aware" date
   - If deadline falls on weekend/holiday: Next business day (verify with authority)

   **Example:**
   - Incident occurred: January 10
   - Classified as serious: January 12 (start clock)
   - 15-day deadline: January 27
   - Recommended submission: January 25 (2-day buffer)

2. **Verify Submission Requirements**

   Check authority-specific requirements:

   - **Submission Portal:** Web form, dedicated system, email
   - **Format:** PDF, Word, specific template
   - **Language:** Official language of Member State
   - **Authentication:** Digital signature, specific credentials
   - **Confirmation:** Automatic receipt, manual acknowledgment

   **Source:** Authority Contact List (Appendix C) or authority website

3. **Submit Report via Official Channel**

   **Primary Submission:**

   a. **Portal Submission (if available):**
      - Log in to authority reporting portal
      - Complete all required fields
      - Upload report and supporting documents
      - Verify submission successful
      - Save confirmation number and receipt

   b. **Email Submission:**
      - Send to official serious incident email address
      - Subject line: "SERIOUS INCIDENT REPORT - [AI System Name] - [Date]"
      - Attach signed PDF report
      - Request read receipt and confirmation
      - CC: AI Office (if required)

   c. **Postal Submission (backup):**
      - Send registered mail with tracking
      - Include cover letter
      - Request signed receipt
      - Send 2-3 days before deadline (allow for delivery)

   **Backup Submission:**
   - If primary channel fails, use backup immediately
   - Document technical issues encountered
   - Contact authority by phone to confirm receipt

4. **Confirm Receipt**

   **Automatic Confirmation:**
   - Save portal confirmation screen
   - Print to PDF
   - File in incident record

   **Manual Confirmation:**
   - If no automatic receipt within 24 hours:
     - Follow up with authority contact
     - Request confirmation of receipt
     - Verify report ID/reference number

   **Record:**
   - Submission date/time
   - Confirmation number
   - Authority contact who confirmed
   - Method of confirmation

5. **Notify Internal Stakeholders**

   After submission confirmed:

   - Email CRO: "Serious incident report submitted to [Authority] on [Date]"
   - Brief AI Governance Committee
   - Update incident record with submission details
   - Close 15-day reporting timeline

6. **Prepare for Authority Follow-Up**

   Anticipate authority may request:

   - **Additional Information:** Be prepared to respond within 5 business days
   - **Clarifications:** Assign contact for authority questions
   - **Documentation:** Maintain all supporting evidence accessible
   - **Interviews:** Availability of investigation team
   - **On-Site Inspection:** Prepare for potential inspection

   **Response Protocol:**
   - All authority communications go through Compliance Officer
   - Legal Counsel reviews before responding
   - Document all interactions
   - Respond within requested timelines

7. **Document Submission**

   Complete Authority Submission Record (REC-AI-INC-007):
   - Incident ID
   - Authority name and contact
   - Submission date/time
   - Submission method
   - Confirmation details
   - Report version submitted
   - Follow-up actions required

**Evidence Required:**
- Authority Submission Record (REC-AI-INC-007)
- Submission confirmation (receipt, email, etc.)
- Copy of submitted report (final version)
- Authority correspondence log

**Timing:**
- Target: Day 12-13 (2-3 days before deadline)
- Absolute deadline: 15 days from "became aware"

**Critical Success Factors:**
- Submit before deadline (with buffer)
- Obtain confirmation of receipt
- Maintain complete submission record
- Prepare for authority follow-up

---

#### Step 4.3: Provide Follow-Up Reporting (Control INC-004)

**When:** As investigation progresses; as requested by authority; at incident closure

**Who:** Compliance Officer + AI Incident Manager

**How:**

1. **Determine Follow-Up Reporting Requirements**

   Follow-up reports may be required when:

   - **Authority requests additional information**
     - Timeline: Per authority request (typically 5-10 business days)
     - Content: Specific information requested

   - **Investigation reveals new information**
     - Timeline: Within 10 days of new finding
     - Content: Update on root cause, impact, or corrective actions

   - **Corrective actions completed**
     - Timeline: Within 10 days of completion
     - Content: Verification of effectiveness

   - **Incident closure**
     - Timeline: When all actions complete
     - Content: Final summary and closure report

2. **Prepare Follow-Up Report**

   Use Follow-Up Report Template (TMPL-AI-INC-004)

   **Report Structure:**
   ```
   FOLLOW-UP REPORT
   Original Incident Report Reference: [ID and Date]

   SECTION 1: SUMMARY
   - Original incident overview
   - Purpose of this follow-up
   - Key updates since last report

   SECTION 2: INVESTIGATION UPDATE
   - Root cause findings (if new)
   - Additional analysis completed
   - New evidence discovered

   SECTION 3: CORRECTIVE ACTIONS UPDATE
   - Actions completed since last report
   - Actions in progress (status)
   - Actions planned (timeline)
   - Verification results

   SECTION 4: IMPACT REASSESSMENT
   - Any changes to impact assessment
   - Additional persons affected (if any)
   - Long-term consequences identified

   SECTION 5: PREVENTIVE MEASURES
   - Systemic improvements implemented
   - Other AI systems updated
   - Process changes made

   SECTION 6: NEXT STEPS
   - Remaining actions
   - Expected completion dates
   - Next report (if scheduled)
   ```

3. **Submit Follow-Up Report**

   - Use same submission channel as initial report
   - Reference original incident report ID
   - Attach supporting documentation
   - Confirm receipt

4. **Document Follow-Up Reporting**

   Update Authority Submission Record:
   - Follow-up report date
   - Content summary
   - Authority response (if any)
   - Additional requests

**Evidence Required:**
- Follow-Up Reports (RPT-AI-INC-004)
- Authority correspondence
- Updated submission records

**Timing:** Per requirements or authority requests

---

### PHASE 5: CORRECTIVE ACTIONS AND CONTINUOUS IMPROVEMENT

#### Step 5.1: Develop Corrective Action Plan (Control INC-005)

**When:** After root cause identified (concurrent with reporting)

**Who:** AI Incident Manager + AI System Owner + Technical Team

**How:**

1. **Identify Required Corrective Actions**

   Based on root cause analysis, determine actions to:

   **Immediate Corrective Actions** (prevent recurrence in short term):
   - Fix specific technical issue
   - Update configuration
   - Implement quick safeguards
   - Enhance monitoring

   **Long-Term Corrective Actions** (address root cause):
   - Redesign model/system
   - Improve data quality processes
   - Enhance testing procedures
   - Update governance processes

   **Preventive Actions** (prevent similar incidents):
   - Apply learnings to other systems
   - Update procedures and standards
   - Provide training
   - Implement systemic controls

2. **Categorize Corrective Actions**

   | Action Type | Purpose | Example |
   |-------------|---------|---------|
   | **Technical** | Fix AI system/model | Retrain model with bias mitigation; update algorithm |
   | **Procedural** | Improve processes | Require bias assessment; enhance testing |
   | **Monitoring** | Better detection | Add fairness metrics monitoring; improve alerts |
   | **Training** | Improve competence | Bias awareness training; incident response training |
   | **Governance** | Systemic improvement | Update risk management; enhance oversight |

3. **Develop Action Plan for Each Corrective Action**

   For each action, document:

   | Field | Description | Example |
   |-------|-------------|---------|
   | **Action ID** | Unique identifier | CA-INC-2025-001-A |
   | **Action Description** | What will be done | Retrain hiring AI with bias-mitigated dataset |
   | **Root Cause Addressed** | Which root cause this fixes | Biased training data |
   | **Action Type** | Technical/Procedural/etc. | Technical |
   | **Owner** | Person responsible | Data Science Lead |
   | **Priority** | Critical/High/Medium/Low | Critical |
   | **Start Date** | When work begins | 2025-02-01 |
   | **Target Completion** | Deadline | 2025-03-15 |
   | **Resources Required** | Budget, people, tools | 2 data scientists, 3 weeks, €50K |
   | **Dependencies** | What must happen first | Bias assessment completed |
   | **Success Criteria** | How to verify | Fairness ratio 0.9-1.1; accuracy maintained |
   | **Verification Method** | How to test | Fairness testing per PROC-TEST-001 |
   | **Status** | Not Started/In Progress/Complete | Not Started |

4. **Prioritize Corrective Actions**

   **Prioritization Criteria:**

   | Priority | Criteria | Timeline |
   |----------|----------|----------|
   | **Critical** | Prevents recurrence of serious incident; addresses ongoing risk | Complete within 30 days |
   | **High** | Addresses root cause; significant risk reduction | Complete within 60 days |
   | **Medium** | Addresses contributing factors; improves controls | Complete within 90 days |
   | **Low** | Nice-to-have improvements; minor risk reduction | Complete within 6 months |

5. **Obtain Corrective Action Plan Approval**

   **Approval Requirements:**

   | Plan Scope | Approver | Timeline |
   |-----------|----------|----------|
   | Serious incident corrective actions | AI Governance Committee | Within 5 days of plan completion |
   | High incident corrective actions | CRO + AI Incident Manager | Within 3 days |
   | Medium/Low incident | AI System Owner | Within 2 days |

   **Approval Criteria:**
   - Actions address root cause(s)
   - Resources are available
   - Timeline is realistic
   - Success criteria are measurable
   - Verification methods defined

6. **Document Corrective Action Plan**

   Complete Corrective Action Plan (PLAN-AI-INC-001):
   - Incident ID
   - Root cause summary
   - List of all corrective actions
   - Gantt chart or timeline
   - Resource requirements
   - Approval signatures
   - Risk if actions not completed

**Evidence Required:**
- Corrective Action Plan (PLAN-AI-INC-001)
- Action details for each corrective action
- Approval records
- Resource allocation

**Timing:** Complete within 5 days of root cause determination

---

#### Step 5.2: Implement Corrective Actions (Control INC-005)

**When:** Per corrective action plan timeline

**Who:** Action Owners + AI System Owner + Technical Teams

**How:**

1. **Initiate Each Corrective Action**

   For each action in plan:

   a. **Assign Resources**
      - Allocate personnel
      - Allocate budget
      - Allocate tools/infrastructure

   b. **Create Work Plan**
      - Break down into tasks
      - Assign task owners
      - Set milestones
      - Define deliverables

   c. **Kick Off Action**
      - Brief action team
      - Provide context (incident, root cause)
      - Clarify success criteria
      - Set communication cadence

2. **Track Progress**

   **Weekly Status Updates:**
   - Action owner reports status
   - Document progress, blockers, risks
   - Update completion estimate
   - Escalate if behind schedule

   **Tracking Fields:**
   - % Complete
   - Status (On Track/At Risk/Blocked/Complete)
   - Issues/Blockers
   - Mitigation actions
   - Revised completion date (if needed)

3. **Manage Issues and Blockers**

   If corrective action is blocked or delayed:

   - **Escalation:** Report to AI Incident Manager
   - **Resolution:** Identify alternative approaches
   - **Approval:** Get approval for scope/timeline changes
   - **Communication:** Notify stakeholders of delay

4. **Verify Corrective Action Effectiveness**

   Before marking action as "complete":

   a. **Execute Verification Method**
      - Perform testing per success criteria
      - Measure results
      - Compare to targets
      - Document findings

   b. **Examples of Verification:**

   | Action Type | Verification Method |
   |-------------|---------------------|
   | Model retraining | Fairness testing; accuracy testing; validation on holdout data |
   | Process update | Audit of new process; test case execution |
   | Monitoring enhancement | Generate test alert; verify detection |
   | Training completion | Assessment scores; competency verification |

   c. **Verification Pass Criteria:**
      - Success criteria met
      - No new issues introduced
      - Sustainable for ongoing operations
      - Documented and approved

5. **Document Corrective Action Completion**

   For each completed action:

   Complete Corrective Action Completion Record (REC-AI-INC-008):
   - Action ID
   - Completion date
   - Verification results
   - Evidence of effectiveness
   - Approver signature
   - Lessons learned

6. **Update Risk Register**

   After corrective actions:

   - Update risk register (per PROC-AI-RM-001)
   - Reassess residual risk
   - Document risk reduction achieved
   - Close or update related risks

**Evidence Required:**
- Corrective Action Completion Records (REC-AI-INC-008)
- Verification test results
- Updated risk register
- Approval documentation

**Timing:** Per corrective action plan deadlines

---

#### Step 5.3: Conduct Lessons Learned Review (Control INC-005)

**When:** After corrective actions complete; within 30 days of incident closure

**Who:** AI Incident Manager + Incident Response Team + Stakeholders

**How:**

1. **Schedule Lessons Learned Workshop**

   **Participants:**
   - Incident response team
   - AI system owner and operators
   - Technical experts
   - Compliance/legal (for serious incidents)
   - Affected users/deployers (if appropriate)

   **Duration:** 2-3 hours

   **Location:** In-person preferred (or virtual)

2. **Prepare for Workshop**

   **Pre-Work:**
   - Distribute incident summary
   - Share investigation report
   - Review corrective actions taken
   - Prepare discussion questions

3. **Facilitate Lessons Learned Discussion**

   **Discussion Topics:**

   a. **What Went Well?**
      - What worked effectively in incident response?
      - What helped detect/contain incident quickly?
      - What processes/tools were valuable?
      - What should we keep doing?

   b. **What Went Wrong?**
      - What allowed incident to occur?
      - What delayed detection or response?
      - What processes/tools were inadequate?
      - What should we stop doing?

   c. **What Can Be Improved?**
      - How can we prevent similar incidents?
      - How can we detect incidents faster?
      - How can we respond more effectively?
      - What new capabilities do we need?

   d. **What Did We Learn?**
      - Technical learnings (AI/ML insights)
      - Process learnings (procedure gaps)
      - Organizational learnings (culture, training)
      - Regulatory learnings (compliance insights)

4. **Identify Improvement Actions**

   From discussion, identify:

   **Process Improvements:**
   - Update incident management procedure
   - Enhance detection mechanisms
   - Improve classification criteria
   - Streamline reporting process

   **Technical Improvements:**
   - Better monitoring tools
   - Enhanced testing methods
   - Improved model governance
   - Advanced analytics

   **Training Improvements:**
   - Incident response training
   - Technical skills development
   - Awareness programs
   - Tabletop exercises

   **Organizational Improvements:**
   - Clearer roles/responsibilities
   - Better escalation paths
   - Enhanced communication
   - Resource allocation

5. **Document Lessons Learned**

   Complete Lessons Learned Report (RPT-AI-INC-005):

   **Report Structure:**
   1. Incident Summary
   2. What Went Well
   3. What Went Wrong
   4. What Can Be Improved
   5. Key Learnings
   6. Improvement Actions (with owners and timelines)
   7. Recommendations
   8. Next Steps

6. **Share Lessons Learned**

   **Internal Sharing:**
   - Present to AI Governance Committee
   - Share with all AI system owners
   - Include in internal knowledge base
   - Reference in training materials

   **External Sharing (if appropriate):**
   - Industry working groups
   - Peer organizations (anonymized)
   - Public blog posts (non-sensitive learnings)

7. **Implement Improvement Actions**

   For each improvement action:
   - Assign owner
   - Set timeline
   - Allocate resources
   - Track completion
   - Verify effectiveness

**Evidence Required:**
- Lessons Learned Workshop Minutes (REC-AI-INC-009)
- Lessons Learned Report (RPT-AI-INC-005)
- Improvement Action Plan
- Sharing/distribution records

**Timing:** Within 30 days of corrective actions completion

---

#### Step 5.4: Close Incident (Control INC-005)

**When:** After all corrective actions complete and verified effective

**Who:** AI Incident Manager + CRO (for serious incidents)

**How:**

1. **Verify Closure Criteria Met**

   **Closure Criteria Checklist:**

   - ✅ Investigation completed and documented
   - ✅ Root cause identified and validated
   - ✅ All corrective actions completed and verified effective
   - ✅ Risk register updated
   - ✅ Authority reporting completed (if serious)
   - ✅ Follow-up reports submitted (if required)
   - ✅ Lessons learned documented and shared
   - ✅ Improvement actions initiated
   - ✅ All stakeholders notified of resolution
   - ✅ No outstanding actions or open issues

2. **Prepare Incident Closure Report**

   Complete Incident Closure Report (RPT-AI-INC-006):

   **Report Contents:**
   1. Incident Summary
   2. Investigation Summary
   3. Root Cause Summary
   4. Corrective Actions Summary
   5. Verification Results
   6. Residual Risk Assessment
   7. Lessons Learned Summary
   8. Regulatory Reporting Summary (if serious)
   9. Closure Recommendation
   10. Approval Signature

3. **Obtain Closure Approval**

   **Approval Authority:**

   | Incident Severity | Approver |
   |-------------------|----------|
   | Serious (Critical) | CRO + AI Governance Committee Chair |
   | High | AI Incident Manager + CRO |
   | Medium | AI Incident Manager |
   | Low | AI System Owner |

4. **Update Incident Register**

   Mark incident as "Closed" in incident register:
   - Closure date
   - Closure approver
   - Final status summary
   - Archive location

5. **Archive Incident Documentation**

   **Retention Requirements:** 10 years (per EU AI Act Article 18)

   **Documents to Archive:**
   - All incident reports
   - Investigation documentation
   - Root cause analysis
   - Corrective action plans and completion records
   - Authority submissions and correspondence
   - Lessons learned report
   - Closure report
   - All supporting evidence

   **Archive Storage:**
   - Secure, access-controlled location
   - Indexed for retrieval
   - Backed up regularly
   - Protected against tampering

6. **Notify Stakeholders of Closure**

   Send closure notification to:
   - Executive leadership
   - AI Governance Committee
   - Affected users/deployers (if appropriate)
   - Authority (if serious incident and requested)

7. **Conduct Post-Closure Review (for serious incidents)**

   **After 90 days:**
   - Review if corrective actions remain effective
   - Verify no recurrence
   - Check if improvement actions completed
   - Assess long-term impact

   **Document:** Post-Closure Review Record

**Evidence Required:**
- Incident Closure Report (RPT-AI-INC-006)
- Closure approval documentation
- Archive index
- Stakeholder notifications
- Post-closure review (after 90 days)

**Timing:** When all closure criteria met

---

## 5. CONTROL MECHANISMS

### 5.1 Incident Detection Controls

**Objective:** Detect incidents as early as possible to enable rapid response

| Control ID | Control Activity | Frequency | Owner |
|-----------|------------------|-----------|-------|
| **INC-CTL-001** | Automated monitoring system alerts for AI performance degradation | Continuous | ML Ops |
| **INC-CTL-002** | Fairness metric threshold monitoring and alerting | Continuous | ML Ops |
| **INC-CTL-003** | User feedback and complaint review | Daily | Support Team |
| **INC-CTL-004** | System error rate and anomaly detection | Continuous | ML Ops |
| **INC-CTL-005** | Security incident monitoring (adversarial attacks, breaches) | Continuous | Security Team |
| **INC-CTL-006** | Media and social media monitoring for AI-related issues | Daily | Communications |

### 5.2 Incident Classification Controls

**Objective:** Ensure accurate and timely classification of incident severity

| Control ID | Control Activity | Frequency | Owner |
|-----------|------------------|-----------|-------|
| **INC-CTL-007** | Classification criteria assessment per Article 3(49) | Per incident | Incident Manager |
| **INC-CTL-008** | Subject matter expert consultation for serious incident determination | Per potential serious incident | Incident Manager |
| **INC-CTL-009** | Legal review of fundamental rights breach determination | Per potential rights breach | Legal Counsel |
| **INC-CTL-010** | Classification approval per defined authority matrix | Per incident | Per matrix |
| **INC-CTL-011** | Precautionary principle application (classify as serious if uncertain) | Per ambiguous incident | Incident Manager |

### 5.3 Incident Response Controls

**Objective:** Respond rapidly and effectively to minimize harm

| Control ID | Control Activity | Frequency | Owner |
|-----------|------------------|-----------|-------|
| **INC-CTL-012** | Immediate containment action within 1 hour (serious incidents) | Per serious incident | AI System Owner |
| **INC-CTL-013** | Incident response team assembly per defined roles | Per serious incident | Incident Manager |
| **INC-CTL-014** | Evidence preservation and chain of custody | Per incident | Investigation Team |
| **INC-CTL-015** | Stakeholder notification per defined timelines | Per incident | Incident Manager |
| **INC-CTL-016** | System disable/rollback approval process | As needed | CRO |

### 5.4 Investigation Controls

**Objective:** Determine root cause and prevent recurrence

| Control ID | Control Activity | Frequency | Owner |
|-----------|------------------|-----------|-------|
| **INC-CTL-017** | Root cause analysis using 5 Whys and Fishbone methods | Per serious/high incident | Investigation Team |
| **INC-CTL-018** | Technical analysis and reproduction of incident | Per incident | Data Scientists |
| **INC-CTL-019** | Evidence review and validation | Per investigation | Incident Manager |
| **INC-CTL-020** | Investigation report review and approval | Per investigation | CRO |

### 5.5 Regulatory Reporting Controls

**Objective:** Ensure timely and complete reporting to competent authorities

| Control ID | Control Activity | Frequency | Owner |
|-----------|------------------|-----------|-------|
| **INC-CTL-021** | 15-day reporting deadline tracking and monitoring | Per serious incident | Compliance Officer |
| **INC-CTL-022** | Serious incident report completeness review (Article 73 requirements) | Per report | Compliance Officer |
| **INC-CTL-023** | Legal review of serious incident reports before submission | Per report | Legal Counsel |
| **INC-CTL-024** | Authority submission confirmation verification | Per submission | Compliance Officer |
| **INC-CTL-025** | Follow-up reporting requirement tracking | Per authority request | Compliance Officer |

### 5.6 Corrective Action Controls

**Objective:** Ensure corrective actions address root causes and prevent recurrence

| Control ID | Control Activity | Frequency | Owner |
|-----------|------------------|-----------|-------|
| **INC-CTL-026** | Corrective action plan approval per incident severity | Per incident | Per approval matrix |
| **INC-CTL-027** | Corrective action progress tracking and status reporting | Weekly | Incident Manager |
| **INC-CTL-028** | Corrective action effectiveness verification | Per action completion | Action Owner |
| **INC-CTL-029** | Risk register update after corrective actions | Per incident | Risk Manager |
| **INC-CTL-030** | Lessons learned workshop and documentation | Per serious/high incident | Incident Manager |

---

## 6. KEY PERFORMANCE INDICATORS (KPIs)

### 6.1 Incident Management Performance KPIs

| KPI ID | KPI Name | Definition | Target | Measurement Frequency |
|--------|----------|------------|--------|----------------------|
| **KPI-INC-001** | Mean Time to Detect (MTTD) | Average time from incident occurrence to detection | < 1 hour (serious)<br>< 4 hours (high) | Monthly |
| **KPI-INC-002** | Mean Time to Classify (MTTC) | Average time from detection to severity classification | < 1 hour (serious)<br>< 4 hours (high) | Monthly |
| **KPI-INC-003** | Mean Time to Respond (MTTR) | Average time from classification to containment action | < 1 hour (serious)<br>< 4 hours (high) | Monthly |
| **KPI-INC-004** | Mean Time to Investigate (MTTI) | Average time to complete investigation and determine root cause | < 10 days (serious)<br>< 15 days (high) | Quarterly |
| **KPI-INC-005** | Regulatory Reporting On-Time % | % of serious incident reports submitted within 15-day deadline | 100% | Quarterly |
| **KPI-INC-006** | Corrective Action Completion Rate | % of corrective actions completed within target timeline | > 90% | Monthly |
| **KPI-INC-007** | Incident Recurrence Rate | % of incidents that recur after corrective actions implemented | < 5% | Quarterly |
| **KPI-INC-008** | Classification Accuracy | % of incident classifications that remain unchanged after review/investigation | > 95% | Quarterly |

### 6.2 Incident Trend KPIs

| KPI ID | KPI Name | Definition | Target | Measurement Frequency |
|--------|----------|------------|--------|----------------------|
| **KPI-INC-009** | Total Incident Count | Total number of AI-related incidents per period | Downward trend | Monthly |
| **KPI-INC-010** | Serious Incident Rate | Number of serious incidents per 1000 AI system deployments | < 1 per 1000 | Quarterly |
| **KPI-INC-011** | High Incident Rate | Number of high severity incidents per 100 AI systems | < 5 per 100 | Quarterly |
| **KPI-INC-012** | Incident by Category | Distribution of incidents by type (technical, safety, rights, etc.) | Monitor trends | Quarterly |
| **KPI-INC-013** | Repeat Incident Rate | Number of incidents affecting same AI system multiple times | < 10% | Quarterly |

### 6.3 Incident Management Quality KPIs

| KPI ID | KPI Name | Definition | Target | Measurement Frequency |
|--------|----------|------------|--------|----------------------|
| **KPI-INC-014** | Root Cause Identified % | % of investigations that successfully identify root cause | > 90% | Quarterly |
| **KPI-INC-015** | Lessons Learned Completion % | % of serious/high incidents with completed lessons learned | 100% | Quarterly |
| **KPI-INC-016** | Evidence Preservation Quality | % of investigations with complete and admissible evidence | > 95% | Semi-annually |
| **KPI-INC-017** | Stakeholder Notification Timeliness | % of required notifications sent within defined timelines | > 95% | Quarterly |
| **KPI-INC-018** | Authority Follow-Up Response Time | Average time to respond to authority information requests | < 5 business days | Quarterly |

---

## 7. DOCUMENTATION REQUIREMENTS

### 7.1 Mandatory Incident Documentation

All incidents must have the following documentation:

| Document | Required For | Retention Period |
|----------|-------------|------------------|
| **Initial Incident Record** (FORM-AI-INC-001) | All incidents | 10 years |
| **Incident Detection Record** (REC-AI-INC-001) | All incidents | 10 years |
| **Incident Classification Record** (REC-AI-INC-002) | All incidents | 10 years |
| **Incident Response Meeting Minutes** (REC-AI-INC-003) | Serious/High incidents | 10 years |
| **Immediate Response Actions Log** (REC-AI-INC-004) | Serious/High incidents | 10 years |
| **Stakeholder Notification Log** (REC-AI-INC-005) | All incidents | 10 years |
| **Evidence Collection Log** (REC-AI-INC-006) | Serious/High incidents | 10 years |
| **Incident Investigation Report** (RPT-AI-INC-001) | Serious/High incidents | 10 years |
| **Root Cause Analysis Report** (RPT-AI-INC-002) | Serious/High incidents | 10 years |
| **Serious Incident Report** (RPT-AI-INC-003) | Serious incidents (for authority) | 10 years |
| **Follow-Up Reports** (RPT-AI-INC-004) | As required | 10 years |
| **Authority Submission Record** (REC-AI-INC-007) | Serious incidents | 10 years |
| **Corrective Action Plan** (PLAN-AI-INC-001) | Serious/High incidents | 10 years |
| **Corrective Action Completion Records** (REC-AI-INC-008) | Per corrective action | 10 years |
| **Lessons Learned Report** (RPT-AI-INC-005) | Serious/High incidents | 10 years |
| **Incident Closure Report** (RPT-AI-INC-006) | All incidents | 10 years |

### 7.2 Incident Register

Maintain comprehensive incident register (REGISTER-AI-INC-001) with all incidents:

**Mandatory Fields:**
- Incident ID
- AI System ID
- Incident Date/Time
- Detection Date/Time
- Detection Source
- Incident Description
- Severity Level (Critical/High/Medium/Low)
- Serious Incident (Yes/No)
- Classification Date
- Root Cause
- Corrective Actions
- Authority Reported (Yes/No/N/A)
- Status (Open/In Progress/Closed)
- Closure Date
- Incident Manager
- Links to Documentation

**Update Frequency:** Real-time (as incidents occur and progress)

**Review Frequency:** Monthly (by AI Incident Manager), Quarterly (by AI Governance Committee)

### 7.3 Documentation Storage and Access

**Storage Requirements:**
- Secure, access-controlled repository
- Version control for all documents
- Tamper-evident logging
- Regular backups
- Disaster recovery plan

**Access Controls:**
- Role-based access (need-to-know basis)
- Audit trail of all access
- Encryption at rest and in transit
- Authority access channel (Article 53)

**Retrieval Requirements:**
- Indexed for search and retrieval
- < 24 hours to retrieve any document
- Ability to provide to authorities within 5 business days

---

## 8. REVIEW AND AUDIT

### 8.1 Procedure Review

**Annual Procedure Review:**
- Owner: AI Incident Manager
- Frequency: Annually (minimum)
- Participants: Incident response team, Compliance, Legal
- Scope: Effectiveness, efficiency, regulatory alignment
- Output: Updated procedure (if changes needed)

**Trigger-Based Review:**
Review procedure immediately if:
- EU AI Act guidance or requirements change
- Serious incident reveals procedure gaps
- Authority feedback indicates deficiencies
- Multiple incidents indicate systemic issues

### 8.2 Incident Management Audit

**Internal Audit:**
- Frequency: Annually
- Scope: Sample of incidents from previous year
- Focus: Compliance with procedure, timely reporting, effectiveness

**External Audit:**
- Frequency: As required by regulation or external auditors
- Scope: Serious incidents, authority reporting
- Cooperation: Full access to incident documentation

**Audit Verification Points:**

1. **Incident Detection:**
   - ✅ Detection mechanisms operational
   - ✅ Detection timely and accurate
   - ✅ Evidence preserved

2. **Classification:**
   - ✅ Classification criteria applied correctly
   - ✅ Serious incidents identified accurately
   - ✅ Appropriate approvals obtained

3. **Response:**
   - ✅ Containment actions timely
   - ✅ Stakeholders notified per requirements
   - ✅ Evidence preserved

4. **Investigation:**
   - ✅ Root cause identified
   - ✅ Investigation thorough and documented
   - ✅ Completed within timeline

5. **Regulatory Reporting:**
   - ✅ Serious incidents reported within 15 days
   - ✅ Reports complete per Article 73
   - ✅ Submission confirmed

6. **Corrective Actions:**
   - ✅ Actions address root causes
   - ✅ Actions completed and verified
   - ✅ Lessons learned captured

7. **Documentation:**
   - ✅ All required documents present
   - ✅ Documentation complete and accurate
   - ✅ Retained per requirements

---

## 9. NON-COMPLIANCE HANDLING

### 9.1 Internal Non-Compliance

**Types of Non-Compliance:**

| Non-Compliance | Example | Corrective Action |
|----------------|---------|-------------------|
| **Missed Detection** | Incident not detected for >24 hours | Review and enhance detection mechanisms |
| **Misclassification** | Serious incident classified as low | Retrain classifiers; improve criteria |
| **Late Reporting** | Authority report submitted after 15 days | Root cause analysis; process improvement |
| **Incomplete Investigation** | Root cause not identified | Re-investigation; expert consultation |
| **Ineffective Corrective Action** | Incident recurrence after corrective action | Review and redesign corrective actions |

**Escalation:**
- All non-compliance reported to AI Incident Manager
- Serious non-compliance (late reporting, misclassification of serious incident) reported to CRO and AI Governance Committee
- Non-compliance pattern triggers procedure review

### 9.2 Regulatory Non-Compliance

If organization fails to comply with Article 73 reporting requirements:

**Immediate Actions:**
1. Assess extent of non-compliance
2. Determine if curable (can still submit late report)
3. Engage legal counsel immediately
4. Notify executive leadership and Board

**Remediation:**
1. Submit overdue report immediately (with explanation of delay)
2. Proactively contact authority to explain
3. Implement corrective actions to prevent recurrence
4. Document lessons learned

**Consequences:**
- Potential fines (per Article 99: up to €15M or 3% of global turnover)
- Reputational damage
- Increased regulatory scrutiny
- Potential suspension of AI system

---

## 10. RELATED DOCUMENTS

### 10.1 EU AI Act References

- **Article 3(49):** Definition of "serious incident"
- **Article 73(1):** Provider obligation to report serious incidents
- **Article 73(2):** Deployer obligation to inform providers and report serious incidents
- **Article 73(3):** Coordination with other EU legislation reporting (MDR, IVDR)
- **Article 73(4):** Information to be provided in serious incident reports
- **Article 73(5):** Format and detailed arrangements for reporting
- **Article 99:** Administrative fines for non-compliance

### 10.2 Related Procedures

- **PROC-AI-CLS-001:** AI Classification Procedure
- **PROC-AI-RM-001:** AI Risk Management Procedure
- **PROC-AI-DATA-001:** Data Governance Procedure
- **PROC-AI-DOC-001:** Technical Documentation Procedure
- **PROC-AI-PMM-001:** Post-Market Monitoring Procedure
- **PROC-AI-VENDOR-001:** Vendor Management Procedure

### 10.3 Related Standards

- **STD-AI-001:** AI Classification Standard
- **STD-AI-002:** AI Risk Management Standard
- **STD-AI-013:** Incident Management Standard

### 10.4 Supporting Templates and Forms

- **FORM-AI-INC-001:** Initial Incident Record
- **TMPL-AI-INC-001:** User Notification Template
- **TMPL-AI-INC-002:** Fishbone Diagram Template
- **TMPL-AI-INC-003:** Serious Incident Report Template
- **TMPL-AI-INC-004:** Follow-Up Report Template

---

## 11. REVISION HISTORY

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | [Date] | [Name] | Initial procedure development |
|  |  |  |  |

---

## 12. APPROVAL AND AUTHORIZATION

| Role | Name | Title | Signature | Date |
|------|------|-------|-----------|------|
| **Prepared By** | [Name] | AI Incident Manager | __________ | ________ |
| **Reviewed By** | [Name] | Chief Risk Officer | __________ | ________ |
| **Reviewed By** | [Name] | Compliance Officer | __________ | ________ |
| **Reviewed By** | [Name] | Legal Counsel | __________ | ________ |
| **Approved By** | [Name] | AI Governance Committee Chair | __________ | ________ |

---

## 13. DOCUMENT CONTROL

**Document Status:** [Draft/Approved]
**Classification:** [Internal/Confidential]
**Distribution:** AI Incident Manager, AI System Owners, AI Governance Committee, Compliance, Legal, Internal Audit
**Retention:** 10 years (per EU AI Act)
**Review Frequency:** Annually or upon regulatory change
**Next Review Date:** [Date]

---

## APPENDIX A: INCIDENT REPORT TEMPLATE

### Template: Initial Incident Record (FORM-AI-INC-001)

```
INITIAL INCIDENT RECORD
Per PROC-AI-INC-001

INCIDENT IDENTIFICATION
Incident ID: INC-AI-YYYY-____
Date/Time Detected: ________________  [YYYY-MM-DD HH:MM]
Date/Time Occurred (if known): ________________  [YYYY-MM-DD HH:MM]

DETECTION INFORMATION
Detection Source:  [ ] Automated Monitoring  [ ] User Report  [ ] Internal Observation  [ ] Other: _______
Reporter Name: ________________
Reporter Contact: ________________

AI SYSTEM IDENTIFICATION
AI System ID: ________________
AI System Name: ________________
Version/Release: ________________
Classification: [ ] Prohibited  [ ] High-Risk  [ ] Limited-Risk  [ ] Minimal-Risk

INCIDENT DESCRIPTION
Brief Description (2-3 sentences):
_________________________________________________________________________________
_________________________________________________________________________________
_________________________________________________________________________________

INITIAL SEVERITY ESTIMATE
[ ] Critical (Potential Serious Incident - death, injury, rights breach, critical infrastructure)
[ ] High (Significant harm but not serious per Article 3(49))
[ ] Medium (Limited harm, recoverable)
[ ] Low (Minimal/no harm)

IMMEDIATE ACTIONS TAKEN
_________________________________________________________________________________
_________________________________________________________________________________

EVIDENCE PRESERVED
[ ] System logs  [ ] Screenshots  [ ] Data snapshots  [ ] Witness statements  [ ] Other: _______

NOTIFICATIONS
Incident Manager Notified:  [ ] Yes  [ ] No    Date/Time: ________________
CRO Notified (if potential serious):  [ ] Yes  [ ] No  [ ] N/A    Date/Time: ________________

REPORTER SIGNATURE
Signature: ____________________    Date: ________________
```

---

## APPENDIX B: INCIDENT CLASSIFICATION MATRIX

### Serious Incident Classification Decision Matrix

Use this matrix to systematically assess if an incident meets Article 3(49) "serious incident" criteria.

#### CRITERION A: DEATH OR SERIOUS HARM TO HEALTH

| Assessment Question | Evidence to Consider | Serious if YES |
|---------------------|----------------------|----------------|
| Did the incident cause death? | Death certificate, medical records, coroner report | ✅ SERIOUS |
| Did the incident cause serious injury requiring hospitalization? | Hospital admission records, medical treatment documentation | ✅ SERIOUS |
| Did the incident cause permanent disability or impairment? | Medical assessment, long-term prognosis | ✅ SERIOUS |
| Did the incident cause serious psychological harm? | Psychiatric evaluation, diagnosis of condition | ✅ SERIOUS |
| Did the incident create imminent risk of death/serious injury? | Near-miss analysis, safety assessment | ✅ SERIOUS |

**Examples:**
- ✅ SERIOUS: Autonomous vehicle causes fatal crash
- ✅ SERIOUS: Medical AI misdiagnosis leads to delayed cancer treatment, serious harm
- ✅ SERIOUS: Industrial robot controlled by AI injures worker, hospitalization required
- ❌ NOT SERIOUS: Minor injury requiring first aid only
- ❌ NOT SERIOUS: Temporary discomfort with full recovery expected

---

#### CRITERION B: SERIOUS AND IRREVERSIBLE CRITICAL INFRASTRUCTURE DISRUPTION

**NOTE:** BOTH "serious" AND "irreversible" required

| Infrastructure Sector | Serious Disruption Examples | Irreversible Examples |
|-----------------------|-----------------------------|-----------------------|
| **Energy** | Multi-day power outage affecting thousands | Permanent damage to grid infrastructure |
| **Transportation** | Citywide traffic system failure, major delays | Infrastructure damage requiring rebuild |
| **Water/Sanitation** | Contamination of water supply | Permanent environmental damage |
| **Healthcare** | Hospital system failure affecting patient care | Loss of critical medical data |
| **Financial** | Banking system disruption, payment failures | Permanent financial record corruption |
| **Telecommunications** | Network outage affecting emergency services | Permanent data loss |

**Assessment Questions:**
- Was critical infrastructure affected (per EU Critical Infrastructure Directive)?
- Was disruption serious (significant impact on operations, safety, or economy)?
- Was disruption irreversible (cannot be easily restored to normal operation)?

**Examples:**
- ✅ SERIOUS: AI controlling power grid causes cascading failure, multi-day blackout with permanent grid damage
- ✅ SERIOUS: Air traffic control AI failure causes airport closure, flight cancellations, safety incidents
- ❌ NOT SERIOUS: Temporary service degradation with quick recovery (reversible)
- ❌ NOT SERIOUS: Minor delays or inconveniences

---

#### CRITERION C: INFRINGEMENT OF FUNDAMENTAL RIGHTS OBLIGATIONS

**EU Charter of Fundamental Rights - Common AI-Related Rights:**

| Right | Article | AI Infringement Examples | Serious if: |
|-------|---------|--------------------------|-------------|
| **Non-discrimination** | Art. 21 | Hiring AI systematically discriminates by gender/race | Systematic, affects protected characteristics |
| **Privacy and data protection** | Art. 8 | Unauthorized profiling, mass surveillance | Systematic, invasive, or sensitive data |
| **Human dignity** | Art. 1 | Social scoring, manipulative AI | Dehumanizing, exploitative |
| **Freedom of expression** | Art. 11 | Content moderation AI censors legitimate speech | Systematic suppression |
| **Right to effective remedy** | Art. 47 | No ability to challenge AI decisions | Denial of due process |
| **Child rights** | Art. 24 | AI harms children, age verification failures | Affects vulnerable populations |

**Assessment Questions:**
- Does incident violate EU Charter of Fundamental Rights?
- Is violation of "obligations under Union law" (not just internal policy)?
- Is infringement serious (not minor/technical violation)?
- Does it affect protected characteristics (race, gender, age, disability, etc.)?

**Systematic vs. Isolated:**
- Systematic bias affecting many people = SERIOUS
- One-off incorrect decision = NOT SERIOUS (unless severe individual harm)

**Examples:**
- ✅ SERIOUS: Credit scoring AI systematically denies credit to ethnic minorities (discrimination)
- ✅ SERIOUS: Facial recognition AI used for mass surveillance without consent (privacy)
- ✅ SERIOUS: Judicial AI produces biased risk assessments affecting bail decisions (fair trial)
- ❌ NOT SERIOUS: Single incorrect decision that is corrected
- ❌ NOT SERIOUS: Minor data processing irregularity with no rights impact

---

#### CRITERION D: SERIOUS HARM TO PROPERTY OR ENVIRONMENT

| Harm Type | Serious Threshold | Examples |
|-----------|------------------|----------|
| **Property Damage** | > €1M in value OR destruction of critical/irreplaceable property | Factory explosion, building collapse, major equipment damage |
| **Environmental Harm** | Contamination, ecosystem damage, long-term environmental impact | Chemical spill, habitat destruction, pollution |

**Assessment Questions:**
- Is financial value of property damage > €1M?
- Was critical or irreplaceable property destroyed?
- Was environment contaminated or damaged?
- Is environmental impact long-term or irreversible?

**Examples:**
- ✅ SERIOUS: Industrial AI causes factory explosion, €5M damage
- ✅ SERIOUS: Agricultural AI causes pesticide over-application, environmental contamination
- ✅ SERIOUS: Construction AI error causes building collapse
- ❌ NOT SERIOUS: Minor property damage < €100K, easily repairable

---

### CLASSIFICATION DECISION FLOWCHART

```
┌─────────────────────────────────────────────────────────────────┐
│ START: Incident Detected and Documented                         │
└────────────────────────┬────────────────────────────────────────┘
                         │
                         ▼
        ┌────────────────────────────────────┐
        │ Did incident cause DEATH?          │
        └────────┬──────────────────┬────────┘
                 │ YES              │ NO
                 ▼                  ▼
        ┌────────────────┐    Continue Assessment
        │ SERIOUS        │
        │ Report: 72 hrs │
        └────────────────┘
                         │
                         ▼
        ┌────────────────────────────────────┐
        │ Did incident cause SERIOUS INJURY  │
        │ requiring hospitalization?         │
        └────────┬──────────────────┬────────┘
                 │ YES              │ NO
                 ▼                  ▼
        ┌────────────────┐    Continue Assessment
        │ SERIOUS        │
        │ Report: 72 hrs │
        └────────────────┘
                         │
                         ▼
        ┌────────────────────────────────────┐
        │ Did incident SERIOUSLY AND         │
        │ IRREVERSIBLY disrupt critical      │
        │ infrastructure?                    │
        └────────┬──────────────────┬────────┘
                 │ YES              │ NO
                 ▼                  ▼
        ┌────────────────┐    Continue Assessment
        │ SERIOUS        │
        │ Report: 15 days│
        └────────────────┘
                         │
                         ▼
        ┌────────────────────────────────────┐
        │ Did incident INFRINGE              │
        │ FUNDAMENTAL RIGHTS?                │
        │ (systematic discrimination, etc.)  │
        └────────┬──────────────────┬────────┘
                 │ YES              │ NO
                 ▼                  ▼
        ┌────────────────┐    Continue Assessment
        │ SERIOUS        │
        │ Report: 15 days│
        └────────────────┘
                         │
                         ▼
        ┌────────────────────────────────────┐
        │ Did incident cause SERIOUS HARM    │
        │ to property (>€1M) or environment? │
        └────────┬──────────────────┬────────┘
                 │ YES              │ NO
                 ▼                  ▼
        ┌────────────────┐    ┌────────────────┐
        │ SERIOUS        │    │ NOT SERIOUS    │
        │ Report: 15 days│    │ (High/Med/Low) │
        └────────────────┘    └────────────────┘
                         │
                         ▼
        ┌────────────────────────────────────┐
        │ Is this WIDESPREAD MALFUNCTIONING? │
        │ (multiple systems/users affected)  │
        └────────┬──────────────────┬────────┘
                 │ YES              │ NO
                 ▼                  ▼
        ┌────────────────┐    Classification Complete
        │ SERIOUS        │    Proceed to Response
        │ Report: 15 days│
        └────────────────┘
```

---

## APPENDIX C: AUTHORITY CONTACT LIST TEMPLATE

### Template: Market Surveillance Authority Contacts

**IMPORTANT:** Maintain up-to-date contact information for all relevant authorities. Update quarterly or when authorities publish new contact information.

```
MARKET SURVEILLANCE AUTHORITY CONTACT LIST
Last Updated: [Date]

MEMBER STATE: [Country]

AUTHORITY INFORMATION
Authority Name: ____________________________________________________
Department/Division: _______________________________________________
Street Address: ____________________________________________________
Postal Code/City: __________________________________________________
Country: ___________________________________________________________

SERIOUS INCIDENT REPORTING CONTACTS
Primary Contact:
  Name: ____________________________________________________________
  Title: ___________________________________________________________
  Phone: ___________________________________________________________
  Email: ___________________________________________________________

Incident Reporting Portal:
  URL: _____________________________________________________________
  Login Required: [ ] Yes  [ ] No
  Credentials Location: ___________________________________________

Incident Reporting Email:
  Email: ___________________________________________________________
  Subject Line Format: ___________________________________________

Emergency Contact (24/7):
  Phone: ___________________________________________________________
  Email: ___________________________________________________________

REPORTING REQUIREMENTS
Preferred Submission Method: [ ] Portal  [ ] Email  [ ] Postal Mail  [ ] Other: _______
Required Language: _________________________________________________
Report Format: [ ] Template Provided  [ ] Free Format  [ ] Other: ______________
Digital Signature Required: [ ] Yes  [ ] No
Acknowledgment Expected: [ ] Automatic  [ ] Manual  [ ] Timeframe: ___________

REPORTING TIMELINES (per jurisdiction-specific requirements)
Death/Serious Injury Initial Notification: ________ hours
Full Serious Incident Report: ________ days
Follow-Up Reports: As requested / ________ days

COORDINATION CONTACTS
AI Office Coordination:
  Required: [ ] Yes  [ ] No
  Email: ___________________________________________________________

Data Protection Authority (if GDPR breach):
  Name: ____________________________________________________________
  Email: ___________________________________________________________

Sector-Specific Regulator (if applicable):
  Name: ____________________________________________________________
  Email: ___________________________________________________________

NOTES / SPECIAL INSTRUCTIONS
_____________________________________________________________________
_____________________________________________________________________

LAST CONTACT / RELATIONSHIP NOTES
Last Report Submitted: _____________________________________________
Authority Response Time: ___________________________________________
Feedback Received: _________________________________________________
```

**MAINTAIN CONTACTS FOR:**
- All EU Member States where AI systems are deployed
- All Member States where incidents could occur
- AI Office (Article 77 coordination)
- Relevant sector regulators (medical devices, automotive, financial services, etc.)

---

## APPENDIX D: ROOT CAUSE ANALYSIS METHODS

### Method 1: 5 Whys Analysis

**Purpose:** Drill down from symptom to root cause by asking "Why?" five times

**When to Use:**
- Simple to moderate incidents
- Linear causation (one primary cause)
- Quick analysis needed

**How to Conduct:**

1. **Start with the Problem Statement**
   - Clear, factual description of what happened
   - Example: "AI hiring system recommended rejection of qualified female candidate"

2. **Ask Why #1: Why did this problem occur?**
   - Answer with immediate cause
   - Example: "Model predicted lower scores for female candidates"

3. **Ask Why #2: Why did that happen?**
   - Drill one level deeper
   - Example: "Training data contained historical hiring bias toward male candidates"

4. **Ask Why #3: Why did that happen?**
   - Continue drilling down
   - Example: "Historical hiring decisions over-represented men in senior roles"

5. **Ask Why #4: Why did that happen?**
   - Getting closer to root cause
   - Example: "Bias assessment was not performed on training data before model training"

6. **Ask Why #5: Why did that happen?**
   - ROOT CAUSE (typically process/control gap)
   - Example: "Data governance procedure does not require bias assessment for AI training data"

**Documentation Template:**

| Level | Question | Answer | Evidence |
|-------|----------|--------|----------|
| **Problem** | What happened? | [Description] | [Evidence] |
| **Why 1** | Why did this happen? | [Immediate cause] | [Evidence] |
| **Why 2** | Why did that happen? | [Underlying cause] | [Evidence] |
| **Why 3** | Why did that happen? | [Deeper cause] | [Evidence] |
| **Why 4** | Why did that happen? | [Systemic cause] | [Evidence] |
| **Why 5** | Why did that happen? | **ROOT CAUSE** | [Evidence] |

**Multiple Paths:**
If multiple causes contribute, perform 5 Whys for each causal path.

**Validation:**
- If we eliminate the root cause, will the problem not recur?
- Is this truly a root cause, or just another symptom?

---

### Method 2: Fishbone (Ishikawa) Diagram

**Purpose:** Categorize all contributing factors to identify root causes systematically

**When to Use:**
- Complex incidents with multiple contributing factors
- Need comprehensive analysis of all factors
- Team brainstorming session

**Categories (6 Ms):**

1. **Machine** (AI model/system/technology)
2. **Method** (processes/procedures/workflows)
3. **Material** (data/inputs/resources)
4. **Measurement** (monitoring/testing/metrics)
5. **Manpower** (people/skills/training)
6. **Mother Nature** (environment/context/external factors)

**How to Construct:**

```
                            INCIDENT
                            (Problem)
                                 │
┌────────────────┐               │               ┌────────────────┐
│ MACHINE        │───────────────┼───────────────│ METHOD         │
│                │               │               │                │
│ Sub-cause 1    │               │               │ Sub-cause 1    │
│ Sub-cause 2    │               │               │ Sub-cause 2    │
└────────────────┘               │               └────────────────┘
┌────────────────┐               │               ┌────────────────┐
│ MATERIAL       │───────────────┼───────────────│ MEASUREMENT    │
│                │               │               │                │
│ Sub-cause 1    │               │               │ Sub-cause 1    │
│ Sub-cause 2    │               │               │ Sub-cause 2    │
└────────────────┘               │               └────────────────┘
┌────────────────┐               │               ┌────────────────┐
│ MANPOWER       │───────────────┼───────────────│ MOTHER NATURE  │
│                │               │               │                │
│ Sub-cause 1    │               │               │ Sub-cause 1    │
│ Sub-cause 2    │               │               │ Sub-cause 2    │
└────────────────┘               │               └────────────────┘
```

**Step-by-Step:**

1. **Write problem in center** (head of fish)
2. **Draw 6 main bones** (categories)
3. **Brainstorm sub-causes for each category**
4. **Ask "Why?" for each sub-cause** (drill deeper)
5. **Identify root causes** (fundamental causes that, if eliminated, prevent recurrence)

**Example: Discriminatory AI Decision**

**MACHINE:**
- Model not tested for fairness
- No fairness constraints in training
- Model architecture prone to bias
- No explainability features

**METHOD:**
- No bias assessment procedure
- Inadequate testing requirements
- No fairness validation gate
- Poor change management

**MATERIAL:**
- Training data historically biased
- Data not representative
- Insufficient diversity in data
- No data quality checks

**MEASUREMENT:**
- Fairness metrics not monitored
- No alerts for bias
- Inadequate testing
- No production monitoring

**MANPOWER:**
- Insufficient diversity expertise
- Lack of bias awareness training
- No dedicated fairness role
- Team composition not diverse

**MOTHER NATURE:**
- Pressure to deploy quickly
- Regulatory requirements unclear (at time)
- Industry best practices immature
- Cultural biases in society

**Identify Root Causes from Fishbone:**
- Primary: No bias assessment procedure (METHOD)
- Secondary: Training data bias (MATERIAL), No fairness monitoring (MEASUREMENT), Lack of expertise (MANPOWER)

---

### Method 3: Barrier Analysis

**Purpose:** Identify which barriers/controls failed to prevent the incident

**When to Use:**
- Safety-critical incidents
- Multiple control failures
- Need to understand defense-in-depth gaps

**How to Conduct:**

1. **Identify Intended Barriers**
   - What controls were supposed to prevent this incident?
   - Design barriers, procedural barriers, human barriers

2. **Assess Each Barrier**
   - Was barrier in place? (Yes/No)
   - Did barrier function as intended? (Yes/No/Partial)
   - Why did barrier fail?

3. **Example: Barrier Analysis for Discriminatory AI**

| Barrier | In Place? | Functioned? | Failure Reason |
|---------|-----------|-------------|----------------|
| **Design Barrier:** Fairness constraints in model | No | N/A | Not implemented in model architecture |
| **Procedural Barrier:** Bias assessment before training | No | N/A | Procedure did not require it |
| **Testing Barrier:** Fairness testing before deployment | Partial | No | Testing performed but did not detect bias |
| **Monitoring Barrier:** Production fairness monitoring | No | N/A | Monitoring system did not track fairness metrics |
| **Human Barrier:** Manual review of decisions | Yes | Partial | Review process did not catch all biased decisions |

4. **Identify Root Causes**
   - Which barrier failures were fundamental?
   - Which barriers, if functioning, would have prevented incident?

---

### Method 4: Fault Tree Analysis (FTA)

**Purpose:** Diagram logical relationships between contributing factors (technical incidents)

**When to Use:**
- Complex technical failures
- Multiple necessary AND sufficient conditions
- Need to model failure scenarios

**Symbols:**
- **Rectangle:** Event or fault
- **AND Gate:** All inputs required for output
- **OR Gate:** Any input sufficient for output

**Example Structure:**

```
                    [INCIDENT OCCURRED]
                           │
                      ┌────┴────┐
                      │   AND   │  (All conditions required)
                      └────┬────┘
                           │
              ┌────────────┼────────────┐
              │            │            │
         [Condition A] [Condition B] [Condition C]
              │
         ┌────┴────┐
         │   OR    │  (Any sufficient)
         └────┬────┘
              │
         ┌────┼────┐
         │         │
   [Sub-cause 1] [Sub-cause 2]
```

**Use for complex technical incidents requiring logical modeling of failure modes.**

---

### Root Cause Analysis Best Practices

**DO:**
- ✅ Use evidence to support each causal link
- ✅ Involve cross-functional team (diverse perspectives)
- ✅ Focus on systemic causes (processes, controls), not individuals
- ✅ Ask "Why?" until you reach a cause you can control/fix
- ✅ Validate root cause (if eliminated, incident won't recur)
- ✅ Document thoroughly with evidence

**DON'T:**
- ❌ Stop at symptoms (keep asking "Why?")
- ❌ Blame individuals (find systemic causes)
- ❌ Accept "human error" as root cause (why did error occur?)
- ❌ Rush to solutions before root cause identified
- ❌ Ignore organizational/cultural factors

**Root Cause Statement Format:**

> **Primary Root Cause:** [Fundamental systemic cause that, if eliminated, would prevent incident recurrence]
>
> **Evidence:** [Data, logs, analysis supporting this root cause]
>
> **Validation:** [Why we believe this is truly a root cause, not a symptom]

---

## APPENDIX E: CROSS-REFERENCES TO OTHER PROCEDURES

### Procedure Integration Map

This appendix shows how incident management integrates with other AI compliance procedures.

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
│ PROC-AI-CLS-001   │   │ PROC-AI-RM-001    │   │ PROC-AI-INC-001   │
│ Classification    │──▶│ Risk Management   │◀──│ Incident Mgmt     │
│                   │   │                   │   │ (THIS PROCEDURE)  │
└───────────────────┘   └─────────┬─────────┘   └─────────┬─────────┘
        │                         │                         │
        │                         │                         │
        │               ┌─────────▼─────────┐               │
        │               │ PROC-AI-PMM-001   │               │
        └──────────────▶│ Post-Market       │◀──────────────┘
                        │ Monitoring        │
                        └─────────┬─────────┘
                                  │
                                  ▼
                        ┌───────────────────┐
                        │ PROC-AI-DOC-001   │
                        │ Documentation     │
                        └───────────────────┘
```

### Procedure Interface Matrix

| From This Procedure | To Procedure | Interface | When |
|---------------------|--------------|-----------|------|
| Step 1.2 | PROC-AI-CLS-001 | AI system classification informs incident severity assessment | During incident classification |
| Step 3.1 | PROC-AI-RM-001 | Incident investigation updates risk register | After root cause identified |
| Step 5.2 | PROC-AI-RM-001 | Corrective actions update risk controls | After corrective actions implemented |
| Step 1.1 | PROC-AI-PMM-001 | Post-market monitoring detects incidents | Continuous (detection) |
| Step 4.2 | PROC-AI-PMM-001 | Incident reports feed PMM analysis | After authority reporting |
| Step 5.4 | PROC-AI-DOC-001 | Incident documentation updates technical documentation | At incident closure |

### Key Touchpoints

**From Classification (PROC-AI-CLS-001):**
- High-risk classification triggers stricter incident reporting requirements
- Prohibited practice detection is immediate critical incident
- Classification determines incident severity thresholds

**From Risk Management (PROC-AI-RM-001):**
- Risk register identifies known risks that may cause incidents
- Incident occurrence reassesses residual risk
- Corrective actions update risk treatments
- Root causes may reveal new risks

**To Risk Management (PROC-AI-RM-001):**
- Incidents validate (or invalidate) risk assessments
- Root causes inform risk identification
- Corrective actions become risk controls
- Incident trends inform risk appetite

**From/To Post-Market Monitoring (PROC-AI-PMM-001):**
- PMM detects performance degradation (potential incidents)
- Incidents trigger PMM deep-dive analysis
- Incident trends inform PMM focus areas
- Authority incident reports feed PMM reporting

**To Documentation (PROC-AI-DOC-001):**
- Serious incidents update technical documentation
- Corrective actions documented in system documentation
- Incident learnings inform instructions for use
- Authority reports archived with technical documentation

---

**END OF PROCEDURE PROC-AI-INC-001**
