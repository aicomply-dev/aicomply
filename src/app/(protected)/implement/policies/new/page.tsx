'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

import { Breadcrumbs } from '@/components/layout/breadcrumbs'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

import { createPolicy } from '@/lib/actions/policies'

export default function NewPolicyPage() {
  const router = useRouter()
  const [creating, setCreating] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setCreating(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    const title = formData.get('title') as string
    const content = (formData.get('content') as string) || undefined

    try {
      const policy = await createPolicy({ title, content })
      router.push(`/implement/policies/${policy!.id}`)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create policy')
      setCreating(false)
    }
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumbs
        items={[
          { label: 'Implement', href: '/implement' },
          { label: 'Policies', href: '/implement/policies' },
          { label: 'New Policy' },
        ]}
      />

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Create New Policy</CardTitle>
          <CardDescription>
            Create an AI governance policy document for your organization.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Policy Title *</Label>
              <Input
                id="title"
                name="title"
                placeholder="e.g. AI Governance Policy"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="content">Initial Content</Label>
              <Textarea
                id="content"
                name="content"
                rows={10}
                className="font-mono text-sm"
                placeholder="Start writing your policy content..."
              />
            </div>

            {error && <p className="text-sm text-red-600">{error}</p>}

            <div className="flex justify-end gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => router.push('/implement/policies')}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={creating}>
                {creating ? 'Creating...' : 'Create Policy'}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
