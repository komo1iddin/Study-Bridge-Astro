<script>
  import Skeleton from './Skeleton.svelte';
</script>

<div class="space-y-6">
  <div class="space-y-2">
    <Skeleton className="h-5 w-2/5" />
    <Skeleton className="h-4 w-4/5" />
  </div>
  
  <div class="flex items-center space-x-4">
    <Skeleton className="h-12 w-12 rounded-full" />
    <div class="space-y-2">
      <Skeleton className="h-4 w-[250px]" />
      <Skeleton className="h-4 w-[200px]" />
    </div>
  </div>
  
  <div class="flex items-center space-x-4">
    <div class="space-y-2">
      <Skeleton className="h-32 w-[250px]" />
      <Skeleton className="h-4 w-[250px]" />
      <Skeleton className="h-4 w-[200px]" />
    </div>
  </div>
</div> 