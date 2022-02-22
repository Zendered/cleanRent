import { Either, left, right } from '@/shared/';
import { Name, ICategoryDTO } from '.';
import { Description } from './category-description';
import { InvalidNameError } from './errors';
import { InvalidDescriptionError } from './errors/invalid-description-error';

export class Category {
  readonly id: string;
  readonly name: Name;
  readonly description:Description;
  readonly created_at: Date;

  private constructor({
    id, name, description, created_at,
  }:{ id: string, name:Name, description: Description, created_at: Date}) {
    this.id = id ?? 'my id';
    this.name = name;
    this.description = description;
    this.created_at = created_at ?? new Date();
  }
  // eslint-disable-next-line consistent-return
  static create(category:ICategoryDTO):Either<InvalidNameError | InvalidDescriptionError, Category> {
    const nameOrError = Name.create(category.name);
    if (nameOrError.isLeft()) {
      return left(new InvalidNameError(category.name));
    }

    const descriptionOrError = Description.create(category.description);
    if (descriptionOrError.isLeft()) {
      return left(new InvalidDescriptionError(category.description));
    }

    const id: string = 'my id';
    const name: Name = nameOrError.value as Name;
    const description: Description = descriptionOrError.value as Description;
    const created_at = new Date();

    return right(new Category({
      id, name, description, created_at,
    }));
  }
}
