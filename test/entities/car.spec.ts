import { Car } from '@/entities';
import { InvalidCategoryError } from '@/entities/errors/';
import { left } from '@/shared/';

describe('Car entity', () => {
  test('should not create Car with invalid data', () => {
    const car = {
      id: 'my id',
      name: 'my name'.repeat(201),
      description: 'my description',
      daily_rate: 2,
      available: true,
      license_plate: 'abc777',
      fine_amount: 250,
      brand: 'marca',
      category_id: 'my category id',
      created_at: new Date(),
    };
    const error = Car.create(car);
    expect(error).toEqual(left(new InvalidCategoryError()));
  });
});
