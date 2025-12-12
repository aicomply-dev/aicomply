"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { ChevronDown, ChevronUp } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"

interface RequirementItem {
  id: string
  label: string
  completed: boolean
}

interface RequirementCardProps {
  title: string
  description: string
  category: string
  requirements: RequirementItem[]
  priority: "critical" | "high" | "medium"
}

export function RequirementCard({ title, description, category, requirements, priority }: RequirementCardProps) {
  const [expanded, setExpanded] = useState(false)
  const completedCount = requirements.filter((r) => r.completed).length
  const progress = (completedCount / requirements.length) * 100

  const priorityConfig = {
    critical: { label: "Critical", className: "bg-destructive text-destructive-foreground" },
    high: { label: "High", className: "bg-chart-3 text-foreground" },
    medium: { label: "Medium", className: "bg-primary text-primary-foreground" },
  }

  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="text-xs">
              {category}
            </Badge>
            <Badge className={cn("text-xs", priorityConfig[priority].className)}>
              {priorityConfig[priority].label}
            </Badge>
          </div>
          <span className="text-sm text-muted-foreground">
            {completedCount}/{requirements.length}
          </span>
        </div>
        <CardTitle className="mt-2 text-lg">{title}</CardTitle>
        <CardDescription className="leading-relaxed">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {/* Progress bar */}
        <div className="mb-4 h-1.5 w-full overflow-hidden rounded-full bg-muted">
          <div className="h-full bg-accent transition-all" style={{ width: `${progress}%` }} />
        </div>

        {/* Expandable requirements list */}
        <div className="space-y-2">
          {requirements.slice(0, expanded ? undefined : 3).map((req) => (
            <div key={req.id} className="flex items-start gap-3">
              <Checkbox id={req.id} checked={req.completed} className="mt-0.5" />
              <label
                htmlFor={req.id}
                className={cn("text-sm leading-relaxed", req.completed && "text-muted-foreground line-through")}
              >
                {req.label}
              </label>
            </div>
          ))}
        </div>

        {requirements.length > 3 && (
          <Button variant="ghost" size="sm" className="mt-3 w-full" onClick={() => setExpanded(!expanded)}>
            {expanded ? (
              <>
                Show Less <ChevronUp className="ml-1 h-4 w-4" />
              </>
            ) : (
              <>
                Show {requirements.length - 3} More <ChevronDown className="ml-1 h-4 w-4" />
              </>
            )}
          </Button>
        )}
      </CardContent>
    </Card>
  )
}
