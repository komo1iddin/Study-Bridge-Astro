<script>
  import { onMount } from 'svelte';
  import Alert from './Alert.svelte';
  import AlertTitle from './AlertTitle.svelte';
  import AlertDescription from './AlertDescription.svelte';
  import Button from './Button.svelte';
  import Separator from './Separator.svelte';
  import Skeleton from './Skeleton.svelte';
  import Sheet from './Sheet.svelte';
  import SheetTrigger from './SheetTrigger.svelte';
  import SheetContent from './SheetContent.svelte';
  import SheetHeader from './SheetHeader.svelte';
  import SheetTitle from './SheetTitle.svelte';
  import SheetDescription from './SheetDescription.svelte';
  import SheetFooter from './SheetFooter.svelte';
  import { Info, AlertCircle, CheckCircle } from 'lucide-svelte';

  let loading = true;
  let success = false;
  let error = false;
  let sheetOpen = false;

  // Simulate loading data
  onMount(() => {
    setTimeout(() => {
      loading = false;
    }, 2000);
  });

  function handleLoad() {
    loading = true;
    success = false;
    error = false;
    
    setTimeout(() => {
      loading = false;
      // Randomly succeed or fail to showcase different states
      if (Math.random() > 0.5) {
        success = true;
      } else {
        error = true;
      }
    }, 2000);
  }

  function handleDismissAlert() {
    success = false;
    error = false;
  }
</script>

<div class="space-y-6 p-4">
  <h2 class="text-2xl font-bold">User Profile Dashboard</h2>
  <Separator className="my-4" />

  {#if loading}
    <div class="space-y-4">
      <Skeleton className="h-12 w-3/4 rounded-lg" />
      <div class="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div class="space-y-2">
          <Skeleton className="h-4 w-40" />
          <Skeleton className="h-4 w-24" />
        </div>
      </div>
      <Skeleton className="h-32 w-full rounded-lg" />
    </div>
  {:else if success}
    <Alert>
      <CheckCircle class="h-4 w-4" />
      <AlertTitle>Success!</AlertTitle>
      <AlertDescription>
        User profile has been successfully updated.
      </AlertDescription>
      <Button size="sm" variant="outline" class="ml-auto" on:click={handleDismissAlert}>
        Dismiss
      </Button>
    </Alert>
    <div class="mt-4">
      <h3 class="text-lg font-medium">John Doe</h3>
      <p class="text-sm text-muted-foreground">john.doe@example.com</p>
      
      <Separator className="my-4" />
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="p-4 border rounded-lg">
          <h4 class="font-medium">Account Information</h4>
          <p class="text-sm text-muted-foreground">Member since: January 2023</p>
        </div>
        <div class="p-4 border rounded-lg">
          <h4 class="font-medium">Preferences</h4>
          <p class="text-sm text-muted-foreground">Language: English</p>
        </div>
      </div>
    </div>
  {:else if error}
    <Alert variant="destructive">
      <AlertCircle class="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Failed to load user profile. Please try again.
      </AlertDescription>
      <Button size="sm" variant="outline" class="ml-auto" on:click={handleDismissAlert}>
        Dismiss
      </Button>
    </Alert>
  {:else}
    <div class="grid place-items-center h-40">
      <Button on:click={handleLoad}>Load Profile</Button>
    </div>
  {/if}

  <Separator className="my-4" />
  
  <div class="flex justify-end">
    <Sheet bind:open={sheetOpen}>
      <SheetTrigger asChild>
        <Button>Edit Profile</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit Profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div class="py-4 space-y-4">
          <div class="space-y-2">
            <label for="name" class="text-sm font-medium">Name</label>
            <input
              id="name"
              type="text"
              class="w-full p-2 border rounded-md"
              value="John Doe"
            />
          </div>
          <div class="space-y-2">
            <label for="email" class="text-sm font-medium">Email</label>
            <input
              id="email"
              type="email"
              class="w-full p-2 border rounded-md"
              value="john.doe@example.com"
            />
          </div>
        </div>
        <SheetFooter>
          <Button variant="outline" on:click={() => sheetOpen = false}>
            Cancel
          </Button>
          <Button on:click={() => {
            sheetOpen = false;
            handleLoad();
          }}>
            Save Changes
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  </div>
</div>