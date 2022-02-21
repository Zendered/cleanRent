import { CreateCategoryController } from '@/web-controllers';
import { CreateCategory } from '@/usecases/create-category/create-category';
import { InMemoryCategoryRepository } from '@/usecases/create-category/repository/inMemory-category-repository';

export const makeCategoryController = (): CreateCategoryController => {
  const inMemoryCategoryRepository = new InMemoryCategoryRepository([]);
  const createCategoryUseCase = new CreateCategory(inMemoryCategoryRepository);
  const createCategoryController = new CreateCategoryController(createCategoryUseCase);
  return createCategoryController;
};
