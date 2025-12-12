import type React from "react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface PageHeaderProps {
  badge?: string
  title: string
  description: string
  className?: string
  children?: React.ReactNode
  color?: "indigo" | "teal" | "amber" | "emerald"
}

const colorStyles = {
  indigo: "from-primary/10 via-primary/5 to-transparent",
  teal: "from-accent/10 via-accent/5 to-transparent",
  amber: "from-chart-3/10 via-chart-3/5 to-transparent",
  emerald: "from-emerald-500/10 via-emerald-500/5 to-transparent",
}

const badgeStyles = {
  indigo: "bg-primary/10 text-primary border-primary/20",
  teal: "bg-accent/10 text-accent border-accent/20",
  amber: "bg-chart-3/10 text-chart-3 border-chart-3/20",
  emerald: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
}

export function PageHeader({ badge, title, description, className, children, color = "indigo" }: PageHeaderProps) {
  return (
    <section className={cn("relative overflow-hidden border-b border-border/50 py-16 sm:py-24", className)}>
      {/* Gradient background */}
      <div className={cn("absolute inset-0 bg-gradient-to-b", colorStyles[color])} />
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {badge && (
            <Badge variant="outline" className={cn("mb-4 border font-semibold", badgeStyles[color])}>
              {badge}
            </Badge>
          )}
          <h1 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">{title}</h1>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">{description}</p>
          {children}
        </div>
      </div>
    </section>
  )
}
