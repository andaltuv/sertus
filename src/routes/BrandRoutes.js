import { Router } from 'express';
import { createBrand, allBrands, editBrand, deleteBrand } from '../controllers/Brand.controller';

const router = Router();

router.post('/', createBrand);
router.get('/', allBrands);
router.put('/', editBrand);
router.delete('/', deleteBrand);

export default router;