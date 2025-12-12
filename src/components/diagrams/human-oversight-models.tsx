import { cn } from "@/lib/utils"
import { User, Eye, Settings, ArrowRight, StopCircle } from "lucide-react"

const models = [
  {
    name: "HITL",
    fullName: "Human-in-the-Loop",
    description: "Human approves every decision",
    level: "Maximum Control",
    icon: User,
    gradient: "bg-gradient-to-r from-red-500 to-rose-500",
    bgLight: "bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-800",
    textColor: "text-red-700 dark:text-red-300",
    flow: ["AI Suggests", "Human Decides", "Action Taken"],
    bestFor: "Medical diagnosis, sentencing, critical safety",
  },
  {
    name: "HOTL",
    fullName: "Human-on-the-Loop",
    description: "Human monitors and can intervene",
    level: "Balanced Control",
    icon: Eye,
    gradient: "bg-gradient-to-r from-amber-500 to-orange-500",
    bgLight: "bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800",
    textColor: "text-amber-700 dark:text-amber-300",
    flow: ["AI Acts", "Human Monitors", "Intervenes if needed"],
    bestFor: "High-volume decisions with escalation criteria",
  },
  {
    name: "HIC",
    fullName: "Human-in-Command",
    description: "Human sets boundaries, AI operates within",
    level: "Strategic Control",
    icon: Settings,
    gradient: "bg-gradient-to-r from-accent to-teal-500",
    bgLight: "bg-teal-50 dark:bg-teal-950/30 border-teal-200 dark:border-teal-800",
    textColor: "text-teal-700 dark:text-teal-300",
    flow: ["Human Sets Rules", "AI Operates", "Periodic Review"],
    bestFor: "Well-understood processes with clear boundaries",
  },
]

export function HumanOversightModels() {
  return (
    <div className="my-8 space-y-6">
      <h4 className="text-lg font-semibold text-center">Article 14: Human Oversight Models</h4>

      <div className="grid gap-6 md:grid-cols-3">
        {models.map((model) => {
          const Icon = model.icon
          return (
            <div
              key={model.name}
              className={cn(
                "group rounded-2xl border p-6 transition-all duration-300 hover:shadow-xl",
                model.bgLight,
              )}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={cn(
                    "flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-lg transition-transform group-hover:scale-110",
                    model.gradient,
                  )}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h5 className={cn("font-bold text-lg", model.textColor)}>{model.name}</h5>
                  <p className="text-xs text-muted-foreground">{model.fullName}</p>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-4">{model.description}</p>

              {/* Flow diagram */}
              <div className="flex flex-wrap items-center gap-1 mb-4">
                {model.flow.map((step, i) => (
                  <div key={i} className="flex items-center gap-1">
                    <span className="text-xs bg-muted px-2 py-1 rounded-full">{step}</span>
                    {i < model.flow.length - 1 && (
                      <ArrowRight className="h-3 w-3 text-muted-foreground" />
                    )}
                  </div>
                ))}
              </div>

              {/* Best for */}
              <div className="text-xs">
                <span className="font-semibold">Best for: </span>
                <span className="text-muted-foreground">{model.bestFor}</span>
              </div>
            </div>
          )
        })}
      </div>

      {/* Stop button requirement */}
      <div className="rounded-xl border border-amber-300 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30 p-4 flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg flex-shrink-0">
          <StopCircle className="h-6 w-6" />
        </div>
        <div>
          <h5 className="font-bold text-amber-700 dark:text-amber-300">Key Requirement: The Stop Button</h5>
          <p className="text-sm text-muted-foreground">
            Article 14(4)(e) mandates ability to intervene or interrupt via accessible "stop" control - must be clear, immediate, with no resistance to override
          </p>
        </div>
      </div>
    </div>
  )
}
