import type React from "react"
import { cn } from "@/lib/utils"
import { Factory, Building2, Ship, Truck, UserCheck, ArrowRight } from "lucide-react"

interface Role {
  role: string
  description: string
  obligations: string[]
  icon: React.ReactNode
  gradient: string
  bgLight: string
  textColor: string
  borderColor: string
}

const roles: Role[] = [
  {
    role: "Provider",
    description: "Develops or places AI on market",
    obligations: [
      "Ensure conformity assessment",
      "Establish quality management",
      "Create technical documentation",
      "Register in EU database",
    ],
    icon: <Factory className="h-5 w-5" />,
    gradient: "bg-gradient-to-r from-primary to-indigo-500",
    bgLight: "bg-indigo-50 dark:bg-indigo-950/30 border-indigo-200 dark:border-indigo-800",
    textColor: "text-indigo-700 dark:text-indigo-300",
    borderColor: "border-primary/30",
  },
  {
    role: "Deployer",
    description: "Uses AI under their authority",
    obligations: [
      "Implement human oversight",
      "Monitor AI operation",
      "Keep logs as required",
      "Conduct impact assessments",
    ],
    icon: <Building2 className="h-5 w-5" />,
    gradient: "bg-gradient-to-r from-accent to-teal-500",
    bgLight: "bg-teal-50 dark:bg-teal-950/30 border-teal-200 dark:border-teal-800",
    textColor: "text-teal-700 dark:text-teal-300",
    borderColor: "border-accent/30",
  },
  {
    role: "Importer",
    description: "Brings AI into EU market",
    obligations: [
      "Verify conformity assessment",
      "Ensure provider compliance",
      "Check CE marking",
      "Keep documents available",
    ],
    icon: <Ship className="h-5 w-5" />,
    gradient: "bg-gradient-to-r from-amber-500 to-orange-500",
    bgLight: "bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800",
    textColor: "text-amber-700 dark:text-amber-300",
    borderColor: "border-amber-500/30",
  },
  {
    role: "Distributor",
    description: "Makes AI available on market",
    obligations: [
      "Verify CE marking present",
      "Check documentation exists",
      "Ensure storage conditions",
      "Report non-compliance",
    ],
    icon: <Truck className="h-5 w-5" />,
    gradient: "bg-gradient-to-r from-violet-500 to-purple-500",
    bgLight: "bg-violet-50 dark:bg-violet-950/30 border-violet-200 dark:border-violet-800",
    textColor: "text-violet-700 dark:text-violet-300",
    borderColor: "border-violet-500/30",
  },
  {
    role: "Authorised Rep",
    description: "Acts on behalf of providers",
    obligations: [
      "Hold mandate from provider",
      "Liaise with authorities",
      "Provide documentation",
      "Cooperate on compliance",
    ],
    icon: <UserCheck className="h-5 w-5" />,
    gradient: "bg-gradient-to-r from-rose-500 to-pink-500",
    bgLight: "bg-rose-50 dark:bg-rose-950/30 border-rose-200 dark:border-rose-800",
    textColor: "text-rose-700 dark:text-rose-300",
    borderColor: "border-rose-500/30",
  },
]

export function RolesDiagram() {
  return (
    <div className="space-y-12">
      {/* Flow visualization - showing the supply chain */}
      <div className="relative">
        {/* Connection line */}
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-violet-500 -translate-y-1/2 hidden lg:block rounded-full opacity-20" />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {roles.map((role, index) => (
            <div key={role.role} className="relative">
              <div
                className={cn(
                  "relative flex flex-col items-center gap-3 rounded-2xl px-4 py-6 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl",
                  role.gradient,
                )}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                  {role.icon}
                </div>
                <div className="text-center">
                  <h4 className="font-bold">{role.role}</h4>
                  <p className="text-xs text-white/80 mt-1">{role.description}</p>
                </div>
              </div>

              {/* Arrow between cards on large screens */}
              {index < roles.length - 1 && (
                <div className="absolute -right-2 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Detail cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {roles.map((role) => (
          <div
            key={role.role}
            className={cn(
              "rounded-xl border p-5 transition-all hover:shadow-lg",
              role.bgLight,
            )}
          >
            <div className={cn("mb-3 flex items-center gap-2 font-bold", role.textColor)}>
              {role.icon}
              {role.role}
            </div>
            <ul className="space-y-2">
              {role.obligations.map((obligation) => (
                <li key={obligation} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className={cn("mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full", role.gradient)} />
                  {obligation}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
