Based on my analysis of the codebase, here are the main performance issues causing the slow initial loading (4000-5500ms) and page navigation:

1. **Client-side JavaScript Hydration**: Multiple components using `client:load` are being hydrated immediately, particularly:
   - `<HeroComponent>` on the homepage
   - `<MobileNav>` in the header
   - `<UniversityFeature>` component

2. **Animation Libraries Overhead**: 
   - AOS (Animate On Scroll) is loaded globally and initialized on every page. Even though there's an attempt to optimize it, the library itself adds significant overhead.
   - Multiple animation effects in CSS and JavaScript add rendering and processing overhead.

3. **Inefficient Image Loading**: 
   - The image optimization script creates multiple versions of each image, but there's evidence that large images may still be loaded on initial page load.
   - The current image optimization approach generates many files but doesn't prioritize critical images.

4. **Excessive JavaScript on Initial Load**:
   - Multiple scripts are loaded and executed during the initial page load: transitions, icon-optimizer, aos-init, and potentially others.
   - The performance-optimizer.ts file contains duplicated code from Layout.astro, causing confusion and potentially redundant processing.

5. **Page Transition Issues**:
   - The transitions.ts script attempts to optimize page transitions but adds complexity by manipulating all DOM elements' transition and animation properties.
   - ViewTransitions from Astro is also used, potentially conflicting with custom transition code.

6. **Delayed Font Loading**:
   - The site connects to Google Fonts but doesn't appear to optimize font loading with proper font-display settings.

7. **Third-Party Resources**:
   - External resources (like Google Fonts) are being loaded without proper prioritization.

8. **Heavy Homepage**:
   - The homepage loads numerous components at once, many with their own JavaScript functionality.

9. **International Routing Overhead**:
   - The i18n system adds redirect overhead, with the middleware handling language detection and redirection on each page load.

10. **Unnecessary Preloading**:
    - The transition script attempts to preload pages and icons that may not be immediately needed.

To improve performance, you should focus on addressing these issues, particularly reducing initial client-side JavaScript, optimizing image loading, and streamlining the page transition system.



# Performance Issues Analysis Summary

After examining your Astro project, I've identified several critical factors causing the 4000-5500ms load times:

## Critical Performance Bottlenecks

1. **Immediate Client-Side Hydration**
   - Multiple components with `client:load` directive force immediate JavaScript execution
   - Key components: `<HeroComponent>`, `<MobileNav>`, and `<UniversityFeature>`
   - These are blocking the interactive page load

2. **Animation Library Overhead**
   - AOS (Animate On Scroll) adds significant JavaScript weight
   - Dynamic loading approach in `aos-init.ts` still causes rendering delays
   - CSS animations/transitions throughout the site create CPU load during page render

3. **Inefficient Image Handling**
   - Current image optimization generates multiple sizes but doesn't prioritize delivery
   - Large images are loaded with standard methods rather than using modern techniques
   - Image lazy loading implementation could be improved

4. **JavaScript Bloat on Initial Page Load**
   - Multiple initialization scripts run at DOMContentLoaded
   - Duplicated code between Layout.astro and performance-optimizer.ts
   - Unnecessary preloading of pages and resources

5. **Transition System Complexity**
   - Custom transition system manipulates all DOM elements' styles
   - Potential conflict between Astro's ViewTransitions and custom code
   - Transitions pause/resume animations, causing repaints

6. **i18n Implementation Overhead**
   - Language detection and redirection in middleware adds latency
   - URL-based language routing requires processing before content delivery

7. **Resource Loading Optimization Issues**
   - Suboptimal font loading without proper `font-display` strategies
   - External resources loaded without prioritization
   - CSS not properly split between critical and non-critical

8. **Heavy Page Structure**
   - Homepage loads numerous components simultaneously
   - `faq.astro` (49KB) and other large page files indicate content that could be loaded progressively

These issues collectively create the significant performance bottleneck you're experiencing during initial page load and navigation.




# Performance Optimization Plan

## Phase 1: Quick Wins (Immediate Improvements)

### Step 1: Optimize Component Hydration
1. **Audit client:load directives**
   ```bash
   grep -r "client:load" src/
   ```
2. **Change to client:visible or client:idle where appropriate**
   - Update `src/components/features/home/Hero/Hero.astro`:
     ```diff
     - <HeroComponent lang={lang} translations={translations} client:load /> 
     + <HeroComponent lang={lang} translations={translations} client:visible />
     ```
   - Update mobile navigation in `src/components/shared/navigation/Header/MainHeader.astro`:
     ```diff
     - <MobileNav client:load currentPath={currentPath} />
     + <MobileNav client:idle currentPath={currentPath} />
     ```

