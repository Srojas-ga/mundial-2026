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

// src/app/pages/login/login.component.ts
function LoginComponent__svg_path_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 30);
  }
}
function LoginComponent__svg_path_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 31);
  }
}
function LoginComponent__svg_path_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 32);
  }
}
function LoginComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.error(), " ");
  }
}
function LoginComponent__svg_svg_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 34);
    \u0275\u0275element(1, "circle", 35)(2, "path", 36);
    \u0275\u0275elementEnd();
  }
}
var LoginComponent = class _LoginComponent {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
    this.email = "";
    this.password = "";
    this.showPassword = signal(false);
    this.loading = signal(false);
    this.error = signal(null);
    if (this.authService.isLoggedIn()) {
      this.router.navigate(["/dashboard"]);
    }
  }
  login() {
    this.error.set(null);
    if (!this.email || !this.password) {
      this.error.set("Por favor completa todos los campos");
      return;
    }
    this.loading.set(true);
    this.authService.login(this.email, this.password).subscribe({
      next: () => {
        this.router.navigate(["/dashboard"]);
      },
      error: (err) => {
        this.loading.set(false);
        this.error.set(err.error?.message || "Error al iniciar sesi\xF3n");
      }
    });
  }
  static {
    this.\u0275fac = function LoginComponent_Factory(t) {
      return new (t || _LoginComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 46, vars: 10, consts: [[1, "min-h-screen", "bg-gradient-to-br", "from-[#003087]", "via-[#00509E]", "to-[#00B140]", "flex", "items-center", "justify-center", "p-4"], [1, "w-full", "max-w-md"], [1, "text-center", "mb-8"], [1, "w-20", "h-20", "bg-white", "bg-opacity-20", "backdrop-blur-sm", "rounded-2xl", "flex", "items-center", "justify-center", "text-5xl", "mx-auto", "mb-4", "shadow-2xl"], [1, "text-4xl", "font-black", "text-white", "mb-2"], [1, "text-white", "text-opacity-80"], [1, "bg-white", "rounded-2xl", "shadow-2xl", "p-8"], [1, "text-2xl", "text-gray-900", "mb-6", "text-center"], [1, "space-y-5"], [1, "block", "text-sm", "mb-2", "text-gray-700"], [1, "relative"], ["xmlns", "http://www.w3.org/2000/svg", "width", "18", "height", "18", "fill", "none", "viewBox", "0 0 24 24", "stroke", "#9ca3af", "stroke-width", "2", 1, "absolute", "left-3", "top-1/2", "-translate-y-1/2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"], ["type", "email", "placeholder", "tu@email.com", "id", "login-email", 1, "w-full", "pl-10", "pr-4", "py-3", "border-2", "border-gray-200", "rounded-lg", "outline-none", "focus:border-[#00B140]", "transition-colors", 3, "ngModelChange", "keyup.enter", "ngModel"], ["x", "3", "y", "11", "width", "18", "height", "11", "rx", "2", "ry", "2"], ["d", "M7 11V7a5 5 0 0110 0v4"], ["placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", "id", "login-password", 1, "w-full", "pl-10", "pr-12", "py-3", "border-2", "border-gray-200", "rounded-lg", "outline-none", "focus:border-[#00B140]", "transition-colors", 3, "ngModelChange", "keyup.enter", "type", "ngModel"], [1, "absolute", "right-3", "top-1/2", "-translate-y-1/2", "text-gray-400", "hover:text-gray-600", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "18", "height", "18", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15 12a3 3 0 11-6 0 3 3 0 016 0z", 4, "ngIf"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z", 4, "ngIf"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21", 4, "ngIf"], ["class", "p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm", 4, "ngIf"], ["id", "login-submit", 1, "w-full", "py-3", "bg-gradient-to-r", "from-[#00B140]", "to-[#009633]", "text-white", "rounded-lg", "hover:from-[#009633]", "hover:to-[#007a2a]", "transition-all", "duration-300", "flex", "items-center", "justify-center", "gap-2", "text-lg", "shadow-lg", "hover:shadow-xl", "disabled:opacity-50", 3, "click", "disabled"], ["class", "animate-spin h-5 w-5", "xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 4, "ngIf"], [1, "flex", "items-center", "gap-4", "my-6"], [1, "flex-1", "border-t", "border-gray-200"], [1, "text-sm", "text-gray-400"], ["routerLink", "/register", "id", "goto-register", 1, "block", "w-full", "py-3", "text-center", "border-2", "border-[#003087]", "text-[#003087]", "rounded-lg", "hover:bg-[#003087]", "hover:text-white", "transition-colors"], [1, "text-center", "text-white", "text-opacity-60", "text-sm", "mt-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15 12a3 3 0 11-6 0 3 3 0 016 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"], [1, "p-3", "bg-red-50", "border", "border-red-200", "rounded-lg", "text-red-700", "text-sm"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-5", "w-5"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"]], template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        \u0275\u0275text(4, " \u26BD ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "h1", 4);
        \u0275\u0275text(6, "MUNDIAL 2026");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p", 5);
        \u0275\u0275text(8, "Tu plataforma para vivir el Mundial");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 6)(10, "h2", 7);
        \u0275\u0275text(11, "Iniciar Sesi\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 8)(13, "div")(14, "label", 9);
        \u0275\u0275text(15, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 10);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(17, "svg", 11);
        \u0275\u0275element(18, "path", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(19, "input", 13);
        \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_19_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.email, $event) || (ctx.email = $event);
          return $event;
        });
        \u0275\u0275listener("keyup.enter", function LoginComponent_Template_input_keyup_enter_19_listener() {
          return ctx.login();
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(20, "div")(21, "label", 9);
        \u0275\u0275text(22, "Contrase\xF1a");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "div", 10);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(24, "svg", 11);
        \u0275\u0275element(25, "rect", 14)(26, "path", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(27, "input", 16);
        \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_27_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.password, $event) || (ctx.password = $event);
          return $event;
        });
        \u0275\u0275listener("keyup.enter", function LoginComponent_Template_input_keyup_enter_27_listener() {
          return ctx.login();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "button", 17);
        \u0275\u0275listener("click", function LoginComponent_Template_button_click_28_listener() {
          return ctx.showPassword.set(!ctx.showPassword());
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(29, "svg", 18);
        \u0275\u0275template(30, LoginComponent__svg_path_30_Template, 1, 0, "path", 19)(31, LoginComponent__svg_path_31_Template, 1, 0, "path", 20)(32, LoginComponent__svg_path_32_Template, 1, 0, "path", 21);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(33, LoginComponent_div_33_Template, 2, 1, "div", 22);
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(34, "button", 23);
        \u0275\u0275listener("click", function LoginComponent_Template_button_click_34_listener() {
          return ctx.login();
        });
        \u0275\u0275template(35, LoginComponent__svg_svg_35_Template, 3, 0, "svg", 24);
        \u0275\u0275text(36);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(37, "div", 25);
        \u0275\u0275element(38, "div", 26);
        \u0275\u0275elementStart(39, "span", 27);
        \u0275\u0275text(40, "\xBFNo tienes cuenta?");
        \u0275\u0275elementEnd();
        \u0275\u0275element(41, "div", 26);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "a", 28);
        \u0275\u0275text(43, " Crear Cuenta ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(44, "p", 29);
        \u0275\u0275text(45, " \xA9 2026 Mundial Hub \u2014 Proyecto Acad\xE9mico ");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(19);
        \u0275\u0275twoWayProperty("ngModel", ctx.email);
        \u0275\u0275advance(8);
        \u0275\u0275property("type", ctx.showPassword() ? "text" : "password");
        \u0275\u0275twoWayProperty("ngModel", ctx.password);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", !ctx.showPassword());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.showPassword());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showPassword());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.error());
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.loading());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.loading() ? "Ingresando..." : "Iniciar Sesi\xF3n", " ");
      }
    }, dependencies: [CommonModule, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, RouterLink], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src\\app\\pages\\login\\login.component.ts", lineNumber: 106 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-7KEQLAPX.js.map
