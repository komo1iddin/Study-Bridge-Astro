import EmblaCarousel from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';

/**
 * Creates and initializes an Embla Carousel with extreme performance optimizations
 * @param {HTMLElement} emblaNode - The DOM reference to the carousel container
 * @param {Object} options - Carousel options including autoplay delay
 * @returns {Object} - The initialized carousel API and autoplay plugin
 */
export function createEmblaCarousel(emblaNode, options = {}) {
  if (!emblaNode) return { emblaApi: null, autoplay: null };
  
  // Get device information
  const isMobile = window.innerWidth <= 768;
  const pixelRatio = window.devicePixelRatio || 1;
  const isLowEndDevice = pixelRatio < 2 || navigator.hardwareConcurrency <= 4;

  // Apply hardware acceleration to entire carousel container
  if (emblaNode) {
    // Force GPU acceleration
    emblaNode.style.transform = 'translate3d(0, 0, 0)';
    emblaNode.style.backfaceVisibility = 'hidden';
    emblaNode.style.perspective = '1000px';
    emblaNode.style.willChange = 'transform';
    
    // Add container styles for better touch handling
    emblaNode.style.overscrollBehavior = 'none';
    emblaNode.style.touchAction = 'pan-y';
    emblaNode.style.webkitOverflowScrolling = 'touch';
    
    // Disable all unnecessary transitions during sliding
    const slideTrack = emblaNode.querySelector('.flex');
    if (slideTrack) {
      slideTrack.style.transition = 'none';
      slideTrack.style.willChange = 'transform';
      
      // Optimize each slide
      const slides = slideTrack.children;
      for (let i = 0; i < slides.length; i++) {
        const slide = slides[i];
        // Apply compositing optimizations
        slide.style.transform = 'translate3d(0, 0, 0)';
        slide.style.backfaceVisibility = 'hidden';
        
        // Use fixed size to avoid recalculation
        slide.style.width = isMobile ? '280px' : '320px';
        slide.style.boxSizing = 'border-box';
        
        // Optimize images inside slides
        const images = slide.querySelectorAll('img');
        images.forEach(img => {
          img.style.willChange = 'transform';
          img.loading = 'lazy';
          
          // Scale down images on low-end devices
          if (isLowEndDevice) {
            img.style.transform = 'scale(0.9)';
          }
        });
      }
    }
  }

  // Use simpler autoplay settings or disable on low-end devices
  let autoplay = null;
  if (!isLowEndDevice) {
    autoplay = Autoplay({ 
      delay: options.delay || 4000,
      stopOnInteraction: true,
      stopOnMouseEnter: true,
      rootNode: emblaNode
    });
  }
  
  // Extreme performance settings for embla
  const carouselOptions = {
    // Base settings
    loop: true,
    align: "start",
    skipSnaps: false,
    containScroll: "trimSnaps",
    
    // Motion settings - much gentler for mobile
    startIndex: 0,
    slidesToScroll: 1,
    speed: isMobile ? 10 : 15,  // Slower for smoother appearance
    
    // Mobile optimizations
    dragFree: isMobile,
    watchDrag: false,  // Disable constant watching for perf
    
    // View adjustments
    inViewThreshold: isMobile ? 0 : 0.5, // Disable threshold checks on mobile
    
    // Toggle between CSS and JS based on device capability
    direction: 'ltr',
    watchResize: false, // Disable resize watching for performance
    
    // Completely disable animations on low-end devices
    duration: isLowEndDevice ? 0 : undefined
  };
  
  // Merge user options with performance options, prioritizing performance
  const optimizedOptions = {...options, ...carouselOptions};
  
  // Initialize with performance options, add autoplay only if needed
  const plugins = autoplay ? [autoplay] : [];
  const emblaApi = EmblaCarousel(emblaNode, optimizedOptions, plugins);
  
  // Add event-based optimizations
  if (emblaApi) {
    // Reduce repaints during dragging
    emblaApi.on('pointerDown', () => {
      if (slideTrack) {
        // Disable all transitions during dragging for maximum performance
        document.body.style.pointerEvents = 'none';
        slideTrack.style.pointerEvents = 'auto';
      }
    });
    
    emblaApi.on('pointerUp', () => {
      document.body.style.pointerEvents = '';
      if (slideTrack) slideTrack.style.pointerEvents = '';
    });
    
    // Clear any transform animations when inactive
    emblaApi.on('settle', () => {
      if (isLowEndDevice && slideTrack) {
        // Force repaint to clear any transform artifacts
        slideTrack.style.transform = 'translate3d(0, 0, 0)';
      }
    });
  }
  
  // Prevent jank when scrolling the page
  const preventScrollJank = () => {
    if (emblaNode) {
      emblaNode.style.pointerEvents = 'none';
      setTimeout(() => {
        emblaNode.style.pointerEvents = 'auto';
      }, 100);
    }
  };
  
  window.addEventListener('scroll', preventScrollJank, { passive: true });
  
  return { 
    emblaApi, 
    autoplay,
    // Add a cleanup function for event listeners
    cleanup: () => {
      window.removeEventListener('scroll', preventScrollJank);
    }
  };
} 