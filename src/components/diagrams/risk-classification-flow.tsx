import { cn } from "@/lib/utils"
import { Ban, AlertTriangle, Eye, CheckCircle, ArrowDown, HelpCircle } from "lucide-react"

const decisions = [
  {
    question: "Is it a prohibited practice?",
    yesResult: { label: "PROHIBITED", color: "bg-red-500", icon: Ban },
    noAction: "Continue assessment",
  },
  {
    question: "Listed in Annex III categories?",
    yesResult: { label: "HIGH RISK", color: "bg-amber-500", icon: AlertTriangle },
    noAction: "Continue assessment",
  },
  {
    question: "Requires transparency?",
    yesResult: { label: "LIMITED RISK", color: "bg-primary", icon: Eye },
    noAction: "Continue assessment",
  },
]

export function RiskClassificationFlow() {
  return (
    <div className="my-8 space-y-6">
      <h4 className="text-lg font-semibold text-center">Risk Classification Decision Flow</h4>

      <div className="flex flex-col items-center gap-2">
        {/* Start */}
        <div className="rounded-xl bg-muted px-6 py-3 font-semibold">
          <HelpCircle className="inline h-4 w-4 mr-2" />
          Start Assessment
        </div>
        <ArrowDown className="h-5 w-5 text-muted-foreground" />

        {decisions.map((decision, index) => {
          const ResultIcon = decision.yesResult.icon
          return (
            <div key={index} className="w-full max-w-lg">
              {/* Question */}
              <div className="rounded-2xl border border-border bg-card p-4 shadow-lg">
                <p className="font-semibold text-center mb-4">{decision.question}</p>

                <div className="grid grid-cols-2 gap-3">
                  {/* Yes path */}
                  <div
                    className={cn(
                      "flex flex-col items-center gap-2 rounded-xl px-4 py-3 text-white",
                      decision.yesResult.color,
                    )}
                  >
                    <ResultIcon className="h-5 w-5" />
                    <span className="text-xs font-bold">{decision.yesResult.label}</span>
                  </div>

                  {/* No path */}
                  <div className="flex flex-col items-center justify-center gap-1 rounded-xl border border-dashed border-muted-foreground/30 px-4 py-3">
                    <span className="text-xs text-muted-foreground">No</span>
                    <ArrowDown className="h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
              </div>

              {index < decisions.length - 1 && (
                <div className="flex justify-center py-2">
                  <ArrowDown className="h-5 w-5 text-muted-foreground" />
                </div>
              )}
            </div>
          )
        })}

        <ArrowDown className="h-5 w-5 text-muted-foreground" />

        {/* End - Minimal Risk */}
        <div className="rounded-xl bg-gradient-to-r from-accent to-teal-500 px-6 py-4 text-white shadow-lg">
          <CheckCircle className="inline h-5 w-5 mr-2" />
          <span className="font-bold">MINIMAL RISK</span>
          <p className="text-xs text-white/80 mt-1">No specific requirements</p>
        </div>
      </div>
    </div>
  )
}
