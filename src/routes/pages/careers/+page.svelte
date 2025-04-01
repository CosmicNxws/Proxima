<script lang="ts">
    import { fade, fly } from 'svelte/transition';
    
    // Open positions
    const openRoles = [
      {
        title: "STEM 'Tech' Content Writer",
        type: "Internship",
        location: "Remote",
        description: "As a STEM Tech Content Writer Intern, you'll cover topics across engineering, computer science, AI, emerging technologies, mathematics, and physics. This includes areas like aerospace, robotics, cybersecurity, machine learning, space exploration, and quantum computing. If you’re passionate about making complex ideas accessible and engaging, this role is for you!",
        skills: ["Journalism 5+ months", "Research skills", "Technical writing"],
        perks: ["Work with a deticated team", "Flexible Schedules", "Writing and team experience"]
      },
      {
        title: "Editor",
        type: "Open to negotiation",
        location: "Remote",
        description: "As an Editor, you’ll review, refine, and polish written content to ensure clarity, accuracy, and consistency. You'll work on improving structure, grammar, and style while maintaining the intended voice and tone. If you have a sharp eye for detail and a passion for great storytelling, this role is for you!",
        skills: ["Journalism 5+ months", "Content editing 5+ months", "Writing skills"],
        perks: ["Work with a deticated team", "Open-source contributions", "Writing and team experience"]
      },
      {
        title: "Marketing, Advertising Operations",
        type: "Contract Internship",
        location: "Remote",
        description: "As a Marketing & Advertising Operations Intern, you'll help manage campaigns, analyze performance data, and optimize strategies across digital platforms. You'll assist with ad placements, audience targeting, and content coordination to drive engagement and growth. If you're detail-oriented and passionate about marketing, this role is a great opportunity to gain hands-on experience!",
        skills: ["Community building", "Public speaking", "Marketing 6+ months"],
        perks: ["Inspire next generation", "Work with a deticated team", "Flexible schedule"]
      }
    ];
  
    // Benefits data
    const benefits = [
      {
        icon: "🚀",
        title: "Team Expirence",
        description: "Expirence working with groups of people"
      },
      {
        icon: "🌍",
        title: "Remote",
        description: "Work from anywhere anytime"
      },
      {
        icon: "🧑‍🚀",
        title: "Crew Connections",
        description: "Connect with fellow STEM enthusiasts"
      }
    ];
  </script>
  
  <svelte:head>
    <title>Careers | Join Our Cosmic Crew</title>
    <meta name="description" content="Launch your career with Proxima" />
  </svelte:head>
  
  <div class="cosmic-bg">
    <main class="container" in:fade>
      <!-- Hero Section -->
      <section class="hero">
        <h1 class="neon-title" transition:fly={{ y: -50, duration: 500 }}>
          <span class="code-comment">// CREW RECRUITMENT</span>
        </h1>
        <p class="subtitle">Join our mission to educate and inspire through journalism</p>
      </section>
  
      <!-- Mission Callout -->
      <section class="mission-callout">
        <div class="mission-text">
          <h2>Why Work With Us?</h2>
          <p>
            At <strong>Proxima Report LLC</strong>, we're building the premier platform for space 
            enthusiasts and STEM learners. Join a team that's passionate about everything STEM.
          </p>
        </div>
      </section>
  
      <!-- Open Positions -->
      <section class="positions-section">
        <h2 class="neon-title">
          <span class="code-comment">// OPEN POSITIONS</span>
        </h2>
        
        <div class="positions-grid">
          {#each openRoles as role, i}
            <div class="role-card" in:fly={{ y: 20, delay: i * 150 }}>
              <h3>{role.title}</h3>
              <div class="role-meta">
                <span class="role-type">{role.type}</span>
                <span class="role-location">{role.location}</span>
              </div>
              <p class="role-description">{role.description}</p>
              
              <div class="role-details">
                <div class="details-column">
                  <h4>Required Skills</h4>
                  <ul>
                    {#each role.skills as skill}
                      <li>{skill}</li>
                    {/each}
                  </ul>
                </div>
                <div class="details-column">
                  <h4>Perks</h4>
                  <ul>
                    {#each role.perks as perk}
                      <li>{perk}</li>
                    {/each}
                  </ul>
                </div>
              </div>
              <a href="/careers/apply/{role.title.toLowerCase().replace(/ /g, '-')}" class="apply-button">
                Apply Now
              </a>
            </div>
          {/each}
        </div>
      </section>
  
      <!-- Benefits -->
      <section class="benefits-section">
        <h2 class="neon-title">
          <span class="code-comment">// CREW BENEFITS</span>
        </h2>
        
        <div class="benefits-grid">
          {#each benefits as benefit, i}
            <div class="benefit-card" in:fly={{ y: 20, delay: i * 100 + 300 }}>
              <div class="benefit-icon">{benefit.icon}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          {/each}
        </div>
      </section>
  
      <!-- Culture CTA -->
      <section class="culture-cta">
        <div class="cta-content">
          <h2>Ready for Launch?</h2>
          <p>
            Even if you don't see the perfect role, we're always interested in meeting 
            passionate people, Send us your details and we'll keep you in orbit 
            for future opportunities.
          </p>
          <div class="cta-buttons">
            <a href="/careers/apply/general" class="cta-button">
              Submit General Application
            </a>
            <a href="mailto:crew@Proximareport.com" class="cta-button outline">
              Contact Our Recruitment Team
            </a>
          </div>
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
        radial-gradient(ellipse at top, rgba(42, 92, 141, 0.2) 0%, 
        rgba(10, 10, 26, 1) 70%);
      min-height: 100vh;
      padding: 2rem;
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }
    
    .hero {
      text-align: center;
      padding: 4rem 0 3rem;
    }
    
    .neon-title {
      color: #4fc3f7;
      font-family: 'Orbitron', sans-serif;
      font-weight: 500;
      letter-spacing: 0.1em;
      margin-bottom: 1rem;
    }
    
    .code-comment {
      color: #4fc3f7;
      font-family: 'Fira Code', monospace;
    }
    
    .subtitle {
      font-size: 1.3rem;
      max-width: 700px;
      margin: 0 auto;
      opacity: 0.9;
    }
    
    .mission-callout {
      background: rgba(16, 25, 47, 0.4);
      border-left: 3px solid #4fc3f7;
      padding: 2rem;
      border-radius: 0 8px 8px 0;
      margin: 3rem 0;
    }
    
    .mission-callout h2 {
      margin-top: 0;
      color: #e0e0ff;
    }
    
    .positions-section {
      margin: 5rem 0;
    }
    
    .positions-grid {
      display: grid;
      gap: 2rem;
      margin-top: 2rem;
    }
    
    .role-card {
      background: rgba(16, 25, 47, 0.6);
      border: 1px solid rgba(79, 195, 247, 0.2);
      border-radius: 8px;
      padding: 2rem;
      transition: all 0.3s;
    }
    
    .role-card:hover {
      transform: translateY(-5px);
      border-color: rgba(79, 195, 247, 0.5);
      box-shadow: 0 10px 20px rgba(79, 195, 247, 0.1);
    }
    
    .role-card h3 {
      margin: 0 0 0.5rem;
      font-size: 1.5rem;
      color: white;
    }
    
    .role-meta {
      display: flex;
      gap: 1rem;
      margin-bottom: 1rem;
      font-size: 0.9rem;
    }
    
    .role-type {
      background: rgba(79, 195, 247, 0.2);
      padding: 0.2rem 0.5rem;
      border-radius: 4px;
    }
    
    .role-location {
      opacity: 0.8;
    }
    
    .role-description {
      margin: 1rem 0;
      line-height: 1.6;
    }
    
    .role-details {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      margin: 1.5rem 0;
    }
    
    .role-details h4 {
      margin: 0 0 0.8rem;
      font-size: 1rem;
      color: #4fc3f7;
    }
    
    .role-details ul {
      padding-left: 1.2rem;
      margin: 0;
    }
    
    .role-details li {
      margin-bottom: 0.5rem;
      position: relative;
    }
    
    .role-details li::before {
      content: "»";
      color: #4fc3f7;
      position: absolute;
      left: -1rem;
    }
    
    .apply-button {
      display: inline-block;
      background: #4fc3f7;
      color: #0a0a1a;
      padding: 0.7rem 1.5rem;
      border-radius: 4px;
      text-decoration: none;
      font-weight: 500;
      transition: all 0.3s;
      border: none;
      cursor: pointer;
      margin-top: 1rem;
    }
    
    .apply-button:hover {
      background: #7b4fc3;
      color: white;
    }
    
    .benefits-section {
      margin: 5rem 0;
    }
    
    .benefits-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      margin-top: 2rem;
    }
    
    .benefit-card {
      background: rgba(16, 25, 47, 0.4);
      border: 1px solid rgba(79, 195, 247, 0.1);
      border-radius: 8px;
      padding: 1.5rem;
      transition: all 0.3s;
    }
    
    .benefit-card:hover {
      transform: translateY(-5px);
      border-color: rgba(79, 195, 247, 0.3);
    }
    
    .benefit-icon {
      font-size: 2rem;
      margin-bottom: 1rem;
    }
    
    .benefit-card h3 {
      margin: 0.5rem 0;
      color: white;
    }
    
    .benefit-card p {
      margin: 0;
      opacity: 0.9;
      font-size: 0.95rem;
    }
    
    .culture-cta {
      background: rgba(16, 25, 47, 0.6);
      border: 1px solid rgba(79, 195, 247, 0.2);
      border-radius: 8px;
      padding: 3rem;
      margin: 4rem 0;
      text-align: center;
    }
    
    .culture-cta h2 {
      margin-top: 0;
      color: white;
    }
    
    .cta-buttons {
      display: flex;
      gap: 1rem;
      justify-content: center;
      margin-top: 2rem;
      flex-wrap: wrap;
    }
    
    .cta-button {
      display: inline-block;
      background: #4fc3f7;
      color: #0a0a1a;
      padding: 0.8rem 1.8rem;
      border-radius: 4px;
      text-decoration: none;
      font-weight: 500;
      transition: all 0.3s;
    }
    
    .cta-button:hover {
      background: #7b4fc3;
      color: white;
    }
    
    .cta-button.outline {
      background: transparent;
      color: #4fc3f7;
      border: 1px solid #4fc3f7;
    }
    
    .cta-button.outline:hover {
      background: rgba(79, 195, 247, 0.1);
    }
    
    @media (max-width: 768px) {
      .container {
        padding: 0 1rem;
      }
      
      .hero {
        padding: 3rem 0 2rem;
      }
      
      .role-details {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }
      
      .culture-cta {
        padding: 2rem 1rem;
      }
      
      .cta-buttons {
        flex-direction: column;
      }
      
      .cta-button, .cta-button.outline {
        width: 100%;
        text-align: center;
      }
    }
  </style>