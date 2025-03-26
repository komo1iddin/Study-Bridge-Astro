<script>
  import { cn } from '@/lib/utils';
  import './svelte-components.css';
  import { alertTheme } from '@/lib/theme-utils';
  
  let className = "";
  export { className as class };
</script>

<div
  class={cn(alertTheme.description, className)}
  {...$$restProps}
>
  <slot />
</div> 