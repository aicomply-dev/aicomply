"use client"

import { useMemo } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import {
  FormInput,
  FileText,
  Download,
  Printer,
  Save,
  AlertTriangle,
  CheckCircle2,
  Info,
} from "lucide-react"
import { cn } from "@/lib/utils"

interface FormSection {
  id: string
  title: string
  description?: string
  fields: FormField[]
  isProhibited?: boolean
}

interface FormField {
  id: string
  label: string
  type: "text" | "textarea" | "checkbox" | "radio" | "table"
  options?: string[]
  required?: boolean
  hint?: string
  tableHeaders?: string[]
  tableRows?: string[][]
}

interface FormContentProps {
  content: string
  title: string
}

// Parse markdown form content into structured sections
function parseFormContent(content: string): {
  metadata: Record<string, string>
  purpose: string
  instructions: string[]
  sections: FormSection[]
} {
  const lines = content.split("\n")
  const metadata: Record<string, string> = {}
  let purpose = ""
  const instructions: string[] = []
  const sections: FormSection[] = []
  
  let currentSection: FormSection | null = null
  let inPurpose = false
  let inInstructions = false
  let currentTable: { headers: string[], rows: string[][] } | null = null
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim()
    
    // Parse metadata
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
    
    // Detect new section
    if (line.match(/^##\s+SECTION\s+\d+/i)) {
      inPurpose = false
      inInstructions = false
      currentTable = null
      
      const isProhibited = line.toLowerCase().includes("prohibited")
      currentSection = {
        id: `section-${sections.length}`,
        title: line.replace(/^#+\s*/, "").replace(/SECTION\s+\d+:\s*/i, ""),
        fields: [],
        isProhibited,
      }
      sections.push(currentSection)
      continue
    }
    
    // Detect subsection (### heading)
    if (line.match(/^###\s+\d+\.\d+/) && currentSection) {
      const subsectionTitle = line.replace(/^#+\s*/, "")
      // Add as a label field
      currentSection.fields.push({
        id: `subsection-${currentSection.fields.length}`,
        label: subsectionTitle,
        type: "text",
        hint: lines[i + 1]?.startsWith("*") ? lines[i + 1].replace(/^\*|\*$/g, "") : undefined,
      })
      continue
    }
    
    // Parse table for form fields
    if (line.startsWith("|") && currentSection) {
      const cells = line.split("|").map(c => c.trim()).filter(c => c)
      
      // Check if this is a header row
      if (!currentTable) {
        currentTable = { headers: cells, rows: [] }
        continue
      }
      
      // Skip separator row
      if (cells[0].includes("---")) {
        continue
      }
      
      // This is a data row
      currentTable.rows.push(cells)
      
      // If it looks like a simple Field | Entry table, convert to form fields
      if (currentTable.headers.length === 2 && 
          (currentTable.headers[0].toLowerCase() === "field" || 
           currentTable.headers[1].toLowerCase() === "entry")) {
        // Convert to form field
        const label = cells[0]?.replace(/^\*\*|\*\*$/g, "") || ""
        const value = cells[1] || ""
        
        // Detect field type from value pattern
        let fieldType: FormField["type"] = "text"
        let options: string[] | undefined
        
        if (value.includes("[ ]")) {
          // Checkbox or radio options
          const optionMatches = value.match(/\[\s*\]\s*([^[\]]+)/g)
          if (optionMatches) {
            options = optionMatches.map(o => o.replace(/\[\s*\]\s*/, "").trim())
            fieldType = options.length > 3 ? "checkbox" : "radio"
          }
        }
        
        if (label) {
          currentSection.fields.push({
            id: `field-${currentSection.fields.length}`,
            label,
            type: fieldType,
            options,
          })
        }
      }
    } else {
      // Reset table when we leave table context
      currentTable = null
    }
  }
  
  return { metadata, purpose, instructions, sections }
}

export function FormContent({ content, title }: FormContentProps) {
  const parsed = useMemo(() => parseFormContent(content), [content])
  
  return (
    <div className="space-y-6">
      {/* Form Header */}
      <Card className="border-chart-3/30 bg-gradient-to-r from-chart-3/5 to-transparent">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-chart-3/10">
              <FormInput className="h-7 w-7 text-chart-3" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Interactive Form</h3>
              <p className="text-sm text-muted-foreground">
                Fill out this form to document your compliance activities
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Purpose & Instructions */}
      {(parsed.purpose || parsed.instructions.length > 0) && (
        <Card className="border-border/50">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <Info className="h-5 w-5 text-muted-foreground" />
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
      
      {/* Form Sections */}
      <div className="space-y-6">
        {parsed.sections.map((section) => (
          <Card 
            key={section.id} 
            className={cn(
              "border-border/50",
              section.isProhibited && "border-destructive/30 bg-destructive/5"
            )}
          >
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                {section.isProhibited ? (
                  <AlertTriangle className="h-5 w-5 text-destructive" />
                ) : (
                  <FileText className="h-5 w-5 text-muted-foreground" />
                )}
                <CardTitle className={cn(
                  "text-lg",
                  section.isProhibited && "text-destructive"
                )}>
                  {section.title}
                </CardTitle>
              </div>
              {section.isProhibited && (
                <p className="text-sm text-destructive mt-2">
                  If any item in this section is marked "Yes", the AI system is PROHIBITED.
                </p>
              )}
            </CardHeader>
            <CardContent className="space-y-4">
              {section.fields.map((field) => (
                <div key={field.id} className="space-y-2">
                  <Label htmlFor={field.id} className="text-sm font-medium">
                    {field.label}
                    {field.required && <span className="text-destructive ml-1">*</span>}
                  </Label>
                  
                  {field.hint && (
                    <p className="text-xs text-muted-foreground italic">{field.hint}</p>
                  )}
                  
                  {field.type === "text" && !field.options && (
                    <Input 
                      id={field.id} 
                      placeholder="Enter value..."
                      className="bg-background"
                    />
                  )}
                  
                  {field.type === "textarea" && (
                    <Textarea 
                      id={field.id} 
                      placeholder="Enter details..."
                      className="bg-background min-h-[100px]"
                    />
                  )}
                  
                  {field.type === "radio" && field.options && (
                    <div className="flex flex-wrap gap-4">
                      {field.options.map((option, idx) => (
                        <label 
                          key={idx} 
                          className="flex items-center gap-2 text-sm cursor-pointer"
                        >
                          <input 
                            type="radio" 
                            name={field.id} 
                            value={option}
                            className="h-4 w-4"
                          />
                          {option}
                        </label>
                      ))}
                    </div>
                  )}
                  
                  {field.type === "checkbox" && field.options && (
                    <div className="space-y-2">
                      {field.options.map((option, idx) => (
                        <label 
                          key={idx} 
                          className="flex items-center gap-2 text-sm cursor-pointer"
                        >
                          <input 
                            type="checkbox" 
                            value={option}
                            className="h-4 w-4 rounded"
                          />
                          {option}
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {section.fields.length === 0 && (
                <p className="text-sm text-muted-foreground italic">
                  View the full document for detailed form fields.
                </p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Actions */}
      <Card className="border-border/50">
        <CardContent className="p-4 flex flex-wrap gap-3">
          <Button variant="default" size="sm">
            <Save className="h-4 w-4 mr-2" />
            Save Draft
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export as PDF
          </Button>
          <Button variant="outline" size="sm">
            <Printer className="h-4 w-4 mr-2" />
            Print Form
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
