import { redirect } from "next/navigation"

// Redirect to the classification page with role-determination type
// Role determination has been merged into the classification flow
export default function RolesPage() {
  redirect("/assess/classification?type=role-determination")
}
