<script>
  import Card from '@/components/ui/svelte/Card.svelte';
  import CardHeader from '@/components/ui/svelte/CardHeader.svelte';
  import CardTitle from '@/components/ui/svelte/CardTitle.svelte';
  import CardDescription from '@/components/ui/svelte/CardDescription.svelte';
  import CardContent from '@/components/ui/svelte/CardContent.svelte';
  import CardFooter from '@/components/ui/svelte/CardFooter.svelte';
  import Button from '@/components/ui/svelte/Button.svelte';
</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
  <!-- Basic Card -->
  <Card>
    <CardHeader>
      <CardTitle>Basic Card</CardTitle>
      <CardDescription>A simple card example</CardDescription>
    </CardHeader>
    <CardContent>
      <p>This is a basic card component with header, content, and footer sections.</p>
    </CardContent>
    <CardFooter class="flex justify-between">
      <Button variant="ghost">Cancel</Button>
      <Button>Continue</Button>
    </CardFooter>
  </Card>

  <!-- Feature Card -->
  <Card class="overflow-hidden">
    <div class="h-40 bg-gradient-to-r from-blue-500 to-purple-600 rounded-t-lg"></div>
    <CardHeader>
      <CardTitle>Feature Card</CardTitle>
      <CardDescription>Card with image and actions</CardDescription>
    </CardHeader>
    <CardContent>
      <p>This card features a gradient banner and interactive elements.</p>
      <div class="mt-4 flex items-center">
        <span class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-500">
          ✓
        </span>
        <span class="ml-2">Included feature</span>
      </div>
    </CardContent>
    <CardFooter>
      <Button class="w-full">Learn More</Button>
    </CardFooter>
  </Card>

  <!-- Product Card -->
  <Card class="border-2 border-primary">
    <CardHeader class="bg-primary/5">
      <CardTitle class="text-primary">Premium Plan</CardTitle>
      <CardDescription>
        <span class="text-2xl font-bold">$29</span>/month
      </CardDescription>
    </CardHeader>
    <CardContent class="pt-6">
      <ul class="space-y-2">
        <li class="flex items-center">
          <span class="mr-2 text-green-500">✓</span>
          <span>Feature one</span>
        </li>
        <li class="flex items-center">
          <span class="mr-2 text-green-500">✓</span>
          <span>Feature two</span>
        </li>
        <li class="flex items-center">
          <span class="mr-2 text-green-500">✓</span>
          <span>Feature three</span>
        </li>
      </ul>
    </CardContent>
    <CardFooter>
      <Button class="w-full">Subscribe Now</Button>
    </CardFooter>
  </Card>

  <!-- Horizontal Card -->
  <Card class="flex flex-row overflow-hidden">
    <div class="w-1/3 bg-slate-200 rounded-l-lg"></div>
    <div class="w-2/3">
      <CardHeader>
        <CardTitle>Horizontal Card</CardTitle>
        <CardDescription>Layout optimized for articles</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This card uses a horizontal layout ideal for article previews or sidebars.</p>
      </CardContent>
      <CardFooter>
        <Button variant="link" class="px-0">Read More →</Button>
      </CardFooter>
    </div>
  </Card>
</div> 