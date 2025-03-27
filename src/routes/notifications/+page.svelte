<script>
    import { notifications } from '../../../lib/stores/notificationStore.js';
    import { onMount } from 'svelte';
  
    onMount(async () => {
      await fetchNotifications();
    });
  </script>
  
  <div class="notifications">
    {#each $notifications as notification}
      <div class="notification">
        <p>{notification.message}</p>
      </div>
    {/each}
  </div>
  
  <style>
    .notifications {
      max-width: 800px;
      margin: 0 auto;
      padding: 16px;
    }
  
    .notification {
      background: #2a2a40;
      padding: 8px;
      border-radius: 4px;
      margin-bottom: 8px;
    }
  </style>