import { Routes } from '@angular/router';
import { LayoutComponent } from './components/shared/layout/layout.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // ── Auth (sin layout, sin guard) ──
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.component').then(m => m.LoginComponent),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./pages/register/register.component').then(m => m.RegisterComponent),
  },

  // ── Páginas con layout (protegidas con guard) ──
  {
    path: '',
    component: LayoutComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent),
      },
      {
        path: 'agenda',
        loadComponent: () =>
          import('./pages/agenda/agenda.component').then(m => m.AgendaComponent),
      },
      {
        path: 'matches',
        loadComponent: () =>
          import('./pages/matches/matches.component').then(m => m.MatchesComponent),
      },
      {
        path: 'matches/:id',
        loadComponent: () =>
          import('./pages/matches/matches.component').then(m => m.MatchesComponent),
      },
      {
        path: 'pools',
        loadComponent: () =>
          import('./pages/pools/pools.component').then(m => m.PoolsComponent),
      },
      {
        path: 'album',
        loadComponent: () =>
          import('./pages/album/album.component').then(m => m.AlbumComponent),
      },
      {
        path: 'tickets',
        loadComponent: () =>
          import('./pages/tickets/tickets.component').then(m => m.TicketsComponent),
      },
      {
        path: 'notifications',
        loadComponent: () =>
          import('./pages/notifications/notifications.component').then(m => m.NotificationsComponent),
      },
      {
        path: 'support',
        loadComponent: () =>
          import('./pages/support/support.component').then(m => m.SupportComponent),
      },
      {
        path: 'settings',
        loadComponent: () =>
          import('./pages/settings/settings.component').then(m => m.SettingsComponent),
      },
      {
        path: 'admin',
        loadComponent: () =>
          import('./pages/admin/admin.component').then(m => m.AdminComponent),
      },
    ],
  },

  // Fallback
  { path: '**', redirectTo: 'login' },
];
