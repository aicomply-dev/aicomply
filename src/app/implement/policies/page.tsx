import Link from "next/link"
import { NavWithAuth } from "@/components/nav-with-auth"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  FileText,
  CheckCircle2,
  Clock,
  AlertCircle,
  Download,
  Eye,
  Edit3,
  History,
  Users,
  Shield,
  Scale,
  Brain,
  Database,
  Lock,
  ArrowRight,
  Plus,
  Search,
  Filter,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { getPolicies, getPolicyStats } from "@/lib/actions/policies"

// Map icons to policy categories
const categoryIcons: Record<string, typeof Shield> = {
  governance: Shield,
  risk: AlertCircle,
  ethics: Scale,
  data: Database,
  technical: Brain,
  security: Lock,
  procurement: Users,
  operations: AlertCircle,
}

export default async function PoliciesPage() {
  const [policies, stats] = await Promise.all([
    getPolicies(),
    getPolicyStats(),
  ])

  // Add icon to each policy
  const policiesWithIcons = policies.map(p => ({
    ...p,
    icon: (p.category && categoryIcons[p.category]) || FileText,
  }))

  return (
    <div className="flex min-h-screen flex-col">
      <NavWithAuth />

      <main className="flex-1">
        <PageHeader
          badge="Policy Framework"
          title="AI Governance Policies"
          description="Manage your organization's AI policies, standards, and governance documentation."
          color="amber"
        />

        {/* Stats Overview */}
        <section className="border-b border-border/50 py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              <Card className="border-border/50 bg-gradient-to-br from-muted/50 to-transparent">
                <CardContent className="flex items-center gap-4 p-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-foreground/5">
                    <FileText className="h-6 w-6 text-foreground" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold">{stats.total}</p>
                    <p className="text-sm text-muted-foreground">Total Policies</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-accent/30 bg-gradient-to-br from-accent/5 to-transparent">
                <CardContent className="flex items-center gap-4 p-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                    <CheckCircle2 className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-accent">{stats.approved}</p>
                    <p className="text-sm text-muted-foreground">Approved</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/30 bg-gradient-to-br from-primary/5 to-transparent">
                <CardContent className="flex items-center gap-4 p-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-primary">{stats.inReview}</p>
                    <p className="text-sm text-muted-foreground">In Review</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-chart-3/30 bg-gradient-to-br from-chart-3/5 to-transparent">
                <CardContent className="flex items-center gap-4 p-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-chart-3/10">
                    <Edit3 className="h-6 w-6 text-chart-3" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-chart-3">{stats.draft}</p>
                    <p className="text-sm text-muted-foreground">Draft</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-chart-5/30 bg-gradient-to-br from-chart-5/5 to-transparent">
                <CardContent className="flex items-center gap-4 p-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-chart-5/10">
                    <Shield className="h-6 w-6 text-chart-5" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-chart-5">{stats.avgCompleteness}%</p>
                    <p className="text-sm text-muted-foreground">Avg. Complete</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Policies Grid */}
        <section className="py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Actions Bar */}
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-1 items-center gap-3">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input placeholder="Search policies..." className="pl-10" />
                </div>
                <Button variant="outline" size="icon" className="bg-transparent">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
              <Button className="bg-chart-3 text-foreground shadow-lg shadow-chart-3/25 hover:bg-chart-3/90">
                <Plus className="mr-2 h-4 w-4" />
                Create Policy
              </Button>
            </div>

            {policies.length === 0 ? (
              <Card className="border-dashed">
                <CardContent className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted mb-4">
                    <FileText className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold">No Policies Yet</h3>
                  <p className="mt-1 text-muted-foreground max-w-sm">
                    Create your first AI governance policy to establish your compliance framework.
                  </p>
                  <div className="mt-6">
                    <Button className="gap-2 bg-chart-3 text-foreground shadow-lg shadow-chart-3/25">
                      <Plus className="h-4 w-4" />
                      Create Policy
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Tabs defaultValue="all" className="space-y-6">
                <TabsList className="grid w-full max-w-md grid-cols-4 p-1">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="approved">Approved</TabsTrigger>
                  <TabsTrigger value="in_review">In Review</TabsTrigger>
                  <TabsTrigger value="draft">Draft</TabsTrigger>
                </TabsList>

                {["all", "approved", "in_review", "draft"].map((status) => (
                  <TabsContent key={status} value={status} className="space-y-0">
                    <div className="grid gap-6 md:grid-cols-2">
                      {policiesWithIcons
                        .filter((p) => status === "all" || p.status === status)
                        .map((policy) => {
                          const Icon = policy.icon
                          return (
                            <Card
                              key={policy.id}
                              className={cn(
                                "group relative overflow-hidden transition-all hover:shadow-xl",
                                policy.status === "approved" && "border-accent/20 hover:border-accent/40",
                                policy.status === "in_review" && "border-primary/20 hover:border-primary/40",
                                policy.status === "draft" && "border-chart-3/20 hover:border-chart-3/40",
                              )}
                            >
                              {/* Completeness bar */}
                              <div className="absolute inset-x-0 top-0 h-1 bg-muted">
                                <div
                                  className={cn(
                                    "h-full transition-all",
                                    policy.status === "approved" && "bg-accent",
                                    policy.status === "in_review" && "bg-primary",
                                    policy.status === "draft" && "bg-chart-3",
                                  )}
                                  style={{ width: `${policy.completeness || 0}%` }}
                                />
                              </div>

                              <CardHeader className="pb-3">
                                <div className="flex items-start justify-between">
                                  <div className="flex items-center gap-3">
                                    <div
                                      className={cn(
                                        "flex h-10 w-10 items-center justify-center rounded-xl",
                                        policy.status === "approved" && "bg-accent/10 text-accent",
                                        policy.status === "in_review" && "bg-primary/10 text-primary",
                                        policy.status === "draft" && "bg-chart-3/10 text-chart-3",
                                      )}
                                    >
                                      <Icon className="h-5 w-5" />
                                    </div>
                                    <div>
                                      <div className="flex items-center gap-2">
                                        <CardTitle className="text-base">{policy.title}</CardTitle>
                                        {policy.version && (
                                          <Badge variant="outline" className="text-xs">
                                            v{policy.version}
                                          </Badge>
                                        )}
                                      </div>
                                      <p className="text-xs text-muted-foreground">
                                        {policy.policyNumber || policy.id.slice(0, 8)} • {policy.category}
                                      </p>
                                    </div>
                                  </div>
                                  <Badge
                                    className={cn(
                                      "capitalize",
                                      policy.status === "approved" && "bg-accent/10 text-accent border-accent/30",
                                      policy.status === "in_review" && "bg-primary/10 text-primary border-primary/30",
                                      policy.status === "draft" && "bg-chart-3/10 text-chart-3 border-chart-3/30",
                                    )}
                                    variant="outline"
                                  >
                                    {policy.status.replace("_", " ")}
                                  </Badge>
                                </div>
                              </CardHeader>

                              <CardContent className="space-y-4">
                                <CardDescription className="line-clamp-2">{policy.description}</CardDescription>

                                <div className="grid grid-cols-2 gap-4 text-sm">
                                  <div>
                                    <p className="text-muted-foreground">Owner</p>
                                    <p className="font-medium">{policy.owner || "—"}</p>
                                  </div>
                                  <div>
                                    <p className="text-muted-foreground">Last Updated</p>
                                    <p className="font-medium">
                                      {policy.updatedAt ? new Date(policy.updatedAt).toLocaleDateString() : "—"}
                                    </p>
                                  </div>
                                  <div>
                                    <p className="text-muted-foreground">Sections</p>
                                    <p className="font-medium">{policy.sections || 0}</p>
                                  </div>
                                  <div>
                                    <p className="text-muted-foreground">Review Date</p>
                                    <p className="font-medium">
                                      {policy.reviewDate ? new Date(policy.reviewDate).toLocaleDateString() : "—"}
                                    </p>
                                  </div>
                                </div>

                                <div className="flex items-center justify-between pt-2">
                                  <div className="flex items-center gap-2">
                                    <Progress
                                      value={policy.completeness || 0}
                                      className={cn(
                                        "h-2 w-20",
                                        (policy.completeness || 0) === 100 && "[&>div]:bg-accent",
                                        (policy.completeness || 0) >= 50 && (policy.completeness || 0) < 100 && "[&>div]:bg-primary",
                                        (policy.completeness || 0) < 50 && "[&>div]:bg-chart-3",
                                      )}
                                    />
                                    <span className="text-sm font-medium">{policy.completeness || 0}%</span>
                                  </div>

                                  <div className="flex items-center gap-1">
                                    <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                                      <Link href={`/implement/policies/${policy.id}`}>
                                        <Eye className="h-4 w-4" />
                                      </Link>
                                    </Button>
                                    <Button variant="ghost" size="icon" className="h-8 w-8">
                                      <Download className="h-4 w-4" />
                                    </Button>
                                    <Button variant="ghost" size="icon" className="h-8 w-8">
                                      <History className="h-4 w-4" />
                                    </Button>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          )
                        })}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            )}
          </div>
        </section>

        {/* Policy Templates CTA */}
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Card className="overflow-hidden border-0 bg-gradient-to-br from-chart-3 via-amber-500 to-orange-500 text-white">
              <CardContent className="flex flex-col items-center gap-8 p-8 sm:flex-row sm:p-12">
                <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-white/20 backdrop-blur">
                  <FileText className="h-12 w-12" />
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-2xl font-bold">Need Help Getting Started?</h3>
                  <p className="mt-2 text-white/80">
                    Download our comprehensive policy templates designed specifically for EU AI Act compliance.
                  </p>
                </div>
                <Button size="lg" variant="secondary" className="shadow-xl" asChild>
                  <Link href="/implement/templates">
                    Download Templates
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
