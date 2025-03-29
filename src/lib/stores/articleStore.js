import { writable } from 'svelte/store';
import { supabase } from '../utils/supabaseClient.js';

export const user = writable(null);
export const articles = writable([]); // Add articles store if not existing

// Authentication functions
export const login = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) throw error;
  user.set(data.user);
};

export const logout = async () => {
  await supabase.auth.signOut();
  user.set(null);
};

// Add these new voting functions
export const upvoteArticle = async (articleId) => {
  const { data, error } = await supabase
    .from('articles')
    .update({ upvotes: supabase.rpc('increment') })
    .eq('id', articleId);
  
  if (error) throw error;
  return data;
};

export const downvoteArticle = async (articleId) => {
  const { data, error } = await supabase
    .from('articles')
    .update({ downvotes: supabase.rpc('increment') })
    .eq('id', articleId);
    
  if (error) throw error;
  return data;
};