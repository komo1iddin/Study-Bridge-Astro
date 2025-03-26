<script lang="ts">
  import { cn } from '@/lib/utils';
  import './svelte-components.css';
  import { avatarTheme } from '@/lib/theme-utils';
  
  export let className: string = '';
</script>

<div
  class={cn(
    "flex h-full w-full items-center justify-center rounded-full bg-muted",
    className
  )}
  {...$$restProps}
>
  <slot />
</div> 