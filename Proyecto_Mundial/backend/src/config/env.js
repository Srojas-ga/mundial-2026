// src/config/env.js — Centraliza y valida todas las variables de entorno
require('dotenv').config();

const required = ['JWT_SECRET'];

for (const key of required) {
  if (!process.env[key]) {
    console.error(`⚠️  Variable de entorno requerida faltante: ${key}`);
    process.exit(1);
  }
}

module.exports = {
  port: parseInt(process.env.PORT, 10) || 3000,
  nodeEnv: process.env.NODE_ENV || 'development',

  db: {
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT, 10) || 3306,
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'mundial2026',
  },

  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRES_IN || '8h',
  },

  firebase: {
    projectId: process.env.FIREBASE_PROJECT_ID || '',
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL || '',
    privateKey: (process.env.FIREBASE_PRIVATE_KEY || '').replace(/\\n/g, '\n'),
  },

  sportsApi: {
    url: process.env.SPORTS_API_URL || 'https://v3.football.api-sports.io',
    key: process.env.SPORTS_API_KEY || '',
  },

  corsOrigin: process.env.CORS_ORIGIN || 'http://localhost:4200',
};
