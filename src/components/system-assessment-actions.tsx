"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Zap, ClipboardCheck, Users, Shield, RefreshCw } from "lucide-react"

interface SystemAssessmentActionsProps {
  systemId: string
  systemName: string
  riskLevel?: string | null
  operatorRole?: string | null
}

export function SystemAssessmentActions({
  systemId,
  systemName,
  riskLevel,
  operatorRole,
}: SystemAssessmentActionsProps) {
  const needsClassification = !riskLevel || riskLevel === "unclassified"
  const needsRole = !operatorRole

  return (
    <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-transparent">
      <CardContent className="p-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h3 className="font-semibold">Assess {systemName}</h3>
            <p className="text-sm text-muted-foreground">
              {needsClassification 
                ? "Start by classifying the risk level of this system"
                : needsRole 
                  ? "Determine your role under the EU AI Act"
                  : "Run additional assessments or compliance checks"
              }
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {/* Risk Classification - always available */}
            <Button 
              size="sm" 
              variant={needsClassification ? "default" : "outline"}
              asChild
            >
              <Link href={`/assess/classification?systemId=${systemId}&type=quick-risk-classification`}>
                {needsClassification ? (
                  <>
                    <Zap className="mr-2 h-4 w-4" />
                    Risk Classification
                  </>
                ) : (
                  <>
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Re-classify
                  </>
                )}
              </Link>
            </Button>
            
            {/* Role Determination */}
            {needsRole && (
              <Button size="sm" variant="outline" asChild>
                <Link href={`/assess/classification?systemId=${systemId}&type=role-determination`}>
                  <Users className="mr-2 h-4 w-4" />
                  Role Determination
                </Link>
              </Button>
            )}
            
            {/* Full Compliance - for high-risk systems */}
            {riskLevel === "high" && (
              <Button size="sm" variant="outline" asChild>
                <Link href={`/assess/classification?systemId=${systemId}&type=full-high-risk-compliance`}>
                  <Shield className="mr-2 h-4 w-4" />
                  Full Compliance
                </Link>
              </Button>
            )}
            
            {/* All Assessments */}
            <Button size="sm" variant="secondary" asChild>
              <Link href={`/assess/classification?systemId=${systemId}`}>
                <ClipboardCheck className="mr-2 h-4 w-4" />
                All Assessments
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
