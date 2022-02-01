import { Category } from '@/entities/category';
import { ICategoryData } from '@/entities/';

describe('Category validation', () => {
  test('should not accept null category', () => {
    const category: ICategoryData = {
      id: null,
      name: null,
      description: null,
      created_at: null,
    };
    expect(Category.validate(category)).toBeFalsy();
  });

  test('should only accept name with 100 char', () => {
    const category: ICategoryData = {
      id: 'my id',
      name: 'my name'.repeat(101),
      description: 'my description',
      created_at: new Date(),
    };
    expect(Category.validate(category)).toBeFalsy();
  });

  test('should only accept description with 200 char', () => {
    const category: ICategoryData = {
      id: 'my id',
      name: 'my name',
      description: 'my description'.repeat(101),
      created_at: new Date(),
    };
    expect(Category.validate(category)).toBeFalsy();
  });
});
