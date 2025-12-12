import { HelpCircle, CheckSquare } from "lucide-react"

interface SelfAssessmentProps {
  questions: string[]
}

export function SelfAssessment({ questions }: SelfAssessmentProps) {
  return (
    <div className="my-8 rounded-2xl border border-amber-200 dark:border-amber-800 bg-gradient-to-br from-amber-50 dark:from-amber-950/30 via-card to-card p-6 shadow-lg">
      <div className="flex items-center gap-3 mb-5">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg">
          <HelpCircle className="h-6 w-6" />
        </div>
        <div>
          <h3 className="font-bold text-lg text-amber-700 dark:text-amber-300">Self-Assessment Questions</h3>
          <p className="text-sm text-muted-foreground">Review your understanding with these questions</p>
        </div>
      </div>

      <ol className="space-y-3">
        {questions.map((question, index) => (
          <li
            key={index}
            className="flex items-start gap-3 rounded-xl bg-amber-100/50 dark:bg-amber-900/20 p-3 transition-all duration-200 hover:bg-amber-100 dark:hover:bg-amber-900/30"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-500 text-white text-xs font-bold flex-shrink-0">
              {index + 1}
            </span>
            <span className="text-sm">{question}</span>
          </li>
        ))}
      </ol>
    </div>
  )
}
