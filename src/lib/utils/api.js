import { supabase } from './supabaseClient';

export const fetchUser = async (userId) => {
  // Validate UUID format
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  if (!uuidRegex.test(userId)) {
    throw new Error('Invalid user ID format');
  }

  try {
    const { data, error } = await supabase
      .from('users')
      .select('id, email, username, avatar_url, created_at')
      .eq('id', userId)
      .single();

    if (error) {
      console.error('Supabase Error Details:', {
        code: error.code,
        message: error.message,
        details: error.details
      });
      
      if (error.code === 'PGRST116') {
        throw new Error('User not found');
      }
      throw new Error('Database error occurred');
    }

    return data;
  } catch (error) {
    console.error('Full fetchUser Error:', {
      error,
      userId,
      timestamp: new Date().toISOString()
    });
    throw error;
  }
};