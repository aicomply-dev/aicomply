"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, PlayCircle, Loader2, Lightbulb, Check, XCircle, HelpCircle } from "lucide-react"
import { markChapterComplete, submitQuiz } from "@/lib/actions/modules"
import { useRouter } from "next/navigation"
import { ChapterConclusion } from "@/components/chapter-conclusion"
import type { Chapter, QuizQuestion } from "@/lib/actions/modules"
import { DIAGRAM_COMPONENTS } from "@/components/diagrams"
import { LearningObjectives, SelfAssessment, ExpertInsight, ComplianceNote } from "@/components/content"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import type { Components } from "react-markdown"
import { cn } from "@/lib/utils"

interface LessonContentProps {
  moduleId: string
  moduleSlug: string
  chapterId: number
  chapterIndex: number
  chapter: Chapter
  isCompleted: boolean
  totalChapters: number
  moduleTitle: string
  prevChapterIndex?: number
  nextChapterIndex?: number
  prevChapterTitle?: string
  nextChapterTitle?: string
}

export function LessonContent({
  moduleId,
  moduleSlug,
  chapterId,
  chapterIndex,
  chapter,
  isCompleted,
  totalChapters,
  moduleTitle,
  prevChapterIndex,
  nextChapterIndex,
  prevChapterTitle,
  nextChapterTitle,
}: LessonContentProps) {
  const [loading, setLoading] = useState(false)
  const [completed, setCompleted] = useState(isCompleted)
  const [quizAnswers, setQuizAnswers] = useState<number[]>([])
  const [quizSubmitted, setQuizSubmitted] = useState(false)
  const [quizResults, setQuizResults] = useState<{
    score: number
    passed: boolean
    correctAnswers: number
    totalQuestions: number
    results: Array<{
      questionId: number
      userAnswer: number
      correctAnswer: number
      isCorrect: boolean
      explanation?: string
    }>
  } | null>(null)
  const router = useRouter()

  const isQuiz = chapter.type === "quiz" && chapter.questions && chapter.questions.length > 0

  async function handleQuizSubmit() {
    if (!chapter.questions) return
    setLoading(true)
    try {
      const result = await submitQuiz(moduleId, chapterIndex, quizAnswers)
      if (result.success) {
        setQuizResults(result as typeof quizResults)
        setQuizSubmitted(true)
        if (result.passed) {
          await markChapterComplete(moduleId, chapterIndex)
          setCompleted(true)
        }
        router.refresh()
      }
    } finally {
      setLoading(false)
    }
  }

  function handleAnswerSelect(questionIndex: number, answerIndex: number) {
    const newAnswers = [...quizAnswers]
    newAnswers[questionIndex] = answerIndex
    setQuizAnswers(newAnswers)
  }

  function resetQuiz() {
    setQuizAnswers([])
    setQuizSubmitted(false)
    setQuizResults(null)
  }

  async function handleMarkComplete() {
    setLoading(true)
    try {
      const result = await markChapterComplete(moduleId, chapterId)
      if (result.success) {
        setCompleted(true)
        router.refresh()
      }
    } finally {
      setLoading(false)
    }
  }

  // Extract key takeaways from the content
  const keyTakeaways = extractKeyTakeaways(chapter.content || "")

  // Parse content into segments (markdown and diagrams)
  const contentSegments = parseContentWithDiagrams(stripKeyTakeaways(chapter.content || ""))

  return (
    <div className="space-y-8">
      {/* Video player if video type */}
      {chapter.type === "video" && chapter.videoUrl && (
        <Card className="overflow-hidden bg-black">
          <div className="aspect-video flex items-center justify-center">
            <div className="text-center text-white">
              <PlayCircle className="h-16 w-16 mx-auto mb-4 opacity-50" />
              <p className="text-lg font-medium">Video Player</p>
              <p className="text-sm text-gray-400">Video URL: {chapter.videoUrl}</p>
            </div>
          </div>
        </Card>
      )}

      {/* Quiz content */}
      {isQuiz && chapter.questions && (
        <div className="space-y-6">
          {/* Quiz Results Summary */}
          {quizSubmitted && quizResults && (
            <Card className={cn(
              "border-2",
              quizResults.passed ? "border-green-500/50 bg-green-500/5" : "border-amber-500/50 bg-amber-500/5"
            )}>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  {quizResults.passed ? (
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20">
                      <CheckCircle2 className="h-8 w-8 text-green-500" />
                    </div>
                  ) : (
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-500/20">
                      <XCircle className="h-8 w-8 text-amber-500" />
                    </div>
                  )}
                  <div>
                    <h3 className="text-xl font-semibold">
                      {quizResults.passed ? "Congratulations! You passed!" : "Keep Learning!"}
                    </h3>
                    <p className="text-muted-foreground">
                      You scored {quizResults.score}% ({quizResults.correctAnswers} of {quizResults.totalQuestions} correct)
                    </p>
                    {!quizResults.passed && (
                      <p className="text-sm text-muted-foreground mt-1">
                        You need 70% to pass. Review the material and try again.
                      </p>
                    )}
                  </div>
                </div>
                {!quizResults.passed && (
                  <Button onClick={resetQuiz} variant="outline" className="mt-4">
                    Try Again
                  </Button>
                )}
              </CardContent>
            </Card>
          )}

          {/* Quiz Questions */}
          {chapter.questions.map((question, qIndex) => {
            const result = quizResults?.results[qIndex]
            const isAnswered = quizAnswers[qIndex] !== undefined

            return (
              <Card key={question.id} className={cn(
                "border-border/50 transition-all",
                quizSubmitted && result?.isCorrect && "border-green-500/30 bg-green-500/5",
                quizSubmitted && !result?.isCorrect && "border-red-500/30 bg-red-500/5"
              )}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold text-sm">
                      {qIndex + 1}
                    </div>
                    <p className="text-base font-medium pt-1">{question.question}</p>
                  </div>

                  <div className="space-y-2 ml-11">
                    {question.options.map((option, oIndex) => {
                      const isSelected = quizAnswers[qIndex] === oIndex
                      const isCorrectAnswer = quizSubmitted && result?.correctAnswer === oIndex
                      const isWrongSelection = quizSubmitted && isSelected && !result?.isCorrect

                      return (
                        <button
                          key={oIndex}
                          onClick={() => !quizSubmitted && handleAnswerSelect(qIndex, oIndex)}
                          disabled={quizSubmitted}
                          className={cn(
                            "w-full text-left px-4 py-3 rounded-lg border transition-all",
                            !quizSubmitted && isSelected && "border-primary bg-primary/10",
                            !quizSubmitted && !isSelected && "border-border hover:border-primary/50 hover:bg-muted/50",
                            quizSubmitted && isCorrectAnswer && "border-green-500 bg-green-500/10",
                            quizSubmitted && isWrongSelection && "border-red-500 bg-red-500/10",
                            quizSubmitted && !isCorrectAnswer && !isWrongSelection && "border-border/50 opacity-60"
                          )}
                        >
                          <div className="flex items-center gap-3">
                            <div className={cn(
                              "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 text-xs font-medium",
                              !quizSubmitted && isSelected && "border-primary bg-primary text-primary-foreground",
                              !quizSubmitted && !isSelected && "border-muted-foreground/40",
                              quizSubmitted && isCorrectAnswer && "border-green-500 bg-green-500 text-white",
                              quizSubmitted && isWrongSelection && "border-red-500 bg-red-500 text-white"
                            )}>
                              {quizSubmitted && isCorrectAnswer ? (
                                <Check className="h-3.5 w-3.5" />
                              ) : quizSubmitted && isWrongSelection ? (
                                <XCircle className="h-3.5 w-3.5" />
                              ) : (
                                String.fromCharCode(65 + oIndex)
                              )}
                            </div>
                            <span className="text-sm">{option}</span>
                          </div>
                        </button>
                      )
                    })}
                  </div>

                  {/* Explanation after submission */}
                  {quizSubmitted && result?.explanation && (
                    <div className="mt-4 ml-11 p-3 rounded-lg bg-muted/50 border border-border/50">
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium text-foreground">Explanation:</span> {result.explanation}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            )
          })}

          {/* Submit Quiz Button */}
          {!quizSubmitted && (
            <div className="flex justify-center pt-4">
              <Button
                size="lg"
                onClick={handleQuizSubmit}
                disabled={loading || quizAnswers.length < (chapter.questions?.length || 0) || quizAnswers.some(a => a === undefined)}
                className="gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <HelpCircle className="h-4 w-4" />
                    Submit Quiz ({quizAnswers.filter(a => a !== undefined).length}/{chapter.questions.length} answered)
                  </>
                )}
              </Button>
            </div>
          )}
        </div>
      )}

      {/* Lesson content */}
      {chapter.content && (
        <Card className="border-border/50">
          <CardContent className="p-6 sm:p-8">
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              {contentSegments.map((segment, index) => {
                switch (segment.type) {
                  case 'diagram': {
                    const DiagramComponent = DIAGRAM_COMPONENTS[segment.name]
                    if (DiagramComponent) {
                      return <DiagramComponent key={index} />
                    }
                    return (
                      <div key={index} className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-600">
                        Unknown diagram: {segment.name}
                      </div>
                    )
                  }
                  case 'learning-objectives':
                    return <LearningObjectives key={index} objectives={segment.objectives} />
                  case 'self-assessment':
                    return <SelfAssessment key={index} questions={segment.questions} />
                  case 'expert-insight':
                    return <ExpertInsight key={index} content={segment.content} />
                  case 'compliance-note':
                    return <ComplianceNote key={index} content={segment.content} />
                  case 'markdown':
                    return <MarkdownRenderer key={index} content={segment.content} />
                  default:
                    return null
                }
              })}
            </div>
          </CardContent>
        </Card>
      )}

      {/* What You Learned - before Mark Complete */}
      {keyTakeaways.length > 0 && (
        <div className="rounded-2xl bg-gradient-to-br from-primary/5 via-primary/[0.02] to-transparent border border-primary/10 p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
              <Lightbulb className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">What You Learned</h3>
              <p className="text-sm text-muted-foreground">Key concepts from this chapter</p>
            </div>
          </div>

          <div className="space-y-3">
            {keyTakeaways.map((takeaway, index) => (
              <div
                key={index}
                className="flex items-start gap-4 rounded-xl bg-background/60 border border-border/50 p-4 transition-colors hover:bg-background/80"
              >
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <p className="text-sm sm:text-base leading-relaxed">{takeaway}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Mark complete button - only for non-quiz chapters */}
      {!isQuiz && (
        <div className="flex justify-center pt-4">
          {completed ? (
            <div className="flex items-center gap-2 text-accent">
              <CheckCircle2 className="h-5 w-5" />
              <span className="font-medium">Lesson completed</span>
            </div>
          ) : (
            <Button
              size="lg"
              onClick={handleMarkComplete}
              disabled={loading}
              className="gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <CheckCircle2 className="h-4 w-4" />
                  Mark as Complete
                </>
              )}
            </Button>
          )}
        </div>
      )}

      {/* Quiz completed message */}
      {isQuiz && completed && (
        <div className="flex justify-center pt-4">
          <div className="flex items-center gap-2 text-green-600">
            <CheckCircle2 className="h-5 w-5" />
            <span className="font-medium">Quiz completed</span>
          </div>
        </div>
      )}

      {/* Chapter Conclusion - Navigation only */}
      <ChapterConclusion
        moduleSlug={moduleSlug}
        moduleTitle={moduleTitle}
        currentChapterIndex={chapterIndex}
        totalChapters={totalChapters}
        prevChapterIndex={prevChapterIndex}
        nextChapterIndex={nextChapterIndex}
        prevChapterTitle={prevChapterTitle}
        nextChapterTitle={nextChapterTitle}
      />
    </div>
  )
}

// Markdown Renderer using react-markdown with GFM support
function MarkdownRenderer({ content }: { content: string }) {
  // Pre-process content to remove ASCII art code blocks
  const processedContent = content.replace(/```[\s\S]*?```/g, (match) => {
    if (match.includes('┌') || match.includes('│') || match.includes('└') || match.includes('▼') || match.includes('▶')) {
      return '' // Remove ASCII art
    }
    return match
  })

  // Custom components for react-markdown
  const components: Components = {
    // Headings with proper styling
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold tracking-tight mt-8 mb-4 first:mt-0">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-xl font-bold tracking-tight mt-8 mb-4 pb-2 border-b border-border">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-lg font-semibold mt-6 mb-3">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-base font-semibold mt-4 mb-2">{children}</h4>
    ),

    // Paragraphs
    p: ({ children }) => (
      <p className="leading-7 mb-4 [&:last-child]:mb-0">{children}</p>
    ),

    // Strong/Bold
    strong: ({ children }) => (
      <strong className="font-semibold text-foreground">{children}</strong>
    ),

    // Lists - Unordered
    ul: ({ children }) => (
      <ul className="my-4 ml-6 list-disc [&>li]:mt-2">{children}</ul>
    ),

    // Lists - Ordered
    ol: ({ children }) => (
      <ol className="my-4 ml-6 list-decimal [&>li]:mt-2">{children}</ol>
    ),

    // List items with proper spacing
    li: ({ children, className }) => {
      // Check if this is a task list item (GFM)
      const isTaskItem = className?.includes('task-list-item')
      if (isTaskItem) {
        return (
          <li className="flex items-start gap-3 list-none ml-[-1.5rem] py-1">
            {children}
          </li>
        )
      }
      return <li className="leading-7 pl-1">{children}</li>
    },

    // Task list checkbox (GFM)
    input: ({ checked, type }) => {
      if (type === 'checkbox') {
        return (
          <span className={`
            inline-flex items-center justify-center w-5 h-5 rounded border-2 mr-2 flex-shrink-0 mt-0.5
            ${checked
              ? 'bg-accent border-accent text-white'
              : 'border-muted-foreground/40 bg-background'
            }
          `}>
            {checked && <Check className="w-3 h-3" />}
          </span>
        )
      }
      return null
    },

    // Blockquotes
    blockquote: ({ children }) => (
      <blockquote className="mt-4 mb-4 border-l-4 border-primary pl-4 py-2 bg-muted/30 rounded-r-lg italic text-muted-foreground">
        {children}
      </blockquote>
    ),

    // Code blocks
    pre: ({ children }) => (
      <pre className="my-4 overflow-x-auto rounded-lg bg-muted p-4 text-sm border border-border">
        {children}
      </pre>
    ),

    // Inline code
    code: ({ children, className }) => {
      // Check if this is inside a pre (code block) or inline
      const isInline = !className
      if (isInline) {
        return (
          <code className="relative rounded bg-muted px-[0.4rem] py-[0.2rem] font-mono text-sm text-primary">
            {children}
          </code>
        )
      }
      // For code blocks, just return the code element
      return <code className={className}>{children}</code>
    },

    // Tables
    table: ({ children }) => (
      <div className="my-6 w-full overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          {children}
        </table>
      </div>
    ),
    thead: ({ children }) => (
      <thead className="bg-muted">{children}</thead>
    ),
    tbody: ({ children }) => (
      <tbody className="[&>tr:nth-child(even)]:bg-muted/30">{children}</tbody>
    ),
    tr: ({ children }) => (
      <tr className="border-b border-border">{children}</tr>
    ),
    th: ({ children }) => (
      <th className="px-4 py-3 text-left font-semibold text-foreground">{children}</th>
    ),
    td: ({ children }) => (
      <td className="px-4 py-3">{children}</td>
    ),

    // Horizontal rule
    hr: () => (
      <hr className="my-8 border-border" />
    ),

    // Links
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
        target={href?.startsWith('http') ? '_blank' : undefined}
        rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    ),
  }

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={components}
    >
      {processedContent}
    </ReactMarkdown>
  )
}

