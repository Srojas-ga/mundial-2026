import {
  EntradasService
} from "./chunk-FTNYAQQK.js";
import {
  RouterLink
} from "./chunk-HRYE6XXT.js";
import {
  AuthService
} from "./chunk-JHTY2FGU.js";
import {
  PartidosService
} from "./chunk-7DJCKAIS.js";
import {
  CommonModule,
  EventEmitter,
  HttpClient,
  NgForOf,
  NgIf,
  inject,
  map,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-G2QLUSIR.js";

// src/app/components/shared/badge/badge.component.ts
var _c0 = ["*"];
var BadgeComponent = class _BadgeComponent {
  constructor() {
    this.variant = "neutral";
    this.size = "md";
  }
  get badgeClasses() {
    const variants = {
      success: "bg-green-100 text-green-700",
      warning: "bg-yellow-100 text-yellow-700",
      error: "bg-red-100 text-red-700",
      info: "bg-blue-100 text-blue-700",
      neutral: "bg-gray-100 text-gray-700"
    };
    const sizes = {
      sm: "px-2 py-0.5 text-xs",
      md: "px-3 py-1 text-sm"
    };
    return `inline-flex items-center rounded-full font-medium ${variants[this.variant]} ${sizes[this.size]}`;
  }
  static {
    this.\u0275fac = function BadgeComponent_Factory(t) {
      return new (t || _BadgeComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BadgeComponent, selectors: [["app-badge"]], inputs: { variant: "variant", size: "size" }, standalone: true, features: [\u0275\u0275StandaloneFeature], ngContentSelectors: _c0, decls: 2, vars: 2, template: function BadgeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "span");
        \u0275\u0275projection(1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.badgeClasses);
      }
    }, dependencies: [CommonModule], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BadgeComponent, { className: "BadgeComponent", filePath: "src\\app\\components\\shared\\badge\\badge.component.ts", lineNumber: 17 });
})();

// src/app/components/shared/card/card.component.ts
var _c02 = ["*"];
var CardComponent = class _CardComponent {
  constructor() {
    this.hover = false;
    this.className = "";
    this.onClick = new EventEmitter();
  }
  get cardClasses() {
    const base = "bg-white rounded-xl shadow-md border border-gray-100 transition-all duration-300";
    const hoverClass = this.hover ? "hover:shadow-xl hover:scale-[1.02] cursor-pointer" : "";
    return `${base} ${hoverClass} ${this.className}`;
  }
  static {
    this.\u0275fac = function CardComponent_Factory(t) {
      return new (t || _CardComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CardComponent, selectors: [["app-card"]], inputs: { hover: "hover", className: "className" }, outputs: { onClick: "onClick" }, standalone: true, features: [\u0275\u0275StandaloneFeature], ngContentSelectors: _c02, decls: 2, vars: 2, consts: [[3, "click"]], template: function CardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275listener("click", function CardComponent_Template_div_click_0_listener() {
          return ctx.onClick.emit();
        });
        \u0275\u0275projection(1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.cardClasses);
      }
    }, dependencies: [CommonModule], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CardComponent, { className: "CardComponent", filePath: "src\\app\\components\\shared\\card\\card.component.ts", lineNumber: 14 });
})();

// src/app/services/notificaciones.service.ts
var API = "http://localhost:3000/api";
var NotificacionesService = class _NotificacionesService {
  constructor(http) {
    this.http = http;
  }
  getAll(params) {
    return this.http.get(`${API}/notificaciones`, { params }).pipe(map((res) => res.data));
  }
  markAsRead(id) {
    return this.http.patch(`${API}/notificaciones/${id}/leer`, {});
  }
  static {
    this.\u0275fac = function NotificacionesService_Factory(t) {
      return new (t || _NotificacionesService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NotificacionesService, factory: _NotificacionesService.\u0275fac, providedIn: "root" });
  }
};

