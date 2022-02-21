import request from 'supertest';
import app from '@/main/config/app';

describe('Register route', () => {
  test('should return an category on success', async () => {
    app.post('/test_cors', (req, res) => {
      res.send();
    });
    await request(app)
      .post('/api/create_category')
      .send({
        id: 'my id',
        name: 'my name',
        description: 'my description',
        created_at: new Date(),
      })
      .expect(201);
  });
});
