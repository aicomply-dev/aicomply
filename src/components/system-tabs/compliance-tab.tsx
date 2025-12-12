"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  CheckCircle2,
  Clock,
  AlertTriangle,
  ChevronDown,
  ChevronRight,
  FileText,
  Shield,
  Target,
} from "lucide-react"
import { cn } from "@/lib/utils"
import type { StandardControl } from "@/lib/data/standard-controls"
import { getRequirementById } from "@/lib/data/role-requirements"

interface RequirementStatus {
  id: string
  aiSystemId: string | null
  requirementId: string
  article: string | null
  category: string | null
  status: string | null
}

interface GapResult {
  id: string
  category: string
  article: string | null
  status: string
  priority: string
  remediation: string | null
}

interface ComplianceTabProps {
  systemId: string
  riskLevel?: string | null
  operatorRole?: string | null
  requirements: RequirementStatus[]
  controls: StandardControl[]
  gaps: GapResult[]
}

// Group requirements by article
function groupByArticle(requirements: RequirementStatus[]) {
  return requirements.reduce((acc, req) => {
    const article = req.article || "Other"
    if (!acc[article]) acc[article] = []
    acc[article].push(req)
    return acc
  }, {} as Record<string, RequirementStatus[]>)
}

// Group controls by category prefix
function groupControlsByCategory(controls: StandardControl[]) {
  const categories: Record<string, { name: string; controls: StandardControl[] }> = {}
  
  controls.forEach(control => {
    const prefix = control.id.split("-")[0]
    const categoryNames: Record<string, string> = {
      "CLS": "Classification",
      "RM": "Risk Management",
      "DATA": "Data Governance",
      "DOC": "Documentation",
      "LOG": "Logging",
      "TRANS": "Transparency",
      "HO": "Human Oversight",
      "ARS": "Accuracy & Security",
      "QMS": "Quality Management",
      "CA": "Conformity Assessment",
      "REG": "Registration",
      "PMM": "Post-Market Monitoring",
      "INC": "Incident Management",
      "LIT": "AI Literacy",
    }
    
    if (!categories[prefix]) {
      categories[prefix] = {
        name: categoryNames[prefix] || prefix,
        controls: []
      }
    }
    categories[prefix].controls.push(control)
  })
  
  return categories
}

