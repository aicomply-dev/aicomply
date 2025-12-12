import { NavWithAuth } from "@/components/nav-with-auth"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Scale } from "lucide-react"

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <NavWithAuth />

      <main className="flex-1">
        <section className="relative overflow-hidden py-16 sm:py-24">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />

          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4 gap-2 border-primary/30 bg-primary/5 px-4 py-1.5 text-primary">
                <Scale className="h-3.5 w-3.5" />
                Terms of Service
              </Badge>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Terms of Service</h1>
              <p className="mt-4 text-muted-foreground">Last updated: December 2024</p>
            </div>

            <div className="prose prose-gray dark:prose-invert max-w-none">
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Acceptance of Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing or using AI Comply, you agree to be bound by these Terms of Service. If you do not
                  agree to these terms, please do not use this platform.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Important Disclaimer</h2>
                <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 mb-4">
                  <p className="text-foreground leading-relaxed font-medium">
                    AI Comply is a demonstration platform providing an interpretation of EU AI Act applicability.
                    This tool is intended for educational and informational purposes only.
                  </p>
                </div>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong>No Guarantee of Compliance:</strong> Using this platform does not guarantee compliance with the EU AI Act or any other regulation.</li>
                  <li><strong>Not Legal Advice:</strong> The information and assessments provided are not legal advice. Always consult qualified legal and compliance professionals for your specific situation.</li>
                  <li><strong>Interpretation May Vary:</strong> Regulatory interpretation can vary. The assessments reflect one interpretation and may not align with official guidance or enforcement decisions.</li>
                  <li><strong>Evolving Regulation:</strong> The EU AI Act and related guidance are subject to change. This platform may not reflect the most current regulatory developments.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Open Source License</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  AI Comply is released under the MIT License. This means:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>You are free to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the software</li>
                  <li>The software is provided &quot;as is&quot;, without warranty of any kind, express or implied</li>
                  <li>The authors or copyright holders shall not be liable for any claim, damages, or other liability</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  The full license text is available in the{" "}
                  <a
                    href="https://github.com/aicomply-dev/aicomply/blob/main/LICENSE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    project repository
                  </a>.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">User Responsibilities</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  When using AI Comply, you agree to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Use the platform for lawful purposes only</li>
                  <li>Provide accurate information when creating accounts or performing assessments</li>
                  <li>Not attempt to compromise the security or availability of the platform</li>
                  <li>Respect the intellectual property rights of others</li>
                  <li>Not misrepresent this platform as providing official compliance certification</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The AI Comply platform, including its source code, is open source under the MIT License.
                  References to the EU AI Act and related regulations are for informational purposes.
                  EU legislation texts are in the public domain. Any third-party content or trademarks
                  remain the property of their respective owners.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Community Contributions</h2>
                <p className="text-muted-foreground leading-relaxed">
                  AI Comply is a collaborative open-source project. By contributing to the project
                  (through code, documentation, or other means), you agree to license your contributions
                  under the same MIT License. We welcome contributions that improve the accuracy and
                  usefulness of the platform.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To the fullest extent permitted by law, the AI Comply project, its contributors, and
                  maintainers shall not be liable for any direct, indirect, incidental, special, consequential,
                  or punitive damages arising from your use of or inability to use the platform, including but
                  not limited to any decisions made based on assessments or information provided by the platform.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">No Warranty</h2>
                <p className="text-muted-foreground leading-relaxed">
                  This platform is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind,
                  either express or implied, including but not limited to warranties of merchantability,
                  fitness for a particular purpose, accuracy, or non-infringement. We do not warrant that
                  the platform will be uninterrupted, secure, or error-free.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Modifications to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these terms at any time. Changes will be posted on this page
                  with an updated revision date. Your continued use of the platform after changes constitutes
                  acceptance of the modified terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These terms shall be governed by and construed in accordance with applicable laws, without
                  regard to conflict of law principles.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Contact</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For questions about these terms, please open an issue on our{" "}
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
