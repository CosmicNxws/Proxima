<script>
     import { comments } from '$lib/stores/commentStore'; 
     import { onMount } from 'svelte';
  
    onMount(async () => {
      await fetchComments();
    });
  </script>
  
  <div class="comment-feed">
    {#each $comments as comment}
      <div class="comment">
        <strong>{comment.user_name}:</strong> {comment.text}
      </div>
    {/each}
  </div>
  
  <style>
    .comment-feed {
      max-width: 800px;
      margin: 0 auto;
      padding: 16px;
    }
  
    .comment {
      background: #2a2a40;
      padding: 8px;
      border-radius: 4px;
      margin-bottom: 8px;
    }
  </style>