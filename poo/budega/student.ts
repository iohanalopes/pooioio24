import { Mercantil } from './Mercantil';
import { Pessoa } from './Pessoa';

class Adapter {
    private mercantil: Mercantil;
    
    constructor(nCaixas: number) {
        this.mercantil = new Mercantil(nCaixas);    
    }

    arrive(nome: string): void {
        const pessoa = new Pessoa(nome);
        this.mercantil.chegar(pessoa);
    }

    call(index: number): void {
        this.mercantil.chamar(index);
    }

    finish(index: number): void {
        this.mercantil.finalizar(index);
    }

    show(): string {
        return this.mercantil.toString();
    }
}

if (require.main === module) {
    console.log("Rodando o arquivo do estudante");
}

export { Adapter };