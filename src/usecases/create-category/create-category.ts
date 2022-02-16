import { Category, ICategoryDTO } from '@/entities';
import { InvalidDescriptionError, InvalidNameError } from '@/entities/errors';
import { Either, left, right } from '@/shared';
import { ICategoryRepository } from '../ports/category-repository';

export class CreateCategory {
  constructor(private readonly categoryRepo: ICategoryRepository) {
  }

  async perform(request: ICategoryDTO): Promise<Either<InvalidNameError | InvalidDescriptionError, ICategoryDTO>> {
    const categoryOrError: Either<InvalidNameError | InvalidDescriptionError, Category> = Category.create(request);
    if (categoryOrError.isLeft()) {
      return left(categoryOrError.value);
    }

    const categoryExists = await this.categoryRepo.exists(request);

    if (!categoryExists) {
      await this.categoryRepo.add(request);
    }
    return right(request);
  }
}
