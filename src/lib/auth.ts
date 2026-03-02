import { NextAuthOptions } from "next-auth"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import GoogleProvider from "next-auth/providers/google"
import GitHubProvider from "next-auth/providers/github"
import { db } from "@/lib/db"
import { user, account, session as sessionTable, verificationToken, organization } from "@/lib/db/schema"
import { eq } from "drizzle-orm"
import { nanoid } from "nanoid"

const isDev = process.env.NODE_ENV === 'development'

export const authOptions: NextAuthOptions = {
  adapter: DrizzleAdapter(db, {
    usersTable: user,
    accountsTable: account,
    sessionsTable: sessionTable,
    verificationTokensTable: verificationToken,
  }),
  debug: isDev,
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID || "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
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
    async signIn({ user: authUser, account: authAccount }) {
      if (isDev) {
        console.log("SignIn callback:", { provider: authAccount?.provider, email: authUser.email })
      }

      // For OAuth providers, ensure user has an organization
      if (authAccount?.provider !== "credentials") {
        try {
          const existingUser = await db.query.user.findFirst({
            where: eq(user.email, authUser.email!)
          })

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
        } catch (error) {
          if (isDev) {
            console.error('Error in signIn callback:', error)
          }
          // Allow sign-in to continue even if organization creation fails
          return true
        }
      }
      return true
    },
    async jwt({ token, user: authUser, account: authAccount }) {
      if (isDev) {
        console.log("JWT callback:", { hasUser: !!authUser, provider: authAccount?.provider })
      }

      if (authUser) {
        token.userId = authUser.id
        token.email = authUser.email
        token.name = authUser.name
        token.image = authUser.image

        // Fetch organizationId from database
        try {
          const dbUser = await db.query.user.findFirst({
            where: eq(user.email, authUser.email!)
          })
          if (dbUser?.organizationId) {
            token.organizationId = dbUser.organizationId
          }
        } catch (error) {
          if (isDev) {
            console.error('Error fetching user organization:', error)
          }
        }
      }
      return token
    },
    async session({ session: authSession, token }) {
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