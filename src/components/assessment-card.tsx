import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ArrowRight, Clock, CheckCircle2, AlertCircle, Circle } from "lucide-react"
import { cn } from "@/lib/utils"

interface AssessmentCardProps {
  title: string
  description: string
  estimatedTime: string
  questions: number
  status: "not-started" | "in-progress" | "completed"
  progress?: number
  riskLevel?: "high" | "limited" | "minimal"
}

export function AssessmentCard({
  title,
  description,
  estimatedTime,
  questions,
  status,
  progress = 0,
  riskLevel,
}: AssessmentCardProps) {
  const statusConfig = {
    "not-started": { icon: Circle, label: "Not Started", variant: "secondary" as const },
    "in-progress": { icon: AlertCircle, label: "In Progress", variant: "default" as const },
    completed: { icon: CheckCircle2, label: "Completed", variant: "outline" as const },
  }

  const StatusIcon = statusConfig[status].icon

  return (
    <Card className={cn("transition-all hover:shadow-md", status === "completed" && "border-accent")}>
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-2">
            <Badge variant={statusConfig[status].variant} className="text-xs">
              <StatusIcon className="mr-1 h-3 w-3" />
              {statusConfig[status].label}
            </Badge>
            {riskLevel && (
              <Badge
                variant="outline"
                className={cn(
                  "text-xs",
                  riskLevel === "high" && "border-destructive text-destructive",
                  riskLevel === "limited" && "border-primary text-primary",
                  riskLevel === "minimal" && "border-accent text-accent",
                )}
              >
                {riskLevel.charAt(0).toUpperCase() + riskLevel.slice(1)} Risk
              </Badge>
            )}
          </div>
        </div>
        <CardTitle className="mt-3 text-lg">{title}</CardTitle>
        <CardDescription className="leading-relaxed">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {estimatedTime}
          </div>
          <div>•</div>
          <div>{questions} questions</div>
        </div>

        {status === "in-progress" && (
          <div className="mt-4">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>Progress</span>
              <span>{progress}%</span>
            </div>
            <Progress value={progress} className="mt-1 h-1.5" />
          </div>
        )}

        <Button className="mt-6 w-full" variant={status === "completed" ? "outline" : "default"}>
          {status === "not-started" && "Start Assessment"}
          {status === "in-progress" && "Continue Assessment"}
          {status === "completed" && "View Results"}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  )
}
