import { ICategoryRepository } from '@/usecases/ports/category-repository';
import { ICategoryData } from '../category-data';

export class InMemoryCategoryRepository implements ICategoryRepository {
  private repository:ICategoryData[];

  constructor(repository: ICategoryData[]) {
    this.repository = repository;
  }

  async add(category: ICategoryData): Promise<void> {
    const exists = await this.exists(category);
    if (!exists) {
      this.repository.push(category);
    }
  }

  async findCategoryById(id: string): Promise<ICategoryData> {
    const category = await this.repository.filter((category) => category.id === id);
    if (category.length > 0) {
      return category[0];
    }
    return null;
  }

  async findAllCategories(): Promise<ICategoryData[]> {
    throw new Error('Method not implemented.');
  }

  async exists(category: ICategoryData): Promise<boolean> {
    if (await this.findCategoryById(category.id) === null) {
      return false;
    }
    return true;
  }
}
