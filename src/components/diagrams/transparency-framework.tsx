import { cn } from "@/lib/utils"
import { FileText, Users, AlertTriangle, Shield, BookOpen, Target } from "lucide-react"

const requirements = [
  {
    title: "Intended Purpose",
    description: "Clear description of what the AI does",
    icon: Target,
  },
  {
    title: "Capabilities & Limitations",
    description: "What it can and cannot do",
    icon: BookOpen,
  },
  {
    title: "Performance Metrics",
    description: "Accuracy, error rates, known biases",
    icon: FileText,
  },
  {
    title: "Human Oversight Needs",
    description: "Required level of human control",
    icon: Users,
  },
  {
    title: "Known Risks",
    description: "Identified risks and mitigations",
    icon: AlertTriangle,
  },
  {
    title: "Data Requirements",
    description: "Training and input data specifications",
    icon: Shield,
  },
]

export function TransparencyFramework() {
  return (
    <div className="my-8 space-y-6">
      <h4 className="text-lg font-semibold text-center">Article 13: Transparency Requirements</h4>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {requirements.map((req, index) => {
          const Icon = req.icon
          return (
            <div
              key={req.title}
              className="group rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 via-card to-card p-5 transition-all duration-300 hover:shadow-lg hover:border-primary/40"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-primary to-indigo-500 text-white shadow-lg transition-transform group-hover:scale-110 mb-4">
                <Icon className="h-6 w-6" />
              </div>
              <h5 className="font-bold text-sm mb-1">{req.title}</h5>
              <p className="text-xs text-muted-foreground">{req.description}</p>
            </div>
          )
        })}
      </div>

      <div className="rounded-xl border border-primary/30 bg-primary/5 p-4 text-center">
        <p className="text-sm text-muted-foreground">
          Instructions for use must be comprehensive, understandable, and accessible to deployers
        </p>
      </div>
    </div>
  )
}
