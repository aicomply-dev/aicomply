import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, ArrowRight, CheckCircle2, Lock } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

interface ModuleCardProps {
  slug: string
  title: string
  description: string
  duration: string
  topics: string[]
  completed?: boolean
  locked?: boolean
  progress?: number
}

export function ModuleCard({ slug, title, description, duration, topics, completed, locked, progress }: ModuleCardProps) {
  const href = `/understand/modules/${slug}`

  return (
    <Card
      className={cn(
        "relative overflow-hidden transition-all duration-300 hover:shadow-xl",
        locked && "opacity-60",
        completed && "border-accent/50 bg-gradient-to-br from-accent/5 to-transparent",
        !completed && !locked && "hover:border-primary/30",
      )}
    >
      {/* Top accent bar */}
      <div
        className={cn(
          "absolute inset-x-0 top-0 h-1",
          completed && "bg-gradient-to-r from-accent to-teal-500",
          locked && "bg-muted",
          !completed && !locked && "bg-gradient-to-r from-primary to-indigo-500",
        )}
      />

      {completed && (
        <div className="absolute right-4 top-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg shadow-accent/25">
            <CheckCircle2 className="h-4 w-4" />
          </div>
        </div>
      )}
      {locked && (
        <div className="absolute right-4 top-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
            <Lock className="h-4 w-4 text-muted-foreground" />
          </div>
        </div>
      )}

      <CardHeader className="pb-3">
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="gap-1.5 text-xs">
            <Clock className="h-3 w-3" />
            {duration}
          </Badge>
          {completed && <Badge className="bg-accent text-accent-foreground text-xs">Completed</Badge>}
          {!completed && progress !== undefined && progress > 0 && (
            <Badge variant="outline" className="text-xs">{progress}% done</Badge>
          )}
        </div>
        <CardTitle className="mt-4 text-lg">{title}</CardTitle>
        <CardDescription className="leading-relaxed">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Topics covered</p>
          <ul className="space-y-1.5">
            {topics.map((topic) => (
              <li key={topic} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span
                  className={cn("mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full", completed ? "bg-accent" : "bg-primary")}
                />
                {topic}
              </li>
            ))}
          </ul>
        </div>
        <Button
          className={cn("mt-6 w-full", completed && "bg-accent hover:bg-accent/90 shadow-lg shadow-accent/25")}
          variant={completed ? "default" : locked ? "secondary" : "default"}
          disabled={locked}
          asChild={!locked}
        >
          {locked ? (
            <span>
              Complete Previous
              <Lock className="ml-2 h-4 w-4" />
            </span>
          ) : (
            <Link href={href}>
              {completed ? "Review Module" : progress && progress > 0 ? "Continue" : "Start Module"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          )}
        </Button>
      </CardContent>
    </Card>
  )
}
