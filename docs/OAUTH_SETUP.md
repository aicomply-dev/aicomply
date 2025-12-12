# OAuth Authentication Setup Guide

This guide will help you set up Google and GitHub OAuth authentication for the AI Comply platform.

## Prerequisites

1. A Google Cloud Console account
2. A GitHub account
3. Environment variables file (`.env` or `.env.local`)

## Configuration Steps

### 1. Set up Environment Variables

Copy the `.env.example` file to `.env.local`:

```bash
cp .env.example .env.local
```

### 2. Generate NextAuth Secret

Generate a secure random string for NextAuth:

```bash
openssl rand -base64 32
```

Add this to your `.env.local`:
```
NEXTAUTH_SECRET="your-generated-secret-here"
# For production (aicomply.dev)
NEXTAUTH_URL="https://aicomply.dev"
# For local development
# NEXTAUTH_URL="http://localhost:3000"
```

### 3. Google OAuth Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Navigate to **APIs & Services** > **Credentials**
4. Click **Create Credentials** > **OAuth client ID**
5. Configure OAuth consent screen if prompted:
   - Choose "External" for user type
   - Fill in required fields (app name, support email, etc.)
   - Add scopes: `email`, `profile`, `openid`
6. For the OAuth client:
   - Application type: **Web application**
   - Name: "AI Comply Platform"
   - Authorized JavaScript origins:
     - `https://aicomply.dev`
     - `http://localhost:3000` (for local development)
   - Authorized redirect URIs:
     - `https://aicomply.dev/api/auth/callback/google`
     - `http://localhost:3000/api/auth/callback/google` (for local development)
7. Copy the **Client ID** and **Client Secret**
8. Add to `.env.local`:
   ```
   GOOGLE_CLIENT_ID="your-google-client-id"
   GOOGLE_CLIENT_SECRET="your-google-client-secret"
   ```

### 4. GitHub OAuth Setup

1. Go to [GitHub Settings > Developer Settings](https://github.com/settings/developers)
2. Click **OAuth Apps** > **New OAuth App**
3. Fill in the details:
   - Application name: "AI Comply Platform"
   - Homepage URL: `https://aicomply.dev`
   - Authorization callback URL: `https://aicomply.dev/api/auth/callback/github`

   For local development, you may want to create a separate OAuth app with:
   - Homepage URL: `http://localhost:3000`
   - Authorization callback URL: `http://localhost:3000/api/auth/callback/github`
4. Click **Register application**
5. Copy the **Client ID**
6. Click **Generate a new client secret** and copy it
7. Add to `.env.local`:
   ```
   GITHUB_CLIENT_ID="your-github-client-id"
   GITHUB_CLIENT_SECRET="your-github-client-secret"
   ```

### 5. Production Setup

The configuration is already set up for production on aicomply.dev:

1. Ensure `NEXTAUTH_URL` is set in your production environment:
   ```
   NEXTAUTH_URL="https://aicomply.dev"
   ```

2. OAuth providers are configured for:
   - **Google**: `https://aicomply.dev/api/auth/callback/google`
   - **GitHub**: `https://aicomply.dev/api/auth/callback/github`

3. Set all environment variables on the server:
   ```bash
   # Generate and set the secret
   export NEXTAUTH_SECRET="$(openssl rand -base64 32)"
   export NEXTAUTH_URL="https://aicomply.dev"
   export GOOGLE_CLIENT_ID="your-google-client-id"
   export GOOGLE_CLIENT_SECRET="your-google-client-secret"
   export GITHUB_CLIENT_ID="your-github-client-id"
   export GITHUB_CLIENT_SECRET="your-github-client-secret"
   ```

## Database Schema

The authentication system uses the following tables:

- **user**: Stores user information
- **account**: Links OAuth accounts to users
- **session**: Manages user sessions
- **verification**: Handles email verification tokens

Run migrations to ensure your database is up to date:

```bash
npm run db:migrate
```

## Testing OAuth

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Navigate to `https://aicomply.dev/auth/login` (or `http://localhost:3000/auth/login` for local dev)

3. Click on "Google" or "GitHub" buttons

4. Complete the OAuth flow

5. You should be redirected to the dashboard upon successful authentication

## Troubleshooting

### Common Issues

1. **"Invalid redirect_uri" error**
   - Ensure the callback URLs match exactly in your OAuth provider settings
   - Check for trailing slashes

2. **"Missing required parameter" error**
   - Verify all environment variables are set correctly
   - Check that there are no extra spaces or quotes in the values

3. **Database errors**
   - Run `npm run db:migrate` to ensure schema is up to date
   - Check database connection settings

### Security Best Practices

1. **Never commit `.env.local` to version control**
2. **Use different OAuth apps for development and production**
3. **Regularly rotate your secrets**
4. **Enable 2FA on your Google and GitHub accounts**
5. **Review OAuth app permissions regularly**

## Features

The OAuth implementation includes:

- ✅ Google authentication
- ✅ GitHub authentication
- ✅ Email/password authentication (fallback)
- ✅ Session management with JWT
- ✅ Automatic organization creation for new users
- ✅ Protected routes with middleware
- ✅ User menu with sign out functionality

## Next Steps

1. Customize the authentication flow in `/src/lib/auth.ts`
2. Add more OAuth providers if needed (Microsoft, LinkedIn, etc.)
3. Implement role-based access control
4. Add email verification for password-based registration
5. Set up password reset functionality