// Content segment type
type ContentSegment =
  | { type: 'markdown'; content: string }
  | { type: 'diagram'; name: string }
  | { type: 'learning-objectives'; objectives: string[] }
  | { type: 'self-assessment'; questions: string[] }
  | { type: 'expert-insight'; content: string }
  | { type: 'compliance-note'; content: string }

// Parse content into segments including diagrams, learning objectives, etc.
function parseContentWithDiagrams(content: string): ContentSegment[] {
  const segments: ContentSegment[] = []

  // Define all patterns to match
  const patterns = [
    // Diagram markers
    { regex: /\[diagram:([a-z-]+)\]/g, handler: (match: RegExpExecArray): ContentSegment => ({ type: 'diagram', name: match[1] }) },
    // Learning Objectives section (also consume trailing ---)
    { regex: /## Learning Objectives\s*\n\s*By the end of this chapter, you will be able to:\s*\n((?:- .+\n?)+)\s*(?:---\s*)?/g, handler: (match: RegExpExecArray): ContentSegment => {
      const objectives = match[1].split('\n').filter(line => line.trim().startsWith('-')).map(line => line.replace(/^- /, '').trim())
      return { type: 'learning-objectives', objectives }
    }},
    // Self-Assessment Questions
    { regex: /\*\*Self-Assessment Questions:\*\*\s*\n((?:\d+\. .+\n?)+)/g, handler: (match: RegExpExecArray): ContentSegment => {
      const questions = match[1].split('\n').filter(line => /^\d+\./.test(line.trim())).map(line => line.replace(/^\d+\.\s*/, '').trim())
      return { type: 'self-assessment', questions }
    }},
    // Expert Insight blockquotes (multiple patterns)
    { regex: /> 💡 \*\*Expert Insight:\*\*\s*(.+)/g, handler: (match: RegExpExecArray): ContentSegment => ({ type: 'expert-insight', content: match[1].trim() }) },
    { regex: /> \*\*Expert Insight:\*\*\s*(.+)/g, handler: (match: RegExpExecArray): ContentSegment => ({ type: 'expert-insight', content: match[1].trim() }) },
    // Compliance Note blockquotes (multiple patterns)
    { regex: /> ⚠️ \*\*Compliance Note:\*\*\s*(.+)/g, handler: (match: RegExpExecArray): ContentSegment => ({ type: 'compliance-note', content: match[1].trim() }) },
    { regex: /> ⚠️ \*\*Compliance Critical:\*\*\s*(.+)/g, handler: (match: RegExpExecArray): ContentSegment => ({ type: 'compliance-note', content: match[1].trim() }) },
    { regex: /> ⚠️ \*\*Critical[^:]*:\*\*\s*(.+)/g, handler: (match: RegExpExecArray): ContentSegment => ({ type: 'compliance-note', content: match[1].trim() }) },
    { regex: /> ⚠️ \*\*Warning:\*\*\s*(.+)/g, handler: (match: RegExpExecArray): ContentSegment => ({ type: 'compliance-note', content: match[1].trim() }) },
    { regex: /> ⚠️ \*\*Important:\*\*\s*(.+)/g, handler: (match: RegExpExecArray): ContentSegment => ({ type: 'compliance-note', content: match[1].trim() }) },
    { regex: /> \*\*Warning:\*\*\s*(.+)/g, handler: (match: RegExpExecArray): ContentSegment => ({ type: 'compliance-note', content: match[1].trim() }) },
  ]

  // Find all matches and their positions
  type MatchInfo = { index: number; length: number; segment: ContentSegment }
  const allMatches: MatchInfo[] = []

  for (const pattern of patterns) {
    let match
    pattern.regex.lastIndex = 0
    while ((match = pattern.regex.exec(content)) !== null) {
      allMatches.push({
        index: match.index,
        length: match[0].length,
        segment: pattern.handler(match)
      })
    }
  }

  // Sort matches by position
  allMatches.sort((a, b) => a.index - b.index)

  // Remove overlapping matches (keep the first one)
  const filteredMatches: MatchInfo[] = []
  let lastEnd = 0
  for (const match of allMatches) {
    if (match.index >= lastEnd) {
      filteredMatches.push(match)
      lastEnd = match.index + match.length
    }
  }

  // Build segments
  let lastIndex = 0
  for (const match of filteredMatches) {
    // Add markdown before this match
    if (match.index > lastIndex) {
      const markdownContent = content.slice(lastIndex, match.index).trim()
      if (markdownContent) {
        segments.push({ type: 'markdown', content: markdownContent })
      }
    }
    // Add the matched segment
    segments.push(match.segment)
    lastIndex = match.index + match.length
  }

  // Add remaining markdown after last match
  if (lastIndex < content.length) {
    const remainingContent = content.slice(lastIndex).trim()
    if (remainingContent) {
      segments.push({ type: 'markdown', content: remainingContent })
    }
  }

  // If no matches found, return entire content as markdown
  if (segments.length === 0 && content.trim()) {
    segments.push({ type: 'markdown', content: content })
  }

  return segments
}

