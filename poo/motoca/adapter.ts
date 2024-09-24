import { Motoca } from "./motoca";
import { Pessoa } from './pessoa';

class Adapter {
  motoca: Motoca;

  constructor(potencia: number) {
    this.motoca = new Motoca(potencia); // Inicializa a moto com a potência fornecida
  }

  enter(idade: number, nome: string): boolean {
    let pessoa = new Pessoa(idade, nome);
    return this.motoca.inserirPessoa(pessoa); // Apenas chama o método inserir
  }

  leave(): Pessoa | null {
    return this.motoca.removerPessoa(); // Apenas chama o método remover
  }

  honk(): string {
    return this.motoca.buzinar(); // Chama o método honk e retorna o resultado
  }

  drive(time: number): void {
    return this.motoca.dirigir(time); // Chama o método drive da moto
  }

  buy(time: number): void {
    return this.motoca.comprarTempo(time); // Chama o método buyTime
  }

  toString(): string {
    return this.motoca.toString(); // Apenas chama o método toString da moto
  }
}

export { Adapter };
