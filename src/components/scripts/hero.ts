// hero.ts fayliga qo'shish

interface ParallaxOptions {
  maxRotate: number;
  maxTranslate: number;
  perspective: number;
  scale: number;
}

export class ParallaxEffect {
  private container: HTMLElement | null;
  private element: HTMLElement | null;
  private options: ParallaxOptions;
  private isActive = false;
  private bounds: DOMRect | null = null;
  private animationFrame: number | null = null;
  private isLowEndDevice: boolean;

  constructor(options: Partial<ParallaxOptions> = {}) {
    this.options = {
      maxRotate: 3,
      maxTranslate: 10,
      perspective: 1000,
      scale: 1.02,
      ...options
    };
    
    this.container = null;
    this.element = null;
    // Check for low-end devices based on hardware concurrency
    this.isLowEndDevice = navigator.hardwareConcurrency 
      ? navigator.hardwareConcurrency <= 4 
      : false;
    
    // Reduce effects on low-end devices
    if (this.isLowEndDevice) {
      this.options.maxRotate *= 0.5;
      this.options.maxTranslate *= 0.5;
      this.options.scale = 1.01;
    }
  }

  // Новый метод для инициализации после загрузки DOM
  initialize(): void {
    this.container = document.querySelector('.parallax-container');
    this.element = document.querySelector('.parallax-element');
    
    if (!this.container || !this.element) {
      console.warn('Parallax elements not found');
      return;
    }
    
    this.init();
  }

  private init(): void {
    if (!this.container || !this.element) {
      console.warn('Parallax elements not found');
      return;
    }

    this.updateBounds();
    this.bindEvents();
  }

  private bindEvents(): void {
    const resizeHandler = this.debounce(this.updateBounds.bind(this), 100);
    window.addEventListener('resize', resizeHandler);
    
    if (this.container) {
      this.container.addEventListener('mouseenter', () => this.isActive = true);
      this.container.addEventListener('mouseleave', this.handleMouseLeave.bind(this));
      this.container.addEventListener('mousemove', this.throttle(this.handleMouseMove.bind(this), 16)); // Throttle to ~60fps
    }
    
    // Store cleanup function on the container element for later removal
    if (this.container) {
      (this.container as any)._parallaxCleanup = () => {
        window.removeEventListener('resize', resizeHandler);
        if (this.container) {
          this.container.removeEventListener('mouseenter', () => this.isActive = true);
          this.container.removeEventListener('mouseleave', this.handleMouseLeave.bind(this));
          this.container.removeEventListener('mousemove', this.handleMouseMove.bind(this));
        }
        if (this.animationFrame) {
          cancelAnimationFrame(this.animationFrame);
        }
      };
    }
  }

  // Cleanup method to prevent memory leaks
  cleanup(): void {
    if (this.container && (this.container as any)._parallaxCleanup) {
      (this.container as any)._parallaxCleanup();
    }
  }

  // Add throttle method to limit function calls
  private throttle<T extends (...args: any[]) => any>(func: T, limit: number): (...args: Parameters<T>) => void {
    let inThrottle = false;
    return function(this: any, ...args: Parameters<T>) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }

  private updateBounds(): void {
    if (this.container) {
      this.bounds = this.container.getBoundingClientRect();
    }
  }

  private handleMouseMove(e: MouseEvent): void {
    if (!this.bounds || !this.element || !this.isActive || !this.container) return;

    const rect = this.container.getBoundingClientRect();
    const { clientX, clientY } = e;
    const mouseX = clientX - rect.left;
    const mouseY = clientY - rect.top;

    if (this.isWithinBounds(mouseX, mouseY, rect)) {
      this.animateElement(mouseX, mouseY, rect);
    } else {
      this.resetTransform();
    }
  }

  private isWithinBounds(x: number, y: number, rect: DOMRect): boolean {
    return x >= 0 && x <= rect.width && y >= 0 && y <= rect.height;
  }

  private animateElement(mouseX: number, mouseY: number, rect: DOMRect): void {
    const xPercent = (mouseX / rect.width) * 2 - 1;
    const yPercent = (mouseY / rect.height) * 2 - 1;

    const rotateY = xPercent * this.options.maxRotate;
    const rotateX = -yPercent * this.options.maxRotate;
    const translateX = xPercent * this.options.maxTranslate;
    const translateY = yPercent * this.options.maxTranslate;

    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
    }

