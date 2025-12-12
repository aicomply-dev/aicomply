import { cn } from "@/lib/utils"
import { HelpCircle, CheckCircle, XCircle, ArrowDown, GitBranch } from "lucide-react"

const decisions = [
  {
    question: "Is it high-risk under Article 6/Annex III?",
    ifYes: { text: "Full obligations apply", terminal: true, variant: "danger" as const },
    ifNo: { text: "Continue assessment", terminal: false },
  },
  {
    question: "Is it a prohibited practice under Article 5?",
    ifYes: { text: "Prohibited regardless", terminal: true, variant: "danger" as const },
    ifNo: { text: "Continue assessment", terminal: false },
  },
  {
    question: "Is it a GPAI model?",
    ifYes: { text: "Chapter V obligations apply", terminal: true, variant: "warning" as const },
    ifNo: { text: "Continue assessment", terminal: false },
  },
  {
    question: "Does it require transparency under Article 50?",
    ifYes: { text: "Transparency obligations apply", terminal: true, variant: "warning" as const },
    ifNo: { text: "Continue assessment", terminal: false },
  },
  {
    question: "Is it placed on market under provider's name?",
    ifYes: { text: "Full provider obligations", terminal: true, variant: "warning" as const },
    ifNo: { text: "May be exempt from most obligations", terminal: true, variant: "success" as const },
  },
]

const variantStyles = {
  danger: "bg-gradient-to-r from-red-500 to-rose-500 text-white",
  warning: "bg-gradient-to-r from-amber-500 to-orange-500 text-white",
  success: "bg-gradient-to-r from-emerald-500 to-teal-500 text-white",
}

export function OpenSourceDecisionTree() {
  return (
    <div className="my-8 space-y-4">
      <div className="flex items-center justify-center gap-3 mb-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-primary to-indigo-500 text-white shadow-lg">
          <GitBranch className="h-5 w-5" />
        </div>
        <h4 className="text-lg font-semibold">Open-Source Exemption Decision Tree</h4>
      </div>

      <div className="flex flex-col items-center gap-2">
        {decisions.map((decision, index) => (
          <div key={index} className="w-full max-w-2xl">
            {/* Question Node */}
            <div className="relative flex items-center justify-center">
              <div className="flex items-center gap-3 rounded-xl border-2 border-primary/30 bg-gradient-to-r from-primary/10 to-indigo-500/10 px-6 py-4 shadow-md w-full">
                <HelpCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium">{decision.question}</span>
              </div>
            </div>

            {/* Branches */}
            <div className="flex justify-center gap-8 mt-2">
              {/* Yes Branch */}
              <div className="flex flex-col items-center">
                <div className="h-4 w-0.5 bg-emerald-400" />
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 mb-1">YES</span>
                <div
                  className={cn(
                    "flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-medium shadow-md",
                    decision.ifYes.variant ? variantStyles[decision.ifYes.variant] : "bg-muted"
                  )}
                >
                  {decision.ifYes.terminal ? (
                    <CheckCircle className="h-4 w-4" />
                  ) : (
                    <ArrowDown className="h-4 w-4" />
                  )}
                  {decision.ifYes.text}
                </div>
              </div>

              {/* No Branch */}
              <div className="flex flex-col items-center">
                <div className="h-4 w-0.5 bg-rose-400" />
                <span className="text-xs font-bold text-rose-600 dark:text-rose-400 mb-1">NO</span>
                <div
                  className={cn(
                    "flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-medium shadow-md",
                    decision.ifNo.variant ? variantStyles[decision.ifNo.variant] : "bg-muted text-muted-foreground"
                  )}
                >
                  {decision.ifNo.terminal ? (
                    <CheckCircle className="h-4 w-4" />
                  ) : (
                    <ArrowDown className="h-4 w-4" />
                  )}
                  {decision.ifNo.text}
                </div>
              </div>
            </div>

            {/* Connector to next question */}
            {index < decisions.length - 1 && !decision.ifNo.terminal && (
              <div className="flex justify-center mt-2">
                <div className="h-6 w-0.5 bg-gradient-to-b from-muted-foreground/50 to-primary/50" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
