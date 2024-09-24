// reassisti a aula do youtube para relembrar melhor e fui fazendo. consegui fazer praticamente sozinha, só tirando uma dúvida aqui outra aculá com alguém.

class Carro {
  pass: number;
  passMax: number;
  gas: number;
  gasMax: number;
  km: number;
  constructor () {
    this.pass = 0;
    this.passMax = 2;
    this.gas = 0;
    this.gasMax = 100;
    this.km = 0;
  }

  enter() {
    if (this.pass == this.passMax) {
      console.log ("fail: limite de pessoas atingido")
    } else {
      this.pass += 1;
    }
  }

  sair() {
    if(this.pass == 0) {
      console.log("fail: nao ha ninguem no carro")
    } else {
      this.pass -= 1;
    }
  }

  abastecer(qtd: number) {
    this.gas += qtd;
    if (this.gas > this.gasMax) {
      this.gas = this.gasMax
      return
    }
  }

  dirigir(dist: number) {
    if (this.pass == 0) {
     console.log("fail: nao ha ninguem no carro");
    return
    } 
    if (this.gas == 0){
      console.log ("fail: tanque vazio")
      return
    }
    if(this.gas < dist) {
      console.log (`fail: tanque vazio apos andar ${this.gas} km`)
      this.km += this.gas;
      this.gas = 0;
      return
    }
    this.gas -= dist;
    this.km += dist;
  } 


  toString() {
    return `pass: ${this.pass}, gas: ${this.gas}, km: ${this.km}`;
  }
} 

export {Carro};