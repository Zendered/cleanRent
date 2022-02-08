import { Name } from '@/entities/category-name';
import { ICategoryDTO } from '@/entities/';

describe('Category validation', () => {
  test('should not accept null category description', () => {
    const category: ICategoryDTO = {
      id: null,
      name: null,
      description: null,
      created_at: null,
    };
    expect(Name.validate(category.description)).toBeFalsy();
  });

  test('should not accept null category name', () => {
    const category: ICategoryDTO = {
      id: null,
      name: null,
      description: null,
      created_at: null,
    };
    expect(Name.validate(category.name)).toBeFalsy();
  });

  test('should only accept name with 100 char', () => {
    const category: ICategoryDTO = {
      id: 'my id',
      name: 'my name'.repeat(101),
      description: 'my description',
      created_at: new Date(),
    };
    expect(Name.validate(category.name)).toBeFalsy();
  });

  test('should only accept description with 225 char', () => {
    const category: ICategoryDTO = {
      id: 'my id',
      name: 'my name',
      description: 'my description'.repeat(226),
      created_at: new Date(),
    };
    expect(Name.validate(category.description)).toBeFalsy();
  });
});
