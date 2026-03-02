export interface TocItem {
  id: string
  text: string
  level: number // 2 or 3
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

/**
 * Extract table-of-contents items from markdown content.
 * Matches ## and ### headings.
 */
export function extractTocItems(content: string): TocItem[] {
  const items: TocItem[] = []
  const lines = content.split('\n')

  for (const line of lines) {
    const h2Match = line.match(/^##\s+(.+)$/)
    const h3Match = line.match(/^###\s+(.+)$/)

    if (h2Match) {
      const text = h2Match[1].replace(/[*_`]/g, '').trim()
      const id = slugify(text)
      items.push({ id, text, level: 2 })
    } else if (h3Match) {
      const text = h3Match[1].replace(/[*_`]/g, '').trim()
      const id = slugify(text)
      items.push({ id, text, level: 3 })
    }
  }

  return items
}
