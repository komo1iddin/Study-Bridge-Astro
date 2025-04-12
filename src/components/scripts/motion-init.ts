// motion-init.ts
// Initialize Motion for animations

// Import the animate and inView functions from Motion
// Using the any type to avoid TypeScript errors with Motion API
declare const motion: any;

/**
 * Initialize animations for elements with data-animate attribute
 */
function initializeAnimations(): void {
  // Access the Motion API
  const { animate, inView, stagger } = motion;
  
  if (!animate || !inView) {
    console.warn('Motion library not loaded properly');
    return;
  }

  // Handle in-view animations for elements with data-animate
  const animatableElements = document.querySelectorAll('[data-animate]');
  if (animatableElements.length > 0) {
    inView('[data-animate]', (element: HTMLElement) => {
      const animationType = element.dataset.animate || 'fadeIn';
      const delay = parseFloat(element.dataset.delay || '0');
      const duration = parseFloat(element.dataset.duration || '0.5');
      
      // Apply different animation types
      switch (animationType) {
        case 'fadeIn':
          animate(element, { opacity: [0, 1] }, { delay, duration });
          break;
        case 'slideUp':
          animate(element, { y: [50, 0], opacity: [0, 1] }, { delay, duration });
          break;
        case 'slideDown':
          animate(element, { y: [-50, 0], opacity: [0, 1] }, { delay, duration });
          break;
        case 'slideLeft':
          animate(element, { x: [50, 0], opacity: [0, 1] }, { delay, duration });
          break;
        case 'slideRight':
          animate(element, { x: [-50, 0], opacity: [0, 1] }, { delay, duration });
          break;
        case 'zoomIn':
          animate(element, { scale: [0.8, 1], opacity: [0, 1] }, { delay, duration });
          break;
        default:
          animate(element, { opacity: [0, 1] }, { delay, duration });
      }
    });
  }
  
  // Handle staggered animations for groups
  const staggerGroups = document.querySelectorAll('[data-stagger-group]');
  Array.from(staggerGroups).forEach((group) => {
    // Type cast to HTMLElement
    const htmlGroup = group as HTMLElement;
    const children = htmlGroup.querySelectorAll('[data-stagger-item]');
    const staggerAmount = parseFloat(htmlGroup.dataset.staggerAmount || '0.05');
    
    if (children.length > 0) {
      inView(htmlGroup, () => {
        animate(
          Array.from(children), 
          { opacity: [0, 1], y: [20, 0] },
          { 
            delay: stagger(staggerAmount),
            duration: 0.5
          }
        );
      });
    }
  });
}

// Initialize animations when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Check if Motion is available
  if (typeof motion !== 'undefined') {
    initializeAnimations();
  } else {
    // If Motion isn't loaded yet, try again in a moment
    const checkInterval = setInterval(() => {
      if (typeof motion !== 'undefined') {
        initializeAnimations();
        clearInterval(checkInterval);
      }
    }, 100);
    
    // Give up after 3 seconds to avoid infinite checking
    setTimeout(() => clearInterval(checkInterval), 3000);
  }
});

// Handle page transitions in Astro
document.addEventListener('astro:page-load', () => {
  if (typeof motion !== 'undefined') {
    initializeAnimations();
  }
});

// Export for possible use in other modules
export { initializeAnimations }; 