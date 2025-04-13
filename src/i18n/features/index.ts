import { partnersTranslations, getPartnersTranslations } from './home/partners';
import { successPathTranslations, getSuccessPathTranslations } from './home/successPath';
import { heroTranslations, getHeroTranslations } from './home/hero';
import { whyTranslations, getWhyTranslations } from './home/whyChina';
import { missionStatsTranslations, getMissionStatsTranslations } from './home/missionStats';
import { ourTeamTranslations, getOurTeamTranslations } from './home/ourTeam';
import { howWeWorkTranslations, getHowWeWorkTranslations } from './home/howWeWork';
import { ctaTranslations, getCTATranslations } from './home/cta';
import { comparisonTranslations, getComparisonTranslations } from './home/comparison';
import { universityDetailTranslations, getUniversityDetailTranslations } from './university/universityDetail';
import { universityPageTranslations, getUniversityPageTranslations } from './university/universityPage';
import { contactTranslations, getContactTranslations } from './contact';
import { testimonialsTranslations, getTestimonialsTranslations } from './shared/testimonials';
import { faqTranslations, getFAQTranslations } from './shared/faq';
import { commonTranslations, getCommonTranslations } from './shared/common';
import { featuredBlogTranslations, getFeaturedBlogTranslations } from './blog/featured';
import { blogCommonTranslations, getBlogCommonTranslations } from './blog/common';
import { getProgramsTranslations } from './programs';
import { ctaTranslations as uiCtaTranslations, getCTATranslations as getUICTATranslations } from './ui/cta';
import { sectionTranslations, getSectionTranslations } from './ui/section';
import { breadcrumbsTranslations, getBreadcrumbsTranslations } from './ui/breadcrumbs';
import { languageSelectorTranslations, getLanguageSelectorTranslations } from './ui/language';
import { navigationTranslations, getNavigationTranslations } from './navigation';
import { popupTranslations, getPopupTranslations } from './ui/popup';
import type { PartnersTranslations } from './home/partners';
import type { SuccessPathTranslations, Step, StepBenefit } from './home/successPath';
import type { HeroTranslations } from './home/hero';
import type { WhyTranslations } from './home/whyChina';
import type { MissionStatsTranslations } from './home/missionStats';
import type { OurTeamTranslations } from './home/ourTeam';
import type { HowWeWorkTranslations } from './home/howWeWork';
import type { CTATranslations } from './home/cta';
import type { ComparisonTranslations } from './home/comparison';
import type { TestimonialsTranslations } from './shared/testimonials';
import type { FAQTranslations } from './shared/faq';
import type { FeaturedBlogTranslations } from './blog/featured';
import type { UniversityDetailTranslations } from './university/universityDetail';
import type { UniversityPageTranslations } from './university/universityPage';
import type { ContactTranslations } from './contact';
import type { CTATranslations as UICtaTranslations } from './ui/cta';
import type { SectionTranslations } from './ui/section';
import type { BreadcrumbsTranslations } from './ui/breadcrumbs';
import type { LanguageSelectorTranslations } from './ui/language';
import type { NavigationTranslations } from './navigation';
import type { PopupTranslations } from './ui/popup';
import type { Lang } from '@/i18n/langUtils';
import type { BlogCommonTranslations } from './blog/common';
import type { CommonTranslations } from './shared/common';

// Re-export types
export type {
  PartnersTranslations,
  SuccessPathTranslations,
  Step,
  StepBenefit,
  HeroTranslations,
  WhyTranslations,
  MissionStatsTranslations,
  OurTeamTranslations,
  HowWeWorkTranslations,
  CTATranslations,
  ComparisonTranslations,
  TestimonialsTranslations,
  FAQTranslations,
  FeaturedBlogTranslations,
  BlogCommonTranslations,
  UniversityDetailTranslations,
  UniversityPageTranslations,
  ContactTranslations,
  UICtaTranslations,
  SectionTranslations,
  BreadcrumbsTranslations,
  LanguageSelectorTranslations,
  PopupTranslations,
  NavigationTranslations,
  CommonTranslations
};

// Export translations by feature
export const featureTranslations = {
  partners: partnersTranslations,
  successPath: successPathTranslations,
  hero: heroTranslations,
  why: whyTranslations,
  missionStats: missionStatsTranslations,
  ourTeam: ourTeamTranslations,
  howWeWork: howWeWorkTranslations,
  cta: ctaTranslations,
  comparison: comparisonTranslations,
  universityDetail: universityDetailTranslations,
  universityPage: universityPageTranslations,
  contact: contactTranslations,
  testimonials: testimonialsTranslations,
  faq: faqTranslations,
  common: commonTranslations,
  featuredBlog: featuredBlogTranslations,
  blogCommon: blogCommonTranslations,
  uiCta: uiCtaTranslations,
  section: sectionTranslations,
  breadcrumbs: breadcrumbsTranslations,
  language: languageSelectorTranslations,
  popup: popupTranslations,
  navigation: navigationTranslations
};

// Export helper functions to get translations by feature and language
export const getTranslations = {
  partners: getPartnersTranslations,
  successPath: getSuccessPathTranslations,
  hero: getHeroTranslations,
  why: getWhyTranslations,
  missionStats: getMissionStatsTranslations,
  ourTeam: getOurTeamTranslations,
  howWeWork: getHowWeWorkTranslations,
  cta: getCTATranslations,
  comparison: getComparisonTranslations,
  universityDetail: getUniversityDetailTranslations,
  universityPage: getUniversityPageTranslations,
  contact: getContactTranslations,
  testimonials: getTestimonialsTranslations,
  faq: getFAQTranslations,
  common: getCommonTranslations,
  featuredBlog: getFeaturedBlogTranslations,
  blogCommon: getBlogCommonTranslations,
  programs: getProgramsTranslations,
  uiCta: getUICTATranslations,
  section: getSectionTranslations,
  breadcrumbs: getBreadcrumbsTranslations,
  language: getLanguageSelectorTranslations,
  popup: getPopupTranslations,
  navigation: getNavigationTranslations
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