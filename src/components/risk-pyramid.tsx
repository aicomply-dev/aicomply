import type React from "react"
import { cn } from "@/lib/utils"
import { Ban, AlertTriangle, Eye, CheckCircle } from "lucide-react"

interface RiskLevel {
  level: string
  description: string
  examples: string[]
  icon: React.ReactNode
  gradient: string
  bgLight: string
  textColor: string
}

const riskLevels: RiskLevel[] = [
  {
    level: "Prohibited",
    description: "Banned AI practices",
    examples: ["Social scoring", "Manipulative AI", "Real-time biometric ID"],
    icon: <Ban className="h-5 w-5" />,
    gradient: "bg-gradient-to-r from-red-500 to-rose-500",
    bgLight: "bg-red-50 border-red-200",
    textColor: "text-red-700",
  },
  {
    level: "High Risk",
    description: "Strict requirements apply",
    examples: ["HR/recruitment AI", "Credit scoring", "Medical devices"],
    icon: <AlertTriangle className="h-5 w-5" />,
    gradient: "bg-gradient-to-r from-amber-500 to-orange-500",
    bgLight: "bg-amber-50 border-amber-200",
    textColor: "text-amber-700",
  },
  {
    level: "Limited Risk",
    description: "Transparency obligations",
    examples: ["Chatbots", "Emotion recognition", "Deep fakes"],
    icon: <Eye className="h-5 w-5" />,
    gradient: "bg-gradient-to-r from-primary to-indigo-500",
    bgLight: "bg-indigo-50 border-indigo-200",
    textColor: "text-indigo-700",
  },
  {
    level: "Minimal Risk",
    description: "No specific requirements",
    examples: ["Spam filters", "AI-enabled games", "Inventory management"],
    icon: <CheckCircle className="h-5 w-5" />,
    gradient: "bg-gradient-to-r from-accent to-teal-500",
    bgLight: "bg-teal-50 border-teal-200",
    textColor: "text-teal-700",
  },
]

export function RiskPyramid() {
  return (
    <div className="space-y-12">
      {/* Pyramid visualization */}
      <div className="flex flex-col items-center gap-3">
        {riskLevels.map((risk, index) => {
          const width = 35 + index * 20
          return (
            <div
              key={risk.level}
              className={cn(
                "relative flex items-center justify-center gap-3 rounded-xl px-6 py-4 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl",
                risk.gradient,
              )}
              style={{ width: `${width}%`, minWidth: "220px" }}
            >
              {risk.icon}
              <div className="text-center">
                <h4 className="font-bold">{risk.level}</h4>
                <p className="text-xs text-white/80">{risk.description}</p>
              </div>
            </div>
          )
        })}
      </div>

      {/* Detail cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {riskLevels.map((risk) => (
          <div key={risk.level} className={cn("rounded-xl border p-5 transition-all hover:shadow-lg", risk.bgLight)}>
            <div className={cn("mb-3 flex items-center gap-2 font-bold", risk.textColor)}>
              {risk.icon}
              {risk.level}
            </div>
            <ul className="space-y-2">
              {risk.examples.map((example) => (
                <li key={example} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className={cn("mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full", risk.gradient)} />
                  {example}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
