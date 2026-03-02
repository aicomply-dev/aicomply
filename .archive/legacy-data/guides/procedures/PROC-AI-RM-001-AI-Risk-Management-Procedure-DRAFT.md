# AI Risk Assessment Procedure

**Document Type:** Procedure (SOP)  
**Procedure ID / Number:** PROC-AI-RM-001  
**Procedure Title:** AI Risk Assessment Procedure  
**Version:** 1.0  
**Effective Date:** 2025-08-01  
**Next Review Date:** 2026-08-01  
**Review Frequency:** Annually or after tool change  
**Parent Standard:** STD-AI-002 - AI Risk Management Standard  
**Owner:** AI Risk Manager  
**Approved By:** AI Governance Committee Chair  
**Status:** Draft  

---

## DOCUMENT CONTROL

| Element | Details |
|---------|---------|
| **Procedure Title** | AI Risk Assessment Procedure |
| **Procedure ID / Number** | PROC-AI-RM-001 |
| **Version** | 1.0 |
| **Effective Date** | 2025-08-01 |
| **Next Review Date** | 2026-08-01 |
| **Review Frequency** | Annually or after tool change |
| **Parent Standard** | STD-AI-002 - AI Risk Management Standard |
| **Owner** | Michael Chen, AI Risk Manager |
| **Approved By** | Jane Doe, AI Governance Committee Chair |
| **Classification** | Internal Use Only |

---

## 1. PURPOSE

This procedure defines the step-by-step process for conducting AI risk assessments to identify, analyze, and evaluate risks associated with AI systems throughout their lifecycle in compliance with EU AI Act Article 9(2) and (3).

---

## 2. SCOPE

### 2.1 Applicability

This procedure applies to:
- **Mandatory:** All high-risk AI systems (EU AI Act Article 9)
- **Recommended:** All limited-risk and minimal-risk AI systems
- All phases of AI system lifecycle requiring risk assessment

### 2.2 When to Conduct Risk Assessment

| Trigger | Timing | Type |
|---------|--------|------|
| **New AI System** | Design phase | Initial risk assessment |
| **Substantial Modification** | Before deployment | Updated risk assessment |
| **Periodic Review** | Quarterly | Comprehensive review |
| **Incident Occurrence** | Within 48 hours | Incident-triggered assessment |
| **Regulatory Change** | Within 30 days | Compliance assessment |
| **New Risk Identified** | Immediately | Targeted assessment |

---

## 3. PRECONDITIONS / PREREQUISITES

Before conducting a risk assessment, ensure the following are in place:

- [ ] AI system is registered in AI System Inventory (AI-SYS-XXX)
- [ ] AI system role classification completed (Provider/Deployer)
- [ ] AI system risk classification completed (High-risk/Limited-risk/Minimal-risk)
- [ ] Technical documentation available (if applicable)
- [ ] Risk assessment team identified and available
- [ ] Risk register template prepared (TMPL-AI-RM-002)
- [ ] Risk assessment tools/software accessible

---

## 4. ROLES & RESPONSIBILITIES

| Role | Responsibility | RACI |
|------|---------------|------|
| **AI System Owner** | Initiates risk assessment; provides system information; approves risk assessment report | **A** (Accountable) |
| **AI Risk Manager** | Facilitates risk assessment workshop; documents risks; maintains risk register | **R** (Responsible) |
| **Data Scientist / AI Engineer** | Identifies technical risks; provides technical input; assesses bias risks | **C** (Consulted) |
| **Product Director** | Provides business context; reviews risk assessment; approves high risks | **C** (Consulted) |
| **Legal & Compliance** | Advises on compliance risks; reviews fundamental rights risks | **C** (Consulted) |
| **Security Team** | Identifies security and cybersecurity risks | **C** (Consulted) |
| **AI Governance Committee** | Reviews and approves high and critical risks | **I** (Informed) |

---

## 5. STEP-BY-STEP PROCESS

### **STEP 1: Initiate Risk Assessment**

**Objective:** Formally initiate the risk assessment process

**Actions:**
1.1. AI System Owner completes Risk Assessment Request Form (FORM-AI-RM-001)
1.2. AI Risk Manager reviews request for completeness
1.3. AI Risk Manager schedules risk assessment workshop (2-4 hours)
1.4. AI Risk Manager invites required participants (see Section 4)
1.5. AI Risk Manager prepares risk assessment materials:
     - Risk Assessment Template (TMPL-AI-RM-001)
     - Risk Identification Checklist (CHK-AI-RM-002)
     - AI system documentation
     - Historical risk data (if available)

**Duration:** 1-2 days

**Input Documents:**
- Risk Assessment Request Form (FORM-AI-RM-001)
- AI System Register entry
- Technical documentation (if available)

**Output Documents:**
- Risk Assessment Workshop Invitation
- Risk Assessment Materials Package

---

### **STEP 2: Conduct Risk Identification Workshop**

**Objective:** Identify all known and reasonably foreseeable risks

**Actions:**
2.1. **Workshop Opening (15 minutes)**
     - AI Risk Manager introduces workshop objectives
     - Review AI system description and intended purpose
     - Review scope and boundaries
     - Explain risk assessment methodology

2.2. **Risk Identification Session (60-90 minutes)**
     - Use Risk Identification Checklist (CHK-AI-RM-002)
     - Brainstorm risks in each category:
       - **Technical Risks:** Bias, inaccuracy, robustness, security
       - **Safety Risks:** Physical harm, property damage, environmental harm
       - **Fundamental Rights Risks:** Privacy, discrimination, due process
       - **Operational Risks:** System failures, integration issues
       - **Compliance Risks:** Regulatory violations
     - Document each identified risk in Risk Assessment Template
     - For each risk, capture:
       - Risk ID (auto-generated)
       - Risk description
       - Risk source/cause
       - Potential consequences
       - Affected stakeholders

2.3. **Bias Risk Deep Dive (30-45 minutes)**
     - Conduct specific bias risk assessment per STD-AI-002 CR 2.3
     - Analyze training data for bias
     - Review fairness metrics (if available)
     - Identify protected characteristics at risk
     - Document bias risks separately

2.4. **Workshop Closing (15 minutes)**
     - Review all identified risks
     - Confirm completeness
     - Schedule follow-up session for risk analysis

**Duration:** 2-3 hours

**Input Documents:**
- Risk Identification Checklist (CHK-AI-RM-002)
- AI system documentation
- Training data statistics
- Historical incident data

**Output Documents:**
- Risk Identification Workshop Minutes (REC-AI-RM-005)
- Draft list of identified risks

**Success Criteria:**
- Minimum 10 risks identified for high-risk AI systems
- All risk categories covered
- Bias risks specifically assessed
- All participants contributed

---

### **STEP 3: Analyze and Evaluate Risks**

**Objective:** Assess likelihood and impact for each identified risk

**Actions:**
3.1. **Likelihood Assessment**
     - For each identified risk, assess likelihood using 5-point scale:
       - 5 = Almost Certain (>90% probability or >1/year)
       - 4 = Likely (60-90% probability or 1/2 years)
       - 3 = Possible (30-60% probability or 1/5 years)
       - 2 = Unlikely (10-30% probability or 1/10 years)
       - 1 = Rare (<10% probability or <1/10 years)
     - Document rationale for likelihood score
     - Consider historical data, industry benchmarks, expert judgment

3.2. **Impact Assessment**
     - For each identified risk, assess impact using 5-point scale:
       - 5 = Catastrophic (death, widespread violations, >€10M loss)
       - 4 = Major (serious injury, significant violations, €1M-€10M loss)
       - 3 = Moderate (minor injury, moderate violations, €100K-€1M loss)
       - 2 = Minor (first aid, minor violations, €10K-€100K loss)
       - 1 = Negligible (no injury, no violations, <€10K loss)
     - Assess impact across multiple dimensions:
       - Health and safety
       - Fundamental rights
       - Financial
       - Reputational
     - Use highest impact score across dimensions
     - Document rationale for impact score

3.3. **Risk Score Calculation**
     - Calculate inherent risk score: **Likelihood × Impact**
     - Classify risk level:
       - 20-25 = Critical (Red)
       - 15-19 = High (Orange)
       - 10-14 = Medium (Yellow)
       - 5-9 = Low (Green)
       - 1-4 = Very Low (White)

3.4. **Risk Prioritization**
     - Sort risks by risk score (highest to lowest)
     - Identify critical and high risks for immediate attention
     - Group similar risks for treatment planning

**Duration:** 2-3 days (can be done offline)

**Input Documents:**
- Draft list of identified risks
- Historical incident data
- Industry benchmarks
- Subject matter expert input

**Output Documents:**
- Risk Assessment Worksheets (REC-AI-RM-007) - one per risk
- Risk Prioritization Matrix (REC-AI-RM-008)

**Success Criteria:**
- All identified risks assessed for likelihood and impact
- Risk scores calculated using standard methodology
- Rationale documented for each score
- Risks prioritized by score

---

### **STEP 4: Document Risks in Risk Register**

**Objective:** Record all assessed risks in the AI Risk Register

**Actions:**
4.1. Open AI Risk Register (REC-AI-RM-003)
4.2. For each assessed risk, create new risk register entry with:
     - Risk_ID (auto-generated)
     - AI_System_ID
     - Risk_Category
     - Risk_Description
     - Risk_Source
     - Likelihood (1-5)
     - Impact (1-5)
     - Inherent_Risk_Score (Likelihood × Impact)
     - Risk_Level (Critical/High/Medium/Low/Very Low)
     - Risk_Owner (assign to appropriate person)
     - Risk_Status (Open)
     - Identification_Date
     - Next_Review_Date (90 days for high/critical, 180 days for others)
4.3. Save risk register
4.4. Generate risk register summary report

**Duration:** 1 day

**Input Documents:**
- Risk Assessment Worksheets (REC-AI-RM-007)
- Risk Prioritization Matrix (REC-AI-RM-008)

**Output Documents:**
- Updated AI Risk Register (REC-AI-RM-003)
- Risk Register Update Log (REC-AI-RM-004)

**Success Criteria:**
- All assessed risks documented in risk register
- All mandatory fields populated
- Risk owners assigned
- Review dates set

---

### **STEP 5: Prepare Risk Assessment Report**

**Objective:** Document risk assessment findings in formal report

**Actions:**
5.1. Prepare Risk Assessment Report (RPT-AI-RM-003) including:
     - **Executive Summary**
       - AI system overview
       - Number of risks identified
       - Risk profile (breakdown by risk level)
       - Key findings
       - Recommendations
     - **Risk Assessment Methodology**
       - Approach used
       - Participants
       - Tools and techniques
     - **Risk Identification Results**
       - List of identified risks
       - Risk categories covered
     - **Risk Analysis Results**
       - Risk scores and levels
       - Risk prioritization
       - Risk heat map
     - **Bias Assessment Results** (if applicable)
       - Protected characteristics assessed
       - Bias risks identified
       - Fairness metrics
     - **Recommendations**
       - Immediate actions required
       - Risk treatment priorities
       - Next steps
     - **Appendices**
       - Detailed risk assessment worksheets
       - Risk identification checklist (completed)
       - Workshop minutes

5.2. Review report for completeness and accuracy
5.3. Obtain AI System Owner review and comments
5.4. Incorporate feedback
5.5. Finalize report

**Duration:** 2-3 days

**Input Documents:**
- Updated AI Risk Register
- Risk Assessment Worksheets
- Workshop minutes
- Bias assessment results

**Output Documents:**
- Risk Assessment Report (RPT-AI-RM-003)

**Success Criteria:**
- Report complete with all sections
- Executive summary clear and concise
- Recommendations actionable
- AI System Owner reviewed

---

### **STEP 6: Review and Approve Risk Assessment**

**Objective:** Obtain formal approval of risk assessment

**Actions:**
6.1. Submit Risk Assessment Report to:
     - AI System Owner (for approval)
     - Product Director (for review)
     - Legal & Compliance (for compliance review)
     - AI Governance Committee (if high/critical risks identified)

6.2. **Approval Criteria:**
     - All risks identified and assessed
     - Methodology followed correctly
     - Bias assessment completed (if applicable)
     - Recommendations reasonable
     - No unacceptable risks without treatment plan

6.3. **Approval Process:**
     - **Low/Medium risks only:** AI System Owner approval sufficient
     - **High risks:** Product Director + AI Risk Manager approval required
     - **Critical risks:** AI Governance Committee approval required

6.4. Document approval in Risk Assessment Approval Record (REC-AI-RM-010)

6.5. If not approved:
     - Document reasons for rejection
     - Address concerns
     - Resubmit for approval

**Duration:** 3-5 days

**Input Documents:**
- Risk Assessment Report (RPT-AI-RM-003)

**Output Documents:**
- Risk Assessment Approval Record (REC-AI-RM-010)
- Approved Risk Assessment Report

**Success Criteria:**
- Risk assessment approved by required authorities
- Approval documented
- Any conditions or caveats documented

---

### **STEP 7: Communicate Risk Assessment Results**

**Objective:** Communicate risk assessment findings to stakeholders

**Actions:**
7.1. **Internal Communication:**
     - Share approved Risk Assessment Report with:
       - AI System Owner
       - Product Director
       - Data Science / AI Engineering team
       - Legal & Compliance
       - AI Governance Committee (monthly report)
     - Update AI System Register with risk assessment status
     - Add risk assessment to AI system documentation

