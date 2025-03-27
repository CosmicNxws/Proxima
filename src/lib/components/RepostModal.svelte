<script>
    export let article;
    let comment = '';
  
    const handleRepost = () => {
      // Logic to handle reposting
      console.log('Reposting:', article.title, 'with comment:', comment);
    };
  </script>
  
  <div class="repost-modal">
    <h3>Repost: {article.title}</h3>
    <textarea bind:value={comment} placeholder="Add a comment..." />
    <button on:click={handleRepost}>Repost</button>
  </div>
  
  <style>
    .repost-modal {
      background: #1e1e2f;
      padding: 16px;
      border-radius: 8px;
    color: #00ffcc;
    max-width: 400px;
      margin: auto;
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