import { Category } from '@/entities/category';

describe('category validation', () => {
  test('should not accept null strings', () => {
    const category = null;
    expect(Category.validate(category)).toBeFalsy();
  });

  test('should only accept 100 char', () => {
    const category = 'c'.repeat(101);
    expect(Category.validate(category)).toBeFalsy();
  });

  test('should only accept valid chars', () => {
    const category = 'category;';
    expect(Category.validate(category)).toBeFalsy();
  });
});
