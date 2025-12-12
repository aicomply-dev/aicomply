import Link from "next/link"
import { NavWithAuth } from "@/components/nav-with-auth"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Clock, CheckCircle2, Award, TrendingUp, ArrowRight, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { getModules, getUserModuleProgress, getOverallProgress } from "@/lib/actions/modules"

export default async function ModulesPage() {
  let modules: any[] = []
  try {
    modules = await getModules()
  } catch (err) {
    // If modules cannot be fetched, fall back to empty to show graceful UI
    modules = []
  }

  // Get user progress for all modules
  const userProgressList = await getUserModuleProgress()
  const progressMap = new Map(userProgressList.map(p => [p.moduleId, p]))

  const enhancedModules = modules.map((mod) => {
    const progress = progressMap.get(mod.id)
    const progressPercent = progress?.progress || 0
    let status: "completed" | "in_progress" | "not_started" = "not_started"
    if (progress?.status === "completed") {
      status = "completed"
    } else if (progress?.status === "in_progress" || progressPercent > 0) {
      status = "in_progress"
    }

    return {
      ...mod,
      progress: progressPercent,
      status,
      lessons: mod.chapters.length,
      level: mod.difficulty.charAt(0).toUpperCase() + mod.difficulty.slice(1),
      topics: mod.chapters.map((c: { title: string }) => c.title),
    }
  })

  // Get overall progress stats
  const overallStats = await getOverallProgress()
  const completedCount = overallStats.completedModules
  const totalModules = overallStats.totalModules
  const totalProgress = overallStats.overallProgress
  const totalDuration = modules.reduce((acc, m) => acc + m.duration, 0)
  const completedDuration = enhancedModules
    .filter(m => m.status === "completed")
    .reduce((acc, m) => acc + m.duration, 0)
  const remainingDuration = totalDuration - completedDuration

  const stats = [
    { label: "Total Modules", value: totalModules.toString(), icon: BookOpen, color: "primary" },
    { label: "Completed", value: completedCount.toString(), icon: CheckCircle2, color: "accent" },
    { label: "Hours of Content", value: (totalDuration / 60).toFixed(1), icon: Clock, color: "chart-3" },
    { label: "Certificates", value: completedCount === totalModules ? "1" : "0", icon: Award, color: "chart-5" },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <NavWithAuth />

      <main className="flex-1">
        <PageHeader
          badge="Learning Center"
          title="Learning Modules"
          description="Master the EU AI Act through our comprehensive, self-paced learning modules designed for compliance professionals."
          color="indigo"
        />

        {/* Stats Section */}
        <section className="border-b border-border/50 py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {modules.length === 0 ? (
              <Card className="border-dashed">
                <CardContent className="flex flex-col items-center justify-center py-10 text-center space-y-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                    <BookOpen className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <p className="text-lg font-semibold">No modules available</p>
                  <p className="text-sm text-muted-foreground">
                    Please check back later or refresh to load learning content.
                  </p>
                </CardContent>
              </Card>
            ) : (
              <>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {stats.map((stat) => {
                    const colorMap: Record<string, string> = {
                      primary: "from-primary/5 border-primary/20",
                      accent: "from-accent/5 border-accent/20",
                      "chart-3": "from-chart-3/5 border-chart-3/20",
                      "chart-5": "from-chart-5/5 border-chart-5/20",
                    }
                    const bgClass = colorMap[stat.color] || "from-muted/5 border-border/50"
                    return (
                      <Card
                        key={stat.label}
                        className={cn("bg-gradient-to-br", bgClass)}
                      >
                        <CardContent className="flex items-center gap-4 p-5">
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted">
                            <stat.icon className="h-6 w-6" />
                          </div>
                          <div>
                            <p className="text-3xl font-bold">{stat.value}</p>
                            <p className="text-sm text-muted-foreground">{stat.label}</p>
                          </div>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>

                {/* Overall Progress */}
                <Card className="mt-6 border-primary/20 bg-gradient-to-r from-primary/5 to-transparent">
                  <CardContent className="flex flex-col items-center justify-between gap-6 p-6 sm:flex-row">
                    <div className="flex items-center gap-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/25">
                        <TrendingUp className="h-8 w-8" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Overall Progress</p>
                        <p className="text-2xl font-bold">
                          {completedCount} of {totalModules} modules completed
                        </p>
                      </div>
                    </div>
                    <div className="w-full max-w-sm">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium">{totalProgress}% complete</span>
                        <span className="text-muted-foreground">~{(remainingDuration / 60).toFixed(1)} hours remaining</span>
                      </div>
                      <Progress value={totalProgress} className="mt-2 h-3" />
                    </div>
                  </CardContent>
                </Card>
              </>
            )}
          </div>
        </section>

        {/* Modules Grid */}
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {modules.length === 0 ? (
              <Card className="border-dashed">
                <CardContent className="flex flex-col items-center justify-center py-12 text-center space-y-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                    <BookOpen className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <p className="text-lg font-semibold">No modules to display</p>
                  <p className="text-sm text-muted-foreground">Content will appear once modules are available.</p>
                </CardContent>
              </Card>
            ) : (
              <Tabs defaultValue="all" className="space-y-8">
                <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                  <div>
                    <h2 className="text-2xl font-bold">All Modules</h2>
                    <p className="text-muted-foreground">
                      Complete these modules in order for the best learning experience.
                    </p>
                  </div>
                  <TabsList className="grid grid-cols-4 p-1">
                    <TabsTrigger value="all" className="text-xs sm:text-sm">
                      All
                    </TabsTrigger>
                    <TabsTrigger value="fundamentals" className="text-xs sm:text-sm">
                      Fundamentals
                    </TabsTrigger>
                    <TabsTrigger value="compliance" className="text-xs sm:text-sm">
                      Compliance
                    </TabsTrigger>
                    <TabsTrigger value="specialized" className="text-xs sm:text-sm">
                      Specialized
                    </TabsTrigger>
                  </TabsList>
                </div>

                {["all", "fundamentals", "compliance", "specialized"].map((category) => {
                  const filteredModules = enhancedModules.filter((m) => category === "all" || m.category === category)
                  if (filteredModules.length === 0) {
                    return (
                      <TabsContent key={category} value={category} className="space-y-4">
                        <Card className="border-dashed">
                          <CardContent className="flex flex-col items-center justify-center py-10 text-center space-y-2">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                              <BookOpen className="h-6 w-6 text-muted-foreground" />
                            </div>
                            <p className="text-sm font-semibold">No modules in this category</p>
                            <p className="text-xs text-muted-foreground">Select a different tab to continue learning.</p>
                          </CardContent>
                        </Card>
                      </TabsContent>
                    )
                  }

                  return (
                    <TabsContent key={category} value={category} className="space-y-0">
                      <div className="grid gap-6 md:grid-cols-2">
                        {filteredModules.map((module) => (
                          <Card
                            key={module.id}
                            className={cn(
                              "group relative overflow-hidden transition-all hover:shadow-xl hover:border-primary/30",
                              module.status === "completed" &&
                                "border-accent/30 bg-gradient-to-br from-accent/5 to-transparent",
                              module.status === "in_progress" &&
                                "border-primary/30 bg-gradient-to-br from-primary/5 to-transparent",
                            )}
                          >
                            {/* Progress bar at top */}
                            <div className="absolute inset-x-0 top-0 h-1 bg-muted">
                              <div
                                className={cn(
                                  "h-full transition-all",
                                  module.status === "completed" ? "bg-accent" : "bg-primary",
                                )}
                                style={{ width: `${module.progress}%` }}
                              />
                            </div>

                            <CardHeader className="pb-3">
                              <div className="flex items-start justify-between">
                                <div className="flex items-center gap-3">
                                  <div
                                    className={cn(
                                      "flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold",
                                      module.status === "completed" && "bg-accent text-accent-foreground",
                                      module.status === "in_progress" && "bg-primary text-primary-foreground",
                                      module.status === "not_started" && "bg-muted text-muted-foreground",
                                    )}
                                  >
                                    {module.status === "completed" ? (
                                      <CheckCircle2 className="h-5 w-5" />
                                    ) : (
                                      module.order
                                    )}
                                  </div>
                                  <div>
                                    <CardTitle className="text-lg">{module.title}</CardTitle>
                                    <div className="mt-1 flex items-center gap-2">
                                      <Badge variant="secondary" className="text-xs">
                                        {module.level}
                                      </Badge>
                                      <span className="text-xs text-muted-foreground">{module.lessons} lessons</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                  <Clock className="h-4 w-4" />
                                  {module.duration} min
                                </div>
                              </div>
                            </CardHeader>

                            <CardContent className="space-y-4">
                              <CardDescription className="line-clamp-2">{module.description}</CardDescription>

                              <div className="flex flex-wrap gap-1.5">
                                {module.topics.slice(0, 4).map((topic: string) => (
                                  <Badge key={topic} variant="outline" className="text-xs font-normal">
                                    {topic}
                                  </Badge>
                                ))}
                                {module.topics.length > 4 && (
                                  <Badge variant="outline" className="text-xs font-normal">
                                    +{module.topics.length - 4} more
                                  </Badge>
                                )}
                              </div>

                              <div className="flex items-center justify-between pt-2">
                                {module.status === "in_progress" && (
                                  <span className="text-sm font-medium text-primary">{module.progress}% complete</span>
                                )}
                                {module.status === "completed" && (
                                  <span className="flex items-center gap-1.5 text-sm font-medium text-accent">
                                    <CheckCircle2 className="h-4 w-4" />
                                    Completed
                                  </span>
                                )}
                                {module.status === "not_started" && (
                                  <span className="text-sm text-muted-foreground">Ready to start</span>
                                )}

                                <Button
                                  size="sm"
                                  className={cn(
                                    module.status === "completed" && "bg-accent hover:bg-accent/90",
                                  )}
                                  asChild
                                >
                                  <Link href={`/understand/modules/${module.slug}`}>
                                    {module.status === "completed"
                                      ? "Review"
                                      : module.status === "in_progress"
                                        ? "Continue"
                                        : "Start"}
                                    <ChevronRight className="ml-1 h-4 w-4" />
                                  </Link>
                                </Button>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </TabsContent>
                  )
                })}
              </Tabs>
            )}
          </div>
        </section>

        {/* Certification CTA */}
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Card className="overflow-hidden border-0 bg-gradient-to-br from-primary via-primary to-indigo-600 text-primary-foreground">
              <CardContent className="flex flex-col items-center gap-8 p-8 sm:flex-row sm:p-12">
                <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-white/20 backdrop-blur">
                  <Award className="h-12 w-12" />
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-2xl font-bold">Earn Your Certification</h3>
                  <p className="mt-2 text-white/80">
                    Complete all modules and pass the final assessment to receive your EU AI Act Compliance Practitioner
                    certificate.
                  </p>
                </div>
                <Button size="lg" variant="secondary" className="shadow-xl" asChild>
                  <Link href="/assess">
                    {completedCount === totalModules ? "Start Assessment" : "Learn More"}
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
