<script>
    import { onMount } from 'svelte';
    import { supabase } from '../../../lib/utils/supabaseClient.js';
    import { user } from '../../../lib/stores/authStore.js';
    import { goto } from '$app/navigation';
  
    onMount(async () => {
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        console.error(error);
        goto('/auth/login');
      } else {
        user.set(data.session.user);
        goto('/');
      }
    });
  </script>
  
  <div>Loading...</div>