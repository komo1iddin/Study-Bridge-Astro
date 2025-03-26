<script>
  import Button from '@/components/ui/svelte/Button.svelte';
  import Input from '@/components/ui/svelte/Input.svelte';
  import Label from '@/components/ui/svelte/Label.svelte';
  import Checkbox from '@/components/ui/svelte/Checkbox.svelte';
  import RadioGroup from '@/components/ui/svelte/RadioGroup.svelte';
  import RadioGroupItem from '@/components/ui/svelte/RadioGroupItem.svelte';
  import Select from '@/components/ui/svelte/Select.svelte';
  import SelectItem from '@/components/ui/svelte/SelectItem.svelte';
  import Textarea from '@/components/ui/svelte/Textarea.svelte';

  let formData = {
    name: '',
    email: '',
    message: '',
    subscription: 'free',
    marketingEmails: false,
    country: '',
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Form submitted with data:', formData);
    alert('Form submitted! Check console for data.');
  }
</script>

<form on:submit={handleSubmit} class="space-y-6">
  <div class="space-y-2">
    <Label for="name">Name</Label>
    <Input 
      id="name" 
      name="name" 
      placeholder="Enter your name" 
      bind:value={formData.name}
    />
  </div>
  
  <div class="space-y-2">
    <Label for="email">Email</Label>
    <Input 
      id="email" 
      name="email" 
      type="email" 
      placeholder="Enter your email" 
      bind:value={formData.email}
    />
  </div>
  
  <div class="space-y-2">
    <Label for="country">Country</Label>
    <Select 
      bind:value={formData.country} 
      placeholder="Select a country"
      id="country"
    >
      <SelectItem value="us">United States</SelectItem>
      <SelectItem value="ca">Canada</SelectItem>
      <SelectItem value="uk">United Kingdom</SelectItem>
      <SelectItem value="au">Australia</SelectItem>
      <SelectItem value="jp">Japan</SelectItem>
    </Select>
  </div>
  
  <div class="space-y-2">
    <Label>Subscription Plan</Label>
    <RadioGroup 
      bind:value={formData.subscription}
      class="flex flex-col space-y-1"
    >
      <div class="flex items-center space-x-2">
        <RadioGroupItem value="free" id="free" />
        <Label for="free">Free Plan</Label>
      </div>
      <div class="flex items-center space-x-2">
        <RadioGroupItem value="pro" id="pro" />
        <Label for="pro">Pro Plan</Label>
      </div>
      <div class="flex items-center space-x-2">
        <RadioGroupItem value="enterprise" id="enterprise" />
        <Label for="enterprise">Enterprise Plan</Label>
      </div>
    </RadioGroup>
  </div>
  
  <div class="space-y-2">
    <Label for="message">Message</Label>
    <Textarea 
      id="message" 
      name="message" 
      placeholder="Enter your message" 
      bind:value={formData.message}
    />
  </div>
  
  <div class="flex items-center space-x-2">
    <Checkbox 
      id="marketing" 
      checked={formData.marketingEmails}
      on:change={(e) => formData.marketingEmails = e.detail.checked}
    />
    <Label for="marketing">Receive marketing emails</Label>
  </div>
  
  <Button type="submit">Submit Form</Button>
</form> 