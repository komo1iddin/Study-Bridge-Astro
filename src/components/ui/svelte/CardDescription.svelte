<script lang="ts">
  import { cn } from '@/lib/utils';
  import { cardTheme } from '@/lib/theme-utils';
  
  let className = "";
  export { className as class };
</script>

<p class={cn(cardTheme.description, className)} {...$$restProps}>
  <slot />
</p> 