import { Router, Request, Response } from 'express';
import { requireAuth } from '@middlewares/auth.middleware';

const router = Router();

router.get('/me', requireAuth, (req: Request, res: Response) => {
  res.status(200).json({
    message: 'Access granted/access conceded',
    user: {
      id: req.user?.id,
      email: req.user?.email,
      role: req.user?.role,
    },
  });
});

export default router;
