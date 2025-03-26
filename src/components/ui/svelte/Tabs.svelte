<script lang="ts">
  import { cn } from '@/lib/utils';
  import { createEventDispatcher } from 'svelte';
  import './svelte-components.css';
  
  export let value: string = '';
  export let className: string = '';
  
  const dispatch = createEventDispatcher();
  
  function handleValueChange(newValue: string) {
    value = newValue;
    dispatch('valueChange', { value: newValue });
  }
</script>

<div class={cn("", className)} {...$$restProps}>
  <slot {value} {handleValueChange} />
</div> 