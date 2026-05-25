import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-PXUBOXYT.js";
import {
  CommonModule,
  HttpClient,
  NgForOf,
  NgIf,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-G2QLUSIR.js";

// src/app/pages/admin/admin.component.ts
function AdminComponent_button_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275listener("click", function AdminComponent_button_29_Template_button_click_0_listener() {
      const tab_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.activeTab.set(tab_r2.id));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r2.activeTab() === tab_r2.id ? "px-4 py-3 border-b-2 border-[#00B140] text-[#00B140] text-sm transition-colors" : "px-4 py-3 border-b-2 border-transparent text-gray-600 hover:text-gray-900 text-sm transition-colors");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tab_r2.label, " ");
  }
}
function AdminComponent_div_30_tr_18_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 30);
    \u0275\u0275listener("click", function AdminComponent_div_30_tr_18_button_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const user_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleUserStatus(user_r5.usuario_id, "bloqueado"));
    });
    \u0275\u0275text(1, "Bloquear");
    \u0275\u0275elementEnd();
  }
}
function AdminComponent_div_30_tr_18_button_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 31);
    \u0275\u0275listener("click", function AdminComponent_div_30_tr_18_button_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const user_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleUserStatus(user_r5.usuario_id, "activo"));
    });
    \u0275\u0275text(1, "Activar");
    \u0275\u0275elementEnd();
  }
}
function AdminComponent_div_30_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 23)(1, "td", 24);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 25);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 26);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 27)(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td", 27)(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td", 27);
    \u0275\u0275template(14, AdminComponent_div_30_tr_18_button_14_Template, 2, 0, "button", 28)(15, AdminComponent_div_30_tr_18_button_15_Template, 2, 0, "button", 29);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const user_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r5.usuario_id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r5.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r5.email);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(user_r5.tipo === "admin" ? "px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs" : "px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", user_r5.tipo, " ");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(user_r5.estado === "activo" ? "px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs" : "px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", user_r5.estado, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", user_r5.estado === "activo");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", user_r5.estado !== "activo");
  }
}
function AdminComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "table", 19)(3, "thead", 20)(4, "tr")(5, "th", 21);
    \u0275\u0275text(6, "ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 21);
    \u0275\u0275text(8, "Nombre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 21);
    \u0275\u0275text(10, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 21);
    \u0275\u0275text(12, "Tipo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 21);
    \u0275\u0275text(14, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 21);
    \u0275\u0275text(16, "Acciones");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "tbody");
    \u0275\u0275template(18, AdminComponent_div_30_tr_18_Template, 16, 11, "tr", 22);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(18);
    \u0275\u0275property("ngForOf", ctx_r2.users());
  }
}
function AdminComponent_div_31_tr_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 23)(1, "td", 24);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 25);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 26);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 26);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 27)(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const m_r8 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r8.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", m_r8.homeTeam == null ? null : m_r8.homeTeam.name, " vs ", m_r8.awayTeam == null ? null : m_r8.awayTeam.name, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", m_r8.date, " ", m_r8.time, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r8.phase);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("px-2 py-1 rounded-full text-xs " + (m_r8.status === "live" ? "bg-red-100 text-red-700" : m_r8.status === "finished" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", m_r8.status, " ");
  }
}
function AdminComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 33)(2, "h3", 34);
    \u0275\u0275text(3, "Agregar Partido");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 35)(5, "div")(6, "label", 36);
    \u0275\u0275text(7, "Equipo Local ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 37);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_31_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newMatch.equipo_local_id, $event) || (ctx_r2.newMatch.equipo_local_id = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div")(10, "label", 36);
    \u0275\u0275text(11, "Equipo Visitante ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 37);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_31_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newMatch.equipo_visitante_id, $event) || (ctx_r2.newMatch.equipo_visitante_id = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div")(14, "label", 36);
    \u0275\u0275text(15, "Estadio ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 37);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_31_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newMatch.estadio_id, $event) || (ctx_r2.newMatch.estadio_id = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div")(18, "label", 36);
    \u0275\u0275text(19, "Fecha");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 38);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_31_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newMatch.fecha, $event) || (ctx_r2.newMatch.fecha = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div")(22, "label", 36);
    \u0275\u0275text(23, "Hora");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "input", 39);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_31_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newMatch.hora, $event) || (ctx_r2.newMatch.hora = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div")(26, "label", 36);
    \u0275\u0275text(27, "Fase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "select", 40);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_31_Template_select_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newMatch.fase, $event) || (ctx_r2.newMatch.fase = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(29, "option");
    \u0275\u0275text(30, "Fase de Grupos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "option");
    \u0275\u0275text(32, "Octavos de Final");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "option");
    \u0275\u0275text(34, "Cuartos de Final");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "option");
    \u0275\u0275text(36, "Semifinal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "option");
    \u0275\u0275text(38, "Final");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(39, "button", 41);
    \u0275\u0275listener("click", function AdminComponent_div_31_Template_button_click_39_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.createMatch());
    });
    \u0275\u0275text(40, " Crear Partido ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 17)(42, "div", 18)(43, "table", 19)(44, "thead", 20)(45, "tr")(46, "th", 21);
    \u0275\u0275text(47, "ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "th", 21);
    \u0275\u0275text(49, "Partido");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "th", 21);
    \u0275\u0275text(51, "Fecha");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "th", 21);
    \u0275\u0275text(53, "Fase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "th", 21);
    \u0275\u0275text(55, "Estado");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(56, "tbody");
    \u0275\u0275template(57, AdminComponent_div_31_tr_57_Template, 12, 9, "tr", 22);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newMatch.equipo_local_id);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newMatch.equipo_visitante_id);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newMatch.estadio_id);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newMatch.fecha);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newMatch.hora);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newMatch.fase);
    \u0275\u0275advance(29);
    \u0275\u0275property("ngForOf", ctx_r2.matches());
  }
}
function AdminComponent_div_32_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 44)(2, "h3", 45);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 46);
    \u0275\u0275listener("click", function AdminComponent_div_32_div_1_Template_button_click_4_listener() {
      const polla_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.calcularPuntos(polla_r10.id));
    });
    \u0275\u0275text(5, " Calcular Puntos ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p", 47);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const polla_r10 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(polla_r10.name);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("C\xF3digo: ", polla_r10.code, "");
  }
}
function AdminComponent_div_32_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "p", 49);
    \u0275\u0275text(2, "No hay pollas registradas");
    \u0275\u0275elementEnd()();
  }
}
function AdminComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275template(1, AdminComponent_div_32_div_1_Template, 8, 2, "div", 42)(2, AdminComponent_div_32_div_2_Template, 3, 0, "div", 43);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.pollas());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.pollas().length === 0);
  }
}
var AdminComponent = class _AdminComponent {
  constructor(http) {
    this.http = http;
    this.activeTab = signal("users");
    this.users = signal([]);
    this.matches = signal([]);
    this.pollas = signal([]);
    this.newMatch = { equipo_local_id: null, equipo_visitante_id: null, estadio_id: null, fecha: "", hora: "", fase: "Fase de Grupos" };
    this.tabs = [
      { id: "users", label: "Usuarios" },
      { id: "matches", label: "Partidos" },
      { id: "pollas", label: "Pollas" }
    ];
    this.loadData();
  }
  loadData() {
    const API = "http://localhost:3000/api";
    this.http.get(`${API}/admin/usuarios`).subscribe({
      next: (res) => this.users.set(res.data || []),
      error: () => {
      }
    });
    this.http.get(`${API}/partidos`).subscribe({
      next: (res) => this.matches.set(res.data || []),
      error: () => {
      }
    });
    this.http.get(`${API}/pollas`).subscribe({
      next: (res) => this.pollas.set(res.data || []),
      error: () => {
      }
    });
  }
  toggleUserStatus(userId, estado) {
    const API = "http://localhost:3000/api";
    this.http.patch(`${API}/admin/usuarios/${userId}`, { estado }).subscribe({
      next: () => this.loadData()
    });
  }
  createMatch() {
    const API = "http://localhost:3000/api";
    this.http.post(`${API}/admin/partidos`, this.newMatch).subscribe({
      next: () => {
        this.newMatch = { equipo_local_id: null, equipo_visitante_id: null, estadio_id: null, fecha: "", hora: "", fase: "Fase de Grupos" };
        this.loadData();
      }
    });
  }
  calcularPuntos(pollaId) {
    const API = "http://localhost:3000/api";
    this.http.post(`${API}/admin/pollas/${pollaId}/calcular-puntos`, {}).subscribe({
      next: () => alert("Puntos calculados exitosamente")
    });
  }
  static {
    this.\u0275fac = function AdminComponent_Factory(t) {
      return new (t || _AdminComponent)(\u0275\u0275directiveInject(HttpClient));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminComponent, selectors: [["app-admin"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 33, vars: 7, consts: [[1, "space-y-6"], [1, "text-3xl", "mb-2", "text-gray-900"], [1, "text-gray-600"], [1, "grid", "grid-cols-1", "sm:grid-cols-4", "gap-4"], [1, "bg-gradient-to-br", "from-blue-50", "to-indigo-50", "rounded-xl", "shadow-md", "border", "border-blue-100", "p-6"], [1, "text-sm", "text-gray-600", "mb-1"], [1, "text-3xl", "text-gray-900"], [1, "bg-gradient-to-br", "from-green-50", "to-emerald-50", "rounded-xl", "shadow-md", "border", "border-green-100", "p-6"], [1, "bg-gradient-to-br", "from-purple-50", "to-violet-50", "rounded-xl", "shadow-md", "border", "border-purple-100", "p-6"], [1, "bg-gradient-to-br", "from-yellow-50", "to-amber-50", "rounded-xl", "shadow-md", "border", "border-yellow-100", "p-6"], [1, "text-lg", "text-green-600", "flex", "items-center", "gap-1"], [1, "w-2", "h-2", "bg-green-500", "rounded-full"], [1, "flex", "gap-0", "border-b", "border-gray-200"], [3, "class", "click", 4, "ngFor", "ngForOf"], ["class", "bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden", 4, "ngIf"], ["class", "space-y-4", 4, "ngIf"], [3, "click"], [1, "bg-white", "rounded-xl", "shadow-md", "border", "border-gray-100", "overflow-hidden"], [1, "overflow-x-auto"], [1, "w-full"], [1, "bg-gray-50"], [1, "text-left", "px-6", "py-3", "text-sm", "text-gray-600"], ["class", "border-t border-gray-100 hover:bg-gray-50", 4, "ngFor", "ngForOf"], [1, "border-t", "border-gray-100", "hover:bg-gray-50"], [1, "px-6", "py-4", "text-sm", "text-gray-500"], [1, "px-6", "py-4", "text-sm", "text-gray-800"], [1, "px-6", "py-4", "text-sm", "text-gray-600"], [1, "px-6", "py-4"], ["class", "text-sm text-red-600 hover:underline", 3, "click", 4, "ngIf"], ["class", "text-sm text-green-600 hover:underline", 3, "click", 4, "ngIf"], [1, "text-sm", "text-red-600", "hover:underline", 3, "click"], [1, "text-sm", "text-green-600", "hover:underline", 3, "click"], [1, "space-y-4"], [1, "bg-white", "rounded-xl", "shadow-md", "border", "border-gray-100", "p-6"], [1, "text-xl", "mb-4", "text-gray-900"], [1, "grid", "grid-cols-1", "sm:grid-cols-3", "gap-4", "mb-4"], [1, "block", "text-sm", "mb-1", "text-gray-700"], ["type", "number", 1, "w-full", "px-4", "py-2", "border-2", "border-gray-200", "rounded-lg", "outline-none", "focus:border-[#00B140]", "transition-colors", 3, "ngModelChange", "ngModel"], ["type", "date", 1, "w-full", "px-4", "py-2", "border-2", "border-gray-200", "rounded-lg", "outline-none", "focus:border-[#00B140]", "transition-colors", 3, "ngModelChange", "ngModel"], ["type", "time", 1, "w-full", "px-4", "py-2", "border-2", "border-gray-200", "rounded-lg", "outline-none", "focus:border-[#00B140]", "transition-colors", 3, "ngModelChange", "ngModel"], [1, "w-full", "px-4", "py-2", "border-2", "border-gray-200", "rounded-lg", "outline-none", "focus:border-[#00B140]", "transition-colors", 3, "ngModelChange", "ngModel"], [1, "px-4", "py-2", "bg-[#00B140]", "text-white", "rounded-lg", "hover:bg-[#009633]", "transition-colors", 3, "click"], ["class", "bg-white rounded-xl shadow-md border border-gray-100 p-6", 4, "ngFor", "ngForOf"], ["class", "bg-white rounded-xl shadow-md border border-gray-100 p-12 text-center", 4, "ngIf"], [1, "flex", "items-center", "justify-between", "mb-2"], [1, "text-lg", "text-gray-800"], [1, "px-3", "py-1.5", "bg-[#003087]", "text-white", "rounded-lg", "text-sm", "hover:bg-[#002266]", "transition-colors", 3, "click"], [1, "text-sm", "text-gray-500"], [1, "bg-white", "rounded-xl", "shadow-md", "border", "border-gray-100", "p-12", "text-center"], [1, "text-gray-500"]], template: function AdminComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h1", 1);
        \u0275\u0275text(3, "Panel de Administraci\xF3n \u{1F6E1}\uFE0F");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 2);
        \u0275\u0275text(5, "Gesti\xF3n del sistema Mundial 2026");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 3)(7, "div", 4)(8, "p", 5);
        \u0275\u0275text(9, "Usuarios");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "p", 6);
        \u0275\u0275text(11);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "div", 7)(13, "p", 5);
        \u0275\u0275text(14, "Partidos");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "p", 6);
        \u0275\u0275text(16);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "div", 8)(18, "p", 5);
        \u0275\u0275text(19, "Pollas Activas");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "p", 6);
        \u0275\u0275text(21);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "div", 9)(23, "p", 5);
        \u0275\u0275text(24, "Estado");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "p", 10);
        \u0275\u0275element(26, "span", 11);
        \u0275\u0275text(27, " En l\xEDnea ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(28, "div", 12);
        \u0275\u0275template(29, AdminComponent_button_29_Template, 2, 3, "button", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275template(30, AdminComponent_div_30_Template, 19, 1, "div", 14)(31, AdminComponent_div_31_Template, 58, 7, "div", 15)(32, AdminComponent_div_32_Template, 3, 2, "div", 15);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275textInterpolate(ctx.users().length);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.matches().length);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.pollas().length);
        \u0275\u0275advance(8);
        \u0275\u0275property("ngForOf", ctx.tabs);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeTab() === "users");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeTab() === "matches");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeTab() === "pollas");
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminComponent, { className: "AdminComponent", filePath: "src\\app\\pages\\admin\\admin.component.ts", lineNumber: 204 });
})();
export {
  AdminComponent
};
//# sourceMappingURL=chunk-UZHALRQO.js.map
