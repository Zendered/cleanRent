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
});
