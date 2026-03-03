# GitHub Deploy Key Setup

This guide explains how to set up and use a GitHub deploy key for this repository.

## What is a Deploy Key?

A deploy key is an SSH key that grants access to a single repository. It's useful for:
- Automated deployments
- CI/CD pipelines
- Server-side git operations
- Read-only or read-write access to a specific repository

## Generated Deploy Key

A deploy key has been generated for this repository:

- **Private Key:** `.github_deploy_key` (gitignored - keep this secure!)
- **Public Key:** `.github_deploy_key.pub` (add this to GitHub)

## Setup Instructions

### 1. Get the Public Key

```bash
cat .github_deploy_key.pub
```

Copy the entire output (starts with `ssh-ed25519` or `ssh-rsa`).

### 2. Add to GitHub

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Deploy keys**
3. Click **Add deploy key**
4. Paste the public key content
5. Give it a title (e.g., "Production Server" or "CI/CD Deploy Key")
6. Choose access level:
   - ✅ **Allow write access** - if you need to push commits
   - ❌ **Read-only** - if you only need to pull/clone
7. Click **Add key**

### 3. Test the Deploy Key

```bash
# Test SSH connection
ssh -T git@github.com -i .github_deploy_key

# Clone using the deploy key
GIT_SSH_COMMAND="ssh -i .github_deploy_key" git clone git@github.com:username/repo.git

# Or configure git to use the key
git config core.sshCommand "ssh -i .github_deploy_key"
```

## Using the Deploy Key

### Option 1: Use with Git Commands

```bash
# Set SSH command for this repository
git config core.sshCommand "ssh -i .github_deploy_key"

# Now normal git commands will use the deploy key
git pull
git push
```

### Option 2: Use with GIT_SSH_COMMAND

```bash
# For one-time commands
GIT_SSH_COMMAND="ssh -i .github_deploy_key" git pull
GIT_SSH_COMMAND="ssh -i .github_deploy_key" git push
```

### Option 3: SSH Config (Recommended)

Add to `~/.ssh/config`:

```
Host github-deploy
    HostName github.com
    User git
    IdentityFile /var/www/aicomply/ai-act-platform/.github_deploy_key
    IdentitiesOnly yes
```

Then use:
```bash
git remote set-url origin git@github-deploy:username/repo.git
```

## Security Best Practices

1. **Never commit the private key** - It's already in `.gitignore`
2. **Restrict file permissions:**
   ```bash
   chmod 600 .github_deploy_key
   chmod 644 .github_deploy_key.pub
   ```
3. **Use read-only access** when possible
4. **Rotate keys periodically**
5. **Revoke old keys** when no longer needed

## Troubleshooting

### Permission Denied

```bash
# Check key permissions
ls -la .github_deploy_key

# Fix permissions
chmod 600 .github_deploy_key
```

### Key Not Working

1. Verify the public key is added to GitHub (Settings → Deploy keys)
2. Check the key has correct permissions (read-only vs write)
3. Test connection: `ssh -T git@github.com -i .github_deploy_key`

### Multiple Keys

If you have multiple SSH keys, specify which one to use:

```bash
ssh-add .github_deploy_key
```

## Regenerating Keys

If you need to regenerate:

```bash
# Remove old keys
rm .github_deploy_key .github_deploy_key.pub

# Generate new key
ssh-keygen -t ed25519 -C "deploy-key-$(date +%Y%m%d)" -f .github_deploy_key -N ""

# Add new public key to GitHub (remove old one first)
cat .github_deploy_key.pub
```

## CI/CD Integration

For GitHub Actions or other CI/CD:

```yaml
# Example GitHub Actions
- name: Setup SSH
  run: |
    mkdir -p ~/.ssh
    echo "${{ secrets.DEPLOY_KEY }}" > ~/.ssh/id_ed25519
    chmod 600 ~/.ssh/id_ed25519
    ssh-keyscan github.com >> ~/.ssh/known_hosts
```

Store the private key content in your CI/CD secrets.
