import {
  HttpClient,
  map,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-G2QLUSIR.js";

// src/app/services/partidos.service.ts
var API = "http://localhost:3000/api";
var PartidosService = class _PartidosService {
  constructor(http) {
    this.http = http;
  }
  getAll(params) {
    return this.http.get(`${API}/partidos`, { params }).pipe(map((res) => res.data));
  }
  getById(id) {
    return this.http.get(`${API}/partidos/${id}`).pipe(map((res) => res.data));
  }
  getEventos(id) {
    return this.http.get(`${API}/partidos/${id}/eventos`).pipe(map((res) => res.data));
  }
  static {
    this.\u0275fac = function PartidosService_Factory(t) {
      return new (t || _PartidosService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PartidosService, factory: _PartidosService.\u0275fac, providedIn: "root" });
  }
};

export {
  PartidosService
};
//# sourceMappingURL=chunk-7DJCKAIS.js.map
