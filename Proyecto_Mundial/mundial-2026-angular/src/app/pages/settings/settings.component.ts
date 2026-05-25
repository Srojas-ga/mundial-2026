import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

type Tab = 'profile' | 'notifications' | 'preferences' | 'security';

interface NotifSetting {
  key: string;
  label: string;
  description: string;
  checked: boolean;
}

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="space-y-6">

      <div>
        <h1 class="text-3xl mb-2 text-gray-900">Configuración ⚙️</h1>
        <p class="text-gray-600">Administra tu cuenta y preferencias</p>
      </div>

      <div class="flex flex-col lg:flex-row gap-6">

        <!-- Sidebar tabs -->
        <div class="bg-white rounded-xl shadow-md border border-gray-100 w-full lg:w-64 p-4 h-fit">
          <nav class="space-y-1">
            <button *ngFor="let tab of tabs"
              (click)="activeTab.set(tab.id)"
              [class]="tabClass(tab.id)">
              <span [innerHTML]="tab.icon" class="w-5 h-5 flex-shrink-0"></span>
              <span>{{ tab.label }}</span>
            </button>
          </nav>
        </div>

        <!-- Contenido -->
        <div class="flex-1">

          <!-- PERFIL -->
          <div *ngIf="activeTab() === 'profile'" class="bg-white rounded-xl shadow-md border border-gray-100 p-8">
            <h2 class="text-2xl mb-6 text-gray-900">Información del Perfil</h2>

            <div class="flex items-center gap-6 mb-8 pb-8 border-b border-gray-200">
              <div class="w-24 h-24 bg-gradient-to-br from-[#00B140] to-[#003087] rounded-full flex items-center justify-center text-5xl overflow-hidden">
                <img *ngIf="currentUser()?.avatar?.startsWith('http')" [src]="currentUser()?.avatar" class="w-full h-full object-cover"/>
                <span *ngIf="!currentUser()?.avatar?.startsWith('http')">{{ currentUser()?.avatar || '👤' }}</span>
              </div>
              <div>
                <h3 class="text-xl mb-1 text-gray-800">{{ currentUser()?.name }}</h3>
                <p class="text-gray-600 text-sm">{{ currentUser()?.email }}</p>
                <button (click)="changePhoto()" class="mt-3 px-4 py-1.5 text-sm border-2 border-[#00B140] text-[#00B140] rounded-lg hover:bg-[#00B140] hover:text-white transition-colors">
                  Cambiar foto
                </button>
              </div>
            </div>

            <div class="space-y-6">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm mb-2 text-gray-700">Nombre</label>
                  <input type="text" [(ngModel)]="profileForm.nombre"
                    class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg outline-none focus:border-[#00B140] transition-colors"/>
                </div>
                <div>
                  <label class="block text-sm mb-2 text-gray-700">Apellidos</label>
                  <input type="text" [(ngModel)]="profileForm.apellidos"
                    class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg outline-none focus:border-[#00B140] transition-colors"/>
                </div>
              </div>

              <div>
                <label class="block text-sm mb-2 text-gray-700">Email</label>
                <input type="email" [(ngModel)]="profileForm.email"
                  class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg outline-none focus:border-[#00B140] transition-colors"/>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm mb-2 text-gray-700">País</label>
                  <select [(ngModel)]="profileForm.pais"
                    class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg outline-none focus:border-[#00B140] transition-colors">
                    <option>Colombia</option>
                    <option>México</option>
                    <option>Argentina</option>
                    <option>Estados Unidos</option>
                  </select>
                </div>
                <div>
                  <label class="block text-sm mb-2 text-gray-700">Zona Horaria</label>
                  <select [(ngModel)]="profileForm.zona"
                    class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg outline-none focus:border-[#00B140] transition-colors">
                    <option>GMT-5 (Bogotá)</option>
                    <option>GMT-6 (México)</option>
                    <option>GMT-3 (Buenos Aires)</option>
                    <option>GMT-8 (Los Ángeles)</option>
                  </select>
                </div>
              </div>

              <div *ngIf="savedProfile()" class="flex items-center gap-2 p-3 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm">
                ✓ Cambios guardados correctamente
              </div>

              <div class="flex justify-end gap-3 pt-6 border-t border-gray-200">
                <button class="px-4 py-2.5 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                  Cancelar
                </button>
                <button (click)="saveProfile()"
                  class="flex items-center gap-2 px-4 py-2.5 bg-[#00B140] text-white rounded-lg hover:bg-[#009633] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"/>
                  </svg>
                  Guardar Cambios
                </button>
              </div>
            </div>
          </div>

          <!-- NOTIFICACIONES -->
          <div *ngIf="activeTab() === 'notifications'" class="bg-white rounded-xl shadow-md border border-gray-100 p-8">
            <h2 class="text-2xl mb-6 text-gray-900">Preferencias de Notificaciones</h2>

            <div class="space-y-0">
              <div *ngFor="let notif of notifSettings; let last = last"
                [class]="'flex items-center justify-between py-4 ' + (!last ? 'border-b border-gray-200' : '')">
                <div>
                  <h3 class="mb-1 text-gray-800">{{ notif.label }}</h3>
                  <p class="text-sm text-gray-600">{{ notif.description }}</p>
                </div>
                <label class="relative inline-flex items-center cursor-pointer ml-4">
                  <input type="checkbox" [(ngModel)]="notif.checked" class="sr-only peer"/>
                  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer
                    peer-checked:after:translate-x-full peer-checked:after:border-white
                    after:content-[''] after:absolute after:top-[2px] after:left-[2px]
                    after:bg-white after:border-gray-300 after:border after:rounded-full
                    after:h-5 after:w-5 after:transition-all peer-checked:bg-[#00B140]"></div>
                </label>
              </div>
            </div>

            <div *ngIf="savedNotif()" class="mt-4 flex items-center gap-2 p-3 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm">
              ✓ Preferencias guardadas
            </div>

            <div class="flex justify-end pt-6 border-t border-gray-200 mt-6">
              <button (click)="saveNotif()"
                class="flex items-center gap-2 px-4 py-2.5 bg-[#00B140] text-white rounded-lg hover:bg-[#009633] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"/>
                </svg>
                Guardar Preferencias
              </button>
            </div>
          </div>

          <!-- PREFERENCIAS -->
          <div *ngIf="activeTab() === 'preferences'" class="bg-white rounded-xl shadow-md border border-gray-100 p-8">
            <h2 class="text-2xl mb-6 text-gray-900">Mis Preferencias</h2>

            <div class="space-y-6">
              <div>
                <label class="block text-sm mb-3 text-gray-700">Equipos Favoritos</label>
                <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <label *ngFor="let team of teams"
                    [class]="'flex items-center gap-2 p-3 border-2 rounded-lg cursor-pointer transition-all ' +
                      (favoriteTeams.includes(team.id) ? 'border-[#00B140] bg-green-50' : 'border-gray-200 hover:border-gray-300')">
                    <input type="checkbox"
                      [checked]="favoriteTeams.includes(team.id)"
                      (change)="toggleTeam(team.id)"
                      class="w-4 h-4 rounded border-gray-300 accent-[#00B140]"/>
                    <span class="text-2xl">{{ team.flag }}</span>
                    <span class="text-sm text-gray-700">{{ team.name }}</span>
                  </label>
                </div>
              </div>

              <div>
                <label class="block text-sm mb-3 text-gray-700">Ciudades de Interés</label>
                <div class="grid grid-cols-2 gap-3">
                  <label *ngFor="let city of availableCities"
                    [class]="'flex items-center gap-2 p-3 border-2 rounded-lg cursor-pointer transition-all ' +
                      (favoriteCities.includes(city) ? 'border-[#00B140] bg-green-50' : 'border-gray-200 hover:border-gray-300')">
                    <input type="checkbox"
                      [checked]="favoriteCities.includes(city)"
                      (change)="toggleCity(city)"
                      class="w-4 h-4 rounded border-gray-300 accent-[#00B140]"/>
                    <span class="text-sm text-gray-700">📍 {{ city }}</span>
                  </label>
                </div>
              </div>

              <div>
                <label class="block text-sm mb-2 text-gray-700">Idioma</label>
                <select [(ngModel)]="selectedLanguage"
                  class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg outline-none focus:border-[#00B140] transition-colors">
                  <option>🇪🇸 Español</option>
                  <option>🇺🇸 English</option>
                  <option>🇧🇷 Português</option>
                  <option>🇫🇷 Français</option>
                </select>
              </div>

              <div *ngIf="savedPrefs()" class="flex items-center gap-2 p-3 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm">
                ✓ Preferencias guardadas correctamente
              </div>

              <div class="flex justify-end pt-6 border-t border-gray-200">
                <button (click)="savePrefs()"
                  class="flex items-center gap-2 px-4 py-2.5 bg-[#00B140] text-white rounded-lg hover:bg-[#009633] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"/>
                  </svg>
                  Guardar Preferencias
                </button>
              </div>
            </div>
          </div>

          <!-- SEGURIDAD -->
          <div *ngIf="activeTab() === 'security'" class="bg-white rounded-xl shadow-md border border-gray-100 p-8">
            <h2 class="text-2xl mb-6 text-gray-900">Seguridad</h2>

            <div class="space-y-6">
              <div class="p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#16a34a" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
                <p class="text-sm text-green-800">Tu cuenta está protegida</p>
              </div>

              <div>
                <h3 class="mb-4 text-gray-800">Cambiar Contraseña</h3>
                <div class="space-y-4">
                  <div>
                    <label class="block text-sm mb-2 text-gray-700">Contraseña actual</label>
                    <input type="password" [(ngModel)]="securityForm.current" placeholder="••••••••"
                      class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg outline-none focus:border-[#00B140] transition-colors"/>
                  </div>
                  <div>
                    <label class="block text-sm mb-2 text-gray-700">Nueva contraseña</label>
                    <input type="password" [(ngModel)]="securityForm.newPass" placeholder="••••••••"
                      class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg outline-none focus:border-[#00B140] transition-colors"/>
                  </div>
                  <div>
                    <label class="block text-sm mb-2 text-gray-700">Confirmar nueva contraseña</label>
                    <input type="password" [(ngModel)]="securityForm.confirm" placeholder="••••••••"
                      class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg outline-none focus:border-[#00B140] transition-colors"/>
                  </div>
                </div>

                <div *ngIf="passwordError()" class="mt-3 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                  {{ passwordError() }}
                </div>
                <div *ngIf="savedPassword()" class="mt-3 p-3 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm">
                  ✓ Contraseña actualizada correctamente
                </div>

                <button (click)="updatePassword()" class="mt-4 px-4 py-2.5 bg-[#00B140] text-white rounded-lg hover:bg-[#009633] transition-colors">
                  Actualizar Contraseña
                </button>
              </div>

              <div class="pt-6 border-t border-gray-200">
                <h3 class="mb-2 text-gray-800">Autenticación de Dos Factores</h3>
                <p class="text-sm text-gray-600 mb-4">Agrega una capa extra de seguridad a tu cuenta</p>
                <button (click)="toggle2FA()" class="px-4 py-2.5 border-2 border-[#003087] text-[#003087] rounded-lg hover:bg-[#003087] hover:text-white transition-colors">
                  {{ twoFactorEnabled() ? 'Desactivar 2FA' : 'Activar 2FA' }}
                </button>
              </div>

              <div class="pt-6 border-t border-gray-200">
                <h3 class="mb-2 text-red-600">Zona de Peligro</h3>
                <p class="text-sm text-gray-600 mb-4">Estas acciones son irreversibles. Procede con cuidado.</p>
                <div class="flex flex-wrap gap-3">
                  <button (click)="confirmModal.set('desactivar')"
                    class="px-4 py-2.5 border-2 border-red-500 text-red-600 rounded-lg hover:bg-red-50 transition-colors">
                    Desactivar Cuenta
                  </button>
                  <button (click)="confirmModal.set('eliminar')"
                    class="px-4 py-2.5 border-2 border-red-500 text-red-600 rounded-lg hover:bg-red-50 transition-colors">
                    Eliminar Cuenta
                  </button>
                </div>

                <div *ngIf="confirmModal()" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                  <div class="bg-white rounded-xl p-8 max-w-md w-full mx-4 shadow-2xl">
                    <h3 class="text-xl mb-4 text-gray-900">¿Estás seguro?</h3>
                    <p class="text-gray-600 mb-6">Esta acción es irreversible. ¿Deseas {{ confirmModal() }} tu cuenta?</p>
                    <div class="flex gap-3 justify-end">
                      <button (click)="confirmModal.set(null)"
                        class="px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                        Cancelar
                      </button>
                      <button (click)="confirmAction()"
                        class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                        Confirmar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  `,
})
export class SettingsComponent {
  private router = inject(Router);
  authService = inject(AuthService);
  currentUser = signal(this.authService.getCurrentUser());

  activeTab     = signal<Tab>('profile');
  savedProfile  = signal(false);
  savedNotif    = signal(false);
  savedPrefs    = signal(false);
  savedPassword = signal(false);
  passwordError = signal<string | null>(null);
  confirmModal  = signal<string | null>(null);
  twoFactorEnabled = signal(localStorage.getItem('2FA') === 'true');

  profileForm = {
    nombre:   this.currentUser()?.name.split(' ')[0] || '',
    apellidos: this.currentUser()?.name.split(' ').slice(1).join(' ') || '',
    email:    this.currentUser()?.email || '',
    pais:     'Colombia',
    zona:     'GMT-5 (Bogotá)',
  };

  notifSettings: NotifSetting[] = [
    { key: 'live',    label: 'Partidos en vivo',      description: 'Recibe notificaciones cuando inicien los partidos',       checked: true  },
    { key: 'goals',   label: 'Goles y eventos',        description: 'Notificaciones de goles, tarjetas y eventos importantes', checked: true  },
    { key: 'results', label: 'Resultados finales',     description: 'Recibe el resultado cuando termine un partido',           checked: true  },
    { key: 'pools',   label: 'Pollas y rankings',      description: 'Actualizaciones de tus pollas y posiciones',              checked: true  },
    { key: 'album',   label: 'Álbum digital',          description: 'Nuevos paquetes y ofertas de intercambio',               checked: false },
    { key: 'news',    label: 'Noticias y promociones', description: 'Recibe novedades y ofertas especiales',                   checked: false },
  ];

  constructor() {
    this.authService.getPreferencias().subscribe((data: any) => {
      if (data?.data) {
        const prefs = data.data;
        if (prefs.idioma) this.selectedLanguage = prefs.idioma;
        if (prefs.zona_horaria) this.profileForm.zona = prefs.zona_horaria;
        if (prefs.canal_notificacion) {
          const canales = prefs.canal_notificacion.split(',');
          this.notifSettings.forEach(n => n.checked = canales.includes(n.key));
        }
        if (prefs.equipos_favoritos) this.favoriteTeams = prefs.equipos_favoritos.map((e: any) => e.id);
        if (prefs.ciudades_favoritas) this.favoriteCities = prefs.ciudades_favoritas;
      }
    });
  }

  teams = [
    { id: '1', name: 'Argentina', flag: '🇦🇷' },
    { id: '2', name: 'Brasil', flag: '🇧🇷' },
    { id: '3', name: 'España', flag: '🇪🇸' },
    { id: '4', name: 'Alemania', flag: '🇩🇪' },
    { id: '5', name: 'Francia', flag: '🇫🇷' },
    { id: '7', name: 'Colombia', flag: '🇨🇴' },
    { id: '8', name: 'México', flag: '🇲🇽' },
  ];
  
  favoriteTeams:  string[] = [...(this.currentUser()?.favoriteTeams || [])];
  favoriteCities: string[] = [...(this.currentUser()?.cities || [])];
  availableCities = ['Nueva York', 'Los Ángeles', 'Dallas', 'Ciudad de México'];
  selectedLanguage = '🇪🇸 Español';

  securityForm = { current: '', newPass: '', confirm: '' };

  tabs: { id: Tab; label: string; icon: string }[] = [
    { id: 'profile',       label: 'Perfil',          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>` },
    { id: 'notifications', label: 'Notificaciones',  icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>` },
    { id: 'preferences',   label: 'Preferencias',    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>` },
    { id: 'security',      label: 'Seguridad',       icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>` },
  ];

  tabClass(id: Tab): string {
    const base = 'w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-left';
    return this.activeTab() === id ? `${base} bg-[#00B140] text-white` : `${base} text-gray-700 hover:bg-gray-100`;
  }

  toggleTeam(id: string) {
    const idx = this.favoriteTeams.indexOf(id);
    idx >= 0 ? this.favoriteTeams.splice(idx, 1) : this.favoriteTeams.push(id);
  }

  toggleCity(city: string) {
    const idx = this.favoriteCities.indexOf(city);
    idx >= 0 ? this.favoriteCities.splice(idx, 1) : this.favoriteCities.push(city);
  }

  private toast(sig: ReturnType<typeof signal<boolean>>) {
    sig.set(true);
    setTimeout(() => sig.set(false), 3000);
  }

  changePhoto() {
    const url = prompt('Ingresa la URL de tu nueva foto de perfil (puedes usar un emoji o una imagen):', this.currentUser()?.avatar || '');
    if (url !== null && url.trim() !== '') {
      this.authService.updateProfile({ avatar: url.trim() }).subscribe({
        next: () => {
          this.currentUser.set(this.authService.getCurrentUser());
          this.toast(this.savedProfile);
        },
        error: () => alert('Error al actualizar la foto')
      });
    }
  }

  saveProfile() {
    this.authService.updateProfile({
      nombre: `${this.profileForm.nombre} ${this.profileForm.apellidos}`.trim(),
      email: this.profileForm.email,
    }).subscribe({
      next: () => {
        this.currentUser.set(this.authService.getCurrentUser());
        this.toast(this.savedProfile);
      },
      error: () => this.toast(this.savedProfile),
    });
  }
  saveNotif() {
    const canales = this.notifSettings.filter(n => n.checked).map(n => n.key).join(',');
    this.authService.updatePreferencias({ canal_notificacion: canales }).subscribe(() => this.toast(this.savedNotif));
  }

  savePrefs() {
    this.authService.updatePreferencias({
      idioma: this.selectedLanguage,
      zona_horaria: this.profileForm.zona,
      equipos_favoritos: this.favoriteTeams,
      ciudades_favoritas: this.favoriteCities
    }).subscribe(() => this.toast(this.savedPrefs));
  }

  updatePassword() {
    this.passwordError.set(null);
    this.savedPassword.set(false);
    if (!this.securityForm.current) { this.passwordError.set('Ingresa tu contraseña actual.'); return; }
    if (this.securityForm.newPass.length < 8) { this.passwordError.set('La nueva contraseña debe tener al menos 8 caracteres.'); return; }
    if (this.securityForm.newPass !== this.securityForm.confirm) { this.passwordError.set('Las contraseñas no coinciden.'); return; }
    this.authService.updatePassword(this.securityForm.current, this.securityForm.newPass).subscribe({
      next: () => {
        this.securityForm = { current: '', newPass: '', confirm: '' };
        this.toast(this.savedPassword);
      },
      error: (err: any) => this.passwordError.set(err.error?.message || 'Error al cambiar contraseña'),
    });
  }

  confirmAction() {
    const action = this.confirmModal();
    if (!action) return;
    
    if (action === 'desactivar') {
      this.authService.updateStatus('inactivo').subscribe(() => {
        this.authService.logout();
        this.router.navigate(['/auth/login']);
      });
    } else if (action === 'eliminar') {
      this.authService.updateStatus('eliminado').subscribe(() => {
        this.authService.logout();
        this.router.navigate(['/auth/login']);
      });
    }
    this.confirmModal.set(null);
  }

  toggle2FA() {
    const val = !this.twoFactorEnabled();
    this.twoFactorEnabled.set(val);
    localStorage.setItem('2FA', val.toString());
    alert(val ? 'Autenticación de dos factores activada.' : 'Autenticación de dos factores desactivada.');
  }
}
