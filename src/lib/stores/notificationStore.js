import { writable } from 'svelte/store';
import { supabase } from '../utils/supabaseClient.js';

export const notifications = writable([]);

export const fetchNotifications = async (userId) => {
  const { data, error } = await supabase.from('notifications').select('*').eq('user_id', userId);
  if (error) throw error;
  notifications.set(data);
};