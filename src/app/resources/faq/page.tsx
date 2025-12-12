import { loadFAQIndex, loadFAQs } from "@/lib/actions/content"
import { FAQClient } from "./faq-client"

export default async function FAQPage() {
  // Load FAQ data from content files (with org override support)
  const [faqIndex, faqs] = await Promise.all([loadFAQIndex(), loadFAQs()])

  return <FAQClient categories={faqIndex.categories} faqs={faqs} />
}
