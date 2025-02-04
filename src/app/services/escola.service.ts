import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EscolaService {

  constructor(private http: HttpClient) { }

  obterTotaisEscolas() {
    return this.http.get('https://example.com/escolas/total');
  }

  obterEscolas() {
    return this.http.get("https://example.com/escolas");
  }
}
