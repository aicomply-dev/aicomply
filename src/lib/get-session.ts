export { getSession } from './auth/session'

// Optional auth - returns session or null, never throws
export async function optionalAuth() {
  try {
    const { getSession } = await import('./auth/session')
    return await getSession()
  } catch {
    return null
  }
}
