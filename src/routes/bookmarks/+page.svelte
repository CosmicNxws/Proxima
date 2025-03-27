<script>
    import ArticleCard from '../../lib/components/ArticleCard.svelte';
    import { bookmarks } from '../../lib/stores/bookmarkStore.js';
    import { onMount } from 'svelte';
  
    onMount(async () => {
      await fetchBookmarks();
    });
  </script>
  
  <div class="bookmarks">
    {#each $bookmarks as bookmark}
      <ArticleCard article={bookmark.article} isBookmarked={true} />
    {/each}
  </div>
  
  <style>
    .bookmarks {
      max-width: 800px;
      margin: 0 auto;
      padding: 16px;
    }
  </style>