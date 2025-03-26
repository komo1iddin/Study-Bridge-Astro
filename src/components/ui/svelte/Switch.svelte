<script lang="ts">
  import { cn } from '@/lib/utils';
  import './svelte-components.css';
  import { switchTheme } from '@/lib/theme-utils';
  import { createEventDispatcher } from 'svelte';
  
  export let checked: boolean = false;
  export let disabled: boolean = false;
  export let className: string = '';
  export let id: string = '';
  
  const dispatch = createEventDispatcher();
  
  function handleChange() {
    if (!disabled) {
      checked = !checked;
      dispatch('change', { checked });
    }
  }
</script>

<div class="flex items-center">
  <button
    type="button"
    role="switch"
    aria-checked={checked}
    data-state={checked ? "checked" : "unchecked"}
    disabled={disabled}
    id={id}
    class={cn(switchTheme.root, className)}
    on:click={handleChange}
    {...$$restProps}
  >
    <span class={switchTheme.thumb} data-state={checked ? "checked" : "unchecked"} />
  </button>
  <input
    type="checkbox"
    aria-hidden="true"
    tabindex="-1"
    value={id}
    bind:checked
    class="sr-only"
  />
  {#if $$slots.default}
    <label for={id} class="ml-2 cursor-pointer">
      <slot />
    </label>
  {/if}
</div>