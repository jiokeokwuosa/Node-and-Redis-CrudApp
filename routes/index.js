import { Router } from 'express';
import userRouter from './users.route';
import exerciseRouter from './exercises.route';

const router = Router();

router.use('/users', userRouter);
router.use('/exercises', exerciseRouter);


export default router;