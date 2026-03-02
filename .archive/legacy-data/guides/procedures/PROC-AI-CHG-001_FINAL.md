# PROC-AI-CHG-001: AI Change Management Procedure

**Procedure ID:** PROC-AI-CHG-001
**Procedure Name:** AI Change Management Procedure
**Standard:** STD-AI-009: Quality Management Standard, STD-AI-002: Risk Management Standard
**Covers Controls:** QMS-004, QMS-005, RM-010, RM-011
**Effective Date:** [To be filled]
**Last Updated:** [To be filled]
**Next Review Date:** [To be filled]
**Approval Status:** [Draft/Approved]

---

## 1. PURPOSE AND SCOPE

### 1.1 Purpose

This procedure establishes the requirements for managing changes to AI systems throughout their lifecycle, ensuring that modifications do not adversely affect compliance with the EU AI Act, system performance, or risk levels. It ensures all changes are properly assessed, approved, implemented, and documented.

### 1.2 Scope

This procedure applies to:
- All changes to deployed AI systems (high-risk, limited-risk, minimal-risk)
- Model updates, retraining, and fine-tuning
- Data changes (training data, validation data, reference data)
- Algorithm and parameter changes
- Infrastructure and configuration changes
- Integration and interface changes
- Documentation changes

### 1.3 Procedure Owner

| Role | Name | Title | Contact |
|------|------|-------|---------|
| **Procedure Owner** | [Name] | AI Change Manager | [Email/Phone] |
| **Technical Authority** | [Name] | AI Development Lead | [Email/Phone] |
| **Compliance** | [Name] | AI Compliance Officer | [Email/Phone] |

---

## 2. ROLES AND RESPONSIBILITIES

### 2.1 Key Roles

| Role | Responsibility | Authority |
|------|----------------|-----------|
| **Change Requestor** | Submit change requests; provide justification | Initiate change requests |
| **AI System Owner** | Approve business changes; accept residual risks | Approve/reject changes for their systems |
| **Change Manager** | Coordinate change process; facilitate CAB meetings | Schedule changes; escalate issues |
| **Change Advisory Board (CAB)** | Review and approve significant changes | Approve/defer/reject change requests |
| **AI Risk Manager** | Assess change impact on risks | Block changes with unacceptable risks |
| **Compliance Officer** | Assess regulatory impact | Block non-compliant changes |
| **Technical Lead** | Assess technical feasibility and impact | Approve technical implementation |

### 2.2 RACI Matrix

| Activity | Requestor | System Owner | Change Mgr | CAB | Risk Mgr | Compliance | Tech Lead |
|----------|-----------|--------------|------------|-----|----------|------------|-----------|
| Submit request | A | I | R | I | I | I | I |
| Initial assessment | C | C | A | I | R | R | R |
| Risk impact assessment | C | C | C | I | A | C | C |
| Compliance assessment | C | C | C | I | C | A | C |
| Technical assessment | C | C | C | I | C | C | A |
| Change approval | I | R | C | A | R | R | R |
| Implementation | R | A | C | I | I | I | R |
| Post-implementation review | R | A | R | I | R | R | R |

**Legend:** A=Accountable, R=Responsible, C=Consulted, I=Informed

---

## 3. CHANGE CLASSIFICATION

### 3.1 Change Types

| Type | Description | Examples |
|------|-------------|----------|
| **Model Change** | Modifications to AI model | Retraining, fine-tuning, architecture change, parameter update |
| **Data Change** | Modifications to data | New training data, data schema change, data source change |
| **Algorithm Change** | Logic or algorithm modifications | New algorithm, optimization change, feature engineering |
| **Configuration Change** | Settings and parameters | Thresholds, hyperparameters, feature flags |
| **Infrastructure Change** | Platform or infrastructure | Hardware upgrade, cloud migration, scaling |
| **Integration Change** | Interface modifications | API changes, new integrations, protocol changes |
| **Documentation Change** | Documentation updates | Technical docs, user guides, compliance docs |

### 3.2 Change Categories

| Category | Criteria | Approval Level | Timeline |
|----------|----------|----------------|----------|
| **Standard** | Pre-approved, low-risk, routine | Pre-authorized | Immediate |
| **Normal** | Moderate impact, follows process | CAB | 5-10 business days |
| **Significant** | Material impact on system behavior | CAB + System Owner + Compliance | 10-20 business days |
| **Substantial** | May require new conformity assessment | AI Governance Committee | 20-40 business days |
| **Emergency** | Urgent fix for critical issue | Emergency CAB | Immediate with retrospective review |

