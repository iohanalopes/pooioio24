class Pessoa {
  private idade : number;
  private nome: string;

  constructor(idade: number, nome: string){
    this.idade = idade;
    this.nome = nome;
  }

  // Getters
  public getIdade() {
    return this.idade;
  }

  public getNome(){
    return this.nome;
  }

  public toString() : string {
    return `${this.idade}:${this.nome}`;
  }
}

export { Pessoa };
