<script lang="ts">
  import { cn } from '@/lib/utils';
  import './svelte-components.css';
  import { sheetTheme } from '@/lib/theme-utils';
  
  export let className: string = '';
</script>

<div
  class={cn(
    sheetTheme.header,
    className
  )}
  {...$$restProps}
>
  <slot />
</div> 