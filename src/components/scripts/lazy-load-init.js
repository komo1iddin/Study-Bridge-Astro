/**
 * Lazy Loading Initialization Script
 * 
 * This script initializes lazy loading for standard HTML elements
 * that aren't managed by component frameworks.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Configuration
  const config = {
    rootMargin: '200px', // Load when within 200px of viewport
    threshold: 0.1 // Start loading when 10% visible
  };
  
  // Elements to observe for lazy loading
  const lazyElements = document.querySelectorAll('.lazy-load');
  
  // Create observer only if IntersectionObserver is supported
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target;
          
          // Add the lazy-loaded class for animations
          element.classList.add('lazy-loaded');
          
          // Handle lazy images if this is an image container
          const lazyImage = element.querySelector('img[data-src]');
          if (lazyImage) {
            lazyImage.src = lazyImage.dataset.src;
            if (lazyImage.dataset.srcset) {
              lazyImage.srcset = lazyImage.dataset.srcset;
            }
            lazyImage.classList.add('loaded');
          }
          
          // Handle background images
          if (element.dataset.background) {
            element.style.backgroundImage = `url('${element.dataset.background}')`;
          }
          
          // Stop observing this element
          observer.unobserve(element);
          
          // Log performance data
          if (window.performance && window.performance.mark) {
            const componentName = element.dataset.component || 'unknown';
            window.performance.mark(`${componentName}-visible`);
          }
        }
      });
    }, config);
    
    // Start observing each element
    lazyElements.forEach(element => {
      // Add placeholder class
      element.classList.add('lazy-placeholder');
      // Start observing
      observer.observe(element);
    });
  } else {
    // Fallback for browsers without IntersectionObserver
    // Simply show all elements
    lazyElements.forEach(element => {
      element.classList.remove('lazy-placeholder');
      element.classList.add('lazy-loaded');
      
      // Handle images
      const lazyImage = element.querySelector('img[data-src]');
      if (lazyImage) {
        lazyImage.src = lazyImage.dataset.src;
        if (lazyImage.dataset.srcset) {
          lazyImage.srcset = lazyImage.dataset.srcset;
        }
      }
      
      // Handle background images
      if (element.dataset.background) {
        element.style.backgroundImage = `url('${element.dataset.background}')`;
      }
    });
  }
  
  // Handle lazy background images (separate from lazy-load containers)
  const lazyBackgrounds = document.querySelectorAll('.lazy-background');
  
  if ('IntersectionObserver' in window) {
    const bgObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target;
          
          if (element.dataset.background) {
            element.style.backgroundImage = `url('${element.dataset.background}')`;
            element.classList.add('lazy-loaded');
            element.classList.remove('lazy-placeholder');
          }
          
          bgObserver.unobserve(element);
        }
      });
    }, config);
    
    lazyBackgrounds.forEach(bg => {
      bg.classList.add('lazy-placeholder');
      bgObserver.observe(bg);
    });
  } else {
    // Fallback
    lazyBackgrounds.forEach(bg => {
      if (bg.dataset.background) {
        bg.style.backgroundImage = `url('${bg.dataset.background}')`;
        bg.classList.add('lazy-loaded');
        bg.classList.remove('lazy-placeholder');
      }
    });
  }
  
  // Add a global helper in case we need to manually trigger lazy loading
  window.refreshLazyLoad = () => {
    document.querySelectorAll('.lazy-load:not(.lazy-loaded), .lazy-background:not(.lazy-loaded)').forEach(element => {
      element.classList.add('lazy-loaded');
      element.classList.remove('lazy-placeholder');
      
      // Handle images
      const lazyImage = element.querySelector('img[data-src]');
      if (lazyImage) {
        lazyImage.src = lazyImage.dataset.src;
        if (lazyImage.dataset.srcset) {
          lazyImage.srcset = lazyImage.dataset.srcset;
        }
      }
      
      // Handle background images
      if (element.dataset.background) {
        element.style.backgroundImage = `url('${element.dataset.background}')`;
      }
    });
  };
}); 