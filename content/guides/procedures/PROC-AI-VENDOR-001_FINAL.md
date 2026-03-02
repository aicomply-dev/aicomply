# PROC-AI-VENDOR-001: AI Vendor Management Procedure

**Procedure ID:** PROC-AI-VENDOR-001
**Procedure Name:** AI Vendor Management Procedure
**Standard:** STD-AI-001: AI System Classification Standard, STD-AI-002: AI Risk Management Standard, STD-AI-009: Quality Management Standard
**Covers Controls:** CLS-001, CLS-005, RM-001, RM-006, QMS-001, QMS-007
**Effective Date:** [To be filled]
**Last Updated:** [To be filled]
**Next Review Date:** [To be filled]
**Approval Status:** [Draft/Approved]

---

## 1. PURPOSE AND SCOPE

### 1.1 Purpose

This procedure establishes the requirements for managing third-party AI system vendors throughout the vendor lifecycle, ensuring that procured AI systems comply with the EU AI Act and organizational requirements. This includes vendor selection, due diligence, contracting, ongoing management, and termination.

### 1.2 Scope

This procedure applies to:
- Procurement of off-the-shelf AI systems and components
- AI system development by third-party vendors
- AI-as-a-Service (AIaaS) subscriptions
- AI model providers and foundation model APIs
- AI infrastructure and platform providers
- AI consultants and integrators providing AI capabilities
- Sub-processors of AI vendors

This procedure does not apply to:
- Internally developed AI systems (see PROC-AI-DEV-001)
- Non-AI software procurement
- Hardware-only procurement without AI components

### 1.3 Procedure Owner and Contacts

| Role | Name | Title | Contact |
|------|------|-------|---------|
| **Procedure Owner** | [Name] | Procurement Manager | [Email/Phone] |
| **Technical Review** | [Name] | AI Development Lead | [Email/Phone] |
| **Compliance** | [Name] | Compliance Officer | [Email/Phone] |

---

## 2. ROLES AND RESPONSIBILITIES

### 2.1 Key Roles

| Role | Responsibility | Authority |
|------|----------------|-----------|
| **Procurement Manager** | Manage vendor lifecycle; contract negotiation; vendor performance | Approve vendor selection; terminate contracts |
| **AI System Owner** | Define requirements; accept vendor AI systems; own compliance | Approve vendor selection; accept risks |
| **AI Risk Manager** | Assess vendor risks; validate vendor risk controls | Block high-risk vendors; require additional controls |
| **Compliance Officer** | Verify vendor EU AI Act compliance; validate certifications | Reject non-compliant vendors |
| **Security Architect** | Security assessment; penetration testing requirements | Block vendors with security issues |
| **Data Protection Officer** | GDPR compliance; data processing agreements | Approve data processing terms |
| **Legal Counsel** | Contract review; liability terms; IP protection | Approve contract terms |
| **AI Governance Committee** | Governance oversight; strategic vendor decisions | Approve high-risk vendor relationships |

### 2.2 RACI Matrix

| Activity | Procurement | System Owner | Risk Mgr | Compliance | Security | DPO | Legal |
|----------|-------------|--------------|----------|------------|----------|-----|-------|
| Vendor identification | R | A | I | C | I | I | I |
| Requirements definition | C | A | C | C | C | C | I |
| Due diligence | R | C | R | R | R | R | C |
| Risk assessment | C | C | A | C | C | C | I |
| Contract negotiation | R | C | I | C | C | C | A |
| Vendor selection | R | A | R | R | R | R | C |
| Ongoing monitoring | R | A | R | C | C | C | I |
| Performance reviews | R | A | C | C | C | C | I |
| Contract renewal/termination | R | A | C | C | C | C | R |

**Legend:** A=Accountable, R=Responsible, C=Consulted, I=Informed

---

## 3. AI VENDOR MANAGEMENT FRAMEWORK

