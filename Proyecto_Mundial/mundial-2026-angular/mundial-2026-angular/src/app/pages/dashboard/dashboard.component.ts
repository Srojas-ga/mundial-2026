import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MockDataService } from '../../services/mock-data.service';
import { BadgeComponent } from '../../components/shared/badge/badge.component';
import { CardComponent } from '../../components/shared/card/card.component';
import { Match, Notification } from '../../models';

interface StatCard {
  label: string;
  value: string;
  iconPath: string;
  color: string;
  bgColor: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, BadgeComponent, CardComponent],
  template: `
    <div class="space-y-8">

      <!-- ── Header ── -->
      <div>
        <h1 class="text-3xl mb-2 text-gray-900">¡Bienvenido, {{ data.currentUser.name }}! ⚽</h1>
        <p class="text-gray-600">Aquí está tu resumen del Mundial 2026</p>
      </div>

      <!-- ── Stats Grid ── -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <app-card *ngFor="let stat of stats" className="p-6">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm text-gray-600 mb-1">{{ stat.label }}</p>
              <p class="text-3xl text-gray-900">{{ stat.value }}</p>
            </div>
            <div [class]="'p-3 rounded-lg ' + stat.bgColor + ' ' + stat.color">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" [attr.d]="stat.iconPath"/>
              </svg>
            </div>
          </div>
        </app-card>
      </div>

      <!-- ── Partido en vivo ── -->
      <div *ngIf="liveMatch" class="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200 rounded-xl shadow-md p-6">
        <div class="flex items-center gap-2 mb-4">
          <div class="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
          <app-badge variant="error" size="md">EN VIVO</app-badge>
          <span class="text-sm text-gray-600">{{ liveMatch.phase }}</span>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex-1 text-center">
            <div class="text-4xl mb-2">{{ liveMatch.homeTeam.flag }}</div>
            <p class="text-lg">{{ liveMatch.homeTeam.name }}</p>
          </div>

          <div class="text-center px-8">
            <div class="text-5xl mb-2">
              {{ liveMatch.homeScore }} - {{ liveMatch.awayScore }}
            </div>
            <a [routerLink]="['/matches', liveMatch.id]">
              <app-badge variant="info">Ver detalles</app-badge>
            </a>
          </div>

          <div class="flex-1 text-center">
            <div class="text-4xl mb-2">{{ liveMatch.awayTeam.flag }}</div>
            <p class="text-lg">{{ liveMatch.awayTeam.name }}</p>
          </div>
        </div>

        <div class="mt-4 pt-4 border-t border-red-200 text-center text-sm text-gray-600">
          📍 {{ liveMatch.stadium }}, {{ liveMatch.city }}
        </div>
      </div>

      <!-- ── Grid: próximos partidos + notificaciones ── -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">

        <!-- Próximos partidos -->
        <app-card className="p-6">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-xl text-gray-900">Próximos Partidos</h2>
            <a routerLink="/matches" class="text-[#00B140] hover:underline text-sm">Ver todos</a>
          </div>

          <div class="space-y-4">
            <a
              *ngFor="let match of upcomingMatches"
              [routerLink]="['/matches', match.id]"
              class="block no-underline"
            >
              <div class="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div class="flex items-center justify-between mb-2">
                  <app-badge variant="info" size="sm">{{ match.phase }}</app-badge>
                  <span class="text-sm text-gray-600">
                    {{ formatDate(match.date) }} - {{ match.time }}
                  </span>
                </div>

                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <span class="text-2xl">{{ match.homeTeam.flag }}</span>
                    <span class="text-sm text-gray-800">{{ match.homeTeam.name }}</span>
                  </div>
                  <span class="text-gray-500">vs</span>
                  <div class="flex items-center gap-2">
                    <span class="text-sm text-gray-800">{{ match.awayTeam.name }}</span>
                    <span class="text-2xl">{{ match.awayTeam.flag }}</span>
                  </div>
                </div>

                <div class="mt-2 text-xs text-gray-500">
                  📍 {{ match.stadium }}, {{ match.city }}
                </div>
              </div>
            </a>
          </div>
        </app-card>

        <!-- Notificaciones recientes -->
        <app-card className="p-6">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-xl text-gray-900">Notificaciones</h2>
            <a routerLink="/notifications" class="text-[#00B140] hover:underline text-sm">Ver todas</a>
          </div>

          <div class="space-y-4">
            <div *ngFor="let notif of recentNotifications" class="p-4 bg-gray-50 rounded-lg">
              <div class="flex items-start gap-3">
                <div [class]="'p-2 rounded-lg ' + notifIconClass(notif.type)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
                  </svg>
                </div>
                <div class="flex-1">
                  <p class="text-sm mb-1 text-gray-800">{{ notif.title }}</p>
                  <p class="text-xs text-gray-600">{{ notif.message }}</p>
                  <span class="text-xs text-gray-400 mt-1 block">{{ formatDateTime(notif.time) }}</span>
                </div>
              </div>
            </div>
          </div>
        </app-card>
      </div>

      <!-- ── Acciones rápidas ── -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <a routerLink="/agenda" class="no-underline">
          <app-card [hover]="true" className="p-6 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24"
              stroke="#00B140" stroke-width="2" class="mx-auto mb-3">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            <p class="text-sm text-gray-700">Mi Agenda</p>
          </app-card>
        </a>

        <a routerLink="/pools" class="no-underline">
          <app-card [hover]="true" className="p-6 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24"
              stroke="#003087" stroke-width="2" class="mx-auto mb-3">
              <path d="M8 21h8M12 21v-4m0 0a8 8 0 008-8H4a8 8 0 008 8zM12 3v2M4.22 5.22l1.42 1.42M19.78 5.22l-1.42 1.42"/>
            </svg>
            <p class="text-sm text-gray-700">Pollas</p>
          </app-card>
        </a>

        <a routerLink="/album" class="no-underline">
          <app-card [hover]="true" className="p-6 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24"
              stroke="#7c3aed" stroke-width="2" class="mx-auto mb-3">
              <path d="M4 19.5A2.5 2.5 0 016.5 17H20"/>
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/>
            </svg>
            <p class="text-sm text-gray-700">Álbum</p>
          </app-card>
        </a>

        <a routerLink="/tickets" class="no-underline">
          <app-card [hover]="true" className="p-6 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24"
              stroke="#ea580c" stroke-width="2" class="mx-auto mb-3">
              <path d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"/>
            </svg>
            <p class="text-sm text-gray-700">Entradas</p>
          </app-card>
        </a>
      </div>

    </div>
  `,
})
export class DashboardComponent {
  data = inject(MockDataService);
  upcomingMatches: Match[];
  liveMatch: Match | undefined;
  recentNotifications: Notification[];

