import { Either, left, right } from '@/shared';
import { InvalidDescriptionError } from './errors';

export class Description {
  private constructor(readonly description: string) {}

  public static create(description:string): Either<InvalidDescriptionError, Description> {
    if (Description.validate(description)) {
      return right(new Description(description));
    }

    return left(new InvalidDescriptionError());
  }

  static validate(description:string): boolean {
    if (!description) {
      return false;
    }

    if (description.length > 225) {
      return false;
    }

    return true;
  }
}
