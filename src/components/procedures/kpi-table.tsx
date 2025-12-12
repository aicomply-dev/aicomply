"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { BarChart3, Target, Clock, User } from "lucide-react"
import type { KPITable as KPITableType } from "@/lib/types/procedure"

interface KPITableProps {
  table: KPITableType
  showThresholds?: boolean
}

export function KPITableComponent({ table }: KPITableProps) {
  return (
    <Card className="border-border/50 bg-card/50">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-lg">
          <BarChart3 className="h-5 w-5 text-muted-foreground" />
          {table.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="w-full whitespace-nowrap">
          <div className="min-w-max">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-border/50">
                  <th className="text-left p-3 font-medium bg-muted/30">KPI ID</th>
                  <th className="text-left p-3 font-medium bg-muted/30 min-w-[150px]">Name</th>
                  <th className="text-left p-3 font-medium bg-muted/30 min-w-[200px]">Definition</th>
                  <th className="text-center p-3 font-medium bg-muted/30">Target</th>
                  <th className="text-center p-3 font-medium bg-muted/30">Frequency</th>
                  <th className="text-left p-3 font-medium bg-muted/30">Owner</th>
                </tr>
              </thead>
              <tbody>
                {table.kpis.map((kpi, idx) => (
                  <tr
                    key={kpi.id}
                    className="border-b border-border/30 hover:bg-muted/20 transition-colors"
                  >
                    <td className="p-3">
                      <Badge variant="secondary" className="font-mono text-xs">
                        {kpi.id}
                      </Badge>
                    </td>
                    <td className="p-3 font-medium">{kpi.name}</td>
                    <td className="p-3 text-muted-foreground max-w-[300px] whitespace-normal">
                      {kpi.definition}
                    </td>
                    <td className="p-3 text-center">
                      <Badge variant="outline" className="bg-emerald-500/10 text-emerald-600 border-emerald-500/30">
                        <Target className="mr-1 h-3 w-3" />
                        {kpi.target}
                      </Badge>
                    </td>
                    <td className="p-3 text-center">
                      <span className="flex items-center justify-center gap-1 text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {kpi.frequency}
                      </span>
                    </td>
                    <td className="p-3">
                      <span className="flex items-center gap-1 text-muted-foreground">
                        <User className="h-3 w-3" />
                        {kpi.owner}
                      </span>
                    </td>
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

// Compact card version for dashboards
export function KPICard({ kpi }: { kpi: KPITableType["kpis"][0] }) {
  return (
    <Card className="border-border/50 bg-card/50">
      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div className="space-y-1">
            <Badge variant="secondary" className="font-mono text-xs">
              {kpi.id}
            </Badge>
            <h4 className="font-medium text-sm">{kpi.name}</h4>
          </div>
          <Badge variant="outline" className="bg-emerald-500/10 text-emerald-600 border-emerald-500/30">
            {kpi.target}
          </Badge>
        </div>
        <p className="text-xs text-muted-foreground mt-2 line-clamp-2">{kpi.definition}</p>
        <div className="flex items-center gap-4 mt-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {kpi.frequency}
          </span>
          <span className="flex items-center gap-1">
            <User className="h-3 w-3" />
            {kpi.owner}
          </span>
        </div>
      </CardContent>
    </Card>
  )
}
