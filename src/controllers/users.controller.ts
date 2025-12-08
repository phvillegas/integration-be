import type { Request, Response } from 'express';
import { userService } from '@services/users.service';
import { logger } from '@utils/logger';

export const getUsers = async (_req: Request, res: Response): Promise<void> => {
  try {
    const users = await userService.findAll();
    res.json(users);
  } catch (error) {
    logger.error({ err: error }, 'Failed to fetch users');
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const getUserById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const userId = parseInt(id);

    if (isNaN(userId)) {
      res.status(400).json({ message: 'Invalid user ID' });
      return;
    }

    const user = await userService.findById(userId);

    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    res.json(user);
  } catch (error) {
    logger.error({ err: error }, 'Failed to fetch user');
    res.status(500).json({ message: 'Internal server error' });
  }
};
