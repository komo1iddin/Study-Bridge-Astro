<script lang="ts">
  import { cn } from '@/lib/utils';
  import { Check } from 'lucide-svelte';
  import './svelte-components.css';
  import { getContext, onMount } from 'svelte';
  import { selectTheme } from '@/lib/theme-utils';
  
  export let value: string;
  export let disabled: boolean = false;
  export let className: string = '';
  
  let itemEl: HTMLDivElement;
  let itemText: string = '';
  
  // Get select context
  const select = getContext('select') as {
    selectedValue: () => string;
    select: (value: string, label: string) => void;
    isOpen: () => boolean;
  };
  
  // Check if this item is selected
  $: selected = select.selectedValue() === value;
  
  function handleClick() {
    if (!disabled) {
      select.select(value, itemText);
    }
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleClick();
    }
  }
  
  onMount(() => {
    if (itemEl) {
      // Extract text content from the slot
      const childNodes = Array.from(itemEl.childNodes);
      const textContent = childNodes
        .filter(node => {
          if (node.nodeType === Node.TEXT_NODE) return true;
          // Exclude Check icon span
          const el = node as HTMLElement;
          return !el.classList || !el.classList.contains('absolute');
        })
        .map(node => node.textContent || '')
        .join('')
        .trim();
      
      itemText = textContent;
      
      // If this is the selected item, update the parent
      if (selected) {
        select.select(value, itemText);
      }
    }
  });
</script>

<div
  role="option"
  aria-selected={selected}
  aria-disabled={disabled}
  data-value={value}
  data-state={selected ? 'checked' : 'unchecked'}
  tabindex={disabled ? -1 : 0}
  class={cn(
    selectTheme.item,
    "select-item",
    className
  )}
  on:click={handleClick}
  on:keydown={handleKeydown}
  bind:this={itemEl}
>
  <span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center select-check">
    <Check class="h-4 w-4" />
  </span>
  <slot />
</div> 