import { Pessoa } from './pessoa';

class Motoca {
  private potencia: number;
  private tempo: number;
  private pessoa: Pessoa | null;

  constructor(potencia: number) {
    this.potencia = potencia;
    this.tempo = 0;
    this.pessoa = null;
  }

  public inserirPessoa(pessoa: Pessoa) : boolean {
    if( this.getPessoa() === null ){
      this.pessoa = pessoa;
      return true;
    } else {
      console.log("fail: busy motorcycle");
      return false;
    }
  }

  public removerPessoa() : Pessoa | null | String {
    if( this.getPessoa() === null ){
      console.log("fail: empty motorcycle");
      return "---";
    } else {
      let pessoa = this.pessoa;
      this.pessoa = null;
      return pessoa;
    }
  }

  public comprarTempo(tempo : number){
    this.tempo += tempo;
  }

  public dirigir(tempo: number){
      if (this.tempo <= 0) {
          console.log("fail: buy time first");
          return;
      }
      if (this.pessoa === null) {
          console.log("fail: empty motorcycle");
          return;
      }
      if (this.pessoa.getIdade() > 10) {
          console.log("fail: too old to drive");
          return;
      }
      if (this.tempo < tempo) {
          console.log(`fail: time finished after ${this.tempo} minutes`);
          this.tempo = 0;
          return;
      }

      this.tempo -= tempo;
  }

  public buzinar(){
    let buzina = "P";

    for(let i = 0; i < this.potencia; i++){
      buzina += "e";
    }

    buzina += "m";

    return buzina;
  }
  
  // Getters
  public getPessoa(){
    return this.pessoa;
  }
  
  public getPotencia(){
    return this.potencia;
  }
  
  public getTempo(){
    return this.tempo;
  }

  public toString() : string {
    let pessoa = "empty";
    if(this.pessoa !== null){
      pessoa = this.pessoa.toString();
    }
    return `power:${this.potencia}, time:${this.tempo}, person:(${pessoa})`;
  }
}

export { Motoca };