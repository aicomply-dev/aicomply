import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface StandardCardProps {
  id: string
  title: string
  version: string
  status: string
  category: string
  euAiActRef?: string
  controlCount: number
}

const categoryColors: Record<string, string> = {
  classification: 'bg-purple-100 text-purple-800 border-purple-200',
  'risk-management': 'bg-red-100 text-red-800 border-red-200',
  'data-governance': 'bg-cyan-100 text-cyan-800 border-cyan-200',
  documentation: 'bg-amber-100 text-amber-800 border-amber-200',
  'record-keeping': 'bg-orange-100 text-orange-800 border-orange-200',
  transparency: 'bg-blue-100 text-blue-800 border-blue-200',
  'human-oversight': 'bg-green-100 text-green-800 border-green-200',
  'technical-requirements': 'bg-slate-100 text-slate-800 border-slate-200',
  'quality-management': 'bg-indigo-100 text-indigo-800 border-indigo-200',
  'conformity-assessment': 'bg-violet-100 text-violet-800 border-violet-200',
  registration: 'bg-teal-100 text-teal-800 border-teal-200',
  'post-market-monitoring': 'bg-rose-100 text-rose-800 border-rose-200',
  'incident-management': 'bg-yellow-100 text-yellow-800 border-yellow-200',
  training: 'bg-emerald-100 text-emerald-800 border-emerald-200',
}

export function StandardCard({
  id,
  title,
  category,
  euAiActRef,
  controlCount,
}: StandardCardProps) {
  return (
    <Link
      href={`/implement/standards/${id}`}
      className="group block"
    >
      <Card className="h-full transition-shadow hover:shadow-md">
        <CardHeader>
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <Badge variant="outline" className="text-xs font-mono">
              {id.toUpperCase()}
            </Badge>
            <Badge
              variant="outline"
              className={categoryColors[category] ?? 'bg-gray-100 text-gray-800 border-gray-200'}
            >
              {category.replace(/-/g, ' ')}
            </Badge>
            <Badge variant="secondary" className="text-xs">
              {controlCount} controls
            </Badge>
          </div>
          <CardTitle className="text-base">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          {euAiActRef && (
            <CardDescription className="text-xs">
              {euAiActRef}
            </CardDescription>
          )}
        </CardContent>
        <CardFooter>
          <span className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 group-hover:gap-2 transition-all">
            View standard
            <ArrowRight className="h-4 w-4" />
          </span>
        </CardFooter>
      </Card>
    </Link>
  )
}
