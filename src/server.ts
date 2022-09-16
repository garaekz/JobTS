import express, { Application, Request, Response, Router, NextFunction } from "express";
import apiRouter from "routes";
import cors from 'cors';
import { boomError } from './middlewares/error.handler';

const createServer = () => {
  const app: Application = express();
  const router = Router();

  app.use(express.json());

  // Health check
  app.get('/', (req: Request, res: Response) => {
    res.json({response: '⚡ This API is running'});
  });

  // API routes
  app.use(cors());
  app.use('/api/v1', apiRouter);
  app.use(boomError);
  
  return app;
}

export default createServer;