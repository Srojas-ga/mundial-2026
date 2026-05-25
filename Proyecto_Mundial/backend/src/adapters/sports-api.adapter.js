// src/adapters/sports-api.adapter.js — Encapsula llamadas a la API deportiva externa
const env = require('../config/env');
const logger = require('../config/logger');

// Cache de últimos datos obtenidos
let cachedMatches = [];
let lastFetchTime = null;

class SportsApiAdapter {
  /**
   * Obtiene partidos en vivo del Mundial 2026 desde la API deportiva
   * Si falla, devuelve último dato cacheado y marca provisional=true
   */
  async getLiveMatches() {
    try {
      if (!env.sportsApi.key) {
        logger.warn('SPORTS_API_KEY no configurada, usando datos locales');
        return { data: cachedMatches, provisional: true };
      }

      const response = await fetch(`${env.sportsApi.url}/fixtures?live=all&league=1`, {
        headers: {
          'x-apisports-key': env.sportsApi.key,
        },
      });

      if (!response.ok) {
        throw new Error(`API respondió con status ${response.status}`);
      }

      const json = await response.json();
      const matches = (json.response || []).map(item => ({
        external_id: item.fixture?.id,
        estado: this._mapStatus(item.fixture?.status?.short),
        goles_local: item.goals?.home ?? 0,
        goles_visitante: item.goals?.away ?? 0,
        minuto: item.fixture?.status?.elapsed,
        equipo_local: item.teams?.home?.name,
        equipo_visitante: item.teams?.away?.name,
      }));

      cachedMatches = matches;
      lastFetchTime = new Date();
      return { data: matches, provisional: false };
    } catch (err) {
      logger.error('Error al consultar API deportiva:', err.message);
      return { data: cachedMatches, provisional: true };
    }
  }

  /**
   * Obtiene fixture específico por ID externo
   */
  async getFixture(fixtureId) {
    try {
      if (!env.sportsApi.key) {
        return { data: null, provisional: true };
      }

      const response = await fetch(`${env.sportsApi.url}/fixtures?id=${fixtureId}`, {
        headers: { 'x-apisports-key': env.sportsApi.key },
      });

      if (!response.ok) throw new Error(`Status ${response.status}`);

      const json = await response.json();
      return { data: json.response?.[0] || null, provisional: false };
    } catch (err) {
      logger.error('Error al obtener fixture:', err.message);
      return { data: null, provisional: true };
    }
  }

  _mapStatus(apiStatus) {
    const live = ['1H', '2H', 'HT', 'ET', 'BT', 'P', 'SUSP', 'INT', 'LIVE'];
    const finished = ['FT', 'AET', 'PEN', 'AWD', 'WO'];
    if (live.includes(apiStatus)) return 'en_curso';
    if (finished.includes(apiStatus)) return 'finalizado';
    return 'programado';
  }

  getLastFetchTime() {
    return lastFetchTime;
  }
}

module.exports = new SportsApiAdapter();
