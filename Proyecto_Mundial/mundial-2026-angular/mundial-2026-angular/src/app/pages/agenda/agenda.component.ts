import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MockDataService } from '../../services/mock-data.service';
import { Match } from '../../models';

type ViewMode = 'calendar' | 'list';

@Component({
  selector: 'app-agenda',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="space-y-6">

      <!-- Header -->
      <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 class="text-3xl mb-2 text-gray-900">Mi Agenda 📅</h1>
          <p class="text-gray-600">Planifica tu experiencia del Mundial 2026</p>
        </div>

        <!-- Toggle vista -->
        <div class="flex gap-2">
          <button (click)="viewMode.set('calendar')"
            [class]="viewMode() === 'calendar'
              ? 'flex items-center gap-2 px-4 py-2 bg-[#00B140] text-white rounded-lg text-sm transition-colors'
              : 'flex items-center gap-2 px-4 py-2 border-2 border-[#00B140] text-[#00B140] rounded-lg text-sm hover:bg-[#00B140] hover:text-white transition-colors'">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            Calendario
          </button>
          <button (click)="viewMode.set('list')"
            [class]="viewMode() === 'list'
              ? 'flex items-center gap-2 px-4 py-2 bg-[#00B140] text-white rounded-lg text-sm transition-colors'
              : 'flex items-center gap-2 px-4 py-2 border-2 border-[#00B140] text-[#00B140] rounded-lg text-sm hover:bg-[#00B140] hover:text-white transition-colors'">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>
            </svg>
            Lista
          </button>
        </div>
      </div>

      <!-- Filtros -->
      <div class="bg-white rounded-xl shadow-md border border-gray-100 p-6">
        <div class="flex items-center gap-2 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#6b7280" stroke-width="2">
            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
          </svg>
          <h3 class="text-lg text-gray-800">Filtros</h3>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm mb-2 text-gray-700">Ciudad</label>
            <select [(ngModel)]="selectedCity"
              class="w-full px-4 py-2 border-2 border-gray-200 rounded-lg outline-none focus:border-[#00B140] transition-colors">
              <option value="all">Todas las ciudades</option>
              <option *ngFor="let city of cities" [value]="city">{{ city }}</option>
            </select>
          </div>
          <div>
            <label class="block text-sm mb-2 text-gray-700">Equipo</label>
            <select [(ngModel)]="selectedTeam"
              class="w-full px-4 py-2 border-2 border-gray-200 rounded-lg outline-none focus:border-[#00B140] transition-colors">
              <option value="all">Todos los equipos</option>
              <option *ngFor="let team of data.teams" [value]="team.id">{{ team.flag }} {{ team.name }}</option>
            </select>
          </div>
        </div>

        <div *ngIf="selectedCity !== 'all' || selectedTeam !== 'all'" class="mt-4">
          <button (click)="clearFilters()"
            class="text-gray-600 hover:text-gray-900 text-sm px-3 py-1.5 hover:bg-gray-100 rounded-lg transition-colors">
            ✕ Limpiar filtros
          </button>
        </div>
      </div>

      <!-- Partidos favoritos -->
      <div *ngIf="favoriteMatches.length > 0"
        class="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl shadow-md border border-green-200 p-6">
        <div class="flex items-center gap-2 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#00B140" viewBox="0 0 24 24" stroke="#00B140" stroke-width="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
          <h3 class="text-lg text-gray-800">Partidos de tus equipos favoritos</h3>
        </div>

        <div class="grid gap-3">
          <div *ngFor="let match of favoriteMatches.slice(0, 3)"
            class="p-4 bg-white rounded-lg">
            <div class="flex flex-wrap items-center justify-between gap-4">
              <div class="flex items-center gap-2">
                <span class="text-2xl">{{ match.homeTeam.flag }}</span>
                <span class="text-sm text-gray-800">{{ match.homeTeam.name }}</span>
                <span class="text-gray-400 text-sm mx-1">vs</span>
                <span class="text-sm text-gray-800">{{ match.awayTeam.name }}</span>
                <span class="text-2xl">{{ match.awayTeam.flag }}</span>
              </div>
              <div class="text-right text-sm text-gray-600">
                <div>{{ formatDateShort(match.date) }}</div>
                <div class="text-[#00B140]">{{ match.time }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ── VISTA CALENDARIO ── -->
      <div *ngIf="viewMode() === 'calendar'" class="space-y-6">
        <div *ngFor="let group of matchesByDate">

          <!-- Encabezado de fecha -->
          <div class="flex items-center gap-3 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#00B140" stroke-width="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            <h2 class="text-xl text-gray-800 capitalize">{{ formatDateLong(group.date) }}</h2>
            <span class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
              {{ group.matches.length }} partido{{ group.matches.length > 1 ? 's' : '' }}
            </span>
          </div>

          <!-- Cards de partidos -->
          <div class="grid gap-4">
            <div *ngFor="let match of group.matches"
              class="bg-white rounded-xl shadow-md border border-gray-100 p-5 hover:shadow-xl hover:scale-[1.01] transition-all duration-300">
              <div class="flex flex-col lg:flex-row justify-between gap-4">

                <div class="flex-1">
                  <!-- Badges -->
                  <div class="flex items-center gap-2 mb-3 flex-wrap">
                    <span *ngIf="match.status === 'live'"
                      class="flex items-center gap-1 px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm">
                      <span class="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                      EN VIVO
                    </span>
                    <span *ngIf="match.status !== 'live'"
                      class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                      {{ match.phase }}
                    </span>
                    <span class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                      🕐 {{ match.time }}
                    </span>
                  </div>

                  <!-- Marcador -->
                  <div class="flex items-center justify-between max-w-xl">
                    <div class="flex items-center gap-2">
                      <span class="text-3xl">{{ match.homeTeam.flag }}</span>
                      <span class="text-gray-800">{{ match.homeTeam.name }}</span>
                    </div>

                    <div class="text-center px-4">
                      <span *ngIf="match.status === 'finished' || match.status === 'live'"
                        class="text-2xl text-gray-800">
                        {{ match.homeScore }} - {{ match.awayScore }}
                      </span>
                      <span *ngIf="match.status === 'scheduled'"
                        class="text-xl text-gray-400">vs</span>
                    </div>

                    <div class="flex items-center gap-2">
                      <span class="text-gray-800">{{ match.awayTeam.name }}</span>
                      <span class="text-3xl">{{ match.awayTeam.flag }}</span>
                    </div>
                  </div>

                  <!-- Estadio -->
                  <div class="flex items-center gap-1 mt-3 text-sm text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    {{ match.stadium }}, {{ match.city }}
                  </div>
                </div>

                <!-- Acciones -->
                <div class="flex items-center gap-2 flex-shrink-0">
                  <button
                    (click)="toggleFavorite(match.id)"
                    [class]="'flex items-center gap-1 px-3 py-2 border-2 rounded-lg text-sm transition-colors ' +
                      (isFavorited(match.id)
                        ? 'border-[#00B140] bg-green-50 text-[#00B140]'
                        : 'border-gray-300 text-gray-600 hover:border-[#00B140] hover:text-[#00B140]')">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                      [attr.fill]="isFavorited(match.id) ? '#00B140' : 'none'"
                      viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                    </svg>
                    {{ isFavorited(match.id) ? 'Guardado' : 'Seguir' }}
                  </button>
                  <button class="px-3 py-2 bg-[#00B140] text-white rounded-lg text-sm hover:bg-[#009633] transition-colors">
                    Ver detalles
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div *ngIf="matchesByDate.length === 0" class="text-center py-16 text-gray-500">
          <div class="text-5xl mb-4">🔍</div>
          <p>No hay partidos con los filtros seleccionados</p>
        </div>
      </div>

      <!-- ── VISTA LISTA ── -->
      <div *ngIf="viewMode() === 'list'" class="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead class="bg-gray-50 border-b border-gray-200">
              <tr>
                <th class="px-6 py-3 text-left text-sm text-gray-600">Fecha</th>
                <th class="px-6 py-3 text-left text-sm text-gray-600">Hora</th>
                <th class="px-6 py-3 text-left text-sm text-gray-600">Partido</th>
                <th class="px-6 py-3 text-left text-sm text-gray-600">Ubicación</th>
                <th class="px-6 py-3 text-left text-sm text-gray-600">Fase</th>
                <th class="px-6 py-3 text-left text-sm text-gray-600">Estado</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr *ngFor="let match of filteredMatches" class="hover:bg-gray-50 transition-colors">
                <td class="px-6 py-4 text-sm text-gray-700">{{ formatDateShort(match.date) }}</td>
                <td class="px-6 py-4 text-sm text-gray-700">{{ match.time }}</td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <span class="text-xl">{{ match.homeTeam.flag }}</span>
                    <span class="text-sm text-gray-800">{{ match.homeTeam.name }}</span>
                    <span class="text-gray-400 text-sm">vs</span>
                    <span class="text-xl">{{ match.awayTeam.flag }}</span>
                    <span class="text-sm text-gray-800">{{ match.awayTeam.name }}</span>
                  </div>
                </td>
                <td class="px-6 py-4 text-sm text-gray-600">{{ match.city }}</td>
                <td class="px-6 py-4">
                  <span class="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">{{ match.phase }}</span>
                </td>
                <td class="px-6 py-4">
                  <span [class]="statusClass(match.status)">
                    {{ statusLabel(match.status) }}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>

          <div *ngIf="filteredMatches.length === 0" class="text-center py-12 text-gray-500">
            <div class="text-4xl mb-3">🔍</div>
            <p>No hay partidos con los filtros seleccionados</p>
          </div>
        </div>
      </div>

    </div>
  `,
})
export class AgendaComponent {
  data = inject(MockDataService);

  viewMode     = signal<ViewMode>('calendar');
  selectedCity = 'all';
  selectedTeam = 'all';
  favoritedIds = signal<string[]>([]);

  get cities(): string[] {
    return [...new Set(this.data.matches.map(m => m.city))];
  }

  get filteredMatches(): Match[] {
    return this.data.matches.filter(match => {
      if (this.selectedCity !== 'all' && match.city !== this.selectedCity) return false;
      if (this.selectedTeam !== 'all') {
        if (match.homeTeam.id !== this.selectedTeam && match.awayTeam.id !== this.selectedTeam) return false;
      }
      return true;
    });
  }

  get favoriteMatches(): Match[] {
    return this.data.matches.filter(m =>
      this.data.currentUser.favoriteTeams.includes(m.homeTeam.id) ||
      this.data.currentUser.favoriteTeams.includes(m.awayTeam.id)
    );
  }

  get matchesByDate(): { date: string; matches: Match[] }[] {
    const map: Record<string, Match[]> = {};
    for (const match of this.filteredMatches) {
      if (!map[match.date]) map[match.date] = [];
      map[match.date].push(match);
    }
    return Object.entries(map)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([date, matches]) => ({ date, matches }));
  }

  clearFilters() {
    this.selectedCity = 'all';
    this.selectedTeam = 'all';
  }

  toggleFavorite(id: string) {
    this.favoritedIds.update(ids =>
      ids.includes(id) ? ids.filter(i => i !== id) : [...ids, id]
    );
  }

  isFavorited(id: string): boolean {
    return this.favoritedIds().includes(id);
  }

  formatDateShort(dateStr: string): string {
    return new Date(dateStr).toLocaleDateString('es-ES', { month: 'short', day: 'numeric' });
  }

  formatDateLong(dateStr: string): string {
    return new Date(dateStr).toLocaleDateString('es-ES', {
      weekday: 'long', month: 'long', day: 'numeric', year: 'numeric'
    });
  }

  statusLabel(status: string): string {
    return status === 'live' ? 'En Vivo' : status === 'scheduled' ? 'Programado' : 'Finalizado';
  }

  statusClass(status: string): string {
    const base = 'px-2 py-1 rounded-full text-xs';
    if (status === 'live')      return `${base} bg-red-100 text-red-700`;
    if (status === 'scheduled') return `${base} bg-blue-100 text-blue-700`;
    return `${base} bg-gray-100 text-gray-700`;
  }
}
