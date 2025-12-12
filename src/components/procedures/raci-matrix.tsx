"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Users, Filter } from "lucide-react"
import type { RACIMatrix as RACIMatrixType, RACIValue } from "@/lib/types/procedure"
import { cn } from "@/lib/utils"

interface RACIMatrixProps {
  matrix: RACIMatrixType
  highlightRole?: string
}

const raciColors: Record<RACIValue, string> = {
  R: "bg-blue-500/20 text-blue-600 border-blue-500/40",
  A: "bg-red-500/20 text-red-600 border-red-500/40",
  C: "bg-amber-500/20 text-amber-600 border-amber-500/40",
  I: "bg-slate-500/20 text-slate-600 border-slate-500/40",
  "": "bg-transparent text-muted-foreground/30",
}

const raciLabels: Record<RACIValue, string> = {
  R: "Responsible",
  A: "Accountable",
  C: "Consulted",
  I: "Informed",
  "": "-",
}

export function RACIMatrixComponent({ matrix, highlightRole }: RACIMatrixProps) {
  const [selectedRole, setSelectedRole] = useState<string | null>(highlightRole || null)

  const toggleRole = (role: string) => {
    setSelectedRole(selectedRole === role ? null : role)
  }

  return (
    <Card className="border-border/50 bg-card/50">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Users className="h-5 w-5 text-muted-foreground" />
            {matrix.title}
          </CardTitle>
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Filter by role:</span>
          </div>
        </div>

        {/* Role filter buttons */}
        <div className="flex flex-wrap gap-2 mt-2">
          {matrix.roles.map((role) => (
            <Button
              key={role}
              variant={selectedRole === role ? "default" : "outline"}
              size="sm"
              onClick={() => toggleRole(role)}
              className="text-xs"
            >
              {role.replace(/ /g, "\u00A0")}
            </Button>
          ))}
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-4 mt-3 text-sm">
          {(["R", "A", "C", "I"] as RACIValue[]).map((value) => (
            <div key={value} className="flex items-center gap-1">
              <Badge variant="outline" className={cn("w-6 h-6 p-0 justify-center", raciColors[value])}>
                {value}
              </Badge>
              <span className="text-muted-foreground">{raciLabels[value]}</span>
            </div>
          ))}
        </div>
      </CardHeader>

      <CardContent>
        <ScrollArea className="w-full whitespace-nowrap">
          <div className="min-w-max">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-border/50">
                  <th className="text-left p-2 font-medium sticky left-0 bg-background z-10 min-w-[200px]">
                    Activity
                  </th>
                  {matrix.roles.map((role) => (
                    <th
                      key={role}
                      className={cn(
                        "text-center p-2 font-medium min-w-[80px] max-w-[120px] whitespace-normal",
                        selectedRole && selectedRole !== role && "opacity-30"
                      )}
                    >
                      {role}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {matrix.activities.map((activity, idx) => (
                  <tr
                    key={activity}
                    className={cn(
                      "border-b border-border/30",
                      idx % 2 === 0 && "bg-muted/20"
                    )}
                  >
                    <td className="p-2 sticky left-0 bg-inherit z-10">
                      {activity}
                    </td>
                    {matrix.roles.map((role) => {
                      const value = matrix.assignments[activity]?.[role] || ""
                      const isHighlighted = selectedRole === role && value !== ""

                      return (
                        <td key={role} className="text-center p-2">
                          <Badge
                            variant="outline"
                            className={cn(
                              "w-8 h-8 p-0 justify-center text-sm font-semibold",
                              raciColors[value],
                              selectedRole && selectedRole !== role && "opacity-30",
                              isHighlighted && "ring-2 ring-primary ring-offset-2"
                            )}
                          >
                            {value || "-"}
                          </Badge>
                        </td>
                      )
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </CardContent>
    </Card>
  )
}
