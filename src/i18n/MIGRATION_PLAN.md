# Translation System Migration Plan

This document outlines the step-by-step plan for migrating from the current monolithic translation system to the new feature-based modular system.

## Completed Components

We've already set up the new translation structure for these components:

1. **OurPartners**
   - Created translation types
   - Added translations for all languages (en, ru, uz)
   - Integrated with the feature translation system
   - Created example usage

2. **SuccessPath**
   - Created translation types
   - Added translations for all languages (en, ru, uz)
   - Integrated with the feature translation system
   - Created example usage

## Migration Plan for Remaining Components

### Phase 1: High-Priority Components (Home Page)

1. **Hero Section**
   - Create `src/i18n/features/home/hero/`
   - Define translation types
   - Extract translations from main files
   - Update component

2. **MissionStats**
   - Create `src/i18n/features/home/missionStats/`
   - Define translation types
   - Extract translations from main files
   - Update component

3. **WhyChina**
   - Create `src/i18n/features/home/whyChina/`
   - Define translation types
   - Extract translations from main files
   - Update component

### Phase 2: Additional Major Components

1. **Universities**
   - Create `src/i18n/features/universities/`
   - Define types for listings and detail pages
   - Extract translations
   - Update components

2. **Programs**
   - Create `src/i18n/features/programs/`
   - Define types
   - Extract translations
   - Update components

3. **Contact/Forms**
   - Create `src/i18n/features/contact/`
   - Define types for all form elements
   - Extract translations
   - Update components

### Phase 3: Common/Shared Components

1. **Navigation**
   - Create `src/i18n/features/common/navigation/`
   - Define types for menu items
   - Extract translations
   - Update components

2. **Footer**
   - Create `src/i18n/features/common/footer/`
   - Define types
   - Extract translations
   - Update component

3. **Buttons and CTAs**
   - Create `src/i18n/features/common/buttons/`
   - Define types
   - Extract translations
   - Update components

### Phase 4: Secondary Pages

1. **Blog**
   - Create `src/i18n/features/blog/`
   - Define types
   - Extract translations
   - Update components

2. **FAQ**
   - Create `src/i18n/features/faq/`
   - Define types
   - Extract translations
   - Update components

3. **About**
   - Create `src/i18n/features/about/`
   - Define types
   - Extract translations
   - Update components

## Migration Process for Each Component

For each component, follow these steps:

1. **Create directory structure**
   ```
   src/i18n/features/[section]/[component]/
   ├── types.ts
   ├── en.ts
   ├── ru.ts
   ├── uz.ts
   └── index.ts
   ```

2. **Define types**
   - Create an interface that represents all translations needed
   - Ensure types are specific and document any complex structures

3. **Extract translations**
   - Find all translations used in the component from the main translation files
   - Copy and organize them in the language-specific files

4. **Update the features index**
   - Import and re-export types
   - Add to the `featureTranslations` object
   - Add to the `getTranslations` object

5. **Update components**
   - Modify Astro components to import from the new system
   - Update Svelte/React components to use the new structure
   - Test that all translations are working correctly

## Testing and Validation

After migrating each component:

1. Test with all languages
2. Verify that all text is correctly displayed
3. Check for any missing translations
4. Ensure there are no regressions

## Full Migration Completion

Once all components have been migrated:

1. Remove the old translation files or mark them as deprecated
2. Update any documentation
3. Train the team on the new system
4. Consider creating automated tools to help with future component creation 