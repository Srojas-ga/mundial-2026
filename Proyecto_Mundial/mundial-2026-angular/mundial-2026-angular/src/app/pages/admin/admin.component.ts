import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="flex items-center justify-center min-h-[60vh]">
      <div class="text-center">
        <div class="text-6xl mb-4">🚧</div>
        <h1 class="text-2xl font-bold text-gray-800 mb-2">Página en construcción</h1>
        <p class="text-gray-500 mb-6">Esta sección se migrará próximamente</p>
        <a routerLink="/dashboard" class="bg-[#00B140] text-white px-6 py-2 rounded-lg hover:bg-[#009633] transition-colors">
          Volver al Dashboard
        </a>
      </div>
    </div>
  `,
})
export class AdminComponent {}
