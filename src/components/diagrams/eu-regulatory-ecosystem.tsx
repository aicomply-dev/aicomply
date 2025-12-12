import { cn } from "@/lib/utils"
import { Shield, Lock, FileText, Scale, ArrowRight } from "lucide-react"

const regulations = [
  {
    name: "GDPR",
    description: "Data Protection",
    icon: Lock,
    gradient: "bg-gradient-to-r from-primary to-indigo-500",
  },
  {
    name: "NIS2",
    description: "Cybersecurity",
    icon: Shield,
    gradient: "bg-gradient-to-r from-amber-500 to-orange-500",
  },
  {
    name: "DSA/DMA",
    description: "Digital Services",
    icon: FileText,
    gradient: "bg-gradient-to-r from-violet-500 to-purple-500",
  },
  {
    name: "Product Safety",
    description: "CE Marking",
    icon: Scale,
    gradient: "bg-gradient-to-r from-accent to-teal-500",
  },
]

export function EuRegulatoryEcosystem() {
  return (
    <div className="my-8 space-y-6">
      <h4 className="text-lg font-semibold text-center">EU Regulatory Ecosystem</h4>

      {/* Central AI Act */}
      <div className="flex flex-col items-center">
        <div className="relative">
          <div className="flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-red-500 to-rose-500 px-8 py-6 text-white shadow-xl">
            <Shield className="h-8 w-8" />
            <div className="text-center">
              <span className="text-xl font-bold">EU AI Act</span>
              <p className="text-sm text-white/80">Central AI Regulation</p>
            </div>
          </div>
        </div>

        {/* Connection lines */}
        <div className="h-8 w-px bg-gradient-to-b from-red-500/50 to-muted-foreground/30" />

        {/* Related regulations */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-3xl">
          {regulations.map((reg) => {
            const Icon = reg.icon
            return (
              <div
                key={reg.name}
                className={cn(
                  "flex flex-col items-center gap-2 rounded-xl px-4 py-4 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl",
                  reg.gradient,
                )}
              >
                <Icon className="h-6 w-6" />
                <div className="text-center">
                  <span className="font-bold text-sm">{reg.name}</span>
                  <p className="text-xs text-white/80">{reg.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <p className="text-center text-sm text-muted-foreground">
        The AI Act works alongside existing EU regulations, creating a comprehensive framework
      </p>
    </div>
  )
}
