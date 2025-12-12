import { Suspense } from "react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { NavWithAuth } from "@/components/nav-with-auth"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Clock,
  FileText,
  BarChart3,
  Calendar,
  User,
  Building2,
  Download,
  RefreshCw,
  Shield,
  Target,
  BookOpen,
  Circle,
  AlertCircle,
  Lightbulb,
  ExternalLink,
  Scale
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { getAssessmentById, getAssessmentSections } from "@/lib/actions/assessments"
import { getAiSystemById } from "@/lib/actions/ai-systems"
import { cn } from "@/lib/utils"

function LoadingSkeleton() {
  return (
    <div className="space-y-6 animate-pulse">
      <div className="h-32 bg-muted rounded-xl" />
      <div className="grid grid-cols-4 gap-4">
        {[1, 2, 3, 4].map(i => (
          <div key={i} className="h-24 bg-muted rounded-xl" />
        ))}
      </div>
      <div className="h-96 bg-muted rounded-xl" />
    </div>
  )
}

function RiskBadge({ level }: { level: string }) {
  const config: Record<string, { label: string; className: string; icon: React.ReactNode }> = {
    prohibited: {
      label: "Prohibited",
      className: "bg-red-500 text-white",
      icon: <XCircle className="h-4 w-4" />
    },
    high: {
      label: "High Risk",
      className: "bg-orange-500 text-white",
      icon: <AlertTriangle className="h-4 w-4" />
    },
    limited: {
      label: "Limited Risk",
      className: "bg-blue-500 text-white",
      icon: <AlertCircle className="h-4 w-4" />
    },
    minimal: {
      label: "Minimal Risk",
      className: "bg-green-500 text-white",
      icon: <CheckCircle2 className="h-4 w-4" />
    },
    unclassified: {
      label: "Unclassified",
      className: "bg-gray-400 text-white",
      icon: <Circle className="h-4 w-4" />
    },
  }

  const levelConfig = config[level] || config.unclassified

  return (
    <Badge className={cn("gap-1", levelConfig.className)}>
      {levelConfig.icon}
      {levelConfig.label}
    </Badge>
  )
}

function ScoreDisplay({ score, label }: { score: number; label?: string }) {
  const getScoreColor = (s: number) => {
    if (s >= 80) return "text-green-600"
    if (s >= 60) return "text-amber-600"
    return "text-red-600"
  }

  const getScoreBg = (s: number) => {
    if (s >= 80) return "bg-green-500"
    if (s >= 60) return "bg-amber-500"
    return "bg-red-500"
  }

  return (
    <div className="flex items-center gap-4">
      <div
        className={cn(
          "h-20 w-20 rounded-full flex items-center justify-center text-3xl font-bold text-white",
          getScoreBg(score)
        )}
      >
        {score}%
      </div>
      {label && (
        <div>
          <p className="text-sm text-muted-foreground">{label}</p>
          <p className={cn("text-lg font-semibold", getScoreColor(score))}>
            {score >= 80 ? "Compliant" : score >= 60 ? "Partial" : "Non-Compliant"}
          </p>
        </div>
      )}
    </div>
  )
}

interface PageProps {
  params: Promise<{ id: string }>
}

