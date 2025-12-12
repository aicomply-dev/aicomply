"use server"

import { db } from "@/lib/db"
import { user, organization } from "@/lib/db/schema"
import { eq } from "drizzle-orm"
import { hashPassword, verifyPassword, validatePassword } from "@/lib/auth/password"
import { createSession, destroySession } from "@/lib/auth/session"
import { nanoid } from "nanoid"
import { redirect } from "next/navigation"

interface LoginData {
  email: string
  password: string
}

interface RegisterData {
  name: string
  email: string
  password: string
  organizationName: string
}

export async function loginUser(data: LoginData) {
  try {
    const { email, password } = data

    if (!email || !password) {
      return { error: "Email and password are required" }
    }

    // Find user by email
    const dbUser = await db.query.user.findFirst({
      where: eq(user.email, email.toLowerCase()),
    })

    if (!dbUser || !dbUser.passwordHash) {
      return { error: "Invalid email or password" }
    }

    // Verify password
    const isValidPassword = verifyPassword(password, dbUser.passwordHash)
    if (!isValidPassword) {
      return { error: "Invalid email or password" }
    }

    // Update last login
    await db
      .update(user)
      .set({
        lastLoginAt: new Date(),
        updatedAt: new Date()
      })
      .where(eq(user.id, dbUser.id))

    // Create session
    await createSession(dbUser.id, dbUser.email, dbUser.organizationId || "")

    return { success: true }
  } catch (error) {
    console.error("Failed to login user:", error)
    return { error: "An unexpected error occurred" }
  }
}

export async function registerUser(data: RegisterData) {
  try {
    const { name, email, password, organizationName } = data

    if (!name || !email || !password || !organizationName) {
      return { error: "All fields are required" }
    }

    // Validate password strength
    const passwordValidation = validatePassword(password)
    if (!passwordValidation.valid) {
      return { error: passwordValidation.errors.join(". ") }
    }

    const normalizedEmail = email.toLowerCase()

    // Check if user already exists
    const existingUser = await db.query.user.findFirst({
      where: eq(user.email, normalizedEmail),
    })

    if (existingUser) {
      return { error: "A user with this email already exists" }
    }

    // Check if organization already exists
    let orgId: string
    const existingOrg = await db.query.organization.findFirst({
      where: eq(organization.name, organizationName),
    })

    if (existingOrg) {
      orgId = existingOrg.id
    } else {
      // Create new organization
      const newOrgId = nanoid()
      await db.insert(organization).values({
        id: newOrgId,
        name: organizationName,
        slug: organizationName.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, ''),
        createdAt: new Date(),
        updatedAt: new Date(),
      })
      orgId = newOrgId
    }

    // Hash password and create user
    const hashedPassword = hashPassword(password)
    const userId = nanoid()

    await db.insert(user).values({
      id: userId,
      email: normalizedEmail,
      name,
      passwordHash: hashedPassword,
      organizationId: orgId,
    })

    // Create session
    await createSession(userId, normalizedEmail, orgId)

    return { success: true }
  } catch (error) {
    console.error("Failed to register user:", error)
    return { error: "An unexpected error occurred" }
  }
}

export async function logoutUser() {
  try {
    await destroySession()
  } catch (error) {
    console.error("Failed to logout user:", error)
  }

  redirect("/auth/login")
}