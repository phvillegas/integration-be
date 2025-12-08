import { Router } from 'express';
import healthRoutes from '@routes/health.routes';
import protectedRoutes from '@routes/protected.routes';
import userRoutes from '@routes/users.routes';

const router = Router();

router.use('/health', healthRoutes);
router.use('/auth', protectedRoutes);
router.use('/users', userRoutes);

export default router;
