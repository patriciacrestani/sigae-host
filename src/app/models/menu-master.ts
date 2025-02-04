import { Escola } from "./escola";
import { Pessoa } from "./pessoa";

export class MenuMaster {
    escola: Escola;
    pessoa: Pessoa;

    constructor(escola, pessoa) {
        if(!!escola) {
            this.escola = escola;
        }

        if(!!pessoa) {
            this.pessoa = pessoa;
        }
    }
}