    this.animationFrame = requestAnimationFrame(() => {
      if (this.element) {
        this.element.style.transform = `
          perspective(${this.options.perspective}px)
          rotateX(${rotateX}deg)
          rotateY(${rotateY}deg)
          translate3d(${translateX}px, ${translateY}px, 0)
          scale3d(${this.options.scale}, ${this.options.scale}, 1)
        `;
      }
    });
  }

  private handleMouseLeave(): void {
    this.isActive = false;
    this.resetTransform();
  }

  private resetTransform(): void {
    if (this.element) {
      if (this.animationFrame) {
        cancelAnimationFrame(this.animationFrame);
      }
      
      this.element.style.transform = `
        perspective(${this.options.perspective}px)
        rotateX(0deg)
        rotateY(0deg)
        translate3d(0, 0, 0)
        scale3d(1, 1, 1)
      `;
    }
  }

  private debounce(func: Function, wait: number): (...args: any[]) => void {
    let timeout: NodeJS.Timeout | null = null;
    
    return (...args: any[]) => {
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }
}

// hero.ts da ScrollAnimator klassini yangilash
export class ScrollAnimator {
  private observer: IntersectionObserver;

  constructor() {
    this.observer = new IntersectionObserver(
      this.handleIntersection.bind(this),
      {
        threshold: 0.1,
        rootMargin: '50px',
        root: null // Important: Setting root to null uses the browser viewport as the root.
      }
    );

    this.init();
  }

  private init(): void {
    // Use requestAnimationFrame to delay initialization
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        requestAnimationFrame(this.initAnimations.bind(this));
      });
    } else {
      requestAnimationFrame(this.initAnimations.bind(this));
    }
    
    // Initialize on page navigation with requestAnimationFrame
    document.addEventListener('astro:page-load', () => {
      requestAnimationFrame(this.initAnimations.bind(this));
    });
  }

  private initAnimations(): void {
    const initAnimations = () => {
      document.querySelectorAll('.scroll-animate').forEach(el => {
        // Avval observerni to'xtatamiz (Not strictly necessary but good practice)
        this.observer.unobserve(el);
        // Qaytadan kuzatishni boshlaymiz
        this.observer.observe(el);
      });
    };

    // DOMContentLoaded va astro:page-load eventlarida ishga tushirish
    ['DOMContentLoaded', 'astro:page-load'].forEach(event => {
      document.addEventListener(event, initAnimations);
    });

    // Also call initAnimations once immediately if the DOM is already loaded.
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initAnimations);
    } else {
      initAnimations();
    }
  }

  private handleIntersection(entries: IntersectionObserverEntry[]): void {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        this.observer.unobserve(entry.target); // Unobserve after triggering the animation
      }
    });
  }

  // Cleanup method to prevent memory leaks
  cleanup(): void {
    this.observer.disconnect();
  }
}

// Изменяем обработчик события для правильной инициализации ParallaxEffect
document.addEventListener('astro:page-load', () => {
  const isMobile = window.innerWidth <= 768;
  
  // Store references to initialized instances for cleanup
  let parallaxEffect: ParallaxEffect | null = null;
  let scrollAnimator: ScrollAnimator | null = null;
  
  if (!isMobile) {
    // Функция для инициализации ParallaxEffect
    function checkAndInitParallax() {
      const container = document.querySelector('.parallax-container');
      
      if (container) {
        parallaxEffect = new ParallaxEffect();
        parallaxEffect.initialize();
      } else {
        // Если элементы еще не загружены, пробуем еще раз через небольшой промежуток времени
        setTimeout(checkAndInitParallax, 100);
      }
    }
    
    // Запускаем проверку
    checkAndInitParallax();
  } else {
    // Remove parallax effects on mobile
    const container = document.querySelector('.parallax-container');
    if (container) {
      container.classList.add('no-parallax');
    }
  }
  
  // Инициализируем анимации скролла
  scrollAnimator = new ScrollAnimator();
  
  // Cleanup when navigating away
  return () => {
    if (parallaxEffect) {
      parallaxEffect.cleanup();
      parallaxEffect = null;
    }
    
    if (scrollAnimator) {
      scrollAnimator.cleanup();
      scrollAnimator = null;
    }
  };
});

// Handle window resize
window.addEventListener('resize', () => {
  const isMobile = window.innerWidth <= 768;
  const parallaxContainer = document.querySelector('.parallax-container, .mobile-view');
  
  if (parallaxContainer) {
    if (isMobile) {
      parallaxContainer.classList.remove('parallax-container');
      parallaxContainer.classList.add('mobile-view');
    } else {
      parallaxContainer.classList.add('parallax-container');
      parallaxContainer.classList.remove('mobile-view');
    }
  }
});
