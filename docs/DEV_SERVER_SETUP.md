# Development Server Setup for aicomply.dev

## ✅ Current Status

**Production Server:** Stopped  
**Development Server:** Running on port 3000  
**Nginx:** Configured to proxy aicomply.dev → localhost:3000

## 🌐 Access URLs

Your development server is now accessible via:

**Main Domain:**
- https://aicomply.dev/en (English)
- https://aicomply.dev/de (German)
- https://aicomply.dev/fr (French)
- https://aicomply.dev/es (Spanish)
- https://aicomply.dev/ro (Romanian)

**Direct Access (if needed):**
- http://localhost:3000/en (from server)
- http://100.97.188.31:3000/en (via Tailscale)

## 🚀 Managing the Dev Server

### Start Dev Server

```bash
cd /var/www/aicomply/ai-act-platform
npm run dev
```

Or run in background:
```bash
cd /var/www/aicomply/ai-act-platform
npm run dev > /tmp/nextjs-dev.log 2>&1 &
```

### Stop Dev Server

```bash
# Find the process
ps aux | grep "next dev"

# Kill it
kill <PID>
```

Or if running in foreground, press `Ctrl+C`

### View Dev Server Logs

```bash
tail -f /tmp/nextjs-dev.log
```

## 🔄 Switching Back to Production

When you want to switch back to production:

1. **Stop dev server:**
   ```bash
   pkill -f "next dev"
   ```

2. **Start production service:**
   ```bash
   sudo systemctl start ai-act-platform
   ```

3. **Check status:**
   ```bash
   sudo systemctl status ai-act-platform
   ```

## 📝 Notes

- The dev server is configured to listen on `0.0.0.0:3000` (all interfaces)
- Nginx automatically proxies requests from aicomply.dev to localhost:3000
- Hot reload is enabled - changes will automatically refresh
- The dev server shows detailed error messages and stack traces

## 🐛 Troubleshooting

### Dev server not accessible via domain?

1. **Check if dev server is running:**
   ```bash
   curl http://localhost:3000
   ```

2. **Check nginx status:**
   ```bash
   sudo systemctl status nginx
   ```

3. **Check nginx logs:**
   ```bash
   sudo tail -f /var/log/nginx/aicomply.dev.error.log
   ```

4. **Reload nginx:**
   ```bash
   sudo systemctl reload nginx
   ```

### Port 3000 already in use?

```bash
# Find what's using port 3000
sudo lsof -i :3000

# Kill it if needed
kill <PID>
```

### Need to restart everything?

```bash
# Stop dev server
pkill -f "next dev"

# Restart nginx
sudo systemctl restart nginx

# Start dev server
cd /var/www/aicomply/ai-act-platform
npm run dev
```
