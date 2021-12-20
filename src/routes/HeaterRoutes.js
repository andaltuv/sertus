import { Router } from 'express';
import { createHeater, getAllHeaters, getHeaterById, deleteHeater } from '../controllers/Heater.controller';
import { jwtAuth } from '../middleware';

const router = Router();

router.post('/', [jwtAuth.verifyToken] ,createHeater);
router.get('/', [jwtAuth.verifyToken], getAllHeaters);
router.get('/id', [jwtAuth.verifyToken], getHeaterById);
router.delete('/', [jwtAuth.verifyToken], deleteHeater);
export default router;