async function AssessmentResults({ id }: { id: string }) {
  const assessment = await getAssessmentById(id)

  if (!assessment) {
    notFound()
  }

  const aiSystem = assessment.aiSystemId
    ? await getAiSystemById(assessment.aiSystemId)
    : null

  const sections = await getAssessmentSections()

  // Parse result
  const result = assessment.result || {}
  const answers = assessment.answers || []

  // Group answers by section/category
  const answersBySection: Record<string, typeof answers> = {}
  for (const answer of answers) {
    // Extract section from questionId (e.g., "rm-1" -> "risk-management")
    const prefix = answer.questionId.split("-")[0]
    const sectionMap: Record<string, string> = {
      "pp": "prohibited-practices",
      "hrc": "high-risk-classification",
      "lr": "limited-risk",
      "rm": "risk-management",
      "dg": "data-governance",
      "td": "technical-documentation",
      "rk": "record-keeping",
      "tr": "transparency",
      "ho": "human-oversight",
      "ar": "accuracy-robustness",
      "ca": "conformity-assessment",
    }
    const sectionId = sectionMap[prefix] || "other"
    if (!answersBySection[sectionId]) {
      answersBySection[sectionId] = []
    }
    answersBySection[sectionId].push(answer)
  }

  // Calculate section scores
  const sectionScores: Record<string, { total: number; compliant: number; partial: number; nonCompliant: number }> = {}
  for (const [sectionId, sectionAnswers] of Object.entries(answersBySection)) {
    const total = sectionAnswers.length
    const compliant = sectionAnswers.filter(a => a.answer === "yes" || a.answer === "compliant" || a.answer === "full").length
    const partial = sectionAnswers.filter(a => a.answer === "partial").length
    const nonCompliant = sectionAnswers.filter(a => a.answer === "no" || a.answer === "non-compliant" || a.answer === "none").length

    sectionScores[sectionId] = { total, compliant, partial, nonCompliant }
  }

  // Get gaps (non-compliant answers)
  const gaps = answers.filter(a =>
    a.answer === "no" ||
    a.answer === "non-compliant" ||
    a.answer === "none" ||
    a.answer === "partial"
  )

  return (
    <div className="space-y-8">
      {/* Breadcrumb Navigation */}
      <section className="border-b border-border/50 py-4 bg-muted/30 -mx-6 px-6 -mt-6">
        <div className="flex items-center gap-2 text-sm">
          {aiSystem ? (
            <>
              <Button variant="ghost" size="sm" asChild>
                <Link href={`/assess/inventory/${aiSystem.id}`}>
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to {aiSystem.name}
                </Link>
              </Button>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
              <Badge variant="outline" className="bg-teal-500/10 text-teal-600 border-teal-500/30">
                Assessment Results
              </Badge>
            </>
          ) : (
            <>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/assess/classification">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Assessments
                </Link>
              </Button>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
              <Badge variant="outline" className="bg-teal-500/10 text-teal-600 border-teal-500/30">
                Assessment Results
              </Badge>
            </>
          )}
        </div>
      </section>

      {/* Assessment Header */}
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold tracking-tight">{assessment.title}</h1>
            {assessment.status === "completed" ? (
              <Badge className="bg-green-500 text-white gap-1">
                <CheckCircle2 className="h-4 w-4" />
                Completed
              </Badge>
            ) : (
              <Badge variant="outline" className="gap-1">
                <Clock className="h-4 w-4" />
                {assessment.status === "in_progress" ? "In Progress" : assessment.status}
              </Badge>
            )}
          </div>
          <p className="text-muted-foreground">
            {assessment.type.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase())}
          </p>
          {aiSystem && (
            <div className="flex items-center gap-2 text-sm">
              <Building2 className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">AI System:</span>
              <Link href={`/assess/inventory/${aiSystem.id}`} className="font-medium text-primary hover:underline">
                {aiSystem.name}
              </Link>
            </div>
          )}
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
          <Button variant="outline" size="sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            Re-assess
          </Button>
        </div>
      </div>

      {/* Score and Risk Level Cards */}
      <div className="grid md:grid-cols-4 gap-4">
        <Card className="md:col-span-2">
          <CardContent className="pt-6">
            <div className="flex items-center gap-6">
              <ScoreDisplay score={assessment.score || 0} label="Overall Compliance" />
              <div className="flex-1">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Compliance Progress</span>
                    <span className="font-medium">{assessment.score || 0}%</span>
                  </div>
                  <Progress value={assessment.score || 0} className="h-3" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {result.riskLevel || result.classification ? (
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center justify-center h-full">
                <p className="text-sm font-medium text-muted-foreground mb-2">Risk Classification</p>
                <RiskBadge level={result.riskLevel || result.classification} />
              </div>
            </CardContent>
          </Card>
        ) : null}

        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center justify-center h-full">
              <p className="text-sm font-medium text-muted-foreground mb-2">Questions Answered</p>
              <p className="text-3xl font-bold">{answers.length}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Assessment Metadata */}
      <div className="grid md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6 flex items-center gap-3">
            <Calendar className="h-5 w-5 text-muted-foreground" />
            <div>
              <p className="text-sm text-muted-foreground">Completed</p>
              <p className="font-medium">
                {assessment.completedAt
                  ? new Date(assessment.completedAt).toLocaleDateString()
                  : "—"}
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6 flex items-center gap-3">
            <Clock className="h-5 w-5 text-muted-foreground" />
            <div>
              <p className="text-sm text-muted-foreground">Created</p>
              <p className="font-medium">
                {new Date(assessment.createdAt).toLocaleDateString()}
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6 flex items-center gap-3">
            <AlertTriangle className="h-5 w-5 text-amber-500" />
            <div>
              <p className="text-sm text-muted-foreground">Gaps Found</p>
              <p className="font-medium text-amber-600">{gaps.length}</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6 flex items-center gap-3">
            <Target className="h-5 w-5 text-muted-foreground" />
            <div>
              <p className="text-sm text-muted-foreground">Assessment Type</p>
              <p className="font-medium text-sm">{assessment.type}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="summary" className="space-y-6">
        <TabsList>
          <TabsTrigger value="summary" className="gap-2">
            <BarChart3 className="h-4 w-4" />
            Summary
          </TabsTrigger>
          <TabsTrigger value="sections" className="gap-2">
            <BookOpen className="h-4 w-4" />
            By Section
          </TabsTrigger>
          <TabsTrigger value="gaps" className="gap-2">
            <AlertTriangle className="h-4 w-4" />
            Gaps ({gaps.length})
          </TabsTrigger>
          <TabsTrigger value="all-answers" className="gap-2">
            <FileText className="h-4 w-4" />
            All Answers
          </TabsTrigger>
        </TabsList>

        {/* Summary Tab */}
        <TabsContent value="summary" className="space-y-6">
          {/* Recommendations */}
          {result.recommendations && result.recommendations.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-amber-500" />
                  Recommendations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {result.recommendations.map((rec: string, i: number) => (
                    <li key={i} className="flex items-start gap-3">
                      <ChevronRight className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          {/* Section Breakdown */}
          <Card>
            <CardHeader>
              <CardTitle>Section Breakdown</CardTitle>
              <CardDescription>Compliance status by assessment section</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Object.entries(sectionScores).map(([sectionId, scores]) => {
                  const section = sections.find(s => s.id === sectionId)
                  const complianceRate = scores.total > 0
                    ? Math.round((scores.compliant / scores.total) * 100)
                    : 0

                  return (
                    <div key={sectionId} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">
                          {section?.title || sectionId.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase())}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {scores.compliant}/{scores.total} compliant
                        </span>
                      </div>
                      <Progress value={complianceRate} className="h-2" />
                      <div className="flex gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <CheckCircle2 className="h-3 w-3 text-green-500" />
                          {scores.compliant} Compliant
                        </span>
                        <span className="flex items-center gap-1">
                          <AlertCircle className="h-3 w-3 text-amber-500" />
                          {scores.partial} Partial
                        </span>
                        <span className="flex items-center gap-1">
                          <XCircle className="h-3 w-3 text-red-500" />
                          {scores.nonCompliant} Gap
                        </span>
                      </div>
                    </div>
                  )
                })}

                {Object.keys(sectionScores).length === 0 && (
                  <p className="text-muted-foreground text-center py-4">
                    No section breakdown available
                  </p>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Risk Classification Details */}
          {(result.prohibitedCount !== undefined || result.highRiskCount !== undefined) && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Scale className="h-5 w-5" />
                  Risk Classification Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-lg bg-red-50 border border-red-200">
                    <p className="text-sm text-red-600 mb-1">Prohibited Indicators</p>
                    <p className="text-2xl font-bold text-red-700">{result.prohibitedCount || 0}</p>
                  </div>
                  <div className="p-4 rounded-lg bg-orange-50 border border-orange-200">
                    <p className="text-sm text-orange-600 mb-1">High-Risk Indicators</p>
                    <p className="text-2xl font-bold text-orange-700">{result.highRiskCount || 0}</p>
                  </div>
                  <div className="p-4 rounded-lg bg-blue-50 border border-blue-200">
                    <p className="text-sm text-blue-600 mb-1">Limited Risk Indicators</p>
                    <p className="text-2xl font-bold text-blue-700">{result.limitedRiskCount || 0}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        {/* By Section Tab */}
        <TabsContent value="sections" className="space-y-4">
          <Accordion type="multiple" className="space-y-4">
            {Object.entries(answersBySection).map(([sectionId, sectionAnswers]) => {
              const section = sections.find(s => s.id === sectionId)
              const scores = sectionScores[sectionId]

              return (
                <AccordionItem key={sectionId} value={sectionId} className="border rounded-lg px-4">
                  <AccordionTrigger className="hover:no-underline py-4">
                    <div className="flex items-center justify-between w-full pr-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <BookOpen className="h-5 w-5 text-primary" />
                        </div>
                        <div className="text-left">
                          <p className="font-semibold">
                            {section?.title || sectionId.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase())}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {section?.article || `${sectionAnswers.length} questions`}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">
                          {scores.compliant}/{scores.total} compliant
                        </Badge>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4">
                    <div className="space-y-3">
                      {sectionAnswers.map(answer => (
                        <div
                          key={answer.id}
                          className={cn(
                            "p-3 rounded-lg border",
                            answer.answer === "yes" || answer.answer === "compliant" || answer.answer === "full"
                              ? "border-green-200 bg-green-50"
                              : answer.answer === "partial"
                                ? "border-amber-200 bg-amber-50"
                                : "border-red-200 bg-red-50"
                          )}
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex items-start gap-3">
                              {answer.answer === "yes" || answer.answer === "compliant" || answer.answer === "full" ? (
                                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                              ) : answer.answer === "partial" ? (
                                <AlertCircle className="h-5 w-5 text-amber-600 flex-shrink-0" />
                              ) : (
                                <XCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                              )}
                              <div>
                                <p className="text-sm font-medium">{answer.questionId}</p>
                                {answer.notes && (
                                  <p className="text-sm text-muted-foreground mt-1">{answer.notes}</p>
                                )}
                              </div>
                            </div>
                            <Badge
                              variant="outline"
                              className={cn(
                                answer.answer === "yes" || answer.answer === "compliant" || answer.answer === "full"
                                  ? "border-green-300 text-green-700"
                                  : answer.answer === "partial"
                                    ? "border-amber-300 text-amber-700"
                                    : "border-red-300 text-red-700"
                              )}
                            >
                              {answer.answer}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              )
            })}
          </Accordion>
        </TabsContent>

        {/* Gaps Tab */}
        <TabsContent value="gaps" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-amber-500" />
                Identified Compliance Gaps
              </CardTitle>
              <CardDescription>
                These items require attention to achieve full compliance
              </CardDescription>
            </CardHeader>
            <CardContent>
              {gaps.length === 0 ? (
                <div className="text-center py-8">
                  <CheckCircle2 className="h-12 w-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-green-700">No Gaps Found</h3>
                  <p className="text-muted-foreground">
                    All assessment questions were answered positively.
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {gaps.map(gap => (
                    <div
                      key={gap.id}
                      className="p-4 rounded-lg border border-red-200 bg-red-50"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-3">
                          <XCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                          <div>
                            <p className="font-medium">{gap.questionId}</p>
                            {gap.notes && (
                              <p className="text-sm text-muted-foreground mt-1">{gap.notes}</p>
                            )}
                          </div>
                        </div>
                        <Badge variant="outline" className="border-red-300 text-red-700">
                          {gap.answer}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Link to Gap Analysis */}
          {gaps.length > 0 && (
            <Card className="bg-gradient-to-r from-rose-50 to-orange-50 border-rose-200">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-rose-900">
                      Create Remediation Plan
                    </h3>
                    <p className="text-sm text-rose-700">
                      Generate a detailed gap analysis and remediation roadmap
                    </p>
                  </div>
                  <Button asChild className="bg-rose-600 hover:bg-rose-700">
                    <Link href={`/assess/comply?assessment=${id}`}>
                      Go to Compliance
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        {/* All Answers Tab */}
        <TabsContent value="all-answers" className="space-y-4">
          <div className="border rounded-lg divide-y">
            {answers.map(answer => (
              <div key={answer.id} className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {answer.answer === "yes" || answer.answer === "compliant" || answer.answer === "full" ? (
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                  ) : answer.answer === "partial" ? (
                    <AlertCircle className="h-5 w-5 text-amber-600" />
                  ) : answer.answer === "no" || answer.answer === "non-compliant" || answer.answer === "none" ? (
                    <XCircle className="h-5 w-5 text-red-600" />
                  ) : (
                    <Circle className="h-5 w-5 text-gray-400" />
                  )}
                  <div>
                    <p className="font-medium">{answer.questionId}</p>
                    {answer.notes && (
                      <p className="text-sm text-muted-foreground">{answer.notes}</p>
                    )}
                  </div>
                </div>
                <Badge variant="outline">{answer.answer}</Badge>
              </div>
            ))}

            {answers.length === 0 && (
              <div className="p-8 text-center">
                <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">No answers recorded</p>
              </div>
            )}
          </div>
        </TabsContent>
      </Tabs>

      {/* Next Steps */}
      <Card className="bg-gradient-to-r from-teal-50 to-cyan-50 border-teal-200">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-teal-900">
                View applicable requirements
              </h3>
              <p className="text-sm text-teal-700">
                See all EU AI Act requirements based on this assessment result
              </p>
            </div>
            <Button asChild className="bg-teal-600 hover:bg-teal-700">
              <Link href={aiSystem ? `/assess/requirements/${aiSystem.id}` : "/assess/requirements"}>
                View Requirements
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default async function AssessmentResultsPage({ params }: PageProps) {
  const { id } = await params

  return (
    <div className="flex min-h-screen flex-col">
      <NavWithAuth />
      <main className="flex-1">
        <PageHeader
          badge="Assessment Results"
          title="Assessment Results"
          description="Review detailed compliance assessment findings and recommendations."
          color="teal"
        />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <Suspense fallback={<LoadingSkeleton />}>
            <AssessmentResults id={id} />
          </Suspense>
        </div>
      </main>
      <Footer />
    </div>
  )
}
