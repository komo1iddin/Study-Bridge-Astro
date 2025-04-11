
# Astro i18n Optimization Plan

## Phase 1: Complete Modularization (1-2 weeks)

1. **Accelerate Feature Migration**
   - Complete highest-priority components first (hero, nav, footer)
   - Follow established pattern in `/src/i18n/features/home/hero`
   - Identify and document any shared translations to avoid duplication

2. **Directory Structure Alignment**
   - Ensure translation directories mirror Astro component structure
   - Create 1:1 mapping between components and translation modules
   - Example: `/components/features/home/Hero` → `/i18n/features/home/hero`

3. **Translation Audit**
   - Identify unused translations from the monolithic files
   - Create validation script to find missing translations
   - Document translation coverage for each component

## Phase 2: Astro-Specific Optimizations (1 week)

1. **Static Generation Enhancement**
   - Use `Astro.glob()` for efficient build-time processing
   - Pre-generate static pages with translations embedded in HTML
   - Implement code to generate static routes for each language

2. **Create Type-Safe Helpers**
   ```typescript
   // src/i18n/astroHelpers.ts
   export function createTranslationProps<T>(featureName: string, lang: Lang): T {
     return getTranslations[featureName](lang) as T;
   }
   ```

3. **Component Integration**
   - Update Astro components to use optimized imports:
   ```astro
   ---
   import { getLangFromUrl } from '@/i18n/langUtils';
   import { getHeroTranslations } from '@/i18n/features/home/hero';
   
   const lang = getLangFromUrl(Astro.url);
   const t = getHeroTranslations(lang);
   ---
   <h1>{t.title.first} <span>{t.title.highlight}</span></h1>
   ```

## Phase 3: Build & Performance Optimizations (1 week)

1. **Implement Translation Chunking**
   - Use Astro's built-in code splitting for translations
   - Create dynamic import functions for client components that need translations
   - Only load translations when component becomes visible (`client:visible`)

2. **Build-Time Validation**
   - Create Astro integration or build plugin to validate translations
   - Add warnings for missing translations during build process
   - Generate translation coverage reports

3. **Optimize URL Strategy**
   ```typescript
   // src/middleware.ts (if using SSR)
   export function onRequest({ request, locals }) {
     const url = new URL(request.url);
     locals.lang = getLangFromUrl(url);
     // Redirect default language to non-prefixed route for better SEO
   }
   ```

## Phase 4: Developer Experience & Maintenance (1 week)

1. **Documentation Update**
   - Create updated usage examples for all component types
   - Document best practices for translation in Astro components vs client components
   - Add JSDoc comments to all translation functions

2. **Translation Management Tools**
   - Create CLI tool to scaffold new feature translations
   - Add translation comparison utility to spot differences between languages
   - Build extraction script to help with future migrations

3. **Clean-up & Deprecation**
   - Mark legacy system as deprecated with warning comments
   - Remove redundant translation utilities
   - Set timeline for complete removal of the old system

## Implementation Timeline

- **Weeks 1-2:** Complete Phase 1 & 2 for critical components
- **Weeks 3-4:** Finish remaining components and implement Phase 3
- **Week 5:** Complete Phase 4 and conduct performance testing

## Expected Benefits

1. **Performance:** 30-50% reduction in client-side JS for i18n
2. **Development:** 2x faster development of new feature translations
3. **Maintenance:** Isolated translation updates without affecting other components
4. **SEO:** Better support for language-specific metadata and static generation
5. **Type safety:** Stronger typing for all translations

This plan leverages Astro's island architecture to create a highly optimized i18n implementation that minimizes JavaScript while maintaining excellent developer experience.
