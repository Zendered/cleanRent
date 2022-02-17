import { ICategoryDTO } from '@/entities';
import { CreateCategory } from '@/usecases/create-category/create-category';
import { IHttpRequest, IHttpResponse } from './ports';
import { created } from './util';

export class CreateCategoryController {
  constructor(private readonly usecase: CreateCategory) {}

  // eslint-disable-next-line consistent-return
  async handle(request: IHttpRequest): Promise<IHttpResponse> {
    const categoryData: ICategoryDTO = request.body;
    const response = await this.usecase.perform(categoryData);

    if (response.isRight()) {
      return created(response.value);
    }
  }
}
