import { ICategoryDTO } from '@/entities';
import { IUseCase } from '@/usecases/ports';
import { MissingParamError } from './errors/missing-params-error';
import { IHttpRequest, IHttpResponse } from './ports';
import { badRequest, created, serverError } from './util';

export class CreateCategoryController {
  constructor(private readonly usecase: IUseCase) {}

  // eslint-disable-next-line consistent-return
  async handle(request: IHttpRequest): Promise<IHttpResponse> {
    try {
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
    } catch (error) {
      return serverError(error);
    }
  }
}
