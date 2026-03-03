# Production OAuth Setup for aicomply.dev

This guide provides exact steps to set up OAuth authentication for the production deployment at https://aicomply.dev.

## 🔑 Environment Variables Setup

Set these environment variables on your server:

```bash
# Generate a secure NextAuth secret
export NEXTAUTH_SECRET="$(openssl rand -base64 32)"

# Production URL
export NEXTAUTH_URL="https://aicomply.dev"

# Google OAuth (get from Google Cloud Console)
export GOOGLE_CLIENT_ID="your-google-client-id"
export GOOGLE_CLIENT_SECRET="your-google-client-secret"

# GitHub OAuth (get from GitHub Developer Settings)
export GITHUB_CLIENT_ID="your-github-client-id"
export GITHUB_CLIENT_SECRET="your-github-client-secret"
```

## 🌐 Google OAuth Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Navigate to **APIs & Services** > **Credentials**
4. Click **Create Credentials** > **OAuth client ID**
5. Configure OAuth consent screen:
   - User type: **External**
   - App name: **AI Comply Platform**
   - Support email: Your email
   - App domain: `aicomply.dev`
   - Developer contact: Your email
6. Create OAuth client:
   - Application type: **Web application**
   - Name: **AI Comply Platform Production**
   - Authorized JavaScript origins: `https://aicomply.dev`
   - Authorized redirect URIs: `https://aicomply.dev/api/auth/callback/google`
7. Copy Client ID and Client Secret
8. Set environment variables:
   ```bash
   export GOOGLE_CLIENT_ID="your-client-id-here"
   export GOOGLE_CLIENT_SECRET="your-client-secret-here"
   ```

## 🐙 GitHub OAuth Setup

1. Go to [GitHub Settings > Developer Settings > OAuth Apps](https://github.com/settings/developers)
2. Click **New OAuth App**
3. Fill in details:
   - **Application name**: AI Comply Platform
   - **Homepage URL**: `https://aicomply.dev`
   - **Application description**: EU AI Act Compliance Platform
   - **Authorization callback URL**: `https://aicomply.dev/api/auth/callback/github`
4. Click **Register application**
5. Copy the **Client ID**
6. Click **Generate a new client secret** and copy it
7. Set environment variables:
   ```bash
   export GITHUB_CLIENT_ID="your-github-client-id"
   export GITHUB_CLIENT_SECRET="your-github-client-secret"
   ```

## 🛠 Server Setup Commands

Run these commands on the aicomply.dev server:

```bash
# Navigate to project directory
cd /var/www/aicomply/ai-act-platform

# Set environment variables (replace with actual values)
export NEXTAUTH_SECRET="$(openssl rand -base64 32)"
export NEXTAUTH_URL="https://aicomply.dev"
export GOOGLE_CLIENT_ID="your-google-client-id"
export GOOGLE_CLIENT_SECRET="your-google-client-secret"
export GITHUB_CLIENT_ID="your-github-client-id"
export GITHUB_CLIENT_SECRET="your-github-client-secret"

# Optional: Add to .env.local for persistence
cat > .env.local << EOF
NEXTAUTH_SECRET="$NEXTAUTH_SECRET"
NEXTAUTH_URL="https://aicomply.dev"
GOOGLE_CLIENT_ID="$GOOGLE_CLIENT_ID"
GOOGLE_CLIENT_SECRET="$GOOGLE_CLIENT_SECRET"
GITHUB_CLIENT_ID="$GITHUB_CLIENT_ID"
GITHUB_CLIENT_SECRET="$GITHUB_CLIENT_SECRET"
EOF

# Run database migrations
npm run db:migrate

# Build the application
npm run build

# Start/restart the application
npm run start
```

## ✅ Testing OAuth

1. Visit `https://aicomply.dev/auth/login`
2. You should see Google and GitHub login buttons
3. Click either button to test the OAuth flow
4. After successful authentication, you should be redirected to the dashboard

## 🔧 Troubleshooting

### Common Issues:

1. **"redirect_uri_mismatch" error**:
   - Ensure callback URLs exactly match: `https://aicomply.dev/api/auth/callback/google` or `https://aicomply.dev/api/auth/callback/github`
   - No trailing slashes
   - Exact protocol (https://)

2. **"Invalid client" error**:
   - Check that client ID and secret are correctly set
   - Ensure no extra spaces in environment variables

3. **CORS errors**:
   - Add `https://aicomply.dev` to authorized origins in Google Console
   - Ensure OAuth app is properly configured for production domain

4. **Session errors**:
   - Check that `NEXTAUTH_SECRET` is properly set
   - Ensure `NEXTAUTH_URL` matches the actual domain

### Verification Commands:

```bash
# Check environment variables are set
echo "NEXTAUTH_URL: $NEXTAUTH_URL"
echo "GOOGLE_CLIENT_ID: $GOOGLE_CLIENT_ID"
echo "GITHUB_CLIENT_ID: $GITHUB_CLIENT_ID"

# Check if NextAuth API route is working
curl https://aicomply.dev/api/auth/providers
```

## 🚀 Production Checklist

- [ ] Google OAuth app created with correct redirect URI
- [ ] GitHub OAuth app created with correct callback URL
- [ ] All environment variables set on server
- [ ] Database migrations run
- [ ] Application built and deployed
- [ ] OAuth flows tested and working
- [ ] SSL/HTTPS enabled on aicomply.dev
- [ ] DNS pointing to correct server

## 🔐 Security Notes

- Keep OAuth client secrets secure and never commit to version control
- Use HTTPS for all OAuth callbacks in production
- Regularly rotate OAuth secrets
- Monitor OAuth app usage in Google/GitHub consoles
- Enable 2FA on Google and GitHub accounts that manage these OAuth apps

Once configured, users will be able to sign in with:
- ✅ Google accounts
- ✅ GitHub accounts
- ✅ Email/password (existing functionality)

The authentication system will automatically create organizations for new OAuth users and manage sessions securely.