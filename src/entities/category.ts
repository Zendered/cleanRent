import { Either, left } from '@/shared/';
import { Name, ICategoryDTO } from '.';
import { Description } from './category-description';
import { InvalidNameError } from './errors';
import { InvalidDescriptionError } from './errors/invalid-description-error';

export class Category {
  private constructor(private readonly name: Name, private readonly description:Description) {}
  // eslint-disable-next-line consistent-return
  static create(category:ICategoryDTO):Either<InvalidNameError | InvalidDescriptionError, Name > {
    const nameOrError = Name.create(category.name);
    if (nameOrError.isLeft()) {
      return left(new InvalidNameError());
    }

    const descriptionOrError = Description.create(category.description);
    if (descriptionOrError.isLeft()) {
      return left(new InvalidDescriptionError());
    }
  }
}
