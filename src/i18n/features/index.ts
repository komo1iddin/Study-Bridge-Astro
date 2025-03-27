import { partnersTranslations, getPartnersTranslations } from './home/partners';
import { successPathTranslations, getSuccessPathTranslations } from './home/successPath';
import { heroTranslations, getHeroTranslations } from './home/hero';
import { whyTranslations, getWhyTranslations } from './home/whyChina';
import { missionStatsTranslations, getMissionStatsTranslations } from './home/missionStats';
import type { PartnersTranslations } from './home/partners';
import type { SuccessPathTranslations, Step, StepBenefit } from './home/successPath';
import type { HeroTranslations } from './home/hero';
import type { WhyTranslations, ReasonItem } from './home/whyChina';
import type { MissionStatsTranslations, StatItem, AdvantageItem } from './home/missionStats';
import type { Lang } from '@/i18n/langUtils';

// Re-export types
export type {
  PartnersTranslations,
  SuccessPathTranslations,
  Step,
  StepBenefit,
  HeroTranslations,
  WhyTranslations,
  ReasonItem,
  MissionStatsTranslations,
  StatItem,
  AdvantageItem
};

// Export translations by feature
export const featureTranslations = {
  partners: partnersTranslations,
  successPath: successPathTranslations,
  hero: heroTranslations,
  whyChina: whyTranslations,
  missionStats: missionStatsTranslations
};

// Export helper functions to get translations by feature and language
export const getTranslations = {
  partners: getPartnersTranslations,
  successPath: getSuccessPathTranslations,
  hero: getHeroTranslations,
  whyChina: getWhyTranslations,
  missionStats: getMissionStatsTranslations
};

// This can be used to access all translations in a flat structure:
// getFeatureTranslation('partners', 'uz', 'title') => "Bizning hamkorlar"
export function getFeatureTranslation(
  feature: keyof typeof featureTranslations,
  lang: Lang,
  key: string,
  ...args: any[]
): string {
  const translations = featureTranslations[feature][lang];
  
  // Use safer type handling
  if (translations && typeof translations === 'object' && key in translations) {
    const value = translations[key as keyof typeof translations];
    
    if (typeof value === 'string') {
      // Handle placeholders like {0}, {1}, etc.
      if (args.length > 0 && value.includes('{')) {
        return value.replace(/\{(\d+)\}/g, (_, index) => {
          return args[parseInt(index)] !== undefined ? String(args[parseInt(index)]) : '';
        });
      }
      return value;
    }
  }
  
  return key;
} 