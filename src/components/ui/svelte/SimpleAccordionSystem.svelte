<script lang="ts">
  import { cn } from '@/lib/utils';
  import { ChevronDown } from 'lucide-svelte';
  import { slide } from 'svelte/transition';
  import './svelte-components.css';
  import { onMount } from 'svelte';
  
  // This is a self-contained Accordion system that follows the components pattern
  // but doesn't use Svelte's context/stores which might be causing issues
  
  // Main Accordion state
  let activeItem = 'item-1';
  let activeItems = [activeItem];
  
  onMount(() => {
    console.log('SimpleAccordionSystem mounted with initial state:', activeItem);
  });
  
  // Toggle handler function
  function toggleItem(itemValue) {
    console.log('Toggle called for item:', itemValue, 'Current state:', activeItem);
    
    if (activeItem === itemValue) {
      // Allow toggling closed
      activeItem = undefined;
      activeItems = [];
    } else {
      activeItem = itemValue;
      activeItems = [itemValue];
    }
    
    console.log('New state:', activeItem, 'Active items:', activeItems);
  }
  
  // Check if an item is active
  function isItemActive(itemValue) {
    return activeItems.includes(itemValue);
  }
</script>

<div class="space-y-8 border p-4 border-green-500">
  <div>
    <h3 class="text-lg font-medium mb-4">Simple Accordion System</h3>
    <div class="text-xs mb-2 px-2 py-1 bg-gray-100 rounded">
      Current active item: {JSON.stringify(activeItem)}
    </div>
    
    <div class="w-full">
      <!-- Item 1 - This would be AccordionItem in the component system -->
      <div class="border-b">
        <!-- This would be AccordionTrigger -->
        <h3 class="flex">
          <button
            type="button"
            on:click={() => toggleItem('item-1')}
            aria-expanded={isItemActive('item-1')}
            class="flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline"
          >
            <span>Simple System Item 1</span>
            <div class="shrink-0 transition-transform duration-200" class:rotate-180={isItemActive('item-1')}>
              <ChevronDown class="h-4 w-4" />
            </div>
          </button>
        </h3>
        
        <!-- This would be AccordionContent -->
        {#if isItemActive('item-1')}
          <div
            transition:slide={{ duration: 300 }}
            class="overflow-hidden text-sm transition-all"
          >
            <div class="pb-4 pt-0">
              This is simple accordion system item 1 content.
            </div>
          </div>
        {/if}
      </div>
      
      <!-- Item 2 -->
      <div class="border-b">
        <h3 class="flex">
          <button
            type="button"
            on:click={() => toggleItem('item-2')}
            aria-expanded={isItemActive('item-2')}
            class="flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline"
          >
            <span>Simple System Item 2</span>
            <div class="shrink-0 transition-transform duration-200" class:rotate-180={isItemActive('item-2')}>
              <ChevronDown class="h-4 w-4" />
            </div>
          </button>
        </h3>
        
        {#if isItemActive('item-2')}
          <div
            transition:slide={{ duration: 300 }}
            class="overflow-hidden text-sm transition-all"
          >
            <div class="pb-4 pt-0">
              This is simple accordion system item 2 content.
            </div>
          </div>
        {/if}
      </div>
    </div>
    
    <div class="flex gap-2 mt-4">
      <button 
        class="px-3 py-1 bg-green-500 text-white rounded"
        on:click={() => { 
          activeItem = 'item-1'; 
          activeItems = [activeItem];
          console.log('Set to item-1'); 
        }}
      >Set Item 1</button>
      <button 
        class="px-3 py-1 bg-green-500 text-white rounded"
        on:click={() => { 
          activeItem = 'item-2'; 
          activeItems = [activeItem];
          console.log('Set to item-2'); 
        }}
      >Set Item 2</button>
      <button 
        class="px-3 py-1 bg-green-500 text-white rounded"
        on:click={() => { 
          activeItem = undefined; 
          activeItems = [];
          console.log('Cleared'); 
        }}
      >Clear</button>
    </div>
  </div>
</div> 