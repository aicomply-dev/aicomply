# AI Act Role Determination Process

## Document Information

| Field | Value |
|-------|-------|
| **Document ID** | TOOL-ROLE-001 |
| **Version** | 1.0 |
| **Status** | Ready to Use |
| **Owner** | Enterprise Control Governance |
| **Last Updated** | 2024-12-01 |

## Purpose

This guide helps organizations determine which EU AI Act roles apply to them for each AI system. Understanding your role is critical as it determines your compliance obligations.

---

## EU AI Act Roles Overview

The EU AI Act defines four primary operator roles, each with distinct obligations:

| Role | Definition | Key Obligations |
|------|------------|-----------------|
| **Provider** | Develops or has AI system developed and places it on market/into service under own name | Full compliance with Chapter 2 (high-risk), QMS, conformity assessment, CE marking |
| **Deployer** | Uses AI system under own authority (except personal use) | Oversight, monitoring, incident reporting, transparency to users |
| **Importer** | Established in EU, places third-country AI on EU market | Verify conformity, ensure documentation, maintain records |
| **Distributor** | Makes AI available on market (not provider/importer) | Verify CE marking, ensure proper storage/transport conditions |

Additionally:
- **GPAI Provider** | Provides general-purpose AI models | Model documentation, transparency, systemic risk assessment (if applicable)

---

## Role Determination Decision Tree

### Step 1: Did your organization develop the AI system?

**YES** → Proceed to Step 2
**NO** → Proceed to Step 4

### Step 2: Is the AI system placed on the market or put into service under your organization's name or trademark?

**YES** → You are a **PROVIDER**
**NO** → Proceed to Step 3

### Step 3: Did you substantially modify the AI system?

**YES** → You are a **PROVIDER** (for the modified system)
**NO** → You may be a **Deployer** if you use the system

### Step 4: Is your organization established in the EU?

**YES** → Proceed to Step 5
**NO** → Proceed to Step 7

### Step 5: Are you placing a third-country AI system on the EU market?

**YES** → You are an **IMPORTER**
**NO** → Proceed to Step 6

### Step 6: Are you making the AI system available on the market without being the provider or importer?

**YES** → You are a **DISTRIBUTOR**
**NO** → Proceed to Step 8

### Step 7: Is the output of your AI system used in the EU?

**YES** → EU AI Act applies to you as if you were established in EU
**NO** → EU AI Act may not apply (verify with legal counsel)

### Step 8: Are you using the AI system under your own authority?

**YES** → You are a **DEPLOYER**
**NO** → Review your relationship with the AI system

---

## Role-Specific Obligations Summary

### Provider Obligations (Article 16)

| Obligation | Article | Description |
|------------|---------|-------------|
| Risk Management System | Art. 9 | Establish and maintain risk management |
| Data Governance | Art. 10 | Ensure data quality and governance |
| Technical Documentation | Art. 11 | Create and maintain Annex IV documentation |
| Record-Keeping | Art. 12 | Implement automatic logging |
| Transparency | Art. 13 | Provide instructions for use |
| Human Oversight | Art. 14 | Design for effective oversight |
| Accuracy & Robustness | Art. 15 | Ensure accuracy, robustness, cybersecurity |
| Quality Management | Art. 17 | Establish QMS |
| Conformity Assessment | Art. 43 | Complete before market placement |
| EU Declaration | Art. 47 | Draw up declaration of conformity |
| CE Marking | Art. 48 | Affix CE marking |
| Registration | Art. 49 | Register in EU database |
| Post-Market Monitoring | Art. 72 | Establish monitoring system |
| Incident Reporting | Art. 73 | Report serious incidents |

### Deployer Obligations (Article 26)

| Obligation | Article | Description |
|------------|---------|-------------|
| Use per Instructions | Art. 26(1) | Use system according to instructions |
| Human Oversight | Art. 26(2) | Assign competent persons for oversight |
| Input Data Quality | Art. 26(4) | Ensure input data is relevant |
| Monitoring | Art. 26(5) | Monitor operation based on instructions |
| Record Retention | Art. 26(6) | Keep logs for minimum period |
| Transparency to Users | Art. 26(7) | Inform affected persons |
| DPIA | Art. 26(9) | Conduct data protection impact assessment |
| Incident Reporting | Art. 26(5) | Report serious incidents |

### Importer Obligations (Article 23)

| Obligation | Article | Description |
|------------|---------|-------------|
| Verify Conformity | Art. 23(1) | Ensure conformity assessment completed |
| Verify Documentation | Art. 23(2) | Ensure technical documentation available |
| Verify CE Marking | Art. 23(3) | Verify CE marking affixed |
| Contact Information | Art. 23(4) | Indicate name and contact on system |
| Storage Conditions | Art. 23(5) | Ensure proper storage/transport |
| Provide Documentation | Art. 23(6) | Provide documentation to authorities |
| Cooperate | Art. 23(7) | Cooperate with authorities |

### Distributor Obligations (Article 24)

| Obligation | Article | Description |
|------------|---------|-------------|
| Verify CE Marking | Art. 24(1) | Verify CE marking before distribution |
| Verify Documentation | Art. 24(2) | Verify instructions for use included |
| Storage Conditions | Art. 24(3) | Ensure proper storage/transport |
| Cooperate | Art. 24(4) | Cooperate with authorities |

---

## Multiple Roles

An organization can hold multiple roles simultaneously:

**Example Scenarios:**

1. **Provider + Deployer**: You develop an AI system and also use it internally
2. **Importer + Deployer**: You import a third-country AI system and deploy it
3. **Provider (for modifications)**: You substantially modify a third-party system

When holding multiple roles, you must comply with obligations for ALL applicable roles.

---

## Role Determination Worksheet

Complete this worksheet for each AI system:

### System Information

| Field | Entry |
|-------|-------|
| **AI System Name** | |
| **System ID** | |
| **Assessment Date** | |
| **Assessor** | |

### Role Assessment

| Question | Answer | Notes |
|----------|--------|-------|
| Did we develop this AI system? | [ ] Yes [ ] No | |
| Is it marketed under our name/trademark? | [ ] Yes [ ] No | |
| Did we substantially modify it? | [ ] Yes [ ] No | |
| Are we established in the EU? | [ ] Yes [ ] No | |
| Did we import it from outside EU? | [ ] Yes [ ] No | |
| Do we distribute it to others? | [ ] Yes [ ] No | |
| Do we use it under our authority? | [ ] Yes [ ] No | |

### Role Determination

| Role | Applicable? | Justification |
|------|-------------|---------------|
| Provider | [ ] Yes [ ] No | |
| Deployer | [ ] Yes [ ] No | |
| Importer | [ ] Yes [ ] No | |
| Distributor | [ ] Yes [ ] No | |

### Approval

| Field | Entry |
|-------|-------|
| **Determined Role(s)** | |
| **Approved By** | |
| **Approval Date** | |

---

## Related Documents

- [AI Classification Procedure](../procedures/PROC-AI-CLS-001_FINAL.md)
- [Risk Management Procedure](../procedures/PROC-AI-RM-001_FINAL.md)
- [Conformity Assessment Procedure](../procedures/PROC-AI-CA-001_FINAL.md)

---

## Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2024-12-01 | Enterprise Control Governance | Initial release |
