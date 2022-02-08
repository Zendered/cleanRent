import { Either, left, right } from '@/shared';
import { InvalidNameError } from './errors';

export class Description {
  private constructor(readonly description: string) {}

  public static create(description:string): Either<InvalidNameError, Description> {
    if (Description.validate(description)) {
      return right(new Description(description));
    }

    return left(new InvalidNameError());
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
