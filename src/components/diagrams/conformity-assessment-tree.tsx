import { cn } from "@/lib/utils"
import { FileCheck, Building2, Scale, Package, CheckSquare, ClipboardCheck } from "lucide-react"

const assessmentRoutes = [
  {
    type: "Annex III systems (most cases)",
    route: "Internal control (Annex VI)",
    reference: "Article 43(2)",
    icon: ClipboardCheck,
    description: "Self-assessment by the provider",
    color: "from-emerald-500 to-teal-500",
    bgLight: "bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800",
  },
  {
    type: "Biometric ID systems",
    subtype: "Remote, real-time, public spaces",
    route: "Notified body (Annex VII)",
    reference: "Article 43(2)",
    icon: Building2,
    description: "Third-party assessment required",
    color: "from-amber-500 to-orange-500",
    bgLight: "bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800",
  },
  {
    type: "Annex I, Section A systems",
    subtype: "Other EU law applies",
    route: "Per sectoral legislation + AI Act",
    reference: "Article 43(3)",
    icon: Scale,
    description: "Combined assessment approach",
    color: "from-sky-500 to-blue-500",
    bgLight: "bg-sky-50 dark:bg-sky-950/30 border-sky-200 dark:border-sky-800",
  },
  {
    type: "Annex I, Section B systems",
    subtype: "Product integration",
    route: "Integrated with product conformity",
    reference: "Article 43(4)",
    icon: Package,
    description: "Assessed as part of product",
    color: "from-violet-500 to-purple-500",
    bgLight: "bg-violet-50 dark:bg-violet-950/30 border-violet-200 dark:border-violet-800",
  },
  {
    type: "Systems using harmonised standards",
    route: "May use Annex VI procedures",
    reference: "Article 43(2)",
    icon: CheckSquare,
    description: "Simplified internal control",
    color: "from-primary to-indigo-500",
    bgLight: "bg-primary/5 border-primary/20",
  },
]

export function ConformityAssessmentTree() {
  return (
    <div className="my-8 space-y-6">
      <div className="flex items-center justify-center gap-3 mb-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-primary to-indigo-500 text-white shadow-lg">
          <FileCheck className="h-5 w-5" />
        </div>
        <h4 className="text-lg font-semibold">Conformity Assessment Decision Tree</h4>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {assessmentRoutes.map((route, index) => {
          const Icon = route.icon
          return (
            <div
              key={index}
              className={cn(
                "group rounded-2xl border p-5 transition-all duration-300 hover:shadow-xl",
                route.bgLight
              )}
            >
              {/* Header */}
              <div className="flex items-start gap-3 mb-4">
                <div
                  className={cn(
                    "flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-lg transition-transform group-hover:scale-110",
                    `bg-gradient-to-r ${route.color}`
                  )}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h5 className="font-bold text-sm leading-tight">{route.type}</h5>
                  {route.subtype && (
                    <p className="text-xs text-muted-foreground mt-0.5">{route.subtype}</p>
                  )}
                </div>
              </div>

              {/* Route */}
              <div className="space-y-2">
                <div className="rounded-lg bg-background/60 border border-border/50 p-3">
                  <p className="text-xs text-muted-foreground mb-1">Assessment Route</p>
                  <p className="font-semibold text-sm">{route.route}</p>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">{route.description}</span>
                  <span className="font-mono text-primary bg-primary/10 px-2 py-0.5 rounded">
                    {route.reference}
                  </span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