7.2. **External Communication (if applicable):**
     - Include risk assessment summary in Instructions for Use (Article 13)
     - Disclose known risks to deployers
     - Update transparency notices for users

7.3. **Risk Register Communication:**
     - Notify risk owners of assigned risks
     - Provide risk treatment guidance
     - Set expectations for risk monitoring

7.4. Document communication in Stakeholder Communication Records (REC-AI-RM-020)

**Duration:** 1-2 days

**Input Documents:**
- Approved Risk Assessment Report

**Output Documents:**
- Stakeholder Communication Records (REC-AI-RM-020)
- Updated AI System Register
- Updated Instructions for Use (if applicable)

**Success Criteria:**
- All required stakeholders informed
- Risk owners notified
- Communication documented
- External disclosures made (if required)

---

### **STEP 8: Initiate Risk Treatment Planning**

**Objective:** Transition from risk assessment to risk treatment

**Actions:**
8.1. Schedule risk treatment planning session
8.2. Invite risk owners and relevant stakeholders
8.3. Prioritize risks for treatment (focus on high/critical first)
8.4. Assign risk treatment leads
8.5. Set target dates for risk treatment plans
8.6. Transition to PROC-AI-RM-002 (Risk Treatment Procedure)

**Duration:** 1 day

**Input Documents:**
- Approved Risk Assessment Report
- AI Risk Register

**Output Documents:**
- Risk Treatment Planning Meeting Invitation
- Risk Treatment Action Tracker

**Success Criteria:**
- Risk treatment planning initiated
- Risk owners engaged
- Priorities set
- Target dates defined

---

## 6. INPUT / OUTPUT DOCUMENTS

### 6.1 Input Documents

| Document ID | Document Name | Source | Format |
|-------------|---------------|--------|--------|
| FORM-AI-RM-001 | Risk Assessment Request Form | AI System Owner | Word/PDF |
| TMPL-AI-RM-001 | Risk Assessment Template | AI Risk Manager | Excel |
| CHK-AI-RM-002 | Risk Identification Checklist | AI Risk Manager | Excel |
| AI-SYS-XXX | AI System Register Entry | AI System Inventory | Database |
| TECH-AI-XXX | Technical Documentation | AI Engineering | Word/PDF |

### 6.2 Output Documents

| Document ID | Document Name | Owner | Format | Retention |
|-------------|---------------|-------|--------|-----------|
| REC-AI-RM-005 | Risk Identification Workshop Minutes | AI Risk Manager | Word/PDF | 10 years |
| REC-AI-RM-007 | Risk Assessment Worksheets | AI Risk Manager | Excel | 10 years |
| REC-AI-RM-008 | Risk Prioritization Matrix | AI Risk Manager | Excel | 10 years |
| REC-AI-RM-003 | AI Risk Register (updated) | AI Risk Manager | Excel/Database | 10 years |
| RPT-AI-RM-003 | Risk Assessment Report | AI Risk Manager | Word/PDF | 10 years |
| REC-AI-RM-010 | Risk Assessment Approval Record | AI Risk Manager | Word/PDF | 10 years |
| REC-AI-RM-020 | Stakeholder Communication Records | AI Risk Manager | Email/Word | 10 years |

---

## 7. TOOLS / SYSTEMS USED

| Tool / System | Purpose | Access Required |
|---------------|---------|-----------------|
| **AI System Inventory** | Retrieve AI system information | Read access |
| **Risk Management Software** | Document and track risks | Read/Write access |
| **Microsoft Excel** | Risk assessment templates and worksheets | Standard license |
| **Microsoft Word** | Risk assessment reports | Standard license |
| **Collaboration Platform** | Workshop facilitation (Teams/Zoom) | Standard license |
| **Bias Detection Tools** | Analyze training data for bias (e.g., AI Fairness 360) | Admin access |
| **SharePoint** | Store risk assessment documentation | Read/Write access |

---

## 8. KPIs / SUCCESS CRITERIA

| KPI | Target | Measurement | Frequency |
|-----|--------|-------------|-----------|
| **Risk Assessment Completion Rate** | 100% | % of AI systems with current risk assessment | Monthly |
| **Risk Assessment Timeliness** | 100% on time | % of risk assessments completed by target date | Monthly |
| **Risk Identification Coverage** | ≥ 10 risks per high-risk system | Average # of risks identified | Quarterly |
| **Bias Assessment Completion** | 100% for high-risk systems | % of high-risk systems with bias assessment | Quarterly |
| **Risk Assessment Approval Rate** | ≥ 95% first-time approval | % of risk assessments approved without rework | Quarterly |
| **Stakeholder Participation** | 100% | % of required participants attending workshops | Quarterly |

---

## 9. EXCEPTION HANDLING

### 9.1 Common Exceptions

| Exception | Handling Procedure |
|-----------|-------------------|
| **Key stakeholder unavailable** | - Reschedule workshop within 5 business days<br>- If urgent, proceed with available stakeholders and document absence<br>- Obtain offline input from missing stakeholder |
| **Insufficient information** | - Pause risk assessment<br>- Request additional information from AI System Owner<br>- Set deadline for information provision (5 business days)<br>- Resume when information available |
| **Risk assessment tools unavailable** | - Use manual templates (Excel/Word)<br>- Document tool unavailability<br>- Escalate to IT Service Desk<br>- Transfer to tools when available |
| **Disagreement on risk scores** | - Facilitate discussion to reach consensus<br>- If no consensus, use highest score (conservative approach)<br>- Document disagreement and rationale<br>- Escalate to AI Risk Manager for final decision |
| **New risk identified mid-assessment** | - Add to risk list immediately<br>- Assess new risk using same methodology<br>- Update risk register<br>- Communicate to stakeholders |

### 9.2 Escalation

**Escalate to AI Risk Manager within 48 hours if:**
- Risk assessment cannot be completed within target timeframe
- Critical risk identified requiring immediate attention
- Stakeholder disagreement cannot be resolved
- Compliance concern identified
- Resource constraints prevent completion

**Escalate to AI Governance Committee immediately if:**
- Prohibited AI practice identified (Article 5)
- Unacceptable risk with no feasible treatment
- Serious incident risk identified
- Regulatory violation suspected

---

## 10. APPROVAL AND AUTHORIZATION

### 10.1 Approval Signatures

| Role | Name | Title | Signature | Date |
|------|------|-------|-----------|------|
| **Prepared By** | Michael Chen | AI Risk Manager | _________________ | ________ |
| **Reviewed By** | Sarah Johnson | AI Act Program Manager | _________________ | ________ |
| **Reviewed By** | Jane Doe | Chief Strategy & Risk Officer (CSRO) | _________________ | ________ |
| **Approved By** | Jane Doe | AI Governance Committee Chair | _________________ | ________ |

### 10.2 Effective Date

This procedure becomes effective on **2025-08-01** following AI Governance Committee approval.

---

## 11. REVISION HISTORY

| Version | Date | Author | Changes | Approval Date |
|---------|------|--------|---------|---------------|
| 0.1 | 2025-06-20 | AI Risk Manager | Initial draft | - |
| 0.2 | 2025-07-05 | AI Risk Manager | Incorporated stakeholder feedback | - |
| 0.3 | 2025-07-20 | AI Risk Manager | Added bias assessment steps | - |
| 1.0 | 2025-08-01 | AI Risk Manager | Final version approved | 2025-07-25 |

---

**END OF PROCEDURE**

---

## APPENDICES

### APPENDIX A: Risk Assessment Process Flowchart

```
[Start] → [Step 1: Initiate] → [Step 2: Identify Risks] → [Step 3: Analyze Risks]
   ↓
[Step 4: Document in Register] → [Step 5: Prepare Report] → [Step 6: Approve]
   ↓
[Step 7: Communicate] → [Step 8: Initiate Treatment] → [End]
```

### APPENDIX B: Risk Assessment Checklist

*[To be developed as separate template document]*

### APPENDIX C: Sample Risk Assessment Report

*[To be developed as separate template document]*

---

**This procedure provides step-by-step instructions for conducting AI risk assessments. Use in conjunction with STD-AI-002 (AI Risk Management Standard) and supporting templates.**
# AI Risk Treatment Procedure

**Document Type:** Procedure (SOP)  
**Procedure ID / Number:** PROC-AI-RM-002  
**Procedure Title:** AI Risk Treatment Procedure  
**Version:** 1.0  
**Effective Date:** 2025-08-01  
**Next Review Date:** 2026-08-01  
**Review Frequency:** Annually or after tool change  
**Parent Standard:** STD-AI-002 - AI Risk Management Standard  
**Owner:** AI Risk Manager  
**Approved By:** AI Governance Committee Chair  
**Status:** Draft  

---

## DOCUMENT CONTROL

| Element | Details |
|---------|---------|
| **Procedure Title** | AI Risk Treatment Procedure |
| **Procedure ID / Number** | PROC-AI-RM-002 |
| **Version** | 1.0 |
| **Effective Date** | 2025-08-01 |
| **Next Review Date** | 2026-08-01 |
| **Review Frequency** | Annually or after tool change |
| **Parent Standard** | STD-AI-002 - AI Risk Management Standard |
| **Owner** | Michael Chen, AI Risk Manager |
| **Approved By** | Jane Doe, AI Governance Committee Chair |
| **Classification** | Internal Use Only |

---

## 1. PURPOSE

This procedure defines the step-by-step process for treating identified AI risks by selecting appropriate treatment strategies, implementing controls, and assessing residual risk in compliance with EU AI Act Article 9(4) and (5).

---

## 2. SCOPE

### 2.1 Applicability

This procedure applies to:
- **Mandatory:** All identified risks in the AI Risk Register
- **Mandatory:** All high-risk AI systems (EU AI Act Article 9)
- **Recommended:** All limited-risk and minimal-risk AI systems
- All risk treatment activities throughout AI system lifecycle

### 2.2 When to Execute Risk Treatment

| Trigger | Timing | Type |
|---------|--------|------|
| **Risk Assessment Complete** | After approval | Initial treatment |
| **New Risk Identified** | Within 5 days | Targeted treatment |
| **Control Failure** | Immediately | Corrective treatment |
| **Residual Risk Unacceptable** | Immediately | Additional treatment |
| **Regulatory Change** | Within 30 days | Compliance treatment |
| **Periodic Review** | Quarterly | Treatment review |

---

## 3. PRECONDITIONS / PREREQUISITES

Before executing risk treatment, ensure the following are in place:

- [ ] Risk assessment completed and approved (PROC-AI-RM-001)
- [ ] Risks documented in AI Risk Register (REC-AI-RM-003)
- [ ] Risk owners assigned for all risks
- [ ] Risk prioritization completed
- [ ] Risk Treatment Plan Template available (TMPL-AI-RM-003)
- [ ] Controls Register accessible (REC-AI-CTRL-001)
- [ ] Budget approved for control implementation

---

## 4. ROLES & RESPONSIBILITIES

| Role | Responsibility | RACI |
|------|---------------|------|
| **AI System Owner** | Approves risk treatment plans; allocates resources; accepts residual risk | **A** (Accountable) |
| **AI Risk Manager** | Facilitates risk treatment planning; documents treatment plans; tracks implementation | **R** (Responsible) |
| **Risk Owner** | Develops risk treatment plan; implements controls; monitors effectiveness | **R** (Responsible) |
| **Data Scientist / AI Engineer** | Implements technical controls; tests control effectiveness | **R** (Responsible) |
| **Product Director** | Approves high-risk treatment plans; allocates budget | **A** (Accountable for high risks) |
| **Security Team** | Implements security controls; validates security measures | **C** (Consulted) |
| **Legal & Compliance** | Reviews compliance controls; advises on regulatory requirements | **C** (Consulted) |
| **AI Governance Committee** | Approves critical risk treatment plans; reviews residual risks | **A** (Accountable for critical risks) |

---

## 5. STEP-BY-STEP PROCESS

### **STEP 1: Prioritize Risks for Treatment**

**Objective:** Determine treatment priority based on risk level and business impact

**Actions:**
1.1. Review AI Risk Register (REC-AI-RM-003)
1.2. Sort risks by risk score (highest to lowest)
1.3. Apply prioritization criteria:
     - **Critical risks (20-25):** Immediate treatment (within 7 days)
     - **High risks (15-19):** Urgent treatment (within 30 days)
     - **Medium risks (10-14):** Standard treatment (within 60 days)
     - **Low risks (5-9):** Routine treatment (within 90 days)
     - **Very low risks (1-4):** Monitor or accept

1.4. Consider additional factors:
     - Regulatory compliance urgency
     - Business impact
     - Resource availability
     - Dependencies between risks

1.5. Create prioritized risk treatment list
1.6. Assign treatment leads for each risk
1.7. Set target completion dates

**Duration:** 1-2 days

**Input Documents:**
- AI Risk Register (REC-AI-RM-003)
- Risk Assessment Report (RPT-AI-RM-003)

**Output Documents:**
- Prioritized Risk Treatment List (REC-AI-RM-021)
- Risk Treatment Assignment Records (REC-AI-RM-022)

**Success Criteria:**
- All risks prioritized
- Treatment leads assigned
- Target dates set
- Critical risks flagged for immediate action

---

### **STEP 2: Select Risk Treatment Strategy**

**Objective:** Choose appropriate treatment strategy for each risk

**Actions:**
2.1. For each prioritized risk, evaluate treatment options:

