<script>
    export let articleId;
    export let isBookmarked = false;
    import { toggleBookmark } from '../stores/bookmarkStore.js';
  
    const handleClick = async () => {
      await toggleBookmark(articleId);
      isBookmarked = !isBookmarked;
    };
  </script>
  
  <button on:click={handleClick} class:active={isBookmarked}>
    {isBookmarked ? '★' : '☆'}
  </button>
  
  <style>
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