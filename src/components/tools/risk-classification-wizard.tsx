'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Info,
  ShieldAlert,
  ShieldCheck,
  ShieldX,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface BasicInfo {
  name: string
  description: string
}

type Sector =
  | 'healthcare'
  | 'finance'
  | 'education'
  | 'employment'
  | 'law-enforcement'
  | 'critical-infrastructure'
  | 'general-purpose'
  | 'other'
  | ''

interface ClassificationAnswers {
  biometricIdentification: 'yes' | 'no' | ''
  criticalInfrastructure: 'yes' | 'no' | ''
  educationEmploymentServices: 'yes' | 'no' | ''
  safetyComponent: 'yes' | 'no' | ''
  manipulateBehavior: 'yes' | 'no' | ''
  generalPurposeModel: 'yes' | 'no' | ''
}

type RiskLevel = 'unacceptable' | 'high' | 'limited' | 'minimal'

interface ClassificationResult {
  level: RiskLevel
  triggers: string[]
  articles: string[]
  recommendations: string[]
}

// ---------------------------------------------------------------------------
// Classification questions
// ---------------------------------------------------------------------------

const CLASSIFICATION_QUESTIONS: {
  key: keyof ClassificationAnswers
  question: string
  description: string
  riskImpact: 'prohibited' | 'high' | 'limited'
  article: string
}[] = [
  {
    key: 'manipulateBehavior',
    question:
      'Could this AI system manipulate human behavior or exploit vulnerabilities of specific groups?',
    description:
      'This includes subliminal techniques, exploiting age, disability, or social/economic situation to materially distort behavior in a way likely to cause harm.',
    riskImpact: 'prohibited',
    article: 'Article 5(1)(a-b)',
  },
  {
    key: 'biometricIdentification',
    question:
      'Is the system used for real-time remote biometric identification in publicly accessible spaces?',
    description:
      'Real-time biometric identification systems used by law enforcement in public spaces are prohibited with narrow exceptions.',
    riskImpact: 'prohibited',
    article: 'Article 5(1)(h)',
  },
  {
    key: 'criticalInfrastructure',
    question:
      'Is the system used for managing or operating critical infrastructure?',
    description:
      'AI systems that are safety components of critical infrastructure (energy, transport, water, digital) are classified as high-risk.',
    riskImpact: 'high',
    article: 'Annex III, Area 2',
  },
  {
    key: 'educationEmploymentServices',
    question:
      'Is the system used in education, employment, or access to essential services?',
    description:
      'Systems determining access to education, recruitment, work conditions, or essential public/private services are high-risk.',
    riskImpact: 'high',
    article: 'Annex III, Areas 3-4',
  },
  {
    key: 'safetyComponent',
    question:
      'Is the system a safety component of a product covered by EU harmonisation legislation?',
    description:
      'AI systems that are safety components of products subject to third-party conformity assessment (machinery, medical devices, vehicles, etc.).',
    riskImpact: 'high',
    article: 'Article 6(1)',
  },
  {
    key: 'generalPurposeModel',
    question:
      'Is this a general-purpose AI model or does it interact directly with people?',
    description:
      'Systems that generate content, interact with people, or detect emotions/biometric categories have transparency obligations.',
    riskImpact: 'limited',
    article: 'Article 50',
  },
]

// ---------------------------------------------------------------------------
// Sector options
// ---------------------------------------------------------------------------

const SECTOR_OPTIONS: { value: Sector; label: string }[] = [
  { value: 'healthcare', label: 'Healthcare & Life Sciences' },
  { value: 'finance', label: 'Financial Services' },
  { value: 'education', label: 'Education & Training' },
  { value: 'employment', label: 'Employment & HR' },
  { value: 'law-enforcement', label: 'Law Enforcement & Justice' },
  { value: 'critical-infrastructure', label: 'Critical Infrastructure' },
  { value: 'general-purpose', label: 'General Purpose / Consumer' },
  { value: 'other', label: 'Other' },
]

// ---------------------------------------------------------------------------
// Classification logic
// ---------------------------------------------------------------------------

