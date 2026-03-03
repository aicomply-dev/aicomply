'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { Progress } from '@/components/ui/progress'

import { submitAssessmentAnswer, completeAssessment } from '@/lib/actions/assessments'
import type { AssessmentQuestion } from '@/lib/content/loader'

interface AssessmentFormProps {
  assessmentId: string
  questions: AssessmentQuestion[]
  existingAnswers: { questionId: string; answer: unknown; score: number | null }[]
}

const ANSWER_OPTIONS = [
  { value: 'yes', label: 'Yes', score: 100 },
  { value: 'partial', label: 'Partial', score: 50 },
  { value: 'no', label: 'No', score: 0 },
  { value: 'na', label: 'Not Applicable', score: null },
]

export function AssessmentForm({
  assessmentId,
  questions,
  existingAnswers,
}: AssessmentFormProps) {
  const router = useRouter()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [saving, setSaving] = useState(false)
  const [completing, setCompleting] = useState(false)

  // Initialize answers from existing
  useEffect(() => {
    const initial: Record<string, string> = {}
    for (const a of existingAnswers) {
      if (typeof a.answer === 'string') {
        initial[a.questionId] = a.answer
      } else if (a.answer && typeof a.answer === 'object' && 'value' in (a.answer as Record<string, unknown>)) {
        initial[a.questionId] = (a.answer as Record<string, string>).value
      }
    }
    setAnswers(initial)
  }, [existingAnswers])

  const question = questions[currentIndex]
  if (!question) return null

  const progress = Math.round(
    (Object.keys(answers).length / questions.length) * 100,
  )

  async function handleAnswer(value: string) {
    setSaving(true)
    const option = ANSWER_OPTIONS.find((o) => o.value === value)
    const score = option?.score ?? null

    setAnswers((prev) => ({ ...prev, [question.id]: value }))

    try {
      await submitAssessmentAnswer(assessmentId, question.id, value, score ?? undefined)
    } catch {
      // silently handle
    } finally {
      setSaving(false)
    }

    // Auto-advance after short delay
    if (currentIndex < questions.length - 1) {
      setTimeout(() => setCurrentIndex((i) => i + 1), 300)
    }
  }

  async function handleComplete() {
    setCompleting(true)
    try {
      await completeAssessment(assessmentId)
      router.refresh()
    } catch {
      // handle error
    } finally {
      setCompleting(false)
    }
  }

  const allAnswered = Object.keys(answers).length >= questions.length

  return (
    <div className="space-y-6">
      {/* Progress */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>
            Question {currentIndex + 1} of {questions.length}
          </span>
          <span>{progress}% complete</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      {/* Question */}
      <Card>
        <CardHeader>
          <div className="flex items-start justify-between">
            <div>
              <CardTitle className="text-lg">{question.question}</CardTitle>
              {question.description && (
                <CardDescription className="mt-2">
                  {question.description}
                </CardDescription>
              )}
            </div>
            <span className="shrink-0 ml-4 text-xs text-muted-foreground">
              {question.article}
            </span>
          </div>
        </CardHeader>
        <CardContent>
          {question.guidance && (
            <p className="mb-4 text-sm text-muted-foreground border-l-2 border-blue-200 pl-3">
              {question.guidance}
            </p>
          )}

          <RadioGroup
            value={answers[question.id] || ''}
            onValueChange={handleAnswer}
            className="space-y-3"
            disabled={saving}
          >
            {ANSWER_OPTIONS.map((option) => (
              <div key={option.value} className="flex items-center space-x-2">
                <RadioGroupItem
                  value={option.value}
                  id={`${question.id}-${option.value}`}
                />
                <Label
                  htmlFor={`${question.id}-${option.value}`}
                  className="cursor-pointer"
                >
                  {option.label}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          onClick={() => setCurrentIndex((i) => Math.max(0, i - 1))}
          disabled={currentIndex === 0}
        >
          Previous
        </Button>

        <div className="flex gap-2">
          {currentIndex < questions.length - 1 ? (
            <Button
              onClick={() => setCurrentIndex((i) => i + 1)}
              disabled={!answers[question.id]}
            >
              Next
            </Button>
          ) : allAnswered ? (
            <Button onClick={handleComplete} disabled={completing}>
              {completing ? 'Completing...' : 'Complete Assessment'}
            </Button>
          ) : (
            <Button disabled>
              Answer all questions to complete
            </Button>
          )}
        </div>
      </div>

      {/* Question dots */}
      <div className="flex flex-wrap gap-1 justify-center">
        {questions.map((q, i) => (
          <button
            key={q.id}
            onClick={() => setCurrentIndex(i)}
            className={`h-2.5 w-2.5 rounded-full transition-colors ${
              i === currentIndex
                ? 'bg-blue-600'
                : answers[q.id]
                  ? 'bg-emerald-500'
                  : 'bg-slate-200'
            }`}
            aria-label={`Go to question ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
