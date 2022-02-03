import { Either, left } from '@/shared/';
import { Category } from '.';
import { ICarData } from './car-data';
import { InvalidCategoryError } from './errors';

export class Car {
  // eslint-disable-next-line consistent-return
  static create(car:ICarData):Either<InvalidCategoryError, Car > {
    const categoryOrError = Category.create({
      id: car.id,
      name: car.name,
      description: car.description,
      created_at: car.created_at,
    });

    if (categoryOrError.isLeft()) {
      return left(new InvalidCategoryError());
    }
  }
}
