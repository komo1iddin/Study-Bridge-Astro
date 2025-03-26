<script>
  import { cn } from '@/lib/utils';
  import './svelte-components.css';
  import { separatorTheme } from '@/lib/theme-utils';
  
  export let orientation = 'horizontal';
  export let decorative = true;
  export let className = '';
</script>

<div
  role={decorative ? 'none' : 'separator'}
  aria-orientation={decorative ? undefined : orientation}
  class={cn(
    separatorTheme.base,
    orientation === "horizontal" ? separatorTheme.horizontal : separatorTheme.vertical,
    className
  )}
  {...$$restProps}
></div> 