### Step 2: Prioritize Critical CSS
1. **Extract critical styles to inline in Layout**
   - Move essential styles for above-the-fold content to inline style block in `src/layouts/Layout.astro`
2. **Defer non-critical CSS**
   - Update CSS loading in Layout:
     ```html
     <link rel="preload" href="/styles/main.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
     <noscript><link rel="stylesheet" href="/styles/main.css"></noscript>
     ```

### Step 3: Optimize Font Loading
1. **Add font-display swap to Google Fonts**
   ```html
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
   <link href="https://fonts.googleapis.com/css2?family=Your+Font+Family&display=swap&font-display=swap" rel="stylesheet">
   ```
2. **Consider self-hosting critical fonts**

## Phase 2: Image Optimization (1-2 days)

### Step 1: Implement Modern Image Loading
1. **Use native lazy loading for below-fold images**
   ```html
   <img src="image.jpg" loading="lazy" decoding="async" alt="Description">
   ```
2. **Add width/height attributes to all images**
   - Prevents layout shifts during load

### Step 2: Optimize Critical Images
1. **Identify and preload hero/critical images**
   ```html
   <link rel="preload" href="/critical-image.webp" as="image" type="image/webp">
   ```
2. **Convert to WebP format if not already done**
   - Update image optimizer script to prioritize WebP

### Step 3: Implement Proper Responsive Images
1. **Use srcset and sizes attributes**
   ```html
   <img 
     src="small.jpg" 
     srcset="small.jpg 400w, medium.jpg 800w, large.jpg 1200w" 
     sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
     alt="Description">
   ```

## Phase 3: JavaScript Optimization (2-3 days)

### Step 1: Address AOS Animation Library
1. **Make AOS optional and lazy-loaded**
   - Update `src/components/scripts/aos-init.ts` to load only when needed
2. **Consider replacing with lighter animation approach**
   - Use CSS-only animations for simple effects
   - Only load JavaScript animations when truly necessary

### Step 2: Fix Transitions System
1. **Choose one transition system**
   - Either use Astro's ViewTransitions or custom implementation, not both
2. **Simplify transition logic**
   - Remove DOM manipulation of all elements
   - Target only specific elements that need transition effects

### Step 3: Optimize JavaScript Loading
1. **Add type="module" to script tags**
   ```html
   <script type="module" src="..."></script>
   ```
2. **Use import() for conditional loading**
   ```javascript
   // Only load when needed
   if (document.querySelector('.animation-element')) {
     import('./animation.js').then(module => {
       module.initialize();
     });
   }
   ```

## Phase 4: i18n and Routing Optimization (2-3 days)

### Step 1: Cache Language Detection
1. **Store detected language in localStorage**
   ```javascript
   // After detecting language
   localStorage.setItem('preferredLanguage', detectedLang);
   
   // On subsequent visits
   const storedLang = localStorage.getItem('preferredLanguage');
   if (storedLang && languages.includes(storedLang)) {
     detectedLang = storedLang;
   }
   ```

### Step 2: Optimize Middleware
1. **Make middleware more efficient**
   - Early exit for static assets
   - Simplify language detection logic

### Step 3: Implement Static Site Generation (SSG)
1. **Pre-render common pages at build time**
   - Update Astro config to enable static generation for main pages

## Phase 5: Advanced Optimizations (3-4 days)

### Step 1: Implement Component-Level Code Splitting
1. **Split large components into smaller chunks**
2. **Use dynamic imports for complex UI elements**

### Step 2: Add Resource Hints
1. **Implement dns-prefetch and preconnect**
   ```html
   <link rel="dns-prefetch" href="https://fonts.googleapis.com">
   <link rel="preconnect" href="https://fonts.googleapis.com" crossorigin>
   ```
2. **Preload critical resources**

### Step 3: Implement Service Worker
1. **Add basic offline capabilities**
2. **Cache static assets**

## Testing and Monitoring

### Step 1: Establish Baseline Metrics
1. **Run Lighthouse tests before changes**
2. **Document current load times**

### Step 2: Monitor Each Change
1. **Test in development environment first**
2. **Deploy changes incrementally**
3. **Run Lighthouse after each phase**

### Step 3: Implement Web Vitals Monitoring
1. **Add real user monitoring (RUM)**
2. **Track Core Web Vitals in production**

Remember to make one change at a time, test thoroughly, and have a rollback plan for each modification.
