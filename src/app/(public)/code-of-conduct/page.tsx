import type { Metadata } from 'next'

import { Breadcrumbs } from '@/components/layout/breadcrumbs'

export const metadata: Metadata = {
  title: 'Code of Conduct',
  description: 'Code of conduct for the AI Comply open-source community.',
}

export default function CodeOfConductPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: 'Code of Conduct' }]} />

      <article className="prose prose-slate mt-8 max-w-none">
        <h1>Code of Conduct</h1>

        <h2>Our Pledge</h2>
        <p>
          We as members, contributors, and leaders pledge to make participation in
          our community a harassment-free experience for everyone, regardless of age,
          body size, visible or invisible disability, ethnicity, sex characteristics,
          gender identity and expression, level of experience, education,
          socio-economic status, nationality, personal appearance, race, caste,
          colour, religion, or sexual identity and orientation.
        </p>

        <h2>Our Standards</h2>
        <p>Examples of behaviour that contributes to a positive environment:</p>
        <ul>
          <li>Demonstrating empathy and kindness toward other people</li>
          <li>Being respectful of differing opinions, viewpoints, and experiences</li>
          <li>Giving and gracefully accepting constructive feedback</li>
          <li>Accepting responsibility and apologising to those affected by our mistakes</li>
          <li>Focusing on what is best for the overall community</li>
        </ul>

        <p>Examples of unacceptable behaviour:</p>
        <ul>
          <li>The use of sexualised language or imagery, and sexual attention or advances</li>
          <li>Trolling, insulting or derogatory comments, and personal or political attacks</li>
          <li>Public or private harassment</li>
          <li>Publishing others&apos; private information without explicit permission</li>
          <li>Other conduct which could reasonably be considered inappropriate</li>
        </ul>

        <h2>Enforcement</h2>
        <p>
          Community leaders are responsible for clarifying and enforcing our standards
          of acceptable behaviour and will take appropriate and fair corrective action
          in response to any behaviour that they deem inappropriate, threatening,
          offensive, or harmful.
        </p>

        <h2>Attribution</h2>
        <p>
          This Code of Conduct is adapted from the{' '}
          <a
            href="https://www.contributor-covenant.org/version/2/1/code_of_conduct/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contributor Covenant, version 2.1
          </a>
          .
        </p>
      </article>
    </div>
  )
}
