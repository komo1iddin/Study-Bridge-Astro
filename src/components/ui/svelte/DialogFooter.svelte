<script lang="ts">
  import { cn } from '@/lib/utils';
  import { dialogTheme } from '@/lib/theme-utils';
  
  export let className: string = '';
</script>

<div class={cn(dialogTheme.footer, className)} {...$$restProps}>
  <slot></slot>
</div>