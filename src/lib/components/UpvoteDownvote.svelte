<script>
    export let articleId;
    export let upvotes = 0;
    export let downvotes = 0;
    import { upvoteArticle, downvoteArticle } from '../stores/articleStore.js';
  
    let userVote = null;
  
    const handleUpvote = async () => {
      if (userVote !== 'up') {
        await upvoteArticle(articleId);
        userVote = 'up';
      }
    };
  
    const handleDownvote = async () => {
      if (userVote !== 'down') {
        await downvoteArticle(articleId);
        userVote = 'down';
      }
    };
  </script>
  
  <div class="vote-buttons">
    <button on:click={handleUpvote} class:active={userVote === 'up'}>👍 {upvotes}</button>
    <button on:click={handleDownvote} class:active={userVote === 'down'}>👎 {downvotes}</button>
  </div>
  
  <style>
    .vote-buttons {
      display: flex;
      gap: 8px;
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