const pool = require('./src/config/db');

const validImages = [
  { nombre: 'Lionel Messi', image: 'https://cdn.sofifa.net/players/158/023/24_120.png' },
  { nombre: 'Kylian Mbappé', image: 'https://cdn.sofifa.net/players/231/747/24_120.png' },
  { nombre: 'Vinícius Júnior', image: 'https://cdn.sofifa.net/players/238/794/24_120.png' },
  { nombre: 'Vinícius Jr.', image: 'https://cdn.sofifa.net/players/238/794/24_120.png' },
  { nombre: 'Lamine Yamal', image: 'https://cdn.sofifa.net/players/273/951/24_120.png' },
  { nombre: 'Luis Díaz', image: 'https://cdn.sofifa.net/players/241/464/24_120.png' },
  { nombre: 'James Rodríguez', image: 'https://cdn.sofifa.net/players/198/710/24_120.png' },
  { nombre: 'Jude Bellingham', image: 'https://cdn.sofifa.net/players/252/371/24_120.png' },
  { nombre: 'Harry Kane', image: 'https://cdn.sofifa.net/players/202/126/24_120.png' },
  { nombre: 'Christian Pulisic', image: 'https://cdn.sofifa.net/players/227/796/24_120.png' },
  { nombre: 'Alphonso Davies', image: 'https://cdn.sofifa.net/players/234/396/24_120.png' },
  { nombre: 'Santiago Giménez', image: 'https://cdn.sofifa.net/players/255/475/24_120.png' },
  { nombre: 'Emiliano Martínez', image: 'https://cdn.sofifa.net/players/202/811/24_120.png' }
];

async function fixLaminas() {
  try {
    for (const player of validImages) {
      await pool.query('UPDATE LAMINA SET imagen = ? WHERE nombre = ?', [player.image, player.nombre]);
    }
    console.log('✅ URLs de láminas en la BD actualizadas con imágenes funcionales de SoFifa.');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

fixLaminas();
