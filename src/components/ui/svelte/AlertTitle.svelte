<script>
  import { cn } from '@/lib/utils';
  import './svelte-components.css';
  import { alertTheme } from '@/lib/theme-utils';
  
  let className = "";
  export { className as class };
</script>

<h5
  class={cn(alertTheme.title, className)}
  {...$$restProps}
>
  <slot />
</h5> 