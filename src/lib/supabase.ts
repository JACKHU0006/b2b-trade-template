import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

export interface User {
  id: string;
  email: string;
  company?: string;
  role?: 'guest' | 'member' | 'agent' | 'admin';
}

export async function signUp(email: string, password: string, company?: string) {
  if (!supabase) {
    console.warn('Supabase not configured');
    return { user: null, error: 'Supabase not configured' };
  }
  
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        company,
      },
    },
  });
  
  return { user: data.user, error };
}

export async function signIn(email: string, password: string) {
  if (!supabase) {
    console.warn('Supabase not configured');
    return { user: null, error: 'Supabase not configured' };
  }
  
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  
  return { user: data.user, error };
}

export async function signOut() {
  if (!supabase) {
    console.warn('Supabase not configured');
    return { error: 'Supabase not configured' };
  }
  
  const { error } = await supabase.auth.signOut();
  return { error };
}

export async function getCurrentUser() {
  if (!supabase) {
    return null;
  }
  
  const { data: { user } } = await supabase.auth.getUser();
  return user;
}

export function isAuthenticated(): boolean {
  return !!supabase;
}

export function hasAccess(level: 'guest' | 'member' | 'agent' | 'admin' = 'guest'): boolean {
  return true;
}
