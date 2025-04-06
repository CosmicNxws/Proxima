<script>
  // ===== MAIN COMPONENT LOGIC ===== //
  import { fetchPosts } from '$lib/utils/ghostClient.js';
  import { onMount } from 'svelte';
  import { base } from '$app/paths';

  let visiblePosts = [];
  let currentPage = 1;
  const postsPerPage = 15;
  let totalPosts = 0;
  let error = null;
  let isLoading = false;
  let hasMore = true;

  // ===== ANALYTICS LOADER ===== //
  const loadAnalytics = () => {
    // Only run on client-side
    if (typeof document !== 'undefined') {
      // Ahrefs Analytics
      const ahrefsScript = document.createElement('script');
      ahrefsScript.src = 'https://analytics.ahrefs.com/analytics.js';
      ahrefsScript.setAttribute('data-key', 't/UVYeIfl8YZjVsuJ8k1OQ');
      ahrefsScript.async = true;
      document.head.appendChild(ahrefsScript);

      // Google Analytics (replace GA_MEASUREMENT_ID with your actual ID)
      const gtagScript = document.createElement('script');
      gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID';
      gtagScript.async = true;
      document.head.appendChild(gtagScript);
      
      window.dataLayer = window.dataLayer || [];
      window.gtag = function(){ dataLayer.push(arguments); };
      gtag('js', new Date());
      gtag('config', 'GA_MEASUREMENT_ID');
    }
  };

  // ===== POSTS LOADING ===== //
  const loadPosts = async () => {
    try {
      isLoading = true;
      const response = await fetchPosts({
        limit: postsPerPage,
        page: currentPage,
        include: 'tags,authors',
        order: 'published_at DESC'
      });

      const newPosts = response.posts || response;
      if (response.meta?.pagination) {
        totalPosts = response.meta.pagination.total;
        hasMore = currentPage < response.meta.pagination.pages;
      } else {
        hasMore = newPosts.length === postsPerPage;
        if (currentPage === 1) {
          totalPosts = hasMore ? postsPerPage + 1 : newPosts.length;
        }
      }

      visiblePosts = currentPage === 1 ? newPosts : [...visiblePosts, ...newPosts];
    } catch (err) {
      console.error('Failed to fetch posts:', err);
      error = 'Failed to load posts. Please try again later.';
    } finally {
      isLoading = false;
    }
  };

  onMount(async () => {
    await loadPosts();
    loadAnalytics(); // Load analytics after initial render
  });

  const loadMorePosts = async () => {
    currentPage++;
    await loadPosts();
  };
</script>

<svelte:head>
  <!-- ===== SEO META TAGS ===== -->
  <meta name="google-adsense-account" content="ca-pub-1753330877601837">
  <meta name="description" content="Discover our latest articles and insights on Proximareport.com">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Proxima Report">
  <meta name="twitter:card" content="summary_large_image">
  
  <!-- ===== STRUCTURED DATA ===== -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Proxima Report",
    "url": "Proximareport.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "{search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }
  </script>
</svelte:head>

<!-- ===== MAIN CONTENT ===== -->
{#if error}
  <p class="error">{error}</p>
{:else if visiblePosts.length > 0}
  <div class="posts-grid">
    {#each visiblePosts as post}
      <article class="post-card" itemscope itemtype="https://schema.org/BlogPosting">
        {#if post.feature_image}
          <div class="image-container">
            <img 
              src={post.feature_image} 
              alt={post.title} 
              class="post-image" 
              loading="lazy"
              width="320"
              height="200"
              itemprop="image"
            />
            <div class="image-overlay"></div>
          </div>
        {/if}
        <div class="card-content">
          <div class="meta">
            {#if post.tags && post.tags[0]}
              <span class="tag" itemprop="keywords">{post.tags[0].name}</span>
            {/if}
            {#if post.published_at}
              <span class="date" itemprop="datePublished" content="{new Date(post.published_at).toISOString()}">
                {new Date(post.published_at).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric'
                })}
              </span>
            {/if}
          </div>
          <h2 itemprop="headline">
            <a 
              href="{base}/articles/{post.slug}" 
              data-sveltekit-preload-data="hover"
              itemprop="url"
            >
              {post.title}
            </a>
          </h2>
          <p class="excerpt" itemprop="description">
            {post.excerpt || post.custom_excerpt || ''}
          </p>
          {#if post.authors && post.authors[0]}
            <div class="author" itemprop="author" itemscope itemtype="https://schema.org/Person">
              {#if post.authors[0].profile_image}
                <img 
                  src={post.authors[0].profile_image} 
                  alt={post.authors[0].name} 
                  class="author-image" 
                  loading="lazy"
                  width="28"
                  height="28"
                  itemprop="image"
                />
              {/if}
              <span itemprop="name">By {post.authors[0].name}</span>
            </div>
          {/if}
        </div>
      </article>
    {/each}
  </div>

  <div class="load-more-container">
    {#if hasMore}
      <button 
        class="load-more-button" 
        on:click={loadMorePosts}
        disabled={isLoading}
        aria-label="Load more posts"
      >
        {#if isLoading}
          <span class="loading-spinner">⏳</span>
        {:else}
          Load More (+{Math.min(postsPerPage, totalPosts - visiblePosts.length)})
        {/if}
      </button>
    {:else if visiblePosts.length > 0}
      <p class="no-more-posts">
        Showing all {visiblePosts.length} posts
      </p>
    {/if}
  </div>
{:else if !isLoading}
  <p class="no-posts">A server error occurred No posts were found - Contact Staff</p>
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

  .load-more-container {
    display: flex;
    justify-content: center;
    margin: 3rem 0;
    padding: 0 2rem;
  }

  .load-more-button {
    background-color: #4f46e5;
    color: white;
    border: none;
    padding: 0.75rem 2.5rem;
    border-radius: 6px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    min-width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  .load-more-button:hover:not(:disabled) {
    background-color: #6366f1;
    transform: translateY(-2px);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 
                0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }

  .load-more-button:disabled {
    background-color: #4f46e580;
    cursor: not-allowed;
  }

  .loading-spinner {
    display: inline-block;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .no-more-posts {
    color: #94a3b8;
    text-align: center;
    font-size: 0.9rem;
    padding: 1rem;
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

    .load-more-button {
      width: 100%;
    }
  }
</style>