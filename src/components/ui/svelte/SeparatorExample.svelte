<script>
  import Separator from './Separator.svelte';
</script>

<div class="space-y-6">
  <div>
    <div class="text-lg font-semibold">Horizontal Separator</div>
    <p class="text-sm text-muted-foreground mb-2">Used to separate content horizontally.</p>
    <Separator className="my-4" />
    <div class="py-2">Content below the separator</div>
  </div>
  
  <div class="flex h-20 items-center">
    <div>Content before</div>
    <Separator orientation="vertical" className="mx-4" />
    <div>Content after</div>
  </div>
  
  <div>
    <h3 class="text-lg font-semibold">Section title</h3>
    <Separator className="my-2" />
    <p class="text-sm text-muted-foreground">
      Separators can be used to divide content into distinct sections.
    </p>
  </div>
</div> 