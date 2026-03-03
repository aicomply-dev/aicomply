import type { Metadata } from 'next'
import Link from 'next/link'
import { Plus, ClipboardList } from 'lucide-react'

import { Breadcrumbs } from '@/components/layout/breadcrumbs'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { getAssessments } from '@/lib/actions/assessments'
import { getAssessmentIndex } from '@/lib/content/loader'

export const metadata: Metadata = {
  title: 'Assessments',
  description: 'Run and manage compliance assessments for your AI systems.',
}

export default async function AssessmentsPage() {
  let assessments: Awaited<ReturnType<typeof getAssessments>> = []
  let dbError = false

  try {
    assessments = await getAssessments()
  } catch {
    dbError = true
  }

  const sections = await getAssessmentIndex()

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumbs
        items={[
          { label: 'Assess', href: '/assess' },
          { label: 'Assessments' },
        ]}
      />

      <section className="mt-8 mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Assessments
          </h1>
          <p className="mt-2 text-muted-foreground">
            Run compliance assessments against EU AI Act requirements.
          </p>
        </div>
      </section>

      {dbError ? (
        <Card>
          <CardHeader>
            <CardTitle>Database Not Connected</CardTitle>
            <CardDescription>
              Please configure your database to manage assessments.
            </CardDescription>
          </CardHeader>
        </Card>
      ) : (
        <>
          {/* Available Assessment Types */}
          <section className="mb-10">
            <h2 className="text-lg font-semibold text-slate-900 mb-4">
              Available Assessment Types
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {sections.map((section) => (
                <Link
                  key={section.id}
                  href={`/assess/assessments/new?type=${section.id}`}
                >
                  <Card className="h-full transition-shadow hover:shadow-md cursor-pointer">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">
                        {section.title}
                      </CardTitle>
                      <CardDescription>
                        {section.article} - {section.questionCount} questions
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" size="sm">
                        <Plus className="mr-1 h-3 w-3" />
                        Start
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>

          {/* Past Assessments */}
          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-4">
              Your Assessments
            </h2>
            {assessments.length === 0 ? (
              <Card className="border-dashed">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                    <ClipboardList className="h-6 w-6" />
                  </div>
                  <CardTitle>No Assessments Yet</CardTitle>
                  <CardDescription>
                    Start your first compliance assessment by choosing a type
                    above.
                  </CardDescription>
                </CardHeader>
              </Card>
            ) : (
              <Card>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Type</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Score</TableHead>
                      <TableHead className="text-right">Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {assessments.map((a) => (
                      <TableRow key={a.id}>
                        <TableCell>
                          <Link
                            href={`/assess/assessments/${a.id}`}
                            className="font-medium capitalize text-blue-600 hover:underline"
                          >
                            {a.type.replace(/-/g, ' ')}
                          </Link>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              a.status === 'completed'
                                ? 'default'
                                : 'secondary'
                            }
                          >
                            {a.status === 'completed'
                              ? 'Completed'
                              : 'In Progress'}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          {a.score != null ? `${a.score}%` : '--'}
                        </TableCell>
                        <TableCell className="text-right text-sm text-muted-foreground">
                          {new Date(a.createdAt).toLocaleDateString()}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            )}
          </section>
        </>
      )}
    </div>
  )
}