### 3.1 Vendor Lifecycle Overview

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    AI VENDOR MANAGEMENT LIFECYCLE                           │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   ┌────────────┐    ┌────────────┐    ┌────────────┐    ┌────────────┐    │
│   │  IDENTIFY  │───►│  EVALUATE  │───►│  CONTRACT  │───►│  ONBOARD   │    │
│   │   & RFP    │    │    & DUE   │    │    & SLA   │    │   & TEST   │    │
│   │            │    │ DILIGENCE  │    │            │    │            │    │
│   └────────────┘    └────────────┘    └────────────┘    └────────────┘    │
│                                                               │            │
│   ┌────────────────────────────────────────────────────────────┘           │
│   │                                                                        │
│   ▼                                                                        │
│   ┌────────────┐    ┌────────────┐    ┌────────────┐                      │
│   │   MANAGE   │───►│   REVIEW   │───►│  RENEW OR  │                      │
│   │  ONGOING   │    │ PERFORMANCE│    │  TERMINATE │                      │
│   │            │    │            │    │            │                      │
│   └────────────┘    └────────────┘    └────────────┘                      │
│         ▲                │                                                 │
│         └────────────────┘ (Continuous cycle during relationship)         │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 3.2 Vendor Risk Tiers

AI vendors are classified into risk tiers based on the criticality and risk level of their AI systems:

| Tier | Criteria | Due Diligence Level | Review Frequency |
|------|----------|---------------------|------------------|
| **Tier 1 - Critical** | High-risk AI systems; mission-critical; processes sensitive data | Comprehensive | Quarterly |
| **Tier 2 - Significant** | Limited-risk AI; important business processes; moderate data sensitivity | Standard | Semi-annual |
| **Tier 3 - Standard** | Minimal-risk AI; non-critical; limited data processing | Basic | Annual |

---

## 4. DETAILED VENDOR MANAGEMENT PROCEDURES

### 4.1 Phase 1: Vendor Identification and RFP

#### 4.1.1 Objectives
- Identify potential AI vendors
- Define requirements clearly
- Request proposals

#### 4.1.2 Activities

**Step 1: Requirements Definition**
1. Document business requirements with AI System Owner
2. Define technical requirements including:
   - Functional specifications
   - Performance requirements
   - Integration requirements
   - Scalability needs
3. Define EU AI Act compliance requirements:
   - Expected risk classification
   - Documentation requirements
   - Transparency requirements
   - Human oversight requirements
4. Define security and data protection requirements
5. Complete AI Vendor Requirements Checklist (CHK-AI-VENDOR-001)

**Step 2: Market Research**
1. Research potential vendors
2. Review vendor credentials and certifications
3. Check vendor track record with EU AI Act compliance
4. Identify vendors with relevant EU presence
5. Document research findings

**Step 3: Request for Proposal (RFP)**
1. Prepare RFP including:
   - Business and technical requirements
   - EU AI Act compliance requirements
   - Security questionnaire
   - Pricing requirements
   - Evaluation criteria
2. Include AI-specific questions:
   - Model transparency and explainability
   - Training data governance
   - Bias testing methodology
   - Logging and audit capabilities
   - Human oversight features
   - Incident response procedures
3. Distribute RFP to qualified vendors
4. Manage Q&A process
5. Collect and log proposals

#### 4.1.3 Deliverables
- [ ] AI Vendor Requirements Checklist (CHK-AI-VENDOR-001)
- [ ] RFP document
- [ ] Vendor proposals received

---

### 4.2 Phase 2: Vendor Evaluation and Due Diligence

#### 4.2.1 Objectives
- Evaluate vendor proposals
- Conduct comprehensive due diligence
- Assess risks

#### 4.2.2 Activities

**Step 1: Initial Screening**
1. Review proposals against mandatory requirements
2. Eliminate non-compliant proposals
3. Score remaining proposals against evaluation criteria
4. Create shortlist of vendors (typically 2-4)

**Step 2: Technical Evaluation**
1. Evaluate AI system architecture and design
2. Review model documentation and specifications
3. Assess accuracy and performance claims
4. Review bias testing results
5. Evaluate human oversight capabilities
6. Assess logging and audit trail features
7. Review integration capabilities
8. Complete Technical Evaluation Form (FORM-AI-VENDOR-001)

