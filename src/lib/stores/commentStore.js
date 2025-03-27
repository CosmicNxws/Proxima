import { writable } from 'svelte/store';
import { supabase } from '../utils/supabaseClient.js';

export const comments = writable([]);

export const fetchComments = async (articleId) => {
  const { data, error } = await supabase.from('comments').select('*').eq('article_id', articleId);
  if (error) throw error;
  comments.set(data);
};

export const addComment = async (articleId, text) => {
  const { data, error } = await supabase.from('comments').insert([{ article_id: articleId, text }]);
  if (error) throw error;
  comments.update((comments) => [data[0], ...comments]);
};