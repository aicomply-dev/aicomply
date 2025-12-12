import { cn } from "@/lib/utils"
import { Factory, Building2, Users, ArrowRight } from "lucide-react"

const roles = [
  {
    role: "Provider",
    description: "Develops or places AI on market",
    icon: Factory,
    gradient: "bg-gradient-to-r from-primary to-indigo-500",
  },
  {
    role: "Deployer",
    description: "Uses AI under their authority",
    icon: Building2,
    gradient: "bg-gradient-to-r from-accent to-teal-500",
  },
  {
    role: "Affected Person",
    description: "Subject to AI decisions",
    icon: Users,
    gradient: "bg-gradient-to-r from-amber-500 to-orange-500",
  },
]

export function AiValueChain() {
  return (
    <div className="my-8 space-y-6">
      <h4 className="text-lg font-semibold text-center">AI Value Chain</h4>

      {/* Flow visualization */}
      <div className="relative">
        {/* Connection line */}
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-amber-500 -translate-y-1/2 hidden md:block rounded-full opacity-20" />

        <div className="grid gap-4 md:grid-cols-3">
          {roles.map((role, index) => {
            const Icon = role.icon
            return (
              <div key={role.role} className="relative">
                <div
                  className={cn(
                    "relative flex flex-col items-center gap-3 rounded-2xl px-6 py-6 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl",
                    role.gradient,
                  )}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="text-center">
                    <h4 className="font-bold text-lg">{role.role}</h4>
                    <p className="text-sm text-white/80 mt-1">{role.description}</p>
                  </div>
                </div>

                {/* Arrow between cards */}
                {index < roles.length - 1 && (
                  <div className="absolute -right-2 top-1/2 -translate-y-1/2 z-10 hidden md:block">
                    <ArrowRight className="h-5 w-5 text-muted-foreground" />
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      <p className="text-center text-sm text-muted-foreground">
        Each role has distinct obligations under the EU AI Act
      </p>
    </div>
  )
}
