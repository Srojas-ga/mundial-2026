// src/modules/agenda/agenda.service.js
const agendaRepo = require('./agenda.repository');

class AgendaService {
  async getByUsuario(usuarioId) {
    const rows = await agendaRepo.findByUsuario(usuarioId);
    return rows.map(r => ({
      agendaId: r.agenda_partido_id.toString(),
      recordatorio: r.recordatorio,
      notas: r.notas,
      match: {
        id: r.partido_id.toString(),
        homeTeam: { id: r.local_id?.toString(), name: r.local_nombre, flag: r.local_bandera, group: r.local_grupo, rank: r.local_ranking },
        awayTeam: { id: r.visit_id?.toString(), name: r.visit_nombre, flag: r.visit_bandera, group: r.visit_grupo, rank: r.visit_ranking },
        date: r.fecha, time: r.hora,
        stadium: r.estadio_nombre, city: r.estadio_ciudad,
        phase: r.fase, status: r.estado,
        homeScore: r.goles_local, awayScore: r.goles_visitante,
      },
    }));
  }

  async add(usuarioId, { partido_id, recordatorio, notas }) {
    const id = await agendaRepo.add(usuarioId, partido_id, recordatorio, notas);
    return { agendaId: id.toString(), partido_id };
  }

  async remove(id, usuarioId) {
    const removed = await agendaRepo.remove(id, usuarioId);
    if (!removed) {
      const error = new Error('Entrada de agenda no encontrada');
      error.statusCode = 404;
      throw error;
    }
  }
}

module.exports = new AgendaService();
