import { ICategoryDTO } from '@/entities';
import { CreateCategory } from '@/usecases/create-category/create-category';
import { InMemoryCategoryRepository } from '@/usecases/create-category/repository/inMemory-category-repository';
import { ICategoryRepository } from '@/usecases/ports/category-repository';
import { CreateCategoryController } from '@/web-controllers/create-category-controller';
import { IHttpRequest, IHttpResponse } from '@/web-controllers/ports';

describe('Create category web controller', () => {
  const categories: ICategoryDTO[] = [];
  const repo: ICategoryRepository = new InMemoryCategoryRepository(categories);
  const usecase: CreateCategory = new CreateCategory(repo);
  test('Should return 201 when request contains valid category data', async () => {
    const request: IHttpRequest = {
      body: {
        id: 'my id',
        name: 'my name',
        description: 'my description',
        created_at: new Date(),
      },
    };
    const controller: CreateCategoryController = new CreateCategoryController(usecase);
    const response: IHttpResponse = await controller.handle(request);
    expect(response.statusCode).toEqual(201);
    expect(response.body).toEqual(request.body);
  });

  test('Should return 201 when request contains valid category data', async () => {
    const request: IHttpRequest = {
      body: {
        id: 'my id',
        name: 'my name',
        description: 'my description',
        created_at: new Date(),
      },
    };
    const controller: CreateCategoryController = new CreateCategoryController(usecase);
    const response: IHttpResponse = await controller.handle(request);
    expect(response.statusCode).toEqual(201);
    expect(response.body).toEqual(request.body);
  });
});
