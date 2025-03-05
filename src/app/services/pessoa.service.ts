import { loadRemoteModule } from '@angular-architects/native-federation';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class PessoaService {
    constructor(private http: HttpClient) {}

    async obterTotalDePessoas(): Promise<number> {
        const remoteModule = await loadRemoteModule('cadastros', './PessoaService');
        console.log(remoteModule);

        const serviceInstance = new remoteModule.PessoaService(this.http);
        return Number(await serviceInstance.obterTotalDePessoas());
    }

    obterPessoas() {
        return this.http.get('https://example.com/pessoas');
    }
}
