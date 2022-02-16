import { Either, left, right } from '@/shared/';
import { Name, ICategoryDTO } from '.';
import { Description } from './category-description';
import { InvalidNameError } from './errors';
import { InvalidDescriptionError } from './errors/invalid-description-error';

export class Category {
  readonly id: string = 'my id';
  readonly name: Name;
  readonly description:Description;
  readonly created_at: Date = new Date();

  private constructor({
    name, description,
  }:{name:Name, description: Description}) {
    this.name = name;
    this.description = description;
  }
  // eslint-disable-next-line consistent-return
  static create(category:ICategoryDTO):Either<InvalidNameError | InvalidDescriptionError, Category> {
    const nameOrError = Name.create(category.name);
    if (nameOrError.isLeft()) {
      return left(new InvalidNameError());
    }

    const descriptionOrError = Description.create(category.description);
    if (descriptionOrError.isLeft()) {
      return left(new InvalidDescriptionError());
    }

    const name: Name = nameOrError.value as Name;
    const description: Description = descriptionOrError.value as Description;

    return right(new Category({ name, description }));
  }
}
