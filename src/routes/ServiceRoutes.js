import { Router } from 'express';
import { jwtAuth } from '../middleware';

import { createService, getAllServices, getServiceById, getServiceByClientId, editService, deleteService } from '../controllers/Service.controller';

const router = Router();

router.post('/', [jwtAuth.verifyToken] ,createService);
router.get('/', [jwtAuth.verifyToken], getAllServices);
router.get('/id', [jwtAuth.verifyToken], getServiceById);
router.get('/client', [jwtAuth.verifyToken],getServiceByClientId);
router.put('/', [jwtAuth.verifyToken], editService);
router.delete('/', [jwtAuth.verifyToken], deleteService);

export default router;