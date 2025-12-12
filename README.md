<div align="center">

# AI Comply

### Open-Source EU AI Act Compliance Platform

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue)](https://www.typescriptlang.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-336791)](https://www.postgresql.org/)

**[Live Demo](https://aicomply.dev)** · **[Report Bug](https://github.com/aicomply-dev/aicomply/issues)** · **[Request Feature](https://github.com/aicomply-dev/aicomply/issues)**

</div>

---

## Overview

AI Comply is a comprehensive open-source platform designed to help organizations understand, assess, and implement compliance with the **EU AI Act (Regulation 2024/1689)**. Built for organizations of all sizes, it provides structured guidance through the entire compliance journey.

### Key Features

- **📚 Understand** — Interactive learning modules, full EU AI Act text, glossary, FAQ, and global regulations comparison
- **🔍 Assess** — AI system inventory, risk classification wizard, compliance assessments, gap analysis
- **⚙️ Implement** — Policy frameworks, 14 standards, 114+ controls, procedures, checklists, forms, and records

---

## Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | Next.js 16 (App Router, Turbopack) |
| **Language** | TypeScript 5.7 |
| **Database** | PostgreSQL 16 + Drizzle ORM |
| **UI** | React 19, Tailwind CSS 4, shadcn/ui |
| **Auth** | NextAuth.js (Google, GitHub OAuth) |
| **Testing** | Vitest |

---

## Getting Started

### Prerequisites

- **Node.js 18+** (or Bun 1.2+)
- **PostgreSQL 16+**

### Installation

```bash
# Clone the repository
git clone https://github.com/aicomply-dev/aicomply.git
cd aicomply

# Install dependencies
npm install

# Configure environment
cp .env.example .env.local
# Edit .env.local with your database and OAuth credentials

# Setup database
npm run db:generate    # Generate migrations
npm run db:migrate     # Apply migrations
npm run db:seed        # Seed with demo data

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see the application.

### Environment Variables

Create a `.env.local` file based on `.env.example`:

```bash
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/aicomply"

# NextAuth
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"

# OAuth Providers (optional)
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
GITHUB_CLIENT_ID="your-github-client-id"
GITHUB_CLIENT_SECRET="your-github-client-secret"
```

---

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── understand/         # Learning modules
│   ├── assess/             # Assessment workflows
│   ├── implement/          # Compliance implementation
│   └── resources/          # Regulation text, glossary, FAQ
├── components/             # React components
│   ├── ui/                 # shadcn/ui components
│   └── [feature]/          # Feature-specific components
├── lib/
│   ├── actions/            # Server actions
│   ├── data/               # Static content (regulations, guides)
│   ├── db/                 # Database schema & queries
│   └── auth/               # Authentication utilities
└── content/                # Markdown content & assessments
```

---

## Database Commands

```bash
npm run db:generate   # Generate migrations from schema
npm run db:migrate    # Apply migrations
npm run db:seed       # Seed with demo data
npm run db:studio     # Open Drizzle Studio (database GUI)
```

---

## Testing

```bash
npm test              # Run tests
npm run test:ui       # Interactive UI mode
npm run test:coverage # With coverage report
```

---

## Deployment

The application is designed for deployment on any Node.js hosting platform:

- **Vercel** — Zero-config deployment
- **Railway** — PostgreSQL included
- **Docker** — Self-hosted option
- **VPS** — Traditional deployment

Ensure your production environment has:
- PostgreSQL database
- Environment variables configured
- OAuth callback URLs updated for your domain

---

## Contributing

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) before submitting a PR.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

## Author

**Daniel Minda**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-danielm7-blue?logo=linkedin)](https://www.linkedin.com/in/danielm7)
[![Twitter](https://img.shields.io/badge/Twitter-mndaniel78-blue?logo=x)](https://x.com/mndaniel78)

---

<div align="center">

**Built for EU AI Act (Regulation 2024/1689) compliance**

⭐ Star this repo if you find it useful!

</div>
