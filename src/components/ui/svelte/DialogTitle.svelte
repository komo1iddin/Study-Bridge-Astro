<script lang="ts">
  import { cn } from '@/lib/utils';
  import { dialogTheme } from '@/lib/theme-utils';
  
  export let className: string = '';
</script>

<h2 class={cn(dialogTheme.title, className)} {...$$restProps}>
  <slot></slot>
</h2> 