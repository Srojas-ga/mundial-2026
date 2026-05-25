import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SoporteService } from '../../services/soporte.service';
import { Case } from '../../models';

type Tab = 'cases' | 'new' | 'faq';

interface FaqItem { question: string; answer: string; }
interface NewCaseForm { category: string; asunto: string; descripcion: string; }

@Component({
  selector: 'app-support',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="space-y-6">

      <!-- Header -->
      <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 class="text-3xl mb-2 text-gray-900">Soporte 🆘</h1>
          <p class="text-gray-600">Estamos aquí para ayudarte</p>
        </div>
        <button *ngIf="activeTab() !== 'new'"
          (click)="activeTab.set('new')"
          class="flex items-center gap-2 px-4 py-2.5 bg-[#00B140] text-white rounded-lg hover:bg-[#009633] transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
          </svg>
          Nuevo Caso
        </button>
      </div>

      <!-- Stats -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div class="bg-white rounded-xl shadow-md border border-gray-100 p-6">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm text-gray-600 mb-1">Casos Activos</p>
              <p class="text-3xl text-gray-900">{{ openCases.length }}</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="#2563eb" stroke-width="2">
              <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
            </svg>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-md border border-gray-100 p-6">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm text-gray-600 mb-1">Casos Resueltos</p>
              <p class="text-3xl text-gray-900">{{ resolvedCases.length }}</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="#16a34a" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-md border border-gray-100 p-6">
          <div>
            <p class="text-sm text-gray-600 mb-1">Tiempo Promedio</p>
            <p class="text-3xl text-gray-900">2.5h</p>
          </div>
        </div>
      </div>

      <!-- Tabs -->
      <div class="flex gap-0 border-b border-gray-200">
        <button *ngFor="let tab of tabs"
          (click)="activeTab.set(tab.id)"
          [class]="activeTab() === tab.id
            ? 'flex items-center gap-2 px-4 py-3 border-b-2 border-[#00B140] text-[#00B140] transition-colors text-sm'
            : 'flex items-center gap-2 px-4 py-3 border-b-2 border-transparent text-gray-600 hover:text-gray-900 transition-colors text-sm'">
          <span [innerHTML]="tab.icon"></span>
          {{ tab.label }}
        </button>
      </div>

      <!-- ── TAB: MIS CASOS ── -->
      <div *ngIf="activeTab() === 'cases'" class="space-y-4">

        <ng-container *ngIf="cases().length > 0; else noCases">
          <div *ngFor="let caso of cases()"
            class="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
            (click)="toggleCase(caso.id)">
            <div class="p-6">
              <!-- Header del caso -->
              <div class="flex items-start justify-between gap-4 mb-3">
                <div class="flex-1">
                  <div class="flex items-center gap-2 mb-2 flex-wrap">
                    <span [innerHTML]="statusIcon(caso.status)"></span>
                    <span [class]="statusBadgeClass(caso.status)">
                      {{ statusLabel(caso.status) }}
                    </span>
                    <span class="text-sm text-gray-500">Caso #{{ caso.id.toUpperCase() }}</span>
                  </div>
                  <h3 class="text-lg mb-1 text-gray-800">{{ caso.title }}</h3>
                  <p class="text-gray-600 text-sm">{{ caso.description }}</p>
                </div>
                <div class="text-right text-sm text-gray-500 flex-shrink-0">
                  <div>Creado:</div>
                  <div>{{ formatDateTime(caso.createdAt) }}</div>
                </div>
              </div>

              <!-- Indicador expand -->
              <div class="flex justify-end mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24"
                  stroke="#9ca3af" stroke-width="2"
                  [class]="selectedCase() === caso.id ? 'rotate-180 transition-transform' : 'transition-transform'">
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </div>

              <!-- Timeline expandible -->
              <div *ngIf="selectedCase() === caso.id" class="pt-4 border-t border-gray-200 mt-3">
                <h4 class="text-sm mb-3 text-gray-700">Línea de Tiempo</h4>
                <div class="space-y-3">
                  <div *ngFor="let event of caso.timeline; let i = index" class="flex gap-3">
                    <div class="flex flex-col items-center">
                      <div class="w-2.5 h-2.5 bg-[#00B140] rounded-full flex-shrink-0 mt-1"></div>
                      <div *ngIf="i < caso.timeline.length - 1" class="w-0.5 bg-gray-200 flex-1 mt-1"></div>
                    </div>
                    <div class="flex-1 pb-3">
                      <p class="text-sm text-gray-800">{{ event.action }}</p>
                      <p class="text-xs text-gray-500 mt-0.5">{{ event.by }} · {{ formatDateTime(event.date) }}</p>
                    </div>
                  </div>
                </div>

                <!-- Agregar comentario si está en proceso -->
                <div *ngIf="caso.status === 'in-progress'" class="mt-4 flex gap-2" (click)="$event.stopPropagation()">
                  <input type="text" placeholder="Agregar comentario..."
                    class="flex-1 px-4 py-2 border-2 border-gray-200 rounded-lg outline-none focus:border-[#00B140] text-sm transition-colors"/>
                  <button class="px-3 py-2 bg-[#00B140] text-white rounded-lg hover:bg-[#009633] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </ng-container>

        <ng-template #noCases>
          <div class="bg-white rounded-xl shadow-md border border-gray-100 p-12 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="none" viewBox="0 0 24 24"
              stroke="#d1d5db" stroke-width="1.5" class="mx-auto mb-4">
              <circle cx="12" cy="12" r="10"/><path stroke-linecap="round" stroke-linejoin="round" d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>
            </svg>
            <h3 class="text-xl text-gray-600 mb-2">No tienes casos abiertos</h3>
            <p class="text-gray-500 mb-6">Si tienes algún problema, no dudes en contactarnos</p>
            <button (click)="activeTab.set('new')"
              class="px-6 py-2.5 bg-[#00B140] text-white rounded-lg hover:bg-[#009633] transition-colors">
              Crear Nuevo Caso
            </button>
          </div>
        </ng-template>
      </div>

      <!-- ── TAB: NUEVO CASO ── -->
      <div *ngIf="activeTab() === 'new'"
        class="bg-white rounded-xl shadow-md border border-gray-100 p-8 max-w-2xl mx-auto">
        <h2 class="text-2xl mb-6 text-gray-900">Crear Nuevo Caso de Soporte</h2>

        <div class="space-y-6">
          <div>
            <label class="block text-sm mb-2 text-gray-700">Categoría *</label>
            <select [(ngModel)]="newCase.category"
              class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg outline-none focus:border-[#00B140] transition-colors">
              <option value="">Selecciona una categoría</option>
              <option>Problema con entradas</option>
              <option>No recibí confirmación</option>
              <option>Error en la aplicación</option>
              <option>Problema con transferencia</option>
              <option>Pregunta general</option>
              <option>Otro</option>
            </select>
          </div>

          <div>
            <label class="block text-sm mb-2 text-gray-700">Asunto *</label>
            <input type="text" [(ngModel)]="newCase.asunto"
              placeholder="Describe brevemente tu problema"
              class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg outline-none focus:border-[#00B140] transition-colors"/>
          </div>

          <div>
            <label class="block text-sm mb-2 text-gray-700">Descripción *</label>
            <textarea [(ngModel)]="newCase.descripcion" rows="6"
              placeholder="Describe tu problema en detalle..."
              class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg outline-none focus:border-[#00B140] transition-colors resize-none">
            </textarea>
          </div>

          <div>
            <label class="block text-sm mb-2 text-gray-700">Adjuntar archivos (opcional)</label>
            <div class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-[#00B140] transition-colors cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24"
                stroke="#9ca3af" stroke-width="1.5" class="mx-auto mb-3">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"/>
              </svg>
              <p class="text-gray-600">Haz clic o arrastra archivos aquí</p>
              <p class="text-sm text-gray-400 mt-1">PNG, JPG, PDF (max 5MB)</p>
            </div>
          </div>

          <div *ngIf="caseSent()" class="flex items-center gap-2 p-3 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm">
            ✓ Caso enviado correctamente. Te contactaremos pronto.
          </div>

          <div *ngIf="caseError()" class="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
            ⚠️ Por favor completa todos los campos obligatorios.
          </div>

          <div class="flex flex-col sm:flex-row gap-3">
            <button (click)="activeTab.set('cases')"
              class="flex-1 py-2.5 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
              Cancelar
            </button>
            <button (click)="submitCase()"
              class="flex-1 flex items-center justify-center gap-2 py-2.5 bg-[#00B140] text-white rounded-lg hover:bg-[#009633] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
              Enviar Caso
            </button>
          </div>
        </div>
      </div>

      <!-- ── TAB: FAQ ── -->
      <div *ngIf="activeTab() === 'faq'" class="max-w-3xl mx-auto space-y-4">

        <div class="bg-white rounded-xl shadow-md border border-gray-100 p-6">
          <h2 class="text-2xl mb-6 text-gray-900">Preguntas Frecuentes</h2>
          <div class="space-y-0">
            <div *ngFor="let item of faqItems; let last = last"
              [class]="'cursor-pointer ' + (!last ? 'border-b border-gray-200' : '')"
              (click)="toggleFaq(item.question)">
              <div class="py-5">
                <div class="flex items-start gap-3 justify-between">
                  <div class="flex items-start gap-3 flex-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24"
                      stroke="#00B140" stroke-width="2" class="flex-shrink-0 mt-0.5">
                      <circle cx="12" cy="12" r="10"/><path stroke-linecap="round" stroke-linejoin="round" d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>
                    </svg>
                    <h3 class="text-gray-800">{{ item.question }}</h3>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24"
                    stroke="#9ca3af" stroke-width="2" class="flex-shrink-0 mt-1 transition-transform"
                    [class.rotate-180]="openFaq() === item.question">
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </div>
                <p *ngIf="openFaq() === item.question"
                  class="text-gray-600 ml-8 mt-3 text-sm leading-relaxed">
                  {{ item.answer }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- CTA -->
        <div class="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl shadow-md border border-blue-100 p-6 text-center">
          <h3 class="text-xl mb-2 text-gray-900">¿No encontraste lo que buscabas?</h3>
          <p class="text-gray-600 mb-4">Nuestro equipo de soporte está listo para ayudarte</p>
          <button (click)="activeTab.set('new')"
            class="px-6 py-2.5 bg-[#00B140] text-white rounded-lg hover:bg-[#009633] transition-colors">
            Contactar Soporte
          </button>
        </div>
      </div>

    </div>
  `,
})
export class SupportComponent {
  private soporteService = inject(SoporteService);

  activeTab    = signal<Tab>('cases');
  selectedCase = signal<string | null>(null);
  openFaq      = signal<string | null>(null);
  caseSent     = signal(false);
  caseError    = signal(false);
  cases        = signal<any[]>([]);

  newCase: NewCaseForm = { category: '', asunto: '', descripcion: '' };

  constructor() { this.loadCases(); }

  loadCases() {
    this.soporteService.getAll().subscribe(data => {
      const mapped = (data || []).map((c: any) => ({
        ...c,
        id: c.soporte_id || c.id,
        status: c.estado || c.status,
        title: c.titulo || c.title,
        description: c.descripcion || c.description,
        createdAt: c.fecha_creacion || c.createdAt,
        timeline: c.historial || c.timeline || []
      }));
      this.cases.set(mapped);
    });
  }

  get openCases()     { return this.cases().filter((c: any) => c.status === 'open' || c.status === 'in-progress' || c.estado === 'abierto' || c.estado === 'en_proceso'); }
  get resolvedCases() { return this.cases().filter((c: any) => c.status === 'resolved' || c.status === 'closed' || c.estado === 'resuelto'); }

  tabs = [
    { id: 'cases' as Tab, label: 'Mis Casos',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path stroke-linecap="round" stroke-linejoin="round" d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>` },
    { id: 'new' as Tab, label: 'Nuevo Caso',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>` },
    { id: 'faq' as Tab, label: 'Preguntas Frecuentes',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path stroke-linecap="round" stroke-linejoin="round" d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>` },
  ];

  faqItems: FaqItem[] = [
    { question: '¿Cómo puedo cambiar mi contraseña?',
      answer: 'Ve a Configuración > Seguridad > Cambiar contraseña. Necesitarás tu contraseña actual para confirmar el cambio.' },
    { question: '¿Puedo transferir una entrada a otra persona?',
      answer: 'Sí, puedes transferir entradas pagadas a través de la sección "Mis Entradas". El proceso es irreversible.' },
    { question: '¿Cómo funcionan las pollas?',
      answer: 'Las pollas son grupos donde puedes hacer predicciones de partidos. Ganas puntos por acertar el resultado. El que más puntos acumule gana.' },
    { question: '¿Qué hago si no recibo mis notificaciones?',
      answer: 'Verifica que las notificaciones estén habilitadas en tu perfil y que tu navegador permita notificaciones de esta aplicación.' },
    { question: '¿Cómo agrego equipos favoritos?',
      answer: 'Ve a Configuración > Preferencias y selecciona los equipos que quieres seguir. Recibirás notificaciones prioritarias de sus partidos.' },
    { question: '¿Puedo usar la app en varios dispositivos?',
      answer: 'Sí, tu cuenta funciona en todos los dispositivos. Inicia sesión con tu email y contraseña desde cualquier dispositivo.' },
  ];

  toggleCase(id: string) {
    this.selectedCase.update(v => v === id ? null : id);
  }

  toggleFaq(q: string) {
    this.openFaq.update(v => v === q ? null : q);
  }

  submitCase() {
    this.caseError.set(false);
    this.caseSent.set(false);
    if (!this.newCase.category || !this.newCase.asunto || !this.newCase.descripcion) {
      this.caseError.set(true);
      return;
    }
    this.soporteService.create({
      titulo: this.newCase.asunto,
      descripcion: this.newCase.descripcion,
      categoria: this.newCase.category,
    }).subscribe({
      next: () => {
        this.caseSent.set(true);
        this.newCase = { category: '', asunto: '', descripcion: '' };
        this.loadCases();
        setTimeout(() => { this.caseSent.set(false); this.activeTab.set('cases'); }, 2500);
      },
      error: () => this.caseError.set(true),
    });
  }

  formatDateTime(dateStr: string): string {
    return new Date(dateStr).toLocaleDateString('es-ES', {
      month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit',
    });
  }

  statusLabel(status: string): string {
    return status === 'open' ? 'Abierto' : status === 'in-progress' ? 'En Proceso'
      : status === 'resolved' ? 'Resuelto' : 'Cerrado';
  }

  statusBadgeClass(status: string): string {
    const base = 'px-2 py-1 rounded-full text-xs';
    if (status === 'open')        return `${base} bg-yellow-100 text-yellow-700`;
    if (status === 'in-progress') return `${base} bg-blue-100 text-blue-700`;
    if (status === 'resolved')    return `${base} bg-green-100 text-green-700`;
    return `${base} bg-gray-100 text-gray-700`;
  }

  statusIcon(status: string): string {
    if (status === 'open')
      return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#d97706" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`;
    if (status === 'in-progress')
      return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#2563eb" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`;
    return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#16a34a" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`;
  }
}
