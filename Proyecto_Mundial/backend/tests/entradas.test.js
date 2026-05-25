// tests/entradas.test.js
const request = require('supertest');

jest.mock('../src/config/db', () => ({
  execute: jest.fn(),
  getConnection: jest.fn(),
}));

jest.mock('../src/config/logger', () => ({
  info: jest.fn(), warn: jest.fn(), error: jest.fn(), debug: jest.fn(), add: jest.fn(),
}));

jest.mock('../src/jobs/sync-partidos.job', () => ({
  startSyncJob: jest.fn(),
}));

const app = require('../src/app');

describe('Entradas Endpoints', () => {
  it('debería rechazar acceso sin token', async () => {
    const res = await request(app).get('/api/entradas');
    expect(res.statusCode).toBe(401);
  });

  it('debería rechazar reserva sin token', async () => {
    const res = await request(app).post('/api/entradas/1/reservar');
    expect(res.statusCode).toBe(401);
  });

  it('debería rechazar transferencia sin email', async () => {
    const res = await request(app)
      .post('/api/entradas/1/transferir')
      .send({});
    expect(res.statusCode).toBe(401);
  });

  it('debería rechazar 404 para rutas inexistentes', async () => {
    const res = await request(app).get('/api/ruta-inexistente');
    expect(res.statusCode).toBe(404);
    expect(res.body.success).toBe(false);
  });
});
