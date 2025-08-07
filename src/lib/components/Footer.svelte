<!-- src/lib/components/Footer.svelte -->
<script>
  import { onMount } from 'svelte';
  import { quintOut } from 'svelte/easing';
  import { crossfade } from 'svelte/transition';
  
  let currentYear = new Date().getFullYear();
  let isHovering = false;
  let hoverPosition = { x: 0, y: 0 };
  
  const [send, receive] = crossfade({
    duration: 800,
    easing: quintOut
  });
  
  // Interactive starfield effect
  onMount(() => {
    const footer = document.querySelector('.footer');
    const stars = 50;
    
    for (let i = 0; i < stars; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.width = `${Math.random() * 3 + 1}px`;
      star.style.height = star.style.width;
      star.style.animationDelay = `${Math.random() * 5}s`;
      footer.appendChild(star);
    }
    
    // Glow effect for links
    const links = document.querySelectorAll('.footer-link, .social-icon');
    links.forEach(link => {
      link.addEventListener('mousemove', (e) => {
        const rect = link.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        link.style.setProperty('--x', `${x}px`);
        link.style.setProperty('--y', `${y}px`);
      });
      
      link.addEventListener('mouseenter', () => {
        link.classList.add('glow-active');
      });
      
      link.addEventListener('mouseleave', () => {
        link.classList.remove('glow-active');
      });
    });
    
    // Track mouse position for parallax effect
    footer.addEventListener('mousemove', (e) => {
      isHovering = true;
      hoverPosition = { x: e.clientX, y: e.clientY };
    });
    
    footer.addEventListener('mouseleave', () => {
      isHovering = false;
    });
  });
</script>

