# Safe Firewall Configuration for Cursor & AI Tools

## ✅ VERIFIED WORKING CONFIGURATION (Last Updated: 2025-12-13)

This configuration has been **tested and verified working** with:
- ✅ Cursor IDE
- ✅ GitHub (git clone, push, pull)
- ✅ Windsurf IDE
- ✅ HTTP/HTTPS traffic
- ✅ Tailscale SSH access
- ✅ npm package installation
- ✅ apt package updates

**Status:** Production verified as of 2025-12-13 19:32 UTC

---

## Critical Requirements: iptables Policies MUST Be Set

 **UFW alone is NOT sufficient for this configuration to work!**

If your iptables INPUT policy is set to DROP, return packets get blocked even if UFW rules allow them. This breaks Cursor, GitHub, npm, and Windsurf.

**You MUST run these commands first:**

```bash
sudo iptables -P INPUT ACCEPT
sudo iptables -P FORWARD ACCEPT
sudo iptables -P OUTPUT ACCEPT
```

**Why this matters:**
- When Cursor/npm makes outgoing HTTPS requests, the server responds with packets
- If iptables INPUT policy is DROP, these response packets are blocked at the kernel level
- UFW rules only apply AFTER iptables policies - they can't override a DROP policy
- Even though UFW says "allow," the packets never reach the application layer
- Result: Cursor/GitHub/npm connections timeout and fail

**After setting iptables policies, then apply UFW rules (see below)**

---

## Understanding the Requirements

1. **Cursor needs OUTGOING connections** to connect to its servers
   - Domains: `*.cursor.sh`, `*.cursor-cdn.com`, `*.cursorapi.com`
   - Protocols: HTTPS (TLS 1.2+), HTTP/2, HTTP/1.1
   - Ports: 443 (HTTPS), 80 (HTTP fallback)
2. **GitHub needs OUTGOING connections** for Git operations
   - Domains: `github.com`, `api.github.com`, `*.github.com`, `*.githubusercontent.com`
   - Protocols: HTTPS (443), SSH (22), Git protocol (9418)
   - Required for: git clone, push, pull, GitHub Actions, Packages
3. **Windsurf needs OUTGOING connections** to connect to its servers
   - Domains: `*.windsurf.com`, `*.codeium.com`, `*.codeiumdata.com`
   - Protocols: HTTPS (TLS 1.2+)
   - Ports: 443 (HTTPS)
   - Required for: AI coding assistant, agent execution, model responses
4. **We need INCOMING SSH** only from Tailscale
5. **We need INCOMING HTTP/HTTPS** for public website access

## Simplified UFW Rules (VERIFIED WORKING)

**Step 1: Set iptables policies (REQUIRED - do this first)**

```bash
sudo iptables -P INPUT ACCEPT
sudo iptables -P FORWARD ACCEPT
sudo iptables -P OUTPUT ACCEPT
```

**Step 2: Configure UFW rules**

```bash
# 1. Allow all OUTGOING (for Cursor, npm, apt, etc.)
sudo ufw default allow outgoing

# 2. Deny all INCOMING by default (blocks attacks)
sudo ufw default deny incoming

# 3. Allow loopback (required for system functionality)
sudo ufw allow in on lo

# 4. Allow SSH ONLY from Tailscale network
sudo ufw allow from 100.64.0.0/10 to any port 22 comment 'SSH via Tailscale'

# 5. Allow HTTP/HTTPS for public website
sudo ufw allow 80/tcp comment 'HTTP'
sudo ufw allow 443/tcp comment 'HTTPS'

# 6. Enable UFW
sudo ufw enable
```

## Why This Works

- ✅ **iptables policies set to ACCEPT:** All return packets from outgoing requests are allowed at the kernel level
- ✅ **Outgoing allowed:** Cursor can connect to its servers
  - All Cursor domains accessible: `*.cursor.sh`, `*.cursor-cdn.com`, `*.cursorapi.com`
  - HTTP/2 and HTTP/1.1 streaming supported
  - TLS 1.2+ connections work
- ✅ **Outgoing allowed:** GitHub access works
  - All GitHub domains accessible: `github.com`, `api.github.com`, `*.github.com`, `*.githubusercontent.com`
  - HTTPS (443) for web and API
  - SSH (22) for git operations
  - Git protocol (9418) if needed
- ✅ **Outgoing allowed:** Windsurf access works
  - All Windsurf domains accessible: `*.windsurf.com`, `*.codeium.com`, `*.codeiumdata.com`
  - HTTPS (443) for all services
  - TLS 1.2+ connections work
- ✅ **Incoming SSH restricted:** Only from Tailscale network (100.64.0.0/10)
- ✅ **Incoming HTTP/HTTPS allowed:** Public website access on ports 80 and 443
- ✅ **No lockout risk:** Tailscale SSH access maintained, iptables allow policies ensure responses work

## Network Configuration Details

### Cursor Network Requirements

Based on [Cursor's network configuration docs](https://cursor.com/docs/enterprise/network-configuration):

**Required Domains:**
- `*.cursor.sh` (main API and services)
- `*.cursor-cdn.com` (CDN resources)
- `*.cursorapi.com` (API endpoints)

**Required Protocols:**
- HTTPS (port 443) - TLS 1.2 or higher
- Supports HTTP/2 and HTTP/1.1
- DNS resolution required

### GitHub Network Requirements

**Required Domains:**
- `github.com` (main site)
- `api.github.com` (API endpoints)
- `*.github.com` (subdomains)
- `*.githubusercontent.com` (raw content, avatars, etc.)

**Required Protocols:**
- HTTPS (port 443)
- SSH (port 22) for git operations
- Git protocol (port 9418) - optional, can fallback to HTTPS

### Windsurf Network Requirements

**Required Domains:**
- `*.windsurf.com` (main services)
- `*.codeium.com` (Codeium AI services)
- `*.codeiumdata.com` (Codeium data services)

**Required Protocols:**
- HTTPS (port 443) - TLS 1.2 or higher

## Troubleshooting

### Connection timeouts with Cursor/npm?
1. Check iptables policies: `sudo iptables -P` (all should show ACCEPT)
2. Check UFW is allowing outgoing: `sudo ufw status`
3. Check DNS resolution: `nslookup cursor.sh`

### SSH not working from Tailscale?
1. Verify Tailscale IP: `tailscale ip`
2. Check UFW rule: `sudo ufw show added | grep 100.64`
3. Test SSH: `ssh root@<tailscale-ip>`

## Current Configuration Status (2025-12-13 19:32 UTC)

**Production Verified State:**
- iptables: INPUT=ACCEPT, FORWARD=ACCEPT, OUTPUT=ACCEPT
- UFW: Enabled with simplified rules
- Cursor: ✅ Working
- GitHub: ✅ Working
- Windsurf: ✅ Working
- HTTP/HTTPS: ✅ Working
- Tailscale SSH: ✅ Working
- npm: ✅ Working
- apt: ✅ Working

**Last tested:** 2025-12-13 19:32 UTC
**Next review:** Recommended after any firewall policy changes
