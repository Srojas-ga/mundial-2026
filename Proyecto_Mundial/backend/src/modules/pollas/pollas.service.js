// src/modules/pollas/pollas.service.js
const { v4: uuidv4 } = require('uuid');
const pool = require('../../config/db');
const pollasRepo = require('./pollas.repository');

class PollasService {
  async getAll() {
    const rows = await pollasRepo.findAll();
    return rows.map(r => ({
      id: r.polla_id.toString(),
      name: r.nombre,
      code: r.codigo_invitacion,
      description: r.descripcion,
      estado: r.estado,
      createdAt: r.fecha_creacion,
    }));
  }

  async create(data, usuarioId) {
    const codigoInvitacion = this._generateCode();
    const pollaId = await pollasRepo.create({
      ...data,
      codigo_invitacion: codigoInvitacion,
      creador_id: usuarioId,
    });

    // Auto-join creator
    await pollasRepo.joinPolla(pollaId, usuarioId);

    // Log
    await pool.execute(
      `INSERT INTO LOG (tipo_evento, descripcion, usuario_id, correlacion_id, fecha)
       VALUES ('creacion_polla', ?, ?, ?, NOW())`,
      [`Polla creada: ${data.nombre}`, usuarioId, uuidv4()]
    );

    return { id: pollaId.toString(), code: codigoInvitacion };
  }

  async join(codigo, usuarioId) {
    const [pollas] = await pool.execute(
      'SELECT * FROM POLLA WHERE codigo_invitacion = ?',
      [codigo]
    );
    if (pollas.length === 0) {
      const error = new Error('Código de polla inválido');
      error.statusCode = 404;
      throw error;
    }

    const polla = pollas[0];
    const existing = await pollasRepo.findParticipacion(polla.polla_id, usuarioId);
    if (existing) {
      const error = new Error('Ya eres miembro de esta polla');
      error.statusCode = 409;
      throw error;
    }

    await pollasRepo.joinPolla(polla.polla_id, usuarioId);
    return { pollaId: polla.polla_id.toString(), name: polla.nombre };
  }

  async getRanking(pollaId) {
    const rows = await pollasRepo.getRanking(pollaId);
    return rows.map(r => ({
      userId: r.usuario_id.toString(),
      userName: r.nombre,
      totalPoints: r.puntos_total,
      position: r.posicion,
      avatar: r.avatar || '👤',
    }));
  }

  async savePronostico(pollaId, usuarioId, pronosticos) {
    const participacion = await pollasRepo.findParticipacion(pollaId, usuarioId);
    if (!participacion) {
      const error = new Error('No eres miembro de esta polla');
      error.statusCode = 403;
      throw error;
    }

    const correlacionId = uuidv4();
    for (const pron of pronosticos) {
      await pollasRepo.savePronostico(
        participacion.participacion_id,
        pron.partido_id,
        pron.goles_local,
        pron.goles_visitante
      );
    }

    // Log
    await pool.execute(
      `INSERT INTO LOG (tipo_evento, descripcion, usuario_id, correlacion_id, fecha)
       VALUES ('pronostico_registrado', ?, ?, ?, NOW())`,
      [`Pronósticos registrados en polla ${pollaId}`, usuarioId, correlacionId]
    );

    return { saved: pronosticos.length };
  }

  _generateCode() {
    return Math.random().toString(36).substring(2, 10).toUpperCase();
  }
}

module.exports = new PollasService();
