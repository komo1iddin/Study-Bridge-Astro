<script lang="ts">
  import { cn } from '@/lib/utils';
  import { createEventDispatcher } from 'svelte';
  import './svelte-components.css';
  
  export let open: boolean = false;
  export let onOpenChange: ((open: boolean) => void) | undefined = undefined;
  
  const dispatch = createEventDispatcher();
  
  function handleOpenChange(newOpen: boolean) {
    open = newOpen;
    if (onOpenChange) onOpenChange(newOpen);
    dispatch('openChange', { open: newOpen });
  }
</script>

<slot {open} {handleOpenChange} /> 