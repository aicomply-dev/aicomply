/**
 * AI Comply Platform Configuration
 * 
 * This file contains all configurable settings for the platform.
 * Modify these values to customize the platform for your organization.
 */

export interface AIComplyConfig {
  /** Branding settings */
  branding: {
    /** Application name displayed in UI */
    name: string
    /** Short name for mobile/compact views */
    shortName: string
    /** Description for SEO and metadata */
    description: string
    /** Primary brand color (hex) */
    primaryColor: string
    /** Logo path (relative to /public) */
    logo: string
    /** Favicon path (relative to /public) */
    favicon: string
  }
  
  /** Feature flags */
  features: {
    /** Enable user authentication */
    authentication: boolean
    /** Enable multi-tenant organization support */
    multiTenant: boolean
    /** Enable OAuth providers (Google, GitHub) */
    oauthProviders: boolean
    /** Enable analytics tracking */
    analytics: boolean
    /** Enable content customization via database */
    contentCustomization: boolean
    /** Enable API access */
    apiAccess: boolean
  }
  
  /** Default settings */
  defaults: {
    /** Default language/locale */
    language: string
    /** Default timezone */
    timezone: string
    /** Default theme (light, dark, system) */
    theme: 'light' | 'dark' | 'system'
    /** Items per page in lists */
    pageSize: number
  }
  
  /** Content settings */
  content: {
    /** Path to content directory */
    contentDir: string
    /** Enable content caching */
    cacheEnabled: boolean
    /** Cache TTL in seconds */
    cacheTTL: number
  }
  
  /** Security settings */
  security: {
    /** Session duration in hours */
    sessionDuration: number
    /** Enable rate limiting */
    rateLimiting: boolean
    /** Max login attempts before lockout */
    maxLoginAttempts: number
    /** Lockout duration in minutes */
    lockoutDuration: number
  }
  
  /** EU AI Act specific settings */
  euAiAct: {
    /** Key compliance deadlines */
    deadlines: Array<{
      date: string
      event: string
      description: string
    }>
    /** Supported risk levels */
    riskLevels: string[]
    /** Supported operator roles */
    operatorRoles: string[]
  }
}

const config: AIComplyConfig = {
  branding: {
    name: 'AI Comply',
    shortName: 'AIC',
    description: 'Open-source platform for EU AI Act compliance',
    primaryColor: '#3B82F6',
    logo: '/logo.svg',
    favicon: '/favicon.ico',
  },
  
  features: {
    authentication: true,
    multiTenant: true,
    oauthProviders: true,
    analytics: false,
    contentCustomization: true,
    apiAccess: false,
  },
  
  defaults: {
    language: 'en',
    timezone: 'UTC',
    theme: 'system',
    pageSize: 20,
  },
  
  content: {
    contentDir: './content',
    cacheEnabled: true,
    cacheTTL: 3600, // 1 hour
  },
  
  security: {
    sessionDuration: 24, // hours
    rateLimiting: true,
    maxLoginAttempts: 5,
    lockoutDuration: 15, // minutes
  },
  
  euAiAct: {
    deadlines: [
      {
        date: '2025-02-02',
        event: 'Prohibited AI systems ban',
        description: 'Ban on AI systems with unacceptable risk takes effect',
      },
      {
        date: '2025-08-02',
        event: 'GPAI requirements apply',
        description: 'General-purpose AI model requirements become applicable',
      },
      {
        date: '2026-08-02',
        event: 'High-risk AI in Annex III',
        description: 'Requirements for high-risk AI systems in Annex III apply',
      },
      {
        date: '2027-08-02',
        event: 'Full enforcement',
        description: 'Full enforcement of all EU AI Act requirements',
      },
    ],
    riskLevels: ['prohibited', 'high', 'limited', 'minimal', 'unclassified'],
    operatorRoles: ['provider', 'deployer', 'importer', 'distributor', 'gpai_provider'],
  },
}

export default config

/**
 * Helper to get config value with environment variable override
 */
export function getConfigValue<T>(key: string, defaultValue: T): T {
  const envKey = `AICOMPLY_${key.toUpperCase().replace(/\./g, '_')}`
  const envValue = process.env[envKey]
  
  if (envValue !== undefined) {
    // Try to parse as JSON for complex types
    try {
      return JSON.parse(envValue) as T
    } catch {
      return envValue as unknown as T
    }
  }
  
  return defaultValue
}
