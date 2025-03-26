<script lang="ts">
  import { 
    Sheet, 
    SheetTrigger, 
    SheetContent, 
    SheetHeader, 
    SheetTitle, 
    SheetDescription,
    SheetFooter
  } from './index';
  import { Button } from './index';
  
  let sheetOpen = false;
  let sideSheetOpen = false;
</script>

<div class="flex flex-col gap-8">
  <div>
    <h3 class="text-lg font-medium mb-4">Sheet Examples</h3>
    <div class="flex flex-wrap gap-4">
      <!-- Basic Sheet example -->
      <Sheet bind:open={sheetOpen}>
        <SheetTrigger let:open let:handleOpenChange className="px-4 py-2 bg-primary-600 text-white rounded-md">
          Open Sheet
        </SheetTrigger>
        <SheetContent let:open let:handleOpenChange>
          <SheetHeader>
            <SheetTitle>Edit Profile</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when you're done.
            </SheetDescription>
          </SheetHeader>
          <div class="grid gap-4 py-4">
            <div class="grid grid-cols-4 items-center gap-4">
              <label for="name" class="text-right">Name</label>
              <input id="name" value="John Doe" class="col-span-3 px-3 py-2 border rounded" />
            </div>
            <div class="grid grid-cols-4 items-center gap-4">
              <label for="username" class="text-right">Username</label>
              <input id="username" value="@johndoe" class="col-span-3 px-3 py-2 border rounded" />
            </div>
          </div>
          <SheetFooter>
            <Button on:click={() => handleOpenChange(false)} class="px-4 py-2 bg-gray-200 rounded">Cancel</Button>
            <Button class="px-4 py-2 bg-primary-600 text-white rounded ml-2">Save changes</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
      
      <!-- Left side sheet -->
      <Sheet bind:open={sideSheetOpen}>
        <SheetTrigger let:open let:handleOpenChange className="px-4 py-2 bg-secondary text-white rounded-md">
          Left Side Sheet
        </SheetTrigger>
        <SheetContent let:open let:handleOpenChange side="left">
          <SheetHeader>
            <SheetTitle>Side Navigation</SheetTitle>
            <SheetDescription>
              This is a left side navigation panel
            </SheetDescription>
          </SheetHeader>
          <div class="py-4">
            <ul class="space-y-2">
              <li><a href="#" class="block py-2 hover:text-primary-600">Dashboard</a></li>
              <li><a href="#" class="block py-2 hover:text-primary-600">Profile</a></li>
              <li><a href="#" class="block py-2 hover:text-primary-600">Settings</a></li>
              <li><a href="#" class="block py-2 hover:text-primary-600">Logout</a></li>
            </ul>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  </div>
</div> 