**Step 3: EU AI Act Compliance Assessment**
1. Request and review vendor compliance documentation:
   - Technical documentation (Annex IV format if high-risk)
   - EU Declaration of Conformity (if applicable)
   - CE marking evidence (if applicable)
   - EU database registration (if high-risk)
2. Verify classification of AI system
3. Assess vendor QMS for AI (per ISO/IEC 42001 or equivalent)
4. Review post-market monitoring procedures
5. Review incident reporting procedures
6. Complete AI Compliance Assessment Form (FORM-AI-VENDOR-002)

**Step 4: Security Assessment**
1. Review vendor security certifications (ISO 27001, SOC 2)
2. Conduct security questionnaire review
3. Request and review penetration test results
4. Assess data security and encryption
5. Review access controls and authentication
6. Complete Security Assessment Form

**Step 5: Data Protection Assessment**
1. Review data processing activities
2. Assess GDPR compliance measures
3. Review sub-processor arrangements
4. Assess data transfer mechanisms (for non-EU vendors)
5. Review data retention and deletion practices
6. Complete Data Protection Impact Assessment (if required)

**Step 6: Financial and Operational Assessment**
1. Review vendor financial stability
2. Assess business continuity plans
3. Review SLA capabilities
4. Assess support and maintenance services
5. Check references from other customers

**Step 7: Risk Assessment**
1. Compile all assessment findings
2. Identify vendor-specific risks
3. Assess likelihood and impact of risks
4. Determine risk tier classification
5. Document risks in Vendor Risk Register (REC-AI-VENDOR-001)
6. Recommend risk mitigation measures
7. Complete Vendor Risk Assessment Form (FORM-AI-VENDOR-003)

**Step 8: Vendor Selection**
1. Compile evaluation scores and risk assessments
2. Present findings to selection committee
3. Select preferred vendor
4. Obtain necessary approvals:
   - AI System Owner
   - AI Risk Manager
   - Compliance Officer
   - AI Governance Committee (for Tier 1 vendors)
5. Notify successful and unsuccessful vendors

#### 4.2.3 Deliverables
- [ ] Technical Evaluation Form (FORM-AI-VENDOR-001)
- [ ] AI Compliance Assessment Form (FORM-AI-VENDOR-002)
- [ ] Security Assessment Form
- [ ] Data Protection Assessment
- [ ] Vendor Risk Assessment Form (FORM-AI-VENDOR-003)
- [ ] Vendor Risk Register entry (REC-AI-VENDOR-001)
- [ ] Vendor selection approval records

---

### 4.3 Phase 3: Contract and SLA

#### 4.3.1 Objectives
- Negotiate comprehensive contract
- Establish service level agreements
- Define compliance obligations

#### 4.3.2 Activities

**Step 1: Contract Negotiation**
1. Negotiate commercial terms
2. Negotiate AI-specific contractual provisions:

**Standard AI Contract Clauses (Mandatory):**

| Clause Category | Required Provisions |
|-----------------|---------------------|
| **EU AI Act Compliance** | Vendor represents compliance with applicable EU AI Act requirements; maintains conformity throughout contract |
| **Technical Documentation** | Vendor provides and maintains Annex IV compliant documentation; provides updates within [X] days of changes |
| **Transparency** | Vendor enables deployer transparency obligations; provides necessary information for downstream users |
| **Risk Management** | Vendor maintains risk management system; notifies deployer of risk changes; supports risk assessments |
| **Human Oversight** | Vendor provides human oversight capabilities as documented; supports deployer oversight requirements |
| **Logging** | Vendor provides automatic logging per Article 12; retains logs for [period]; provides log access |
| **Data Governance** | Vendor maintains data governance per STD-AI-003; documents data provenance; reports data quality issues |
| **Incident Reporting** | Vendor reports serious incidents within [24] hours; cooperates with investigations; implements corrective actions |
| **Audit Rights** | Deployer has right to audit vendor AI compliance; vendor cooperates with regulatory audits |
| **Sub-processors** | Vendor discloses AI sub-processors; requires equivalent compliance; notifies of sub-processor changes |
| **Change Notification** | Vendor notifies of material changes [X] days in advance; provides change impact assessment |
| **Termination** | Transition assistance provisions; data return/deletion; continued compliance during transition |
| **Liability** | Clear allocation of EU AI Act liability; indemnification for compliance failures |

