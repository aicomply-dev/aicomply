"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { ClipboardCheck, CheckCircle2 } from "lucide-react"
import { cn } from "@/lib/utils"
import type { ChecklistItem } from "@/lib/types/standard"

interface ComplianceChecklistProps {
  items: ChecklistItem[]
  title: string
  editable?: boolean
  onItemToggle?: (itemId: string, checked: boolean) => void
  className?: string
}

export function ComplianceChecklist({
  items,
  title,
  editable = false,
  onItemToggle,
  className,
}: ComplianceChecklistProps) {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>(
    items.reduce((acc, item) => ({ ...acc, [item.id]: item.checked }), {})
  )

  const handleToggle = (itemId: string, checked: boolean) => {
    if (!editable) return
    setCheckedItems((prev) => ({ ...prev, [itemId]: checked }))
    onItemToggle?.(itemId, checked)
  }

  const totalItems = items.length
  const completedItems = Object.values(checkedItems).filter(Boolean).length
  const progressPercentage = totalItems > 0 ? (completedItems / totalItems) * 100 : 0

  // Group items by category if available
  const groupedItems = items.reduce((acc, item) => {
    const category = item.category || "General"
    if (!acc[category]) acc[category] = []
    acc[category].push(item)
    return acc
  }, {} as Record<string, ChecklistItem[]>)

  const categories = Object.keys(groupedItems)

  return (
    <Card className={cn("", className)}>
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <CardTitle className="flex items-center gap-2">
            <ClipboardCheck className="h-5 w-5" />
            {title}
          </CardTitle>
          <div className="flex items-center gap-4">
            <Badge
              variant="outline"
              className={cn(
                progressPercentage === 100
                  ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/30"
                  : progressPercentage >= 50
                  ? "bg-amber-500/10 text-amber-600 border-amber-500/30"
                  : "bg-muted"
              )}
            >
              <CheckCircle2 className="mr-1 h-3 w-3" />
              {completedItems}/{totalItems} Complete
            </Badge>
          </div>
        </div>

        {/* Progress bar */}
        <div className="space-y-1 mt-4">
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Progress</span>
            <span>{Math.round(progressPercentage)}%</span>
          </div>
          <Progress value={progressPercentage} className="h-2" />
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {categories.map((category) => (
          <div key={category}>
            {categories.length > 1 && (
              <h4 className="text-sm font-semibold mb-3 text-muted-foreground">
                {category}
              </h4>
            )}
            <div className="space-y-3">
              {groupedItems[category].map((item) => (
                <div
                  key={item.id}
                  className={cn(
                    "flex items-start gap-3 p-3 rounded-lg border transition-colors",
                    checkedItems[item.id]
                      ? "bg-emerald-500/5 border-emerald-500/30"
                      : "bg-muted/30 border-transparent"
                  )}
                >
                  <Checkbox
                    id={item.id}
                    checked={checkedItems[item.id]}
                    onCheckedChange={(checked) =>
                      handleToggle(item.id, checked as boolean)
                    }
                    disabled={!editable}
                    className={cn(
                      "mt-0.5",
                      !editable && "opacity-100 cursor-default"
                    )}
                  />
                  <label
                    htmlFor={item.id}
                    className={cn(
                      "text-sm leading-relaxed",
                      editable && "cursor-pointer",
                      checkedItems[item.id] && "line-through text-muted-foreground"
                    )}
                  >
                    {item.text}
                  </label>
                </div>
              ))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

interface SimpleChecklistProps {
  items: string[]
  title: string
  className?: string
}

export function SimpleChecklist({ items, title, className }: SimpleChecklistProps) {
  const checklistItems: ChecklistItem[] = items.map((text, idx) => ({
    id: `item-${idx}`,
    text,
    checked: false,
  }))

  return (
    <ComplianceChecklist
      items={checklistItems}
      title={title}
      editable={false}
      className={className}
    />
  )
}
