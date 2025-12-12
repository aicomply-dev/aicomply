import { Lightbulb } from "lucide-react"

interface ExpertInsightProps {
  content: string
}

export function ExpertInsight({ content }: ExpertInsightProps) {
  return (
    <div className="my-6 rounded-2xl border border-teal-200 dark:border-teal-800 bg-gradient-to-r from-teal-50 dark:from-teal-950/30 to-card p-5 shadow-md transition-all duration-300 hover:shadow-lg">
      <div className="flex gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 text-white shadow-lg flex-shrink-0">
          <Lightbulb className="h-5 w-5" />
        </div>
        <div>
          <h4 className="font-bold text-sm text-teal-700 dark:text-teal-300 mb-1">Expert Insight</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">{content}</p>
        </div>
      </div>
    </div>
  )
}
