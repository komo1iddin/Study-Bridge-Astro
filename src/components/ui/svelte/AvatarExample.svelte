<script lang="ts">
  import { Avatar, AvatarImage, AvatarFallback } from './index';
</script>

<div class="flex flex-col gap-8">
  <div>
    <h3 class="text-lg font-medium mb-4">Avatar Examples</h3>
    <div class="flex gap-4">
      <!-- Avatar with image -->
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      
      <!-- Avatar with fallback -->
      <Avatar>
        <AvatarImage src="/non-existent-image.jpg" alt="@john" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      
      <!-- Avatar with custom size -->
      <Avatar className="h-14 w-14">
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
      
      <!-- Avatar with custom background -->
      <Avatar>
        <AvatarFallback className="bg-primary-600 text-white">XY</AvatarFallback>
      </Avatar>
    </div>
  </div>
</div> 