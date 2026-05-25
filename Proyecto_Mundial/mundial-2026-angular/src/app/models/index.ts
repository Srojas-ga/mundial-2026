export interface Team {
  id: string;
  name: string;
  flag: string;
  group: string;
  rank: number;
}

export interface MatchEvent {
  id: string;
  type: 'goal' | 'yellow-card' | 'red-card' | 'substitution';
  minute: number;
  player: string;
  team: 'home' | 'away';
  description: string;
}

export interface Match {
  id: string;
  homeTeam: Team;
  awayTeam: Team;
  date: string;
  time: string;
  stadium: string;
  city: string;
  phase: string;
  status: 'programado' | 'en_curso' | 'finalizado' | 'scheduled' | 'live' | 'finished';
  homeScore?: number;
  awayScore?: number;
  events?: MatchEvent[];
}

export interface Notification {
  id: string;
  type: 'alert' | 'reminder' | 'info';
  title: string;
  message: string;
  time: string;
  read: boolean;
  matchId?: string;
}

export interface Sticker {
  id: string;
  number: number;
  playerName: string;
  team: string;
  rarity: 'common' | 'rare' | 'legendary';
  image: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  favoriteTeams: string[];
  cities: string[];
}

export interface Prediction {
  id: string;
  userId: string;
  matchId: string;
  homeScore: number;
  awayScore: number;
  points?: number;
}

export interface Pool {
  id: string;
  name: string;
  code: string;
  members: User[];
  predictions: Prediction[];
  rankings: { userId: string; userName: string; totalPoints: number; avatar: string }[];
}

export interface Ticket {
  id: string;
  matchId: string;
  userId: string;
  status: 'available' | 'reserved' | 'paid' | 'transferred';
  seat: string;
  section: string;
  price: number;
  purchaseDate?: string;
  codigo_qr?: string;
}

export interface Case {
  id: string;
  userId: string;
  title: string;
  description: string;
  status: 'open' | 'in-progress' | 'resolved' | 'closed';
  createdAt: string;
  updatedAt: string;
  timeline: { date: string; action: string; by: string }[];
}

export interface Album {
  album_id: string;
  usuario_id: string;
  total_laminas: number;
  total_completado: number;
  fecha_inicio: string;
  laminas: AlbumLamina[];
}

export interface AlbumLamina {
  id: string;
  number: number;
  playerName: string;
  team: string;
  rarity: 'common' | 'rare' | 'legendary';
  image: string;
  cantidad: number;
  repetida: boolean;
}

export interface Package {
  paquete_id: string;
  usuario_id: string;
  origen: 'bienvenida' | 'puntos' | 'evento' | 'simulado';
  estado: 'disponible' | 'abierto';
  fecha_obtencion: string;
  fecha_apertura?: string;
}
