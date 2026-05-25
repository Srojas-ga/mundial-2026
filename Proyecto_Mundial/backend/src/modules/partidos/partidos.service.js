// src/modules/partidos/partidos.service.js
const partidosRepo = require('./partidos.repository');

class PartidosService {
  _formatMatch(row) {
    return {
      id: row.partido_id.toString(),
      homeTeam: {
        id: row.local_id?.toString() || '',
        name: row.local_nombre || 'TBD',
        flag: row.local_bandera || '🏳️',
        group: row.local_grupo || '',
        rank: row.local_ranking || 0,
      },
      awayTeam: {
        id: row.visit_id?.toString() || '',
        name: row.visit_nombre || 'TBD',
        flag: row.visit_bandera || '🏳️',
        group: row.visit_grupo || '',
        rank: row.visit_ranking || 0,
      },
      date: row.fecha,
      time: row.hora,
      stadium: row.estadio_nombre || '',
      city: row.estadio_ciudad || '',
      phase: row.fase || '',
      status: row.estado,
      homeScore: row.goles_local,
      awayScore: row.goles_visitante,
      provisional: row.provisional,
    };
  }

  async getAll(filters) {
    const rows = await partidosRepo.findAll(filters);
    return rows.map(r => this._formatMatch(r));
  }

  async getById(id) {
    const row = await partidosRepo.findById(id);
    if (!row) {
      const error = new Error('Partido no encontrado');
      error.statusCode = 404;
      throw error;
    }
    const match = this._formatMatch(row);

    const eventos = await partidosRepo.findEventos(id);
    match.events = eventos.map(e => ({
      id: e.evento_id.toString(),
      type: e.tipo,
      minute: e.minuto,
      player: e.jugador,
      team: e.equipo_id === row.local_id ? 'home' : 'away',
      description: e.descripcion,
    }));

    return match;
  }

  async getEventos(id) {
    const eventos = await partidosRepo.findEventos(id);
    return eventos.map(e => ({
      id: e.evento_id.toString(),
      type: e.tipo,
      minute: e.minuto,
      player: e.jugador,
      teamName: e.equipo_nombre,
      description: e.descripcion,
    }));
  }
}

module.exports = new PartidosService();
