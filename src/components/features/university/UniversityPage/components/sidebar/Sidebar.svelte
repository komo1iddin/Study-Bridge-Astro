<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import Filters from './Filters.svelte';
  import InfoCard from './InfoCard.svelte';
  import type { Filters as FiltersType } from '../../lib/data';
  
  export let filters: FiltersType;
  export let cities: string[] = [];
  
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

<div class="w-full space-y-6 md:w-72">
  <div class="rounded-lg border border-slate-200 bg-white/80 backdrop-blur-sm p-4 shadow-sm">
    <Filters 
      {filters} 
      {cities} 
      onReset={handleReset}
      on:change={handleChange} 
    />
  </div>
  
  <InfoCard />
  
  <div class="rounded-lg border border-slate-200 bg-white/80 backdrop-blur-sm p-4 shadow-sm">
    <h3 class="mb-2 text-sm font-medium text-slate-800">Need Help?</h3>
    <p class="mb-4 text-xs text-slate-600">
      Our education consultants can help you find the perfect university and program in China.
    </p>
    <div class="rounded-md bg-blue-50 p-3 text-center text-sm">
      <p class="font-medium text-blue-700">Contact Us</p>
      <p class="mt-1 text-xs text-blue-600">We'll guide you through the application process</p>
    </div>
  </div>
</div> 