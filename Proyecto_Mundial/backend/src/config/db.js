// src/config/db.js — Pool de conexiones MySQL con mysql2
const mysql = require('mysql2/promise');
const env = require('./env');
const logger = require('./logger');

const pool = mysql.createPool({
  host: env.db.host,
  port: env.db.port,
  user: env.db.user,
  password: env.db.password,
  database: env.db.database,
  waitForConnections: true,
  connectionLimit: 20,
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
  timezone: '+00:00',
  dateStrings: true,
});

// Test connection on startup
pool.getConnection()
  .then(conn => {
    logger.info('✅ Conexión a MySQL establecida correctamente');
    conn.release();
  })
  .catch(err => {
    logger.error('❌ Error al conectar a MySQL:', err.message);
  });

module.exports = pool;
