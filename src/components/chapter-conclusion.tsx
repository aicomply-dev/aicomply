"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  CheckCircle2,
  Brain,
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  CircleDot,
  Circle,
  Check,
  X,
  RotateCcw,
} from "lucide-react"
import Link from "next/link"

interface QuizQuestion {
  id: string
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

interface ChapterConclusionProps {
  practiceQuestions?: QuizQuestion[]
  moduleSlug: string
  moduleTitle: string
  currentChapterIndex: number
  totalChapters: number
  prevChapterIndex?: number
  nextChapterIndex?: number
  prevChapterTitle?: string
  nextChapterTitle?: string
}

export function ChapterConclusion({
  practiceQuestions,
  moduleSlug,
  moduleTitle,
  currentChapterIndex,
  totalChapters,
  prevChapterIndex,
  nextChapterIndex,
  prevChapterTitle,
  nextChapterTitle,
}: ChapterConclusionProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [isAnswered, setIsAnswered] = useState(false)
  const [correctCount, setCorrectCount] = useState(0)
  const [quizComplete, setQuizComplete] = useState(false)

  const handleAnswerSelect = (index: number) => {
    if (isAnswered) return
    setSelectedAnswer(index)
  }

  const handleCheckAnswer = () => {
    if (selectedAnswer === null) return
    setIsAnswered(true)
    if (practiceQuestions && selectedAnswer === practiceQuestions[currentQuestion].correctAnswer) {
      setCorrectCount((prev) => prev + 1)
    }
  }

  const handleNextQuestion = () => {
    if (!practiceQuestions) return
    if (currentQuestion < practiceQuestions.length - 1) {
      setCurrentQuestion((prev) => prev + 1)
      setSelectedAnswer(null)
      setIsAnswered(false)
    } else {
      setQuizComplete(true)
    }
  }

  const handleRestartQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setIsAnswered(false)
    setCorrectCount(0)
    setQuizComplete(false)
  }

  const question = practiceQuestions?.[currentQuestion]
  const progressPercent = ((currentChapterIndex + 1) / totalChapters) * 100

