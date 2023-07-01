import { Router } from 'express';
import { GeneratorRoutes } from '../modules/generator/generator.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/generator',
    route: GeneratorRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
