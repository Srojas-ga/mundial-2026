import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Notification } from '../../models';

type Filter = 'all' | 'unread' | 'read';

const INITIAL: Notification[] = [
  { id: 'n1', type: 'alert',    title: '¡Partido próximo!',       message: 'Argentina vs Brasil comienza en 1 hora',    time: '2026-06-11T17:00:00', read: false, matchId: 'm1' },
  { id: 'n2', type: 'info',     title: '¡Gol!',                   message: "España 1 - 0 Alemania (Morata 23')",        time: '2026-06-12T15:23:00', read: false, matchId: 'm2' },
  { id: 'n3', type: 'reminder', title: 'Resultado final',         message: 'Francia venció a Inglaterra 2-1',           time: '2026-06-10T22:45:00', read: true,  matchId: 'm3' },
  { id: 'n4', type: 'alert',    title: 'Nueva lámina disponible', message: 'Has recibido un nuevo paquete de láminas',  time: '2026-06-11T10:00:00', read: false  },
  { id: 'n5', type: 'info',     title: 'Colombia en cuartos',     message: 'Colombia clasificó a cuartos de final',     time: '2026-06-13T20:00:00', read: true,  matchId: 'm4' },
  { id: 'n6', type: 'reminder', title: 'Recordatorio de partido', message: 'Colombia vs México en 3 horas',             time: '2026-06-13T16:00:00', read: false, matchId: 'm4' },
];

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="space-y-6">

      <!-- Header -->
      <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 class="text-3xl mb-2 text-gray-900">Notificaciones 🔔</h1>
          <p class="text-gray-600">
            {{ unreadCount() > 0
              ? 'Tienes ' + unreadCount() + ' notificación' + (unreadCount() > 1 ? 'es' : '') + ' sin leer'
              : 'No tienes notificaciones sin leer' }}
          </p>
        </div>

        <button *ngIf="unreadCount() > 0"
          (click)="markAllAsRead()"
          class="flex items-center gap-2 px-4 py-2 border-2 border-[#00B140] text-[#00B140] rounded-lg hover:bg-[#00B140] hover:text-white transition-colors text-sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4M7 12l2 2 4-4"/>
          </svg>
          Marcar todas como leídas
        </button>
      </div>

      <!-- Stats rápidas -->
      <div class="grid grid-cols-3 gap-4">
        <div class="bg-white rounded-xl shadow-md border border-gray-100 p-4 text-center">
          <p class="text-2xl text-gray-900">{{ notifications().length }}</p>
          <p class="text-sm text-gray-500 mt-1">Total</p>
        </div>
        <div class="bg-blue-50 rounded-xl border border-blue-100 p-4 text-center">
          <p class="text-2xl text-[#003087]">{{ unreadCount() }}</p>
          <p class="text-sm text-blue-600 mt-1">Sin leer</p>
        </div>
        <div class="bg-green-50 rounded-xl border border-green-100 p-4 text-center">
          <p class="text-2xl text-[#00B140]">{{ notifications().length - unreadCount() }}</p>
          <p class="text-sm text-green-600 mt-1">Leídas</p>
        </div>
      </div>

      <!-- Tabs filtro -->
      <div class="flex gap-0 border-b border-gray-200">
        <button
          (click)="filter.set('all')"
          [class]="filter() === 'all'
            ? 'px-4 py-3 border-b-2 border-[#00B140] text-[#00B140] text-sm transition-colors'
            : 'px-4 py-3 border-b-2 border-transparent text-gray-600 hover:text-gray-900 text-sm transition-colors'">
          Todas ({{ notifications().length }})
        </button>
        <button
          (click)="filter.set('unread')"
          [class]="filter() === 'unread'
            ? 'px-4 py-3 border-b-2 border-[#00B140] text-[#00B140] text-sm transition-colors'
            : 'px-4 py-3 border-b-2 border-transparent text-gray-600 hover:text-gray-900 text-sm transition-colors'">
          Sin leer ({{ unreadCount() }})
        </button>
        <button
          (click)="filter.set('read')"
          [class]="filter() === 'read'
            ? 'px-4 py-3 border-b-2 border-[#00B140] text-[#00B140] text-sm transition-colors'
            : 'px-4 py-3 border-b-2 border-transparent text-gray-600 hover:text-gray-900 text-sm transition-colors'">
          Leídas ({{ notifications().length - unreadCount() }})
        </button>
      </div>

      <!-- Lista de notificaciones -->
      <div class="space-y-3">

        <!-- Empty state -->
        <div *ngIf="filteredNotifications().length === 0"
          class="bg-white rounded-xl shadow-md border border-gray-100 p-12 text-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24"
            stroke="#d1d5db" stroke-width="1.5" class="mx-auto mb-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
          </svg>
          <h3 class="text-xl text-gray-600 mb-2">No hay notificaciones</h3>
          <p class="text-gray-500">
            {{ filter() === 'unread' ? 'No tienes notificaciones sin leer' :
               filter() === 'read'   ? 'No tienes notificaciones leídas' :
               'No hay notificaciones para mostrar' }}
          </p>
        </div>

        <!-- Notificación item -->
        <div *ngFor="let notif of filteredNotifications()"
          [class]="'bg-white rounded-xl shadow-md border p-5 transition-all duration-300 ' +
            (!notif.read ? 'border-l-4 border-l-[#00B140] bg-blue-50 border-t-gray-100 border-r-gray-100 border-b-gray-100' : 'border-gray-100')">

          <div class="flex items-start gap-4">
            <!-- Icono tipo -->
            <div [class]="'p-3 rounded-lg text-2xl flex-shrink-0 ' + typeIconBg(notif.type)">
              {{ typeIcon(notif.type) }}
            </div>

            <div class="flex-1 min-w-0">
              <div class="flex items-start justify-between gap-4 mb-2">
                <div class="flex-1 min-w-0">
                  <!-- Título + punto no leído -->
                  <div class="flex items-center gap-2 mb-1">
                    <h3 [class]="'text-lg truncate ' + (!notif.read ? 'text-gray-900' : 'text-gray-600')">
                      {{ notif.title }}
                    </h3>
                    <div *ngIf="!notif.read"
                      class="w-2 h-2 bg-[#00B140] rounded-full flex-shrink-0"></div>
                  </div>

                  <p class="text-gray-600 text-sm mb-2">{{ notif.message }}</p>

                  <!-- Tiempo + badge tipo -->
                  <div class="flex items-center gap-3 text-sm text-gray-500 flex-wrap">
                    <span>{{ formatTime(notif.time) }}</span>
                    <span [class]="typeBadgeClass(notif.type)">
                      {{ typeLabel(notif.type) }}
                    </span>
                  </div>
                </div>

                <!-- Acciones -->
                <div class="flex gap-1 flex-shrink-0">
                  <button *ngIf="!notif.read"
                    (click)="markAsRead(notif.id)"
                    title="Marcar como leída"
                    class="p-2 hover:bg-white rounded-lg transition-colors text-gray-500 hover:text-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4M7 12l2 2 4-4"/>
                    </svg>
                  </button>
                  <button
                    (click)="deleteNotification(notif.id)"
                    title="Eliminar"
                    class="p-2 hover:bg-red-50 rounded-lg transition-colors text-red-500 hover:text-red-700">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <polyline points="3 6 5 6 21 6"/><path stroke-linecap="round" stroke-linejoin="round" d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6m5 0V4h4v2"/>
                    </svg>
                  </button>
                </div>
              </div>

              <!-- Enlace a partido -->
              <a *ngIf="notif.matchId"
                [routerLink]="['/matches', notif.matchId]"
                class="inline-flex items-center gap-1 text-sm text-[#00B140] hover:underline mt-1">
                Ver partido relacionado →
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  `,
})
export class NotificationsComponent {
  notifications = signal<Notification[]>(INITIAL);
  filter        = signal<Filter>('all');

  unreadCount = computed(() => this.notifications().filter(n => !n.read).length);

  filteredNotifications = computed(() => {
    const f = this.filter();
    return this.notifications().filter(n => {
      if (f === 'unread') return !n.read;
      if (f === 'read')   return n.read;
      return true;
    });
  });

  markAsRead(id: string) {
    this.notifications.update(list =>
      list.map(n => n.id === id ? { ...n, read: true } : n)
    );
  }

  markAllAsRead() {
    this.notifications.update(list => list.map(n => ({ ...n, read: true })));
  }

  deleteNotification(id: string) {
    this.notifications.update(list => list.filter(n => n.id !== id));
  }

  formatTime(dateStr: string): string {
    return new Date(dateStr).toLocaleString('es-ES', {
      month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit',
    });
  }

  typeIcon(type: string): string {
    return type === 'alert' ? '🔔' : type === 'reminder' ? '⏰' : 'ℹ️';
  }

  typeIconBg(type: string): string {
    return type === 'alert' ? 'bg-red-100' : type === 'reminder' ? 'bg-yellow-100' : 'bg-blue-100';
  }

  typeLabel(type: string): string {
    return type === 'alert' ? 'Alerta' : type === 'reminder' ? 'Recordatorio' : 'Info';
  }

  typeBadgeClass(type: string): string {
    const base = 'px-2 py-0.5 rounded-full text-xs';
    if (type === 'alert')    return `${base} bg-red-100 text-red-700`;
    if (type === 'reminder') return `${base} bg-yellow-100 text-yellow-700`;
    return `${base} bg-blue-100 text-blue-700`;
  }
}
