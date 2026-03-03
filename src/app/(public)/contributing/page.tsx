import type { Metadata } from 'next'
import { ExternalLink } from 'lucide-react'

import { Breadcrumbs } from '@/components/layout/breadcrumbs'

export const metadata: Metadata = {
  title: 'Contributing',
  description: 'How to contribute to AI Comply — an open-source EU AI Act compliance platform.',
}

export default function ContributingPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: 'Contributing' }]} />

      <article className="prose prose-slate mt-8 max-w-none">
        <h1>Contributing to AI Comply</h1>
        <p className="lead">
          AI Comply is open source and we welcome contributions from the community.
        </p>

        <h2>Getting Started</h2>
        <ol>
          <li>Fork the repository on GitHub</li>
          <li>Clone your fork and create a feature branch</li>
          <li>Install dependencies with <code>npm install</code></li>
          <li>Run the development server with <code>npm run dev</code></li>
          <li>Make your changes and ensure tests pass</li>
          <li>Submit a pull request</li>
        </ol>

        <h2>Ways to Contribute</h2>
        <ul>
          <li>
            <strong>Content:</strong> Improve learning modules, fix inaccuracies,
            or add translations
          </li>
          <li>
            <strong>Code:</strong> Fix bugs, improve performance, or add new features
          </li>
          <li>
            <strong>Documentation:</strong> Improve guides, add examples, or clarify
            deployment instructions
          </li>
          <li>
            <strong>Testing:</strong> Report bugs, write tests, or test on different
            environments
          </li>
          <li>
            <strong>Design:</strong> Improve UI/UX, accessibility, or responsive design
          </li>
        </ul>

        <h2>Development Guidelines</h2>
        <ul>
          <li>Use TypeScript for all new code</li>
          <li>Follow existing code style and conventions</li>
          <li>Write meaningful commit messages</li>
          <li>Add tests for new functionality where practical</li>
          <li>Ensure the build passes before submitting a PR</li>
        </ul>

        <h2>Code of Conduct</h2>
        <p>
          All contributors are expected to follow our{' '}
          <a href="/code-of-conduct">Code of Conduct</a>. We are committed to
          providing a welcoming and inclusive experience for everyone.
        </p>

        <h2>Links</h2>
        <ul>
          <li>
            <a
              href="https://github.com/aicomply/ai-act-platform"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Repository <ExternalLink className="inline h-3 w-3" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/aicomply/ai-act-platform/issues"
              target="_blank"
              rel="noopener noreferrer"
            >
              Issue Tracker <ExternalLink className="inline h-3 w-3" />
            </a>
          </li>
        </ul>
      </article>
    </div>
  )
}
