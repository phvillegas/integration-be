import { createClient } from '@supabase/supabase-js';
import { config } from '@config/env';

if (!config.supabase.url || !config.supabase.key) {
  throw new Error('❌ Missing Supabase credentials. set SUPABASE_URL and SUPABASE_KEY in .env');
}

export const supabase = createClient(config.supabase.url, config.supabase.key);
