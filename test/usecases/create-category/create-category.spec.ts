// eslint-disable-next-line import/no-unresolved
import { ICategoryData } from '@src/usecases/create-category/category-data';

describe('Create category use case', () => {
  const categories: ICategoryData[] = [];
  //   const repo: CategoryRepository = new CategoryRepositoryInMemory(categories);
  //   const usecase: CreateCategory = new CreateCategory(repo);
  test('should create a category', async () => {
    console.log(categories);
  });
//     const id = 'my id';
//     const name = 'my name';
//     const description = 'my description';
//     // const created_at = new Date();
//     const response = await usecase.createCategory({ name, description });
//     const category = await repo.findCategoryById('meu id');
//     expect(category.name).toBe('my name');
//   });
});
