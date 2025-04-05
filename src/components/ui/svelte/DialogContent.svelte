<!-- DialogContent.svelte -->
<script lang="ts">
  import { fade } from 'svelte/transition';
  import { cn } from '../../../lib/utils';
  import { dialogTheme } from '../../../lib/theme-utils';

  export let class_name = '';
  export let transition = fade;
  export let transitionConfig = { duration: 200 };
</script>

<div
  class={cn(
    dialogTheme.content,
    class_name
  )}
  transition:transition={transitionConfig}
>
  <slot />
</div> 