<script>
  import Alert from '@/components/ui/svelte/Alert.svelte';
  import AlertTitle from '@/components/ui/svelte/AlertTitle.svelte';
  import AlertDescription from '@/components/ui/svelte/AlertDescription.svelte';
  import { Info, AlertCircle, CheckCircle } from 'lucide-svelte';
</script>

<div class="space-y-4">
  <Alert>
    <Info class="h-4 w-4 mr-2" />
    <div>
      <AlertTitle>Info Alert</AlertTitle>
      <AlertDescription>
        This is a basic informational alert message.
      </AlertDescription>
    </div>
  </Alert>
  
  <Alert variant="destructive">
    <AlertCircle class="h-4 w-4 mr-2" />
    <div>
      <AlertTitle>Error Alert</AlertTitle>
      <AlertDescription>
        This is a destructive alert for errors and warnings.
      </AlertDescription>
    </div>
  </Alert>
  
  <Alert class="border-green-500 text-green-700 bg-green-50">
    <CheckCircle class="h-4 w-4 mr-2" />
    <div>
      <AlertTitle>Success Alert</AlertTitle>
      <AlertDescription>
        This is a custom styled success alert.
      </AlertDescription>
    </div>
  </Alert>
  
  <Alert class="border-yellow-500 text-yellow-700 bg-yellow-50">
    <AlertCircle class="h-4 w-4 mr-2" />
    <div>
      <AlertTitle>Warning Alert</AlertTitle>
      <AlertDescription>
        This is a custom styled warning alert.
      </AlertDescription>
    </div>
  </Alert>
</div> 