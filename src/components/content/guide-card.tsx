import Link from 'next/link'
import { ArrowRight, FileText } from 'lucide-react'

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface GuideCardProps {
  id: string
  title: string
  category: string
}

export function GuideCard({ id, title, category }: GuideCardProps) {
  return (
    <Link
      href={`/implement/guides/${category}/${id}`}
      className="group block"
    >
      <Card className="h-full transition-shadow hover:shadow-md">
        <CardHeader>
          <div className="flex items-center gap-2 mb-1">
            <FileText className="h-4 w-4 text-muted-foreground" />
            <Badge variant="outline" className="text-xs font-mono">
              {id}
            </Badge>
          </div>
          <CardTitle className="text-base line-clamp-2">{title}</CardTitle>
        </CardHeader>
        <CardContent />
        <CardFooter>
          <span className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 group-hover:gap-2 transition-all">
            Read guide
            <ArrowRight className="h-4 w-4" />
          </span>
        </CardFooter>
      </Card>
    </Link>
  )
}
