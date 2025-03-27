import { writable } from 'svelte/store';
import { supabase } from '../utils/supabaseClient.js';

export const user = writable(null);

export const login = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) throw error;
  user.set(data.user);
};

export const logout = async () => {
  await supabase.auth.signOut();
  user.set(null);
};