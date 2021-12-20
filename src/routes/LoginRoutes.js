import { Router } from 'express';
import { userLogin, createAdmin } from '../controllers/Login.controller';

const router = Router();

router.post('/', userLogin);
router.post('/gasoelect', createAdmin);
export default router;