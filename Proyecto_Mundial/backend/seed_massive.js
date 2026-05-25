const pool = require('./src/config/db');
const bcrypt = require('bcrypt');

async function seedMassive() {
  console.log('⏳ Iniciando poblado masivo de datos...');
  
  try {
    // 1. USUARIOS
    const pass = await bcrypt.hash('password123', 10);
    const users = [
      ['Juan Pérez', 'juan.perez@email.com', pass, '👨', 'aficionado', 'activo'],
      ['Sofía Vergara', 'sofia.v@email.com', pass, '👩', 'aficionado', 'activo'],
      ['Andrés Montes', 'andres.narrador@sports.com', pass, '🎙️', 'operador', 'activo'],
      ['Lionel Messi', 'leo.m@email.com', pass, '🐐', 'aficionado', 'activo'],
      ['Emma Watson', 'emma.w@email.com', pass, '👧', 'aficionado', 'activo'],
      ['Admin Supervisor', 'supervisor@mundial2026.com', pass, '🛡️', 'admin', 'activo']
    ];
    
    await pool.query('INSERT IGNORE INTO USUARIO (nombre, email, password_hash, avatar, tipo, estado) VALUES ?', [users]);
    console.log('✅ Usuarios adicionales creados.');

    // 2. EQUIPOS (Insertar faltantes si no existen)
    const equipos = [
      ['Canadá', 'CAN', '🇨🇦', 'F', 40, 'CONCACAF'],
      ['Italia', 'ITA', '🇮🇹', 'G', 9, 'UEFA'],
      ['Japón', 'JPN', '🇯🇵', 'H', 17, 'AFC'],
      ['Marruecos', 'MAR', '🇲🇦', 'A', 13, 'CAF'],
      ['Países Bajos', 'NED', '🇳🇱', 'B', 7, 'UEFA'],
      ['Senegal', 'SEN', '🇸🇳', 'C', 18, 'CAF']
    ];
    await pool.query('INSERT IGNORE INTO EQUIPO (nombre, codigo_fifa, bandera, grupo_mundial, ranking_fifa, confederacion) VALUES ?', [equipos]);
    console.log('✅ Equipos adicionales creados.');

    // 3. PARTIDOS DE FASE DE GRUPOS
    const partidos = [
      // equipo_local_id, equipo_visitante_id, estadio_id, fecha, hora, fase, estado
      [1, 5, 1, '2026-06-16', '16:00', 'Fase de Grupos', 'programado'], // ARG vs FRA
      [2, 3, 2, '2026-06-17', '18:00', 'Fase de Grupos', 'programado'], // BRA vs ESP
      [4, 7, 3, '2026-06-18', '20:00', 'Fase de Grupos', 'programado'], // GER vs COL
      [8, 1, 4, '2026-06-19', '15:00', 'Fase de Grupos', 'programado'], // MEX vs ARG
      [3, 5, 5, '2026-06-20', '19:00', 'Fase de Grupos', 'programado'], // ESP vs FRA
      [7, 2, 6, '2026-06-21', '21:00', 'Fase de Grupos', 'programado']  // COL vs BRA
    ];
    await pool.query('INSERT INTO PARTIDO (equipo_local_id, equipo_visitante_id, estadio_id, fecha, hora, fase, estado) VALUES ?', [partidos]);
    console.log('✅ Partidos programados creados.');

    // 4. LAMINAS (ÁLBUM DIGITAL)
    const laminas = [
      // equipo_id, nombre, numero, rareza, imagen
      [1, 'Lionel Messi', 10, 'legendaria', 'https://flagcdn.com/w320/ar.png'],
      [1, 'Emiliano Martínez', 1, 'rara', 'https://flagcdn.com/w320/ar.png'],
      [2, 'Vinícius Júnior', 7, 'legendaria', 'https://flagcdn.com/w320/br.png'],
      [2, 'Rodrygo', 11, 'rara', 'https://flagcdn.com/w320/br.png'],
      [3, 'Lamine Yamal', 19, 'legendaria', 'https://flagcdn.com/w320/es.png'],
      [4, 'Jamal Musiala', 10, 'legendaria', 'https://flagcdn.com/w320/de.png'],
      [5, 'Kylian Mbappé', 10, 'legendaria', 'https://flagcdn.com/w320/fr.png'],
      [7, 'Luis Díaz', 7, 'legendaria', 'https://flagcdn.com/w320/co.png'],
      [7, 'James Rodríguez', 10, 'rara', 'https://flagcdn.com/w320/co.png'],
      [8, 'Guillermo Ochoa', 13, 'comun', 'https://flagcdn.com/w320/mx.png']
    ];
    await pool.query('INSERT INTO LAMINA (equipo_id, nombre, numero, rareza, imagen) VALUES ?', [laminas]);
    console.log('✅ Láminas del álbum creadas (imágenes reales).');

    // 5. ENTRADAS
    const entradas = [];
    const [matches] = await pool.query('SELECT partido_id FROM PARTIDO LIMIT 10');
    
    for (let m of matches) {
      for (let i = 1; i <= 20; i++) {
        entradas.push([
          m.partido_id, 
          null, 
          'disponible', 
          `A${i}`, 
          'Norte', 
          150.00 + (Math.random() * 50)
        ]);
      }
    }
    await pool.query('INSERT INTO ENTRADA (partido_id, usuario_id, estado, asiento, seccion, precio) VALUES ?', [entradas]);
    console.log('✅ Entradas generadas para los partidos.');

    console.log('🎉 Poblado masivo completado exitosamente!');
    process.exit(0);

  } catch (error) {
    console.error('❌ Error durante el poblado masivo:', error);
    process.exit(1);
  }
}

seedMassive();
