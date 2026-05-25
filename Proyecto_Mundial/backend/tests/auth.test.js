// tests/auth.test.js
const request = require('supertest');

// Mock dependencies before requiring app
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
const pool = require('../src/config/db');

describe('Auth Endpoints', () => {
  afterEach(() => jest.clearAllMocks());

  describe('POST /api/auth/register', () => {
    it('debería rechazar si faltan campos requeridos', async () => {
      const res = await request(app)
        .post('/api/auth/register')
        .send({ email: 'test@test.com' });

      expect(res.statusCode).toBe(400);
      expect(res.body.success).toBe(false);
    });

    it('debería rechazar email inválido', async () => {
      const res = await request(app)
        .post('/api/auth/register')
        .send({ nombre: 'Test', email: 'invalid', password: '12345678' });

      expect(res.statusCode).toBe(400);
    });

    it('debería rechazar contraseña corta', async () => {
      const res = await request(app)
        .post('/api/auth/register')
        .send({ nombre: 'Test', email: 'test@test.com', password: '123' });

      expect(res.statusCode).toBe(400);
    });
  });

  describe('POST /api/auth/login', () => {
    it('debería rechazar si faltan campos', async () => {
      const res = await request(app)
        .post('/api/auth/login')
        .send({});

      expect(res.statusCode).toBe(400);
    });
  });

  describe('GET /api/health', () => {
    it('debería responder correctamente', async () => {
      const res = await request(app).get('/api/health');
      expect(res.statusCode).toBe(200);
      expect(res.body.success).toBe(true);
    });
  });

  describe('Rutas protegidas', () => {
    it('debería rechazar sin token', async () => {
      const res = await request(app).get('/api/partidos');
      expect(res.statusCode).toBe(401);
    });

    it('debería rechazar con token inválido', async () => {
      const res = await request(app)
        .get('/api/partidos')
        .set('Authorization', 'Bearer invalid-token');
      expect(res.statusCode).toBe(401);
    });
  });
});
