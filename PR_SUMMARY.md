# Mobile Navigation Component: React to Svelte Migration

## Overview

This PR introduces a new Svelte implementation of the mobile navigation component, which was previously implemented in React. The Svelte implementation aims to improve performance and reduce bundle size while maintaining the same functionality and user experience.

## Changes Made

1. Created `MobileNav.svelte` as a Svelte equivalent to the React `MobileNav.tsx`
2. Used Svelte's built-in transition system instead of Framer Motion
3. Implemented identical styling and functionality to the React version
4. Added a testing page at `/test-mobile-nav` to evaluate the component
5. Updated `MainHeader.astro` to conditionally support the Svelte version

## How to Test

1. Navigate to `/test-mobile-nav` to see the standalone Svelte component
2. Change the `testSvelteVersion` flag in `MainHeader.astro` to `true` to test the component in the actual header

## Implementation Notes

### Key Features Preserved
- Mobile menu with dropdown items
- Language selector
- Contact information
- CTA button functionality
- Animations and transitions
- SSR compatibility

### Technical Details
- Used Svelte's `slide` transition instead of Framer Motion animations
- Implemented identical state management using Svelte's reactive variables
- Used TypeScript for type safety
- Handled the window global `showOfferPopup` method safely

## Deployment Plan

To implement this change in production:

1. Test thoroughly across all pages
2. Update `MainHeader.astro` to import only the Svelte version
3. Remove the React version if no longer needed
4. Deploy and monitor performance metrics

## Future Improvements

- Consider moving contact information to a shared component
- Evaluate consolidating language selection logic across components
- Add unit tests for the Svelte component

## Dependencies

- Requires Svelte integration in the Astro config (already present)
- Uses `lucide-svelte` for icons 