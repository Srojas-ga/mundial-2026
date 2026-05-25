import {
  HttpClient,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-G2QLUSIR.js";

// src/app/services/auth.service.ts
var API = "http://localhost:3000/api";
var AuthService = class _AuthService {
  constructor(http) {
    this.http = http;
    this.TOKEN_KEY = "mundial2026_token";
    this.USER_KEY = "mundial2026_user";
  }
  register(nombre, email, password) {
    return this.http.post(`${API}/auth/register`, { nombre, email, password }).pipe(tap((res) => {
      if (res.success) {
        this.setSession(res.data.token, res.data.user);
      }
    }));
  }
  login(email, password) {
    return this.http.post(`${API}/auth/login`, { email, password }).pipe(tap((res) => {
      if (res.success) {
        this.setSession(res.data.token, res.data.user);
      }
    }));
  }
  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
  }
  getToken() {
    return localStorage.getItem(this.TOKEN_KEY);
  }
  getCurrentUser() {
    const raw = localStorage.getItem(this.USER_KEY);
    return raw ? JSON.parse(raw) : null;
  }
  isLoggedIn() {
    const token = this.getToken();
    if (!token)
      return false;
    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      return payload.exp * 1e3 > Date.now();
    } catch {
      return false;
    }
  }
  updateProfile(data) {
    const user = this.getCurrentUser();
    return this.http.put(`${API}/usuarios/${user?.id}`, data).pipe(tap((res) => {
      if (res.success && res.data) {
        localStorage.setItem(this.USER_KEY, JSON.stringify(res.data));
      }
    }));
  }
  updatePassword(current, newPass) {
    return this.http.put(`${API}/auth/password`, { current, newPass });
  }
  updatePreferencias(data) {
    const user = this.getCurrentUser();
    return this.http.put(`${API}/usuarios/${user?.id}/preferencias`, data);
  }
  getPreferencias() {
    const user = this.getCurrentUser();
    return this.http.get(`${API}/usuarios/${user?.id}/preferencias`);
  }
  updateStatus(estado) {
    const user = this.getCurrentUser();
    return this.http.put(`${API}/usuarios/${user?.id}/estado`, { estado });
  }
  setSession(token, user) {
    localStorage.setItem(this.TOKEN_KEY, token);
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
  }
  static {
    this.\u0275fac = function AuthService_Factory(t) {
      return new (t || _AuthService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
  }
};

export {
  AuthService
};
//# sourceMappingURL=chunk-JHTY2FGU.js.map
