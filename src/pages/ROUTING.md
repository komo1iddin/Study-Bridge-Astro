# Dynamic Language Routing in AstroStudy

This document explains the new dynamic language routing system implemented in the AstroStudy project.

## Overview

We've optimized the internationalization (i18n) routing by switching from separate directory-based language routes to dynamic language routes. This reduces code duplication and makes the codebase more maintainable.

## Old vs New Approach

### Old Directory-Based Approach

```
src/pages/
├── en/
│   ├── index.astro     # English home page
│   ├── about.astro     # English about page
│   └── ...
├── ru/
│   ├── index.astro     # Russian home page
│   ├── about.astro     # Russian about page
│   └── ...
└── uz/
    ├── index.astro     # Uzbek home page
    ├── about.astro     # Uzbek about page
    └── ...
```

Issues with this approach:
- Duplicate page templates for each language
- Changes to page structure require updates in multiple files
- Harder to maintain consistency across languages

### New Dynamic Approach

```
src/pages/
├── [lang]/              # Dynamic language parameter
│   ├── index.astro      # One template for all languages
│   ├── about.astro      # One template for all languages
│   └── ...
└── admin/               # Non-localized admin section
    ├── index.astro
    └── translations.astro
```

Benefits of the new approach:
- Single template for multiple languages
- Changes need to be made in only one place
- Easier to maintain consistency across languages
- Reduced code duplication

## How It Works

1. Dynamic Routes: Astro's dynamic routes feature uses `[lang]` as a parameter in the URL.
2. Parameter Validation: Each page validates the language parameter against supported languages.
3. Translation Function: A helper function loads the appropriate translations for the current language.
4. Layout Component: A shared layout component handles common elements like headers and footers.
5. Localized Links: A utility component handles language prefixing in URLs.

## Implementation Details

### Page Structure

Each page in the new system follows this structure:

```astro
---
import { languages, type Lang } from '@/i18n/langUtils';
import { getTranslation } from '@/i18n/translationUtils';
import BaseLayout from '@/layouts/BaseLayout.astro';

// Get and validate the language parameter
const { lang } = Astro.params;
if (!lang || !languages.includes(lang as Lang)) {
  return Astro.redirect('/uz/'); // Redirect to default
}

// Create translation helper
const t = (key: string) => getTranslation(lang as Lang, key);

// Page metadata
const title = t('page.title');
const description = t('page.description');
---

<BaseLayout title={title} description={description} lang={lang as Lang}>
  <!-- Page content with translated strings -->
  <h1>{t('page.heading')}</h1>
  <p>{t('page.content')}</p>
</BaseLayout>
```

### Middleware Behavior

The middleware handles:
1. Detection of the preferred language from the browser
2. Redirection to the appropriate language path
3. Special handling for admin routes which don't need language prefixes

### Utility Components

- `LocalizedLink`: Handles creating links with the correct language prefix
- `LanguageSelector`: Provides UI for switching between languages

## Migration Guide

When migrating existing pages to the new system:

1. Create a new file in the `[lang]` directory
2. Add the language validation and translation setup
3. Replace hardcoded strings with translation keys
4. Update links to use `LocalizedLink` or include the `lang` parameter

## Examples

### Creating a new page

1. Create the file in `src/pages/[lang]/your-page.astro`
2. Use the BaseLayout component
3. Get translations with the `t()` function
4. Use `LocalizedLink` for internal links

### Accessing from the browser

- `/en/about` - English about page
- `/ru/about` - Russian about page
- `/uz/about` - Uzbek about page

The admin section (`/admin/*`) is not subject to language prefixing and works independently. 