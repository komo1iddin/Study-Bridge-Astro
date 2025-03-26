<script lang="ts">
  import { cn } from '@/lib/utils';
  import { ChevronDown } from 'lucide-svelte';
  import { slide } from 'svelte/transition';
  import './svelte-components.css';
  
  let open = false;
  
  function toggle() {
    open = !open;
    console.log('Toggled accordion, new state:', open);
  }
</script>

<div class="border-b">
  <h3 class="flex">
    <button
      type="button"
      on:click={toggle}
      aria-expanded={open}
      class="flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline"
    >
      <span>Simple Accordion Test</span>
      <ChevronDown 
        class="h-4 w-4 shrink-0 transition-transform duration-200" 
        style={open ? "transform: rotate(180deg)" : ""}
      />
    </button>
  </h3>
  
  {#if open}
    <div
      transition:slide={{ duration: 300 }}
      class="overflow-hidden text-sm transition-all"
    >
      <div class="pb-4 pt-0">
        This is a simple self-contained accordion for testing purposes.
        If this works, we'll know the issue is in the component composition.
      </div>
    </div>
  {/if}
</div> 