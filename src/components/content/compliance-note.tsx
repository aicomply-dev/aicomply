import { AlertTriangle } from "lucide-react"

interface ComplianceNoteProps {
  content: string
}

export function ComplianceNote({ content }: ComplianceNoteProps) {
  return (
    <div className="my-6 rounded-2xl border border-amber-300 dark:border-amber-700 bg-gradient-to-r from-amber-100 dark:from-amber-950/50 to-card p-5 shadow-md transition-all duration-300 hover:shadow-lg">
      <div className="flex gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg flex-shrink-0">
          <AlertTriangle className="h-5 w-5" />
        </div>
        <div>
          <h4 className="font-bold text-sm text-amber-700 dark:text-amber-300 mb-1">Compliance Note</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">{content}</p>
        </div>
      </div>
    </div>
  )
}
