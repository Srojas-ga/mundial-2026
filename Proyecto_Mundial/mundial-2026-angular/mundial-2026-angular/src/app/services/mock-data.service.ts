import { Injectable } from '@angular/core';
import { Match, Notification, User, Sticker, Pool, Ticket, Case, Team } from '../models';

@Injectable({ providedIn: 'root' })
export class MockDataService {

  readonly teams: Team[] = [
    { id: '1', name: 'Argentina',  flag: '🇦🇷', group: 'A', rank: 1 },
    { id: '2', name: 'Brasil',     flag: '🇧🇷', group: 'A', rank: 5 },
    { id: '3', name: 'España',     flag: '🇪🇸', group: 'B', rank: 8 },
    { id: '4', name: 'Alemania',   flag: '🇩🇪', group: 'B', rank: 12 },
    { id: '5', name: 'Francia',    flag: '🇫🇷', group: 'C', rank: 2 },
    { id: '6', name: 'Inglaterra', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', group: 'C', rank: 4 },
    { id: '7', name: 'Colombia',   flag: '🇨🇴', group: 'D', rank: 14 },
    { id: '8', name: 'México',     flag: '🇲🇽', group: 'D', rank: 16 },
  ];

  readonly matches: Match[] = [
    {
      id: 'm1',
      homeTeam: this.teams[0],
      awayTeam: this.teams[1],
      date: '2026-06-11', time: '18:00',
      stadium: 'MetLife Stadium', city: 'Nueva York',
      phase: 'Fase de Grupos', status: 'scheduled',
    },
    {
      id: 'm2',
      homeTeam: this.teams[2],
      awayTeam: this.teams[3],
      date: '2026-06-12', time: '15:00',
      stadium: 'AT&T Stadium', city: 'Dallas',
      phase: 'Fase de Grupos', status: 'live',
      homeScore: 1, awayScore: 1,
      events: [
        { id: 'e1', type: 'goal',        minute: 23, player: 'Morata',  team: 'home', description: 'Gol de Morata' },
        { id: 'e2', type: 'goal',        minute: 45, player: 'Müller',  team: 'away', description: 'Gol de Müller' },
        { id: 'e3', type: 'yellow-card', minute: 56, player: 'Rüdiger', team: 'away', description: 'Tarjeta amarilla' },
      ],
    },
    {
      id: 'm3',
      homeTeam: this.teams[4],
      awayTeam: this.teams[5],
      date: '2026-06-10', time: '21:00',
      stadium: 'SoFi Stadium', city: 'Los Ángeles',
      phase: 'Fase de Grupos', status: 'finished',
      homeScore: 2, awayScore: 1,
    },
    {
      id: 'm4',
      homeTeam: this.teams[6],
      awayTeam: this.teams[7],
      date: '2026-06-13', time: '19:00',
      stadium: 'Azteca Stadium', city: 'Ciudad de México',
      phase: 'Fase de Grupos', status: 'scheduled',
    },
  ];

  readonly notifications: Notification[] = [
    { id: 'n1', type: 'alert',    title: '¡Partido próximo!',       message: 'Argentina vs Brasil comienza en 1 hora',    time: '2026-06-11T17:00:00', read: false, matchId: 'm1' },
    { id: 'n2', type: 'info',     title: '¡Gol!',                   message: "España 1 - 0 Alemania (Morata 23')",        time: '2026-06-12T15:23:00', read: false, matchId: 'm2' },
    { id: 'n3', type: 'reminder', title: 'Resultado final',         message: 'Francia venció a Inglaterra 2-1',           time: '2026-06-10T22:45:00', read: true,  matchId: 'm3' },
    { id: 'n4', type: 'alert',    title: 'Nueva lámina disponible', message: 'Has recibido un nuevo paquete de láminas',  time: '2026-06-11T10:00:00', read: false },
  ];

  readonly currentUser: User = {
    id: 'u1',
    name: 'Juan Pérez',
    email: 'juan.perez@example.com',
    avatar: '👤',
    favoriteTeams: ['1', '6'],
    cities: ['Nueva York', 'Los Ángeles'],
  };

  readonly stickers: Sticker[] = [
    { id: 's1', number: 1,   playerName: 'Lionel Messi', team: 'Argentina', rarity: 'legendary', image: '⭐' },
    { id: 's2', number: 10,  playerName: 'Neymar Jr.',   team: 'Brasil',    rarity: 'legendary', image: '⭐' },
    { id: 's3', number: 7,   playerName: 'Kylian Mbappé',team: 'Francia',   rarity: 'legendary', image: '⭐' },
    { id: 's4', number: 23,  playerName: 'Pedri',         team: 'España',    rarity: 'rare',      image: '💎' },
    { id: 's5', number: 45,  playerName: 'Musiala',       team: 'Alemania',  rarity: 'rare',      image: '💎' },
    { id: 's6', number: 67,  playerName: 'Foden',         team: 'Inglaterra',rarity: 'common',    image: '🎴' },
    { id: 's7', number: 89,  playerName: 'Luis Díaz',     team: 'Colombia',  rarity: 'common',    image: '🎴' },
    { id: 's8', number: 102, playerName: 'Lozano',        team: 'México',    rarity: 'common',    image: '🎴' },
  ];

  readonly pool: Pool = {
    id: 'p1',
    name: 'Amigos del Fútbol',
    code: 'AMIGOS2026',
    members: [
      this.currentUser,
      { id: 'u2', name: 'María García', email: 'maria@example.com', avatar: '👩', favoriteTeams: ['2'], cities: [] },
      { id: 'u3', name: 'Carlos López', email: 'carlos@example.com', avatar: '👨', favoriteTeams: ['5'], cities: [] },
    ],
    predictions: [],
    rankings: [
      { userId: 'u1', userName: 'Juan Pérez',   totalPoints: 45, avatar: '👤' },
      { userId: 'u3', userName: 'Carlos López', totalPoints: 38, avatar: '👨' },
      { userId: 'u2', userName: 'María García', totalPoints: 32, avatar: '👩' },
    ],
  };

  readonly tickets: Ticket[] = [
    { id: 't1', matchId: 'm1', userId: 'u1', status: 'paid',      seat: 'A-15', section: 'VIP',     price: 350, purchaseDate: '2026-05-20' },
    { id: 't2', matchId: 'm2', userId: 'u1', status: 'reserved',  seat: 'B-22', section: 'General', price: 150 },
    { id: 't3', matchId: 'm4', userId: 'u1', status: 'available', seat: 'C-10', section: 'General', price: 120 },
  ];

  readonly cases: Case[] = [
    {
      id: 'c1', userId: 'u1',
      title: 'No recibí mi confirmación de entrada',
      description: 'Compré una entrada para el partido Argentina vs Brasil pero no me llegó el email de confirmación.',
      status: 'in-progress',
      createdAt: '2026-06-01T10:00:00', updatedAt: '2026-06-02T14:30:00',
      timeline: [
        { date: '2026-06-01T10:00:00', action: 'Caso creado',       by: 'Juan Pérez' },
        { date: '2026-06-01T15:20:00', action: 'Asignado a soporte', by: 'Sistema' },
        { date: '2026-06-02T14:30:00', action: 'En revisión',        by: 'Soporte Técnico' },
      ],
    },
    {
      id: 'c2', userId: 'u1',
      title: 'Problema con transferencia de entrada',
      description: 'Intenté transferir mi entrada a un amigo pero el sistema arroja error.',
      status: 'resolved',
      createdAt: '2026-05-28T11:00:00', updatedAt: '2026-05-29T16:00:00',
      timeline: [
        { date: '2026-05-28T11:00:00', action: 'Caso creado',                              by: 'Juan Pérez' },
        { date: '2026-05-28T12:00:00', action: 'En investigación',                          by: 'Soporte Técnico' },
        { date: '2026-05-29T16:00:00', action: 'Resuelto - Se completó la transferencia',   by: 'Soporte Técnico' },
      ],
    },
  ];

  getUpcomingMatches(limit = 3): Match[] {
    return this.matches.filter(m => m.status === 'scheduled').slice(0, limit);
  }

  getLiveMatch(): Match | undefined {
    return this.matches.find(m => m.status === 'live');
  }

  getUnreadNotifications(limit = 3): Notification[] {
    return this.notifications.filter(n => !n.read).slice(0, limit);
  }
}