**Treatment Option 1: AVOID**
- **Description:** Eliminate the risk by not proceeding with the activity
- **When to use:** Risk too high; no effective controls available
- **Examples:**
  - Cancel high-risk AI project
  - Remove risky feature from AI system
  - Change AI system design to eliminate risk
- **Approval required:** AI Governance Committee

**Treatment Option 2: MITIGATE**
- **Description:** Reduce likelihood or impact through controls
- **When to use:** Risk can be controlled to acceptable level
- **Examples:**
  - Implement bias mitigation techniques
  - Add human oversight controls
  - Enhance testing and validation
  - Implement monitoring and alerting
- **Approval required:** Risk Owner (low/medium), Product Director (high), AI Governance Committee (critical)

**Treatment Option 3: TRANSFER**
- **Description:** Share risk with third party
- **When to use:** Risk can be insured or outsourced
- **Examples:**
  - Purchase AI liability insurance
  - Outsource to specialized vendor
  - Use third-party conformity assessment body
- **Approval required:** Product Director + Legal

**Treatment Option 4: ACCEPT**
- **Description:** Acknowledge risk without action
- **When to use:** Risk below tolerance; cost of mitigation exceeds benefit
- **Examples:**
  - Accept low-probability, low-impact risks
  - Accept risks with no feasible treatment
- **Approval required:** AI System Owner (low/very low), Product Director (medium), AI Governance Committee (high/critical)

2.2. Apply Risk Treatment Decision Matrix (from STD-AI-002):

| Risk Level | Recommended Strategy | Approval Required |
|------------|---------------------|-------------------|
| Critical (20-25) | Avoid or Mitigate (must reduce to Medium or below) | AI Governance Committee |
| High (15-19) | Mitigate (must reduce to Low or below) | Product Director + AI Risk Manager |
| Medium (10-14) | Mitigate or Accept with justification | AI Risk Manager |
| Low (5-9) | Accept or Mitigate | AI System Owner |
| Very Low (1-4) | Accept | AI System Owner |

2.3. Document treatment strategy selection:
     - Selected strategy
     - Rationale for selection
     - Alternative strategies considered
     - Expected risk reduction
     - Cost estimate
     - Implementation timeline

2.4. Obtain required approvals

**Duration:** 2-3 days

**Input Documents:**
- Prioritized Risk Treatment List (REC-AI-RM-021)
- Risk Treatment Decision Matrix (from STD-AI-002)

**Output Documents:**
- Risk Treatment Strategy Selection Records (REC-AI-RM-023)
- Risk Treatment Approval Records (REC-AI-RM-024)

**Success Criteria:**
- Treatment strategy selected for all risks
- Rationale documented
- Required approvals obtained
- Cost and timeline estimated

---

### **STEP 3: Design Risk Controls**

**Objective:** Design specific controls to implement the selected treatment strategy

**Actions:**
3.1. For each risk with "Mitigate" strategy, design controls:

**Control Design Elements:**
- **Control ID:** Unique identifier (CTRL-AI-XXX)
- **Control Name:** Descriptive name
- **Control Type:** Preventive / Detective / Corrective
- **Control Objective:** What the control aims to achieve
- **Control Description:** Detailed description of control
- **Control Activities:** Specific actions performed
- **Control Owner:** Person responsible for control
- **Control Frequency:** How often control executes
- **Control Automation:** Manual / Semi-automated / Automated
- **Control Evidence:** What evidence control produces
- **Control Testing:** How to test control effectiveness

3.2. **Control Types:**

**A. Preventive Controls** (prevent risk from occurring)
- Input validation and sanitization
- Access controls and authentication
- Bias mitigation in model training
- Data quality checks
- Secure development practices
- Human-in-the-loop approval gates

**B. Detective Controls** (detect when risk occurs)
- Monitoring and alerting
- Anomaly detection
- Audit logging
- Performance metrics
- Bias detection in production
- Regular audits and reviews

**C. Corrective Controls** (correct after risk occurs)
- Incident response procedures
- Model retraining
- Human review and override
- Rollback procedures
- Corrective action plans
- Root cause analysis

3.3. Design controls to address root cause (not just symptoms)

3.4. Consider control effectiveness vs. cost

3.5. Design compensating controls if primary control not feasible

3.6. Document control design in Controls Register (REC-AI-CTRL-001)

3.7. Link controls to risks in Risk Register

**Duration:** 3-5 days

**Input Documents:**
- Risk Treatment Strategy Selection Records
- Controls Register Template (REC-AI-CTRL-001)
- Control Design Guidelines

**Output Documents:**
- Updated Controls Register (REC-AI-CTRL-001)
- Control Design Specifications (SPEC-AI-CTRL-XXX)

**Success Criteria:**
- Controls designed for all mitigated risks
- Control design complete with all elements
- Controls address root cause
- Controls linked to risks
- Control owners assigned

---

### **STEP 4: Prepare Risk Treatment Plan**

**Objective:** Document comprehensive treatment plan for each risk

**Actions:**
4.1. For each risk, prepare Risk Treatment Plan (TMPL-AI-RM-003) including:

**Section 1: Risk Summary**
- Risk ID, description, source
- Current risk score and level
- Risk owner

**Section 2: Treatment Strategy**
- Selected strategy (Avoid/Mitigate/Transfer/Accept)
- Rationale for selection
- Expected risk reduction
- Target residual risk score

**Section 3: Control Implementation** (if Mitigate)
- List of controls to implement
- Control IDs and descriptions
- Control owners
- Implementation steps
- Resource requirements
- Dependencies
- Timeline and milestones

**Section 4: Cost-Benefit Analysis**
- Implementation cost
- Ongoing operational cost
- Expected benefit (risk reduction)
- ROI calculation

**Section 5: Implementation Timeline**
- Start date
- Key milestones
- Target completion date
- Dependencies

**Section 6: Success Criteria**
- How to measure success
- Acceptance criteria
- Testing requirements

**Section 7: Approvals**
- Required approvals
- Approval status
- Approval dates

4.2. Review treatment plan with risk owner

4.3. Review treatment plan with AI System Owner

4.4. Obtain required approvals per Step 2 decision matrix

4.5. If not approved:
     - Document reasons for rejection
     - Revise treatment plan
     - Resubmit for approval

**Duration:** 2-3 days per risk (can be done in parallel)

**Input Documents:**
- Risk Treatment Strategy Selection Records
- Updated Controls Register
- Control Design Specifications

**Output Documents:**
- Risk Treatment Plan (TMPL-AI-RM-003) - one per risk
- Risk Treatment Plan Approval Records (REC-AI-RM-025)

**Success Criteria:**
- Treatment plan complete for all risks
- All sections documented
- Cost-benefit analysis completed
- Required approvals obtained

---

### **STEP 5: Implement Risk Controls**

**Objective:** Execute the risk treatment plan and implement controls

**Actions:**
5.1. **For Technical Controls:**
     - Assign to Data Science / AI Engineering team
     - Develop control code/configuration
     - Integrate into AI system
     - Unit test control functionality
     - Document technical implementation

5.2. **For Process Controls:**
     - Create control procedures (PROC-AI-CTRL-XXX)
     - Define control activities
     - Assign control operators
     - Train control operators
     - Document process controls

5.3. **For Organizational Controls:**
     - Update policies/standards
     - Communicate changes
     - Train affected personnel
     - Update documentation

5.4. **Implementation Steps:**
     - Follow implementation timeline from treatment plan
     - Track progress against milestones
     - Document implementation activities
     - Address implementation issues
     - Escalate blockers to AI Risk Manager

5.5. **Implementation Documentation:**
     - Control implementation records
     - Configuration documentation
     - Procedure documents
     - Training records
     - Evidence of implementation

5.6. Update Controls Register with implementation status

5.7. Update Risk Register with control implementation status

**Duration:** Varies by control (1 day to 8 weeks)

**Input Documents:**
- Approved Risk Treatment Plans
- Control Design Specifications
- Implementation procedures

**Output Documents:**
- Control Implementation Records (REC-AI-CTRL-002)
- Control Procedures (PROC-AI-CTRL-XXX)
- Configuration Documentation (CFG-AI-CTRL-XXX)
- Training Records (REC-AI-TRN-XXX)
- Updated Controls Register
- Updated Risk Register

**Success Criteria:**
- All planned controls implemented
- Implementation documented
- Control operators trained
- Controls operational
- Evidence of implementation available

---

### **STEP 6: Test Control Effectiveness**

**Objective:** Verify that implemented controls effectively reduce risk

**Actions:**
6.1. **Develop Control Test Plan:**
     - Test objectives
     - Test scope
     - Test methodology
     - Test criteria (pass/fail)
     - Test data/scenarios
     - Test schedule

6.2. **Test Types:**

**A. Design Testing** (Is control designed correctly?)
- Review control design documentation
- Verify control addresses risk root cause
- Confirm control activities are appropriate
- Check control ownership and frequency

**B. Implementation Testing** (Is control implemented correctly?)
- Verify control is operational
- Test control execution
- Verify control produces expected outputs
- Check control documentation

**C. Operating Effectiveness Testing** (Does control work as intended?)
- Test control with real/simulated scenarios
- Measure control performance
- Verify control detects/prevents/corrects risk
- Test control under various conditions
- Test control failure scenarios

6.3. **Execute Control Tests:**
     - Follow test plan
     - Document test execution
     - Capture test evidence
     - Record test results (pass/fail)
     - Document any deficiencies

6.4. **For Failed Tests:**
     - Document failure details
     - Identify root cause of failure
     - Determine corrective actions
     - Re-implement control
     - Retest until pass

6.5. Document test results in Control Testing Report (TEST-AI-CTRL-XXX)

6.6. Update Controls Register with test results

**Duration:** 1-2 weeks per control

**Input Documents:**
- Control Implementation Records
- Control Test Plan Template
- Test scenarios and data

**Output Documents:**
- Control Test Plans (PLAN-AI-CTRL-XXX)
- Control Test Results (TEST-AI-CTRL-XXX)
- Control Testing Report (RPT-AI-CTRL-002)
- Updated Controls Register

**Success Criteria:**
- All controls tested
- Test results documented
- Pass/fail determination made
- Failed controls remediated and retested
- Test evidence retained

---

### **STEP 7: Assess Residual Risk**

**Objective:** Calculate residual risk after control implementation and determine acceptability

**Actions:**
7.1. **Calculate Residual Risk:**

**Formula:**
```
Residual Risk Score = Inherent Risk Score - Control Effectiveness

Where Control Effectiveness reduces:
- Likelihood (if preventive control)
- Impact (if detective or corrective control)
```

**Example:**
- Inherent Risk: Likelihood 4 × Impact 5 = 20 (Critical)
- Preventive Control: Reduces likelihood by 2 levels
- Residual Risk: Likelihood 2 × Impact 5 = 10 (Medium)

7.2. **For each risk with implemented controls:**
     - Review control test results
     - Assess control effectiveness (0-5 scale)
     - Recalculate likelihood (if preventive control)
     - Recalculate impact (if detective/corrective control)
     - Calculate residual risk score
     - Classify residual risk level

7.3. **Assess Residual Risk Acceptability:**

| Residual Risk Level | Acceptable? | Action Required |
|---------------------|-------------|-----------------|
| Critical (20-25) | ❌ No | Additional controls required; cannot deploy |
| High (15-19) | ❌ No | Additional controls required |
| Medium (10-14) | ✅ Yes (with approval) | AI Risk Manager approval required |
| Low (5-9) | ✅ Yes | AI System Owner acceptance |
| Very Low (1-4) | ✅ Yes | Automatic acceptance |

7.4. Document residual risk assessment:
     - Inherent risk score
     - Controls implemented
     - Control effectiveness
     - Residual risk score
     - Residual risk level
     - Acceptability determination
     - Rationale

7.5. Update Risk Register with residual risk scores

**Duration:** 1-2 days

**Input Documents:**
- Control Testing Reports
- Updated Controls Register
- Risk Register

**Output Documents:**
- Residual Risk Assessment Records (REC-AI-RM-026)
- Residual Risk Report (RPT-AI-RM-007)
- Updated Risk Register

**Success Criteria:**
- Residual risk calculated for all treated risks
- Acceptability determined
- Documentation complete
- Risk Register updated

---

### **STEP 8: Obtain Residual Risk Acceptance**

**Objective:** Obtain formal acceptance of residual risk from appropriate authority

**Actions:**
8.1. **Prepare Residual Risk Acceptance Package:**
     - Residual Risk Report
     - Risk Treatment Plans
     - Control Implementation Records
     - Control Test Results
     - Residual Risk Assessment

8.2. **Submit for Acceptance:**

| Residual Risk Level | Acceptance Authority | Documentation Required |
|---------------------|---------------------|------------------------|
| Medium (10-14) | AI Risk Manager | Residual Risk Report + justification |
| Low (5-9) | AI System Owner | Residual Risk Report |
| Very Low (1-4) | AI System Owner | Residual Risk Report |

8.3. **Acceptance Criteria:**
     - All planned controls implemented and tested
     - Residual risk within tolerance
     - No unacceptable residual risks remain
     - Compensating controls in place (if applicable)
     - Continuous monitoring planned

8.4. **If Residual Risk Not Acceptable:**
     - Document reasons for rejection
     - Identify additional controls needed
     - Return to Step 3 (Design Additional Controls)
     - Implement and test additional controls
     - Reassess residual risk
     - Resubmit for acceptance

