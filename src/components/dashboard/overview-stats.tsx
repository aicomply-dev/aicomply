import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Activity, ClipboardList, FileText, Package } from 'lucide-react'

interface OverviewStatsProps {
  systemsCount: number
  assessmentsCount: number
  complianceScore: number | null
  policiesCount: number
}

const stats = [
  {
    key: 'systems',
    label: 'AI Systems',
    icon: Package,
    color: 'text-blue-600 bg-blue-50',
  },
  {
    key: 'assessments',
    label: 'Assessments',
    icon: ClipboardList,
    color: 'text-emerald-600 bg-emerald-50',
  },
  {
    key: 'compliance',
    label: 'Compliance Score',
    icon: Activity,
    color: 'text-amber-600 bg-amber-50',
  },
  {
    key: 'policies',
    label: 'Policies',
    icon: FileText,
    color: 'text-purple-600 bg-purple-50',
  },
] as const

export function OverviewStats({
  systemsCount,
  assessmentsCount,
  complianceScore,
  policiesCount,
}: OverviewStatsProps) {
  const values: Record<string, string> = {
    systems: String(systemsCount),
    assessments: String(assessmentsCount),
    compliance: complianceScore != null ? `${complianceScore}%` : 'N/A',
    policies: String(policiesCount),
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon
        return (
          <Card key={stat.key}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.label}
              </CardTitle>
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-md ${stat.color}`}
              >
                <Icon className="h-4 w-4" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{values[stat.key]}</div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
