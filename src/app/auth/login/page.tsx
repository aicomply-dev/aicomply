import type { Metadata } from 'next'

import { Breadcrumbs } from '@/components/layout/breadcrumbs'
import { LoginForm } from '@/components/auth/login-form'

export const metadata: Metadata = {
  title: 'Log In',
  description: 'Sign in to your AI Comply account to manage EU AI Act compliance.',
}

export default function LoginPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: 'Log In' }]} />

      <div className="mt-12 flex items-center justify-center">
        <LoginForm />
      </div>
    </div>
  )
}
