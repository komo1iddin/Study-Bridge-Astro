# i18n Translation System

This document explains the new modular approach to managing translations in the application.

## Table of Contents

- [Overview](#overview)
- [Directory Structure](#directory-structure)
- [Usage Examples](#usage-examples)
- [Adding New Translations](#adding-new-translations)
- [Migration Guide](#migration-guide)

## Overview

The translation system is designed to be modular and maintainable, organizing translations by feature rather than by language. This helps with:

- **Maintainability**: Easier to find and update translations related to specific components
- **Scalability**: New features can add their own translations without affecting the main type definitions
- **Developer Experience**: Work on translations specific to the feature you're developing

## Directory Structure

```
src/i18n/
├── index.ts             # Main export
├── types.ts             # Core types (simplified)
├── utils.ts             # Helper functions
├── features/            # Feature-specific translations
│   ├── common/          # Common UI elements
│   │   ├── index.ts     # Export all common translations
│   │   ├── en.ts        # English translations for common elements
│   │   ├── ru.ts        # Russian translations for common elements
│   │   └── uz.ts        # Uzbek translations for common elements
│   ├── home/            # Home page specific features
│   │   ├── hero/        # Hero section
│   │   │   ├── index.ts # Export 
│   │   │   ├── en.ts    # English translations
│   │   │   ├── ru.ts    # Russian translations
│   │   │   └── uz.ts    # Uzbek translations
│   │   ├── partners/    # Partners section
│   │   │   ├── index.ts
│   │   │   ├── en.ts
│   │   │   ├── ru.ts
│   │   │   └── uz.ts
│   │   └── ... (other home components)
│   ├── universities/
│   │   ├── index.ts
│   │   ├── en.ts
│   │   ├── ru.ts
│   │   └── uz.ts
│   └── ... (other features)
└── translations.ts      # Aggregates all translations
```

## Usage Examples

### In Astro Components

```astro
---
import { getPartnersTranslations } from '@/i18n/features/home/partners';
import type { Lang } from '@/i18n/langUtils';

const { lang = 'uz' } = Astro.props;

// Get all translations for this component at once
const translations = getPartnersTranslations(lang);
---

<YourComponent translations={translations} />
```

### In Svelte Components

```svelte
<script>
  // Import directly in Svelte component
  import { getPartnersTranslations } from '@/i18n/features/home/partners';
  
  export let lang;
  
  const translations = getPartnersTranslations(lang);
</script>

<div>
  <h2>{translations.title}</h2>
  <p>{translations.description}</p>
</div>
```

### Using the Unified Interface

You can also use the unified interface to access all translations:

```js
import { getFeatureTranslation } from '@/i18n/features';

// Access translations by feature, language, and key
const title = getFeatureTranslation('partners', 'en', 'title');
```

## Adding New Translations

To add translations for a new feature:

1. Create a new directory under `src/i18n/features/[section]/[feature]`
2. Create type definition in `types.ts`
3. Add language-specific files (en.ts, ru.ts, uz.ts)
4. Create an index.ts file with a helper function
5. Import and register in `src/i18n/features/index.ts`

Example:

```ts
// src/i18n/features/yourSection/yourFeature/types.ts
export interface YourFeatureTranslations {
  title: string;
  description: string;
}

// src/i18n/features/yourSection/yourFeature/en.ts
import type { YourFeatureTranslations } from './types';

export const yourFeatureEn: YourFeatureTranslations = {
  title: "Your Feature Title",
  description: "Your feature description"
};

// src/i18n/features/yourSection/yourFeature/index.ts
import { yourFeatureEn } from './en';
import { yourFeatureRu } from './ru';
import { yourFeatureUz } from './uz';
import type { YourFeatureTranslations } from './types';
import type { Lang } from '@/i18n/langUtils';

export type { YourFeatureTranslations };

export const yourFeatureTranslations: Record<Lang, YourFeatureTranslations> = {
  en: yourFeatureEn,
  ru: yourFeatureRu,
  uz: yourFeatureUz
};

export function getYourFeatureTranslations(lang: Lang): YourFeatureTranslations {
  return yourFeatureTranslations[lang] || yourFeatureUz;
}
```

## Migration Guide

To migrate from the old system to the new one:

1. Identify components that use translations
2. Extract relevant translations from the large language files
3. Create feature-specific translations following the pattern above
4. Update components to use the new translation functions
5. Update any imports

We recommend migrating one component at a time to reduce the risk of issues. 