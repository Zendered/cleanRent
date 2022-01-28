import { ICategoryRepository } from '@/usecases/ports/category-repository';
import { ICategoryData } from '../category-data';

export class InMemoryCategoryRepository implements ICategoryRepository {
  private readonly repository:ICategoryData[];

  constructor(repository: ICategoryData[]) {
    this.repository = repository;
  }

  async add(category: ICategoryData): Promise<void> {
    throw new Error('Method not implemented.');
  }

  async findCategoryById(id: string): Promise<ICategoryData> {
    return null;
  }

  async findAllCategories(): Promise<ICategoryData[]> {
    throw new Error('Method not implemented.');
  }

  async exists(category: ICategoryData): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}
