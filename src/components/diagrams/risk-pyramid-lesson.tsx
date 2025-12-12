import { cn } from "@/lib/utils"
import { Ban, AlertTriangle, Eye, CheckCircle } from "lucide-react"

const riskLevels = [
  {
    level: "Prohibited",
    description: "Banned AI practices",
    icon: Ban,
    gradient: "bg-gradient-to-r from-red-500 to-rose-500",
    bgLight: "bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-800",
    textColor: "text-red-700 dark:text-red-300",
  },
  {
    level: "High Risk",
    description: "Strict requirements apply",
    icon: AlertTriangle,
    gradient: "bg-gradient-to-r from-amber-500 to-orange-500",
    bgLight: "bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800",
    textColor: "text-amber-700 dark:text-amber-300",
  },
  {
    level: "Limited Risk",
    description: "Transparency obligations",
    icon: Eye,
    gradient: "bg-gradient-to-r from-primary to-indigo-500",
    bgLight: "bg-indigo-50 dark:bg-indigo-950/30 border-indigo-200 dark:border-indigo-800",
    textColor: "text-indigo-700 dark:text-indigo-300",
  },
  {
    level: "Minimal Risk",
    description: "No specific requirements",
    icon: CheckCircle,
    gradient: "bg-gradient-to-r from-accent to-teal-500",
    bgLight: "bg-teal-50 dark:bg-teal-950/30 border-teal-200 dark:border-teal-800",
    textColor: "text-teal-700 dark:text-teal-300",
  },
]

export function RiskPyramidLesson() {
  return (
    <div className="my-8 space-y-6">
      <h4 className="text-lg font-semibold text-center">EU AI Act Risk Classification Pyramid</h4>

      {/* Pyramid visualization */}
      <div className="flex flex-col items-center gap-3">
        {riskLevels.map((risk, index) => {
          const width = 35 + index * 20
          const Icon = risk.icon
          return (
            <div
              key={risk.level}
              className={cn(
                "relative flex items-center justify-center gap-3 rounded-xl px-6 py-4 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl",
                risk.gradient,
              )}
              style={{ width: `${width}%`, minWidth: "200px" }}
            >
              <Icon className="h-5 w-5" />
              <div className="text-center">
                <span className="font-bold">{risk.level}</span>
                <p className="text-xs text-white/80">{risk.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
