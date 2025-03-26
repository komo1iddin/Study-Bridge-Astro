<script lang="ts">
  import { cn } from '@/lib/utils';
  import './svelte-components.css';
  import { sheetTheme } from '@/lib/theme-utils';
  
  export let className: string = '';
</script>

<h2
  class={cn(sheetTheme.title, className)}
  {...$$restProps}
>
  <slot />
</h2> 