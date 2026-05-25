// src/modules/entradas/entradas.service.js
const { v4: uuidv4 } = require('uuid');
const pool = require('../../config/db');
const entradasRepo = require('./entradas.repository');

class EntradasService {
  async getByUsuario(usuarioId) {
    const rows = await entradasRepo.findByUsuario(usuarioId);
    return rows.map(r => ({
      id: r.entrada_id.toString(),
      matchId: r.partido_id?.toString(),
      userId: (r.usuario_id || '').toString(),
      status: this._mapStatus(r.estado),
      seat: r.asiento || '',
      section: r.seccion || '',
      price: r.precio || 0,
      purchaseDate: r.fecha_reserva || undefined,
      codigo_qr: r.codigo_qr || undefined,
      match: r.partido_id ? {
        id: r.partido_id.toString(),
        homeTeam: { id: r.local_id?.toString(), name: r.local_nombre, flag: r.local_bandera, group: r.local_grupo, rank: r.local_ranking },
        awayTeam: { id: r.visit_id?.toString(), name: r.visit_nombre, flag: r.visit_bandera, group: r.visit_grupo, rank: r.visit_ranking },
        date: r.partido_fecha, time: r.partido_hora,
        stadium: r.estadio_nombre, city: r.estadio_ciudad,
        phase: r.fase, status: r.partido_estado,
        homeScore: r.goles_local, awayScore: r.goles_visitante,
      } : undefined,
    }));
  }

  async reservar(entradaId, usuarioId) {
    const codigoQr = uuidv4();
    const result = await entradasRepo.reservar(entradaId, usuarioId, codigoQr);

    // Log
    await pool.execute(
      `INSERT INTO LOG (tipo_evento, descripcion, usuario_id, correlacion_id, fecha)
       VALUES ('reserva_entrada', ?, ?, ?, NOW())`,
      [`Reserva de entrada ${entradaId}`, usuarioId, uuidv4()]
    );

    return result;
  }

  async transferir(entradaId, usuarioId, email) {
    const result = await entradasRepo.transferir(entradaId, usuarioId, email);

    // Log
    await pool.execute(
      `INSERT INTO LOG (tipo_evento, descripcion, usuario_id, correlacion_id, fecha)
       VALUES ('transferencia_entrada', ?, ?, ?, NOW())`,
      [`Transferencia de entrada ${entradaId} a ${email}`, usuarioId, result.correlacionId]
    );

    return result;
  }

  _mapStatus(estado) {
    const map = { disponible: 'available', reservada: 'reserved', pagada: 'paid', transferida: 'transferred' };
    return map[estado] || estado;
  }
}

module.exports = new EntradasService();
