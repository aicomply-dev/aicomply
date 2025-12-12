import { NavWithAuth } from "@/components/nav-with-auth"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { AddAiSystemDialog } from "@/components/add-ai-system-dialog"
import {
  Layers,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Building2,
  Bot,
  TrendingUp,
  Download,
  ChevronRight,
  ArrowRight,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { getAiSystems, getAiSystemStats } from "@/lib/actions/ai-systems"
import Link from "next/link"

export default async function InventoryPage() {
  const [aiSystems, stats] = await Promise.all([
    getAiSystems(),
    getAiSystemStats()
  ])

  const compliantCount = aiSystems.filter(s => s.riskLevel === "minimal" || s.riskLevel === "limited").length
  const avgCompliance = aiSystems.length > 0
    ? Math.round((compliantCount / aiSystems.length) * 100)
    : 0

  return (
    <div className="flex min-h-screen flex-col">
      <NavWithAuth />

      <main className="flex-1">
        <PageHeader
          badge="Step 1: Register"
          title="AI System Inventory"
          description="Catalog, classify, and monitor all AI systems across your organization."
          color="teal"
        />

        {/* Lifecycle Navigation */}
        <section className="border-b border-border/50 py-4 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-sm flex-wrap">
              <Badge variant="outline" className="bg-teal-500/10 text-teal-600 border-teal-500/30">
                Step 1: Register
              </Badge>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
              <Button variant="ghost" size="sm" asChild>
                <Link href="/assess/classification" className="gap-2">
                  Step 2: Classify
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
              <Button variant="ghost" size="sm" asChild>
                <Link href="/assess/requirements" className="gap-2">
                  Step 3: Requirements
                </Link>
              </Button>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
              <Button variant="ghost" size="sm" asChild>
                <Link href="/assess/comply" className="gap-2">
                  Step 4: Comply
                </Link>
              </Button>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
              <Button variant="ghost" size="sm" asChild>
                <Link href="/assess/monitor" className="gap-2">
                  Step 5: Monitor
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Overview */}
        <section className="border-b border-border/50 py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Card className="border-border/50 bg-gradient-to-br from-muted/50 to-transparent">
                <CardContent className="flex items-center gap-4 p-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-foreground/5">
                    <Layers className="h-6 w-6 text-foreground" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold">{stats.total}</p>
                    <p className="text-sm text-muted-foreground">Total Systems</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-destructive/30 bg-gradient-to-br from-destructive/5 to-transparent">
                <CardContent className="flex items-center gap-4 p-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-destructive/10">
                    <AlertTriangle className="h-6 w-6 text-destructive" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-destructive">{stats.highRisk}</p>
                    <p className="text-sm text-muted-foreground">High Risk</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-accent/30 bg-gradient-to-br from-accent/5 to-transparent">
                <CardContent className="flex items-center gap-4 p-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                    <CheckCircle2 className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-accent">{stats.compliant}</p>
                    <p className="text-sm text-muted-foreground">Compliant</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/30 bg-gradient-to-br from-primary/5 to-transparent">
                <CardContent className="flex items-center gap-4 p-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-primary">{avgCompliance}%</p>
                    <p className="text-sm text-muted-foreground">Avg. Compliance</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Inventory Table */}
        <section className="py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Actions Bar */}
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-xl font-bold">All AI Systems</h2>
                <p className="text-sm text-muted-foreground">
                  {aiSystems.length} system{aiSystems.length !== 1 ? "s" : ""} registered
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" className="bg-transparent">
                  <Download className="mr-2 h-4 w-4" />
                  Export
                </Button>
                <AddAiSystemDialog />
              </div>
            </div>

            {aiSystems.length === 0 ? (
              <Card className="border-dashed">
                <CardContent className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted mb-4">
                    <Layers className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold">No AI Systems Yet</h3>
                  <p className="mt-1 text-muted-foreground max-w-sm">
                    Start by adding your first AI system to begin tracking compliance.
                  </p>
                  <div className="mt-6">
                    <AddAiSystemDialog />
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="border-border/50">
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow className="hover:bg-transparent">
                        <TableHead className="w-[300px]">System</TableHead>
                        <TableHead>Department</TableHead>
                        <TableHead>Risk Level</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Category</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {aiSystems.map((system) => (
                        <TableRow key={system.id} className="group cursor-pointer">
                          <TableCell>
                            <Link href={`/assess/inventory/${system.id}`} className="flex items-center gap-3">
                              <div
                                className={cn(
                                  "flex h-10 w-10 items-center justify-center rounded-lg",
                                  system.riskLevel === "high" || system.riskLevel === "prohibited" ? "bg-destructive/10" :
                                  system.riskLevel === "limited" ? "bg-primary/10" :
                                  system.riskLevel === "minimal" ? "bg-accent/10" : "bg-muted"
                                )}
                              >
                                <Bot
                                  className={cn(
                                    "h-5 w-5",
                                    system.riskLevel === "high" || system.riskLevel === "prohibited" ? "text-destructive" :
                                    system.riskLevel === "limited" ? "text-primary" :
                                    system.riskLevel === "minimal" ? "text-accent" : "text-muted-foreground"
                                  )}
                                />
                              </div>
                              <div>
                                <div className="font-medium group-hover:text-primary">{system.name}</div>
                              </div>
                            </Link>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Building2 className="h-4 w-4 text-muted-foreground" />
                              <span className="text-sm">{system.department || "—"}</span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge
                              variant="outline"
                              className={cn(
                                "font-medium capitalize",
                                (system.riskLevel === "high" || system.riskLevel === "prohibited") &&
                                  "border-destructive/50 bg-destructive/10 text-destructive",
                                system.riskLevel === "limited" && "border-primary/50 bg-primary/10 text-primary",
                                system.riskLevel === "minimal" && "border-accent/50 bg-accent/10 text-accent",
                                (!system.riskLevel || system.riskLevel === "unclassified") && "border-muted-foreground/50"
                              )}
                            >
                              {system.riskLevel || "unclassified"}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Badge
                              variant="outline"
                              className={cn(
                                "font-medium capitalize",
                                system.operatorRole === "provider" && "border-purple-500/50 bg-purple-500/10 text-purple-600",
                                system.operatorRole === "deployer" && "border-blue-500/50 bg-blue-500/10 text-blue-600",
                                system.operatorRole === "importer" && "border-amber-500/50 bg-amber-500/10 text-amber-600",
                                system.operatorRole === "distributor" && "border-teal-500/50 bg-teal-500/10 text-teal-600",
                                system.operatorRole === "gpai_provider" && "border-rose-500/50 bg-rose-500/10 text-rose-600",
                                !system.operatorRole && "border-muted-foreground/50"
                              )}
                            >
                              {system.operatorRole?.replace(/_/g, " ") || "—"}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Badge
                              className={cn(
                                "font-medium capitalize",
                                system.status === "active" && "bg-accent/10 text-accent border-accent/30",
                                system.status === "inactive" && "bg-muted text-muted-foreground",
                                system.status === "decommissioned" && "bg-destructive/10 text-destructive border-destructive/30",
                              )}
                              variant="outline"
                            >
                              {system.status === "active" && <CheckCircle2 className="mr-1 h-3 w-3" />}
                              {system.status === "inactive" && <Clock className="mr-1 h-3 w-3" />}
                              {system.status}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <span className="text-sm capitalize">{system.category || "—"}</span>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