  stats: StatCard[];

  constructor() {
    const data = this.data;
    this.upcomingMatches    = data.getUpcomingMatches(3);
    this.liveMatch          = data.getLiveMatch();
    this.recentNotifications = data.getUnreadNotifications(3);

    this.stats = [
      {
        label: 'Partidos Programados',
        value: data.matches.filter(m => m.status === 'scheduled').length.toString(),
        iconPath: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
        color:   'text-blue-600',
        bgColor: 'bg-blue-50',
      },
      {
        label: 'Predicciones Activas',
        value: '8',
        iconPath: 'M8 21h8M12 21v-4m0 0a8 8 0 008-8H4a8 8 0 008 8zM12 3v2M4.22 5.22l1.42 1.42M19.78 5.22l-1.42 1.42',
        color:   'text-green-600',
        bgColor: 'bg-green-50',
      },
      {
        label: 'Entradas',
        value: data.tickets.length.toString(),
        iconPath: 'M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z',
        color:   'text-purple-600',
        bgColor: 'bg-purple-50',
      },
      {
        label: 'Notificaciones',
        value: data.getUnreadNotifications(100).length.toString(),
        iconPath: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9',
        color:   'text-red-600',
        bgColor: 'bg-red-50',
      },
    ];
  }

  formatDate(dateStr: string): string {
    return new Date(dateStr).toLocaleDateString('es-ES', { month: 'short', day: 'numeric' });
  }

  formatDateTime(dateStr: string): string {
    return new Date(dateStr).toLocaleString('es-ES', {
      month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit',
    });
  }

  notifIconClass(type: string): string {
    const map: Record<string, string> = {
      alert:    'bg-red-100 text-red-600',
      info:     'bg-blue-100 text-blue-600',
      reminder: 'bg-yellow-100 text-yellow-600',
    };
    return map[type] ?? 'bg-gray-100 text-gray-600';
  }
}
