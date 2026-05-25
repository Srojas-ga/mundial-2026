// src/modules/album/album.service.js
const { v4: uuidv4 } = require('uuid');
const pool = require('../../config/db');
const albumRepo = require('./album.repository');

class AlbumService {
  async getAlbum(usuarioId) {
    const album = await albumRepo.findAlbumByUsuario(usuarioId);
    if (!album) {
      const error = new Error('Álbum no encontrado');
      error.statusCode = 404;
      throw error;
    }

    const laminas = await albumRepo.findLaminasDeAlbum(album.album_id);

    return {
      album_id: album.album_id.toString(),
      usuario_id: album.usuario_id.toString(),
      total_laminas: album.total_laminas,
      total_completado: album.total_completado,
      fecha_inicio: album.fecha_inicio,
      laminas: laminas.map(l => ({
        id: l.lamina_id.toString(),
        number: l.numero,
        playerName: l.lamina_nombre,
        team: l.equipo_nombre || '',
        rarity: this._mapRarity(l.rareza),
        image: l.imagen || '🎴',
        cantidad: l.cantidad,
        repetida: Boolean(l.repetida),
        fecha_obtencion: l.fecha_obtencion,
      })),
    };
  }

  async getPaquetes(usuarioId) {
    const rows = await albumRepo.findPaquetes(usuarioId);
    return rows.map(r => ({
      paquete_id: r.paquete_id.toString(),
      usuario_id: r.usuario_id.toString(),
      origen: r.origen,
      estado: r.estado,
      fecha_obtencion: r.fecha_obtencion,
      fecha_apertura: r.fecha_apertura,
    }));
  }

  async abrirPaquete(paqueteId, usuarioId) {
    const paquete = await albumRepo.findPaqueteById(paqueteId);
    if (!paquete) {
      const error = new Error('Paquete no encontrado');
      error.statusCode = 404;
      throw error;
    }

    if (paquete.usuario_id !== parseInt(usuarioId)) {
      const error = new Error('Este paquete no te pertenece');
      error.statusCode = 403;
      throw error;
    }

    if (paquete.estado !== 'disponible') {
      const error = new Error('Este paquete ya fue abierto');
      error.statusCode = 400;
      throw error;
    }

    const album = await albumRepo.findAlbumByUsuario(usuarioId);
    const laminas = await albumRepo.abrirPaquete(paqueteId, usuarioId, album.album_id);

    // Log
    await pool.execute(
      `INSERT INTO LOG (tipo_evento, descripcion, usuario_id, correlacion_id, fecha)
       VALUES ('apertura_paquete', ?, ?, ?, NOW())`,
      [`Paquete ${paqueteId} abierto, ${laminas.length} láminas obtenidas`, usuarioId, uuidv4()]
    );

    return laminas;
  }

  async getIntercambios(usuarioId) {
    const rows = await albumRepo.findIntercambios(usuarioId);
    return rows.map(r => ({
      id: r.intercambio_id.toString(),
      user: r.usuario_nombre,
      avatar: r.avatar || '👤',
      estado: r.estado,
      offers: {
        id: r.lamina_ofrecida_id?.toString(),
        number: r.lamina_ofrecida_numero,
        playerName: r.lamina_ofrecida_nombre,
        rarity: this._mapRarity(r.lamina_ofrecida_rareza),
        image: r.lamina_ofrecida_imagen || '🎴',
      },
      wants: {
        id: r.lamina_solicitada_id?.toString(),
        number: r.lamina_solicitada_numero,
        playerName: r.lamina_solicitada_nombre,
        rarity: this._mapRarity(r.lamina_solicitada_rareza),
        image: r.lamina_solicitada_imagen || '🎴',
      },
    }));
  }

  async createIntercambio(data, usuarioId) {
    const intercambioId = await albumRepo.createIntercambio({
      ...data,
      usuario_ofrece_id: usuarioId,
    });

    await pool.execute(
      `INSERT INTO LOG (tipo_evento, descripcion, usuario_id, correlacion_id, fecha)
       VALUES ('intercambio_lamina', ?, ?, ?, NOW())`,
      [`Intercambio propuesto: ${intercambioId}`, usuarioId, uuidv4()]
    );

    return { id: intercambioId.toString() };
  }

  async updateIntercambio(id, estado, usuarioId) {
    const result = await albumRepo.updateIntercambio(id, estado, usuarioId);

    await pool.execute(
      `INSERT INTO LOG (tipo_evento, descripcion, usuario_id, correlacion_id, fecha)
       VALUES ('intercambio_lamina', ?, ?, ?, NOW())`,
      [`Intercambio ${id} ${estado}`, usuarioId, uuidv4()]
    );

    return result;
  }

  _mapRarity(rareza) {
    const map = { comun: 'common', rara: 'rare', legendaria: 'legendary' };
    return map[rareza] || rareza;
  }
}

module.exports = new AlbumService();
