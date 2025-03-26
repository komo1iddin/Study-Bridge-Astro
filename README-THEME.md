# Shared Theme System for React and Svelte Components

This document outlines the shared theme system implemented to maintain visual consistency between React and Svelte components **within the existing Astro application**.

## Table of Contents

1. [Overview](#overview)
2. [Integration Approach](#integration-approach)
3. [Theme Utilities](#theme-utilities)
4. [Component Theme Objects](#component-theme-objects)
5. [Usage Examples](#usage-examples)
6. [Best Practices](#best-practices)

## Overview

Our theme system creates a shared approach for styling React and Svelte components. Instead of replacing the existing design system used by the Astro application, this approach **works alongside it** to ensure UI consistency while minimizing disruption to the existing codebase.

## Integration Approach

Unlike a complete redesign, our approach:

1. **Preserves the existing Tailwind configuration** used by the Astro application
2. **Adds component-specific theme objects** that both React and Svelte can reference
3. **Creates utility functions** for consistent component styling
4. **Reuses existing CSS variables** already defined in the application

This hybrid approach ensures that we maintain consistency while not breaking existing functionality or styling.

## Theme Utilities

Located in `src/lib/theme-utils.ts`, these utilities help use styles consistently:

- `createCssVars`: Generates CSS custom properties for components
- `createVariantConfig`: Creates component variant configurations
- `getCssVar`: Retrieves design system CSS variables
- Component-specific theme objects (e.g., `cardTheme`, `buttonTheme`)

## Component Theme Objects

For each UI component we've defined a theme object that contains the classes needed for styling. These include:

- `cardTheme`: Card component styling
- `buttonTheme`: Button component styling
- `alertTheme`: Alert component styling
- `checkboxTheme`: Checkbox component styling
- `inputTheme`: Input field styling
- `radioTheme`: Radio button styling

These objects are used by both the React and Svelte versions of each component to ensure visual consistency.

## Usage Examples

### React Component Example

```tsx
import { cn } from "@/lib/utils";
import { cardTheme } from "@/lib/theme-utils";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(cardTheme.base, className)}
    {...props}
  />
))
```

### Svelte Component Example

```svelte
<script lang="ts">
  import { cn } from '@/lib/utils';
  import { cardTheme } from '@/lib/theme-utils';
  
  let className = "";
  export { className as class };
</script>

<div class={cn(cardTheme.base, className)} {...$$restProps}>
  <slot />
</div>
```

## Best Practices

1. **Use the theme objects for new components** instead of hardcoding classes
2. **Don't modify existing Astro components** unless absolutely necessary
3. **Keep the theme objects in sync** when changes are needed
4. **Test across all frameworks** to ensure consistent rendering
5. **Document any changes** to the theme objects

By following these practices, we ensure that our React and Svelte components maintain visual consistency while also integrating well with the existing Astro application. 