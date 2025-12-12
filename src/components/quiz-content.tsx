"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  CheckCircle2,
  XCircle,
  AlertCircle,
  Loader2,
  Trophy,
  RotateCcw,
  ArrowRight,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { submitQuiz } from "@/lib/actions/modules"
import { useRouter } from "next/navigation"
import Link from "next/link"
import type { Chapter, QuizQuestion } from "@/lib/actions/modules"

interface QuizContentProps {
  moduleId: string
  moduleSlug: string
  chapterIndex: number
  chapter: Chapter
  isCompleted: boolean
}

export function QuizContent({
  moduleId,
  moduleSlug,
  chapterIndex,
  chapter,
  isCompleted,
}: QuizContentProps) {
  const questions = chapter.questions || []
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<(number | null)[]>(new Array(questions.length).fill(null))
  const [showResults, setShowResults] = useState(isCompleted)
  const [results, setResults] = useState<{
    score: number
    passed: boolean
    correctAnswers: number
  } | null>(isCompleted ? { score: 100, passed: true, correctAnswers: questions.length } : null)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const question = questions[currentQuestion]
  const answeredCount = answers.filter(a => a !== null).length
  const progress = (answeredCount / questions.length) * 100

  const [error, setError] = useState<string | null>(null)

  async function handleSubmit() {
    // Check all questions answered
    if (answers.some(a => a === null)) {
      return
    }

    setError(null)
    setLoading(true)
    try {
      const result = await submitQuiz(moduleId, chapterIndex, answers as number[])
      if (result.error) {
        setError(result.error)
        return
      }
      if (result.success) {
        setResults({
          score: result.score!,
          passed: result.passed!,
          correctAnswers: result.correctAnswers!,
        })
        setShowResults(true)
        router.refresh()
      }
    } finally {
      setLoading(false)
    }
  }

  function handleRetry() {
    setAnswers(new Array(questions.length).fill(null))
    setCurrentQuestion(0)
    setShowResults(false)
    setResults(null)
  }

  function selectAnswer(index: number) {
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = index
    setAnswers(newAnswers)
  }

  if (questions.length === 0) {
    return (
      <Card className="border-border/50">
        <CardContent className="p-6 text-center">
          <AlertCircle className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
          <p className="text-muted-foreground">No questions available for this quiz.</p>
        </CardContent>
      </Card>
    )
  }

  if (showResults && results) {
    return (
      <Card className={cn(
        "border-2",
        results.passed ? "border-accent bg-accent/5" : "border-destructive/50 bg-destructive/5"
      )}>
        <CardContent className="p-8 text-center">
          {results.passed ? (
            <Trophy className="h-16 w-16 mx-auto text-accent mb-4" />
          ) : (
            <XCircle className="h-16 w-16 mx-auto text-destructive mb-4" />
          )}

          <h2 className="text-2xl font-bold mb-2">
            {results.passed ? "Congratulations!" : "Keep Trying!"}
          </h2>

          <p className="text-muted-foreground mb-6">
            {results.passed
              ? "You passed the quiz and completed this chapter."
              : "You need 70% to pass. Review the material and try again."}
          </p>

          <div className="inline-flex items-center gap-6 bg-background rounded-lg p-6 mb-6">
            <div className="text-center">
              <p className="text-4xl font-bold">{results.score}%</p>
              <p className="text-sm text-muted-foreground">Score</p>
            </div>
            <div className="h-12 w-px bg-border" />
            <div className="text-center">
              <p className="text-4xl font-bold">{results.correctAnswers}/{questions.length}</p>
              <p className="text-sm text-muted-foreground">Correct</p>
            </div>
          </div>

          <div className="flex justify-center gap-3">
            {!results.passed && (
              <Button variant="outline" onClick={handleRetry} className="gap-2">
                <RotateCcw className="h-4 w-4" />
                Try Again
              </Button>
            )}
            <Button asChild className="gap-2">
              <Link href={`/understand/modules/${moduleSlug}`}>
                {results.passed ? "Continue" : "Review Module"}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Show answers review */}
          <div className="mt-8 text-left">
            <h3 className="font-semibold mb-4">Review Answers</h3>
            <div className="space-y-4">
              {questions.map((q, idx) => {
                const userAnswer = answers[idx]
                const isCorrect = userAnswer === q.correctAnswer
                return (
                  <Card key={q.id} className={cn(
                    "border",
                    isCorrect ? "border-accent/30 bg-accent/5" : "border-destructive/30 bg-destructive/5"
                  )}>
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        {isCorrect ? (
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                        ) : (
                          <XCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                        )}
                        <div className="flex-1">
                          <p className="font-medium text-sm">{q.question}</p>
                          {!isCorrect && (
                            <p className="text-sm text-muted-foreground mt-1">
                              Your answer: {q.options[userAnswer as number]}
                            </p>
                          )}
                          <p className="text-sm text-accent mt-1">
                            Correct: {q.options[q.correctAnswer]}
                          </p>
                          {q.explanation && (
                            <p className="text-sm text-muted-foreground mt-2 italic">
                              {q.explanation}
                            </p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      {/* Progress bar */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">
            Question {currentQuestion + 1} of {questions.length}
          </span>
          <span className="text-muted-foreground">
            {answeredCount} answered
          </span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      {/* Question card */}
      <Card className="border-border/50">
        <CardHeader>
          <Badge variant="outline" className="w-fit mb-2">
            Question {currentQuestion + 1}
          </Badge>
          <CardTitle className="text-xl">{question.question}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {question.options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => selectAnswer(idx)}
              className={cn(
                "w-full text-left p-4 rounded-lg border-2 transition-all",
                answers[currentQuestion] === idx
                  ? "border-primary bg-primary/10"
                  : "border-border hover:border-primary/50 hover:bg-muted/50"
              )}
            >
              <div className="flex items-center gap-3">
                <div
                  className={cn(
                    "flex h-8 w-8 items-center justify-center rounded-full border-2 text-sm font-medium",
                    answers[currentQuestion] === idx
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-muted-foreground/30"
                  )}
                >
                  {String.fromCharCode(65 + idx)}
                </div>
                <span className="flex-1">{option}</span>
              </div>
            </button>
          ))}
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
          disabled={currentQuestion === 0}
        >
          Previous
        </Button>

        <div className="flex gap-1">
          {questions.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentQuestion(idx)}
              className={cn(
                "w-8 h-8 rounded-full text-sm font-medium transition-all",
                currentQuestion === idx
                  ? "bg-primary text-primary-foreground"
                  : answers[idx] !== null
                    ? "bg-accent/20 text-accent-foreground"
                    : "bg-muted hover:bg-muted/80"
              )}
            >
              {idx + 1}
            </button>
          ))}
        </div>

        {currentQuestion === questions.length - 1 ? (
          <Button
            onClick={handleSubmit}
            disabled={loading || answers.some(a => a === null)}
            className="gap-2"
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                Submit Quiz
                <CheckCircle2 className="h-4 w-4" />
              </>
            )}
          </Button>
        ) : (
          <Button
            onClick={() => setCurrentQuestion(Math.min(questions.length - 1, currentQuestion + 1))}
          >
            Next
          </Button>
        )}
      </div>

      {/* Error message */}
      {error && (
        <div className="flex items-center justify-center gap-2 p-4 rounded-lg bg-destructive/10 border border-destructive/30 text-destructive">
          <AlertCircle className="h-5 w-5 shrink-0" />
          <p className="text-sm font-medium">{error}</p>
        </div>
      )}

      {/* Hint if not all answered */}
      {answers.some(a => a === null) && currentQuestion === questions.length - 1 && !error && (
        <p className="text-center text-sm text-muted-foreground">
          Please answer all questions before submitting.
        </p>
      )}
    </div>
  )
}
