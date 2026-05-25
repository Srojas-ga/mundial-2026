import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { MockDataService } from '../../services/mock-data.service';
import { Match } from '../../models';

type FilterStatus = 'all' | 'live' | 'scheduled' | 'finished';

@Component({
  selector: 'app-matches',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <!-- ══════════════ DETALLE DE PARTIDO ══════════════ -->
    <div *ngIf="matchDetail; else listView" class="space-y-6">

      <a routerLink="/matches"
        class="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors text-sm">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
        </svg>
        Volver a partidos
      </a>

      <div class="bg-white rounded-xl shadow-md border border-gray-100 p-8">
        <!-- Badges -->
        <div class="flex items-center gap-2 mb-6 flex-wrap">
          <span *ngIf="matchDetail.status === 'live'"
            class="flex items-center gap-1 px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm">
            <span class="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            EN VIVO
          </span>
          <span *ngIf="matchDetail.status !== 'live'"
            [class]="matchDetail.status === 'scheduled'
              ? 'px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm'
              : 'px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm'">
            {{ matchDetail.status === 'scheduled' ? 'PROGRAMADO' : 'FINALIZADO' }}
          </span>
          <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
            {{ matchDetail.phase }}
          </span>
        </div>

        <!-- Marcador grande -->
        <div class="flex items-center justify-between mb-8 max-w-3xl mx-auto">
          <div class="text-center flex-1">
            <div class="text-6xl mb-4">{{ matchDetail.homeTeam.flag }}</div>
            <h2 class="text-2xl mb-1 text-gray-800">{{ matchDetail.homeTeam.name }}</h2>
            <p class="text-gray-500 text-sm">Grupo {{ matchDetail.homeTeam.group }}</p>
          </div>

          <div class="text-center px-8">
            <div *ngIf="matchDetail.status === 'finished' || matchDetail.status === 'live'"
              class="text-6xl text-gray-800">
              {{ matchDetail.homeScore }} - {{ matchDetail.awayScore }}
            </div>
            <ng-container *ngIf="matchDetail.status === 'scheduled'">
              <div class="text-4xl text-gray-400 mb-2">vs</div>
              <div class="text-sm text-gray-600 capitalize">{{ formatDateLong(matchDetail.date) }}</div>
              <div class="text-xl mt-2 text-gray-800">{{ matchDetail.time }}</div>
            </ng-container>
          </div>

          <div class="text-center flex-1">
            <div class="text-6xl mb-4">{{ matchDetail.awayTeam.flag }}</div>
            <h2 class="text-2xl mb-1 text-gray-800">{{ matchDetail.awayTeam.name }}</h2>
            <p class="text-gray-500 text-sm">Grupo {{ matchDetail.awayTeam.group }}</p>
          </div>
        </div>

        <!-- Info estadio -->
        <div class="flex justify-center gap-12 py-6 border-y border-gray-200">
          <div class="text-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"
              stroke="#00B140" stroke-width="2" class="mx-auto mb-2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            <p class="text-sm text-gray-500 mb-1">Estadio</p>
            <p class="text-gray-800">{{ matchDetail.stadium }}</p>
          </div>
          <div class="text-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"
              stroke="#00B140" stroke-width="2" class="mx-auto mb-2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            <p class="text-sm text-gray-500 mb-1">Ciudad</p>
            <p class="text-gray-800">{{ matchDetail.city }}</p>
          </div>
        </div>
      </div>

      <!-- Eventos del partido -->
      <div *ngIf="matchDetail.events && matchDetail.events.length > 0"
        class="bg-white rounded-xl shadow-md border border-gray-100 p-6">
        <h3 class="text-xl mb-4 text-gray-900">Eventos del Partido</h3>
        <div class="space-y-3">
          <div *ngFor="let event of matchDetail.events"
            class="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
            <div class="w-14 text-center flex-shrink-0">
              <span class="px-2 py-1 bg-gray-200 text-gray-700 rounded-full text-xs">
                {{ event.minute }}'
              </span>
            </div>
            <div class="text-2xl flex-shrink-0">
              {{ eventIcon(event.type) }}
            </div>
            <div class="flex-1">
              <p class="text-gray-800">{{ event.description }}</p>
              <p class="text-sm text-gray-500">{{ event.player }}</p>
            </div>
            <div class="text-sm text-gray-500 flex-shrink-0">
              {{ event.team === 'home' ? matchDetail.homeTeam.name : matchDetail.awayTeam.name }}
            </div>
          </div>
        </div>
      </div>

      <!-- Acciones -->
      <div class="flex flex-col sm:flex-row gap-4">
        <button class="flex-1 py-3 bg-[#00B140] text-white rounded-lg hover:bg-[#009633] transition-colors">
          Hacer predicción
        </button>
        <button class="flex-1 py-3 border-2 border-[#00B140] text-[#00B140] rounded-lg hover:bg-[#00B140] hover:text-white transition-colors">
          Agregar a agenda
        </button>
      </div>
    </div>

    <!-- ══════════════ LISTA DE PARTIDOS ══════════════ -->
    <ng-template #listView>
      <div class="space-y-6">

        <!-- Header + filtros -->
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 class="text-3xl mb-2 text-gray-900">Partidos ⚽</h1>
            <p class="text-gray-600">Todos los encuentros del Mundial 2026</p>
          </div>

          <div class="flex gap-2 flex-wrap">
            <button *ngFor="let f of filterButtons"
              (click)="filter.set(f.value)"
              [class]="filter() === f.value
                ? 'px-4 py-2 bg-[#00B140] text-white rounded-lg text-sm transition-colors'
                : 'px-4 py-2 border-2 border-[#00B140] text-[#00B140] rounded-lg text-sm hover:bg-[#00B140] hover:text-white transition-colors'">
              {{ f.label }}
            </button>
          </div>
        </div>

        <!-- Stats cards -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div class="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl shadow-md border border-red-100 p-6">
            <div class="flex items-center gap-2 text-red-600 mb-2">
              <span class="w-3 h-3 bg-red-500 rounded-full animate-pulse inline-block"></span>
              En Vivo
            </div>
            <div class="text-3xl text-gray-800">{{ liveCount }}</div>
          </div>

          <div class="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl shadow-md border border-blue-100 p-6">
            <div class="flex items-center gap-2 text-blue-600 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
              </svg>
              Programados
            </div>
            <div class="text-3xl text-gray-800">{{ scheduledCount }}</div>
          </div>

          <div class="bg-gradient-to-br from-gray-50 to-slate-50 rounded-xl shadow-md border border-gray-200 p-6">
            <div class="flex items-center gap-2 text-gray-600 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
              </svg>
              Finalizados
            </div>
            <div class="text-3xl text-gray-800">{{ finishedCount }}</div>
          </div>
        </div>

        <!-- Lista de partidos -->
        <div class="grid gap-4">
          <a *ngFor="let match of filteredMatches"
            [routerLink]="['/matches', match.id]"
            class="block no-underline">
            <div class="bg-white rounded-xl shadow-md border border-gray-100 p-6 hover:shadow-xl hover:scale-[1.01] transition-all duration-300 cursor-pointer">
              <div class="flex flex-col lg:flex-row justify-between gap-4">
                <div class="flex-1">

                  <!-- Badges estado -->
                  <div class="flex items-center gap-2 mb-4 flex-wrap">
                    <span *ngIf="match.status === 'live'"
                      class="flex items-center gap-1 px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm">
                      <span class="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                      EN VIVO
                    </span>
                    <span *ngIf="match.status === 'scheduled'"
                      class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">PROGRAMADO</span>
                    <span *ngIf="match.status === 'finished'"
                      class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">FINALIZADO</span>
                    <span class="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">{{ match.phase }}</span>
                  </div>

                  <!-- Equipos + marcador -->
                  <div class="flex items-center justify-between max-w-2xl">
                    <div class="flex items-center gap-3 flex-1">
                      <span class="text-4xl">{{ match.homeTeam.flag }}</span>
                      <div>
                        <p class="text-xl text-gray-800">{{ match.homeTeam.name }}</p>
                        <p class="text-sm text-gray-500">Grupo {{ match.homeTeam.group }}</p>
                      </div>
                    </div>

                    <div class="text-center px-6">
                      <span *ngIf="match.status === 'finished' || match.status === 'live'"
                        class="text-4xl text-gray-800">
                        {{ match.homeScore }} - {{ match.awayScore }}
                      </span>
                      <span *ngIf="match.status === 'scheduled'"
                        class="text-2xl text-gray-400">vs</span>
                    </div>

                    <div class="flex items-center gap-3 flex-1 justify-end">
                      <div class="text-right">
                        <p class="text-xl text-gray-800">{{ match.awayTeam.name }}</p>
                        <p class="text-sm text-gray-500">Grupo {{ match.awayTeam.group }}</p>
                      </div>
                      <span class="text-4xl">{{ match.awayTeam.flag }}</span>
                    </div>
                  </div>

                  <!-- Info fecha/estadio -->
                  <div class="flex flex-wrap gap-4 mt-4 text-sm text-gray-500">
                    <div class="flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                      </svg>
                      {{ formatDateShort(match.date) }} — {{ match.time }}
                    </div>
                    <div class="flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                      </svg>
                      {{ match.stadium }}, {{ match.city }}
                    </div>
                  </div>
                </div>

                <div class="flex items-center flex-shrink-0">
                  <span class="px-4 py-2 bg-[#00B140] text-white rounded-lg text-sm hover:bg-[#009633] transition-colors">
                    Ver detalles →
                  </span>
                </div>
              </div>
            </div>
          </a>
        </div>

      </div>
    </ng-template>
  `,
})
export class MatchesComponent {
  data   = inject(MockDataService);
  route  = inject(ActivatedRoute);

  filter = signal<FilterStatus>('all');

  get matchDetail(): Match | null {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) return null;
    return this.data.matches.find(m => m.id === id) ?? null;
  }

  get filteredMatches(): Match[] {
    const f = this.filter();
    if (f === 'all') return this.data.matches;
    return this.data.matches.filter(m => m.status === f);
  }

  get liveCount()      { return this.data.matches.filter(m => m.status === 'live').length; }
  get scheduledCount() { return this.data.matches.filter(m => m.status === 'scheduled').length; }
  get finishedCount()  { return this.data.matches.filter(m => m.status === 'finished').length; }

  filterButtons = [
    { value: 'all' as FilterStatus,       label: `Todos (${this.data.matches.length})` },
    { value: 'live' as FilterStatus,      label: '🔴 En Vivo' },
    { value: 'scheduled' as FilterStatus, label: 'Programados' },
    { value: 'finished' as FilterStatus,  label: 'Finalizados' },
  ];

  formatDateShort(d: string) {
    return new Date(d).toLocaleDateString('es-ES', { month: 'short', day: 'numeric', year: 'numeric' });
  }

  formatDateLong(d: string) {
    return new Date(d).toLocaleDateString('es-ES', { weekday: 'long', month: 'long', day: 'numeric' });
  }

  eventIcon(type: string): string {
    return type === 'goal' ? '⚽' : type === 'yellow-card' ? '🟨' : type === 'red-card' ? '🟥' : '🔄';
  }
}
