# PROC-AI-CAPA-001: Corrective and Preventive Action Procedure

**Procedure ID:** PROC-AI-CAPA-001
**Procedure Name:** Corrective and Preventive Action (CAPA) Procedure
**Standard:** STD-AI-009: Quality Management Standard, STD-AI-013: Incident Management Standard
**Covers Controls:** QMS-006, QMS-007, QMS-008, INC-005, INC-006
**Effective Date:** [To be filled]
**Last Updated:** [To be filled]
**Next Review Date:** [To be filled]
**Approval Status:** [Draft/Approved]

---

## 1. PURPOSE AND SCOPE

### 1.1 Purpose

This procedure establishes the process for identifying, documenting, implementing, and verifying corrective and preventive actions (CAPA) for AI systems. It ensures that issues are systematically addressed at their root cause and that measures are implemented to prevent recurrence or occurrence of similar issues.

### 1.2 Scope

This procedure applies to:
- Non-conformities identified in AI systems
- Incidents and near-misses involving AI systems
- Audit findings related to AI compliance
- Customer complaints related to AI system performance
- Risk control failures
- Performance deviations
- Regulatory observations

### 1.3 Definitions

| Term | Definition |
|------|------------|
| **Corrective Action** | Action to eliminate the cause of a detected non-conformity or other undesirable situation to prevent recurrence |
| **Preventive Action** | Action to eliminate the cause of a potential non-conformity or other undesirable potential situation to prevent occurrence |
| **Non-Conformity** | Non-fulfillment of a requirement |
| **Root Cause** | The fundamental reason for the occurrence of a problem |
| **Effectiveness Verification** | Confirmation that the CAPA achieved the intended results |

### 1.4 Procedure Owner

| Role | Name | Title | Contact |
|------|------|-------|---------|
| **Procedure Owner** | [Name] | Quality Manager | [Email/Phone] |
| **Technical Authority** | [Name] | AI Development Lead | [Email/Phone] |
| **Compliance** | [Name] | AI Compliance Officer | [Email/Phone] |

---

## 2. ROLES AND RESPONSIBILITIES

### 2.1 Key Roles

| Role | Responsibility | Authority |
|------|----------------|-----------|
| **CAPA Initiator** | Identify and report issues; initiate CAPA | Submit CAPA requests |
| **CAPA Owner** | Own the CAPA; ensure completion | Assign resources; approve closure |
| **Quality Manager** | Oversee CAPA process; ensure effectiveness | Approve CAPAs; reject inadequate actions |
| **Root Cause Investigator** | Conduct root cause analysis | Determine root cause |
| **Action Implementer** | Implement corrective/preventive actions | Execute assigned actions |
| **Verification Officer** | Verify effectiveness of actions | Approve or require additional actions |
| **AI System Owner** | Approve CAPAs for their systems | Accept residual risk |

### 2.2 RACI Matrix

| Activity | Initiator | CAPA Owner | Quality Mgr | Investigator | Implementer | Verifier |
|----------|-----------|------------|-------------|--------------|-------------|----------|
| Identify issue | A | I | I | I | I | I |
| Initiate CAPA | R | A | C | I | I | I |
| Root cause analysis | C | A | C | R | I | I |
| Define actions | C | A | C | C | R | I |
| Approve CAPA plan | I | R | A | I | I | I |
| Implement actions | I | A | I | C | R | I |
| Verify effectiveness | I | C | C | I | I | A |
| Close CAPA | I | R | A | I | I | C |

**Legend:** A=Accountable, R=Responsible, C=Consulted, I=Informed

---

## 3. CAPA PROCESS OVERVIEW

