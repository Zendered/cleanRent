import { ICategoryData } from '@/entities/';
import { Either, left, right } from '@/shared';
import { InvalidCategoryError } from './errors';

export class Category {
  private readonly id: string;
  private readonly name: string;
  private readonly description: string;
  private readonly created_at: Date;

  constructor({
    id, name, description, created_at,
  }:ICategoryData) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.created_at = created_at;
  }

  static create({
    id, name, description, created_at,
  }:ICategoryData): Either<InvalidCategoryError, Category> {
    if (Category.validate({
      id, name, description, created_at,
    })) {
      return right(new Category({
        id, name, description, created_at,
      }));
    }

    return left(new InvalidCategoryError());
  }

  static validate({
    id, name, description, created_at,
  }:ICategoryData): boolean {
    if (!id || !name || !description || !created_at) {
      return false;
    }

    if (name.length > 100 || description.length > 200) {
      return false;
    }

    return true;
  }
}
