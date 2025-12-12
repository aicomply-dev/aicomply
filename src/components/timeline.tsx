"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type React from "react"
import { cn } from "@/lib/utils"
import { AlertTriangle, Calendar, CheckCircle2, Clock, ArrowRight, Ban, Cpu, ShieldCheck } from "lucide-react"

interface TimelineEventData {
  date: Date
  dateLabel: string
  title: string
  description: string
  icon: React.ReactNode
  requirements: string[]
}

const eventsData: TimelineEventData[] = [
  {
    date: new Date("2025-02-02"),
    dateLabel: "February 2, 2025",
    title: "Prohibited AI Ban",
    description: "Strict prohibitions on AI systems that pose unacceptable risks come into force.",
    icon: <Ban className="h-5 w-5" />,
    requirements: [
      "Social scoring systems",
      "Emotion recognition at work/school",
      "Biometric categorization",
      "Predictive policing",
    ],
  },
  {
    date: new Date("2025-08-02"),
    dateLabel: "August 2, 2025",
    title: "GPAI Compliance",
    description: "General-purpose AI models must meet transparency and documentation standards.",
    icon: <Cpu className="h-5 w-5" />,
    requirements: [
      "Model documentation",
      "Training data transparency",
      "Copyright compliance",
      "Systemic risk assessment",
    ],
  },
  {
    date: new Date("2027-08-02"),
    dateLabel: "August 2, 2027",
    title: "Full Enforcement",
    description: "Complete compliance required for all high-risk AI systems in the EU market.",
    icon: <ShieldCheck className="h-5 w-5" />,
    requirements: [
      "Conformity assessments",
      "Quality management systems",
      "Post-market monitoring",
      "EU database registration",
    ],
  },
]

function getStatus(eventDate: Date, now: Date): "past" | "urgent" | "upcoming" | "future" {
  const daysUntil = Math.ceil((eventDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))

  if (daysUntil < 0) return "past"
  if (daysUntil <= 90) return "urgent"
  if (daysUntil <= 365) return "upcoming"
  return "future"
}

