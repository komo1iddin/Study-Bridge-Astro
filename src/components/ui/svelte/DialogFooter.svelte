<script lang="ts">
  import { cn } from '../../../lib/utils';
  import { dialogTheme } from '../../../lib/theme-utils';
  
  export let class_name = '';
</script>

<div class={cn(dialogTheme.footer, class_name)} {...$$restProps}>
  <slot />
</div>