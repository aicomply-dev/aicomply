"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Calendar,
  FileText,
  Shield,
  User,
  Clock,
  CheckCircle2,
  AlertCircle,
  PenLine,
} from "lucide-react"
import type { ProcedureMetadata, ContactEntry } from "@/lib/types/procedure"

interface ProcedureMetadataCardProps {
  metadata: ProcedureMetadata
  contacts?: ContactEntry[]
}

const statusConfig = {
  Draft: {
    color: "bg-amber-500/10 text-amber-600 border-amber-500/30",
    icon: PenLine,
  },
  "In Review": {
    color: "bg-blue-500/10 text-blue-600 border-blue-500/30",
    icon: AlertCircle,
  },
  Approved: {
    color: "bg-emerald-500/10 text-emerald-600 border-emerald-500/30",
    icon: CheckCircle2,
  },
}

export function ProcedureMetadataCard({ metadata, contacts }: ProcedureMetadataCardProps) {
  const status = statusConfig[metadata.approvalStatus] || statusConfig.Draft
  const StatusIcon = status.icon

  return (
    <Card className="border-border/50 bg-card/50">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <FileText className="h-4 w-4" />
              <span>{metadata.procedureId}</span>
            </div>
            <CardTitle className="text-xl">{metadata.procedureName}</CardTitle>
            <p className="text-sm text-muted-foreground">{metadata.standard}</p>
          </div>
          <Badge variant="outline" className={status.color}>
            <StatusIcon className="mr-1 h-3 w-3" />
            {metadata.approvalStatus}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Controls */}
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-sm font-medium">
              <Shield className="h-4 w-4 text-muted-foreground" />
              Controls Covered
            </div>
            <div className="flex flex-wrap gap-1">
              {metadata.coversControls.map((control) => (
                <Badge key={control} variant="secondary" className="text-xs">
                  {control}
                </Badge>
              ))}
            </div>
          </div>

          {/* Effective Date */}
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-sm font-medium">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              Effective Date
            </div>
            <p className="text-sm text-muted-foreground">
              {metadata.effectiveDate || "To be determined"}
            </p>
          </div>

          {/* Next Review */}
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-sm font-medium">
              <Clock className="h-4 w-4 text-muted-foreground" />
              Next Review
            </div>
            <p className="text-sm text-muted-foreground">
              {metadata.nextReviewDate || "To be determined"}
            </p>
          </div>

          {/* EU AI Act Article */}
          {metadata.euAiActArticle && (
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-sm font-medium">
                <FileText className="h-4 w-4 text-muted-foreground" />
                EU AI Act
              </div>
              <Badge variant="outline" className="bg-teal-500/10 text-teal-600 border-teal-500/30">
                {metadata.euAiActArticle}
              </Badge>
            </div>
          )}
        </div>

        {/* Contacts Section */}
        {contacts && contacts.length > 0 && (
          <div className="mt-6 pt-4 border-t border-border/50">
            <h4 className="text-sm font-medium mb-3 flex items-center gap-2">
              <User className="h-4 w-4 text-muted-foreground" />
              Key Contacts
            </h4>
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {contacts.map((contact, idx) => (
                <div key={idx} className="text-sm">
                  <span className="font-medium">{contact.role}:</span>{" "}
                  <span className="text-muted-foreground">{contact.title}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