function getDaysUntil(eventDate: Date, now: Date): number {
  return Math.ceil((eventDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
}

function getProgressPercentage(now: Date): number {
  const startDate = new Date("2024-08-01") // AI Act entered into force
  const endDate = new Date("2027-08-02") // Full enforcement
  const totalDays = (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
  const elapsedDays = (now.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
  // Round to 2 decimal places to avoid hydration mismatch between server/client
  return Math.round(Math.min(100, Math.max(0, (elapsedDays / totalDays) * 100)) * 100) / 100
}

function getCurrentPhase(now: Date): { phase: number; total: number } {
  const phase1 = new Date("2025-02-02")
  const phase2 = new Date("2025-08-02")
  const phase3 = new Date("2027-08-02")

  if (now < phase1) return { phase: 1, total: 3 }
  if (now < phase2) return { phase: 2, total: 3 }
  if (now < phase3) return { phase: 3, total: 3 }
  return { phase: 3, total: 3 }
}

export function Timeline() {
  const now = new Date()
  const progress = getProgressPercentage(now)
  const { phase, total } = getCurrentPhase(now)

  const events = eventsData.map((event) => ({
    ...event,
    status: getStatus(event.date, now),
    daysUntil: getDaysUntil(event.date, now),
  }))

  return (
    <div className="relative">
      <div className="grid gap-6 lg:grid-cols-3">
        {events.map((event) => (
          <div
            key={event.dateLabel}
            className={cn(
              "group relative overflow-hidden rounded-2xl border transition-all duration-300 hover:shadow-xl",
              event.status === "past" &&
                "border-accent/30 bg-gradient-to-br from-accent/5 via-card to-card hover:border-accent/50",
              event.status === "urgent" &&
                "border-destructive/30 bg-gradient-to-br from-destructive/5 via-card to-card hover:border-destructive/50",
              event.status === "upcoming" &&
                "border-primary/30 bg-gradient-to-br from-primary/5 via-card to-card hover:border-primary/50",
              event.status === "future" &&
                "border-muted-foreground/30 bg-gradient-to-br from-muted/5 via-card to-card hover:border-muted-foreground/50",
            )}
          >
            {/* Colored top bar */}
            <div
              className={cn(
                "h-1.5",
                event.status === "past" && "bg-gradient-to-r from-accent to-accent/60",
                event.status === "urgent" && "bg-gradient-to-r from-destructive to-destructive/60",
                event.status === "upcoming" && "bg-gradient-to-r from-primary to-primary/60",
                event.status === "future" && "bg-gradient-to-r from-muted-foreground to-muted-foreground/60",
              )}
            />

            <div className="p-6">
              {/* Status badge */}
              <div className="flex items-center justify-between mb-4">
                <Badge
                  className={cn(
                    "font-medium",
                    event.status === "past" && "bg-accent/10 text-accent border-accent/20",
                    event.status === "urgent" && "bg-destructive/10 text-destructive border-destructive/20",
                    event.status === "upcoming" && "bg-primary/10 text-primary border-primary/20",
                    event.status === "future" && "bg-muted text-muted-foreground border-muted-foreground/20",
                  )}
                  variant="outline"
                >
                  {event.status === "past" && (
                    <>
                      <CheckCircle2 className="h-3 w-3 mr-1" />
                      Completed
                    </>
                  )}
                  {event.status === "urgent" && (
                    <>
                      <AlertTriangle className="h-3 w-3 mr-1" />
                      Urgent
                    </>
                  )}
                  {event.status === "upcoming" && (
                    <>
                      <Clock className="h-3 w-3 mr-1" />
                      Upcoming
                    </>
                  )}
                  {event.status === "future" && (
                    <>
                      <Calendar className="h-3 w-3 mr-1" />
                      Future
                    </>
                  )}
                </Badge>

                {event.status === "past" ? (
                  <span className="text-sm font-semibold text-accent">
                    {Math.abs(event.daysUntil)} days ago
                  </span>
                ) : (
                  <span
                    className={cn(
                      "text-sm font-semibold tabular-nums",
                      event.status === "urgent" && "text-destructive",
                      event.status === "upcoming" && "text-primary",
                      event.status === "future" && "text-muted-foreground",
                    )}
                  >
                    {event.daysUntil} days
                  </span>
                )}
              </div>

              {/* Icon and date */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={cn(
                    "flex h-12 w-12 items-center justify-center rounded-xl transition-transform group-hover:scale-110",
                    event.status === "past" && "bg-accent text-accent-foreground",
                    event.status === "urgent" && "bg-destructive text-destructive-foreground",
                    event.status === "upcoming" && "bg-primary text-primary-foreground",
                    event.status === "future" && "bg-muted text-muted-foreground",
                  )}
                >
                  {event.icon}
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    {event.status === "past" ? "Effective Since" : "Deadline"}
                  </p>
                  <p className="font-semibold">{event.dateLabel}</p>
                </div>
              </div>

              {/* Title and description */}
              <h3 className="text-xl font-bold mb-2">{event.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">{event.description}</p>

              {/* Requirements list */}
              <div className="space-y-2 mb-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {event.status === "past" ? "Now in Effect" : "Key Requirements"}
                </p>
                <ul className="space-y-1.5">
                  {event.requirements.map((req) => (
                    <li key={req} className="flex items-center gap-2 text-sm">
                      <CheckCircle2
                        className={cn(
                          "h-4 w-4 flex-shrink-0",
                          event.status === "past" && "text-accent",
                          event.status === "urgent" && "text-destructive",
                          event.status === "upcoming" && "text-primary",
                          event.status === "future" && "text-muted-foreground",
                        )}
                      />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <Button
                variant="outline"
                className={cn(
                  "w-full group/btn",
                  event.status === "past" &&
                    "border-accent/30 text-accent hover:bg-accent hover:text-accent-foreground",
                  event.status === "urgent" &&
                    "border-destructive/30 text-destructive hover:bg-destructive hover:text-destructive-foreground",
                  event.status === "upcoming" &&
                    "border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground",
                  event.status === "future" &&
                    "border-muted-foreground/30 text-muted-foreground hover:bg-muted hover:text-foreground",
                )}
              >
                {event.status === "past" ? "View Compliance Status" : "Learn More"}
                <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
              </Button>
            </div>

            {/* Decorative gradient orb */}
            <div
              className={cn(
                "absolute -bottom-20 -right-20 h-40 w-40 rounded-full blur-3xl opacity-20 transition-opacity group-hover:opacity-30",
                event.status === "past" && "bg-accent",
                event.status === "urgent" && "bg-destructive",
                event.status === "upcoming" && "bg-primary",
                event.status === "future" && "bg-muted-foreground",
              )}
            />
          </div>
        ))}
      </div>

      {/* Live date indicator */}
      <div className="mt-10 flex items-center justify-center gap-3 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-medium">Live</span>
        </div>
        <span>•</span>
        <span>
          Current Date:{" "}
          {now.toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>
      </div>

      {/* Progress indicator bar */}
      <div className="mt-8 relative">
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
          <span>Compliance Progress</span>
          <span className="font-medium">Phase {phase} of {total}</span>
        </div>
        <div className="h-2 rounded-full bg-muted overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-accent via-primary to-primary/50 transition-all duration-1000"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-between mt-2 text-xs text-muted-foreground">
          <span>Aug 2024</span>
          <span className={now >= new Date("2025-02-02") ? "text-accent font-medium" : ""}>Feb 2025</span>
          <span className={now >= new Date("2025-08-02") ? "text-accent font-medium" : ""}>Aug 2025</span>
          <span>Aug 2027</span>
        </div>
      </div>
    </div>
  )
}
