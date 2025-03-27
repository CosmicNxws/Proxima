<script>
    export let comments = [];
    export let articleId;
    import { addComment } from '../stores/commentStore.js';
  
    let newComment = '';
  
    const handleSubmit = async () => {
      if (newComment.trim()) {
        await addComment(articleId, newComment);
        newComment = '';
      }
    };
  </script>
  
  <div class="comment-section">
    <h3>Comments</h3>
    <ul>
      {#each comments as comment}
        <li class="comment">
          <strong>{comment.user_name}:</strong> {comment.text}
        </li>
      {/each}
    </ul>
    <textarea bind:value={newComment} placeholder="Add a comment..." />
    <button on:click={handleSubmit}>Post Comment</button>
  </div>
  
  <style>
    .comment-section {
      margin-top: 16px;
    }
  
    h3 {
      color: #00ffcc;
      font-size: 1.25rem;
    }
  
    .comment {
      background: #2a2a40;
      padding: 8px;
      border-radius: 4px;
      margin-bottom: 8px;
    }
  
    textarea {
      width: 100%;
      background: #2a2a40;
      color: #fff;
      border: none;
      border-radius: 4px;
      padding: 8px;
      margin-top: 8px;
    }
  
    button {
      background: #00ffcc;
      color: #1e1e2f;
      border: none;
      border-radius: 4px;
      padding: 8px 16px;
      margin-top: 8px;
      cursor: pointer;
    }
  </style>