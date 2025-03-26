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
  
  // Create autoplay plugin
  const autoplay = Autoplay({ delay, stopOnInteraction: true });
  
  // Initialize carousel with options and plugins
  const emblaApi = EmblaCarousel(
    emblaNode, 
    emblaOptions,
    [autoplay]
  );
  
  return { emblaApi, autoplay };
} 