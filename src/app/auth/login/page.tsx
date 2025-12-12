"use client"

import { useState } from "react"
import { signIn } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2, AlertCircle } from "lucide-react"
import { FaGoogle, FaGithub } from "react-icons/fa"

export default function LoginPage() {
  const [error, setError] = useState("")
  const [oauthLoading, setOauthLoading] = useState<string | null>(null)

  const handleOAuthLogin = async (provider: string) => {
    setOauthLoading(provider)
    setError("")

    try {
      await signIn(provider, {
        callbackUrl: "/dashboard",
      })
    } catch {
      setError(`Failed to sign in with ${provider}`)
      setOauthLoading(null)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-bold">Welcome to AI Comply</CardTitle>
          <CardDescription>
            Sign in to access the EU AI Act compliance platform
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <div className="space-y-3">
            <Button
              variant="outline"
              className="w-full h-12"
              onClick={() => handleOAuthLogin("google")}
              disabled={oauthLoading !== null}
            >
              {oauthLoading === "google" ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <>
                  <FaGoogle className="h-5 w-5 mr-3" />
                  Continue with Google
                </>
              )}
            </Button>
            <Button
              variant="outline"
              className="w-full h-12"
              onClick={() => handleOAuthLogin("github")}
              disabled={oauthLoading !== null}
            >
              {oauthLoading === "github" ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <>
                  <FaGithub className="h-5 w-5 mr-3" />
                  Continue with GitHub
                </>
              )}
            </Button>
          </div>

          <p className="text-xs text-muted-foreground text-center pt-4">
            By signing in, you agree to our Terms of Service and Privacy Policy
          </p>
        </CardContent>
      </Card>
    </div>
  )
}