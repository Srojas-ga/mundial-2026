import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

type Tab = 'users' | 'matches' | 'pollas';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="space-y-6">

      <!-- Header -->
      <div>
        <h1 class="text-3xl mb-2 text-gray-900">Panel de Administración 🛡️</h1>
        <p class="text-gray-600">Gestión del sistema Mundial 2026</p>
      </div>

      <!-- Stats -->
      <div class="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-md border border-blue-100 p-6">
          <p class="text-sm text-gray-600 mb-1">Usuarios</p>
          <p class="text-3xl text-gray-900">{{ users().length }}</p>
        </div>
        <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl shadow-md border border-green-100 p-6">
          <p class="text-sm text-gray-600 mb-1">Partidos</p>
          <p class="text-3xl text-gray-900">{{ matches().length }}</p>
        </div>
        <div class="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl shadow-md border border-purple-100 p-6">
          <p class="text-sm text-gray-600 mb-1">Pollas Activas</p>
          <p class="text-3xl text-gray-900">{{ pollas().length }}</p>
        </div>
        <div class="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl shadow-md border border-yellow-100 p-6">
          <p class="text-sm text-gray-600 mb-1">Estado</p>
          <p class="text-lg text-green-600 flex items-center gap-1">
            <span class="w-2 h-2 bg-green-500 rounded-full"></span> En línea
          </p>
        </div>
      </div>

      <!-- Tabs -->
      <div class="flex gap-0 border-b border-gray-200">
        <button *ngFor="let tab of tabs"
          (click)="activeTab.set(tab.id)"
          [class]="activeTab() === tab.id
            ? 'px-4 py-3 border-b-2 border-[#00B140] text-[#00B140] text-sm transition-colors'
            : 'px-4 py-3 border-b-2 border-transparent text-gray-600 hover:text-gray-900 text-sm transition-colors'">
          {{ tab.label }}
        </button>
      </div>

      <!-- TAB: Usuarios -->
      <div *ngIf="activeTab() === 'users'" class="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead class="bg-gray-50">
              <tr>
                <th class="text-left px-6 py-3 text-sm text-gray-600">ID</th>
                <th class="text-left px-6 py-3 text-sm text-gray-600">Nombre</th>
                <th class="text-left px-6 py-3 text-sm text-gray-600">Email</th>
                <th class="text-left px-6 py-3 text-sm text-gray-600">Tipo</th>
                <th class="text-left px-6 py-3 text-sm text-gray-600">Estado</th>
                <th class="text-left px-6 py-3 text-sm text-gray-600">Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let user of users()" class="border-t border-gray-100 hover:bg-gray-50">
                <td class="px-6 py-4 text-sm text-gray-500">{{ user.usuario_id }}</td>
                <td class="px-6 py-4 text-sm text-gray-800">{{ user.nombre }}</td>
                <td class="px-6 py-4 text-sm text-gray-600">{{ user.email }}</td>
                <td class="px-6 py-4">
                  <span [class]="user.tipo === 'admin'
                    ? 'px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs'
                    : 'px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs'">
                    {{ user.tipo }}
                  </span>
                </td>
                <td class="px-6 py-4">
                  <span [class]="user.estado === 'activo'
                    ? 'px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs'
                    : 'px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs'">
                    {{ user.estado }}
                  </span>
                </td>
                <td class="px-6 py-4">
                  <button *ngIf="user.estado === 'activo'"
                    (click)="toggleUserStatus(user.usuario_id, 'bloqueado')"
                    class="text-sm text-red-600 hover:underline">Bloquear</button>
                  <button *ngIf="user.estado !== 'activo'"
                    (click)="toggleUserStatus(user.usuario_id, 'activo')"
                    class="text-sm text-green-600 hover:underline">Activar</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- TAB: Partidos -->
      <div *ngIf="activeTab() === 'matches'" class="space-y-4">
        <!-- Add match form -->
        <div class="bg-white rounded-xl shadow-md border border-gray-100 p-6">
          <h3 class="text-xl mb-4 text-gray-900">Agregar Partido</h3>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            <div>
              <label class="block text-sm mb-1 text-gray-700">Equipo Local ID</label>
              <input type="number" [(ngModel)]="newMatch.equipo_local_id"
                class="w-full px-4 py-2 border-2 border-gray-200 rounded-lg outline-none focus:border-[#00B140] transition-colors"/>
            </div>
            <div>
              <label class="block text-sm mb-1 text-gray-700">Equipo Visitante ID</label>
              <input type="number" [(ngModel)]="newMatch.equipo_visitante_id"
                class="w-full px-4 py-2 border-2 border-gray-200 rounded-lg outline-none focus:border-[#00B140] transition-colors"/>
            </div>
            <div>
              <label class="block text-sm mb-1 text-gray-700">Estadio ID</label>
              <input type="number" [(ngModel)]="newMatch.estadio_id"
                class="w-full px-4 py-2 border-2 border-gray-200 rounded-lg outline-none focus:border-[#00B140] transition-colors"/>
            </div>
            <div>
              <label class="block text-sm mb-1 text-gray-700">Fecha</label>
              <input type="date" [(ngModel)]="newMatch.fecha"
                class="w-full px-4 py-2 border-2 border-gray-200 rounded-lg outline-none focus:border-[#00B140] transition-colors"/>
            </div>
            <div>
              <label class="block text-sm mb-1 text-gray-700">Hora</label>
              <input type="time" [(ngModel)]="newMatch.hora"
                class="w-full px-4 py-2 border-2 border-gray-200 rounded-lg outline-none focus:border-[#00B140] transition-colors"/>
            </div>
            <div>
              <label class="block text-sm mb-1 text-gray-700">Fase</label>
              <select [(ngModel)]="newMatch.fase"
                class="w-full px-4 py-2 border-2 border-gray-200 rounded-lg outline-none focus:border-[#00B140] transition-colors">
                <option>Fase de Grupos</option>
                <option>Octavos de Final</option>
                <option>Cuartos de Final</option>
                <option>Semifinal</option>
                <option>Final</option>
              </select>
            </div>
          </div>
          <button (click)="createMatch()"
            class="px-4 py-2 bg-[#00B140] text-white rounded-lg hover:bg-[#009633] transition-colors">
            Crear Partido
          </button>
        </div>

        <!-- Match list -->
        <div class="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead class="bg-gray-50">
                <tr>
                  <th class="text-left px-6 py-3 text-sm text-gray-600">ID</th>
                  <th class="text-left px-6 py-3 text-sm text-gray-600">Partido</th>
                  <th class="text-left px-6 py-3 text-sm text-gray-600">Fecha</th>
                  <th class="text-left px-6 py-3 text-sm text-gray-600">Fase</th>
                  <th class="text-left px-6 py-3 text-sm text-gray-600">Estado</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let m of matches()" class="border-t border-gray-100 hover:bg-gray-50">
                  <td class="px-6 py-4 text-sm text-gray-500">{{ m.id }}</td>
                  <td class="px-6 py-4 text-sm text-gray-800">{{ m.homeTeam?.name }} vs {{ m.awayTeam?.name }}</td>
                  <td class="px-6 py-4 text-sm text-gray-600">{{ m.date }} {{ m.time }}</td>
                  <td class="px-6 py-4 text-sm text-gray-600">{{ m.phase }}</td>
                  <td class="px-6 py-4">
                    <span [class]="'px-2 py-1 rounded-full text-xs ' +
                      (m.status === 'live' ? 'bg-red-100 text-red-700' :
                       m.status === 'finished' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700')">
                      {{ m.status }}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- TAB: Pollas -->
      <div *ngIf="activeTab() === 'pollas'" class="space-y-4">
        <div *ngFor="let polla of pollas()"
          class="bg-white rounded-xl shadow-md border border-gray-100 p-6">
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-lg text-gray-800">{{ polla.name }}</h3>
            <button (click)="calcularPuntos(polla.id)"
              class="px-3 py-1.5 bg-[#003087] text-white rounded-lg text-sm hover:bg-[#002266] transition-colors">
              Calcular Puntos
            </button>
          </div>
          <p class="text-sm text-gray-500">Código: {{ polla.code }}</p>
        </div>
        <div *ngIf="pollas().length === 0" class="bg-white rounded-xl shadow-md border border-gray-100 p-12 text-center">
          <p class="text-gray-500">No hay pollas registradas</p>
        </div>
      </div>

    </div>
  `,
})
export class AdminComponent {
  activeTab = signal<Tab>('users');
  users = signal<any[]>([]);
  matches = signal<any[]>([]);
  pollas = signal<any[]>([]);

  newMatch = { equipo_local_id: null, equipo_visitante_id: null, estadio_id: null, fecha: '', hora: '', fase: 'Fase de Grupos' };

  tabs: { id: Tab; label: string }[] = [
    { id: 'users', label: 'Usuarios' },
    { id: 'matches', label: 'Partidos' },
    { id: 'pollas', label: 'Pollas' },
  ];

  constructor(private http: HttpClient) {
    this.loadData();
  }

  loadData() {
    const API = 'http://localhost:3000/api';
    this.http.get<any>(`${API}/admin/usuarios`).subscribe({
      next: res => this.users.set(res.data || []),
      error: () => {},
    });
    this.http.get<any>(`${API}/partidos`).subscribe({
      next: res => this.matches.set(res.data || []),
      error: () => {},
    });
    this.http.get<any>(`${API}/pollas`).subscribe({
      next: res => this.pollas.set(res.data || []),
      error: () => {},
    });
  }

  toggleUserStatus(userId: number, estado: string) {
    const API = 'http://localhost:3000/api';
    this.http.patch<any>(`${API}/admin/usuarios/${userId}`, { estado }).subscribe({
      next: () => this.loadData(),
    });
  }

  createMatch() {
    const API = 'http://localhost:3000/api';
    this.http.post<any>(`${API}/admin/partidos`, this.newMatch).subscribe({
      next: () => {
        this.newMatch = { equipo_local_id: null, equipo_visitante_id: null, estadio_id: null, fecha: '', hora: '', fase: 'Fase de Grupos' };
        this.loadData();
      },
    });
  }

  calcularPuntos(pollaId: string) {
    const API = 'http://localhost:3000/api';
    this.http.post<any>(`${API}/admin/pollas/${pollaId}/calcular-puntos`, {}).subscribe({
      next: () => alert('Puntos calculados exitosamente'),
    });
  }
}