**Step 2: Service Level Agreement**
1. Define performance SLAs:
   - Availability and uptime requirements
   - Response time requirements
   - Accuracy/performance metrics
   - Support response times
2. Define compliance SLAs:
   - Documentation update timelines
   - Incident reporting timelines
   - Audit cooperation timelines
3. Define remedies and penalties for SLA breaches
4. Establish SLA reporting requirements

**Step 3: Data Processing Agreement**
1. Execute DPA per GDPR Article 28
2. Define processing activities and purposes
3. Specify technical and organizational measures
4. Define sub-processor requirements
5. Establish data transfer mechanisms (SCCs if applicable)

**Step 4: Contract Finalization**
1. Legal review of all contract documents
2. Obtain required internal approvals
3. Execute contract and all annexes
4. Store executed contracts in contract management system
5. Document key dates and obligations

#### 4.3.3 Deliverables
- [ ] Executed master agreement
- [ ] Service Level Agreement
- [ ] Data Processing Agreement
- [ ] AI-specific schedule/addendum
- [ ] Approved contract summary

---

### 4.4 Phase 4: Onboarding and Testing

#### 4.4.1 Objectives
- Validate vendor AI system
- Integrate with organizational systems
- Establish operational processes

#### 4.4.2 Activities

**Step 1: Kickoff and Planning**
1. Conduct vendor kickoff meeting
2. Establish project governance
3. Assign internal resources
4. Create implementation plan
5. Establish communication channels

**Step 2: Technical Onboarding**
1. Set up vendor access and credentials
2. Configure integrations
3. Establish logging and monitoring
4. Configure security controls
5. Set up test environment

**Step 3: Compliance Validation**
1. Verify received documentation matches contracted requirements
2. Validate technical documentation completeness
3. Verify registration status (if high-risk)
4. Validate human oversight features
5. Test logging capabilities
6. Document validation results

**Step 4: Acceptance Testing**
1. Execute acceptance test plan
2. Test functional requirements
3. Validate performance against SLAs
4. Test security controls
5. Conduct bias and fairness testing
6. Test human oversight capabilities
7. Document test results
8. Remediate issues

**Step 5: User Training**
1. Train system administrators
2. Train end users
3. Document training completion
4. Establish support processes

**Step 6: Go-Live**
1. Obtain go-live approval
2. Execute production cutover
3. Monitor initial operations
4. Document lessons learned
5. Close onboarding project

#### 4.4.3 Deliverables
- [ ] Implementation plan
- [ ] Integration documentation
- [ ] Compliance validation report
- [ ] Acceptance test results
- [ ] Training completion records
- [ ] Go-live approval
- [ ] Onboarding completion record

---

### 4.5 Phase 5: Ongoing Management

#### 4.5.1 Objectives
- Monitor vendor performance
- Maintain compliance
- Manage changes and issues

#### 4.5.2 Activities

**Step 1: Performance Monitoring**
1. Track SLA metrics
2. Monitor availability and performance
3. Track incident volumes and resolution
4. Monitor user satisfaction
5. Generate performance reports

**Step 2: Compliance Monitoring**
1. Track vendor compliance attestations
2. Monitor documentation updates
3. Review vendor audit reports
4. Track regulatory changes affecting vendor
5. Validate ongoing EU AI Act compliance

**Step 3: Risk Monitoring**
1. Monitor vendor risk indicators
2. Update Vendor Risk Register
3. Track vendor financial health
4. Monitor vendor security posture
5. Escalate emerging risks

**Step 4: Change Management**
1. Review vendor change notifications
2. Assess change impacts
3. Approve or reject changes
4. Re-classify if significant changes
5. Update documentation

**Step 5: Issue Management**
1. Log vendor issues
2. Track issue resolution
3. Escalate unresolved issues
4. Document lessons learned

**Step 6: Relationship Management**
1. Conduct regular vendor meetings
2. Address concerns and feedback
3. Plan for future requirements
4. Manage contract variations

