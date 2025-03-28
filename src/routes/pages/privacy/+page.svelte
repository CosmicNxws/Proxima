<script lang="ts">
    import { fade } from 'svelte/transition';
  </script>
  
  <svelte:head>
    <title>Privacy Policy | Stellar News Network</title>
    <meta name="description" content="How we collect and protect your data across the cosmos" />
  </svelte:head>
  
  <div class="cosmic-bg">
    <main class="container" in:fade>
      <section class="header">
        <h1 class="neon-purple">PRIVACY POLICY</h1>
        <p class="subtitle">Last Updated: {new Date().toLocaleDateString()}</p>
        
        <div class="intro-box">
          <p>
            At <strong>Proxima Report</strong> ("we", "us", or "our"), we treat your data with the same care as mission-critical spacecraft systems. 
            This Privacy Policy explains how we collect, use, and protect your information through our Supabase-powered platform.
          </p>
        </div>
      </section>
      
      <section class="legal-section">
        <h2 class="section-title">1. Information We Collect</h2>
        <p>When you use our Ghost-powered platform, we may collect:</p>
        <ul class="legal-list">
          <li><strong>Account Data:</strong> Email, username, and profile information when you register</li>
          <li><strong>Usage Data:</strong> Analytics about how you navigate our content nebula</li>
          <li><strong>Technical Data:</strong> IP address, browser type, and device information</li>
          <li><strong>Cookies:</strong> Small data packets that help optimize your journey</li>
        </ul>
      </section>
      
      <section class="legal-section">
        <h2 class="section-title">2. How We Use Your Data</h2>
        <p>We use your information to:</p>
        <ul class="legal-list">
          <li>Deliver and personalize our news services</li>
          <li>Improve and optimize our platform's performance</li>
          <li>Secure your account and prevent unauthorized access</li>
          <li>Comply with legal requirements</li>
        </ul>
      </section>
      
      <section class="legal-section">
        <h2 class="section-title">3. Data Protection Measures</h2>
        <p>We implement enterprise-grade security including:</p>
        <ul class="legal-list">
          <li>Encryption in transit (SSL/TLS) and at rest</li>
          <li>Regular security audits of our Supabase infrastructure</li>
          <li>Access controls and authentication protocols</li>
        </ul>
      </section>
      
      <section class="legal-section">
        <h2 class="section-title">4. Third-Party Data Sharing</h2>
        <p>We only share data when absolutely necessary with:</p>
        <ul class="legal-list">
          <li>Service providers (like Supabase for authentication)</li>
          <li>Legal authorities when required by law</li>
          <li>Analytics partners (in anonymized form)</li>
        </ul>
        <p>We never sell your personal information.</p>
      </section>
      
      <section class="legal-section">
        <h2 class="section-title">5. Your Data Rights</h2>
        <p>You have the right to:</p>
        <ul class="legal-list">
          <li>Access and request copies of your personal data</li>
          <li>Request correction of inaccurate information</li>
          <li>Delete your account and associated data</li>
          <li>Opt-out of marketing communications</li>
        </ul>
      </section>
      
      <section class="legal-section">
        <h2 class="section-title">6. Cookies & Tracking</h2>
        <p>
          Our platform uses cookies to:
        </p>
        <ul class="legal-list">
          <li>Authenticate your session</li>
          <li>Remember preferences</li>
          <li>Analyze traffic patterns</li>
        </ul>
        <p>You can manage cookies through your browser settings.</p>
      </section>
      
      <section class="legal-section">
        <h2 class="section-title">7. International Data Transfers</h2>
        <p>
          As an interstellar service, your data may be processed outside your home jurisdiction, 
          but always protected under strict security protocols.
        </p>
      </section>
      
      <section class="legal-section">
        <h2 class="section-title">8. Policy Updates</h2>
        <p>
          We may update this policy periodically. Significant changes will be communicated 
          through our platform or via email.
        </p>
      </section>
      
      <section class="contact-box">
        <h3 class="neon-blue">Contact Our staff</h3>
        <p>
          For privacy concerns or data requests:<br>
          <a href="mailto:privacy@stellarnews.space">Staff@proximareport.com</a>
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
      content: "»";
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