/**
 * Application error types and Result pattern
 * Provides type-safe error handling throughout the application
 */

export class AppError extends Error {
  constructor(
    message: string,
    public code: string,
    public statusCode: number = 500
  ) {
    super(message)
    this.name = "AppError"
    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, AppError)
    }
  }
}

export class ValidationError extends AppError {
  constructor(message: string) {
    super(message, "VALIDATION_ERROR", 400)
    this.name = "ValidationError"
  }
}

export class NotFoundError extends AppError {
  constructor(resource: string) {
    super(`${resource} not found`, "NOT_FOUND", 404)
    this.name = "NotFoundError"
  }
}

export class DatabaseError extends AppError {
  constructor(message: string, public originalError?: unknown) {
    super(message, "DATABASE_ERROR", 500)
    this.name = "DatabaseError"
  }
}

export class UnauthorizedError extends AppError {
  constructor(message: string = "Unauthorized") {
    super(message, "UNAUTHORIZED", 401)
    this.name = "UnauthorizedError"
  }
}

export class ForbiddenError extends AppError {
  constructor(message: string = "Forbidden") {
    super(message, "FORBIDDEN", 403)
    this.name = "ForbiddenError"
  }
}

/**
 * Result type for better error handling
 * Prevents throwing exceptions and makes error handling explicit
 */
export type Result<T, E = AppError> =
  | { success: true; data: T }
  | { success: false; error: E }

/**
 * Helper function to create a success result
 */
export function success<T>(data: T): Result<T, never> {
  return { success: true, data }
}

/**
 * Helper function to create an error result
 */
export function failure<E extends AppError>(error: E): Result<never, E> {
  return { success: false, error }
}

/**
 * Helper to unwrap a result or throw
 * Use with caution - prefer explicit error handling
 */
export function unwrap<T>(result: Result<T>): T {
  if (result.success) {
    return result.data
  }
  throw result.error
}
