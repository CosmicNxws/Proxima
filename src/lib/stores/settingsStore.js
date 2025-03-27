import { writable } from 'svelte/store';
import { supabase } from '../utils/supabaseClient.js';

export const settings = writable({});

export const fetchSettings = async (userId) => {
  const { data, error } = await supabase.from('settings').select('*').eq('user_id', userId);
  if (error) throw error;
  settings.set(data[0]);
};

export const updateSettings = async (userId, newSettings) => {
  const { data, error } = await supabase
    .from('settings')
    .update(newSettings)
    .eq('user_id', userId);
  if (error) throw error;
  settings.set(newSettings);
};