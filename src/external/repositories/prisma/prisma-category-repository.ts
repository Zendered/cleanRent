import { PrismaClient } from '@prisma/client';
import { ICategoryDTO } from '@/entities';
import { ICategoryRepository } from '@/usecases/create-category/ports/category-repository';

export class PrismaCategoryRepository implements ICategoryRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async add(category: ICategoryDTO): Promise<void> {
    await this.prisma.category.create({
      data: {
        id: category.id,
        name: category.name,
        description: category.description,
        created_at: category.created_at,
      },
    });
  }
  async findCategoryById(id: string): Promise<ICategoryDTO> {
    const categoryId = await this.prisma.category.findFirst({
      where: {
        id,
      },
    });
    return categoryId;
  }
  async findAllCategories(): Promise<ICategoryDTO[]> {
    const allCategories = await this.prisma.category.findMany();
    return allCategories;
  }
  async exists(category:ICategoryDTO): Promise<boolean> {
    const result = await this.findCategoryById(category.id);
    if (result !== null) {
      return true;
    }
    return false;
  }
}
