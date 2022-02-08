import { Either, left, right } from '@/shared';
import { InvalidNameError } from './errors';

export class Name {
  private constructor(public readonly name: string) {}

  static create(name:string): Either<InvalidNameError, Name> {
    if (Name.validate(name)) {
      return right(new Name(name));
    }

    return left(new InvalidNameError());
  }

  static validate(name:string): boolean {
    if (!name) {
      return false;
    }

    if (name.trim().length > 100 || name.trim().length < 3) {
      return false;
    }

    return true;
  }
}
