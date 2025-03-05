import { Endereco } from "./endereco";

export class Escola {
    id: number;
    cnpj?: string;
    nome: string;
    endereco?: Endereco;

    constructor(dados?) {
        if(!dados) return;
        this.id = dados['id'];
        this.cnpj = dados['cnpj'];
        this.nome = dados['nome'];
        this.endereco = dados['endereco'];
    }
}