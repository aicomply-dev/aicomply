import { redirect } from "next/navigation"

// Redirect to the comply page
// Gap analysis has been renamed to "Comply" for action-focused UX
export default function GapAnalysisPage() {
  redirect("/assess/comply")
}