8.5. **If Residual Risk Acceptable:**
     - Document acceptance decision
     - Obtain acceptance signatures
     - Update Risk Register status to "Mitigated"
     - Set next review date
     - Transition to monitoring (PROC-AI-RM-003)

8.6. Document acceptance in Residual Risk Acceptance Records (REC-AI-RM-012)

**Duration:** 3-5 days

**Input Documents:**
- Residual Risk Report
- Risk Treatment Plans
- Control Implementation and Test Records

**Output Documents:**
- Residual Risk Acceptance Records (REC-AI-RM-012)
- Updated Risk Register (status = "Mitigated")

**Success Criteria:**
- Residual risk acceptance obtained
- Acceptance documented and signed
- Risk Register updated
- Monitoring plan in place

---

### **STEP 9: Update Documentation and Communicate**

**Objective:** Update all relevant documentation and communicate treatment completion

**Actions:**
9.1. **Update Documentation:**
     - Update Risk Register with:
       - Treatment strategy
       - Controls implemented
       - Control IDs
       - Residual risk score
       - Residual risk level
       - Acceptance status
       - Acceptance date
       - Next review date
     - Update Controls Register with:
       - Control status = "Operational"
       - Control effectiveness rating
       - Test results
       - Next test date
     - Update AI System Register with risk treatment status
     - Update Traceability Matrix with control linkages

9.2. **Prepare Risk Treatment Completion Report:**
     - Executive summary
     - Risks treated
     - Controls implemented
     - Residual risk profile
     - Acceptance status
     - Next steps (monitoring)

9.3. **Communicate to Stakeholders:**
     - AI System Owner
     - Product Director
     - Risk owners
     - Control owners
     - AI Governance Committee (monthly report)
     - Data Science / AI Engineering team

9.4. **Update AI System Documentation:**
     - Technical documentation (TECH-AI-XXX)
     - Instructions for Use (Article 13)
     - Risk management documentation
     - Control documentation

9.5. **Transition to Monitoring:**
     - Set up continuous monitoring (PROC-AI-RM-003)
     - Schedule periodic reviews
     - Brief control operators
     - Activate monitoring dashboards

**Duration:** 2-3 days

**Input Documents:**
- Updated Risk Register
- Updated Controls Register
- Residual Risk Acceptance Records

**Output Documents:**
- Risk Treatment Completion Report (RPT-AI-RM-008)
- Stakeholder Communication Records (REC-AI-RM-020)
- Updated AI System Documentation

**Success Criteria:**
- All documentation updated
- Stakeholders informed
- Monitoring activated
- Transition complete

---

## 6. INPUT / OUTPUT DOCUMENTS

### 6.1 Input Documents

| Document ID | Document Name | Source | Format |
|-------------|---------------|--------|--------|
| REC-AI-RM-003 | AI Risk Register | PROC-AI-RM-001 | Excel/Database |
| RPT-AI-RM-003 | Risk Assessment Report | PROC-AI-RM-001 | Word/PDF |
| TMPL-AI-RM-003 | Risk Treatment Plan Template | AI Risk Manager | Word |
| REC-AI-CTRL-001 | Controls Register Template | AI Risk Manager | Excel |

### 6.2 Output Documents

| Document ID | Document Name | Owner | Format | Retention |
|-------------|---------------|-------|--------|-----------|
| REC-AI-RM-021 | Prioritized Risk Treatment List | AI Risk Manager | Excel | 10 years |
| REC-AI-RM-022 | Risk Treatment Assignment Records | AI Risk Manager | Word | 10 years |
| REC-AI-RM-023 | Risk Treatment Strategy Selection Records | AI Risk Manager | Word | 10 years |
| REC-AI-RM-024 | Risk Treatment Approval Records | AI Risk Manager | Word/PDF | 10 years |
| REC-AI-CTRL-001 | Controls Register (updated) | AI Risk Manager | Excel/Database | 10 years |
| SPEC-AI-CTRL-XXX | Control Design Specifications | Control Owner | Word | 10 years |
| TMPL-AI-RM-003 | Risk Treatment Plan (completed) | Risk Owner | Word | 10 years |
| REC-AI-RM-025 | Risk Treatment Plan Approval Records | AI Risk Manager | Word/PDF | 10 years |
| REC-AI-CTRL-002 | Control Implementation Records | Control Owner | Word | 10 years |
| PROC-AI-CTRL-XXX | Control Procedures | Control Owner | Word | 10 years |
| TEST-AI-CTRL-XXX | Control Test Results | Control Owner | Word/PDF | 10 years |
| RPT-AI-CTRL-002 | Control Testing Report | AI Risk Manager | Word/PDF | 10 years |
| REC-AI-RM-026 | Residual Risk Assessment Records | AI Risk Manager | Word | 10 years |
| RPT-AI-RM-007 | Residual Risk Report | AI Risk Manager | Word/PDF | 10 years |
| REC-AI-RM-012 | Residual Risk Acceptance Records | AI Risk Manager | Word/PDF | 10 years |
| RPT-AI-RM-008 | Risk Treatment Completion Report | AI Risk Manager | Word/PDF | 10 years |

---

## 7. TOOLS / SYSTEMS USED

| Tool / System | Purpose | Access Required |
|---------------|---------|-----------------|
| **Risk Management Software** | Track risks and controls | Read/Write access |
| **AI System Inventory** | Update system risk status | Read/Write access |
| **Microsoft Excel** | Risk register, controls register | Standard license |
| **Microsoft Word** | Treatment plans, reports | Standard license |
| **Development Tools** | Implement technical controls | Developer access |
| **Testing Tools** | Test control effectiveness | Tester access |
| **Monitoring Tools** | Set up continuous monitoring | Admin access |
| **SharePoint** | Store treatment documentation | Read/Write access |

---

## 8. KPIs / SUCCESS CRITERIA

| KPI | Target | Measurement | Frequency |
|-----|--------|-------------|-----------|
| **Risk Treatment Completion Rate** | 100% | % of risks with approved treatment plans | Monthly |
| **Control Implementation Rate** | 100% | % of planned controls implemented | Monthly |
| **Control Effectiveness Rate** | ≥ 90% | % of controls passing effectiveness tests | Quarterly |
| **Residual Risk Acceptance Rate** | 100% | % of residual risks accepted | Monthly |
| **Treatment Timeline Adherence** | ≥ 80% | % of treatments completed by target date | Monthly |
| **Unacceptable Residual Risks** | 0 | # of unacceptable residual risks | Monthly |

---

## 9. EXCEPTION HANDLING

### 9.1 Common Exceptions

| Exception | Handling Procedure |
|-----------|-------------------|
| **Budget insufficient for controls** | - Prioritize critical controls<br>- Seek additional budget approval<br>- Consider alternative lower-cost controls<br>- Escalate to Product Director |
| **Control implementation delayed** | - Update treatment timeline<br>- Implement interim controls<br>- Escalate to AI Risk Manager<br>- Communicate delay to stakeholders |
| **Control test fails** | - Document failure details<br>- Identify root cause<br>- Remediate control<br>- Retest until pass<br>- Do not proceed to residual risk assessment |
| **Residual risk unacceptable** | - Design additional controls<br>- Implement and test<br>- Reassess residual risk<br>- If still unacceptable, escalate to AI Governance Committee |
| **Risk owner unavailable** | - Assign interim risk owner<br>- Document assignment<br>- Proceed with treatment<br>- Transfer to permanent owner when available |

### 9.2 Escalation

**Escalate to AI Risk Manager within 48 hours if:**
- Control implementation significantly delayed
- Control test repeatedly fails
- Budget constraints prevent treatment
- Residual risk remains unacceptable
- Resource constraints prevent completion

**Escalate to AI Governance Committee immediately if:**
- Critical risk cannot be treated
- Residual risk remains critical after treatment
- Risk requires "Avoid" strategy (project cancellation)
- Significant budget increase needed
- Regulatory compliance at risk

---

## 10. APPROVAL AND AUTHORIZATION

### 10.1 Approval Signatures

| Role | Name | Title | Signature | Date |
|------|------|-------|-----------|------|
| **Prepared By** | Michael Chen | AI Risk Manager | _________________ | ________ |
| **Reviewed By** | Sarah Johnson | AI Act Program Manager | _________________ | ________ |
| **Reviewed By** | Jane Doe | Chief Strategy & Risk Officer (CSRO) | _________________ | ________ |
| **Approved By** | Jane Doe | AI Governance Committee Chair | _________________ | ________ |

### 10.2 Effective Date

This procedure becomes effective on **2025-08-01** following AI Governance Committee approval.

---

## 11. REVISION HISTORY

| Version | Date | Author | Changes | Approval Date |
|---------|------|--------|---------|---------------|
| 0.1 | 2025-06-25 | AI Risk Manager | Initial draft | - |
| 0.2 | 2025-07-10 | AI Risk Manager | Incorporated stakeholder feedback | - |
| 0.3 | 2025-07-22 | AI Risk Manager | Added control testing details | - |
| 1.0 | 2025-08-01 | AI Risk Manager | Final version approved | 2025-07-25 |

---

**END OF PROCEDURE**

---

## APPENDICES

### APPENDIX A: Risk Treatment Process Flowchart

```
[Start] → [Step 1: Prioritize] → [Step 2: Select Strategy] → [Step 3: Design Controls]
   ↓
[Step 4: Prepare Plan] → [Step 5: Implement] → [Step 6: Test] → [Step 7: Assess Residual]
   ↓
[Step 8: Obtain Acceptance] → [Step 9: Update & Communicate] → [Transition to Monitoring]
```

### APPENDIX B: Risk Treatment Decision Tree

*[To be developed as separate document]*

### APPENDIX C: Control Design Checklist

*[To be developed as separate template document]*

---

**This procedure provides step-by-step instructions for treating AI risks. Use in conjunction with STD-AI-002 (AI Risk Management Standard) and PROC-AI-RM-001 (Risk Assessment Procedure).**
# AI Risk Monitoring Procedure

**Document Type:** Procedure (SOP)  
**Procedure ID / Number:** PROC-AI-RM-003  
**Procedure Title:** AI Risk Monitoring Procedure  
**Version:** 1.0  
**Effective Date:** 2025-08-01  
**Next Review Date:** 2026-08-01  
**Review Frequency:** Annually or after tool change  
**Parent Standard:** STD-AI-002 - AI Risk Management Standard  
**Owner:** AI Risk Manager  
**Approved By:** AI Governance Committee Chair  
**Status:** Draft  

---

## DOCUMENT CONTROL

| Element | Details |
|---------|---------|
| **Procedure Title** | AI Risk Monitoring Procedure |
| **Procedure ID / Number** | PROC-AI-RM-003 |
| **Version** | 1.0 |
| **Effective Date** | 2025-08-01 |
| **Next Review Date** | 2026-08-01 |
| **Review Frequency** | Annually or after tool change |
| **Parent Standard** | STD-AI-002 - AI Risk Management Standard |
| **Owner** | Michael Chen, AI Risk Manager |
| **Approved By** | Jane Doe, AI Governance Committee Chair |
| **Classification** | Internal Use Only |

---

## 1. PURPOSE

This procedure defines the process for continuous monitoring of AI risks and periodic review of risk management effectiveness throughout the operational lifecycle in compliance with EU AI Act Article 9(1) (continuous and iterative risk management).

---

## 2. SCOPE

### 2.1 Applicability

This procedure applies to:
- **Mandatory:** All operational AI systems with treated risks
- **Mandatory:** All high-risk AI systems (EU AI Act Article 9)
- **Recommended:** All AI systems in development, testing, or deployment
- Continuous monitoring and periodic review activities

### 2.2 Monitoring Types

| Monitoring Type | Frequency | Scope |
|----------------|-----------|-------|
| **Real-time Automated Monitoring** | Continuous | Risk indicators, performance metrics |
| **Daily Monitoring Review** | Daily | Alerts, threshold breaches |
| **Weekly Risk Review** | Weekly | Risk indicators, trends |
| **Monthly Risk Review** | Monthly | Risk register, new risks |
| **Quarterly Comprehensive Review** | Quarterly | Full risk assessment, effectiveness |
| **Annual Risk Assessment** | Annually | Complete reassessment |
| **Event-Triggered Review** | Ad-hoc | Incidents, changes, new risks |

---

## 3. PRECONDITIONS / PREREQUISITES

Before initiating risk monitoring, ensure the following are in place:

- [ ] Risk treatment completed (PROC-AI-RM-002)
- [ ] Controls implemented and operational
- [ ] Risk Register updated with residual risks
- [ ] Risk indicators (KRIs) defined
- [ ] Monitoring tools configured
- [ ] Alerting thresholds set
- [ ] Monitoring dashboard accessible
- [ ] Risk owners assigned and trained

---

## 4. ROLES & RESPONSIBILITIES

| Role | Responsibility | RACI |
|------|---------------|------|
| **AI System Owner** | Reviews monthly risk reports; approves risk changes; escalates issues | **A** (Accountable) |
| **AI Risk Manager** | Configures monitoring; reviews indicators; prepares reports; facilitates reviews | **R** (Responsible) |
| **Risk Owner** | Monitors assigned risks; investigates threshold breaches; updates risk register | **R** (Responsible) |
| **Control Owner** | Monitors control performance; addresses control failures; reports issues | **R** (Responsible) |
| **Data Scientist / AI Engineer** | Monitors technical metrics; investigates anomalies; implements fixes | **C** (Consulted) |
| **Security Team** | Monitors security metrics; investigates security events | **C** (Consulted) |
| **AI Governance Committee** | Reviews quarterly risk reports; approves significant risk changes | **I** (Informed) |

