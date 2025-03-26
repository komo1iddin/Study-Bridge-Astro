<script>
  import { Pagination } from '@/components/ui/svelte';
  
  // Basic pagination state
  let currentPage = 1;
  let totalPages = 10;
  
  // Example data for pagination
  let items = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);
  let itemsPerPage = 10;
  
  // Calculate which items to display based on current page
  $: displayedItems = items.slice(
    (currentPage - 1) * itemsPerPage, 
    currentPage * itemsPerPage
  );
  
  function handlePageChange(event) {
    console.log('Page changed:', event.detail.page);
    currentPage = event.detail.page;
  }
</script>

<div class="space-y-8">
  <div>
    <h3 class="text-lg font-medium mb-4">Pagination Example</h3>
    
    <div class="border rounded-md p-4 mb-4">
      <h4 class="font-medium mb-2">Current Page: {currentPage}</h4>
      <ul class="list-disc pl-5 space-y-1">
        {#each displayedItems as item}
          <li>{item}</li>
        {/each}
      </ul>
    </div>
    
    <Pagination 
      bind:currentPage={currentPage}
      totalPages={totalPages}
      maxVisiblePages={5}
      on:pageChange={handlePageChange}
      class="mb-8"
    />
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <h4 class="font-medium mb-2">Compact Pagination</h4>
        <Pagination 
          bind:currentPage={currentPage}
          totalPages={5}
          maxVisiblePages={3}
          class="scale-75 origin-left"
        />
      </div>
      
      <div>
        <h4 class="font-medium mb-2">Many Pages</h4>
        <Pagination 
          currentPage={7}
          totalPages={20}
          maxVisiblePages={7}
        />
      </div>
    </div>
  </div>
</div> 