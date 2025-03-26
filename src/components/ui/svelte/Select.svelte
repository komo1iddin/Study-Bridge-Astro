<script lang="ts">
  import { cn } from '@/lib/utils';
  import { createEventDispatcher, onMount, setContext } from 'svelte';
  import './svelte-components.css';
  import { ChevronDown } from "lucide-svelte";
  import { selectTheme } from '@/lib/theme-utils';
  
  // Props
  export let value: string = '';
  export let placeholder: string = 'Select an option';
  export let disabled: boolean = false;
  export let className: string = '';
  export let id: string = '';
  
  // Internal state
  let open = false;
  let triggerEl: HTMLButtonElement;
  let contentEl: HTMLDivElement;
  let selectedLabel: string = '';
  
  const dispatch = createEventDispatcher();
  
  // Context for child components
  setContext('select', {
    selectedValue: () => value,
    select: (newValue: string, newLabel: string) => {
      value = newValue;
      selectedLabel = newLabel;
      dispatch('change', { value: newValue });
      
      // Don't close dropdown immediately to allow state updates
      setTimeout(() => {
        closeDropdown();
      }, 0);
    },
    isOpen: () => open
  });
  
  function toggleDropdown() {
    if (!disabled) {
      open = !open;
    }
  }
  
  function closeDropdown() {
    open = false;
  }
  
  function handleKeydown(event: KeyboardEvent) {
    if (event.key === "Escape") {
      event.preventDefault();
      closeDropdown();
    }
  }
  
  // Update selected label when value changes
  $: {
    if (value && !selectedLabel) {
      // Try to find the corresponding label
      setTimeout(() => {
        const selectedOption = document.querySelector(`[data-value="${value}"]`);
        if (selectedOption) {
          selectedLabel = selectedOption.textContent?.trim() || '';
        }
      }, 0);
    }
  }
  
  onMount(() => {
    document.addEventListener('keydown', handleKeydown);
    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  });
</script>

<svelte:window on:click={(e) => {
  if (open && triggerEl && !triggerEl.contains(e.target as Node) && 
      contentEl && !contentEl.contains(e.target as Node)) {
    closeDropdown();
  }
}} on:keydown={handleKeydown} />

<div class={cn("relative w-full", className)}>
  <button
    type="button"
    role="combobox" 
    aria-expanded={open}
    aria-haspopup="listbox"
    {disabled}
    {id}
    class={cn(selectTheme.trigger, "[&>span]:line-clamp-1", "select-trigger")}
    on:click={toggleDropdown}
    bind:this={triggerEl}
  >
    <span class="flex-1 text-left truncate">
      {value && selectedLabel ? selectedLabel : placeholder}
    </span>
    <ChevronDown class="h-4 w-4 opacity-50" />
  </button>
  
  {#if open}
    <div 
      class={cn(
        selectTheme.content,
        "absolute z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md select-content",
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2"
      )}
      style="top: calc(100% + 4px); left: 0; width: 100%;"
      role="listbox"
      data-state="open"
      data-side="bottom"
      bind:this={contentEl}
    >
      <div class={cn(selectTheme.viewport, "p-1 h-full select-viewport")}>
        <slot />
      </div>
    </div>
  {/if}
</div>

<style>
  /* Match the React styling for border */
  :global(.select-trigger) {
    border-color: hsl(var(--input));
    transition: 
      border-color 150ms ease, 
      background-color 150ms ease;
  }
  
  :global(.select-trigger:hover) {
    background-color: hsl(var(--muted) / 0.2);
    border-color: hsl(var(--border));
  }
  
  :global(.select-trigger:focus-visible) {
    outline: none;
    border-color: hsl(var(--ring));
    box-shadow: 0 0 0 2px hsl(var(--ring) / 0.3);
  }
  
  /* Remove default border styling for selected state */
  :global(.select-trigger[aria-expanded="true"]) {
    border-color: hsl(var(--input));
    outline: none;
    box-shadow: none;
  }
  
  /* Select content styling */
  :global(.select-content) {
    animation: fadeIn 150ms ease-out;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border-color: hsl(var(--border));
  }
  
  @keyframes fadeIn {
    from { 
      opacity: 0;
      transform: translateY(4px);
    }
    to { 
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  /* Ensure dropdown items have hover effect */
  :global(.select-viewport [role="option"]) {
    transition: background-color 150ms ease, color 150ms ease;
    position: relative;
  }
  
  :global(.select-viewport [role="option"]:hover) {
    background-color: hsl(var(--accent));
    color: hsl(var(--accent-foreground));
  }
  
  :global(.select-viewport [role="option"]:focus) {
    background-color: hsl(var(--accent));
    color: hsl(var(--accent-foreground));
    outline: none;
  }
  
  /* Selected item styling */
  :global(.select-viewport [role="option"][data-state="checked"]) {
    font-weight: 500;
  }
  
  :global(.select-viewport [role="option"][data-state="checked"] .select-check) {
    display: flex;
  }
  
  :global(.select-viewport [role="option"] .select-check) {
    display: none;
  }
</style> 