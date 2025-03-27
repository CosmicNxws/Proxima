import { writable } from 'svelte/store';
import { supabase } from '../utils/supabaseClient.js';

export const bookmarks = writable([]);

export const fetchBookmarks = async (userId) => {
  const { data, error } = await supabase.from('bookmarks').select('*').eq('user_id', userId);
  if (error) throw error;
  bookmarks.set(data);
};

export const toggleBookmark = async (articleId) => {
  const { data, error } = await supabase.rpc('toggle_bookmark', { article_id: articleId });
  if (error) throw error;
  bookmarks.update((bookmarks) =>
    bookmarks.includes(articleId)
      ? bookmarks.filter((id) => id !== articleId)
      : [...bookmarks, articleId]
  );
};