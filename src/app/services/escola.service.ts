import { loadRemoteModule } from '@angular-architects/native-federation';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class EscolaService {
    constructor(private http: HttpClient) {}

    async obterTotalDeEscolas(): Promise<number> {
        const remoteModule = await loadRemoteModule('cadastros', './EscolaService');
        console.log(remoteModule);

        const serviceInstance = new remoteModule.EscolaService(this.http);
        return Number(await serviceInstance.obterTotalDeEscolas());
    }

    obterEscolas() {
        return this.http.get('https://example.com/escolas');
    }
}
