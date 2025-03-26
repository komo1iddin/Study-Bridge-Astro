/**
 * Theme Utilities
 * 
 * Functions to help use design tokens consistently in both React and Svelte components.
 * These utilities work alongside the existing design system, not replacing it.
 */

import { colors, typography, borderRadius, spacing, components } from './design-tokens';

/**
 * Creates a function that generates CSS custom properties for a component
 * This is useful for generating CSS variables that can be used in both React and Svelte
 */
export function createCssVars(prefix: string, tokens: Record<string, any>) {
  return Object.entries(tokens).reduce((acc, [key, value]) => {
    acc[`--${prefix}-${key}`] = typeof value === 'string' ? value : JSON.stringify(value);
    return acc;
  }, {} as Record<string, string>);
}

/**
 * Creates a component variant configuration compatible with both frameworks
 */
export function createVariantConfig(
  variants: Record<string, Record<string, string>>
) {
  return (options: Record<string, string>) => {
    return Object.entries(options).reduce((acc, [key, value]) => {
      if (variants[key] && variants[key][value]) {
        acc.push(variants[key][value]);
      }
      return acc;
    }, [] as string[]).join(' ');
  };
}

/**
 * Gets a CSS variable from the design system
 */
export function getCssVar(varName: string, fallback?: string) {
  return fallback ? `var(${varName}, ${fallback})` : `var(${varName})`;
}

/**
 * Card component theme configuration for both React and Svelte
 */
export const cardTheme = {
  base: 'rounded-lg border bg-card text-card-foreground shadow-sm',
  header: 'flex flex-col space-y-1.5 p-6',
  title: 'text-lg font-semibold leading-none tracking-tight',
  description: 'text-sm text-muted-foreground',
  content: 'p-6 pt-0',
  footer: 'flex items-center p-6 pt-0',
};

/**
 * Button component theme configuration for both React and Svelte
 */
export const buttonTheme = {
  base: 'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  variant: {
    default: 'bg-primary text-primary-foreground hover:bg-primary/90',
    destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
    outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
    ghost: 'hover:bg-accent hover:text-accent-foreground',
    link: 'text-primary underline-offset-4 hover:underline',
  },
  size: {
    default: 'h-10 px-4 py-2',
    sm: 'h-9 px-3',
    lg: 'h-11 px-8',
    icon: 'h-10 w-10',
  },
};

/**
 * Alert component theme configuration for both React and Svelte
 */
export const alertTheme = {
  base: 'relative w-full rounded-lg border p-4',
  variant: {
    default: 'bg-background text-foreground',
    destructive: 'border-destructive/50 text-destructive dark:border-destructive bg-destructive/10',
  },
  title: 'mb-1 font-medium leading-none tracking-tight',
  description: 'text-sm [&_p]:leading-relaxed',
};

/**
 * Checkbox component theme configuration for both React and Svelte
 */
export const checkboxTheme = {
  base: 'peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
  indicator: 'h-4 w-4 text-current',
};

/**
 * Input component theme configuration for both React and Svelte
 */
export const inputTheme = {
  base: 'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  variant: {
    default: '',
    destructive: 'border-destructive focus-visible:ring-destructive',
    outlined: 'border-2',
    ghost: 'border-none bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0',
  },
  size: {
    default: 'h-10 px-3 py-2',
    sm: 'h-8 px-2 py-1 text-xs',
    lg: 'h-12 px-4 py-3 text-base'
  }
};

/**
 * RadioGroup component theme configuration for both React and Svelte
 */
export const radioTheme = {
  base: 'peer h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
  indicator: 'h-2 w-2 rounded-full bg-current',
};

/**
 * Accordion component theme configuration for both React and Svelte
 */
export const accordionTheme = {
  item: 'border-b',
  trigger: 'flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180',
  content: 'overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
  icon: 'h-4 w-4 shrink-0 transition-transform duration-200',
};

/**
 * Select component theme configuration for both React and Svelte
 */
export const selectTheme = {
  trigger: 'flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  content: 'relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
  label: 'py-1.5 pl-8 pr-2 text-sm font-semibold',
  item: 'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
  viewport: 'p-1',
  indicator: 'absolute left-2 flex h-3.5 w-3.5 items-center justify-center',
  separator: '-mx-1 my-1 h-px bg-muted',
  scrollButton: 'flex cursor-default items-center justify-center py-1',
};

/**
 * Tabs component theme configuration for both React and Svelte
 */
export const tabsTheme = {
  list: 'inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground',
  trigger: 'inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm',
  content: 'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
};

/**
 * Avatar component theme configuration for both React and Svelte
 */
export const avatarTheme = {
  base: 'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full',
  image: 'aspect-square h-full w-full object-cover',
  fallback: 'flex h-full w-full items-center justify-center rounded-full bg-muted',
};

/**
 * Separator component theme configuration for both React and Svelte
 */
export const separatorTheme = {
  base: 'shrink-0 bg-border',
  horizontal: 'h-[1px] w-full',
  vertical: 'h-full w-[1px]',
};

/**
 * Badge component theme configuration for both React and Svelte
 */
export const badgeTheme = {
  base: 'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  variant: {
    default: 'border-transparent bg-primary text-primary-foreground hover:bg-primary/80',
    secondary: 'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
    destructive: 'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
    outline: 'text-foreground',
  },
};

/**
 * Skeleton component theme configuration for both React and Svelte
 */
export const skeletonTheme = {
  base: 'animate-pulse rounded-md bg-muted',
};

/**
 * Textarea component theme configuration for both React and Svelte
 */
export const textareaTheme = {
  base: 'flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
};

/**
 * Label component theme configuration for both React and Svelte
 */
export const labelTheme = {
  base: 'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
};

/**
 * Dialog component theme configuration for both React and Svelte
 */
export const dialogTheme = {
  overlay: 'fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
  content: 'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg',
  closeButton: 'absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none',
  header: 'flex flex-col space-y-1.5 text-center sm:text-left',
  footer: 'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
  title: 'text-lg font-semibold leading-none tracking-tight',
};

/**
 * Sheet component theme configuration for both React and Svelte
 */
export const sheetTheme = {
  overlay: 'sheet-overlay fixed inset-0 z-50 bg-black/80',
  content: {
    base: 'fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out',
    side: {
      top: 'inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top',
      right: 'inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm',
      bottom: 'inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
      left: 'inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm',
    }
  },
  closeButton: 'absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none',
  header: 'flex flex-col space-y-2 text-center sm:text-left',
  footer: 'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
  title: 'text-lg font-semibold text-foreground',
  description: 'text-sm text-muted-foreground',
};

/**
 * Switch component theme configuration for both React and Svelte
 */
export const switchTheme = {
  root: 'peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input',
  thumb: 'pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0',
};

/**
 * SectionHeader component theme configuration for both React and Svelte
 */
export const sectionHeaderTheme = {
  container: 'mx-auto text-center mb-8 md:mb-12',
  title: 'text-3xl font-bold tracking-tight md:text-3xl lg:text-4xl mb-5 animate-fade-in',
  subtitle: 'text-muted-foreground md:text-lg max-w-[600px] mx-auto opacity-0 animate-[fade-in_1s_ease-out_0.2s_forwards]',
  divider: 'h-1 bg-primary-600 mx-auto mt-4 w-20 opacity-0 animate-[fade-in_1s_ease-out_0.4s_forwards]',
}; 