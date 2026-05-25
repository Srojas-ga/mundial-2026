import {
  Router
} from "./chunk-HRYE6XXT.js";
import {
  AuthService
} from "./chunk-JHTY2FGU.js";
import {
  CheckboxControlValueAccessor,
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
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-G2QLUSIR.js";

// src/app/pages/settings/settings.component.ts
function SettingsComponent_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9);
    \u0275\u0275listener("click", function SettingsComponent_button_9_Template_button_click_0_listener() {
      const tab_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.activeTab.set(tab_r2.id));
    });
    \u0275\u0275element(1, "span", 10);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tab_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r2.tabClass(tab_r2.id));
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", tab_r2.icon, \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tab_r2.label);
  }
}
function SettingsComponent_div_11_img_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 31);
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", (tmp_2_0 = ctx_r2.currentUser()) == null ? null : tmp_2_0.avatar, \u0275\u0275sanitizeUrl);
  }
}
function SettingsComponent_div_11_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(((tmp_2_0 = ctx_r2.currentUser()) == null ? null : tmp_2_0.avatar) || "\u{1F464}");
  }
}
function SettingsComponent_div_11_div_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275text(1, " \u2713 Cambios guardados correctamente ");
    \u0275\u0275elementEnd();
  }
}
function SettingsComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "h2", 12);
    \u0275\u0275text(2, "Informaci\xF3n del Perfil");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 13)(4, "div", 14);
    \u0275\u0275template(5, SettingsComponent_div_11_img_5_Template, 1, 1, "img", 15)(6, SettingsComponent_div_11_span_6_Template, 2, 1, "span", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div")(8, "h3", 17);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 18);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 19);
    \u0275\u0275listener("click", function SettingsComponent_div_11_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.changePhoto());
    });
    \u0275\u0275text(13, " Cambiar foto ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 0)(15, "div", 20)(16, "div")(17, "label", 21);
    \u0275\u0275text(18, "Nombre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "input", 22);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_div_11_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.profileForm.nombre, $event) || (ctx_r2.profileForm.nombre = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div")(21, "label", 21);
    \u0275\u0275text(22, "Apellidos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "input", 22);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_div_11_Template_input_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.profileForm.apellidos, $event) || (ctx_r2.profileForm.apellidos = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div")(25, "label", 21);
    \u0275\u0275text(26, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "input", 23);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_div_11_Template_input_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.profileForm.email, $event) || (ctx_r2.profileForm.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 20)(29, "div")(30, "label", 21);
    \u0275\u0275text(31, "Pa\xEDs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "select", 24);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_div_11_Template_select_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.profileForm.pais, $event) || (ctx_r2.profileForm.pais = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(33, "option");
    \u0275\u0275text(34, "Colombia");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "option");
    \u0275\u0275text(36, "M\xE9xico");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "option");
    \u0275\u0275text(38, "Argentina");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "option");
    \u0275\u0275text(40, "Estados Unidos");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(41, "div")(42, "label", 21);
    \u0275\u0275text(43, "Zona Horaria");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "select", 24);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_div_11_Template_select_ngModelChange_44_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.profileForm.zona, $event) || (ctx_r2.profileForm.zona = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(45, "option");
    \u0275\u0275text(46, "GMT-5 (Bogot\xE1)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "option");
    \u0275\u0275text(48, "GMT-6 (M\xE9xico)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "option");
    \u0275\u0275text(50, "GMT-3 (Buenos Aires)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "option");
    \u0275\u0275text(52, "GMT-8 (Los \xC1ngeles)");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(53, SettingsComponent_div_11_div_53_Template, 2, 0, "div", 25);
    \u0275\u0275elementStart(54, "div", 26)(55, "button", 27);
    \u0275\u0275text(56, " Cancelar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "button", 28);
    \u0275\u0275listener("click", function SettingsComponent_div_11_Template_button_click_57_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveProfile());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(58, "svg", 29);
    \u0275\u0275element(59, "path", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275text(60, " Guardar Cambios ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", (tmp_1_0 = ctx_r2.currentUser()) == null ? null : tmp_1_0.avatar == null ? null : tmp_1_0.avatar.startsWith("http"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !((tmp_2_0 = ctx_r2.currentUser()) == null ? null : tmp_2_0.avatar == null ? null : tmp_2_0.avatar.startsWith("http")));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_3_0 = ctx_r2.currentUser()) == null ? null : tmp_3_0.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_4_0 = ctx_r2.currentUser()) == null ? null : tmp_4_0.email);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.profileForm.nombre);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.profileForm.apellidos);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.profileForm.email);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.profileForm.pais);
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.profileForm.zona);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", ctx_r2.savedProfile());
  }
}
function SettingsComponent_div_12_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div")(2, "h3", 37);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 38);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "label", 39)(7, "input", 40);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_div_12_div_4_Template_input_ngModelChange_7_listener($event) {
      const notif_r7 = \u0275\u0275restoreView(_r6).$implicit;
      \u0275\u0275twoWayBindingSet(notif_r7.checked, $event) || (notif_r7.checked = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "div", 41);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const notif_r7 = ctx.$implicit;
    const last_r8 = ctx.last;
    \u0275\u0275classMap("flex items-center justify-between py-4 " + (!last_r8 ? "border-b border-gray-200" : ""));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(notif_r7.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(notif_r7.description);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", notif_r7.checked);
  }
}
function SettingsComponent_div_12_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275text(1, " \u2713 Preferencias guardadas ");
    \u0275\u0275elementEnd();
  }
}
function SettingsComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "h2", 12);
    \u0275\u0275text(2, "Preferencias de Notificaciones");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 33);
    \u0275\u0275template(4, SettingsComponent_div_12_div_4_Template, 9, 5, "div", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, SettingsComponent_div_12_div_5_Template, 2, 0, "div", 35);
    \u0275\u0275elementStart(6, "div", 36)(7, "button", 28);
    \u0275\u0275listener("click", function SettingsComponent_div_12_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveNotif());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 29);
    \u0275\u0275element(9, "path", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " Guardar Preferencias ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r2.notifSettings);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.savedNotif());
  }
}
function SettingsComponent_div_13_label_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label")(1, "input", 47);
    \u0275\u0275listener("change", function SettingsComponent_div_13_label_8_Template_input_change_1_listener() {
      const team_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleTeam(team_r11.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 48);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 49);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const team_r11 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap("flex items-center gap-2 p-3 border-2 rounded-lg cursor-pointer transition-all " + (ctx_r2.favoriteTeams.includes(team_r11.id) ? "border-[#00B140] bg-green-50" : "border-gray-200 hover:border-gray-300"));
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r2.favoriteTeams.includes(team_r11.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(team_r11.flag);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(team_r11.name);
  }
}
function SettingsComponent_div_13_label_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label")(1, "input", 47);
    \u0275\u0275listener("change", function SettingsComponent_div_13_label_13_Template_input_change_1_listener() {
      const city_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleCity(city_r13));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 49);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const city_r13 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap("flex items-center gap-2 p-3 border-2 rounded-lg cursor-pointer transition-all " + (ctx_r2.favoriteCities.includes(city_r13) ? "border-[#00B140] bg-green-50" : "border-gray-200 hover:border-gray-300"));
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r2.favoriteCities.includes(city_r13));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u{1F4CD} ", city_r13, "");
  }
}
function SettingsComponent_div_13_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275text(1, " \u2713 Preferencias guardadas correctamente ");
    \u0275\u0275elementEnd();
  }
}
function SettingsComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "h2", 12);
    \u0275\u0275text(2, "Mis Preferencias");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 0)(4, "div")(5, "label", 43);
    \u0275\u0275text(6, "Equipos Favoritos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 44);
    \u0275\u0275template(8, SettingsComponent_div_13_label_8_Template, 6, 5, "label", 34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div")(10, "label", 43);
    \u0275\u0275text(11, "Ciudades de Inter\xE9s");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 45);
    \u0275\u0275template(13, SettingsComponent_div_13_label_13_Template, 4, 4, "label", 34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div")(15, "label", 21);
    \u0275\u0275text(16, "Idioma");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "select", 24);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_div_13_Template_select_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.selectedLanguage, $event) || (ctx_r2.selectedLanguage = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(18, "option");
    \u0275\u0275text(19, "\u{1F1EA}\u{1F1F8} Espa\xF1ol");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "option");
    \u0275\u0275text(21, "\u{1F1FA}\u{1F1F8} English");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "option");
    \u0275\u0275text(23, "\u{1F1E7}\u{1F1F7} Portugu\xEAs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "option");
    \u0275\u0275text(25, "\u{1F1EB}\u{1F1F7} Fran\xE7ais");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(26, SettingsComponent_div_13_div_26_Template, 2, 0, "div", 25);
    \u0275\u0275elementStart(27, "div", 46)(28, "button", 28);
    \u0275\u0275listener("click", function SettingsComponent_div_13_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.savePrefs());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(29, "svg", 29);
    \u0275\u0275element(30, "path", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275text(31, " Guardar Preferencias ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("ngForOf", ctx_r2.teams);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r2.availableCities);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.selectedLanguage);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", ctx_r2.savedPrefs());
  }
}
function SettingsComponent_div_14_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.passwordError(), " ");
  }
}
function SettingsComponent_div_14_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69);
    \u0275\u0275text(1, " \u2713 Contrase\xF1a actualizada correctamente ");
    \u0275\u0275elementEnd();
  }
}
function SettingsComponent_div_14_div_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 70)(1, "div", 71)(2, "h3", 72);
    \u0275\u0275text(3, "\xBFEst\xE1s seguro?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 73);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 74)(7, "button", 75);
    \u0275\u0275listener("click", function SettingsComponent_div_14_div_46_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.confirmModal.set(null));
    });
    \u0275\u0275text(8, " Cancelar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 76);
    \u0275\u0275listener("click", function SettingsComponent_div_14_div_46_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.confirmAction());
    });
    \u0275\u0275text(10, " Confirmar ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Esta acci\xF3n es irreversible. \xBFDeseas ", ctx_r2.confirmModal(), " tu cuenta?");
  }
}
function SettingsComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "h2", 12);
    \u0275\u0275text(2, "Seguridad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 0)(4, "div", 50);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 51);
    \u0275\u0275element(6, "path", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "p", 53);
    \u0275\u0275text(8, "Tu cuenta est\xE1 protegida");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div")(10, "h3", 54);
    \u0275\u0275text(11, "Cambiar Contrase\xF1a");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 55)(13, "div")(14, "label", 21);
    \u0275\u0275text(15, "Contrase\xF1a actual");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 56);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_div_14_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.securityForm.current, $event) || (ctx_r2.securityForm.current = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div")(18, "label", 21);
    \u0275\u0275text(19, "Nueva contrase\xF1a");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 56);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_div_14_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.securityForm.newPass, $event) || (ctx_r2.securityForm.newPass = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div")(22, "label", 21);
    \u0275\u0275text(23, "Confirmar nueva contrase\xF1a");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "input", 56);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_div_14_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.securityForm.confirm, $event) || (ctx_r2.securityForm.confirm = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(25, SettingsComponent_div_14_div_25_Template, 2, 1, "div", 57)(26, SettingsComponent_div_14_div_26_Template, 2, 0, "div", 58);
    \u0275\u0275elementStart(27, "button", 59);
    \u0275\u0275listener("click", function SettingsComponent_div_14_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updatePassword());
    });
    \u0275\u0275text(28, " Actualizar Contrase\xF1a ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 60)(30, "h3", 61);
    \u0275\u0275text(31, "Autenticaci\xF3n de Dos Factores");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "p", 62);
    \u0275\u0275text(33, "Agrega una capa extra de seguridad a tu cuenta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "button", 63);
    \u0275\u0275listener("click", function SettingsComponent_div_14_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggle2FA());
    });
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 60)(37, "h3", 64);
    \u0275\u0275text(38, "Zona de Peligro");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "p", 62);
    \u0275\u0275text(40, "Estas acciones son irreversibles. Procede con cuidado.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 65)(42, "button", 66);
    \u0275\u0275listener("click", function SettingsComponent_div_14_Template_button_click_42_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.confirmModal.set("desactivar"));
    });
    \u0275\u0275text(43, " Desactivar Cuenta ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "button", 66);
    \u0275\u0275listener("click", function SettingsComponent_div_14_Template_button_click_44_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.confirmModal.set("eliminar"));
    });
    \u0275\u0275text(45, " Eliminar Cuenta ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(46, SettingsComponent_div_14_div_46_Template, 11, 1, "div", 67);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(16);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.securityForm.current);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.securityForm.newPass);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.securityForm.confirm);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.passwordError());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.savedPassword());
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", ctx_r2.twoFactorEnabled() ? "Desactivar 2FA" : "Activar 2FA", " ");
    \u0275\u0275advance(11);
    \u0275\u0275property("ngIf", ctx_r2.confirmModal());
  }
}
var SettingsComponent = class _SettingsComponent {
  constructor() {
    this.router = inject(Router);
    this.authService = inject(AuthService);
    this.currentUser = signal(this.authService.getCurrentUser());
    this.activeTab = signal("profile");
    this.savedProfile = signal(false);
    this.savedNotif = signal(false);
    this.savedPrefs = signal(false);
    this.savedPassword = signal(false);
    this.passwordError = signal(null);
    this.confirmModal = signal(null);
    this.twoFactorEnabled = signal(localStorage.getItem("2FA") === "true");
    this.profileForm = {
      nombre: this.currentUser()?.name.split(" ")[0] || "",
      apellidos: this.currentUser()?.name.split(" ").slice(1).join(" ") || "",
      email: this.currentUser()?.email || "",
      pais: "Colombia",
      zona: "GMT-5 (Bogot\xE1)"
    };
    this.notifSettings = [
      { key: "live", label: "Partidos en vivo", description: "Recibe notificaciones cuando inicien los partidos", checked: true },
      { key: "goals", label: "Goles y eventos", description: "Notificaciones de goles, tarjetas y eventos importantes", checked: true },
      { key: "results", label: "Resultados finales", description: "Recibe el resultado cuando termine un partido", checked: true },
      { key: "pools", label: "Pollas y rankings", description: "Actualizaciones de tus pollas y posiciones", checked: true },
      { key: "album", label: "\xC1lbum digital", description: "Nuevos paquetes y ofertas de intercambio", checked: false },
      { key: "news", label: "Noticias y promociones", description: "Recibe novedades y ofertas especiales", checked: false }
    ];
    this.teams = [
      { id: "1", name: "Argentina", flag: "\u{1F1E6}\u{1F1F7}" },
      { id: "2", name: "Brasil", flag: "\u{1F1E7}\u{1F1F7}" },
      { id: "3", name: "Espa\xF1a", flag: "\u{1F1EA}\u{1F1F8}" },
      { id: "4", name: "Alemania", flag: "\u{1F1E9}\u{1F1EA}" },
      { id: "5", name: "Francia", flag: "\u{1F1EB}\u{1F1F7}" },
      { id: "7", name: "Colombia", flag: "\u{1F1E8}\u{1F1F4}" },
      { id: "8", name: "M\xE9xico", flag: "\u{1F1F2}\u{1F1FD}" }
    ];
    this.favoriteTeams = [...this.currentUser()?.favoriteTeams || []];
    this.favoriteCities = [...this.currentUser()?.cities || []];
    this.availableCities = ["Nueva York", "Los \xC1ngeles", "Dallas", "Ciudad de M\xE9xico"];
    this.selectedLanguage = "\u{1F1EA}\u{1F1F8} Espa\xF1ol";
    this.securityForm = { current: "", newPass: "", confirm: "" };
    this.tabs = [
      { id: "profile", label: "Perfil", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>` },
      { id: "notifications", label: "Notificaciones", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>` },
      { id: "preferences", label: "Preferencias", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>` },
      { id: "security", label: "Seguridad", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>` }
    ];
    this.authService.getPreferencias().subscribe((data) => {
      if (data?.data) {
        const prefs = data.data;
        if (prefs.idioma)
          this.selectedLanguage = prefs.idioma;
        if (prefs.zona_horaria)
          this.profileForm.zona = prefs.zona_horaria;
        if (prefs.canal_notificacion) {
          const canales = prefs.canal_notificacion.split(",");
          this.notifSettings.forEach((n) => n.checked = canales.includes(n.key));
        }
        if (prefs.equipos_favoritos)
          this.favoriteTeams = prefs.equipos_favoritos.map((e) => e.id);
        if (prefs.ciudades_favoritas)
          this.favoriteCities = prefs.ciudades_favoritas;
      }
    });
  }
  tabClass(id) {
    const base = "w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-left";
    return this.activeTab() === id ? `${base} bg-[#00B140] text-white` : `${base} text-gray-700 hover:bg-gray-100`;
  }
  toggleTeam(id) {
    const idx = this.favoriteTeams.indexOf(id);
    idx >= 0 ? this.favoriteTeams.splice(idx, 1) : this.favoriteTeams.push(id);
  }
  toggleCity(city) {
    const idx = this.favoriteCities.indexOf(city);
    idx >= 0 ? this.favoriteCities.splice(idx, 1) : this.favoriteCities.push(city);
  }
  toast(sig) {
    sig.set(true);
    setTimeout(() => sig.set(false), 3e3);
  }
  changePhoto() {
    const url = prompt("Ingresa la URL de tu nueva foto de perfil (puedes usar un emoji o una imagen):", this.currentUser()?.avatar || "");
    if (url !== null && url.trim() !== "") {
      this.authService.updateProfile({ avatar: url.trim() }).subscribe({
        next: () => {
          this.currentUser.set(this.authService.getCurrentUser());
          this.toast(this.savedProfile);
        },
        error: () => alert("Error al actualizar la foto")
      });
    }
  }
  saveProfile() {
    this.authService.updateProfile({
      nombre: `${this.profileForm.nombre} ${this.profileForm.apellidos}`.trim(),
      email: this.profileForm.email
    }).subscribe({
      next: () => {
        this.currentUser.set(this.authService.getCurrentUser());
        this.toast(this.savedProfile);
      },
      error: () => this.toast(this.savedProfile)
    });
  }
  saveNotif() {
    const canales = this.notifSettings.filter((n) => n.checked).map((n) => n.key).join(",");
    this.authService.updatePreferencias({ canal_notificacion: canales }).subscribe(() => this.toast(this.savedNotif));
  }
  savePrefs() {
    this.authService.updatePreferencias({
      idioma: this.selectedLanguage,
      zona_horaria: this.profileForm.zona,
      equipos_favoritos: this.favoriteTeams,
      ciudades_favoritas: this.favoriteCities
    }).subscribe(() => this.toast(this.savedPrefs));
  }
  updatePassword() {
    this.passwordError.set(null);
    this.savedPassword.set(false);
    if (!this.securityForm.current) {
      this.passwordError.set("Ingresa tu contrase\xF1a actual.");
      return;
    }
    if (this.securityForm.newPass.length < 8) {
      this.passwordError.set("La nueva contrase\xF1a debe tener al menos 8 caracteres.");
      return;
    }
    if (this.securityForm.newPass !== this.securityForm.confirm) {
      this.passwordError.set("Las contrase\xF1as no coinciden.");
      return;
    }
    this.authService.updatePassword(this.securityForm.current, this.securityForm.newPass).subscribe({
      next: () => {
        this.securityForm = { current: "", newPass: "", confirm: "" };
        this.toast(this.savedPassword);
      },
      error: (err) => this.passwordError.set(err.error?.message || "Error al cambiar contrase\xF1a")
    });
  }
  confirmAction() {
    const action = this.confirmModal();
    if (!action)
      return;
    if (action === "desactivar") {
      this.authService.updateStatus("inactivo").subscribe(() => {
        this.authService.logout();
        this.router.navigate(["/auth/login"]);
      });
    } else if (action === "eliminar") {
      this.authService.updateStatus("eliminado").subscribe(() => {
        this.authService.logout();
        this.router.navigate(["/auth/login"]);
      });
    }
    this.confirmModal.set(null);
  }
  toggle2FA() {
    const val = !this.twoFactorEnabled();
    this.twoFactorEnabled.set(val);
    localStorage.setItem("2FA", val.toString());
    alert(val ? "Autenticaci\xF3n de dos factores activada." : "Autenticaci\xF3n de dos factores desactivada.");
  }
  static {
    this.\u0275fac = function SettingsComponent_Factory(t) {
      return new (t || _SettingsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettingsComponent, selectors: [["app-settings"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 15, vars: 5, consts: [[1, "space-y-6"], [1, "text-3xl", "mb-2", "text-gray-900"], [1, "text-gray-600"], [1, "flex", "flex-col", "lg:flex-row", "gap-6"], [1, "bg-white", "rounded-xl", "shadow-md", "border", "border-gray-100", "w-full", "lg:w-64", "p-4", "h-fit"], [1, "space-y-1"], [3, "class", "click", 4, "ngFor", "ngForOf"], [1, "flex-1"], ["class", "bg-white rounded-xl shadow-md border border-gray-100 p-8", 4, "ngIf"], [3, "click"], [1, "w-5", "h-5", "flex-shrink-0", 3, "innerHTML"], [1, "bg-white", "rounded-xl", "shadow-md", "border", "border-gray-100", "p-8"], [1, "text-2xl", "mb-6", "text-gray-900"], [1, "flex", "items-center", "gap-6", "mb-8", "pb-8", "border-b", "border-gray-200"], [1, "w-24", "h-24", "bg-gradient-to-br", "from-[#00B140]", "to-[#003087]", "rounded-full", "flex", "items-center", "justify-center", "text-5xl", "overflow-hidden"], ["class", "w-full h-full object-cover", 3, "src", 4, "ngIf"], [4, "ngIf"], [1, "text-xl", "mb-1", "text-gray-800"], [1, "text-gray-600", "text-sm"], [1, "mt-3", "px-4", "py-1.5", "text-sm", "border-2", "border-[#00B140]", "text-[#00B140]", "rounded-lg", "hover:bg-[#00B140]", "hover:text-white", "transition-colors", 3, "click"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "gap-6"], [1, "block", "text-sm", "mb-2", "text-gray-700"], ["type", "text", 1, "w-full", "px-4", "py-3", "border-2", "border-gray-200", "rounded-lg", "outline-none", "focus:border-[#00B140]", "transition-colors", 3, "ngModelChange", "ngModel"], ["type", "email", 1, "w-full", "px-4", "py-3", "border-2", "border-gray-200", "rounded-lg", "outline-none", "focus:border-[#00B140]", "transition-colors", 3, "ngModelChange", "ngModel"], [1, "w-full", "px-4", "py-3", "border-2", "border-gray-200", "rounded-lg", "outline-none", "focus:border-[#00B140]", "transition-colors", 3, "ngModelChange", "ngModel"], ["class", "flex items-center gap-2 p-3 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm", 4, "ngIf"], [1, "flex", "justify-end", "gap-3", "pt-6", "border-t", "border-gray-200"], [1, "px-4", "py-2.5", "border-2", "border-gray-300", "text-gray-700", "rounded-lg", "hover:bg-gray-50", "transition-colors"], [1, "flex", "items-center", "gap-2", "px-4", "py-2.5", "bg-[#00B140]", "text-white", "rounded-lg", "hover:bg-[#009633]", "transition-colors", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "18", "height", "18", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"], [1, "w-full", "h-full", "object-cover", 3, "src"], [1, "flex", "items-center", "gap-2", "p-3", "bg-green-50", "border", "border-green-200", "rounded-lg", "text-green-800", "text-sm"], [1, "space-y-0"], [3, "class", 4, "ngFor", "ngForOf"], ["class", "mt-4 flex items-center gap-2 p-3 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm", 4, "ngIf"], [1, "flex", "justify-end", "pt-6", "border-t", "border-gray-200", "mt-6"], [1, "mb-1", "text-gray-800"], [1, "text-sm", "text-gray-600"], [1, "relative", "inline-flex", "items-center", "cursor-pointer", "ml-4"], ["type", "checkbox", 1, "sr-only", "peer", 3, "ngModelChange", "ngModel"], [1, "w-11", "h-6", "bg-gray-200", "peer-focus:outline-none", "rounded-full", "peer", "peer-checked:after:translate-x-full", "peer-checked:after:border-white", "after:content-['']", "after:absolute", "after:top-[2px]", "after:left-[2px]", "after:bg-white", "after:border-gray-300", "after:border", "after:rounded-full", "after:h-5", "after:w-5", "after:transition-all", "peer-checked:bg-[#00B140]"], [1, "mt-4", "flex", "items-center", "gap-2", "p-3", "bg-green-50", "border", "border-green-200", "rounded-lg", "text-green-800", "text-sm"], [1, "block", "text-sm", "mb-3", "text-gray-700"], [1, "grid", "grid-cols-2", "sm:grid-cols-3", "gap-3"], [1, "grid", "grid-cols-2", "gap-3"], [1, "flex", "justify-end", "pt-6", "border-t", "border-gray-200"], ["type", "checkbox", 1, "w-4", "h-4", "rounded", "border-gray-300", "accent-[#00B140]", 3, "change", "checked"], [1, "text-2xl"], [1, "text-sm", "text-gray-700"], [1, "p-4", "bg-green-50", "border", "border-green-200", "rounded-lg", "flex", "items-center", "gap-2"], ["xmlns", "http://www.w3.org/2000/svg", "width", "18", "height", "18", "fill", "none", "viewBox", "0 0 24 24", "stroke", "#16a34a", "stroke-width", "2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"], [1, "text-sm", "text-green-800"], [1, "mb-4", "text-gray-800"], [1, "space-y-4"], ["type", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", 1, "w-full", "px-4", "py-3", "border-2", "border-gray-200", "rounded-lg", "outline-none", "focus:border-[#00B140]", "transition-colors", 3, "ngModelChange", "ngModel"], ["class", "mt-3 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm", 4, "ngIf"], ["class", "mt-3 p-3 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm", 4, "ngIf"], [1, "mt-4", "px-4", "py-2.5", "bg-[#00B140]", "text-white", "rounded-lg", "hover:bg-[#009633]", "transition-colors", 3, "click"], [1, "pt-6", "border-t", "border-gray-200"], [1, "mb-2", "text-gray-800"], [1, "text-sm", "text-gray-600", "mb-4"], [1, "px-4", "py-2.5", "border-2", "border-[#003087]", "text-[#003087]", "rounded-lg", "hover:bg-[#003087]", "hover:text-white", "transition-colors", 3, "click"], [1, "mb-2", "text-red-600"], [1, "flex", "flex-wrap", "gap-3"], [1, "px-4", "py-2.5", "border-2", "border-red-500", "text-red-600", "rounded-lg", "hover:bg-red-50", "transition-colors", 3, "click"], ["class", "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50", 4, "ngIf"], [1, "mt-3", "p-3", "bg-red-50", "border", "border-red-200", "rounded-lg", "text-red-700", "text-sm"], [1, "mt-3", "p-3", "bg-green-50", "border", "border-green-200", "rounded-lg", "text-green-800", "text-sm"], [1, "fixed", "inset-0", "bg-black", "bg-opacity-50", "flex", "items-center", "justify-center", "z-50"], [1, "bg-white", "rounded-xl", "p-8", "max-w-md", "w-full", "mx-4", "shadow-2xl"], [1, "text-xl", "mb-4", "text-gray-900"], [1, "text-gray-600", "mb-6"], [1, "flex", "gap-3", "justify-end"], [1, "px-4", "py-2", "border-2", "border-gray-300", "text-gray-700", "rounded-lg", "hover:bg-gray-50", "transition-colors", 3, "click"], [1, "px-4", "py-2", "bg-red-600", "text-white", "rounded-lg", "hover:bg-red-700", "transition-colors", 3, "click"]], template: function SettingsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h1", 1);
        \u0275\u0275text(3, "Configuraci\xF3n \u2699\uFE0F");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 2);
        \u0275\u0275text(5, "Administra tu cuenta y preferencias");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 3)(7, "div", 4)(8, "nav", 5);
        \u0275\u0275template(9, SettingsComponent_button_9_Template, 4, 4, "button", 6);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 7);
        \u0275\u0275template(11, SettingsComponent_div_11_Template, 61, 10, "div", 8)(12, SettingsComponent_div_12_Template, 11, 2, "div", 8)(13, SettingsComponent_div_13_Template, 32, 4, "div", 8)(14, SettingsComponent_div_14_Template, 47, 7, "div", 8);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
        \u0275\u0275property("ngForOf", ctx.tabs);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.activeTab() === "profile");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeTab() === "notifications");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeTab() === "preferences");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeTab() === "security");
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingsComponent, { className: "SettingsComponent", filePath: "src\\app\\pages\\settings\\settings.component.ts", lineNumber: 316 });
})();
export {
  SettingsComponent
};
//# sourceMappingURL=chunk-ZN4C5H3O.js.map
