import { PrismaClient } from '@prisma/client';
import { PrismaCategoryRepository } from '@/external/repositories/prisma/prisma-category-repository';
import { ICategoryDTO } from '@/entities';

describe('Prisma Category repository', () => {
  let prisma: PrismaClient;

  beforeAll(() => {
    prisma = new PrismaClient();
  });

  beforeEach(async () => {
    await prisma.category.deleteMany({});
  });

  test('should find a existing category', async () => {
    const categoryRepository = new PrismaCategoryRepository(prisma);
    const category: ICategoryDTO = {
      name: 'my name',
      description: 'my description',
    };
    expect(categoryRepository.exists(category)).toBeTruthy();
  });

  test('should find all existing categories ', async () => {
    const categoryRepository = new PrismaCategoryRepository(prisma);
    await categoryRepository.add({
      name: 'my name01',
      description: 'my description01',
    });

    await categoryRepository.add({
      name: 'my name02',
      description: 'my description02',
    });

    const result = await categoryRepository.findAllCategories();
    expect(result[0].name).toBe('my name01');
    expect(result[0].description).toBe('my description01');
    expect(result[1].name).toBe('my name02');
    expect(result[1].description).toBe('my description02');
  });
});
