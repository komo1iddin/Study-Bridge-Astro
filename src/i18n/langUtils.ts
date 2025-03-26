// i18n/langUtils.ts
export type Lang = 'uz' | 'ru' | 'en';

export const defaultLang: Lang = 'uz';

export const languages: Lang[] = ['uz', 'ru', 'en']; // Export the language list

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  return lang && languages.includes(lang as Lang) ? (lang as Lang) : defaultLang; // Type-safe check
}

export function generateLocalizedUrl(lang: Lang, path: string): string {
  return `/${lang}${path === '/' ? '' : path}`; // Correctly handles root path
}
