# Troubleshooting Guide

## Database Issues

### Error: "no such table: learning_module"

**Cause:** The database migrations haven't been run, so the tables don't exist.

**Solution:**

```bash
# Option 1: Reset and seed (recommended)
bun run db:reset

# Option 2: Run migrations only
bun run db:migrate

# Option 3: If bun is not in PATH
export PATH="$HOME/.bun/bin:$PATH"
bun run db:migrate

# Option 4: Use npx directly
npx drizzle-kit migrate
```

**Verification:**

After running migrations, verify tables exist:
```bash
# Check database file size (should be > 0 bytes)
ls -lh sqlite.db

# If you have sqlite3 installed
sqlite3 sqlite.db ".tables"
```

### Database File is Empty (0 bytes)

If `sqlite.db` exists but is 0 bytes, it means migrations haven't been applied:

```bash
# Delete empty database
rm sqlite.db

# Run migrations to create fresh database
bun run db:migrate

# Seed with demo data
bun run db:seed
```

### Missing Tables After Clone

When cloning the repository, the database file is gitignored, so you need to:

1. **Run migrations:**
   ```bash
   bun run db:migrate
   ```

2. **Seed with demo data:**
   ```bash
   bun run db:seed
   ```

3. **Or do both in one command:**
   ```bash
   bun run db:reset
   ```

## Common Issues

### "bun: command not found"

**Solution:**
```bash
# Add bun to PATH
export PATH="$HOME/.bun/bin:$PATH"

# Or install bun
curl -fsSL https://bun.sh/install | bash
```

### "drizzle-kit: command not found"

**Solution:**
```bash
# Install dependencies first
bun install

# Or use npx
npx drizzle-kit migrate
```

### Port Already in Use

If port 3000 is already in use:

```bash
# Find and kill the process
lsof -ti:3000 | xargs kill -9

# Or use a different port
PORT=3001 bun run dev
```

### Module Not Found Errors

**Solution:**
```bash
# Clear node_modules and reinstall
rm -rf node_modules .next
bun install
```

## Getting Help

1. Check the [README.md](./README.md) for setup instructions
2. Review [DATABASE_SETUP.md](./DATABASE_SETUP.md) for database-specific help
3. Open an issue on GitHub with:
   - Error message
   - Steps to reproduce
   - Your environment (OS, Node/Bun version)
