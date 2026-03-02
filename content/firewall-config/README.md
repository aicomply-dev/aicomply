# Firewall Configuration Translations

This directory contains translations of the `SAFE_FIREWALL_CONFIG.md` file.

## Files

- `en.md` - English (original, complete)
- `de.md` - German (Deutsch) - **Needs translation**
- `fr.md` - French (Français) - **Needs translation**
- `es.md` - Spanish (Español) - **Needs translation**
- `ro.md` - Romanian (Română) - **Needs translation**

## Translation Guidelines

### What to Translate
- ✅ Headings and titles
- ✅ Explanatory text
- ✅ Error messages and troubleshooting
- ✅ Descriptions and notes
- ✅ Status messages

### What NOT to Translate
- ❌ Code blocks (bash commands, configs)
- ❌ Domain names (`*.cursor.sh`, `github.com`)
- ❌ Port numbers (443, 80, 22)
- ❌ IP addresses (100.64.0.0/10)
- ❌ File paths and commands
- ❌ Technical protocol names (HTTPS, SSH, TLS)

## How to Translate

1. Copy `en.md` as a template for your target language
2. Translate all text content while preserving:
   - Markdown formatting
   - Code blocks (keep them in English)
   - Technical terms (keep them in English or use standard translations)
3. Test the translation by viewing the page at `/[locale]/firewall`

## Example

**English:**
```markdown
## Critical Requirements: iptables Policies MUST Be Set

**UFW alone is NOT sufficient for this configuration to work!**
```

**German:**
```markdown
## Kritische Anforderungen: iptables-Richtlinien MÜSSEN festgelegt werden

**UFW allein ist NICHT ausreichend, damit diese Konfiguration funktioniert!**
```

Note: Code blocks remain unchanged in all translations.
