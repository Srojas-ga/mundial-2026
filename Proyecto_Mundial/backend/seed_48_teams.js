const pool = require('./src/config/db');

const equiposData = [
  ['Estados Unidos', 'USA', '🇺🇸', 'A', 11, 'CONCACAF'], ['Gales', 'WAL', '🏴󠁧󠁢󠁷󠁬󠁳󠁿', 'A', 29, 'UEFA'], ['Corea del Sur', 'KOR', '🇰🇷', 'A', 23, 'AFC'], ['Mali', 'MLI', '🇲🇱', 'A', 47, 'CAF'],
  ['Inglaterra', 'ENG', '🏴󠁧󠁢󠁥󠁮󠁧󠁿', 'B', 4, 'UEFA'], ['Colombia', 'COL', '🇨🇴', 'B', 14, 'CONMEBOL'], ['Nigeria', 'NGA', '🇳🇬', 'B', 30, 'CAF'], ['Costa Rica', 'CRC', '🇨🇷', 'B', 54, 'CONCACAF'],
  ['Francia', 'FRA', '🇫🇷', 'C', 2, 'UEFA'], ['Ecuador', 'ECU', '🇪🇨', 'C', 31, 'CONMEBOL'], ['Australia', 'AUS', '🇦🇺', 'C', 24, 'AFC'], ['Sudáfrica', 'RSA', '🇿🇦', 'C', 58, 'CAF'],
  ['México', 'MEX', '🇲🇽', 'D', 15, 'CONCACAF'], ['Polonia', 'POL', '🇵🇱', 'D', 28, 'UEFA'], ['Camerún', 'CMR', '🇨🇲', 'D', 46, 'CAF'], ['Irak', 'IRQ', '🇮🇶', 'D', 59, 'AFC'],
  ['España', 'ESP', '🇪🇸', 'E', 8, 'UEFA'], ['Uruguay', 'URU', '🇺🇾', 'E', 11, 'CONMEBOL'], ['Egipto', 'EGY', '🇪🇬', 'E', 36, 'CAF'], ['Canadá', 'CAN', '🇨🇦', 'E', 50, 'CONCACAF'],
  ['Alemania', 'GER', '🇩🇪', 'F', 16, 'UEFA'], ['Japón', 'JPN', '🇯🇵', 'F', 17, 'AFC'], ['Perú', 'PER', '🇵🇪', 'F', 33, 'CONMEBOL'], ['Burkina Faso', 'BFA', '🇧🇫', 'F', 61, 'CAF'],
  ['Portugal', 'POR', '🇵🇹', 'G', 6, 'UEFA'], ['Marruecos', 'MAR', '🇲🇦', 'G', 13, 'CAF'], ['Arabia Saudita', 'KSA', '🇸🇦', 'G', 53, 'AFC'], ['Panamá', 'PAN', '🇵🇦', 'G', 41, 'CONCACAF'],
  ['Brasil', 'BRA', '🇧🇷', 'H', 5, 'CONMEBOL'], ['Suiza', 'SUI', '🇨🇭', 'H', 19, 'UEFA'], ['Ghana', 'GHA', '🇬🇭', 'H', 61, 'CAF'], ['Qatar', 'QAT', '🇶🇦', 'H', 34, 'AFC'],
  ['Bélgica', 'BEL', '🇧🇪', 'I', 3, 'UEFA'], ['Senegal', 'SEN', '🇸🇳', 'I', 20, 'CAF'], ['Irán', 'IRN', '🇮🇷', 'I', 21, 'AFC'], ['Jamaica', 'JAM', '🇯🇲', 'I', 55, 'CONCACAF'],
  ['Argentina', 'ARG', '🇦🇷', 'J', 1, 'CONMEBOL'], ['Dinamarca', 'DEN', '🇩🇰', 'J', 21, 'UEFA'], ['Uzbekistán', 'UZB', '🇺🇿', 'J', 66, 'AFC'], ['Nueva Zelanda', 'NZL', '🇳🇿', 'J', 104, 'OFC'],
  ['Países Bajos', 'NED', '🇳🇱', 'K', 7, 'UEFA'], ['Argelia', 'ALG', '🇩🇿', 'K', 43, 'CAF'], ['Chile', 'CHI', '🇨🇱', 'K', 42, 'CONMEBOL'], ['Honduras', 'HON', '🇭🇳', 'K', 76, 'CONCACAF'],
  ['Croacia', 'CRO', '🇭🇷', 'L', 10, 'UEFA'], ['Serbia', 'SRB', '🇷🇸', 'L', 32, 'UEFA'], ['Turquía', 'TUR', '🇹🇷', 'L', 35, 'UEFA'], ['Venezuela', 'VEN', '🇻🇪', 'L', 50, 'CONMEBOL']
];

