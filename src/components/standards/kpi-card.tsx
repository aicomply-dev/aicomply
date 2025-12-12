import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Target,
  TrendingUp,
  User,
  Clock,
  CheckCircle2,
  AlertTriangle,
  XCircle,
} from "lucide-react"
import { cn } from "@/lib/utils"
import type { KPIDefinition } from "@/lib/types/standard"

interface KPICardProps {
  kpi: KPIDefinition
  currentValue?: number | string
  status?: "green" | "yellow" | "red"
  className?: string
}

export function KPICard({ kpi, currentValue, status, className }: KPICardProps) {
  const statusConfig = {
    green: {
      icon: CheckCircle2,
      label: "On Track",
      className: "bg-emerald-500/10 text-emerald-600 border-emerald-500/30",
      color: "text-emerald-600",
      progressColor: "bg-emerald-500",
    },
    yellow: {
      icon: AlertTriangle,
      label: "At Risk",
      className: "bg-amber-500/10 text-amber-600 border-amber-500/30",
      color: "text-amber-600",
      progressColor: "bg-amber-500",
    },
    red: {
      icon: XCircle,
      label: "Off Track",
      className: "bg-red-500/10 text-red-600 border-red-500/30",
      color: "text-red-600",
      progressColor: "bg-red-500",
    },
  }

  const currentStatus = status || "green"
  const StatusIcon = statusConfig[currentStatus].icon

  // Calculate progress percentage if possible
  let progressValue: number | undefined
  if (typeof currentValue === "number" && kpi.target) {
    const targetMatch = kpi.target.match(/(\d+)/)
    if (targetMatch) {
      const targetNum = parseInt(targetMatch[1], 10)
      progressValue = Math.min(100, (currentValue / targetNum) * 100)
    }
  }

  return (
    <Card className={cn("", className)}>
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between gap-2">
          <div className="space-y-1">
            <Badge variant="secondary" className="text-xs font-mono">
              {kpi.id}
            </Badge>
            <CardTitle className="text-base">{kpi.name}</CardTitle>
          </div>
          <Badge
            variant="outline"
            className={cn("shrink-0", statusConfig[currentStatus].className)}
          >
            <StatusIcon className="mr-1 h-3 w-3" />
            {statusConfig[currentStatus].label}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Definition */}
        <p className="text-sm text-muted-foreground">{kpi.definition}</p>

        {/* Target and Current Value */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Target className="h-4 w-4 text-muted-foreground" />
            <div>
              <p className="text-xs text-muted-foreground">Target</p>
              <p className="text-sm font-medium">{kpi.target}</p>
            </div>
          </div>
          {currentValue !== undefined && (
            <div className="flex items-center gap-2">
              <TrendingUp className={cn("h-4 w-4", statusConfig[currentStatus].color)} />
              <div>
                <p className="text-xs text-muted-foreground">Current</p>
                <p className={cn("text-sm font-medium", statusConfig[currentStatus].color)}>
                  {currentValue}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Progress bar if applicable */}
        {progressValue !== undefined && (
          <div className="space-y-1">
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Progress</span>
              <span>{Math.round(progressValue)}%</span>
            </div>
            <Progress
              value={progressValue}
              className="h-2"
            />
          </div>
        )}

        {/* Thresholds */}
        {kpi.thresholds && (
          <div className="flex gap-2 text-xs">
            <div className="flex items-center gap-1">
              <div className="h-2 w-2 rounded-full bg-emerald-500" />
              <span className="text-muted-foreground">{kpi.thresholds.green}</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="h-2 w-2 rounded-full bg-amber-500" />
              <span className="text-muted-foreground">{kpi.thresholds.yellow}</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="h-2 w-2 rounded-full bg-red-500" />
              <span className="text-muted-foreground">{kpi.thresholds.red}</span>
            </div>
          </div>
        )}

        {/* Metadata */}
        <div className="flex flex-wrap gap-4 pt-2 border-t text-sm">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">{kpi.owner}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">{kpi.frequency}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

interface KPICardGridProps {
  kpis: KPIDefinition[]
  className?: string
}

export function KPICardGrid({ kpis, className }: KPICardGridProps) {
  return (
    <div className={cn("grid gap-4 md:grid-cols-2 lg:grid-cols-3", className)}>
      {kpis.map((kpi) => (
        <KPICard key={kpi.id} kpi={kpi} />
      ))}
    </div>
  )
}
