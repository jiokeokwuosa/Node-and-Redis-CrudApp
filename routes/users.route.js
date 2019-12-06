import { Router } from 'express';
import UserController from './../controllers/user.controller';

const router = Router();

router.get( '/', UserController.getAllUsers);
router.post( '/add', UserController.createUser);


export default router;