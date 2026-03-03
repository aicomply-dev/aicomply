# Fixing Redirect Loop on aicomply.dev

## 🔴 Problem
Getting `ERR_TOO_MANY_REDIRECTS` when accessing https://aicomply.dev

## ✅ Solution Applied

### 1. Fixed Root Layout and Page
- **Before:** Root `layout.tsx` and `page.tsx` were redirecting to `/en`
- **After:** Removed redirects - middleware now handles all routing
- **Files changed:**
  - `src/app/layout.tsx` - Now just returns children
  - `src/app/page.tsx` - Now returns null (middleware handles redirect)

### 2. Middleware Handles Routing
The middleware (`src/middleware.ts`) now properly:
- Redirects `/` → `/en` (or user's preferred locale)
- Allows `/en`, `/de`, `/fr`, `/es`, `/ro` to pass through
- Handles authentication checks

## 🔧 Cloudflare Considerations

### Clear Cloudflare Cache
If you're still seeing redirect loops, Cloudflare might be caching the old redirects:

1. **Via Cloudflare Dashboard:**
   - Go to https://dash.cloudflare.com
   - Select `aicomply.dev`
   - Go to **Caching** → **Configuration**
   - Click **Purge Everything** (or **Custom Purge** for specific URLs)

2. **Via API:**
   ```bash
   # You'll need your Cloudflare API token
   curl -X POST "https://api.cloudflare.com/client/v4/zones/{zone_id}/purge_cache" \
     -H "Authorization: Bearer {api_token}" \
     -H "Content-Type: application/json" \
     --data '{"purge_everything":true}'
   ```

### Check Cloudflare SSL Mode
Make sure SSL mode is set correctly:
- Go to Cloudflare Dashboard → **SSL/TLS** → **Overview**
- Should be **"Full"** or **"Full (Strict)"**
- **NOT "Flexible"** (causes redirect issues)

### Disable Cloudflare Caching for Dev
For development, you might want to bypass Cloudflare cache:

1. **Development Mode:**
   - Cloudflare Dashboard → **Caching** → **Configuration**
   - Toggle **"Development Mode"** ON
   - This bypasses cache for 3 hours

2. **Page Rules (Alternative):**
   - Create a rule: `aicomply.dev/*`
   - Set **Cache Level:** Bypass
   - Or set **Cache Level:** Standard with **Edge Cache TTL:** 0 seconds

## 🧪 Testing

### Test Locally First
```bash
# Start dev server
cd /var/www/aicomply/ai-act-platform
npm run dev

# Test in another terminal
curl -I http://localhost:3000/
# Should redirect to /en

curl -I http://localhost:3000/en
# Should return 200 OK
```

### Test via Domain
```bash
# Test root
curl -I https://aicomply.dev/
# Should redirect to /en (307)

# Test English
curl -I https://aicomply.dev/en
# Should return 200 OK

# Test other languages
curl -I https://aicomply.dev/de
curl -I https://aicomply.dev/fr
```

## 🔍 Debugging Steps

### 1. Check Dev Server Logs
```bash
tail -f /tmp/nextjs-dev.log
```

### 2. Check Nginx Logs
```bash
sudo tail -f /var/log/nginx/aicomply.dev.error.log
sudo tail -f /var/log/nginx/aicomply.dev.access.log
```

### 3. Test Direct Connection
```bash
# Bypass Cloudflare (if you know origin IP)
curl -I http://{origin-ip}:3000/en
```

### 4. Check Cloudflare Analytics
- Go to Cloudflare Dashboard → **Analytics**
- Check for error rates
- Look at response codes (should see 200, not 301/302 loops)

## 🎯 Quick Fix Checklist

- [x] Fixed root layout.tsx (removed redirect)
- [x] Fixed root page.tsx (removed redirect)
- [x] Middleware handles locale routing
- [ ] Clear Cloudflare cache
- [ ] Verify SSL mode is "Full" or "Full (Strict)"
- [ ] Enable Development Mode in Cloudflare (temporary)
- [ ] Test after cache clear

## 🚀 After Fixing

Once the redirect loop is fixed:

1. **Access your site:**
   - https://aicomply.dev/en (English)
   - https://aicomply.dev/de (German)
   - https://aicomply.dev/fr (French)
   - https://aicomply.dev/es (Spanish)
   - https://aicomply.dev/ro (Romanian)

2. **Test language switcher:**
   - Click the language dropdown in the header
   - Switch between languages
   - Verify content changes

3. **Disable Development Mode:**
   - After testing, disable Cloudflare Development Mode
   - Configure proper caching rules for production

## 📝 Notes

- The redirect loop was caused by multiple redirect layers (root layout + page + middleware)
- Cloudflare might cache redirects, so clearing cache is important
- Development Mode in Cloudflare helps during testing
- Once fixed, configure proper Cloudflare caching rules for production
