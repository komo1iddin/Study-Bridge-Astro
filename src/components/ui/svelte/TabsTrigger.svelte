<script lang="ts">
  import { cn } from '@/lib/utils';
  import './svelte-components.css';
  import { tabsTheme } from '@/lib/theme-utils';
  
  export let value: string;
  export let currentValue: string = '';
  export let className: string = '';
  export let disabled: boolean = false;
  
  // Pass a reference to the parent's value change handler
  export let handleValueChange: (value: string) => void;
  
  function handleClick() {
    if (!disabled) {
      handleValueChange(value);
    }
  }
  
  $: active = currentValue === value;
</script>

<button
  type="button"
  {disabled}
  class={cn(
    tabsTheme.trigger,
    className
  )}
  data-state={active ? "active" : "inactive"}
  role="tab"
  aria-selected={active}
  on:click={handleClick}
  {...$$restProps}
>
  <slot />
</button> 