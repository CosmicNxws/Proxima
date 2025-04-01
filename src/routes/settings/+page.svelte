<script>
  import SettingsForm from '$lib/components/SettingsForm.svelte';
  import { user } from '$lib/stores/authStore'; 
</script>

{#if $user}
  <SettingsForm user={$user} />
{/if}