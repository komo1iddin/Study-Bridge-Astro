<script lang="ts">
  import { ChevronRight, GraduationCap, MapPin } from 'lucide-svelte';
  import Card from '@/components/ui/svelte/Card.svelte';
  import type { UniversityFeatureTranslations } from '@/i18n/features/university/universityFeature';
  import type { Lang } from '@/i18n/langUtils';
  
  // Props
  export let university: any;
  export let t: UniversityFeatureTranslations;
  export let lang: Lang;
  export let className = '';
  
  // Navigation handler
  function handleMoreInfo() {
    // Change the URL structure to match the university detail page
    window.location.href = `/${lang}/universities/${university.slug || university.id}`;
  }
</script>

<Card 
  class={`overflow-hidden group transition-all duration-300 rounded-xl max-w-[300px] w-full
  border border-gray-200
  bg-[linear-gradient(to_bottom_right,rgba(255,255,255,0.9),rgba(255,255,255,0.8))]
  backdrop-blur-[10px]
  shadow-[0_1px_3px_0px_rgba(0,0,0,0.06)]
  hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)]
  hover:border-[rgba(59,130,246,0.2)] ${className}`}
>
  <div class="relative w-full aspect-[16/9] overflow-hidden">
    <img 
      src={university.image} 
      alt={university.name}
      class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
    />
  </div>

  <div class="p-4 sm:p-5 flex flex-col relative min-h-[280px]">
    <!-- Logo -->
    <div class="absolute -top-8 left-4 sm:left-5 bg-white/90 p-1.5 rounded-full shadow-lg">
      <img 
        src={university.logo} 
        alt={`${university.name} logo`}
        class="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-contain"
      />
    </div>
    
    <!-- Watermark -->
    <div class="absolute bottom-0 right-0 opacity-10 pointer-events-none overflow-hidden">
      <img 
        src={university.logo} 
        alt=""
        class="w-32 h-32 sm:w-40 sm:h-40 object-contain translate-x-1/3 translate-y-1/3"
      />
    </div>

    <!-- Title section -->
    <div class="pl-14 sm:pl-16 pt-3 h-[50px] sm:h-[60px]">
      <h3 class="text-sm sm:text-base font-bold tracking-tight text-gray-800 group-hover:text-primary transition-colors line-clamp-2">
        {university.name}
      </h3>
    </div>

    <div class="h-px bg-gradient-to-r from-gray-200 via-gray-200 to-transparent my-2 sm:my-3"></div>

    <!-- Location section -->
    <div class="h-[28px] sm:h-[32px] mb-2">
      <div class="text-xs sm:text-sm font-semibold flex items-center gap-2 text-gray-700">
        <div class="w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center flex-shrink-0">
          <MapPin class="w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary" />
        </div>
        <span class="line-clamp-1">{university.location}</span>
      </div>
    </div>

    <!-- Faculties section -->
    <div class="h-[80px] sm:h-[90px] overflow-y-auto mb-3">
      <div class="text-xs sm:text-sm font-semibold mb-2 flex items-center gap-2 text-gray-700">
        <div class="w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center flex-shrink-0">
          <GraduationCap class="w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary" />
        </div>
        <span>{t.faculties}</span>
      </div>
      <div class="flex flex-wrap gap-1.5">
        {#each university.faculties as faculty}
          <div class="bg-gray-50 hover:bg-gray-100 text-gray-700 transition-colors rounded-full px-2 sm:px-2.5 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium border border-gray-200">
            {faculty}
          </div>
        {/each}
      </div>
    </div>

    <!-- Button -->
    <button 
      on:click={handleMoreInfo}
      class="w-full flex items-center justify-center gap-1.5 text-primary hover:text-gray-800 hover:bg-gray-100 transition-colors rounded-xl py-2 sm:py-2.5 text-xs sm:text-sm font-medium group"
    >
      {t.moreInfo}
      <ChevronRight class="w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-0.5" />
    </button>
  </div>
</Card> 