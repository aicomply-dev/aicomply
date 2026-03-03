# Accessing the Development Server via Tailscale

## 🌐 Your Tailscale IP

Your server's Tailscale IP address is: **100.97.188.31**

## 🚀 Starting the Server for Tailscale Access

The dev server is now configured to listen on all interfaces (0.0.0.0), making it accessible from your Tailscale network.

### Start the Development Server

```bash
npm run dev
```

The server will start and be accessible on:
- **Local machine**: http://localhost:3000
- **Tailscale network**: http://100.97.188.31:3000

## 🔥 Firewall Configuration

### Allow Port 3000 from Tailscale Network

If you need to allow port 3000 through the firewall for Tailscale access:

```bash
# Allow port 3000 from Tailscale network only
sudo ufw allow from 100.64.0.0/10 to any port 3000 comment 'Next.js dev server via Tailscale'
```

Or if you want to allow from any Tailscale IP (less secure but simpler):

```bash
sudo ufw allow 3000/tcp comment 'Next.js dev server'
```

### Check Firewall Status

```bash
sudo ufw status
```

## 📱 Accessing from Other Devices

### From Another Computer on Tailscale

1. Make sure the dev server is running on the server
2. Open a browser on your other device
3. Navigate to:

**English:**
```
http://100.97.188.31:3000/en
```

**Other Languages:**
- German: `http://100.97.188.31:3000/de`
- French: `http://100.97.188.31:3000/fr`
- Spanish: `http://100.97.188.31:3000/es`
- Romanian: `http://100.97.188.31:3000/ro`

### From Mobile Device on Tailscale

Same URLs as above - just use your mobile browser:
```
http://100.97.188.31:3000/en
```

## 🔍 Troubleshooting

### Can't Access from Tailscale?

1. **Check if server is running:**
   ```bash
   # On the server
   curl http://localhost:3000
   ```

2. **Check firewall:**
   ```bash
   sudo ufw status numbered
   ```

3. **Check if port is listening:**
   ```bash
   sudo netstat -tlnp | grep 3000
   # or
   sudo ss -tlnp | grep 3000
   ```

4. **Verify Tailscale connection:**
   ```bash
   tailscale status
   ```

5. **Test connectivity from another device:**
   ```bash
   # From another Tailscale device
   ping 100.97.188.31
   curl http://100.97.188.31:3000
   ```

### Server Only Accessible Locally?

Make sure the dev script includes `-H 0.0.0.0`:
```json
"dev": "next dev --turbopack -H 0.0.0.0"
```

### Firewall Blocking?

Temporarily disable firewall to test (NOT recommended for production):
```bash
sudo ufw disable  # Test only!
sudo ufw enable   # Re-enable after testing
```

## 🔒 Security Notes

- The dev server is only accessible from your Tailscale network (private IP range)
- Port 3000 should only be open to Tailscale network (100.64.0.0/10)
- This is safe for development, but use proper production setup for public access

## 📝 Quick Reference

**Server Tailscale IP:** `100.97.188.31`  
**Port:** `3000`  
**Access URL:** `http://100.97.188.31:3000/en`

**Start Server:**
```bash
npm run dev
```

**Allow Firewall (if needed):**
```bash
sudo ufw allow from 100.64.0.0/10 to any port 3000
```
