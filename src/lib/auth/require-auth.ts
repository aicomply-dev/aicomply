import { getSession } from "./session"
import { redirect } from "next/navigation"

export async function requireAuth() {
  const session = await getSession()

  if (!session) {
    redirect("/auth/login")
  }

  return session
}

export async function optionalAuth() {
  try {
    return await getSession()
  } catch {
    return null
  }
}