<footer class="footer" class:parallax-active={isHovering}>
  <!-- Animated background elements -->
  <div class="space-grid" />
  <div class="cosmic-dust" />
  
  <div class="footer-container">
    <div class="footer-grid">
      <!-- Logo Column with enhanced branding -->
      <div class="footer-brand" use:send={{ key: 'brand' }}>
        <img 
          src="/Logo/Proximareportmobile.png" 
          alt="Proxima Report Logo" 
          class="footer-logo"
          in:receive={{ key: 'brand' }}
          out:send={{ key: 'brand' }}
        >
        <p class="tagline">AD ASTRA PER SCIENTIA</p>
        <div class="social-grid">
          {#each [
            { name: 'Twitter', icon: 'twitter', url: '#' },
            { name: 'Instagram', icon: 'instagram', url: '#' },
            { name: 'YouTube', icon: 'youtube', url: '#' },
            { name: 'LinkedIn', icon: 'linkedin', url: '#' }
          ] as social (social.name)}
            <a 
              href={social.url} 
              class="social-icon" 
              aria-label={social.name}
              in:receive={{ key: social.name }}
              out:send={{ key: social.name }}
            >
              <div class="social-icon-bg" />
              <svg class={`icon-${social.icon}`} width="20" height="20" viewBox="0 0 24 24">
                {#if social.icon === 'twitter'}
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                {:else if social.icon === 'instagram'}
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                {:else if social.icon === 'youtube'}
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
                {:else if social.icon === 'linkedin'}
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                {/if}
              </svg>
            </a>
          {/each}
        </div>
      </div>

      <!-- Navigation Links with animated sections -->
      {#each [
        { 
          title: 'Explore', 
          links: [
            { text: 'Articles', url: '/articles' },
            { text: 'Topics', url: '/pages/topics' },
            { text: 'Missions', url: '/pages/missions' },
            { text: 'Technology', url: '/pages/technology' }
          ] 
        },
        { 
          title: 'Company', 
          links: [
            { text: 'About Us', url: '/pages/about' },
            { text: 'Our Team', url: '/pages/team' },
            { text: 'Careers', url: '/pages/careers' },
            { text: 'Contact', url: '/pages/contact' }
          ] 
        },
        { 
          title: 'Legal', 
          links: [
            { text: 'Privacy Policy', url: '/pages/privacy' },
            { text: 'Terms of Service', url: '/pages/tos' },
            { text: 'Cookie Policy', url: '/cookies' },
            { text: 'Disclaimer', url: '/disclaimer' }
          ] 
        }
      ] as section (section.title)}
        <div class="footer-nav" in:receive={{ key: section.title }} out:send={{ key: section.title }}>
          <h3 class="footer-heading">
            <span class="heading-text">{section.title}</span>
            <span class="heading-underline"></span>
          </h3>
          {#each section.links as link (link.text)}
            <a href={link.url} class="footer-link">
              <span class="link-text">{link.text}</span>
              <span class="link-arrow">→</span>
            </a>
          {/each}
        </div>
      {/each}

      <div class="footer-newsletter">
        <h3 class="footer-heading">Stay Updated</h3>
        <p>Subscribe to our cosmic newsletter</p>
        <form class="newsletter-form">
          <div class="input-container">
            <input 
              type="email" 
              placeholder="Your email address" 
              required
              style="width: 100%; max-width: 100%"
            >
            <div class="input-border"></div>
          </div>
          <button type="submit" class="submit-button">
            Join Mission
          </button>
        </form>
      </div>
    </div>

    <div class="footer-bottom">
      <p>© {currentYear} Proxima Report LLC. All rights reserved.</p>
      <div class="footer-meta">
        <span>Site Version 1.0 -- This version is being  deprecated and will shut down Aug 8th 2025</span>
        <span class="separator">•</span>
        <span>Made with <span class="pulse">♥</span> among the stars</span>
      </div>
    </div>
  </div>
</footer>

<style lang="postcss">
  /* ===== Cosmic Color Scheme ===== */
  :root {
    --cosmic-primary: #6a00ff;
    --cosmic-secondary: #00e5ff;
    --space-dark: #050510;
    --space-darker: #030308;
    --space-light: #12122a;
    --text-primary: rgba(255, 255, 255, 0.95);
    --text-secondary: rgba(255, 255, 255, 0.7);
    --text-tertiary: rgba(255, 255, 255, 0.5);
    --border-space: rgba(106, 0, 255, 0.2);
    --star-color: rgba(255, 255, 255, 0.8);
  }

  /* ===== Base Styles with Cosmic Effects ===== */
  .footer {
    --parallax-intensity: 0;
    --mouse-x: 0;
    --mouse-y: 0;
    
    background: 
      radial-gradient(ellipse at top left, rgba(106, 0, 255, 0.1) 0%, transparent 70%),
      linear-gradient(to bottom, var(--space-darker) 0%, var(--space-dark) 100%);
    color: var(--text-primary);
    padding: 4rem 0 2rem;
    position: relative;
    overflow: hidden;
    border-top: 1px solid rgba(106, 0, 255, 0.2);
    transform-style: preserve-3d;
  }

  .footer::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--cosmic-primary), transparent);
    box-shadow: 0 0 10px var(--cosmic-primary);
    z-index: 1;
  }

  /* ===== Animated Starfield ===== */
  .star {
    position: absolute;
    background: var(--star-color);
    border-radius: 50%;
    animation: twinkle 3s infinite ease-in-out;
    opacity: 0;
    transform: translateZ(0);
  }

  @keyframes twinkle {
    0%, 100% { opacity: 0.2; }
    50% { opacity: 1; }
  }

  /* ===== Cosmic Dust Effect ===== */
  .cosmic-dust {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      radial-gradient(circle at 20% 30%, rgba(106, 0, 255, 0.03) 0%, transparent 25%),
      radial-gradient(circle at 80% 70%, rgba(0, 229, 255, 0.03) 0%, transparent 25%);
    pointer-events: none;
  }

  /* ===== Container & Grid ===== */
  .footer-container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 2rem;
    width: 100%;
    box-sizing: border-box;
    position: relative;
    z-index: 2;
  }

  .footer-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
    align-items: start;
  }

  /* ===== Brand Section with Holographic Effect ===== */
  .footer-brand {
    grid-column: span 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
  }

  .footer-logo {
    height: 140px;
    width: auto;
    max-width: 220px;
    margin-bottom: 1.5rem;
    object-fit: contain;
    filter: 
      drop-shadow(0 0 10px rgba(106, 0, 255, 0.5))
      drop-shadow(0 0 20px rgba(0, 229, 255, 0.3));
    transition: all 0.5s ease;
    transform: translateZ(0);
  }

  .footer-logo:hover {
    transform: scale(1.05) rotateZ(1deg);
    filter: 
      drop-shadow(0 0 15px rgba(106, 0, 255, 0.7))
      drop-shadow(0 0 25px rgba(0, 229, 255, 0.5));
  }

  .tagline {
    color: var(--text-secondary);
    font-size: 0.95rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
    position: relative;
    padding-left: 1rem;
  }

  .tagline::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.4em;
    height: 1em;
    width: 3px;
    background: linear-gradient(to bottom, var(--cosmic-primary), var(--cosmic-secondary));
    border-radius: 3px;
  }

  /* ===== Social Icons with Particle Effects ===== */
  .social-grid {
    display: flex;
    gap: 1.2rem;
    margin-top: 0.5rem;
  }

  .social-icon {
    position: relative;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: var(--text-primary);
    transition: all 0.4s ease;
    z-index: 1;
    overflow: hidden;
    --x: 0;
    --y: 0;
  }

  .social-icon-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 50%;
    z-index: -1;
    transition: all 0.3s ease;
  }

  .social-icon:hover {
    transform: translateY(-3px) scale(1.1);
    color: white;
  }

  .social-icon:hover .social-icon-bg {
    background: rgba(106, 0, 255, 0.3);
    box-shadow: 0 0 15px rgba(106, 0, 255, 0.5);
  }

  /* Social icon specific colors */
  .icon-twitter:hover { text-shadow: 0 0 10px #1DA1F2; }
  .icon-instagram:hover { text-shadow: 0 0 10px #E1306C; }
  .icon-youtube:hover { text-shadow: 0 0 10px #FF0000; }
  .icon-linkedin:hover { text-shadow: 0 0 10px #0077B5; }

  /* ===== Navigation Sections with Animated Underlines ===== */
  .footer-nav {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }

  .footer-heading {
    color: var(--text-primary);
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
    position: relative;
    font-weight: 600;
    display: flex;
    flex-direction: column;
  }

  .heading-text {
    position: relative;
    z-index: 1;
  }

  .heading-underline {
    height: 2px;
    width: 40px;
    background: linear-gradient(to right, var(--cosmic-primary), var(--cosmic-secondary));
    margin-top: 0.5rem;
    transform-origin: left;
    transition: transform 0.5s cubic-bezier(0.65, 0, 0.35, 1);
  }

  .footer-nav:hover .heading-underline {
    transform: scaleX(1.5);
  }

  /* ===== Animated Links with Glow Effect ===== */
  .footer-link {
    color: var(--text-secondary);
    text-decoration: none;
    font-size: 0.95rem;
    transition: all 0.4s ease;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    position: relative;
    width: fit-content;
    --x: 0;
    --y: 0;
    padding: 0.3rem 0;
  }

  .footer-link::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle at var(--x) var(--y),
      rgba(106, 0, 255, 0.3) 0%,
      transparent 50%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
  }

  .footer-link:hover {
    color: white;
    transform: translateX(5px);
  }

  .footer-link:hover::before {
    opacity: 1;
  }

  .link-text {
    transition: transform 0.3s ease;
  }

  .footer-link:hover .link-text {
    transform: translateX(5px);
  }

  .link-arrow {
    opacity: 0;
    transform: translateX(-5px);
    transition: all 0.3s ease;
    color: var(--cosmic-secondary);
  }

  .footer-link:hover .link-arrow {
    opacity: 1;
    transform: translateX(0);
  }

  /* ===== Enhanced Newsletter Form ===== */
  .footer-newsletter {
    grid-column: span 1;
    display: flex;
    flex-direction: column;
  }

  .footer-newsletter p {
    color: var(--text-secondary);
    font-size: 0.95rem;
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }

  .newsletter-form {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }

  .input-container {
    position: relative;
  }

  .newsletter-form input {
    background: rgba(255, 255, 255, 0.05);
    border: none;
    padding: 0.9rem 1.2rem;
    border-radius: 8px;
    color: white;
    font-size: 0.95rem;
    transition: all 0.3s ease;
    width: 100%;
    position: relative;
    z-index: 1;
  }

  .newsletter-form input {
  width: 100% !important;
  max-width: 100% !important;
  box-sizing: border-box !important;
  margin-right: 0 !important;
  transform: none !important;
}

.footer-newsletter {
  overflow: hidden; /* Contain children */
  min-width: 0; /* Allow width enforcement */
}

.newsletter-form {
  display: grid; /* Better than flex for input containment */
  grid-template-columns: minmax(0, 1fr); /* Constrain children */
}

  .newsletter-form input::placeholder {
    color: var(--text-tertiary);
  }

  .input-border {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 8px;
    padding: 1px;
    background: linear-gradient(135deg, var(--cosmic-primary), var(--cosmic-secondary));
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .newsletter-form input:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.08);
  }

  .newsletter-form input:focus ~ .input-border {
    opacity: 1;
  }

  /* ===== Animated Submit Button ===== */
  .submit-button {
    background: linear-gradient(135deg, var(--cosmic-primary), var(--cosmic-secondary));
    color: white;
    border: none;
    padding: 0.9rem 1.5rem;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    position: relative;
    overflow: hidden;
    z-index: 1;
  }

  .submit-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(106, 0, 255, 0.4);
  }

  .submit-button:active {
    transform: translateY(0);
  }

  .button-icon {
    transition: transform 0.3s ease;
  }

  .submit-button:hover .button-icon {
    transform: translateX(3px);
  }

  .button-particles {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    z-index: -1;
  }

  .particle {
    position: absolute;
    background: white;
    border-radius: 50%;
    width: 3px;
    height: 3px;
    opacity: 0;
    animation: particle-pop 1s ease-out infinite;
    animation-delay: calc(var(--i) * 0.1s);
  }

  @keyframes particle-pop {
    0% {
      transform: translate(0, 0) scale(0);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: 
        translate(
          calc((var(--i) - 2) * 10px),
          calc((var(--i) % 2) * -15px)
        ) 
        scale(1);
      opacity: 0;
    }
  }

  /* ===== Footer Bottom with Cosmic Accents ===== */
  .footer-bottom {
    margin-top: 4rem;
    padding-top: 2rem;
    border-top: 1px solid var(--border-space);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
    text-align: center;
    position: relative;
  }


  .footer-bottom::before {
    content: '';
    position: absolute;
    top: -1px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 2px;
    background: linear-gradient(90deg, transparent, var(--cosmic-primary), transparent);
    box-shadow: 0 0 10px var(--cosmic-primary);
  }

  .footer-bottom p {
    color: var(--text-secondary);
    font-size: 0.9rem;
  }

  .footer-meta {
    display: flex;
    gap: 1rem;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    color: var(--text-tertiary);
    font-size: 0.85rem;
  }

  .separator {
    color: var(--cosmic-primary);
    opacity: 0.6;
  }

  .pulse {
    display: inline-block;
    animation: pulse 1.5s infinite ease-in-out;
    color: #ff3366;
  }

  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.3); }
  }

  /* ===== Parallax Effect ===== */
  .parallax-active .footer-brand,
  .parallax-active .footer-nav,
  .parallax-active .footer-newsletter {
    transition: transform 0.5s ease-out;
  }

  .parallax-active .footer-brand {
    transform: 
      translateX(calc((var(--mouse-x) - 50vw) * 0.01px))
      translateY(calc((var(--mouse-y) - 50vh) * 0.01px));
  }

  .parallax-active .footer-nav:nth-child(2) {
    transform: 
      translateX(calc((var(--mouse-x) - 50vw) * 0.007px))
      translateY(calc((var(--mouse-y) - 50vh) * 0.007px));
  }

  .parallax-active .footer-nav:nth-child(3) {
    transform: 
      translateX(calc((var(--mouse-x) - 50vw) * 0.005px))
      translateY(calc((var(--mouse-y) - 50vh) * 0.005px));
  }

  .parallax-active .footer-nav:nth-child(4) {
    transform: 
      translateX(calc((var(--mouse-x) - 50vw) * 0.003px))
      translateY(calc((var(--mouse-y) - 50vh) * 0.003px));
  }

  .parallax-active .footer-newsletter {
    transform: 
      translateX(calc((var(--mouse-x) - 50vw) * -0.01px))
      translateY(calc((var(--mouse-y) - 50vh) * -0.01px));
  }

  /* ===== Mobile Responsiveness ===== */
  @media (max-width: 1024px) {
    .footer-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 3rem;
    }

    .footer-newsletter {
      grid-column: span 2;
    }
    
    /* Disable parallax on mobile */
    .parallax-active .footer-brand,
    .parallax-active .footer-nav,
    .parallax-active .footer-newsletter {
      transform: none !important;
    }
  }

  @media (max-width: 768px) {
    .footer {
      padding: 3rem 0 2rem;
    }

    .footer-container {
      padding: 0 1.5rem;
    }

    .footer-grid {
      grid-template-columns: 1fr;
      gap: 2.5rem;
    }

    .footer-brand {
      align-items: center;
      text-align: center;
    }

    .footer-nav {
      align-items: center;
      text-align: center;
    }

    .footer-newsletter {
      grid-column: span 1;
      align-items: center;
    }

    .newsletter-form {
      width: 100%;
      max-width: 400px;
    }

    .footer-logo {
      height: 140px;
      max-width: 180px;
    }
  }

  @media (max-width: 480px) {
    .footer {
      padding: 2.5rem 0 1.5rem;
    }

    .footer-container {
      padding: 0 1rem;
    }

    .footer-grid {
      gap: 2rem;
    }

    .footer-logo {
      height: 120px;
      max-width: 160px;
    }

    .footer-bottom {
      margin-top: 3rem;
      padding-top: 1.5rem;
    }
  }
</style>