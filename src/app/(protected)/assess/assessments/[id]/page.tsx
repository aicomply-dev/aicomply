import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { Breadcrumbs } from '@/components/layout/breadcrumbs'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'

import { AssessmentForm } from '@/components/tools/assessment-form'
import { getAssessment } from '@/lib/actions/assessments'
import { getAssessmentQuestions } from '@/lib/content/loader'

interface Props {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  try {
    const assessment = await getAssessment(id)
    return {
      title: `Assessment: ${assessment.type.replace(/-/g, ' ')}`,
    }
  } catch {
    return { title: 'Assessment' }
  }
}

export default async function AssessmentDetailPage({ params }: Props) {
  const { id } = await params

  let assessment: Awaited<ReturnType<typeof getAssessment>>
  try {
    assessment = await getAssessment(id)
  } catch {
    notFound()
  }

  const questions = await getAssessmentQuestions(assessment.type)

  const isCompleted = assessment.status === 'completed'

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumbs
        items={[
          { label: 'Assess', href: '/assess' },
          { label: 'Assessments', href: '/assess/assessments' },
          { label: assessment.type.replace(/-/g, ' ') },
        ]}
      />

      <section className="mt-8 mb-8">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 capitalize">
            {assessment.type.replace(/-/g, ' ')}
          </h1>
          <Badge
            variant={isCompleted ? 'default' : 'secondary'}
          >
            {isCompleted ? 'Completed' : 'In Progress'}
          </Badge>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">
          Started {new Date(assessment.createdAt).toLocaleDateString()}
          {assessment.completedAt &&
            ` - Completed ${new Date(assessment.completedAt).toLocaleDateString()}`}
        </p>
      </section>

      {isCompleted ? (
        /* Completed: show results */
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Assessment Results</CardTitle>
              <CardDescription>
                Your compliance score for this assessment.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <span className="text-5xl font-bold">
                  {assessment.score ?? 0}%
                </span>
                <p className="mt-2 text-muted-foreground">Compliance Score</p>
              </div>
              <Progress value={assessment.score ?? 0} className="h-3" />
            </CardContent>
          </Card>

          {/* Answer breakdown */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Answer Breakdown</CardTitle>
              <CardDescription>
                {assessment.answers.length} questions answered
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {assessment.answers.map((a) => {
                  const q = questions.find((q) => q.id === a.questionId)
                  return (
                    <div
                      key={a.id}
                      className="flex items-start justify-between gap-4 py-2 border-b last:border-0"
                    >
                      <div className="flex-1">
                        <p className="text-sm font-medium">
                          {q?.question ?? a.questionId}
                        </p>
                        {q?.article && (
                          <span className="text-xs text-muted-foreground">
                            {q.article}
                          </span>
                        )}
                      </div>
                      <Badge
                        variant={
                          a.answer === 'yes'
                            ? 'default'
                            : a.answer === 'partial'
                              ? 'secondary'
                              : a.answer === 'na'
                                ? 'outline'
                                : 'destructive'
                        }
                        className="shrink-0"
                      >
                        <span className="capitalize">
                          {String(a.answer ?? '--')}
                        </span>
                      </Badge>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      ) : (
        /* In progress: show form */
        <AssessmentForm
          assessmentId={assessment.id}
          questions={questions}
          existingAnswers={assessment.answers.map((a) => ({
            questionId: a.questionId,
            answer: a.answer,
            score: a.score,
          }))}
        />
      )}
    </div>
  )
}
