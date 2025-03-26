<script lang="ts">
  import { cn } from '@/lib/utils';
  import { cardTheme } from '@/lib/theme-utils';
  
  let className = "";
  export { className as class };
</script>

<h3 class={cn(cardTheme.title, className)} {...$$restProps}>
  <slot />
</h3> 