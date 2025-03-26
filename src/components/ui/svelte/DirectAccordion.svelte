<script lang="ts">
  import './svelte-components.css';

  // Define the main Accordion state
  let singleValue = 'item-1'; 
  let activeItems = [singleValue];

  // Toggle function to handle accordion state
  function handleValueChange(itemValue) {
    console.log('Clicked:', itemValue, 'Current value:', singleValue);
    
    if (singleValue === itemValue) {
      // Allow toggling closed
      singleValue = undefined;
      activeItems = [];
    } else {
      singleValue = itemValue;
      activeItems = [itemValue];
    }
    
    console.log('New value:', singleValue, 'New active items:', activeItems);
  }
</script>

<div class="space-y-8">
  <div>
    <h3 class="text-lg font-medium mb-4">Direct Accordion Implementation</h3>
    <div class="w-full">
      <!-- Item 1 -->
      <div class="border-b">
        <h3 class="flex">
          <button
            type="button"
            on:click={() => handleValueChange('item-1')}
            aria-expanded={activeItems.includes('item-1')}
            class="flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline"
          >
            <span>Is this accordion item 1?</span>
            <div class="shrink-0 transition-transform duration-200" class:rotate-180={activeItems.includes('item-1')}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4">
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </div>
          </button>
        </h3>
        
        {#if activeItems.includes('item-1')}
          <div
            class="overflow-hidden text-sm transition-all"
            style="transition: height 0.3s ease;"
          >
            <div class="pb-4 pt-0">
              Yes, this is accordion item 1 content.
            </div>
          </div>
        {/if}
      </div>
      
      <!-- Item 2 -->
      <div class="border-b">
        <h3 class="flex">
          <button
            type="button"
            on:click={() => handleValueChange('item-2')}
            aria-expanded={activeItems.includes('item-2')}
            class="flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline"
          >
            <span>Is this accordion item 2?</span>
            <div class="shrink-0 transition-transform duration-200" class:rotate-180={activeItems.includes('item-2')}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4">
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </div>
          </button>
        </h3>
        
        {#if activeItems.includes('item-2')}
          <div
            class="overflow-hidden text-sm transition-all"
            style="transition: height 0.3s ease;"
          >
            <div class="pb-4 pt-0">
              Yes, this is accordion item 2 content.
            </div>
          </div>
        {/if}
      </div>
      
      <!-- Item 3 -->
      <div class="border-b">
        <h3 class="flex">
          <button
            type="button"
            on:click={() => handleValueChange('item-3')}
            aria-expanded={activeItems.includes('item-3')}
            class="flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline"
          >
            <span>Is this accordion item 3?</span>
            <div class="shrink-0 transition-transform duration-200" class:rotate-180={activeItems.includes('item-3')}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4">
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </div>
          </button>
        </h3>
        
        {#if activeItems.includes('item-3')}
          <div
            class="overflow-hidden text-sm transition-all"
            style="transition: height 0.3s ease;"
          >
            <div class="pb-4 pt-0">
              Yes, this is accordion item 3 content.
            </div>
          </div>
        {/if}
      </div>
    </div>
  </div>
</div> 