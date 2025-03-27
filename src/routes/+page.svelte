<script>
  import { fetchPosts } from '$lib/utils/ghostClient.js';
  import { onMount } from 'svelte';

  let posts = [];
  let error = null;

  onMount(async () => {
    try {
      posts = await fetchPosts();
      console.log('Posts:', posts);
    } catch (err) {
      console.error('Failed to fetch posts:', err);
      error = 'Failed to load posts. Please try again later.';
    }
  });
</script>

{#if error}
  <p class="error">{error}</p>
{:else if posts.length > 0}
  <div class="posts-grid">
    {#each posts as post}
      <article class="post-card">
        {#if post.feature_image}
          <div class="image-container">
            <img src={post.feature_image} alt={post.title} class="post-image" />
            <div class="image-overlay"></div>
          </div>
        {/if}
        <div class="card-content">
          <div class="meta">
            {#if post.tags && post.tags[0]}
              <span class="tag">{post.tags[0].name}</span>
            {/if}
            {#if post.published_at}
              <span class="date">
                {new Date(post.published_at).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric'
                })}
              </span>
            {/if}
          </div>
          <h2><a href="/{post.slug}">{post.title}</a></h2>
          <p class="excerpt">{post.excerpt.split(' ').slice(0, 15).join(' ')}...</p>
          {#if post.authors && post.authors[0]}
            <div class="author">
              {#if post.authors[0].profile_image}
                <img src={post.authors[0].profile_image} alt={post.authors[0].name} class="author-image" />
              {/if}
              <span>By {post.authors[0].name}</span>
            </div>
          {/if}
        </div>
      </article>
    {/each}
  </div>
{:else}
  <p class="no-posts">No posts found.</p>
{/if}

<style>
  :global(body) {
    background-color: #0b0c0e;
    color: #e2e8f0;
  }

  .error {
    color: #f87171;
    text-align: center;
    margin: 2rem 0;
    font-size: 1.1rem;
  }

  .no-posts {
    text-align: center;
    color: #94a3b8;
    font-size: 1.2rem;
    margin: 3rem 0;
  }

  .posts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 2.5rem;
    padding: 2rem;
    max-width: 1400px;
    margin: 0 auto;
  }

  .post-card {
    background: #0f1011;
    border-radius: 12px;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.25), 
                0 4px 6px -4px rgba(0, 0, 0, 0.25);
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    display: flex;
    flex-direction: column;
    height: 100%;
    border: 1px solid #334155;
  }

  .post-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.35), 
                0 8px 10px -6px rgba(0, 0, 0, 0.35);
    border-color: #4f46e5;
  }

  .image-container {
    position: relative;
    width: 100%;
    height: 200px;
    overflow: hidden;
  }

  .post-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  .post-card:hover .post-image {
    transform: scale(1.05);
  }

  .image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 50%);
  }

  .card-content {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  .meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    font-size: 0.8rem;
  }

  .tag {
    background: #4f46e5;
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
    font-weight: 500;
  }

  .date {
    color: #94a3b8;
  }

  h2 {
    color: #f8fafc;
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0 0 1rem 0;
    line-height: 1.4;
  }

  h2 a {
    color: inherit;
    text-decoration: none;
    transition: color 0.2s ease;
  }

  h2 a:hover {
    color: #818cf8;
  }

  .excerpt {
    color: #94a3b8;
    font-size: 0.9rem;
    line-height: 1.5;
    margin-bottom: 1.5rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    flex-grow: 1;
  }

  .author {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-top: auto;
    padding-top: 1rem;
    border-top: 1px solid #334155;
    font-size: 0.85rem;
    color: #cbd5e1;
  }

  .author-image {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid #4f46e5;
  }

  @media (max-width: 1024px) {
    .posts-grid {
      gap: 2rem;
    }
  }

  @media (max-width: 768px) {
    .posts-grid {
      grid-template-columns: 1fr;
      padding: 1.5rem;
      gap: 1.5rem;
    }
    
    .post-card {
      max-width: 400px;
      margin: 0 auto;
      width: 100%;
    }
  }
</style>