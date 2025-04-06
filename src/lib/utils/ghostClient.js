import GhostContentAPI from '@tryghost/content-api';

// Initialize API client with your credentials
const api = new GhostContentAPI({
  url: 'https://proxima-report.ghost.io',
  key: 'b9bda32fdf7e722dbbf64f0f8d',
  version: 'v5.0'
});

/**
 * Fetch posts with pagination support
 * @param {Object} [options] - Fetch options
 * @param {number} [options.page=1] - Page number
 * @param {number} [options.limit=15] - Posts per page
 * @param {string} [options.filter] - Ghost filter string
 * @returns {Promise<{posts: Array, meta: Object}>}
 */
export const fetchPosts = async (options = {}) => {
  const defaultOptions = {
    limit: 15,
    page: 1,
    include: ['authors', 'tags'],
    fields: ['title', 'slug', 'feature_image', 'excerpt', 'published_at', 'custom_excerpt', 'html'],
    order: 'published_at DESC',
    filter: 'status:published'
  };

  const finalOptions = { ...defaultOptions, ...options };

  try {
    const posts = await api.posts.browse(finalOptions);
    
    return {
      posts: posts.map(post => ({
        ...post,
        // Normalize author data
        authors: post.authors || (post.primary_author ? [post.primary_author] : []),
        // Calculate reading time if missing
        reading_time: post.reading_time || calculateReadingTime(post.html || '')
      })),
      meta: posts.meta || {
        pagination: {
          page: finalOptions.page,
          limit: finalOptions.limit,
          pages: Math.ceil(posts.length / finalOptions.limit),
          total: posts.length,
          next: posts.length === finalOptions.limit ? finalOptions.page + 1 : null,
          prev: finalOptions.page > 1 ? finalOptions.page - 1 : null
        }
      }
    };
  } catch (error) {
    console.error('Ghost API Error:', error);
    return {
      posts: [],
      meta: {
        pagination: {
          page: finalOptions.page,
          limit: finalOptions.limit,
          pages: 0,
          total: 0,
          next: null,
          prev: null
        }
      }
    };
  }
};

/**
 * Fetch single article with complete data
 * @param {string} slug - Post slug
 * @returns {Promise<Object|null>}
 */
export const fetchArticle = async (slug) => {
  if (!slug) {
    console.error('No slug provided for article fetch');
    return null;
  }

  try {
    const post = await api.posts.read({
      slug,
      include: ['authors', 'tags'],
      formats: ['html']
    });

    return {
      ...post,
      authors: post.authors || (post.primary_author ? [post.primary_author] : []),
      reading_time: post.reading_time || calculateReadingTime(post.html || '')
    };
  } catch (error) {
    console.error(`Failed to fetch article ${slug}:`, error);
    return null;
  }
};

/**
 * Test API connection
 * @returns {Promise<{success: boolean, version?: string, error?: string}>}
 */
export const testConnection = async () => {
  try {
    const response = await api.posts.browse({ limit: 1 });
    return {
      success: true,
      version: 'v5.0' // Ghost API version
    };
  } catch (error) {
    console.error('Connection test failed:', error);
    return {
      success: false,
      error: error.message
    };
  }
};

// Helper function to calculate reading time
function calculateReadingTime(html) {
  if (!html) return 1;
  const text = html.replace(/<[^>]*>/g, ' '); // Strip HTML tags
  const wordCount = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(wordCount / 200)); // 200 words per minute
}