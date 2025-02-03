import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  constructor(private http: HttpClient) { }

  obterTotaisEventos() {
    return this.http.get('https://example.com/eventos/total');
  }
}

