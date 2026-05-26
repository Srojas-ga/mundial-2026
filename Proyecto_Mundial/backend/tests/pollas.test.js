// tests/pollas.test.js
const request = require('supertest');

jest.mock('../src/config/env', () => ({
  jwt: { secret: 'test_secret', expiresIn: '1h' },
  db: { host: 'localhost', port: 3306, user: 'test', password: 'test', database: 'test_db' },
  port: 3000,
  nodeEnv: 'test',
}));

jest.mock('../src/config/db', () => ({
  execute: jest.fn(),
  getConnection: jest.fn(),
}));

jest.mock('../src/config/logger', () => ({
  info: jest.fn(),
  warn: jest.fn(),
  error: jest.fn(),
  debug: jest.fn(),
  add: jest.fn(),
}));

jest.mock('../src/jobs/sync-partidos.job', () => ({
  startSyncJob: jest.fn(),
}));

const app = require('../src/app');

describe('Pollas Endpoints', () => {
  it('debería rechazar acceso sin token', async () => {
    const res = await request(app).get('/api/pollas');
    expect(res.statusCode).toBe(401);
  });

  it('debería rechazar crear polla sin token', async () => {
    const res = await request(app)
      .post('/api/pollas')
      .send({ nombre: 'Test Polla' });
    expect(res.statusCode).toBe(401);
  });

  it('debería rechazar unirse sin token', async () => {
    const res = await request(app)
      .post('/api/pollas/unirse')
      .send({ codigo: 'ABC123' });
    expect(res.statusCode).toBe(401);
  });
});