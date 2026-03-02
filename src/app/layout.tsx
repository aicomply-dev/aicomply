import type { Metadata } from "next"
import { Inter } from "next/font/google"

import "@/app/globals.css"
import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aicomply.dev"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AI Comply — EU AI Act Compliance Platform",
    template: "%s | AI Comply",
  },
  description:
    "Open-source platform for EU AI Act compliance. Learn the regulation, classify your AI systems, and implement compliance frameworks with guided tools and resources.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "AI Comply",
    title: "AI Comply — EU AI Act Compliance Platform",
    description:
      "Open-source platform for EU AI Act compliance. Learn, classify, and implement with confidence.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased">
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  )
}
