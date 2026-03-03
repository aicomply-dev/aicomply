# Safe Tailscale Firewall Setup Plan

## ⚠️ CRITICAL: DO NOT RUN THIS UNTIL YOU HAVE CONSOLE ACCESS

### Why This Plan is Safe:
1. ✅ Verifies Tailscale is authenticated FIRST
2. ✅ Tests SSH access through Tailscale BEFORE enabling firewall
3. ✅ Keeps current SSH session open as backup
4. ✅ Only enables firewall after verification

---

## Step-by-Step Safe Plan

### Prerequisites:
- ✅ You have console/VNC access to the server (backup plan)
- ✅ You have an active SSH session (keep it open!)
- ✅ Tailscale is authenticated and connected

### Phase 1: Verify Tailscale (NO RISK)

```bash
# Check Tailscale status
/usr/bin/tailscale status

# Should show your device as "online" with an IP address
# Example output:
# 100.x.x.x  your-server-name    your-email@example.com  linux   -
```

**If Tailscale shows "NeedsLogin" or "Logged out":**
- Visit the authentication URL shown
- Complete authentication
- Verify with: `/usr/bin/tailscale status`

### Phase 2: Get Tailscale Network (NO RISK)

```bash
# Get your Tailscale IP
TAILSCALE_IP=$(/usr/bin/tailscale ip -4)
echo "Tailscale IP: $TAILSCALE_IP"

# Get Tailscale network (first 3 octets + .0/24)
TAILSCALE_NET=$(/usr/bin/tailscale ip -4 | cut -d. -f1-3).0/24
echo "Tailscale network: $TAILSCALE_NET"

# Verify the network looks correct (should be 100.x.x.0/24)
# Example: 100.64.0.0/24
```

**VERIFY THE NETWORK IS CORRECT BEFORE PROCEEDING!**

### Phase 3: Test SSH Through Tailscale (NO RISK)

```bash
# Get your Tailscale IP
TAILSCALE_IP=$(/usr/bin/tailscale ip -4)

# From ANOTHER device with Tailscale installed:
# Try to SSH using the Tailscale IP:
# ssh user@$TAILSCALE_IP

# If this works, you can proceed
# If this fails, DO NOT enable firewall
```

### Phase 4: Configure Firewall Rules (NO RISK - Firewall Still Inactive)

```bash
# Set defaults
sudo ufw default deny incoming
sudo ufw default allow outgoing

# Get Tailscale network
TAILSCALE_NET=$(/usr/bin/tailscale ip -4 | cut -d. -f1-3).0/24

# Add SSH rule for Tailscale network ONLY
sudo ufw allow from $TAILSCALE_NET to any port 22 comment 'SSH via Tailscale'

# Add public web access
sudo ufw allow 80/tcp comment 'HTTP'
sudo ufw allow 443/tcp comment 'HTTPS'

# Review all rules
sudo ufw status verbose

# Should show:
# - Status: inactive
# - Default: deny (incoming), allow (outgoing)
# - Rule: [1] 22/tcp from 100.x.x.0/24
# - Rule: [2] 80/tcp
# - Rule: [3] 443/tcp
```

**VERIFY THE RULES ARE CORRECT!**

### Phase 5: Enable Firewall (RISK - Only After Verification)

**ONLY DO THIS IF:**
- ✅ Tailscale is authenticated and working
- ✅ You can SSH through Tailscale IP
- ✅ All firewall rules look correct
- ✅ You have console access as backup
- ✅ You have a SECOND SSH session open

```bash
# Enable firewall
sudo ufw --force enable

# Immediately verify status
sudo ufw status verbose

# Should show: Status: active
```

### Phase 6: Test Access

```bash
# Test website (should still work)
curl -I https://aicomply.dev

# Test SSH through Tailscale (from another device)
# ssh user@$TAILSCALE_IP
```

---

## Emergency Rollback

If you get locked out:

### Option 1: Console Access
```bash
# Log in via console/VNC
sudo ufw disable
```

### Option 2: Hosting Provider Panel
- Use web console to access server
- Disable firewall via panel or console

### Option 3: Recovery Mode
- Boot into recovery mode
- Mount filesystem
- Disable UFW service

---

## Complete Safe Command Sequence

**Copy and paste this ENTIRE block when ready:**

```bash
# Step 1: Verify Tailscale
echo "=== Step 1: Verify Tailscale ==="
/usr/bin/tailscale status
TAILSCALE_IP=$(/usr/bin/tailscale ip -4)
echo "Tailscale IP: $TAILSCALE_IP"

# If empty or shows "NeedsLogin", STOP HERE and authenticate

# Step 2: Get network
echo "=== Step 2: Get Network ==="
TAILSCALE_NET=$(/usr/bin/tailscale ip -4 | cut -d. -f1-3).0/24
echo "Tailscale network: $TAILSCALE_NET"

# Step 3: Configure rules (firewall still inactive)
echo "=== Step 3: Configure Rules ==="
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow from $TAILSCALE_NET to any port 22 comment 'SSH via Tailscale'
sudo ufw allow 80/tcp comment 'HTTP'
sudo ufw allow 443/tcp comment 'HTTPS'

# Step 4: Review rules
echo "=== Step 4: Review Rules ==="
sudo ufw status verbose

# Step 5: ONLY enable if everything looks correct
echo "=== Step 5: Enable Firewall ==="
echo "Review the rules above. If correct, run:"
echo "sudo ufw --force enable"
```

---

## What This Achieves

✅ **SSH only accessible via Tailscale** (secure VPN network)
✅ **HTTP/HTTPS still publicly accessible** (for website)
✅ **All other ports blocked** (default deny)
✅ **No risk of lockout** (if you follow the plan)

---

## Current Status

- Firewall: **INACTIVE** (safe)
- Tailscale: **INSTALLED** (needs authentication)
- Website: **WORKING**
- Rate Limiting: **CONFIGURED**

---

**DO NOT ENABLE FIREWALL UNTIL:**
1. Tailscale is authenticated
2. You've tested SSH through Tailscale
3. You've verified all rules
4. You have console access as backup

**Last Updated:** December 13, 2025
