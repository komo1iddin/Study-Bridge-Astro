# i18n Modularization Guide - Phase 1

## Guide for Implementation

This document provides a step-by-step guide for migrating components from the monolithic translation system to the modular feature-based approach.

### Step 1: Identify Components for Migration

Start by identifying components that need translations. Priority should be given to:
1. Shared UI components (navigation, footer, buttons, forms)
2. Home page components
3. Frequently used components across multiple pages

### Step 2: Create Feature Translation Structure

For each component, follow this directory structure:

```
src/i18n/features/[section]/[component]/
├── types.ts     - Type definitions for this component's translations
├── en.ts        - English translations
├── ru.ts        - Russian translations
├── uz.ts        - Uzbek translations
├── index.ts     - Export functions and types
└── example-usage.astro - Example implementation
```

### Step 3: Implement the Files

#### types.ts
```typescript
export interface YourComponentTranslations {
  title: string;
  description: string;
  // other properties as needed
}
```

#### en.ts (and similar for ru.ts and uz.ts)
```typescript
import type { YourComponentTranslations } from './types';

export const yourComponentEn: YourComponentTranslations = {
  title: "English Title",
  description: "English description"
};
```

#### index.ts
```typescript
import { yourComponentEn } from './en';
import { yourComponentRu } from './ru';
import { yourComponentUz } from './uz';
import type { YourComponentTranslations } from './types';
import type { Lang } from '@/i18n/langUtils';

// Export types
export type { YourComponentTranslations };

// Export translations by language
export const yourComponentTranslations: Record<Lang, YourComponentTranslations> = {
  en: yourComponentEn,
  ru: yourComponentRu,
  uz: yourComponentUz
};

// Helper function to get translations for a specific language
export function getYourComponentTranslations(lang: Lang): YourComponentTranslations {
  return yourComponentTranslations[lang] || yourComponentUz;
}
```

### Step 4: Update the features/index.ts file

Add your imports and exports to `src/i18n/features/index.ts`:

```typescript
// Add imports at the top
import { yourComponentTranslations, getYourComponentTranslations } from './section/yourComponent';
import type { YourComponentTranslations } from './section/yourComponent';

// Add to type exports
export type {
  // existing types...
  YourComponentTranslations,
};

// Add to featureTranslations object
export const featureTranslations = {
  // existing translations...
  yourComponent: yourComponentTranslations,
};

// Add to getTranslations object
export const getTranslations = {
  // existing functions...
  yourComponent: getYourComponentTranslations,
};
```

### Step 5: Update the Component

Modify your component to use the new translations:

```astro
---
import type { Lang } from '@/i18n/langUtils';
import { getYourComponentTranslations } from '@/i18n/features/section/yourComponent';

interface Props {
  lang?: Lang;
  // other props
}

const { lang = 'uz' } = Astro.props;
const t = getYourComponentTranslations(lang);
---

<div>
  <h2>{t.title}</h2>
  <p>{t.description}</p>
</div>
```

### Step 6: Create Example Usage

Create an example-usage.astro file showing how to use your component with different languages:

```astro
---
import YourComponent from '@/components/YourComponent.astro';
---

<div>
  <h2>Uzbek (Default)</h2>
  <YourComponent lang="uz" />
  
  <h2>English</h2>
  <YourComponent lang="en" />
  
  <h2>Russian</h2>
  <YourComponent lang="ru" />
</div>
```

### Step 7: Test Your Implementation

1. Check that the component renders correctly with all languages
2. Verify there are no missing translations
3. Make sure the component works with the appropriate language when used in a page

### Step 8: Update Documentation

Add your component to the list of migrated components in the MIGRATION_PLAN.md file.

## Best Practices

1. **Name consistency**: Use the same naming pattern across all translation files
2. **Type safety**: Define precise types for all translations
3. **Default values**: Always provide defaults for optional translations
4. **Translation audit**: Run the translation audit script to check for missing translations
5. **Component coverage**: Prioritize components that are used across multiple pages

## Need Help?

If you need assistance with the migration process, check the existing implementations in the `features/` directory or reach out to the development team. 