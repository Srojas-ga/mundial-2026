const pool = require('./src/config/db');
const bcrypt = require('bcrypt');

async function seedMoreUsers() {
  try {
    const passwordHash = await bcrypt.hash('password123', 10);
    
    const query = `
      INSERT INTO USUARIO (nombre, email, password_hash, avatar, tipo, estado) VALUES 
      ('María Gómez', 'maria@ejemplo.com', ?, '👩', 'aficionado', 'activo'),
      ('Carlos López', 'carlos@ejemplo.com', ?, '👨', 'aficionado', 'activo'),
      ('Operador Sistema', 'operador@mundial2026.com', ?, '🛠️', 'operador', 'activo'),
      ('Laura Martínez', 'laura@ejemplo.com', ?, '👧', 'aficionado', 'activo')
    `;
    
    await pool.query(query, [passwordHash, passwordHash, passwordHash, passwordHash]);
    console.log('✅ Usuarios adicionales insertados correctamente.');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error insertando usuarios:', error);
    process.exit(1);
  }
}

seedMoreUsers();
