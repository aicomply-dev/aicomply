import { loadGlossaryTerms, loadGlossaryCategories } from "@/lib/actions/content"
import { GlossaryClient } from "./glossary-client"

export default async function GlossaryPage() {
  // Load glossary data from content files (with org override support)
  const [terms, categories] = await Promise.all([
    loadGlossaryTerms(),
    loadGlossaryCategories(),
  ])

  return <GlossaryClient terms={terms} categories={categories} />
}
