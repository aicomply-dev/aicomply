import { redirect } from "next/navigation"
import { getSession } from "@/lib/get-session"

export default async function DashboardPage() {
  const session = await getSession()

  if (!session) {
    redirect("/auth/login")
  }

  // Redirect authenticated users to the main app
  redirect("/")
}