export function ComplianceTab({
  systemId,
  riskLevel,
  operatorRole,
  requirements,
  controls,
  gaps,
}: ComplianceTabProps) {
  const [expandedArticles, setExpandedArticles] = useState<Set<string>>(new Set())
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set())

  const groupedRequirements = groupByArticle(requirements)
  const groupedControls = groupControlsByCategory(controls)

  // Calculate metrics
  const reqCompleted = requirements.filter(r => r.status === "verified" || r.status === "implemented").length
  const reqProgress = requirements.length > 0 ? Math.round((reqCompleted / requirements.length) * 100) : 0
  const gapCount = gaps.filter(g => g.status === "gap").length
  const criticalGaps = gaps.filter(g => g.priority === "critical").length

  const toggleArticle = (article: string) => {
    const newExpanded = new Set(expandedArticles)
    if (newExpanded.has(article)) {
      newExpanded.delete(article)
    } else {
      newExpanded.add(article)
    }
    setExpandedArticles(newExpanded)
  }

  const toggleCategory = (category: string) => {
    const newExpanded = new Set(expandedCategories)
    if (newExpanded.has(category)) {
      newExpanded.delete(category)
    } else {
      newExpanded.add(category)
    }
    setExpandedCategories(newExpanded)
  }

  // Show message if system not yet classified
  if (!riskLevel || riskLevel === "unclassified" || !operatorRole) {
    return (
      <Card className="border-dashed">
        <CardContent className="py-12 text-center">
          <Target className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
          <h3 className="font-semibold mb-2">Complete Assessments First</h3>
          <p className="text-sm text-muted-foreground mb-4 max-w-md mx-auto">
            To see your compliance requirements and controls, please complete:
          </p>
          <div className="flex justify-center gap-4">
            {(!riskLevel || riskLevel === "unclassified") && (
              <Badge variant="outline" className="text-amber-600 border-amber-500/50">
                <Clock className="mr-1 h-3 w-3" />
                Risk Level Assessment
              </Badge>
            )}
            {!operatorRole && (
              <Badge variant="outline" className="text-amber-600 border-amber-500/50">
                <Clock className="mr-1 h-3 w-3" />
                Role Determination
              </Badge>
            )}
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid gap-4 sm:grid-cols-3">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <FileText className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">{requirements.length}</p>
                <p className="text-xs text-muted-foreground">Requirements</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                <Shield className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="text-2xl font-bold">{controls.length}</p>
                <p className="text-xs text-muted-foreground">Controls</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className={cn(gapCount > 0 && "border-destructive/30")}>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className={cn(
                "flex h-10 w-10 items-center justify-center rounded-lg",
                gapCount > 0 ? "bg-destructive/10" : "bg-accent/10"
              )}>
                <AlertTriangle className={cn("h-5 w-5", gapCount > 0 ? "text-destructive" : "text-accent")} />
              </div>
              <div>
                <p className={cn("text-2xl font-bold", gapCount > 0 ? "text-destructive" : "text-accent")}>
                  {gapCount}
                </p>
                <p className="text-xs text-muted-foreground">Gaps</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Progress Bar */}
      <Card>
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-base">Overall Compliance Progress</CardTitle>
            <Badge variant="outline">{reqProgress}%</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <Progress value={reqProgress} className="h-3" />
          <div className="flex justify-between mt-2 text-xs text-muted-foreground">
            <span>{reqCompleted} completed</span>
            <span>{requirements.length - reqCompleted} remaining</span>
          </div>
        </CardContent>
      </Card>

      {/* Requirements and Controls Tabs */}
      <Tabs defaultValue="requirements">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="requirements">
            <FileText className="mr-2 h-4 w-4" />
            Requirements ({requirements.length})
          </TabsTrigger>
          <TabsTrigger value="controls">
            <Shield className="mr-2 h-4 w-4" />
            Controls ({controls.length})
          </TabsTrigger>
        </TabsList>

        {/* Requirements Tab */}
        <TabsContent value="requirements" className="mt-4 space-y-3">
          {Object.entries(groupedRequirements).map(([article, reqs]) => {
            const completed = reqs.filter(r => r.status === "verified" || r.status === "implemented").length
            const progress = Math.round((completed / reqs.length) * 100)
            const isExpanded = expandedArticles.has(article)

            return (
              <Card key={article} className="overflow-hidden">
                <button
                  onClick={() => toggleArticle(article)}
                  className="w-full p-4 flex items-center justify-between hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    {isExpanded ? (
                      <ChevronDown className="h-4 w-4 text-muted-foreground" />
                    ) : (
                      <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    )}
                    <div className="text-left">
                      <p className="font-medium">{article}</p>
                      <p className="text-xs text-muted-foreground">{reqs.length} requirements</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Progress value={progress} className="w-24 h-2" />
                    <Badge variant="outline" className="text-xs">{progress}%</Badge>
                  </div>
                </button>
                
                {isExpanded && (
                  <CardContent className="pt-0 pb-4 border-t">
                    <ul className="space-y-2 mt-3">
                      {reqs.map((req) => {
                        const reqDetails = getRequirementById(req.requirementId)
                        return (
                          <li key={req.id} className="flex items-start gap-3 text-sm py-2 border-b border-border/50 last:border-0">
                            <div className="mt-0.5">
                              {req.status === "verified" && <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />}
                              {req.status === "implemented" && <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />}
                              {req.status === "in_progress" && <Clock className="h-4 w-4 text-amber-500 shrink-0" />}
                              {req.status === "not_started" && <Clock className="h-4 w-4 text-muted-foreground shrink-0" />}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2">
                                <span className="font-mono text-xs text-muted-foreground">{req.requirementId}</span>
                                <Badge
                                  variant="outline"
                                  className={cn(
                                    "text-xs shrink-0",
                                    req.status === "verified" && "border-accent/50 text-accent",
                                    req.status === "implemented" && "border-primary/50 text-primary",
                                    req.status === "in_progress" && "border-amber-500/50 text-amber-600",
                                    req.status === "not_started" && "border-muted-foreground/50"
                                  )}
                                >
                                  {req.status?.replace(/_/g, " ")}
                                </Badge>
                              </div>
                              {reqDetails && (
                                <p className="text-sm mt-1">{reqDetails.requirement}</p>
                              )}
                              {reqDetails?.category && (
                                <p className="text-xs text-muted-foreground mt-0.5">{reqDetails.category}</p>
                              )}
                            </div>
                          </li>
                        )
                      })}
                    </ul>
                  </CardContent>
                )}
              </Card>
            )
          })}
          
          {requirements.length === 0 && (
            <Card className="border-dashed">
              <CardContent className="py-8 text-center">
                <FileText className="h-10 w-10 mx-auto text-muted-foreground mb-3" />
                <p className="text-sm text-muted-foreground">No requirements loaded yet.</p>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        {/* Controls Tab */}
        <TabsContent value="controls" className="mt-4 space-y-3">
          {Object.entries(groupedControls).map(([prefix, { name, controls: catControls }]) => {
            const isExpanded = expandedCategories.has(prefix)

            return (
              <Card key={prefix} className="overflow-hidden">
                <button
                  onClick={() => toggleCategory(prefix)}
                  className="w-full p-4 flex items-center justify-between hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    {isExpanded ? (
                      <ChevronDown className="h-4 w-4 text-muted-foreground" />
                    ) : (
                      <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    )}
                    <div className="text-left">
                      <p className="font-medium">{name}</p>
                      <p className="text-xs text-muted-foreground">{catControls.length} controls</p>
                    </div>
                  </div>
                  <Badge variant="secondary">{prefix}</Badge>
                </button>
                
                {isExpanded && (
                  <CardContent className="pt-0 pb-4 border-t">
                    <ul className="space-y-3 mt-3">
                      {catControls.map((control) => (
                        <li key={control.id} className="border-b border-border/50 pb-3 last:border-0 last:pb-0">
                          <div className="flex items-start justify-between gap-2">
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1">
                                <Badge variant="outline" className="text-xs">{control.id}</Badge>
                                <Badge 
                                  variant="outline" 
                                  className={cn(
                                    "text-xs",
                                    control.riskLevel === "critical" && "border-destructive/50 text-destructive",
                                    control.riskLevel === "high" && "border-amber-500/50 text-amber-600",
                                    control.riskLevel === "medium" && "border-primary/50 text-primary",
                                    control.riskLevel === "low" && "border-muted-foreground/50"
                                  )}
                                >
                                  {control.riskLevel}
                                </Badge>
                                <Badge variant="secondary" className="text-xs capitalize">{control.type}</Badge>
                              </div>
                              <p className="text-sm font-medium">{control.name}</p>
                              <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{control.objective}</p>
                              {control.euAiActArticle && (
                                <p className="text-xs text-primary mt-1">→ {control.euAiActArticle}</p>
                              )}
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                )}
              </Card>
            )
          })}
        </TabsContent>
      </Tabs>
    </div>
  )
}
