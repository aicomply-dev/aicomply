import { cn } from "@/lib/utils"
import { Ban, Brain, Eye, Users, Scale, Target, Shield, Search } from "lucide-react"

const prohibitedPractices = [
  {
    title: "Social Scoring",
    description: "Government social credit systems",
    icon: Scale,
  },
  {
    title: "Subliminal Manipulation",
    description: "Techniques exploiting vulnerabilities",
    icon: Brain,
  },
  {
    title: "Real-time Biometric ID",
    description: "Public space surveillance (with exceptions)",
    icon: Eye,
  },
  {
    title: "Emotion Recognition",
    description: "At workplace or educational institutions",
    icon: Users,
  },
  {
    title: "Biometric Categorization",
    description: "Based on sensitive characteristics",
    icon: Target,
  },
  {
    title: "Predictive Policing",
    description: "Individual crime prediction",
    icon: Shield,
  },
  {
    title: "Facial Recognition DB",
    description: "Untargeted scraping for databases",
    icon: Search,
  },
  {
    title: "Exploitation",
    description: "Targeting vulnerable groups",
    icon: Ban,
  },
]

export function ProhibitedPractices() {
  return (
    <div className="my-8 space-y-6">
      <h4 className="text-lg font-semibold text-center">Article 5: Prohibited AI Practices</h4>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {prohibitedPractices.map((practice) => {
          const Icon = practice.icon
          return (
            <div
              key={practice.title}
              className="group rounded-2xl border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950/30 p-4 transition-all duration-300 hover:shadow-lg hover:border-red-300"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-red-500 to-rose-500 text-white shadow-lg transition-transform group-hover:scale-110 mb-3">
                <Icon className="h-5 w-5" />
              </div>
              <h5 className="font-bold text-sm text-red-700 dark:text-red-300 mb-1">{practice.title}</h5>
              <p className="text-xs text-muted-foreground">{practice.description}</p>
            </div>
          )
        })}
      </div>

      <div className="rounded-xl border border-red-300 dark:border-red-800 bg-red-100 dark:bg-red-950/50 p-4 text-center">
        <Ban className="inline h-5 w-5 text-red-600 mr-2" />
        <span className="text-sm font-medium text-red-700 dark:text-red-300">
          These practices are strictly prohibited with no exceptions (except limited law enforcement uses)
        </span>
      </div>
    </div>
  )
}
