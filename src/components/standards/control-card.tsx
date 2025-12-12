"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Shield,
  Eye,
  Activity,
  AlertTriangle,
  CheckCircle2,
  FileText,
  ClipboardCheck,
  Clock,
} from "lucide-react"
import { cn } from "@/lib/utils"
import type { ControlDefinition } from "@/lib/types/standard"

interface ControlCardProps {
  control: ControlDefinition
  className?: string
  defaultOpen?: boolean
}

export function ControlCard({ control, className, defaultOpen = false }: ControlCardProps) {
  const riskLevelConfig = {
    critical: {
      color: "bg-red-500",
      badge: "bg-red-500/10 text-red-600 border-red-500/30",
      icon: AlertTriangle,
    },
    high: {
      color: "bg-orange-500",
      badge: "bg-orange-500/10 text-orange-600 border-orange-500/30",
      icon: AlertTriangle,
    },
    medium: {
      color: "bg-amber-500",
      badge: "bg-amber-500/10 text-amber-600 border-amber-500/30",
      icon: AlertTriangle,
    },
    low: {
      color: "bg-emerald-500",
      badge: "bg-emerald-500/10 text-emerald-600 border-emerald-500/30",
      icon: CheckCircle2,
    },
  }

  const controlTypeConfig = {
    preventive: {
      icon: Shield,
      label: "Preventive",
      className: "bg-blue-500/10 text-blue-600 border-blue-500/30",
    },
    detective: {
      icon: Eye,
      label: "Detective",
      className: "bg-purple-500/10 text-purple-600 border-purple-500/30",
    },
    corrective: {
      icon: Activity,
      label: "Corrective",
      className: "bg-teal-500/10 text-teal-600 border-teal-500/30",
    },
  }

  const riskLevel = control.riskLevel || "medium"
  const controlType = control.type || "preventive"

  const RiskIcon = riskLevelConfig[riskLevel]?.icon || AlertTriangle
  const TypeIcon = controlTypeConfig[controlType]?.icon || Shield

  return (
    <Card className={cn("overflow-hidden", className)}>
      {/* Risk level color bar */}
      <div className={cn("h-1", riskLevelConfig[riskLevel]?.color || "bg-amber-500")} />

      <Accordion type="single" collapsible defaultValue={defaultOpen ? control.id : undefined}>
        <AccordionItem value={control.id} className="border-b-0">
          <CardHeader className="pb-0 pt-4">
            <AccordionTrigger className="py-0 hover:no-underline">
              <div className="flex flex-col items-start gap-2 text-left">
                <div className="flex items-center gap-2 flex-wrap">
                  <Badge variant="secondary" className="text-xs font-mono">
                    {control.id}
                  </Badge>
                  <Badge
                    variant="outline"
                    className={cn("text-xs", controlTypeConfig[controlType]?.className)}
                  >
                    <TypeIcon className="mr-1 h-3 w-3" />
                    {controlTypeConfig[controlType]?.label || controlType}
                  </Badge>
                  <Badge
                    variant="outline"
                    className={cn("text-xs", riskLevelConfig[riskLevel]?.badge)}
                  >
                    <RiskIcon className="mr-1 h-3 w-3" />
                    {riskLevel.charAt(0).toUpperCase() + riskLevel.slice(1)} Risk
                  </Badge>
                  {control.frequency && (
                    <Badge variant="outline" className="text-xs">
                      <Clock className="mr-1 h-3 w-3" />
                      {control.frequency}
                    </Badge>
                  )}
                </div>
                <h3 className="text-base font-semibold">{control.name}</h3>
              </div>
            </AccordionTrigger>
          </CardHeader>

          <AccordionContent>
            <CardContent className="pt-4 space-y-6">
              {/* Objective */}
              {control.objective && (
                <div>
                  <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
                    <FileText className="h-4 w-4 text-muted-foreground" />
                    Objective
                  </h4>
                  <p className="text-sm text-muted-foreground">{control.objective}</p>
                </div>
              )}

              {/* Requirements */}
              {control.requirements && control.requirements.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                    <ClipboardCheck className="h-4 w-4 text-muted-foreground" />
                    Requirements
                  </h4>
                  <div className="space-y-4">
                    {control.requirements.map((req) => (
                      <div key={req.id} className="border rounded-lg p-4 bg-muted/30">
                        <div className="flex items-start gap-2 mb-2">
                          <Badge variant="secondary" className="text-xs font-mono shrink-0">
                            {req.id}
                          </Badge>
                          <span className="text-sm font-medium">{req.title}</span>
                        </div>
                        {req.description && (
                          <p className="text-sm text-muted-foreground mb-3">{req.description}</p>
                        )}
                        {req.mandatoryActions && req.mandatoryActions.length > 0 && (
                          <div className="space-y-1">
                            {req.mandatoryActions.map((action, idx) => (
                              <div key={idx} className="flex items-start gap-2 text-sm">
                                <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
                                <span>{action}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Evidence Required */}
              {control.evidenceRequired && control.evidenceRequired.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                    <FileText className="h-4 w-4 text-muted-foreground" />
                    Evidence Required
                  </h4>
                  <div className="space-y-2">
                    {control.evidenceRequired.map((evidence, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <Checkbox id={`evidence-${control.id}-${idx}`} disabled />
                        <label
                          htmlFor={`evidence-${control.id}-${idx}`}
                          className="text-sm cursor-pointer"
                        >
                          {evidence}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Audit Verification */}
              {control.auditVerification && control.auditVerification.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                    <ClipboardCheck className="h-4 w-4 text-muted-foreground" />
                    Audit Verification
                  </h4>
                  <div className="space-y-2">
                    {control.auditVerification.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <Checkbox id={`audit-${control.id}-${idx}`} disabled />
                        <label
                          htmlFor={`audit-${control.id}-${idx}`}
                          className="text-sm cursor-pointer"
                        >
                          {item}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  )
}

interface ControlCardListProps {
  controls: ControlDefinition[]
  className?: string
}

export function ControlCardList({ controls, className }: ControlCardListProps) {
  return (
    <div className={cn("space-y-4", className)}>
      {controls.map((control) => (
        <ControlCard key={control.id} control={control} />
      ))}
    </div>
  )
}
