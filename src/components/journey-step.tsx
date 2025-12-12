import type React from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface JourneyStepProps {
  step: number
  title: string
  description: string
  href: string
  icon: React.ReactNode
  active?: boolean
  color: "indigo" | "teal" | "amber" | "emerald"
}

const colorStyles = {
  indigo: {
    bg: "bg-primary/10",
    border: "border-primary/20 hover:border-primary/40",
    icon: "bg-primary text-primary-foreground",
    text: "text-primary",
    glow: "shadow-primary/10",
  },
  teal: {
    bg: "bg-accent/10",
    border: "border-accent/20 hover:border-accent/40",
    icon: "bg-accent text-accent-foreground",
    text: "text-accent",
    glow: "shadow-accent/10",
  },
  amber: {
    bg: "bg-chart-3/10",
    border: "border-chart-3/20 hover:border-chart-3/40",
    icon: "bg-chart-3 text-foreground",
    text: "text-chart-3",
    glow: "shadow-chart-3/10",
  },
  emerald: {
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20 hover:border-emerald-500/40",
    icon: "bg-emerald-500 text-white",
    text: "text-emerald-600",
    glow: "shadow-emerald-500/10",
  },
}

export function JourneyStep({ step, title, description, href, icon, active, color }: JourneyStepProps) {
  const styles = colorStyles[color]

  return (
    <Link href={href} className="group block">
      <Card
        className={cn(
          "relative h-full overflow-hidden transition-all duration-300 hover:shadow-xl",
          styles.border,
          styles.glow,
          active && "ring-2 ring-primary shadow-lg",
        )}
      >
        <div className={cn("absolute inset-x-0 top-0 h-1", styles.icon)} />
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110",
                styles.icon,
              )}
            >
              {icon}
            </div>
            <span className={cn("text-3xl font-bold opacity-20", styles.text)}>0{step}</span>
          </div>
          <CardTitle className="mt-4 text-xl">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-sm leading-relaxed">{description}</CardDescription>
          <div className={cn("mt-5 flex items-center text-sm font-semibold", styles.text)}>
            Get started
            <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
