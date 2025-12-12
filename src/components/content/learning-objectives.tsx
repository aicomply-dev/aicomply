import { Target, CheckCircle2 } from "lucide-react"

interface LearningObjectivesProps {
  objectives: string[]
}

export function LearningObjectives({ objectives }: LearningObjectivesProps) {
  return (
    <div className="my-8 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 via-card to-card p-6 shadow-lg">
      <div className="flex items-center gap-3 mb-5">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-primary to-indigo-500 text-white shadow-lg">
          <Target className="h-6 w-6" />
        </div>
        <div>
          <h3 className="font-bold text-lg">Learning Objectives</h3>
          <p className="text-sm text-muted-foreground">By the end of this chapter, you will be able to:</p>
        </div>
      </div>

      <ul className="space-y-3">
        {objectives.map((objective, index) => (
          <li
            key={index}
            className="flex items-start gap-3 rounded-xl bg-muted/50 p-3 transition-all duration-200 hover:bg-muted"
          >
            <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
            <span className="text-sm">{objective}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
