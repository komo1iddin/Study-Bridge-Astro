<script lang="ts">
  import { Button, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Input, Select, Checkbox } from './index';
  import './svelte-components.css';
  
  let name = '';
  let email = '';
  let country = '';
  let agreeToTerms = false;
  
  const countries = [
    { value: 'uz', label: 'Uzbekistan' },
    { value: 'cn', label: 'China' },
    { value: 'ru', label: 'Russia' },
    { value: 'us', label: 'United States' },
    { value: 'uk', label: 'United Kingdom' }
  ];
  
  function handleSubmit() {
    if (!agreeToTerms) {
      alert('Please agree to the terms and conditions');
      return;
    }
    
    alert(`Form submitted with:
Name: ${name}
Email: ${email}
Country: ${country}`);
  }
</script>

<Card>
  <CardHeader>
    <CardTitle>Contact Form</CardTitle>
    <CardDescription>Fill out this form to get in touch with us.</CardDescription>
  </CardHeader>
  <CardContent>
    <form on:submit|preventDefault={handleSubmit}>
      <div class="grid gap-4">
        <div class="grid gap-2">
          <label for="name">Name</label>
          <Input id="name" bind:value={name} placeholder="Enter your name" />
        </div>
        
        <div class="grid gap-2">
          <label for="email">Email</label>
          <Input id="email" type="email" bind:value={email} placeholder="Enter your email" />
        </div>
        
        <div class="grid gap-2">
          <label for="country">Country</label>
          <Select id="country" bind:value={country} options={countries} placeholder="Select your country" />
        </div>
        
        <div class="pt-2">
          <Checkbox id="terms" bind:checked={agreeToTerms}>
            <label for="terms" class="text-sm ml-2 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              I agree to the terms and conditions
            </label>
          </Checkbox>
        </div>
      </div>
    </form>
  </CardContent>
  <CardFooter>
    <Button on:click={handleSubmit}>Submit</Button>
  </CardFooter>
</Card> 