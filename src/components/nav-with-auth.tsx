import { Nav } from "./nav-client"
import { UserMenu } from "./user-menu"
import { getSession } from "@/lib/auth/session"

export async function NavWithAuth() {
  const session = await getSession()

  return (
    <Nav
      userMenu={
        <UserMenu user={session?.user || null} />
      }
    />
  )
}