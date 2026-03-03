import type { Metadata } from 'next'

import { Breadcrumbs } from '@/components/layout/breadcrumbs'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of service for using the AI Comply platform.',
}

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: 'Terms of Service' }]} />

      <article className="prose prose-slate mt-8 max-w-none">
        <h1>Terms of Service</h1>
        <p className="lead">Last updated: January 2025</p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using AI Comply, you agree to be bound by these Terms of
          Service. If you do not agree, please do not use the platform.
        </p>

        <h2>2. Description of Service</h2>
        <p>
          AI Comply is an open-source platform that provides educational content,
          assessment tools, and compliance tracking for the EU AI Act. The platform
          is provided as-is for informational purposes.
        </p>

        <h2>3. Not Legal Advice</h2>
        <p>
          The content and tools on AI Comply are for informational and educational
          purposes only. They do not constitute legal advice. Always consult qualified
          legal counsel for compliance decisions specific to your organisation.
        </p>

        <h2>4. User Accounts</h2>
        <p>
          You are responsible for maintaining the security of your account credentials.
          You must provide accurate information when creating an account.
        </p>

        <h2>5. Acceptable Use</h2>
        <p>
          You agree not to misuse the platform, attempt to gain unauthorised access,
          or use the service for any unlawful purpose.
        </p>

        <h2>6. Intellectual Property</h2>
        <p>
          AI Comply is licensed under an open-source licence. The EU AI Act regulation
          text is public domain. Original educational content is provided under the
          platform licence.
        </p>

        <h2>7. Limitation of Liability</h2>
        <p>
          AI Comply is provided &ldquo;as is&rdquo; without warranties of any kind. We
          are not liable for any damages arising from your use of the platform or
          reliance on its content.
        </p>

        <h2>8. Changes to Terms</h2>
        <p>
          We may update these terms from time to time. Continued use of the platform
          after changes constitutes acceptance of the updated terms.
        </p>

        <h2>9. Contact</h2>
        <p>
          For questions about these terms, contact us at{' '}
          <a href="mailto:legal@aicomply.eu">legal@aicomply.eu</a>.
        </p>
      </article>
    </div>
  )
}
