import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor(private http: HttpClient) { }

  obterTotaisPessoas() {
    return this.http.get('https://example.com/pessoas/total');
  }
}

