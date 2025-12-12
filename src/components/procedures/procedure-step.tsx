"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  ChevronDown,
  Clock,
  Users,
  FileText,
  CheckCircle2,
  AlertCircle,
  Shield,
  ClipboardList,
} from "lucide-react"
import type { ProcedureStep as ProcedureStepType, HowStep } from "@/lib/types/procedure"
import { cn } from "@/lib/utils"

interface ProcedureStepProps {
  step: ProcedureStepType
  isExpanded?: boolean
}

export function ProcedureStepComponent({ step, isExpanded = false }: ProcedureStepProps) {
  const [open, setOpen] = useState(isExpanded)

  return (
    <Card className="border-border/50 bg-card/50">
      <Collapsible open={open} onOpenChange={setOpen}>
        <CollapsibleTrigger asChild>
          <CardHeader className="cursor-pointer hover:bg-muted/30 transition-colors">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold text-sm">
                  {step.stepNumber}
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold leading-tight">{step.title}</h3>
                  <div className="flex flex-wrap gap-2 text-sm">
                    {step.controlId && (
                      <Badge variant="outline" className="bg-blue-500/10 text-blue-600 border-blue-500/30">
                        <Shield className="mr-1 h-3 w-3" />
                        {step.controlId}
                      </Badge>
                    )}
                    {step.timing && (
                      <span className="flex items-center gap-1 text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {step.timing}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <Button variant="ghost" size="icon" className="shrink-0">
                <ChevronDown className={cn("h-4 w-4 transition-transform", open && "rotate-180")} />
              </Button>
            </div>
          </CardHeader>
        </CollapsibleTrigger>

        <CollapsibleContent>
          <CardContent className="pt-0 space-y-6">
            {/* When & Who */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  When
                </div>
                <p className="text-sm text-muted-foreground">{step.when}</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  Who
                </div>
                <p className="text-sm text-muted-foreground">{step.who}</p>
              </div>
            </div>

            {/* Regulatory Basis */}
            {step.regulatoryBasis && (
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <FileText className="h-4 w-4 text-muted-foreground" />
                  Regulatory Basis
                </div>
                <p className="text-sm text-muted-foreground">{step.regulatoryBasis}</p>
              </div>
            )}

            {/* How Steps */}
            {step.howSteps.length > 0 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <ClipboardList className="h-4 w-4 text-muted-foreground" />
                  How
                </div>
                <div className="space-y-4 pl-4 border-l-2 border-border/50">
                  {step.howSteps.map((howStep, idx) => (
                    <HowStepRenderer key={idx} step={howStep} />
                  ))}
                </div>
              </div>
            )}

            {/* Evidence Required */}
            {step.evidenceRequired.length > 0 && (
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <FileText className="h-4 w-4 text-muted-foreground" />
                  Evidence Required
                </div>
                <ul className="space-y-1">
                  {step.evidenceRequired.map((evidence, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500 mt-0.5" />
                      {evidence}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Quality Checks */}
            {step.qualityChecks && step.qualityChecks.length > 0 && (
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <AlertCircle className="h-4 w-4 text-muted-foreground" />
                  Quality Checks
                </div>
                <ul className="space-y-1">
                  {step.qualityChecks.map((check, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-500 mt-0.5" />
                      {check}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  )
}

function HowStepRenderer({ step }: { step: HowStep }) {
  return (
    <div className="space-y-2">
      <div className="flex items-start gap-2">
        <span className="font-medium text-sm text-primary">{step.number}.</span>
        <div className="space-y-1">
          {step.title && <span className="font-medium text-sm">{step.title}</span>}
          {step.description && (
            <p className="text-sm text-muted-foreground">{step.description}</p>
          )}
        </div>
      </div>

      {/* Bullet items */}
      {step.items && step.items.length > 0 && (
        <ul className="pl-5 space-y-1">
          {step.items.map((item, idx) => (
            <li key={idx} className="text-sm text-muted-foreground list-disc">
              {item}
            </li>
          ))}
        </ul>
      )}

      {/* Sub-steps */}
      {step.subSteps && step.subSteps.length > 0 && (
        <div className="pl-4 space-y-2 border-l border-border/30">
          {step.subSteps.map((subStep, idx) => (
            <HowStepRenderer key={idx} step={subStep} />
          ))}
        </div>
      )}
    </div>
  )
}