---

## 5. STEP-BY-STEP PROCESS

### **STEP 1: Define Risk Indicators (KRIs)**

**Objective:** Establish measurable indicators to monitor AI risks continuously

**Actions:**
1.1. For each risk in Risk Register, define Key Risk Indicators (KRIs):

**KRI Definition Elements:**
- **KRI ID:** Unique identifier
- **KRI Name:** Descriptive name
- **Risk ID:** Linked risk
- **Metric:** What to measure
- **Measurement Method:** How to measure
- **Data Source:** Where data comes from
- **Frequency:** How often to measure
- **Threshold:** Acceptable range
- **Alert Level:** When to alert (Yellow/Red)
- **Owner:** Who monitors this KRI

1.2. **Standard KRIs for AI Systems:**

| KRI | Metric | Threshold | Frequency |
|-----|--------|-----------|-----------|
| **Model Accuracy** | Accuracy % | ≥ 95% | Daily |
| **Bias Metric** | Disparate Impact Ratio | 0.8 - 1.2 | Weekly |
| **Error Rate** | % of errors | ≤ 5% | Daily |
| **False Positive Rate** | % of false positives | ≤ 10% | Daily |
| **False Negative Rate** | % of false negatives | ≤ 5% | Daily |
| **Model Drift** | Statistical drift score | ≤ 0.1 | Weekly |
| **Data Quality** | % of valid data | ≥ 98% | Daily |
| **System Availability** | Uptime % | ≥ 99.5% | Real-time |
| **Response Time** | Average latency (ms) | ≤ 500ms | Real-time |
| **Human Override Rate** | % of AI decisions overridden | ≤ 10% | Weekly |
| **Incident Count** | # of incidents | 0 serious incidents | Real-time |
| **Control Failure Rate** | % of control failures | 0% | Daily |

1.3. **Risk-Specific KRIs:**

For each risk, define specific KRIs based on risk type:

**Bias Risk KRIs:**
- Disparate impact ratio by protected characteristic
- Fairness metrics (demographic parity, equal opportunity)
- Bias complaints received

**Safety Risk KRIs:**
- Near-miss incidents
- Safety violations
- Harm events

**Security Risk KRIs:**
- Failed authentication attempts
- Unauthorized access attempts
- Security vulnerabilities detected

**Compliance Risk KRIs:**
- Compliance violations
- Regulatory inquiries
- Audit findings

1.4. Document KRIs in Risk Monitoring Configuration (CFG-AI-RM-001)

1.5. Obtain AI System Owner approval for KRIs and thresholds

**Duration:** 2-3 days per AI system

**Input Documents:**
- Risk Register (REC-AI-RM-003)
- Controls Register (REC-AI-CTRL-001)
- AI system performance data

**Output Documents:**
- Risk Monitoring Configuration (CFG-AI-RM-001)
- KRI Definition Document (DOC-AI-RM-001)

**Success Criteria:**
- KRIs defined for all risks
- Thresholds set appropriately
- Data sources identified
- Monitoring frequency defined
- AI System Owner approval obtained

---

### **STEP 2: Configure Monitoring Tools**

**Objective:** Set up automated monitoring infrastructure

**Actions:**
2.1. **Select Monitoring Tools:**
     - Risk management software
     - Application Performance Monitoring (APM)
     - Log aggregation and analysis
     - Bias detection tools
     - Dashboard and visualization tools

2.2. **Configure Data Collection:**
     - Integrate with AI system APIs
     - Configure log collection
     - Set up metric collection agents
     - Configure data pipelines
     - Test data flow

2.3. **Configure KRI Calculations:**
     - Implement KRI calculation logic
     - Set up aggregation rules
     - Configure rolling windows (daily, weekly, monthly)
     - Test calculations

2.4. **Configure Alerting:**
     - Set up alert rules for each KRI
     - Define alert levels:
       - **Green:** Within threshold (no action)
       - **Yellow:** Warning threshold (investigate)
       - **Red:** Critical threshold (immediate action)
     - Configure alert recipients
     - Set up alert channels (email, SMS, dashboard)
     - Test alerting

2.5. **Create Monitoring Dashboard:**
     - Design dashboard layout
     - Add KRI widgets
     - Add trend charts
     - Add alert summary
     - Add risk heat map
     - Configure refresh frequency
     - Set up access controls

2.6. **Configure Automated Reports:**
     - Daily monitoring summary
     - Weekly risk indicator report
     - Monthly risk review report
     - Quarterly comprehensive report

2.7. Test monitoring infrastructure end-to-end

2.8. Document monitoring configuration

**Duration:** 1-2 weeks per AI system

**Input Documents:**
- Risk Monitoring Configuration (CFG-AI-RM-001)
- KRI Definition Document
- Monitoring tool documentation

**Output Documents:**
- Monitoring Tool Configuration (CFG-AI-MON-001)
- Monitoring Dashboard (DASH-AI-RM-001)
- Alert Configuration (CFG-AI-ALERT-001)
- Monitoring Test Results (TEST-AI-MON-001)

**Success Criteria:**
- Monitoring tools configured
- Data collection operational
- KRI calculations accurate
- Alerting functional
- Dashboard accessible
- End-to-end testing passed

---

### **STEP 3: Conduct Daily Monitoring Review**

**Objective:** Review automated monitoring results daily

**Actions:**
3.1. **Each Business Day:**
     - Log into monitoring dashboard
     - Review overnight alerts
     - Check KRI status (Green/Yellow/Red)
     - Review trend charts
     - Identify anomalies

3.2. **For Yellow Alerts (Warning):**
     - Investigate cause
     - Document findings
     - Monitor closely
     - Escalate if worsens

3.3. **For Red Alerts (Critical):**
     - Investigate immediately
     - Notify risk owner
     - Notify AI System Owner
     - Initiate incident response (if applicable)
     - Document actions taken
     - Escalate to AI Risk Manager

3.4. **Review Key Metrics:**
     - Model accuracy
     - Error rate
     - System availability
     - Any critical KRIs

3.5. **Document Daily Review:**
     - Date and time
     - Reviewer name
     - Alerts reviewed
     - Actions taken
     - Issues escalated

3.6. **Update Risk Register if needed:**
     - New risks identified
     - Risk scores changed
     - Control failures detected

**Duration:** 15-30 minutes per day

**Input Documents:**
- Monitoring Dashboard
- Alert notifications
- Risk Register

**Output Documents:**
- Daily Monitoring Log (REC-AI-RM-027)
- Alert Investigation Records (REC-AI-ALERT-001)

**Success Criteria:**
- Daily review completed
- All alerts addressed
- Critical issues escalated
- Documentation complete

---

### **STEP 4: Conduct Weekly Risk Review**

**Objective:** Review risk indicators and trends weekly

**Actions:**
4.1. **Every Monday (or designated day):**
     - Review weekly KRI summary report
     - Analyze trends (week-over-week)
     - Identify emerging risks
     - Review control performance

4.2. **KRI Trend Analysis:**
     - Compare current week to previous week
     - Identify upward/downward trends
     - Identify seasonal patterns
     - Flag concerning trends

4.3. **Review Specific KRIs:**
     - Bias metrics (disparate impact)
     - Model drift indicators
     - Human override rate
     - Control failure rate

4.4. **Review Open Issues:**
     - Outstanding alerts
     - Ongoing investigations
     - Pending corrective actions

4.5. **Prepare Weekly Risk Summary:**
     - KRI status summary
     - Trends identified
     - Issues and actions
     - Recommendations

4.6. **Distribute to Stakeholders:**
     - AI System Owner
     - Risk owners
     - Control owners

**Duration:** 1-2 hours per week

**Input Documents:**
- Weekly KRI Report (auto-generated)
- Daily Monitoring Logs
- Alert Investigation Records

**Output Documents:**
- Weekly Risk Summary (RPT-AI-RM-009)
- Trend Analysis Charts

**Success Criteria:**
- Weekly review completed
- Trends analyzed
- Issues identified
- Summary distributed

---

### **STEP 5: Conduct Monthly Risk Review**

**Objective:** Comprehensive monthly review of risk register and risk management activities

**Actions:**
5.1. **Schedule Monthly Risk Review Meeting:**
     - Attendees: AI System Owner, AI Risk Manager, Risk Owners
     - Duration: 1-2 hours
     - Agenda distributed in advance

5.2. **Review Risk Register:**
     - Review all risks (line by line)
     - Update risk scores if changed
     - Review control effectiveness
     - Identify new risks
     - Close resolved risks

5.3. **Review Risk Indicators:**
     - Month-over-month comparison
     - Threshold breach analysis
     - Alert frequency analysis
     - Control performance metrics

5.4. **Review Risk Treatment Progress:**
     - Open risk treatment plans
     - Implementation status
     - Delays or blockers
     - Resource needs

5.5. **Review Incidents:**
     - Incidents occurred this month
     - Root cause analysis
     - Corrective actions
     - Lessons learned

5.6. **Identify New Risks:**
     - Changes to AI system
     - New regulations
     - Industry incidents
     - Stakeholder concerns

5.7. **Update Risk Register:**
     - Risk scores
     - Risk status
     - Control effectiveness
     - Next review dates
     - New risks added

5.8. **Prepare Monthly Risk Report:**
     - Executive summary
     - Risk register summary
     - KRI performance
     - Incidents and issues
     - New risks identified
     - Recommendations
     - Action items

5.9. **Distribute Monthly Report:**
     - AI System Owner
     - Product Director
     - AI Governance Committee
     - Risk owners

**Duration:** 1 day (including meeting and report)

**Input Documents:**
- Risk Register
- Weekly Risk Summaries (4 weeks)
- Incident Reports
- Control Performance Data

**Output Documents:**
- Monthly Risk Review Meeting Minutes (REC-AI-RM-028)
- Updated Risk Register
- Monthly Risk Report (RPT-AI-RM-011)
- Action Item Tracker (REC-AI-RM-029)

**Success Criteria:**
- Monthly review meeting held
- Risk Register updated
- Monthly report prepared and distributed
- Action items assigned

---

### **STEP 6: Conduct Quarterly Comprehensive Review**

**Objective:** Comprehensive quarterly assessment of risk management effectiveness

**Actions:**
6.1. **Schedule Quarterly Risk Review:**
     - Attendees: AI Governance Committee, AI System Owner, AI Risk Manager, Product Director
     - Duration: 2-3 hours
     - Materials distributed 1 week in advance

6.2. **Prepare Quarterly Risk Report:**

**Section 1: Executive Summary**
- Overall risk profile
- Key changes this quarter
- Critical issues
- Recommendations

**Section 2: Risk Register Analysis**
- Total risks by level
- Risk level distribution (pie chart)
- Risk trend (quarter-over-quarter)
- New risks added
- Risks closed
- Top 10 risks

**Section 3: KRI Performance**
- KRI dashboard (all KRIs)
- Threshold breach analysis
- Trend analysis (3-month)
- KRI effectiveness assessment

**Section 4: Control Effectiveness**
- Controls tested this quarter
- Control test results
- Control failures
- Control improvements

**Section 5: Incident Analysis**
- Incidents this quarter
- Incident severity distribution
- Root causes
- Corrective actions
- Lessons learned

**Section 6: Risk Treatment Progress**
- Treatment plans in progress
- Treatment plans completed
- Delays and blockers
- Budget utilization

**Section 7: Emerging Risks**
- Industry trends
- Regulatory changes
- Technology changes
- Stakeholder concerns

**Section 8: Risk Management Effectiveness**
- Effectiveness metrics (from STD-AI-002)
- Gaps identified
- Improvement recommendations

**Section 9: Action Plan**
- Priority actions
- Owners and deadlines
- Resource requirements

6.3. **Conduct Quarterly Review Meeting:**
     - Present quarterly report
     - Discuss critical risks
     - Review risk appetite and tolerance
     - Approve risk register changes
     - Approve action plan

6.4. **Document Decisions:**
     - Risk register approvals
     - Risk treatment approvals
     - Budget approvals
     - Action item assignments

6.5. **Update Risk Management Framework:**
     - Update KRI thresholds if needed
     - Update risk assessment methodology if needed
     - Update monitoring procedures if needed

**Duration:** 3-5 days (preparation + meeting + follow-up)

**Input Documents:**
- Monthly Risk Reports (3 months)
- Risk Register
- Control Testing Reports
- Incident Reports
- Risk Management Effectiveness Metrics

**Output Documents:**
- Quarterly Risk Report (RPT-AI-RM-012)
- Quarterly Review Meeting Minutes (REC-AI-RM-030)
- Updated Risk Register (approved by AI Governance Committee)
- Quarterly Action Plan (PLAN-AI-RM-001)

**Success Criteria:**
- Quarterly report prepared
- Review meeting held
- AI Governance Committee approval obtained
- Action plan approved
- Documentation complete

---

### **STEP 7: Conduct Annual Risk Assessment**

**Objective:** Complete reassessment of all AI risks annually

**Actions:**
7.1. **Trigger Annual Risk Assessment:**
     - 12 months since last assessment
     - Or significant changes to AI system
     - Or major regulatory changes

