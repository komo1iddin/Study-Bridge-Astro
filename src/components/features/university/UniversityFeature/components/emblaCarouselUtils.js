import EmblaCarousel from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';

/**
 * Creates and initializes an Embla Carousel
 * @param {HTMLElement} emblaNode - The DOM reference to the carousel container
 * @param {Object} options - Carousel options including autoplay delay
 * @returns {Object} - The initialized carousel API and autoplay plugin
 */
export function createEmblaCarousel(emblaNode, options = {}) {
  if (!emblaNode) return { emblaApi: null, autoplay: null };
  
  const { delay = 4000, ...emblaOptions } = options;
  
  // Detect if mobile device for optimized settings
  const isMobile = window.innerWidth <= 768;
  
  // Apply hardware acceleration to carousel elements for better mobile performance
  const slides = emblaNode.querySelectorAll('.flex > div');
  slides.forEach(slide => {
    slide.style.willChange = 'transform';
    
    // Add passive touch listeners for better mobile performance
    slide.addEventListener('touchstart', () => {}, { passive: true });
    slide.addEventListener('touchmove', () => {}, { passive: true });
  });
  
  // Optimize carousel settings for mobile
  const optimizedOptions = {
    ...emblaOptions,
    // Better touch drag settings
    dragFree: isMobile ? true : emblaOptions.dragFree,
    watchDrag: true,
    speed: isMobile ? 15 : 20, // Slightly slower on mobile for smoother animations
    inViewThreshold: isMobile ? 0.1 : 0.7, // Show content sooner on mobile
    // Use CSS rendering where possible
    cssMode: true
  };
  
  // Create autoplay plugin with stop on interaction for better mobile UX
  const autoplay = Autoplay({ delay, stopOnInteraction: true, stopOnMouseEnter: true });
  
  // Initialize carousel with options and plugins
  const emblaApi = EmblaCarousel(
    emblaNode, 
    optimizedOptions,
    [autoplay]
  );
  
  // Add touch optimization after initialization
  if (isMobile && emblaApi) {
    // Reduce repaints and optimize rendering during scrolling
    emblaNode.style.willChange = 'transform';
    emblaNode.style.backfaceVisibility = 'hidden';
  }
  
  return { emblaApi, autoplay };
} 