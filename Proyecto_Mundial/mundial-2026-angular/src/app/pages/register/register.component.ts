import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <div class="min-h-screen bg-gradient-to-br from-[#00B140] via-[#00509E] to-[#003087] flex items-center justify-center p-4">
      <div class="w-full max-w-md">

        <!-- Logo -->
        <div class="text-center mb-8">
          <div class="w-20 h-20 bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-5xl mx-auto mb-4 shadow-2xl">
            ⚽
          </div>
          <h1 class="text-4xl font-black text-white mb-2">MUNDIAL 2026</h1>
          <p class="text-white text-opacity-80">Crea tu cuenta y vive la experiencia</p>
        </div>

        <!-- Card -->
        <div class="bg-white rounded-2xl shadow-2xl p-8">
          <h2 class="text-2xl text-gray-900 mb-6 text-center">Crear Cuenta</h2>

          <div class="space-y-5">
            <!-- Nombre -->
            <div>
              <label class="block text-sm mb-2 text-gray-700">Nombre completo</label>
              <div class="relative">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24"
                  stroke="#9ca3af" stroke-width="2" class="absolute left-3 top-1/2 -translate-y-1/2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
                <input type="text" [(ngModel)]="nombre" placeholder="Juan Pérez"
                  class="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg outline-none focus:border-[#00B140] transition-colors"
                  id="register-name"/>
              </div>
            </div>

            <!-- Email -->
            <div>
              <label class="block text-sm mb-2 text-gray-700">Email</label>
              <div class="relative">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24"
                  stroke="#9ca3af" stroke-width="2" class="absolute left-3 top-1/2 -translate-y-1/2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"/>
                </svg>
                <input type="email" [(ngModel)]="email" placeholder="tu@email.com"
                  class="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg outline-none focus:border-[#00B140] transition-colors"
                  id="register-email"/>
              </div>
            </div>

            <!-- Password -->
            <div>
              <label class="block text-sm mb-2 text-gray-700">Contraseña (mín. 8 caracteres)</label>
              <div class="relative">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24"
                  stroke="#9ca3af" stroke-width="2" class="absolute left-3 top-1/2 -translate-y-1/2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>
                </svg>
                <input [type]="showPassword() ? 'text' : 'password'" [(ngModel)]="password" placeholder="••••••••"
                  class="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg outline-none focus:border-[#00B140] transition-colors"
                  id="register-password"/>
              </div>
            </div>

            <!-- Confirm Password -->
            <div>
              <label class="block text-sm mb-2 text-gray-700">Confirmar contraseña</label>
              <div class="relative">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24"
                  stroke="#9ca3af" stroke-width="2" class="absolute left-3 top-1/2 -translate-y-1/2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
                <button (click)="showPassword.set(!showPassword())"
                  class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path *ngIf="!showPassword()" stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                    <path *ngIf="!showPassword()" stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                    <path *ngIf="showPassword()" stroke-linecap="round" stroke-linejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"/>
                  </svg>
                </button>
                <input [type]="showPassword() ? 'text' : 'password'" [(ngModel)]="confirmPassword" placeholder="••••••••"
                  class="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg outline-none focus:border-[#00B140] transition-colors"
                  (keyup.enter)="register()" id="register-confirm"/>
              </div>
            </div>

            <!-- Error -->
            <div *ngIf="error()" class="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
              {{ error() }}
            </div>

            <!-- Submit -->
            <button (click)="register()" [disabled]="loading()"
              class="w-full py-3 bg-gradient-to-r from-[#003087] to-[#00509E] text-white rounded-lg hover:from-[#002266] hover:to-[#003d7a] transition-all duration-300 flex items-center justify-center gap-2 text-lg shadow-lg hover:shadow-xl disabled:opacity-50"
              id="register-submit">
              <svg *ngIf="loading()" class="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
              </svg>
              {{ loading() ? 'Creando cuenta...' : 'Crear Cuenta' }}
            </button>
          </div>

          <!-- Divider -->
          <div class="flex items-center gap-4 my-6">
            <div class="flex-1 border-t border-gray-200"></div>
            <span class="text-sm text-gray-400">¿Ya tienes cuenta?</span>
            <div class="flex-1 border-t border-gray-200"></div>
          </div>

          <!-- Login link -->
          <a routerLink="/login"
            class="block w-full py-3 text-center border-2 border-[#00B140] text-[#00B140] rounded-lg hover:bg-[#00B140] hover:text-white transition-colors"
            id="goto-login">
            Iniciar Sesión
          </a>
        </div>

        <!-- Footer -->
        <p class="text-center text-white text-opacity-60 text-sm mt-6">
          © 2026 Mundial Hub — Proyecto Académico
        </p>
      </div>
    </div>
  `,
})
export class RegisterComponent {
  nombre = '';
  email = '';
  password = '';
  confirmPassword = '';
  showPassword = signal(false);
  loading = signal(false);
  error = signal<string | null>(null);

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    this.error.set(null);

    if (!this.nombre || !this.email || !this.password || !this.confirmPassword) {
      this.error.set('Por favor completa todos los campos');
      return;
    }

    if (this.password.length < 8) {
      this.error.set('La contraseña debe tener al menos 8 caracteres');
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.error.set('Las contraseñas no coinciden');
      return;
    }

    this.loading.set(true);
    this.authService.register(this.nombre, this.email, this.password).subscribe({
      next: () => {
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        this.loading.set(false);
        this.error.set(err.error?.message || 'Error al crear la cuenta');
      },
    });
  }
}
