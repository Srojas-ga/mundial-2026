import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
  bootstrapApplication,
  provideRouter
} from "./chunk-HRYE6XXT.js";
import {
  AuthService
} from "./chunk-JHTY2FGU.js";
import {
  CommonModule,
  NgForOf,
  NgIf,
  inject,
  provideHttpClient,
  provideZoneChangeDetection,
  signal,
  withInterceptors,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-G2QLUSIR.js";

// src/app/components/shared/layout/layout.component.ts
var _c0 = () => ({ exact: false });
function LayoutComponent__svg_svg_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 30);
    \u0275\u0275element(1, "path", 31);
    \u0275\u0275elementEnd();
  }
}
function LayoutComponent__svg_svg_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 30);
    \u0275\u0275element(1, "path", 32);
    \u0275\u0275elementEnd();
  }
}
function LayoutComponent_div_23_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 36);
    \u0275\u0275listener("click", function LayoutComponent_div_23_a_2_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.menuOpen.set(false));
    });
    \u0275\u0275element(1, "span", 37);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275property("routerLink", item_r3.path)("routerLinkActiveOptions", \u0275\u0275pureFunction0(4, _c0));
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", item_r3.icon, \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.name);
  }
}
function LayoutComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "nav", 34);
    \u0275\u0275template(2, LayoutComponent_div_23_a_2_Template, 4, 5, "a", 35);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.navigation);
  }
}
function LayoutComponent_a_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 38);
    \u0275\u0275element(1, "span", 37);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275property("routerLink", item_r4.path)("routerLinkActiveOptions", \u0275\u0275pureFunction0(4, _c0));
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", item_r4.icon, \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.name);
  }
}
var LayoutComponent = class _LayoutComponent {
  constructor() {
    this.menuOpen = signal(false);
    this.authService = inject(AuthService);
    this.router = inject(Router);
    this.navigation = [
      {
        name: "Inicio",
        path: "/dashboard",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>`
      },
      {
        name: "Agenda",
        path: "/agenda",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`
      },
      {
        name: "Partidos",
        path: "/matches",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/><path d="M2 12h20"/></svg>`
      },
      {
        name: "Pollas",
        path: "/pools",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M8 21h8M12 21v-4m0 0a8 8 0 008-8H4a8 8 0 008 8zM12 3v2M4.22 5.22l1.42 1.42M19.78 5.22l-1.42 1.42"/></svg>`
      },
      {
        name: "\xC1lbum",
        path: "/album",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>`
      },
      {
        name: "Entradas",
        path: "/tickets",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"/></svg>`
      },
      {
        name: "Notificaciones",
        path: "/notifications",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>`
      },
      {
        name: "Soporte",
        path: "/support",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`
      }
    ];
  }
  get currentUser() {
    return this.authService.getCurrentUser();
  }
  toggleMenu() {
    this.menuOpen.update((v) => !v);
  }
  logout() {
    this.authService.logout();
    this.router.navigate(["/login"]);
  }
  static {
    this.\u0275fac = function LayoutComponent_Factory(t) {
      return new (t || _LayoutComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LayoutComponent, selectors: [["app-layout"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 42, vars: 6, consts: [[1, "min-h-screen", "bg-gradient-to-br", "from-gray-50", "to-gray-100"], [1, "bg-white", "shadow-md", "sticky", "top-0", "z-50"], [1, "max-w-7xl", "mx-auto", "px-4", "sm:px-6", "lg:px-8"], [1, "flex", "justify-between", "items-center", "h-16"], [1, "flex", "items-center", "gap-4"], [1, "lg:hidden", "p-1", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2", 4, "ngIf"], ["routerLink", "/dashboard", 1, "flex", "items-center", "gap-3", "no-underline"], [1, "w-10", "h-10", "bg-gradient-to-br", "from-[#00B140]", "to-[#003087]", "rounded-lg", "flex", "items-center", "justify-center", "text-white", "text-xl"], [1, "font-black", "text-xl", "bg-gradient-to-r", "from-[#00B140]", "to-[#003087]", "bg-clip-text", "text-transparent"], ["routerLink", "/notifications", 1, "relative", "p-2", "hover:bg-gray-100", "rounded-lg", "transition-colors"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "20", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2", 1, "text-gray-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"], [1, "absolute", "top-1", "right-1", "w-2", "h-2", "bg-red-500", "rounded-full"], ["routerLink", "/settings", 1, "flex", "items-center", "gap-2", "p-2", "hover:bg-gray-100", "rounded-lg", "transition-colors"], [1, "text-2xl"], [1, "hidden", "sm:inline", "text-sm", "text-gray-700"], ["class", "lg:hidden border-t border-gray-200 bg-white", 4, "ngIf"], [1, "flex", "max-w-7xl", "mx-auto"], [1, "hidden", "lg:block", "w-64", "min-h-[calc(100vh-4rem)]", "p-6"], [1, "space-y-2"], ["routerLinkActive", "bg-[#00B140] text-white shadow-lg", "class", "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 text-gray-700 hover:bg-white hover:shadow-md", 3, "routerLink", "routerLinkActiveOptions", 4, "ngFor", "ngForOf"], [1, "pt-6", "mt-6", "border-t", "border-gray-200"], ["routerLink", "/settings", 1, "flex", "items-center", "gap-3", "px-4", "py-3", "rounded-lg", "text-gray-700", "hover:bg-white", "hover:shadow-md", "transition-all", "duration-200"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "20", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15 12a3 3 0 11-6 0 3 3 0 016 0z"], [1, "cursor-pointer", "flex", "items-center", "gap-3", "px-4", "py-3", "rounded-lg", "text-red-600", "hover:bg-red-50", "transition-all", "duration-200", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"], [1, "flex-1", "p-4", "sm:p-6", "lg:p-8"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M4 6h16M4 12h16M4 18h16"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M6 18L18 6M6 6l12 12"], [1, "lg:hidden", "border-t", "border-gray-200", "bg-white"], [1, "px-4", "py-3", "space-y-1"], ["routerLinkActive", "bg-[#00B140] text-white", "class", "flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-gray-700 hover:bg-gray-100", 3, "routerLink", "routerLinkActiveOptions", "click", 4, "ngFor", "ngForOf"], ["routerLinkActive", "bg-[#00B140] text-white", 1, "flex", "items-center", "gap-3", "px-3", "py-2", "rounded-lg", "transition-colors", "text-gray-700", "hover:bg-gray-100", 3, "click", "routerLink", "routerLinkActiveOptions"], [1, "w-5", "h-5", "flex-shrink-0", 3, "innerHTML"], ["routerLinkActive", "bg-[#00B140] text-white shadow-lg", 1, "flex", "items-center", "gap-3", "px-4", "py-3", "rounded-lg", "transition-all", "duration-200", "text-gray-700", "hover:bg-white", "hover:shadow-md", 3, "routerLink", "routerLinkActiveOptions"]], template: function LayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "button", 5);
        \u0275\u0275listener("click", function LayoutComponent_Template_button_click_5_listener() {
          return ctx.toggleMenu();
        });
        \u0275\u0275template(6, LayoutComponent__svg_svg_6_Template, 2, 0, "svg", 6)(7, LayoutComponent__svg_svg_7_Template, 2, 0, "svg", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "a", 7)(9, "div", 8);
        \u0275\u0275text(10, " \u26BD ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "span", 9);
        \u0275\u0275text(12, " MUNDIAL 2026 ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(13, "div", 4)(14, "a", 10);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(15, "svg", 11);
        \u0275\u0275element(16, "path", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275element(17, "span", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "a", 14)(19, "span", 15);
        \u0275\u0275text(20);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "span", 16);
        \u0275\u0275text(22);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275template(23, LayoutComponent_div_23_Template, 3, 1, "div", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "div", 18)(25, "aside", 19)(26, "nav", 20);
        \u0275\u0275template(27, LayoutComponent_a_27_Template, 4, 5, "a", 21);
        \u0275\u0275elementStart(28, "div", 22)(29, "a", 23);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(30, "svg", 24);
        \u0275\u0275element(31, "path", 25)(32, "path", 26);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(33, "span");
        \u0275\u0275text(34, "Configuraci\xF3n");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(35, "a", 27);
        \u0275\u0275listener("click", function LayoutComponent_Template_a_click_35_listener() {
          return ctx.logout();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(36, "svg", 24);
        \u0275\u0275element(37, "path", 28);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(38, "span");
        \u0275\u0275text(39, "Cerrar Sesi\xF3n");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(40, "main", 29);
        \u0275\u0275element(41, "router-outlet");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275property("ngIf", !ctx.menuOpen());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.menuOpen());
        \u0275\u0275advance(13);
        \u0275\u0275textInterpolate((ctx.currentUser == null ? null : ctx.currentUser.avatar) || "\u{1F464}");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate((ctx.currentUser == null ? null : ctx.currentUser.name) || "Usuario");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.menuOpen());
        \u0275\u0275advance(4);
        \u0275\u0275property("ngForOf", ctx.navigation);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterOutlet, RouterLink, RouterLinkActive], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LayoutComponent, { className: "LayoutComponent", filePath: "src\\app\\components\\shared\\layout\\layout.component.ts", lineNumber: 136 });
})();

// src/app/guards/auth.guard.ts
var authGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (authService.isLoggedIn()) {
    return true;
  }
  router.navigate(["/login"]);
  return false;
};

// src/app/app.routes.ts
var routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  // ── Auth (sin layout, sin guard) ──
  {
    path: "login",
    loadComponent: () => import("./chunk-7KEQLAPX.js").then((m) => m.LoginComponent)
  },
  {
    path: "register",
    loadComponent: () => import("./chunk-G5N5TRG2.js").then((m) => m.RegisterComponent)
  },
  // ── Páginas con layout (protegidas con guard) ──
  {
    path: "",
    component: LayoutComponent,
    canActivate: [authGuard],
    children: [
      {
        path: "dashboard",
        loadComponent: () => import("./chunk-KH6NYDVL.js").then((m) => m.DashboardComponent)
      },
      {
        path: "agenda",
        loadComponent: () => import("./chunk-NR2RGICV.js").then((m) => m.AgendaComponent)
      },
      {
        path: "matches",
        loadComponent: () => import("./chunk-QV2L3YIM.js").then((m) => m.MatchesComponent)
      },
      {
        path: "matches/:id",
        loadComponent: () => import("./chunk-QV2L3YIM.js").then((m) => m.MatchesComponent)
      },
      {
        path: "pools",
        loadComponent: () => import("./chunk-YXLU2LHD.js").then((m) => m.PoolsComponent)
      },
      {
        path: "album",
        loadComponent: () => import("./chunk-FBLVZI3E.js").then((m) => m.AlbumComponent)
      },
      {
        path: "tickets",
        loadComponent: () => import("./chunk-OUMYOSZ4.js").then((m) => m.TicketsComponent)
      },
      {
        path: "notifications",
        loadComponent: () => import("./chunk-CGRL7Q4L.js").then((m) => m.NotificationsComponent)
      },
      {
        path: "support",
        loadComponent: () => import("./chunk-IDAH2SF4.js").then((m) => m.SupportComponent)
      },
      {
        path: "settings",
        loadComponent: () => import("./chunk-ZN4C5H3O.js").then((m) => m.SettingsComponent)
      },
      {
        path: "admin",
        loadComponent: () => import("./chunk-UZHALRQO.js").then((m) => m.AdminComponent)
      }
    ]
  },
  // Fallback
  { path: "**", redirectTo: "login" }
];

// src/app/interceptors/jwt.interceptor.ts
var jwtInterceptor = (req, next) => {
  const authService = inject(AuthService);
  const token = authService.getToken();
  if (token) {
    const cloned = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next(cloned);
  }
  return next(req);
};

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptors([jwtInterceptor]))
  ]
};

// src/app/app.component.ts
var AppComponent = class _AppComponent {
  static {
    this.\u0275fac = function AppComponent_Factory(t) {
      return new (t || _AppComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "router-outlet");
      }
    }, dependencies: [RouterOutlet], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src\\app\\app.component.ts", lineNumber: 10 });
})();

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
