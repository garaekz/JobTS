import { NextFunction, Request, Response } from 'express';
import { Boom, badRequest } from '@hapi/boom';
import { ObjectSchema } from '@hapi/joi';

export const boomError = (err: any, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Boom) {
    return res.status(err.output.statusCode).json(err.output.payload);
  }
  next(err);
}