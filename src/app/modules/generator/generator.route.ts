import { Router } from 'express';
import { GeneratorController } from './generator.controller';

const router = Router();

router.get('/', GeneratorController.getGenerators);
router.get('/:id', GeneratorController.getSingleGenerator);
router.post('/', GeneratorController.createGenerator);
router.delete('/:id');
router.patch('/:id', GeneratorController.updateGenerator);

export const GeneratorRoutes = router;
