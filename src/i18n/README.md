# Astro i18n System

This directory contains the internationalization (i18n) system for our Astro project.

## Key Features

- **Feature-based translations**: Organized by component/feature for better maintainability
- **Type-safe API**: Full TypeScript support for all translations
- **Optimized for performance**: Minimal JavaScript overhead
- **Component-specific translation files**: Makes it easier to find and update translations

## Directory Structure

```
src/i18n/
├── features/           # Feature-specific translations organized by component
│   ├── blog/           # Blog-related translations
│   ├── home/           # Home page features translations
│   ├── shared/         # Shared component translations
│   ├── ui/             # UI component translations
│   └── index.ts        # Export all feature translations
├── langUtils.ts        # Language utility functions
├── translationUtils.ts # Translation utility functions
├── types.ts            # TypeScript types for translations
└── utils.ts            # Miscellaneous utility functions
```

## Usage

### In Astro Components

```astro
---
import { getLangFromUrl } from '@/i18n/langUtils';
import { getTranslations } from '@/i18n/features';

const lang = getLangFromUrl(Astro.url);
const t = getTranslations.hero(lang);
---

<h1>{t.title}</h1>
<p>{t.description}</p>
```

### In TypeScript/JSX Components

```tsx
import { useTranslation } from '@/i18n/hooks';

function HeroComponent() {
  const t = useTranslation('hero');
  
  return (
    <div>
      <h1>{t.title}</h1>
      <p>{t.description}</p>
    </div>
  );
}
```

## Adding New Translations

1. **Create a new feature directory**: `src/i18n/features/your-feature/`
2. **Add language files**: Create `en.ts`, `ru.ts`, and `uz.ts` in your feature directory
3. **Create a types file**: Add `types.ts` to define your translation interface
4. **Create an index file**: Add `index.ts` to export your translations and getter function
5. **Update the main features index**: Import and export your feature in `src/i18n/features/index.ts`

### Example

```typescript
// src/i18n/features/your-feature/types.ts
export interface YourFeatureTranslations {
  title: string;
  description: string;
}

// src/i18n/features/your-feature/en.ts
import type { YourFeatureTranslations } from './types';

export const yourFeatureEn: YourFeatureTranslations = {
  title: 'Your Feature Title',
  description: 'Your feature description in English',
};

// src/i18n/features/your-feature/index.ts
import { yourFeatureEn } from './en';
import { yourFeatureRu } from './ru';
import { yourFeatureUz } from './uz';
import type { YourFeatureTranslations } from './types';
import type { Lang } from '@/i18n/langUtils';

export type { YourFeatureTranslations };

// Export translations by language
export const yourFeatureTranslations: Record<Lang, YourFeatureTranslations> = {
  en: yourFeatureEn,
  ru: yourFeatureRu,
  uz: yourFeatureUz
};

// Getter function
export function getYourFeatureTranslations(lang: Lang): YourFeatureTranslations {
  return yourFeatureTranslations[lang] || yourFeatureTranslations.uz;
}
```

## Best Practices

1. **Organize by component**: Keep translations close to the components that use them
2. **Use TypeScript**: Define interfaces for all translations to catch errors early
3. **Provide fallbacks**: Always fall back to another language if a translation is missing
4. **Handle pluralization**: For complex pluralization, use utility functions
5. **Keep keys consistent**: Use the same keys across all languages
6. **Comment unclear phrases**: Add comments for translators about context

## Migration Notes

We have migrated from a monolithic translation system to a feature-based system for better maintainability and performance. The old system is deprecated and will be removed in a future update.

Use the `cleanup.ts` script to identify files that can be safely removed and check for any missing translations in the feature-based system. 