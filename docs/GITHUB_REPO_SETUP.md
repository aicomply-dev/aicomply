# GitHub Repository Setup Guide

This guide helps you configure the GitHub repository homepage at [https://github.com/aicomply-dev/aicomply](https://github.com/aicomply-dev/aicomply).

## Repository Settings to Update

### 1. Description

Add this description to the repository:

```
Open-source platform for understanding, assessing, implementing, and delivering EU AI Act compliance
```

Or shorter version:

```
Open-source EU AI Act (Regulation 2024/1689) compliance platform
```

### 2. Website URL (if available)

If you have a deployed version, add the URL:
- Example: `https://aicomply.dev` or your production URL

### 3. Topics/Tags

Add these topics to make the repository discoverable:

```
ai-act
eu-ai-act
compliance
ai-compliance
ai-regulation
eu-regulation
compliance-platform
ai-governance
risk-management
nextjs
typescript
open-source
mit-license
```

### 4. Repository Visibility

Ensure it's set to **Public** (already appears to be public).

## How to Update

### Via GitHub Web Interface

1. Go to [https://github.com/aicomply-dev/aicomply](https://github.com/aicomply-dev/aicomply)
2. Click the **⚙️ Settings** tab (gear icon)
3. Scroll down to **General** section
4. Update:
   - **Description** - Add the description above
   - **Website** - Add your website URL (if available)
   - **Topics** - Add the topics listed above
5. Click **Save changes**

### Via GitHub CLI (gh)

```bash
# Set description
gh repo edit aicomply-dev/aicomply --description "Open-source platform for understanding, assessing, implementing, and delivering EU AI Act compliance"

# Add topics
gh repo edit aicomply-dev/aicomply --add-topic ai-act --add-topic eu-ai-act --add-topic compliance --add-topic ai-compliance --add-topic ai-regulation --add-topic eu-regulation --add-topic compliance-platform --add-topic ai-governance --add-topic risk-management --add-topic nextjs --add-topic typescript --add-topic open-source --add-topic mit-license

# Set website (if available)
gh repo edit aicomply-dev/aicomply --homepage "https://aicomply.dev"
```

## README Badge Suggestions

You can add badges to the README. Here's an example:

```markdown
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue)
![Bun](https://img.shields.io/badge/Bun-1.0-black)
```

## Social Preview

GitHub will automatically generate a social preview card from your README. Make sure your README has:
- Clear title
- Good description
- Installation instructions
- Usage examples

## Additional Settings

### Enable Discussions (Optional)

1. Go to **Settings** → **General** → **Features**
2. Enable **Discussions**
3. This allows community Q&A and discussions

### Enable Issues (Recommended)

1. Go to **Settings** → **General** → **Features**
2. Ensure **Issues** is enabled
3. This allows bug reports and feature requests

### Enable Wiki (Optional)

1. Go to **Settings** → **General** → **Features**
2. Enable **Wiki** if you want additional documentation

## Repository URL

Once configured, your repository will be accessible at:
- **Repository:** https://github.com/aicomply-dev/aicomply
- **Homepage:** (set in settings)
- **Issues:** https://github.com/aicomply-dev/aicomply/issues
- **Discussions:** https://github.com/aicomply-dev/aicomply/discussions (if enabled)

## Quick Setup Script

If you have GitHub CLI installed:

```bash
# Navigate to repository
cd /var/www/aicomply/ai-act-platform

# Update repository settings
gh repo edit aicomply-dev/aicomply \
  --description "Open-source platform for understanding, assessing, implementing, and delivering EU AI Act compliance" \
  --add-topic ai-act \
  --add-topic eu-ai-act \
  --add-topic compliance \
  --add-topic ai-compliance \
  --add-topic ai-regulation \
  --add-topic eu-regulation \
  --add-topic compliance-platform \
  --add-topic ai-governance \
  --add-topic risk-management \
  --add-topic nextjs \
  --add-topic typescript \
  --add-topic open-source \
  --add-topic mit-license

# If you have a website
gh repo edit aicomply-dev/aicomply --homepage "https://aicomply.dev"
```

## Verification

After updating, verify the changes:
1. Visit the repository homepage
2. Check that description appears below the repository name
3. Verify topics appear below the description
4. Confirm website link appears (if set)