### 3.3 Substantial Change Criteria (EU AI Act)

A change is considered **substantial** if it affects:

| Criterion | Description | Trigger |
|----------|-------------|---------|
| **Intended Purpose** | Change in intended use or application domain | Any purpose change |
| **Risk Classification** | May change the risk level | Move between risk categories |
| **Model Architecture** | Fundamental change to model structure | >30% parameter change, new architecture |
| **Training Data** | Significant training data changes | >20% data change, new data sources |
| **Performance** | Material performance changes | >10% accuracy change, new failure modes |
| **Fundamental Rights Impact** | Changes affecting rights | New affected populations, new rights impacts |

**Substantial changes require new conformity assessment for high-risk AI systems.**

---

## 4. CHANGE MANAGEMENT PROCESS

### 4.1 Process Overview

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    AI CHANGE MANAGEMENT PROCESS                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   ┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐            │
│   │ REQUEST  │───►│ ASSESS   │───►│ APPROVE  │───►│IMPLEMENT │            │
│   │          │    │          │    │          │    │          │            │
│   └──────────┘    └────┬─────┘    └────┬─────┘    └────┬─────┘            │
│                        │               │               │                   │
│                        ▼               ▼               ▼                   │
│                   ┌─────────┐    ┌─────────┐    ┌─────────┐               │
│                   │ Impact  │    │  CAB    │    │  Test   │               │
│                   │Analysis │    │ Review  │    │& Deploy │               │
│                   └─────────┘    └─────────┘    └─────────┘               │
│                                                      │                     │
│                                                      ▼                     │
│                                              ┌──────────────┐             │
│                                              │    REVIEW    │             │
│                                              │   & CLOSE    │             │
│                                              └──────────────┘             │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 4.2 Phase 1: Request

**Step 1: Submit Change Request**
1. Complete Change Request Form (FORM-AI-CHG-001)
2. Provide detailed description of proposed change
3. Document business justification
4. Identify affected AI system(s)
5. Propose implementation approach
6. Submit to Change Manager

**Step 2: Initial Triage**
1. Change Manager reviews request completeness
2. Assign change ID and log in change register
3. Determine initial change category
4. Route for appropriate assessment
5. Notify stakeholders

### 4.3 Phase 2: Assessment

**Step 3: Technical Impact Assessment**
1. Technical Lead assesses:
   - Technical feasibility
   - System impact scope
   - Integration impacts
   - Resource requirements
   - Implementation complexity
2. Document findings in Impact Assessment section

**Step 4: Risk Impact Assessment**
1. AI Risk Manager assesses:
   - Impact on existing risks
   - New risks introduced
   - Control effectiveness changes
   - Risk level changes
2. Determine if risk re-assessment required
3. Document in Risk Impact section

**Step 5: Compliance Impact Assessment**
1. Compliance Officer assesses:
   - EU AI Act compliance impact
   - Substantial change determination
   - Re-classification requirement
   - Re-conformity assessment requirement
   - Documentation update requirements
   - Registration update requirements
2. Document in Compliance Impact section

**Step 6: Substantial Change Determination**
If any of the following are true, the change is SUBSTANTIAL:
- [ ] Intended purpose changes
- [ ] Risk classification may change
- [ ] Model architecture fundamentally changes
- [ ] Training data changes significantly (>20%)
- [ ] Performance metrics change materially (>10%)
- [ ] New populations affected
- [ ] New fundamental rights impacts

**For substantial changes to high-risk AI:**
- New conformity assessment required
- Technical documentation must be updated
- EU database registration must be updated
- CE marking must be re-evaluated

### 4.4 Phase 3: Approval

**Step 7: Change Advisory Board Review**

| Change Category | CAB Composition |
|-----------------|-----------------|
| Standard | Pre-approved, no CAB needed |
| Normal | Change Manager, Technical Lead, Risk Manager |
| Significant | Full CAB + System Owner + Compliance |
| Substantial | AI Governance Committee |
| Emergency | Emergency CAB (on-call members) |

**CAB Review Process:**
1. Present change request and impact assessments
2. Review risk and compliance impacts
3. Discuss implementation approach
4. Make approval decision:
   - **Approve** - Proceed with implementation
   - **Approve with Conditions** - Proceed with specified conditions
   - **Defer** - More information needed
   - **Reject** - Change not approved
5. Document decision and rationale

**Step 8: Document Approval**
1. Record CAB decision in Change Request
2. Document any conditions
3. Set implementation schedule
4. Notify relevant stakeholders

