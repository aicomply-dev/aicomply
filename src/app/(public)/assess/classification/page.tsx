import type { Metadata } from 'next'

import { Breadcrumbs } from '@/components/layout/breadcrumbs'
import { RiskClassificationWizard } from '@/components/tools/risk-classification-wizard'

export const metadata: Metadata = {
  title: 'AI Risk Classification Wizard',
  description:
    'Determine your AI system\'s risk level under the EU AI Act. Answer a short questionnaire to receive an instant classification with relevant articles and compliance recommendations.',
  other: {
    'script:ld+json': JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'EU AI Act Risk Classification Wizard',
      description:
        'Free tool to classify AI systems under the EU AI Act risk framework',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Any',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'EUR',
      },
    }),
  },
}

export default function ClassificationPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumbs
        items={[
          { label: 'Assess', href: '/assess' },
          { label: 'Risk Classification' },
        ]}
      />

      <section className="mt-8 mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          AI Risk Classification Wizard
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
          Determine your AI system&apos;s risk level under the EU AI Act.
          No account required &mdash; your answers stay in your browser.
        </p>
      </section>

      <RiskClassificationWizard />
    </div>
  )
}