7.2. **Execute PROC-AI-RM-001 (Risk Assessment Procedure):**
     - Conduct full risk identification
     - Reassess all existing risks
     - Identify new risks
     - Update risk scores
     - Update risk register

7.3. **Compare to Previous Assessment:**
     - Risk profile changes
     - New risks emerged
     - Risks eliminated
     - Risk score changes

7.4. **Assess Risk Management Effectiveness:**
     - Review effectiveness metrics
     - Identify improvements needed
     - Update risk management framework

7.5. **Prepare Annual Risk Assessment Report:**
     - Comprehensive risk assessment
     - Year-over-year comparison
     - Effectiveness assessment
     - Recommendations

7.6. **Present to AI Governance Committee:**
     - Annual risk assessment results
     - Risk management effectiveness
     - Improvement recommendations
     - Budget requirements

**Duration:** 2-3 weeks

**Input Documents:**
- Previous Risk Assessment Report
- Quarterly Risk Reports (4 quarters)
- Risk Register
- Risk Management Effectiveness Metrics

**Output Documents:**
- Annual Risk Assessment Report (RPT-AI-RM-013)
- Updated Risk Register
- Annual Risk Management Effectiveness Report (RPT-AI-RM-010)

**Success Criteria:**
- Annual assessment completed
- Risk register updated
- Effectiveness assessed
- AI Governance Committee approval obtained

---

### **STEP 8: Conduct Event-Triggered Reviews**

**Objective:** Review risks when significant events occur

**Actions:**
8.1. **Trigger Events:**
     - **Incident Occurrence:** Any risk-related incident
     - **Substantial Modification:** Changes to AI system
     - **Regulatory Change:** New AI Act guidance or regulations
     - **New Risk Identified:** Discovery of new risk
     - **Control Failure:** Failure of risk control
     - **Threshold Breach:** Multiple or severe KRI breaches

8.2. **For Each Trigger Event:**
     - Assess impact on risk profile
     - Conduct targeted risk assessment
     - Update risk register
     - Implement corrective actions
     - Communicate to stakeholders

8.3. **Incident-Triggered Review:**
     - Investigate incident
     - Identify related risks
     - Assess if risk score should change
     - Assess if new risks emerged
     - Update risk register
     - Implement corrective actions
     - Document lessons learned

8.4. **Substantial Modification Review:**
     - Assess modification impact
     - Identify new risks
     - Reassess affected risks
     - Update risk register
     - Obtain approval before deployment

8.5. **Regulatory Change Review:**
     - Assess new requirements
     - Identify compliance risks
     - Update risk register
     - Implement compliance measures
     - Update documentation

8.6. **Document Event-Triggered Review:**
     - Trigger event
     - Assessment conducted
     - Findings
     - Risk register changes
     - Actions taken

**Duration:** 1-5 days depending on event

**Input Documents:**
- Incident Report (if applicable)
- Change Request (if applicable)
- Regulatory Guidance (if applicable)
- Risk Register

**Output Documents:**
- Event-Triggered Review Report (RPT-AI-RM-014)
- Updated Risk Register
- Corrective Action Plan

**Success Criteria:**
- Event assessed
- Risk impact determined
- Risk register updated
- Actions implemented
- Documentation complete

---

### **STEP 9: Maintain Risk Monitoring Documentation**

**Objective:** Ensure all monitoring activities are properly documented

**Actions:**
9.1. **Maintain Monitoring Records:**
     - Daily monitoring logs
     - Weekly risk summaries
     - Monthly risk reports
     - Quarterly risk reports
     - Annual risk assessments
     - Event-triggered reviews

9.2. **Maintain Risk Register:**
     - Keep current and accurate
     - Update after each review
     - Version control
     - Archive old versions

9.3. **Maintain KRI Data:**
     - Store KRI measurements
     - Retain for 10 years
     - Enable trend analysis
     - Enable audit trail

9.4. **Maintain Alert Records:**
     - All alerts generated
     - Investigation records
     - Actions taken
     - Resolution status

9.5. **Organize Documentation:**
     - Store in SharePoint/GRC system
     - Follow naming conventions
     - Enable searchability
     - Control access

9.6. **Retention:**
     - All risk monitoring records: 10 years
     - KRI data: 10 years
     - Risk registers: 10 years
     - Reports: 10 years

**Duration:** Ongoing

**Input Documents:**
- All monitoring outputs

**Output Documents:**
- Organized documentation repository
- Document index
- Retention schedule

**Success Criteria:**
- All records maintained
- Documentation organized
- Retention schedule followed
- Audit trail available

---

## 6. INPUT / OUTPUT DOCUMENTS

### 6.1 Input Documents

| Document ID | Document Name | Source | Format |
|-------------|---------------|--------|--------|
| REC-AI-RM-003 | AI Risk Register | PROC-AI-RM-002 | Excel/Database |
| REC-AI-CTRL-001 | Controls Register | PROC-AI-RM-002 | Excel/Database |
| CFG-AI-RM-001 | Risk Monitoring Configuration | AI Risk Manager | Word/Excel |

### 6.2 Output Documents

| Document ID | Document Name | Owner | Format | Retention |
|-------------|---------------|-------|--------|-----------|
| CFG-AI-RM-001 | Risk Monitoring Configuration | AI Risk Manager | Word/Excel | 10 years |
| DOC-AI-RM-001 | KRI Definition Document | AI Risk Manager | Word | 10 years |
| CFG-AI-MON-001 | Monitoring Tool Configuration | AI Risk Manager | Word | 10 years |
| DASH-AI-RM-001 | Monitoring Dashboard | AI Risk Manager | Web/BI Tool | N/A (live) |
| REC-AI-RM-027 | Daily Monitoring Log | AI Risk Manager | Excel/Database | 10 years |
| REC-AI-ALERT-001 | Alert Investigation Records | Risk Owner | Word | 10 years |
| RPT-AI-RM-009 | Weekly Risk Summary | AI Risk Manager | Word/PDF | 10 years |
| REC-AI-RM-028 | Monthly Risk Review Meeting Minutes | AI Risk Manager | Word | 10 years |
| RPT-AI-RM-011 | Monthly Risk Report | AI Risk Manager | Word/PDF | 10 years |
| REC-AI-RM-029 | Action Item Tracker | AI Risk Manager | Excel | 10 years |
| RPT-AI-RM-012 | Quarterly Risk Report | AI Risk Manager | Word/PDF | 10 years |
| REC-AI-RM-030 | Quarterly Review Meeting Minutes | AI Risk Manager | Word | 10 years |
| RPT-AI-RM-013 | Annual Risk Assessment Report | AI Risk Manager | Word/PDF | 10 years |
| RPT-AI-RM-010 | Annual Risk Management Effectiveness Report | AI Risk Manager | Word/PDF | 10 years |
| RPT-AI-RM-014 | Event-Triggered Review Report | AI Risk Manager | Word/PDF | 10 years |

---

## 7. TOOLS / SYSTEMS USED

| Tool / System | Purpose | Access Required |
|---------------|---------|-----------------|
| **Risk Management Software** | Track risks and KRIs | Read/Write access |
| **Monitoring Dashboard** | Visualize KRIs and alerts | Read access |
| **APM Tools** | Monitor application performance | Read access |
| **Log Analysis Tools** | Analyze system logs | Read access |
| **Bias Detection Tools** | Monitor fairness metrics | Read access |
| **Alerting System** | Send alerts | Admin access |
| **Reporting Tools** | Generate reports | Read access |
| **SharePoint** | Store monitoring documentation | Read/Write access |

---

## 8. KPIs / SUCCESS CRITERIA

| KPI | Target | Measurement | Frequency |
|-----|--------|-------------|-----------|
| **Daily Monitoring Completion** | 100% | % of business days with completed review | Monthly |
| **Alert Response Time** | < 4 hours | Average time from alert to investigation | Monthly |
| **Critical Alert Resolution** | < 24 hours | Average time to resolve critical alerts | Monthly |
| **Monthly Review Completion** | 100% | % of months with completed review | Quarterly |
| **Quarterly Review Completion** | 100% | % of quarters with completed review | Annually |
| **Risk Register Currency** | 100% | % of risks reviewed within schedule | Monthly |
| **KRI Availability** | ≥ 99% | % of time KRIs are available | Monthly |

---

## 9. EXCEPTION HANDLING

### 9.1 Common Exceptions

| Exception | Handling Procedure |
|-----------|-------------------|
| **Monitoring tool unavailable** | - Use manual monitoring<br>- Check backup systems<br>- Escalate to IT<br>- Document outage |
| **KRI data missing** | - Investigate data source<br>- Use alternative data<br>- Document gap<br>- Restore data collection |
| **Alert storm (too many alerts)** | - Triage by severity<br>- Investigate root cause<br>- Adjust thresholds if needed<br>- Escalate to AI Risk Manager |
| **Risk owner unavailable** | - Assign backup owner<br>- Proceed with review<br>- Brief primary owner when available |
| **Significant risk change** | - Conduct immediate assessment<br>- Update risk register<br>- Notify AI System Owner<br>- Escalate if critical |

### 9.2 Escalation

**Escalate to AI Risk Manager immediately if:**
- Critical KRI threshold breached
- Multiple KRI thresholds breached
- Monitoring tool failure
- Significant risk score change
- New critical risk identified

**Escalate to AI Governance Committee immediately if:**
- Critical risk emerges
- Serious incident occurs
- Regulatory violation suspected
- Risk profile significantly changes

---

## 10. APPROVAL AND AUTHORIZATION

### 10.1 Approval Signatures

| Role | Name | Title | Signature | Date |
|------|------|-------|-----------|------|
| **Prepared By** | Michael Chen | AI Risk Manager | _________________ | ________ |
| **Reviewed By** | Sarah Johnson | AI Act Program Manager | _________________ | ________ |
| **Reviewed By** | Jane Doe | Chief Strategy & Risk Officer (CSRO) | _________________ | ________ |
| **Approved By** | Jane Doe | AI Governance Committee Chair | _________________ | ________ |

### 10.2 Effective Date

This procedure becomes effective on **2025-08-01** following AI Governance Committee approval.

---

## 11. REVISION HISTORY

| Version | Date | Author | Changes | Approval Date |
|---------|------|--------|---------|---------------|
| 0.1 | 2025-06-28 | AI Risk Manager | Initial draft | - |
| 0.2 | 2025-07-12 | AI Risk Manager | Incorporated stakeholder feedback | - |
| 0.3 | 2025-07-23 | AI Risk Manager | Added KRI definitions | - |
| 1.0 | 2025-08-01 | AI Risk Manager | Final version approved | 2025-07-25 |

---

**END OF PROCEDURE**

---

## APPENDICES

### APPENDIX A: Risk Monitoring Process Flowchart

```
[Continuous] → [Daily Review] → [Weekly Review] → [Monthly Review] → [Quarterly Review]
     ↓              ↓                ↓                  ↓                    ↓
[Real-time    [Alert        [Trend           [Risk Register    [Comprehensive
 Monitoring]   Response]     Analysis]        Update]           Assessment]
     ↓
[Event-Triggered Reviews] → [Annual Risk Assessment]
```

### APPENDIX B: KRI Dashboard Template

*[To be developed as separate document]*

### APPENDIX C: Risk Monitoring Checklist

*[To be developed as separate template document]*

---

**This procedure provides step-by-step instructions for monitoring AI risks. Use in conjunction with STD-AI-002 (AI Risk Management Standard) and other risk management procedures.**
# AI Risk Communication Procedure

**Document Type:** Procedure (SOP)  
**Procedure ID / Number:** PROC-AI-RM-004  
**Procedure Title:** AI Risk Communication Procedure  
**Version:** 1.0  
**Effective Date:** 2025-08-01  
**Next Review Date:** 2026-08-01  
**Review Frequency:** Annually or after regulatory change  
**Parent Standard:** STD-AI-002 - AI Risk Management Standard  
**Owner:** AI Risk Manager  
**Approved By:** AI Governance Committee Chair  
**Status:** Draft  

---

## DOCUMENT CONTROL

| Element | Details |
|---------|---------|
| **Procedure Title** | AI Risk Communication Procedure |
| **Procedure ID / Number** | PROC-AI-RM-004 |
| **Version** | 1.0 |
| **Effective Date** | 2025-08-01 |
| **Next Review Date** | 2026-08-01 |
| **Review Frequency** | Annually or after regulatory change |
| **Parent Standard** | STD-AI-002 - AI Risk Management Standard |
| **Owner** | Michael Chen, AI Risk Manager |
| **Approved By** | Jane Doe, AI Governance Committee Chair |
| **Classification** | Internal Use Only |

---

## 1. PURPOSE

This procedure defines the process for communicating AI risks to internal and external stakeholders, including risk reporting, stakeholder engagement, and regulatory communications in compliance with EU AI Act Articles 13 (transparency), 50 (transparency obligations), and 73 (serious incident reporting).

---

## 2. SCOPE

### 2.1 Applicability

This procedure applies to:
- **Mandatory:** All AI risk communication activities
- **Mandatory:** All high-risk AI systems (EU AI Act requirements)
- **Mandatory:** Serious incident communications (Article 73)
- All internal and external stakeholder communications about AI risks

### 2.2 Communication Types

