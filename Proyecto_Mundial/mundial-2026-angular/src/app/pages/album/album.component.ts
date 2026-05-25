import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlbumService } from '../../services/album.service';

type Tab = 'album' | 'collection' | 'duplicates' | 'exchange';

interface Exchange {
  id: number;
  user: string;
  avatar: string;
  offers: any;
  wants: any;
}

@Component({
  selector: 'app-album',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="space-y-6">

      <!-- Header -->
      <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 class="text-3xl mb-2 text-gray-900">Álbum Digital 📔</h1>
          <p class="text-gray-600">Colecciona láminas del Mundial 2026</p>
        </div>
        <button (click)="openPack()"
          class="flex items-center gap-2 px-4 py-2.5 bg-[#00B140] text-white rounded-lg hover:bg-[#009633] transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
          </svg>
          Abrir Paquete ({{ packsLeft() }} disponibles)
        </button>
      </div>

      <!-- Progreso -->
      <div class="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl shadow-md border border-purple-100 p-6">
        <div class="flex items-start justify-between gap-6 mb-4 flex-wrap">
          <div class="flex-1 min-w-[200px]">
            <h3 class="text-xl mb-2 text-gray-800">Progreso de Colección</h3>
            <div class="flex items-baseline gap-2 mb-3">
              <span class="text-4xl text-gray-900">{{ collected() }}</span>
              <span class="text-2xl text-gray-500">/ {{ totalStickers }}</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-3 mb-2">
              <div class="bg-gradient-to-r from-[#00B140] to-[#003087] h-3 rounded-full transition-all duration-500"
                [style.width]="progress() + '%'">
              </div>
            </div>
            <p class="text-sm text-gray-600">{{ progress().toFixed(1) }}% completado</p>
          </div>

          <div class="grid grid-cols-3 gap-3 text-center">
            <div class="p-3 bg-white rounded-lg shadow-sm">
              <div class="text-2xl text-gray-900 mb-1">{{ duplicates().length }}</div>
              <div class="text-xs text-gray-500">Repetidas</div>
            </div>
            <div class="p-3 bg-white rounded-lg shadow-sm">
              <div class="text-2xl text-yellow-600 mb-1">{{ rareCount() }}</div>
              <div class="text-xs text-gray-500">Raras</div>
            </div>
            <div class="p-3 bg-white rounded-lg shadow-sm">
              <div class="text-2xl text-purple-600 mb-1">{{ legendaryCount() }}</div>
              <div class="text-xs text-gray-500">Legendarias</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Tabs -->
      <div class="flex gap-0 border-b border-gray-200 overflow-x-auto">
        <button *ngFor="let tab of tabs"
          (click)="activeTab.set(tab.id)"
          [class]="activeTab() === tab.id
            ? 'flex items-center gap-2 px-4 py-3 border-b-2 border-[#00B140] text-[#00B140] text-sm whitespace-nowrap transition-colors'
            : 'flex items-center gap-2 px-4 py-3 border-b-2 border-transparent text-gray-600 hover:text-gray-900 text-sm whitespace-nowrap transition-colors'">
          <span [innerHTML]="tab.icon"></span>
          {{ tab.label }}
        </button>
      </div>

      <!-- ── TAB: MI ÁLBUM ── -->
      <div *ngIf="activeTab() === 'album'" class="space-y-6">
        <div class="bg-white rounded-xl shadow-md border border-gray-100 p-6">
          <h3 class="text-xl mb-4 text-gray-900">Página 1 — Argentina 🇦🇷</h3>
          <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            <div *ngFor="let slot of albumSlots(); let i = index"
              [class]="slot
                ? 'aspect-[3/4] rounded-lg border-2 border-[#00B140] bg-white shadow-lg hover:scale-105 cursor-pointer transition-all flex items-center justify-center'
                : 'aspect-[3/4] rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 flex items-center justify-center'">
              <div *ngIf="slot" class="text-center p-1 w-full h-full flex flex-col items-center justify-center">
                <img *ngIf="slot.image && slot.image.startsWith('http')" [src]="slot.image" class="w-12 h-8 object-contain mb-1 rounded" [alt]="slot.playerName" />
                <div *ngIf="!slot.image || !slot.image.startsWith('http')" class="text-3xl mb-1">{{ slot.image }}</div>
                <div class="text-xs text-gray-600">{{ '#' + slot.number }}</div>
              </div>
              <div *ngIf="!slot" class="text-gray-300 text-xs">{{ '#' + (i + 1) }}</div>
            </div>
          </div>
        </div>

        <!-- Paginador -->
        <div class="flex justify-center gap-2 flex-wrap">
          <button class="px-3 py-1.5 bg-[#00B140] text-white rounded-lg text-sm">1</button>
          <button *ngFor="let p of [2,3,4,5]"
            class="px-3 py-1.5 border-2 border-[#00B140] text-[#00B140] rounded-lg text-sm hover:bg-[#00B140] hover:text-white transition-colors">
            {{ p }}
          </button>
          <button class="px-3 py-1.5 border-2 border-gray-200 text-gray-500 rounded-lg text-sm cursor-default">...</button>
          <button class="px-3 py-1.5 border-2 border-[#00B140] text-[#00B140] rounded-lg text-sm hover:bg-[#00B140] hover:text-white transition-colors">33</button>
        </div>
      </div>

      <!-- ── TAB: COLECCIÓN ── -->
      <div *ngIf="activeTab() === 'collection'"
        class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        <div *ngFor="let sticker of myStickers()"
          class="bg-white rounded-xl shadow-md border border-gray-100 p-4 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer">
          <div class="aspect-[3/4] rounded-lg bg-gradient-to-br flex items-center justify-center mb-3 overflow-hidden"
            [class]="rarityBg(sticker.rarity)">
            <img *ngIf="sticker.image && sticker.image.startsWith('http')" [src]="sticker.image" class="w-full h-full object-cover" [alt]="sticker.playerName" />
            <div *ngIf="!sticker.image || !sticker.image.startsWith('http')" class="text-6xl">{{ sticker.image }}</div>
          </div>
          <div class="text-center">
            <span [class]="rarityBadgeClass(sticker.rarity)">
              {{ rarityLabel(sticker.rarity) }}
            </span>
            <div class="text-sm text-gray-700 mt-2">{{ '#' + sticker.number }}</div>
            <div class="text-xs text-gray-800 mt-0.5">{{ sticker.playerName }}</div>
            <div class="text-xs text-gray-500">{{ sticker.team }}</div>
          </div>
        </div>
      </div>

      <!-- ── TAB: REPETIDAS ── -->
      <div *ngIf="activeTab() === 'duplicates'" class="space-y-4">
        <div class="bg-white rounded-xl shadow-md border border-gray-100 p-6">
          <h3 class="text-xl mb-4 text-gray-900">Láminas Repetidas</h3>

          <div *ngIf="duplicates().length > 0" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <div *ngFor="let sticker of duplicates()"
              class="bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
              <div class="aspect-[3/4] rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center mb-3 relative overflow-hidden">
                <img *ngIf="sticker.image && sticker.image.startsWith('http')" [src]="sticker.image" class="w-full h-full object-cover" [alt]="sticker.playerName" />
                <div *ngIf="!sticker.image || !sticker.image.startsWith('http')" class="text-6xl">{{ sticker.image }}</div>
                <span class="absolute top-2 right-2 px-1.5 py-0.5 bg-yellow-100 text-yellow-700 rounded-full text-xs z-10">x2</span>
              </div>
              <div class="text-center text-sm mb-3 text-gray-700">
                {{ '#' + sticker.number }} — {{ sticker.playerName }}
              </div>
              <button class="w-full py-1.5 bg-[#00B140] text-white rounded-lg text-sm hover:bg-[#009633] transition-colors">
                Intercambiar
              </button>
            </div>
          </div>

          <div *ngIf="duplicates().length === 0" class="text-center py-12">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24"
              stroke="#d1d5db" stroke-width="1.5" class="mx-auto mb-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/>
            </svg>
            <p class="text-gray-500">No tienes láminas repetidas</p>
          </div>
        </div>
      </div>

      <!-- ── TAB: INTERCAMBIO ── -->
      <div *ngIf="activeTab() === 'exchange'" class="space-y-4">

        <!-- Ofertas disponibles -->
        <div class="bg-white rounded-xl shadow-md border border-gray-100 p-6">
          <h3 class="text-xl mb-4 text-gray-900">Intercambios Disponibles</h3>
          <div class="space-y-4">
            <div *ngFor="let ex of exchanges()"
              class="p-5 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div class="flex items-start justify-between gap-4 flex-wrap">
                <div class="flex items-center gap-4">
                  <div class="text-3xl">{{ ex.avatar }}</div>
                  <div>
                    <h4 class="mb-1 text-gray-800">{{ ex.user }}</h4>
                    <p class="text-sm text-gray-600">
                      Ofrece: {{ '#' + ex.offers.number }} {{ ex.offers.playerName }}
                      <span class="ml-1">{{ ex.offers.image }}</span>
                    </p>
                    <p class="text-sm text-gray-600">
                      Busca: {{ '#' + ex.wants.number }} {{ ex.wants.playerName }}
                      <span class="ml-1">{{ ex.wants.image }}</span>
                    </p>
                  </div>
                </div>
                <div class="flex gap-2">
                  <button (click)="rejectExchange(ex.id)"
                    class="px-3 py-2 border-2 border-gray-300 text-gray-600 rounded-lg text-sm hover:bg-gray-200 transition-colors">
                    Rechazar
                  </button>
                  <button (click)="acceptExchange(ex.id)"
                    class="px-3 py-2 bg-[#00B140] text-white rounded-lg text-sm hover:bg-[#009633] transition-colors">
                    Aceptar
                  </button>
                </div>
              </div>
            </div>

            <div *ngIf="exchanges().length === 0" class="text-center py-8 text-gray-500">
              <p>No hay intercambios disponibles en este momento</p>
            </div>
          </div>
        </div>

        <!-- Buscar intercambios -->
        <div class="bg-white rounded-xl shadow-md border border-gray-100 p-6">
          <h3 class="text-xl mb-4 text-gray-900">Buscar Intercambios</h3>
          <div class="space-y-3">
            <input type="text" [(ngModel)]="searchQuery"
              placeholder="Buscar por número o nombre de jugador..."
              class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg outline-none focus:border-[#00B140] transition-colors"/>
            <button class="w-full flex items-center justify-center gap-2 py-3 bg-[#00B140] text-white rounded-lg hover:bg-[#009633] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
              Buscar intercambios
            </button>
          </div>
        </div>
      </div>

    </div>

    <!-- ── Modal apertura de paquete ── -->
    <div *ngIf="packModal()"
      class="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 z-50"
      (click)="packModal.set(false)">
      <div class="bg-white rounded-xl p-8 max-w-2xl w-full shadow-2xl"
        (click)="$event.stopPropagation()">

        <div class="text-center mb-6">
          <div class="text-5xl mb-4 animate-bounce">✨</div>
          <h2 class="text-3xl mb-2 text-gray-900">¡Nuevo Paquete!</h2>
          <p class="text-gray-600">Has recibido 5 nuevas láminas</p>
        </div>

        <div class="grid grid-cols-5 gap-3 mb-8">
          <div *ngFor="let sticker of newStickers(); let i = index"
            class="aspect-[3/4] rounded-lg bg-gradient-to-br from-purple-50 to-indigo-50 border-2 border-purple-200 flex flex-col items-center justify-center gap-2 shadow-xl animate-pulse relative overflow-hidden"
            [style.animation-delay]="(i * 0.1) + 's'">
            <img *ngIf="sticker.image && sticker.image.startsWith('http')" [src]="sticker.image" class="absolute inset-0 w-full h-full object-cover opacity-80" [alt]="sticker.playerName" />
            <div *ngIf="!sticker.image || !sticker.image.startsWith('http')" class="text-5xl z-10">{{ sticker.image }}</div>
            <div class="text-xs font-bold text-white bg-black bg-opacity-50 px-2 py-1 rounded absolute bottom-2 z-10">{{ '#' + sticker.number }}</div>
          </div>
        </div>

        <!-- Rarities summary -->
        <div class="flex justify-center gap-4 mb-6 flex-wrap">
          <span *ngFor="let sticker of newStickers()"
            [class]="rarityBadgeClass(sticker.rarity)">
            {{ rarityLabel(sticker.rarity) }}
          </span>
        </div>

        <button (click)="packModal.set(false)"
          class="w-full py-3 bg-[#00B140] text-white rounded-lg hover:bg-[#009633] transition-colors text-lg">
          ¡Genial! 🎉
        </button>
      </div>
    </div>
  `,
})
export class AlbumComponent {
  private albumService = inject(AlbumService);

  activeTab   = signal<Tab>('album');
  packModal   = signal(false);
  newStickers = signal<any[]>([]);
  searchQuery = '';
  packsLeft   = signal(0);
  stickers    = signal<any[]>([]);
  albumData   = signal<any>(null);

  exchanges = signal<any[]>([]);

  readonly totalStickers = 600;
  collected = signal(0);
  progress  = signal(0);
  rareCount = signal(0);
  legendaryCount = signal(0);
  myStickers = signal<any[]>([]);
  duplicates = signal<any[]>([]);
  albumSlots = signal<(any | null)[]>([]);

  constructor() { this.loadData(); }

  loadData() {
    this.albumService.getAlbum().subscribe((data: any) => {
      this.albumData.set(data);
      const laminas = (data?.laminas || []).map((l: any) => ({
        ...l,
        image: l.imagen || l.image,
        playerName: l.nombre || l.playerName,
        number: l.numero || l.number,
        rarity: l.rareza || l.rarity,
        team: l.equipo_nombre || l.team || 'Desconocido'
      }));
      this.stickers.set(laminas);
      this.myStickers.set(laminas);
      this.duplicates.set(laminas.filter((l: any) => l.repetida || l.cantidad > 1));
      this.collected.set(laminas.length);
      this.progress.set((laminas.length / this.totalStickers) * 100);
      this.rareCount.set(laminas.filter((s: any) => s.rareza === 'rara' || s.rarity === 'rare').length);
      this.legendaryCount.set(laminas.filter((s: any) => s.rareza === 'legendaria' || s.rarity === 'legendary').length);
      this.albumSlots.set(Array.from({ length: 18 }, (_, i) => i < laminas.length ? laminas[i] : null));
    });
    this.albumService.getPaquetes().subscribe((packs: any[]) => {
      this.packsLeft.set((packs || []).filter((p: any) => p.estado === 'disponible').length);
    });
    this.albumService.getIntercambios().subscribe((exc: any[]) => {
      this.exchanges.set(exc || []);
    });
  }

  tabs: { id: Tab; label: string; icon: string }[] = [
    { id: 'album',      label: 'Mi Álbum',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>` },
    { id: 'collection', label: 'Colección',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>` },
    { id: 'duplicates', label: 'Repetidas (' + this.duplicates.length + ')',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/></svg>` },
    { id: 'exchange',   label: 'Intercambio',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 014-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 01-4 4H3"/></svg>` },
  ];

  openPack() {
    if (this.packsLeft() <= 0) return;
    this.albumService.getPaquetes().subscribe((packs: any[]) => {
      const avail = (packs || []).find((p: any) => p.estado === 'disponible');
      if (avail) {
        this.albumService.abrirPaquete(avail.paquete_id || avail.id).subscribe((laminas: any[]) => {
          const mapped = (laminas || []).map((l: any) => ({
            ...l,
            image: l.imagen || l.image,
            playerName: l.nombre || l.playerName,
            number: l.numero || l.number,
            rarity: l.rareza || l.rarity,
            team: l.equipo_nombre || l.team || 'Desconocido'
          }));
          this.newStickers.set(mapped);
          this.packModal.set(true);
          this.loadData();
        });
      }
    });
  }

  acceptExchange(id: number) {
    this.exchanges.update(list => list.filter(e => e.id !== id));
  }

  rejectExchange(id: number) {
    this.exchanges.update(list => list.filter(e => e.id !== id));
  }

  rarityLabel(r: string): string {
    return (r === 'legendary' || r === 'legendaria') ? '⭐ Legendaria' : (r === 'rare' || r === 'rara') ? '💎 Rara' : '🎴 Común';
  }

  rarityBadgeClass(r: string): string {
    const base = 'inline-block px-2 py-0.5 rounded-full text-xs mt-2';
    if (r === 'legendary' || r === 'legendaria') return `${base} bg-yellow-100 text-yellow-700`;
    if (r === 'rare' || r === 'rara')      return `${base} bg-blue-100 text-blue-700`;
    return `${base} bg-gray-100 text-gray-600`;
  }

  rarityBg(r: string): string {
    if (r === 'legendary' || r === 'legendaria') return 'from-yellow-50 to-amber-50';
    if (r === 'rare' || r === 'rara')      return 'from-blue-50 to-cyan-50';
    return 'from-gray-50 to-slate-50';
  }
}
