<script lang="ts">
  import { Tabs, TabsList, TabsTrigger, TabsContent } from './index';
  import './svelte-components.css';
  
  let activeTab = 'account';
</script>

<Tabs bind:value={activeTab}>
  <TabsList>
    <TabsTrigger value="account" currentValue={activeTab} handleValueChange={(v) => activeTab = v}>
      Account
    </TabsTrigger>
    <TabsTrigger value="password" currentValue={activeTab} handleValueChange={(v) => activeTab = v}>
      Password
    </TabsTrigger>
    <TabsTrigger value="settings" currentValue={activeTab} handleValueChange={(v) => activeTab = v}>
      Settings
    </TabsTrigger>
  </TabsList>
  <TabsContent value="account" currentValue={activeTab}>
    <div class="p-4 rounded-md border mt-2">
      <h3 class="text-lg font-semibold mb-2">Account Information</h3>
      <p>Manage your account settings and preferences.</p>
    </div>
  </TabsContent>
  <TabsContent value="password" currentValue={activeTab}>
    <div class="p-4 rounded-md border mt-2">
      <h3 class="text-lg font-semibold mb-2">Change Password</h3>
      <p>Update your password and security preferences.</p>
    </div>
  </TabsContent>
  <TabsContent value="settings" currentValue={activeTab}>
    <div class="p-4 rounded-md border mt-2">
      <h3 class="text-lg font-semibold mb-2">User Settings</h3>
      <p>Manage your application settings and preferences.</p>
    </div>
  </TabsContent>
</Tabs> 