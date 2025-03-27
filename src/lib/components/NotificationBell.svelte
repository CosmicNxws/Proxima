<script>
    import { notifications } from '../stores/notificationStore.js';
  </script>
  
  <div class="notification-bell">
    🔔
    {#if $notifications.length > 0}
      <span class="badge">{$notifications.length}</span>
    {/if}
  </div>
  
  <style>
    .notification-bell {
      position: relative;
      cursor: pointer;
    }
  
    .badge {
      position: absolute;
      top: -8px;
      right: -8px;
      background: #ff0000;
      color: #fff;
      border-radius: 50%;
      padding: 2px 6px;
      font-size: 0.75rem;
    }
  </style>