#### 4.5.3 Deliverables (Ongoing)
- [ ] Performance reports (per SLA)
- [ ] Compliance monitoring records
- [ ] Updated Vendor Risk Register
- [ ] Change records
- [ ] Issue logs and resolutions
- [ ] Meeting minutes

---

### 4.6 Phase 6: Performance Reviews

#### 4.6.1 Objectives
- Assess vendor performance
- Evaluate compliance status
- Determine relationship continuation

#### 4.6.2 Activities

**Step 1: Prepare Review**
1. Compile performance data
2. Compile compliance records
3. Compile risk assessment data
4. Gather stakeholder feedback
5. Prepare review presentation

**Step 2: Conduct Review**
1. Review SLA performance
2. Review compliance status
3. Review risk status
4. Review issue history
5. Assess overall vendor performance
6. Score vendor using Vendor Scorecard (FORM-AI-VENDOR-004)

**Step 3: Review Meeting**
1. Present findings to vendor
2. Discuss improvement areas
3. Agree on action items
4. Plan for next period
5. Document meeting outcomes

**Step 4: Post-Review Actions**
1. Implement agreed improvements
2. Update vendor records
3. Report to stakeholders
4. Plan next review

#### 4.6.3 Review Frequency
| Vendor Tier | Review Frequency |
|-------------|------------------|
| Tier 1 - Critical | Quarterly |
| Tier 2 - Significant | Semi-annual |
| Tier 3 - Standard | Annual |

#### 4.6.4 Deliverables
- [ ] Vendor Scorecard (FORM-AI-VENDOR-004)
- [ ] Performance Review Report
- [ ] Action items and improvement plan
- [ ] Updated vendor records

---

### 4.7 Phase 7: Renewal or Termination

#### 4.7.1 Renewal Process

**Step 1: Renewal Assessment**
1. Review cumulative vendor performance
2. Assess continued business need
3. Assess market alternatives
4. Review contract terms for renewal
5. Conduct updated risk assessment

**Step 2: Renewal Decision**
1. Recommend renewal or termination
2. Obtain approvals
3. Negotiate renewal terms if applicable
4. Execute renewal documentation

#### 4.7.2 Termination Process

**Step 1: Termination Planning**
1. Document termination rationale
2. Review contractual termination provisions
3. Assess transition requirements
4. Identify replacement solution (if needed)
5. Create termination plan

**Step 2: Transition Execution**
1. Notify vendor per contract terms
2. Execute data extraction
3. Migrate to replacement solution
4. Validate data integrity
5. Decommission vendor system

**Step 3: Vendor Offboarding**
1. Revoke vendor access
2. Confirm data return/deletion
3. Settle final payments
4. Document lessons learned
5. Archive vendor records
6. Update AI System Registry

#### 4.7.3 Deliverables
- [ ] Renewal or termination decision record
- [ ] Transition plan (if terminating)
- [ ] Data migration/deletion confirmation
- [ ] Lessons learned documentation
- [ ] Archived vendor records

---

## 5. RECORDS AND DOCUMENTATION

### 5.1 Required Records

| Record ID | Record Name | Retention Period | Owner |
|-----------|-------------|------------------|-------|
| REC-AI-VENDOR-001 | Vendor Risk Register | Life of relationship + 10 years | Procurement |
| REC-AI-VENDOR-002 | Due Diligence Records | Life of relationship + 10 years | Procurement |
| REC-AI-VENDOR-003 | Performance Records | Life of relationship + 10 years | Procurement |
| REC-AI-VENDOR-004 | Contract Records | Life of relationship + 10 years | Legal |

### 5.2 Required Forms

| Form ID | Form Name | Purpose |
|---------|-----------|---------|
| FORM-AI-VENDOR-001 | Technical Evaluation Form | Evaluate vendor AI technical capabilities |
| FORM-AI-VENDOR-002 | AI Compliance Assessment Form | Assess vendor EU AI Act compliance |
| FORM-AI-VENDOR-003 | Vendor Risk Assessment Form | Document vendor risk assessment |
| FORM-AI-VENDOR-004 | Vendor Scorecard | Rate vendor performance |

---

## 6. RELATED DOCUMENTS