### 3.1 Process Flow

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         CAPA PROCESS FLOW                                   │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   ┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐            │
│   │ IDENTIFY │───►│ INITIATE │───►│INVESTIGATE│───►│  PLAN    │            │
│   │  ISSUE   │    │   CAPA   │    │ROOT CAUSE │    │ ACTIONS  │            │
│   └──────────┘    └──────────┘    └──────────┘    └──────────┘            │
│                                                         │                   │
│                                                         ▼                   │
│   ┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐            │
│   │  CLOSE   │◄───│  VERIFY  │◄───│IMPLEMENT │◄───│ APPROVE  │            │
│   │   CAPA   │    │EFFECTIVE │    │ ACTIONS  │    │   PLAN   │            │
│   └──────────┘    └──────────┘    └──────────┘    └──────────┘            │
│        │                                                                    │
│        ▼                                                                    │
│   ┌─────────────────────────────────────────────────────────────────────┐  │
│   │                    LESSONS LEARNED & IMPROVEMENT                    │  │
│   └─────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 3.2 CAPA Categories

| Category | Description | Priority | Target Closure |
|----------|-------------|----------|----------------|
| **Critical** | Life/safety impact, major regulatory non-compliance, fundamental rights violation | Immediate | 30 days |
| **Major** | Significant compliance issue, major performance deviation, repeated issues | High | 60 days |
| **Minor** | Limited impact, isolated issue, documentation gap | Normal | 90 days |
| **Improvement** | Proactive improvement, optimization opportunity | Low | 120 days |

---

## 4. DETAILED CAPA PROCEDURES

### 4.1 Phase 1: Identification

#### 4.1.1 CAPA Sources

CAPAs may be initiated from:

| Source | Examples |
|--------|----------|
| **Incidents** | AI system malfunctions, errors, failures |
| **Audits** | Internal audits, external audits, regulatory inspections |
| **Risk Assessments** | Identified risks, control failures |
| **Complaints** | Customer complaints, user feedback |
| **Non-Conformities** | Deviation from requirements, specifications |
| **Post-Market Monitoring** | Performance trends, field issues |
| **Near-Misses** | Potential incidents that were avoided |
| **Management Review** | Identified improvement opportunities |

#### 4.1.2 Issue Documentation

For each identified issue, document:
1. Description of the issue
2. When and how it was discovered
3. Who reported it
4. Impact assessment (actual and potential)
5. Immediate containment actions taken
6. Evidence collected

### 4.2 Phase 2: Initiation

**Step 1: Create CAPA Record**
1. Complete CAPA Request Form (FORM-AI-CAPA-001)
2. Assign CAPA ID
3. Determine CAPA category (Critical/Major/Minor/Improvement)
4. Assign CAPA Owner
5. Set target completion date

**Step 2: Immediate Containment**
1. Assess need for immediate containment
2. Implement containment actions to limit impact
3. Document containment actions
4. Verify containment effectiveness
5. Communicate to affected stakeholders

**Step 3: Impact Assessment**
1. Assess impact on:
   - Health and safety
   - Fundamental rights
   - Compliance status
   - System performance
   - Other AI systems
2. Determine if regulatory notification required
3. Escalate if Critical or Major

### 4.3 Phase 3: Investigation

**Step 4: Root Cause Analysis**

Select appropriate analysis method based on complexity:

| Method | When to Use | Description |
|--------|-------------|-------------|
| **5 Whys** | Simple issues | Ask "why" repeatedly until root cause found |
| **Fishbone (Ishikawa)** | Multiple potential causes | Categorize causes (People, Process, Technology, Data, Environment) |
| **Fault Tree Analysis** | Complex, safety-critical | Systematic deductive analysis |
| **Failure Mode Analysis** | Technical failures | Analyze failure modes and effects |

**Root Cause Categories for AI Systems:**

| Category | Examples |
|----------|----------|
| **Data** | Data quality, data bias, data drift, labeling errors |
| **Model** | Model architecture, training, overfitting, underfitting |
| **Algorithm** | Logic errors, edge cases, optimization issues |
| **Process** | Inadequate procedures, process not followed |
| **People** | Training gaps, competency, human error |
| **Technology** | Infrastructure, integration, dependencies |
| **Environment** | Operating conditions, context changes |

**Step 5: Document Root Cause**
1. Document investigation methodology
2. Record evidence analyzed
3. State root cause(s) clearly
4. Distinguish root cause from contributing factors
5. Get agreement from stakeholders