function classifyRisk(
  answers: ClassificationAnswers,
  sector: Sector,
): ClassificationResult {
  const triggers: string[] = []
  const articles: string[] = []
  let level: RiskLevel = 'minimal'

  // Check prohibited triggers
  if (answers.manipulateBehavior === 'yes') {
    triggers.push('Manipulative or exploitative AI techniques')
    articles.push('Article 5(1)(a-b)')
    level = 'unacceptable'
  }
  if (answers.biometricIdentification === 'yes') {
    triggers.push('Real-time remote biometric identification')
    articles.push('Article 5(1)(h)')
    level = 'unacceptable'
  }

  // Check high-risk triggers (only upgrade if not already prohibited)
  if (level !== 'unacceptable') {
    if (answers.criticalInfrastructure === 'yes') {
      triggers.push('Critical infrastructure management')
      articles.push('Annex III, Area 2')
      level = 'high'
    }
    if (answers.educationEmploymentServices === 'yes') {
      triggers.push('Education, employment, or essential services')
      articles.push('Annex III, Areas 3-4')
      level = 'high'
    }
    if (answers.safetyComponent === 'yes') {
      triggers.push('Safety component of regulated product')
      articles.push('Article 6(1)')
      level = 'high'
    }

    // Sector-based high-risk hints
    if (
      level !== 'high' &&
      ['law-enforcement', 'critical-infrastructure'].includes(sector)
    ) {
      triggers.push(`Sector commonly associated with high-risk use cases (${sector})`)
      articles.push('Annex III')
      level = 'high'
    }
  }

  // Check limited-risk triggers
  if (level === 'minimal') {
    if (answers.generalPurposeModel === 'yes') {
      triggers.push('Transparency obligations for user-facing AI')
      articles.push('Article 50')
      level = 'limited'
    }
  }

  // Build recommendations based on level
  const recommendations = getRecommendations(level)

  return { level, triggers, articles: [...new Set(articles)], recommendations }
}

function getRecommendations(level: RiskLevel): string[] {
  switch (level) {
    case 'unacceptable':
      return [
        'This AI system may fall under prohibited practices defined in Article 5.',
        'Immediately consult legal counsel specialized in EU AI Act compliance.',
        'Review whether any of the narrow exceptions in Article 5 apply to your use case.',
        'Consider discontinuing or fundamentally redesigning the system.',
        'Document all findings and prepare for potential regulatory inquiry.',
      ]
    case 'high':
      return [
        'Implement a comprehensive risk management system (Article 9).',
        'Establish a data governance framework meeting Article 10 requirements.',
        'Create detailed technical documentation per Annex IV.',
        'Design and implement human oversight mechanisms (Article 14).',
        'Ensure accuracy, robustness, and cybersecurity (Article 15).',
        'Complete a conformity assessment before market placement.',
        'Register the system in the EU database (Article 71).',
      ]
    case 'limited':
      return [
        'Ensure users know they are interacting with an AI system (Article 50).',
        'If generating content, clearly label it as AI-generated.',
        'Implement appropriate disclosure mechanisms.',
        'Consider following voluntary codes of conduct (Article 95).',
        'Document your transparency measures.',
      ]
    case 'minimal':
      return [
        'No mandatory requirements under the EU AI Act apply.',
        'Consider following voluntary codes of conduct (Article 95).',
        'Implement AI ethics best practices as a competitive advantage.',
        'Monitor regulatory developments for potential changes.',
        'Maintain basic documentation as good practice.',
      ]
  }
}

// ---------------------------------------------------------------------------
// Result display helpers
// ---------------------------------------------------------------------------

const RISK_CONFIG: Record<
  RiskLevel,
  {
    label: string
    color: string
    bgColor: string
    borderColor: string
    icon: typeof ShieldX
    description: string
  }
