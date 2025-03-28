<!-- src/routes/construction.svelte -->
<script>
    import { onMount } from 'svelte';
    import { quintOut } from 'svelte/easing';
    import { fly } from 'svelte/transition';
  
    let countdown = 3; // Days until launch
    let progress = 72; // Completion percentage
    
    // Animated stars
    onMount(() => {
      const container = document.querySelector('.construction-container');
      const stars = 40;
      
      for (let i = 0; i < stars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.width = `${Math.random() * 3 + 1}px`;
        star.style.height = star.style.width;
        star.style.animationDelay = `${Math.random() * 5}s`;
        container.appendChild(star);
      }
    });
  </script>
  
  <div class="construction-container">
    <div class="construction-content" in:fly={{ y: 50, duration: 800 }}>
      <div class="logo-container">
        <img 
          src="/Logo/Proximareportmobile.png" 
          alt="Proxima Report Logo" 
          class="construction-logo"
        >
        <div class="pulsar" />
      </div>
  
      <h1 class="construction-title">
        <span class="title-word" in:fly={{ delay: 200, y: 30 }}>This Page is under</span>
        <span class="title-word" in:fly={{ delay: 400, y: 30 }}>Construction</span>
      </h1>
  
      <p class="construction-subtitle">
        We're building something extraordinary 👩‍🚀
      </p>
  
      <div class="progress-container">
        <div class="progress-info">
          <span class="progress-label">Launch Sequence:</span>
          <span class="progress-value">{progress}%</span>
        </div>
        <div class="progress-bar">
          {#each [progress] as p (p)}
            <div 
              class="progress-fill" 
              style={`width: ${p}%`}
              animate:width={{ duration: 1500, easing: quintOut }}
            />
          {/each}
          <div class="progress-glow" style={`left: ${progress}%`} />
        </div>
      </div>
  
      <div class="countdown">
        <div class="countdown-item">
          <span class="countdown-number">{countdown}</span>
          <span class="countdown-label">Days Until Launch</span>
        </div>
      </div>
  
      <div class="status-message">
        <svg class="status-icon" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
          <path d="M13 7h-2v6h6v-2h-4z"/>
        </svg>
        <p>Proxima Report is in Soft launch, most of the site is avalible but some features are still in progress and will be avalible soon.</p>
      </div>
    </div>
  
   <!-- Astronaut Section - Corrected -->
<div class="astronaut-container">
    {#each [1] as item (item)}
      <div 
        class="astronaut" 
        animate:rotate={{ delay: 1000, duration: 20000, easing: quintOut }}
      >
        <svg viewBox="0 0 512 512">
          <path d="M256 0c-70.7 0-128 57.3-128 128s57.3 128 128 128 128-57.3 128-128S326.7 0 256 0zm0 208c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80zm96 48h-11.4c-22.7 10.4-49.6 16-76.6 16s-53.9-5.6-76.6-16H160c-35.3 0-64 28.7-64 64v48c0 8.8 7.2 16 16 16h16v96c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-96h32v96c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-96h16c8.8 0 16-7.2 16-16v-48c0-35.3-28.7-64-64-64z"/>
        </svg>
      </div>
      {/each}
  </div>
  </div>
  
  <style lang="postcss">
    /* ===== Cosmic Color Scheme ===== */
    :root {
      --cosmic-primary: #6a00ff;
      --cosmic-secondary: #00e5ff;
      --space-dark: #050510;
      --space-darker: #030308;
      --text-primary: rgba(255, 255, 255, 0.95);
      --text-secondary: rgba(255, 255, 255, 0.7);
    }
  
    /* ===== Base Styles ===== */
    .construction-container {
      background: 
        radial-gradient(ellipse at top left, rgba(106, 0, 255, 0.1) 0%, transparent 70%),
        linear-gradient(to bottom, var(--space-darker) 0%, var(--space-dark) 100%);
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 2rem;
      position: relative;
      overflow: hidden;
    }
  
    /* ===== Animated Starfield ===== */
    .star {
      position: absolute;
      background: white;
      border-radius: 50%;
      animation: twinkle 3s infinite ease-in-out;
      opacity: 0;
      transform: translateZ(0);
    }
  
    @keyframes twinkle {
      0%, 100% { opacity: 0.2; }
      50% { opacity: 1; }
    }
  
    /* ===== Content Container ===== */
    .construction-content {
      max-width: 600px;
      width: 100%;
      text-align: center;
      position: relative;
      z-index: 2;
      padding: 2rem;
      background: rgba(5, 5, 16, 0.7);
      border-radius: 16px;
      backdrop-filter: blur(10px);
      box-shadow: 0 0 30px rgba(106, 0, 255, 0.2);
    }
  
    /* ===== Logo with Pulsar Effect ===== */
    .logo-container {
      position: relative;
      display: inline-block;
      margin-bottom: 2rem;
    }
  
    .construction-logo {
      height: 100px;
      width: auto;
      filter: drop-shadow(0 0 10px rgba(106, 0, 255, 0.5));
      position: relative;
      z-index: 1;
    }
  
    .pulsar {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 120px;
      height: 120px;
      border-radius: 50%;
      background: rgba(106, 0, 255, 0.2);
      z-index: 0;
      animation: pulse 3s infinite ease-out;
    }
  
    @keyframes pulse {
      0% { 
        transform: translate(-50%, -50%) scale(0.8);
        opacity: 0.8;
      }
      100% { 
        transform: translate(-50%, -50%) scale(1.5);
        opacity: 0;
      }
    }
  
    /* ===== Typography ===== */
    .construction-title {
      font-size: 2.5rem;
      margin: 0.5rem 0 1rem;
      color: var(--text-primary);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.3rem;
    }
  
    .title-word {
      display: inline-block;
    }
  
    .construction-subtitle {
      color: var(--text-secondary);
      font-size: 1.1rem;
      margin-bottom: 2rem;
      line-height: 1.6;
    }
  
    /* ===== Progress Bar ===== */
    .progress-container {
      margin: 2rem 0;
    }
  
    .progress-info {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.5rem;
      color: var(--text-secondary);
      font-size: 0.9rem;
    }
  
    .progress-value {
      color: var(--cosmic-secondary);
      font-weight: bold;
    }
  
    .progress-bar {
      height: 8px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 4px;
      overflow: hidden;
      position: relative;
    }
  
    .progress-fill {
      height: 100%;
      background: linear-gradient(90deg, var(--cosmic-primary), var(--cosmic-secondary));
      border-radius: 4px;
      position: relative;
    }
  
    .progress-glow {
      position: absolute;
      top: 0;
      width: 20px;
      height: 100%;
      background: white;
      filter: blur(5px);
      opacity: 0.7;
      animation: progress-glow 2s infinite ease-in-out;
    }
  
    @keyframes progress-glow {
      0%, 100% { opacity: 0.3; }
      50% { opacity: 0.7; }
    }
  
    /* ===== Countdown ===== */
    .countdown {
      margin: 2rem 0;
    }
  
    .countdown-item {
      display: inline-block;
      padding: 1rem 2rem;
      background: rgba(106, 0, 255, 0.2);
      border-radius: 8px;
      border: 1px solid rgba(106, 0, 255, 0.3);
    }
  
    .countdown-number {
      font-size: 2rem;
      font-weight: bold;
      color: var(--cosmic-secondary);
      display: block;
      line-height: 1;
    }
  
    .countdown-label {
      font-size: 0.9rem;
      color: var(--text-secondary);
    }
  
    /* ===== Status Message ===== */
    .status-message {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      margin-top: 2rem;
      padding: 1rem;
      background: rgba(0, 229, 255, 0.05);
      border-radius: 8px;
      color: var(--text-secondary);
      font-size: 0.95rem;
      line-height: 1.6;
    }
  
    .status-icon {
      width: 24px;
      height: 24px;
      flex-shrink: 0;
      fill: var(--cosmic-secondary);
      animation: spin 10s linear infinite;
    }
  
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  
    /* ===== Floating Astronaut ===== */
    .astronaut-container {
      position: absolute;
      bottom: -50px;
      right: -50px;
      width: 300px;
      height: 300px;
      z-index: 1;
      opacity: 0.3;
    }
  
    .astronaut {
      width: 100%;
      height: 100%;
      animation: float 6s ease-in-out infinite;
    }
  
    .astronaut svg {
      width: 100%;
      height: 100%;
      fill: white;
    }
  
    @keyframes float {
      0%, 100% { transform: translateY(0) rotate(0deg); }
      50% { transform: translateY(-20px) rotate(5deg); }
    }
  
    /* ===== Mobile Responsiveness ===== */
    @media (max-width: 768px) {
      .construction-content {
        padding: 1.5rem;
      }
  
      .construction-title {
        font-size: 2rem;
      }
  
      .astronaut-container {
        width: 200px;
        height: 200px;
        bottom: -30px;
        right: -30px;
      }
    }
  
    @media (max-width: 480px) {
      .construction-container {
        padding: 1rem;
      }
  
      .construction-title {
        font-size: 1.8rem;
      }
  
      .countdown-item {
        padding: 0.8rem 1.5rem;
      }
  
      .countdown-number {
        font-size: 1.8rem;
      }
  
      .status-message {
        flex-direction: column;
        text-align: center;
      }
    }
  </style>