<script lang="ts">
  import { cn } from '@/lib/utils';
  import './svelte-components.css';
  import { tabsTheme } from '@/lib/theme-utils';
  
  export let className: string = '';
</script>

<div 
  class={cn(
    tabsTheme.list,
    className
  )} 
  role="tablist"
  {...$$restProps}
>
  <slot />
</div> 