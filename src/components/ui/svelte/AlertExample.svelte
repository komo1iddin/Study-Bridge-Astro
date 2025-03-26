<script>
  import Alert from './Alert.svelte';
  import AlertTitle from './AlertTitle.svelte';
  import AlertDescription from './AlertDescription.svelte';
  
  // Import icons
  import { Info, AlertCircle } from 'lucide-svelte';
</script>

<div class="space-y-6">
  <Alert>
    <Info class="h-4 w-4" />
    <AlertTitle>Information</AlertTitle>
    <AlertDescription>
      This is an informational alert for your application.
    </AlertDescription>
  </Alert>
  
  <Alert variant="destructive">
    <AlertCircle class="h-4 w-4" />
    <AlertTitle>Error</AlertTitle>
    <AlertDescription>
      There was an error processing your request. Please try again.
    </AlertDescription>
  </Alert>
</div> 