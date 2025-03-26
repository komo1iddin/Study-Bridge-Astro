<script>
  import { cn } from '@/lib/utils';
  import './svelte-components.css';
  import { skeletonTheme } from '@/lib/theme-utils';
  
  export let className = '';
</script>

<div
  class={cn(skeletonTheme.base, className)}
  {...$$restProps}
></div> 