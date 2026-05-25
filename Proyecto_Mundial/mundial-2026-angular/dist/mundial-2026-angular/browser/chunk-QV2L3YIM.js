import {
  ActivatedRoute,
  RouterLink
} from "./chunk-HRYE6XXT.js";
import {
  PartidosService
} from "./chunk-7DJCKAIS.js";
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
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-G2QLUSIR.js";

// src/app/pages/matches/matches.component.ts
var _c0 = (a0) => ["/matches", a0];
function MatchesComponent_div_0_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275element(1, "span", 32);
    \u0275\u0275text(2, " EN VIVO ");
    \u0275\u0275elementEnd();
  }
}
function MatchesComponent_div_0_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r0.matchDetail.status === "programado" ? "px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm" : "px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.matchDetail.status === "programado" ? "PROGRAMADO" : "FINALIZADO", " ");
  }
}
function MatchesComponent_div_0_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r0.matchDetail.homeScore, " - ", ctx_r0.matchDetail.awayScore, " ");
  }
}
function MatchesComponent_div_0_ng_container_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 34);
    \u0275\u0275text(2, "vs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 35);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 36);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.formatDateLong(ctx_r0.matchDetail.date));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.matchDetail.time);
  }
}
function MatchesComponent_div_0_div_45_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "div", 42)(2, "span", 43);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 44);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 45)(7, "p", 25);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 46);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 47);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const event_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", event_r2.minute, "' ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.eventIcon(event_r2.type), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(event_r2.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(event_r2.player);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", event_r2.team === "home" ? ctx_r0.matchDetail.homeTeam.name : ctx_r0.matchDetail.awayTeam.name, " ");
  }
}
function MatchesComponent_div_0_div_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "h3", 38);
    \u0275\u0275text(2, "Eventos del Partido");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 39);
    \u0275\u0275template(4, MatchesComponent_div_0_div_45_div_4_Template, 13, 5, "div", 40);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r0.matchDetail.events);
  }
}
function MatchesComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "a", 3);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 4);
    \u0275\u0275element(3, "path", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Volver a partidos ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div", 6)(6, "div", 7);
    \u0275\u0275template(7, MatchesComponent_div_0_span_7_Template, 3, 0, "span", 8)(8, MatchesComponent_div_0_span_8_Template, 2, 3, "span", 9);
    \u0275\u0275elementStart(9, "span", 10);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 11)(12, "div", 12)(13, "div", 13);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "h2", 14);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p", 15);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 16);
    \u0275\u0275template(20, MatchesComponent_div_0_div_20_Template, 2, 2, "div", 17)(21, MatchesComponent_div_0_ng_container_21_Template, 7, 2, "ng-container", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 12)(23, "div", 13);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "h2", 14);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "p", 15);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "div", 19)(30, "div", 20);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(31, "svg", 21);
    \u0275\u0275element(32, "path", 22)(33, "path", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(34, "p", 24);
    \u0275\u0275text(35, "Estadio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "p", 25);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 20);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(39, "svg", 21);
    \u0275\u0275element(40, "path", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(41, "p", 24);
    \u0275\u0275text(42, "Ciudad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "p", 25);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(45, MatchesComponent_div_0_div_45_Template, 5, 1, "div", 27);
    \u0275\u0275elementStart(46, "div", 28)(47, "button", 29);
    \u0275\u0275text(48, " Hacer predicci\xF3n ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "button", 30);
    \u0275\u0275text(50, " Agregar a agenda ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r0.matchDetail.status === "en_curso");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.matchDetail.status !== "en_curso");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.matchDetail.phase, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.matchDetail.homeTeam.flag);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.matchDetail.homeTeam.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Grupo ", ctx_r0.matchDetail.homeTeam.group, "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.matchDetail.status === "finalizado" || ctx_r0.matchDetail.status === "en_curso");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.matchDetail.status === "programado");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.matchDetail.awayTeam.flag);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.matchDetail.awayTeam.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Grupo ", ctx_r0.matchDetail.awayTeam.group, "");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.matchDetail.stadium);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.matchDetail.city);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.matchDetail.events && ctx_r0.matchDetail.events.length > 0);
  }
}
function MatchesComponent_ng_template_1_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 68);
    \u0275\u0275listener("click", function MatchesComponent_ng_template_1_button_8_Template_button_click_0_listener() {
      const f_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.filter.set(f_r4.value));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r0.filter() === f_r4.value ? "px-4 py-2 bg-[#00B140] text-white rounded-lg text-sm transition-colors" : "px-4 py-2 border-2 border-[#00B140] text-[#00B140] rounded-lg text-sm hover:bg-[#00B140] hover:text-white transition-colors");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", f_r4.label, " ");
  }
}
function MatchesComponent_ng_template_1_a_33_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275element(1, "span", 32);
    \u0275\u0275text(2, " EN VIVO ");
    \u0275\u0275elementEnd();
  }
}
function MatchesComponent_ng_template_1_a_33_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 90);
    \u0275\u0275text(1, "PROGRAMADO");
    \u0275\u0275elementEnd();
  }
}
function MatchesComponent_ng_template_1_a_33_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1, "FINALIZADO");
    \u0275\u0275elementEnd();
  }
}
function MatchesComponent_ng_template_1_a_33_span_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 91);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const match_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", match_r5.homeScore, " - ", match_r5.awayScore, " ");
  }
}
function MatchesComponent_ng_template_1_a_33_span_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 92);
    \u0275\u0275text(1, "vs");
    \u0275\u0275elementEnd();
  }
}
function MatchesComponent_ng_template_1_a_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 69)(1, "div", 70)(2, "div", 71)(3, "div", 45)(4, "div", 72);
    \u0275\u0275template(5, MatchesComponent_ng_template_1_a_33_span_5_Template, 3, 0, "span", 8)(6, MatchesComponent_ng_template_1_a_33_span_6_Template, 2, 0, "span", 73)(7, MatchesComponent_ng_template_1_a_33_span_7_Template, 2, 0, "span", 74);
    \u0275\u0275elementStart(8, "span", 75);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 76)(11, "div", 77)(12, "span", 78);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div")(15, "p", 79);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p", 46);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 80);
    \u0275\u0275template(20, MatchesComponent_ng_template_1_a_33_span_20_Template, 2, 2, "span", 81)(21, MatchesComponent_ng_template_1_a_33_span_21_Template, 2, 0, "span", 82);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 83)(23, "div", 84)(24, "p", 79);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "p", 46);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "span", 78);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div", 85)(31, "div", 86);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(32, "svg", 87);
    \u0275\u0275element(33, "circle", 60)(34, "polyline", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275text(35);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(36, "div", 86);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(37, "svg", 87);
    \u0275\u0275element(38, "path", 22)(39, "path", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(41, "div", 88)(42, "span", 89);
    \u0275\u0275text(43, " Ver detalles \u2192 ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const match_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(17, _c0, match_r5.id));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", match_r5.status === "en_curso");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", match_r5.status === "programado");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", match_r5.status === "finalizado");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(match_r5.phase);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(match_r5.homeTeam.flag);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(match_r5.homeTeam.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Grupo ", match_r5.homeTeam.group, "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", match_r5.status === "finalizado" || match_r5.status === "en_curso");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", match_r5.status === "programado");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(match_r5.awayTeam.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Grupo ", match_r5.awayTeam.group, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(match_r5.awayTeam.flag);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2(" ", ctx_r0.formatDateShort(match_r5.date), " \u2014 ", match_r5.time, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2(" ", match_r5.stadium, ", ", match_r5.city, " ");
  }
}
function MatchesComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 48)(2, "div")(3, "h1", 49);
    \u0275\u0275text(4, "Partidos \u26BD");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 50);
    \u0275\u0275text(6, "Todos los encuentros del Mundial 2026");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 51);
    \u0275\u0275template(8, MatchesComponent_ng_template_1_button_8_Template, 2, 3, "button", 52);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 53)(10, "div", 54)(11, "div", 55);
    \u0275\u0275element(12, "span", 56);
    \u0275\u0275text(13, " En Vivo ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 57);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 58)(17, "div", 59);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(18, "svg", 4);
    \u0275\u0275element(19, "circle", 60)(20, "polyline", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275text(21, " Programados ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(22, "div", 57);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 62)(25, "div", 63);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(26, "svg", 4);
    \u0275\u0275element(27, "circle", 64)(28, "path", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275text(29, " Finalizados ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(30, "div", 57);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "div", 66);
    \u0275\u0275template(33, MatchesComponent_ng_template_1_a_33_Template, 44, 19, "a", 67);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("ngForOf", ctx_r0.filterButtons);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.liveCount);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.scheduledCount);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.finishedCount);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.filteredMatches);
  }
}
var MatchesComponent = class _MatchesComponent {
  constructor() {
    this.partidosService = inject(PartidosService);
    this.route = inject(ActivatedRoute);
    this.allMatches = signal([]);
    this.filter = signal("all");
    this.partidosService.getAll().subscribe((m) => this.allMatches.set(m));
  }
  get matchDetail() {
    const id = this.route.snapshot.paramMap.get("id");
    if (!id)
      return null;
    return this.allMatches().find((m) => m.id == id || m.id === id) ?? null;
  }
  get filteredMatches() {
    const f = this.filter();
    if (f === "all")
      return this.allMatches();
    return this.allMatches().filter((m) => m.status === f);
  }
  get liveCount() {
    return this.allMatches().filter((m) => m.status === "en_curso").length;
  }
  get scheduledCount() {
    return this.allMatches().filter((m) => m.status === "programado").length;
  }
  get finishedCount() {
    return this.allMatches().filter((m) => m.status === "finalizado").length;
  }
  get filterButtons() {
    return [
      { value: "all", label: `Todos (${this.allMatches().length})` },
      { value: "en_curso", label: "\u{1F534} En Vivo" },
      { value: "programado", label: "Programados" },
      { value: "finalizado", label: "Finalizados" }
    ];
  }
  formatDateShort(d) {
    return new Date(d).toLocaleDateString("es-ES", { month: "short", day: "numeric", year: "numeric" });
  }
  formatDateLong(d) {
    return new Date(d).toLocaleDateString("es-ES", { weekday: "long", month: "long", day: "numeric" });
  }
  eventIcon(type) {
    return type === "goal" ? "\u26BD" : type === "yellow-card" ? "\u{1F7E8}" : type === "red-card" ? "\u{1F7E5}" : "\u{1F504}";
  }
  static {
    this.\u0275fac = function MatchesComponent_Factory(t) {
      return new (t || _MatchesComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MatchesComponent, selectors: [["app-matches"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 2, consts: [["listView", ""], ["class", "space-y-6", 4, "ngIf", "ngIfElse"], [1, "space-y-6"], ["routerLink", "/matches", 1, "inline-flex", "items-center", "gap-2", "text-gray-600", "hover:text-gray-900", "transition-colors", "text-sm"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M10 19l-7-7m0 0l7-7m-7 7h18"], [1, "bg-white", "rounded-xl", "shadow-md", "border", "border-gray-100", "p-8"], [1, "flex", "items-center", "gap-2", "mb-6", "flex-wrap"], ["class", "flex items-center gap-1 px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm", 4, "ngIf"], [3, "class", 4, "ngIf"], [1, "px-3", "py-1", "bg-gray-100", "text-gray-700", "rounded-full", "text-sm"], [1, "flex", "items-center", "justify-between", "mb-8", "max-w-3xl", "mx-auto"], [1, "text-center", "flex-1"], [1, "text-6xl", "mb-4"], [1, "text-2xl", "mb-1", "text-gray-800"], [1, "text-gray-500", "text-sm"], [1, "text-center", "px-8"], ["class", "text-6xl text-gray-800", 4, "ngIf"], [4, "ngIf"], [1, "flex", "justify-center", "gap-12", "py-6", "border-y", "border-gray-200"], [1, "text-center"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "fill", "none", "viewBox", "0 0 24 24", "stroke", "#00B140", "stroke-width", "2", 1, "mx-auto", "mb-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15 11a3 3 0 11-6 0 3 3 0 016 0z"], [1, "text-sm", "text-gray-500", "mb-1"], [1, "text-gray-800"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"], ["class", "bg-white rounded-xl shadow-md border border-gray-100 p-6", 4, "ngIf"], [1, "flex", "flex-col", "sm:flex-row", "gap-4"], [1, "flex-1", "py-3", "bg-[#00B140]", "text-white", "rounded-lg", "hover:bg-[#009633]", "transition-colors"], [1, "flex-1", "py-3", "border-2", "border-[#00B140]", "text-[#00B140]", "rounded-lg", "hover:bg-[#00B140]", "hover:text-white", "transition-colors"], [1, "flex", "items-center", "gap-1", "px-3", "py-1", "bg-red-100", "text-red-700", "rounded-full", "text-sm"], [1, "w-2", "h-2", "bg-red-500", "rounded-full", "animate-pulse"], [1, "text-6xl", "text-gray-800"], [1, "text-4xl", "text-gray-400", "mb-2"], [1, "text-sm", "text-gray-600", "capitalize"], [1, "text-xl", "mt-2", "text-gray-800"], [1, "bg-white", "rounded-xl", "shadow-md", "border", "border-gray-100", "p-6"], [1, "text-xl", "mb-4", "text-gray-900"], [1, "space-y-3"], ["class", "flex items-center gap-4 p-3 bg-gray-50 rounded-lg", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "gap-4", "p-3", "bg-gray-50", "rounded-lg"], [1, "w-14", "text-center", "flex-shrink-0"], [1, "px-2", "py-1", "bg-gray-200", "text-gray-700", "rounded-full", "text-xs"], [1, "text-2xl", "flex-shrink-0"], [1, "flex-1"], [1, "text-sm", "text-gray-500"], [1, "text-sm", "text-gray-500", "flex-shrink-0"], [1, "flex", "flex-col", "sm:flex-row", "justify-between", "items-start", "sm:items-center", "gap-4"], [1, "text-3xl", "mb-2", "text-gray-900"], [1, "text-gray-600"], [1, "flex", "gap-2", "flex-wrap"], [3, "class", "click", 4, "ngFor", "ngForOf"], [1, "grid", "grid-cols-1", "sm:grid-cols-3", "gap-4"], [1, "bg-gradient-to-br", "from-red-50", "to-orange-50", "rounded-xl", "shadow-md", "border", "border-red-100", "p-6"], [1, "flex", "items-center", "gap-2", "text-red-600", "mb-2"], [1, "w-3", "h-3", "bg-red-500", "rounded-full", "animate-pulse", "inline-block"], [1, "text-3xl", "text-gray-800"], [1, "bg-gradient-to-br", "from-blue-50", "to-cyan-50", "rounded-xl", "shadow-md", "border", "border-blue-100", "p-6"], [1, "flex", "items-center", "gap-2", "text-blue-600", "mb-2"], ["cx", "12", "cy", "12", "r", "10"], ["points", "12 6 12 12 16 14"], [1, "bg-gradient-to-br", "from-gray-50", "to-slate-50", "rounded-xl", "shadow-md", "border", "border-gray-200", "p-6"], [1, "flex", "items-center", "gap-2", "text-gray-600", "mb-2"], ["cx", "12", "cy", "8", "r", "6"], ["d", "M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"], [1, "grid", "gap-4"], ["class", "block no-underline", 3, "routerLink", 4, "ngFor", "ngForOf"], [3, "click"], [1, "block", "no-underline", 3, "routerLink"], [1, "bg-white", "rounded-xl", "shadow-md", "border", "border-gray-100", "p-6", "hover:shadow-xl", "hover:scale-[1.01]", "transition-all", "duration-300", "cursor-pointer"], [1, "flex", "flex-col", "lg:flex-row", "justify-between", "gap-4"], [1, "flex", "items-center", "gap-2", "mb-4", "flex-wrap"], ["class", "px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm", 4, "ngIf"], ["class", "px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm", 4, "ngIf"], [1, "px-3", "py-1", "bg-gray-100", "text-gray-600", "rounded-full", "text-sm"], [1, "flex", "items-center", "justify-between", "max-w-2xl"], [1, "flex", "items-center", "gap-3", "flex-1"], [1, "text-4xl"], [1, "text-xl", "text-gray-800"], [1, "text-center", "px-6"], ["class", "text-4xl text-gray-800", 4, "ngIf"], ["class", "text-2xl text-gray-400", 4, "ngIf"], [1, "flex", "items-center", "gap-3", "flex-1", "justify-end"], [1, "text-right"], [1, "flex", "flex-wrap", "gap-4", "mt-4", "text-sm", "text-gray-500"], [1, "flex", "items-center", "gap-1"], ["xmlns", "http://www.w3.org/2000/svg", "width", "14", "height", "14", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2"], [1, "flex", "items-center", "flex-shrink-0"], [1, "px-4", "py-2", "bg-[#00B140]", "text-white", "rounded-lg", "text-sm", "hover:bg-[#009633]", "transition-colors"], [1, "px-3", "py-1", "bg-blue-100", "text-blue-700", "rounded-full", "text-sm"], [1, "text-4xl", "text-gray-800"], [1, "text-2xl", "text-gray-400"]], template: function MatchesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, MatchesComponent_div_0_Template, 51, 14, "div", 1)(1, MatchesComponent_ng_template_1_Template, 34, 5, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const listView_r6 = \u0275\u0275reference(2);
        \u0275\u0275property("ngIf", ctx.matchDetail)("ngIfElse", listView_r6);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, RouterLink], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MatchesComponent, { className: "MatchesComponent", filePath: "src\\app\\pages\\matches\\matches.component.ts", lineNumber: 266 });
})();
export {
  MatchesComponent
};
//# sourceMappingURL=chunk-QV2L3YIM.js.map
