import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

const API = 'http://localhost:3000/api';

@Injectable({ providedIn: 'root' })
export class AgendaService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<any[]> {
    return this.http.get<any>(`${API}/agenda`).pipe(map(res => res.data));
  }

  add(partidoId: number, recordatorio: boolean = false): Observable<any> {
    return this.http.post<any>(`${API}/agenda`, { partido_id: partidoId, recordatorio });
  }

  remove(id: string): Observable<any> {
    return this.http.delete<any>(`${API}/agenda/${id}`);
  }
}
