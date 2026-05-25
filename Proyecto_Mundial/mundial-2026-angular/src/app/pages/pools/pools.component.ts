import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PollasService } from '../../services/pollas.service';
import { PartidosService } from '../../services/partidos.service';
import { AuthService } from '../../services/auth.service';

type Tab = 'rankings' | 'predictions' | 'my-pools';

interface Prediction { homeScore: number; awayScore: number; saved: boolean; }

@Component({
  selector: 'app-pools',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="space-y-6">

      <!-- Header -->
      <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 class="text-3xl mb-2 text-gray-900">Pollas 🏆</h1>
          <p class="text-gray-600">Compite con tus amigos prediciendo resultados</p>
        </div>
        <button (click)="showModal.set(true)"
          class="flex items-center gap-2 px-4 py-2.5 bg-[#00B140] text-white rounded-lg hover:bg-[#009633] transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
          Crear Polla
        </button>
      </div>

      <!-- Pool info card -->
      <div *ngIf="currentPool()" class="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl shadow-md border border-purple-100 p-6">
        <div class="flex flex-col sm:flex-row items-start justify-between gap-4">
          <div class="flex-1">
            <h2 class="text-2xl mb-2 text-gray-800">{{ currentPool()?.nombre || currentPool()?.name }}</h2>
            <div class="flex items-center gap-4 text-sm text-gray-600">
              <div class="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                {{ (currentPool()?.members || []).length }} miembros
              </div>
              <div class="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
                </svg>
                {{ matches().length }} partidos
              </div>
            </div>
          </div>

          <div class="text-right">
            <p class="text-sm text-gray-600 mb-2">Código de la polla</p>
            <div class="flex items-center gap-2">
              <code class="px-3 py-2 bg-white rounded-lg text-lg font-mono shadow-sm border border-purple-100">
                {{ currentPool()?.codigo || currentPool()?.code }}
              </code>
              <button (click)="copyCode(currentPool()?.codigo || currentPool()?.code)"
                class="p-2 hover:bg-white rounded-lg transition-colors"
                [title]="copied() ? 'Copiado!' : 'Copiar código'">
                <svg *ngIf="!copied()" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#6b7280" stroke-width="2">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                  <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
                </svg>
                <svg *ngIf="copied()" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#00B140" stroke-width="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Tabs -->
      <div class="flex gap-0 border-b border-gray-200 overflow-x-auto">
        <button *ngFor="let tab of tabs"
          (click)="activeTab.set(tab.id)"
          [class]="'flex items-center gap-2 px-4 py-3 border-b-2 transition-colors whitespace-nowrap text-sm ' +
            (activeTab() === tab.id
              ? 'border-[#00B140] text-[#00B140]'
              : 'border-transparent text-gray-600 hover:text-gray-900')">
          <span [innerHTML]="tab.icon" class="w-4 h-4"></span>
          {{ tab.label }}
        </button>
      </div>

      <!-- ── RANKING ── -->
      <div *ngIf="activeTab() === 'rankings'" class="space-y-4">
        <div class="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
          <div class="p-6 bg-gradient-to-r from-yellow-50 to-amber-50 border-b border-amber-200">
            <h3 class="text-xl flex items-center gap-2 text-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="#ca8a04" stroke-width="2">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
              </svg>
              Tabla de Posiciones
            </h3>
          </div>

          <div *ngIf="currentPool()" class="divide-y divide-gray-100">
            <div *ngFor="let ranking of currentRanking(); let i = index"
              [class]="'p-6 flex items-center gap-4 ' + (ranking.usuario_id === currentUser()?.id || ranking.userId === currentUser()?.id ? 'bg-green-50' : 'hover:bg-gray-50 transition-colors')">

              <!-- Posición -->
              <div [class]="'w-12 h-12 rounded-full flex items-center justify-center text-2xl flex-shrink-0 ' + medalClass(i)">
                {{ medalIcon(i) }}
              </div>

              <!-- Avatar -->
              <div class="text-3xl flex-shrink-0">{{ ranking.avatar || '👤' }}</div>

              <!-- Nombre -->
              <div class="flex-1">
                <h4 class="text-lg text-gray-800">{{ ranking.usuario_nombre || ranking.userName }}</h4>
                <span *ngIf="ranking.usuario_id === currentUser()?.id || ranking.userId === currentUser()?.id"
                  class="px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-xs">Tú</span>
              </div>

              <!-- Puntos -->
              <div class="text-right">
                <div class="text-3xl text-gray-800">{{ ranking.puntos || ranking.totalPoints || 0 }}</div>
                <div class="text-sm text-gray-500">puntos</div>
              </div>

              <!-- Tendencia -->
              <div class="flex items-center gap-1 text-green-600 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
                </svg>
                <span class="text-sm">+5</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Stats personales -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div class="bg-white rounded-xl shadow-md border border-gray-100 p-6 text-center">
            <div class="text-3xl text-gray-800 mb-2">0</div>
            <div class="text-sm text-gray-500">Total de puntos</div>
          </div>
          <div class="bg-white rounded-xl shadow-md border border-gray-100 p-6 text-center">
            <div class="text-3xl text-gray-800 mb-2">0</div>
            <div class="text-sm text-gray-500">Predicciones correctas</div>
          </div>
          <div class="bg-white rounded-xl shadow-md border border-gray-100 p-6 text-center">
            <div class="text-3xl text-gray-800 mb-2">0</div>
            <div class="text-sm text-gray-500">Resultados exactos</div>
          </div>
        </div>
      </div>

      <!-- ── PREDICCIONES ── -->
      <div *ngIf="activeTab() === 'predictions'" class="space-y-4">

        <!-- Activas -->
        <div class="bg-white rounded-xl shadow-md border border-gray-100 p-6">
          <h3 class="text-xl mb-4 text-gray-900">Predicciones Activas</h3>
          <div class="space-y-4">
            <div *ngFor="let match of scheduledMatches" class="p-5 bg-gray-50 rounded-lg">
              <div class="flex flex-col lg:flex-row justify-between gap-4">

                <div class="flex-1">
                  <span class="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs mb-3 inline-block">
                    {{ match.phase }}
                  </span>
                  <div class="flex items-center justify-between max-w-xs mb-2">
                    <div class="flex items-center gap-2">
                      <span class="text-2xl">{{ match.homeTeam.flag }}</span>
                      <span class="text-sm text-gray-800">{{ match.homeTeam.name }}</span>
                    </div>
                    <span class="text-gray-400 mx-2">vs</span>
                    <div class="flex items-center gap-2">
                      <span class="text-sm text-gray-800">{{ match.awayTeam.name }}</span>
                      <span class="text-2xl">{{ match.awayTeam.flag }}</span>
                    </div>
                  </div>
                  <p class="text-xs text-gray-500">{{ formatDate(match.date) }} — {{ match.time }}</p>
                </div>

                <div class="flex flex-col justify-center gap-3">
                  <div class="flex items-center gap-3">
                    <span class="text-sm text-gray-600">Tu predicción:</span>
                    <div class="flex items-center gap-2">
                      <input type="number" min="0" max="9"
                        [(ngModel)]="getPred(match.id).homeScore"
                        class="w-12 h-12 text-center text-xl border-2 border-gray-200 rounded-lg outline-none focus:border-[#00B140] transition-colors"/>
                      <span class="text-xl text-gray-500">—</span>
                      <input type="number" min="0" max="9"
                        [(ngModel)]="getPred(match.id).awayScore"
                        class="w-12 h-12 text-center text-xl border-2 border-gray-200 rounded-lg outline-none focus:border-[#00B140] transition-colors"/>
                    </div>
                  </div>

                  <button (click)="savePred(match.id)"
                    [class]="'px-4 py-2 rounded-lg text-sm transition-colors ' +
                      (getPred(match.id).saved
                        ? 'bg-green-100 text-green-700 border border-green-200'
                        : 'bg-[#00B140] text-white hover:bg-[#009633]')">
                    {{ getPred(match.id).saved ? '✓ Guardado' : 'Guardar predicción' }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Pasadas -->
        <div class="bg-white rounded-xl shadow-md border border-gray-100 p-6">
          <h3 class="text-xl mb-4 text-gray-900">Predicciones Pasadas</h3>
          <div class="space-y-3">
            <div *ngFor="let match of finishedMatches" class="p-4 bg-gray-50 rounded-lg">
              <div class="flex items-center justify-between gap-4">
                <div class="flex-1">
                  <div class="flex items-center gap-2 mb-1 flex-wrap">
                    <span class="text-xl">{{ match.homeTeam.flag }}</span>
                    <span class="text-sm text-gray-800">{{ match.homeTeam.name }}</span>
                    <span class="text-lg mx-1 text-gray-800">{{ match.homeScore }} - {{ match.awayScore }}</span>
                    <span class="text-xl">{{ match.awayTeam.flag }}</span>
                    <span class="text-sm text-gray-800">{{ match.awayTeam.name }}</span>
                  </div>
                  <p class="text-xs text-gray-500">Tu predicción: 2 - 1</p>
                </div>
                <span class="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm flex-shrink-0">
                  +5 pts
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ── MIS POLLAS ── -->
      <div *ngIf="activeTab() === 'my-pools'" class="grid gap-4">
        <div *ngFor="let pool of pools()" class="bg-white rounded-xl shadow-md border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 cursor-pointer">
          <div class="flex items-start justify-between gap-4">
            <div class="flex-1">
              <h3 class="text-xl mb-2 text-gray-800">{{ pool.nombre || pool.name }}</h3>
              <div class="flex items-center gap-4 text-sm text-gray-600 mb-4">
                <div class="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  {{ (pool.members || []).length || 1 }} miembros
                </div>
                <span class="px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-xs">Activa</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-sm text-gray-500">Código:</span>
                <code class="px-2 py-1 bg-gray-100 rounded text-sm">{{ pool.codigo || pool.code }}</code>
              </div>
            </div>
            <button (click)="selectPool(pool)"
              class="px-4 py-2 bg-[#00B140] text-white rounded-lg text-sm hover:bg-[#009633] transition-colors">
              Ver ranking
            </button>
          </div>
        </div>

        <!-- Crear nueva -->
        <div class="bg-white rounded-xl shadow-md border-2 border-dashed border-gray-300 p-12 text-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24"
            stroke="#d1d5db" stroke-width="1.5" class="mx-auto mb-4">
            <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
          </svg>
          <h3 class="text-xl text-gray-500 mb-2">Crea una nueva polla</h3>
          <p class="text-gray-400 mb-6 text-sm">Invita a tus amigos y compite por el primer lugar</p>
          <button (click)="showModal.set(true)"
            class="flex items-center gap-2 px-4 py-2.5 bg-[#00B140] text-white rounded-lg hover:bg-[#009633] transition-colors mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
            </svg>
            Crear Polla
          </button>
        </div>
      </div>

    </div>

    <!-- ── MODAL CREAR POLLA ── -->
    <div *ngIf="showModal()"
      class="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
      (click)="showModal.set(false)">
      <div class="bg-white rounded-xl p-8 max-w-md w-full shadow-2xl"
        (click)="$event.stopPropagation()">
        <h2 class="text-2xl mb-6 text-gray-900">Crear Nueva Polla</h2>

        <div class="space-y-4 mb-6">
          <div>
            <label class="block text-sm mb-2 text-gray-700">Nombre de la polla <span class="text-red-500">*</span></label>
            <input type="text" [(ngModel)]="newPool.name" placeholder="Mi polla del Mundial"
              class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg outline-none focus:border-[#00B140] transition-colors"/>
          </div>
          <div>
            <label class="block text-sm mb-2 text-gray-700">Descripción (opcional)</label>
            <input type="text" [(ngModel)]="newPool.description" placeholder="Descripción de la polla"
              class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg outline-none focus:border-[#00B140] transition-colors"/>
          </div>
          <div>
            <label class="block text-sm mb-2 text-gray-700">Privacidad</label>
            <select [(ngModel)]="newPool.privacy"
              class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg outline-none focus:border-[#00B140] transition-colors">
              <option>Privada (solo con código)</option>
              <option>Pública</option>
            </select>
          </div>
        </div>

        <div class="flex gap-3">
          <button (click)="showModal.set(false)"
            class="flex-1 py-2.5 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
            Cancelar
          </button>
          <button (click)="createPool()"
            class="flex-1 py-2.5 bg-[#00B140] text-white rounded-lg hover:bg-[#009633] transition-colors">
            Crear Polla
          </button>
        </div>
      </div>
    </div>
  `,
})
export class PoolsComponent {
  private pollasService = inject(PollasService);
  private partidosService = inject(PartidosService);
  private authService = inject(AuthService);

  activeTab  = signal<Tab>('rankings');
  showModal  = signal(false);
  copied     = signal(false);

  predictions: Record<string, Prediction> = {};
  pools = signal<any[]>([]);
  currentPool = signal<any | null>(null);
  currentRanking = signal<any[]>([]);
  matches = signal<any[]>([]);

  newPool = { name: '', description: '', privacy: 'Privada (solo con código)' };

  constructor() { this.loadData(); }

  loadData() {
    this.pollasService.getAll().subscribe(data => {
      this.pools.set(data || []);
      if (data && data.length > 0) {
        this.selectPool(data[0]);
      }
    });
    this.partidosService.getAll().subscribe(data => {
      this.matches.set(data || []);
    });
  }

  currentUser() { return this.authService.getCurrentUser(); }

  selectPool(pool: any) {
    this.currentPool.set(pool);
    this.pollasService.getRanking(pool.polla_id || pool.id).subscribe(data => {
      this.currentRanking.set(data || []);
    });
    this.activeTab.set('rankings');
  }

  get scheduledMatches() { return this.matches().filter((m: any) => m.status === 'scheduled' || m.status === 'programado'); }
  get finishedMatches()  { return this.matches().filter((m: any) => m.status === 'finished' || m.status === 'finalizado'); }

  tabs = [
    { id: 'rankings'    as Tab, label: 'Ranking',       icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>` },
    { id: 'predictions' as Tab, label: 'Predicciones',  icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>` },
    { id: 'my-pools'   as Tab, label: 'Mis Pollas',    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>` },
  ];

  getPred(matchId: string): Prediction {
    if (!this.predictions[matchId]) {
      this.predictions[matchId] = { homeScore: 2, awayScore: 1, saved: false };
    }
    return this.predictions[matchId];
  }

  savePred(matchId: string) {
    const p = this.getPred(matchId);
    if (!this.currentPool()) return;
    const poolId = this.currentPool().polla_id || this.currentPool().id;
    this.pollasService.savePronosticos(poolId, [{ matchId, homeScore: p.homeScore, awayScore: p.awayScore }]).subscribe({
      next: () => {
        p.saved = true;
        setTimeout(() => { if (this.predictions[matchId]) this.predictions[matchId].saved = false; }, 2500);
      }
    });
  }

  medalIcon(i: number)  { return i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : `#${i + 1}`; }
  medalClass(i: number) {
    if (i === 0) return 'bg-yellow-100 text-yellow-700';
    if (i === 1) return 'bg-gray-100 text-gray-700';
    if (i === 2) return 'bg-orange-100 text-orange-700';
    return 'bg-gray-50 text-gray-500';
  }

  copyCode(code: string | undefined) {
    if (!code) return;
    navigator.clipboard.writeText(code).catch(() => {});
    this.copied.set(true);
    setTimeout(() => this.copied.set(false), 2000);
  }

  createPool() {
    if (!this.newPool.name.trim()) return;
    this.pollasService.create({ nombre: this.newPool.name, descripcion: this.newPool.description }).subscribe({
      next: () => {
        this.newPool = { name: '', description: '', privacy: 'Privada (solo con código)' };
        this.showModal.set(false);
        this.loadData();
        this.activeTab.set('my-pools');
      }
    });
  }

  formatDate(d: string) {
    return new Date(d).toLocaleDateString('es-ES', { month: 'short', day: 'numeric' });
  }
}
