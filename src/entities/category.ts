import { ICategoryData } from '@/entities/';

export class Category {
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
