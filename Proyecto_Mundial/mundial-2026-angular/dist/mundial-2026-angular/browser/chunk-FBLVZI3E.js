import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-PXUBOXYT.js";
import {
  CommonModule,
  HttpClient,
  NgForOf,
  NgIf,
  __spreadProps,
  __spreadValues,
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
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-G2QLUSIR.js";

// src/app/services/album.service.ts
var API = "http://localhost:3000/api";
var AlbumService = class _AlbumService {
  constructor(http) {
    this.http = http;
  }
  getAlbum() {
    return this.http.get(`${API}/album`).pipe(map((res) => res.data));
  }
  getPaquetes() {
    return this.http.get(`${API}/album/paquetes`).pipe(map((res) => res.data));
  }
  abrirPaquete(id) {
    return this.http.post(`${API}/album/paquetes/${id}/abrir`, {}).pipe(map((res) => res.data));
  }
  getIntercambios() {
    return this.http.get(`${API}/album/intercambios`).pipe(map((res) => res.data));
  }
  createIntercambio(data) {
    return this.http.post(`${API}/album/intercambios`, data);
  }
  updateIntercambio(id, estado) {
    return this.http.patch(`${API}/album/intercambios/${id}`, { estado });
  }
  static {
    this.\u0275fac = function AlbumService_Factory(t) {
      return new (t || _AlbumService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AlbumService, factory: _AlbumService.\u0275fac, providedIn: "root" });
  }
};

// src/app/pages/album/album.component.ts
var _c0 = () => [2, 3, 4, 5];
function AlbumComponent_button_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 29);
    \u0275\u0275listener("click", function AlbumComponent_button_42_Template_button_click_0_listener() {
      const tab_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.activeTab.set(tab_r2.id));
    });
    \u0275\u0275element(1, "span", 30);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r2.activeTab() === tab_r2.id ? "flex items-center gap-2 px-4 py-3 border-b-2 border-[#00B140] text-[#00B140] text-sm whitespace-nowrap transition-colors" : "flex items-center gap-2 px-4 py-3 border-b-2 border-transparent text-gray-600 hover:text-gray-900 text-sm whitespace-nowrap transition-colors");
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", tab_r2.icon, \u0275\u0275sanitizeHtml);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tab_r2.label, " ");
  }
}
function AlbumComponent_div_43_div_5_div_1_img_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 46);
  }
  if (rf & 2) {
    const slot_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("src", slot_r4.image, \u0275\u0275sanitizeUrl)("alt", slot_r4.playerName);
  }
}
function AlbumComponent_div_43_div_5_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const slot_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(slot_r4.image);
  }
}
function AlbumComponent_div_43_div_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275template(1, AlbumComponent_div_43_div_5_div_1_img_1_Template, 1, 2, "img", 43)(2, AlbumComponent_div_43_div_5_div_1_div_2_Template, 2, 1, "div", 44);
    \u0275\u0275elementStart(3, "div", 45);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const slot_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", slot_r4.image && slot_r4.image.startsWith("http"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !slot_r4.image || !slot_r4.image.startsWith("http"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate("#" + slot_r4.number);
  }
}
function AlbumComponent_div_43_div_5_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r5 = \u0275\u0275nextContext().index;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate("#" + (i_r5 + 1));
  }
}
function AlbumComponent_div_43_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, AlbumComponent_div_43_div_5_div_1_Template, 5, 3, "div", 40)(2, AlbumComponent_div_43_div_5_div_2_Template, 2, 1, "div", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const slot_r4 = ctx.$implicit;
    \u0275\u0275classMap(slot_r4 ? "aspect-[3/4] rounded-lg border-2 border-[#00B140] bg-white shadow-lg hover:scale-105 cursor-pointer transition-all flex items-center justify-center" : "aspect-[3/4] rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 flex items-center justify-center");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", slot_r4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !slot_r4);
  }
}
function AlbumComponent_div_43_button_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r6, " ");
  }
}
function AlbumComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 31)(2, "h3", 32);
    \u0275\u0275text(3, "P\xE1gina 1 \u2014 Argentina \u{1F1E6}\u{1F1F7}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 33);
    \u0275\u0275template(5, AlbumComponent_div_43_div_5_Template, 3, 4, "div", 34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 35)(7, "button", 36);
    \u0275\u0275text(8, "1");
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, AlbumComponent_div_43_button_9_Template, 2, 1, "button", 37);
    \u0275\u0275elementStart(10, "button", 38);
    \u0275\u0275text(11, "...");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 39);
    \u0275\u0275text(13, "33");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r2.albumSlots());
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(2, _c0));
  }
}
function AlbumComponent_div_44_div_1_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 58);
  }
  if (rf & 2) {
    const sticker_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", sticker_r7.image, \u0275\u0275sanitizeUrl)("alt", sticker_r7.playerName);
  }
}
function AlbumComponent_div_44_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const sticker_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(sticker_r7.image);
  }
}
function AlbumComponent_div_44_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51)(1, "div", 52);
    \u0275\u0275template(2, AlbumComponent_div_44_div_1_img_2_Template, 1, 2, "img", 53)(3, AlbumComponent_div_44_div_1_div_3_Template, 2, 1, "div", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 55)(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 56);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 57);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 20);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const sticker_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.rarityBg(sticker_r7.rarity));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", sticker_r7.image && sticker_r7.image.startsWith("http"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !sticker_r7.image || !sticker_r7.image.startsWith("http"));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r2.rarityBadgeClass(sticker_r7.rarity));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.rarityLabel(sticker_r7.rarity), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate("#" + sticker_r7.number);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(sticker_r7.playerName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(sticker_r7.team);
  }
}
function AlbumComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275template(1, AlbumComponent_div_44_div_1_Template, 13, 10, "div", 50);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.myStickers());
  }
}
function AlbumComponent_div_45_div_4_div_1_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 58);
  }
  if (rf & 2) {
    const sticker_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", sticker_r8.image, \u0275\u0275sanitizeUrl)("alt", sticker_r8.playerName);
  }
}
function AlbumComponent_div_45_div_4_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const sticker_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(sticker_r8.image);
  }
}
function AlbumComponent_div_45_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63)(1, "div", 64);
    \u0275\u0275template(2, AlbumComponent_div_45_div_4_div_1_img_2_Template, 1, 2, "img", 53)(3, AlbumComponent_div_45_div_4_div_1_div_3_Template, 2, 1, "div", 54);
    \u0275\u0275elementStart(4, "span", 65);
    \u0275\u0275text(5, "x2");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 66);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 67);
    \u0275\u0275text(9, " Intercambiar ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const sticker_r8 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", sticker_r8.image && sticker_r8.image.startsWith("http"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !sticker_r8.image || !sticker_r8.image.startsWith("http"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", "#" + sticker_r8.number, " \u2014 ", sticker_r8.playerName, " ");
  }
}
function AlbumComponent_div_45_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275template(1, AlbumComponent_div_45_div_4_div_1_Template, 10, 4, "div", 62);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.duplicates());
  }
}
function AlbumComponent_div_45_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 69);
    \u0275\u0275element(2, "path", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "p", 71);
    \u0275\u0275text(4, "No tienes l\xE1minas repetidas");
    \u0275\u0275elementEnd()();
  }
}
function AlbumComponent_div_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60)(1, "div", 31)(2, "h3", 32);
    \u0275\u0275text(3, "L\xE1minas Repetidas");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, AlbumComponent_div_45_div_4_Template, 2, 1, "div", 26)(5, AlbumComponent_div_45_div_5_Template, 5, 0, "div", 61);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r2.duplicates().length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.duplicates().length === 0);
  }
}
function AlbumComponent_div_46_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 80)(1, "div", 81)(2, "div", 82)(3, "div", 83);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "h4", 84);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 16);
    \u0275\u0275text(9);
    \u0275\u0275elementStart(10, "span", 85);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "p", 16);
    \u0275\u0275text(13);
    \u0275\u0275elementStart(14, "span", 85);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(16, "div", 86)(17, "button", 87);
    \u0275\u0275listener("click", function AlbumComponent_div_46_div_5_Template_button_click_17_listener() {
      const ex_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.rejectExchange(ex_r11.id));
    });
    \u0275\u0275text(18, " Rechazar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 88);
    \u0275\u0275listener("click", function AlbumComponent_div_46_div_5_Template_button_click_19_listener() {
      const ex_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.acceptExchange(ex_r11.id));
    });
    \u0275\u0275text(20, " Aceptar ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ex_r11 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ex_r11.avatar);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ex_r11.user);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" Ofrece: ", "#" + ex_r11.offers.number, " ", ex_r11.offers.playerName, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ex_r11.offers.image);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" Busca: ", "#" + ex_r11.wants.number, " ", ex_r11.wants.playerName, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ex_r11.wants.image);
  }
}
function AlbumComponent_div_46_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 89)(1, "p");
    \u0275\u0275text(2, "No hay intercambios disponibles en este momento");
    \u0275\u0275elementEnd()();
  }
}
function AlbumComponent_div_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 60)(1, "div", 31)(2, "h3", 32);
    \u0275\u0275text(3, "Intercambios Disponibles");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 60);
    \u0275\u0275template(5, AlbumComponent_div_46_div_5_Template, 21, 8, "div", 72)(6, AlbumComponent_div_46_div_6_Template, 3, 0, "div", 73);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 31)(8, "h3", 32);
    \u0275\u0275text(9, "Buscar Intercambios");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 74)(11, "input", 75);
    \u0275\u0275twoWayListener("ngModelChange", function AlbumComponent_div_46_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.searchQuery, $event) || (ctx_r2.searchQuery = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 76);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(13, "svg", 77);
    \u0275\u0275element(14, "circle", 78)(15, "line", 79);
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, " Buscar intercambios ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r2.exchanges());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.exchanges().length === 0);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.searchQuery);
  }
}
function AlbumComponent_div_47_div_10_img_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 102);
  }
  if (rf & 2) {
    const sticker_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", sticker_r13.image, \u0275\u0275sanitizeUrl)("alt", sticker_r13.playerName);
  }
}
function AlbumComponent_div_47_div_10_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 103);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const sticker_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(sticker_r13.image);
  }
}
function AlbumComponent_div_47_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 98);
    \u0275\u0275template(1, AlbumComponent_div_47_div_10_img_1_Template, 1, 2, "img", 99)(2, AlbumComponent_div_47_div_10_div_2_Template, 2, 1, "div", 100);
    \u0275\u0275elementStart(3, "div", 101);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const sticker_r13 = ctx.$implicit;
    const i_r14 = ctx.index;
    \u0275\u0275styleProp("animation-delay", i_r14 * 0.1 + "s");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", sticker_r13.image && sticker_r13.image.startsWith("http"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !sticker_r13.image || !sticker_r13.image.startsWith("http"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate("#" + sticker_r13.number);
  }
}
function AlbumComponent_div_47_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const sticker_r15 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r2.rarityBadgeClass(sticker_r15.rarity));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.rarityLabel(sticker_r15.rarity), " ");
  }
}
function AlbumComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 90);
    \u0275\u0275listener("click", function AlbumComponent_div_47_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.packModal.set(false));
    });
    \u0275\u0275elementStart(1, "div", 91);
    \u0275\u0275listener("click", function AlbumComponent_div_47_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r12);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 92)(3, "div", 93);
    \u0275\u0275text(4, "\u2728");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2", 2);
    \u0275\u0275text(6, "\xA1Nuevo Paquete!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 3);
    \u0275\u0275text(8, "Has recibido 5 nuevas l\xE1minas");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 94);
    \u0275\u0275template(10, AlbumComponent_div_47_div_10_Template, 5, 5, "div", 95);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 96);
    \u0275\u0275template(12, AlbumComponent_div_47_span_12_Template, 2, 3, "span", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 97);
    \u0275\u0275listener("click", function AlbumComponent_div_47_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.packModal.set(false));
    });
    \u0275\u0275text(14, " \xA1Genial! \u{1F389} ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275property("ngForOf", ctx_r2.newStickers());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.newStickers());
  }
}
var AlbumComponent = class _AlbumComponent {
  constructor() {
    this.albumService = inject(AlbumService);
    this.activeTab = signal("album");
    this.packModal = signal(false);
    this.newStickers = signal([]);
    this.searchQuery = "";
    this.packsLeft = signal(0);
    this.stickers = signal([]);
    this.albumData = signal(null);
    this.exchanges = signal([]);
    this.totalStickers = 600;
    this.collected = signal(0);
    this.progress = signal(0);
    this.rareCount = signal(0);
    this.legendaryCount = signal(0);
    this.myStickers = signal([]);
    this.duplicates = signal([]);
    this.albumSlots = signal([]);
    this.tabs = [
      {
        id: "album",
        label: "Mi \xC1lbum",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>`
      },
      {
        id: "collection",
        label: "Colecci\xF3n",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`
      },
      {
        id: "duplicates",
        label: "Repetidas (" + this.duplicates.length + ")",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/></svg>`
      },
      {
        id: "exchange",
        label: "Intercambio",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 014-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 01-4 4H3"/></svg>`
      }
    ];
    this.loadData();
  }
  loadData() {
    this.albumService.getAlbum().subscribe((data) => {
      this.albumData.set(data);
      const laminas = (data?.laminas || []).map((l) => __spreadProps(__spreadValues({}, l), {
        image: l.imagen || l.image,
        playerName: l.nombre || l.playerName,
        number: l.numero || l.number,
        rarity: l.rareza || l.rarity,
        team: l.equipo_nombre || l.team || "Desconocido"
      }));
      this.stickers.set(laminas);
      this.myStickers.set(laminas);
      this.duplicates.set(laminas.filter((l) => l.repetida || l.cantidad > 1));
      this.collected.set(laminas.length);
      this.progress.set(laminas.length / this.totalStickers * 100);
      this.rareCount.set(laminas.filter((s) => s.rareza === "rara" || s.rarity === "rare").length);
      this.legendaryCount.set(laminas.filter((s) => s.rareza === "legendaria" || s.rarity === "legendary").length);
      this.albumSlots.set(Array.from({ length: 18 }, (_, i) => i < laminas.length ? laminas[i] : null));
    });
    this.albumService.getPaquetes().subscribe((packs) => {
      this.packsLeft.set((packs || []).filter((p) => p.estado === "disponible").length);
    });
    this.albumService.getIntercambios().subscribe((exc) => {
      this.exchanges.set(exc || []);
    });
  }
  openPack() {
    if (this.packsLeft() <= 0)
      return;
    this.albumService.getPaquetes().subscribe((packs) => {
      const avail = (packs || []).find((p) => p.estado === "disponible");
      if (avail) {
        this.albumService.abrirPaquete(avail.paquete_id || avail.id).subscribe((laminas) => {
          const mapped = (laminas || []).map((l) => __spreadProps(__spreadValues({}, l), {
            image: l.imagen || l.image,
            playerName: l.nombre || l.playerName,
            number: l.numero || l.number,
            rarity: l.rareza || l.rarity,
            team: l.equipo_nombre || l.team || "Desconocido"
          }));
          this.newStickers.set(mapped);
          this.packModal.set(true);
          this.loadData();
        });
      }
    });
  }
  acceptExchange(id) {
    this.exchanges.update((list) => list.filter((e) => e.id !== id));
  }
  rejectExchange(id) {
    this.exchanges.update((list) => list.filter((e) => e.id !== id));
  }
  rarityLabel(r) {
    return r === "legendary" || r === "legendaria" ? "\u2B50 Legendaria" : r === "rare" || r === "rara" ? "\u{1F48E} Rara" : "\u{1F3B4} Com\xFAn";
  }
  rarityBadgeClass(r) {
    const base = "inline-block px-2 py-0.5 rounded-full text-xs mt-2";
    if (r === "legendary" || r === "legendaria")
      return `${base} bg-yellow-100 text-yellow-700`;
    if (r === "rare" || r === "rara")
      return `${base} bg-blue-100 text-blue-700`;
    return `${base} bg-gray-100 text-gray-600`;
  }
  rarityBg(r) {
    if (r === "legendary" || r === "legendaria")
      return "from-yellow-50 to-amber-50";
    if (r === "rare" || r === "rara")
      return "from-blue-50 to-cyan-50";
    return "from-gray-50 to-slate-50";
  }
  static {
    this.\u0275fac = function AlbumComponent_Factory(t) {
      return new (t || _AlbumComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AlbumComponent, selectors: [["app-album"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 48, vars: 15, consts: [[1, "space-y-6"], [1, "flex", "flex-col", "sm:flex-row", "justify-between", "items-start", "sm:items-center", "gap-4"], [1, "text-3xl", "mb-2", "text-gray-900"], [1, "text-gray-600"], [1, "flex", "items-center", "gap-2", "px-4", "py-2.5", "bg-[#00B140]", "text-white", "rounded-lg", "hover:bg-[#009633]", "transition-colors", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "20", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"], [1, "bg-gradient-to-r", "from-purple-50", "to-indigo-50", "rounded-xl", "shadow-md", "border", "border-purple-100", "p-6"], [1, "flex", "items-start", "justify-between", "gap-6", "mb-4", "flex-wrap"], [1, "flex-1", "min-w-[200px]"], [1, "text-xl", "mb-2", "text-gray-800"], [1, "flex", "items-baseline", "gap-2", "mb-3"], [1, "text-4xl", "text-gray-900"], [1, "text-2xl", "text-gray-500"], [1, "w-full", "bg-gray-200", "rounded-full", "h-3", "mb-2"], [1, "bg-gradient-to-r", "from-[#00B140]", "to-[#003087]", "h-3", "rounded-full", "transition-all", "duration-500"], [1, "text-sm", "text-gray-600"], [1, "grid", "grid-cols-3", "gap-3", "text-center"], [1, "p-3", "bg-white", "rounded-lg", "shadow-sm"], [1, "text-2xl", "text-gray-900", "mb-1"], [1, "text-xs", "text-gray-500"], [1, "text-2xl", "text-yellow-600", "mb-1"], [1, "text-2xl", "text-purple-600", "mb-1"], [1, "flex", "gap-0", "border-b", "border-gray-200", "overflow-x-auto"], [3, "class", "click", 4, "ngFor", "ngForOf"], ["class", "space-y-6", 4, "ngIf"], ["class", "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4", 4, "ngIf"], ["class", "space-y-4", 4, "ngIf"], ["class", "fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 z-50", 3, "click", 4, "ngIf"], [3, "click"], [3, "innerHTML"], [1, "bg-white", "rounded-xl", "shadow-md", "border", "border-gray-100", "p-6"], [1, "text-xl", "mb-4", "text-gray-900"], [1, "grid", "grid-cols-3", "sm:grid-cols-4", "md:grid-cols-6", "gap-4"], [3, "class", 4, "ngFor", "ngForOf"], [1, "flex", "justify-center", "gap-2", "flex-wrap"], [1, "px-3", "py-1.5", "bg-[#00B140]", "text-white", "rounded-lg", "text-sm"], ["class", "px-3 py-1.5 border-2 border-[#00B140] text-[#00B140] rounded-lg text-sm hover:bg-[#00B140] hover:text-white transition-colors", 4, "ngFor", "ngForOf"], [1, "px-3", "py-1.5", "border-2", "border-gray-200", "text-gray-500", "rounded-lg", "text-sm", "cursor-default"], [1, "px-3", "py-1.5", "border-2", "border-[#00B140]", "text-[#00B140]", "rounded-lg", "text-sm", "hover:bg-[#00B140]", "hover:text-white", "transition-colors"], ["class", "text-center p-1 w-full h-full flex flex-col items-center justify-center", 4, "ngIf"], ["class", "text-gray-300 text-xs", 4, "ngIf"], [1, "text-center", "p-1", "w-full", "h-full", "flex", "flex-col", "items-center", "justify-center"], ["class", "w-12 h-8 object-contain mb-1 rounded", 3, "src", "alt", 4, "ngIf"], ["class", "text-3xl mb-1", 4, "ngIf"], [1, "text-xs", "text-gray-600"], [1, "w-12", "h-8", "object-contain", "mb-1", "rounded", 3, "src", "alt"], [1, "text-3xl", "mb-1"], [1, "text-gray-300", "text-xs"], [1, "grid", "grid-cols-2", "sm:grid-cols-3", "md:grid-cols-4", "gap-4"], ["class", "bg-white rounded-xl shadow-md border border-gray-100 p-4 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer", 4, "ngFor", "ngForOf"], [1, "bg-white", "rounded-xl", "shadow-md", "border", "border-gray-100", "p-4", "hover:shadow-xl", "hover:scale-[1.02]", "transition-all", "duration-300", "cursor-pointer"], [1, "aspect-[3/4]", "rounded-lg", "bg-gradient-to-br", "flex", "items-center", "justify-center", "mb-3", "overflow-hidden"], ["class", "w-full h-full object-cover", 3, "src", "alt", 4, "ngIf"], ["class", "text-6xl", 4, "ngIf"], [1, "text-center"], [1, "text-sm", "text-gray-700", "mt-2"], [1, "text-xs", "text-gray-800", "mt-0.5"], [1, "w-full", "h-full", "object-cover", 3, "src", "alt"], [1, "text-6xl"], [1, "space-y-4"], ["class", "text-center py-12", 4, "ngIf"], ["class", "bg-white rounded-xl border border-gray-100 p-4 shadow-sm", 4, "ngFor", "ngForOf"], [1, "bg-white", "rounded-xl", "border", "border-gray-100", "p-4", "shadow-sm"], [1, "aspect-[3/4]", "rounded-lg", "bg-gradient-to-br", "from-gray-50", "to-gray-100", "flex", "items-center", "justify-center", "mb-3", "relative", "overflow-hidden"], [1, "absolute", "top-2", "right-2", "px-1.5", "py-0.5", "bg-yellow-100", "text-yellow-700", "rounded-full", "text-xs", "z-10"], [1, "text-center", "text-sm", "mb-3", "text-gray-700"], [1, "w-full", "py-1.5", "bg-[#00B140]", "text-white", "rounded-lg", "text-sm", "hover:bg-[#009633]", "transition-colors"], [1, "text-center", "py-12"], ["xmlns", "http://www.w3.org/2000/svg", "width", "48", "height", "48", "fill", "none", "viewBox", "0 0 24 24", "stroke", "#d1d5db", "stroke-width", "1.5", 1, "mx-auto", "mb-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"], [1, "text-gray-500"], ["class", "p-5 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors", 4, "ngFor", "ngForOf"], ["class", "text-center py-8 text-gray-500", 4, "ngIf"], [1, "space-y-3"], ["type", "text", "placeholder", "Buscar por n\xFAmero o nombre de jugador...", 1, "w-full", "px-4", "py-3", "border-2", "border-gray-200", "rounded-lg", "outline-none", "focus:border-[#00B140]", "transition-colors", 3, "ngModelChange", "ngModel"], [1, "w-full", "flex", "items-center", "justify-center", "gap-2", "py-3", "bg-[#00B140]", "text-white", "rounded-lg", "hover:bg-[#009633]", "transition-colors"], ["xmlns", "http://www.w3.org/2000/svg", "width", "18", "height", "18", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2"], ["cx", "11", "cy", "11", "r", "8"], ["x1", "21", "y1", "21", "x2", "16.65", "y2", "16.65"], [1, "p-5", "bg-gray-50", "rounded-lg", "hover:bg-gray-100", "transition-colors"], [1, "flex", "items-start", "justify-between", "gap-4", "flex-wrap"], [1, "flex", "items-center", "gap-4"], [1, "text-3xl"], [1, "mb-1", "text-gray-800"], [1, "ml-1"], [1, "flex", "gap-2"], [1, "px-3", "py-2", "border-2", "border-gray-300", "text-gray-600", "rounded-lg", "text-sm", "hover:bg-gray-200", "transition-colors", 3, "click"], [1, "px-3", "py-2", "bg-[#00B140]", "text-white", "rounded-lg", "text-sm", "hover:bg-[#009633]", "transition-colors", 3, "click"], [1, "text-center", "py-8", "text-gray-500"], [1, "fixed", "inset-0", "bg-black", "bg-opacity-80", "flex", "items-center", "justify-center", "p-4", "z-50", 3, "click"], [1, "bg-white", "rounded-xl", "p-8", "max-w-2xl", "w-full", "shadow-2xl", 3, "click"], [1, "text-center", "mb-6"], [1, "text-5xl", "mb-4", "animate-bounce"], [1, "grid", "grid-cols-5", "gap-3", "mb-8"], ["class", "aspect-[3/4] rounded-lg bg-gradient-to-br from-purple-50 to-indigo-50 border-2 border-purple-200 flex flex-col items-center justify-center gap-2 shadow-xl animate-pulse relative overflow-hidden", 3, "animation-delay", 4, "ngFor", "ngForOf"], [1, "flex", "justify-center", "gap-4", "mb-6", "flex-wrap"], [1, "w-full", "py-3", "bg-[#00B140]", "text-white", "rounded-lg", "hover:bg-[#009633]", "transition-colors", "text-lg", 3, "click"], [1, "aspect-[3/4]", "rounded-lg", "bg-gradient-to-br", "from-purple-50", "to-indigo-50", "border-2", "border-purple-200", "flex", "flex-col", "items-center", "justify-center", "gap-2", "shadow-xl", "animate-pulse", "relative", "overflow-hidden"], ["class", "absolute inset-0 w-full h-full object-cover opacity-80", 3, "src", "alt", 4, "ngIf"], ["class", "text-5xl z-10", 4, "ngIf"], [1, "text-xs", "font-bold", "text-white", "bg-black", "bg-opacity-50", "px-2", "py-1", "rounded", "absolute", "bottom-2", "z-10"], [1, "absolute", "inset-0", "w-full", "h-full", "object-cover", "opacity-80", 3, "src", "alt"], [1, "text-5xl", "z-10"]], template: function AlbumComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4, "\xC1lbum Digital \u{1F4D4}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6, "Colecciona l\xE1minas del Mundial 2026");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "button", 4);
        \u0275\u0275listener("click", function AlbumComponent_Template_button_click_7_listener() {
          return ctx.openPack();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(8, "svg", 5);
        \u0275\u0275element(9, "path", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275text(10);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(11, "div", 7)(12, "div", 8)(13, "div", 9)(14, "h3", 10);
        \u0275\u0275text(15, "Progreso de Colecci\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 11)(17, "span", 12);
        \u0275\u0275text(18);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "span", 13);
        \u0275\u0275text(20);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 14);
        \u0275\u0275element(22, "div", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "p", 16);
        \u0275\u0275text(24);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "div", 17)(26, "div", 18)(27, "div", 19);
        \u0275\u0275text(28);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "div", 20);
        \u0275\u0275text(30, "Repetidas");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(31, "div", 18)(32, "div", 21);
        \u0275\u0275text(33);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "div", 20);
        \u0275\u0275text(35, "Raras");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(36, "div", 18)(37, "div", 22);
        \u0275\u0275text(38);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "div", 20);
        \u0275\u0275text(40, "Legendarias");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(41, "div", 23);
        \u0275\u0275template(42, AlbumComponent_button_42_Template, 3, 4, "button", 24);
        \u0275\u0275elementEnd();
        \u0275\u0275template(43, AlbumComponent_div_43_Template, 14, 3, "div", 25)(44, AlbumComponent_div_44_Template, 2, 1, "div", 26)(45, AlbumComponent_div_45_Template, 6, 2, "div", 27)(46, AlbumComponent_div_46_Template, 17, 3, "div", 27);
        \u0275\u0275elementEnd();
        \u0275\u0275template(47, AlbumComponent_div_47_Template, 15, 2, "div", 28);
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate1(" Abrir Paquete (", ctx.packsLeft(), " disponibles) ");
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(ctx.collected());
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("/ ", ctx.totalStickers, "");
        \u0275\u0275advance(2);
        \u0275\u0275styleProp("width", ctx.progress() + "%");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("", ctx.progress().toFixed(1), "% completado");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.duplicates().length);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.rareCount());
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.legendaryCount());
        \u0275\u0275advance(4);
        \u0275\u0275property("ngForOf", ctx.tabs);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeTab() === "album");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeTab() === "collection");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeTab() === "duplicates");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeTab() === "exchange");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.packModal());
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AlbumComponent, { className: "AlbumComponent", filePath: "src\\app\\pages\\album\\album.component.ts", lineNumber: 269 });
})();
export {
  AlbumComponent
};
//# sourceMappingURL=chunk-FBLVZI3E.js.map
