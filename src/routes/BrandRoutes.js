import { Router } from 'express';
import { createBrand, allBrands, editBrand, deleteBrand } from '../controllers/Brand.controller';
import { jwtAuth } from '../middleware';

const router = Router();

router.post('/', [jwtAuth.verifyToken], createBrand);
router.get('/', [jwtAuth.verifyToken], allBrands);
router.put('/', [jwtAuth.verifyToken], editBrand);
router.delete('/', [jwtAuth.verifyToken], deleteBrand);

export default router;