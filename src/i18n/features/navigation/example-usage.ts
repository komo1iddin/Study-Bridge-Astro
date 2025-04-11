import { getNavigationTranslations } from './index';
import type { Lang } from '@/i18n/langUtils';

/**
 * Example of how to use the modular navigation translations
 * 
 * @param lang The current language
 * @returns An array of navigation items with translated text
 */
export function getNavigation(lang: Lang) {
  // Get the translated texts for the navigation
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
 * Example of how to get localized language names
 */
export function getLocalizedLanguages(lang: Lang) {
  const t = getNavigationTranslations(lang);

  return [
    { code: 'ru', name: t.languages.ru },
    { code: 'uz', name: t.languages.uz },
    { code: 'en', name: t.languages.en },
  ];
} 