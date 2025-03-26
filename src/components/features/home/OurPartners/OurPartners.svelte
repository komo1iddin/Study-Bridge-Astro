<script>
  import { onMount } from 'svelte';
  import { Hand, ChevronRight } from 'lucide-svelte';
  import { createEmblaCarousel } from './components/emblaCarouselUtils.js';
  
  import ButtonView from '@/components/ui/svelte/ButtonView.svelte';
  import SectionHeader from '@/components/ui/svelte/SectionHeader.svelte';
  import PartnerCardItem from './components/PartnerCardItem.svelte';
  import BackgroundDecoration from './components/BackgroundDecoration.svelte';
  import { partners } from './data/partners.js';
  
  // Props
  export let lang;
  export let translations;
  
  // State
  let isMobile = false;
  let swipeAnimationActive = true;
  let selectedIndex = 0;
  
  // DOM refs
  let emblaRef;
  let emblaApi;
  let autoplay;
  
  // Setup carousel on mount
  onMount(() => {
    // Handle mobile detection
    const checkIfMobile = () => isMobile = window.innerWidth <= 768;
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    // Handle swipe animation
    const animInterval = setInterval(() => {
      swipeAnimationActive = !swipeAnimationActive;
    }, 2000);
    
    // Initialize carousel after DOM is ready
    setTimeout(() => {
      ({ emblaApi, autoplay } = createEmblaCarousel(emblaRef, {
        loop: true,
        align: "start",
        slidesToScroll: 1,
        skipSnaps: false,
        dragFree: true,
        containScroll: "trimSnaps",
        watchDrag: true,
        speed: 20,
        startIndex: 0,
        delay: 4000, // Autoplay delay
        breakpoints: {
          "(min-width: 320px)": { slidesToScroll: 1 },
          "(min-width: 768px)": { slidesToScroll: 2 },
          "(min-width: 1024px)": { slidesToScroll: 3 },
          "(min-width: 1280px)": { slidesToScroll: 4 }
        }
      }));
      
      if (emblaApi) {
        emblaApi.on("select", () => {
          selectedIndex = emblaApi.selectedScrollSnap();
        });
      }
    }, 0);
    
    // Cleanup function
    return () => {
      window.removeEventListener('resize', checkIfMobile);
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
      title={translations.partnersTitle || "Our Partners"}
      subtitle={translations.partnersDescription || ""}
    />

    <div class="flex justify-end mb-4">
      <div class={`flex items-center gap-2 px-4 py-2 bg-white backdrop-blur-sm rounded-full shadow-sm transition-transform duration-700 ${
        swipeAnimationActive ? "translate-x-2" : "-translate-x-2"
      }`}>
        <Hand class="w-5 h-5 text-primary" />
        <span class="text-sm font-semibold">
          {translations.swipeToSlide || "Swipe to slide"}
        </span>
      </div>
    </div>

    <div class="relative mb-8 pb-6">
      <div class="overflow-hidden cursor-grab active:cursor-grabbing" bind:this={emblaRef}>
        <div class="flex">
          {#each partners as partner (partner.id)}
            <div 
              class="min-w-[280px] md:min-w-[320px] lg:min-w-[300px] xl:min-w-[320px] px-2 pb-4"
            >
              <PartnerCardItem {partner} />
            </div>
          {/each}
        </div>
      </div>

      {#if !isMobile}
        <div class="absolute -bottom-2 left-4 hidden md:flex items-center gap-2 z-10">
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
        href={`/${lang}/partners`} 
        text={translations.viewAllPartners || "View All Partners"} 
        variant="desktop" 
        showOnMobile={false}
      />
      <ButtonView
        href={`/${lang}/partners`} 
        text={translations.viewAllPartners || "View All Partners"} 
        variant="mobile" 
        showOnDesktop={false}
      />
    </div>
  </div>
</div> 