### 4.5 Phase 4: Implementation

**Step 9: Plan Implementation**
1. Create detailed implementation plan
2. Identify implementation team
3. Define rollback procedures
4. Schedule implementation window
5. Prepare test plan

**Step 10: Execute Change**
1. Implement change per approved plan
2. Execute in controlled environment first
3. Run validation tests
4. Document implementation steps
5. Verify success criteria

**Step 11: Deploy to Production**
1. Execute production deployment
2. Monitor for issues
3. Verify system functionality
4. Confirm performance metrics
5. Execute rollback if necessary

### 4.6 Phase 5: Review and Close

**Step 12: Post-Implementation Review**
1. Verify change objectives achieved
2. Confirm no unexpected impacts
3. Validate compliance requirements met
4. Review any issues encountered
5. Document lessons learned

**Step 13: Documentation Update**
1. Update technical documentation
2. Update risk assessment (if required)
3. Update EU database registration (if required)
4. Archive change records
5. Update AI System Inventory

**Step 14: Close Change**
1. Obtain sign-off from System Owner
2. Confirm all activities complete
3. Close change request
4. Archive documentation

---

## 5. EMERGENCY CHANGE PROCESS

### 5.1 Emergency Change Criteria

Emergency changes are justified only for:
- Critical system failures affecting health/safety
- Active security incidents
- Regulatory compliance emergencies
- Critical business impact

### 5.2 Emergency Process

1. **Immediate Actions**
   - Notify Emergency CAB members
   - Document emergency justification
   - Get verbal approval from AI System Owner

2. **Expedited Assessment**
   - Rapid risk assessment
   - Minimal compliance check
   - Technical feasibility confirmation

3. **Implementation**
   - Implement with available resources
   - Continuous monitoring
   - Document all actions taken

4. **Retrospective Review** (within 5 business days)
   - Complete full change documentation
   - Conduct proper impact assessments
   - Full CAB review
   - Update all documentation
   - Lessons learned

---

## 6. CHANGE CONTROL FOR HIGH-RISK AI

### 6.1 Additional Requirements

For high-risk AI systems, additional controls apply:

| Requirement | Description |
|-------------|-------------|
| **Conformity Re-assessment** | Substantial changes require new conformity assessment |
| **Documentation Update** | Technical documentation (Annex IV) must be updated |
| **Registration Update** | EU database must be updated within 3 months |
| **Notification** | Notified body must be informed (if third-party CA) |
| **Risk Re-assessment** | Full risk assessment required for significant changes |

### 6.2 Substantial Change Process

