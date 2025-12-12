# AI Comply - EU AI Act Compliance Platform

Open-source platform for understanding, assessing, implementing, and delivering EU AI Act compliance.

## 🚀 Quick Start

### Prerequisites

- **Bun 1.2+** (recommended) or **Node.js 18+**
- SQLite (included, no separate installation needed)

### Installation

```bash
# Clone the repository
git clone https://github.com/aicomply-dev/aicomply.git
cd aicomply

# Install dependencies
bun install

# Setup database
bun run db:generate    # Generate migrations from schema
bun run db:migrate     # Apply migrations to create database
bun run db:seed       # Populate with demo data

# Or reset and seed in one command
bun run db:reset

# Run development server
bun run dev
```

Visit `http://localhost:3000` to see the application.

### Alternative with npm/pnpm

```bash
npm install
# or
pnpm install

npm run dev
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── understand/         # Learning modules
│   ├── assess/             # Assessment workflows
│   ├── implement/          # Compliance implementation
│   └── deliver/            # Documentation & certificates
├── components/             # React components
│   ├── ui/                 # shadcn/ui components
│   └── [custom]/          # Business logic components
├── lib/
│   ├── actions/           # Server actions (data mutations)
│   ├── data/              # Static data & markdown content
│   │   ├── guides/        # Procedure guides
│   │   └── regulation/    # EU AI Act text
│   ├── db/                # Database schema & connection
│   ├── constants.ts       # Application constants
│   └── errors.ts          # Error types & Result pattern
└── hooks/                 # React hooks
```

## 🧪 Testing

```bash
# Run tests
bun test

# Run with coverage
bun test:coverage

# UI mode (interactive)
bun test:ui
```

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript 5.7
- **Database:** SQLite + Drizzle ORM
- **UI:** React 19 + shadcn/ui + Tailwind CSS 4
- **Runtime:** Bun (or Node.js)

## 🎯 Features

### 1. Understand
- Interactive learning modules
- Full EU AI Act regulation text
- Glossary with official definitions
- FAQ section

### 2. Assess
- AI system inventory management
- Risk classification wizard
- Comprehensive compliance assessments
- Gap analysis and remediation tracking

### 3. Implement
- Policy framework
- Standards library (14 standards)
- Compliance controls (114+ controls)
- Procedure guides and templates

### 4. Deliver
- Technical documentation generation
- Compliance certificates
- Audit reports
- Export packages

## 📚 Documentation

- [Database Setup Guide](./DATABASE_SETUP.md) - How to set up and seed the database with demo data
- Additional documentation available in `.temp/docs/` directory

## 🔧 Development

### Database Setup

```bash
# Generate migrations from schema changes
bun run db:generate

# Apply migrations (creates empty database)
bun run db:migrate

# Seed database with demo data (10 AI systems, requirements, gap analysis)
bun run db:seed

# Reset database (delete and recreate with demo data)
bun run db:reset

# View database in Drizzle Studio
bun run db:studio

# Export current database to SQL file
bun run db:export

# Import database from SQL file
bun run db:import [path-to-sql-file]
```

**Note:** The database file (`sqlite.db`) is gitignored. Each developer/clone needs to run migrations and seed to get demo data.

### Code Style

The project uses:
- TypeScript with strict mode
- ESLint for linting
- Prettier for formatting (recommended)

### Environment Variables

Currently, the project uses a demo organization (`demo-org`) by default. No environment variables are required for the demo version.

**Optional Environment Variables:**
- `NEXT_PUBLIC_BASE_URL` - Base URL for metadata and OpenGraph tags (defaults to `https://aicomply.dev`)
- `VERCEL_URL` - Automatically used if available (Vercel deployment)

### Database Setup

See [DATABASE_SETUP.md](./DATABASE_SETUP.md) for complete instructions.

**Quick setup:**
```bash
bun run db:reset  # Creates database and seeds with demo data
```

**Manual setup:**
```bash
bun run db:migrate  # Create database schema
bun run db:seed     # Populate with demo data
```

## 🤝 Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details

## 🙏 Acknowledgments

**Created by:** [Daniel Minda](https://www.linkedin.com/in/danielm7)

- [LinkedIn](https://www.linkedin.com/in/danielm7) | [X/Twitter](https://x.com/mndaniel78)
- Built for EU AI Act (Regulation 2024/1689) compliance
- Open-source and community-driven
- Special thanks to all contributors who help improve this platform

## 📞 Support

For issues, questions, or contributions, please open an issue on GitHub.

---

**Note:** This is a demo/open-source version. Authentication and multi-tenancy features are disabled for easy setup and demonstration.
