import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

const API = 'http://localhost:3000/api';

@Injectable({ providedIn: 'root' })
export class EntradasService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<any[]> {
    return this.http.get<any>(`${API}/entradas`).pipe(map(res => res.data));
  }

  reservar(id: string): Observable<any> {
    return this.http.post<any>(`${API}/entradas/${id}/reservar`, {});
  }

  transferir(id: string, email: string): Observable<any> {
    return this.http.post<any>(`${API}/entradas/${id}/transferir`, { email });
  }
}
