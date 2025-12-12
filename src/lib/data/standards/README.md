# Standards Markdown Files

This directory contains the standard markdown files for all 14 AI Act compliance standards.

## Required Files

Upload the following 14 markdown files to this directory:

1. `STD-AI-001-AI-System-Classification-Standard.md`
2. `STD-AI-002-AI-Risk-Management-Standard.md`
3. `STD-AI-003-AI-Data-Governance-Standard.md`
4. `STD-AI-004-AI-Technical-Documentation-Standard.md`
5. `STD-AI-005-AI-Logging-Record-Keeping-Standard.md`
6. `STD-AI-006-AI-Transparency-Standard.md`
7. `STD-AI-007-AI-Human-Oversight-Standard.md`
8. `STD-AI-008-AI-Accuracy-Robustness-Security-Standard.md`
9. `STD-AI-009-AI-Quality-Management-Standard.md`
10. `STD-AI-010-AI-Conformity-Assessment-Standard.md`
11. `STD-AI-011-AI-Registration-Standard.md`
12. `STD-AI-012-AI-Post-Market-Monitoring-Standard.md`
13. `STD-AI-013-AI-Incident-Management-Standard.md`
14. `STD-AI-014-AI-Literacy-Training-Standard.md`

## File Naming

The files must match the exact names listed above. The application will automatically:
- Parse the markdown content
- Extract controls, KPIs, and requirements
- Display structured content on the standards detail pages

## Upload Instructions

1. Navigate to this directory: `/var/www/aicomply/ai-act-platform/src/lib/data/standards/`
2. Upload all 14 markdown files with the exact names listed above
3. Ensure files have `.md` extension
4. Restart the Next.js server if needed

## Notes

- Files are optional - the application will work without them (using controls from `standard-controls.ts`)
- If files are missing, the page will still load but won't show parsed markdown content
- File operations have timeout protection (2-3 seconds) to prevent hanging
