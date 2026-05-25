// src/modules/admin/admin.service.js
const pool = require('../../config/db');
const usuariosRepo = require('../usuarios/usuarios.repository');
const partidosRepo = require('../partidos/partidos.repository');
const pollasRepo = require('../pollas/pollas.repository');

class AdminService {
  async getUsuarios() {
    return usuariosRepo.findAll();
  }

  async updateUsuario(id, data) {
    if (data.estado) {
      await usuariosRepo.updateStatus(id, data.estado);
    }
    if (data.tipo) {
      await pool.execute('UPDATE USUARIO SET tipo = ? WHERE usuario_id = ?', [data.tipo, id]);
    }
    return usuariosRepo.findById(id);
  }

  async createPartido(data) {
    const id = await partidosRepo.create(data);
    return { id: id.toString() };
  }

  async updatePartido(id, data) {
    await partidosRepo.update(id, data);
    return partidosRepo.findById(id);
  }

  async calcularPuntosPolla(pollaId) {
    await pollasRepo.calcularPuntos(pollaId);
    const ranking = await pollasRepo.getRanking(pollaId);
    return ranking.map(r => ({
      userId: r.usuario_id.toString(),
      userName: r.nombre,
      totalPoints: r.puntos_total,
      position: r.posicion,
    }));
  }
}

module.exports = new AdminService();
