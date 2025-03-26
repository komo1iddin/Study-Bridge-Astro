<script lang="ts">
  import { cn } from '@/lib/utils';
  import type { HTMLLabelAttributes } from 'svelte/elements';
  import './svelte-components.css';
  import { labelTheme } from '@/lib/theme-utils';
  
  interface $$Props extends HTMLLabelAttributes {
    className?: string;
  }
  
  export let htmlFor: string = '';
  export let className: string = '';
</script>

<label
  for={htmlFor}
  class={cn(
    labelTheme.base,
    className
  )}
  {...$$restProps}
>
  <slot />
</label> 