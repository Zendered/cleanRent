import { Category } from '@/entities';
import { InvalidNameError, InvalidDescriptionError } from '@/entities/errors/';
import { left } from '@/shared/';

describe('Category entity', () => {
  test('should not create category if name has more than 100 chars', () => {
    const category = {
      id: 'my id',
      name: 'N'.repeat(101),
      description: 'my description',
      created_at: new Date(),
    };
    const error = Category.create(category);
    expect(error).toEqual(left(new InvalidNameError()));
  });

  test('should not create Category if description has more than 225 chars', () => {
    const category = {
      id: 'my id',
      name: 'my name',
      description: 'D'.repeat(226),
      created_at: new Date(),
    };
    const error = Category.create(category);
    expect(error).toEqual(left(new InvalidDescriptionError()));
  });

  test('should not create Category if description has less then 5 chars', () => {
    const category = {
      id: 'my id',
      name: 'my name',
      description: 'D       ',
      created_at: new Date(),
    };
    const error = Category.create(category);
    expect(error).toEqual(left(new InvalidDescriptionError()));
  });

  test('should not create Category if name has less than 3 chars', () => {
    const category = {
      id: 'my id',
      name: 'N      ',
      description: 'my description',
      created_at: new Date(),
    };
    const error = Category.create(category);
    expect(error).toEqual(left(new InvalidDescriptionError()));
  });
});
