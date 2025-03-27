<script lang="ts">
    import { onMount } from 'svelte'; // ✅ Import onMount
  
    // ===== CONFIGURATION - EDIT THESE VALUES =====
    const config = {
      systemName: "Maintnence",
      statusTitle: "SYSTEM NOTICE",
      statusMessage: "Due to technical difficulties, Proxima accounts are temporarily unavailable",
      progress: 22, // Percentage (0-100)
      errorCode: "DB-ACCT-TOUT-MAJ",
      affectedSystems: "AUTH, DB, API",
      eta: "March 31 2025", // Estimated resolution time
      debugMessages: [
        "> Initializing diagnostic sequence...",
        "> Scanning quantum authentication modules...",
        "> ERROR: Database > Account Module > Timeout > Major Severity",
        "> Attempting to re-establish neural network links...",
        "> Partial connection established (22%)",
        "> Deploying repair nanites to affected nodes...",
        "> Estimated restoration: March 31 2025"
      ]
    };
  
    // ===== ANIMATION LOGIC =====
    let dots = '';
    const particles: Array<{ x: number; y: number; vx: number; vy: number; size: number }> = [];
  
    onMount(() => {
      // Animate connecting dots
      const interval = setInterval(() => {
        dots = dots.length >= 3 ? '' : dots + '.';
      }, 500);
  
      // Create particles
      for (let i = 0; i < 80; i++) {
        particles.push({
          x: Math.random() * 100,
          y: Math.random() * 100,
          vx: Math.random() * 0.2 - 0.1,
          vy: Math.random() * 0.2 - 0.1,
          size: Math.random() * 3 + 1
        });
      }
  
      return () => clearInterval(interval);
    });
  </script>
  
  
  <svelte:head>
    <title>{config.systemName} Status</title>
  </svelte:head>
  
  <div class="quantum-container">
    <!-- Animated background particles -->
    <div class="particles">
      {#each particles as p}
        <div class="particle" 
             style="left: {p.x}%; top: {p.y}%; width: {p.size}px; height: {p.size}px; opacity: {p.size/4};">
        </div>
      {/each}
    </div>
    
    <div class="neon-border">
      <div class="content">
        <!-- Logo Section -->
        <div class="logo">
          <svg viewBox="0 0 100 100" class="atom">
            <circle cx="50" cy="50" r="8" fill="#00f7ff" class="nucleus" />
            <path d="M50,10 A40,40 0 1,1 50,90 A40,40 0 1,1 50,10" 
                  stroke="#ff00e6" stroke-width="1" fill="none" class="orbit" />
            <path d="M10,50 A40,40 0 0,1 90,50 A40,40 0 0,1 10,50" 
                  stroke="#00f7ff" stroke-width="1" fill="none" class="orbit" />
            <path d="M20,20 A60,60 0 1,0 80,80 A60,60 0 1,0 20,20" 
                  stroke="#ff6600" stroke-width="1" fill="none" class="orbit" />
            <circle cx="50" cy="10" r="2" fill="#ff00e6" class="electron" />
            <circle cx="90" cy="50" r="2" fill="#00f7ff" class="electron" />
            <circle cx="80" cy="80" r="2" fill="#ff6600" class="electron" />
          </svg>
          <h1 class="system-name">{config.systemName}</h1>
        </div>
        
        <!-- Status Box -->
        <div class="status-box">
          <h2 class="status-title">{config.statusTitle}</h2>
          <div class="status-message">
            <p>{config.statusMessage}{dots}</p>
          </div>
          
          <div class="progress-container">
            <div class="progress-bar">
              <div class="progress-fill" style="width: {config.progress}%"/>
            </div>
            <span class="progress-text">REPAIRS IN PROGRESS: {config.progress}%</span>
          </div>
          
          <div class="tech-details">
            <div class="detail">
              <span class="detail-label">ERROR CODE:</span>
              <span class="detail-value">{config.errorCode}</span>
            </div>
            <div class="detail">
              <span class="detail-label">SYSTEMS AFFECTED:</span>
              <span class="detail-value">{config.affectedSystems}</span>
            </div>
            <div class="detail">
              <span class="detail-label">EST. RESOLUTION:</span>
              <span class="detail-value">{config.eta}</span>
            </div>
          </div>
        </div>
        
        <!-- Debug Console -->
        <div class="console">
          <div class="console-header">
            <div class="console-dots">
              <span class="console-dot red"></span>
              <span class="console-dot yellow"></span>
              <span class="console-dot green"></span>
            </div>
            <span class="console-title">{config.systemName}_DEBUG_CONSOLE</span>
          </div>
          <div class="console-content">
            {#each config.debugMessages as message}
              <p class:error={message.includes('ERROR:')}>{message}</p>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <style>
    :global(body) {
      margin: 0;
      padding: 0;
      background: #0a0a1a;
      color: #e0e0e0;
      font-family: 'Courier New', monospace;
      overflow: hidden;
      height: 100vh;
    }
    
    .quantum-container {
      position: relative;
      width: 100%;
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background: radial-gradient(circle at center, #0a0a2a 0%, #000010 100%);
      padding: 20px;
      box-sizing: border-box;
    }
    
    .particles {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 0;
    }
    
    .particle {
      position: absolute;
      background: rgba(0, 247, 255, 0.6);
      border-radius: 50%;
      filter: blur(0.5px);
    }
    
    .neon-border {
      position: relative;
      padding: 2px;
      border-radius: 8px;
      background: linear-gradient(135deg, #00f7ff, #ff00e6, #ff6600);
      box-shadow: 0 0 20px rgba(0, 247, 255, 0.3),
                  0 0 40px rgba(255, 0, 230, 0.3),
                  0 0 60px rgba(255, 102, 0, 0.3);
      z-index: 1;
      animation: borderPulse 4s infinite alternate;
      width: 100%;
      max-width: 800px;
    }
    
    .content {
      position: relative;
      background: #0a0a1a;
      border-radius: 6px;
      padding: 1.5rem;
      box-shadow: inset 0 0 10px rgba(0, 247, 255, 0.2);
      z-index: 2;
    }
    
    .logo {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 1.5rem;
      text-align: center;
    }
    
    .atom {
      width: 60px;
      height: 60px;
      margin-bottom: 1rem;
      animation: spin 20s linear infinite;
    }
    
    .system-name {
      font-size: 2rem;
      margin: 0;
      background: linear-gradient(to right, #00f7ff, #ff00e6, #ff6600);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      text-shadow: 0 0 10px rgba(0, 247, 255, 0.3);
      letter-spacing: 2px;
    }
    
    .status-box {
      background: rgba(10, 20, 30, 0.7);
      border: 1px solid rgba(0, 247, 255, 0.2);
      border-radius: 4px;
      padding: 1.2rem;
      margin-bottom: 1.5rem;
      box-shadow: 0 0 15px rgba(0, 247, 255, 0.1);
    }
    
    .status-title {
      color: #ff6600;
      text-align: center;
      margin: 0 0 1rem 0;
      font-size: 1.3rem;
      letter-spacing: 2px;
      text-transform: uppercase;
    }
    
    .status-message {
      text-align: center;
      font-size: 1.1rem;
      line-height: 1.5;
      margin-bottom: 1.5rem;
    }
    
    .progress-container {
      margin: 1.5rem 0;
    }
    
    .progress-bar {
      height: 8px;
      background: rgba(0, 247, 255, 0.1);
      border-radius: 5px;
      overflow: hidden;
      margin-bottom: 0.5rem;
    }
    
    .progress-fill {
      height: 100%;
      background: linear-gradient(to right, #00f7ff, #ff00e6);
      border-radius: 5px;
      animation: progressPulse 2s infinite alternate;
    }
    
    .progress-text {
      font-size: 0.8rem;
      color: #00f7ff;
      display: block;
      text-align: center;
    }
    
    .tech-details {
      display: grid;
      grid-template-columns: 1fr;
      gap: 0.8rem;
      margin-top: 1.5rem;
    }
    
    @media (min-width: 640px) {
      .tech-details {
        grid-template-columns: repeat(3, 1fr);
      }
      
      .logo {
        flex-direction: row;
        justify-content: center;
      }
      
      .atom {
        margin-bottom: 0;
        margin-right: 1rem;
      }
      
      .system-name {
        font-size: 2.5rem;
      }
    }
    
    .detail {
      background: rgba(0, 10, 20, 0.5);
      padding: 0.7rem;
      border-radius: 4px;
      border-left: 2px solid #ff6600;
    }
    
    .detail-label {
      display: block;
      font-size: 0.7rem;
      color: #00f7ff;
      margin-bottom: 0.2rem;
    }
    
    .detail-value {
      font-size: 0.9rem;
      color: #ff00e6;
      font-weight: bold;
    }
    
    .console {
      background: rgba(0, 5, 10, 0.8);
      border: 1px solid rgba(0, 247, 255, 0.2);
      border-radius: 4px;
      overflow: hidden;
      font-size: 0.85rem;
    }
    
    .console-header {
      background: linear-gradient(to right, #001a1a, #001a2a);
      padding: 0.5rem 1rem;
      display: flex;
      align-items: center;
      border-bottom: 1px solid rgba(0, 247, 255, 0.2);
    }
    
    .console-dots {
      display: flex;
      gap: 6px;
      margin-right: 10px;
    }
    
    .console-dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
    }
    
    .red { background: #ff5f56; }
    .yellow { background: #ffbd2e; }
    .green { background: #27c93f; }
    
    .console-title {
      color: #00f7ff;
      font-size: 0.8rem;
    }
    
    .console-content {
      padding: 0.8rem;
      max-height: 150px;
      overflow-y: auto;
    }
    
    .console-content p {
      margin: 0.3rem 0;
      color: #00f7ff;
      word-break: break-word;
    }
    
    .console-content .error {
      color: #ff6600;
      font-weight: bold;
    }
    
    /* Animations */
    @keyframes borderPulse {
      0% { opacity: 0.8; }
      100% { opacity: 1; }
    }
    
    @keyframes spin {
      100% { transform: rotate(360deg); }
    }
    
    @keyframes orbitPulse {
      0% { stroke-dashoffset: 0; }
      100% { stroke-dashoffset: 20; }
    }
    
    @keyframes electronPulse {
      0% { opacity: 0.5; }
      100% { opacity: 1; }
    }
    
    @keyframes progressPulse {
      0% { opacity: 0.8; }
      100% { opacity: 1; }
    }
  </style>