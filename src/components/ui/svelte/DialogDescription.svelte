<!-- DialogDescription.svelte -->
<script lang="ts">
  import { cn } from '../../../lib/utils';
  import { dialogTheme } from '../../../lib/theme-utils';
  
  export let class_name = '';
</script>

<p class={cn(dialogTheme.description, class_name)} {...$$restProps}>
  <slot />
</p> 