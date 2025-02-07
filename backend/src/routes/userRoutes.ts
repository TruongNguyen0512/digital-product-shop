import { Router } from 'express';
import { userController } from '../controllers/userController';
import { registerValidator } from '../middleware/validators/userValidator';

const router = Router();

router.post('/register', registerValidator, userController.register);

export default router;
