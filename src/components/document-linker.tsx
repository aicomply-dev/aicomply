"use client"

import React from "react"
import Link from "next/link"
import ReactMarkdown, { Components } from "react-markdown"
import remarkGfm from "remark-gfm"

// Document reference patterns and their URL mappings
const DOCUMENT_PATTERNS: { pattern: RegExp; getUrl: (match: string) => string }[] = [
  // Procedures: PROC-AI-XXX-001 -> /implement/procedures/proc-ai-xxx-001
  {
    pattern: /\b(PROC-AI-[A-Z]+-\d{3})\b/g,
    getUrl: (match) => `/implement/procedures/${match.toLowerCase()}`,
  },
  // Standards: STD-AI-001 -> /implement/standards/std-ai-001
  {
    pattern: /\b(STD-AI-\d{3})\b/g,
    getUrl: (match) => `/implement/standards/${match.toLowerCase()}`,
  },
  // Policies: POL-AI-001 -> /implement/policies/ai-governance-policy (main policy)
  {
    pattern: /\b(POL-AI-001)\b/g,
    getUrl: () => `/implement/policies/ai-governance-policy`,
  },
  // Checklists: CHK-AI-XXX-001 -> /implement/procedures/chk-ai-xxx-001
  {
    pattern: /\b(CHK-AI-[A-Z]+-\d{3})\b/g,
    getUrl: (match) => `/implement/procedures/${match.toLowerCase()}`,
  },
  // Forms: FORM-AI-XXX-001 -> /implement/procedures/form-ai-xxx-001
  {
    pattern: /\b(FORM-AI-[A-Z]+-\d{3})\b/g,
    getUrl: (match) => `/implement/procedures/${match.toLowerCase()}`,
  },
  // Records: REC-AI-XXX-001 -> /implement/procedures/rec-ai-xxx-001
  {
    pattern: /\b(REC-AI-[A-Z]+-\d{3})\b/g,
    getUrl: (match) => `/implement/procedures/${match.toLowerCase()}`,
  },
]

// Combined pattern for all document references
const COMBINED_PATTERN = /\b(PROC-AI-[A-Z]+-\d{3}|STD-AI-\d{3}|POL-AI-\d{3}|CHK-AI-[A-Z]+-\d{3}|FORM-AI-[A-Z]+-\d{3}|REC-AI-[A-Z]+-\d{3})\b/g

function getDocumentUrl(reference: string): string | null {
  for (const { pattern, getUrl } of DOCUMENT_PATTERNS) {
    // Reset lastIndex for global patterns
    pattern.lastIndex = 0
    if (pattern.test(reference)) {
      return getUrl(reference)
    }
  }
  return null
}

// Component to render text with auto-linked document references
function TextWithDocumentLinks({ children }: { children: string }) {
  if (typeof children !== "string") {
    return <>{children}</>
  }

  const parts: React.ReactNode[] = []
  let lastIndex = 0
  let match: RegExpExecArray | null

  // Reset pattern
  COMBINED_PATTERN.lastIndex = 0

  while ((match = COMBINED_PATTERN.exec(children)) !== null) {
    // Add text before match
    if (match.index > lastIndex) {
      parts.push(children.slice(lastIndex, match.index))
    }

    // Add linked reference
    const reference = match[1]
    const url = getDocumentUrl(reference)

    if (url) {
      parts.push(
        <Link
          key={`${reference}-${match.index}`}
          href={url}
          className="text-primary hover:underline font-medium"
        >
          {reference}
        </Link>
      )
    } else {
      parts.push(reference)
    }

    lastIndex = match.index + match[0].length
  }

  // Add remaining text
  if (lastIndex < children.length) {
    parts.push(children.slice(lastIndex))
  }

  return <>{parts}</>
}

// Custom components for ReactMarkdown that auto-link document references
const createLinkedComponents = (): Partial<Components> => ({
  // Override paragraph to process text
  p: ({ children, ...props }) => (
    <p {...props}>
      {React.Children.map(children, (child) => {
        if (typeof child === "string") {
          return <TextWithDocumentLinks>{child}</TextWithDocumentLinks>
        }
        return child
      })}
    </p>
  ),
  // Override list items
  li: ({ children, ...props }) => (
    <li {...props}>
      {React.Children.map(children, (child) => {
        if (typeof child === "string") {
          return <TextWithDocumentLinks>{child}</TextWithDocumentLinks>
        }
        return child
      })}
    </li>
  ),
  // Override table cells
  td: ({ children, ...props }) => (
    <td {...props}>
      {React.Children.map(children, (child) => {
        if (typeof child === "string") {
          return <TextWithDocumentLinks>{child}</TextWithDocumentLinks>
        }
        return child
      })}
    </td>
  ),
  // Override strong/bold
  strong: ({ children, ...props }) => (
    <strong {...props}>
      {React.Children.map(children, (child) => {
        if (typeof child === "string") {
          return <TextWithDocumentLinks>{child}</TextWithDocumentLinks>
        }
        return child
      })}
    </strong>
  ),
})

interface DocumentLinkerProps {
  content: string
  className?: string
}

export function DocumentLinker({ content, className }: DocumentLinkerProps) {
  return (
    <div className={className}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={createLinkedComponents()}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}

// Export utility for checking if a reference exists
export function isValidDocumentReference(reference: string): boolean {
  return COMBINED_PATTERN.test(reference)
}

// Export utility for getting URL from reference
export { getDocumentUrl }