// Extract key takeaways from markdown content
function extractKeyTakeaways(markdown: string): string[] {
  const takeaways: string[] = []

  // Look for "Key Takeaways" or "Summary" section
  const keyTakeawaysMatch = markdown.match(/##?\s*(Key Takeaways|Summary|Key Points|What You['']ll Learn)[\s\S]*?(?=##|$)/i)

  if (keyTakeawaysMatch) {
    // Extract bullet points from the section
    const section = keyTakeawaysMatch[0]
    const bulletMatches = section.match(/^[\*\-]\s+(.+)$/gm)
    if (bulletMatches) {
      bulletMatches.forEach(match => {
        const text = match.replace(/^[\*\-]\s+/, '').trim()
        if (text) takeaways.push(text)
      })
    }
  }

  // If no Key Takeaways section found, extract key concepts from headers and bold text
  if (takeaways.length === 0) {
    // Get all h2 headers as potential takeaways
    const headerMatches = markdown.match(/^##\s+(.+)$/gm)
    if (headerMatches && headerMatches.length > 0) {
      headerMatches.slice(0, 5).forEach(match => {
        const text = match.replace(/^##\s+/, '').trim()
        if (text && !text.toLowerCase().includes('introduction') && !text.toLowerCase().includes('conclusion')) {
          takeaways.push(text)
        }
      })
    }
  }

  // Limit to 5 takeaways
  return takeaways.slice(0, 5)
}

// Strip Key Takeaways section from markdown content
function stripKeyTakeaways(markdown: string): string {
  // Remove "Key Takeaways", "Summary", "Key Points", "What You'll Learn" sections
  return markdown.replace(/##?\s*(Key Takeaways|Summary|Key Points|What You['']ll Learn)[\s\S]*?(?=##|$)/gi, '')
}
