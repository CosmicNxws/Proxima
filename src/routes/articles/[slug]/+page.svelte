<script>
  import { fetchArticle } from '$lib/utils/ghostClient.js';
  import CommentSection from '$lib/components/CommentSection.svelte';
  import { onMount, afterUpdate } from 'svelte';
  import { fade } from 'svelte/transition';
  
  export let data;

  let article = null;
  let error = null;
  let loading = true;
  let readingProgress = 0;
  let headings = [];
  let activeHeadingId = '';
  let xWidgetLoaded = false;
  
  // TOC state
  let tocExpanded = false;
  let isMobile = false;
  const mobileTocLimit = 5; // Show first 5 items on mobile by default

  // Function to load X (Twitter) widgets
  const loadXWidgets = () => {
    if (window.twttr) {
      window.twttr.widgets.load();
      return true;
    }
    
    if (!xWidgetLoaded) {
      const script = document.createElement('script');
      script.src = 'https://platform.twitter.com/widgets.js';
      script.async = true;
      script.charset = 'utf-8';
      script.id = 'twitter-wjs';
      
      script.onload = () => {
        xWidgetLoaded = true;
        if (window.twttr?.widgets?.load) {
          window.twttr.widgets.load();
        }
      };
      
      document.body.appendChild(script);
      return true;
    }
    return false;
  };

  // Detect X/Twitter URLs in content
  function hasXEmbeds(html) {
    return html?.includes('twitter-tweet') || 
           html?.includes('twitter.com') || 
           html?.includes('x.com') ||
           html?.includes('data-x-embed');
  }

  onMount(async () => {
    // Check viewport size
    checkViewport();
    window.addEventListener('resize', checkViewport);
    
    try {
      if (!data?.slug) {
        throw new Error('No slug provided in URL');
      }

      article = await fetchArticle(data.slug);

      if (!article) {
        throw new Error('Article not found');
      }

      // Calculate reading time
      if (article.html) {
        const wordCount = article.html.split(/\s+/).length;
        article.readingTime = Math.ceil(wordCount / 200);
      }

      // Generate table of contents
      setTimeout(() => {
        generateTOC();
        setupIntersectionObserver();
      }, 100);

      // Initial check for X embeds
      if (hasXEmbeds(article.html)) {
        loadXWidgets();
      }

    } catch (err) {
      error = err.message;
      console.error('Article load error:', err);
    } finally {
      loading = false;
    }
    
    return () => {
      window.removeEventListener('resize', checkViewport);
    };
  });

  function checkViewport() {
    isMobile = window.innerWidth < 768;
    // Default to expanded on desktop, collapsed on mobile
    tocExpanded = !isMobile;
  }

  // Handle dynamic content updates
  afterUpdate(() => {
    // Check for X embeds in newly rendered content
    const xEmbedsExist = document.querySelector('.twitter-tweet, [data-x-embed]');
    if (xEmbedsExist && !xWidgetLoaded) {
      loadXWidgets();
    }
  });

  function generateTOC() {
    const contentElement = document.querySelector('.content');
    if (!contentElement) return;
    
    const headingElements = contentElement.querySelectorAll('h2, h3');
    headings = Array.from(headingElements).map(heading => {
      const id = heading.textContent.toLowerCase().replace(/[^\w]+/g, '-');
      heading.id = id;
      return {
        id,
        text: heading.textContent,
        level: parseInt(heading.tagName.substring(1)),
        element: heading
      };
    });
  }

  function setupIntersectionObserver() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            activeHeadingId = entry.target.id;
          }
        });
      },
      { 
        rootMargin: '-50px 0px -50% 0px',
        threshold: 0.1
      }
    );

    headings.forEach(heading => {
      observer.observe(heading.element);
    });

    return () => observer.disconnect();
  }

  function scrollToHeading(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      history.replaceState(null, null, `#${id}`);
      
      // On mobile, collapse TOC after selection
      if (isMobile) {
        tocExpanded = false;
      }
    }
  }
  
  function toggleToc() {
    tocExpanded = !tocExpanded;
  }
</script>

<meta name="google-adsense-account" content="ca-pub-1753330877601837">

