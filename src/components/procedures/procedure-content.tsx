"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BookOpen,
  Target,
  Users,
  ClipboardList,
  Shield,
  BarChart3,
  Layers,
  FileText,
  ChevronDown,
  CheckCircle2,
} from "lucide-react"
import type { ParsedProcedure } from "@/lib/types/procedure"
import { ProcedureMetadataCard } from "./procedure-metadata-card"
import { RACIMatrixComponent } from "./raci-matrix"
import { ProcedureStepComponent } from "./procedure-step"
import { ControlCard } from "./control-card"
import { KPITableComponent } from "./kpi-table"
import { FrameworkDiagramComponent } from "./framework-diagram"
import { cn } from "@/lib/utils"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

interface ProcedureContentProps {
  procedure: ParsedProcedure
}

export function ProcedureContent({ procedure }: ProcedureContentProps) {
  const [activeTab, setActiveTab] = useState("overview")
  const [expandAllSteps, setExpandAllSteps] = useState(false)
  const [expandAllControls, setExpandAllControls] = useState(false)

  const hasControls = procedure.controls.length > 0
  const hasSteps = procedure.steps.length > 0
  const hasKPIs = procedure.kpis.length > 0
  const hasRaci = procedure.rolesResponsibilities?.raciMatrix?.activities?.length > 0
  const hasFramework = (procedure.framework?.components?.length ?? 0) > 0

  return (
    <div className="space-y-8">
      {/* Metadata Card */}
      <ProcedureMetadataCard metadata={procedure.metadata} />

      {/* Tab Navigation */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="w-full flex flex-wrap h-auto gap-1 p-1">
          <TabsTrigger value="overview" className="flex items-center gap-2">
            <BookOpen className="h-4 w-4" />
            Overview
          </TabsTrigger>
          {hasSteps && (
            <TabsTrigger value="steps" className="flex items-center gap-2">
              <ClipboardList className="h-4 w-4" />
              Steps ({procedure.steps.length})
            </TabsTrigger>
          )}
          {hasControls && (
            <TabsTrigger value="controls" className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              Controls ({procedure.controls.length})
            </TabsTrigger>
          )}
          {hasRaci && (
            <TabsTrigger value="raci" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              RACI
            </TabsTrigger>
          )}
          {hasKPIs && (
            <TabsTrigger value="kpis" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              KPIs ({procedure.kpis.length})
            </TabsTrigger>
          )}
          <TabsTrigger value="full" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            Full Document
          </TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="mt-6 space-y-6">
          {/* Purpose & Scope */}
          {(procedure.purposeScope?.purpose || procedure.purposeScope?.scope) && (
            <Card className="border-border/50 bg-card/50">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Target className="h-5 w-5 text-muted-foreground" />
                  Purpose & Scope
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {procedure.purposeScope.purpose && (
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Purpose</h4>
                    <p className="text-sm text-muted-foreground">{procedure.purposeScope.purpose}</p>
                  </div>
                )}
                {procedure.purposeScope.scope && procedure.purposeScope.scope.applies?.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Applies To</h4>
                    <ul className="space-y-1">
                      {procedure.purposeScope.scope.applies.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {procedure.purposeScope.scope && procedure.purposeScope.scope.doesNotApply?.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Does Not Apply To</h4>
                    <ul className="space-y-1">
                      {procedure.purposeScope.scope.doesNotApply.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Target className="h-4 w-4 shrink-0 text-muted-foreground mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {/* Framework Diagram */}
          {hasFramework && procedure.framework && (
            <FrameworkDiagramComponent diagram={procedure.framework} />
          )}

          {/* Quick Stats */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {hasSteps && (
              <Card className="border-border/50 bg-card/50">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <ClipboardList className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">{procedure.steps.length}</p>
                      <p className="text-sm text-muted-foreground">Procedure Steps</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
            {hasControls && (
              <Card className="border-border/50 bg-card/50">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10">
                      <Shield className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">{procedure.controls.length}</p>
                      <p className="text-sm text-muted-foreground">Controls</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
            {hasKPIs && (
              <Card className="border-border/50 bg-card/50">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10">
                      <BarChart3 className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">{procedure.kpis.length}</p>
                      <p className="text-sm text-muted-foreground">KPIs</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
            {hasRaci && procedure.rolesResponsibilities?.raciMatrix && (
              <Card className="border-border/50 bg-card/50">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/10">
                      <Users className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">{procedure.rolesResponsibilities.raciMatrix.roles.length}</p>
                      <p className="text-sm text-muted-foreground">Roles Defined</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Table of Contents */}
          {procedure.tableOfContents.length > 0 && (
            <Card className="border-border/50 bg-card/50">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <BookOpen className="h-5 w-5 text-muted-foreground" />
                  Table of Contents
                </CardTitle>
              </CardHeader>
              <CardContent>
                <nav className="space-y-1">
                  {procedure.tableOfContents.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={cn(
                        "block text-sm hover:text-primary transition-colors",
                        item.level === 1 && "font-semibold",
                        item.level === 2 && "pl-4 text-muted-foreground",
                        item.level === 3 && "pl-8 text-muted-foreground text-xs"
                      )}
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        {/* Steps Tab */}
        {hasSteps && (
          <TabsContent value="steps" className="mt-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Procedure Steps</h3>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setExpandAllSteps(!expandAllSteps)}
              >
                <ChevronDown className={cn("h-4 w-4 mr-2", expandAllSteps && "rotate-180")} />
                {expandAllSteps ? "Collapse All" : "Expand All"}
              </Button>
            </div>
            <div className="space-y-4">
              {procedure.steps.map((step) => (
                <ProcedureStepComponent
                  key={step.stepNumber}
                  step={step}
                  isExpanded={expandAllSteps}
                />
              ))}
            </div>
          </TabsContent>
        )}

        {/* Controls Tab */}
        {hasControls && (
          <TabsContent value="controls" className="mt-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Control Definitions</h3>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setExpandAllControls(!expandAllControls)}
              >
                <ChevronDown className={cn("h-4 w-4 mr-2", expandAllControls && "rotate-180")} />
                {expandAllControls ? "Collapse All" : "Expand All"}
              </Button>
            </div>
            {/* Control Stats */}
            <div className="grid gap-3 sm:grid-cols-4">
              <div className="rounded-lg border border-blue-500/30 bg-blue-500/10 p-3 text-center">
                <p className="text-lg font-bold text-blue-600">
                  {procedure.controls.filter(c => c.type === "preventive").length}
                </p>
                <p className="text-xs text-blue-600/70">Preventive</p>
              </div>
              <div className="rounded-lg border border-amber-500/30 bg-amber-500/10 p-3 text-center">
                <p className="text-lg font-bold text-amber-600">
                  {procedure.controls.filter(c => c.type === "detective").length}
                </p>
                <p className="text-xs text-amber-600/70">Detective</p>
              </div>
              <div className="rounded-lg border border-purple-500/30 bg-purple-500/10 p-3 text-center">
                <p className="text-lg font-bold text-purple-600">
                  {procedure.controls.filter(c => c.type === "corrective").length}
                </p>
                <p className="text-xs text-purple-600/70">Corrective</p>
              </div>
              <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-center">
                <p className="text-lg font-bold text-red-600">
                  {procedure.controls.filter(c => c.riskLevel === "critical" || c.riskLevel === "high").length}
                </p>
                <p className="text-xs text-red-600/70">High/Critical Risk</p>
              </div>
            </div>
            <div className="space-y-4">
              {procedure.controls.map((control) => (
                <ControlCard
                  key={control.id}
                  control={control}
                  isExpanded={expandAllControls}
                />
              ))}
            </div>
          </TabsContent>
        )}

        {/* RACI Tab */}
        {hasRaci && procedure.rolesResponsibilities?.raciMatrix && (
          <TabsContent value="raci" className="mt-6">
            <RACIMatrixComponent matrix={procedure.rolesResponsibilities.raciMatrix} />
          </TabsContent>
        )}

        {/* KPIs Tab */}
        {hasKPIs && (
          <TabsContent value="kpis" className="mt-6 space-y-6">
            {procedure.kpis.map((kpiTable, idx) => (
              <KPITableComponent key={idx} table={kpiTable} />
            ))}
          </TabsContent>
        )}

        {/* Full Document Tab */}
        <TabsContent value="full" className="mt-6">
          <Card className="border-border/50">
            <CardContent className="p-8 lg:p-12">
              <div className="prose prose-neutral dark:prose-invert max-w-none prose-headings:scroll-mt-20 prose-h1:text-2xl prose-h1:font-bold prose-h1:mb-4 prose-h2:text-xl prose-h2:font-bold prose-h2:mt-8 prose-h2:mb-4 prose-h2:pb-2 prose-h2:border-b prose-h3:text-lg prose-h3:font-semibold prose-h3:mt-6 prose-h3:mb-3 prose-h4:text-base prose-h4:font-semibold prose-h4:mt-4 prose-h4:mb-2 prose-table:text-sm prose-th:bg-muted prose-th:p-3 prose-td:p-3 prose-td:border prose-tr:border-b prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none prose-blockquote:border-l-primary prose-blockquote:bg-primary/5 prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:not-italic">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {procedure.rawContent}
                </ReactMarkdown>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
