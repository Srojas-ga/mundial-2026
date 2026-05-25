import {
  AuthService
} from "./chunk-JHTY2FGU.js";
import {
  PartidosService
} from "./chunk-7DJCKAIS.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MaxValidator,
  MinValidator,
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
  inject,
  map,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
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
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-G2QLUSIR.js";

// src/app/services/pollas.service.ts
var API = "http://localhost:3000/api";
var PollasService = class _PollasService {
  constructor(http) {
    this.http = http;
  }
  getAll() {
    return this.http.get(`${API}/pollas`).pipe(map((res) => res.data));
  }
  create(data) {
    return this.http.post(`${API}/pollas`, data);
  }
  join(codigo) {
    return this.http.post(`${API}/pollas/unirse`, { codigo });
  }
  getRanking(id) {
    return this.http.get(`${API}/pollas/${id}/ranking`).pipe(map((res) => res.data));
  }
  savePronosticos(id, pronosticos) {
    return this.http.post(`${API}/pollas/${id}/pronosticos`, { pronosticos });
  }
  static {
    this.\u0275fac = function PollasService_Factory(t) {
      return new (t || _PollasService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PollasService, factory: _PollasService.\u0275fac, providedIn: "root" });
  }
};

// src/app/pages/pools/pools.component.ts
var _c0 = () => [];
function PoolsComponent_div_12__svg_svg_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 31);
    \u0275\u0275element(1, "rect", 32)(2, "path", 33);
    \u0275\u0275elementEnd();
  }
}
function PoolsComponent_div_12__svg_svg_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 34);
    \u0275\u0275element(1, "polyline", 35);
    \u0275\u0275elementEnd();
  }
}
function PoolsComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15)(2, "div", 16)(3, "h2", 17);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 18)(6, "div", 19);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(7, "svg", 20);
    \u0275\u0275element(8, "path", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(10, "div", 19);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 20);
    \u0275\u0275element(12, "circle", 22)(13, "path", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(15, "div", 24)(16, "p", 25);
    \u0275\u0275text(17, "C\xF3digo de la polla");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 26)(19, "code", 27);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 28);
    \u0275\u0275listener("click", function PoolsComponent_div_12_Template_button_click_21_listener() {
      let tmp_2_0;
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.copyCode(((tmp_2_0 = ctx_r1.currentPool()) == null ? null : tmp_2_0.codigo) || ((tmp_2_0 = ctx_r1.currentPool()) == null ? null : tmp_2_0.code)));
    });
    \u0275\u0275template(22, PoolsComponent_div_12__svg_svg_22_Template, 3, 0, "svg", 29)(23, PoolsComponent_div_12__svg_svg_23_Template, 2, 0, "svg", 30);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(((tmp_1_0 = ctx_r1.currentPool()) == null ? null : tmp_1_0.nombre) || ((tmp_1_0 = ctx_r1.currentPool()) == null ? null : tmp_1_0.name));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", (((tmp_2_0 = ctx_r1.currentPool()) == null ? null : tmp_2_0.members) || \u0275\u0275pureFunction0(7, _c0)).length, " miembros ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.matches().length, " partidos ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ((tmp_4_0 = ctx_r1.currentPool()) == null ? null : tmp_4_0.codigo) || ((tmp_4_0 = ctx_r1.currentPool()) == null ? null : tmp_4_0.code), " ");
    \u0275\u0275advance();
    \u0275\u0275property("title", ctx_r1.copied() ? "Copiado!" : "Copiar c\xF3digo");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.copied());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.copied());
  }
}
function PoolsComponent_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 36);
    \u0275\u0275listener("click", function PoolsComponent_button_14_Template_button_click_0_listener() {
      const tab_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.activeTab.set(tab_r4.id));
    });
    \u0275\u0275element(1, "span", 37);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap("flex items-center gap-2 px-4 py-3 border-b-2 transition-colors whitespace-nowrap text-sm " + (ctx_r1.activeTab() === tab_r4.id ? "border-[#00B140] text-[#00B140]" : "border-transparent text-gray-600 hover:text-gray-900"));
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", tab_r4.icon, \u0275\u0275sanitizeHtml);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tab_r4.label, " ");
  }
}
function PoolsComponent_div_15_div_7_div_1_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 59);
    \u0275\u0275text(1, "T\xFA");
    \u0275\u0275elementEnd();
  }
}
function PoolsComponent_div_15_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 51);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 16)(6, "h4", 52);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, PoolsComponent_div_15_div_7_div_1_span_8_Template, 2, 0, "span", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 24)(10, "div", 54);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 48);
    \u0275\u0275text(13, "puntos");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 55);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(15, "svg", 20);
    \u0275\u0275element(16, "polyline", 56)(17, "polyline", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(18, "span", 58);
    \u0275\u0275text(19, "+5");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_10_0;
    const ranking_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap("p-6 flex items-center gap-4 " + (ranking_r5.usuario_id === ((tmp_5_0 = ctx_r1.currentUser()) == null ? null : tmp_5_0.id) || ranking_r5.userId === ((tmp_5_0 = ctx_r1.currentUser()) == null ? null : tmp_5_0.id) ? "bg-green-50" : "hover:bg-gray-50 transition-colors"));
    \u0275\u0275advance();
    \u0275\u0275classMap("w-12 h-12 rounded-full flex items-center justify-center text-2xl flex-shrink-0 " + ctx_r1.medalClass(i_r6));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.medalIcon(i_r6), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ranking_r5.avatar || "\u{1F464}");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ranking_r5.usuario_nombre || ranking_r5.userName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ranking_r5.usuario_id === ((tmp_10_0 = ctx_r1.currentUser()) == null ? null : tmp_10_0.id) || ranking_r5.userId === ((tmp_10_0 = ctx_r1.currentUser()) == null ? null : tmp_10_0.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ranking_r5.puntos || ranking_r5.totalPoints || 0);
  }
}
function PoolsComponent_div_15_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275template(1, PoolsComponent_div_15_div_7_div_1_Template, 20, 9, "div", 50);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.currentRanking());
  }
}
function PoolsComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 39)(2, "div", 40)(3, "h3", 41);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 42);
    \u0275\u0275element(5, "path", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " Tabla de Posiciones ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, PoolsComponent_div_15_div_7_Template, 2, 1, "div", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "div", 45)(9, "div", 46)(10, "div", 47);
    \u0275\u0275text(11, "0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 48);
    \u0275\u0275text(13, "Total de puntos");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 46)(15, "div", 47);
    \u0275\u0275text(16, "0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 48);
    \u0275\u0275text(18, "Predicciones correctas");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 46)(20, "div", 47);
    \u0275\u0275text(21, "0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 48);
    \u0275\u0275text(23, "Resultados exactos");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.currentPool());
  }
}
function PoolsComponent_div_16_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 65)(1, "div", 66)(2, "div", 16)(3, "span", 67);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 68)(6, "div", 26)(7, "span", 69);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 70);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "span", 71);
    \u0275\u0275text(12, "vs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 26)(14, "span", 70);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 69);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "p", 72);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 73)(21, "div", 74)(22, "span", 75);
    \u0275\u0275text(23, "Tu predicci\xF3n:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 26)(25, "input", 76);
    \u0275\u0275twoWayListener("ngModelChange", function PoolsComponent_div_16_div_5_Template_input_ngModelChange_25_listener($event) {
      const match_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.getPred(match_r8.id).homeScore, $event) || (ctx_r1.getPred(match_r8.id).homeScore = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 77);
    \u0275\u0275text(27, "\u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "input", 76);
    \u0275\u0275twoWayListener("ngModelChange", function PoolsComponent_div_16_div_5_Template_input_ngModelChange_28_listener($event) {
      const match_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.getPred(match_r8.id).awayScore, $event) || (ctx_r1.getPred(match_r8.id).awayScore = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "button", 36);
    \u0275\u0275listener("click", function PoolsComponent_div_16_div_5_Template_button_click_29_listener() {
      const match_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.savePred(match_r8.id));
    });
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const match_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", match_r8.phase, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(match_r8.homeTeam.flag);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(match_r8.homeTeam.name);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(match_r8.awayTeam.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(match_r8.awayTeam.flag);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r1.formatDate(match_r8.date), " \u2014 ", match_r8.time, "");
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.getPred(match_r8.id).homeScore);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.getPred(match_r8.id).awayScore);
    \u0275\u0275advance();
    \u0275\u0275classMap("px-4 py-2 rounded-lg text-sm transition-colors " + (ctx_r1.getPred(match_r8.id).saved ? "bg-green-100 text-green-700 border border-green-200" : "bg-[#00B140] text-white hover:bg-[#009633]"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getPred(match_r8.id).saved ? "\u2713 Guardado" : "Guardar predicci\xF3n", " ");
  }
}
function PoolsComponent_div_16_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 78)(1, "div", 79)(2, "div", 16)(3, "div", 80)(4, "span", 81);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 70);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 82);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 81);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 70);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "p", 72);
    \u0275\u0275text(15, "Tu predicci\xF3n: 2 - 1");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "span", 83);
    \u0275\u0275text(17, " +5 pts ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const match_r9 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(match_r9.homeTeam.flag);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(match_r9.homeTeam.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", match_r9.homeScore, " - ", match_r9.awayScore, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(match_r9.awayTeam.flag);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(match_r9.awayTeam.name);
  }
}
function PoolsComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 60)(2, "h3", 61);
    \u0275\u0275text(3, "Predicciones Activas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 38);
    \u0275\u0275template(5, PoolsComponent_div_16_div_5_Template, 31, 12, "div", 62);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 60)(7, "h3", 61);
    \u0275\u0275text(8, "Predicciones Pasadas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 63);
    \u0275\u0275template(10, PoolsComponent_div_16_div_10_Template, 18, 6, "div", 64);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r1.scheduledMatches);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r1.finishedMatches);
  }
}
function PoolsComponent_div_17_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 91)(1, "div", 92)(2, "div", 16)(3, "h3", 93);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 94)(6, "div", 19);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(7, "svg", 20);
    \u0275\u0275element(8, "path", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(10, "span", 59);
    \u0275\u0275text(11, "Activa");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 26)(13, "span", 48);
    \u0275\u0275text(14, "C\xF3digo:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "code", 95);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "button", 96);
    \u0275\u0275listener("click", function PoolsComponent_div_17_div_1_Template_button_click_17_listener() {
      const pool_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectPool(pool_r12));
    });
    \u0275\u0275text(18, " Ver ranking ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const pool_r12 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(pool_r12.nombre || pool_r12.name);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", (pool_r12.members || \u0275\u0275pureFunction0(3, _c0)).length || 1, " miembros ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(pool_r12.codigo || pool_r12.code);
  }
}
function PoolsComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 84);
    \u0275\u0275template(1, PoolsComponent_div_17_div_1_Template, 19, 4, "div", 85);
    \u0275\u0275elementStart(2, "div", 86);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 87);
    \u0275\u0275element(4, "circle", 22)(5, "path", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "h3", 88);
    \u0275\u0275text(7, "Crea una nueva polla");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 89);
    \u0275\u0275text(9, "Invita a tus amigos y compite por el primer lugar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 90);
    \u0275\u0275listener("click", function PoolsComponent_div_17_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showModal.set(true));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 5);
    \u0275\u0275element(12, "line", 6)(13, "line", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, " Crear Polla ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.pools());
  }
}
function PoolsComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 97);
    \u0275\u0275listener("click", function PoolsComponent_div_18_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showModal.set(false));
    });
    \u0275\u0275elementStart(1, "div", 98);
    \u0275\u0275listener("click", function PoolsComponent_div_18_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r13);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "h2", 99);
    \u0275\u0275text(3, "Crear Nueva Polla");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 100)(5, "div")(6, "label", 101);
    \u0275\u0275text(7, "Nombre de la polla ");
    \u0275\u0275elementStart(8, "span", 102);
    \u0275\u0275text(9, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "input", 103);
    \u0275\u0275twoWayListener("ngModelChange", function PoolsComponent_div_18_Template_input_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newPool.name, $event) || (ctx_r1.newPool.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div")(12, "label", 101);
    \u0275\u0275text(13, "Descripci\xF3n (opcional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 104);
    \u0275\u0275twoWayListener("ngModelChange", function PoolsComponent_div_18_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newPool.description, $event) || (ctx_r1.newPool.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div")(16, "label", 101);
    \u0275\u0275text(17, "Privacidad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "select", 105);
    \u0275\u0275twoWayListener("ngModelChange", function PoolsComponent_div_18_Template_select_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newPool.privacy, $event) || (ctx_r1.newPool.privacy = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(19, "option");
    \u0275\u0275text(20, "Privada (solo con c\xF3digo)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "option");
    \u0275\u0275text(22, "P\xFAblica");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(23, "div", 106)(24, "button", 107);
    \u0275\u0275listener("click", function PoolsComponent_div_18_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showModal.set(false));
    });
    \u0275\u0275text(25, " Cancelar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 108);
    \u0275\u0275listener("click", function PoolsComponent_div_18_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.createPool());
    });
    \u0275\u0275text(27, " Crear Polla ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newPool.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newPool.description);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newPool.privacy);
  }
}
var PoolsComponent = class _PoolsComponent {
  constructor() {
    this.pollasService = inject(PollasService);
    this.partidosService = inject(PartidosService);
    this.authService = inject(AuthService);
    this.activeTab = signal("rankings");
    this.showModal = signal(false);
    this.copied = signal(false);
    this.predictions = {};
    this.pools = signal([]);
    this.currentPool = signal(null);
    this.currentRanking = signal([]);
    this.matches = signal([]);
    this.newPool = { name: "", description: "", privacy: "Privada (solo con c\xF3digo)" };
    this.tabs = [
      { id: "rankings", label: "Ranking", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>` },
      { id: "predictions", label: "Predicciones", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>` },
      { id: "my-pools", label: "Mis Pollas", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>` }
    ];
    this.loadData();
  }
  loadData() {
    this.pollasService.getAll().subscribe((data) => {
      this.pools.set(data || []);
      if (data && data.length > 0) {
        this.selectPool(data[0]);
      }
    });
    this.partidosService.getAll().subscribe((data) => {
      this.matches.set(data || []);
    });
  }
  currentUser() {
    return this.authService.getCurrentUser();
  }
  selectPool(pool) {
    this.currentPool.set(pool);
    this.pollasService.getRanking(pool.polla_id || pool.id).subscribe((data) => {
      this.currentRanking.set(data || []);
    });
    this.activeTab.set("rankings");
  }
  get scheduledMatches() {
    return this.matches().filter((m) => m.status === "scheduled" || m.status === "programado");
  }
  get finishedMatches() {
    return this.matches().filter((m) => m.status === "finished" || m.status === "finalizado");
  }
  getPred(matchId) {
    if (!this.predictions[matchId]) {
      this.predictions[matchId] = { homeScore: 2, awayScore: 1, saved: false };
    }
    return this.predictions[matchId];
  }
  savePred(matchId) {
    const p = this.getPred(matchId);
    if (!this.currentPool())
      return;
    const poolId = this.currentPool().polla_id || this.currentPool().id;
    this.pollasService.savePronosticos(poolId, [{ matchId, homeScore: p.homeScore, awayScore: p.awayScore }]).subscribe({
      next: () => {
        p.saved = true;
        setTimeout(() => {
          if (this.predictions[matchId])
            this.predictions[matchId].saved = false;
        }, 2500);
      }
    });
  }
  medalIcon(i) {
    return i === 0 ? "\u{1F947}" : i === 1 ? "\u{1F948}" : i === 2 ? "\u{1F949}" : `#${i + 1}`;
  }
  medalClass(i) {
    if (i === 0)
      return "bg-yellow-100 text-yellow-700";
    if (i === 1)
      return "bg-gray-100 text-gray-700";
    if (i === 2)
      return "bg-orange-100 text-orange-700";
    return "bg-gray-50 text-gray-500";
  }
  copyCode(code) {
    if (!code)
      return;
    navigator.clipboard.writeText(code).catch(() => {
    });
    this.copied.set(true);
    setTimeout(() => this.copied.set(false), 2e3);
  }
  createPool() {
    if (!this.newPool.name.trim())
      return;
    this.pollasService.create({ nombre: this.newPool.name, descripcion: this.newPool.description }).subscribe({
      next: () => {
        this.newPool = { name: "", description: "", privacy: "Privada (solo con c\xF3digo)" };
        this.showModal.set(false);
        this.loadData();
        this.activeTab.set("my-pools");
      }
    });
  }
  formatDate(d) {
    return new Date(d).toLocaleDateString("es-ES", { month: "short", day: "numeric" });
  }
  static {
    this.\u0275fac = function PoolsComponent_Factory(t) {
      return new (t || _PoolsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PoolsComponent, selectors: [["app-pools"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 19, vars: 6, consts: [[1, "space-y-6"], [1, "flex", "flex-col", "sm:flex-row", "justify-between", "items-start", "sm:items-center", "gap-4"], [1, "text-3xl", "mb-2", "text-gray-900"], [1, "text-gray-600"], [1, "flex", "items-center", "gap-2", "px-4", "py-2.5", "bg-[#00B140]", "text-white", "rounded-lg", "hover:bg-[#009633]", "transition-colors", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "20", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2"], ["x1", "12", "y1", "5", "x2", "12", "y2", "19"], ["x1", "5", "y1", "12", "x2", "19", "y2", "12"], ["class", "bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl shadow-md border border-purple-100 p-6", 4, "ngIf"], [1, "flex", "gap-0", "border-b", "border-gray-200", "overflow-x-auto"], [3, "class", "click", 4, "ngFor", "ngForOf"], ["class", "space-y-4", 4, "ngIf"], ["class", "grid gap-4", 4, "ngIf"], ["class", "fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50", 3, "click", 4, "ngIf"], [1, "bg-gradient-to-r", "from-purple-50", "to-pink-50", "rounded-xl", "shadow-md", "border", "border-purple-100", "p-6"], [1, "flex", "flex-col", "sm:flex-row", "items-start", "justify-between", "gap-4"], [1, "flex-1"], [1, "text-2xl", "mb-2", "text-gray-800"], [1, "flex", "items-center", "gap-4", "text-sm", "text-gray-600"], [1, "flex", "items-center", "gap-1"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"], ["cx", "12", "cy", "8", "r", "6"], ["d", "M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"], [1, "text-right"], [1, "text-sm", "text-gray-600", "mb-2"], [1, "flex", "items-center", "gap-2"], [1, "px-3", "py-2", "bg-white", "rounded-lg", "text-lg", "font-mono", "shadow-sm", "border", "border-purple-100"], [1, "p-2", "hover:bg-white", "rounded-lg", "transition-colors", 3, "click", "title"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "20", "fill", "none", "viewBox", "0 0 24 24", "stroke", "#6b7280", "stroke-width", "2", 4, "ngIf"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "20", "fill", "none", "viewBox", "0 0 24 24", "stroke", "#00B140", "stroke-width", "2", 4, "ngIf"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "20", "fill", "none", "viewBox", "0 0 24 24", "stroke", "#6b7280", "stroke-width", "2"], ["x", "9", "y", "9", "width", "13", "height", "13", "rx", "2", "ry", "2"], ["d", "M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "20", "fill", "none", "viewBox", "0 0 24 24", "stroke", "#00B140", "stroke-width", "2"], ["points", "20 6 9 17 4 12"], [3, "click"], [1, "w-4", "h-4", 3, "innerHTML"], [1, "space-y-4"], [1, "bg-white", "rounded-xl", "shadow-md", "border", "border-gray-100", "overflow-hidden"], [1, "p-6", "bg-gradient-to-r", "from-yellow-50", "to-amber-50", "border-b", "border-amber-200"], [1, "text-xl", "flex", "items-center", "gap-2", "text-gray-800"], ["xmlns", "http://www.w3.org/2000/svg", "width", "22", "height", "22", "fill", "none", "viewBox", "0 0 24 24", "stroke", "#ca8a04", "stroke-width", "2"], ["d", "M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"], ["class", "divide-y divide-gray-100", 4, "ngIf"], [1, "grid", "grid-cols-1", "sm:grid-cols-3", "gap-4"], [1, "bg-white", "rounded-xl", "shadow-md", "border", "border-gray-100", "p-6", "text-center"], [1, "text-3xl", "text-gray-800", "mb-2"], [1, "text-sm", "text-gray-500"], [1, "divide-y", "divide-gray-100"], [3, "class", 4, "ngFor", "ngForOf"], [1, "text-3xl", "flex-shrink-0"], [1, "text-lg", "text-gray-800"], ["class", "px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-xs", 4, "ngIf"], [1, "text-3xl", "text-gray-800"], [1, "flex", "items-center", "gap-1", "text-green-600", "flex-shrink-0"], ["points", "23 6 13.5 15.5 8.5 10.5 1 18"], ["points", "17 6 23 6 23 12"], [1, "text-sm"], [1, "px-2", "py-0.5", "bg-green-100", "text-green-700", "rounded-full", "text-xs"], [1, "bg-white", "rounded-xl", "shadow-md", "border", "border-gray-100", "p-6"], [1, "text-xl", "mb-4", "text-gray-900"], ["class", "p-5 bg-gray-50 rounded-lg", 4, "ngFor", "ngForOf"], [1, "space-y-3"], ["class", "p-4 bg-gray-50 rounded-lg", 4, "ngFor", "ngForOf"], [1, "p-5", "bg-gray-50", "rounded-lg"], [1, "flex", "flex-col", "lg:flex-row", "justify-between", "gap-4"], [1, "px-2", "py-1", "bg-blue-100", "text-blue-700", "rounded-full", "text-xs", "mb-3", "inline-block"], [1, "flex", "items-center", "justify-between", "max-w-xs", "mb-2"], [1, "text-2xl"], [1, "text-sm", "text-gray-800"], [1, "text-gray-400", "mx-2"], [1, "text-xs", "text-gray-500"], [1, "flex", "flex-col", "justify-center", "gap-3"], [1, "flex", "items-center", "gap-3"], [1, "text-sm", "text-gray-600"], ["type", "number", "min", "0", "max", "9", 1, "w-12", "h-12", "text-center", "text-xl", "border-2", "border-gray-200", "rounded-lg", "outline-none", "focus:border-[#00B140]", "transition-colors", 3, "ngModelChange", "ngModel"], [1, "text-xl", "text-gray-500"], [1, "p-4", "bg-gray-50", "rounded-lg"], [1, "flex", "items-center", "justify-between", "gap-4"], [1, "flex", "items-center", "gap-2", "mb-1", "flex-wrap"], [1, "text-xl"], [1, "text-lg", "mx-1", "text-gray-800"], [1, "px-3", "py-1", "bg-green-100", "text-green-700", "rounded-full", "text-sm", "flex-shrink-0"], [1, "grid", "gap-4"], ["class", "bg-white rounded-xl shadow-md border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 cursor-pointer", 4, "ngFor", "ngForOf"], [1, "bg-white", "rounded-xl", "shadow-md", "border-2", "border-dashed", "border-gray-300", "p-12", "text-center"], ["xmlns", "http://www.w3.org/2000/svg", "width", "48", "height", "48", "fill", "none", "viewBox", "0 0 24 24", "stroke", "#d1d5db", "stroke-width", "1.5", 1, "mx-auto", "mb-4"], [1, "text-xl", "text-gray-500", "mb-2"], [1, "text-gray-400", "mb-6", "text-sm"], [1, "flex", "items-center", "gap-2", "px-4", "py-2.5", "bg-[#00B140]", "text-white", "rounded-lg", "hover:bg-[#009633]", "transition-colors", "mx-auto", 3, "click"], [1, "bg-white", "rounded-xl", "shadow-md", "border", "border-gray-100", "p-6", "hover:shadow-xl", "transition-all", "duration-300", "cursor-pointer"], [1, "flex", "items-start", "justify-between", "gap-4"], [1, "text-xl", "mb-2", "text-gray-800"], [1, "flex", "items-center", "gap-4", "text-sm", "text-gray-600", "mb-4"], [1, "px-2", "py-1", "bg-gray-100", "rounded", "text-sm"], [1, "px-4", "py-2", "bg-[#00B140]", "text-white", "rounded-lg", "text-sm", "hover:bg-[#009633]", "transition-colors", 3, "click"], [1, "fixed", "inset-0", "bg-black/50", "flex", "items-center", "justify-center", "p-4", "z-50", 3, "click"], [1, "bg-white", "rounded-xl", "p-8", "max-w-md", "w-full", "shadow-2xl", 3, "click"], [1, "text-2xl", "mb-6", "text-gray-900"], [1, "space-y-4", "mb-6"], [1, "block", "text-sm", "mb-2", "text-gray-700"], [1, "text-red-500"], ["type", "text", "placeholder", "Mi polla del Mundial", 1, "w-full", "px-4", "py-3", "border-2", "border-gray-200", "rounded-lg", "outline-none", "focus:border-[#00B140]", "transition-colors", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Descripci\xF3n de la polla", 1, "w-full", "px-4", "py-3", "border-2", "border-gray-200", "rounded-lg", "outline-none", "focus:border-[#00B140]", "transition-colors", 3, "ngModelChange", "ngModel"], [1, "w-full", "px-4", "py-3", "border-2", "border-gray-200", "rounded-lg", "outline-none", "focus:border-[#00B140]", "transition-colors", 3, "ngModelChange", "ngModel"], [1, "flex", "gap-3"], [1, "flex-1", "py-2.5", "border-2", "border-gray-300", "text-gray-700", "rounded-lg", "hover:bg-gray-50", "transition-colors", 3, "click"], [1, "flex-1", "py-2.5", "bg-[#00B140]", "text-white", "rounded-lg", "hover:bg-[#009633]", "transition-colors", 3, "click"]], template: function PoolsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4, "Pollas \u{1F3C6}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6, "Compite con tus amigos prediciendo resultados");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "button", 4);
        \u0275\u0275listener("click", function PoolsComponent_Template_button_click_7_listener() {
          return ctx.showModal.set(true);
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(8, "svg", 5);
        \u0275\u0275element(9, "line", 6)(10, "line", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275text(11, " Crear Polla ");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(12, PoolsComponent_div_12_Template, 24, 8, "div", 8);
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(13, "div", 9);
        \u0275\u0275template(14, PoolsComponent_button_14_Template, 3, 4, "button", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275template(15, PoolsComponent_div_15_Template, 24, 1, "div", 11)(16, PoolsComponent_div_16_Template, 11, 2, "div", 11)(17, PoolsComponent_div_17_Template, 15, 1, "div", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275template(18, PoolsComponent_div_18_Template, 28, 3, "div", 13);
      }
      if (rf & 2) {
        \u0275\u0275advance(12);
        \u0275\u0275property("ngIf", ctx.currentPool());
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.tabs);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeTab() === "rankings");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeTab() === "predictions");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeTab() === "my-pools");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showModal());
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, MaxValidator, NgModel], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PoolsComponent, { className: "PoolsComponent", filePath: "src\\app\\pages\\pools\\pools.component.ts", lineNumber: 325 });
})();
export {
  PoolsComponent
};
//# sourceMappingURL=chunk-YXLU2LHD.js.map
