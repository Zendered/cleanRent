import { Request, Response } from 'express';
import { CreateCategoryController } from '@/web-controllers/';
import { IHttpRequest } from '@/web-controllers/ports';

export const adaptRoute = (controller: CreateCategoryController) => async (req:Request, res:Response) => {
  const httpRequest: IHttpRequest = {
    body: req.body,
  };
  const httpResponse = await controller.handle(httpRequest);
  res.status(httpResponse.statusCode).json(httpResponse.body);
};
