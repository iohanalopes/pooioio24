
import { Pessoa } from './Pessoa';

class Mercantil {
    private caixas: Array <Pessoa | null>;
    private filaDeEspera: Array<Pessoa>;

    constructor(qtdCaixas: number) {
        this.caixas = [];
        this.filaDeEspera = [];

        for (let i = 0; i < qtdCaixas; i++)
        this.caixas.push(null);
    }

    private verificarIndice(indice: number): boolean {
        if( indice < 0 || indice >= this.caixas.length ){
            console.log("fail: caixa inexistente");
            return false;
        }

        return true;
    }

    public chamar(indice: number): boolean {
        if(this.verificarIndice(indice) == false){
            return false;
        }

        if( this.filaDeEspera.length === 0 ){
            console.log("fail: sem clientes");
            return false;
        }

        if( this.caixas[indice] !== null ){
            console.log("fail: caixa ocupado");
            return false;
        }

        this.caixas[indice] = this.filaDeEspera.shift()!;
        return true;
    }

    public finalizar(indice: number): boolean {
        if(this.verificarIndice(indice) == false){
            return false;
        }

        if( this.caixas[indice] === null){
            console.log("fail: caixa vazio");
            return false;
        }

        this.caixas[indice] = null;

        return true;
    }

    private procurarPorNome(nome: string): number {
        for(let i = 0; i < this.filaDeEspera.length; i++){
            if(this.filaDeEspera[i].getNome() === nome){
                return i;
            }
        }

        return -1;
    }

    public furarFila(furao: Pessoa, besta: string): boolean {
        let pos = this.procurarPorNome(besta);

        if(pos != -1){
            let sairam = this.filaDeEspera.splice(pos, 1, furao);
            this.filaDeEspera.push(sairam[0]);
            return true;
        }

        return false;
    }

    public desistiu(desistente: string) {
        let pos = this.procurarPorNome(desistente);

        if(pos != -1){
            this.filaDeEspera.splice(i, 1);
        }
    }

    public chegar(pessoa: Pessoa){
        this.filaDeEspera.push(pessoa);
    }

    public toString() : string {
      const caixasStr = this.caixas.map(caixa => caixa ? caixa.getNome() : '-----').join(', ');
      const filaStr = this.filaDeEspera.map(cliente => cliente.getNome()).join(', ');
      return `Caixas: [${caixasStr}]\nEspera: [${filaStr}]`;
    }
}

export { Mercantil };