import { cn } from "@/lib/utils"
import { Lightbulb, Code, TestTube, Rocket, Settings, RefreshCw } from "lucide-react"

const stages = [
  { name: "Design", icon: Lightbulb, color: "bg-primary" },
  { name: "Development", icon: Code, color: "bg-violet-500" },
  { name: "Testing", icon: TestTube, color: "bg-amber-500" },
  { name: "Deployment", icon: Rocket, color: "bg-accent" },
  { name: "Operation", icon: Settings, color: "bg-rose-500" },
  { name: "Monitoring", icon: RefreshCw, color: "bg-indigo-500" },
]

export function AiLifecycle() {
  return (
    <div className="my-8 space-y-6">
      <h4 className="text-lg font-semibold text-center">AI System Lifecycle</h4>

      {/* Lifecycle visualization */}
      <div className="flex flex-wrap justify-center gap-3">
        {stages.map((stage, index) => {
          const Icon = stage.icon
          return (
            <div key={stage.name} className="flex items-center gap-2">
              <div
                className={cn(
                  "flex items-center gap-2 rounded-full px-4 py-2 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl",
                  stage.color,
                )}
              >
                <Icon className="h-4 w-4" />
                <span className="font-medium text-sm">{stage.name}</span>
              </div>
              {index < stages.length - 1 && (
                <span className="text-muted-foreground hidden sm:block">→</span>
              )}
            </div>
          )
        })}
      </div>

      <p className="text-center text-sm text-muted-foreground">
        Compliance requirements apply throughout the entire AI lifecycle
      </p>
    </div>
  )
}
