import {
  RouterLink
} from "./chunk-HRYE6XXT.js";
import {
  CommonModule,
  NgForOf,
  NgIf,
  __spreadProps,
  __spreadValues,
  computed,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
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
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-G2QLUSIR.js";

// src/app/pages/notifications/notifications.component.ts
var _c0 = (a0) => ["/matches", a0];
function NotificationsComponent_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function NotificationsComponent_button_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.markAllAsRead());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 21);
    \u0275\u0275element(2, "path", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Marcar todas como le\xEDdas ");
    \u0275\u0275elementEnd();
  }
}
function NotificationsComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 24);
    \u0275\u0275element(2, "path", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "h3", 26);
    \u0275\u0275text(4, "No hay notificaciones");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 27);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.filter() === "unread" ? "No tienes notificaciones sin leer" : ctx_r1.filter() === "read" ? "No tienes notificaciones le\xEDdas" : "No hay notificaciones para mostrar", " ");
  }
}
function NotificationsComponent_div_33_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 42);
  }
}
function NotificationsComponent_div_33_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 43);
    \u0275\u0275listener("click", function NotificationsComponent_div_33_button_19_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const notif_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.markAsRead(notif_r5.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 38);
    \u0275\u0275element(2, "path", 22);
    \u0275\u0275elementEnd()();
  }
}
function NotificationsComponent_div_33_a_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 44);
    \u0275\u0275text(1, " Ver partido relacionado \u2192 ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const notif_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(1, _c0, notif_r5.matchId));
  }
}
function NotificationsComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 28)(2, "div");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 29)(5, "div", 30)(6, "div", 29)(7, "div", 31)(8, "h3");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, NotificationsComponent_div_33_div_10_Template, 1, 0, "div", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 33);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 34)(14, "span");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 35);
    \u0275\u0275template(19, NotificationsComponent_div_33_button_19_Template, 3, 0, "button", 36);
    \u0275\u0275elementStart(20, "button", 37);
    \u0275\u0275listener("click", function NotificationsComponent_div_33_Template_button_click_20_listener() {
      const notif_r5 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.deleteNotification(notif_r5.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(21, "svg", 38);
    \u0275\u0275element(22, "polyline", 39)(23, "path", 40);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(24, NotificationsComponent_div_33_a_24_Template, 2, 3, "a", 41);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const notif_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap("bg-white rounded-xl shadow-md border p-5 transition-all duration-300 " + (!notif_r5.read ? "border-l-4 border-l-[#00B140] bg-blue-50 border-t-gray-100 border-r-gray-100 border-b-gray-100" : "border-gray-100"));
    \u0275\u0275advance(2);
    \u0275\u0275classMap("p-3 rounded-lg text-2xl flex-shrink-0 " + ctx_r1.typeIconBg(notif_r5.type));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.typeIcon(notif_r5.type), " ");
    \u0275\u0275advance(5);
    \u0275\u0275classMap("text-lg truncate " + (!notif_r5.read ? "text-gray-900" : "text-gray-600"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", notif_r5.title, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !notif_r5.read);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(notif_r5.message);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.formatTime(notif_r5.time));
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.typeBadgeClass(notif_r5.type));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.typeLabel(notif_r5.type), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !notif_r5.read);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", notif_r5.matchId);
  }
}
var INITIAL = [
  { id: "n1", type: "alert", title: "\xA1Partido pr\xF3ximo!", message: "Argentina vs Brasil comienza en 1 hora", time: "2026-06-11T17:00:00", read: false, matchId: "m1" },
  { id: "n2", type: "info", title: "\xA1Gol!", message: "Espa\xF1a 1 - 0 Alemania (Morata 23')", time: "2026-06-12T15:23:00", read: false, matchId: "m2" },
  { id: "n3", type: "reminder", title: "Resultado final", message: "Francia venci\xF3 a Inglaterra 2-1", time: "2026-06-10T22:45:00", read: true, matchId: "m3" },
  { id: "n4", type: "alert", title: "Nueva l\xE1mina disponible", message: "Has recibido un nuevo paquete de l\xE1minas", time: "2026-06-11T10:00:00", read: false },
  { id: "n5", type: "info", title: "Colombia en cuartos", message: "Colombia clasific\xF3 a cuartos de final", time: "2026-06-13T20:00:00", read: true, matchId: "m4" },
  { id: "n6", type: "reminder", title: "Recordatorio de partido", message: "Colombia vs M\xE9xico en 3 horas", time: "2026-06-13T16:00:00", read: false, matchId: "m4" }
];
var NotificationsComponent = class _NotificationsComponent {
  constructor() {
    this.notifications = signal(INITIAL);
    this.filter = signal("all");
    this.unreadCount = computed(() => this.notifications().filter((n) => !n.read).length);
    this.filteredNotifications = computed(() => {
      const f = this.filter();
      return this.notifications().filter((n) => {
        if (f === "unread")
          return !n.read;
        if (f === "read")
          return n.read;
        return true;
      });
    });
  }
  markAsRead(id) {
    this.notifications.update((list) => list.map((n) => n.id === id ? __spreadProps(__spreadValues({}, n), { read: true }) : n));
  }
  markAllAsRead() {
    this.notifications.update((list) => list.map((n) => __spreadProps(__spreadValues({}, n), { read: true })));
  }
  deleteNotification(id) {
    this.notifications.update((list) => list.filter((n) => n.id !== id));
  }
  formatTime(dateStr) {
    return new Date(dateStr).toLocaleString("es-ES", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  }
  typeIcon(type) {
    return type === "alert" ? "\u{1F514}" : type === "reminder" ? "\u23F0" : "\u2139\uFE0F";
  }
  typeIconBg(type) {
    return type === "alert" ? "bg-red-100" : type === "reminder" ? "bg-yellow-100" : "bg-blue-100";
  }
  typeLabel(type) {
    return type === "alert" ? "Alerta" : type === "reminder" ? "Recordatorio" : "Info";
  }
  typeBadgeClass(type) {
    const base = "px-2 py-0.5 rounded-full text-xs";
    if (type === "alert")
      return `${base} bg-red-100 text-red-700`;
    if (type === "reminder")
      return `${base} bg-yellow-100 text-yellow-700`;
    return `${base} bg-blue-100 text-blue-700`;
  }
  static {
    this.\u0275fac = function NotificationsComponent_Factory(t) {
      return new (t || _NotificationsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotificationsComponent, selectors: [["app-notifications"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 34, vars: 16, consts: [[1, "space-y-6"], [1, "flex", "flex-col", "sm:flex-row", "justify-between", "items-start", "sm:items-center", "gap-4"], [1, "text-3xl", "mb-2", "text-gray-900"], [1, "text-gray-600"], ["class", "flex items-center gap-2 px-4 py-2 border-2 border-[#00B140] text-[#00B140] rounded-lg hover:bg-[#00B140] hover:text-white transition-colors text-sm", 3, "click", 4, "ngIf"], [1, "grid", "grid-cols-3", "gap-4"], [1, "bg-white", "rounded-xl", "shadow-md", "border", "border-gray-100", "p-4", "text-center"], [1, "text-2xl", "text-gray-900"], [1, "text-sm", "text-gray-500", "mt-1"], [1, "bg-blue-50", "rounded-xl", "border", "border-blue-100", "p-4", "text-center"], [1, "text-2xl", "text-[#003087]"], [1, "text-sm", "text-blue-600", "mt-1"], [1, "bg-green-50", "rounded-xl", "border", "border-green-100", "p-4", "text-center"], [1, "text-2xl", "text-[#00B140]"], [1, "text-sm", "text-green-600", "mt-1"], [1, "flex", "gap-0", "border-b", "border-gray-200"], [3, "click"], [1, "space-y-3"], ["class", "bg-white rounded-xl shadow-md border border-gray-100 p-12 text-center", 4, "ngIf"], [3, "class", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "gap-2", "px-4", "py-2", "border-2", "border-[#00B140]", "text-[#00B140]", "rounded-lg", "hover:bg-[#00B140]", "hover:text-white", "transition-colors", "text-sm", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M9 12l2 2 4-4M7 12l2 2 4-4"], [1, "bg-white", "rounded-xl", "shadow-md", "border", "border-gray-100", "p-12", "text-center"], ["xmlns", "http://www.w3.org/2000/svg", "width", "48", "height", "48", "fill", "none", "viewBox", "0 0 24 24", "stroke", "#d1d5db", "stroke-width", "1.5", 1, "mx-auto", "mb-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"], [1, "text-xl", "text-gray-600", "mb-2"], [1, "text-gray-500"], [1, "flex", "items-start", "gap-4"], [1, "flex-1", "min-w-0"], [1, "flex", "items-start", "justify-between", "gap-4", "mb-2"], [1, "flex", "items-center", "gap-2", "mb-1"], ["class", "w-2 h-2 bg-[#00B140] rounded-full flex-shrink-0", 4, "ngIf"], [1, "text-gray-600", "text-sm", "mb-2"], [1, "flex", "items-center", "gap-3", "text-sm", "text-gray-500", "flex-wrap"], [1, "flex", "gap-1", "flex-shrink-0"], ["title", "Marcar como le\xEDda", "class", "p-2 hover:bg-white rounded-lg transition-colors text-gray-500 hover:text-gray-800", 3, "click", 4, "ngIf"], ["title", "Eliminar", 1, "p-2", "hover:bg-red-50", "rounded-lg", "transition-colors", "text-red-500", "hover:text-red-700", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "18", "height", "18", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2"], ["points", "3 6 5 6 21 6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6m5 0V4h4v2"], ["class", "inline-flex items-center gap-1 text-sm text-[#00B140] hover:underline mt-1", 3, "routerLink", 4, "ngIf"], [1, "w-2", "h-2", "bg-[#00B140]", "rounded-full", "flex-shrink-0"], ["title", "Marcar como le\xEDda", 1, "p-2", "hover:bg-white", "rounded-lg", "transition-colors", "text-gray-500", "hover:text-gray-800", 3, "click"], [1, "inline-flex", "items-center", "gap-1", "text-sm", "text-[#00B140]", "hover:underline", "mt-1", 3, "routerLink"]], template: function NotificationsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4, "Notificaciones \u{1F514}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(7, NotificationsComponent_button_7_Template, 4, 0, "button", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 5)(9, "div", 6)(10, "p", 7);
        \u0275\u0275text(11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "p", 8);
        \u0275\u0275text(13, "Total");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 9)(15, "p", 10);
        \u0275\u0275text(16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "p", 11);
        \u0275\u0275text(18, "Sin leer");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "div", 12)(20, "p", 13);
        \u0275\u0275text(21);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "p", 14);
        \u0275\u0275text(23, "Le\xEDdas");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(24, "div", 15)(25, "button", 16);
        \u0275\u0275listener("click", function NotificationsComponent_Template_button_click_25_listener() {
          return ctx.filter.set("all");
        });
        \u0275\u0275text(26);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "button", 16);
        \u0275\u0275listener("click", function NotificationsComponent_Template_button_click_27_listener() {
          return ctx.filter.set("unread");
        });
        \u0275\u0275text(28);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "button", 16);
        \u0275\u0275listener("click", function NotificationsComponent_Template_button_click_29_listener() {
          return ctx.filter.set("read");
        });
        \u0275\u0275text(30);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(31, "div", 17);
        \u0275\u0275template(32, NotificationsComponent_div_32_Template, 7, 1, "div", 18)(33, NotificationsComponent_div_33_Template, 25, 16, "div", 19);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", ctx.unreadCount() > 0 ? "Tienes " + ctx.unreadCount() + " notificaci\xF3n" + (ctx.unreadCount() > 1 ? "es" : "") + " sin leer" : "No tienes notificaciones sin leer", " ");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.unreadCount() > 0);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.notifications().length);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.unreadCount());
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.notifications().length - ctx.unreadCount());
        \u0275\u0275advance(4);
        \u0275\u0275classMap(ctx.filter() === "all" ? "px-4 py-3 border-b-2 border-[#00B140] text-[#00B140] text-sm transition-colors" : "px-4 py-3 border-b-2 border-transparent text-gray-600 hover:text-gray-900 text-sm transition-colors");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" Todas (", ctx.notifications().length, ") ");
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.filter() === "unread" ? "px-4 py-3 border-b-2 border-[#00B140] text-[#00B140] text-sm transition-colors" : "px-4 py-3 border-b-2 border-transparent text-gray-600 hover:text-gray-900 text-sm transition-colors");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" Sin leer (", ctx.unreadCount(), ") ");
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.filter() === "read" ? "px-4 py-3 border-b-2 border-[#00B140] text-[#00B140] text-sm transition-colors" : "px-4 py-3 border-b-2 border-transparent text-gray-600 hover:text-gray-900 text-sm transition-colors");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" Le\xEDdas (", ctx.notifications().length - ctx.unreadCount(), ") ");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.filteredNotifications().length === 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.filteredNotifications());
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, RouterLink], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotificationsComponent, { className: "NotificationsComponent", filePath: "src\\app\\pages\\notifications\\notifications.component.ts", lineNumber: 173 });
})();
export {
  NotificationsComponent
};
//# sourceMappingURL=chunk-CGRL7Q4L.js.map
