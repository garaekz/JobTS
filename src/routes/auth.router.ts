import { Request, Response, Router, NextFunction } from 'express';
import { validator } from '../middlewares/validator.handler';
import { ItemsService } from '../services/items.service';
import { create } from '../schemas/item.schema';

const router = Router();
const service = new ItemsService;

router.post('/register', async (req: Request, res: Response, next: NextFunction) => {
  console.log('register');
  return res.json({response: 'register'});
  // try {
  //   const items = await service.all();
  //   return items;
  // } catch (error) {
  //   next(error);
  // }
});

export default router;