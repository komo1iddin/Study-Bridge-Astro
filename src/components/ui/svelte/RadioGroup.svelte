<script lang="ts">
  import { cn } from "@/lib/utils";
  import './svelte-components.css';
  import { setContext, createEventDispatcher, onMount } from 'svelte';
  
  export let value = "";
  export let disabled = false;
  let className = "";
  export { className as class };
  
  const dispatch = createEventDispatcher();
  
  function setValue(newValue) {
    if (value !== newValue) {
      value = newValue;
      dispatch('change', { value: newValue });
    }
  }
  
  // Make the value available to all RadioGroupItem components
  setContext('RadioGroup', {
    name: 'RadioGroup',
    getValue: () => value,
    setValue,
    isDisabled: () => disabled
  });
  
  onMount(() => {
    console.log("RadioGroup mounted with value:", value);
  });
</script>

<div
  class={cn("grid gap-2", className)}
  role="radiogroup"
  aria-disabled={disabled}
  data-disabled={disabled}
  {...$$restProps}
>
  <slot />
</div>