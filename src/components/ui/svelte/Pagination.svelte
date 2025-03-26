<script lang="ts">
  import { cn } from '../../../lib/utils';
  import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-svelte';
  import './svelte-components.css';
  import { createEventDispatcher } from 'svelte';
  
  export let currentPage: number = 1;
  export let totalPages: number = 5;
  export let maxVisiblePages: number = 5;
  export let className: string = '';
  
  const dispatch = createEventDispatcher();
  
  function goToPage(page: number) {
    if (page === currentPage || page < 1 || page > totalPages) return;
    currentPage = page;
    dispatch('pageChange', { page });
  }
  
  function prev() {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  }
  
  function next() {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1);
    }
  }
  
  $: pageNumbers = getPageNumbers(currentPage, totalPages);
  
  function getPageNumbers(current: number, total: number): Array<number | '...'> {
    if (total <= 7) {
      return Array.from({ length: total }, (_, i) => i + 1);
    }
    
    const pages: Array<number | '...'> = [1];
    
    // First 4 pages
    if (current <= 4) {
      pages.push(2, 3, 4, 5, '...', total);
    }
    // Last 4 pages
    else if (current >= total - 3) {
      pages.push('...', total - 4, total - 3, total - 2, total - 1, total);
    }
    // Middle pages
    else {
      pages.push('...', current - 1, current, current + 1, '...', total);
    }

    return pages;
  }
</script>

<nav 
  role="navigation" 
  aria-label="pagination" 
  class={cn("mx-auto flex w-full justify-center", className)}
  {...$$restProps}
>
  <ul class="flex flex-row items-center gap-1">
    <!-- Previous Button -->
    <li>
      <button
        on:click={prev}
        disabled={currentPage === 1}
        class={cn(
          "inline-flex h-9 items-center gap-1 rounded-md border border-input px-3 py-2 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          "pl-2.5"
        )}
        aria-label="Go to previous page"
      >
        <ChevronLeft class="h-4 w-4" />
        <span>Previous</span>
      </button>
    </li>
    
    <!-- Page Numbers -->
    {#each pageNumbers as page}
      <li>
        {#if page === '...'}
          <span class="flex h-9 w-9 items-center justify-center" aria-hidden="true">
            <MoreHorizontal class="h-4 w-4" />
            <span class="sr-only">More pages</span>
          </span>
        {:else}
          <button
            on:click={() => goToPage(page as number)}
            aria-current={currentPage === page ? "page" : undefined}
            class={cn(
              "inline-flex h-9 w-9 items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
              currentPage === page 
                ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                : "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground"
            )}
          >
            {page}
          </button>
        {/if}
      </li>
    {/each}
    
    <!-- Next Button -->
    <li>
      <button
        on:click={next}
        disabled={currentPage === totalPages}
        class={cn(
          "inline-flex h-9 items-center gap-1 rounded-md border border-input px-3 py-2 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          "pr-2.5"
        )}
        aria-label="Go to next page"
      >
        <span>Next</span>
        <ChevronRight class="h-4 w-4" />
      </button>
    </li>
  </ul>
</nav>