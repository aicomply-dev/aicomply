import type { Metadata } from 'next'
import { Cloud, Container, Server } from 'lucide-react'

import { Breadcrumbs } from '@/components/layout/breadcrumbs'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Self-Hosting Documentation',
  description:
    'Deploy AI Comply on your own infrastructure. Three deployment options: Vercel + Supabase, Docker + Supabase Cloud, or fully self-hosted.',
}

const deploymentOptions = [
  {
    title: 'Vercel + Supabase Cloud',
    description:
      'The quickest path to production. Deploy the Next.js app on Vercel and use Supabase cloud for the database.',
    icon: Cloud,
    difficulty: 'Easy',
    steps: [
      'Fork the repository on GitHub',
      'Create a Supabase project at supabase.com',
      'Run the SQL migration from supabase/migrations/ in the Supabase SQL editor',
      'Import the project in Vercel and connect your GitHub repo',
      'Add environment variables: NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY, SUPABASE_SERVICE_ROLE_KEY',
      'Deploy — Vercel handles builds, CDN, and SSL automatically',
    ],
  },
  {
    title: 'Docker + Supabase Cloud',
    description:
      'Run the application in Docker while using Supabase cloud for managed database, auth, and storage.',
    icon: Container,
    difficulty: 'Moderate',
    steps: [
      'Clone the repository',
      'Create a Supabase project and run the SQL migration',
      'Copy .env.example to .env.local and fill in your Supabase credentials',
      'Build the Docker image: docker build -t aicomply .',
      'Run the container: docker run -p 3000:3000 --env-file .env.local aicomply',
      'Set up a reverse proxy (nginx/Caddy) with SSL for production',
    ],
  },
  {
    title: 'Fully Self-Hosted',
    description:
      'Complete control over your infrastructure. Run both the application and database on your own servers.',
    icon: Server,
    difficulty: 'Advanced',
    steps: [
      'Clone the repository',
      'Deploy Supabase self-hosted using their Docker Compose setup',
      'Run the SQL migration against your local Supabase instance',
      'Configure environment variables pointing to your local Supabase',
      'Build and run the Next.js app: npm run build && npm start',
      'Configure reverse proxy, SSL, backups, and monitoring',
      'Set up automated backups for the PostgreSQL database',
    ],
  },
]

export default function DocsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: 'Documentation' }]} />

      <section className="mt-8 mb-12">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Self-Hosting Documentation
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
          AI Comply is fully open source. Deploy it on your own infrastructure
          with one of the options below.
        </p>
      </section>

      {/* Environment variables */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">
          Required Environment Variables
        </h2>
        <div className="overflow-x-auto rounded-lg border">
          <table className="w-full text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-4 py-2 text-left font-medium">Variable</th>
                <th className="px-4 py-2 text-left font-medium">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="px-4 py-2 font-mono text-xs">NEXT_PUBLIC_SUPABASE_URL</td>
                <td className="px-4 py-2">Your Supabase project URL</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-mono text-xs">NEXT_PUBLIC_SUPABASE_ANON_KEY</td>
                <td className="px-4 py-2">Supabase anonymous (public) key</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-mono text-xs">SUPABASE_SERVICE_ROLE_KEY</td>
                <td className="px-4 py-2">Supabase service role key (server-side only)</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-mono text-xs">NEXT_PUBLIC_SITE_URL</td>
                <td className="px-4 py-2">Your deployment URL (for OAuth redirects)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Deployment options */}
      <section>
        <h2 className="text-xl font-semibold text-slate-900 mb-6">
          Deployment Options
        </h2>
        <div className="grid gap-6 lg:grid-cols-3">
          {deploymentOptions.map((option) => {
            const Icon = option.icon
            return (
              <Card key={option.title} className="flex flex-col">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                      <Icon className="h-5 w-5" />
                    </div>
                    <Badge variant="outline">{option.difficulty}</Badge>
                  </div>
                  <CardTitle className="text-lg">{option.title}</CardTitle>
                  <CardDescription>{option.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ol className="space-y-2">
                    {option.steps.map((s, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-medium">
                          {i + 1}
                        </span>
                        {s}
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>
    </div>
  )
}
