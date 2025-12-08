import dotenv from 'dotenv';
import { logger } from '@utils/logger';

dotenv.config();

export const config = {
  port: process.env.PORT || 3000,
  supabase: {
    url: process.env.SUPABASE_URL || '',
    key: process.env.SUPABASE_KEY || '',
  },
  db: {
    url: process.env.DATABASE_URL || '',
  },
};

if (!config.supabase.url || !config.supabase.key || !config.db.url) {
  logger.warn('⚠️  Credentials missing (Supabase or DB). Check your .env file.');
}
