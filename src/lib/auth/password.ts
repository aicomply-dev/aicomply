import { randomBytes, scryptSync, timingSafeEqual } from 'crypto'

const SALT_LENGTH = 32
const KEY_LENGTH = 64
const SCRYPT_PARAMS = { N: 16384, r: 8, p: 1 }

export function hashPassword(password: string): string {
  const salt = randomBytes(SALT_LENGTH).toString('hex')
  const hash = scryptSync(password, salt, KEY_LENGTH, SCRYPT_PARAMS).toString('hex')
  return `${salt}:${hash}`
}

export function verifyPassword(password: string, hashedPassword: string): boolean {
  const [salt, storedHash] = hashedPassword.split(':')
  
  // Handle legacy SHA-256 hashes (64 char hex without colon)
  if (!storedHash && hashedPassword.length === 64) {
    const { createHash } = require('crypto')
    const legacyHash = createHash('sha256').update(password).digest('hex')
    return legacyHash === hashedPassword
  }
  
  if (!salt || !storedHash) {
    return false
  }
  
  const hash = scryptSync(password, salt, KEY_LENGTH, SCRYPT_PARAMS).toString('hex')
  return timingSafeEqual(Buffer.from(hash), Buffer.from(storedHash))
}

export function validatePassword(password: string): { valid: boolean; errors: string[] } {
  const errors: string[] = []

  if (password.length < 8) {
    errors.push('Password must be at least 8 characters long')
  }

  if (!/[A-Z]/.test(password)) {
    errors.push('Password must contain at least one uppercase letter')
  }

  if (!/[a-z]/.test(password)) {
    errors.push('Password must contain at least one lowercase letter')
  }

  if (!/[0-9]/.test(password)) {
    errors.push('Password must contain at least one number')
  }

  return {
    valid: errors.length === 0,
    errors
  }
}