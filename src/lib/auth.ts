import { NextAuthOptions } from "next-auth"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import GoogleProvider from "next-auth/providers/google"
import GitHubProvider from "next-auth/providers/github"
import { db } from "@/lib/db"
import { user, account, session as sessionTable, verificationToken, organization } from "@/lib/db/schema"
import { eq } from "drizzle-orm"
import { nanoid } from "nanoid"

export const authOptions: NextAuthOptions = {
  // Temporarily disable database adapter to test OAuth flow
  // adapter: DrizzleAdapter(db, {
  //   usersTable: user,
  //   accountsTable: account,
  //   sessionsTable: sessionTable,
  //   verificationTokensTable: verificationToken,
  // }),
  debug: process.env.NODE_ENV === 'development',
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
      allowDangerousEmailAccountLinking: true,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID || "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
      allowDangerousEmailAccountLinking: true,
    }),
  ],
  callbacks: {
    async redirect({ url, baseUrl }) {
      // Handle redirect after sign in
      // If the url is relative, prefix it with the base URL
      if (url.startsWith("/")) return `${baseUrl}${url}`
      // If the url is on the same origin, allow it
      if (new URL(url).origin === baseUrl) return url
      // Default to dashboard
      return `${baseUrl}/dashboard`
    },
    async signIn({ user: authUser, account: authAccount, profile }) {
      console.log("🔍 SignIn callback called:", {
        provider: authAccount?.provider,
        email: authUser.email,
        name: authUser.name
      })

      // For OAuth providers, ensure user has an organization
      if (authAccount?.provider !== "credentials") {
        try {
          const existingUser = await db.query.user.findFirst({
            where: eq(user.email, authUser.email!)
          })

          console.log("🔍 Existing user found:", existingUser ? "Yes" : "No")

          // If user exists but has no organization, create one
          if (existingUser && !existingUser.organizationId) {
            const orgName = authUser.name || authUser.email?.split('@')[0] || 'My Organization'
            const orgId = nanoid()

            await db.insert(organization).values({
              id: orgId,
              name: orgName,
              slug: orgName.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, ''),
              createdAt: new Date(),
              updatedAt: new Date(),
            })

            await db.update(user)
              .set({
                organizationId: orgId,
                updatedAt: new Date()
              })
              .where(eq(user.id, existingUser.id))
          }
          // If user doesn't exist, the adapter will create them,
          // and we'll handle organization creation in the session callback
        } catch (error) {
          console.error('❌ Error in signIn callback:', error)
          // Allow sign-in to continue even if organization creation fails
          return true
        }
      }
      return true
    },
    async jwt({ token, user: authUser, account: authAccount }) {
      console.log("🔍 JWT callback called:", {
        hasToken: !!token,
        hasUser: !!authUser,
        hasAccount: !!authAccount,
        provider: authAccount?.provider
      })

      if (authUser) {
        token.userId = authUser.id
        token.email = authUser.email
        token.name = authUser.name
        token.image = authUser.image

        // Fetch organizationId from database, default to demo-org for demo purposes
        try {
          const dbUser = await db.query.user.findFirst({
            where: eq(user.email, authUser.email!)
          })
          // Use demo-org as default for OAuth users without a user record
          token.organizationId = dbUser?.organizationId || "demo-org"
        } catch {
          token.organizationId = "demo-org"
        }
      }
      return token
    },
    async session({ session: authSession, token }) {
      console.log("🔍 Session callback called:", {
        sessionExists: !!authSession,
        hasToken: !!token
      })

      if (token && authSession.user) {
        authSession.user.id = token.userId as string
        authSession.user.email = token.email as string
        authSession.user.organizationId = token.organizationId as string
      }
      return authSession
    },
  },
  pages: {
    signIn: "/auth/login",
    error: "/auth/error",
  },
}

// Extend the types
declare module "next-auth" {
  interface Session {
    user: {
      id: string
      email: string
      name?: string | null
      image?: string | null
      organizationId: string
    }
  }

  interface User {
    id: string
    email: string
    name?: string | null
    image?: string | null
    organizationId?: string | null
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    userId: string
    organizationId: string
  }
}