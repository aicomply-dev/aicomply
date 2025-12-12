"use client"

import { useState, useMemo } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Checkbox } from "@/components/ui/checkbox"
import {
  CheckSquare,
  Square,
  MinusSquare,
  AlertCircle,
  ChevronDown,
  ChevronRight,
  FileText,
  Download,
  Printer,
} from "lucide-react"
import { cn } from "@/lib/utils"

interface ChecklistSection {
  id: string
  title: string
  items: ChecklistItem[]
}

interface ChecklistItem {
  id: string
  number: string
  text: string
  status: "complete" | "partial" | "na" | "not_started"
  notes?: string
}

interface ChecklistContentProps {
  content: string
  title: string
}

// Parse markdown checklist content into structured sections
function parseChecklistContent(content: string): {
  metadata: Record<string, string>
  purpose: string
  instructions: string[]
  sections: ChecklistSection[]
} {
  const lines = content.split("\n")
  const metadata: Record<string, string> = {}
  let purpose = ""
  const instructions: string[] = []
  const sections: ChecklistSection[] = []
  
  let currentSection: ChecklistSection | null = null
  let inPurpose = false
  let inInstructions = false
  let inTable = false
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim()
    
    // Parse metadata (bold key-value pairs at top)
    const metaMatch = line.match(/^\*\*([^*]+)\*\*:?\s*(.*)$/)
    if (metaMatch && !inPurpose && !inInstructions && sections.length === 0) {
      metadata[metaMatch[1].trim()] = metaMatch[2].trim()
      continue
    }
    
    // Detect purpose section
    if (line === "## Purpose") {
      inPurpose = true
      continue
    }
    
    // Detect instructions section
    if (line === "## Instructions") {
      inPurpose = false
      inInstructions = true
      continue
    }
    
    // Capture purpose text
    if (inPurpose && line && !line.startsWith("#") && !line.startsWith("---")) {
      purpose += (purpose ? " " : "") + line
    }
    
    // Capture instruction items
    if (inInstructions && line.match(/^\d+\./)) {
      instructions.push(line.replace(/^\d+\.\s*/, ""))
    }
    
    // Detect new section (## SECTION or ### subsection)
    if (line.match(/^##\s+SECTION\s+\d+/i) || line.match(/^##\s+[A-Z]/)) {
      inPurpose = false
      inInstructions = false
      currentSection = {
        id: `section-${sections.length}`,
        title: line.replace(/^#+\s*/, "").replace(/SECTION\s+\d+:\s*/i, ""),
        items: [],
      }
      sections.push(currentSection)
      continue
    }
    
    // Parse table rows for checklist items
    if (line.startsWith("|") && currentSection) {
      const cells = line.split("|").map(c => c.trim()).filter(c => c)
      
      // Skip header rows
      if (cells[0] === "#" || cells[0] === "---" || cells[0].includes("---")) {
        continue
      }
      
      // Parse checklist item row
      if (cells.length >= 3 && cells[0].match(/^\d/)) {
        const statusText = cells[2] || ""
        let status: ChecklistItem["status"] = "not_started"
        
        if (statusText.includes("[x]") || statusText.toLowerCase().includes("complete")) {
          status = "complete"
        } else if (statusText.toLowerCase().includes("partial")) {
          status = "partial"
        } else if (statusText.toLowerCase().includes("n/a")) {
          status = "na"
        }
        
        currentSection.items.push({
          id: `item-${cells[0]}`,
          number: cells[0],
          text: cells[1],
          status,
          notes: cells[3] || undefined,
        })
      }
    }
  }
  
  return { metadata, purpose, instructions, sections }
}

export function ChecklistContent({ content, title }: ChecklistContentProps) {
  const parsed = useMemo(() => parseChecklistContent(content), [content])
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set(parsed.sections.map(s => s.id))
  )
  const [itemStates, setItemStates] = useState<Record<string, ChecklistItem["status"]>>({})
  
  const toggleSection = (sectionId: string) => {
    const newExpanded = new Set(expandedSections)
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId)
    } else {
      newExpanded.add(sectionId)
    }
    setExpandedSections(newExpanded)
  }
  
  const getItemStatus = (item: ChecklistItem) => {
    return itemStates[item.id] || item.status
  }
  
  const cycleStatus = (itemId: string, currentStatus: ChecklistItem["status"]) => {
    const statusOrder: ChecklistItem["status"][] = ["not_started", "partial", "complete", "na"]
    const currentIndex = statusOrder.indexOf(currentStatus)
    const nextStatus = statusOrder[(currentIndex + 1) % statusOrder.length]
    setItemStates(prev => ({ ...prev, [itemId]: nextStatus }))
  }
  
  // Calculate progress
  const totalItems = parsed.sections.reduce((acc, s) => acc + s.items.length, 0)
  const completedItems = parsed.sections.reduce((acc, s) => 
    acc + s.items.filter(i => {
      const status = getItemStatus(i)
      return status === "complete" || status === "na"
    }).length, 0
  )
  const progress = totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0
  
  const StatusIcon = ({ status }: { status: ChecklistItem["status"] }) => {
    switch (status) {
      case "complete":
        return <CheckSquare className="h-5 w-5 text-accent" />
      case "partial":
        return <MinusSquare className="h-5 w-5 text-amber-500" />
      case "na":
        return <Square className="h-5 w-5 text-muted-foreground" />
      default:
        return <Square className="h-5 w-5 text-muted-foreground/50" />
    }
  }
  
  return (
    <div className="space-y-6">
      {/* Progress Overview */}
      <Card className="border-accent/30 bg-gradient-to-r from-accent/5 to-transparent">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
                <CheckSquare className="h-7 w-7 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Checklist Progress</h3>
                <p className="text-sm text-muted-foreground">
                  {completedItems} of {totalItems} items completed
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-48">
                <Progress value={progress} className="h-3" />
              </div>
              <Badge 
                variant="outline" 
                className={cn(
                  "text-lg px-3 py-1",
                  progress === 100 && "border-accent text-accent bg-accent/10",
                  progress >= 50 && progress < 100 && "border-amber-500 text-amber-500 bg-amber-500/10",
                  progress < 50 && "border-muted-foreground"
                )}
              >
                {progress}%
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Purpose & Instructions */}
      {(parsed.purpose || parsed.instructions.length > 0) && (
        <Card className="border-border/50">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <FileText className="h-5 w-5 text-muted-foreground" />
              Purpose & Instructions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {parsed.purpose && (
              <p className="text-sm text-muted-foreground">{parsed.purpose}</p>
            )}
            {parsed.instructions.length > 0 && (
              <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
                {parsed.instructions.map((inst, idx) => (
                  <li key={idx}>{inst}</li>
                ))}
              </ol>
            )}
          </CardContent>
        </Card>
      )}
      
      {/* Checklist Sections */}
      <div className="space-y-4">
        {parsed.sections.map((section) => {
          const isExpanded = expandedSections.has(section.id)
          const sectionComplete = section.items.filter(i => {
            const status = getItemStatus(i)
            return status === "complete" || status === "na"
          }).length
          const sectionProgress = section.items.length > 0 
            ? Math.round((sectionComplete / section.items.length) * 100) 
            : 0
          
          return (
            <Card key={section.id} className="border-border/50 overflow-hidden">
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full p-4 flex items-center justify-between hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  {isExpanded ? (
                    <ChevronDown className="h-5 w-5 text-muted-foreground" />
                  ) : (
                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                  )}
                  <div className="text-left">
                    <h3 className="font-semibold">{section.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {sectionComplete}/{section.items.length} items
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Progress value={sectionProgress} className="w-24 h-2" />
                  <Badge 
                    variant="outline" 
                    className={cn(
                      "text-xs",
                      sectionProgress === 100 && "border-accent text-accent",
                      sectionProgress >= 50 && sectionProgress < 100 && "border-amber-500 text-amber-500",
                      sectionProgress < 50 && "border-muted-foreground"
                    )}
                  >
                    {sectionProgress}%
                  </Badge>
                </div>
              </button>
              
              {isExpanded && (
                <CardContent className="pt-0 pb-4 border-t">
                  <div className="space-y-2 mt-4">
                    {section.items.map((item) => {
                      const status = getItemStatus(item)
                      return (
                        <div
                          key={item.id}
                          className={cn(
                            "flex items-start gap-3 p-3 rounded-lg transition-colors cursor-pointer hover:bg-muted/50",
                            status === "complete" && "bg-accent/5",
                            status === "partial" && "bg-amber-500/5"
                          )}
                          onClick={() => cycleStatus(item.id, status)}
                        >
                          <StatusIcon status={status} />
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-2">
                              <p className={cn(
                                "text-sm",
                                status === "complete" && "text-muted-foreground line-through",
                                status === "na" && "text-muted-foreground"
                              )}>
                                <span className="font-mono text-xs text-muted-foreground mr-2">
                                  {item.number}
                                </span>
                                {item.text}
                              </p>
                              <Badge 
                                variant="outline" 
                                className={cn(
                                  "text-xs shrink-0",
                                  status === "complete" && "border-accent/50 text-accent",
                                  status === "partial" && "border-amber-500/50 text-amber-500",
                                  status === "na" && "border-muted-foreground/50 text-muted-foreground",
                                  status === "not_started" && "border-muted-foreground/30 text-muted-foreground/50"
                                )}
                              >
                                {status === "complete" && "Complete"}
                                {status === "partial" && "Partial"}
                                {status === "na" && "N/A"}
                                {status === "not_started" && "Not Started"}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </CardContent>
              )}
            </Card>
          )
        })}
      </div>
      
      {/* Actions */}
      <Card className="border-border/50">
        <CardContent className="p-4 flex flex-wrap gap-3">
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export as PDF
          </Button>
          <Button variant="outline" size="sm">
            <Printer className="h-4 w-4 mr-2" />
            Print Checklist
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
