import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

const API = 'http://localhost:3000/api';

@Injectable({ providedIn: 'root' })
export class AlbumService {
  constructor(private http: HttpClient) {}

  getAlbum(): Observable<any> {
    return this.http.get<any>(`${API}/album`).pipe(map(res => res.data));
  }

  getPaquetes(): Observable<any[]> {
    return this.http.get<any>(`${API}/album/paquetes`).pipe(map(res => res.data));
  }

  abrirPaquete(id: string): Observable<any[]> {
    return this.http.post<any>(`${API}/album/paquetes/${id}/abrir`, {}).pipe(map(res => res.data));
  }

  getIntercambios(): Observable<any[]> {
    return this.http.get<any>(`${API}/album/intercambios`).pipe(map(res => res.data));
  }

  createIntercambio(data: any): Observable<any> {
    return this.http.post<any>(`${API}/album/intercambios`, data);
  }

  updateIntercambio(id: string, estado: string): Observable<any> {
    return this.http.patch<any>(`${API}/album/intercambios/${id}`, { estado });
  }
}