  return (
    <div className="space-y-8 pt-8 border-t border-border/50">
      {/* Practice Quiz */}
      {practiceQuestions && practiceQuestions.length > 0 && (
        <div className="rounded-2xl bg-gradient-to-br from-accent/5 via-accent/[0.02] to-transparent border border-accent/10 p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10">
              <Brain className="h-5 w-5 text-accent" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Test Your Knowledge</h3>
              <p className="text-sm text-muted-foreground">
                {quizComplete
                  ? `You scored ${correctCount} of ${practiceQuestions.length}`
                  : `Question ${currentQuestion + 1} of ${practiceQuestions.length}`}
              </p>
            </div>
          </div>

          {!quizComplete && question ? (
            <div className="space-y-6">
              {/* Question */}
              <div className="rounded-xl bg-background/60 border border-border/50 p-5">
                <p className="font-medium text-base sm:text-lg">{question.question}</p>
              </div>

              {/* Options */}
              <div className="space-y-3">
                {question.options.map((option, index) => {
                  const isSelected = selectedAnswer === index
                  const isCorrect = index === question.correctAnswer
                  const showCorrect = isAnswered && isCorrect
                  const showIncorrect = isAnswered && isSelected && !isCorrect

                  return (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelect(index)}
                      disabled={isAnswered}
                      className={cn(
                        "w-full flex items-center gap-4 rounded-xl border p-4 text-left transition-all",
                        !isAnswered && "hover:bg-muted/50 hover:border-accent/30 cursor-pointer",
                        isAnswered && "cursor-default",
                        isSelected && !isAnswered && "border-accent bg-accent/5",
                        showCorrect && "border-emerald-500 bg-emerald-500/10",
                        showIncorrect && "border-destructive bg-destructive/10"
                      )}
                    >
                      <div
                        className={cn(
                          "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 text-sm font-medium transition-colors",
                          !isAnswered && !isSelected && "border-border",
                          isSelected && !isAnswered && "border-accent bg-accent text-accent-foreground",
                          showCorrect && "border-emerald-500 bg-emerald-500 text-white",
                          showIncorrect && "border-destructive bg-destructive text-white"
                        )}
                      >
                        {showCorrect ? (
                          <Check className="h-4 w-4" />
                        ) : showIncorrect ? (
                          <X className="h-4 w-4" />
                        ) : (
                          String.fromCharCode(65 + index)
                        )}
                      </div>
                      <span className="text-sm sm:text-base">{option}</span>
                    </button>
                  )
                })}
              </div>

              {/* Explanation */}
              {isAnswered && (
                <div
                  className={cn(
                    "rounded-xl border p-4",
                    selectedAnswer === question.correctAnswer
                      ? "border-emerald-500/30 bg-emerald-500/5"
                      : "border-amber-500/30 bg-amber-500/5"
                  )}
                >
                  <div className="flex items-start gap-3">
                    <Sparkles
                      className={cn(
                        "h-5 w-5 shrink-0 mt-0.5",
                        selectedAnswer === question.correctAnswer
                          ? "text-emerald-500"
                          : "text-amber-500"
                      )}
                    />
                    <div>
                      <p className="font-medium text-sm mb-1">
                        {selectedAnswer === question.correctAnswer ? "Correct!" : "Not quite"}
                      </p>
                      <p className="text-sm text-muted-foreground">{question.explanation}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex items-center justify-between pt-2">
                {/* Progress Dots */}
                <div className="flex items-center gap-2">
                  {practiceQuestions.map((_, index) => (
                    <div key={index}>
                      {index < currentQuestion ? (
                        <CircleDot className="h-3 w-3 text-accent" />
                      ) : index === currentQuestion ? (
                        <CircleDot className="h-3 w-3 text-primary" />
                      ) : (
                        <Circle className="h-3 w-3 text-muted-foreground/40" />
                      )}
                    </div>
                  ))}
                </div>

                {/* Button */}
                {!isAnswered ? (
                  <Button
                    onClick={handleCheckAnswer}
                    disabled={selectedAnswer === null}
                    className="gap-2"
                  >
                    Check Answer
                  </Button>
                ) : (
                  <Button onClick={handleNextQuestion} className="gap-2">
                    {currentQuestion < practiceQuestions.length - 1 ? (
                      <>
                        Next Question
                        <ChevronRight className="h-4 w-4" />
                      </>
                    ) : (
                      "See Results"
                    )}
                  </Button>
                )}
              </div>
            </div>
          ) : quizComplete ? (
            /* Quiz Complete State */
            <div className="text-center py-6">
              <div
                className={cn(
                  "inline-flex h-16 w-16 items-center justify-center rounded-full mb-4",
                  correctCount === practiceQuestions.length
                    ? "bg-emerald-500/10"
                    : correctCount >= practiceQuestions.length / 2
                    ? "bg-accent/10"
                    : "bg-amber-500/10"
                )}
              >
                {correctCount === practiceQuestions.length ? (
                  <Sparkles className="h-8 w-8 text-emerald-500" />
                ) : (
                  <Brain className="h-8 w-8 text-accent" />
                )}
              </div>
              <h4 className="text-xl font-semibold mb-2">
                {correctCount === practiceQuestions.length
                  ? "Perfect Score!"
                  : correctCount >= practiceQuestions.length / 2
                  ? "Good Job!"
                  : "Keep Learning!"}
              </h4>
              <p className="text-muted-foreground mb-6">
                You got {correctCount} out of {practiceQuestions.length} questions correct
              </p>
              <Button variant="outline" onClick={handleRestartQuiz} className="gap-2">
                <RotateCcw className="h-4 w-4" />
                Try Again
              </Button>
            </div>
          ) : null}
        </div>
      )}

      {/* Chapter Progress & Navigation */}
      <div className="rounded-2xl bg-gradient-to-br from-muted/50 to-muted/20 border border-border/50 p-6 sm:p-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
              <CheckCircle2 className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Chapter Complete</h3>
              <p className="text-sm text-muted-foreground">{moduleTitle}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-primary">
              {currentChapterIndex + 1}/{totalChapters}
            </p>
            <p className="text-xs text-muted-foreground">chapters</p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="h-2 rounded-full bg-muted overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row gap-3">
          {prevChapterIndex !== undefined ? (
            <Button variant="outline" className="flex-1 gap-2" asChild>
              <Link href={`/understand/modules/${moduleSlug}/chapter/${prevChapterIndex}`}>
                <ArrowLeft className="h-4 w-4" />
                <span className="truncate">{prevChapterTitle || "Previous"}</span>
              </Link>
            </Button>
          ) : (
            <Button variant="outline" className="flex-1 gap-2" asChild>
              <Link href={`/understand/modules/${moduleSlug}`}>
                <ArrowLeft className="h-4 w-4" />
                Back to Module
              </Link>
            </Button>
          )}

          {nextChapterIndex !== undefined ? (
            <Button className="flex-1 gap-2" asChild>
              <Link href={`/understand/modules/${moduleSlug}/chapter/${nextChapterIndex}`}>
                <span className="truncate">{nextChapterTitle || "Next"}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          ) : (
            <Button className="flex-1 gap-2" asChild>
              <Link href={`/understand/modules/${moduleSlug}`}>
                Complete Module
                <Sparkles className="h-4 w-4" />
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
