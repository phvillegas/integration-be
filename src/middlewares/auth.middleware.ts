import { Request, Response, NextFunction } from 'express';
import { supabase } from '@config/supabase';
import { logger } from '@utils/logger';

export const requireAuth = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader?.startsWith('Bearer ')) {
      res.status(401).json({ message: 'Authorization header missing or invalid' });

      return;
    }

    const token = authHeader.split(' ')[1];
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser(token);

    if (error || !user) {
      logger.warn({ error: error?.message }, 'Authentication failed');
      res.status(401).json({ message: 'Invalid or expired token' });

      return;
    }

    req.user = user;
    next();
  } catch (error) {
    logger.error({ err: error }, 'Unexpected auth error');
    res.status(500).json({ message: 'Internal server error' });
  }
};
