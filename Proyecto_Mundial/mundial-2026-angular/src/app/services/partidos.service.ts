import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Match } from '../models';

const API = 'http://localhost:3000/api';

@Injectable({ providedIn: 'root' })
export class PartidosService {
  constructor(private http: HttpClient) {}

  getAll(params?: any): Observable<Match[]> {
    return this.http.get<any>(`${API}/partidos`, { params }).pipe(map(res => res.data));
  }

  getById(id: string): Observable<Match> {
    return this.http.get<any>(`${API}/partidos/${id}`).pipe(map(res => res.data));
  }

  getEventos(id: string): Observable<any[]> {
    return this.http.get<any>(`${API}/partidos/${id}/eventos`).pipe(map(res => res.data));
  }
}
