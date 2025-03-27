<script>
    import { page } from '$app/stores';
  </script>
  
  <div class="error-page">
    <h1>Error</h1>
    <p>{$page.status}: {$page.error.message}</p>
  </div>
  
  <style>
    .error-page {
      max-width: 800px;
      margin: 0 auto;
      padding: 16px;
      text-align: center;
    }
  
    h1 {
      color: #ff0000;
    }
  
    p {
      color: #a0a0c0;
    }
  </style>