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
  let visibleUniversities = universities || [];
  let selectedIndex = 0;
  let swipeAnimationActive = true;
  
  // DOM refs
  let emblaRef;
  let emblaApi;
  let autoplay;
  
  // Setup carousel on mount
  onMount(() => {
    // Check if mobile
    const checkIfMobile = () => isMobile = window.innerWidth <= 768;
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    // Load universities with delay for loading effect
    loading = true;
    const timer = setTimeout(() => {
      try {
        visibleUniversities = universities || [];
        loading = false;
      } catch (err) {
        error = t.error || 'Маълумотларни юклашда хатолик юз берди';
        loading = false;
      }
    }, 300);
    
    // Start swipe animation - make sure this is running at the same interval as the React version
    const animInterval = setInterval(() => {
      swipeAnimationActive = !swipeAnimationActive;
    }, 2000);  // 2-second interval for the animation
    
    // Initialize carousel after DOM is ready
    setTimeout(() => {
      ({ emblaApi, autoplay } = createEmblaCarousel(emblaRef, {
        loop: true,
        align: "start",
        slidesToScroll: 1,
        skipSnaps: false,
        inViewThreshold: 0.7,
        startIndex: 0,
        dragFree: false,
        containScroll: "trimSnaps",
        watchDrag: true,
        speed: 20,
        delay: 4000, // Autoplay delay
      }));
      
      if (emblaApi) {
        emblaApi.on("select", () => {
          selectedIndex = emblaApi.selectedScrollSnap();
        });
        emblaApi.scrollTo(0);
      }
    }, 0);
    
    // Cleanup function
    return () => {
      window.removeEventListener('resize', checkIfMobile);
      clearTimeout(timer);
      clearInterval(animInterval);
      
      if (emblaApi) emblaApi.destroy();
      if (autoplay && autoplay.stop) autoplay.stop();
    };
  });
  
  // Carousel navigation functions
  function scrollNext() {
    if (emblaApi) emblaApi.scrollNext();
  }
  
  function scrollPrev() {
    if (emblaApi) emblaApi.scrollPrev();
  }
</script>

<div class="w-full bg-[#F5F9FB] py-12 relative">
  <BackgroundDecoration />
  <div class="w-full max-w-[1920px] mx-auto px-4 relative z-10">
    <SectionHeader 
      title={t.leadingUniversities}
      subtitle={t.discoverText}
    />

    <div class="flex justify-end mb-4">
      <div class={`flex items-center gap-2 px-4 py-2 bg-white backdrop-blur-sm rounded-full shadow-sm transition-transform duration-700 ${
        swipeAnimationActive ? "translate-x-2" : "-translate-x-2"
      }`}>
        <Hand class="w-5 h-5 text-primary" />
        <span class="text-sm font-semibold">
          {t.swipeToSlide}
        </span>
      </div>
    </div>

    <div class="relative mb-8 pb-6">
      <div class="overflow-hidden cursor-grab active:cursor-grabbing" bind:this={emblaRef}>
        <div class="flex">
          {#if loading}
            {#each Array(4) as _, index}
              <div 
                class="min-w-[280px] md:min-w-[320px] lg:min-w-[300px] xl:min-w-[320px] px-2 pb-4"
              >
                <UniversityCardSkeleton />
              </div>
            {/each}
          {:else if visibleUniversities.length > 0}
            {#each visibleUniversities as university (university.id)}
              <div 
                class="min-w-[280px] md:min-w-[320px] lg:min-w-[300px] xl:min-w-[320px] px-2 pb-4"
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
        <div class="absolute -bottom-2 left-4 flex items-center gap-2 z-10">
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

    <div class="text-center mt-12">
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