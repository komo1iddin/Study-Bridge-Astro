
# Migration Plan: Replacing AOS with Motion One

## Step 1: Install Motion One

```bash
npm install motion
```

## Step 2: Create a Motion utility file

Create a new file at `src/utils/motion.ts`:

```typescript
import { scroll, animate, inView, stagger } from 'motion';

type MotionOptions = {
  animation?: {
    opacity?: [number, number];
    y?: [number, number];
    x?: [number, number];
    scale?: [number, number];
  };
  delay?: number;
  duration?: number;
  easing?: string;
}

// Main function to replace data-aos
export function setupScrollAnimations() {
  // Find all elements with data-motion attribute
  const elements = document.querySelectorAll('[data-motion]');
  
  elements.forEach(element => {
    const animation = element.getAttribute('data-motion');
    const delay = Number(element.getAttribute('data-motion-delay') || 0);
    const duration = Number(element.getAttribute('data-motion-duration') || 400);
    
    // Default options
    const options: MotionOptions = {
      animation: { opacity: [0, 1], y: [20, 0] },
      delay,
      duration
    };
    
    // Handle different animation types
    switch (animation) {
      case 'fade-up':
        options.animation = { opacity: [0, 1], y: [20, 0] };
        break;
      case 'fade-down':
        options.animation = { opacity: [0, 1], y: [-20, 0] };
        break;
      case 'fade-left':
        options.animation = { opacity: [0, 1], x: [-20, 0] };
        break;
      case 'fade-right':
        options.animation = { opacity: [0, 1], x: [20, 0] };
        break;
      case 'zoom-in':
        options.animation = { opacity: [0, 1], scale: [0.9, 1] };
        break;
      // Add more animations as needed
    }
    
    // Apply the animation
    inView(element as HTMLElement, ({ target }) => {
      animate(
        target,
        options.animation,
        { 
          delay: options.delay,
          duration: options.duration,
          easing: [0.25, 0.1, 0.25, 1] // Cubic bezier curve similar to 'ease-out'
        }
      );
      
      // Return false to run the animation only once
      return false;
    });
  });
}

// For staggered animations (replacing AOS delay sequences)
export function setupStaggeredAnimations() {
  // Find all parent elements containing staggered children
  const staggerContainers = document.querySelectorAll('[data-motion-stagger]');
  
  staggerContainers.forEach(container => {
    const children = container.querySelectorAll('[data-motion-stagger-item]');
    const staggerDelay = Number(container.getAttribute('data-motion-stagger-delay') || 100);
    
    inView(container as HTMLElement, () => {
      animate(
        children as unknown as HTMLElement[],
        { opacity: [0, 1], y: [20, 0] },
        { 
          delay: stagger(staggerDelay),
          duration: 400,
          easing: [0.25, 0.1, 0.25, 1]
        }
      );
      
      // Return false to run the animation only once
      return false;
    });
  });
}

// Initialize animations
export function initMotion() {
  if (typeof window !== 'undefined') {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!prefersReducedMotion) {
      setupScrollAnimations();
      setupStaggeredAnimations();
    } else {
      // Make all elements visible without animation for users who prefer reduced motion
      document.querySelectorAll('[data-motion], [data-motion-stagger-item]')
        .forEach(el => {
          (el as HTMLElement).style.opacity = '1';
          (el as HTMLElement).style.transform = 'none';
        });
    }
  }
}
```

## Step 3: Create an initialization script

Create a new file at `src/components/scripts/motion-init.ts`:

```typescript
import { initMotion } from '@/utils/motion';

// Initialize on first load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initMotion);
} else {
  setTimeout(initMotion, 100);
}

// Re-initialize after Astro page transitions
document.addEventListener('astro:page-load', initMotion);
```

## Step 4: Update Layout.astro to use Motion instead of AOS

Edit `src/layouts/Layout.astro`:

