<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { Button } from "../../../../../../components/ui/svelte";
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

<div class="space-y-6">
  <div class="rounded-lg border shadow-sm bg-white">
    <div class="p-4 border-b">
      <div class="flex items-center justify-between">
        <h2 class="text-lg font-medium">Filterlar</h2>
        <Button 
          variant="ghost" 
          size="sm" 
          on:click={handleReset}
          class="h-8 px-2 text-xs"
        >
          Qayta o'rnatish
        </Button>
      </div>
    </div>
    
    <div class="p-4">
      <Filters 
        {filters} 
        {cities} 
        on:change={handleChange} 
      />
    </div>
  </div>
  
  <InfoCard />
</div> 