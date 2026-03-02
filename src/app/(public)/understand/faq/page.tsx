import type { Metadata } from 'next'

import { getFaqCategories, getFaqs } from '@/lib/content/loader'
import { Breadcrumbs } from '@/components/layout/breadcrumbs'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export const metadata: Metadata = {
  title: 'EU AI Act FAQ',
  description:
    'Frequently asked questions about the EU AI Act covering scope, compliance requirements, timelines, enforcement, and more.',
}

export default async function FaqPage() {
  const [categories, faqs] = await Promise.all([
    getFaqCategories(),
    getFaqs(),
  ])

  // Group FAQs by category
  const faqsByCategory: Record<string, typeof faqs> = {}
  for (const faq of faqs) {
    if (!faqsByCategory[faq.category]) {
      faqsByCategory[faq.category] = []
    }
    faqsByCategory[faq.category].push(faq)
  }

  // JSON-LD structured data for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Breadcrumbs
        items={[
          { label: 'Understand', href: '/understand' },
          { label: 'FAQ' },
        ]}
      />

      <section className="mt-8 mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Frequently Asked Questions
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Common questions about the EU AI Act, its scope, compliance
          requirements, timelines, and enforcement.
        </p>
      </section>

      <div className="space-y-10">
        {categories.map((cat) => {
          const catFaqs = faqsByCategory[cat.id]
          if (!catFaqs || catFaqs.length === 0) return null

          return (
            <section key={cat.id}>
              <h2 className="mb-4 text-xl font-semibold text-slate-900">
                {cat.label}
              </h2>
              <Accordion type="multiple" className="rounded-lg border bg-white">
                {catFaqs.map((faq) => (
                  <AccordionItem key={faq.id} value={faq.id}>
                    <AccordionTrigger className="px-5 text-left text-base">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-5 text-muted-foreground leading-relaxed whitespace-pre-line">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          )
        })}
      </div>
    </div>
  )
}
