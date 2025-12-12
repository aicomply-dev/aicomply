"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  ChevronDown,
  Shield,
  Eye,
  Activity,
  Target,
  User,
  Clock,
  CheckCircle2,
  BarChart3,
} from "lucide-react"
import type { ControlDefinition, ControlType, RiskLevel } from "@/lib/types/procedure"
import { cn } from "@/lib/utils"

interface ControlCardProps {
  control: ControlDefinition
  isExpanded?: boolean
}

const typeConfig: Record<ControlType, { icon: typeof Shield; label: string; color: string }> = {
  preventive: {
    icon: Shield,
    label: "Preventive",
    color: "bg-blue-500/10 text-blue-600 border-blue-500/30",
  },
  detective: {
    icon: Eye,
    label: "Detective",
    color: "bg-amber-500/10 text-amber-600 border-amber-500/30",
  },
  corrective: {
    icon: Activity,
    label: "Corrective",
    color: "bg-purple-500/10 text-purple-600 border-purple-500/30",
  },
}

const riskConfig: Record<RiskLevel, { color: string; bgColor: string }> = {
  critical: { color: "text-red-600", bgColor: "bg-red-500" },
  high: { color: "text-orange-600", bgColor: "bg-orange-500" },
  medium: { color: "text-amber-600", bgColor: "bg-amber-500" },
  low: { color: "text-emerald-600", bgColor: "bg-emerald-500" },
}

export function ControlCard({ control, isExpanded = false }: ControlCardProps) {
  const [open, setOpen] = useState(isExpanded)

  const type = typeConfig[control.type]
  const risk = riskConfig[control.riskLevel]
  const TypeIcon = type.icon

  return (
    <Card className="border-border/50 bg-card/50 overflow-hidden">
      {/* Risk level indicator bar */}
      <div className={cn("h-1", risk.bgColor)} />

      <Collapsible open={open} onOpenChange={setOpen}>
        <CollapsibleTrigger asChild>
          <CardHeader className="cursor-pointer hover:bg-muted/30 transition-colors py-4">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className={cn(
                  "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg",
                  type.color
                )}>
                  <TypeIcon className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="font-mono text-xs">
                      {control.id}
                    </Badge>
                    <Badge variant="outline" className={type.color}>
                      {type.label}
                    </Badge>
                    <Badge variant="outline" className={cn("capitalize", risk.color)}>
                      {control.riskLevel}
                    </Badge>
                  </div>
                  <h3 className="font-semibold leading-tight">{control.name}</h3>
                </div>
              </div>
              <Button variant="ghost" size="icon" className="shrink-0">
                <ChevronDown className={cn("h-4 w-4 transition-transform", open && "rotate-180")} />
              </Button>
            </div>
          </CardHeader>
        </CollapsibleTrigger>

        <CollapsibleContent>
          <CardContent className="pt-0 space-y-6">
            {/* Objective */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm font-medium">
                <Target className="h-4 w-4 text-muted-foreground" />
                Control Objective
              </div>
              <p className="text-sm text-muted-foreground">{control.objective}</p>
            </div>

            {/* Description */}
            {control.description.length > 0 && (
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <Shield className="h-4 w-4 text-muted-foreground" />
                  Control Description
                </div>
                <ul className="space-y-1">
                  {control.description.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Activities */}
            {control.activities.length > 0 && (
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <Activity className="h-4 w-4 text-muted-foreground" />
                  Control Activities
                </div>
                <ul className="space-y-1">
                  {control.activities.map((activity, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-500 mt-0.5" />
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Owner & Frequency */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <User className="h-4 w-4 text-muted-foreground" />
                  Control Owner
                </div>
                <p className="text-sm text-muted-foreground">{control.owner}</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  Frequency
                </div>
                <p className="text-sm text-muted-foreground">{control.frequency}</p>
              </div>
            </div>

            {/* Testing Approach */}
            {control.testingApproach.length > 0 && (
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
                  Testing Approach
                </div>
                <ul className="space-y-1">
                  {control.testingApproach.map((approach, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-muted-foreground/50">-</span>
                      {approach}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* KPI */}
            {control.kpi && (
              <div className="space-y-2 p-3 rounded-lg bg-muted/30">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <BarChart3 className="h-4 w-4 text-muted-foreground" />
                  Key Performance Indicator
                </div>
                <p className="text-sm text-muted-foreground">{control.kpi}</p>
              </div>
            )}
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  )
}
