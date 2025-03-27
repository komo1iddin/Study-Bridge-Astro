<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';
  import Filters from './Filters.svelte';
  import InfoCard from './InfoCard.svelte';
  import type { Filters as FiltersType } from '../../lib/data';
  import type { Lang } from '../../../../../../i18n/langUtils';
  import type { UniversityPageTranslations } from '../../../../../../i18n/features/university/universityPage';
  
  export let filters: FiltersType;
  export let cities: string[] = [];
  export let t: UniversityPageTranslations;
  export let lang: Lang = 'uz';
  
  // Ensure cities is valid during hydration
  $: validCities = Array.isArray(cities) ? cities : [];
  
  // Component mounted flag
  let isMounted = false;
  
  onMount(() => {
    isMounted = true;
  });

  const dispatch = createEventDispatcher<{
    change: { key: keyof FiltersType; value: string };
    reset: void;
  }>();
  
  function handleChange(event: CustomEvent<{ key: keyof FiltersType; value: string }>) {
    dispatch('change', event.detail);
  }
  
  function handleReset() {
    dispatch('reset');
  }
</script>

<div class="w-full flex flex-col gap-5">
  {#if t && t.filters}
    <Filters 
      filters={filters}
      cities={validCities}
      onReset={handleReset}
      t={t}
      lang={lang}
      on:change={handleChange}
    />
    
    <InfoCard
      t={t}
      lang={lang}
    />
  {:else}
    <div class="animate-pulse space-y-4">
      <div class="h-8 w-40 bg-gray-200 rounded"></div>
      <div class="h-24 w-full bg-gray-200 rounded"></div>
      <div class="h-24 w-full bg-gray-200 rounded"></div>
    </div>
  {/if}

  <div class="hidden sm:block">
    <div class="rounded-lg border bg-card p-4 shadow-sm">
      <h3 class="mb-2 text-sm font-medium">Need Help?</h3>
      <p class="mb-4 text-xs text-muted-foreground">
        Our education consultants are here to help you find the perfect university match in China.
      </p>
      <div class="flex gap-2">
        <a href="/contact" class="w-full">
          <div class="rounded-md bg-primary px-3 py-2 text-center text-xs text-primary-foreground">
            Contact Us
          </div>
        </a>
      </div>
    </div>
  </div>
</div> 