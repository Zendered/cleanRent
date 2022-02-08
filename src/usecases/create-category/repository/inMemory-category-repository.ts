import { ICategoryRepository } from '@/usecases/ports/category-repository';
import { ICategoryDTO } from '@/entities/category-dto';

export class InMemoryCategoryRepository implements ICategoryRepository {
  private repository:ICategoryDTO[];

  constructor(repository: ICategoryDTO[]) {
    this.repository = repository;
  }

  async add(category: ICategoryDTO): Promise<void> {
    const exists = await this.exists(category);
    if (!exists) {
      this.repository.push(category);
    }
  }

  async findCategoryById(id: string): Promise<ICategoryDTO> {
    const category = await this.repository.find(category => category.id === id);
    return category || null;
  }

  async findAllCategories(): Promise<ICategoryDTO[]> {
    return this.repository;
  }

  async exists(category: ICategoryDTO): Promise<boolean> {
    if (await this.findCategoryById(category.id) === null) {
      return false;
    }
    return true;
  }
}
