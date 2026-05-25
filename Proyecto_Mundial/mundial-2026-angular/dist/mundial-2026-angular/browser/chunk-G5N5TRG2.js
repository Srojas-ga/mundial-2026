import {
  Router,
  RouterLink
} from "./chunk-HRYE6XXT.js";
import {
  AuthService
} from "./chunk-JHTY2FGU.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-PXUBOXYT.js";
import {
  CommonModule,
  NgIf,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-G2QLUSIR.js";

// src/app/pages/register/register.component.ts
function RegisterComponent__svg_path_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 34);
  }
}
function RegisterComponent__svg_path_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 35);
  }
}
function RegisterComponent__svg_path_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 36);
  }
}
function RegisterComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.error(), " ");
  }
}
function RegisterComponent__svg_svg_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 38);
    \u0275\u0275element(1, "circle", 39)(2, "path", 40);
    \u0275\u0275elementEnd();
  }
}
var RegisterComponent = class _RegisterComponent {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
    this.nombre = "";
    this.email = "";
    this.password = "";
    this.confirmPassword = "";
    this.showPassword = signal(false);
    this.loading = signal(false);
    this.error = signal(null);
  }
  register() {
    this.error.set(null);
    if (!this.nombre || !this.email || !this.password || !this.confirmPassword) {
      this.error.set("Por favor completa todos los campos");
      return;
    }
    if (this.password.length < 8) {
      this.error.set("La contrase\xF1a debe tener al menos 8 caracteres");
      return;
    }
    if (this.password !== this.confirmPassword) {
      this.error.set("Las contrase\xF1as no coinciden");
      return;
    }
    this.loading.set(true);
    this.authService.register(this.nombre, this.email, this.password).subscribe({
      next: () => {
        this.router.navigate(["/dashboard"]);
      },
      error: (err) => {
        this.loading.set(false);
        this.error.set(err.error?.message || "Error al crear la cuenta");
      }
    });
  }
  static {
    this.\u0275fac = function RegisterComponent_Factory(t) {
      return new (t || _RegisterComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegisterComponent, selectors: [["app-register"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 60, vars: 13, consts: [[1, "min-h-screen", "bg-gradient-to-br", "from-[#00B140]", "via-[#00509E]", "to-[#003087]", "flex", "items-center", "justify-center", "p-4"], [1, "w-full", "max-w-md"], [1, "text-center", "mb-8"], [1, "w-20", "h-20", "bg-white", "bg-opacity-20", "backdrop-blur-sm", "rounded-2xl", "flex", "items-center", "justify-center", "text-5xl", "mx-auto", "mb-4", "shadow-2xl"], [1, "text-4xl", "font-black", "text-white", "mb-2"], [1, "text-white", "text-opacity-80"], [1, "bg-white", "rounded-2xl", "shadow-2xl", "p-8"], [1, "text-2xl", "text-gray-900", "mb-6", "text-center"], [1, "space-y-5"], [1, "block", "text-sm", "mb-2", "text-gray-700"], [1, "relative"], ["xmlns", "http://www.w3.org/2000/svg", "width", "18", "height", "18", "fill", "none", "viewBox", "0 0 24 24", "stroke", "#9ca3af", "stroke-width", "2", 1, "absolute", "left-3", "top-1/2", "-translate-y-1/2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"], ["type", "text", "placeholder", "Juan P\xE9rez", "id", "register-name", 1, "w-full", "pl-10", "pr-4", "py-3", "border-2", "border-gray-200", "rounded-lg", "outline-none", "focus:border-[#00B140]", "transition-colors", 3, "ngModelChange", "ngModel"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"], ["type", "email", "placeholder", "tu@email.com", "id", "register-email", 1, "w-full", "pl-10", "pr-4", "py-3", "border-2", "border-gray-200", "rounded-lg", "outline-none", "focus:border-[#00B140]", "transition-colors", 3, "ngModelChange", "ngModel"], ["x", "3", "y", "11", "width", "18", "height", "11", "rx", "2", "ry", "2"], ["d", "M7 11V7a5 5 0 0110 0v4"], ["placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", "id", "register-password", 1, "w-full", "pl-10", "pr-4", "py-3", "border-2", "border-gray-200", "rounded-lg", "outline-none", "focus:border-[#00B140]", "transition-colors", 3, "ngModelChange", "type", "ngModel"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"], [1, "absolute", "right-3", "top-1/2", "-translate-y-1/2", "text-gray-400", "hover:text-gray-600", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "18", "height", "18", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15 12a3 3 0 11-6 0 3 3 0 016 0z", 4, "ngIf"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z", 4, "ngIf"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21", 4, "ngIf"], ["placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", "id", "register-confirm", 1, "w-full", "pl-10", "pr-4", "py-3", "border-2", "border-gray-200", "rounded-lg", "outline-none", "focus:border-[#00B140]", "transition-colors", 3, "ngModelChange", "keyup.enter", "type", "ngModel"], ["class", "p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm", 4, "ngIf"], ["id", "register-submit", 1, "w-full", "py-3", "bg-gradient-to-r", "from-[#003087]", "to-[#00509E]", "text-white", "rounded-lg", "hover:from-[#002266]", "hover:to-[#003d7a]", "transition-all", "duration-300", "flex", "items-center", "justify-center", "gap-2", "text-lg", "shadow-lg", "hover:shadow-xl", "disabled:opacity-50", 3, "click", "disabled"], ["class", "animate-spin h-5 w-5", "xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 4, "ngIf"], [1, "flex", "items-center", "gap-4", "my-6"], [1, "flex-1", "border-t", "border-gray-200"], [1, "text-sm", "text-gray-400"], ["routerLink", "/login", "id", "goto-login", 1, "block", "w-full", "py-3", "text-center", "border-2", "border-[#00B140]", "text-[#00B140]", "rounded-lg", "hover:bg-[#00B140]", "hover:text-white", "transition-colors"], [1, "text-center", "text-white", "text-opacity-60", "text-sm", "mt-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15 12a3 3 0 11-6 0 3 3 0 016 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"], [1, "p-3", "bg-red-50", "border", "border-red-200", "rounded-lg", "text-red-700", "text-sm"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-5", "w-5"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"]], template: function RegisterComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        \u0275\u0275text(4, " \u26BD ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "h1", 4);
        \u0275\u0275text(6, "MUNDIAL 2026");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p", 5);
        \u0275\u0275text(8, "Crea tu cuenta y vive la experiencia");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 6)(10, "h2", 7);
        \u0275\u0275text(11, "Crear Cuenta");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 8)(13, "div")(14, "label", 9);
        \u0275\u0275text(15, "Nombre completo");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 10);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(17, "svg", 11);
        \u0275\u0275element(18, "path", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(19, "input", 13);
        \u0275\u0275twoWayListener("ngModelChange", function RegisterComponent_Template_input_ngModelChange_19_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.nombre, $event) || (ctx.nombre = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(20, "div")(21, "label", 9);
        \u0275\u0275text(22, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "div", 10);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(24, "svg", 11);
        \u0275\u0275element(25, "path", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(26, "input", 15);
        \u0275\u0275twoWayListener("ngModelChange", function RegisterComponent_Template_input_ngModelChange_26_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.email, $event) || (ctx.email = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(27, "div")(28, "label", 9);
        \u0275\u0275text(29, "Contrase\xF1a (m\xEDn. 8 caracteres)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "div", 10);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(31, "svg", 11);
        \u0275\u0275element(32, "rect", 16)(33, "path", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(34, "input", 18);
        \u0275\u0275twoWayListener("ngModelChange", function RegisterComponent_Template_input_ngModelChange_34_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.password, $event) || (ctx.password = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(35, "div")(36, "label", 9);
        \u0275\u0275text(37, "Confirmar contrase\xF1a");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "div", 10);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(39, "svg", 11);
        \u0275\u0275element(40, "path", 19);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(41, "button", 20);
        \u0275\u0275listener("click", function RegisterComponent_Template_button_click_41_listener() {
          return ctx.showPassword.set(!ctx.showPassword());
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(42, "svg", 21);
        \u0275\u0275template(43, RegisterComponent__svg_path_43_Template, 1, 0, "path", 22)(44, RegisterComponent__svg_path_44_Template, 1, 0, "path", 23)(45, RegisterComponent__svg_path_45_Template, 1, 0, "path", 24);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(46, "input", 25);
        \u0275\u0275twoWayListener("ngModelChange", function RegisterComponent_Template_input_ngModelChange_46_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.confirmPassword, $event) || (ctx.confirmPassword = $event);
          return $event;
        });
        \u0275\u0275listener("keyup.enter", function RegisterComponent_Template_input_keyup_enter_46_listener() {
          return ctx.register();
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(47, RegisterComponent_div_47_Template, 2, 1, "div", 26);
        \u0275\u0275elementStart(48, "button", 27);
        \u0275\u0275listener("click", function RegisterComponent_Template_button_click_48_listener() {
          return ctx.register();
        });
        \u0275\u0275template(49, RegisterComponent__svg_svg_49_Template, 3, 0, "svg", 28);
        \u0275\u0275text(50);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(51, "div", 29);
        \u0275\u0275element(52, "div", 30);
        \u0275\u0275elementStart(53, "span", 31);
        \u0275\u0275text(54, "\xBFYa tienes cuenta?");
        \u0275\u0275elementEnd();
        \u0275\u0275element(55, "div", 30);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "a", 32);
        \u0275\u0275text(57, " Iniciar Sesi\xF3n ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(58, "p", 33);
        \u0275\u0275text(59, " \xA9 2026 Mundial Hub \u2014 Proyecto Acad\xE9mico ");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(19);
        \u0275\u0275twoWayProperty("ngModel", ctx.nombre);
        \u0275\u0275advance(7);
        \u0275\u0275twoWayProperty("ngModel", ctx.email);
        \u0275\u0275advance(8);
        \u0275\u0275property("type", ctx.showPassword() ? "text" : "password");
        \u0275\u0275twoWayProperty("ngModel", ctx.password);
        \u0275\u0275advance(9);
        \u0275\u0275property("ngIf", !ctx.showPassword());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.showPassword());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showPassword());
        \u0275\u0275advance();
        \u0275\u0275property("type", ctx.showPassword() ? "text" : "password");
        \u0275\u0275twoWayProperty("ngModel", ctx.confirmPassword);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.error());
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.loading());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.loading() ? "Creando cuenta..." : "Crear Cuenta", " ");
      }
    }, dependencies: [CommonModule, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, RouterLink], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegisterComponent, { className: "RegisterComponent", filePath: "src\\app\\pages\\register\\register.component.ts", lineNumber: 134 });
})();
export {
  RegisterComponent
};
//# sourceMappingURL=chunk-G5N5TRG2.js.map
