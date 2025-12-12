# Database Setup Guide

This guide explains how to set up the database with demo data for the AI Act Compliance Platform.

## Quick Start

After cloning the repository, run:

```bash
# Install dependencies
bun install

# Setup database with demo data
bun run db:reset
```

This will:
1. Delete any existing database
2. Run migrations to create schema
3. Seed with demo data (10 AI systems, requirements, gap analysis)

## Manual Setup

If you prefer step-by-step:

```bash
# 1. Generate migrations (if schema changed)
bun run db:generate

# 2. Apply migrations (creates empty database)
bun run db:migrate

# 3. Seed with demo data
bun run db:seed
```

## What Gets Seeded

The seed script creates:

- **1 Demo Organization** (`demo-org`)
- **10 Demo AI Systems** with various:
  - Risk levels (high, limited, minimal)
  - Operator roles (provider, deployer, importer, distributor)
  - Compliance progress (45-100%)
- **Requirements Status** records for each system
- **Gap Analysis Results** showing compliance gaps

## Exporting Database

To export your current database (including any custom data):

```bash
bun run db:export
```

This creates `drizzle/seed-data.sql` that can be:
- Committed to the repository (optional)
- Shared with team members
- Used to restore database state

## Importing Database

To import a SQL file:

```bash
# Import default seed file
bun run db:import

# Import custom SQL file
bun run db:import path/to/custom-data.sql
```

## Including Seed Data in Repository (Optional)

If you want to include a pre-populated database SQL file in the repository:

1. **Export the database:**
   ```bash
   bun run db:export
   ```

2. **Update .gitignore** to allow the seed file:
   ```bash
   # Comment out this line in .gitignore:
   # drizzle/seed-data.sql
   ```

3. **Commit the SQL file:**
   ```bash
   git add drizzle/seed-data.sql
   git commit -m "Add database seed data"
   ```

4. **Users can then import it:**
   ```bash
   bun run db:migrate
   bun run db:import
   ```

**Note:** The seed script (`bun run db:seed`) is the recommended approach as it's always up-to-date with the latest schema. SQL exports are useful for sharing specific database states.

## Database Location

- **Database file:** `sqlite.db` (gitignored)
- **Migrations:** `drizzle/*.sql`
- **Seed SQL:** `drizzle/seed-data.sql` (optional, can be committed)

## Resetting Database

To completely reset and reseed:

```bash
bun run db:reset
```

Or manually:
```bash
rm sqlite.db
bun run db:migrate
bun run db:seed
```

## Notes

- The database file (`sqlite.db`) is gitignored - each developer needs their own
- Seed data is deterministic - same seed script produces same results
- You can modify `scripts/seed-database.ts` to customize demo data
- The seed script is idempotent - safe to run multiple times
