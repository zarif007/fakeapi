import { Router } from 'express';
import { GeneratorController } from './generator.controller';

const router = Router();

router.get('/', GeneratorController.getGenerators);
router.get('/:id', GeneratorController.getSingleGenerator);
router.post('/:id');
router.delete('/:id');
router.patch('/:id');

export const GeneratorRoutes = router;
