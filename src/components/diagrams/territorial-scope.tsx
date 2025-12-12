import { cn } from "@/lib/utils"
import { Globe, Building2, Users, CheckCircle2, XCircle, ArrowDown } from "lucide-react"

const steps = [
  {
    question: "Are you established in the EU?",
    icon: Building2,
    yesPath: "AI Act applies",
    noPath: "Continue to next question",
  },
  {
    question: "Do you place AI on EU market?",
    icon: Globe,
    yesPath: "AI Act applies",
    noPath: "Continue to next question",
  },
  {
    question: "Is output used in the EU?",
    icon: Users,
    yesPath: "AI Act applies",
    noPath: "AI Act may not apply",
  },
]

export function TerritorialScope() {
  return (
    <div className="my-8 space-y-6">
      <h4 className="text-lg font-semibold text-center">Does the EU AI Act Apply to You?</h4>

      <div className="flex flex-col items-center gap-4">
        {steps.map((step, index) => {
          const Icon = step.icon
          return (
            <div key={index} className="w-full max-w-md">
              {/* Question box */}
              <div className="rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/5 via-card to-card p-5 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-semibold">{step.question}</span>
                </div>

                {/* Answer paths */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 rounded-lg bg-accent/10 border border-accent/20 px-3 py-2">
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                    <span className="text-sm text-accent font-medium">Yes: {step.yesPath}</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg bg-muted px-3 py-2">
                    <XCircle className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{step.noPath}</span>
                  </div>
                </div>
              </div>

              {/* Arrow connector */}
              {index < steps.length - 1 && (
                <div className="flex justify-center py-2">
                  <ArrowDown className="h-5 w-5 text-muted-foreground" />
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
