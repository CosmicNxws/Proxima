<script>
    import SettingsForm from '$lib/components/SettingsForm.svelte';
    import { user } from '../../../lib/stores/authStore.js';
  </script>
  
  {#if $user}
    <SettingsForm user={$user} />
  {/if}