> = {
  unacceptable: {
    label: 'Unacceptable Risk',
    color: 'text-red-700',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200',
    icon: ShieldX,
    description:
      'This AI system likely falls under prohibited practices. These systems cannot be placed on the EU market.',
  },
  high: {
    label: 'High Risk',
    color: 'text-orange-700',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
    icon: ShieldAlert,
    description:
      'This AI system is subject to extensive compliance requirements before it can be placed on or used in the EU market.',
  },
  limited: {
    label: 'Limited Risk',
    color: 'text-yellow-700',
    bgColor: 'bg-yellow-50',
    borderColor: 'border-yellow-200',
    icon: AlertTriangle,
    description:
      'This AI system has specific transparency obligations. Users must be informed they are interacting with AI.',
  },
  minimal: {
    label: 'Minimal Risk',
    color: 'text-green-700',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    icon: ShieldCheck,
    description:
      'This AI system has no mandatory requirements under the EU AI Act. Voluntary codes of conduct are encouraged.',
  },
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

const TOTAL_STEPS = 4

export function RiskClassificationWizard() {
  const [step, setStep] = useState(1)
  const [basicInfo, setBasicInfo] = useState<BasicInfo>({
    name: '',
    description: '',
  })
  const [sector, setSector] = useState<Sector>('')
  const [answers, setAnswers] = useState<ClassificationAnswers>({
    biometricIdentification: '',
    criticalInfrastructure: '',
    educationEmploymentServices: '',
    safetyComponent: '',
    manipulateBehavior: '',
    generalPurposeModel: '',
  })
  const [result, setResult] = useState<ClassificationResult | null>(null)

  const progress = (step / TOTAL_STEPS) * 100

  function canProceed(): boolean {
    switch (step) {
      case 1:
        return basicInfo.name.trim().length > 0
      case 2:
        return sector !== ''
      case 3:
        return Object.values(answers).every((a) => a !== '')
      default:
        return true
    }
  }

  function handleNext() {
    if (step === 3) {
      // Calculate result
      setResult(classifyRisk(answers, sector))
      setStep(4)
    } else if (step < TOTAL_STEPS) {
      setStep(step + 1)
    }
  }

  function handleBack() {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  function handleReset() {
    setStep(1)
    setBasicInfo({ name: '', description: '' })
    setSector('')
    setAnswers({
      biometricIdentification: '',
      criticalInfrastructure: '',
      educationEmploymentServices: '',
      safetyComponent: '',
      manipulateBehavior: '',
      generalPurposeModel: '',
    })
    setResult(null)
  }

  return (
    <div className="mx-auto max-w-3xl">
      {/* Progress */}
      <div className="mb-8">
        <div className="mb-2 flex items-center justify-between text-sm text-muted-foreground">
          <span>
            Step {step} of {TOTAL_STEPS}
          </span>
          <span>{Math.round(progress)}% complete</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      {/* Step 1: Basic Info */}
      {step === 1 && (
        <Card>
          <CardHeader>
            <CardTitle>Basic Information</CardTitle>
            <CardDescription>
              Tell us about the AI system you want to classify.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="system-name">AI System Name</Label>
              <Input
                id="system-name"
                placeholder="e.g. Customer Support Chatbot"
                value={basicInfo.name}
                onChange={(e) =>
                  setBasicInfo({ ...basicInfo, name: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="system-description">
                Brief Description{' '}
                <span className="text-muted-foreground">(optional)</span>
              </Label>
              <Textarea
                id="system-description"
                placeholder="Describe what this AI system does and who uses it..."
                rows={3}
                value={basicInfo.description}
                onChange={(e) =>
                  setBasicInfo({ ...basicInfo, description: e.target.value })
                }
              />
            </div>
          </CardContent>
          <CardFooter className="justify-end">
            <Button onClick={handleNext} disabled={!canProceed()}>
              Next <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      )}

      {/* Step 2: Sector */}
      {step === 2 && (
        <Card>
          <CardHeader>
            <CardTitle>System Purpose &amp; Sector</CardTitle>
            <CardDescription>
              Select the primary sector or domain where this AI system operates.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <RadioGroup
              value={sector}
              onValueChange={(value) => setSector(value as Sector)}
              className="space-y-3"
            >
              {SECTOR_OPTIONS.map((option) => (
                <div
                  key={option.value}
                  className="flex items-center space-x-3 rounded-lg border p-3 hover:bg-accent"
                >
                  <RadioGroupItem
                    value={option.value}
                    id={`sector-${option.value}`}
                  />
                  <Label
                    htmlFor={`sector-${option.value}`}
                    className="flex-1 cursor-pointer"
                  >
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </CardContent>
          <CardFooter className="justify-between">
            <Button variant="outline" onClick={handleBack}>
              <ArrowLeft className="mr-2 h-4 w-4" /> Back
            </Button>
            <Button onClick={handleNext} disabled={!canProceed()}>
              Next <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      )}

      {/* Step 3: Classification Questions */}
      {step === 3 && (
        <Card>
          <CardHeader>
            <CardTitle>Classification Questions</CardTitle>
            <CardDescription>
              Answer each question to determine your AI system&apos;s risk
              level under the EU AI Act.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {CLASSIFICATION_QUESTIONS.map((q) => (
              <div
                key={q.key}
                className="rounded-lg border p-4 space-y-3"
              >
                <div className="flex items-start gap-2">
                  <Info className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
                  <div>
                    <p className="font-medium text-sm">{q.question}</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {q.description}
                    </p>
                    <Badge variant="outline" className="mt-2 text-xs">
                      {q.article}
                    </Badge>
                  </div>
                </div>
                <RadioGroup
                  value={answers[q.key]}
                  onValueChange={(value) =>
                    setAnswers({ ...answers, [q.key]: value })
                  }
                  className="flex gap-4 pl-6"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="yes"
                      id={`${q.key}-yes`}
                    />
                    <Label htmlFor={`${q.key}-yes`} className="cursor-pointer">
                      Yes
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="no"
                      id={`${q.key}-no`}
                    />
                    <Label htmlFor={`${q.key}-no`} className="cursor-pointer">
                      No
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            ))}
          </CardContent>
          <CardFooter className="justify-between">
            <Button variant="outline" onClick={handleBack}>
              <ArrowLeft className="mr-2 h-4 w-4" /> Back
            </Button>
            <Button onClick={handleNext} disabled={!canProceed()}>
              View Results <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      )}

      {/* Step 4: Results */}
      {step === 4 && result && (
        <div className="space-y-6">
          {(() => {
            const config = RISK_CONFIG[result.level]
            const Icon = config.icon
            return (
              <Card
                className={`border-2 ${config.borderColor}`}
              >
                <CardHeader>
                  <div
                    className={`flex items-center gap-3 ${config.color}`}
                  >
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-full ${config.bgColor}`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">
                        {config.label}
                      </CardTitle>
                      <CardDescription className="mt-1">
                        {basicInfo.name}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">{config.description}</p>

                  {/* Triggers */}
                  {result.triggers.length > 0 && (
                    <div>
                      <h3 className="mb-2 font-semibold text-sm">
                        Classification Triggers
                      </h3>
                      <ul className="space-y-1">
                        {result.triggers.map((trigger) => (
                          <li
                            key={trigger}
                            className="flex items-start gap-2 text-sm"
                          >
                            <span className={config.color}>&#x2022;</span>
                            {trigger}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Relevant articles */}
                  {result.articles.length > 0 && (
                    <div>
                      <h3 className="mb-2 font-semibold text-sm">
                        Relevant EU AI Act References
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {result.articles.map((article) => (
                          <Badge key={article} variant="outline">
                            {article}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Recommendations */}
                  <div>
                    <h3 className="mb-2 font-semibold text-sm">
                      Recommended Next Steps
                    </h3>
                    <ul className="space-y-2">
                      {result.recommendations.map((rec, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
                          {rec}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            )
          })()}

          {/* CTA */}
          <Card className="border-blue-200 bg-blue-50/50">
            <CardContent className="py-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-slate-900">
                  Save this assessment and track compliance
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Create a free account to save your classification results,
                  manage your AI system inventory, and run detailed compliance
                  assessments.
                </p>
                <div className="mt-4 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                  <Button asChild>
                    <Link href="/auth/register">
                      Create Free Account
                    </Link>
                  </Button>
                  <Button variant="outline" onClick={handleReset}>
                    Classify Another System
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
