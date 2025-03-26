<script lang="ts">
  import { cn } from '@/lib/utils';
  import { cardTheme } from '@/lib/theme-utils';
  
  let className = "";
  export { className as class };
</script>

<div
  class={cn(cardTheme.footer, className)}
  {...$$restProps}
>
  <slot />
</div> 