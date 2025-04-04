<script lang="ts">
    import { onMount } from 'svelte';
  
    let launches = [], kpIndex = null, astronauts = null, apod = null;
  
    const getLaunches = async () => {
      try {
        const res = await fetch('https://ll.thespacedevs.com/2.2.0/launch/upcoming/?limit=5');
        const data = await res.json();
        launches = data.results;
      } catch (error) {
        console.error("Failed to fetch launches:", error);
        launches = [];
      }
    };
  
    const getKpIndex = async () => {
      try {
        const res = await fetch('https://services.swpc.noaa.gov/json/planetary_k_index_1m.json');
        const data = await res.json();
        kpIndex = data[data.length - 1];
      } catch (error) {
        console.error("Failed to fetch KP index:", error);
        kpIndex = { kp_index: "N/A", time_tag: "Data unavailable" };
      }
    };
  
    const getAstronauts = async () => {
      try {
        // Try primary API first
        const primaryRes = await fetch('https://api.wheretheiss.at/v1/astros');
        if (primaryRes.ok) {
          const data = await primaryRes.json();
          astronauts = data.people;
          return;
        }
        
        // Fallback to secondary API
        const backupRes = await fetch('https://api.open-notify.org/astros.json');
        if (backupRes.ok) {
          const backupData = await backupRes.json();
          astronauts = backupData.people;
          return;
        }
        
        throw new Error("Both astronaut APIs failed");
      } catch (error) {
        console.error("Failed to fetch astronauts:", error);
        astronauts = null;
      }
    };
  
    const getAPOD = async () => {
      try {
        const res = await fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY');
        apod = await res.json();
      } catch (error) {
        console.error("Failed to fetch APOD:", error);
        apod = { 
          title: "Astronomy Picture of the Day", 
          url: "https://apod.nasa.gov/apod/image/2407/default_image.jpg",
          date: new Date().toISOString().split('T')[0],
          explanation: "Couldn't load today's image"
        };
      }
    };
  
    onMount(() => {
      getLaunches();
      getKpIndex();
      getAstronauts();
      getAPOD();
    });
  </script>
  
  <style>
    :global(body) {
      background: #120826;
      color: #e2d6ff;
      font-family: 'Orbitron', sans-serif;
      margin: 0;
      padding: 0;
      min-height: 100vh;
    }
  
    .dashboard {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1.5rem;
      padding: 1.5rem;
      max-width: 1400px;
      margin: 0 auto;
    }
  
    .card {
      background: rgba(40, 20, 70, 0.8);
      border: 1px solid #a45bff;
      border-radius: 1rem;
      padding: 1.25rem;
      box-shadow: 0 0 20px rgba(164, 91, 255, 0.3);
      transition: all 0.3s ease;
      backdrop-filter: blur(5px);
    }
    
    .card:hover {
      transform: translateY(-5px);
      box-shadow: 0 0 30px rgba(164, 91, 255, 0.5);
    }
    
    .launches-card {
      grid-column: 1 / -1;
      background: rgba(30, 10, 60, 0.9);
      border: 2px solid #c77dff;
      box-shadow: 0 0 30px rgba(199, 125, 255, 0.4);
    }
    
    .launches-card:hover {
      box-shadow: 0 0 40px rgba(199, 125, 255, 0.6);
    }
    
    .launches-card h2 {
      color: #e0aaff;
      font-size: 1.8rem;
      text-align: center;
      margin-bottom: 1.5rem;
      text-shadow: 0 0 10px rgba(224, 170, 255, 0.7);
      letter-spacing: 1px;
    }
  
    h2 {
      font-size: 1.4rem;
      margin-bottom: 1rem;
      color: #c77dff;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  
    .launches-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1.25rem;
    }
    
    .launch {
      background: rgba(50, 30, 90, 0.7);
      border-radius: 0.8rem;
      padding: 1.25rem;
      border-left: 4px solid #c77dff;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
    }
    
    .launch:hover {
      background: rgba(60, 40, 100, 0.9);
      transform: translateY(-5px);
    }
    
    .launch::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: linear-gradient(90deg, transparent, #e0aaff, transparent);
    }
    
    .launch-name {
      font-size: 1.2rem;
      color: #e0aaff;
      margin-bottom: 0.75rem;
      font-weight: 600;
    }
    
    .launch-agency {
      font-size: 0.95rem;
      color: #b388ff;
      margin-bottom: 0.5rem;
    }
    
    .launch-date {
      font-size: 1rem;
      color: #fff;
      margin-bottom: 0.75rem;
      font-weight: bold;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    
    .launch-location {
      font-size: 0.9rem;
      color: #d9c7ff;
      margin-bottom: 0.75rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    
    .launch-status {
      display: inline-block;
      padding: 0.3rem 0.7rem;
      border-radius: 1rem;
      font-size: 0.8rem;
      font-weight: bold;
      background: rgba(100, 65, 165, 0.5);
      color: #fff;
      margin-top: 0.5rem;
    }
    
    .mission-patch {
      width: 60px;
      height: 60px;
      object-fit: contain;
      float: right;
      margin-left: 1rem;
      margin-bottom: 1rem;
      filter: drop-shadow(0 0 5px rgba(224, 170, 255, 0.5));
    }
  
    /* Weather (KP Index) Card */
    .weather-card {
      display: flex;
      flex-direction: column;
      min-height: 100%;
    }
    
    .kp-container {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    
    .kp-score {
      font-size: 2.5rem;
      color: #9c64ff;
      text-align: center;
      margin: 0.5rem 0;
      text-shadow: 0 0 10px rgba(156, 100, 255, 0.5);
    }
    
    .kp-time {
      font-size: 0.9rem;
      color: #b388ff;
      text-align: center;
    }
    
    .kp-description {
      font-size: 0.9rem;
      margin-top: 1rem;
      color: #d9c7ff;
      text-align: center;
    }
  
    /* Astronauts Card */
    .astronauts-container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 0.75rem;
    }
    
    .astro {
      background: rgba(60, 40, 100, 0.5);
      padding: 0.75rem;
      border-radius: 0.5rem;
      font-size: 0.95rem;
      display: flex;
      flex-direction: column;
      border-left: 3px solid #9c64ff;
    }
    
    .astro-name {
      color: #e0aaff;
      font-weight: 500;
    }
    
    .astro-craft {
      color: #b388ff;
      font-size: 0.85rem;
      margin-top: 0.25rem;
    }
    
    .astronauts-error {
      color: #ff7eb9;
      font-size: 0.9rem;
      text-align: center;
      padding: 1rem;
      background: rgba(100, 20, 80, 0.3);
      border-radius: 0.5rem;
      border: 1px dashed #ff7eb9;
    }
    
    .loading-spinner {
      border: 3px solid rgba(156, 100, 255, 0.3);
      border-radius: 50%;
      border-top: 3px solid #9c64ff;
      width: 20px;
      height: 20px;
      animation: spin 1s linear infinite;
      margin: 1rem auto;
    }
    
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  
    /* APOD Card */
    .apod img {
      width: 100%;
      border-radius: 0.5rem;
      margin-top: 0.75rem;
      border: 1px solid rgba(164, 91, 255, 0.3);
    }
    
    .apod-title {
      font-size: 1.1rem;
      color: #e0aaff;
      margin-bottom: 0.5rem;
    }
    
    .apod-date {
      font-size: 0.85rem;
      color: #b388ff;
      margin-top: 0.5rem;
    }
  
    /* Mobile Responsiveness */
    @media (max-width: 768px) {
      .dashboard {
        grid-template-columns: 1fr;
        padding: 1rem;
      }
      
      .launches-card {
        grid-column: auto;
      }
      
      .launches-container {
        grid-template-columns: 1fr;
      }
      
      .astronauts-container {
        grid-template-columns: 1fr;
      }
      
      h2 {
        font-size: 1.3rem;
      }
      
      .launch-name {
        font-size: 1.1rem;
      }
    }
    
    @media (max-width: 480px) {
      .card {
        padding: 1rem;
      }
      
      .launches-card h2 {
        font-size: 1.5rem;
      }
      
      .mission-patch {
        width: 50px;
        height: 50px;
      }
    }
  </style>
  
  <div class="dashboard">
    <!-- 🚀 Enhanced Launches Section -->
    <div class="card launches-card">
      <h2>🚀 UPCOMING SPACE LAUNCHES</h2>
      <div class="launches-container">
        {#if launches.length > 0}
          {#each launches as launch}
            <div class="launch">
              {#if launch.image}
                <img class="mission-patch" src={launch.image} alt="Mission patch" />
              {/if}
              <div class="launch-name">{launch.name}</div>
              {#if launch.launch_service_provider?.name}
                <div class="launch-agency">By {launch.launch_service_provider.name}</div>
              {/if}
              <div class="launch-date">
                🗓️ {new Date(launch.net).toLocaleString()}
              </div>
              <div class="launch-location">
                📍 {launch.pad?.location?.name}, {launch.pad?.name}
              </div>
              {#if launch.status?.name}
                <div class="launch-status">
                  Status: {launch.status.name}
                </div>
              {/if}
            </div>
          {/each}
        {:else}
          <div class="astronauts-error">
            Could not load launch data
          </div>
        {/if}
      </div>
    </div>
  
    <!-- ☀️ KP Index -->
    <div class="card weather-card">
      <h2>☀️ GEOMAGNETIC ACTIVITY</h2>
      <div class="kp-container">
        {#if kpIndex}
          <div class="kp-score">{kpIndex.kp_index}</div>
          <div class="kp-time">Measured: {new Date(kpIndex.time_tag).toLocaleTimeString()}</div>
          <div class="kp-description">
            {#if kpIndex.kp_index <= 3}
              Quiet conditions
            {:else if kpIndex.kp_index <= 5}
              Unsettled conditions
            {:else if kpIndex.kp_index <= 7}
              Active to stormy
            {:else}
              Severe storm conditions
            {/if}
          </div>
        {:else}
          <div class="loading-spinner"></div>
        {/if}
      </div>
    </div>
  
    <!-- 👨‍🚀 Astronauts -->
    <div class="card">
      <h2>👨‍🚀 ASTRONAUTS IN SPACE</h2>
      {#if astronauts === null}
        <div class="loading-spinner"></div>
      {:else if astronauts && astronauts.length > 0}
        <div class="astronauts-container">
          {#each astronauts as person}
            <div class="astro">
              <span class="astro-name">{person.name}</span>
              {#if person.craft}
                <span class="astro-craft">Aboard {person.craft}</span>
              {/if}
            </div>
          {/each}
        </div>
      {:else}
        <div class="astronauts-error">
          Could not load current astronaut data
        </div>
      {/if}
    </div>
  
    <!-- 🛰️ NASA APOD -->
    <div class="card apod">
      <h2>🛰️ NASA ASTRONOMY PICTURE</h2>
      {#if apod}
        <div class="apod-title">{apod.title}</div>
        <img src={apod.url} alt={apod.title} />
        <div class="apod-date">{apod.date}</div>
      {:else}
        <div class="loading-spinner"></div>
      {/if}
    </div>
  </div>