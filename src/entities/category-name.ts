import { Either, left, right } from '@/shared';
import { InvalidNameError } from './errors';

export class Name {
  private constructor(readonly name: string) {}

  public static create(name:string): Either<InvalidNameError, Name> {
    if (Name.validate(name)) {
      return right(new Name(name));
    }

    return left(new InvalidNameError());
  }

  static validate(name:string): boolean {
    if (!name) {
      return false;
    }

    if (name.length > 100) {
      return false;
    }

    return true;
  }
}
