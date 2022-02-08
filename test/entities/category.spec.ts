import { Category } from '@/entities';
import { InvalidNameError, InvalidDescriptionError } from '@/entities/errors/';
import { left } from '@/shared/';

describe('Category entity', () => {
  test('should not create category with invalid name', () => {
    const category = {
      id: 'my id',
      name: 'my name'.repeat(101),
      description: 'my description',
      created_at: new Date(),
    };
    const error = Category.create(category);
    expect(error).toEqual(left(new InvalidNameError()));
  });

  test('should not create Category with invalid description', () => {
    const category = {
      id: 'my id',
      name: 'my name',
      description: 'my description'.repeat(201),
      created_at: new Date(),
    };
    const error = Category.create(category);
    expect(error).toEqual(left(new InvalidDescriptionError()));
  });
});
