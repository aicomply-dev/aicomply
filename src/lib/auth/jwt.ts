import { createHmac, timingSafeEqual } from 'crypto'

const getSecret = () => {
  const secret = process.env.JWT_SECRET || process.env.NEXTAUTH_SECRET
  if (!secret && process.env.NODE_ENV === 'production') {
    throw new Error('JWT_SECRET or NEXTAUTH_SECRET environment variable is required in production')
  }
  return secret || 'dev-only-secret-do-not-use-in-production'
}

const secret = getSecret()

interface TokenPayload {
  userId: string
  email: string
  orgId: string
  iat: number
  exp: number
}

function base64UrlEncode(str: string): string {
  return Buffer.from(str)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '')
}

function base64UrlDecode(str: string): string {
  // Add padding back
  str += '='.repeat((4 - str.length % 4) % 4)

  return Buffer.from(str.replace(/-/g, '+').replace(/_/g, '/'), 'base64').toString('utf8')
}

function createSignature(header: string, payload: string): string {
  const data = `${header}.${payload}`
  return createHmac('sha256', secret).update(data).digest('base64url')
}

export async function createToken(payload: { userId: string; email: string; orgId: string }): Promise<string> {
  const header = {
    alg: 'HS256',
    typ: 'JWT'
  }

  const now = Math.floor(Date.now() / 1000)
  const tokenPayload: TokenPayload = {
    ...payload,
    iat: now,
    exp: now + 24 * 60 * 60 // 24 hours
  }

  const encodedHeader = base64UrlEncode(JSON.stringify(header))
  const encodedPayload = base64UrlEncode(JSON.stringify(tokenPayload))
  const signature = createSignature(encodedHeader, encodedPayload)

  return `${encodedHeader}.${encodedPayload}.${signature}`
}

export async function verifyToken(token: string): Promise<TokenPayload | null> {
  try {
    const parts = token.split('.')
    if (parts.length !== 3) return null

    const [headerB64, payloadB64, signature] = parts

    // Verify signature
    const expectedSignature = createSignature(headerB64, payloadB64)
    const tokenSignature = signature

    if (!timingSafeEqual(Buffer.from(expectedSignature), Buffer.from(tokenSignature))) {
      return null
    }

    // Parse payload
    const payload = JSON.parse(base64UrlDecode(payloadB64)) as TokenPayload

    // Check expiration
    const now = Math.floor(Date.now() / 1000)
    if (payload.exp < now) {
      return null
    }

    return payload
  } catch {
    return null
  }
}

export async function refreshToken(token: string): Promise<string | null> {
  const payload = await verifyToken(token)
  if (!payload) return null

  return createToken({
    userId: payload.userId,
    email: payload.email,
    orgId: payload.orgId
  })
}