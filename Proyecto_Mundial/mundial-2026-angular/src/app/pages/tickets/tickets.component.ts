import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EntradasService } from '../../services/entradas.service';
import { PartidosService } from '../../services/partidos.service';
import { Ticket, Match } from '../../models';

interface TicketWithMatch { ticket: Ticket; match: Match; }

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="space-y-6">

      <!-- Header -->
      <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 class="text-3xl mb-2 text-gray-900">Mis Entradas 🎫</h1>
          <p class="text-gray-600">Gestiona tus boletos para los partidos</p>
        </div>
        <button class="flex items-center gap-2 px-4 py-2.5 bg-[#00B140] text-white rounded-lg hover:bg-[#009633] transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"/>
          </svg>
          Buscar Entradas
        </button>
      </div>

      <!-- Stats -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl shadow-md border border-green-100 p-6">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm text-gray-600 mb-1">Entradas Pagadas</p>
              <p class="text-3xl text-gray-900">{{ paidCount }}</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="#16a34a" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
        </div>

        <div class="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl shadow-md border border-yellow-100 p-6">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm text-gray-600 mb-1">Reservadas</p>
              <p class="text-3xl text-gray-900">{{ reservedCount }}</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="#d97706" stroke-width="2">
              <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
            </svg>
          </div>
        </div>

        <div class="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl shadow-md border border-blue-100 p-6">
          <div>
            <p class="text-sm text-gray-600 mb-1">Total Gastado</p>
            <p class="text-3xl text-gray-900">{{ '$' + totalSpent.toLocaleString() }}</p>
          </div>
        </div>
      </div>

      <!-- Lista de entradas -->
      <div class="grid gap-4">
        <div *ngFor="let item of ticketsWithMatch"
          [class]="'bg-white rounded-xl shadow-md border overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl ' +
            (selectedTicket() === item.ticket.id ? 'ring-2 ring-[#00B140] border-transparent' : 'border-gray-100')"
          (click)="toggleTicket(item.ticket.id)">

          <div class="flex flex-col lg:flex-row">

            <!-- Info principal -->
            <div class="flex-1 p-6">
              <div class="flex items-start justify-between mb-4">
                <div class="flex-1">

                  <!-- Badges -->
                  <div class="flex items-center gap-2 mb-3 flex-wrap">
                    <span [class]="statusBadgeClass(item.ticket.status)">
                      {{ statusLabel(item.ticket.status) }}
                    </span>
                    <span class="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                      {{ item.match.phase }}
                    </span>
                  </div>

                  <!-- Partido -->
                  <h3 class="text-xl mb-3 text-gray-800">
                    {{ item.match.homeTeam.flag }} {{ item.match.homeTeam.name }}
                    vs
                    {{ item.match.awayTeam.name }} {{ item.match.awayTeam.flag }}
                  </h3>

                  <!-- Detalles en grid -->
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p class="text-gray-500 mb-0.5">Fecha y Hora</p>
                      <p class="text-gray-800 capitalize">{{ formatDateLong(item.match.date) }}</p>
                      <p class="text-gray-600">{{ item.match.time }}</p>
                    </div>
                    <div>
                      <p class="text-gray-500 mb-0.5">Ubicación</p>
                      <p class="text-gray-800">{{ item.match.stadium }}</p>
                      <p class="text-gray-600">{{ item.match.city }}</p>
                    </div>
                    <div>
                      <p class="text-gray-500 mb-0.5">Asiento</p>
                      <p class="text-gray-800">Sección {{ item.ticket.section }}</p>
                      <p class="text-gray-600">Asiento {{ item.ticket.seat }}</p>
                    </div>
                    <div>
                      <p class="text-gray-500 mb-0.5">Precio</p>
                      <p class="text-2xl text-gray-800">{{ '$' + item.ticket.price }}</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Acciones expandibles -->
              <div *ngIf="selectedTicket() === item.ticket.id"
                class="flex flex-wrap gap-2 pt-4 border-t border-gray-200 mt-2">

                <!-- Paid actions -->
                <ng-container *ngIf="item.ticket.status === 'paid'">
                  <button class="flex items-center gap-2 px-3 py-2 bg-[#00B140] text-white rounded-lg text-sm hover:bg-[#009633] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h.01M9 12h.01M9 15h.01M12 9h.01M12 12h.01M12 15h.01M15 9h.01M15 12h.01M15 15h.01"/>
                    </svg>
                    Ver QR
                  </button>
                  <button class="flex items-center gap-2 px-3 py-2 border-2 border-[#00B140] text-[#00B140] rounded-lg text-sm hover:bg-[#00B140] hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                    </svg>
                    Descargar PDF
                  </button>
                  <button
                    (click)="openTransferModal(item.ticket.id); $event.stopPropagation()"
                    class="flex items-center gap-2 px-3 py-2 border-2 border-gray-300 text-gray-700 rounded-lg text-sm hover:bg-gray-50 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                    </svg>
                    Transferir
                  </button>
                </ng-container>

                <!-- Reserved actions -->
                <ng-container *ngIf="item.ticket.status === 'reserved'">
                  <button class="flex items-center gap-2 px-3 py-2 bg-[#00B140] text-white rounded-lg text-sm hover:bg-[#009633] transition-colors">
                    Completar Pago
                  </button>
                  <button class="flex items-center gap-2 px-3 py-2 border-2 border-red-400 text-red-600 rounded-lg text-sm hover:bg-red-50 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>
                    </svg>
                    Cancelar Reserva
                  </button>
                </ng-container>

                <!-- Available actions -->
                <button *ngIf="item.ticket.status === 'available'"
                  class="flex items-center gap-2 px-3 py-2 bg-[#00B140] text-white rounded-lg text-sm hover:bg-[#009633] transition-colors">
                  Reservar Entrada
                </button>
              </div>
            </div>

            <!-- Stub derecho -->
            <div [class]="'lg:w-48 p-6 border-l-2 border-dashed flex flex-col items-center justify-center gap-4 ' + stubBg(item.ticket.status)">
              <div class="text-6xl">🎫</div>
              <div class="text-center">
                <p class="text-xs text-gray-500 mb-1">ID de Entrada</p>
                <p class="text-xs font-mono bg-white px-2 py-1 rounded shadow-sm">
                  {{ item.ticket.id.toUpperCase() }}
                </p>
              </div>
              <div *ngIf="item.ticket.purchaseDate" class="text-center">
                <p class="text-xs text-gray-500">Comprada el</p>
                <p class="text-xs text-gray-700">{{ formatDateShort(item.ticket.purchaseDate) }}</p>
              </div>
              <!-- Indicador expand -->
              <div class="mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24"
                  stroke="#9ca3af" stroke-width="2"
                  [class]="selectedTicket() === item.ticket.id ? 'rotate-180 transition-transform' : 'transition-transform'">
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty state -->
      <div *ngIf="ticketsWithMatch.length === 0"
        class="bg-white rounded-xl shadow-md border border-gray-100 p-12 text-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="none" viewBox="0 0 24 24"
          stroke="#d1d5db" stroke-width="1.5" class="mx-auto mb-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"/>
        </svg>
        <h3 class="text-xl text-gray-600 mb-2">No tienes entradas</h3>
        <p class="text-gray-500 mb-6">Comienza a reservar tus boletos para los partidos del Mundial</p>
        <button class="px-6 py-2.5 bg-[#00B140] text-white rounded-lg hover:bg-[#009633] transition-colors">
          Buscar Entradas
        </button>
      </div>

      <!-- ── Modal transferencia ── -->
      <div *ngIf="transferModal()"
        class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
        (click)="transferModal.set(false)">
        <div class="bg-white rounded-xl p-8 max-w-md w-full shadow-2xl"
          (click)="$event.stopPropagation()">
          <h2 class="text-2xl mb-6 text-gray-900">Transferir Entrada</h2>

          <div class="space-y-4 mb-6">
            <div>
              <label class="block text-sm mb-2 text-gray-700">Email del destinatario *</label>
              <input type="email" [(ngModel)]="transferEmail"
                placeholder="destinatario@email.com"
                class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg outline-none focus:border-[#00B140] transition-colors"/>
            </div>

            <div class="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p class="text-sm text-yellow-800">
                ⚠️ La transferencia es irreversible. Asegúrate de que el email sea correcto.
              </p>
            </div>

            <div *ngIf="transferError()" class="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
              Por favor ingresa un email válido.
            </div>

            <div *ngIf="transferSuccess()" class="p-3 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm">
              ✓ Entrada transferida exitosamente.
            </div>
          </div>

          <div class="flex gap-3">
            <button (click)="transferModal.set(false)"
              class="flex-1 py-2.5 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
              Cancelar
            </button>
            <button (click)="confirmTransfer()"
              class="flex-1 flex items-center justify-center gap-2 py-2.5 bg-[#00B140] text-white rounded-lg hover:bg-[#009633] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
              Transferir
            </button>
          </div>
        </div>
      </div>

    </div>
  `,
})
export class TicketsComponent {
  private entradasService = inject(EntradasService);
  private partidosService = inject(PartidosService);

  selectedTicket  = signal<string | null>(null);
  transferModal   = signal(false);
  transferEmail   = '';
  transferError   = signal(false);
  transferSuccess = signal(false);
  tickets = signal<any[]>([]);
  matches = signal<any[]>([]);

  constructor() { this.loadData(); }

  loadData() {
    this.entradasService.getAll().subscribe(data => this.tickets.set(data || []));
    this.partidosService.getAll().subscribe(data => this.matches.set(data || []));
  }

  get ticketsWithMatch(): any[] {
    return this.tickets()
      .map((ticket: any) => {
        const match = this.matches().find((m: any) => m.id === ticket.matchId || m.partido_id === ticket.partido_id);
        return match ? { ticket, match } : { ticket, match: { homeTeam: { name: 'TBD', flag: '🏳️' }, awayTeam: { name: 'TBD', flag: '🏳️' }, date: ticket.fecha || '', time: '', stadium: ticket.seccion || '', city: '' } };
      });
  }

  get paidCount()     { return this.tickets().filter((t: any) => t.status === 'paid' || t.estado === 'pagada').length; }
  get reservedCount() { return this.tickets().filter((t: any) => t.status === 'reserved' || t.estado === 'reservada').length; }
  get totalSpent()    { return this.tickets().filter((t: any) => t.status === 'paid' || t.estado === 'pagada').reduce((s: number, t: any) => s + (t.price || t.precio || 0), 0); }

  toggleTicket(id: string) {
    this.selectedTicket.update(v => v === id ? null : id);
  }

  openTransferModal(id: string) {
    this.transferEmail   = '';
    this.transferError.set(false);
    this.transferSuccess.set(false);
    this.transferModal.set(true);
  }

  confirmTransfer() {
    this.transferError.set(false);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.transferEmail)) {
      this.transferError.set(true);
      return;
    }
    this.transferSuccess.set(true);
    setTimeout(() => this.transferModal.set(false), 2000);
  }

  formatDateLong(d: string): string {
    return new Date(d).toLocaleDateString('es-ES', { weekday: 'long', month: 'long', day: 'numeric' });
  }

  formatDateShort(d: string): string {
    return new Date(d).toLocaleDateString('es-ES', { year: 'numeric', month: 'short', day: 'numeric' });
  }

  statusLabel(status: string): string {
    return status === 'paid' ? '✓ Pagada' : status === 'reserved' ? '⏳ Reservada'
      : status === 'available' ? 'Disponible' : '↗ Transferida';
  }

  statusBadgeClass(status: string): string {
    const base = 'px-3 py-1 rounded-full text-sm flex items-center gap-1 w-fit';
    if (status === 'paid')        return `${base} bg-green-100 text-green-700`;
    if (status === 'reserved')    return `${base} bg-yellow-100 text-yellow-700`;
    if (status === 'available')   return `${base} bg-blue-100 text-blue-700`;
    return `${base} bg-gray-100 text-gray-600`;
  }

  stubBg(status: string): string {
    if (status === 'paid')      return 'bg-gradient-to-br from-green-50 to-emerald-50';
    if (status === 'reserved')  return 'bg-gradient-to-br from-yellow-50 to-amber-50';
    return 'bg-gradient-to-br from-gray-50 to-slate-50';
  }
}
