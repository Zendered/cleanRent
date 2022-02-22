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
        name: 'my name',
        description: 'my description',
      })
      .expect(201);
  });
});
