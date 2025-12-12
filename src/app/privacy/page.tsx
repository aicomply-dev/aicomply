import { NavWithAuth } from "@/components/nav-with-auth"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Shield } from "lucide-react"

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <NavWithAuth />

      <main className="flex-1">
        <section className="relative overflow-hidden py-16 sm:py-24">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />

          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4 gap-2 border-primary/30 bg-primary/5 px-4 py-1.5 text-primary">
                <Shield className="h-3.5 w-3.5" />
                Privacy Policy
              </Badge>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Privacy Policy</h1>
              <p className="mt-4 text-muted-foreground">Last updated: December 2024</p>
            </div>

            <div className="prose prose-gray dark:prose-invert max-w-none">
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">About This Project</h2>
                <p className="text-muted-foreground leading-relaxed">
                  AI Comply is an open-source demonstration platform that provides an interpretation of EU AI Act
                  applicability assessment. This project is community-driven and intended for educational and
                  informational purposes only. <strong>This platform does not guarantee regulatory compliance</strong> and
                  should not be used as a substitute for professional legal or compliance advice.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  When you use AI Comply, we may collect the following information:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong>Account Information:</strong> If you create an account, we collect your email address and any profile information you choose to provide.</li>
                  <li><strong>Assessment Data:</strong> Information you input during AI system assessments, including system descriptions, risk classifications, and compliance documentation.</li>
                  <li><strong>Usage Data:</strong> Basic information about how you interact with the platform to improve the user experience.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Your information is used to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Provide and maintain the platform functionality</li>
                  <li>Save your assessment progress and generate compliance documentation</li>
                  <li>Improve the platform based on usage patterns</li>
                  <li>Communicate important updates about the platform or the EU AI Act</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Data Storage & Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  As an open-source project, the data storage depends on your deployment. If you&apos;re using a
                  self-hosted instance, you maintain full control over your data. For any hosted demonstration
                  instances, we implement reasonable security measures to protect your information, but we cannot
                  guarantee absolute security.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Cookies</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  This platform uses the following types of cookies:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                  <li><strong>Essential Cookies:</strong> Required for authentication and session management. These cookies are necessary for the platform to function and cannot be disabled.</li>
                  <li><strong>Analytics Cookies:</strong> We use Google Analytics to understand how visitors interact with our platform. These cookies collect anonymous usage data to help us improve the user experience.</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>Your Consent:</strong> When you first visit our platform, you will see a cookie consent banner. Analytics cookies are only loaded if you click &quot;Accept&quot;. You can change your preference at any time by clearing your browser cookies and revisiting the site.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Google Analytics:</strong> Google Analytics sets cookies to help us analyze traffic patterns. Google may transfer this data to third parties where required by law or for processing on their behalf. For more information, see{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Google&apos;s Privacy Policy
                  </a>.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Third-Party Services</h2>
                <p className="text-muted-foreground leading-relaxed">
                  This platform may integrate with third-party services for authentication or other functionality.
                  Each third-party service has its own privacy policy, and we encourage you to review them.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Depending on your jurisdiction, you may have the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Access the personal data we hold about you</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Export your data in a portable format</li>
                  <li>Withdraw consent for data processing</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Open Source Nature</h2>
                <p className="text-muted-foreground leading-relaxed">
                  AI Comply is released under the MIT License. The source code is publicly available on GitHub,
                  allowing anyone to review, modify, and deploy their own instance. This transparency ensures you
                  can verify exactly how your data is handled.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Changes to This Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  As an evolving open-source project, this privacy policy may be updated from time to time.
                  Significant changes will be communicated through the platform or the project&apos;s GitHub repository.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Contact</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For privacy-related questions or concerns, please open an issue on our{" "}
                  <a
                    href="https://github.com/aicomply-dev/aicomply"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    GitHub repository
                  </a>{" "}
                  or reach out to the project maintainers.
                </p>
              </section>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
