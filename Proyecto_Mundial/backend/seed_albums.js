const pool = require('./src/config/db');

async function seedAlbums() {
  try {
    console.log('⏳ Creando álbumes y paquetes para los usuarios...');
    const [usuarios] = await pool.query('SELECT usuario_id FROM USUARIO');
    const [laminas] = await pool.query('SELECT lamina_id FROM LAMINA');
    
    if (laminas.length === 0) {
      console.log('❌ No hay láminas en la BD.');
      process.exit(1);
    }

    let albumes = [];
    let album_laminas = [];
    let paquetes = [];
    
    // Asignar álbum a cada usuario
    for (const u of usuarios) {
      // Intentar insertar un álbum (ignorar si ya existe usando INSERT IGNORE no es posible directamente sin claves únicas claras, pero asumamos que se puede manejar con REPLACE o buscar primero)
      const [existingAlbum] = await pool.query('SELECT album_id FROM ALBUM WHERE usuario_id = ?', [u.usuario_id]);
      let album_id;
      
      if (existingAlbum.length > 0) {
        album_id = existingAlbum[0].album_id;
      } else {
        const [result] = await pool.query('INSERT INTO ALBUM (usuario_id, total_laminas, total_completado) VALUES (?, ?, ?)', [u.usuario_id, 0, 0]);
        album_id = result.insertId;
      }

      // Añadir paquetes
      for(let p=0; p<5; p++) {
        paquetes.push([u.usuario_id, 'bienvenida', 'disponible']);
      }
      
      // Asignar unas 15 láminas aleatorias al álbum del usuario (algunas repetidas)
      for (let l=0; l<15; l++) {
        const rndLamina = laminas[Math.floor(Math.random() * laminas.length)].lamina_id;
        // verificar si ya la tiene
        const yaTiene = album_laminas.find(x => x[0] === album_id && x[1] === rndLamina);
        if (yaTiene) {
          yaTiene[2] += 1; // aumentar cantidad
          yaTiene[3] = 1; // es repetida
        } else {
          album_laminas.push([album_id, rndLamina, 1, 0]);
        }
      }
    }

    if (paquetes.length > 0) {
      await pool.query('INSERT INTO PAQUETE (usuario_id, origen, estado) VALUES ?', [paquetes]);
      console.log('✅ Paquetes generados.');
    }

    if (album_laminas.length > 0) {
      // Limpiar laminas previas para no tener problemas
      await pool.query('TRUNCATE TABLE ALBUM_LAMINA');
      await pool.query('INSERT INTO ALBUM_LAMINA (album_id, lamina_id, cantidad, repetida) VALUES ?', [album_laminas]);
      console.log('✅ Láminas asignadas a los álbumes.');
    }

    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}
seedAlbums();
