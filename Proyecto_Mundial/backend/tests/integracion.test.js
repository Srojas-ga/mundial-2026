// tests/integracion.test.js
const request = require('supertest');

jest.mock('../src/config/env', () => ({
  jwt: { secret: 'test_secret', expiresIn: '1h' },
  db: { host: 'localhost', port: 3306, user: 'test', password: 'test', database: 'test_db' },
  port: 3000,
  nodeEnv: 'test',
}));

const mockExecute = jest.fn();

jest.mock('../src/config/db', () => ({
  execute: mockExecute,
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

jest.mock('bcrypt', () => ({
  hash: jest.fn().mockResolvedValue('hashed_password'),
  compare: jest.fn().mockResolvedValue(true),
}));

jest.mock('jsonwebtoken', () => ({
  sign: jest.fn().mockReturnValue('mock_token'),
  verify: jest.fn().mockReturnValue({ usuario_id: 1, email: 'test@test.com', tipo: 'aficionado' }),
}));

jest.mock('../src/modules/partidos/partidos.repository', () => ({
  findAll: jest.fn(),
  findById: jest.fn(),
  findEventos: jest.fn(),
}));

const app = require('../src/app');
const partidosRepo = require('../src/modules/partidos/partidos.repository');

describe('Pruebas de Integración', () => {
  afterEach(() => jest.clearAllMocks());

  describe('Flujo de Autenticación', () => {
    it('debería registrar un usuario nuevo exitosamente', async () => {
      mockExecute
        .mockResolvedValueOnce([[]])
        .mockResolvedValueOnce([{ insertId: 1 }])
        .mockResolvedValueOnce([{}])
        .mockResolvedValueOnce([{}])
        .mockResolvedValueOnce([{}])
        .mockResolvedValueOnce([{}]);

      const res = await request(app)
        .post('/api/auth/register')
        .send({
          nombre: 'Usuario Test',
          email: 'nuevo@test.com',
          password: 'password123'
        });

      expect(res.statusCode).toBe(201);
      expect(res.body.success).toBe(true);
    });

    it('debería rechazar registro con email duplicado', async () => {
      mockExecute.mockResolvedValueOnce([[{ usuario_id: 1, email: 'existe@test.com' }]]);

      const res = await request(app)
        .post('/api/auth/register')
        .send({
          nombre: 'Usuario Test',
          email: 'existe@test.com',
          password: 'password123'
        });

      expect(res.statusCode).toBe(409);
      expect(res.body.success).toBe(false);
    });

    it('debería iniciar sesión exitosamente', async () => {
      mockExecute
        .mockResolvedValueOnce([[{
          usuario_id: 1,
          email: 'test@test.com',
          password_hash: 'hashed_password',
          nombre: 'Test',
          tipo: 'aficionado',
          estado: 'activo',
          intentos_fallidos: 0,
          ultimo_intento_fallido: null,
          avatar: null
        }]])
        .mockResolvedValueOnce([{}])
        .mockResolvedValueOnce([[]])
        .mockResolvedValueOnce([[]])
        .mockResolvedValueOnce([{}]);

      const res = await request(app)
        .post('/api/auth/login')
        .send({
          email: 'test@test.com',
          password: 'password123'
        });

      expect(res.statusCode).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data).toHaveProperty('token');
    });

    it('debería rechazar login con usuario inexistente', async () => {
      mockExecute
        .mockResolvedValueOnce([[]])
        .mockResolvedValueOnce([{}]);

      const res = await request(app)
        .post('/api/auth/login')
        .send({
          email: 'noexiste@test.com',
          password: 'password123'
        });

      expect(res.statusCode).toBe(401);
      expect(res.body.success).toBe(false);
    });
  });

  describe('Flujo de Partidos', () => {
    it('debería retornar lista de partidos con token válido', async () => {
      partidosRepo.findAll.mockResolvedValueOnce([
        {
          partido_id: 1,
          local_id: 1, local_nombre: 'Colombia', local_bandera: '🇨🇴', local_grupo: 'A', local_ranking: 10,
          visit_id: 2, visit_nombre: 'Brasil', visit_bandera: '🇧🇷', visit_grupo: 'A', visit_ranking: 5,
          fecha: '2026-06-15', hora: '18:00', estadio_nombre: 'MetLife', estadio_ciudad: 'Nueva York',
          fase: 'Grupos', estado: 'programado', goles_local: null, goles_visitante: null, provisional: 0
        }
      ]);

      const res = await request(app)
        .get('/api/partidos')
        .set('Authorization', 'Bearer mock_token');

      expect(res.statusCode).toBe(200);
      expect(res.body.success).toBe(true);
    });
  });

  describe('Trazabilidad de Eventos', () => {
    it('debería rechazar acceso no autorizado y registrar warning', async () => {
      const res = await request(app).get('/api/pollas');
      expect(res.statusCode).toBe(401);
    });

    it('debería retornar 404 para rutas inexistentes', async () => {
      const res = await request(app).get('/api/ruta-que-no-existe');
      expect(res.statusCode).toBe(404);
    });
  });
});