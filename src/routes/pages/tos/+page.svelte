<script lang="ts">
    import { fade } from 'svelte/transition';
  </script>
  
  <svelte:head>
    <title>Terms of Service | Proxima Report LLC</title>
    <meta name="description" content="Legal terms governing use of our platform" />
  </svelte:head>
  
  <div class="cosmic-bg">
    <main class="container" in:fade>
      <section class="header">
        <h1 class="neon-purple">TERMS OF SERVICE</h1>
        <p class="subtitle">Effective Date: {new Date().toLocaleDateString()}</p>
        
        <div class="intro-box">
          <p>
            Welcome to <strong>Proximareport.com</strong> ("we", "us", or "our"). 
            These Terms of Service ("Terms") govern your access to and use of our 
            news platform and services (the "Service").
          </p>
        </div>
      </section>
      
      <section class="legal-section">
        <h2 class="section-title">1. Acceptance of Terms</h2>
        <p>
          By accessing or using our Service, you agree to be bound by these Terms. 
          If you disagree with any part, you may not access the Service.
        </p>
      </section>
      
      <section class="legal-section">
        <h2 class="section-title">2. Account Registration</h2>
        <p>
          Proxima Accounts are currently not avalible.
        </p>
        
      </section>
      
      <section class="legal-section">
        <h2 class="section-title">3. Content Policy</h2>
        <p>
          Our Ghost-powered platform provides access to news and editorial content. 
          You agree not to:
        </p>
        <ul class="legal-list">
          <li>Republish content without authorization</li>
          <li>Use automated systems to extract data</li>
          <li>Engage in harassment or illegal activities</li>
        </ul>
      </section>
      
      <section class="legal-section">
        <h2 class="section-title">4. Intellectual Property</h2>
        <p>
          All content, trademarks, and data on the Service are our property or 
          licensed to us. You may access content for personal, non-commercial use only.
        </p>
      </section>
      
      <section class="legal-section">
        <h2 class="section-title">5. Termination</h2>
        <p>
          We may suspend or terminate accounts violating these Terms. All provisions 
          which should survive termination will remain in effect.
        </p>
      </section>
      
      <section class="legal-section">
        <h2 class="section-title">6. Disclaimers</h2>
        <p>
          The Service is provided "as is". We make no warranties about accuracy or 
          availability. We are not liable for any damages arising from Service use.
        </p>
      </section>
      
      <section class="legal-section">
        <h2 class="section-title">7. Governing Law</h2>
        <p>
          These Terms shall be governed by, and construed in accordance with, the laws of the State of [Montana], United States of America, without 
          regard to conflict of law provisions. Any dispute arising under or in connection with these Terms and Conditions shall be resolved exclusively in the state or federal courts located in Kalispell, Montana, and you consent to the personal jurisdiction and venue of these courts.
        </p>
      </section>
      
      <section class="legal-section">
        <h2 class="section-title">8. Changes to Terms</h2>
        <p>
          We may modify these Terms at any time. Continued use after changes 
          constitutes acceptance of new Terms.
        </p>
      </section>
      
      <section class="contact-box">
        <h3 class="neon-blue">Contact Us</h3>
        <p>
          For questions about these Terms, contact our legal team at:<br>
          <a href="mailto:legal@stellarnews.space">legal@Proximareport.com</a>
        </p>
      </section>
    </main>
  </div>
  
  <style>
    :global(body) {
      margin: 0;
      background: #0a0a1a;
      color: #e0e0ff;
      font-family: 'Inter', sans-serif;
      line-height: 1.6;
    }
    
    .cosmic-bg {
      background: 
        radial-gradient(ellipse at top, rgba(42, 92, 141, 0.2) 0%, 
        rgba(10, 10, 26, 1) 70%);
      min-height: 100vh;
      padding: 2rem;
    }
    
    .container {
      max-width: 800px;
      margin: 0 auto;
      counter-reset: section-counter;
    }
    
    .header {
      text-align: center;
      margin-bottom: 3rem;
    }
    
    .neon-purple {
      color: #b388ff;
      font-family: 'Orbitron', sans-serif;
      font-weight: 500;
      letter-spacing: 0.05em;
    }
    
    .neon-blue {
      color: #4fc3f7;
      font-family: 'Orbitron', sans-serif;
      font-weight: 500;
    }
    
    h1 {
      font-size: 2.5rem;
      margin-bottom: 0.5rem;
    }
    
    .subtitle {
      font-style: italic;
      margin-top: 0;
      opacity: 0.9;
      color: #b0b0ff;
    }
    
    .intro-box {
      background: rgba(16, 25, 47, 0.4);
      border-left: 3px solid #b388ff;
      padding: 1.5rem;
      border-radius: 0 8px 8px 0;
      margin-top: 2rem;
    }
    
    .legal-section {
      margin-bottom: 2.5rem;
      position: relative;
      padding-left: 2rem;
    }
    
    .legal-section::before {
      counter-increment: section-counter;
      content: counter(section-counter);
      position: absolute;
      left: 0;
      top: 0;
      color: #b388ff;
      font-family: 'Orbitron', sans-serif;
      font-size: 1.5rem;
    }
    
    .section-title {
      color: #4fc3f7;
      margin-top: 0;
      border-bottom: 1px solid rgba(79, 195, 247, 0.3);
      padding-bottom: 0.5rem;
    }
    
    .legal-list {
      padding-left: 1.5rem;
    }
    
    .legal-list li {
      margin-bottom: 0.8rem;
      position: relative;
    }
    
    .legal-list li::before {
      content: "◊";
      color: #b388ff;
      position: absolute;
      left: -1.5rem;
    }
    
    .contact-box {
      background: rgba(16, 25, 47, 0.6);
      border: 1px solid rgba(79, 195, 247, 0.2);
      border-radius: 8px;
      padding: 1.5rem;
      margin-top: 3rem;
      text-align: center;
    }
    
    .contact-box a {
      color: #4fc3f7;
      text-decoration: none;
      border-bottom: 1px dashed currentColor;
    }
    
    .contact-box a:hover {
      color: #b388ff;
    }
    
    @media (max-width: 768px) {
      .container {
        padding: 1rem;
      }
      
      h1 {
        font-size: 2rem;
      }
      
      .legal-section {
        padding-left: 1.5rem;
      }
    }
  </style>