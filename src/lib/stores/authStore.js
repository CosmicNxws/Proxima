import { writable } from 'svelte/store';
import { supabase } from '../utils/supabaseClient.js';

// User store for authentication
export const user = writable(null);

// Article store for managing articles
export const articles = writable([]);

// Sign-up function
export const signUp = async (email, password) => {
  const { data, error } = await supabase.auth.signUp({ email, password });
  if (error) throw error;
  user.set(data.user);
};

// Login function
export const login = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) throw error;
  user.set(data.user);
};

// Logout function
export const logout = async () => {
  await supabase.auth.signOut();
  user.set(null);
};

// Fetch articles from Supabase
export const fetchArticles = async () => {
  const { data, error } = await supabase.from('articles').select('*');
  if (error) throw error;
  articles.set(data);
};

// Upvote an article
export const upvoteArticle = async (articleId) => {
  const { data, error } = await supabase.rpc('increment_upvotes', { article_id: articleId });
  if (error) throw error;
  articles.update((articles) =>
    articles.map((article) =>
      article.id === articleId ? { ...article, upvotes: article.upvotes + 1 } : article
    )
  );
};

// Downvote an article
export const downvoteArticle = async (articleId) => {
  const { data, error } = await supabase.rpc('decrement_upvotes', { article_id: articleId });
  if (error) throw error;
  articles.update((articles) =>
    articles.map((article) =>
      article.id === articleId ? { ...article, downvotes: article.downvotes + 1 } : article
    )
  );
};