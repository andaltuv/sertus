import { Router } from 'express';
import { userLogin } from '../controllers/Login.controller';

const router = Router();

router.post('/', userLogin);

export default router;