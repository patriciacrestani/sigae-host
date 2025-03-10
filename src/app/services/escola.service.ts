import { loadRemoteModule } from '@angular-architects/native-federation';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Escola } from '../models/escola';

@Injectable({
    providedIn: 'root'
})
export class EscolaService {
    constructor(private http: HttpClient) {}

    async obterTotalDeEscolas(): Promise<number> {
        const remoteModule = await loadRemoteModule('cadastros', './EscolaService');
        const serviceInstance = new remoteModule.EscolaService(this.http);
        return Number(await serviceInstance.obterTotalDeEscolas());
    }

    obterEscolas() {
        return this.http.get<any>('https://example.com/escolas').pipe(map((escolas) => escolas.map((e) => new Escola(e))));
    }
}
