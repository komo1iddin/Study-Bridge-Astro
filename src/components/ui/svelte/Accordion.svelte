<script lang="ts">
  import { cn } from '../../../lib/utils';
  import { slide } from 'svelte/transition';
  import { ChevronDown } from 'lucide-svelte';
  import './svelte-components.css';
  import { createEventDispatcher } from 'svelte';
  
  export let items: Array<{
    value: string;
    title: string;
    content: string;
  }> = [];
  export let value: string | string[] | undefined = undefined;
  export let type: 'single' | 'multiple' = 'single';
  export let collapsible: boolean = false;
  export let className: string = '';
  
  const dispatch = createEventDispatcher();
  
  // Function to get active items as an array
  function getActiveItems() {
    if (!value) return [];
    return type === 'multiple' && Array.isArray(value) ? value : [value];
  }
  
  // Function to handle value changes
  function handleValueChange(itemValue: string) {
    let newValue;
    
    if (type === 'single') {
      // For single mode
      if (value === itemValue && collapsible) {
        newValue = undefined;
      } else {
        newValue = itemValue;
      }
    } else {
      // For multiple mode
      const currentValues = Array.isArray(value) ? [...value] : [];
      const index = currentValues.indexOf(itemValue);
      
      if (index > -1) {
        currentValues.splice(index, 1);
        newValue = [...currentValues];
      } else {
        newValue = [...currentValues, itemValue];
      }
    }
    
    // Update the value and dispatch the event
    value = newValue;
    dispatch('valueChange', { value: newValue });
  }
  
  // Check if an item is active
  function isItemActive(itemValue: string) {
    return getActiveItems().includes(itemValue);
  }
</script>

<div class={cn("w-full", className)} data-type={type}>
  {#each items as item (item.value)}
    <div class="border-b">
      <h3 class="flex">
        <button
          type="button"
          on:click={() => handleValueChange(item.value)}
          aria-expanded={isItemActive(item.value)}
          class="flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline"
        >
          {item.title}
          <ChevronDown 
            class="h-4 w-4 transition-transform duration-200" 
            style={isItemActive(item.value) ? "transform: rotate(180deg)" : ""}
          />
        </button>
      </h3>
      
      {#if isItemActive(item.value)}
        <div
          transition:slide={{ duration: 300 }}
          class="overflow-hidden text-sm transition-all"
        >
          <div class="pb-4 pt-0">
            {item.content}
          </div>
        </div>
      {/if}
    </div>
  {/each}
</div>