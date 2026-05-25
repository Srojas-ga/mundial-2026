import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Notification } from '../models';

const API = 'http://localhost:3000/api';

@Injectable({ providedIn: 'root' })
export class NotificacionesService {
  constructor(private http: HttpClient) {}

  getAll(params?: any): Observable<Notification[]> {
    return this.http.get<any>(`${API}/notificaciones`, { params }).pipe(map(res => res.data));
  }

  markAsRead(id: string): Observable<any> {
    return this.http.patch<any>(`${API}/notificaciones/${id}/leer`, {});
  }
}
