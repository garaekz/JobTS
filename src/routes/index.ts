import { Router } from 'express';
import auth from './auth.router';
import items from './items.router';

const router = Router();
router.use('/auth', auth)
router.use('/items', items);

export default router;