'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { useState, useEffect, Suspense } from 'react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { createAssessment } from '@/lib/actions/assessments'

function NewAssessmentContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [creating, setCreating] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const type = searchParams.get('type')

  useEffect(() => {
    if (!type) return

    async function create() {
      setCreating(true)
      try {
        const assessment = await createAssessment({ type: type! })
        router.replace(`/assess/assessments/${assessment!.id}`)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to create assessment')
        setCreating(false)
      }
    }

    create()
  }, [type, router])

  if (!type) {
    return (
      <div className="mx-auto max-w-lg px-4 py-20 text-center">
        <Card>
          <CardHeader>
            <CardTitle>No Assessment Type Selected</CardTitle>
            <CardDescription>
              Please select an assessment type from the assessments page.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={() => router.push('/assess/assessments')}>
              Go to Assessments
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (error) {
    return (
      <div className="mx-auto max-w-lg px-4 py-20 text-center">
        <Card>
          <CardHeader>
            <CardTitle>Error</CardTitle>
            <CardDescription>{error}</CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={() => router.push('/assess/assessments')}>
              Back to Assessments
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-lg px-4 py-20 text-center">
      <p className="text-muted-foreground">
        {creating ? 'Creating assessment...' : 'Redirecting...'}
      </p>
    </div>
  )
}

export default function NewAssessmentPage() {
  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-lg px-4 py-20 text-center">
          <p className="text-muted-foreground">Loading...</p>
        </div>
      }
    >
      <NewAssessmentContent />
    </Suspense>
  )
}
