import { ICategoryData } from '@/usecases/create-category';
import { InMemoryCategoryRepository } from '@/usecases/create-category/repository/inMemory-category-repository';
import { ICategoryRepository } from '@/usecases/ports/category-repository';

describe('In memory repository', () => {
  const categories: ICategoryData[] = [];
  const categoryRepo: ICategoryRepository = new InMemoryCategoryRepository(categories);
  test('should return null if category is not found', async () => {
    const category = await categoryRepo.findCategoryById('my id');
    expect(category).toBeNull();
  });

  test('should return a existent category', async () => {
    const category:ICategoryData = {
      id: 'my id',
      name: 'my name',
      description: 'my description',
      created_at: new Date(),
    };
    await categoryRepo.add(category);
    const result = await categoryRepo.findCategoryById('my id');
    expect(result.name).toBe('my name');
  });

  test('should find all categories', async () => {
    const firstUser = {
      id: 'my id',
      name: 'my name',
      description: 'my description',
      created_at: new Date(),
    };
    const secondUser = {
      id: 'my id2',
      name: 'my name2',
      description: 'my description2',
      created_at: new Date(),
    };
    const categories: ICategoryData[] = [firstUser, secondUser];
    const categoryRepo = new InMemoryCategoryRepository(categories);

    const returnedCategory = await categoryRepo.findAllCategories();
    expect(returnedCategory.length).toBe(2);
  });
});
