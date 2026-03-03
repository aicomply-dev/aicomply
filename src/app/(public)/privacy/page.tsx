import type { Metadata } from 'next'

import { Breadcrumbs } from '@/components/layout/breadcrumbs'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for AI Comply — how we collect, use, and protect your data.',
}

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />

      <article className="prose prose-slate mt-8 max-w-none">
        <h1>Privacy Policy</h1>
        <p className="lead">Last updated: January 2025</p>

        <h2>1. Information We Collect</h2>
        <p>
          When you create an account, we collect your email address and a display name.
          When you use the platform, we store the AI system assessments and compliance
          data you create.
        </p>

        <h2>2. How We Use Your Information</h2>
        <p>
          We use your information solely to provide the AI Comply service: storing
          your assessments, tracking compliance progress, and delivering the tools
          described on our platform. We do not sell your data to third parties.
        </p>

        <h2>3. Data Storage</h2>
        <p>
          Data is stored securely using Supabase with row-level security policies.
          All data is encrypted in transit (TLS) and at rest.
        </p>

        <h2>4. Cookies</h2>
        <p>
          We use essential cookies for authentication and session management. We use
          Google Analytics to understand how the platform is used. You can opt out of
          analytics tracking via your browser settings.
        </p>

        <h2>5. Your Rights</h2>
        <p>
          Under GDPR, you have the right to access, correct, or delete your personal
          data. You can delete your account and all associated data at any time from
          your account settings. To exercise your rights, contact us at the email below.
        </p>

        <h2>6. Open Source</h2>
        <p>
          AI Comply is open source. You can review our code on GitHub to verify
          exactly how your data is handled.
        </p>

        <h2>7. Contact</h2>
        <p>
          For privacy-related inquiries, contact us at{' '}
          <a href="mailto:privacy@aicomply.eu">privacy@aicomply.eu</a>.
        </p>
      </article>
    </div>
  )
}
