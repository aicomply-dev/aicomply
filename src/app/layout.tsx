import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { ErrorBoundary } from "@/components/error-boundary"
import { AuthProvider } from "@/components/providers/auth-provider"
import { CookieConsent } from "@/components/cookie-consent"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

// Get base URL from environment or use default
const getBaseUrl = () => {
  if (process.env.NEXT_PUBLIC_BASE_URL) {
    return process.env.NEXT_PUBLIC_BASE_URL
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`
  }
  return 'https://aicomply.dev' // Default for demo
}

const baseUrl = getBaseUrl()

export const metadata: Metadata = {
  title: "AI Comply - EU AI Act Compliance Platform",
  description: "Navigate AI compliance with confidence. Your complete open-source platform for EU AI Act compliance.",
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: "AI Comply - EU AI Act Compliance Platform",
    description: "Navigate AI compliance with confidence. Your complete open-source platform for EU AI Act compliance.",
    url: baseUrl,
    siteName: 'AI Comply',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "AI Comply - EU AI Act Compliance Platform",
    description: "Navigate AI compliance with confidence. Your complete open-source platform for EU AI Act compliance.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <AuthProvider>
          <ErrorBoundary>
            {children}
          </ErrorBoundary>
          <CookieConsent />
        </AuthProvider>
      </body>
    </html>
  )
}