// src/app/pages/dashboard/dashboard.component.ts
var _c03 = (a0) => ["/matches", a0];
function DashboardComponent_app_card_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-card", 12)(1, "div", 39)(2, "div")(3, "p", 40);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 41);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 42);
    \u0275\u0275element(9, "path", 43);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const stat_r1 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(stat_r1.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stat_r1.value);
    \u0275\u0275advance();
    \u0275\u0275classMap("p-3 rounded-lg " + stat_r1.bgColor + " " + stat_r1.color);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("d", stat_r1.iconPath);
  }
}
function DashboardComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275element(1, "div", 45);
    \u0275\u0275elementStart(2, "div", 46);
    \u0275\u0275element(3, "div", 47);
    \u0275\u0275elementStart(4, "app-badge", 48);
    \u0275\u0275text(5, "EN VIVO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 49);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 39)(9, "div", 50)(10, "div", 51);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 52);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 53)(15, "div", 54);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "a", 55)(18, "app-badge", 56);
    \u0275\u0275text(19, "Ver detalles");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 50)(21, "div", 51);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "p", 52);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 57);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate((tmp_1_0 = ctx_r1.liveMatch()) == null ? null : tmp_1_0.phase);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate((tmp_2_0 = ctx_r1.liveMatch()) == null ? null : tmp_2_0.homeTeam.flag);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_3_0 = ctx_r1.liveMatch()) == null ? null : tmp_3_0.homeTeam.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", ((tmp_4_0 = ctx_r1.liveMatch()) == null ? null : tmp_4_0.homeScore) || 0, " - ", ((tmp_4_0 = ctx_r1.liveMatch()) == null ? null : tmp_4_0.awayScore) || 0, " ");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(10, _c03, (tmp_5_0 = ctx_r1.liveMatch()) == null ? null : tmp_5_0.id));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((tmp_6_0 = ctx_r1.liveMatch()) == null ? null : tmp_6_0.awayTeam.flag);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_7_0 = ctx_r1.liveMatch()) == null ? null : tmp_7_0.awayTeam.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" \u{1F4CD} ", (tmp_8_0 = ctx_r1.liveMatch()) == null ? null : tmp_8_0.stadium, ", ", (tmp_8_0 = ctx_r1.liveMatch()) == null ? null : tmp_8_0.city, " ");
  }
}
function DashboardComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275text(1, " No hay partidos en curso actualmente. ");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_a_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 59)(1, "div", 60)(2, "div", 61)(3, "app-badge", 62);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 49);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 39)(8, "div", 63)(9, "span", 64);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 65);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "span", 66);
    \u0275\u0275text(14, "vs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 63)(16, "span", 65);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 64);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 67);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const match_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(10, _c03, match_r3.id));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(match_r3.phase);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r1.formatDate(match_r3.date), " - ", match_r3.time, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(match_r3.homeTeam.flag);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(match_r3.homeTeam.name);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(match_r3.awayTeam.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(match_r3.awayTeam.flag);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" \u{1F4CD} ", match_r3.stadium, ", ", match_r3.city, " ");
  }
}
function DashboardComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68)(1, "div", 69)(2, "div");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 70);
    \u0275\u0275element(4, "path", 71);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div", 72)(6, "p", 73);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 74);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 75);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const notif_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classMap("p-2 rounded-lg " + ctx_r1.notifIconClass(notif_r4.type));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(notif_r4.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(notif_r4.message);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDateTime(notif_r4.time));
  }
}
var DashboardComponent = class _DashboardComponent {
  constructor(partidosService, notificacionesService, entradasService) {
    this.partidosService = partidosService;
    this.notificacionesService = notificacionesService;
    this.entradasService = entradasService;
    this.authService = inject(AuthService);
    this.currentUser = signal(this.authService.getCurrentUser());
    this.upcomingMatches = signal([]);
    this.liveMatch = signal(void 0);
    this.recentNotifications = signal([]);
    this.stats = signal([
      { label: "Partidos Programados", value: "0", iconPath: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z", color: "text-blue-600", bgColor: "bg-blue-50" },
      { label: "Predicciones Activas", value: "0", iconPath: "M8 21h8M12 21v-4m0 0a8 8 0 008-8H4a8 8 0 008 8zM12 3v2M4.22 5.22l1.42 1.42M19.78 5.22l-1.42 1.42", color: "text-green-600", bgColor: "bg-green-50" },
      { label: "Entradas", value: "0", iconPath: "M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z", color: "text-purple-600", bgColor: "bg-purple-50" },
      { label: "Notificaciones", value: "0", iconPath: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9", color: "text-red-600", bgColor: "bg-red-50" }
    ]);
    this.loadData();
  }
  loadData() {
    this.partidosService.getAll().subscribe((matches) => {
      this.upcomingMatches.set(matches.filter((m) => m.status === "programado").slice(0, 3));
      this.liveMatch.set(matches.find((m) => m.status === "en_curso"));
      this.stats.update((s) => {
        s[0].value = matches.filter((m) => m.status === "programado").length.toString();
        return s;
      });
    });
    this.notificacionesService.getAll().subscribe((notifs) => {
      this.recentNotifications.set(notifs.slice(0, 3));
      this.stats.update((s) => {
        s[3].value = notifs.filter((n) => !n.read).length.toString();
        return s;
      });
    });
    this.entradasService.getAll().subscribe((tickets) => {
      this.stats.update((s) => {
        s[2].value = tickets.length.toString();
        return s;
      });
    });
  }
  formatDate(dateStr) {
    return new Date(dateStr).toLocaleDateString("es-ES", { month: "short", day: "numeric" });
  }
  formatDateTime(dateStr) {
    return new Date(dateStr).toLocaleString("es-ES", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  }
  notifIconClass(type) {
    const map2 = {
      alert: "bg-red-100 text-red-600",
      info: "bg-blue-100 text-blue-600",
      reminder: "bg-yellow-100 text-yellow-600"
    };
    return map2[type] ?? "bg-gray-100 text-gray-600";
  }
  static {
    this.\u0275fac = function DashboardComponent_Factory(t) {
      return new (t || _DashboardComponent)(\u0275\u0275directiveInject(PartidosService), \u0275\u0275directiveInject(NotificacionesService), \u0275\u0275directiveInject(EntradasService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 62, vars: 10, consts: [[1, "space-y-8"], [1, "text-3xl", "mb-2", "text-gray-900"], [1, "text-gray-600"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "lg:grid-cols-4", "gap-4"], ["className", "p-6", 4, "ngFor", "ngForOf"], [1, "col-span-1", "lg:col-span-2"], [1, "flex", "items-center", "justify-between", "mb-4"], [1, "text-xl", "text-gray-800", "flex", "items-center", "gap-2"], [1, "text-xl"], ["class", "bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-sm border border-gray-100 p-8 relative overflow-hidden", 4, "ngIf"], ["class", "bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-sm border border-gray-100 p-12 text-center text-gray-500", 4, "ngIf"], [1, "grid", "grid-cols-1", "lg:grid-cols-2", "gap-6"], ["className", "p-6"], [1, "flex", "items-center", "justify-between", "mb-6"], [1, "text-xl", "text-gray-900"], ["routerLink", "/matches", 1, "text-[#00B140]", "hover:underline", "text-sm"], [1, "space-y-4"], ["class", "block no-underline", 3, "routerLink", 4, "ngFor", "ngForOf"], ["routerLink", "/notifications", 1, "text-[#00B140]", "hover:underline", "text-sm"], ["class", "p-4 bg-gray-50 rounded-lg flex gap-4 items-start", 4, "ngFor", "ngForOf"], [1, "grid", "grid-cols-2", "sm:grid-cols-4", "gap-4"], ["routerLink", "/agenda", 1, "no-underline"], ["className", "p-6 text-center", 3, "hover"], ["xmlns", "http://www.w3.org/2000/svg", "width", "32", "height", "32", "fill", "none", "viewBox", "0 0 24 24", "stroke", "#00B140", "stroke-width", "2", 1, "mx-auto", "mb-3"], ["x", "3", "y", "4", "width", "18", "height", "18", "rx", "2", "ry", "2"], ["x1", "16", "y1", "2", "x2", "16", "y2", "6"], ["x1", "8", "y1", "2", "x2", "8", "y2", "6"], ["x1", "3", "y1", "10", "x2", "21", "y2", "10"], [1, "text-sm", "text-gray-700"], ["routerLink", "/pools", 1, "no-underline"], ["xmlns", "http://www.w3.org/2000/svg", "width", "32", "height", "32", "fill", "none", "viewBox", "0 0 24 24", "stroke", "#003087", "stroke-width", "2", 1, "mx-auto", "mb-3"], ["d", "M8 21h8M12 21v-4m0 0a8 8 0 008-8H4a8 8 0 008 8zM12 3v2M4.22 5.22l1.42 1.42M19.78 5.22l-1.42 1.42"], ["routerLink", "/album", 1, "no-underline"], ["xmlns", "http://www.w3.org/2000/svg", "width", "32", "height", "32", "fill", "none", "viewBox", "0 0 24 24", "stroke", "#7c3aed", "stroke-width", "2", 1, "mx-auto", "mb-3"], ["d", "M4 19.5A2.5 2.5 0 016.5 17H20"], ["d", "M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"], ["routerLink", "/tickets", 1, "no-underline"], ["xmlns", "http://www.w3.org/2000/svg", "width", "32", "height", "32", "fill", "none", "viewBox", "0 0 24 24", "stroke", "#ea580c", "stroke-width", "2", 1, "mx-auto", "mb-3"], ["d", "M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"], [1, "flex", "items-center", "justify-between"], [1, "text-sm", "text-gray-600", "mb-1"], [1, "text-3xl", "text-gray-900"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2"], ["stroke-linecap", "round", "stroke-linejoin", "round"], [1, "bg-gradient-to-br", "from-white", "to-gray-50", "rounded-2xl", "shadow-sm", "border", "border-gray-100", "p-8", "relative", "overflow-hidden"], [1, "absolute", "top-0", "right-0", "w-32", "h-32", "bg-red-500", "rounded-bl-full", "opacity-5", "pointer-events-none"], [1, "flex", "items-center", "gap-2", "mb-4"], [1, "w-3", "h-3", "bg-red-500", "rounded-full", "animate-pulse"], ["variant", "error", "size", "md"], [1, "text-sm", "text-gray-600"], [1, "flex-1", "text-center"], [1, "text-4xl", "mb-2"], [1, "text-lg"], [1, "text-center", "px-8"], [1, "text-5xl", "mb-2"], [3, "routerLink"], ["variant", "info"], [1, "mt-4", "pt-4", "border-t", "border-red-200", "text-center", "text-sm", "text-gray-600"], [1, "bg-gradient-to-br", "from-white", "to-gray-50", "rounded-2xl", "shadow-sm", "border", "border-gray-100", "p-12", "text-center", "text-gray-500"], [1, "block", "no-underline", 3, "routerLink"], [1, "p-4", "bg-gray-50", "rounded-lg", "hover:bg-gray-100", "transition-colors"], [1, "flex", "items-center", "justify-between", "mb-2"], ["variant", "info", "size", "sm"], [1, "flex", "items-center", "gap-2"], [1, "text-2xl"], [1, "text-sm", "text-gray-800"], [1, "text-gray-500"], [1, "mt-2", "text-xs", "text-gray-500"], [1, "p-4", "bg-gray-50", "rounded-lg", "flex", "gap-4", "items-start"], [1, "flex", "items-start", "gap-3"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"], [1, "flex-1"], [1, "text-sm", "mb-1", "text-gray-800"], [1, "text-xs", "text-gray-600"], [1, "text-xs", "text-gray-400", "mt-1", "block"]], template: function DashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h1", 1);
        \u0275\u0275text(3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 2);
        \u0275\u0275text(5, "Aqu\xED est\xE1 tu resumen del Mundial 2026");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 3);
        \u0275\u0275template(7, DashboardComponent_app_card_7_Template, 10, 5, "app-card", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 5)(9, "div", 6)(10, "h2", 7);
        \u0275\u0275text(11, " Partido Destacado ");
        \u0275\u0275elementStart(12, "span", 8);
        \u0275\u0275text(13, "\u{1F31F}");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(14, DashboardComponent_div_14_Template, 27, 12, "div", 9)(15, DashboardComponent_div_15_Template, 2, 0, "div", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 11)(17, "app-card", 12)(18, "div", 13)(19, "h2", 14);
        \u0275\u0275text(20, "Pr\xF3ximos Partidos");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "a", 15);
        \u0275\u0275text(22, "Ver todos");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div", 16);
        \u0275\u0275template(24, DashboardComponent_a_24_Template, 22, 12, "a", 17);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "app-card", 12)(26, "div", 13)(27, "h2", 14);
        \u0275\u0275text(28, "Notificaciones");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "a", 18);
        \u0275\u0275text(30, "Ver todas");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(31, "div", 16);
        \u0275\u0275template(32, DashboardComponent_div_32_Template, 12, 5, "div", 19);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(33, "div", 20)(34, "a", 21)(35, "app-card", 22);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(36, "svg", 23);
        \u0275\u0275element(37, "rect", 24)(38, "line", 25)(39, "line", 26)(40, "line", 27);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(41, "p", 28);
        \u0275\u0275text(42, "Mi Agenda");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(43, "a", 29)(44, "app-card", 22);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(45, "svg", 30);
        \u0275\u0275element(46, "path", 31);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(47, "p", 28);
        \u0275\u0275text(48, "Pollas");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(49, "a", 32)(50, "app-card", 22);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(51, "svg", 33);
        \u0275\u0275element(52, "path", 34)(53, "path", 35);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(54, "p", 28);
        \u0275\u0275text(55, "\xC1lbum");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(56, "a", 36)(57, "app-card", 22);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(58, "svg", 37);
        \u0275\u0275element(59, "path", 38);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(60, "p", 28);
        \u0275\u0275text(61, "Entradas");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("\xA1Bienvenido, ", (tmp_0_0 = ctx.currentUser()) == null ? null : tmp_0_0.name, "! \u26BD");
        \u0275\u0275advance(4);
        \u0275\u0275property("ngForOf", ctx.stats());
        \u0275\u0275advance(7);
        \u0275\u0275property("ngIf", ctx.liveMatch());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.liveMatch());
        \u0275\u0275advance(9);
        \u0275\u0275property("ngForOf", ctx.upcomingMatches());
        \u0275\u0275advance(8);
        \u0275\u0275property("ngForOf", ctx.recentNotifications());
        \u0275\u0275advance(3);
        \u0275\u0275property("hover", true);
        \u0275\u0275advance(9);
        \u0275\u0275property("hover", true);
        \u0275\u0275advance(6);
        \u0275\u0275property("hover", true);
        \u0275\u0275advance(7);
        \u0275\u0275property("hover", true);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, RouterLink, BadgeComponent, CardComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src\\app\\pages\\dashboard\\dashboard.component.ts", lineNumber: 220 });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=chunk-KH6NYDVL.js.map
