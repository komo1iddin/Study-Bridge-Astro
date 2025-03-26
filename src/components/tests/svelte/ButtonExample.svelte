<script>
  import Button from '@/components/ui/svelte/Button.svelte';
</script>

<div>
  <Button variant="default">Default</Button>
  <Button variant="destructive">Destructive</Button>
  <Button variant="outline">Outline</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="ghost">Ghost</Button>
  <Button variant="link">Link</Button>
  
  <div class="flex flex-col gap-2 mt-4 w-full">
    <Button size="default" class="w-full">Default Size</Button>
    <Button size="sm" class="w-full">Small Size</Button>
    <Button size="lg" class="w-full">Large Size</Button>
  </div>
  
  <div class="flex gap-2 mt-4">
    <Button disabled>Disabled</Button>
    <Button variant="outline" disabled>Disabled Outline</Button>
  </div>
  
  <div class="flex gap-2 mt-4">
    <Button>
      <span class="mr-2">⚡</span>
      With Icon
    </Button>
  </div>
</div> 