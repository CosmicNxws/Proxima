<script>
  import { onMount } from 'svelte';
  
  let showNotice = false;
  let dismissed = false;
  
  onMount(() => {
    // Check if user has already dismissed the notice
    const dismissedNotice = localStorage.getItem('maintenance-notice-dismissed');
    if (!dismissedNotice) {
      // Show notice after a short delay to not interrupt initial page load
      setTimeout(() => {
        showNotice = true;
      }, 1000);
    }
  });
  
  function dismissNotice() {
    showNotice = false;
    dismissed = true;
    localStorage.setItem('maintenance-notice-dismissed', 'true');
  }
</script>

{#if showNotice && !dismissed}
  <div class="maintenance-overlay" on:click={dismissNotice}>
    <div class="maintenance-notice" on:click|stopPropagation>
      <div class="notice-header">
        <div class="header-content">
          <div class="icon-container">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
            </svg>
          </div>
          <h3>Site Update Coming Soon!</h3>
        </div>
        <button class="close-btn" on:click={dismissNotice} aria-label="Close notice">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
      
      <div class="notice-content">
        <div class="update-info">
          <p class="main-message"><strong>Proxima is getting a major upgrade to Version 2.0!</strong></p>
          <div class="date-time">
            <div class="info-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" stroke-width="2"/>
                <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" stroke-width="2"/>
                <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" stroke-width="2"/>
                <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" stroke-width="2"/>
              </svg>
              <span><strong>Friday, December 8th</strong></span>
            </div>
            <div class="info-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                <polyline points="12,6 12,12 16,14" stroke="currentColor" stroke-width="2"/>
              </svg>
              <span>Site will be temporarily unavailable</span>
            </div>
          </div>
          <p class="sub-message">We're working hard to bring you an even better experience!</p>
        </div>
      </div>
      
      <div class="notice-actions">
        <button class="dismiss-btn" on:click={dismissNotice}>
          Got it!
        </button>
      </div>
    </div>
  </div>
{/if}

<style>
  /* CSS Variables matching site theme */
  :root {
    --bg-dark: #10005557;
    --bg-darker: #121212;
    --text-light: #e0e0e0;
    --text-lighter: #f5f5f5;
    --accent-blue: #9e11d6;
    --accent-blue-dark: #9e11d6;
    --border-dark: #3d3d3d;
    --shadow-dark: rgba(0, 0, 0, 0.3);
  }

  .maintenance-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    animation: fadeIn 0.3s ease-out;
    backdrop-filter: blur(4px);
  }
  
  .maintenance-notice {
    background: var(--bg-darker);
    border: 1px solid var(--border-dark);
    border-radius: 8px;
    padding: 24px;
    max-width: 480px;
    width: 90%;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
    animation: slideIn 0.4s ease-out;
    position: relative;
    overflow: hidden;
  }

  .maintenance-notice::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, var(--accent-blue), #7d18ab);
  }
  
  .notice-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 20px;
  }

  .header-content {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .icon-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: linear-gradient(135deg, var(--accent-blue), #7d18ab);
    border-radius: 8px;
    color: var(--text-lighter);
  }

  .icon-container svg {
    width: 20px;
    height: 20px;
  }
  
  .notice-header h3 {
    margin: 0;
    color: var(--text-lighter);
    font-size: 1.3rem;
    font-weight: 600;
    line-height: 1.2;
  }
  
  .close-btn {
    background: none;
    border: none;
    color: var(--text-light);
    cursor: pointer;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    transition: all 0.3s ease;
    min-width: 36px;
    height: 36px;
  }
  
  .close-btn:hover {
    background: rgba(255, 255, 255, 0.1);
    color: var(--text-lighter);
    transform: scale(1.1);
  }

  .close-btn svg {
    width: 16px;
    height: 16px;
  }
  
  .notice-content {
    margin-bottom: 24px;
  }

  .update-info {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .main-message {
    margin: 0;
    color: var(--text-lighter);
    font-size: 1.1rem;
    line-height: 1.4;
  }

  .main-message strong {
    color: var(--accent-blue);
  }

  .date-time {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 16px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 6px;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .info-item {
    display: flex;
    align-items: center;
    gap: 10px;
    color: var(--text-light);
    font-size: 0.95rem;
  }

  .info-item svg {
    color: var(--accent-blue);
    flex-shrink: 0;
  }

  .info-item strong {
    color: var(--accent-blue);
  }

  .sub-message {
    margin: 0;
    color: var(--text-light);
    font-size: 0.9rem;
    opacity: 0.8;
    font-style: italic;
  }
  
  .notice-actions {
    display: flex;
    justify-content: center;
  }
  
  .dismiss-btn {
    background: var(--accent-blue-dark);
    color: var(--text-lighter);
    border: none;
    border-radius: 6px;
    padding: 12px 28px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }
  
  .dismiss-btn:hover {
    background: #7d18ab;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }
  
  .dismiss-btn:active {
    transform: translateY(0);
  }
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-30px) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
  
  /* Mobile responsiveness */
  @media (max-width: 480px) {
    .maintenance-notice {
      margin: 20px;
      padding: 20px;
      max-width: calc(100vw - 40px);
    }
    
    .notice-header h3 {
      font-size: 1.1rem;
    }

    .header-content {
      gap: 10px;
    }

    .icon-container {
      width: 36px;
      height: 36px;
    }

    .icon-container svg {
      width: 18px;
      height: 18px;
    }

    .date-time {
      padding: 12px;
    }

    .info-item {
      font-size: 0.9rem;
    }
    
    .dismiss-btn {
      padding: 10px 24px;
      font-size: 0.95rem;
    }
  }
</style>
