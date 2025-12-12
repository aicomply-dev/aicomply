"use client"

import { useMemo } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import {
  FolderOpen,
  FileText,
  Download,
  Printer,
  Calendar,
  User,
  Clock,
  Shield,
  CheckCircle2,
  AlertCircle,
  Info,
} from "lucide-react"
import { cn } from "@/lib/utils"

interface RecordSection {
  id: string
  title: string
  fields: RecordField[]
  isSignoff?: boolean
}

interface RecordField {
  id: string
  label: string
  value?: string
  type: "text" | "date" | "signature" | "status" | "table"
  tableData?: { headers: string[], rows: string[][] }
}

interface RecordContentProps {
  content: string
  title: string
}

// Parse markdown record content into structured sections
function parseRecordContent(content: string): {
  metadata: Record<string, string>
  sections: RecordSection[]
} {
  const lines = content.split("\n")
  const metadata: Record<string, string> = {}
  const sections: RecordSection[] = []
  
  let currentSection: RecordSection | null = null
  let currentTable: { headers: string[], rows: string[][] } | null = null
  let inMetadata = true
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim()
    
    // Parse metadata (bold key-value pairs at top)
    const metaMatch = line.match(/^\*\*([^*]+)\*\*:?\s*(.*)$/)
    if (metaMatch && inMetadata) {
      metadata[metaMatch[1].trim()] = metaMatch[2].trim()
      continue
    }
    
    // Detect new section (## heading)
    if (line.match(/^##\s+[A-Z]/)) {
      inMetadata = false
      currentTable = null
      
      const title = line.replace(/^#+\s*/, "")
      const isSignoff = title.toLowerCase().includes("sign") || title.toLowerCase().includes("approval")
      
      currentSection = {
        id: `section-${sections.length}`,
        title,
        fields: [],
        isSignoff,
      }
      sections.push(currentSection)
      continue
    }
    
    // Parse table
    if (line.startsWith("|") && currentSection) {
      const cells = line.split("|").map(c => c.trim()).filter(c => c)
      
      // Check if this is a header row
      if (!currentTable) {
        currentTable = { headers: cells, rows: [] }
        continue
      }
      
      // Skip separator row
      if (!cells[0] || cells[0].includes("---")) {
        continue
      }
      
      // This is a data row
      currentTable.rows.push(cells)
      
      // If it's a simple 2-column table (Field | Entry), convert to fields
      if (currentTable.headers.length === 2) {
        const label = cells[0]?.replace(/^\*\*|\*\*$/g, "") || ""
        const value = cells[1] || ""
        
        if (label) {
          let fieldType: RecordField["type"] = "text"
          
          // Detect field type
          if (label.toLowerCase().includes("date")) {
            fieldType = "date"
          } else if (label.toLowerCase().includes("signature")) {
            fieldType = "signature"
          } else if (value.includes("[ ]")) {
            fieldType = "status"
          }
          
          currentSection.fields.push({
            id: `field-${currentSection.fields.length}`,
            label,
            value,
            type: fieldType,
          })
        }
      } else if (currentTable.headers.length > 2) {
        // Multi-column table - store as table field
        // Only add once when we have all rows
        const existingTableField = currentSection.fields.find(
          f => f.type === "table" && f.tableData?.headers.join() === currentTable?.headers.join()
        )
        
        if (!existingTableField) {
          currentSection.fields.push({
            id: `table-${currentSection.fields.length}`,
            label: "Data Table",
            type: "table",
            tableData: { headers: [...currentTable.headers], rows: [] },
          })
        }
        
        // Update the table field with new row
        const tableField = currentSection.fields.find(
          f => f.type === "table" && f.tableData?.headers.join() === currentTable?.headers.join()
        )
        if (tableField?.tableData) {
          tableField.tableData.rows.push(cells)
        }
      }
    } else if (!line.startsWith("|")) {
      // Reset table when we leave table context
      currentTable = null
    }
  }
  
  return { metadata, sections }
}

export function RecordContent({ content, title }: RecordContentProps) {
  const parsed = useMemo(() => parseRecordContent(content), [content])
  
  return (
    <div className="space-y-6">
      {/* Record Header */}
      <Card className="border-chart-5/30 bg-gradient-to-r from-chart-5/5 to-transparent">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-chart-5/10">
                <FolderOpen className="h-7 w-7 text-chart-5" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Compliance Record</h3>
                <p className="text-sm text-muted-foreground">
                  Official record template for audit and compliance documentation
                </p>
              </div>
            </div>
            <Badge variant="outline" className="border-chart-5/50 text-chart-5 bg-chart-5/10">
              {parsed.metadata["Retention Period"] || "10 years retention"}
            </Badge>
          </div>
        </CardContent>
      </Card>
      
      {/* Metadata Card */}
      {Object.keys(parsed.metadata).length > 0 && (
        <Card className="border-border/50">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <Info className="h-5 w-5 text-muted-foreground" />
              Record Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {Object.entries(parsed.metadata).map(([key, value]) => (
                <div key={key} className="space-y-1">
                  <p className="text-xs text-muted-foreground">{key}</p>
                  <p className="text-sm font-medium">{value || "—"}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
      
      {/* Record Sections */}
      <div className="space-y-6">
        {parsed.sections.map((section) => (
          <Card 
            key={section.id} 
            className={cn(
              "border-border/50",
              section.isSignoff && "border-primary/30 bg-primary/5"
            )}
          >
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                {section.isSignoff ? (
                  <User className="h-5 w-5 text-primary" />
                ) : (
                  <FileText className="h-5 w-5 text-muted-foreground" />
                )}
                <CardTitle className="text-lg">{section.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {section.fields.map((field) => (
                <div key={field.id}>
                  {field.type === "table" && field.tableData ? (
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm border-collapse">
                        <thead>
                          <tr className="bg-muted/50">
                            {field.tableData.headers.map((header, idx) => (
                              <th 
                                key={idx} 
                                className="border border-border p-2 text-left font-medium"
                              >
                                {header}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {field.tableData.rows.length > 0 ? (
                            field.tableData.rows.map((row, rowIdx) => (
                              <tr key={rowIdx} className="hover:bg-muted/30">
                                {row.map((cell, cellIdx) => (
                                  <td key={cellIdx} className="border border-border p-2">
                                    {cell.includes("[ ]") ? (
                                      <div className="flex flex-wrap gap-2">
                                        {cell.split(/\[\s*\]/).filter(Boolean).map((opt, optIdx) => (
                                          <label key={optIdx} className="flex items-center gap-1 text-xs">
                                            <input type="checkbox" className="h-3 w-3" />
                                            {opt.trim()}
                                          </label>
                                        ))}
                                      </div>
                                    ) : (
                                      <Input 
                                        defaultValue={cell} 
                                        className="h-8 text-sm bg-background"
                                        placeholder="Enter value..."
                                      />
                                    )}
                                  </td>
                                ))}
                              </tr>
                            ))
                          ) : (
                            <tr>
                              {field.tableData.headers.map((_, idx) => (
                                <td key={idx} className="border border-border p-2">
                                  <Input 
                                    className="h-8 text-sm bg-background"
                                    placeholder="Enter value..."
                                  />
                                </td>
                              ))}
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                      <label className="text-sm font-medium min-w-[200px]">
                        {field.label}
                      </label>
                      {field.type === "status" && field.value ? (
                        <div className="flex flex-wrap gap-3">
                          {field.value.split(/\[\s*\]/).filter(Boolean).map((opt, idx) => (
                            <label key={idx} className="flex items-center gap-2 text-sm">
                              <input type="checkbox" className="h-4 w-4 rounded" />
                              {opt.trim()}
                            </label>
                          ))}
                        </div>
                      ) : field.type === "signature" ? (
                        <div className="flex-1 border-b-2 border-dashed border-muted-foreground/30 h-8" />
                      ) : field.type === "date" ? (
                        <Input 
                          type="date" 
                          className="flex-1 max-w-[200px] bg-background"
                        />
                      ) : (
                        <Input 
                          defaultValue={field.value?.replace(/\[\s*\][^[]*$/g, "").trim()} 
                          className="flex-1 bg-background"
                          placeholder="Enter value..."
                        />
                      )}
                    </div>
                  )}
                </div>
              ))}
              
              {section.fields.length === 0 && (
                <p className="text-sm text-muted-foreground italic">
                  View the full document for detailed record fields.
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
            <CheckCircle2 className="h-4 w-4 mr-2" />
            Submit Record
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export as PDF
          </Button>
          <Button variant="outline" size="sm">
            <Printer className="h-4 w-4 mr-2" />
            Print Record
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
