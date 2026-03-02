# Consolidated Workbook Guide

## Document Information

| Field | Value |
|-------|-------|
| **Document ID** | TOOL-WB-001 |
| **Version** | 1.0 |
| **Status** | Ready to Use |
| **Owner** | AI Act Program Manager |
| **Last Updated** | 2024-12-01 |

## Purpose

This guide explains how to use the AI Act Consolidated Workbook for tracking compliance progress, managing requirements, and generating reports. The workbook provides a centralized view of your organization's EU AI Act compliance status.

---

## Workbook Overview

The Consolidated Workbook contains the following sheets:

| Sheet | Purpose | Update Frequency |
|-------|---------|------------------|
| **Dashboard** | Executive summary and KPIs | Auto-calculated |
| **AI Systems Inventory** | List of all AI systems | As systems change |
| **Requirements Matrix** | Requirements by system | Weekly |
| **Controls Tracker** | Control implementation status | Weekly |
| **Evidence Log** | Evidence documentation | As evidence collected |
| **Gap Analysis** | Compliance gaps and remediation | Monthly |
| **Timeline** | Compliance milestones | Monthly |
| **Reports** | Pre-built report templates | As needed |

---

## Getting Started

### Step 1: Initial Setup

1. Download the workbook template
2. Enable macros if prompted
3. Configure organization settings on the **Settings** sheet:
   - Organization name
   - Primary contact
   - Reporting period
   - Risk tolerance thresholds

### Step 2: Populate AI Systems Inventory

For each AI system, enter:

| Field | Description | Example |
|-------|-------------|---------|
| System ID | Unique identifier | AI-SYS-001 |
| System Name | Descriptive name | Customer Support Chatbot |
| Description | Brief description | AI-powered customer service assistant |
| Risk Level | Classification result | Limited |
| Operator Role | Your role | Deployer |
| Status | Current status | Active |
| Owner | Responsible person | Jane Smith |
| Department | Owning department | Customer Service |
| Go-Live Date | When deployed | 2024-01-15 |

### Step 3: Map Requirements

For each AI system:

1. Navigate to **Requirements Matrix** sheet
2. Select the system from the dropdown
3. Requirements will auto-populate based on risk level and role
4. Update status for each requirement:
   - Not Started
   - In Progress
   - Implemented
   - Verified

---

## Sheet-by-Sheet Guide

### Dashboard Sheet

The Dashboard provides at-a-glance visibility into:

**Key Metrics:**
- Total AI systems count
- Systems by risk level (pie chart)
- Overall compliance percentage
- Requirements completion rate
- Controls implementation rate
- Upcoming deadlines

**Traffic Light Indicators:**
- 🟢 Green: On track (>80% complete)
- 🟡 Yellow: At risk (50-80% complete)
- 🔴 Red: Off track (<50% complete)

### AI Systems Inventory Sheet

**Columns:**
| Column | Description |
|--------|-------------|
| A | System ID |
| B | System Name |
| C | Description |
| D | Risk Level |
| E | Operator Role |
| F | Status |
| G | Owner |
| H | Department |
| I | Vendor (if applicable) |
| J | Go-Live Date |
| K | Last Assessment Date |
| L | Next Review Date |
| M | Notes |

**Data Validation:**
- Risk Level: Dropdown (Prohibited, High, Limited, Minimal)
- Operator Role: Dropdown (Provider, Deployer, Importer, Distributor)
- Status: Dropdown (Planning, Development, Active, Inactive, Decommissioned)

### Requirements Matrix Sheet

**Structure:**
- Rows: Individual requirements
- Columns: AI systems
- Cells: Status indicators

**Status Options:**
| Status | Code | Color |
|--------|------|-------|
| Not Applicable | N/A | Gray |
| Not Started | NS | Red |
| In Progress | IP | Yellow |
| Implemented | IM | Light Green |
| Verified | VE | Dark Green |

**Filtering:**
- Filter by Article
- Filter by Category
- Filter by Status
- Filter by System

### Controls Tracker Sheet

Track implementation of each control:

| Column | Description |
|--------|-------------|
| Control ID | Unique control identifier |
| Control Name | Descriptive name |
| Category | Control category |
| Article | Related EU AI Act article |
| Owner | Responsible person |
| Status | Implementation status |
| Target Date | Planned completion |
| Actual Date | Actual completion |
| Evidence | Link to evidence |
| Notes | Additional notes |

### Evidence Log Sheet

Document all compliance evidence:

| Column | Description |
|--------|-------------|
| Evidence ID | Unique identifier |
| Title | Evidence title |
| Type | Document type |
| System(s) | Related AI systems |
| Requirement(s) | Related requirements |
| Control(s) | Related controls |
| Location | File path or URL |
| Date Created | When created |
| Date Reviewed | Last review date |
| Reviewer | Who reviewed |
| Status | Current/Archived |

### Gap Analysis Sheet

Track and remediate compliance gaps:

| Column | Description |
|--------|-------------|
| Gap ID | Unique identifier |
| System | Affected AI system |
| Requirement | Related requirement |
| Gap Description | What is missing |
| Risk Rating | Impact if not addressed |
| Remediation Plan | How to close gap |
| Owner | Responsible person |
| Target Date | Planned closure |
| Status | Open/In Progress/Closed |
| Closure Date | When closed |

---

## Formulas and Calculations

### Compliance Percentage

```
=COUNTIF(StatusRange,"Verified")/COUNTA(StatusRange)*100
```

### Days Until Deadline

```
=TargetDate-TODAY()
```

### Risk Score

```
=IF(RiskLevel="High",3,IF(RiskLevel="Limited",2,1))*IF(Status="Not Started",3,IF(Status="In Progress",2,1))
```

---

## Reporting

### Pre-Built Reports

1. **Executive Summary**: High-level compliance status
2. **System Detail Report**: Per-system compliance breakdown
3. **Gap Report**: All open gaps with remediation status
4. **Evidence Report**: Evidence inventory by system
5. **Timeline Report**: Milestone tracking

### Generating Reports

1. Navigate to **Reports** sheet
2. Select report type from dropdown
3. Set date range (if applicable)
4. Click "Generate Report" button
5. Report populates in designated area
6. Export to PDF or print as needed

---

## Best Practices

### Data Entry

- ✅ Use consistent naming conventions
- ✅ Update status weekly at minimum
- ✅ Link evidence to specific requirements
- ✅ Add notes for context
- ❌ Don't leave fields blank
- ❌ Don't use free text where dropdowns exist

### Maintenance

- Review Dashboard weekly
- Update Requirements Matrix as work progresses
- Archive completed evidence monthly
- Backup workbook before major updates
- Version control: Save dated copies

### Collaboration

- Use shared network location or SharePoint
- Establish update schedule with owners
- Lock cells that shouldn't be edited
- Use comments for discussions
- Track changes if multiple editors

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Formulas not calculating | Press F9 to recalculate |
| Dropdowns not working | Check Data Validation settings |
| Charts not updating | Refresh data source |
| Slow performance | Reduce conditional formatting |
| File too large | Archive old data to separate file |

---

## Related Documents

- [Controls Catalog](./AI-ACT-CONTROLS-CATALOG.md)
- [Risk Classification Template](./AI-SYSTEM-RISK-CLASSIFICATION-TEMPLATE.md)
- [Role Determination Process](./AI-ACT-ROLE-DETERMINATION-PROCESS.md)

---

## Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2024-12-01 | AI Act Program Manager | Initial release |
