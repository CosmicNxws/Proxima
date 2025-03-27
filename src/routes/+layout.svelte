<script>
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<Navbar />

<main class="content">
  <slot />
</main>

<Footer />

<style>
  :global(body) {
    background: #1e1e2f;
    color: #fff;
    margin: 0;
    font-family: Arial, sans-serif;
    min-height: 100vh;
  }

  :global(html) {
    height: 100%;
  }

  .content {
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
    min-height: calc(100vh - [navbar_height] - [footer_height]);
    /* Replace [navbar_height] and [footer_height] with actual values */
  }

  @media (max-width: 768px) {
    .content {
      padding: 15px;
    }
  }
</style>