<script lang="ts">
  import { cn } from '@/lib/utils';
  import './svelte-components.css';
  import { badgeTheme } from '@/lib/theme-utils';
  
  type Variant = 'default' | 'secondary' | 'destructive' | 'outline';
  
  // Props
  export let variant: Variant = "default";
  export let className = "";
</script>

<div 
  class={cn(
    badgeTheme.base,
    badgeTheme.variant[variant],
    className
  )}
  {...$$restProps}
>
  <slot />
</div> 