| Communication Type | Audience | Frequency | Trigger |
|-------------------|----------|-----------|---------|
| **Risk Reports** | Internal stakeholders | Monthly/Quarterly | Scheduled |
| **Risk Escalations** | Management | Ad-hoc | Risk threshold breach |
| **Instructions for Use** | Deployers | At deployment | Product release |
| **Transparency Notices** | End users | Continuous | AI interaction |
| **Serious Incident Reports** | Regulators | Within 15 days | Serious incident |
| **Risk Briefings** | AI Governance Committee | Quarterly | Scheduled |
| **Stakeholder Updates** | Affected persons | As needed | Risk changes |

---

## 3. PRECONDITIONS / PREREQUISITES

Before executing risk communications, ensure the following are in place:

- [ ] Risk assessment completed (PROC-AI-RM-001)
- [ ] Risk register current and accurate
- [ ] Stakeholder list identified
- [ ] Communication templates available
- [ ] Approval process defined
- [ ] Communication channels established
- [ ] Legal review process in place (for external communications)

---

## 4. ROLES & RESPONSIBILITIES

| Role | Responsibility | RACI |
|------|---------------|------|
| **AI Risk Manager** | Prepares risk communications; coordinates distribution; tracks delivery | **R** (Responsible) |
| **AI System Owner** | Approves risk communications; ensures accuracy | **A** (Accountable) |
| **Product Director** | Approves external communications; manages deployer relationships | **A** (Accountable for external) |
| **Legal & Compliance** | Reviews regulatory communications; ensures compliance | **C** (Consulted) |
| **Communications Team** | Assists with external communications; manages messaging | **C** (Consulted) |
| **AI Governance Committee** | Receives risk reports; approves critical communications | **I** (Informed) |
| **Regulators** | Receives serious incident reports; receives compliance communications | **I** (Informed) |

---

## 5. STEP-BY-STEP PROCESS

### **STEP 1: Identify Stakeholders**

**Objective:** Identify all stakeholders who need to receive risk communications

**Actions:**
1.1. **Identify Internal Stakeholders:**

| Stakeholder Group | Communication Needs | Frequency |
|------------------|---------------------|-----------|
| **AI Governance Committee** | Strategic risk overview, critical risks, decisions needed | Quarterly + ad-hoc |
| **Executive Committee** | High-level risk summary, business impact | Quarterly |
| **Board of Directors** | Enterprise risk profile, regulatory risks | Annually |
| **AI System Owner** | Detailed risk information, treatment status | Monthly |
| **Product Directors** | Product-specific risks, customer impact | Monthly |
| **Risk Owners** | Assigned risk details, treatment responsibilities | Weekly |
| **Control Owners** | Control performance, failures, improvements | Weekly |
| **Data Science / AI Engineering** | Technical risks, mitigation requirements | As needed |
| **Legal & Compliance** | Compliance risks, regulatory requirements | Monthly |
| **Internal Audit** | Risk management effectiveness, audit findings | Quarterly |

1.2. **Identify External Stakeholders:**

| Stakeholder Group | Communication Needs | Frequency |
|------------------|---------------------|-----------|
| **Deployers** | Instructions for Use, known risks, limitations | At deployment + updates |
| **End Users** | Transparency notices, AI disclosure, rights | Continuous |
| **Affected Persons** | How AI affects them, their rights | At interaction |
| **Regulators (Competent Authorities)** | Serious incidents, compliance status | As required |
| **Notified Bodies** | Conformity assessment, risk information | During assessment |
| **Customers** | Product risks, safety information | As needed |
| **Partners / Vendors** | Shared risks, contractual obligations | As needed |

1.3. **Document Stakeholder Matrix:**
     - Stakeholder name/group
     - Communication needs
     - Preferred communication method
     - Frequency
     - Contact information
     - Language requirements

1.4. Create Stakeholder Communication Matrix (MATRIX-AI-RM-001)

1.5. Obtain AI System Owner approval of stakeholder list

**Duration:** 1-2 days per AI system

**Input Documents:**
- AI System Register
- Risk Register
- Organizational chart
- Customer/partner lists

**Output Documents:**
- Stakeholder Communication Matrix (MATRIX-AI-RM-001)
- Stakeholder Contact List (LIST-AI-RM-001)

**Success Criteria:**
- All stakeholders identified
- Communication needs defined
- Contact information verified
- AI System Owner approval obtained

---

### **STEP 2: Determine Communication Requirements**

**Objective:** Define what information each stakeholder needs and how to communicate it

**Actions:**
2.1. **For Each Stakeholder Group, Define:**

**A. Content Requirements:**
- What risk information is needed?
- Level of detail required?
- Technical vs. non-technical language?
- Regulatory requirements?

**B. Format Requirements:**
- Report format (Word, PDF, PowerPoint)
- Dashboard or visualization?
- Email or portal?
- Meeting presentation?

**C. Frequency Requirements:**
- How often to communicate?
- Scheduled or event-triggered?
- Real-time or batch?

**D. Delivery Requirements:**
- Communication channel (email, portal, meeting)
- Delivery method (push or pull)
- Acknowledgment required?
- Language requirements?

2.2. **Map to EU AI Act Requirements:**

**Article 13 - Transparency and Information Provision (for Deployers):**
- Intended purpose and limitations
- Level of accuracy and metrics
- Known risks and mitigation measures
- Human oversight requirements
- Expected lifetime and maintenance
- Instructions for use

**Article 50 - Transparency Obligations (for Users):**
- Clear disclosure of AI use
- Explanation of AI decision-making
- User rights (e.g., human review)
- How to exercise rights

**Article 73 - Serious Incident Reporting (for Regulators):**
- Incident description
- AI system identification
- Nature and cause of incident
- Corrective measures taken
- Timeline of events

2.3. **Create Communication Requirements Document:**
     - Stakeholder group
     - Content requirements
     - Format requirements
     - Frequency requirements
     - Delivery requirements
     - Regulatory requirements
     - Approval requirements

2.4. Document in Communication Requirements Specification (SPEC-AI-COMM-001)

**Duration:** 2-3 days

**Input Documents:**
- Stakeholder Communication Matrix
- EU AI Act Articles 13, 50, 73
- Regulatory guidance

**Output Documents:**
- Communication Requirements Specification (SPEC-AI-COMM-001)

**Success Criteria:**
- Requirements defined for all stakeholder groups
- EU AI Act requirements mapped
- Format and delivery defined
- Approval process defined

---

### **STEP 3: Develop Communication Materials**

**Objective:** Create templates and materials for each communication type

**Actions:**
3.1. **Develop Internal Risk Reports:**

**A. Monthly Risk Report Template (TMPL-AI-RISK-RPT-001):**
- Executive summary (1 page)
- Risk register summary
- New risks identified
- Risk treatment progress
- KRI performance
- Incidents and issues
- Action items

**B. Quarterly Risk Report Template (TMPL-AI-RISK-RPT-002):**
- Executive summary (2 pages)
- Risk profile analysis
- Risk trends (quarter-over-quarter)
- Control effectiveness
- Incident analysis
- Risk management effectiveness
- Recommendations
- Action plan

**C. Risk Escalation Template (TMPL-AI-RISK-ESC-001):**
- Risk description
- Current risk score
- Why escalating
- Impact if not addressed
- Recommended actions
- Decision needed
- Timeline

**D. Risk Dashboard (DASH-AI-RISK-001):**
- Risk heat map
- Top 10 risks
- KRI status
- Trend charts
- Alert summary

3.2. **Develop External Communications:**

**A. Instructions for Use Template (TMPL-AI-IFU-001):**
Per EU AI Act Article 13:
- AI system description
- Intended purpose
- Limitations and restrictions
- Known risks and mitigation
- Level of accuracy
- Human oversight requirements
- Technical specifications
- Installation and operation
- Maintenance requirements
- Expected lifetime
- Contact information

**B. Transparency Notice Template (TMPL-AI-TRANS-001):**
Per EU AI Act Article 50:
- Clear AI disclosure
- Purpose of AI use
- How AI makes decisions
- User rights
- How to exercise rights
- Contact for questions

**C. Serious Incident Report Template (TMPL-AI-INC-001):**
Per EU AI Act Article 73:
- Incident identification
- AI system details
- Date and time of incident
- Description of incident
- Nature and cause
- Persons affected
- Corrective measures taken
- Preventive measures planned
- Timeline
- Contact information

3.3. **Develop Stakeholder-Specific Materials:**
     - Board presentation template
     - Executive summary template
     - Technical briefing template
     - Customer communication template
     - Partner communication template

3.4. **Obtain Legal Review:**
     - Review all external communication templates
     - Ensure regulatory compliance
     - Verify disclosure adequacy
     - Approve messaging

3.5. **Obtain AI Governance Committee Approval:**
     - Review all templates
     - Approve content and format
     - Approve distribution process

**Duration:** 1-2 weeks

**Input Documents:**
- Communication Requirements Specification
- EU AI Act Articles 13, 50, 73
- Risk Register
- AI system documentation

**Output Documents:**
- Monthly Risk Report Template (TMPL-AI-RISK-RPT-001)
- Quarterly Risk Report Template (TMPL-AI-RISK-RPT-002)
- Risk Escalation Template (TMPL-AI-RISK-ESC-001)
- Instructions for Use Template (TMPL-AI-IFU-001)
- Transparency Notice Template (TMPL-AI-TRANS-001)
- Serious Incident Report Template (TMPL-AI-INC-001)
- Template Approval Records (REC-AI-COMM-001)

**Success Criteria:**
- All templates developed
- Legal review completed
- AI Governance Committee approval obtained
- Templates ready for use

---

### **STEP 4: Deliver Scheduled Communications**

**Objective:** Execute scheduled risk communications per defined frequency

**Actions:**
4.1. **Monthly Risk Report (Internal):**

**Preparation (Day 1-2 of month):**
- Extract data from Risk Register
- Extract KRI data from monitoring system
- Compile incident data
- Prepare report using template
- Review for accuracy

**Review and Approval (Day 3-4):**
- AI Risk Manager reviews
- AI System Owner reviews and approves
- Make any corrections

**Distribution (Day 5):**
- Distribute to stakeholder list
- Email to recipients
- Post to risk management portal
- Schedule review meeting if needed

**Follow-up (Day 6-10):**
- Track receipt/acknowledgment
- Answer questions
- Schedule follow-up discussions

4.2. **Quarterly Risk Report (Internal):**

**Preparation (Week 1 of quarter):**
- Compile 3 months of data
- Analyze trends
- Prepare comprehensive report
- Prepare presentation for AI Governance Committee

**Review and Approval (Week 2):**
- AI Risk Manager reviews
- AI System Owner reviews
- Product Director reviews
- Legal reviews (if needed)
- Obtain approvals

**Distribution (Week 2-3):**
- Distribute report to stakeholders
- Present to AI Governance Committee
- Obtain Committee approval
- Distribute approved version

**Follow-up (Week 3-4):**
- Track action items
- Schedule follow-up meetings
- Update risk register based on decisions

4.3. **Annual Risk Report (Internal):**

**Preparation (Month 1 of year):**
- Compile full year data
- Conduct annual risk assessment
- Prepare comprehensive report
- Prepare Board presentation

**Review and Approval (Month 1-2):**
- Multiple stakeholder reviews
- Legal review
- Executive Committee review
- Obtain approvals

**Distribution (Month 2):**
- Present to Board of Directors
- Distribute to Executive Committee
- Distribute to AI Governance Committee
- Publish to risk portal

4.4. **Instructions for Use (External):**

**Preparation (Before deployment):**
- Compile AI system information
- Document known risks
- Document limitations
- Prepare Instructions for Use per Article 13

**Review and Approval:**
- Technical review (accuracy)
- Legal review (compliance)
- Product Director approval
- AI Governance Committee approval (for high-risk)

**Distribution (At deployment):**
- Provide to deployers
- Include in product documentation
- Post to customer portal
- Provide in required languages

**Updates (As needed):**
- Update when risks change
- Update when system modified
- Redistribute to deployers

4.5. **Transparency Notices (External):**

**Preparation:**
- Draft transparency notice per Article 50
- Ensure clear AI disclosure
- Explain user rights

**Review and Approval:**
- Legal review
- Communications team review
- Product Director approval

**Distribution (Continuous):**
- Display in user interface
- Include in user documentation
- Post on website
- Provide at point of interaction

**Updates:**
- Update when AI use changes
- Update when regulations change

**Duration:** Varies by communication type

**Input Documents:**
- Risk Register
- KRI data
- Incident reports
- AI system documentation

**Output Documents:**
- Monthly Risk Reports (RPT-AI-RM-011)
- Quarterly Risk Reports (RPT-AI-RM-012)
- Annual Risk Reports (RPT-AI-RM-013)
- Instructions for Use (TECH-AI-IFU-XXX)
- Transparency Notices (NOTICE-AI-TRANS-XXX)
- Distribution Records (REC-AI-COMM-002)

**Success Criteria:**
- Communications delivered on schedule
- All required approvals obtained
- Distribution tracked
- Acknowledgments received

---

### **STEP 5: Deliver Event-Triggered Communications**

**Objective:** Communicate risks when specific events occur

**Actions:**
5.1. **Risk Escalation Communication:**

**Trigger:** Risk threshold breach, new critical risk, unacceptable residual risk

**Process:**
- Prepare risk escalation using template
- Include risk details, impact, recommended actions
- Obtain AI Risk Manager approval
- Escalate to appropriate level:
  - Medium risk → AI System Owner
  - High risk → Product Director
  - Critical risk → AI Governance Committee
