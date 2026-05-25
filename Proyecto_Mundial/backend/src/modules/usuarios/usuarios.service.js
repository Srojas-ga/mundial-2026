// src/modules/usuarios/usuarios.service.js
const { v4: uuidv4 } = require('uuid');
const pool = require('../../config/db');
const usuariosRepo = require('./usuarios.repository');

class UsuariosService {
  async getById(id) {
    const user = await usuariosRepo.findById(id);
    if (!user) {
      const error = new Error('Usuario no encontrado');
      error.statusCode = 404;
      throw error;
    }

    const teams = await usuariosRepo.findFavoriteTeams(id);
    const cities = await usuariosRepo.findFavoriteCities(id);

    return {
      id: user.usuario_id.toString(),
      name: user.nombre,
      email: user.email,
      avatar: user.avatar || '👤',
      tipo: user.tipo,
      estado: user.estado,
      favoriteTeams: teams.map(t => t.equipo_id.toString()),
      cities,
    };
  }

  async update(id, data, requestUserId) {
    if (parseInt(id) !== parseInt(requestUserId)) {
      const error = new Error('Solo puedes editar tu propio perfil');
      error.statusCode = 403;
      throw error;
    }

    await usuariosRepo.update(id, data);

    // Log cambio de perfil
    await pool.execute(
      `INSERT INTO LOG (tipo_evento, descripcion, usuario_id, correlacion_id, fecha)
       VALUES ('cambio_perfil', ?, ?, ?, NOW())`,
      [`Perfil actualizado`, id, uuidv4()]
    );

    return this.getById(id);
  }

  async getPreferencias(id) {
    const prefs = await usuariosRepo.findPreferencias(id);
    const teams = await usuariosRepo.findFavoriteTeams(id);
    const cities = await usuariosRepo.findFavoriteCities(id);

    return {
      ...prefs,
      equipos_favoritos: teams.map(t => ({
        id: t.equipo_id.toString(),
        name: t.nombre,
        flag: t.bandera,
        group: t.grupo_mundial,
        rank: t.ranking_fifa,
      })),
      ciudades_favoritas: cities,
    };
  }

  async updatePreferencias(id, data, requestUserId) {
    if (parseInt(id) !== parseInt(requestUserId)) {
      const error = new Error('Solo puedes editar tus propias preferencias');
      error.statusCode = 403;
      throw error;
    }

    await usuariosRepo.updatePreferencias(id, data);
    return this.getPreferencias(id);
  }

  async updateStatus(id, estado) {
    await usuariosRepo.updateStatus(id, estado);
    await pool.execute(
      `INSERT INTO LOG (tipo_evento, descripcion, usuario_id, correlacion_id, fecha)
       VALUES ('cambio_estado', ?, ?, ?, NOW())`,
      [`Estado actualizado a ${estado}`, id, uuidv4()]
    );
  }
}

module.exports = new UsuariosService();
