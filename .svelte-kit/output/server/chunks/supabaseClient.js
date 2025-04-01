import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://pmcdelwmwztzlonqvcfu.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBtY2RlbHdtd3p0emxvbnF2Y2Z1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI2Njg3NzcsImV4cCI6MjA1ODI0NDc3N30.ET5TC6NthEgWAXVUTjPfYwkOSE9oLqPyoGr0l-S2Kzk";
createClient(supabaseUrl, supabaseKey, {
  db: {
    schema: "public"
  },
  auth: {
    persistSession: false
  },
  global: {
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Accept-Profile": "public",
      "Content-Profile": "public"
    }
  }
});