### 4.4 Phase 4: Action Planning

**Step 6: Define Corrective Actions**
1. For each root cause, define action(s) to eliminate it
2. Ensure actions address root cause, not symptoms
3. Consider systemic implications
4. Assign action owner and due date
5. Define success criteria

**Step 7: Define Preventive Actions**
1. Identify potential recurrence scenarios
2. Identify similar systems/processes at risk
3. Define actions to prevent occurrence elsewhere
4. Extend actions horizontally where applicable

**Step 8: Risk-Benefit Analysis**
1. Assess risk reduction from proposed actions
2. Assess cost and effort required
3. Assess potential unintended consequences
4. Prioritize actions based on analysis

**Step 9: Create Action Plan**
Document for each action:
- Action description
- Action type (Corrective/Preventive)
- Owner
- Due date
- Resources required
- Success criteria
- Verification method

### 4.5 Phase 5: Approval

**Step 10: CAPA Plan Review**
1. Quality Manager reviews CAPA plan
2. Verify root cause is adequately addressed
3. Verify actions are appropriate and sufficient
4. Verify timelines are realistic
5. Approve or return for revision

**Step 11: Stakeholder Approval**
Based on CAPA category:

| Category | Approval Required |
|----------|-------------------|
| Critical | Quality Manager + AI System Owner + Compliance + AI Governance Committee |
| Major | Quality Manager + AI System Owner |
| Minor | Quality Manager |
| Improvement | CAPA Owner |

### 4.6 Phase 6: Implementation

**Step 12: Execute Actions**
1. Implement actions per approved plan
2. Document implementation activities
3. Track progress against milestones
4. Escalate delays or blockers
5. Collect evidence of implementation

**Step 13: Update Documentation**
1. Update procedures as required
2. Update technical documentation
3. Update training materials
4. Update risk assessments
5. Communicate changes to stakeholders

### 4.7 Phase 7: Verification

**Step 14: Verify Implementation**
1. Confirm all actions completed
2. Review implementation evidence
3. Verify documentation updated

**Step 15: Verify Effectiveness**
1. Define verification method:
   - Testing/validation
   - Audit
   - Monitoring data review
   - Process observation
2. Execute verification after appropriate period
3. Compare against success criteria
4. Document verification results

**Step 16: Effectiveness Determination**

| Result | Action |
|--------|--------|
| **Effective** | Proceed to closure |
| **Partially Effective** | Implement additional actions |
| **Not Effective** | Re-investigate; new CAPA may be required |

### 4.8 Phase 8: Closure

**Step 17: Close CAPA**
1. Compile all CAPA documentation
2. Obtain closure approvals
3. Document lessons learned
4. Close CAPA record
5. Archive documentation

**Step 18: Lessons Learned**
1. Document key learnings
2. Share with relevant teams
3. Update training if applicable
4. Consider process improvements
5. Input to management review

---

## 5. REGULATORY NOTIFICATION

### 5.1 Notification Triggers

Regulatory notification may be required if CAPA relates to:
- Serious incident per EU AI Act
- Compliance failure for high-risk AI
- Fundamental rights violation
- Safety issue

### 5.2 Notification Process

1. Assess notification requirement with Compliance Officer
2. Follow PROC-AI-INC-001 for serious incidents
3. Document notification and authority response
4. Include regulatory feedback in CAPA

---

## 6. MONITORING AND METRICS

### 6.1 CAPA Metrics

| Metric | Description | Target |
|--------|-------------|--------|
| CAPA Aging | CAPAs open beyond target date | <10% |
| CAPA Effectiveness | CAPAs verified as effective | >90% |
| CAPA Recurrence | Same issue recurs within 12 months | <5% |
| CAPA Cycle Time | Average days from initiation to closure | <60 days |
| Root Cause Quality | CAPAs addressing root cause vs. symptoms | >95% |

### 6.2 Reporting

| Report | Frequency | Audience |
|--------|-----------|----------|
| CAPA Status Report | Monthly | AI Governance Committee |
| CAPA Trends Analysis | Quarterly | Management Review |
| CAPA Effectiveness Summary | Annual | Executive Team |

