import { Endereco } from "./endereco";
import { Escola } from "./escola";

export class Pessoa {
    id: number;
    cpf?: string;
    nome: string;
    email?: string; 
    endereco?: Endereco; 
    escola: Escola;
}