<script>
    export let article;
    export let isBookmarked = false;
    import BookmarkButton from './BookmarkButton.svelte';
    import UpvoteDownvote from './UpvoteDownvote.svelte';
  </script>
  
  <article class="article-card">
    <h2>{article.title}</h2>
    <p>{article.excerpt}</p>
    <div class="actions">
      <UpvoteDownvote articleId={article.id} upvotes={article.upvotes} downvotes={article.downvotes} />
      <BookmarkButton articleId={article.id} isBookmarked={isBookmarked} />
    </div>
  </article>
  
  <style>
    .article-card {
      background: #1e1e2f;
      border-radius: 8px;
      padding: 16px;
      margin-bottom: 16px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
  
    h2 {
      color: #00ffcc;
      font-size: 1.5rem;
      margin-bottom: 8px;
    }
  
    p {
      color: #a0a0c0;
      font-size: 1rem;
    }
  
    .actions {
      display: flex;
      gap: 8px;
      margin-top: 12px;
    }
  </style>