### 6.1 Standards
- STD-AI-001: AI System Classification Standard
- STD-AI-002: AI Risk Management Standard
- STD-AI-003: AI Data Governance Standard
- STD-AI-009: Quality Management Standard

### 6.2 Procedures
- PROC-AI-CLS-001: AI Classification Procedure
- PROC-AI-RM-001: AI Risk Management Procedure
- PROC-AI-DEV-001: AI Development Lifecycle Procedure
- PROC-AI-INC-001: Incident Management Procedure

### 6.3 Checklists
- CHK-AI-VENDOR-001: AI Vendor Requirements Checklist

### 6.4 External References
- EU AI Act (Regulation 2024/1689)
- ISO/IEC 42001: AI Management System
- ISO 37500: Guidance on outsourcing

---

## 7. REVISION HISTORY

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | [Date] | [Author] | Initial release |

---

## APPENDIX A: AI VENDOR REQUIREMENTS CHECKLIST (CHK-AI-VENDOR-001)

### A.1 Mandatory EU AI Act Requirements

| # | Requirement | Required for High-Risk | Required for Limited-Risk | Evidence |
|---|-------------|------------------------|---------------------------|----------|
| 1 | Technical documentation per Annex IV | Yes | Recommended | |
| 2 | EU Declaration of Conformity | Yes | No | |
| 3 | CE marking | Yes (if applicable) | No | |
| 4 | EU database registration | Yes | No | |
| 5 | Quality management system | Yes | Recommended | |
| 6 | Risk management system | Yes | Recommended | |
| 7 | Data governance measures | Yes | Recommended | |
| 8 | Automatic logging | Yes | No | |
| 9 | Transparency provisions | Yes | Yes | |
| 10 | Human oversight measures | Yes | Recommended | |
| 11 | Accuracy and robustness measures | Yes | Recommended | |
| 12 | Post-market monitoring | Yes | Recommended | |
| 13 | Serious incident reporting | Yes | Yes | |

### A.2 Technical Requirements

| # | Requirement | Priority | Verified |
|---|-------------|----------|----------|
| 1 | Meets functional specifications | Mandatory | |
| 2 | Meets performance requirements | Mandatory | |
| 3 | Integration capabilities | Mandatory | |
| 4 | Scalability | [Priority] | |
| 5 | API documentation | [Priority] | |
| 6 | Model documentation | [Priority] | |

### A.3 Security Requirements

| # | Requirement | Priority | Verified |
|---|-------------|----------|----------|
| 1 | Security certification (ISO 27001, SOC 2) | [Priority] | |
| 2 | Encryption at rest and in transit | Mandatory | |
| 3 | Access controls | Mandatory | |
| 4 | Penetration testing | [Priority] | |
| 5 | Vulnerability management | [Priority] | |

---

## APPENDIX B: VENDOR SCORECARD TEMPLATE (FORM-AI-VENDOR-004)

### B.1 Vendor Information
| Field | Value |
|-------|-------|
| Vendor Name | |
| Contract Reference | |
| Review Period | |
| Reviewer | |

### B.2 Performance Scores

| Category | Weight | Score (1-5) | Weighted Score | Comments |
|----------|--------|-------------|----------------|----------|
| SLA Performance | 25% | | | |
| Compliance | 25% | | | |
| Security | 15% | | | |
| Support Quality | 15% | | | |
| Innovation | 10% | | | |
| Relationship | 10% | | | |
| **Total** | **100%** | | **[Total]** | |

### B.3 Scoring Guide
- 5 = Exceptional - Exceeds requirements
- 4 = Good - Meets all requirements
- 3 = Acceptable - Meets most requirements
- 2 = Below Expectations - Improvement needed
- 1 = Unacceptable - Significant issues

### B.4 Overall Assessment
| Field | Value |
|-------|-------|
| Overall Rating | |
| Recommendation | Continue / Improve / Terminate |
| Key Strengths | |
| Key Improvement Areas | |
| Action Items | |

### B.5 Approvals
| Role | Name | Signature | Date |
|------|------|-----------|------|
| Reviewer | | | |
| Procurement Manager | | | |
| AI System Owner | | | |
