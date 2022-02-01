import { ICategoryRepository } from '@/usecases/ports/category-repository';
import { ICategoryData } from '@/entities/category-data';

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
    const category = await this.repository.find(category => category.id === id);
    return category || null;
  }

  async findAllCategories(): Promise<ICategoryData[]> {
    return this.repository;
  }

  async exists(category: ICategoryData): Promise<boolean> {
    if (await this.findCategoryById(category.id) === null) {
      return false;
    }
    return true;
  }
}
