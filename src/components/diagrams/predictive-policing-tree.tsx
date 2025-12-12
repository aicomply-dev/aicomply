import { cn } from "@/lib/utils"
import { Map, User, Users, Ban, AlertTriangle, GitBranch } from "lucide-react"

const classifications = [
  {
    design: "Predicts area-level crime patterns only",
    classification: "High-Risk",
    detail: "Annex III, Section 6",
    icon: Map,
    variant: "high" as const,
  },
  {
    design: "Predicts individual criminal likelihood",
    classification: "May be PROHIBITED",
    detail: "Article 5(1)(d)",
    icon: User,
    variant: "danger" as const,
  },
  {
    design: "Combines area + individual profiling",
    classification: "PROHIBITED",
    detail: "Article 5(1)(d)",
    icon: Users,
    variant: "prohibited" as const,
  },
]

const variantStyles = {
  high: {
    gradient: "from-amber-500 to-orange-500",
    bg: "bg-amber-50 dark:bg-amber-950/30",
    border: "border-amber-200 dark:border-amber-800",
    text: "text-amber-700 dark:text-amber-300",
    badge: "bg-amber-500",
  },
  danger: {
    gradient: "from-rose-500 to-red-500",
    bg: "bg-rose-50 dark:bg-rose-950/30",
    border: "border-rose-200 dark:border-rose-800",
    text: "text-rose-700 dark:text-rose-300",
    badge: "bg-rose-500",
  },
  prohibited: {
    gradient: "from-red-600 to-rose-600",
    bg: "bg-red-50 dark:bg-red-950/30",
    border: "border-red-300 dark:border-red-800",
    text: "text-red-700 dark:text-red-300",
    badge: "bg-red-600",
  },
}

export function PredictivePolicingTree() {
  return (
    <div className="my-8 space-y-6">
      <div className="flex items-center justify-center gap-3 mb-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-primary to-indigo-500 text-white shadow-lg">
          <GitBranch className="h-5 w-5" />
        </div>
        <h4 className="text-lg font-semibold">Predictive Policing Classification Decision Tree</h4>
      </div>

      <div className="space-y-4">
        {classifications.map((item, index) => {
          const Icon = item.icon
          const styles = variantStyles[item.variant]

          return (
            <div
              key={index}
              className={cn(
                "group relative flex items-center gap-4 rounded-2xl border p-5 transition-all duration-300 hover:shadow-xl",
                styles.bg,
                styles.border
              )}
            >
              {/* Icon */}
              <div
                className={cn(
                  "flex h-14 w-14 items-center justify-center rounded-xl text-white shadow-lg transition-transform group-hover:scale-110",
                  `bg-gradient-to-r ${styles.gradient}`
                )}
              >
                <Icon className="h-7 w-7" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <p className="font-medium text-sm mb-2">{item.design}</p>
                <div className="flex items-center gap-3">
                  <span
                    className={cn(
                      "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold text-white",
                      styles.badge
                    )}
                  >
                    {item.variant === "prohibited" && <Ban className="h-3 w-3" />}
                    {item.variant === "danger" && <AlertTriangle className="h-3 w-3" />}
                    {item.variant === "high" && <AlertTriangle className="h-3 w-3" />}
                    {item.classification}
                  </span>
                  <span className="text-xs text-muted-foreground font-mono bg-muted px-2 py-0.5 rounded">
                    {item.detail}
                  </span>
                </div>
              </div>

              {/* Arrow indicator */}
              <div
                className={cn(
                  "absolute -right-2 top-1/2 -translate-y-1/2 h-4 w-4 rotate-45",
                  styles.bg,
                  styles.border,
                  "border-l-0 border-b-0"
                )}
              />
            </div>
          )
        })}
      </div>

      {/* Critical distinction callout */}
      <div className="rounded-xl border border-amber-300 dark:border-amber-700 bg-amber-100 dark:bg-amber-950/50 p-4 flex items-start gap-3">
        <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
        <div>
          <p className="font-bold text-sm text-amber-700 dark:text-amber-300 mb-1">Critical Distinction</p>
          <p className="text-sm text-muted-foreground">
            Area-based predictive policing may be high-risk but permissible. Individual-based profiling to predict criminal behaviour is likely prohibited under Article 5(1)(d).
          </p>
        </div>
      </div>
    </div>
  )
}