- Track escalation response
- Document decision

5.2. **Serious Incident Communication (Article 73):**

**Trigger:** Serious incident occurs (death, serious harm, fundamental rights violation, etc.)

**Process (URGENT - within 15 days):**

**Immediate Actions (Day 0-1):**
- Assess if incident meets "serious" criteria
- Notify AI System Owner immediately
- Notify AI Governance Committee immediately
- Notify Legal immediately
- Initiate incident response

**Preparation (Day 1-3):**
- Gather incident details
- Investigate root cause
- Document corrective measures
- Prepare Serious Incident Report per Article 73

**Review and Approval (Day 3-5):**
- Legal review (mandatory)
- AI Governance Committee review
- Executive approval
- Finalize report

**Regulatory Notification (Day 5-10):**
- Submit to competent authority
- Use official reporting channel
- Provide all required information
- Obtain confirmation of receipt

**Follow-up (Day 10-15):**
- Respond to authority questions
- Provide additional information if requested
- Document all communications
- Track regulatory response

**Internal Communication:**
- Notify affected stakeholders
- Brief AI Governance Committee
- Update risk register
- Implement corrective actions

5.3. **Risk Change Communication:**

**Trigger:** Significant risk score change, new risk identified, risk eliminated

**Process:**
- Document risk change
- Assess stakeholder impact
- Prepare risk change notification
- Obtain approval
- Distribute to affected stakeholders
- Update Instructions for Use (if external impact)

5.4. **Regulatory Inquiry Response:**

**Trigger:** Inquiry from competent authority

**Process:**
- Acknowledge inquiry immediately
- Assess information requested
- Gather required information
- Prepare response
- Legal review (mandatory)
- Executive approval
- Submit response within deadline
- Document communication

**Duration:** Varies by event (1 hour to 15 days)

**Input Documents:**
- Risk Register
- Incident Report
- Regulatory inquiry
- Risk change documentation

**Output Documents:**
- Risk Escalation Communications (COMM-AI-ESC-XXX)
- Serious Incident Reports (RPT-AI-INC-XXX)
- Regulatory Submissions (CORR-AI-REG-XXX)
- Risk Change Notifications (COMM-AI-CHG-XXX)
- Communication Records (REC-AI-COMM-003)

**Success Criteria:**
- Event-triggered communications sent timely
- Regulatory deadlines met (15 days for serious incidents)
- All approvals obtained
- Responses documented

---

### **STEP 6: Track Communication Delivery**

**Objective:** Ensure all communications are delivered and acknowledged

**Actions:**
6.1. **Maintain Communication Log:**
     - Communication ID
     - Communication type
     - Date sent
     - Sender
     - Recipients
     - Delivery method
     - Acknowledgment required (Yes/No)
     - Acknowledgment received (Yes/No)
     - Acknowledgment date

6.2. **Track Delivery:**
     - Email delivery confirmations
     - Portal access logs
     - Meeting attendance records
     - Document download logs

6.3. **Track Acknowledgments:**
     - Email read receipts
     - Acknowledgment forms
     - Meeting sign-in sheets
     - Training completion records

6.4. **Follow Up on Non-Delivery:**
     - Identify non-recipients
     - Resend communication
     - Use alternative delivery method
     - Escalate if critical

6.5. **Follow Up on Non-Acknowledgment:**
     - Send reminder
     - Contact directly
     - Escalate to manager
     - Document non-acknowledgment

6.6. **Report Communication Metrics:**
     - % of communications delivered on time
     - % of acknowledgments received
     - Average time to acknowledgment
     - Communication effectiveness

**Duration:** Ongoing

**Input Documents:**
- Communication distribution lists
- Delivery confirmations
- Acknowledgment records

**Output Documents:**
- Communication Log (REC-AI-COMM-004)
- Communication Metrics Report (RPT-AI-COMM-001)

**Success Criteria:**
- 100% delivery rate
- ≥ 95% acknowledgment rate
- Metrics tracked and reported
- Non-delivery/acknowledgment addressed

---

### **STEP 7: Update Communications as Needed**

**Objective:** Keep communications current and accurate

**Actions:**
7.1. **Monitor for Communication Updates:**

**Triggers for Update:**
- Risk register changes
- New risks identified
- Risk scores change
- Controls implemented
- Incidents occur
- Regulatory changes
- AI system modifications
- Stakeholder feedback

7.2. **Update Internal Communications:**
     - Update risk reports with latest data
     - Update risk dashboards
     - Update risk briefings
     - Redistribute if significant changes

7.3. **Update External Communications:**
     - Update Instructions for Use
     - Update transparency notices
     - Update customer communications
     - Notify deployers of changes
     - Obtain legal review for updates
     - Redistribute updated versions

7.4. **Version Control:**
     - Maintain version history
     - Track changes
     - Archive old versions
     - Communicate version changes

7.5. **Regulatory Updates:**
     - Monitor for new AI Act guidance
     - Update templates to reflect new requirements
     - Update communication processes
     - Retrain staff on changes

7.6. **Effectiveness Review:**
     - Gather stakeholder feedback
     - Assess communication effectiveness
     - Identify improvements
     - Update templates and processes

**Duration:** Ongoing

**Input Documents:**
- Updated Risk Register
- Stakeholder feedback
- Regulatory updates
- Incident reports

**Output Documents:**
- Updated communication materials (versioned)
- Communication Update Log (REC-AI-COMM-005)
- Version Control Records

**Success Criteria:**
- Communications kept current
- Updates distributed timely
- Version control maintained
- Stakeholder feedback incorporated

---

## 6. INPUT / OUTPUT DOCUMENTS

### 6.1 Input Documents

| Document ID | Document Name | Source | Format |
|-------------|---------------|--------|--------|
| REC-AI-RM-003 | AI Risk Register | PROC-AI-RM-001/002/003 | Excel/Database |
| RPT-AI-RM-003 | Risk Assessment Report | PROC-AI-RM-001 | Word/PDF |
| RPT-AI-INC-XXX | Incident Report | Incident Management | Word/PDF |
| AI-SYS-XXX | AI System Register | AI System Inventory | Database |

### 6.2 Output Documents

| Document ID | Document Name | Owner | Format | Retention |
|-------------|---------------|-------|--------|-----------|
| MATRIX-AI-RM-001 | Stakeholder Communication Matrix | AI Risk Manager | Excel | 10 years |
| LIST-AI-RM-001 | Stakeholder Contact List | AI Risk Manager | Excel | Current + 1 year |
| SPEC-AI-COMM-001 | Communication Requirements Specification | AI Risk Manager | Word | 10 years |
| TMPL-AI-RISK-RPT-001 | Monthly Risk Report Template | AI Risk Manager | Word | Current version |
| TMPL-AI-RISK-RPT-002 | Quarterly Risk Report Template | AI Risk Manager | Word | Current version |
| TMPL-AI-RISK-ESC-001 | Risk Escalation Template | AI Risk Manager | Word | Current version |
| TMPL-AI-IFU-001 | Instructions for Use Template | Product Director | Word | Current version |
| TMPL-AI-TRANS-001 | Transparency Notice Template | Product Director | Word | Current version |
| TMPL-AI-INC-001 | Serious Incident Report Template | AI Risk Manager | Word | Current version |
| RPT-AI-RM-011 | Monthly Risk Report | AI Risk Manager | Word/PDF | 10 years |
| RPT-AI-RM-012 | Quarterly Risk Report | AI Risk Manager | Word/PDF | 10 years |
| RPT-AI-RM-013 | Annual Risk Report | AI Risk Manager | Word/PDF | 10 years |
| TECH-AI-IFU-XXX | Instructions for Use | Product Director | PDF | 10 years |
| NOTICE-AI-TRANS-XXX | Transparency Notice | Product Director | PDF/Web | 10 years |
| RPT-AI-INC-XXX | Serious Incident Report | AI Risk Manager | PDF | 10 years |
| CORR-AI-REG-XXX | Regulatory Correspondence | Legal | PDF | 10 years |
| REC-AI-COMM-004 | Communication Log | AI Risk Manager | Excel/Database | 10 years |
| RPT-AI-COMM-001 | Communication Metrics Report | AI Risk Manager | Word/PDF | 10 years |

---

## 7. TOOLS / SYSTEMS USED

| Tool / System | Purpose | Access Required |
|---------------|---------|-----------------|
| **Risk Management Software** | Access risk data | Read access |
| **Email System** | Send communications | Standard access |
| **Risk Portal** | Publish reports and dashboards | Read/Write access |
| **Document Management** | Store communication materials | Read/Write access |
| **Regulatory Portal** | Submit regulatory reports | Admin access |
| **Customer Portal** | Publish Instructions for Use | Read/Write access |
| **Presentation Software** | Create briefings | Standard license |
| **SharePoint** | Store communication records | Read/Write access |

---

## 8. KPIs / SUCCESS CRITERIA

| KPI | Target | Measurement | Frequency |
|-----|--------|-------------|-----------|
| **Communication Timeliness** | 100% | % of communications delivered on schedule | Monthly |
| **Serious Incident Reporting** | 100% within 15 days | % of serious incidents reported within deadline | Per incident |
| **Acknowledgment Rate** | ≥ 95% | % of recipients acknowledging receipt | Monthly |
| **Communication Accuracy** | 100% | % of communications with no errors | Quarterly |
| **Stakeholder Satisfaction** | ≥ 80% | Stakeholder survey score | Annually |
| **Regulatory Compliance** | 100% | % of regulatory communications compliant | Quarterly |

---

## 9. EXCEPTION HANDLING

### 9.1 Common Exceptions

| Exception | Handling Procedure |
|-----------|-------------------|
| **Stakeholder unavailable** | - Use backup contact<br>- Document unavailability<br>- Resend when available<br>- Escalate if critical |
| **Communication delayed** | - Notify recipients of delay<br>- Provide interim update<br>- Expedite completion<br>- Document reason for delay |
| **Legal review delayed** | - Escalate to Legal manager<br>- Provide interim communication (if safe)<br>- Document delay<br>- Adjust timeline |
| **Regulatory deadline at risk** | - Escalate immediately to Executive<br>- Allocate additional resources<br>- Submit preliminary report if needed<br>- Document circumstances |
| **Communication error identified** | - Issue correction immediately<br>- Notify all recipients<br>- Document error and correction<br>- Implement preventive measures |

### 9.2 Escalation

**Escalate to AI Risk Manager immediately if:**
- Communication significantly delayed
- Error in communication identified
- Stakeholder raises concern
- Regulatory deadline at risk

**Escalate to AI Governance Committee immediately if:**
- Serious incident reporting deadline at risk
- Critical communication error
- Regulatory inquiry received
- Significant stakeholder concern

**Escalate to Legal immediately if:**
- Serious incident occurs
- Regulatory inquiry received
- Potential regulatory violation
- External communication concern

---

## 10. APPROVAL AND AUTHORIZATION

### 10.1 Approval Signatures

| Role | Name | Title | Signature | Date |
|------|------|-------|-----------|------|
| **Prepared By** | Michael Chen | AI Risk Manager | _________________ | ________ |
| **Reviewed By** | Sarah Johnson | AI Act Program Manager | _________________ | ________ |
| **Reviewed By** | Michael Brown | Chief Legal Officer | _________________ | ________ |
| **Reviewed By** | Jane Doe | Chief Strategy & Risk Officer (CSRO) | _________________ | ________ |
| **Approved By** | Jane Doe | AI Governance Committee Chair | _________________ | ________ |

### 10.2 Effective Date

This procedure becomes effective on **2025-08-01** following AI Governance Committee approval.

---

## 11. REVISION HISTORY

| Version | Date | Author | Changes | Approval Date |
|---------|------|--------|---------|---------------|
| 0.1 | 2025-06-30 | AI Risk Manager | Initial draft | - |
| 0.2 | 2025-07-14 | AI Risk Manager | Incorporated stakeholder feedback | - |
| 0.3 | 2025-07-24 | AI Risk Manager | Added regulatory communication details | - |
| 1.0 | 2025-08-01 | AI Risk Manager | Final version approved | 2025-07-25 |

---

**END OF PROCEDURE**

---

## APPENDICES

### APPENDIX A: Risk Communication Process Flowchart

```
[Identify Stakeholders] → [Define Requirements] → [Develop Materials]
         ↓
[Scheduled Communications] ← → [Event-Triggered Communications]
         ↓                              ↓
[Track Delivery] → [Update as Needed] → [Continuous Improvement]
```

### APPENDIX B: Serious Incident Reporting Checklist

**Within 15 Days of Incident:**
- [ ] Assess if incident is "serious" per Article 73
- [ ] Notify AI System Owner immediately
- [ ] Notify AI Governance Committee immediately
- [ ] Notify Legal immediately
- [ ] Initiate incident investigation
- [ ] Gather incident details
- [ ] Document root cause
- [ ] Document corrective measures
- [ ] Prepare Serious Incident Report
- [ ] Legal review completed
- [ ] Executive approval obtained
- [ ] Submit to competent authority
- [ ] Obtain confirmation of receipt
- [ ] Document all communications

### APPENDIX C: Communication Templates Index

*[To be developed as separate document]*

---

**This procedure provides step-by-step instructions for communicating AI risks. Use in conjunction with STD-AI-002 (AI Risk Management Standard) and other risk management procedures.**
