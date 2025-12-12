"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { GoogleAnalytics } from "@/components/google-analytics"
import Link from "next/link"
import { Cookie, X } from "lucide-react"

const CONSENT_KEY = "cookie-consent"
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ""

type ConsentStatus = "pending" | "accepted" | "rejected"

export function CookieConsent() {
  const [consentStatus, setConsentStatus] = useState<ConsentStatus>("pending")
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY)
    if (stored === "accepted") {
      setConsentStatus("accepted")
      setShowBanner(false)
    } else if (stored === "rejected") {
      setConsentStatus("rejected")
      setShowBanner(false)
    } else {
      setShowBanner(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, "accepted")
    setConsentStatus("accepted")
    setShowBanner(false)
  }

  const handleReject = () => {
    localStorage.setItem(CONSENT_KEY, "rejected")
    setConsentStatus("rejected")
    setShowBanner(false)
  }

  return (
    <>
      {/* Only load Google Analytics if consent was given */}
      {consentStatus === "accepted" && GA_MEASUREMENT_ID && (
        <GoogleAnalytics measurementId={GA_MEASUREMENT_ID} />
      )}

      {/* Cookie consent banner */}
      {showBanner && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6">
          <div className="mx-auto max-w-4xl">
            <div className="relative rounded-xl border border-border bg-background/95 p-4 shadow-lg backdrop-blur-sm sm:p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Cookie className="h-5 w-5" />
                </div>

                <div className="flex-1 space-y-2">
                  <h3 className="font-semibold">We value your privacy</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We use cookies to analyze site traffic and improve your experience.
                    By clicking &quot;Accept&quot;, you consent to our use of analytics cookies.
                    You can learn more in our{" "}
                    <Link href="/privacy" className="text-primary hover:underline">
                      Privacy Policy
                    </Link>.
                  </p>
                </div>

                <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleReject}
                    className="order-2 sm:order-1"
                  >
                    Reject
                  </Button>
                  <Button
                    size="sm"
                    onClick={handleAccept}
                    className="order-1 sm:order-2"
                  >
                    Accept
                  </Button>
                </div>

                <button
                  onClick={handleReject}
                  className="absolute right-2 top-2 rounded-md p-1 text-muted-foreground hover:bg-muted hover:text-foreground sm:hidden"
                  aria-label="Close"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
