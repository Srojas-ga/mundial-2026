// src/modules/album/album.repository.js
const pool = require('../../config/db');

class AlbumRepository {
  async findAlbumByUsuario(usuarioId) {
    const [rows] = await pool.execute(
      'SELECT * FROM ALBUM WHERE usuario_id = ?',
      [usuarioId]
    );
    return rows[0] || null;
  }

  async findLaminasDeAlbum(albumId) {
    const [rows] = await pool.execute(
      `SELECT al.*, l.nombre AS lamina_nombre, l.numero, l.rareza, l.imagen, e.nombre AS equipo_nombre
       FROM ALBUM_LAMINA al
       JOIN LAMINA l ON al.lamina_id = l.lamina_id
       LEFT JOIN EQUIPO e ON l.equipo_id = e.equipo_id
       WHERE al.album_id = ?
       ORDER BY l.numero ASC`,
      [albumId]
    );
    return rows;
  }

  async findPaquetes(usuarioId) {
    const [rows] = await pool.execute(
      'SELECT * FROM PAQUETE WHERE usuario_id = ? ORDER BY fecha_obtencion DESC',
      [usuarioId]
    );
    return rows;
  }

  async findPaqueteById(id) {
    const [rows] = await pool.execute('SELECT * FROM PAQUETE WHERE paquete_id = ?', [id]);
    return rows[0] || null;
  }

  async abrirPaquete(paqueteId, usuarioId, albumId) {
    const conn = await pool.getConnection();
    try {
      await conn.beginTransaction();

      // Mark package as opened
      await conn.execute(
        `UPDATE PAQUETE SET estado = 'abierto', fecha_apertura = NOW() WHERE paquete_id = ?`,
        [paqueteId]
      );

      // Generate 5 random stickers with rarity distribution: 70% common, 25% rare, 5% legendary
      const laminas = [];
      for (let i = 0; i < 5; i++) {
        const rand = Math.random();
        let rareza;
        if (rand < 0.05) rareza = 'legendaria';
        else if (rand < 0.30) rareza = 'rara';
        else rareza = 'comun';

        const [available] = await conn.execute(
          'SELECT * FROM LAMINA WHERE rareza = ? ORDER BY RAND() LIMIT 1',
          [rareza]
        );

        if (available.length === 0) continue;
        const lamina = available[0];

        // Check if already in album
        const [existing] = await conn.execute(
          'SELECT * FROM ALBUM_LAMINA WHERE album_id = ? AND lamina_id = ?',
          [albumId, lamina.lamina_id]
        );

        if (existing.length > 0) {
          // Increment quantity, mark as duplicate
          await conn.execute(
            'UPDATE ALBUM_LAMINA SET cantidad = cantidad + 1, repetida = TRUE WHERE album_lamina_id = ?',
            [existing[0].album_lamina_id]
          );
        } else {
          // Add new sticker to album
          await conn.execute(
            `INSERT INTO ALBUM_LAMINA (album_id, lamina_id, cantidad, repetida, fecha_obtencion)
             VALUES (?, ?, 1, FALSE, NOW())`,
            [albumId, lamina.lamina_id]
          );
        }

        // Record in PAQUETE_LAMINA
        await conn.execute(
          'INSERT INTO PAQUETE_LAMINA (paquete_id, lamina_id) VALUES (?, ?)',
          [paqueteId, lamina.lamina_id]
        );

        laminas.push({
          id: lamina.lamina_id.toString(),
          number: lamina.numero,
          playerName: lamina.nombre,
          rarity: this._mapRarity(lamina.rareza),
          image: lamina.imagen || '🎴',
          duplicate: existing.length > 0,
        });
      }

      // Update album totals
      const [countResult] = await conn.execute(
        'SELECT COUNT(DISTINCT lamina_id) AS total FROM ALBUM_LAMINA WHERE album_id = ?',
        [albumId]
      );
      const [totalLaminas] = await conn.execute('SELECT COUNT(*) AS total FROM LAMINA');

      await conn.execute(
        'UPDATE ALBUM SET total_laminas = ?, total_completado = ROUND(? / ? * 100, 2) WHERE album_id = ?',
        [countResult[0].total, countResult[0].total, totalLaminas[0].total || 1, albumId]
      );

      await conn.commit();
      return laminas;
    } catch (err) {
      await conn.rollback();
      throw err;
    } finally {
      conn.release();
    }
  }

  async findIntercambios(usuarioId) {
    const [rows] = await pool.execute(
      `SELECT i.*, 
        lo.nombre AS lamina_ofrecida_nombre, lo.numero AS lamina_ofrecida_numero, lo.imagen AS lamina_ofrecida_imagen, lo.rareza AS lamina_ofrecida_rareza,
        ls.nombre AS lamina_solicitada_nombre, ls.numero AS lamina_solicitada_numero, ls.imagen AS lamina_solicitada_imagen, ls.rareza AS lamina_solicitada_rareza,
        u.nombre AS usuario_nombre, u.avatar
       FROM INTERCAMBIO i
       JOIN LAMINA lo ON i.lamina_ofrecida_id = lo.lamina_id
       JOIN LAMINA ls ON i.lamina_solicitada_id = ls.lamina_id
       JOIN USUARIO u ON i.usuario_ofrece_id = u.usuario_id
       WHERE i.usuario_recibe_id = ? OR i.usuario_ofrece_id = ?
       ORDER BY i.fecha_creacion DESC`,
      [usuarioId, usuarioId]
    );
    return rows;
  }

  async createIntercambio(data) {
    const [result] = await pool.execute(
      `INSERT INTO INTERCAMBIO (usuario_ofrece_id, usuario_recibe_id, lamina_ofrecida_id, lamina_solicitada_id, estado, fecha_creacion)
       VALUES (?, ?, ?, ?, 'pendiente', NOW())`,
      [data.usuario_ofrece_id, data.usuario_recibe_id, data.lamina_ofrecida_id, data.lamina_solicitada_id]
    );
    return result.insertId;
  }

  async updateIntercambio(id, estado, usuarioId) {
    const [rows] = await pool.execute('SELECT * FROM INTERCAMBIO WHERE intercambio_id = ?', [id]);
    if (rows.length === 0) {
      const error = new Error('Intercambio no encontrado');
      error.statusCode = 404;
      throw error;
    }

    const intercambio = rows[0];
    if (intercambio.usuario_recibe_id !== parseInt(usuarioId)) {
      const error = new Error('No puedes modificar este intercambio');
      error.statusCode = 403;
      throw error;
    }

    await pool.execute(
      'UPDATE INTERCAMBIO SET estado = ?, fecha_respuesta = NOW() WHERE intercambio_id = ?',
      [estado, id]
    );

    // If accepted, swap stickers
    if (estado === 'aceptado') {
      // Transfer logic would go here in production
    }

    return { id, estado };
  }

  _mapRarity(rareza) {
    const map = { comun: 'common', rara: 'rare', legendaria: 'legendary' };
    return map[rareza] || rareza;
  }
}

module.exports = new AlbumRepository();
