import GhostContentAPI from '@tryghost/content-api';

// Initialize API client
const api = new GhostContentAPI({
  url: 'https://cosmic-nxws.ghost.io',
  key: 'b9bda32fdf7e722dbbf64f0f8d',
  version: 'v5.0'
});

/**
 * Fetch all posts with authors and tags
 */
export const fetchPosts = async () => {
  try {
    return await api.posts.browse({
      limit: 15,
      include: ['authors', 'tags'],
      fields: [
        'title',
        'slug',
        'feature_image',
        'excerpt',
        'published_at',
        'custom_excerpt',
        'reading_time'
      ],
      order: 'published_at DESC',
      formats: ['html']
    });
  } catch (error) {
    console.error('Failed to fetch posts:', error);
    
    // Fallback to direct API call
    try {
      const url = new URL('https://cosmic-nxws.ghost.io/ghost/api/content/posts/');
      url.searchParams.append('key', 'b9bda32fdf7e722dbbf64f0f8d');
      url.searchParams.append('include', 'authors,tags');
      url.searchParams.append('limit', '15');
      
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      
      const data = await response.json();
      return data.posts || [];
    } catch (fallbackError) {
      console.error('Fallback posts fetch failed:', fallbackError);
      return [];
    }
  }
};

/**
 * Fetch single article with complete data
 */
export const fetchArticle = async (slug) => {
  if (!slug) {
    console.error('No slug provided for article fetch');
    return null;
  }

  try {
    // Primary method using SDK
    const article = await api.posts.read({
      slug,
      include: ['authors', 'tags'],
      formats: ['html'],
      fields: [
        'title',
        'html',
        'feature_image',
        'feature_image_caption',
        'published_at',
        'excerpt',
        'reading_time',
        'meta_description',
        'custom_excerpt',
        'twitter_embed',
        'youtube_embed'
      ]
    });

    // Debug log to verify authors
    console.log('Fetched article authors:', article.authors);
    
    return article;
  } catch (error) {
    console.error(`Failed to fetch article ${slug}:`, error);
    
    // Comprehensive fallback
    try {
      const url = new URL(`https://cosmic-nxws.ghost.io/ghost/api/content/posts/slug/${slug}/`);
      url.searchParams.append('key', 'b9bda32fdf7e722dbbf64f0f8d');
      url.searchParams.append('include', 'authors,tags');
      url.searchParams.append('formats', 'html');
      
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      
      const data = await response.json();
      const article = data.posts?.[0];
      
      if (!article) {
        console.error('Article not found in fallback response');
        return null;
      }
      
      // Calculate reading time if missing
      if (!article.reading_time && article.html) {
        const wordCount = article.html.split(/\s+/).length;
        article.reading_time = Math.ceil(wordCount / 200);
      }
      
      return article;
    } catch (fallbackError) {
      console.error('Complete article fetch failure:', fallbackError);
      return null;
    }
  }
};

/**
 * Test API connection
 */
export const testConnection = async () => {
  try {
    const test = await api.posts.browse({
      limit: 1,
      fields: ['id']
    });
    return test.length > 0;
  } catch (error) {
    console.error('API connection test failed:', error);
    return false;
  }
};