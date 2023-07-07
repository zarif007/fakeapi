import { Router } from 'express';
import { UserController } from './user.controller';

const router = Router();

router.get('/:id', UserController.getSingleUser);
router.post('/', UserController.createUser);
router.delete('/:id');
router.patch('/:id', UserController.updateUser);

export const UserRoutes = router;
