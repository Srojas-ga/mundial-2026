import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { User } from '../models';

const API = 'http://localhost:3000/api';

interface AuthResponse {
  success: boolean;
  data: { token: string; user: User };
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly TOKEN_KEY = 'mundial2026_token';
  private readonly USER_KEY = 'mundial2026_user';

  constructor(private http: HttpClient) {}

  register(nombre: string, email: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${API}/auth/register`, { nombre, email, password }).pipe(
      tap(res => {
        if (res.success) {
          this.setSession(res.data.token, res.data.user);
        }
      })
    );
  }

  login(email: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${API}/auth/login`, { email, password }).pipe(
      tap(res => {
        if (res.success) {
          this.setSession(res.data.token, res.data.user);
        }
      })
    );
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  getCurrentUser(): User | null {
    const raw = localStorage.getItem(this.USER_KEY);
    return raw ? JSON.parse(raw) : null;
  }

  isLoggedIn(): boolean {
    const token = this.getToken();
    if (!token) return false;
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.exp * 1000 > Date.now();
    } catch {
      return false;
    }
  }

  updateProfile(data: any): Observable<any> {
    const user = this.getCurrentUser();
    return this.http.put<any>(`${API}/usuarios/${user?.id}`, data).pipe(
      tap(res => {
        if (res.success && res.data) {
          localStorage.setItem(this.USER_KEY, JSON.stringify(res.data));
        }
      })
    );
  }

  updatePassword(current: string, newPass: string): Observable<any> {
    return this.http.put<any>(`${API}/auth/password`, { current, newPass });
  }

  updatePreferencias(data: any): Observable<any> {
    const user = this.getCurrentUser();
    return this.http.put<any>(`${API}/usuarios/${user?.id}/preferencias`, data);
  }

  getPreferencias(): Observable<any> {
    const user = this.getCurrentUser();
    return this.http.get<any>(`${API}/usuarios/${user?.id}/preferencias`);
  }

  updateStatus(estado: string): Observable<any> {
    const user = this.getCurrentUser();
    return this.http.put<any>(`${API}/usuarios/${user?.id}/estado`, { estado });
  }

  private setSession(token: string, user: User): void {
    localStorage.setItem(this.TOKEN_KEY, token);
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
  }
}
