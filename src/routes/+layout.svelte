<!--- src/routes/+layout.svelte --->
<script>
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import MaintenanceNotice from '$lib/components/MaintenanceNotice.svelte';
  import { onMount } from 'svelte';

  onMount(() => {
    // Debugging helper
    if (typeof window !== 'undefined') {
      const checkLayout = () => {
        const docWidth = document.documentElement.scrollWidth;
        const winWidth = window.innerWidth;
        if (docWidth > winWidth) {
          console.warn(`Horizontal overflow detected! Document: ${docWidth}px, Window: ${winWidth}px`);
          document.documentElement.style.borderRight = '5px solid red';
        }
      };
      checkLayout();
      window.addEventListener('resize', checkLayout);
    }
  });
</script>

<div class="root-layout">
  <Navbar />
  <main class="content-wrapper">
    <slot />
  </main>
  <Footer />
  <MaintenanceNotice />
</div>

<style>
  /* Global reset */
  :global(html) {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  :global(body) {
    margin: 0;
    padding: 0;
    min-height: 100%;
    width: 100%;
    position: relative;
    background: #1e1e2f;
    color: #fff;
    font-family: Arial, sans-serif;
    display: flex;
    flex-direction: column;
  }

  /* Layout structure */
  .root-layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
    position: relative;
    overflow: hidden;
  }

  .content-wrapper {
    flex: 1;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    position: relative;
  }

  /* Safety nets */
  :global(img, video, iframe, canvas) {
    max-width: 100%;
    height: auto;
  }

  :global(*) {
    box-sizing: inherit;
    min-width: 0; /* Prevent flex items from overflowing */
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .content-wrapper {
      padding: 15px;
    }
    
    :global(html) {
      overflow-x: clip; /* Better mobile handling */
    }
  }

  /* Debug mode (remove in production) */
  :global(.debug *:not(g):not(path)) {
    outline: 1px solid rgba(255, 165, 0, 0.3);
  }
</style>