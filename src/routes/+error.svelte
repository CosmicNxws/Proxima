<script>
  import { page } from '$app/stores';
  import { fly } from 'svelte/transition';
</script>

<div class="cosmic-error-container">
  <main class="error-content" in:fly={{ y: 50 }}>
    <div class="error-header">
      <svg class="error-icon" viewBox="0 0 24 24">
        <path fill="currentColor" d="M12,2L1,21H23M12,6L19.53,19H4.47M11,10V14H13V10M11,16V18H13V16" />
      </svg>
      <h1 class="neon-red">Anomaly Detected!</h1>
      <p class="error-code">Error {$page.status}: {$page.error.message}</p>
    </div>

    <div class="error-body">
      <p class="error-message">
      Something unexpected happened, an error has occurred
      </p>
      
      <div class="error-actions">
        <a href="/" class="nav-button">
          <svg viewBox="0 0 24 24" width="18" height="18">
            <path fill="currentColor" d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" />
          </svg>
          Return to Home
        </a>
        <a href="/contact" class="nav-button secondary">
          <svg viewBox="0 0 24 24" width="18" height="18">
            <path fill="currentColor" d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
          </svg>
          Contact Us
        </a>
      </div>
    </div>

    <div class="error-footer">
      <p>Date: {new Date().toLocaleDateString()}</p>
    </div>
  </main>
</div>

<style>
  :global(body) {
    margin: 0;
    background: #0a0a1a;
    color: #e0e0ff;
    font-family: 'Inter', -apple-system, sans-serif;
    line-height: 1.5;
  }

  .cosmic-error-container {
    background: 
      radial-gradient(ellipse at center, 
        rgba(255, 50, 50, 0.1) 0%, 
        rgba(10, 10, 26, 1) 70%);
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    position: relative;
    overflow: hidden;
  }

  .cosmic-error-container::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><circle cx="20" cy="20" r="1" fill="rgba(255,80,80,0.3)"/><circle cx="50" cy="30" r="1" fill="rgba(255,80,80,0.3)"/><circle cx="80" cy="20" r="1" fill="rgba(255,80,80,0.3)"/><circle cx="30" cy="70" r="1" fill="rgba(255,80,80,0.3)"/><circle cx="70" cy="60" r="1" fill="rgba(255,80,80,0.3)"/></svg>');
    opacity: 0.6;
    animation: twinkle 8s infinite alternate;
  }

  @keyframes twinkle {
    0% { opacity: 0.3; }
    100% { opacity: 0.8; }
  }

  .error-content {
    background: rgba(16, 25, 47, 0.9);
    border: 1px solid rgba(255, 80, 80, 0.3);
    border-radius: 12px;
    padding: 2rem;
    width: 100%;
    max-width: 600px;
    text-align: center;
    position: relative;
    z-index: 1;
    backdrop-filter: blur(4px);
    box-shadow: 0 0 30px rgba(255, 80, 80, 0.15);
    margin: 1rem;
  }

  .error-icon {
    width: 64px;
    height: 64px;
    color: #ff5050;
    margin-bottom: 1rem;
    animation: pulse 2s infinite ease-in-out;
  }

  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }

  .neon-red {
    color: #ff5050;
    font-family: 'Orbitron', sans-serif;
    font-weight: 500;
    font-size: 1.75rem;
    letter-spacing: 0.05em;
    text-shadow: 0 0 10px rgba(255, 80, 80, 0.4);
    margin: 0.5rem 0;
    line-height: 1.3;
  }

  .error-code {
    color: #ffffff;
    font-size: 1.1rem;
    font-family: 'Fira Code', monospace;
    background: rgba(255, 80, 80, 0.15);
    padding: 0.5rem 1rem;
    border-radius: 4px;
    display: inline-block;
    margin: 0.5rem 0;
    border: 1px solid rgba(255, 80, 80, 0.3);
  }

  .error-message {
    margin: 1.5rem 0;
    color: #e0e0ff;
    font-size: 1.05rem;
    line-height: 1.6;
  }

  .error-actions {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin: 2rem 0;
    flex-wrap: wrap;
    width: 100%;
  }

  .nav-button {
    color: white;
    border-radius: 8px;
    padding: 0.85rem 1.5rem;
    font-size: 1rem;
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    text-decoration: none;
    transition: all 0.25s ease;
    flex: 1 1 auto;
    min-width: min(220px, 100%);
    justify-content: center;
    box-sizing: border-box;
    border: none;
    cursor: pointer;
    font-weight: 500;
  }

  .nav-button.primary {
    background: rgba(255, 80, 80, 0.7);
    box-shadow: 0 2px 8px rgba(255, 80, 80, 0.2);
  }

  .nav-button.secondary {
    background: rgba(180, 79, 247, 0.7);
    box-shadow: 0 2px 8px rgba(129, 79, 247, 0.2);
  }

  .nav-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  }

  .nav-button.primary:hover {
    background: rgba(255, 80, 80, 0.8);
    box-shadow: 0 6px 16px rgba(255, 80, 80, 0.3);
  }

  .nav-button.secondary:hover {
    background: rgba(168, 38, 255, 0.8);
    box-shadow: 0 6px 16px rgba(79, 195, 247, 0.3);
  }

  .nav-button svg {
    flex-shrink: 0;
  }

  .error-footer {
    margin-top: 2rem;
    color: #8a8aff;
    font-size: 0.9rem;
    opacity: 0.8;
  }

  /* Mobile Responsiveness */
  @media (max-width: 640px) {
    .error-content {
      padding: 1.75rem;
      margin: 0.5rem;
    }

    .neon-red {
      font-size: 1.5rem;
    }

    .error-actions {
      flex-direction: column;
      gap: 0.8rem;
    }

    .nav-button {
      width: 100%;
      padding: 0.9rem;
    }
  }

  @media (max-width: 400px) {
    .error-content {
      padding: 1.5rem 1rem;
      border-radius: 10px;
    }

    .error-icon {
      width: 56px;
      height: 56px;
    }

    .neon-red {
      font-size: 1.3rem;
    }

    .error-code {
      font-size: 1rem;
      padding: 0.4rem 0.8rem;
    }
  }
</style>