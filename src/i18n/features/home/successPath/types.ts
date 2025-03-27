// src/i18n/features/home/successPath/types.ts
export interface StepBenefit {
  text: string;
}

export interface Step {
  id: number;
  title: string;
  description: string;
  benefits: string[];
}

export interface SuccessPathTranslations {
  title: string;
  subtitle: string;
  detailsButtonText: string;
  steps: Step[];
} 