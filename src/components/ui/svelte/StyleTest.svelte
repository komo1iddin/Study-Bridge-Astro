<script>
  import { Button } from './index';
  import './svelte-components.css';
</script>

<div class="p-6 bg-card border border-border rounded-lg shadow-sm">
  <h2 class="text-2xl font-semibold text-foreground mb-4">Style Test Component</h2>
  
  <div class="space-y-4">
    <div class="grid grid-cols-2 gap-4">
      <div class="p-4 bg-primary text-primary-foreground rounded">Primary</div>
      <div class="p-4 bg-secondary text-secondary-foreground rounded">Secondary</div>
      <div class="p-4 bg-destructive text-destructive-foreground rounded">Destructive</div>
      <div class="p-4 bg-muted text-muted-foreground rounded">Muted</div>
    </div>
    
    <div class="flex gap-2 flex-wrap">
      <Button variant="default">Default</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  </div>
</div> 