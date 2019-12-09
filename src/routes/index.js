import { Router } from 'express';
import exerciseRouter from './exercises.route';

const router = Router();


router.use('/exercises', exerciseRouter);


export default router;