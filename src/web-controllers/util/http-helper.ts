import { IHttpResponse } from '../ports';

export const created = (data:any): IHttpResponse => ({
  statusCode: 201,
  body: data,
});
