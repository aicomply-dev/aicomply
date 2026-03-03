import type { Metadata } from 'next'

import { Breadcrumbs } from '@/components/layout/breadcrumbs'
import { RegisterForm } from '@/components/auth/register-form'

export const metadata: Metadata = {
  title: 'Create Account',
  description: 'Create an AI Comply account to start managing your EU AI Act compliance.',
}

export default function RegisterPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: 'Create Account' }]} />

      <div className="mt-12 flex items-center justify-center">
        <RegisterForm />
      </div>
    </div>
  )
}
