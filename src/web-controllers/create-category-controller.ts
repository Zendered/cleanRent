import { ICategoryDTO } from '@/entities';
import { CreateCategory } from '@/usecases/create-category/create-category';
import { MissingParamError } from './errors/missing-params-error';
import { IHttpRequest, IHttpResponse } from './ports';
import { badRequest, created } from './util';

export class CreateCategoryController {
  constructor(private readonly usecase: CreateCategory) {}

  // eslint-disable-next-line consistent-return
  async handle(request: IHttpRequest): Promise<IHttpResponse> {
    if (!request.body.name || !request.body.description) {
      let missingParam = !request.body.name ? 'name ' : '';
      missingParam += !request.body.description ? 'description' : '';
      return badRequest(new MissingParamError(missingParam.trim()));
    }

    const categoryData: ICategoryDTO = request.body;
    const response = await this.usecase.perform(categoryData);

    if (response.isRight()) {
      return created(response.value);
    }

    if (response.isLeft()) {
      return badRequest(response.value);
    }
  }
}
