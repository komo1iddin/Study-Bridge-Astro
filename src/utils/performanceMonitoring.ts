import { performanceMonitor } from './performance';

// Initialize performance monitoring
export function initPerformanceMonitoring() {
  if (typeof window === 'undefined') return;

  // Track page load performance
  window.addEventListener('load', () => {
    const pageLoadTime = performance.now();
    console.log(`Page loaded in ${pageLoadTime}ms`);
  });

  // Track component load times
  document.addEventListener('astro:page-load', () => {
    const components = document.querySelectorAll('[data-component-name]');
    components.forEach(component => {
      const name = component.getAttribute('data-component-name');
      if (!name) return;

      const renderStart = performance.now();
      
      // Use Intersection Observer to track when component becomes visible
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const renderTime = performance.now() - renderStart;
            performanceMonitor.trackRenderTime(name, renderTime);
            observer.disconnect();
          }
        });
      });

      observer.observe(component);
    });
  });

  // Track user interactions
  document.addEventListener('click', (e) => {
    const component = (e.target as Element).closest('[data-component-name]');
    if (!component) return;

    const name = component.getAttribute('data-component-name');
    if (!name) return;

    performanceMonitor.trackInteractionTime(name, performance.now());
  });
}

// Report performance metrics
export function reportPerformanceMetrics() {
  const metrics = performanceMonitor.getAllMetrics();
  console.table(metrics);
  
  // Here you could send metrics to your analytics service
  // sendMetricsToAnalytics(metrics);
}