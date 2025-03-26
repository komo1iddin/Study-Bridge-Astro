// src/data/constants/navigation.ts
import { translations } from '@/i18n/translations/new-index';

export type NavigationItem = {
  name: string;
  href?: string;
  items?: NavigationItem[];
};

export type Language = {
  code: string;
  name: string;
};

// Создадим функцию для генерации навигации с учетом языка и переводов
export const getNavigation = (lang: string): NavigationItem[] => {
  const t = translations[lang as keyof typeof translations] || translations.uz;

  return [
    { name: t.nav.home, href: `/${lang}` },
    {
      name: t.nav.about._value, // Use _value for the parent menu item
      items: [
        { name: t.nav.about.us, href: `/${lang}/about` },
        { name: t.nav.about.reviews, href: `/${lang}/testimonials` },
        { name: t.nav.about.studentPath, href: `/${lang}/student-path` },
        { name: t.nav.about.contacts, href: `/${lang}/contacts` },
        { name: t.nav.about.faq, href: `/${lang}/faq` },
      ],
    },
    {
      name: t.nav.programs,
      href: `/${lang}/programs`,
    },
    {
      name: t.nav.universities,
      href: `/${lang}/universities`,
    },
    { name: t.nav.grants, href: `/${lang}/grants` },
    { name: t.nav.blog, href: `/${lang}/blog` },
  ];
};

export const languages: Language[] = [
  { code: 'ru', name: 'Русский' },
  { code: 'uz', name: "O'zbekcha" },
  { code: 'en', name: 'English' },
];

// Функция для получения локализованных названий языков
export const getLocalizedLanguages = (lang: string): Language[] => {
  const t = translations[lang as keyof typeof translations] || translations.uz;

  return [
    { code: 'ru', name: t.languages.ru || 'Русский' },
    { code: 'uz', name: t.languages.uz || "O'zbekcha" },
    { code: 'en', name: t.languages.en || 'English' },
  ];
};
