import type { Metadata } from 'next'
import Link from 'next/link'
import { Plus, Package } from 'lucide-react'

import { Breadcrumbs } from '@/components/layout/breadcrumbs'
import { AddSystemDialog } from '@/components/dashboard/add-system-dialog'
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

import { getAISystems } from '@/lib/actions/ai-systems'

export const metadata: Metadata = {
  title: 'AI System Inventory',
  description: 'Manage your AI system inventory for EU AI Act compliance.',
}

const riskBadgeColor: Record<string, string> = {
  prohibited: 'bg-red-100 text-red-800',
  high: 'bg-orange-100 text-orange-800',
  limited: 'bg-yellow-100 text-yellow-800',
  minimal: 'bg-green-100 text-green-800',
  unclassified: 'bg-slate-100 text-slate-800',
}

export default async function InventoryPage() {
  let systems: Awaited<ReturnType<typeof getAISystems>> = []
  let dbError = false

  try {
    systems = await getAISystems()
  } catch {
    dbError = true
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumbs
        items={[
          { label: 'Assess', href: '/assess' },
          { label: 'AI System Inventory' },
        ]}
      />

      <section className="mt-8 mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            AI System Inventory
          </h1>
          <p className="mt-2 text-muted-foreground">
            Register and manage your AI systems for EU AI Act compliance.
          </p>
        </div>
        <AddSystemDialog>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add System
          </Button>
        </AddSystemDialog>
      </section>

      {dbError ? (
        <Card>
          <CardHeader>
            <CardTitle>Database Not Connected</CardTitle>
            <CardDescription>
              Please configure your database connection to manage AI systems.
            </CardDescription>
          </CardHeader>
        </Card>
      ) : systems.length === 0 ? (
        <Card className="border-dashed">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600">
              <Package className="h-6 w-6" />
            </div>
            <CardTitle>No AI Systems Registered</CardTitle>
            <CardDescription>
              Add your first AI system to start tracking its compliance status
              under the EU AI Act.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <AddSystemDialog>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add Your First System
              </Button>
            </AddSystemDialog>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Risk Level</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Category</TableHead>
                <TableHead className="text-right">Last Updated</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {systems.map((system) => (
                <TableRow key={system.id}>
                  <TableCell>
                    <Link
                      href={`/assess/inventory/${system.id}`}
                      className="font-medium text-blue-600 hover:underline"
                    >
                      {system.name}
                    </Link>
                  </TableCell>
                  <TableCell>
                    {system.riskLevel ? (
                      <Badge
                        variant="outline"
                        className={
                          riskBadgeColor[system.riskLevel] ?? riskBadgeColor.unclassified
                        }
                      >
                        <span className="capitalize">{system.riskLevel}</span>
                      </Badge>
                    ) : (
                      <span className="text-muted-foreground text-sm">--</span>
                    )}
                  </TableCell>
                  <TableCell>
                    <span className="capitalize text-sm">{system.status}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">
                      {system.category || '--'}
                    </span>
                  </TableCell>
                  <TableCell className="text-right text-sm text-muted-foreground">
                    {new Date(system.updatedAt).toLocaleDateString()}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      )}
    </div>
  )
}
