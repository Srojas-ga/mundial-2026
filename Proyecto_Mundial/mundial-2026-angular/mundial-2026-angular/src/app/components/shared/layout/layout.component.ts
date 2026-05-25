import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterLink, RouterLinkActive } from '@angular/router';
import { inject } from '@angular/core';
import { MockDataService } from '../../../services/mock-data.service';

interface NavItem {
  name: string;
  path: string;
  icon: string;
}

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink, RouterLinkActive],
  template: `
    <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">

      <!-- ── Header ── -->
      <header class="bg-white shadow-md sticky top-0 z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center h-16">

            <div class="flex items-center gap-4">
              <!-- Hamburger mobile -->
              <button class="lg:hidden p-1" (click)="toggleMenu()">
                <svg *ngIf="!menuOpen()" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
                <svg *ngIf="menuOpen()" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>

              <!-- Logo -->
              <a routerLink="/dashboard" class="flex items-center gap-3 no-underline">
                <div class="w-10 h-10 bg-gradient-to-br from-[#00B140] to-[#003087] rounded-lg flex items-center justify-center text-white text-xl">
                  ⚽
                </div>
                <span class="font-black text-xl bg-gradient-to-r from-[#00B140] to-[#003087] bg-clip-text text-transparent">
                  MUNDIAL 2026
                </span>
              </a>
            </div>

            <!-- Header actions -->
            <div class="flex items-center gap-4">
              <a routerLink="/notifications" class="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" stroke-width="2" class="text-gray-600">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
                </svg>
                <span class="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </a>

              <a routerLink="/settings" class="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <span class="text-2xl">{{ data.currentUser.avatar }}</span>
                <span class="hidden sm:inline text-sm text-gray-700">{{ data.currentUser.name }}</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Mobile nav -->
        <div *ngIf="menuOpen()" class="lg:hidden border-t border-gray-200 bg-white">
          <nav class="px-4 py-3 space-y-1">
            <a
              *ngFor="let item of navigation"
              [routerLink]="item.path"
              routerLinkActive="bg-[#00B140] text-white"
              [routerLinkActiveOptions]="{exact: false}"
              class="flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-gray-700 hover:bg-gray-100"
              (click)="menuOpen.set(false)"
            >
              <span [innerHTML]="item.icon" class="w-5 h-5 flex-shrink-0"></span>
              <span>{{ item.name }}</span>
            </a>
          </nav>
        </div>
      </header>

      <!-- ── Body ── -->
      <div class="flex max-w-7xl mx-auto">

        <!-- Sidebar desktop -->
        <aside class="hidden lg:block w-64 min-h-[calc(100vh-4rem)] p-6">
          <nav class="space-y-2">
            <a
              *ngFor="let item of navigation"
              [routerLink]="item.path"
              routerLinkActive="bg-[#00B140] text-white shadow-lg"
              [routerLinkActiveOptions]="{exact: false}"
              class="flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 text-gray-700 hover:bg-white hover:shadow-md"
            >
              <span [innerHTML]="item.icon" class="w-5 h-5 flex-shrink-0"></span>
              <span>{{ item.name }}</span>
            </a>

            <div class="pt-6 mt-6 border-t border-gray-200">
              <a routerLink="/settings"
                class="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-white hover:shadow-md transition-all duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span>Configuración</span>
              </a>

              <a routerLink="/login"
                class="flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-all duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
                </svg>
                <span>Cerrar Sesión</span>
              </a>
            </div>
          </nav>
        </aside>

        <!-- Router outlet -->
        <main class="flex-1 p-4 sm:p-6 lg:p-8">
          <router-outlet></router-outlet>
        </main>
      </div>
    </div>
  `,
})
export class LayoutComponent {
  menuOpen = signal(false);
  data = inject(MockDataService);

  toggleMenu() { this.menuOpen.update(v => !v); }

  readonly navigation: NavItem[] = [
    {
      name: 'Inicio', path: '/dashboard',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>`,
    },
    {
      name: 'Agenda', path: '/agenda',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
    },
    {
      name: 'Partidos', path: '/matches',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/><path d="M2 12h20"/></svg>`,
    },
    {
      name: 'Pollas', path: '/pools',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M8 21h8M12 21v-4m0 0a8 8 0 008-8H4a8 8 0 008 8zM12 3v2M4.22 5.22l1.42 1.42M19.78 5.22l-1.42 1.42"/></svg>`,
    },
    {
      name: 'Álbum', path: '/album',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>`,
    },
    {
      name: 'Entradas', path: '/tickets',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"/></svg>`,
    },
    {
      name: 'Notificaciones', path: '/notifications',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>`,
    },
    {
      name: 'Soporte', path: '/support',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
    },
  ];
}
