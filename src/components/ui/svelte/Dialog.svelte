<script lang="ts">
  import { cn } from '@/lib/utils';
  import { createEventDispatcher, onMount } from 'svelte';
  import './svelte-components.css';
  import { dialogTheme } from '@/lib/theme-utils';
  
  export let open: boolean = false;
  export let className: string = '';
  
  const dispatch = createEventDispatcher();
  
  function closeDialog() {
    open = false;
    dispatch('close');
  }
  
  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape' && open) {
      closeDialog();
    }
  }
  
  function handleOverlayClick(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      closeDialog();
    }
  }
  
  onMount(() => {
    document.addEventListener('keydown', handleKeydown);
    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  });
  
  $: if (open) {
    document.body.classList.add('overflow-hidden');
  } else {
    document.body.classList.remove('overflow-hidden');
  }
</script>

{#if open}
  <div class="fixed inset-0 z-50">
    <!-- Overlay -->
    <div 
      class={dialogTheme.overlay}
      on:click={handleOverlayClick}
      data-state={open ? 'open' : 'closed'}
    ></div>
    
    <!-- Dialog content -->
    <div 
      class={cn(
        dialogTheme.content,
        className
      )}
      data-state={open ? 'open' : 'closed'}
    >
      <slot></slot>
      
      <!-- Close button -->
      <button 
        class={dialogTheme.closeButton}
        on:click={closeDialog}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          stroke-width="2" 
          stroke-linecap="round" 
          stroke-linejoin="round" 
          class="h-4 w-4"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
        <span class="sr-only">Close</span>
      </button>
    </div>
  </div>
{/if} 