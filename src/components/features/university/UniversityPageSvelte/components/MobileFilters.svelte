<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { Button } from "../../../../../components/ui/svelte";
  import { Sliders } from 'lucide-svelte';
  import type { Filters } from '../lib/data';

  export let filters: Filters;
  
  const dispatch = createEventDispatcher<{
    change: { key: keyof Filters; value: string };
    reset: void;
  }>();
  
  function handleChange(key: keyof Filters, value: string) {
    dispatch('change', { key, value });
  }
  
  function handleReset() {
    dispatch('reset');
  }
</script>

<div class="flex items-center justify-between gap-4 p-4 rounded-lg border">
  <div class="flex items-center gap-2">
    <Sliders class="h-4 w-4 text-muted-foreground" />
    <span class="text-sm font-medium">Filter</span>
  </div>
  
  <div class="flex items-center gap-2">
    <Button 
      variant="outline" 
      size="sm" 
      on:click={handleReset}
    >
      Reset
    </Button>
    <Button 
      variant="default" 
      size="sm" 
      on:click={() => {/* Open full screen filter modal */}}
    >
      All Filters
    </Button>
  </div>
</div> 