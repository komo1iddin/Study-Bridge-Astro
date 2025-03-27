import { partnersTranslations, getPartnersTranslations } from './home/partners';
import { successPathTranslations, getSuccessPathTranslations } from './home/successPath';
import { heroTranslations, getHeroTranslations } from './home/hero';
import { whyTranslations, getWhyTranslations } from './home/whyChina';
import { missionStatsTranslations, getMissionStatsTranslations } from './home/missionStats';
import { ourTeamTranslations, getOurTeamTranslations } from './home/ourTeam';
import type { PartnersTranslations } from './home/partners';
import type { SuccessPathTranslations, Step, StepBenefit } from './home/successPath';
import type { HeroTranslations } from './home/hero';
import type { WhyTranslations, ReasonItem } from './home/whyChina';
import type { MissionStatsTranslations, StatItem, AdvantageItem } from './home/missionStats';
import type { OurTeamTranslations, TeamPosition, TeamValue } from './home/ourTeam';
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
  AdvantageItem,
  OurTeamTranslations,
  TeamPosition,
  TeamValue
};

// Export translations by feature
export const featureTranslations = {
  partners: partnersTranslations,
  successPath: successPathTranslations,
  hero: heroTranslations,
  whyChina: whyTranslations,
  missionStats: missionStatsTranslations,
  ourTeam: ourTeamTranslations
};

// Export helper functions to get translations by feature and language
export const getTranslations = {
  partners: getPartnersTranslations,
  successPath: getSuccessPathTranslations,
  hero: getHeroTranslations,
  whyChina: getWhyTranslations,
  missionStats: getMissionStatsTranslations,
  ourTeam: getOurTeamTranslations
};

// This can be used to access all translations in a flat structure:
// getFeatureTranslation('partners', 'uz', 'title') => "Bizning hamkorlar"
export function getFeatureTranslation(
  feature: keyof typeof featureTranslations,
  lang: Lang,
  key: string,
  ...args: any[]
): string {
  try {
    const translations = featureTranslations[feature][lang];
    
    if (!translations || typeof translations !== 'object' || !(key in translations)) {
      return key;
    }
    
    const value: unknown = translations[key as keyof typeof translations];
    
    if (typeof value !== 'string') {
      return key;
    }
    
    if (args.length > 0) {
      return value.replace(/\{(\d+)\}/g, (match: string, indexStr: string) => {
        const index = parseInt(indexStr, 10);
        return args[index] !== undefined ? String(args[index]) : '';
      });
    }
    
    return value;
  } catch (error) {
    console.error('Error in getFeatureTranslation:', error);
    return key;
  }
} 