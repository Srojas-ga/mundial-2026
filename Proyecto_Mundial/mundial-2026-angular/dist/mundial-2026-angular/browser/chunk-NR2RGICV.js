import {
  AuthService
} from "./chunk-JHTY2FGU.js";
import {
  PartidosService
} from "./chunk-7DJCKAIS.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
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
  ɵɵattribute,
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

// src/app/pages/agenda/agenda.component.ts
function AgendaComponent_option_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const city_r1 = ctx.$implicit;
    \u0275\u0275property("value", city_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(city_r1);
  }
}
function AgendaComponent_option_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const team_r2 = ctx.$implicit;
    \u0275\u0275property("value", team_r2.id || team_r2.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", team_r2.flag, " ", team_r2.name, "");
  }
}
function AgendaComponent_div_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "button", 33);
    \u0275\u0275listener("click", function AgendaComponent_div_45_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.clearFilters());
    });
    \u0275\u0275text(2, " \u2715 Limpiar filtros ");
    \u0275\u0275elementEnd()();
  }
}
function AgendaComponent_div_46_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "div", 40)(2, "div", 41)(3, "span", 42);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 43);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 44);
    \u0275\u0275text(8, "vs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 43);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 42);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 45)(14, "div");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 46);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const match_r5 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(match_r5.homeTeam.flag);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(match_r5.homeTeam.name);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(match_r5.awayTeam.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(match_r5.awayTeam.flag);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.formatDateShort(match_r5.date));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(match_r5.time);
  }
}
function AgendaComponent_div_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 18);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 35);
    \u0275\u0275element(3, "path", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "h3", 21);
    \u0275\u0275text(5, "Partidos de tus equipos favoritos");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 37);
    \u0275\u0275template(7, AgendaComponent_div_46_div_7_Template, 18, 6, "div", 38);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r3.favoriteMatches.slice(0, 3));
  }
}
function AgendaComponent_div_47_div_1_div_12_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 74);
    \u0275\u0275element(1, "span", 75);
    \u0275\u0275text(2, " EN VIVO ");
    \u0275\u0275elementEnd();
  }
}
function AgendaComponent_div_47_div_1_div_12_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 76);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const match_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", match_r7.phase, " ");
  }
}
function AgendaComponent_div_47_div_1_div_12_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 77);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const match_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", match_r7.homeScore, " - ", match_r7.awayScore, " ");
  }
}
function AgendaComponent_div_47_div_1_div_12_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 78);
    \u0275\u0275text(1, "vs");
    \u0275\u0275elementEnd();
  }
}
function AgendaComponent_div_47_div_1_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 55)(1, "div", 56)(2, "div", 57)(3, "div", 58);
    \u0275\u0275template(4, AgendaComponent_div_47_div_1_div_12_span_4_Template, 3, 0, "span", 59)(5, AgendaComponent_div_47_div_1_div_12_span_5_Template, 2, 1, "span", 60);
    \u0275\u0275elementStart(6, "span", 52);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 61)(9, "div", 41)(10, "span", 62);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 63);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 64);
    \u0275\u0275template(15, AgendaComponent_div_47_div_1_div_12_span_15_Template, 2, 2, "span", 65)(16, AgendaComponent_div_47_div_1_div_12_span_16_Template, 2, 0, "span", 66);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 41)(18, "span", 63);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 62);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 67);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(23, "svg", 68);
    \u0275\u0275element(24, "path", 69)(25, "path", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(27, "div", 71)(28, "button", 5);
    \u0275\u0275listener("click", function AgendaComponent_div_47_div_1_div_12_Template_button_click_28_listener() {
      const match_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.toggleFavorite(match_r7.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(29, "svg", 72);
    \u0275\u0275element(30, "path", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(32, "button", 73);
    \u0275\u0275text(33, " Ver detalles ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const match_r7 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", match_r7.status === "live");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", match_r7.status !== "live");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" \u{1F550} ", match_r7.time, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(match_r7.homeTeam.flag);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(match_r7.homeTeam.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", match_r7.status === "finished" || match_r7.status === "live");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", match_r7.status === "scheduled");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(match_r7.awayTeam.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(match_r7.awayTeam.flag);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2(" ", match_r7.stadium, ", ", match_r7.city, " ");
    \u0275\u0275advance(2);
    \u0275\u0275classMap("flex items-center gap-1 px-3 py-2 border-2 rounded-lg text-sm transition-colors " + (ctx_r3.isFavorited(match_r7.id) ? "border-[#00B140] bg-green-50 text-[#00B140]" : "border-gray-300 text-gray-600 hover:border-[#00B140] hover:text-[#00B140]"));
    \u0275\u0275advance();
    \u0275\u0275attribute("fill", ctx_r3.isFavorited(match_r7.id) ? "#00B140" : "none");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r3.isFavorited(match_r7.id) ? "Guardado" : "Seguir", " ");
  }
}
function AgendaComponent_div_47_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 49);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 50);
    \u0275\u0275element(3, "rect", 7)(4, "line", 8)(5, "line", 9)(6, "line", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "h2", 51);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 52);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 53);
    \u0275\u0275template(12, AgendaComponent_div_47_div_1_div_12_Template, 34, 15, "div", 54);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const group_r8 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r3.formatDateLong(group_r8.date));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", group_r8.matches.length, " partido", group_r8.matches.length > 1 ? "s" : "", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", group_r8.matches);
  }
}
function AgendaComponent_div_47_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 79)(1, "div", 80);
    \u0275\u0275text(2, "\u{1F50D}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No hay partidos con los filtros seleccionados");
    \u0275\u0275elementEnd()();
  }
}
function AgendaComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275template(1, AgendaComponent_div_47_div_1_Template, 13, 4, "div", 47)(2, AgendaComponent_div_47_div_2_Template, 5, 0, "div", 48);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.matchesByDate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.matchesByDate.length === 0);
  }
}
function AgendaComponent_div_48_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 89)(1, "td", 90);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 90);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 91)(6, "div", 41)(7, "span", 92);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 43);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 93);
    \u0275\u0275text(12, "vs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 92);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 43);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "td", 94);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 91)(20, "span", 95);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "td", 91)(23, "span");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const match_r9 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.formatDateShort(match_r9.date));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(match_r9.time);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(match_r9.homeTeam.flag);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(match_r9.homeTeam.name);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(match_r9.awayTeam.flag);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(match_r9.awayTeam.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(match_r9.city);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(match_r9.phase);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r3.statusClass(match_r9.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.statusLabel(match_r9.status), " ");
  }
}
function AgendaComponent_div_48_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 96)(1, "div", 97);
    \u0275\u0275text(2, "\u{1F50D}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No hay partidos con los filtros seleccionados");
    \u0275\u0275elementEnd()();
  }
}
function AgendaComponent_div_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 81)(1, "div", 82)(2, "table", 83)(3, "thead", 84)(4, "tr")(5, "th", 85);
    \u0275\u0275text(6, "Fecha");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 85);
    \u0275\u0275text(8, "Hora");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 85);
    \u0275\u0275text(10, "Partido");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 85);
    \u0275\u0275text(12, "Ubicaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 85);
    \u0275\u0275text(14, "Fase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 85);
    \u0275\u0275text(16, "Estado");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "tbody", 86);
    \u0275\u0275template(18, AgendaComponent_div_48_tr_18_Template, 25, 11, "tr", 87);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(19, AgendaComponent_div_48_div_19_Template, 5, 0, "div", 88);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(18);
    \u0275\u0275property("ngForOf", ctx_r3.filteredMatches);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.filteredMatches.length === 0);
  }
}
var AgendaComponent = class _AgendaComponent {
  constructor() {
    this.partidosService = inject(PartidosService);
    this.authService = inject(AuthService);
    this.viewMode = signal("calendar");
    this.selectedCity = "all";
    this.selectedTeam = "all";
    this.favoritedIds = signal([]);
    this.matches = signal([]);
    this.teams = signal([]);
    this.loadData();
  }
  loadData() {
    this.partidosService.getAll().subscribe((data) => {
      this.matches.set(data);
      const t = /* @__PURE__ */ new Map();
      data.forEach((m) => {
        if (m.homeTeam)
          t.set(m.homeTeam.id || m.homeTeam.name, m.homeTeam);
        if (m.awayTeam)
          t.set(m.awayTeam.id || m.awayTeam.name, m.awayTeam);
      });
      this.teams.set([...t.values()]);
    });
  }
  get currentUser() {
    return this.authService.getCurrentUser();
  }
  get cities() {
    return [...new Set(this.matches().map((m) => m.city || m.stadium))];
  }
  get filteredMatches() {
    return this.matches().filter((match) => {
      if (this.selectedCity !== "all" && (match.city || match.stadium) !== this.selectedCity)
        return false;
      if (this.selectedTeam !== "all") {
        const hId = match.homeTeam?.id || match.homeTeam?.name;
        const aId = match.awayTeam?.id || match.awayTeam?.name;
        if (hId !== this.selectedTeam && aId !== this.selectedTeam)
          return false;
      }
      return true;
    });
  }
  get favoriteMatches() {
    const fav = this.currentUser?.favoriteTeams || [];
    return this.matches().filter((m) => fav.includes(m.homeTeam?.id) || fav.includes(m.awayTeam?.id));
  }
  get matchesByDate() {
    const map = {};
    for (const match of this.filteredMatches) {
      const d = match.date || match.fecha;
      if (!map[d])
        map[d] = [];
      map[d].push(match);
    }
    return Object.entries(map).sort(([a], [b]) => a.localeCompare(b)).map(([date, matches]) => ({ date, matches }));
  }
  clearFilters() {
    this.selectedCity = "all";
    this.selectedTeam = "all";
  }
  toggleFavorite(id) {
    this.favoritedIds.update((ids) => ids.includes(id) ? ids.filter((i) => i !== id) : [...ids, id]);
  }
  isFavorited(id) {
    return this.favoritedIds().includes(id);
  }
  formatDateShort(dateStr) {
    return new Date(dateStr).toLocaleDateString("es-ES", { month: "short", day: "numeric" });
  }
  formatDateLong(dateStr) {
    return new Date(dateStr).toLocaleDateString("es-ES", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    });
  }
  statusLabel(status) {
    return status === "en_curso" ? "En Vivo" : status === "programado" ? "Programado" : "Finalizado";
  }
  statusClass(status) {
    const base = "px-2 py-1 rounded-full text-xs";
    if (status === "en_curso")
      return `${base} bg-red-100 text-red-700`;
    if (status === "programado")
      return `${base} bg-blue-100 text-blue-700`;
    return `${base} bg-gray-100 text-gray-700`;
  }
  static {
    this.\u0275fac = function AgendaComponent_Factory(t) {
      return new (t || _AgendaComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AgendaComponent, selectors: [["app-agenda"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 49, vars: 12, consts: [[1, "space-y-6"], [1, "flex", "flex-col", "sm:flex-row", "justify-between", "items-start", "sm:items-center", "gap-4"], [1, "text-3xl", "mb-2", "text-gray-900"], [1, "text-gray-600"], [1, "flex", "gap-2"], [3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2"], ["x", "3", "y", "4", "width", "18", "height", "18", "rx", "2", "ry", "2"], ["x1", "16", "y1", "2", "x2", "16", "y2", "6"], ["x1", "8", "y1", "2", "x2", "8", "y2", "6"], ["x1", "3", "y1", "10", "x2", "21", "y2", "10"], ["x1", "8", "y1", "6", "x2", "21", "y2", "6"], ["x1", "8", "y1", "12", "x2", "21", "y2", "12"], ["x1", "8", "y1", "18", "x2", "21", "y2", "18"], ["x1", "3", "y1", "6", "x2", "3.01", "y2", "6"], ["x1", "3", "y1", "12", "x2", "3.01", "y2", "12"], ["x1", "3", "y1", "18", "x2", "3.01", "y2", "18"], [1, "bg-white", "rounded-xl", "shadow-md", "border", "border-gray-100", "p-6"], [1, "flex", "items-center", "gap-2", "mb-4"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "20", "fill", "none", "viewBox", "0 0 24 24", "stroke", "#6b7280", "stroke-width", "2"], ["points", "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"], [1, "text-lg", "text-gray-800"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "gap-4"], [1, "block", "text-sm", "mb-2", "text-gray-700"], [1, "w-full", "px-4", "py-2", "border-2", "border-gray-200", "rounded-lg", "outline-none", "focus:border-[#00B140]", "transition-colors", 3, "ngModelChange", "ngModel"], ["value", "all"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "mt-4", 4, "ngIf"], ["class", "bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl shadow-md border border-green-200 p-6", 4, "ngIf"], ["class", "space-y-6", 4, "ngIf"], ["class", "bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden", 4, "ngIf"], [3, "value"], [1, "mt-4"], [1, "text-gray-600", "hover:text-gray-900", "text-sm", "px-3", "py-1.5", "hover:bg-gray-100", "rounded-lg", "transition-colors", 3, "click"], [1, "bg-gradient-to-r", "from-green-50", "to-emerald-50", "rounded-xl", "shadow-md", "border", "border-green-200", "p-6"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "20", "fill", "#00B140", "viewBox", "0 0 24 24", "stroke", "#00B140", "stroke-width", "2"], ["d", "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"], [1, "grid", "gap-3"], ["class", "p-4 bg-white rounded-lg", 4, "ngFor", "ngForOf"], [1, "p-4", "bg-white", "rounded-lg"], [1, "flex", "flex-wrap", "items-center", "justify-between", "gap-4"], [1, "flex", "items-center", "gap-2"], [1, "text-2xl"], [1, "text-sm", "text-gray-800"], [1, "text-gray-400", "text-sm", "mx-1"], [1, "text-right", "text-sm", "text-gray-600"], [1, "text-[#00B140]"], [4, "ngFor", "ngForOf"], ["class", "text-center py-16 text-gray-500", 4, "ngIf"], [1, "flex", "items-center", "gap-3", "mb-4"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "fill", "none", "viewBox", "0 0 24 24", "stroke", "#00B140", "stroke-width", "2"], [1, "text-xl", "text-gray-800", "capitalize"], [1, "px-3", "py-1", "bg-blue-100", "text-blue-700", "rounded-full", "text-sm"], [1, "grid", "gap-4"], ["class", "bg-white rounded-xl shadow-md border border-gray-100 p-5 hover:shadow-xl hover:scale-[1.01] transition-all duration-300", 4, "ngFor", "ngForOf"], [1, "bg-white", "rounded-xl", "shadow-md", "border", "border-gray-100", "p-5", "hover:shadow-xl", "hover:scale-[1.01]", "transition-all", "duration-300"], [1, "flex", "flex-col", "lg:flex-row", "justify-between", "gap-4"], [1, "flex-1"], [1, "flex", "items-center", "gap-2", "mb-3", "flex-wrap"], ["class", "flex items-center gap-1 px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm", 4, "ngIf"], ["class", "px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm", 4, "ngIf"], [1, "flex", "items-center", "justify-between", "max-w-xl"], [1, "text-3xl"], [1, "text-gray-800"], [1, "text-center", "px-4"], ["class", "text-2xl text-gray-800", 4, "ngIf"], ["class", "text-xl text-gray-400", 4, "ngIf"], [1, "flex", "items-center", "gap-1", "mt-3", "text-sm", "text-gray-500"], ["xmlns", "http://www.w3.org/2000/svg", "width", "14", "height", "14", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15 11a3 3 0 11-6 0 3 3 0 016 0z"], [1, "flex", "items-center", "gap-2", "flex-shrink-0"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2"], [1, "px-3", "py-2", "bg-[#00B140]", "text-white", "rounded-lg", "text-sm", "hover:bg-[#009633]", "transition-colors"], [1, "flex", "items-center", "gap-1", "px-3", "py-1", "bg-red-100", "text-red-700", "rounded-full", "text-sm"], [1, "w-2", "h-2", "bg-red-500", "rounded-full", "animate-pulse"], [1, "px-3", "py-1", "bg-gray-100", "text-gray-700", "rounded-full", "text-sm"], [1, "text-2xl", "text-gray-800"], [1, "text-xl", "text-gray-400"], [1, "text-center", "py-16", "text-gray-500"], [1, "text-5xl", "mb-4"], [1, "bg-white", "rounded-xl", "shadow-md", "border", "border-gray-100", "overflow-hidden"], [1, "overflow-x-auto"], [1, "w-full"], [1, "bg-gray-50", "border-b", "border-gray-200"], [1, "px-6", "py-3", "text-left", "text-sm", "text-gray-600"], [1, "divide-y", "divide-gray-200"], ["class", "hover:bg-gray-50 transition-colors", 4, "ngFor", "ngForOf"], ["class", "text-center py-12 text-gray-500", 4, "ngIf"], [1, "hover:bg-gray-50", "transition-colors"], [1, "px-6", "py-4", "text-sm", "text-gray-700"], [1, "px-6", "py-4"], [1, "text-xl"], [1, "text-gray-400", "text-sm"], [1, "px-6", "py-4", "text-sm", "text-gray-600"], [1, "px-2", "py-1", "bg-gray-100", "text-gray-700", "rounded-full", "text-xs"], [1, "text-center", "py-12", "text-gray-500"], [1, "text-4xl", "mb-3"]], template: function AgendaComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4, "Mi Agenda \u{1F4C5}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6, "Planifica tu experiencia del Mundial 2026");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 4)(8, "button", 5);
        \u0275\u0275listener("click", function AgendaComponent_Template_button_click_8_listener() {
          return ctx.viewMode.set("calendar");
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(9, "svg", 6);
        \u0275\u0275element(10, "rect", 7)(11, "line", 8)(12, "line", 9)(13, "line", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275text(14, " Calendario ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(15, "button", 5);
        \u0275\u0275listener("click", function AgendaComponent_Template_button_click_15_listener() {
          return ctx.viewMode.set("list");
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(16, "svg", 6);
        \u0275\u0275element(17, "line", 11)(18, "line", 12)(19, "line", 13)(20, "line", 14)(21, "line", 15)(22, "line", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275text(23, " Lista ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(24, "div", 17)(25, "div", 18);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(26, "svg", 19);
        \u0275\u0275element(27, "polygon", 20);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(28, "h3", 21);
        \u0275\u0275text(29, "Filtros");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(30, "div", 22)(31, "div")(32, "label", 23);
        \u0275\u0275text(33, "Ciudad");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "select", 24);
        \u0275\u0275twoWayListener("ngModelChange", function AgendaComponent_Template_select_ngModelChange_34_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selectedCity, $event) || (ctx.selectedCity = $event);
          return $event;
        });
        \u0275\u0275elementStart(35, "option", 25);
        \u0275\u0275text(36, "Todas las ciudades");
        \u0275\u0275elementEnd();
        \u0275\u0275template(37, AgendaComponent_option_37_Template, 2, 2, "option", 26);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(38, "div")(39, "label", 23);
        \u0275\u0275text(40, "Equipo");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "select", 24);
        \u0275\u0275twoWayListener("ngModelChange", function AgendaComponent_Template_select_ngModelChange_41_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selectedTeam, $event) || (ctx.selectedTeam = $event);
          return $event;
        });
        \u0275\u0275elementStart(42, "option", 25);
        \u0275\u0275text(43, "Todos los equipos");
        \u0275\u0275elementEnd();
        \u0275\u0275template(44, AgendaComponent_option_44_Template, 2, 3, "option", 26);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(45, AgendaComponent_div_45_Template, 3, 0, "div", 27);
        \u0275\u0275elementEnd();
        \u0275\u0275template(46, AgendaComponent_div_46_Template, 8, 1, "div", 28)(47, AgendaComponent_div_47_Template, 3, 2, "div", 29)(48, AgendaComponent_div_48_Template, 20, 2, "div", 30);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275classMap(ctx.viewMode() === "calendar" ? "flex items-center gap-2 px-4 py-2 bg-[#00B140] text-white rounded-lg text-sm transition-colors" : "flex items-center gap-2 px-4 py-2 border-2 border-[#00B140] text-[#00B140] rounded-lg text-sm hover:bg-[#00B140] hover:text-white transition-colors");
        \u0275\u0275advance(7);
        \u0275\u0275classMap(ctx.viewMode() === "list" ? "flex items-center gap-2 px-4 py-2 bg-[#00B140] text-white rounded-lg text-sm transition-colors" : "flex items-center gap-2 px-4 py-2 border-2 border-[#00B140] text-[#00B140] rounded-lg text-sm hover:bg-[#00B140] hover:text-white transition-colors");
        \u0275\u0275advance(19);
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedCity);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", ctx.cities);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedTeam);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", ctx.teams());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.selectedCity !== "all" || ctx.selectedTeam !== "all");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.favoriteMatches.length > 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.viewMode() === "calendar");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.viewMode() === "list");
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AgendaComponent, { className: "AgendaComponent", filePath: "src\\app\\pages\\agenda\\agenda.component.ts", lineNumber: 262 });
})();
export {
  AgendaComponent
};
//# sourceMappingURL=chunk-NR2RGICV.js.map
