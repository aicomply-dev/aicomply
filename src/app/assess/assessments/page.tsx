import { redirect } from "next/navigation"

// Redirect to the classification page
// Assessment management has been merged into the classification flow
// Individual assessment results can still be viewed at /assess/assessments/[id]
export default function AssessmentsPage() {
  redirect("/assess/classification")
}
