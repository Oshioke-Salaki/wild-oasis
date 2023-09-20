import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://eqncnaztuvbiuppjmyjj.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVxbmNuYXp0dXZiaXVwcGpteWpqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUwNTQ5MjEsImV4cCI6MjAxMDYzMDkyMX0.1JPNQhqI5moCzZz3E04bwDKzohkoujFQU6wfyaDhHEk';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
