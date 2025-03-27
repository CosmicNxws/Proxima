<script>
  import UserProfile from '$lib/components/UserProfile.svelte';
  import { fetchUser } from '$lib/utils/api.js';
  import { onMount } from 'svelte';

  export let data;
  let user = null;
  let error = null;
  let loading = true;

  onMount(async () => {
    try {
      console.log('Fetching user with ID:', data.userId);
      user = await fetchUser(data.userId);
      console.log('Received user data:', user);
    } catch (err) {
      error = err.message;
      console.error('Profile load failed:', {
        error: err,
        userId: data.userId,
        time: new Date().toISOString()
      });
    } finally {
      loading = false;
    }
  });
</script>

{#if loading}
  <div class="loading">Loading profile...</div>
{:else if error}
  <div class="error">
    {#if error.includes('not found')}
      <p>This user doesn't exist</p>
      <a href="/">Return home</a>
    {:else}
      <p>Error: {error}</p>
      <button on:click={() => location.reload()}>Try Again</button>
    {/if}
  </div>
{:else if user}
  <UserProfile {user} />
{/if}

<style>
  .loading { color: #666; padding: 1rem; }
  .error { 
    color: #ff3e00;
    padding: 1rem;
    border: 1px solid currentColor;
    border-radius: 4px;
    max-width: 400px;
    margin: 0 auto;
  }
</style>