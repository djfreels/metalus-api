import { Param, Step } from '../../steps/steps.model';

export interface Pipeline {
  id: string;
  name: string;
  steps: PipelineStep[];
  category?: PipelineCategory;
  layout?: object;
}

export interface PipelineStep extends Step {
  stepId: string;
  params: PipelineStepParam[];
  nextStepId?: string;
  executeIfEmpty?: string;
}

export interface PipelineStepParam extends Param {
  value: string;
}

export type PipelineCategory = 'pipeline' | 'step-group';

export interface PipelinesResponse {
  pipelines: Pipeline[];
}

export interface PipelineResponse {
  pipeline: Pipeline;
}

export interface PipelineParameter {
  pipelineId: string;
  parameters: object;
}
