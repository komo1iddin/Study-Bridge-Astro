/**
 * Component Lazy Loading Utilities
 * 
 * This module provides utilities for optimizing component loading performance
 * with advanced lazy loading techniques beyond Astro's built-in directives.
 */

import { onMount } from 'svelte';

/**
 * Configuration for manual lazy loading
 */
export interface LazyLoadOptions {
  rootMargin?: string;
  threshold?: number;
  delay?: number;
  once?: boolean;
}

/**
 * A Svelte action to lazy load component content when it's visible in the viewport
 * Usage: <div use:lazyLoadAction={{rootMargin: '200px'}}>Content to lazy load</div>
 */
export function lazyLoadAction(node: HTMLElement, options: LazyLoadOptions = {}) {
  const {
    rootMargin = '200px',
    threshold = 0.1,
    delay = 0,
    once = true
  } = options;

  // Store original display style
  const originalDisplay = node.style.display;
  
  // Initially hide the component if not using Astro's built-in directives
  if (delay > 0) {
    node.style.display = 'none';
  }

  let observer: IntersectionObserver;
  
  const setupObserver = () => {
    // Only setup if browser supports IntersectionObserver
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Delay showing the component if requested
            if (delay > 0) {
              setTimeout(() => {
                node.style.display = originalDisplay;
              }, delay);
            }
            
            // Add animation class
            node.classList.add('lazy-loaded');
            
            // Disconnect observer if we only want to trigger once
            if (once) {
              observer.disconnect();
            }
            
            // Log performance metrics if available
            if (window.performance && window.performance.mark) {
              const componentName = node.dataset.component || 'unknown-component';
              window.performance.mark(`${componentName}-visible`);
            }
          }
        });
      }, { rootMargin, threshold });
      
      observer.observe(node);
    }
  };
  
  // Setup immediately for client-side scripts
  if (typeof window !== 'undefined') {
    setupObserver();
  }
  
  return {
    destroy() {
      // Clean up observer when component is destroyed
      if (observer) {
        observer.disconnect();
      }
    }
  };
}

/**
 * Register component load for performance tracking
 */
export function registerComponentLoad(componentName: string) {
  if (typeof window !== 'undefined' && window.performance && window.performance.mark) {
    window.performance.mark(`${componentName}-loaded`);
    
    if (window.performance.getEntriesByName(`${componentName}-visible`).length > 0) {
      window.performance.measure(
        `${componentName}-load-to-visible`,
        `${componentName}-loaded`,
        `${componentName}-visible`
      );
    }
  }
}

/**
 * Hook for lazy loading in Svelte components
 * Usage: <div use:useLazyLoad={'component-name'}>Content</div>
 */
export function useLazyLoad(componentName: string, options: LazyLoadOptions = {}) {
  return function(node: HTMLElement) {
    // Register the component name
    node.dataset.component = componentName;
    
    // Apply lazy loading
    const lazyLoadInstance = lazyLoadAction(node, options);
    
    // Register component load for performance tracking
    registerComponentLoad(componentName);
    
    return lazyLoadInstance;
  };
}

/**
 * JavaScript function for lazy loading content outside of components
 */
export function setupLazyContent(selector: string, options: LazyLoadOptions = {}) {
  if (typeof document === 'undefined') return;
  
  const elements = document.querySelectorAll(selector);
  elements.forEach(el => {
    if (el instanceof HTMLElement) {
      lazyLoadAction(el, options);
    }
  });
} 