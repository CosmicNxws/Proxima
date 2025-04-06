<script>
  import { user } from '$lib/stores/authStore.js';
  import { fade } from 'svelte/transition';
  import { onMount } from 'svelte';
  import { base } from '$app/paths';

  let mobileMenuOpen = false;
  let logoDesktop = "/Logo/Proximareportdesktop.png";
  let logoMobile = "/Logo/Proximareportmobile.png";

  const navLinks = [
    { name: 'Home', path: `${base}/` },
    { name: 'Gallery', path: `${base}/pages/gallery/` },
    { name: 'Launches', path: `${base}/pages/launches` },
    { name: 'About', path: `${base}/pages/about` }
  ];

  onMount(() => {
    console.log("Logos loaded:", logoDesktop, logoMobile);
  });
</script>

<nav class="navbar">
  <div class="nav-container">
    <!-- Logo -->
    <a href={base || '/'} class="logo">
      <img src={logoDesktop} alt="Proxima Report Logo" class="logo-image desktop-logo">
      <img src={logoMobile} alt="Proxima Report Logo" class="logo-image mobile-logo">
    </a>

    <!-- Desktop Navigation -->
    <div class="desktop-links">
      {#each navLinks as link}
        <a href={link.path} class="nav-link" on:click={() => mobileMenuOpen = false}>
          {link.name}
        </a>
      {/each}

      {#if $user}
        <a href={`${base}/profile/{$user.id}`} class="nav-link user-link">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
            <path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"/>
          </svg>
          Profile
        </a>
        <a href={`${base}/logout`} class="nav-link logout-link">
          Logout
        </a>
      {:else}
        <a href={`${base}/alerts/Technicalerror`} class="nav-link login-link">
          Login
        </a>
        <a href={`${base}/alerts/Technicalerror`} class="nav-button">Sign Up</a>
      {/if}
    </div>

    <!-- Mobile Menu Button -->
    <button 
      class="mobile-menu-button"
      on:click={() => mobileMenuOpen = !mobileMenuOpen}
      aria-label="Toggle menu"
    >
      <div class="hamburger" class:open={mobileMenuOpen}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </button>
  </div>

  <!-- Mobile Menu -->
  {#if mobileMenuOpen}
    <div class="mobile-menu" transition:fade>
      <div class="mobile-links">
        {#each navLinks as link}
          <a href={link.path} class="mobile-link" on:click={() => mobileMenuOpen = false}>
            {link.name}
          </a>
        {/each}

        <div class="mobile-auth-links">
          {#if $user}
            <a href={`${base}/profile/{$user.id}`} class="mobile-link">Profile</a>
            <a href={`${base}/logout`} class="mobile-link">Logout</a>
          {:else}
            <a href={`${base}/alerts/Technicalerror`} class="mobile-link">Login</a>
            <a href={`${base}/alerts/Technicalerror`} class="mobile-button">Sign Up</a>
          {/if}
        </div>
      </div>
    </div>
  {/if}
</nav>


<style>
  /* Base Dark Mode Styles */
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

  .navbar {
    background-color: var(--bg-dark);
    box-shadow: 0 2px 10px var(--shadow-dark);
    position: sticky;
    top: 0;
    z-index: 1000;
    width: 100%;
  }

  .nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0.8rem 2rem;
    position: relative;
  }

  



  /* Desktop Logo */
  .desktop-logo {
    height: 12px; /* Optimal desktop logo size */
    width: auto;
  }

  /* Mobile Logo */
  .mobile-logo {
    height: 180px; /* Slightly smaller for mobile */
    width: auto;
    display: none;
  }

  .logo-image:hover {
    transform: scale(1.05);
  }

  /* Desktop Navigation */
  .desktop-links {
    display: flex;
    align-items: center;
    gap: 1.8rem;
  }

  .nav-link {
    color: var(--text-light);
    text-decoration: none;
    font-weight: 500;
    font-size: 1.05rem;
    padding: 0.5rem 0;
    position: relative;
    transition: all 0.3s ease;
    white-space: nowrap;
  }

  .nav-link:hover {
    color: var(--accent-blue);
  }

  .nav-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--accent-blue);
    transition: width 0.3s ease;
  }

  .nav-link:hover::after {
    width: 100%;
  }

  .user-link, .login-link {
    display: flex;
    align-items: center;
    gap: 0.6rem;
  }

  .user-link svg {
    fill: currentColor;
    width: 20px;
    height: 20px;
  }

  .nav-button {
    background-color: var(--accent-blue-dark);
    color: var(--text-lighter);
    padding: 0.6rem 1.2rem;
    border-radius: 5px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
    border: none;
    cursor: pointer;
    font-size: 1rem;
  }

  .nav-button:hover {
    background-color: #7d18ab;
    transform: translateY(-2px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }

  /* Mobile Menu Button */
  .mobile-menu-button {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    margin-left: 0.5rem;
  }

  .hamburger {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 26px;
    height: 20px;
    position: relative;
  }

  .hamburger span {
    display: block;
    width: 100%;
    height: 2.5px;
    background-color: var(--text-light);
    transition: all 0.3s ease;
    transform-origin: center;
    border-radius: 2px;
  }

  .hamburger.open span:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }

  .hamburger.open span:nth-child(2) {
    opacity: 0;
  }

  .hamburger.open span:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }

  /* Mobile Menu */
  .mobile-menu {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: var(--bg-darker);
    box-shadow: 0 4px 10px var(--shadow-dark);
    z-index: 999;
    overflow: hidden;
  }

  .mobile-links {
    display: flex;
    flex-direction: column;
    padding: 0.5rem 1.5rem;
  }

  .mobile-link {
    color: var(--text-light);
    text-decoration: none;
    padding: 1.1rem 0;
    font-weight: 500;
    font-size: 1.1rem;
    border-bottom: 1px solid var(--border-dark);
    transition: color 0.3s ease;
    display: flex;
    align-items: center;
  }

  .mobile-link:hover {
    color: var(--accent-blue);
  }

  .mobile-auth-links {
    margin-top: 0.5rem;
    padding-top: 0.5rem;
    border-top: 1px solid var(--border-dark);
  }

  .mobile-button {
    display: block;
    background-color: var(--accent-blue-dark);
    color: var(--text-lighter);
    padding: 0.9rem 1rem;
    border-radius: 5px;
    text-decoration: none;
    font-weight: 600;
    margin: 0.8rem 0;
    text-align: center;
    transition: all 0.3s ease;
    font-size: 1.1rem;
  }

  .mobile-button:hover {
    background-color: #8918ab;
    transform: translateY(-2px);
  }

  /* Responsive Styles */
  @media (max-width: 768px) {
    .nav-container {
      padding: 0.8rem 1.5rem;
    }

    .desktop-links {
      display: none;
    }

    .mobile-menu-button {
      display: block;
    }

    .desktop-logo {
      display: none;
    }

    .mobile-logo {
      display: block;
      height: 80px; 
      margin-top: -22px;
      margin-bottom: -22px;
    }
  }

  @media (min-width: 769px) {
    .mobile-menu {
      display: none !important;
    }
    
    .mobile-logo {
      display: none !important;
    }
    
    .desktop-logo {
      display: block !important;
    }
  }

  /* Animation for mobile menu */
  .fade {
    transition: opacity 0.3s ease;
  }
</style>