---

## 7. RECORDS

### 7.1 Required Records

| Record ID | Record Name | Retention Period | Owner |
|-----------|-------------|------------------|-------|
| REC-AI-CAPA-001 | CAPA Records | 10 years | Quality Manager |
| REC-AI-CAPA-002 | Root Cause Analysis Records | 10 years | Quality Manager |
| REC-AI-CAPA-003 | Verification Records | 10 years | Quality Manager |
| REC-AI-CAPA-004 | Lessons Learned Records | 10 years | Quality Manager |

### 7.2 Required Forms

| Form ID | Form Name | Purpose |
|---------|-----------|---------|
| FORM-AI-CAPA-001 | CAPA Request Form | Initiate CAPA |
| FORM-AI-CAPA-002 | Root Cause Analysis Form | Document RCA |
| FORM-AI-CAPA-003 | Effectiveness Verification Form | Verify CAPA effectiveness |

---

## 8. RELATED DOCUMENTS

### 8.1 Standards
- STD-AI-009: Quality Management Standard
- STD-AI-013: Incident Management Standard

### 8.2 Procedures
- PROC-AI-INC-001: Incident Management Procedure
- PROC-AI-CHG-001: Change Management Procedure
- PROC-AI-QMS-001: Quality Management System Procedure
- PROC-AI-RM-001: Risk Management Procedure

---

## 9. REVISION HISTORY

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | [Date] | [Author] | Initial release |

---

## APPENDIX A: CAPA REQUEST FORM (FORM-AI-CAPA-001)

### Section 1: CAPA Identification

| Field | Entry |
|-------|-------|
| **CAPA ID** | CAPA-AI-[YYYY]-[####] |
| **Initiation Date** | |
| **Initiator Name** | |
| **CAPA Category** | [ ] Critical [ ] Major [ ] Minor [ ] Improvement |
| **Target Closure Date** | |

### Section 2: Issue Details

| Field | Entry |
|-------|-------|
| **AI System Name** | |
| **AI System ID** | |
| **Issue Source** | [ ] Incident [ ] Audit [ ] Complaint [ ] Risk [ ] PMM [ ] Other: |
| **Source Reference** | |
| **Issue Description** | |
| **Date Discovered** | |
| **Impact Assessment** | |

### Section 3: Containment Actions

| # | Containment Action | Owner | Date | Status |
|---|-------------------|-------|------|--------|
| 1 | | | | [ ] Complete [ ] In Progress |
| 2 | | | | [ ] Complete [ ] In Progress |

### Section 4: Root Cause Analysis

| Field | Entry |
|-------|-------|
| **Analysis Method** | [ ] 5 Whys [ ] Fishbone [ ] Fault Tree [ ] Other: |
| **Root Cause(s)** | |
| **Contributing Factors** | |
| **Evidence Reviewed** | |

### Section 5: Corrective Actions

| # | Action | Type | Owner | Due Date | Status |
|---|--------|------|-------|----------|--------|
| 1 | | [ ] C [ ] P | | | [ ] Open [ ] Complete |
| 2 | | [ ] C [ ] P | | | [ ] Open [ ] Complete |
| 3 | | [ ] C [ ] P | | | [ ] Open [ ] Complete |

(C=Corrective, P=Preventive)

### Section 6: Verification

| Field | Entry |
|-------|-------|
| **Verification Method** | |
| **Verification Date** | |
| **Verified By** | |
| **Effectiveness Result** | [ ] Effective [ ] Partially Effective [ ] Not Effective |
| **Verification Evidence** | |

### Section 7: Approvals

| Role | Name | Signature | Date |
|------|------|-----------|------|
| **CAPA Owner** | | | |
| **Quality Manager** | | | |
| **AI System Owner** (if required) | | | |

### Section 8: Closure

| Field | Entry |
|-------|-------|
| **Closure Date** | |
| **Closed By** | |
| **Lessons Learned** | |