const imagenesJugadores = [
  { p: 'Lionel Messi', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg/220px-Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg' },
  { p: 'Kylian Mbappé', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Kylian_Mbappe_2018.jpg/220px-Kylian_Mbappe_2018.jpg' },
  { p: 'Vinícius Júnior', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Vinicius_Jr_2021.jpg/220px-Vinicius_Jr_2021.jpg' },
  { p: 'Lamine Yamal', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Lamine_Yamal_2023.jpg/220px-Lamine_Yamal_2023.jpg' },
  { p: 'Luis Díaz', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Luis_D%C3%ADaz_2022.jpg/220px-Luis_D%C3%ADaz_2022.jpg' },
  { p: 'James Rodríguez', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/James_Rodr%C3%ADguez_2018.jpg/220px-James_Rodr%C3%ADguez_2018.jpg' },
  { p: 'Jude Bellingham', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Jude_Bellingham_2023.jpg/220px-Jude_Bellingham_2023.jpg' },
  { p: 'Harry Kane', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Harry_Kane_2023.jpg/220px-Harry_Kane_2023.jpg' },
  { p: 'Christian Pulisic', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Christian_Pulisic_2023.jpg/220px-Christian_Pulisic_2023.jpg' },
  { p: 'Alphonso Davies', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Alphonso_Davies_2022.jpg/220px-Alphonso_Davies_2022.jpg' },
  { p: 'Santiago Giménez', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Santiago_Gimenez_2023.jpg/220px-Santiago_Gimenez_2023.jpg' },
  { p: 'Emiliano Martínez', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Dibu_Martinez_2022.jpg/220px-Dibu_Martinez_2022.jpg' }
];

async function seed() {
  try {
    console.log('⏳ Limpiando tablas previas...');
    await pool.query('SET FOREIGN_KEY_CHECKS = 0;');
    await pool.query('TRUNCATE TABLE ENTRADA;');
    await pool.query('TRUNCATE TABLE LAMINA;');
    await pool.query('TRUNCATE TABLE PARTIDO;');
    await pool.query('TRUNCATE TABLE EQUIPO;');
    await pool.query('SET FOREIGN_KEY_CHECKS = 1;');

    console.log('⏳ Insertando los 48 equipos clasificados...');
    await pool.query('INSERT INTO EQUIPO (nombre, codigo_fifa, bandera, grupo_mundial, ranking_fifa, confederacion) VALUES ?', [equiposData]);

    // Recuperar IDs
    const [equiposDb] = await pool.query('SELECT equipo_id, grupo_mundial FROM EQUIPO ORDER BY equipo_id ASC');
    
    // Generar 72 partidos (6 partidos por cada uno de los 12 grupos)
    // 1v2, 3v4, 1v3, 4v2, 4v1, 2v3
    let partidos = [];
    let d = new Date('2026-06-11T12:00:00Z');
    
    const grupos = ['A','B','C','D','E','F','G','H','I','J','K','L'];
    
    for (const g of grupos) {
      const eq = equiposDb.filter(e => e.grupo_mundial === g);
      if(eq.length === 4) {
        // Generar 6 partidos para este grupo
        const matchups = [
          [eq[0], eq[1]], [eq[2], eq[3]],
          [eq[0], eq[2]], [eq[3], eq[1]],
          [eq[3], eq[0]], [eq[1], eq[2]]
        ];
        
        for (const [home, away] of matchups) {
          d.setHours(d.getHours() + 10); // Espaciar 10 horas
          const fechaStr = d.toISOString().split('T')[0];
          const horaStr = d.toISOString().split('T')[1].substring(0,5);
          
          partidos.push([
            home.equipo_id, away.equipo_id, 
            (Math.floor(Math.random() * 5) + 1), // estadios random del 1 al 5
            fechaStr, horaStr, 'Fase de Grupos', 'programado'
          ]);
        }
      }
    }
    
    await pool.query('INSERT INTO PARTIDO (equipo_local_id, equipo_visitante_id, estadio_id, fecha, hora, fase, estado) VALUES ?', [partidos]);
    console.log(`✅ ${partidos.length} Partidos de fase de grupos creados.`);

    // Crear Entradas
    console.log('⏳ Generando Entradas reales...');
    const entradas = [];
    const [matchesDb] = await pool.query('SELECT partido_id FROM PARTIDO');
    for (let m of matchesDb) {
      for (let i = 1; i <= 20; i++) {
        entradas.push([
          m.partido_id, null, 'disponible', `S${i}`, 'Preferencial', 250.00
        ]);
      }
    }
    await pool.query('INSERT INTO ENTRADA (partido_id, usuario_id, estado, asiento, seccion, precio) VALUES ?', [entradas]);
    console.log(`✅ ${entradas.length} Entradas generadas.`);

    // Crear Láminas
    console.log('⏳ Creando Láminas con imágenes fotográficas reales...');
    const laminas = [];
    let e = 1;
    for (const img of imagenesJugadores) {
      laminas.push([
        (Math.floor(Math.random() * 48) + 1), // Equipo aleatorio temporal
        img.p,
        10,
        'legendaria',
        img.url
      ]);
    }
    // Llenar más genéricos para tener volumen
    for(let j=0; j<20; j++) {
      laminas.push([
        (Math.floor(Math.random() * 48) + 1),
        `Jugador Especial ${j}`,
        7,
        'comun',
        'https://ui-avatars.com/api/?name=Jugador+Especial&background=random&size=200'
      ]);
    }

    await pool.query('INSERT INTO LAMINA (equipo_id, nombre, numero, rareza, imagen) VALUES ?', [laminas]);
    console.log('✅ Láminas creadas con fotos reales.');

    console.log('🎉 Todo el proceso ha terminado exitosamente.');
    process.exit(0);

  } catch (error) {
    console.error('❌ Error fatal:', error);
    process.exit(1);
  }
}

seed();
