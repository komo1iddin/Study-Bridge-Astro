<script lang="ts">
  import { cn } from '@/lib/utils';
  import { createEventDispatcher } from 'svelte';
  import './svelte-components.css';
  import { Check } from "lucide-svelte";
  import { checkboxTheme } from '@/lib/theme-utils';
  
  export let checked: boolean = false;
  export let disabled: boolean = false;
  export let id: string = '';
  
  let className = '';
  export { className as class };
  
  const dispatch = createEventDispatcher();
  
  function handleClick(event: MouseEvent) {
    if (!disabled) {
      event.preventDefault();
      checked = !checked;
      dispatch('change', { checked });
    }
  }
</script>

<div class="flex items-center space-x-2">
  <div class="relative">
    <input
      type="checkbox"
      {id}
      {disabled}
      {checked}
      class="sr-only"
      aria-hidden="true"
    />
    <div
      class={cn(
        checkboxTheme.base,
        className
      )}
      data-state={checked ? "checked" : "unchecked"}
      on:click={handleClick}
      role="checkbox"
      aria-checked={checked}
      tabindex={disabled ? undefined : 0}
    >
      {#if checked}
        <Check class={cn(checkboxTheme.indicator, "text-white")} />
      {/if}
    </div>
  </div>
  <slot />
</div> 