<script lang="ts">
  import { cn } from '@/lib/utils';
  import { X } from 'lucide-svelte';
  import { fade, fly } from 'svelte/transition';
  import './svelte-components.css';
  import { sheetTheme } from '@/lib/theme-utils';
  
  export let side: 'top' | 'right' | 'bottom' | 'left' = 'right';
  export let className: string = '';
  
  // These props will be filled by the slot props from the parent Sheet
  export let open: boolean = false;
  export let handleOpenChange: (open: boolean) => void = () => {};
  
  function handleClose() {
    handleOpenChange(false);
  }
  
  function handleOutsideClick(event: MouseEvent) {
    if ((event.target as HTMLElement).classList.contains('sheet-overlay')) {
      handleClose();
    }
  }
  
  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      handleClose();
    }
  }
  
  const flyParams = {
    top: { y: -50, duration: 300 },
    bottom: { y: 50, duration: 300 },
    left: { x: -50, duration: 300 },
    right: { x: 50, duration: 300 },
  };
</script>

<svelte:window on:keydown={handleKeyDown} />

{#if open}
  <!-- Overlay -->
  <div 
    class={sheetTheme.overlay}
    on:click={handleOutsideClick}
    transition:fade={{ duration: 200 }}
  />
  
  <!-- Content -->
  <div
    class={cn(
      sheetTheme.content.base, 
      sheetTheme.content.side[side],
      className
    )}
    transition:fly={flyParams[side]}
  >
    <slot />
    <button
      on:click={handleClose}
      class={sheetTheme.closeButton}
    >
      <X class="h-4 w-4" />
      <span class="sr-only">Close</span>
    </button>
  </div>
{/if} 