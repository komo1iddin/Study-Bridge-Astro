<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { Hand, ChevronRight } from 'lucide-svelte';
  import { createEmblaCarousel } from './components/emblaCarouselUtils.js';
  
  import ButtonView from '@/components/ui/svelte/ButtonView.svelte';
  import SectionHeader from '@/components/ui/svelte/SectionHeader.svelte';
  import UniversityCardSkeleton from './components/UniversityCardSkeleton.svelte';
  import UniversityCardItem from './components/UniversityCardItem.svelte';
  import BackgroundDecoration from './components/BackgroundDecoration.svelte';
  
  import type { UniversityFeatureTranslations } from '@/i18n/features/university/universityFeature';
  import type { Lang } from '@/i18n/langUtils';
  
  // Props
  export let lang: Lang;
  export let t: UniversityFeatureTranslations;
  export let universities = [];
  
  // State
  let loading = true;
  let error = null;
  let isMobile = false;
  let visibleUniversities = [];
  let selectedIndex = 0;
  let swipeAnimationActive = true;
  let carouselContainer: HTMLElement;
  
  // DOM refs
  let emblaRef;
  let emblaApi;
  let autoplay;
  
  // Setup carousel on mount
  onMount(() => {
    // Check if mobile
    const checkIfMobile = () => {
      isMobile = window.innerWidth <= 768;
      
      // Reset and reinitialize carousel on screen size change
      if (emblaApi) {
        emblaApi.destroy();
        initializeCarousel();
      }
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    // Load universities immediately without delay
    try {
      visibleUniversities = universities || [];
      loading = false;
    } catch (err) {
      error = t.error || 'Маълумотларни юклашда хатолик юз берди';
      loading = false;
    }
    
    // Start swipe animation - disable on mobile to save resources
    let animInterval;
    if (!isMobile) {
      animInterval = setInterval(() => {
        swipeAnimationActive = !swipeAnimationActive;
      }, 2000);
    }
    
    // Apply performance optimizations for touch devices
    if (carouselContainer) {
      carouselContainer.style.willChange = 'transform';
      carouselContainer.style.transform = 'translateZ(0)';
      carouselContainer.style.backfaceVisibility = 'hidden';
      
      // Improve touch handling
      carouselContainer.style.touchAction = 'pan-y';
    }
    
    // Initialize carousel
    initializeCarousel();
    
    // Cleanup function
    return () => {
      window.removeEventListener('resize', checkIfMobile);
      if (animInterval) clearInterval(animInterval);
      
      if (emblaApi) emblaApi.destroy();
      if (autoplay && autoplay.stop) autoplay.stop();
    };
  });
  
  // Function to initialize carousel with proper settings
  function initializeCarousel() {
    // Initialize carousel immediately
    ({ emblaApi, autoplay } = createEmblaCarousel(emblaRef, {
      loop: true,
      align: "start",
      slidesToScroll: 1,
      skipSnaps: false,
      inViewThreshold: isMobile ? 0.1 : 0.7,
      startIndex: 0,
      dragFree: isMobile,
      containScroll: "trimSnaps",
      watchDrag: true,
      speed: isMobile ? 15 : 20, // Slower on mobile for smoother performance
      delay: 4000, // Autoplay delay
    }));
    
    if (emblaApi) {
      emblaApi.on("select", () => {
        selectedIndex = emblaApi.selectedScrollSnap();
      });
      emblaApi.scrollTo(0);
    }
  }
  
  // Carousel navigation functions
  function scrollNext() {
    if (emblaApi) emblaApi.scrollNext();
  }
  
  function scrollPrev() {
    if (emblaApi) emblaApi.scrollPrev();
  }
</script>

<div class="w-full bg-[#F5F9FB] py-12 relative" bind:this={carouselContainer}>
  <BackgroundDecoration />
  <div class="w-full max-w-[1920px] mx-auto px-4 relative z-10">
    <div data-animate="slideDown" data-duration="0.6">
      <SectionHeader 
        title={t.leadingUniversities}
        subtitle={t.discoverText}
      />
    </div>

    {#if !isMobile}
    <div class="flex justify-end mb-4" data-animate="fadeIn" data-delay="0.3">
      <div class={`flex items-center gap-2 px-4 py-2 bg-white backdrop-blur-sm rounded-full shadow-sm transition-transform duration-700 ${
        swipeAnimationActive ? "translate-x-2" : "-translate-x-2"
      }`}>
        <Hand class="w-5 h-5 text-primary" />
        <span class="text-sm font-semibold">
          {t.swipeToSlide}
        </span>
      </div>
    </div>
    {/if}

    <div class="relative mb-8 pb-6" data-animate="fadeIn" data-delay="0.1">
      <div 
        class="overflow-hidden cursor-grab active:cursor-grabbing carousel-container" 
        bind:this={emblaRef}
      >
        <div class="flex" data-stagger-group data-stagger-amount="0.1">
          {#if loading}
            {#each Array(4) as _, index}
              <div 
                class="min-w-[280px] md:min-w-[320px] lg:min-w-[300px] xl:min-w-[320px] px-2 pb-4 carousel-slide"
                data-stagger-item
              >
                <UniversityCardSkeleton />
              </div>
            {/each}
          {:else if visibleUniversities.length > 0}
            {#each visibleUniversities as university, i (university.id)}
              <div 
                class="min-w-[280px] md:min-w-[320px] lg:min-w-[300px] xl:min-w-[320px] px-2 pb-4 carousel-slide"
                data-stagger-item
              >
                <UniversityCardItem 
                  university={university} 
                  t={t}
                  {lang} 
                />
              </div>
            {/each}
          {:else}
            <div class="text-center py-10 w-full">
              <p class="text-gray-500">{t.error}</p>
            </div>
          {/if}
        </div>
      </div>

      {#if !isMobile && visibleUniversities.length > 0}
        <div class="absolute -bottom-2 left-4 flex items-center gap-2 z-10" data-animate="fadeIn" data-delay="0.7">
          <button 
            on:click={scrollPrev} 
            class="bg-white/90 hover:bg-white rounded-full p-2.5 shadow-lg transition-all duration-200 hover:scale-110"
          >
            <ChevronRight class="w-5 h-5 rotate-180" />
          </button>
          <button 
            on:click={scrollNext} 
            class="bg-white/90 hover:bg-white rounded-full p-2.5 shadow-lg transition-all duration-200 hover:scale-110"
          >
            <ChevronRight class="w-5 h-5" />
          </button>
        </div>
      {/if}
    </div>

    <div class="text-center mt-12" data-animate="fadeIn" data-delay="0.5">
      <ButtonView
        href={`/${lang}/universities`} 
        text={t.viewAll} 
        variant="desktop" 
        showOnMobile={false}
      />
      <ButtonView
        href={`/${lang}/universities`} 
        text={t.viewAll} 
        variant="mobile" 
        showOnDesktop={false}
      />
    </div>
  </div>
</div>

{#if error}
  <div class="text-center text-red-500 p-4">
    {error}
  </div>
{/if}

<style>
  /* Optimize carousel for mobile */
  :global(.carousel-container) {
    -webkit-overflow-scrolling: touch;
    transform: translate3d(0, 0, 0);
    will-change: transform;
    backface-visibility: hidden;
  }
  
  :global(.carousel-slide) {
    contain: content;
    will-change: transform;
    transform: translateZ(0);
  }
</style>