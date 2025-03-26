<script lang="ts">
  import { cn } from '@/lib/utils';
  import './svelte-components.css';
  
  export let className: string = '';
  
  // These props will be filled by the slot props from the parent Sheet
  export let open: boolean = false;
  export let handleOpenChange: (open: boolean) => void = () => {};
  
  function handleClick() {
    handleOpenChange(true);
  }
</script>

<button
  type="button"
  class={cn("", className)}
  on:click={handleClick}
  {...$$restProps}
>
  <slot />
</button> 