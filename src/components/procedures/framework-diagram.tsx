"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Layers, ChevronRight } from "lucide-react"
import type { FrameworkDiagram as FrameworkDiagramType } from "@/lib/types/procedure"
import { cn } from "@/lib/utils"

interface FrameworkDiagramProps {
  diagram: FrameworkDiagramType
  showRaw?: boolean
}

const componentColors = [
  "bg-blue-500/10 border-blue-500/30 text-blue-600",
  "bg-emerald-500/10 border-emerald-500/30 text-emerald-600",
  "bg-purple-500/10 border-purple-500/30 text-purple-600",
  "bg-amber-500/10 border-amber-500/30 text-amber-600",
  "bg-rose-500/10 border-rose-500/30 text-rose-600",
  "bg-cyan-500/10 border-cyan-500/30 text-cyan-600",
]

export function FrameworkDiagramComponent({ diagram, showRaw = false }: FrameworkDiagramProps) {
  if (showRaw || diagram.components.length === 0) {
    return (
      <Card className="border-border/50 bg-card/50">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Layers className="h-5 w-5 text-muted-foreground" />
            {diagram.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <pre className="text-xs overflow-x-auto p-4 bg-muted/30 rounded-lg font-mono">
            {diagram.rawAscii}
          </pre>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border-border/50 bg-card/50">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Layers className="h-5 w-5 text-muted-foreground" />
          {diagram.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {diagram.components.map((component, idx) => (
            <div
              key={component.id}
              className={cn(
                "rounded-lg border p-4",
                componentColors[idx % componentColors.length]
              )}
            >
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="outline" className="font-mono">
                  {component.id}
                </Badge>
                <h4 className="font-semibold">{component.name}</h4>
              </div>

              {component.subComponents.length > 0 && (
                <div className="grid gap-2 sm:grid-cols-2">
                  {component.subComponents.map((sub, subIdx) => (
                    <div
                      key={subIdx}
                      className="flex items-center gap-2 text-sm bg-background/50 rounded px-3 py-2"
                    >
                      <ChevronRight className="h-4 w-4 opacity-50" />
                      <span>{sub}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

// Compact horizontal version
export function FrameworkDiagramHorizontal({ diagram }: FrameworkDiagramProps) {
  return (
    <Card className="border-border/50 bg-card/50">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Layers className="h-5 w-5 text-muted-foreground" />
          {diagram.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-4">
          {diagram.components.map((component, idx) => (
            <div
              key={component.id}
              className={cn(
                "rounded-lg border p-3 flex-1 min-w-[200px]",
                componentColors[idx % componentColors.length]
              )}
            >
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="outline" className="font-mono text-xs">
                  {component.id}
                </Badge>
                <span className="font-medium text-sm">{component.name}</span>
              </div>
              {component.subComponents.length > 0 && (
                <div className="text-xs text-muted-foreground">
                  {component.subComponents.length} sub-components
                </div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
