import { Router } from 'express';
import { makeCategoryController } from '@/main/factories/';
import { adaptRoute } from '../adapters';

export default (router: Router): void => {
  router.post('/register', adaptRoute(makeCategoryController()));
};
