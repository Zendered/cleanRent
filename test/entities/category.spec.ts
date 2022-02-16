import { Category, ICategoryDTO } from '@/entities';

describe('Category entity', () => {
  test('should not create category if name has more than 100 chars', () => {
    const invalidCategory: ICategoryDTO = {
      id: 'my id',
      name: 'N'.repeat(101),
      description: 'my description',
      created_at: new Date(),
    };
    const error = Category.create(invalidCategory).value as Error;
    expect(error.name).toEqual('InvalidNameError');
    expect(error.message).toEqual(`Invalid name: ${invalidCategory.name}.`);
  });

  test('should not create Category if description has more than 225 chars', () => {
    const invalidCategory: ICategoryDTO = {
      id: 'my id',
      name: 'my name',
      description: 'D'.repeat(226),
      created_at: new Date(),
    };
    const error = Category.create(invalidCategory).value as Error;
    expect(error.name).toEqual('InvalidDescriptionError');
    expect(error.message).toEqual(`Invalid description: ${invalidCategory.description}.`);
  });

  test('should not create Category if description has less then 5 chars', () => {
    const invalidCategory: ICategoryDTO = {
      id: 'my id',
      name: 'my name',
      description: 'D       ',
      created_at: new Date(),
    };
    const error = Category.create(invalidCategory).value as Error;
    expect(error.name).toEqual('InvalidDescriptionError');
    expect(error.message).toEqual(`Invalid description: ${invalidCategory.description}.`);
  });

  test('should not create Category if name has less than 3 chars', () => {
    const invalidCategory: ICategoryDTO = {
      id: 'my id',
      name: 'N      ',
      description: 'my description',
      created_at: new Date(),
    };
    const error = Category.create(invalidCategory).value as Error;
    expect(error.name).toEqual('InvalidNameError');
    expect(error.message).toEqual(`Invalid name: ${invalidCategory.name}.`);
  });

  test('should create Category with valid data', () => {
    const validCategory: ICategoryDTO = {
      name: 'my name',
      description: 'my description',
    };
    const newCategory: Category = Category.create(validCategory).value as Category;
    expect(newCategory.id).toEqual('my id');
    expect(newCategory.name.name).toEqual(validCategory.name);
    expect(newCategory.description.description).toEqual(validCategory.description);
  });
});
