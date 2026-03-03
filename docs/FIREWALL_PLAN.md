# Safe Firewall Configuration Plan

## ⚠️ IMPORTANT: DO NOT ENABLE FIREWALL WITHOUT FOLLOWING THIS PLAN

### Current Situation
- Firewall is currently **INACTIVE** (safe state)
- Server is accessible via SSH
- Need to enable firewall **WITHOUT** locking out SSH access

---

## Step-by-Step Safe Plan

### Phase 1: Preparation (Do First - No Risk)

1. **Verify SSH is running on port 22:**
   ```bash
   sudo netstat -tlnp | grep :22
   # OR
   sudo ss -tlnp | grep :22
   ```

2. **Check current SSH connection:**
   - Ensure you have an active SSH session
   - Open a SECOND SSH session as backup (in case first one drops)
   - Keep both sessions open during firewall setup

3. **Verify UFW is installed:**
   ```bash
   which ufw
   sudo ufw --version
   ```

### Phase 2: Configure Rules (No Risk - Rules Not Active Yet)

1. **Set default policies (deny incoming, allow outgoing):**
   ```bash
   sudo ufw default deny incoming
   sudo ufw default allow outgoing
   ```

2. **Add SSH rule FIRST (critical!):**
   ```bash
   sudo ufw allow 22/tcp comment 'SSH'
   ```

3. **Verify SSH rule was added:**
   ```bash
   sudo ufw status numbered
   # Should show: [1] 22/tcp ALLOW IN
   ```

4. **Add other necessary rules:**
   ```bash
   sudo ufw allow 80/tcp comment 'HTTP'
   sudo ufw allow 443/tcp comment 'HTTPS'
   ```

5. **Review all rules before enabling:**
   ```bash
   sudo ufw status verbose
   # Should show:
   # - Status: inactive
   # - Default: deny (incoming), allow (outgoing)
   # - Rules for 22, 80, 443
   ```

### Phase 3: Enable Firewall (RISK - Do with backup SSH session open)

1. **Open a SECOND SSH session** (backup connection)

2. **In the FIRST session, enable firewall:**
   ```bash
   sudo ufw --force enable
   ```

3. **Immediately verify you still have access:**
   ```bash
   sudo ufw status
   # Should show: Status: active
   ```

4. **Test SSH connection in backup session:**
   - Try to run a command: `whoami`
   - If it works, firewall is configured correctly
   - If it fails, you have the first session to fix it

### Phase 4: Verification

1. **Check firewall status:**
   ```bash
   sudo ufw status verbose
   ```

2. **Test that ports are accessible:**
   ```bash
   # From another machine or using curl
   curl -I http://aicomply.dev
   curl -I https://aicomply.dev
   ```

3. **Monitor firewall logs:**
   ```bash
   sudo tail -f /var/log/ufw.log
   ```

---

## Emergency Rollback Plan

### If Locked Out:

**Option 1: Console Access (if available)**
- Use hosting provider's console/VNC access
- Log in directly to server
- Disable firewall: `sudo ufw disable`

**Option 2: Hosting Provider Panel**
- Some providers allow firewall management via web panel
- Disable firewall from control panel

**Option 3: Recovery Mode**
- Boot into recovery mode
- Mount filesystem
- Disable firewall service

---

## Alternative: Use Cloudflare Firewall Rules

Since you're using Cloudflare, you can:
1. **Use Cloudflare's firewall** instead of UFW
   - Cloudflare already provides DDoS protection
   - Can block IPs at the edge
   - No risk of locking yourself out

2. **Keep UFW disabled** and rely on:
   - Cloudflare DDoS protection
   - Cloudflare WAF
   - Nginx rate limiting
   - Security headers

---

## Recommendation

**Given that you're behind Cloudflare:**
- Cloudflare already provides DDoS protection
- Your origin IP is hidden
- Nginx rate limiting provides additional protection

**You may not need UFW if:**
- Cloudflare is handling edge security
- You're comfortable with Cloudflare + Nginx security
- You want to avoid the risk of lockout

**UFW is still recommended if:**
- You want defense-in-depth
- You want to block direct access to your server
- You're comfortable with the setup process

---

## Safe Command Sequence (Copy-Paste Ready)

```bash
# Step 1: Verify SSH
sudo ss -tlnp | grep :22

# Step 2: Configure rules (firewall still inactive)
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow 22/tcp comment 'SSH'
sudo ufw allow 80/tcp comment 'HTTP'
sudo ufw allow 443/tcp comment 'HTTPS'

# Step 3: Review rules
sudo ufw status verbose

# Step 4: ONLY enable if rules look correct
# Open backup SSH session first!
sudo ufw --force enable

# Step 5: Verify
sudo ufw status
```

---

## Questions to Answer Before Enabling

1. ✅ Do you have console/VNC access to the server? (backup plan)
2. ✅ Can you open a second SSH session? (test connection)
3. ✅ Is SSH running on port 22? (verify)
4. ✅ Are you comfortable with the risk? (your decision)

---

**DO NOT ENABLE FIREWALL UNTIL YOU:**
- Have a backup SSH session open
- Have verified all rules are correct
- Have a rollback plan
- Are ready to proceed

**Last Updated:** December 13, 2025
