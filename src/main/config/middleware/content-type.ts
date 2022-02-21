import { Request, Response, NextFunction } from 'express';
import app from '../app';

export const contentType = (req:Request, res:Response, next:NextFunction): void => {
  res.type('json');
  next();
};
