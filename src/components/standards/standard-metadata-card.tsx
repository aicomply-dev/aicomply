import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Calendar,
  User,
  FileText,
  Clock,
  CheckCircle2,
  AlertCircle,
  PenLine
} from "lucide-react"
import { cn } from "@/lib/utils"
import type { StandardMetadata } from "@/lib/types/standard"

interface StandardMetadataCardProps {
  metadata: StandardMetadata
  className?: string
}

export function StandardMetadataCard({ metadata, className }: StandardMetadataCardProps) {
  const statusConfig = {
    Draft: {
      icon: PenLine,
      variant: "secondary" as const,
      className: "bg-amber-500/10 text-amber-600 border-amber-500/30",
    },
    "In Review": {
      icon: AlertCircle,
      variant: "outline" as const,
      className: "bg-blue-500/10 text-blue-600 border-blue-500/30",
    },
    Approved: {
      icon: CheckCircle2,
      variant: "outline" as const,
      className: "bg-emerald-500/10 text-emerald-600 border-emerald-500/30",
    },
  }

  const status = metadata.status || "Draft"
  const StatusIcon = statusConfig[status]?.icon || PenLine

  return (
    <Card className={cn("", className)}>
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="text-xs font-medium">
                {metadata.standardId}
              </Badge>
              <Badge variant="outline" className="text-xs">
                v{metadata.version}
              </Badge>
              <Badge
                variant={statusConfig[status]?.variant || "secondary"}
                className={cn("text-xs", statusConfig[status]?.className)}
              >
                <StatusIcon className="mr-1 h-3 w-3" />
                {status}
              </Badge>
            </div>
            <CardTitle className="text-xl">{metadata.title}</CardTitle>
            <p className="text-sm text-muted-foreground">{metadata.documentType}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Owner */}
          <div className="flex items-start gap-2">
            <User className="h-4 w-4 text-muted-foreground mt-0.5" />
            <div>
              <p className="text-xs text-muted-foreground">Owner</p>
              <p className="text-sm font-medium">{metadata.owner}</p>
            </div>
          </div>

          {/* Approved By */}
          <div className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-muted-foreground mt-0.5" />
            <div>
              <p className="text-xs text-muted-foreground">Approved By</p>
              <p className="text-sm font-medium">{metadata.approvedBy}</p>
            </div>
          </div>

          {/* Effective Date */}
          <div className="flex items-start gap-2">
            <Calendar className="h-4 w-4 text-muted-foreground mt-0.5" />
            <div>
              <p className="text-xs text-muted-foreground">Effective Date</p>
              <p className="text-sm font-medium">{metadata.effectiveDate}</p>
            </div>
          </div>

          {/* Next Review */}
          <div className="flex items-start gap-2">
            <Clock className="h-4 w-4 text-muted-foreground mt-0.5" />
            <div>
              <p className="text-xs text-muted-foreground">Next Review</p>
              <p className="text-sm font-medium">{metadata.nextReviewDate}</p>
            </div>
          </div>

          {/* Parent Policy */}
          <div className="flex items-start gap-2 md:col-span-2">
            <FileText className="h-4 w-4 text-muted-foreground mt-0.5" />
            <div>
              <p className="text-xs text-muted-foreground">Parent Policy</p>
              <p className="text-sm font-medium">{metadata.parentPolicy}</p>
            </div>
          </div>

          {/* Review Frequency */}
          <div className="flex items-start gap-2">
            <Clock className="h-4 w-4 text-muted-foreground mt-0.5" />
            <div>
              <p className="text-xs text-muted-foreground">Review Frequency</p>
              <p className="text-sm font-medium">{metadata.reviewFrequency}</p>
            </div>
          </div>

          {/* Classification */}
          <div className="flex items-start gap-2">
            <FileText className="h-4 w-4 text-muted-foreground mt-0.5" />
            <div>
              <p className="text-xs text-muted-foreground">Classification</p>
              <p className="text-sm font-medium">{metadata.classification}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