<svelte:head>
  {#if article}
    <title>{article.title} | STEM Journal</title>
    <meta name="description" content={article.excerpt || article.meta_description || 'A STEM-focused article'} />
    <meta property="og:title" content={article.title} />
    <meta property="og:description" content={article.excerpt || article.meta_description || 'A STEM-focused article'} />
    {#if article.feature_image}
      <meta property="og:image" content={article.feature_image} />
    {/if}
  {/if}
</svelte:head>

{#if loading}
  <div class="loading" transition:fade>
    <div class="loading-animation">
      <div class="molecule">
        <div class="atom"></div>
        <div class="atom"></div>
        <div class="atom"></div>
      </div>
      <p>Loading article...</p>
    </div>
  </div>
{:else if error}
  <div class="error" transition:fade>
    <div class="error-icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="8" x2="12" y2="12"></line>
        <line x1="12" y1="16" x2="12.01" y2="16"></line>
      </svg>
    </div>
    <h3>Error Loading Article</h3>
    <p>{error}</p>
    <a href="/" class="home-link">← Return to Homepage</a>
  </div>
{:else if article}
  <div class="reading-progress" style={`width: ${readingProgress}%`}></div>
  
  <article class="article" transition:fade>
    <header class="article-header">
      <div class="breadcrumb">
        <a href="/">Home</a> / <span>{article.title}</span>
      </div>
      
      <h1>{article.title}</h1>
      
      <div class="article-meta">
        <div class="meta-details">
          {#if article?.authors?.length > 0}
            <span class="authors">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                {#if article.authors.length > 1}
                  <!-- Icon for multiple authors -->
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                {:else}
                  <!-- Icon for single author -->
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                {/if}
              </svg>
      
              {#each article.authors as author, i}
                <span class="author-item">
                  {#if author.profile_image}
                    <img 
                      src={author.profile_image} 
                      alt={author.name}
                      class="author-avatar small"
                      on:error={(e) => e.target.style.display = 'none'}
                    />
                  {:else}
                    <div class="author-avatar small placeholder">
                      {author.name.charAt(0)}
                    </div>
                  {/if}
                  <span class="author-name">{author.name}</span>
                </span>
                
                {#if i < article.authors.length - 1}
                  <span class="author-separator">,</span>
                {/if}
              {/each}
            </span>
          {:else}
            <span class="authors">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
              </svg>
              <span class="author-item">
                <div class="author-avatar small placeholder">?</div>
                <span class="author-name">Unknown Author</span>
              </span>
            </span>
          {/if}
          
          {#if article.published_at}
            <span class="date">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              {new Date(article.published_at).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
            </span>
          {/if}
          
          {#if article.readingTime}
            <span class="reading-time">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              {article.readingTime} min read
            </span>
          {/if}
        </div>
        
        {#if article.tags && article.tags.length > 0}
          <div class="tags">
            {#each article.tags as tag}
              <span class="tag" style={`--tag-color: hsl(${Math.random() * 360}, 70%, 50%)`}>{tag.name}</span>
            {/each}
          </div>
        {/if}
      </div>
    </header>
    
    {#if article.feature_image}
      <figure class="featured-image">
        <img 
          src={article.feature_image} 
          alt={article.title} 
          class="article-image" 
        />
        {#if article.feature_image_caption}
          <figcaption>{article.feature_image_caption}</figcaption>
        {/if}
      </figure>
    {/if}
    
    <div class="content-container">
      <aside class="sidebar">
        <div class="toc">
          <div class="toc-header" on:click={toggleToc}>
            <h4>Table of Contents</h4>
            <svg class="toc-toggle-icon" class:expanded={tocExpanded} 
                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M7 10l5 5 5-5z"/>
            </svg>
          </div>
          
          <nav class="toc-nav" class:expanded={tocExpanded || !isMobile}>
            {#if headings.length > 0}
              {#each (isMobile && !tocExpanded ? headings.slice(0, mobileTocLimit) : headings) as heading}
                <a href="#{heading.id}" 
                   class="toc-item {heading.level === 3 ? 'toc-subitem' : ''} {activeHeadingId === heading.id ? 'active' : ''}"
                   on:click|preventDefault={() => scrollToHeading(heading.id)}>
                  {heading.text}
                </a>
              {/each}
              
              {#if isMobile && headings.length > mobileTocLimit && !tocExpanded}
                <button class="toc-show-more" on:click={toggleToc}>
                  Show {headings.length - mobileTocLimit} more...
                </button>
              {/if}
            {:else}
              <div class="toc-empty">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="12" y1="8" x2="12" y2="12"/>
                  <line x1="12" y1="16" x2="12.01" y2="16"/>
                </svg>
                <p>No table of contents available</p>
              </div>
            {/if}
          </nav>
        </div>
        
        <div class="social-embeds">
          <h4>Share</h4>
          <div class="social-buttons">
            <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener" class="social-button twitter">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
              Twitter
            </a>
            <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(article.title)}`} target="_blank" rel="noopener" class="social-button linkedin">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              LinkedIn
            </a>
            <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener" class="social-button facebook">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              Facebook
            </a>
          </div>
        </div>
      </aside>
      
      <div class="content">
        {@html article.html}
        
        {#if article.twitter_embed}
  <div class="embed-container" bind:this={twitterContainer}>
    {@html article.twitter_embed}
  </div>
{/if}
        
        {#if article.youtube_embed}
          <div class="embed-container">
            {@html article.youtube_embed}
          </div>
        {/if}
      </div>
    </div>
    
    <footer class="article-footer">
      {#if article.authors}
        {#each article.authors as author}
          <div class="author-card">
            {#if author.profile_image}
              <img src={author.profile_image} alt={author.name} class="author-avatar large" />
            {:else}
              <div class="author-avatar large placeholder">{author.name.charAt(0)}</div>
            {/if}
            <div class="author-details">
              <h4>About {author.name}</h4>
              {#if author.bio}
                <p>{author.bio}</p>
              {:else}
                <p>{author.name} is a contributor to our STEM journal.</p>
              {/if}
              {#if author.website}
                <a href={author.website} target="_blank" rel="noopener" class="author-website">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                  {author.website.replace(/^https?:\/\//, '')}
                </a>
              {/if}
            </div>
          </div>
        {/each}
      {/if}
    </footer>
    
    <CommentSection articleId={article.id} />
  </article>
{:else}
  <div class="not-found" transition:fade>
    <div class="error-icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="8" x2="12" y2="12"></line>
        <line x1="12" y1="16" x2="12.01" y2="16"></line>
      </svg>
    </div>
    <h3>Article Not Found</h3>
    <p>The article you're looking for doesn't exist or may have been removed.</p>
    <a href="/" class="home-link">← Return to Homepage</a>
  </div>
{/if}

<style>
  :global(:root) {
    --primary: #9c7aff; /* Light purple accent */
    --primary-dark: #7c5acf;
    --secondary: #b388ff;
    --accent: #d1b3ff;
    --dark: #121212;
    --darker: #0a0a0a;
    --dark-gray: #121212;
    --light: #1d1d1d;
    --gray: #757575;
    --light-gray: #2d2d2d;
    --text-primary: #e0e0e0;
    --text-secondary: #b0b0b0;
    --bg-primary: #121212;
    
    --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 
                Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    --font-mono: 'Fira Code', 'Roboto Mono', monospace;
    
    --border-radius: 8px;
    --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.5);
    --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.3);
    --shadow-lg: 0 10px 25px rgba(0, 0, 0, 0.2);
    --transition: all 0.2s ease;
  }


:global(body) {
  background-color: var(--bg-primary);
  color: var(--text-primary);
}

  
  body {
    font-family: var(--font-sans);
    line-height: 1.6;
    color: var(--text-primary);
    background-color: var(--dark);
    background-image: 
      radial-gradient(circle at 10% 20%, rgba(156, 122, 255, 0.05) 0%, transparent 20%),
      radial-gradient(circle at 90% 80%, rgba(179, 136, 255, 0.05) 0%, transparent 20%);
  }
  
  /* Reading progress bar */
  .reading-progress {
    position: fixed;
    top: 0;
    left: 0;
    height: 4px;
    background: linear-gradient(90deg, var(--primary), var(--secondary));
    z-index: 1000;
    transition: width 0.1s linear;
  }
  
  /* Loading state */
  .loading {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 60vh;
    padding: 2rem;
  }
  
  .loading-animation {
    text-align: center;
  }
  
  .molecule {
    position: relative;
    width: 80px;
    height: 80px;
    margin: 0 auto 1.5rem;
  }
  
  .atom {
    position: absolute;
    width: 20px;
    height: 20px;
    background: var(--primary);
    border-radius: 50%;
    animation: float 3s infinite ease-in-out;
  }
  
  .atom:nth-child(1) {
    top: 0;
    left: 30px;
    animation-delay: 0s;
  }
  
  .atom:nth-child(2) {
    top: 30px;
    left: 0;
    background: var(--secondary);
    animation-delay: 0.2s;
  }
  
  .atom:nth-child(3) {
    top: 30px;
    right: 0;
    background: var(--accent);
    animation-delay: 0.4s;
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-15px); }
  }
  
  /* Error and Not Found states */
  .error, .not-found {
    max-width: 600px;
    margin: 4rem auto;
    padding: 2rem;
    background: var(--dark-gray);
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-md);
    text-align: center;
  }
  
  .error-icon {
    width: 60px;
    height: 60px;
    margin: 0 auto 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(239, 35, 60, 0.1);
    border-radius: 50%;
    color: var(--danger);
  }
  
  .error-icon svg, .not-found svg {
    width: 30px;
    height: 30px;
  }
  
  .error h3, .not-found h3 {
    margin-bottom: 0.5rem;
    color: var(--text-primary);
  }
  
  .error p, .not-found p {
    color: var(--text-secondary);
    margin-bottom: 1.5rem;
  }
  
  .home-link {
    display: inline-flex;
    align-items: center;
    padding: 0.5rem 1rem;
    background: var(--primary);
    color: white;
    border-radius: var(--border-radius);
    text-decoration: none;
    transition: var(--transition);
  }
  
  .home-link:hover {
    background: var(--primary-dark);
    transform: translateY(-2px);
    box-shadow: var(--shadow-sm);
  }
  
  /* Article styles */
  .article {
    max-width: 1200px;
    margin: 2rem auto;
    padding: 0;
    background: var(--dark-gray);
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-lg);
    overflow: hidden;
  }
  
  .article-header {
    padding: 3rem 3rem 1.5rem;
    background: linear-gradient(135deg, var(--darker), var(--dark));
    color: white;
  }
  
  .breadcrumb {
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
    color: rgba(255, 255, 255, 0.7);
  }
  
  .breadcrumb a {
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
    transition: var(--transition);
  }
  
  .breadcrumb a:hover {
    color: white;
    text-decoration: underline;
  }
  
  .breadcrumb span {
    color: white;
    font-weight: 500;
  }
  
  h1 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    line-height: 1.2;
    color: white;
    background: linear-gradient(90deg, var(--primary), var(--accent));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  .article-meta {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--light-gray);
}
  
  .author-info {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
  
  .author-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
  }
  
  .author-avatar.placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--primary);
    color: white;
    font-weight: bold;
    font-size: 1.2rem;
  }
  
  .author-avatar.large {
    width: 80px;
    height: 80px;
    font-size: 2rem;
  }
  
  .meta-details {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1.25rem;
  color: var(--text-secondary);
  font-size: 0.95rem;
}
  

.authors {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.author-avatar {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  object-fit: cover;
}

.author-avatar.small {
  width: 20px;
  height: 20px;
  font-size: 0.8rem;
}

.author-avatar.placeholder {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--primary);
  color: white;
  font-weight: bold;
}

.meta-details svg {
  flex-shrink: 0;
  margin-right: 0.25rem;
  vertical-align: middle;
}
  
.date, .reading-time, .authors {
  display: inline-flex;
  align-items: center;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
  
.tag {
  padding: 0.25rem 0.75rem;
  background: rgba(156, 122, 255, 0.1);
  border-radius: 20px;
  font-size: 0.8rem;
  color: var(--primary);
  border: 1px solid var(--tag-color);
}
  
  /* Featured image */
  .featured-image {
    margin: 0;
  }
  
  .article-image {
    width: 100%;
    height: auto;
    max-height: 500px;
    object-fit: cover;
  }
  
  .featured-image figcaption {
    text-align: center;
    font-size: 0.9rem;
    color: var(--gray);
    padding: 0.5rem;
    border-bottom: 1px solid var(--light-gray);
  }
  
  /* Content layout */
  .content-container {
    display: flex;
    flex-direction: row-reverse;
    gap: 2rem;
    padding: 2rem 3rem;
  }
  
  .sidebar {
    flex: 0 0 280px;
    position: sticky;
    top: 2rem;
    align-self: flex-start;
  }
  
  .toc {
    background: var(--darker);
    padding: 1.5rem;
    border-radius: var(--border-radius);
    margin-bottom: 2rem;
    box-shadow: var(--shadow-sm);
  }


  .toc-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
    cursor: pointer;
    background: rgba(156, 122, 255, 0.1);
    transition: background 0.2s ease;
  }

  .toc-header:hover {
    background: rgba(156, 122, 255, 0.2);
  }

  .toc-header h4 {
    margin: 0;
    color: var(--primary);
    font-size: 1.1rem;
  }


  .toc-toggle-icon {
    width: 20px;
    height: 20px;
    transition: transform 0.3s ease;
    fill: var(--primary);
  }

  .toc-toggle-icon.expanded {
    transform: rotate(180deg);
  }




  
  .toc h4 {
    margin-bottom: 1rem;
    color: var(--text-primary);
    font-size: 1.1rem;
  }
  
  .toc-nav {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
  }

  .toc-nav.expanded {
    max-height: 100vh;
  }
  
  .toc-item {
    display: block;
    padding: 0.75rem 1.5rem;
    color: var(--text-secondary);
    text-decoration: none;
    transition: all 0.2s ease;
    border-left: 3px solid transparent;
    font-size: 0.95rem;
    line-height: 1.4;
  }


  .toc-empty {
 
  text-align: center;
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.toc-empty svg {
  width: 24px;
  height: 24px;
  margin-bottom: 0.5rem;
  color: var(--primary);
}

.toc-empty p {
  margin: 0;
}

  
  .toc-subitem {
    padding-left: 1.5rem;
    font-size: 0.9rem;
  }
  
  .toc-item:hover, .toc-item.active {
    color: var(--primary);
    background: rgba(156, 122, 255, 0.1);
  }

  .toc-show-more {
    width: 100%;
    padding: 0.75rem 1.5rem;
    background: transparent;
    border: none;
    border-top: 1px solid var(--light-gray);
    color: var(--primary);
    text-align: left;
    cursor: pointer;
    font-size: 0.9em;
    transition: background 0.2s ease;
  }
  
  .toc-show-more:hover {
    background: rgba(156, 122, 255, 0.05);
  }

  .toc-empty {
    padding: 1.5rem;
    text-align: center;
    color: var(--text-secondary);
    font-size: 0.9rem;
  }

  .toc-empty svg {
    width: 24px;
    height: 24px;
    margin-bottom: 0.5rem;
    color: var(--primary);
  }

  .toc-empty p {
    margin: 0;
  }

  .toc-item.active {
    font-weight: 500;
    border-left: 3px solid var(--primary);
  }




  
  
  .social-embeds {
    background: var(--darker);
    padding: 1.5rem;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-sm);
  }
  
  .social-embeds h4 {
    margin-bottom: 1rem;
    color: var(--text-primary);
  }
  
  .social-buttons {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
  
  .social-button {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem 1rem;
    border-radius: 6px;
    text-decoration: none;
    color: var(--text-primary);
    transition: var(--transition);
    font-size: 0.95rem;
  }
  
  .social-button svg {
    width: 20px;
    height: 20px;
  }
  
  .social-button.twitter {
    background: rgba(29, 161, 242, 0.1);
    border: 1px solid rgba(29, 161, 242, 0.3);
  }
  
  .social-button.twitter:hover {
    background: rgba(29, 161, 242, 0.2);
  }
  
  .social-button.linkedin {
    background: rgba(0, 119, 181, 0.1);
    border: 1px solid rgba(0, 119, 181, 0.3);
  }
  
  .social-button.linkedin:hover {
    background: rgba(0, 119, 181, 0.2);
  }
  
  .social-button.facebook {
    background: rgba(66, 103, 178, 0.1);
    border: 1px solid rgba(66, 103, 178, 0.3);
  }
  
  .social-button.facebook:hover {
    background: rgba(66, 103, 178, 0.2);
  }
  
  .content {
    flex: 1;
    min-width: 0;
  }


  /* Ghost Embed Cards */
.kg-embed-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0;
}

.kg-embed-card iframe {
  max-width: 100%;
  border-radius: var(--border-radius);
}
  
  /* Content typography */
  .content :global(p) {
    margin-bottom: 1.5rem;
    color: var(--text-primary);
    font-size: 1.1rem;
    line-height: 1.7;
  }
  
  .content :global(h2) {
    margin: 2.5rem 0 1.5rem;
    color: var(--text-primary);
    font-size: 1.8rem;
    line-height: 1.3;
    position: relative;
    padding-bottom: 0.5rem;
  }
  
  .content :global(h2)::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, var(--primary), var(--secondary));
    border-radius: 3px;
  }
  
  .content :global(h3) {
    margin: 2rem 0 1rem;
    color: var(--text-primary);
    font-size: 1.5rem;
  }
  
  .content :global(h4) {
    margin: 1.5rem 0 1rem;
    color: var(--text-primary);
    font-size: 1.3rem;
  }
  
  .content :global(a) {
    color: var(--primary);
    text-decoration: none;
    font-weight: 500;
    transition: var(--transition);
    border-bottom: 1px solid rgba(156, 122, 255, 0.3);
  }
  
  .content :global(a:hover) {
    color: var(--accent);
    border-bottom-color: var(--primary);
  }
  
  .content :global(ul), 
  .content :global(ol) {
    margin-bottom: 1.5rem;
    padding-left: 2rem;
  }
  
  .content :global(li) {
    margin-bottom: 0.5rem;
  }
  
  .content :global(blockquote) {
    border-left: 4px solid var(--primary);
    padding: 1rem 1.5rem;
    margin: 1.5rem 0;
    background: rgba(156, 122, 255, 0.05);
    border-radius: 0 var(--border-radius) var(--border-radius) 0;
    font-style: italic;
    color: var(--text-secondary);
  }
  
  .content :global(pre) {
    background: var(--darker);
    color: rgb(31, 31, 31);
    padding: 1.5rem;
    border-radius: var(--border-radius);
    margin: 1.5rem 0;
    overflow-x: auto;
    font-family: var(--font-mono);
    font-size: 0.95rem;
    line-height: 1.5;
  }
  
  .content :global(code) {
    font-family: var(--font-mono);
    background: rgba(156, 122, 255, 0.1);
    color: var(--primary);
    padding: 0.2rem 0.4rem;
    border-radius: 4px;
    font-size: 0.9rem;
  }
  
  .content :global(pre code) {
    background: transparent;
    color: inherit;
    padding: 0;
    border-radius: 0;
  }
  
  .content :global(img) {
    max-width: 100%;
    height: auto;
    margin: 1.5rem auto;
    display: block;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-md);
  }
  
  .content :global(table) {
    width: 100%;
    margin: 1.5rem 0;
    border-collapse: collapse;
    overflow-x: auto;
    display: block;
  }
  
  .content :global(th), 
  .content :global(td) {
    padding: 0.75rem;
    text-align: left;
    border: 1px solid var(--light-gray);
  }
  
  .content :global(th) {
    background: var(--darker);
    font-weight: 600;
  }
  
  .content :global(tr:nth-child(even)) {
    background: rgba(255, 255, 255, 0.02);
  }
  
  .embed-container {
  margin: 2rem 0;
  display: flex;
  justify-content: center;
}

.embed-container iframe {
  max-width: 100%;
  border-radius: var(--border-radius);
  overflow: hidden;
}
  





/* Comment Section Improvements */
:global(.comment-section) {
  margin-top: 3rem;
  padding: 2rem;
  background: var(--dark-gray);
  border-radius: var(--border-radius);
  border-top: 1px solid var(--light-gray);
}

:global(.comment-section h3) {
  color: var(--primary);
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
}

:global(.comment-list) {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

:global(.comment) {
  padding: 1.5rem;
  background: var(--darker);
  border-radius: var(--border-radius);
  border-left: 3px solid var(--primary);
}

:global(.comment-meta) {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

:global(.comment-author) {
  font-weight: 600;
  color: var(--text-primary);
}

:global(.comment-date) {
  font-size: 0.85rem;
  color: var(--text-secondary);
}

:global(.comment-content) {
  color: var(--text-primary);
  line-height: 1.7;
}

:global(.comment-form) {
  margin-top: 2rem;
}

:global(.comment-form textarea) {
  width: 100%;
  padding: 1rem;
  background: var(--darker);
  border: 1px solid var(--light-gray);
  border-radius: var(--border-radius);
  color: var(--text-primary);
  margin-bottom: 1rem;
  min-height: 150px;
}

:global(.comment-form button) {
  background: var(--primary);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: var(--transition);
}

:global(.comment-form button:hover) {
  background: var(--primary-dark);
}

/* Content Formatting Improvements */
.content :global(img[alt]) {
  margin: 2rem 0;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-md);
}

.content :global(img + em) {
  display: block;
  text-align: center;
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-top: -1.5rem;
  margin-bottom: 2rem;
}

.content :global(ul),
.content :global(ol) {
  margin: 1.5rem 0;
  padding-left: 2rem;
}

.content :global(li) {
  margin-bottom: 0.75rem;
  color: var(--text-primary);
  position: relative;
}

.content :global(ul li)::before {
  content: "•";
  color: var(--primary);
  font-weight: bold;
  display: inline-block;
  width: 1em;
  margin-left: -1em;
}

.content :global(ol) {
  counter-reset: item;
}

.content :global(ol li) {
  counter-increment: item;
}

.content :global(ol li)::before {
  content: counter(item) ".";
  color: var(--primary);
  font-weight: bold;
  display: inline-block;
  width: 1em;
  margin-left: -1.5em;
  margin-right: 0.5em;
  text-align: right;
}

.content :global(blockquote) {
  border-left: 4px solid var(--primary);
  padding: 1.5rem;
  margin: 2rem 0;
  background: rgba(156, 122, 255, 0.05);
  border-radius: 0 var(--border-radius) var(--border-radius) 0;
  font-style: italic;
  color: var(--text-secondary);
}

.content :global(hr) {
  border: none;
  height: 1px;
  background: var(--light-gray);
  margin: 2.5rem 0;
}









  /* Article footer */
  .article-footer {
    padding: 2rem 3rem;
    background: var(--darker);
    border-top: 1px solid var(--light-gray);
  }
  
  .author-card {
    display: flex;
    gap: 1.5rem;
    padding: 1.5rem;
    background: var(--dark-gray);
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-sm);
  }
  
  .author-details h4 {
    margin-bottom: 0.5rem;
    color: var(--text-primary);
  }
  
  .author-details p {
    color: var(--text-secondary);
    font-size: 0.95rem;
    margin-bottom: 1rem;
  }
  
  .author-website {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--primary);
    text-decoration: none;
    font-size: 0.9rem;
    transition: var(--transition);
  }
  
  .author-website:hover {
    color: var(--accent);
    text-decoration: underline;
  }
  
  .author-website svg {
    width: 16px;
    height: 16px;
  }
  
  /* Responsive styles */
  @media (max-width: 1024px) {
    .content-container {
      flex-direction: column;
    }
    
    .sidebar {
      position: static;
      flex: 0 0 auto;
    }
    
    .toc {
      margin-bottom: 1rem;
    }
  }


  @media (max-width: 768px) {
  .meta-details {
    gap: 0.75rem;
    font-size: 0.9rem;
  }
  
  .author-avatar.small {
    width: 18px;
    height: 18px;
  }
}


  
  @media (max-width: 768px) {
    .article-header {
      padding: 2rem 1.5rem 1rem;
    }
    
    h1 {
      font-size: 2rem;
    }
    
    .content-container {
      padding: 1.5rem;
    }
    
    .article-footer {
      padding: 1.5rem;
    }
    
    .article-meta {
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
    }
    
    .meta-details {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;
    }
    
    .author-card {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  }
</style>