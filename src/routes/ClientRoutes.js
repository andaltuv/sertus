import { Router } from 'express';
import { createClient, getAllClients, getClientById, editClient, deleteClient} from '../controllers/Client.controller';
import { jwtAuth } from '../middleware';

const router = Router();

router.post('/', [jwtAuth.verifyToken], createClient);
router.get('/', [jwtAuth.verifyToken], getAllClients);
router.get('/id', [jwtAuth.verifyToken], getClientById);
router.put('/', [jwtAuth.verifyToken], editClient);
router.delete('/', [jwtAuth.verifyToken], deleteClient);

export default router;
