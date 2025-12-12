export { RiskPyramidLesson } from "./risk-pyramid-lesson"
export { EuRegulatoryEcosystem } from "./eu-regulatory-ecosystem"
export { TerritorialScope } from "./territorial-scope"
export { AiValueChain } from "./ai-value-chain"
export { AiSystemDefinition } from "./ai-system-definition"
export { AiLifecycle } from "./ai-lifecycle"
export { RiskClassificationFlow } from "./risk-classification-flow"
export { ProhibitedPractices } from "./prohibited-practices"
export { TransparencyFramework } from "./transparency-framework"
export { HumanOversightModels } from "./human-oversight-models"
export { OpenSourceDecisionTree } from "./open-source-decision-tree"
export { ClassificationDecisionFlow } from "./classification-decision-flow"
export { ConformityAssessmentTree } from "./conformity-assessment-tree"
export { PredictivePolicingTree } from "./predictive-policing-tree"

import { RiskPyramidLesson } from "./risk-pyramid-lesson"
import { EuRegulatoryEcosystem } from "./eu-regulatory-ecosystem"
import { TerritorialScope } from "./territorial-scope"
import { AiValueChain } from "./ai-value-chain"
import { AiSystemDefinition } from "./ai-system-definition"
import { AiLifecycle } from "./ai-lifecycle"
import { RiskClassificationFlow } from "./risk-classification-flow"
import { ProhibitedPractices } from "./prohibited-practices"
import { TransparencyFramework } from "./transparency-framework"
import { HumanOversightModels } from "./human-oversight-models"
import { OpenSourceDecisionTree } from "./open-source-decision-tree"
import { ClassificationDecisionFlow } from "./classification-decision-flow"
import { ConformityAssessmentTree } from "./conformity-assessment-tree"
import { PredictivePolicingTree } from "./predictive-policing-tree"

// Map of diagram names to components
export const DIAGRAM_COMPONENTS: Record<string, React.ComponentType> = {
  "risk-pyramid": RiskPyramidLesson,
  "eu-regulatory-ecosystem": EuRegulatoryEcosystem,
  "territorial-scope": TerritorialScope,
  "ai-value-chain": AiValueChain,
  "ai-system-definition": AiSystemDefinition,
  "ai-lifecycle": AiLifecycle,
  "risk-classification-flow": RiskClassificationFlow,
  "prohibited-practices": ProhibitedPractices,
  "transparency-framework": TransparencyFramework,
  "human-oversight-models": HumanOversightModels,
  "open-source-decision-tree": OpenSourceDecisionTree,
  "classification-decision-flow": ClassificationDecisionFlow,
  "conformity-assessment-tree": ConformityAssessmentTree,
  "predictive-policing-tree": PredictivePolicingTree,
}
