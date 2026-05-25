const pool = require('./src/config/db');
const bcrypt = require('bcrypt');
const { E, Q, P } = require('./seed_data');
const { LAMINAS } = require('./seed_laminas');
const { USUARIOS } = require('./seed_usuarios');

async function seed() {
  const conn = await pool.getConnection();
  try {
    console.log('⏳ Limpiando base de datos...');
    await conn.query('SET FOREIGN_KEY_CHECKS = 0');
    for (const t of ['ALBUM_LAMINA','PAQUETE_LAMINA','PAQUETE','ALBUM','ENTRADA','PARTIDO','LAMINA','EQUIPO','ESTADIO','POLLA','LOG','USUARIO'])
      try { await conn.query(`TRUNCATE TABLE ${t}`); } catch(e) {}
    await conn.query('SET FOREIGN_KEY_CHECKS = 1');

    // ESTADIOS
    await conn.query('INSERT INTO ESTADIO (nombre,ciudad,pais,capacidad) VALUES ?', [E]);
    const [estDb] = await conn.query('SELECT estadio_id,nombre FROM ESTADIO');
    const eM = {}; estDb.forEach(e => eM[e.nombre] = e.estadio_id);
    console.log(`✅ ${estDb.length} estadios`);

    // EQUIPOS
    await conn.query('INSERT INTO EQUIPO (nombre,codigo_fifa,bandera,grupo_mundial,ranking_fifa,confederacion) VALUES ?', [Q]);
    const [eqDb] = await conn.query('SELECT equipo_id,nombre FROM EQUIPO');
    const qM = {}; eqDb.forEach(e => qM[e.nombre] = e.equipo_id);
    console.log(`✅ ${eqDb.length} equipos`);

    // PARTIDOS
    const pR = P.map(([l,v,e,f,h]) => [qM[l], qM[v], eM[e], f, h, 'Fase de Grupos', 'programado']);
    await conn.query('INSERT INTO PARTIDO (equipo_local_id,equipo_visitante_id,estadio_id,fecha,hora,fase,estado) VALUES ?', [pR]);
    console.log(`✅ ${pR.length} partidos`);

    // USUARIOS (50)
    const ph = await bcrypt.hash('password123', 10);
    await conn.query('INSERT INTO USUARIO (nombre,email,password_hash,avatar,tipo,estado) VALUES ?',
      [USUARIOS.map(([n,e,a,t]) => [n, e, ph, a, t, 'activo'])]);
    const [uDb] = await conn.query('SELECT usuario_id FROM USUARIO');
    console.log(`✅ ${uDb.length} usuarios`);

    // LÁMINAS (100)
    const lamR = LAMINAS.map(l => [qM[l.eq], l.nom, l.num, l.rar, l.img]);
    await conn.query('INSERT INTO LAMINA (equipo_id,nombre,numero,rareza,imagen) VALUES ?', [lamR]);
    const [lDb] = await conn.query('SELECT lamina_id FROM LAMINA');
    console.log(`✅ ${lDb.length} láminas con fotos SofaScore`);

    // ENTRADAS (20 por partido)
    const [pDb] = await conn.query('SELECT partido_id FROM PARTIDO');
    const secs = ['Norte','Sur','VIP','Preferencial','General'];
    const entR = [];
    for (const p of pDb) for (let i = 1; i <= 20; i++) {
      const s = secs[Math.floor(Math.random() * 5)];
      entR.push([p.partido_id, null, 'disponible', `${s[0]}${i}`, s, s==='VIP'?450:s==='Preferencial'?300:150]);
    }
    await conn.query('INSERT INTO ENTRADA (partido_id,usuario_id,estado,asiento,seccion,precio) VALUES ?', [entR]);
    console.log(`✅ ${entR.length} entradas`);

    // ÁLBUMES + PAQUETES + LÁMINAS ASIGNADAS
    for (const u of uDb) {
      const [r] = await conn.query('INSERT INTO ALBUM (usuario_id,total_laminas,total_completado) VALUES (?,0,0)', [u.usuario_id]);
      for (let p = 0; p < 5; p++)
        await conn.query('INSERT INTO PAQUETE (usuario_id,origen,estado) VALUES (?,?,?)', [u.usuario_id, 'bienvenida', 'disponible']);
      const seen = new Set();
      const count = 8 + Math.floor(Math.random() * 8); // 8-15 láminas por usuario
      for (let j = 0; j < count; j++) {
        const lid = lDb[Math.floor(Math.random() * lDb.length)].lamina_id;
        if (seen.has(lid))
          await conn.query('UPDATE ALBUM_LAMINA SET cantidad=cantidad+1,repetida=1 WHERE album_id=? AND lamina_id=?', [r.insertId, lid]);
        else {
          seen.add(lid);
          await conn.query('INSERT INTO ALBUM_LAMINA (album_id,lamina_id,cantidad,repetida) VALUES (?,?,1,0)', [r.insertId, lid]);
        }
      }
    }
    console.log('✅ Álbumes y paquetes');

    // POLLAS (sin puntos - el mundial no ha comenzado)
    await conn.query(`INSERT INTO POLLA (nombre,descripcion,codigo_invitacion,creador_id,estado) VALUES
      ('Amigos del Fútbol','Polla entre amigos del Mundial 2026','AMIGOS2026',1,'activa'),
      ('Oficina Mundial','Polla del trabajo','OFICI2026',4,'activa'),
      ('Familia Torres','Polla familiar','FAMILY26',11,'activa'),
      ('Liga Universitaria','Polla de la universidad','UNIV2026',15,'activa'),
      ('Barrio FC','Polla del barrio','BARRIO26',20,'activa')`);
    console.log('✅ 5 pollas (sin puntos, mundial no iniciado)');

    console.log('\n🎉 ¡COMPLETADO!');
    console.log(`   ${estDb.length} estadios | ${eqDb.length} equipos | ${pR.length} partidos`);
    console.log(`   ${uDb.length} usuarios | ${lDb.length} láminas | ${entR.length} entradas`);
    console.log('   Contraseña: password123 | Admin: maria@ejemplo.com');
  } catch (err) { console.error('❌', err.message); }
  finally { conn.release(); process.exit(0); }
}
seed();
