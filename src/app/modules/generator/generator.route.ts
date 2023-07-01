import { Router } from 'express';

const router = Router();

router.get('/');
router.get('/:id');
router.post('/:id');
router.delete('/:id');
router.patch('/:id');

export const GeneratorRoutes = router;