```
┌─────────────────────────────────────────────────────────────────────────────┐
│              SUBSTANTIAL CHANGE PROCESS (HIGH-RISK AI)                      │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  Standard Change Process                                                    │
│         │                                                                   │
│         ▼                                                                   │
│  ┌──────────────┐                                                          │
│  │ Substantial  │──► Yes ───┐                                              │
│  │   Change?    │           │                                              │
│  └──────────────┘           ▼                                              │
│         │            ┌──────────────┐                                      │
│         │            │  New Risk    │                                      │
│        No            │ Assessment   │                                      │
│         │            └──────┬───────┘                                      │
│         │                   ▼                                              │
│         │            ┌──────────────┐                                      │
│         │            │   Update     │                                      │
│         │            │ Tech. Docs   │                                      │
│         │            └──────┬───────┘                                      │
│         │                   ▼                                              │
│         │            ┌──────────────┐                                      │
│         │            │ Conformity   │                                      │
│         │            │ Assessment   │                                      │
│         │            └──────┬───────┘                                      │
│         │                   ▼                                              │
│         │            ┌──────────────┐                                      │
│         │            │  Update EU   │                                      │
│         │            │  Database    │                                      │
│         │            └──────┬───────┘                                      │
│         │                   │                                              │
│         └────────────┬──────┘                                              │
│                      ▼                                                     │
│               ┌──────────────┐                                             │
│               │   Continue   │                                             │
│               │Implementation│                                             │
│               └──────────────┘                                             │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 7. MODEL CHANGE SPECIFIC REQUIREMENTS

### 7.1 Model Retraining Changes

| Aspect | Requirement |
|--------|-------------|
| **Data Validation** | Verify new training data meets governance requirements |
| **Bias Assessment** | Re-run bias testing on new model |
| **Performance Testing** | Compare performance against baseline |
| **Validation Testing** | Full validation on held-out test set |
| **Documentation** | Update model documentation |

### 7.2 Model Version Control

1. All model versions must be stored and traceable
2. Training data versions must be linked to model versions
3. Model lineage must be documented
4. Rollback capability must be maintained
5. A/B testing may be required for significant changes

---

## 8. RECORDS AND DOCUMENTATION

### 8.1 Required Records

| Record ID | Record Name | Retention Period | Owner |
|-----------|-------------|------------------|-------|
| REC-AI-CHG-001 | Change Request Records | 10 years | Change Manager |
| REC-AI-CHG-002 | CAB Meeting Minutes | 10 years | Change Manager |
| REC-AI-CHG-003 | Impact Assessment Records | 10 years | Change Manager |
| REC-AI-CHG-004 | Implementation Records | 10 years | Technical Lead |
| REC-AI-CHG-005 | Post-Implementation Reviews | 10 years | Change Manager |

### 8.2 Required Forms

| Form ID | Form Name | Purpose |
|---------|-----------|---------|
| FORM-AI-CHG-001 | Change Request Form | Submit change requests |
| FORM-AI-CHG-002 | Emergency Change Form | Emergency changes |
| FORM-AI-CHG-003 | CAB Decision Record | Document CAB decisions |

---

## 9. RELATED DOCUMENTS

### 9.1 Standards
- STD-AI-002: AI Risk Management Standard
- STD-AI-009: Quality Management Standard
- STD-AI-010: Conformity Assessment Standard

### 9.2 Procedures
- PROC-AI-DEV-001: AI Development Lifecycle Procedure
- PROC-AI-RM-001: Risk Management Procedure
- PROC-AI-CA-001: Conformity Assessment Procedure
- PROC-AI-DOC-001: Technical Documentation Procedure
- PROC-AI-REG-001: Registration Procedure

---

## 10. REVISION HISTORY

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | [Date] | [Author] | Initial release |

---

## APPENDIX A: CHANGE REQUEST FORM (FORM-AI-CHG-001)

### Section 1: Request Information

| Field | Entry |
|-------|-------|
| **Change ID** | CHG-AI-[YYYY]-[####] |
| **Request Date** | |
| **Requestor Name** | |
| **Requestor Contact** | |
| **AI System Name** | |
| **AI System ID** | |

### Section 2: Change Description

| Field | Entry |
|-------|-------|
| **Change Title** | |
| **Change Type** | [ ] Model [ ] Data [ ] Algorithm [ ] Config [ ] Infrastructure [ ] Integration [ ] Documentation |
| **Change Description** | |
| **Business Justification** | |
| **Proposed Implementation Date** | |

### Section 3: Impact Assessment Summary

| Area | Impact Level | Description |
|------|--------------|-------------|
| Technical | [ ] High [ ] Medium [ ] Low [ ] None | |
| Risk | [ ] High [ ] Medium [ ] Low [ ] None | |
| Compliance | [ ] High [ ] Medium [ ] Low [ ] None | |
| Performance | [ ] High [ ] Medium [ ] Low [ ] None | |

### Section 4: Substantial Change Assessment

| Criterion | Yes | No |
|-----------|-----|-----|
| Does this change the intended purpose? | [ ] | [ ] |
| Does this change the risk classification? | [ ] | [ ] |
| Is this a fundamental model architecture change? | [ ] | [ ] |
| Does training data change >20%? | [ ] | [ ] |
| Do performance metrics change >10%? | [ ] | [ ] |
| Are new populations affected? | [ ] | [ ] |
| Are there new fundamental rights impacts? | [ ] | [ ] |

**Substantial Change Determination:** [ ] Yes [ ] No

### Section 5: Approval

| Role | Name | Decision | Signature | Date |
|------|------|----------|-----------|------|
| System Owner | | [ ] Approve [ ] Reject | | |
| Technical Lead | | [ ] Approve [ ] Reject | | |
| Risk Manager | | [ ] Approve [ ] Reject | | |
| Compliance Officer | | [ ] Approve [ ] Reject | | |
| CAB Decision | | [ ] Approve [ ] Reject [ ] Defer | | |

### Section 6: Implementation

| Field | Entry |
|-------|-------|
| **Implementation Date** | |
| **Implemented By** | |
| **Implementation Notes** | |
| **Rollback Executed?** | [ ] Yes [ ] No |

### Section 7: Closure

| Field | Entry |
|-------|-------|
| **Change Successful?** | [ ] Yes [ ] No |
| **Documentation Updated?** | [ ] Yes [ ] No [ ] N/A |
| **Closed Date** | |
| **Closed By** | |
