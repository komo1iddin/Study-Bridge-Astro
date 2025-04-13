// src/data/constants/navigation.ts
import { getNavigationTranslations } from '@/i18n/features/navigation';
import { Lang, languages as langCodes } from '@/i18n/langUtils';

export type NavigationItem = {
  name: string;
  href?: string;
  items?: NavigationItem[];
};

export type Language = {
  code: string;
  name: string;
};

// Generate navigation with language and translations
export const getNavigation = (lang: string): NavigationItem[] => {
  const t = getNavigationTranslations(lang as Lang);

  return [
    { name: t.home, href: `/${lang}` },
    {
      name: t.about._value, // Use _value for the parent menu item
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
};

export const languages: Language[] = [
  { code: 'ru', name: 'Русский' },
  { code: 'uz', name: "O'zbekcha" },
  { code: 'en', name: 'English' },
];

// Function to get localized language names
export const getLocalizedLanguages = (lang: string): Language[] => {
  const t = getNavigationTranslations(lang as Lang);

  return [
    { code: 'ru', name: t.languages.ru || 'Русский' },
    { code: 'uz', name: t.languages.uz || "O'zbekcha" },
    { code: 'en', name: t.languages.en || 'English' },
  ];
};
