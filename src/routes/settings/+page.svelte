<script>
  import SettingsForm from '$lib/components/SettingsForm.svelte';
  import { user } from '$lib/stores/authStore'; 
</script>

<meta name="google-adsense-account" content="ca-pub-1753330877601837">

{#if $user}
  <SettingsForm user={$user} />
{/if}