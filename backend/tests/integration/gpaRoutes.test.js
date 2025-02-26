// tests/integration/gpaRoutes.test.js
const request = require('supertest');
const app = require('../../server'); // Ensure server.js exports the Express app

describe('GPA Routes', () => {
  test('POST /api/gpa/calculate returns correct GPA result', async () => {
    const response = await request(app)
      .post('/api/gpa/calculate')
      .send({ grades: ['A', 'B', 'C'], credits: [3, 3, 4] })
      .expect(200);

    expect(response.body.gpa).toBeCloseTo(2.9, 1);
    expect(response.body.eligibleForScholarship).toBe(false);
    expect(response.body.message).toMatch(/below/);
  });

  test('POST /api/gpa/calculate returns an error on invalid input', async () => {
    const response = await request(app)
      .post('/api/gpa/calculate')
      .send({ grades: ['A', 'B'], credits: [3] })
      .expect(500);

    expect(response.body.message).toBeDefined();
  });
});
