// src/modules/soporte/soporte.service.js
const { v4: uuidv4 } = require('uuid');
const pool = require('../../config/db');
const soporteRepo = require('./soporte.repository');

class SoporteService {
  async getByUsuario(usuarioId) {
    const rows = await soporteRepo.findByUsuario(usuarioId);
    return rows.map(r => ({
      id: r.solicitud_id.toString(),
      userId: r.usuario_id.toString(),
      title: r.asunto,
      description: r.descripcion,
      status: this._mapStatus(r.estado),
      createdAt: r.fecha_creacion,
      updatedAt: r.fecha_actualizacion,
      timeline: [],
    }));
  }

  async getById(id, usuarioId) {
    const solicitud = await soporteRepo.findById(id);
    if (!solicitud) {
      const error = new Error('Solicitud no encontrada');
      error.statusCode = 404;
      throw error;
    }

    const respuestas = await soporteRepo.findRespuestas(id);

    return {
      id: solicitud.solicitud_id.toString(),
      userId: solicitud.usuario_id.toString(),
      title: solicitud.asunto,
      description: solicitud.descripcion,
      status: this._mapStatus(solicitud.estado),
      createdAt: solicitud.fecha_creacion,
      updatedAt: solicitud.fecha_actualizacion,
      timeline: [
        { date: solicitud.fecha_creacion, action: 'Caso creado', by: 'Usuario' },
        ...respuestas.map(r => ({
          date: r.fecha_respuesta,
          action: r.mensaje,
          by: r.autor_nombre || 'Soporte',
        })),
      ],
    };
  }

  async create(data, usuarioId) {
    const solicitudId = await soporteRepo.create({
      ...data,
      usuario_id: usuarioId,
    });

    await pool.execute(
      `INSERT INTO LOG (tipo_evento, descripcion, usuario_id, correlacion_id, fecha)
       VALUES ('solicitud_soporte', ?, ?, ?, NOW())`,
      [`Nueva solicitud de soporte: ${data.asunto}`, usuarioId, uuidv4()]
    );

    return { id: solicitudId.toString() };
  }

  _mapStatus(estado) {
    const map = { abierto: 'open', en_proceso: 'in-progress', resuelto: 'resolved', cerrado: 'closed' };
    return map[estado] || estado;
  }
}

module.exports = new SoporteService();
