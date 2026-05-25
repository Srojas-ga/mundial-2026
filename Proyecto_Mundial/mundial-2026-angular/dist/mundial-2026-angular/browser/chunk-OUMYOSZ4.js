import {
  EntradasService
} from "./chunk-FTNYAQQK.js";
import {
  PartidosService
} from "./chunk-7DJCKAIS.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-PXUBOXYT.js";
import {
  CommonModule,
  NgForOf,
  NgIf,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate4,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-G2QLUSIR.js";

// src/app/pages/tickets/tickets.component.ts
function TicketsComponent_div_38_div_39_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 48);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 49);
    \u0275\u0275element(3, "rect", 50)(4, "path", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " Ver QR ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "button", 52);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(7, "svg", 49);
    \u0275\u0275element(8, "path", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, " Descargar PDF ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(10, "button", 54);
    \u0275\u0275listener("click", function TicketsComponent_div_38_div_39_ng_container_1_Template_button_click_10_listener($event) {
      \u0275\u0275restoreView(_r4);
      const item_r2 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.openTransferModal(item_r2.ticket.id);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 49);
    \u0275\u0275element(12, "line", 55)(13, "polygon", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, " Transferir ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function TicketsComponent_div_38_div_39_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 48);
    \u0275\u0275text(2, " Completar Pago ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 57);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 49);
    \u0275\u0275element(5, "circle", 16)(6, "line", 58)(7, "line", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " Cancelar Reserva ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function TicketsComponent_div_38_div_39_button_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 48);
    \u0275\u0275text(1, " Reservar Entrada ");
    \u0275\u0275elementEnd();
  }
}
function TicketsComponent_div_38_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275template(1, TicketsComponent_div_38_div_39_ng_container_1_Template, 15, 0, "ng-container", 46)(2, TicketsComponent_div_38_div_39_ng_container_2_Template, 9, 0, "ng-container", 46)(3, TicketsComponent_div_38_div_39_button_3_Template, 2, 0, "button", 47);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r2.ticket.status === "paid");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r2.ticket.status === "reserved");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r2.ticket.status === "available");
  }
}
function TicketsComponent_div_38_div_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "p", 60);
    \u0275\u0275text(2, "Comprada el");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 61);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.formatDateShort(item_r2.ticket.purchaseDate));
  }
}
function TicketsComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275listener("click", function TicketsComponent_div_38_Template_div_click_0_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleTicket(item_r2.ticket.id));
    });
    \u0275\u0275elementStart(1, "div", 24)(2, "div", 25)(3, "div", 26)(4, "div", 27)(5, "div", 28)(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 29);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "h3", 30);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 31)(13, "div")(14, "p", 32);
    \u0275\u0275text(15, "Fecha y Hora");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p", 33);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "p", 3);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div")(21, "p", 32);
    \u0275\u0275text(22, "Ubicaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "p", 34);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "p", 3);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div")(28, "p", 32);
    \u0275\u0275text(29, "Asiento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "p", 34);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "p", 3);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div")(35, "p", 32);
    \u0275\u0275text(36, "Precio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "p", 35);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275template(39, TicketsComponent_div_38_div_39_Template, 4, 3, "div", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div")(41, "div", 37);
    \u0275\u0275text(42, "\u{1F3AB}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 38)(44, "p", 39);
    \u0275\u0275text(45, "ID de Entrada");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "p", 40);
    \u0275\u0275text(47);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(48, TicketsComponent_div_38_div_48_Template, 5, 1, "div", 41);
    \u0275\u0275elementStart(49, "div", 42);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(50, "svg", 43);
    \u0275\u0275element(51, "polyline", 44);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMap("bg-white rounded-xl shadow-md border overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl " + (ctx_r2.selectedTicket() === item_r2.ticket.id ? "ring-2 ring-[#00B140] border-transparent" : "border-gray-100"));
    \u0275\u0275advance(6);
    \u0275\u0275classMap(ctx_r2.statusBadgeClass(item_r2.ticket.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.statusLabel(item_r2.ticket.status), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r2.match.phase, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate4(" ", item_r2.match.homeTeam.flag, " ", item_r2.match.homeTeam.name, " vs ", item_r2.match.awayTeam.name, " ", item_r2.match.awayTeam.flag, " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.formatDateLong(item_r2.match.date));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.match.time);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(item_r2.match.stadium);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.match.city);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Secci\xF3n ", item_r2.ticket.section, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Asiento ", item_r2.ticket.seat, "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate("$" + item_r2.ticket.price);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.selectedTicket() === item_r2.ticket.id);
    \u0275\u0275advance();
    \u0275\u0275classMap("lg:w-48 p-6 border-l-2 border-dashed flex flex-col items-center justify-center gap-4 " + ctx_r2.stubBg(item_r2.ticket.status));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", item_r2.ticket.id.toUpperCase(), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r2.ticket.purchaseDate);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r2.selectedTicket() === item_r2.ticket.id ? "rotate-180 transition-transform" : "transition-transform");
  }
}
function TicketsComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 63);
    \u0275\u0275element(2, "path", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "h3", 64);
    \u0275\u0275text(4, "No tienes entradas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 65);
    \u0275\u0275text(6, "Comienza a reservar tus boletos para los partidos del Mundial");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 66);
    \u0275\u0275text(8, " Buscar Entradas ");
    \u0275\u0275elementEnd()();
  }
}
function TicketsComponent_div_40_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 81);
    \u0275\u0275text(1, " Por favor ingresa un email v\xE1lido. ");
    \u0275\u0275elementEnd();
  }
}
function TicketsComponent_div_40_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 82);
    \u0275\u0275text(1, " \u2713 Entrada transferida exitosamente. ");
    \u0275\u0275elementEnd();
  }
}
function TicketsComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 67);
    \u0275\u0275listener("click", function TicketsComponent_div_40_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.transferModal.set(false));
    });
    \u0275\u0275elementStart(1, "div", 68);
    \u0275\u0275listener("click", function TicketsComponent_div_40_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "h2", 69);
    \u0275\u0275text(3, "Transferir Entrada");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 70)(5, "div")(6, "label", 71);
    \u0275\u0275text(7, "Email del destinatario *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 72);
    \u0275\u0275twoWayListener("ngModelChange", function TicketsComponent_div_40_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.transferEmail, $event) || (ctx_r2.transferEmail = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 73)(10, "p", 74);
    \u0275\u0275text(11, " \u26A0\uFE0F La transferencia es irreversible. Aseg\xFArate de que el email sea correcto. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, TicketsComponent_div_40_div_12_Template, 2, 0, "div", 75)(13, TicketsComponent_div_40_div_13_Template, 2, 0, "div", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 77)(15, "button", 78);
    \u0275\u0275listener("click", function TicketsComponent_div_40_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.transferModal.set(false));
    });
    \u0275\u0275text(16, " Cancelar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 79);
    \u0275\u0275listener("click", function TicketsComponent_div_40_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.confirmTransfer());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(18, "svg", 80);
    \u0275\u0275element(19, "line", 55)(20, "polygon", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275text(21, " Transferir ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.transferEmail);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r2.transferError());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.transferSuccess());
  }
}
var TicketsComponent = class _TicketsComponent {
  constructor() {
    this.entradasService = inject(EntradasService);
    this.partidosService = inject(PartidosService);
    this.selectedTicket = signal(null);
    this.transferModal = signal(false);
    this.transferEmail = "";
    this.transferError = signal(false);
    this.transferSuccess = signal(false);
    this.tickets = signal([]);
    this.matches = signal([]);
    this.loadData();
  }
  loadData() {
    this.entradasService.getAll().subscribe((data) => this.tickets.set(data || []));
    this.partidosService.getAll().subscribe((data) => this.matches.set(data || []));
  }
  get ticketsWithMatch() {
    return this.tickets().map((ticket) => {
      const match = this.matches().find((m) => m.id === ticket.matchId || m.partido_id === ticket.partido_id);
      return match ? { ticket, match } : { ticket, match: { homeTeam: { name: "TBD", flag: "\u{1F3F3}\uFE0F" }, awayTeam: { name: "TBD", flag: "\u{1F3F3}\uFE0F" }, date: ticket.fecha || "", time: "", stadium: ticket.seccion || "", city: "" } };
    });
  }
  get paidCount() {
    return this.tickets().filter((t) => t.status === "paid" || t.estado === "pagada").length;
  }
  get reservedCount() {
    return this.tickets().filter((t) => t.status === "reserved" || t.estado === "reservada").length;
  }
  get totalSpent() {
    return this.tickets().filter((t) => t.status === "paid" || t.estado === "pagada").reduce((s, t) => s + (t.price || t.precio || 0), 0);
  }
  toggleTicket(id) {
    this.selectedTicket.update((v) => v === id ? null : id);
  }
  openTransferModal(id) {
    this.transferEmail = "";
    this.transferError.set(false);
    this.transferSuccess.set(false);
    this.transferModal.set(true);
  }
  confirmTransfer() {
    this.transferError.set(false);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.transferEmail)) {
      this.transferError.set(true);
      return;
    }
    this.transferSuccess.set(true);
    setTimeout(() => this.transferModal.set(false), 2e3);
  }
  formatDateLong(d) {
    return new Date(d).toLocaleDateString("es-ES", { weekday: "long", month: "long", day: "numeric" });
  }
  formatDateShort(d) {
    return new Date(d).toLocaleDateString("es-ES", { year: "numeric", month: "short", day: "numeric" });
  }
  statusLabel(status) {
    return status === "paid" ? "\u2713 Pagada" : status === "reserved" ? "\u23F3 Reservada" : status === "available" ? "Disponible" : "\u2197 Transferida";
  }
  statusBadgeClass(status) {
    const base = "px-3 py-1 rounded-full text-sm flex items-center gap-1 w-fit";
    if (status === "paid")
      return `${base} bg-green-100 text-green-700`;
    if (status === "reserved")
      return `${base} bg-yellow-100 text-yellow-700`;
    if (status === "available")
      return `${base} bg-blue-100 text-blue-700`;
    return `${base} bg-gray-100 text-gray-600`;
  }
  stubBg(status) {
    if (status === "paid")
      return "bg-gradient-to-br from-green-50 to-emerald-50";
    if (status === "reserved")
      return "bg-gradient-to-br from-yellow-50 to-amber-50";
    return "bg-gradient-to-br from-gray-50 to-slate-50";
  }
  static {
    this.\u0275fac = function TicketsComponent_Factory(t) {
      return new (t || _TicketsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TicketsComponent, selectors: [["app-tickets"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 41, vars: 6, consts: [[1, "space-y-6"], [1, "flex", "flex-col", "sm:flex-row", "justify-between", "items-start", "sm:items-center", "gap-4"], [1, "text-3xl", "mb-2", "text-gray-900"], [1, "text-gray-600"], [1, "flex", "items-center", "gap-2", "px-4", "py-2.5", "bg-[#00B140]", "text-white", "rounded-lg", "hover:bg-[#009633]", "transition-colors"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "20", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"], [1, "grid", "grid-cols-1", "sm:grid-cols-3", "gap-4"], [1, "bg-gradient-to-br", "from-green-50", "to-emerald-50", "rounded-xl", "shadow-md", "border", "border-green-100", "p-6"], [1, "flex", "items-center", "justify-between"], [1, "text-sm", "text-gray-600", "mb-1"], [1, "text-3xl", "text-gray-900"], ["xmlns", "http://www.w3.org/2000/svg", "width", "32", "height", "32", "fill", "none", "viewBox", "0 0 24 24", "stroke", "#16a34a", "stroke-width", "2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "bg-gradient-to-br", "from-yellow-50", "to-amber-50", "rounded-xl", "shadow-md", "border", "border-yellow-100", "p-6"], ["xmlns", "http://www.w3.org/2000/svg", "width", "32", "height", "32", "fill", "none", "viewBox", "0 0 24 24", "stroke", "#d97706", "stroke-width", "2"], ["cx", "12", "cy", "12", "r", "10"], ["points", "12 6 12 12 16 14"], [1, "bg-gradient-to-br", "from-blue-50", "to-cyan-50", "rounded-xl", "shadow-md", "border", "border-blue-100", "p-6"], [1, "grid", "gap-4"], [3, "class", "click", 4, "ngFor", "ngForOf"], ["class", "bg-white rounded-xl shadow-md border border-gray-100 p-12 text-center", 4, "ngIf"], ["class", "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50", 3, "click", 4, "ngIf"], [3, "click"], [1, "flex", "flex-col", "lg:flex-row"], [1, "flex-1", "p-6"], [1, "flex", "items-start", "justify-between", "mb-4"], [1, "flex-1"], [1, "flex", "items-center", "gap-2", "mb-3", "flex-wrap"], [1, "px-3", "py-1", "bg-gray-100", "text-gray-600", "rounded-full", "text-sm"], [1, "text-xl", "mb-3", "text-gray-800"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "gap-4", "text-sm"], [1, "text-gray-500", "mb-0.5"], [1, "text-gray-800", "capitalize"], [1, "text-gray-800"], [1, "text-2xl", "text-gray-800"], ["class", "flex flex-wrap gap-2 pt-4 border-t border-gray-200 mt-2", 4, "ngIf"], [1, "text-6xl"], [1, "text-center"], [1, "text-xs", "text-gray-500", "mb-1"], [1, "text-xs", "font-mono", "bg-white", "px-2", "py-1", "rounded", "shadow-sm"], ["class", "text-center", 4, "ngIf"], [1, "mt-2"], ["xmlns", "http://www.w3.org/2000/svg", "width", "14", "height", "14", "fill", "none", "viewBox", "0 0 24 24", "stroke", "#9ca3af", "stroke-width", "2"], ["points", "6 9 12 15 18 9"], [1, "flex", "flex-wrap", "gap-2", "pt-4", "border-t", "border-gray-200", "mt-2"], [4, "ngIf"], ["class", "flex items-center gap-2 px-3 py-2 bg-[#00B140] text-white rounded-lg text-sm hover:bg-[#009633] transition-colors", 4, "ngIf"], [1, "flex", "items-center", "gap-2", "px-3", "py-2", "bg-[#00B140]", "text-white", "rounded-lg", "text-sm", "hover:bg-[#009633]", "transition-colors"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2"], ["x", "3", "y", "3", "width", "18", "height", "18", "rx", "2"], ["d", "M9 9h.01M9 12h.01M9 15h.01M12 9h.01M12 12h.01M12 15h.01M15 9h.01M15 12h.01M15 15h.01"], [1, "flex", "items-center", "gap-2", "px-3", "py-2", "border-2", "border-[#00B140]", "text-[#00B140]", "rounded-lg", "text-sm", "hover:bg-[#00B140]", "hover:text-white", "transition-colors"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"], [1, "flex", "items-center", "gap-2", "px-3", "py-2", "border-2", "border-gray-300", "text-gray-700", "rounded-lg", "text-sm", "hover:bg-gray-50", "transition-colors", 3, "click"], ["x1", "22", "y1", "2", "x2", "11", "y2", "13"], ["points", "22 2 15 22 11 13 2 9 22 2"], [1, "flex", "items-center", "gap-2", "px-3", "py-2", "border-2", "border-red-400", "text-red-600", "rounded-lg", "text-sm", "hover:bg-red-50", "transition-colors"], ["x1", "15", "y1", "9", "x2", "9", "y2", "15"], ["x1", "9", "y1", "9", "x2", "15", "y2", "15"], [1, "text-xs", "text-gray-500"], [1, "text-xs", "text-gray-700"], [1, "bg-white", "rounded-xl", "shadow-md", "border", "border-gray-100", "p-12", "text-center"], ["xmlns", "http://www.w3.org/2000/svg", "width", "64", "height", "64", "fill", "none", "viewBox", "0 0 24 24", "stroke", "#d1d5db", "stroke-width", "1.5", 1, "mx-auto", "mb-4"], [1, "text-xl", "text-gray-600", "mb-2"], [1, "text-gray-500", "mb-6"], [1, "px-6", "py-2.5", "bg-[#00B140]", "text-white", "rounded-lg", "hover:bg-[#009633]", "transition-colors"], [1, "fixed", "inset-0", "bg-black", "bg-opacity-50", "flex", "items-center", "justify-center", "p-4", "z-50", 3, "click"], [1, "bg-white", "rounded-xl", "p-8", "max-w-md", "w-full", "shadow-2xl", 3, "click"], [1, "text-2xl", "mb-6", "text-gray-900"], [1, "space-y-4", "mb-6"], [1, "block", "text-sm", "mb-2", "text-gray-700"], ["type", "email", "placeholder", "destinatario@email.com", 1, "w-full", "px-4", "py-3", "border-2", "border-gray-200", "rounded-lg", "outline-none", "focus:border-[#00B140]", "transition-colors", 3, "ngModelChange", "ngModel"], [1, "p-4", "bg-yellow-50", "border", "border-yellow-200", "rounded-lg"], [1, "text-sm", "text-yellow-800"], ["class", "p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm", 4, "ngIf"], ["class", "p-3 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm", 4, "ngIf"], [1, "flex", "gap-3"], [1, "flex-1", "py-2.5", "border-2", "border-gray-300", "text-gray-700", "rounded-lg", "hover:bg-gray-50", "transition-colors", 3, "click"], [1, "flex-1", "flex", "items-center", "justify-center", "gap-2", "py-2.5", "bg-[#00B140]", "text-white", "rounded-lg", "hover:bg-[#009633]", "transition-colors", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "18", "height", "18", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2"], [1, "p-3", "bg-red-50", "border", "border-red-200", "rounded-lg", "text-red-700", "text-sm"], [1, "p-3", "bg-green-50", "border", "border-green-200", "rounded-lg", "text-green-800", "text-sm"]], template: function TicketsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4, "Mis Entradas \u{1F3AB}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6, "Gestiona tus boletos para los partidos");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "button", 4);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(8, "svg", 5);
        \u0275\u0275element(9, "path", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275text(10, " Buscar Entradas ");
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(11, "div", 7)(12, "div", 8)(13, "div", 9)(14, "div")(15, "p", 10);
        \u0275\u0275text(16, "Entradas Pagadas");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "p", 11);
        \u0275\u0275text(18);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(19, "svg", 12);
        \u0275\u0275element(20, "path", 13);
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(21, "div", 14)(22, "div", 9)(23, "div")(24, "p", 10);
        \u0275\u0275text(25, "Reservadas");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "p", 11);
        \u0275\u0275text(27);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(28, "svg", 15);
        \u0275\u0275element(29, "circle", 16)(30, "polyline", 17);
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(31, "div", 18)(32, "div")(33, "p", 10);
        \u0275\u0275text(34, "Total Gastado");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "p", 11);
        \u0275\u0275text(36);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(37, "div", 19);
        \u0275\u0275template(38, TicketsComponent_div_38_Template, 52, 24, "div", 20);
        \u0275\u0275elementEnd();
        \u0275\u0275template(39, TicketsComponent_div_39_Template, 9, 0, "div", 21)(40, TicketsComponent_div_40_Template, 22, 3, "div", 22);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(18);
        \u0275\u0275textInterpolate(ctx.paidCount);
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate(ctx.reservedCount);
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate("$" + ctx.totalSpent.toLocaleString());
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.ticketsWithMatch);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.ticketsWithMatch.length === 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.transferModal());
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TicketsComponent, { className: "TicketsComponent", filePath: "src\\app\\pages\\tickets\\tickets.component.ts", lineNumber: 260 });
})();
export {
  TicketsComponent
};
//# sourceMappingURL=chunk-OUMYOSZ4.js.map
