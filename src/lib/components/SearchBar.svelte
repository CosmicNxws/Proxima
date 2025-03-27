<script>
    let query = '';
  
    const handleSearch = () => {
      // Logic to handle search
      console.log('Searching for:', query);
    };
  </script>
  
  <div class="search-bar">
    <input bind:value={query} placeholder="Search..." />
    <button on:click={handleSearch}>🔍</button>
  </div>
  
  <style>
    .search-bar {
      display: flex;
      gap: 8px;
    }
  
    input {
      background: #2a2a40;
      color: #fff;
      border: none;
      border-radius: 4px;
      padding: 8px;
    }
  
    button {
      background: #00ffcc;
      color: #1e1e2f;
      border: none;
      border-radius: 4px;
      padding: 8px;
      cursor: pointer;
    }
  </style>