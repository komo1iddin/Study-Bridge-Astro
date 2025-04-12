<script>
  import Card from '@/components/ui/svelte/Card.svelte';
  import Skeleton from '@/components/ui/svelte/Skeleton.svelte';
  
  // Export the component for compatibility
  export let className = '';
  
  // Check if mobile for conditional animations
  let isMobile = false;
  
  // Lower animation frame rate on mobile for better performance
  import { onMount } from 'svelte';
  onMount(() => {
    isMobile = window.innerWidth <= 768;
  });
</script>

<Card class={`overflow-hidden rounded-xl max-w-[300px] w-full shadow-sm ${className}`}>
  <div class="relative w-full aspect-[16/9] overflow-hidden">
    <Skeleton class={`w-full h-full ${!isMobile ? 'animate-pulse' : ''}`} />
  </div>

  <div class="p-4 sm:p-5 flex flex-col relative min-h-[280px]">
    <!-- Logo skeleton -->
    <div class="absolute -top-8 left-4 sm:left-5 bg-white/90 p-1.5 rounded-full shadow-lg">
      <Skeleton class={`w-12 h-12 sm:w-14 sm:h-14 rounded-full ${!isMobile ? 'animate-pulse' : ''}`} />
    </div>

    <!-- Title section skeleton -->
    <div class="pl-14 sm:pl-16 pt-3 h-[50px] sm:h-[60px]">
      <Skeleton class={`h-4 sm:h-5 w-3/4 mb-2 ${!isMobile ? 'animate-pulse' : ''}`} />
      <Skeleton class={`h-4 sm:h-5 w-1/2 ${!isMobile ? 'animate-pulse' : ''}`} />
    </div>

    <div class="h-px bg-gray-200 my-2 sm:my-3"></div>

    <!-- Location section skeleton -->
    <div class="h-[28px] sm:h-[32px] mb-2">
      <div class="flex items-center gap-2">
        <Skeleton class={`w-5 h-5 sm:w-6 sm:h-6 rounded-full ${!isMobile ? 'animate-pulse' : ''}`} />
        <Skeleton class={`h-4 w-24 ${!isMobile ? 'animate-pulse' : ''}`} />
      </div>
    </div>

    <!-- Faculties section skeleton - reduce number of items on mobile -->
    <div class="h-[80px] sm:h-[90px] mb-3">
      <div class="flex items-center gap-2 mb-2">
        <Skeleton class={`w-5 h-5 sm:w-6 sm:h-6 rounded-full ${!isMobile ? 'animate-pulse' : ''}`} />
        <Skeleton class={`h-4 w-20 ${!isMobile ? 'animate-pulse' : ''}`} />
      </div>
      <div class="flex flex-wrap gap-1.5">
        {#each Array(isMobile ? 2 : 4) as _, i}
          <Skeleton 
            class={`h-5 sm:h-6 w-16 sm:w-20 rounded-full ${!isMobile ? 'animate-pulse' : ''}`} 
          />
        {/each}
      </div>
    </div>

    <!-- Button skeleton -->
    <Skeleton class={`w-full h-8 sm:h-10 rounded-xl ${!isMobile ? 'animate-pulse' : ''}`} />
  </div>
</Card>

<style>
  /* Enhance skeleton animations with optimized animation */
  :global(.animate-pulse) {
    animation: optimizedPulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    opacity: 0.7;
  }
  
  @keyframes optimizedPulse {
    0%, 100% {
      opacity: 0.7;
    }
    50% {
      opacity: 0.5;
    }
  }
  
  /* Use transform instead of opacity for better hardware acceleration */
  @media (min-width: 768px) {
    @keyframes optimizedPulse {
      0%, 100% {
        opacity: 0.7;
        transform: scale(1);
      }
      50% {
        opacity: 0.5;
        transform: scale(0.995);
      }
    }
  }
</style> 