import { cn } from "@/lib/utils"
import { Cpu, Brain, Target } from "lucide-react"

const pillars = [
  {
    title: "Machine-Based",
    description: "Uses computational systems",
    icon: Cpu,
    gradient: "bg-gradient-to-r from-primary to-indigo-500",
    bgLight: "bg-indigo-50 dark:bg-indigo-950/30 border-indigo-200 dark:border-indigo-800",
    textColor: "text-indigo-700 dark:text-indigo-300",
  },
  {
    title: "Autonomy",
    description: "Varying levels of independence",
    icon: Brain,
    gradient: "bg-gradient-to-r from-violet-500 to-purple-500",
    bgLight: "bg-violet-50 dark:bg-violet-950/30 border-violet-200 dark:border-violet-800",
    textColor: "text-violet-700 dark:text-violet-300",
  },
  {
    title: "Output Generation",
    description: "Produces predictions, recommendations, decisions",
    icon: Target,
    gradient: "bg-gradient-to-r from-accent to-teal-500",
    bgLight: "bg-teal-50 dark:bg-teal-950/30 border-teal-200 dark:border-teal-800",
    textColor: "text-teal-700 dark:text-teal-300",
  },
]

export function AiSystemDefinition() {
  return (
    <div className="my-8 space-y-6">
      <h4 className="text-lg font-semibold text-center">What is an AI System? (Article 3)</h4>

      <div className="grid gap-4 md:grid-cols-3">
        {pillars.map((pillar) => {
          const Icon = pillar.icon
          return (
            <div
              key={pillar.title}
              className="group rounded-2xl border p-6 transition-all duration-300 hover:shadow-xl"
            >
              {/* Icon header */}
              <div
                className={cn(
                  "flex h-14 w-14 items-center justify-center rounded-xl text-white shadow-lg transition-transform group-hover:scale-110 mb-4",
                  pillar.gradient,
                )}
              >
                <Icon className="h-7 w-7" />
              </div>

              <h5 className={cn("font-bold text-lg mb-2", pillar.textColor)}>{pillar.title}</h5>
              <p className="text-muted-foreground text-sm">{pillar.description}</p>
            </div>
          )
        })}
      </div>

      <div className="rounded-xl border border-primary/30 bg-primary/5 p-4 text-center">
        <p className="text-sm text-muted-foreground">
          All three elements must be present for a system to qualify as an "AI system" under the Act
        </p>
      </div>
    </div>
  )
}
