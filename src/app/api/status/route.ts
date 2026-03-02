import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { sql } from 'drizzle-orm'

export async function GET() {
  const status = {
    server: 'running',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || 'development',
    version: process.version,
    checks: {
      database: 'unknown',
      environment: 'unknown',
    },
    errors: [] as string[],
  }

  // Check database connection
  try {
    await db.execute(sql`SELECT 1`)
    status.checks.database = 'connected'
  } catch (error) {
    status.checks.database = 'disconnected'
    status.errors.push(`Database error: ${error instanceof Error ? error.message : 'Unknown error'}`)
  }

  // Check required environment variables
  const requiredEnvVars = ['DATABASE_URL', 'NEXTAUTH_SECRET', 'NEXTAUTH_URL']
  const missingEnvVars = requiredEnvVars.filter((varName) => !process.env[varName])
  
  if (missingEnvVars.length === 0) {
    status.checks.environment = 'configured'
  } else {
    status.checks.environment = 'incomplete'
    status.errors.push(`Missing environment variables: ${missingEnvVars.join(', ')}`)
  }

  // Determine overall health
  const isHealthy = 
    status.checks.database === 'connected' && 
    status.checks.environment === 'configured'

  return NextResponse.json(status, {
    status: isHealthy ? 200 : 503,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store, no-cache, must-revalidate',
    },
  })
}
