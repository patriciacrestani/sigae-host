import { Endereco } from "./endereco";
import { Escola } from "./escola";

export class Pessoa {
    id: number;
    cpf?: string;
    nome: string;
    email?: string; 
    endereco?: Endereco; 
    escola: Escola;

    constructor(dados?) {
        if(!dados) return;

        this.id = dados['id'];
        this.cpf = dados['cpf'];
        this.nome = dados['nome'];
        this.email = dados['email'];
        this.endereco = dados['endereco'];
        this.escola = dados['escola'];
    }
}