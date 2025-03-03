import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Pessoa } from '../models/pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor(private http: HttpClient) { }

  obterTotaisPessoas() {
    return this.http.get('https://example.com/pessoas/total');
  }
  
  obterPessoas() {
    return this.http.get<any>('https://example.com/pessoas').pipe(
      map(pessoas => 
        pessoas.map(p => 
          new Pessoa(p)
        )
      )
    );
  }
}

