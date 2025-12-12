import { cn } from "@/lib/utils"
import { ArrowRight, Ban, AlertTriangle, Shield, CheckCircle, GitBranch } from "lucide-react"

const steps = [
  {
    step: "1",
    question: "Is it a prohibited practice (Art. 5)?",
    ifYes: { text: "PROHIBITED", description: "Cannot deploy", variant: "prohibited" as const },
    ifNo: { text: "Proceed to Step 2", variant: "continue" as const },
  },
  {
    step: "2a",
    question: "Is it a safety component in Annex I product?",
    ifYes: { text: "HIGH-RISK", variant: "high" as const },
    ifNo: { text: "Proceed to Step 2b", variant: "continue" as const },
  },
  {
    step: "2b",
    question: "Is it an Annex III use case?",
    ifYes: { text: "Check filter exception", variant: "continue" as const },
    ifNo: { text: "Proceed to Step 3", variant: "continue" as const },
  },
  {
    step: "2c",
    question: "Does filter exception apply?",
    ifYes: { text: "Limited or Minimal Risk", variant: "low" as const },
    ifNo: { text: "HIGH-RISK", variant: "high" as const },
  },
  {
    step: "3",
    question: "Does Art. 50 transparency apply?",
    ifYes: { text: "LIMITED RISK", variant: "limited" as const },
    ifNo: { text: "MINIMAL RISK", variant: "minimal" as const },
  },
]

const variantStyles = {
  prohibited: {
    bg: "bg-gradient-to-r from-red-600 to-rose-600",
    text: "text-white",
    icon: Ban,
  },
  high: {
    bg: "bg-gradient-to-r from-amber-500 to-orange-500",
    text: "text-white",
    icon: AlertTriangle,
  },
  limited: {
    bg: "bg-gradient-to-r from-sky-500 to-blue-500",
    text: "text-white",
    icon: Shield,
  },
  minimal: {
    bg: "bg-gradient-to-r from-emerald-500 to-teal-500",
    text: "text-white",
    icon: CheckCircle,
  },
  low: {
    bg: "bg-gradient-to-r from-teal-500 to-emerald-500",
    text: "text-white",
    icon: CheckCircle,
  },
  continue: {
    bg: "bg-muted",
    text: "text-muted-foreground",
    icon: ArrowRight,
  },
}

export function ClassificationDecisionFlow() {
  return (
    <div className="my-8 space-y-4">
      <div className="flex items-center justify-center gap-3 mb-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-primary to-indigo-500 text-white shadow-lg">
          <GitBranch className="h-5 w-5" />
        </div>
        <h4 className="text-lg font-semibold">Classification Decision Flowchart</h4>
      </div>

      <div className="space-y-4">
        {steps.map((step, index) => {
          const yesStyle = variantStyles[step.ifYes.variant]
          const noStyle = variantStyles[step.ifNo.variant]
          const YesIcon = yesStyle.icon
          const NoIcon = noStyle.icon

          return (
            <div key={index} className="relative">
              {/* Step indicator */}
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-primary to-indigo-500 text-white font-bold text-sm shadow-lg flex-shrink-0">
                  {step.step}
                </div>

                <div className="flex-1 space-y-3">
                  {/* Question */}
                  <div className="rounded-xl border border-primary/20 bg-card p-4 shadow-sm">
                    <p className="font-medium">{step.question}</p>
                  </div>

                  {/* Outcomes */}
                  <div className="grid grid-cols-2 gap-3">
                    {/* Yes outcome */}
                    <div className="space-y-1">
                      <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 ml-2">YES →</span>
                      <div
                        className={cn(
                          "flex items-center gap-2 rounded-xl px-4 py-3 shadow-md transition-transform hover:scale-[1.02]",
                          yesStyle.bg,
                          yesStyle.text
                        )}
                      >
                        <YesIcon className="h-4 w-4 flex-shrink-0" />
                        <div>
                          <span className="font-bold text-sm">{step.ifYes.text}</span>
                          {step.ifYes.description && (
                            <p className="text-xs opacity-90">{step.ifYes.description}</p>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* No outcome */}
                    <div className="space-y-1">
                      <span className="text-xs font-bold text-rose-600 dark:text-rose-400 ml-2">NO →</span>
                      <div
                        className={cn(
                          "flex items-center gap-2 rounded-xl px-4 py-3 shadow-md transition-transform hover:scale-[1.02]",
                          noStyle.bg,
                          noStyle.text
                        )}
                      >
                        <NoIcon className="h-4 w-4 flex-shrink-0" />
                        <span className="font-bold text-sm">{step.ifNo.text}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="absolute left-5 top-14 h-[calc(100%-2rem)] w-0.5 bg-gradient-to-b from-primary/50 to-primary/20" />
              )}
            </div>
          )
        })}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-3 pt-4 border-t border-border/50 mt-6">
        {[
          { label: "Prohibited", variant: "prohibited" as const },
          { label: "High-Risk", variant: "high" as const },
          { label: "Limited Risk", variant: "limited" as const },
          { label: "Minimal Risk", variant: "minimal" as const },
        ].map((item) => {
          const style = variantStyles[item.variant]
          return (
            <div
              key={item.label}
              className={cn("rounded-full px-3 py-1 text-xs font-medium", style.bg, style.text)}
            >
              {item.label}
            </div>
          )
        })}
      </div>
    </div>
  )
}
