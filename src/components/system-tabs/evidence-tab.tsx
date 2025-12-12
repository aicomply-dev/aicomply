"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  FileText,
  Upload,
  Search,
  CheckCircle2,
  ClipboardList,
  FormInput,
  BookOpen,
  ExternalLink,
  File,
} from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

interface RequirementStatus {
  id: string
  aiSystemId: string | null
  requirementId: string
  article: string | null
  category: string | null
  status: string | null
}

export interface Guide {
  id: string
  title: string
  description: string
  type: "procedure" | "assessment-tool" | "checklist" | "form" | "record"
  category: string
  owner: string
  status: "Draft" | "In Review" | "Ready to Use"
  version: string
  effectiveDate?: string
  filename: string
}

interface EvidenceTabProps {
  systemId: string
  requirements: RequirementStatus[]
  guides: Guide[]
  riskLevel: string
  role: string | null
}

const TYPE_ICONS: Record<string, typeof FileText> = {
  procedure: BookOpen,
  "assessment-tool": FileText,
  checklist: ClipboardList,
  form: FormInput,
  record: File,
}

const TYPE_LABELS: Record<string, string> = {
  procedure: "Procedure",
  "assessment-tool": "Assessment Tool",
  checklist: "Checklist",
  form: "Form",
  record: "Record",
}

// Categories applicable to each risk level
const RISK_LEVEL_CATEGORIES: Record<string, string[]> = {
  high: [
    "Risk Management", "Classification", "Data Management", "Documentation",
    "Operations", "Transparency", "Governance", "Technical", "Quality",
    "Certification", "Registration", "Training", "Development",
    "Vendor Management", "Change Management", "Testing", "Conformity Assessment"
  ],
  limited: [
    "Transparency", "Training", "Classification"
  ],
  minimal: [
    "Training", "Classification"
  ],
  unclassified: [
    "Classification", "Training"
  ],
  prohibited: []
}

export function EvidenceTab({ systemId, requirements, guides, riskLevel, role }: EvidenceTabProps) {
  const [searchQuery, setSearchQuery] = useState("")

  // Filter guides by risk level - only show applicable documents
  const applicableCategories = RISK_LEVEL_CATEGORIES[riskLevel] || RISK_LEVEL_CATEGORIES.unclassified
  const applicableGuides = guides.filter(guide => 
    applicableCategories.includes(guide.category)
  )

  const filteredGuides = applicableGuides.filter(guide =>
    guide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    guide.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    guide.type.toLowerCase().includes(searchQuery.toLowerCase())
  )

  // Group guides by type (use applicableGuides, not all guides)
  const guidesByType = applicableGuides.reduce((acc, guide) => {
    if (!acc[guide.type]) acc[guide.type] = []
    acc[guide.type].push(guide)
    return acc
  }, {} as Record<string, Guide[]>)

  // Group requirements by article for evidence mapping
  const articleGroups = requirements.reduce((acc, req) => {
    const article = req.article || "Other"
    if (!acc[article]) acc[article] = { requirements: [], guideCount: 0 }
    acc[article].requirements.push(req)
    return acc
  }, {} as Record<string, { requirements: RequirementStatus[]; guideCount: number }>)

  return (
    <div className="space-y-6">
      {/* Upload Section */}
      <Card className="border-dashed border-2">
        <CardContent className="py-8">
          <div className="text-center">
            <Upload className="h-10 w-10 mx-auto text-muted-foreground mb-3" />
            <h3 className="font-medium mb-1">Upload Evidence</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Drag and drop files here, or click to browse
            </p>
            <Button variant="outline">
              <Upload className="mr-2 h-4 w-4" />
              Select Files
            </Button>
            <p className="text-xs text-muted-foreground mt-3">
              Supported: PDF, DOC, DOCX, XLS, XLSX, PNG, JPG, ZIP (max 50MB)
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Evidence by Requirement */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Evidence by Requirement</CardTitle>
          <CardDescription>
            Track evidence documents for each EU AI Act article
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {Object.entries(articleGroups).map(([article, { requirements: reqs, guideCount }]) => (
              <div
                key={article}
                className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className={cn(
                    "flex h-8 w-8 items-center justify-center rounded-lg",
                    guideCount > 0 ? "bg-accent/10" : "bg-muted"
                  )}>
                    <FileText className={cn(
                      "h-4 w-4",
                      guideCount > 0 ? "text-accent" : "text-muted-foreground"
                    )} />
                  </div>
                  <div>
                    <p className="font-medium text-sm">{article}</p>
                    <p className="text-xs text-muted-foreground">
                      {reqs.length} requirements
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={guideCount > 0 ? "default" : "secondary"}>
                    {guideCount} files
                  </Badge>
                  <Button variant="ghost" size="sm">
                    <Upload className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Available Documents from Guides */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-base">Available Documents</CardTitle>
              <CardDescription>{applicableGuides.length} applicable documents for {riskLevel} risk systems</CardDescription>
            </div>
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search documents..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {filteredGuides.length > 0 ? (
            <div className="space-y-2">
              {filteredGuides.map((guide) => {
                const TypeIcon = TYPE_ICONS[guide.type] || FileText
                return (
                  <div
                    key={guide.id}
                    className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className={cn(
                        "flex h-10 w-10 items-center justify-center rounded-lg",
                        guide.status === "Ready to Use" ? "bg-accent/10" : "bg-muted"
                      )}>
                        <TypeIcon className={cn(
                          "h-5 w-5",
                          guide.status === "Ready to Use" ? "text-accent" : "text-muted-foreground"
                        )} />
                      </div>
                      <div>
                        <p className="font-medium text-sm">{guide.title}</p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span>{TYPE_LABELS[guide.type]}</span>
                          <span>•</span>
                          <span>{guide.category}</span>
                          <span>•</span>
                          <span>v{guide.version}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge
                        variant="outline"
                        className={cn(
                          guide.status === "Ready to Use" && "border-accent/50 text-accent",
                          guide.status === "In Review" && "border-amber-500/50 text-amber-600",
                          guide.status === "Draft" && "border-muted-foreground/50"
                        )}
                      >
                        {guide.status === "Ready to Use" && <CheckCircle2 className="mr-1 h-3 w-3" />}
                        {guide.status}
                      </Badge>
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={`/implement/guides/${guide.id}`}>
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                )
              })}
            </div>
          ) : (
            <div className="py-8 text-center">
              <FileText className="h-10 w-10 mx-auto text-muted-foreground mb-3" />
              <p className="text-sm text-muted-foreground">
                {searchQuery ? "No documents match your search" : "No documents available"}
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Documents by Type Summary */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {Object.entries(guidesByType).map(([type, typeGuides]) => {
          const TypeIcon = TYPE_ICONS[type] || FileText
          return (
            <Card key={type}>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <TypeIcon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{typeGuides.length}</p>
                    <p className="text-xs text-muted-foreground capitalize">{TYPE_LABELS[type] || type}s</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
