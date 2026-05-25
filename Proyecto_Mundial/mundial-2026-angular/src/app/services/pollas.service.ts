import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

const API = 'http://localhost:3000/api';

@Injectable({ providedIn: 'root' })
export class PollasService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<any[]> {
    return this.http.get<any>(`${API}/pollas`).pipe(map(res => res.data));
  }

  create(data: any): Observable<any> {
    return this.http.post<any>(`${API}/pollas`, data);
  }

  join(codigo: string): Observable<any> {
    return this.http.post<any>(`${API}/pollas/unirse`, { codigo });
  }

  getRanking(id: string): Observable<any[]> {
    return this.http.get<any>(`${API}/pollas/${id}/ranking`).pipe(map(res => res.data));
  }

  savePronosticos(id: string, pronosticos: any[]): Observable<any> {
    return this.http.post<any>(`${API}/pollas/${id}/pronosticos`, { pronosticos });
  }
}
