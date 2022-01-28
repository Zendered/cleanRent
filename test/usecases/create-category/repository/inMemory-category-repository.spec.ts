import { ICategoryData } from '@/usecases/create-category';
import { InMemoryCategoryRepository } from '@/usecases/create-category/repository/inMemory-category-repository';
import { ICategoryRepository } from '@/usecases/ports/category-repository';

describe('In memory repository', () => {
  const categories: ICategoryData[] = [];
  const categoryRepo: ICategoryRepository = new InMemoryCategoryRepository(categories);
  // const usecase: CreateCategory = new CreateCategory(repo);
  test('should return null if category is not found', async () => {
    const category = await categoryRepo.findCategoryById('my id');
    expect(category).toBeNull();
  });
});
