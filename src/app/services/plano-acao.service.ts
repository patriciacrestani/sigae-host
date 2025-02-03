import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlanoAcaoService {

  constructor(private http: HttpClient) { }

  obterTotaisPlanosAcao() {
    return this.http.get('https://example.com/plano-acao/total');
  }
}

