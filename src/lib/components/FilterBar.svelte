<script>
    export let filters = ['AI', 'Space', 'Physics'];
    let selectedFilter = '';
  
    const handleFilter = (filter) => {
      selectedFilter = filter;
      // Logic to filter articles
      console.log('Filtering by:', filter);
    };
  </script>
  
  <div class="filter-bar">
    {#each filters as filter}
      <button on:click={() => handleFilter(filter)} class:active={selectedFilter === filter}>
        {filter}
      </button>
    {/each}
  </div>
  
  <style>
    .filter-bar {
      display: flex;
      gap: 8px;
      margin-bottom: 16px;
    }
  
    button {
      background: none;
      border: 1px solid #00ffcc;
      color: #00ffcc;
      padding: 4px 8px;
      border-radius: 4px;
      cursor: pointer;
    }
  
    button.active {
      background: #00ffcc;
      color: #1e1e2f;
    }
  </style>