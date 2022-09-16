import logger from 'config/logger';
import { Request, Response, Router, NextFunction } from 'express';
// import { validator } from '../middlewares/validator.handler';
import { ItemsService } from '../services/items.service';
// import { create } from '../schemas/item.schema';

const router = Router();
const service = new ItemsService;

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    logger.info('GET /items');
    const items = await service.all();
    return res.json(items);
  } catch (error) {
    logger.error(error);
    next(error);
  }
});

// router.get('/:id', async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const item = await service.get(id);
//     res.json({ status: 'success', data: item });
//   } catch (error) {
//     next(error);
//   }
// });

// router.post('/', validator(create, 'body'), async (req, res, next) => {
//   try {
//     const { body } = req;
//     const item = await service.create(body);
//     res.status(201).json({ status: 'created', data: item });
//   } catch (error) {
//     res.json(error);
//   }
// });

// router.patch('/:id', async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const { body } = req;
//     const item = await service.update(id, body);
//     res.json({ status: 'updated', data: item });
//   } catch (error) {
//     next(error);
//   }
// });

// router.delete('/:id', async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const item = await service.delete(id);
//     res.json({ status: 'deleted', data: item });
//   } catch (error) {
//     next(error);
//   }
// });

export default router;