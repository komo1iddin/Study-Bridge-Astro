import { getNavigationTranslations } from '@/i18n/features/navigation';
import type { Lang } from '@/i18n/langUtils';

export type NavigationItem = {
  name: string;
  href?: string;
  items?: NavigationItem[];
};

export type Language = {
  code: string;
  name: string;
};

/**
 * Get navigation items with the new modular translation system
 */
export function getModularNavigation(lang: Lang): NavigationItem[] {
  const t = getNavigationTranslations(lang);

  return [
    { name: t.home, href: `/${lang}` },
    {
      name: t.about._value,
      items: [
        { name: t.about.us, href: `/${lang}/about` },
        { name: t.about.reviews, href: `/${lang}/testimonials` },
        { name: t.about.studentPath, href: `/${lang}/student-path` },
        { name: t.about.contacts, href: `/${lang}/contacts` },
        { name: t.about.faq, href: `/${lang}/faq` },
      ],
    },
    {
      name: t.programs,
      href: `/${lang}/programs`,
    },
    {
      name: t.universities,
      href: `/${lang}/universities`,
    },
    { name: t.grants, href: `/${lang}/grants` },
    { name: t.blog, href: `/${lang}/blog` },
  ];
}

/**
 * Get localized language names with the new modular translation system
 */
export function getModularLocalizedLanguages(lang: Lang): Language[] {
  const t = getNavigationTranslations(lang);

  return [
    { code: 'ru', name: t.languages.ru },
    { code: 'uz', name: t.languages.uz },
    { code: 'en', name: t.languages.en },
  ];
} 