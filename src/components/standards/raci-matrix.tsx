"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Users } from "lucide-react"
import { cn } from "@/lib/utils"
import type { RACIMatrix as RACIMatrixType, RACIValue } from "@/lib/types/standard"

interface RACIMatrixProps {
  matrix: RACIMatrixType
  highlightRole?: string
  compact?: boolean
  className?: string
}

export function RACIMatrix({
  matrix,
  highlightRole,
  compact = false,
  className,
}: RACIMatrixProps) {
  const [selectedRole, setSelectedRole] = useState<string | null>(highlightRole || null)

  const raciColors: Record<RACIValue, string> = {
    R: "bg-blue-500/10 text-blue-600 border-blue-500/30",
    A: "bg-red-500/10 text-red-600 border-red-500/30",
    C: "bg-amber-500/10 text-amber-600 border-amber-500/30",
    I: "bg-emerald-500/10 text-emerald-600 border-emerald-500/30",
    "": "",
  }

  const raciLabels: Record<RACIValue, string> = {
    R: "Responsible",
    A: "Accountable",
    C: "Consulted",
    I: "Informed",
    "": "",
  }

  const renderRACIBadge = (value: RACIValue) => {
    if (!value) return null
    return (
      <Badge
        variant="outline"
        className={cn(
          "font-semibold w-8 h-8 flex items-center justify-center p-0",
          raciColors[value]
        )}
        title={raciLabels[value]}
      >
        {value}
      </Badge>
    )
  }

  return (
    <Card className={cn("", className)}>
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            RACI Matrix
          </CardTitle>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-sm text-muted-foreground">Legend:</span>
            {(["R", "A", "C", "I"] as RACIValue[]).map((value) => (
              <div key={value} className="flex items-center gap-1">
                {renderRACIBadge(value)}
                {!compact && (
                  <span className="text-xs text-muted-foreground">
                    {raciLabels[value]}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Role filter buttons */}
        {matrix.roles.length > 0 && (
          <div className="flex gap-2 mt-4 flex-wrap">
            <Button
              variant={selectedRole === null ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedRole(null)}
            >
              All Roles
            </Button>
            {matrix.roles.map((role) => (
              <Button
                key={role}
                variant={selectedRole === role ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedRole(role === selectedRole ? null : role)}
              >
                {role}
              </Button>
            ))}
          </div>
        )}
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="sticky left-0 bg-background min-w-[200px] text-left align-middle">
                  Activity
                </TableHead>
                {matrix.roles
                  .filter((role) => !selectedRole || role === selectedRole)
                  .map((role) => (
                    <TableHead
                      key={role}
                      className={cn(
                        "text-center align-middle min-w-[100px]",
                        selectedRole === role && "bg-muted"
                      )}
                    >
                      {role}
                    </TableHead>
                  ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {matrix.activities.map((activity) => (
                <TableRow key={activity.name}>
                  <TableCell className="sticky left-0 bg-background font-medium text-left align-middle">
                    {activity.name}
                  </TableCell>
                  {matrix.roles
                    .filter((role) => !selectedRole || role === selectedRole)
                    .map((role) => (
                      <TableCell
                        key={role}
                        className={cn(
                          "text-center align-middle",
                          selectedRole === role && "bg-muted/50"
                        )}
                      >
                        <div className="flex items-center justify-center">
                          {renderRACIBadge(activity.assignments[role] || "")}
                        </div>
                      </TableCell>
                    ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
