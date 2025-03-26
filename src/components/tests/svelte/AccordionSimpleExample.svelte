<script>
  import Accordion from "@/components/ui/svelte/Accordion.svelte";
  import { Switch, Pagination } from '@/components/ui/svelte';
  
  let expandedItems = ["item-1"];
  
  function handleValueChange(event) {
    console.log("Accordion value changed:", event.detail.value);
    expandedItems = event.detail.value;
  }
  
  const accordionItems = [
    {
      value: "item-1",
      title: "Is it accessible?",
      content: "Yes. It adheres to the WAI-ARIA design pattern."
    },
    {
      value: "item-2",
      title: "Is it styled?",
      content: "Yes. It comes with default styles that match the other components' aesthetic."
    },
    {
      value: "item-3",
      title: "Is it animated?",
      content: "Yes. It's animated by default, but you can disable it if you prefer."
    }
  ];
  
  function handleItemToggle(itemValue) {
    if (expandedItems.includes(itemValue)) {
      expandedItems = expandedItems.filter(item => item !== itemValue);
    } else {
      expandedItems = [...expandedItems, itemValue];
    }
  }
  
  $: expandedItemsStr = Array.isArray(expandedItems) ? expandedItems.join(", ") : expandedItems;
  
  // Switch component state
  let animationsEnabled = true;
  let autoCollapse = false;
  
  // Pagination component state
  let currentPage = 1;
  let totalPages = 5;
  
  function handlePageChange(event) {
    console.log('Page changed:', event.detail.page);
    currentPage = event.detail.page;
  }
</script>

<div class="w-full max-w-md mx-auto space-y-8">
  <div class="mb-4">
    <h3 class="text-sm font-medium mb-2">Expanded items: {expandedItemsStr}</h3>
  </div>
  
  <div class="border rounded-md p-4 mb-4">
    <div class="flex items-center justify-between mb-4">
      <label for="animations-switch" class="text-sm font-medium">Animations Enabled</label>
      <Switch 
        id="animations-switch"
        checked={animationsEnabled}
        on:change={(e) => {
          animationsEnabled = e.detail.checked;
          console.log("Animations enabled:", animationsEnabled);
        }}
      />
    </div>
    
    <div class="flex items-center justify-between">
      <label for="auto-collapse-switch" class="text-sm font-medium">Auto Collapse Others</label>
      <Switch 
        id="auto-collapse-switch"
        checked={autoCollapse}
        on:change={(e) => {
          autoCollapse = e.detail.checked;
          console.log("Auto collapse enabled:", autoCollapse);
        }}
      />
    </div>
  </div>
  
  <Accordion 
    items={accordionItems}
    type="multiple"
    bind:value={expandedItems}
    on:valueChange={handleValueChange}
    class="w-full"
  />
  
  <div class="mt-6">
    <h3 class="text-sm font-medium mb-2">Manually control:</h3>
    <div class="flex gap-2 flex-wrap">
      <button 
        class="px-3 py-1 text-xs bg-gray-200 rounded hover:bg-gray-300" 
        on:click={() => handleItemToggle("item-1")}
      >
        Toggle Item 1
      </button>
      <button 
        class="px-3 py-1 text-xs bg-gray-200 rounded hover:bg-gray-300" 
        on:click={() => handleItemToggle("item-2")}
      >
        Toggle Item 2
      </button>
      <button 
        class="px-3 py-1 text-xs bg-gray-200 rounded hover:bg-gray-300" 
        on:click={() => handleItemToggle("item-3")}
      >
        Toggle Item 3
      </button>
      <button 
        class="px-3 py-1 text-xs bg-gray-200 rounded hover:bg-gray-300" 
        on:click={() => expandedItems = []}
      >
        Collapse All
      </button>
      <button 
        class="px-3 py-1 text-xs bg-gray-200 rounded hover:bg-gray-300"
        on:click={() => expandedItems = ["item-1", "item-2", "item-3"]}
      >
        Expand All
      </button>
    </div>
  </div>
  
  <div class="mt-6 border-t pt-4">
    <h3 class="text-sm font-medium mb-2">Pagination Example:</h3>
    <div class="text-center mb-2">Page {currentPage} of {totalPages}</div>
    <Pagination 
      bind:currentPage={currentPage}
      totalPages={totalPages}
      maxVisiblePages={3}
      on:pageChange={handlePageChange}
    />
  </div>
</div> 