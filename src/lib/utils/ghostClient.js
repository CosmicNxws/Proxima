import GhostContentAPI from '@tryghost/content-api';

// Initialize API client with proper configuration
const ghost = new GhostContentAPI({
  url: 'https://cosmic-nxws.ghost.io',
  key: 'b9bda32fdf7e722dbbf64f0f8d',
  version: 'v5.0'
});

/**
 * Fetch all posts with proper author handling
 */
export const fetchPosts = async () => {
  try {
    const posts = await ghost.posts.browse({
      limit: 15,
      include: ['authors', 'tags', 'primary_author'],
      fields: ['title', 'slug', 'feature_image', 'excerpt', 'published_at', 'custom_excerpt'],
      order: 'published_at DESC'
    });

    // Normalize author data structure
    return posts.map(post => ({
      ...post,
      authors: post.authors || (post.primary_author ? [post.primary_author] : []),
      reading_time: post.reading_time || calculateReadingTime(post.html)
    }));
    
  } catch (error) {
    console.error('Failed to fetch posts:', error);
    return [];
  }
};

/**
 * Fetch single article with robust error handling
 */
export const fetchArticle = async (slug) => {
  if (!slug) {
    console.error('No slug provided for article fetch');
    return null;
  }

  try {
    // First try with the SDK
    const article = await ghost.posts.read({
      slug,
      include: ['authors', 'tags', 'primary_author'],
      formats: ['html']
    });

    // Ensure we have author data
    if (!article.authors && article.primary_author) {
      article.authors = [article.primary_author];
    } else if (!article.authors?.length) {
      article.authors = [createDefaultAuthor()];
    }

    // Calculate reading time if missing
    if (!article.reading_time) {
      article.reading_time = calculateReadingTime(article.html);
    }

    return article;

  } catch (error) {
    console.error(`Primary fetch failed for ${slug}:`, error);
    
    // Fallback to direct API call
    try {
      const response = await fetch(
        `https://cosmic-nxws.ghost.io/ghost/api/content/posts/slug/${slug}/` + 
        `?key=b9bda32fdf7e722dbbf64f0f8d&include=authors,tags`
      );
      
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      
      const data = await response.json();
      const article = data.posts?.[0];
      
      if (!article) throw new Error('Article not found in response');
      
      // Normalize author data
      article.authors = article.authors || 
                       (article.primary_author ? [article.primary_author] : [createDefaultAuthor()]);
      
      return article;
      
    } catch (fallbackError) {
      console.error(`Fallback failed for ${slug}:`, fallbackError);
      return createErrorArticle(slug);
    }
  }
};

// Helper function to calculate reading time
function calculateReadingTime(html) {
  if (!html) return 1;
  const wordCount = html.split(/\s+/).length;
  return Math.max(1, Math.ceil(wordCount / 200));
}

// Creates a default author object
function createDefaultAuthor() {
  return {
    name: 'Staff Writer',
    profile_image: null,
    bio: '',
    website: ''
  };
}

// Creates an error state article
function createErrorArticle(slug) {
  return {
    title: `Error loading: ${slug}`,
    html: '<p>We apologize, but this article could not be loaded.</p>',
    authors: [createDefaultAuthor()],
    reading_time: 1,
    feature_image: null,
    published_at: new Date().toISOString()
  };
}

/**
 * Test API connection
 */
export const testConnection = async () => {
  try {
    const response = await fetch(
      'https://cosmic-nxws.ghost.io/ghost/api/content/posts/' +
      '?key=b9bda32fdf7e722dbbf64f0f8d&limit=1'
    );
    
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    
    const data = await response.json();
    return {
      success: true,
      version: response.headers.get('x-ghost-version') || 'unknown',
      postsCount: data.posts?.length || 0
    };
    
  } catch (error) {
    console.error('Connection test failed:', error);
    return {
      success: false,
      error: error.message
    };
  }
};