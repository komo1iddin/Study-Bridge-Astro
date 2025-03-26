<script>
  import Badge from './Badge.svelte';
</script>

<div class="space-y-4">
  <div class="flex flex-wrap gap-4 items-center">
    <Badge>Default</Badge>
    <Badge variant="secondary">Secondary</Badge>
    <Badge variant="destructive">Destructive</Badge>
    <Badge variant="outline">Outline</Badge>
  </div>
  
  <div class="flex flex-wrap gap-4 items-center">
    <Badge className="px-4 py-1">Custom Size</Badge>
    <Badge className="bg-blue-500 text-white hover:bg-blue-600">Custom Color</Badge>
    <Badge className="rounded-md">Custom Shape</Badge>
  </div>

  <div class="flex flex-wrap gap-4 items-center">
    <Badge>
      <span class="mr-1">✓</span> 
      Completed
    </Badge>
    <Badge variant="secondary">
      <span class="mr-1">⭐</span> 
      Featured
    </Badge>
    <Badge variant="destructive">
      <span class="mr-1">⚠️</span> 
      Warning
    </Badge>
  </div>
</div> 