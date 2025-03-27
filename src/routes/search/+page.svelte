<script>
    import ArticleCard from '../../../lib/components/ArticleCard.svelte';
    import { searchArticles } from '../../../lib/utils/searchUtils.js';
    import { articles } from '../../../lib/stores/articleStore.js';
    import { onMount } from 'svelte';
  
    let query = '';
  
    onMount(async () => {
      await fetchArticles();
    });
  
    $: filteredArticles = searchArticles($articles, query);
  </script>
  
  <div class="search-page">
    <input bind:value={query} placeholder="Search..." />
    {#each filteredArticles as article}
      <ArticleCard {article} />
    {/each}
  </div>
  
  <style>
    .search-page {
      max-width: 800px;
      margin: 0 auto;
      padding: 16px;
    }
  
    input {
      width: 100%;
      padding: 8px;
      margin-bottom: 16px;
      background: #2a2a40;
      color: #fff;
      border: none;
      border-radius: 4px;
    }
  </style>