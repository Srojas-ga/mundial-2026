import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
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
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-G2QLUSIR.js";

// src/app/services/soporte.service.ts
var API = "http://localhost:3000/api";
var SoporteService = class _SoporteService {
  constructor(http) {
    this.http = http;
  }
  getAll() {
    return this.http.get(`${API}/soporte`).pipe(map((res) => res.data));
  }
  getById(id) {
    return this.http.get(`${API}/soporte/${id}`).pipe(map((res) => res.data));
  }
  create(data) {
    return this.http.post(`${API}/soporte`, data);
  }
  static {
    this.\u0275fac = function SoporteService_Factory(t) {
      return new (t || _SoporteService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SoporteService, factory: _SoporteService.\u0275fac, providedIn: "root" });
  }
};

// src/app/pages/support/support.component.ts
function SupportComponent_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function SupportComponent_button_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.activeTab.set("new"));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 22);
    \u0275\u0275element(2, "path", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Nuevo Caso ");
    \u0275\u0275elementEnd();
  }
}
function SupportComponent_button_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275listener("click", function SupportComponent_button_35_Template_button_click_0_listener() {
      const tab_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.activeTab.set(tab_r4.id));
    });
    \u0275\u0275element(1, "span", 25);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.activeTab() === tab_r4.id ? "flex items-center gap-2 px-4 py-3 border-b-2 border-[#00B140] text-[#00B140] transition-colors text-sm" : "flex items-center gap-2 px-4 py-3 border-b-2 border-transparent text-gray-600 hover:text-gray-900 transition-colors text-sm");
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", tab_r4.icon, \u0275\u0275sanitizeHtml);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tab_r4.label, " ");
  }
}
function SupportComponent_div_36_ng_container_1_div_1_div_22_div_4_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 54);
  }
}
function SupportComponent_div_36_ng_container_1_div_1_div_22_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "div", 48);
    \u0275\u0275element(2, "div", 49);
    \u0275\u0275template(3, SupportComponent_div_36_ng_container_1_div_1_div_22_div_4_div_3_Template, 1, 0, "div", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 51)(5, "p", 52);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 53);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const event_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    const caso_r6 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", i_r8 < caso_r6.timeline.length - 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(event_r7.action);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", event_r7.by, " \xB7 ", ctx_r1.formatDateTime(event_r7.date), "");
  }
}
function SupportComponent_div_36_ng_container_1_div_1_div_22_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 55);
    \u0275\u0275listener("click", function SupportComponent_div_36_ng_container_1_div_1_div_22_div_5_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(1, "input", 56);
    \u0275\u0275elementStart(2, "button", 57);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 58);
    \u0275\u0275element(4, "line", 59)(5, "polygon", 60);
    \u0275\u0275elementEnd()()();
  }
}
function SupportComponent_div_36_ng_container_1_div_1_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "h4", 43);
    \u0275\u0275text(2, "L\xEDnea de Tiempo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 44);
    \u0275\u0275template(4, SupportComponent_div_36_ng_container_1_div_1_div_22_div_4_Template, 9, 4, "div", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, SupportComponent_div_36_ng_container_1_div_1_div_22_div_5_Template, 6, 0, "div", 46);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const caso_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", caso_r6.timeline);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", caso_r6.status === "in-progress");
  }
}
function SupportComponent_div_36_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275listener("click", function SupportComponent_div_36_ng_container_1_div_1_Template_div_click_0_listener() {
      const caso_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleCase(caso_r6.id));
    });
    \u0275\u0275elementStart(1, "div", 30)(2, "div", 31)(3, "div", 32)(4, "div", 33);
    \u0275\u0275element(5, "span", 25);
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 34);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "h3", 35);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 36);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 37)(15, "div");
    \u0275\u0275text(16, "Creado:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 38);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(20, "svg", 39);
    \u0275\u0275element(21, "polyline", 40);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(22, SupportComponent_div_36_ng_container_1_div_1_div_22_Template, 6, 2, "div", 41);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const caso_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275property("innerHTML", ctx_r1.statusIcon(caso_r6.status), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.statusBadgeClass(caso_r6.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.statusLabel(caso_r6.status), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Caso #", caso_r6.id.toUpperCase(), "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(caso_r6.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(caso_r6.description);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatDateTime(caso_r6.createdAt));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.selectedCase() === caso_r6.id ? "rotate-180 transition-transform" : "transition-transform");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.selectedCase() === caso_r6.id);
  }
}
function SupportComponent_div_36_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SupportComponent_div_36_ng_container_1_div_1_Template, 23, 11, "div", 28);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.cases());
  }
}
function SupportComponent_div_36_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 61);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 62);
    \u0275\u0275element(2, "circle", 12)(3, "path", 63)(4, "line", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "h3", 65);
    \u0275\u0275text(6, "No tienes casos abiertos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 66);
    \u0275\u0275text(8, "Si tienes alg\xFAn problema, no dudes en contactarnos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 67);
    \u0275\u0275listener("click", function SupportComponent_div_36_ng_template_2_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.activeTab.set("new"));
    });
    \u0275\u0275text(10, " Crear Nuevo Caso ");
    \u0275\u0275elementEnd()();
  }
}
function SupportComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275template(1, SupportComponent_div_36_ng_container_1_Template, 2, 1, "ng-container", 27)(2, SupportComponent_div_36_ng_template_2_Template, 11, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const noCases_r11 = \u0275\u0275reference(3);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.cases().length > 0)("ngIfElse", noCases_r11);
  }
}
function SupportComponent_div_37_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 84);
    \u0275\u0275text(1, " \u2713 Caso enviado correctamente. Te contactaremos pronto. ");
    \u0275\u0275elementEnd();
  }
}
function SupportComponent_div_37_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 85);
    \u0275\u0275text(1, " \u26A0\uFE0F Por favor completa todos los campos obligatorios. ");
    \u0275\u0275elementEnd();
  }
}
function SupportComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 68)(1, "h2", 69);
    \u0275\u0275text(2, "Crear Nuevo Caso de Soporte");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 1)(4, "div")(5, "label", 70);
    \u0275\u0275text(6, "Categor\xEDa *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "select", 71);
    \u0275\u0275twoWayListener("ngModelChange", function SupportComponent_div_37_Template_select_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newCase.category, $event) || (ctx_r1.newCase.category = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(8, "option", 72);
    \u0275\u0275text(9, "Selecciona una categor\xEDa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "option");
    \u0275\u0275text(11, "Problema con entradas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "option");
    \u0275\u0275text(13, "No recib\xED confirmaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "option");
    \u0275\u0275text(15, "Error en la aplicaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "option");
    \u0275\u0275text(17, "Problema con transferencia");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "option");
    \u0275\u0275text(19, "Pregunta general");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "option");
    \u0275\u0275text(21, "Otro");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div")(23, "label", 70);
    \u0275\u0275text(24, "Asunto *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "input", 73);
    \u0275\u0275twoWayListener("ngModelChange", function SupportComponent_div_37_Template_input_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newCase.asunto, $event) || (ctx_r1.newCase.asunto = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div")(27, "label", 70);
    \u0275\u0275text(28, "Descripci\xF3n *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "textarea", 74);
    \u0275\u0275twoWayListener("ngModelChange", function SupportComponent_div_37_Template_textarea_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newCase.descripcion, $event) || (ctx_r1.newCase.descripcion = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275text(30, "            ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div")(32, "label", 70);
    \u0275\u0275text(33, "Adjuntar archivos (opcional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 75);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(35, "svg", 76);
    \u0275\u0275element(36, "path", 77);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(37, "p", 4);
    \u0275\u0275text(38, "Haz clic o arrastra archivos aqu\xED");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "p", 78);
    \u0275\u0275text(40, "PNG, JPG, PDF (max 5MB)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(41, SupportComponent_div_37_div_41_Template, 2, 0, "div", 79)(42, SupportComponent_div_37_div_42_Template, 2, 0, "div", 80);
    \u0275\u0275elementStart(43, "div", 81)(44, "button", 82);
    \u0275\u0275listener("click", function SupportComponent_div_37_Template_button_click_44_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.activeTab.set("cases"));
    });
    \u0275\u0275text(45, " Cancelar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "button", 83);
    \u0275\u0275listener("click", function SupportComponent_div_37_Template_button_click_46_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submitCase());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(47, "svg", 22);
    \u0275\u0275element(48, "line", 59)(49, "polygon", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275text(50, " Enviar Caso ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newCase.category);
    \u0275\u0275advance(18);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newCase.asunto);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newCase.descripcion);
    \u0275\u0275advance(12);
    \u0275\u0275property("ngIf", ctx_r1.caseSent());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.caseError());
  }
}
function SupportComponent_div_38_div_5_p_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 98);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r15 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r15.answer, " ");
  }
}
function SupportComponent_div_38_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275listener("click", function SupportComponent_div_38_div_5_Template_div_click_0_listener() {
      const item_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleFaq(item_r15.question));
    });
    \u0275\u0275elementStart(1, "div", 91)(2, "div", 92)(3, "div", 93);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 94);
    \u0275\u0275element(5, "circle", 12)(6, "path", 63)(7, "line", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "h3", 95);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 96);
    \u0275\u0275element(11, "polyline", 40);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, SupportComponent_div_38_div_5_p_12_Template, 2, 1, "p", 97);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r15 = ctx.$implicit;
    const last_r16 = ctx.last;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap("cursor-pointer " + (!last_r16 ? "border-b border-gray-200" : ""));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(item_r15.question);
    \u0275\u0275advance();
    \u0275\u0275classProp("rotate-180", ctx_r1.openFaq() === item_r15.question);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.openFaq() === item_r15.question);
  }
}
function SupportComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 86)(1, "div", 7)(2, "h2", 69);
    \u0275\u0275text(3, "Preguntas Frecuentes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 87);
    \u0275\u0275template(5, SupportComponent_div_38_div_5_Template, 13, 6, "div", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 88)(7, "h3", 89);
    \u0275\u0275text(8, "\xBFNo encontraste lo que buscabas?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 90);
    \u0275\u0275text(10, "Nuestro equipo de soporte est\xE1 listo para ayudarte");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 67);
    \u0275\u0275listener("click", function SupportComponent_div_38_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.activeTab.set("new"));
    });
    \u0275\u0275text(12, " Contactar Soporte ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r1.faqItems);
  }
}
var SupportComponent = class _SupportComponent {
  constructor() {
    this.soporteService = inject(SoporteService);
    this.activeTab = signal("cases");
    this.selectedCase = signal(null);
    this.openFaq = signal(null);
    this.caseSent = signal(false);
    this.caseError = signal(false);
    this.cases = signal([]);
    this.newCase = { category: "", asunto: "", descripcion: "" };
    this.tabs = [
      {
        id: "cases",
        label: "Mis Casos",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path stroke-linecap="round" stroke-linejoin="round" d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`
      },
      {
        id: "new",
        label: "Nuevo Caso",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>`
      },
      {
        id: "faq",
        label: "Preguntas Frecuentes",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path stroke-linecap="round" stroke-linejoin="round" d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`
      }
    ];
    this.faqItems = [
      {
        question: "\xBFC\xF3mo puedo cambiar mi contrase\xF1a?",
        answer: "Ve a Configuraci\xF3n > Seguridad > Cambiar contrase\xF1a. Necesitar\xE1s tu contrase\xF1a actual para confirmar el cambio."
      },
      {
        question: "\xBFPuedo transferir una entrada a otra persona?",
        answer: 'S\xED, puedes transferir entradas pagadas a trav\xE9s de la secci\xF3n "Mis Entradas". El proceso es irreversible.'
      },
      {
        question: "\xBFC\xF3mo funcionan las pollas?",
        answer: "Las pollas son grupos donde puedes hacer predicciones de partidos. Ganas puntos por acertar el resultado. El que m\xE1s puntos acumule gana."
      },
      {
        question: "\xBFQu\xE9 hago si no recibo mis notificaciones?",
        answer: "Verifica que las notificaciones est\xE9n habilitadas en tu perfil y que tu navegador permita notificaciones de esta aplicaci\xF3n."
      },
      {
        question: "\xBFC\xF3mo agrego equipos favoritos?",
        answer: "Ve a Configuraci\xF3n > Preferencias y selecciona los equipos que quieres seguir. Recibir\xE1s notificaciones prioritarias de sus partidos."
      },
      {
        question: "\xBFPuedo usar la app en varios dispositivos?",
        answer: "S\xED, tu cuenta funciona en todos los dispositivos. Inicia sesi\xF3n con tu email y contrase\xF1a desde cualquier dispositivo."
      }
    ];
    this.loadCases();
  }
  loadCases() {
    this.soporteService.getAll().subscribe((data) => {
      const mapped = (data || []).map((c) => __spreadProps(__spreadValues({}, c), {
        id: c.soporte_id || c.id,
        status: c.estado || c.status,
        title: c.titulo || c.title,
        description: c.descripcion || c.description,
        createdAt: c.fecha_creacion || c.createdAt,
        timeline: c.historial || c.timeline || []
      }));
      this.cases.set(mapped);
    });
  }
  get openCases() {
    return this.cases().filter((c) => c.status === "open" || c.status === "in-progress" || c.estado === "abierto" || c.estado === "en_proceso");
  }
  get resolvedCases() {
    return this.cases().filter((c) => c.status === "resolved" || c.status === "closed" || c.estado === "resuelto");
  }
  toggleCase(id) {
    this.selectedCase.update((v) => v === id ? null : id);
  }
  toggleFaq(q) {
    this.openFaq.update((v) => v === q ? null : q);
  }
  submitCase() {
    this.caseError.set(false);
    this.caseSent.set(false);
    if (!this.newCase.category || !this.newCase.asunto || !this.newCase.descripcion) {
      this.caseError.set(true);
      return;
    }
    this.soporteService.create({
      titulo: this.newCase.asunto,
      descripcion: this.newCase.descripcion,
      categoria: this.newCase.category
    }).subscribe({
      next: () => {
        this.caseSent.set(true);
        this.newCase = { category: "", asunto: "", descripcion: "" };
        this.loadCases();
        setTimeout(() => {
          this.caseSent.set(false);
          this.activeTab.set("cases");
        }, 2500);
      },
      error: () => this.caseError.set(true)
    });
  }
  formatDateTime(dateStr) {
    return new Date(dateStr).toLocaleDateString("es-ES", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  }
  statusLabel(status) {
    return status === "open" ? "Abierto" : status === "in-progress" ? "En Proceso" : status === "resolved" ? "Resuelto" : "Cerrado";
  }
  statusBadgeClass(status) {
    const base = "px-2 py-1 rounded-full text-xs";
    if (status === "open")
      return `${base} bg-yellow-100 text-yellow-700`;
    if (status === "in-progress")
      return `${base} bg-blue-100 text-blue-700`;
    if (status === "resolved")
      return `${base} bg-green-100 text-green-700`;
    return `${base} bg-gray-100 text-gray-700`;
  }
  statusIcon(status) {
    if (status === "open")
      return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#d97706" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`;
    if (status === "in-progress")
      return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#2563eb" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`;
    return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#16a34a" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`;
  }
  static {
    this.\u0275fac = function SupportComponent_Factory(t) {
      return new (t || _SupportComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SupportComponent, selectors: [["app-support"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 39, vars: 7, consts: [["noCases", ""], [1, "space-y-6"], [1, "flex", "flex-col", "sm:flex-row", "justify-between", "items-start", "sm:items-center", "gap-4"], [1, "text-3xl", "mb-2", "text-gray-900"], [1, "text-gray-600"], ["class", "flex items-center gap-2 px-4 py-2.5 bg-[#00B140] text-white rounded-lg hover:bg-[#009633] transition-colors", 3, "click", 4, "ngIf"], [1, "grid", "grid-cols-1", "sm:grid-cols-3", "gap-4"], [1, "bg-white", "rounded-xl", "shadow-md", "border", "border-gray-100", "p-6"], [1, "flex", "items-center", "justify-between"], [1, "text-sm", "text-gray-600", "mb-1"], [1, "text-3xl", "text-gray-900"], ["xmlns", "http://www.w3.org/2000/svg", "width", "32", "height", "32", "fill", "none", "viewBox", "0 0 24 24", "stroke", "#2563eb", "stroke-width", "2"], ["cx", "12", "cy", "12", "r", "10"], ["points", "12 6 12 12 16 14"], ["xmlns", "http://www.w3.org/2000/svg", "width", "32", "height", "32", "fill", "none", "viewBox", "0 0 24 24", "stroke", "#16a34a", "stroke-width", "2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "flex", "gap-0", "border-b", "border-gray-200"], [3, "class", "click", 4, "ngFor", "ngForOf"], ["class", "space-y-4", 4, "ngIf"], ["class", "bg-white rounded-xl shadow-md border border-gray-100 p-8 max-w-2xl mx-auto", 4, "ngIf"], ["class", "max-w-3xl mx-auto space-y-4", 4, "ngIf"], [1, "flex", "items-center", "gap-2", "px-4", "py-2.5", "bg-[#00B140]", "text-white", "rounded-lg", "hover:bg-[#009633]", "transition-colors", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "18", "height", "18", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"], [3, "click"], [3, "innerHTML"], [1, "space-y-4"], [4, "ngIf", "ngIfElse"], ["class", "bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer", 3, "click", 4, "ngFor", "ngForOf"], [1, "bg-white", "rounded-xl", "shadow-md", "border", "border-gray-100", "overflow-hidden", "hover:shadow-lg", "transition-all", "duration-300", "cursor-pointer", 3, "click"], [1, "p-6"], [1, "flex", "items-start", "justify-between", "gap-4", "mb-3"], [1, "flex-1"], [1, "flex", "items-center", "gap-2", "mb-2", "flex-wrap"], [1, "text-sm", "text-gray-500"], [1, "text-lg", "mb-1", "text-gray-800"], [1, "text-gray-600", "text-sm"], [1, "text-right", "text-sm", "text-gray-500", "flex-shrink-0"], [1, "flex", "justify-end", "mt-2"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "none", "viewBox", "0 0 24 24", "stroke", "#9ca3af", "stroke-width", "2"], ["points", "6 9 12 15 18 9"], ["class", "pt-4 border-t border-gray-200 mt-3", 4, "ngIf"], [1, "pt-4", "border-t", "border-gray-200", "mt-3"], [1, "text-sm", "mb-3", "text-gray-700"], [1, "space-y-3"], ["class", "flex gap-3", 4, "ngFor", "ngForOf"], ["class", "mt-4 flex gap-2", 3, "click", 4, "ngIf"], [1, "flex", "gap-3"], [1, "flex", "flex-col", "items-center"], [1, "w-2.5", "h-2.5", "bg-[#00B140]", "rounded-full", "flex-shrink-0", "mt-1"], ["class", "w-0.5 bg-gray-200 flex-1 mt-1", 4, "ngIf"], [1, "flex-1", "pb-3"], [1, "text-sm", "text-gray-800"], [1, "text-xs", "text-gray-500", "mt-0.5"], [1, "w-0.5", "bg-gray-200", "flex-1", "mt-1"], [1, "mt-4", "flex", "gap-2", 3, "click"], ["type", "text", "placeholder", "Agregar comentario...", 1, "flex-1", "px-4", "py-2", "border-2", "border-gray-200", "rounded-lg", "outline-none", "focus:border-[#00B140]", "text-sm", "transition-colors"], [1, "px-3", "py-2", "bg-[#00B140]", "text-white", "rounded-lg", "hover:bg-[#009633]", "transition-colors"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2"], ["x1", "22", "y1", "2", "x2", "11", "y2", "13"], ["points", "22 2 15 22 11 13 2 9 22 2"], [1, "bg-white", "rounded-xl", "shadow-md", "border", "border-gray-100", "p-12", "text-center"], ["xmlns", "http://www.w3.org/2000/svg", "width", "64", "height", "64", "fill", "none", "viewBox", "0 0 24 24", "stroke", "#d1d5db", "stroke-width", "1.5", 1, "mx-auto", "mb-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"], ["x1", "12", "y1", "17", "x2", "12.01", "y2", "17"], [1, "text-xl", "text-gray-600", "mb-2"], [1, "text-gray-500", "mb-6"], [1, "px-6", "py-2.5", "bg-[#00B140]", "text-white", "rounded-lg", "hover:bg-[#009633]", "transition-colors", 3, "click"], [1, "bg-white", "rounded-xl", "shadow-md", "border", "border-gray-100", "p-8", "max-w-2xl", "mx-auto"], [1, "text-2xl", "mb-6", "text-gray-900"], [1, "block", "text-sm", "mb-2", "text-gray-700"], [1, "w-full", "px-4", "py-3", "border-2", "border-gray-200", "rounded-lg", "outline-none", "focus:border-[#00B140]", "transition-colors", 3, "ngModelChange", "ngModel"], ["value", ""], ["type", "text", "placeholder", "Describe brevemente tu problema", 1, "w-full", "px-4", "py-3", "border-2", "border-gray-200", "rounded-lg", "outline-none", "focus:border-[#00B140]", "transition-colors", 3, "ngModelChange", "ngModel"], ["rows", "6", "placeholder", "Describe tu problema en detalle...", 1, "w-full", "px-4", "py-3", "border-2", "border-gray-200", "rounded-lg", "outline-none", "focus:border-[#00B140]", "transition-colors", "resize-none", 3, "ngModelChange", "ngModel"], [1, "border-2", "border-dashed", "border-gray-300", "rounded-lg", "p-8", "text-center", "hover:border-[#00B140]", "transition-colors", "cursor-pointer"], ["xmlns", "http://www.w3.org/2000/svg", "width", "32", "height", "32", "fill", "none", "viewBox", "0 0 24 24", "stroke", "#9ca3af", "stroke-width", "1.5", 1, "mx-auto", "mb-3"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"], [1, "text-sm", "text-gray-400", "mt-1"], ["class", "flex items-center gap-2 p-3 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm", 4, "ngIf"], ["class", "flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm", 4, "ngIf"], [1, "flex", "flex-col", "sm:flex-row", "gap-3"], [1, "flex-1", "py-2.5", "border-2", "border-gray-300", "text-gray-700", "rounded-lg", "hover:bg-gray-50", "transition-colors", 3, "click"], [1, "flex-1", "flex", "items-center", "justify-center", "gap-2", "py-2.5", "bg-[#00B140]", "text-white", "rounded-lg", "hover:bg-[#009633]", "transition-colors", 3, "click"], [1, "flex", "items-center", "gap-2", "p-3", "bg-green-50", "border", "border-green-200", "rounded-lg", "text-green-800", "text-sm"], [1, "flex", "items-center", "gap-2", "p-3", "bg-red-50", "border", "border-red-200", "rounded-lg", "text-red-700", "text-sm"], [1, "max-w-3xl", "mx-auto", "space-y-4"], [1, "space-y-0"], [1, "bg-gradient-to-r", "from-blue-50", "to-cyan-50", "rounded-xl", "shadow-md", "border", "border-blue-100", "p-6", "text-center"], [1, "text-xl", "mb-2", "text-gray-900"], [1, "text-gray-600", "mb-4"], [1, "py-5"], [1, "flex", "items-start", "gap-3", "justify-between"], [1, "flex", "items-start", "gap-3", "flex-1"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "20", "fill", "none", "viewBox", "0 0 24 24", "stroke", "#00B140", "stroke-width", "2", 1, "flex-shrink-0", "mt-0.5"], [1, "text-gray-800"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "none", "viewBox", "0 0 24 24", "stroke", "#9ca3af", "stroke-width", "2", 1, "flex-shrink-0", "mt-1", "transition-transform"], ["class", "text-gray-600 ml-8 mt-3 text-sm leading-relaxed", 4, "ngIf"], [1, "text-gray-600", "ml-8", "mt-3", "text-sm", "leading-relaxed"]], template: function SupportComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div")(3, "h1", 3);
        \u0275\u0275text(4, "Soporte \u{1F198}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 4);
        \u0275\u0275text(6, "Estamos aqu\xED para ayudarte");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(7, SupportComponent_button_7_Template, 4, 0, "button", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "div")(12, "p", 9);
        \u0275\u0275text(13, "Casos Activos");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "p", 10);
        \u0275\u0275text(15);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(16, "svg", 11);
        \u0275\u0275element(17, "circle", 12)(18, "polyline", 13);
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(19, "div", 7)(20, "div", 8)(21, "div")(22, "p", 9);
        \u0275\u0275text(23, "Casos Resueltos");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "p", 10);
        \u0275\u0275text(25);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(26, "svg", 14);
        \u0275\u0275element(27, "path", 15);
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(28, "div", 7)(29, "div")(30, "p", 9);
        \u0275\u0275text(31, "Tiempo Promedio");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "p", 10);
        \u0275\u0275text(33, "2.5h");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(34, "div", 16);
        \u0275\u0275template(35, SupportComponent_button_35_Template, 3, 4, "button", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275template(36, SupportComponent_div_36_Template, 4, 2, "div", 18)(37, SupportComponent_div_37_Template, 51, 5, "div", 19)(38, SupportComponent_div_38_Template, 13, 1, "div", 20);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275property("ngIf", ctx.activeTab() !== "new");
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(ctx.openCases.length);
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate(ctx.resolvedCases.length);
        \u0275\u0275advance(10);
        \u0275\u0275property("ngForOf", ctx.tabs);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeTab() === "cases");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeTab() === "new");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeTab() === "faq");
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SupportComponent, { className: "SupportComponent", filePath: "src\\app\\pages\\support\\support.component.ts", lineNumber: 282 });
})();
export {
  SupportComponent
};
//# sourceMappingURL=chunk-IDAH2SF4.js.map
