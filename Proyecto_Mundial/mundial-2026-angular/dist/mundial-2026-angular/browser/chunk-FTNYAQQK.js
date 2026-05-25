import {
  HttpClient,
  map,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-G2QLUSIR.js";

// src/app/services/entradas.service.ts
var API = "http://localhost:3000/api";
var EntradasService = class _EntradasService {
  constructor(http) {
    this.http = http;
  }
  getAll() {
    return this.http.get(`${API}/entradas`).pipe(map((res) => res.data));
  }
  reservar(id) {
    return this.http.post(`${API}/entradas/${id}/reservar`, {});
  }
  transferir(id, email) {
    return this.http.post(`${API}/entradas/${id}/transferir`, { email });
  }
  static {
    this.\u0275fac = function EntradasService_Factory(t) {
      return new (t || _EntradasService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EntradasService, factory: _EntradasService.\u0275fac, providedIn: "root" });
  }
};

export {
  EntradasService
};
//# sourceMappingURL=chunk-FTNYAQQK.js.map
