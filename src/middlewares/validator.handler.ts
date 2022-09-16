import { NextFunction, Request, Response } from 'express';
import { Boom, badRequest } from '@hapi/boom';
import { ObjectSchema } from '@hapi/joi';

export const validator = (schema: ObjectSchema, property: string ) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req[property as keyof typeof req], { abortEarly: false });
    if (error) {
      return next(badRequest(error.message));
    }
    next();
  };
}