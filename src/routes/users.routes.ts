import { Router } from 'express';
import { getUsers, getUserById } from '@controllers/users.controller';
import { requireAuth } from '@middlewares/auth.middleware';

const router = Router();

// Apply auth middleware to all routes
router.use(requireAuth);

router.get('/', getUsers);
router.get('/:id', getUserById);

export default router;
