class Calculadora {
 display: number;
  bateria: number;
  bateriaMax: number;

  constructor (maximo: number) {
    this.bateria = 0;
    this.bateriaMax = maximo;
    this.display = 0
    }

  public carregar(value: number): void {
    this.bateria += value;
    if (this.bateria > this.bateriaMax) {
      this.bateria = this.bateriaMax;
    }
  }

  public soma(a: number, b: number): void {
      if (this.bateria > 0) {
        this.display = a + b;
        this.bateria -= 1;
      } else {
        console.log("fail: bateria insuficiente");
      }
    }

  public dividir(a: number,b: number): void {
    if(b == 0) {
      this.bateria -= 1;
      console.log("fail: divisao por zero");
    } else {
      if (this.bateria > 0) {
        this.display = a / b;
        this.bateria -= 1;
      } else {
        console.log("fail: bateria insuficiente");
        }
      }
  }

  toString(): string{
     return `display = ${this.display.toFixed(2)}, battery = ${this.bateria}`;

  }
}

export {Calculadora};