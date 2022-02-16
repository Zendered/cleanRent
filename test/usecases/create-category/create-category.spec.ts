import { ICategoryDTO } from '@/entities';
import { ICategoryRepository } from '@/usecases/ports/category-repository';
import { InMemoryCategoryRepository } from '@/usecases/create-category/repository/inMemory-category-repository';
import { CreateCategory } from '@/usecases/create-category/create-category';
import { left } from '@/shared';
import { InvalidDescriptionError, InvalidNameError } from '@/entities/errors';

describe('Create category use case', () => {
  const categories: ICategoryDTO[] = [];
  const repo: ICategoryRepository = new InMemoryCategoryRepository(categories);
  const usecase: CreateCategory = new CreateCategory(repo);
  test('Should create a category with valid data', async () => {
    const response = await usecase.perform({
      id: 'my id',
      name: 'my name',
      description: 'my description',
      created_at: new Date(),
    });
    const category = await repo.findCategoryById('my id');
    expect(category.name).toBe('my name');
    expect(response.value.name).toBe('my name');
  });

  test('Should not create category with invalid description', async () => {
    const response = await usecase.perform({
      id: 'my id 01',
      name: 'my name',
      description: 'm     ',
    });
    const category = await repo.findCategoryById('my id 01');
    expect(category).toBeNull();
    expect(response).toEqual(left(new InvalidDescriptionError()));
  });

  test('Should not create category with invalid name', async () => {
    const response = await usecase.perform({
      id: 'my id 02',
      name: 'N'.repeat(101),
      description: 'my description',
    });
    const category = await repo.findCategoryById('my id 02');
    expect(category).toBeNull();
    expect(response).toEqual(left(new InvalidNameError()));
  });
});
