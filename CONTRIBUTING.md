# Contributing to AI Comply

Thank you for your interest in contributing to AI Comply! This document provides guidelines and instructions for contributing.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Making Changes](#making-changes)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Testing](#testing)
- [Documentation](#documentation)

## Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment. We expect all contributors to:

- Be respectful and considerate in all interactions
- Welcome newcomers and help them get started
- Focus on constructive feedback
- Accept responsibility for mistakes and learn from them

## Getting Started

### Prerequisites

- **Bun 1.2+** (recommended) or **Node.js 18+**
- **PostgreSQL 14+** (for production) or SQLite (for development)
- **Git**

### Development Setup

1. **Fork the repository**
   ```bash
   # Click "Fork" on GitHub, then clone your fork
   git clone https://github.com/YOUR_USERNAME/ai-act-platform.git
   cd ai-act-platform
   ```

2. **Install dependencies**
   ```bash
   bun install
   ```

3. **Set up environment**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Set up database**
   ```bash
   bun run db:migrate
   bun run db:seed
   ```

5. **Start development server**
   ```bash
   bun run dev
   ```

6. **Run tests**
   ```bash
   bun test
   ```

## Making Changes

### Branch Naming

Use descriptive branch names:

- `feature/add-risk-assessment-wizard`
- `fix/login-redirect-loop`
- `docs/update-api-documentation`
- `refactor/simplify-auth-flow`

### Commit Messages

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
type(scope): description

[optional body]

[optional footer]
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Examples:**
```
feat(auth): add Google OAuth provider
fix(assessment): correct risk score calculation
docs(readme): update installation instructions
```

## Pull Request Process

1. **Create a feature branch** from `main`
2. **Make your changes** following our coding standards
3. **Write/update tests** for your changes
4. **Update documentation** if needed
5. **Run the test suite** to ensure nothing is broken
6. **Submit a pull request** with a clear description

### PR Description Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
Describe how you tested your changes

## Checklist
- [ ] My code follows the project's coding standards
- [ ] I have added tests for my changes
- [ ] All new and existing tests pass
- [ ] I have updated the documentation
- [ ] My changes don't introduce new warnings
```

## Coding Standards

### TypeScript

- Use TypeScript strict mode
- Avoid `any` type - use proper typing
- Use interfaces for object shapes
- Export types from dedicated files when shared

```typescript
// Good
interface User {
  id: string
  email: string
  name?: string
}

// Avoid
const user: any = { ... }
```

### React Components

- Use functional components with hooks
- Keep components focused and small
- Use proper prop typing

```typescript
interface ButtonProps {
  label: string
  onClick: () => void
  variant?: 'primary' | 'secondary'
}

export function Button({ label, onClick, variant = 'primary' }: ButtonProps) {
  return (
    <button onClick={onClick} className={variant}>
      {label}
    </button>
  )
}
```

### Server Actions

- Always validate input
- Use proper error handling
- Return typed responses

```typescript
"use server"

export async function createItem(data: CreateItemInput) {
  try {
    // Validate
    if (!data.name) {
      return { error: "Name is required" }
    }
    
    // Process
    const item = await db.insert(items).values(data)
    
    return { success: true, id: item.id }
  } catch (error) {
    console.error("Failed to create item:", error)
    return { error: "Failed to create item" }
  }
}
```

### File Organization

```
src/
├── app/              # Next.js pages and layouts
├── components/       # React components
│   ├── ui/          # Reusable UI components
│   └── [feature]/   # Feature-specific components
├── lib/
│   ├── actions/     # Server actions
│   ├── auth/        # Authentication utilities
│   ├── db/          # Database schema and queries
│   └── utils/       # Utility functions
└── hooks/           # Custom React hooks
```

## Testing

### Running Tests

```bash
# Run all tests
bun test

# Run with coverage
bun test:coverage

# Run specific test file
bun test src/__tests__/unit/risk-classification.test.ts

# Watch mode
bun test --watch
```

### Writing Tests

```typescript
import { describe, it, expect } from 'vitest'
import { calculateRiskLevel } from '@/lib/utils/risk-classification'

describe('calculateRiskLevel', () => {
  it('should return high for prohibited practices', () => {
    const result = calculateRiskLevel({ prohibitedPractice: true })
    expect(result).toBe('prohibited')
  })
  
  it('should return minimal for low-risk systems', () => {
    const result = calculateRiskLevel({ category: 'general' })
    expect(result).toBe('minimal')
  })
})
```

## Documentation

### Code Comments

- Add JSDoc comments for public functions
- Explain complex logic with inline comments
- Keep comments up to date with code changes

```typescript
/**
 * Calculate the compliance score for an AI system
 * @param assessments - Array of completed assessments
 * @param requirements - Array of applicable requirements
 * @returns Compliance score between 0 and 100
 */
export function calculateComplianceScore(
  assessments: Assessment[],
  requirements: Requirement[]
): number {
  // Implementation
}
```

### Content Documentation

When adding or modifying content in `/content/`:

1. Follow the existing JSON structure
2. Update `index.json` files when adding new items
3. Test content loading in the UI
4. Document any new content types in `CONTENT_ARCHITECTURE.md`

## Questions?

If you have questions about contributing:

1. Check existing [GitHub Issues](https://github.com/aicomply-dev/aicomply/issues)
2. Open a new issue with the `question` label
3. Join our community discussions

Thank you for contributing to AI Comply! 🎉
