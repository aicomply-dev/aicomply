import type { Metadata } from 'next'
import Link from 'next/link'
import { Plus, FileText } from 'lucide-react'

import { Breadcrumbs } from '@/components/layout/breadcrumbs'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { getPolicies } from '@/lib/actions/policies'

export const metadata: Metadata = {
  title: 'Policies',
  description: 'Manage your AI governance policies for EU AI Act compliance.',
}

const statusBadge: Record<string, { variant: 'default' | 'secondary' | 'outline' | 'destructive'; label: string }> = {
  draft: { variant: 'secondary', label: 'Draft' },
  in_review: { variant: 'outline', label: 'In Review' },
  approved: { variant: 'default', label: 'Approved' },
  archived: { variant: 'destructive', label: 'Archived' },
}

export default async function PoliciesPage() {
  let policies: Awaited<ReturnType<typeof getPolicies>> = []
  let dbError = false

  try {
    policies = await getPolicies()
  } catch {
    dbError = true
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumbs
        items={[
          { label: 'Implement', href: '/implement' },
          { label: 'Policies' },
        ]}
      />

      <section className="mt-8 mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Policies
          </h1>
          <p className="mt-2 text-muted-foreground">
            Manage your AI governance policies for EU AI Act compliance.
          </p>
        </div>
        <Button asChild>
          <Link href="/implement/policies/new">
            <Plus className="mr-2 h-4 w-4" />
            Create Policy
          </Link>
        </Button>
      </section>

      {dbError ? (
        <Card>
          <CardHeader>
            <CardTitle>Database Not Connected</CardTitle>
            <CardDescription>
              Please configure your database to manage policies.
            </CardDescription>
          </CardHeader>
        </Card>
      ) : policies.length === 0 ? (
        <Card className="border-dashed">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-50 text-purple-600">
              <FileText className="h-6 w-6" />
            </div>
            <CardTitle>No Policies Yet</CardTitle>
            <CardDescription>
              Create your first AI governance policy to document your
              compliance approach.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <Button asChild>
              <Link href="/implement/policies/new">
                <Plus className="mr-2 h-4 w-4" />
                Create First Policy
              </Link>
            </Button>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Last Updated</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {policies.map((p) => {
                const badge = statusBadge[p.status] ?? statusBadge.draft
                return (
                  <TableRow key={p.id}>
                    <TableCell>
                      <Link
                        href={`/implement/policies/${p.id}`}
                        className="font-medium text-blue-600 hover:underline"
                      >
                        {p.title}
                      </Link>
                    </TableCell>
                    <TableCell>
                      <Badge variant={badge.variant}>{badge.label}</Badge>
                    </TableCell>
                    <TableCell className="text-right text-sm text-muted-foreground">
                      {new Date(p.updatedAt).toLocaleDateString()}
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </Card>
      )}
    </div>
  )
}