```diff
<script>
  // Only load critical scripts immediately
  import '../components/scripts/transitions';
  
  // Defer non-critical script loading
  window.addEventListener('load', () => {
    // Wait until main thread is idle for non-critical scripts
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(() => {
        import('../components/scripts/icon-optimizer');
-       import('../components/scripts/aos-init');
+       import('../components/scripts/motion-init');
      });
    } else {
      // Fallback for browsers without requestIdleCallback
      setTimeout(() => {
        import('../components/scripts/icon-optimizer');
-       import('../components/scripts/aos-init');
+       import('../components/scripts/motion-init');
      }, 1000);
    }
  });
  
  // Rest of the script...
</script>
```

## Step 5: Update one component as an example

Let's modify one component to use the new Motion approach:

Find a component using AOS (e.g., `src/components/features/home/MissionStats.astro`):

```diff
- <div class="stat-item" data-aos="fade-up" data-aos-delay={100 * index}>
+ <div class="stat-item" data-motion="fade-up" data-motion-delay={100 * index}>
```

For staggered animations, use the new stagger approach:

```diff
- <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
-   {stats.map((stat, index) => (
-     <div class="stat-item" data-aos="fade-up" data-aos-delay={100 * index}>
-       <h3 class="text-4xl font-bold text-primary-600">{stat.value}</h3>
-       <p class="text-gray-600">{stat.label}</p>
-     </div>
-   ))}
- </div>

+ <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12" data-motion-stagger data-motion-stagger-delay="100">
+   {stats.map((stat) => (
+     <div class="stat-item" data-motion-stagger-item>
+       <h3 class="text-4xl font-bold text-primary-600">{stat.value}</h3>
+       <p class="text-gray-600">{stat.label}</p>
+     </div>
+   ))}
+ </div>
```

## Step 6: Create a migration guide for the team

Create a file called `MOTION-MIGRATION.md` to document the transition process:

```markdown
# AOS to Motion One Migration Guide

## How to update components

1. Replace `data-aos` with `data-motion`
2. Replace `data-aos-delay` with `data-motion-delay`
3. Replace `data-aos-duration` with `data-motion-duration`

### Example:

Before:
```html
<div data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
  Content
</div>
```

After:
```html
<div data-motion="fade-up" data-motion-delay="200" data-motion-duration="800">
  Content
</div>
```

## For staggered animations (sequential items)

Before:
```html
<div class="container">
  <div data-aos="fade-up" data-aos-delay="0">Item 1</div>
  <div data-aos="fade-up" data-aos-delay="100">Item 2</div>
  <div data-aos="fade-up" data-aos-delay="200">Item 3</div>
</div>
```

After:
```html
<div class="container" data-motion-stagger data-motion-stagger-delay="100">
  <div data-motion-stagger-item>Item 1</div>
  <div data-motion-stagger-item>Item 2</div>
  <div data-motion-stagger-item>Item 3</div>
</div>
```

## Animation Types
The following animation types are supported:
- `fade-up`
- `fade-down`
- `fade-left`
- `fade-right`
- `zoom-in`

More can be added to the `setupScrollAnimations` function in `src/utils/motion.ts`.
```

## Step 7: Gradual Migration Strategy

1. **Phase 1**: Implement Motion One utility
2. **Phase 2**: Convert high-visibility components first
   - Homepage Hero section
   - Features section
   - Testimonials
3. **Phase 3**: Convert remaining sections (page by page)
4. **Phase 4**: Remove AOS dependencies and cleanup

## Step 8: Cleanup - after migration is complete

After all components have been migrated:

```bash
npm uninstall aos
```

Remove AOS files:
- Delete `src/components/scripts/aos-init.ts`
- Remove AOS CSS from `public/vendor/aos/`

## Benefits of This Approach

1. Significantly reduced bundle size (~5KB vs ~45KB)
2. Better performance using native Web Animation API
3. Cleaner, more modern implementation
4. Improved Progressive Web App performance
5. TypeScript safety for animations
6. Better accessibility support (respects reduced motion preferences)
7. Can be implemented gradually, one component at a time

Would you like me to elaborate on any specific part of the migration plan?
