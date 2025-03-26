<script>
  import Card from '@/components/ui/svelte/Card.svelte';
  import Skeleton from '@/components/ui/svelte/Skeleton.svelte';
  
  // Export the component for compatibility
  export let className = '';
</script>

<Card class={`overflow-hidden rounded-xl max-w-[300px] w-full shadow-sm ${className}`}>
  <div class="relative w-full aspect-[16/9] overflow-hidden">
    <Skeleton class="w-full h-full" />
  </div>

  <div class="p-4 sm:p-5 flex flex-col relative min-h-[280px]">
    <!-- Logo skeleton -->
    <div class="absolute -top-8 left-4 sm:left-5 bg-white/90 p-1.5 rounded-full shadow-lg">
      <Skeleton class="w-12 h-12 sm:w-14 sm:h-14 rounded-full" />
    </div>

    <!-- Title section skeleton -->
    <div class="pl-14 sm:pl-16 pt-3 h-[50px] sm:h-[60px]">
      <Skeleton class="h-4 sm:h-5 w-3/4 mb-2" />
      <Skeleton class="h-4 sm:h-5 w-1/2" />
    </div>

    <div class="h-px bg-gray-200 my-2 sm:my-3"></div>

    <!-- Location section skeleton -->
    <div class="h-[28px] sm:h-[32px] mb-2">
      <div class="flex items-center gap-2">
        <Skeleton class="w-5 h-5 sm:w-6 sm:h-6 rounded-full" />
        <Skeleton class="h-4 w-24" />
      </div>
    </div>

    <!-- Faculties section skeleton -->
    <div class="h-[80px] sm:h-[90px] mb-3">
      <div class="flex items-center gap-2 mb-2">
        <Skeleton class="w-5 h-5 sm:w-6 sm:h-6 rounded-full" />
        <Skeleton class="h-4 w-20" />
      </div>
      <div class="flex flex-wrap gap-1.5">
        {#each Array(4) as _, i}
          <Skeleton 
            class="h-5 sm:h-6 w-16 sm:w-20 rounded-full" 
          />
        {/each}
      </div>
    </div>

    <!-- Button skeleton -->
    <Skeleton class="w-full h-8 sm:h-10 rounded-xl" />
  </div>
</Card> 