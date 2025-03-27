<script>
    import { onMount } from 'svelte';
  
    onMount(() => {
      const script = document.createElement('script');
      script.src = "https://cdn.carbonads.com/carbon.js?serve=YOUR_CARBON_ID&placement=YOUR_DOMAIN";
      script.id = "_carbonads_js";
      script.async = true;
      
      const container = document.getElementById('carbon-container');
      if (container) {
        container.appendChild(script);
      }
    });
  </script>
  
  <div id="carbon-container"></div>
  
  <style>
    #carbon-container {
      min-height: 100px;
      margin: 1rem 0;
    }
    
    :global(#carbonads) {
      display: block;
      overflow: hidden;
      padding: 1em;
      background: #f8f9fa;
      border-radius: 4px;
      font-size: 13px;
      line-height: 1.5;
      max-width: 300px;
    }
  
    :global(#carbonads a) {
      color: inherit;
      text-decoration: none;
    }
  
    :global(#carbonads span) {
      display: block;
      overflow: hidden;
    }
  
    :global(.carbon-img) {
      display: block;
      margin-bottom: 8px;
      line-height: 1;
    }
  
    :global(.carbon-img img) {
      display: block;
    }
  
    :global(.carbon-text) {
      display: block;
      margin-bottom: 8px;
    }
  
    :global(.carbon-poweredby) {
      display: block;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-size: 9px;
      line-height: 1;
    }
  </style>