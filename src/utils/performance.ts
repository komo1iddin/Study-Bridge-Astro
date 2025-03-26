// Performance monitoring utilities
export interface PerformanceMetrics {
  componentLoadTime: number;
  bundleSize: number;
  renderTime: number;
  interactionTime: number;
}

class PerformanceMonitor {
  private metrics: Map<string, PerformanceMetrics> = new Map();

  // Track component load time
  trackComponentLoad(componentName: string, startTime: number) {
    const loadTime = performance.now() - startTime;
    this.updateMetrics(componentName, { componentLoadTime: loadTime });
  }

  // Track bundle size
  trackBundleSize(componentName: string, size: number) {
    this.updateMetrics(componentName, { bundleSize: size });
  }

  // Track render time
  trackRenderTime(componentName: string, renderTime: number) {
    this.updateMetrics(componentName, { renderTime });
  }

  // Track time to first interaction
  trackInteractionTime(componentName: string, interactionTime: number) {
    this.updateMetrics(componentName, { interactionTime });
  }

  // Update metrics
  private updateMetrics(componentName: string, newMetrics: Partial<PerformanceMetrics>) {
    const currentMetrics = this.metrics.get(componentName) || {
      componentLoadTime: 0,
      bundleSize: 0,
      renderTime: 0,
      interactionTime: 0
    };
    
    this.metrics.set(componentName, {
      ...currentMetrics,
      ...newMetrics
    });
  }

  // Get metrics for a component
  getMetrics(componentName: string): PerformanceMetrics | undefined {
    return this.metrics.get(componentName);
  }

  // Get all metrics
  getAllMetrics(): Record<string, PerformanceMetrics> {
    return Object.fromEntries(this.metrics);
  }
}

export const performanceMonitor = new PerformanceMonitor();