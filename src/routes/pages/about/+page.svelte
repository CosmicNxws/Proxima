<script lang="ts">
  import { fade, fly } from 'svelte/transition';
  
  // Leadership Team
  const coFounders = [
    {
      name: "Tyler",
      role: "Co-Founder & CEO",
      quote: "Space exploration enthusiast - sci fi nerd",
      avatar: "/avatars/alex.png",
      expertise: "Admin"
    },
    {
      name: "Jack - Phazzee",
      role: "Co-Founder & CCO",
      quote: "I write stuff about spaceflight, study international relations rn", 
      avatar: "/avatars/naomi.png",
      expertise: "Admin"
    },
    {
      name: "Sam Thibault",
      role: "Co-Founder & CTO",
      quote: "Tech person 👍",
      avatar: "/avatars/jordan.png",
      expertise: "Admin"
    }
  ];

  // Writing Team
  const writers = [
    {
      name: "Fetch error",
      role: "",
      quote: "",
      avatar: "/avatars/tycho.png"
    },
    {
      name: "Fetch error",
      role: "",
      quote: "",
      avatar: "/avatars/riya.png"
    }
  ];

  // Media Team  
  const mediaTeam = [
    {
      name: "Fetch error",
      role: "",
      quote: "",
      avatar: "/avatars/lena.png"
    },
    {
      name: "Fetch error",
      role: "",
      quote: "",
      avatar: "/avatars/marcus.png"
    }
  ];
</script>

<svelte:head>
  <title>About | To the Stars Through Knowledge</title>
</svelte:head>

<div class="cosmic-bg">
  <main class="container">
    <!-- Mission Section -->
    <section class="mission" in:fade>
      <h1 class="neon-blue">AD ASTRA PER SCIENTIA</h1>
      <p class="subtitle">To the Stars Through Knowledge</p>
      
      <div class="mission-text">
        <p>
          <strong>Our mission is to educate, inspire, and connect</strong> any and all people who share 
          a passion for space and STEM. Whether you're here for the latest in space, innovative tools, 
          or our space-themed projects, we've built this platform to bring the cosmos closer to you.
        </p>
        
        <p class="highlight">
          We're determined to <strong>ignite curiosity</strong> and <strong>empower learning</strong> for everyone.
        </p>
      </div>
    </section>
    
    <!-- Leadership Section -->
    <section class="team-section">
      <h2 class="neon-blue">Co-Founders</h2>
      <div class="team-grid">
        {#each coFounders as member, i}
          <div class="crew-card" in:fly={{ y: 20, delay: i * 150 }}>
            <img src={member.avatar} alt={member.name} class="avatar" />
            <div class="crew-info">
              <h3>{member.name}</h3>
              <p class="role">{member.role}</p>
              <p class="quote">"{member.quote}"</p>
              <p class="expertise">{member.expertise}</p>
            </div>
          </div>
        {/each}
      </div>
    </section>
    
    <!-- Writing Team -->
    <section class="team-section">
      <h2 class="neon-blue">Science Writers</h2>
      <div class="team-grid">
        {#each writers as member, i}
          <div class="crew-card" in:fly={{ y: 20, delay: i * 150 + 300 }}>
            <img src={member.avatar} alt={member.name} class="avatar" />
            <div class="crew-info">
              <h3>{member.name}</h3>
              <p class="role">{member.role}</p>
              <p class="quote">"{member.quote}"</p>
            </div>
          </div>
        {/each}
      </div>
    </section>
    
    <!-- Media Team -->
    <section class="team-section">
      <h2 class="neon-blue">Media Team</h2>
      <div class="team-grid">
        {#each mediaTeam as member, i}
          <div class="crew-card" in:fly={{ y: 20, delay: i * 150 + 450 }}>
            <img src={member.avatar} alt={member.name} class="avatar" />
            <div class="crew-info">
              <h3>{member.name}</h3>
              <p class="role">{member.role}</p>
              <p class="quote">"{member.quote}"</p>
            </div>
          </div>
        {/each}
      </div>
    </section>
  </main>
</div>

<style>
  :global(body) {
    margin: 0;
    background: #0a0a1a;
    color: #e0e0ff;
    font-family: 'Inter', sans-serif;
  }
  
  .cosmic-bg {
    background: 
      radial-gradient(ellipse at top, rgba(134, 6, 160, 0.2) 0%, 
      rgba(10, 10, 26, 1) 70%);
    min-height: 100vh;
    padding: 2rem;
  }
  
  .container {
    max-width: 1000px;
    margin: 0 auto;
  }
  
  .mission {
    text-align: center;
    margin-bottom: 4rem;
  }
  
  .neon-blue {
    color: #cb48ff;
    font-family: 'Orbitron', sans-serif;
    font-weight: 500;
    letter-spacing: 0.05em;
  }
  
  h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }
  
  .subtitle {
    font-style: italic;
    margin-top: 0;
    opacity: 0.9;
  }
  
  .mission-text {
    background: rgba(16, 25, 47, 0.4);
    border-left: 3px solid #851bff;
    padding: 1.5rem;
    border-radius: 0 8px 8px 0;
    margin-top: 2rem;
    text-align: left;
    line-height: 1.6;
  }
  
  .highlight {
    font-size: 1.1rem;
    margin-top: 1.5rem;
    padding-top: 1rem;
    border-top: 1px dashed rgba(180, 79, 247, 0.3);
  }
  
  .team-section {
    margin: 4rem 0;
  }
  
  h2 {
    text-align: center;
    margin-bottom: 2rem;
    position: relative;
  }
  
  h2:after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 2px;
    background: linear-gradient(90deg, transparent, #e206ff, transparent);
  }
  
  .team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }
  
  .crew-card {
    background: rgba(16, 25, 47, 0.6);
    border: 1px solid rgba(79, 195, 247, 0.2);
    border-radius: 8px;
    padding: 1.5rem;
    display: flex;
    gap: 1.5rem;
    align-items: center;
    transition: all 0.3s;
  }
  
  .crew-card:hover {
    transform: translateY(-5px);
    border-color: rgba(79, 195, 247, 0.4);
    box-shadow: 0 5px 15px rgba(79, 195, 247, 0.1);
  }
  
  .avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid rgba(79, 195, 247, 0.3);
  }
  
  .crew-info {
    flex: 1;
  }
  
  h3 {
    margin: 0 0 0.3rem;
    color: white;
  }
  
  .role {
    color: #ffffff;
    font-size: 0.9rem;
    margin: 0 0 0.5rem;
  }
  
  .quote {
    font-style: italic;
    color: #ffffff;
    margin: 0.5rem 0;
    font-size: 0.95rem;
  }
  
  .expertise {
    font-size: 0.85rem;
    color: #ff28199d;
    margin: 0.5rem 0 0;
  }
  
  @media (max-width: 768px) {
    .container {
      padding: 1rem;
    }
    
    .crew-card {
      flex-direction: column;
      text-align: center;
    }
    
    .avatar {
      width: 100px;
      height: 100px;
    }
  }
</style>