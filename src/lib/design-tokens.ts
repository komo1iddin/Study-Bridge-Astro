/**
 * Design Tokens
 * 
 * This file contains shared design tokens that are used across
 * both React and Svelte components to ensure consistency.
 */

// Colors
export const colors = {
  // Base colors
  primary: {
    DEFAULT: 'hsl(220, 100%, 50%)',
    foreground: 'hsl(0, 0%, 98%)',
    50: 'hsl(220, 100%, 95%)',
    100: 'hsl(220, 100%, 90%)',
    200: 'hsl(220, 100%, 80%)',
    300: 'hsl(220, 100%, 70%)',
    400: 'hsl(220, 100%, 60%)',
    500: 'hsl(220, 100%, 50%)',
    600: 'hsl(220, 100%, 40%)',
    700: 'hsl(220, 100%, 30%)',
    800: 'hsl(220, 100%, 20%)',
    900: 'hsl(220, 100%, 10%)',
  },
  
  destructive: {
    DEFAULT: 'hsl(0, 100%, 50%)',
    foreground: 'hsl(0, 0%, 98%)',
    50: 'hsl(0, 100%, 95%)',
    100: 'hsl(0, 100%, 90%)',
    200: 'hsl(0, 100%, 80%)',
    300: 'hsl(0, 100%, 70%)',
    400: 'hsl(0, 100%, 60%)',
    500: 'hsl(0, 100%, 50%)',
    600: 'hsl(0, 100%, 40%)',
    700: 'hsl(0, 100%, 30%)',
    800: 'hsl(0, 100%, 20%)',
    900: 'hsl(0, 100%, 10%)',
  },
  
  secondary: {
    DEFAULT: 'hsl(220, 15%, 90%)',
    foreground: 'hsl(220, 15%, 20%)',
  },
  
  muted: {
    DEFAULT: 'hsl(220, 15%, 95%)',
    foreground: 'hsl(220, 15%, 40%)',
  },
  
  accent: {
    DEFAULT: 'hsl(220, 15%, 92%)',
    foreground: 'hsl(220, 15%, 15%)',
  },
  
  card: {
    DEFAULT: 'hsl(0, 0%, 100%)',
    foreground: 'hsl(220, 15%, 15%)',
  },
  
  background: 'hsl(0, 0%, 100%)',
  foreground: 'hsl(220, 15%, 15%)',
  
  border: 'hsl(220, 15%, 90%)',
  input: 'hsl(220, 15%, 85%)',
  ring: 'hsl(220, 100%, 80%)',
  
  // Semantic colors
  success: {
    DEFAULT: 'hsl(142, 72%, 29%)',
    foreground: 'hsl(0, 0%, 98%)',
  },
  
  warning: {
    DEFAULT: 'hsl(35, 92%, 50%)',
    foreground: 'hsl(35, 40%, 20%)',
  },
  
  info: {
    DEFAULT: 'hsl(200, 98%, 50%)',
    foreground: 'hsl(0, 0%, 98%)',
  },
}

// Typography
export const typography = {
  fontFamily: {
    sans: 'ui-sans-serif, system-ui, sans-serif',
    serif: 'ui-serif, Georgia, serif',
    mono: 'ui-monospace, monospace',
  },
  fontSize: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '1.875rem',// 30px
    '4xl': '2.25rem', // 36px
    '5xl': '3rem',    // 48px
    '6xl': '3.75rem', // 60px
  },
  fontWeight: {
    thin: '100',
    extralight: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
  },
  lineHeight: {
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
  },
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
}

// Spacing
export const spacing = {
  0: '0',
  1: '0.25rem',
  2: '0.5rem',
  3: '0.75rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  8: '2rem',
  10: '2.5rem',
  12: '3rem',
  16: '4rem',
  20: '5rem',
  24: '6rem',
  32: '8rem',
  40: '10rem',
  48: '12rem',
  56: '14rem',
  64: '16rem',
}

// Border radius
export const borderRadius = {
  none: '0',
  sm: '0.125rem',
  DEFAULT: '0.25rem',
  md: '0.375rem',
  lg: '0.5rem',
  xl: '0.75rem',
  '2xl': '1rem',
  '3xl': '1.5rem',
  full: '9999px',
}

// Shadows
export const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  none: 'none',
}

// Transitions
export const transitions = {
  duration: {
    75: '75ms',
    100: '100ms',
    150: '150ms',
    200: '200ms',
    300: '300ms',
    500: '500ms',
    700: '700ms',
    1000: '1000ms',
  },
  timing: {
    DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
    linear: 'linear',
    in: 'cubic-bezier(0.4, 0, 1, 1)',
    out: 'cubic-bezier(0, 0, 0.2, 1)',
    'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
}

// Z-index
export const zIndex = {
  0: '0',
  10: '10',
  20: '20',
  30: '30',
  40: '40',
  50: '50',
  auto: 'auto',
}

// Component-specific tokens
export const components = {
  card: {
    padding: spacing[6],
    borderRadius: borderRadius.lg,
    shadow: shadows.sm,
    border: `1px solid ${colors.border}`,
    background: colors.card.DEFAULT,
    foreground: colors.card.foreground,
    headerSpacing: '1.5',
  },
  button: {
    borderRadius: borderRadius.md,
    fontWeight: typography.fontWeight.medium,
    disabledOpacity: '0.5',
    sizes: {
      sm: {
        height: '2.25rem', // h-9
        padding: `0 ${spacing[3]}`, // px-3
        fontSize: typography.fontSize.sm,
      },
      md: {
        height: '2.5rem', // h-10
        padding: `0 ${spacing[4]}`, // px-4
        fontSize: typography.fontSize.sm,
      },
      lg: {
        height: '2.75rem', // h-11
        padding: `0 ${spacing[8]}`, // px-8
        fontSize: typography.fontSize.base,
      },
    },
  },
  input: {
    borderRadius: borderRadius.md,
    borderColor: colors.input,
    background: colors.background,
    padding: `${spacing[2]} ${spacing[3]}`,
    height: '2.5rem',
    fontSize: typography.fontSize.sm,
  },
  checkbox: {
    size: '1rem',
    borderRadius: borderRadius.sm,
    indicatorSize: '0.75rem',
  },
  radio: {
    size: '1rem',
    indicatorSize: '0.5rem',
  },
  alert: {
    padding: spacing[4],
    borderRadius: borderRadius.lg,
    fontSize: typography.fontSize.sm,
  }
} 