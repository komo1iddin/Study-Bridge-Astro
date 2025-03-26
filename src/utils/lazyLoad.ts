import { atom } from 'nanostores';

// Store for tracking component loading states
export const $loadingStates = atom<Record<string, boolean>>({});

// Performance metrics store
export const $performanceMetrics = atom<{
  loadTimes: Record<string, number>;
  bundleSizes: Record<string, number>;
}>({
  loadTimes: {},
  bundleSizes: {}
});

// Utility function to measure component load time
export function measureLoadTime(componentName: string, startTime: number) {
  const loadTime = performance.now() - startTime;
  const currentMetrics = $performanceMetrics.get();
  
  $performanceMetrics.set({
    ...currentMetrics,
    loadTimes: {
      ...currentMetrics.loadTimes,
      [componentName]: loadTime
    }
  });
}

// Error boundary component for lazy loading
export class LazyLoadError extends Error {
  constructor(componentName: string) {
    super(`Failed to load component: ${componentName}`);
    this.name = 'LazyLoadError';
  }
}