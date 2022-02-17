import { IHttpResponse } from '../ports';

export const created = (data:any): IHttpResponse => ({
  statusCode: 201,
  body: data,
});

export const badRequest = (data:any): IHttpResponse => ({
  statusCode: 400,
  body: data,
});
