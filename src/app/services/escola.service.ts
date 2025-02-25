import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Escola } from '../models/escola';

@Injectable({
  providedIn: 'root'
})
export class EscolaService {

  constructor(private http: HttpClient) { }

  obterTotaisEscolas() {
    return this.http.get('https://example.com/escolas/total');
  }

  obterEscolas() {
    return this.http.get<any>("https://example.com/escolas").pipe(
      map(escolas => 
        escolas.map(e => 
          new Escola(e)
        )
      )
    );
  }
}
